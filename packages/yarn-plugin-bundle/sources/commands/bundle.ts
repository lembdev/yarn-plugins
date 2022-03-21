import type stream from 'stream';
import path from 'path';
import os from 'os';
import process from 'process';
import fs from 'fs-extra';
import { Option } from 'clipanion';
import { BaseCommand, WorkspaceRequiredError } from '@yarnpkg/cli';
import {
  Cache,
  Configuration,
  Project,
  StreamReport,
  structUtils,
  Workspace,
} from '@yarnpkg/core';
import { logger, ILogger } from '../common/logger';
import { execPromise } from '../common/exec-promise';
import { LoggerDecorator } from '../common/logger/logger.decorator';
import { color } from '../common/color';
import Zip from 'adm-zip';
import { tmpdir } from 'os';

import workspaceToolsPlugin from '@yarnpkg/plugin-workspace-tools';

type IPackageJson = {
  name: string;
  dependencies: { [k: string]: string };
} & { [k: string]: string };

const TMP_FOLDER = '/tmp';
const EXIT_CODE = {
  SUCCESS: 0,
  ERROR: 1,
};

class Bundler {
  constructor(
    private readonly configuration: Configuration,
    private readonly project: Project,
    private readonly workspace: Workspace,
    private readonly stdout: stream.Writable,
    private readonly tmpDir: string,
    private readonly outDir: string,
    private readonly isNdJson: boolean,
    private readonly logger: ILogger = console,
  ) {}

  async bundle(): Promise<void> {
    try {
      await this.installWorkspaceDeps();
      await this.copyPackageDeps();
      await this.copySource();
      await this.pack();
    } catch (error) {
      logger.error(error);
    } finally {
      await this.clean();
    }
  }

  private async installWorkspaceDeps(): Promise<void> {
    const cache = await Cache.find(this.configuration);
    const requiredWorkspaces = new Set([this.workspace]);

    for (const descriptor of this.workspace.manifest
      .getForScope(`dependencies`)
      .values()) {
      const matchingWorkspace =
        this.project.tryWorkspaceByDescriptor(descriptor);

      if (matchingWorkspace === null) continue;

      requiredWorkspaces.add(matchingWorkspace);
    }

    for (const workspace of this.project.workspaces) {
      if (!requiredWorkspaces.has(workspace)) {
        workspace.manifest.installConfig =
          workspace.manifest.installConfig || {};
        workspace.manifest.installConfig.selfReferences = false;
        workspace.manifest.dependencies.clear();
        workspace.manifest.scripts.clear();
      }

      workspace.manifest.devDependencies.clear();
      workspace.manifest.peerDependencies.clear();
    }

    const report = await StreamReport.start(
      {
        configuration: this.configuration,
        json: this.isNdJson,
        stdout: this.stdout,
        includeLogs: true,
      },
      async (report: StreamReport) => {
        await this.project.install({ cache, report, persistProject: false });
      },
    );

    if (report.exitCode() === 1) {
      throw new Error('Install dependencies failed');
    }
  }

  private async copyPackageDeps(): Promise<void> {}

  private async copySource(): Promise<void> {}

  private async pack(): Promise<void> {}

  private async clean(): Promise<void> {}
}

export default class BundleCommand extends WorkspacesFocus {
  static paths = [[`bundle`]];

  private outDir = Option.String(`-o,--out-dir`, process.cwd(), {
    description: `Directory where bundles will be saved (default: current directory)`,
  });

  private tmpDir = Option.String(
    `-t,--tmp-dir`,
    path.resolve(os.tmpdir(), process.pid.toString()),
    {
      description: `Temp directory (default: system temp dir)`,
    },
  );

  private isNdJson = Option.Boolean(`--json`, false, {
    description: `Format the output as an NDJSON stream`,
  });

  private isVerbose = Option.Boolean(`--verbose`, false, {
    description: `Show extra log messages`,
  });

