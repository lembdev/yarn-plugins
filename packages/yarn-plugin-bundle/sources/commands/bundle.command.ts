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
