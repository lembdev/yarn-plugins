import process from 'process';
import path from 'path';
import os from 'os';
import fs from 'fs-extra';
import { Option } from 'clipanion';
import Zip from 'adm-zip';
import { BaseCommand, WorkspaceRequiredError } from '@yarnpkg/cli';
import {
  Cache,
  Configuration,
  Descriptor,
  formatUtils,
  IdentHash,
  MessageName,
  Project,
  StreamReport,
  structUtils,
  Workspace,
} from '@yarnpkg/core';
import { InstallConfig } from '@yarnpkg/core/lib/Manifest';

const DEFAULT_OUT_DIR = process.cwd();
const DEFAULT_TMP_DIR = path.resolve(os.tmpdir(), process.pid.toString());

type WorkspaceBackup = {
  installConfig: string;
  scripts: Map<string, string>;
  dependencies: Map<IdentHash, Descriptor>;
  devDependencies: Map<IdentHash, Descriptor>;
  peerDependencies: Map<IdentHash, Descriptor>;
};
export default class BundleCommand extends BaseCommand {
  static readonly paths = [[`bundle`]];

  private readonly outDir = Option.String(`-o,--output`, DEFAULT_OUT_DIR, {
    description: `Directory where bundles will be saved (default: current directory)`,
  });

  private readonly tmpDir = Option.String(`-t,--tmp`, DEFAULT_TMP_DIR, {
    description: `Temp directory (default: system temp dir)`,
  });

  private readonly verbose = Option.Boolean(`-v,--verbose`, false, {
    description: `Prefix each output line with the name of the originating workspace`,
  });

  private readonly targetWorkspacesList = Option.Rest();

  // Internal

  private configuration: Configuration;

  private project: Project;

  private cache: Cache;

  private modulesDir: string;

  async execute(): Promise<number | void> {
    this.configuration = await this.getConfiguration();
    this.project = await this.getProject();
    this.cache = await this.getCache();
    this.modulesDir = path.resolve(this.project.cwd, 'node_modules');

    const report = await this.makeStreamReport(async (report: StreamReport) => {
      let commandCount = 0;
      const workspacesQueue = await this.getRequiredWorkspaces();

      for (const workspace of workspacesQueue) {
        await this.bundle(report, workspace, ++commandCount);
      }
    });

    return report.exitCode();
  }

  private async bundle(
    report: StreamReport,
    workspace: Workspace,
    commandIndex: number,
  ) {
    try {
      const prefix = this.getWorkspaceLogPrefix(workspace, commandIndex);

      await report.startTimerPromise(`${prefix} Bundling started`, async () => {
        await this.installWorkspaceDeps(report, workspace);
        await this.copyPackageDeps(report);
        await this.copySources(report, workspace);
        await this.makeArchive(report, workspace);
      });
    } catch (error) {
      report.reportError(MessageName.EXCEPTION, error);
    } finally {
      await this.clear(report);
    }
  }

  private async installWorkspaceDeps(
    report: StreamReport,
    workspace: Workspace,
  ): Promise<void> {
    const callback = async () => {
      const requiredWorkspaces = new Set([workspace]);
      const depsDescriptors = workspace.manifest
        .getForScope(`dependencies`)
        .values();

      for (const descriptor of depsDescriptors) {
        const matchingWorkspace =
          this.project.tryWorkspaceByDescriptor(descriptor);

        if (matchingWorkspace === null) continue;

        requiredWorkspaces.add(matchingWorkspace);
      }

      const origWorkspacesManifests = new Map<string, WorkspaceBackup>();

      for (const workspace of this.project.workspaces) {
        origWorkspacesManifests.set(workspace.computeCandidateName(), {
          installConfig: JSON.stringify(workspace.manifest.installConfig),
          scripts: new Map(workspace.manifest.scripts),
          dependencies: new Map(workspace.manifest.dependencies),
          devDependencies: new Map(workspace.manifest.devDependencies),
          peerDependencies: new Map(workspace.manifest.peerDependencies),
        });

        workspace.manifest.devDependencies.clear();
        workspace.manifest.peerDependencies.clear();

        if (!requiredWorkspaces.has(workspace)) {
          workspace.manifest.installConfig =
            workspace.manifest.installConfig || {};
          workspace.manifest.installConfig.selfReferences = false;
          workspace.manifest.dependencies.clear();
          workspace.manifest.scripts.clear();
        }
      }

      await this.project.install({
        cache: this.cache,
        report,
        persistProject: false,
      });

      for (const workspace of this.project.workspaces) {
        const orig = origWorkspacesManifests.get(
          workspace.computeCandidateName(),
        );

        workspace.manifest.installConfig = JSON.parse(
          orig.installConfig,
        ) as InstallConfig | null;
        workspace.manifest.scripts = new Map(orig.scripts);
        workspace.manifest.dependencies = new Map(orig.dependencies);
        workspace.manifest.devDependencies = new Map(orig.devDependencies);
        workspace.manifest.peerDependencies = new Map(orig.peerDependencies);
      }
    };

    await report.startTimerPromise('Install workspace dependencies', callback);
  }

