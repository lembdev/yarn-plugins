import process from 'process';
import path from 'path';
import os from 'os';
import { Option } from 'clipanion';
import { Cache, Configuration, Project, StreamReport } from '@yarnpkg/core';
import { BaseCommand } from '@yarnpkg/cli';
import { Bundle } from '../bundle/bundle';
import { Logger } from '../bundle/logger';

const DEFAULT_OUT_DIR = process.cwd();
const DEFAULT_TMP_DIR = path.resolve(os.tmpdir(), process.pid.toString());

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

  private readonly json = Option.Boolean(`--json`, false, {
    description: `flag is set the output will follow a JSON-stream output also known as NDJSON (https://github.com/ndjson/ndjson-spec)`,
  });

  private readonly targetPackages = Option.Rest();

  async execute(): Promise<number> {
    const configuration = await Configuration.find(
      this.context.cwd,
      this.context.plugins,
    );

    if (configuration.values.get('nodeLinker') !== 'node-modules') {
      throw new Error(
        'This plugin will work only if Yarn configuration option `nodeLinker` is set to `node-modules`',
      );
    }

    const cache = await Cache.find(configuration);
    const { project } = await Project.find(configuration, this.context.cwd);

    const report = await StreamReport.start(
      {
        configuration,
        stdout: this.context.stdout,
        includeWarnings: this.verbose,
        json: this.json,
      },
      async (report: StreamReport) => {
        const logger = new Logger(report);

        const bundler = new Bundle(
          logger,
          cache,
          project,
          this.tmpDir,
          this.outDir,
        );

        await bundler.bundlePackages(this.targetPackages);
      },
    );

    return report.exitCode();
  }
}

// type WorkspaceBackup = {
//   installConfig: string;
//   scripts: Map<string, string>;
//   dependencies: Map<IdentHash, Descriptor>;
//   devDependencies: Map<IdentHash, Descriptor>;
//   peerDependencies: Map<IdentHash, Descriptor>;
// };
// export default class BundleCommand extends BaseCommand {
//   static readonly paths = [[`bundle`]];

//   private readonly outDir = Option.String(`-o,--output`, DEFAULT_OUT_DIR, {
//     description: `Directory where bundles will be saved (default: current directory)`,
//   });

//   private readonly tmpDir = Option.String(`-t,--tmp`, DEFAULT_TMP_DIR, {
//     description: `Temp directory (default: system temp dir)`,
//   });

//   private readonly verbose = Option.Boolean(`-v,--verbose`, false, {
//     description: `Prefix each output line with the name of the originating workspace`,
//   });

//   private readonly json = Option.Boolean(`--json`, false, {
//     description: `flag is set the output will follow a JSON-stream output also known as NDJSON (https://github.com/ndjson/ndjson-spec)`,
//   });

//   private readonly workspaces = Option.Rest();

//   async execute(): Promise<number> {
//     const configuration = await Configuration.find(
//       this.context.cwd,
//       this.context.plugins,
//     );

//     if (configuration.values.get('nodeLinker') !== 'node-modules') {
//       throw new Error(
//         'This plugin will work only if Yarn configuration option `nodeLinker` is set to `node-modules`',
//       );
//     }

//     const cache = await Cache.find(configuration);
//     const { project } = await Project.find(configuration, this.context.cwd);

//     const report = await StreamReport.start(
//       {
//         configuration,
//         stdout: this.context.stdout,
//         includeWarnings: this.verbose,
//         json: this.json,
//       },
//       async (report: StreamReport) => {
//         const logger = new Logger(report);

//         const bundler = new Bundle(
//           logger,
//           cache,
//           project,
//           this.workspaces,
//           this.tmpDir,
//           this.outDir,
//         );

//         await bundler.execute();
//       },
//     );

//     return report.exitCode();
//   }

// Internal

// private configuration: Configuration;

// private project: Project;

// private cache: Cache;

// private modulesDir: string;

// private workspaceFocus: WorkspaceFocus;

// async execute(): Promise<number | void> {
//   await this.init();

//   const report = await this.makeStreamReport(async (report: StreamReport) => {
//     const workspacesQueue = await this.getRequiredWorkspaces();