  private isDebug = Option.Boolean(`--debug`, false, {
    description: `Do not clear tmp folder`,
  });

  private rest = Option.Rest();

  async execute(): Promise<number | void> {
    logger.setDebug(this.isDebug).setVerbose(this.isVerbose);

    const configuration = await Configuration.find(
      this.context.cwd,
      this.context.plugins,
    );
    const { project, workspace } = await Project.find(
      configuration,
      this.context.cwd,
    );

    const requiredWorkspace = this.getRequiredWorkspace(project, workspace);

    const bundler = new Bundler(
      configuration,
      project,
      requiredWorkspace,
      this.context.stdout,
      this.tmpDir,
      this.outDir,
      this.isNdJson,
      logger,
    );

    await bundler.bundle();

    // try {
    //   await this.init();

    //   await this.processDependencies();
    //   await this.makeArchive();

    //   return EXIT_CODE.SUCCESS;
    // } catch (error) {
    //   return EXIT_CODE.ERROR;
    // } finally {
    //   await this.restoreDeps();
    //   await this.clearTmp();
    // }
  }

  private getRequiredWorkspace(
    project: Project,
    workspace: Workspace,
  ): Workspace {
    if (this.rest.length) {
      return project.getWorkspaceByIdent(structUtils.parseIdent(this.rest[0]));
    }

    if (!workspace) {
      throw new WorkspaceRequiredError(project.cwd, this.context.cwd); // TODO change this
    }

    return workspace;
  }

  // private workspace: Workspace;

  // private workspacesList: Map<string, string>;

  // private targetPackageName: string;

  // private targetPackageDeps: Set<string>;

  // private tmpDir = path.resolve(TMP_FOLDER, process.pid.toString());

  // private rootDir = process.env.OLDPWD;

  // private configuration: Configuration;

  // @LoggerDecorator('Plugin initialization')
  // private async init(): Promise<void> {
  //   await this.resolveWorkspace();
  //   await this.resolveWorkspacesList();
  //   await this.resolveTargetPackageName();
  //   await this.resolveTargetPackageDeps();

  //   logger.verbose(`Tmp directory: '${this.tmpDir}'`);
  //   logger.verbose(`Root directory: '${this.rootDir}'`);
  // }

  // @LoggerDecorator('Process packages')
  // private async processDependencies(): Promise<void> {
  //   const packagesList = [this.targetPackageName, ...this.targetPackageDeps];

  //   for (const packageName of packagesList) {
  //     await this.installPackageDeps(packageName);
  //     await this.copyPackageDeps();
  //     await this.copySource(packageName);
  //   }
  // }

  // @LoggerDecorator('Make archive')
  // private async makeArchive() {
  //   return new Promise((resolve, reject) => {
  //     const zip = new Zip();
  //     const targetFileName = `${this.targetPackageName.split('/').pop()}.zip`;

  //     zip.addLocalFolder(this.tmpDir);
  //     zip.writeZip(
  //       path.resolve(this.rootDir, targetFileName),
  //       (error: Error | null) => (error ? reject(error) : resolve(undefined)),
  //     );
  //   });
  // }

  // @LoggerDecorator('Resolve workspace')
  // private async resolveWorkspace(): Promise<void> {
  //   const { workspace } = await Project.find(
  //     this.configuration,
  //     this.context.cwd,
  //   );

  //   this.workspace = workspace;
  // }

  // @LoggerDecorator('Resolve workspaces list')
  // private async resolveWorkspacesList(): Promise<void> {
  //   const packages = new Map<string, string>();

  //   const result = await execPromise('yarn workspaces list --json');

  //   result.split('\n').forEach((row) => {
  //     const { name, location } = JSON.parse(row) as {
  //       location: string;
  //       name: string;
  //     };

  //     if (location === '.') return;

  //     packages.set(name, location);
  //   });

  //   logger.verbose('Workspaces:', [...packages.keys()]);

  //   this.workspacesList = packages;
  // }