  private async copyPackageDeps(report: StreamReport): Promise<void> {
    const callback = async () => {
      try {
        const destDir = path.resolve(this.tmpDir, 'node_modules');

        await this._copyFolder(this.modulesDir, destDir);
      } catch (error) {
        report.reportExceptionOnce(error);
      }
    };

    await report.startTimerPromise('Copy package dependencies', callback);
  }

  private async copySources(
    report: StreamReport,
    workspace: Workspace,
  ): Promise<void> {
    const callback = async () => {
      try {
        await this._copyFolder(workspace.cwd, this.tmpDir);

        if (this.verbose) {
          report.reportInfo(null, `Copy from: ${workspace.cwd}`);
          report.reportInfo(null, `Copy to: ${this.tmpDir}`);
        }

        const dependedWorkspaces =
          workspace.getRecursiveWorkspaceDependencies();

        for (const dependedWorkspace of dependedWorkspaces) {
          const destDir = path.resolve(
            this.tmpDir,
            'node_modules',
            dependedWorkspace.manifest.raw.name,
          );

          if (this.verbose) {
            report.reportInfo(null, `Copy deps from: ${dependedWorkspace.cwd}`);
            report.reportInfo(null, `Copy deps to: ${destDir}`);
          }

          await this._copyFolder(dependedWorkspace.cwd, destDir);
        }
      } catch (error) {
        report.reportExceptionOnce(error);
      }
    };

    await report.startTimerPromise('Copy workspace source', callback);
  }

  private async makeArchive(
    report: StreamReport,
    workspace: Workspace,
  ): Promise<void> {
    const callback = async () => {
      await new Promise((resolve, reject) => {
        const zip = new Zip();
        const targetFileName = `${workspace.computeCandidateName()}.zip`;
        const targetFilePath = path.resolve(this.outDir, targetFileName);

        zip.addLocalFolder(this.tmpDir);
        zip.writeZip(targetFilePath, (error: Error | null) => {
          if (error) return reject(error);

          if (this.verbose) {
            report.reportInfo(null, `Archive path: ${targetFilePath}`);
          }

          return resolve(undefined);
        });
      });
    };

    await report.startTimerPromise('Make archive', callback);
  }

  private async clear(report: StreamReport): Promise<void> {
    const callback = async () => {
      const clearTasks = [
        new Promise((resolve, reject) => {
          fs.remove(this.tmpDir, (error?: Error | null) =>
            error ? reject(error) : resolve(undefined),
          );
        }),
        new Promise((resolve, reject) => {
          fs.remove(this.modulesDir, (error?: Error | null) =>
            error ? reject(error) : resolve(undefined),
          );
        }),
      ];

      await Promise.all(clearTasks);
    };

    await report.startTimerPromise(
      'Clear temporary folder and node_modules',
      callback,
    );
  }

  private async getConfiguration(): Promise<Configuration> {
    return Configuration.find(this.context.cwd, this.context.plugins);
  }

  private async getCache(): Promise<Cache> {
    return Cache.find(this.configuration);
  }

  private async getProject(): Promise<Project> {
    const { project } = await Project.find(
      this.configuration,
      this.context.cwd,
    );

    return project;
  }

  private async getWorkspace(): Promise<Workspace> {
    const { workspace } = await Project.find(
      this.configuration,
      this.context.cwd,
    );

    return workspace;
  }

  private async getRequiredWorkspaces(): Promise<Set<Workspace>> {
    if (this.targetWorkspacesList.length) {
      return new Set(
        this.targetWorkspacesList.map((name) =>
          this.project.getWorkspaceByIdent(structUtils.parseIdent(name)),
        ),
      );
    }

    const cwdWorkspace = await this.getWorkspace();

    if (!cwdWorkspace)
      throw new WorkspaceRequiredError(this.project.cwd, this.context.cwd);

    return new Set([cwdWorkspace]);
  }

  private getWorkspaceLogPrefix(workspace: Workspace, commandIndex: number) {
    if (!this.verbose) return null;

    const ident = structUtils.convertToIdent(workspace.locator);
    const name = structUtils.stringifyIdent(ident);

    const prefix = `[${name}]:`;

    const colors = [`#2E86AB`, `#A23B72`, `#F18F01`, `#C73E1D`, `#CCE2A3`];
    const colorName = colors[commandIndex % colors.length];

    return formatUtils.pretty(this.configuration, prefix, colorName);
  }

  private makeStreamReport(
    callback: (report: StreamReport) => Promise<void>,
  ): Promise<StreamReport> {
    const streamReportOptions = {
      configuration: this.configuration,
      stdout: this.context.stdout,
    };

    return StreamReport.start(streamReportOptions, callback);
  }

  private async _copyFolder(from: string, to: string) {
    return fs.copy(from, to, {
      overwrite: false,
      dereference: true,
      recursive: true,
    });
  }
}