//     for (const workspace of workspacesQueue) {
//       try {
//         const ident = structUtils.convertToIdent(workspace.locator);
//         const name = structUtils.stringifyIdent(ident);

//         await report.startTimerPromise(
//           `[${name}]: Bundling started`,
//           async () => {
//             await this.bundle(report, workspace);
//           },
//         );
//       } catch (error) {
//         report.reportError(MessageName.EXCEPTION, error);
//       }
//     }
//   });

//   return report.exitCode();
// }

// private async init(): Promise<void> {
//   this.configuration = await this.getConfiguration();
//   this.project = await this.getProject();
//   this.cache = await this.getCache();
//   this.modulesDir = path.resolve(this.project.cwd, 'node_modules');
//   this.workspaceFocus = new WorkspaceFocus(this.project, this.cache);

//   if (
//     this.project.configuration.values.get('nodeLinker') !== 'node-modules'
//   ) {
//     throw new Error(
//       'This plugin will work only if Yarn configuration option `nodeLinker` is set to `node-modules`',
//     );
//   }
// }

// private async bundle(report: StreamReport, workspace: Workspace) {
//   try {
//     await this.installWorkspaceDeps(report, workspace);
//     await this.copyPackageDeps(report);
//     await this.copySources(report, workspace);
//     await this.makeArchive(report, workspace);
//   } finally {
//     await this.clear(report);
//   }
// }

// private async installWorkspaceDeps(
//   report: StreamReport,
//   workspace: Workspace,
// ): Promise<void> {
//   const callback = async () => {
//     const requiredWorkspaces = new Set([workspace]);
//     const depsDescriptors = workspace.manifest
//       .getForScope(`dependencies`)
//       .values();

//     for (const descriptor of depsDescriptors) {
//       const matchingWorkspace =
//         this.project.tryWorkspaceByDescriptor(descriptor);

//       if (matchingWorkspace === null) continue;

//       requiredWorkspaces.add(matchingWorkspace);
//     }

//     const origWorkspacesManifests = new Map<string, WorkspaceBackup>();

//     for (const workspace of this.project.workspaces) {
//       origWorkspacesManifests.set(workspace.computeCandidateName(), {
//         installConfig: JSON.stringify(workspace.manifest.installConfig),
//         scripts: new Map(workspace.manifest.scripts),
//         dependencies: new Map(workspace.manifest.dependencies),
//         devDependencies: new Map(workspace.manifest.devDependencies),
//         peerDependencies: new Map(workspace.manifest.peerDependencies),
//       });

//       workspace.manifest.devDependencies.clear();
//       workspace.manifest.peerDependencies.clear();

//       if (!requiredWorkspaces.has(workspace)) {
//         workspace.manifest.installConfig =
//           workspace.manifest.installConfig || {};
//         workspace.manifest.installConfig.selfReferences = false;
//         workspace.manifest.dependencies.clear();
//         workspace.manifest.scripts.clear();
//       }
//     }

//     await this.project.install({
//       cache: this.cache,
//       report,
//       persistProject: false,
//     });

//     for (const workspace of this.project.workspaces) {
//       const orig = origWorkspacesManifests.get(
//         workspace.computeCandidateName(),
//       );

//       workspace.manifest.installConfig = JSON.parse(
//         orig.installConfig,
//       ) as InstallConfig | null;
//       workspace.manifest.scripts = new Map(orig.scripts);
//       workspace.manifest.dependencies = new Map(orig.dependencies);
//       workspace.manifest.devDependencies = new Map(orig.devDependencies);
//       workspace.manifest.peerDependencies = new Map(orig.peerDependencies);
//     }
//   };

//   await report.startTimerPromise('Install workspace dependencies', callback);
// }

// private async copyPackageDeps(report: StreamReport): Promise<void> {
//   const callback = async () => {
//     try {
//       const destDir = path.resolve(this.tmpDir, 'node_modules');

//       await this._copyFolder(this.modulesDir, destDir);
//     } catch (error) {
//       report.reportExceptionOnce(error);
//     }
//   };

//   await report.startTimerPromise('Copy package dependencies', callback);
// }

// private async copySources(
//   report: StreamReport,
//   workspace: Workspace,
// ): Promise<void> {
//   const callback = async () => {
//     try {
//       await this._copyFolder(workspace.cwd, this.tmpDir);

