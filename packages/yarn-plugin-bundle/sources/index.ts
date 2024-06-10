import {
  Configuration,
  Plugin,
  Project,
  StreamReport,
  structUtils,
} from '@yarnpkg/core';
import { BaseCommand } from '@yarnpkg/cli';
import { Option } from 'clipanion';
import archiver from 'archiver';
import { execSync } from 'node:child_process';
import { createWriteStream } from 'node:fs';
import { join, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { Logger } from './logger';

const DEFAULT_OUT_DIR = process.cwd();
const DEFAULT_TMP_DIR = resolve(tmpdir(), process.pid.toString());

class BundleCommand extends BaseCommand {
  static paths = [[`bundle`]];

  private readonly namespaces = Option.Rest();

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

  async execute() {
    const configuration = await Configuration.find(
      this.context.cwd,
      this.context.plugins,
    );

    if (configuration.values.get('nodeLinker') !== 'node-modules') {
      throw new Error(
        'This plugin will work only if Yarn configuration option `nodeLinker` is set to `node-modules`',
      );
    }

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

        for (const namespace of this.namespaces) {
          logger.log(`Start ${namespace} workspace bundling`);
          await this.buindleWorkspaces(namespace, project, logger);
          logger.log(`Finish ${namespace} workspace bundling`);
          logger.separator();
        }
      },
    );

    return report.exitCode();
  }

  async buindleWorkspaces(
    namespace: string,
    project: Project,
    logger: Logger,
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      // Install production dependencies
      execSync(`yarn workspaces focus --production ${namespace}`, {
        stdio: 'inherit',
      });

      logger.log(`Archive ${namespace} workspace with production dependencies`);

      // Get the workspace object
      const workspace = project.getWorkspaceByIdent(
        structUtils.parseIdent(namespace),
      );

      // Get the workspace name (without the scope)
      const workspaceName = workspace.computeCandidateName();

      // Create a ZIP archive
      const output = createWriteStream(`${workspaceName}.zip`);
      const archive = archiver('zip')
        .on('warning', (err) => {
          if (err.code !== 'ENOENT') throw err;
          logger.warn(err.message);
        })
        .on('error', (err) => reject(err))
        .on('finish', () => resolve());

      // Pipe archive data to the file
      archive.pipe(output);

      // Append `node_modules` from a root directory
      archive.directory(
        join(workspace.project.topLevelWorkspace.cwd, 'node_modules'),
        'node_modules',
      );

      // Append all files from workspace except the src directory
      archive.glob('**/*', {
        cwd: workspace.cwd,
        ignore: ['src/**'],
      });

      // Finalize the archive
      archive.finalize();
    });
  }
}

const plugin: Plugin = {
  commands: [BundleCommand],
};

export default plugin;
