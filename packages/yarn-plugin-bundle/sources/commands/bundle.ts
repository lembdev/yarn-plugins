import process from 'process';
import path from 'path';
import fs from 'fs';
import { copy } from 'fs-extra';
import { Option } from 'clipanion';
import { BaseCommand } from '@yarnpkg/cli';
import { Configuration, Project, Workspace } from '@yarnpkg/core';
import { logger } from '../common/logger';
import { execPromise } from '../common/exec-promise';
import { LoggerDecorator } from '../common/logger/logger.decorator';
import clc from 'cli-color';
import AdmZip from 'adm-zip';
import rimraf from 'rimraf';

type IPackageJson = {
  name: string;
  dependencies: { [k: string]: string };
} & { [k: string]: string };

const TMP_FOLDER = '/tmp';
const EXIT_CODE = {
  SUCCESS: 0,
  ERROR: 1,
};

export default class BundleCommand extends BaseCommand {
  static paths = [[`bundle`]];

  private isDebug = Option.Boolean(`--debug`, false, {
    description: `Do not clear tmp folder`,
  });
  private restOptions = Option.Rest();

  private workspace: Workspace;
  private workspacesList: Map<string, string>;
  private targetPackageName: string;
  private targetPackageDeps: Set<string>;

  private tmpDir = path.resolve(TMP_FOLDER, process.pid.toString());
  private rootDir = process.env.OLDPWD;

  private configuration: Configuration;

  async execute(): Promise<number | void> {
    this.configuration = await Configuration.find(
      this.context.cwd,
      this.context.plugins,
    );

    logger.setDebug(this.isDebug).setConfiguration(this.configuration);

    try {
      await this.init();

      await this.processDependencies();
      await this.makeArchive();

      return EXIT_CODE.SUCCESS;
    } catch (error) {
      return EXIT_CODE.ERROR;
    } finally {
      await this.restoreDeps();
      await this.clearTmp();
    }
  }

  @LoggerDecorator('Plugin initialization')
  private async init() {
    await this.resolveWorkspace();
    await this.resolveWorkspacesList();
    await this.resolveTargetPackageName();
    await this.resolveTargetPackageDeps();

    logger.verbose(`Tmp directory: '${this.tmpDir}'`);
    logger.verbose(`Root directory: '${this.rootDir}'`);
  }

  @LoggerDecorator('Process packages')
  private async processDependencies() {
    const packagesList = [this.targetPackageName, ...this.targetPackageDeps];

    for (const packageName of packagesList) {
      await this.installPackageDeps(packageName);
      await this.copyPackageDeps();
      await this.copySource(packageName);
    }
  }

  @LoggerDecorator('Make archive')
  private async makeArchive() {
    return new Promise((resolve, reject) => {
      const zip = new AdmZip();
      const targetFileName = `${this.targetPackageName.split('/').pop()}.zip`;

      zip.addLocalFolder(this.tmpDir);
      zip.writeZip(
        path.resolve(this.rootDir, targetFileName),
        (error: Error | null) => (error ? reject(error) : resolve(undefined)),
      );
    });
  }

  @LoggerDecorator('Resolve workspace')
  private async resolveWorkspace(): Promise<void> {
    const { workspace } = await Project.find(
      this.configuration,
      this.context.cwd,
    );

    this.workspace = workspace;
  }

  @LoggerDecorator('Resolve workspaces list')
  private async resolveWorkspacesList(): Promise<void> {
    const packages = new Map<string, string>();

    const result = await execPromise('yarn workspaces list --json');

    result.split('\n').forEach((row) => {
      const { name, location } = JSON.parse(row) as {
        location: string;
        name: string;
      };

      if (location === '.') return;

      packages.set(name, location);
    });

    logger.verbose('Workspaces:', [...packages.keys()]);

    this.workspacesList = packages;
  }

  @LoggerDecorator('Resolve target package name')
  private async resolveTargetPackageName(): Promise<void> {
    const targetPackageName = this.restOptions.length
      ? this.restOptions[0]
      : this.workspace.manifest.raw.name;

    if (!this.workspacesList.has(targetPackageName)) {
      throw new Error('Package not listed in yarn workspace packages');
    }

    logger.log(`Target package: "${targetPackageName}"`);

    this.targetPackageName = targetPackageName;
  }

  @LoggerDecorator('Resolve target package dependencies')
  private async resolveTargetPackageDeps(): Promise<void> {
    const targetPackageDeps = new Set<string>();
    const packageLocation = this.workspacesList.get(this.targetPackageName);

    if (!packageLocation) {
      throw new Error('package not in yarn workspace');
    }

    const packageInfoPath = path.resolve(
      this.rootDir,
      packageLocation,
      'package.json',
    );

    logger.verbose(`Load "${clc.magentaBright(packageInfoPath)}" file`);

    const { dependencies } = JSON.parse(
      fs.readFileSync(packageInfoPath, 'utf-8'),
    ) as IPackageJson;

    if (dependencies) {
      Object.entries(dependencies).forEach(([depName]) => {
        if (this.workspacesList.has(depName)) {
          targetPackageDeps.add(depName);
        }
      });
    }

    if (targetPackageDeps.size) {
      console.log(targetPackageDeps);

      logger.verbose('target package local dependencies:', targetPackageDeps);
    } else {
      logger.log('target package has no local dependencies');
    }

    this.targetPackageDeps = targetPackageDeps;
  }

  @LoggerDecorator('Install package dependencies')
  private async installPackageDeps(packageName: string) {
    logger.verbose(`Package: ${packageName}`);

    const result = await execPromise(
      `yarn workspaces focus ${this.targetPackageName} --production`,
    );

    logger.verbose(result);
  }

  @LoggerDecorator('Copy package dependencies')
  private async copyPackageDeps() {
    const targetDir = path.resolve(this.rootDir, 'node_modules');
    const destDir = path.resolve(this.tmpDir, 'node_modules');

    logger.verbose(`Copy '${targetDir}' to '${destDir}'`);

    await copy(targetDir, destDir, {
      overwrite: false,
      dereference: true,
      recursive: true,
    });

    logger.verbose(
      `Copy '${targetDir}' to '${destDir}' ${clc.green('completed')}`,
    );
  }

  @LoggerDecorator('Copy source')
  private async copySource(packageName: string) {
    const isTargetPackage = packageName === this.targetPackageName;
    const targetDir = path.resolve(
      this.rootDir,
      this.workspacesList.get(packageName),
    );
    const destDir = isTargetPackage
      ? this.tmpDir
      : path.resolve(this.tmpDir, 'node_modules', packageName);

    logger.verbose(`Copy '${targetDir}' to '${destDir}'`);

    await copy(targetDir, destDir, {
      overwrite: false,
      dereference: true,
      recursive: true,
    });

    logger.verbose(
      `Copy '${targetDir}' to '${destDir}' ${clc.green('completed')}`,
    );
  }

  @LoggerDecorator('Revert all dependencies')
  private async restoreDeps() {
    await execPromise(`yarn install`);
  }

  @LoggerDecorator('Clear tmp folder')
  private async clearTmp() {
    return new Promise((resolve, reject) => {
      rimraf(this.tmpDir, (error?: Error | null) =>
        error ? reject(error) : resolve(undefined),
      );
    });
  }
}