//       if (this.verbose) {
//         report.reportInfo(null, `Copy from: ${workspace.cwd}`);
//         report.reportInfo(null, `Copy to: ${this.tmpDir}`);
//       }

//       const dependedWorkspaces =
//         workspace.getRecursiveWorkspaceDependencies();

//       for (const dependedWorkspace of dependedWorkspaces) {
//         const destDir = path.resolve(
//           this.tmpDir,
//           'node_modules',
//           dependedWorkspace.manifest.raw.name,
//         );

//         if (this.verbose) {
//           report.reportInfo(null, `Copy deps from: ${dependedWorkspace.cwd}`);
//           report.reportInfo(null, `Copy deps to: ${destDir}`);
//         }

//         await this._copyFolder(dependedWorkspace.cwd, destDir);
//       }
//     } catch (error) {
//       report.reportExceptionOnce(error);
//     }
//   };

//   await report.startTimerPromise('Copy workspace source', callback);
// }

// private async makeArchive(
//   report: StreamReport,
//   workspace: Workspace,
// ): Promise<void> {
//   const callback = async () => {
//     await new Promise((resolve, reject) => {
//       const zip = new Zip();
//       const targetFileName = `${workspace.computeCandidateName()}.zip`;
//       const targetFilePath = path.resolve(this.outDir, targetFileName);

//       zip.addLocalFolder(this.tmpDir);
//       zip.writeZip(targetFilePath, (error: Error | null) => {
//         if (error) return reject(error);

//         if (this.verbose) {
//           report.reportInfo(null, `Archive path: ${targetFilePath}`);
//         }

//         return resolve(undefined);
//       });
//     });
//   };

//   await report.startTimerPromise('Make archive', callback);
// }

// private async clear(report: StreamReport): Promise<void> {
//   const callback = async () => {
//     const clearTasks = [
//       new Promise((resolve, reject) => {
//         fs.remove(this.tmpDir, (error?: Error | null) =>
//           error ? reject(error) : resolve(undefined),
//         );
//       }),
//       new Promise((resolve, reject) => {
//         fs.remove(this.modulesDir, (error?: Error | null) =>
//           error ? reject(error) : resolve(undefined),
//         );
//       }),
//     ];

//     await Promise.all(clearTasks);
//   };

//   await report.startTimerPromise(
//     'Clear temporary folder and node_modules',
//     callback,
//   );
// }

// private async getCache(): Promise<Cache> {
//   return Cache.find(this.configuration);
// }

// private async getWorkspace(): Promise<Workspace> {
//   const { workspace } = await Project.find(
//     this.configuration,
//     this.context.cwd,
//   );

//   return workspace;
// }

// private async getRequiredWorkspaces(): Promise<Set<Workspace>> {
//   if (this.targetWorkspacesList.length) {
//     return new Set(
//       this.targetWorkspacesList.map((name) =>
//         this.project.getWorkspaceByIdent(structUtils.parseIdent(name)),
//       ),
//     );
//   }

//   const cwdWorkspace = await this.getWorkspace();

//   if (!cwdWorkspace)
//     throw new WorkspaceRequiredError(this.project.cwd, this.context.cwd);

//   return new Set([cwdWorkspace]);
// }

// private getWorkspaceLogPrefix(
//   workspace: Workspace,
//   commandIndex: number,
// ): string {
//   const ident = structUtils.convertToIdent(workspace.locator);
//   const name = structUtils.stringifyIdent(ident);

//   const prefix = `[${name}]:`;

//   const colors = [`#2E86AB`, `#A23B72`, `#F18F01`, `#C73E1D`, `#CCE2A3`];
//   const colorName = colors[commandIndex % colors.length];

//   return formatUtils.pretty(this.configuration, prefix, colorName);
// }

// private makeStreamReport(
//   callback: (report: StreamReport) => Promise<void>,
// ): Promise<StreamReport> {
//   const streamReportOptions = {
//     configuration: this.configuration,
//     stdout: this.context.stdout,
//   };

//   return StreamReport.start(streamReportOptions, callback);
// }

// private async _copyFolder(from: string, to: string) {
//   return fs.copy(from, to, {
//     overwrite: false,
//     dereference: true,
//     recursive: true,
//   });
// }
// }