  // @LoggerDecorator('Resolve target package name')
  // private async resolveTargetPackageName(): Promise<void> {
  //   const targetPackageName = this.restOptions.length
  //     ? this.restOptions[0]
  //     : this.workspace.manifest.raw.name;

  //   if (!this.workspacesList.has(targetPackageName)) {
  //     throw new Error('Package not listed in yarn workspace packages');
  //   }

  //   logger.log(`Target package: "${targetPackageName}"`);

  //   this.targetPackageName = targetPackageName;
  // }

  // @LoggerDecorator('Resolve target package dependencies')
  // private async resolveTargetPackageDeps(): Promise<void> {
  //   const targetPackageDeps = new Set<string>();
  //   const packageLocation = this.workspacesList.get(this.targetPackageName);

  //   if (!packageLocation) {
  //     throw new Error('package not in yarn workspace');
  //   }

  //   const packageInfoPath = path.resolve(
  //     this.rootDir,
  //     packageLocation,
  //     'package.json',
  //   );

  //   logger.verbose(`Load "${color.accent(packageInfoPath)}" file`);

  //   const { dependencies } = JSON.parse(
  //     fs.readFileSync(packageInfoPath, 'utf-8'),
  //   ) as IPackageJson;

  //   if (dependencies) {
  //     Object.entries(dependencies).forEach(([depName]) => {
  //       if (this.workspacesList.has(depName)) {
  //         targetPackageDeps.add(depName);
  //       }
  //     });
  //   }

  //   if (targetPackageDeps.size) {
  //     logger.verbose('target package local dependencies:', targetPackageDeps);
  //   } else {
  //     logger.log('target package has no local dependencies');
  //   }

  //   this.targetPackageDeps = targetPackageDeps;
  // }

  // @LoggerDecorator('Install package dependencies')
  // private async installPackageDeps(packageName: string): Promise<void> {
  //   logger.verbose(`Package: ${packageName}`);

  //   const result = await execPromise(
  //     `yarn workspaces focus ${this.targetPackageName} --production`,
  //   );

  //   logger.verbose(result);
  // }

  // @LoggerDecorator('Copy package dependencies')
  // private async copyPackageDeps(): Promise<void> {
  //   const targetDir = path.resolve(this.rootDir, 'node_modules');
  //   const destDir = path.resolve(this.tmpDir, 'node_modules');

  //   logger.verbose(`Copy '${targetDir}' to '${destDir}'`);

  //   await fs.copy(targetDir, destDir, {
  //     overwrite: false,
  //     dereference: true,
  //     recursive: true,
  //   });

  //   logger.verbose(
  //     `Copy '${targetDir}' to '${destDir}' ${color.success('completed')}`,
  //   );
  // }

  // @LoggerDecorator('Copy source')
  // private async copySource(packageName: string): Promise<void> {
  //   const isTargetPackage = packageName === this.targetPackageName;
  //   const targetDir = path.resolve(
  //     this.rootDir,
  //     this.workspacesList.get(packageName),
  //   );
  //   const destDir = isTargetPackage
  //     ? this.tmpDir
  //     : path.resolve(this.tmpDir, 'node_modules', packageName);

  //   logger.verbose(`Copy '${targetDir}' to '${destDir}'`);

  //   await fs.copy(targetDir, destDir, {
  //     overwrite: false,
  //     dereference: true,
  //     recursive: true,
  //   });

  //   logger.verbose(
  //     `Copy '${targetDir}' to '${destDir}' ${color.success('completed')}`,
  //   );
  // }

  // @LoggerDecorator('Revert all dependencies')
  // private async restoreDeps(): Promise<void> {
  //   await execPromise(`yarn install`);
  // }

  // @LoggerDecorator('Clear tmp folder')
  // private async clearTmp() {
  //   return new Promise((resolve, reject) => {
  //     fs.remove(this.tmpDir, (error?: Error | null) =>
  //       error ? reject(error) : resolve(undefined),
  //     );
  //   });
  // }
}
