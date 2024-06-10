import { Cache, Project, structUtils, Workspace } from '@yarnpkg/core';
import { Logger } from './logger';
import { PackageDeps } from './package-deps';
import { Archive } from './archive';

export class Bundle {
  constructor(
    private readonly logger: Logger,
    private readonly cache: Cache,
    private readonly project: Project,
    private readonly tmpDir: string,
    private readonly outDir: string,
  ) {}

  async bundlePackages(packages: string[]): Promise<void> {
    this.logger.log(`Bundle workspaces: ${packages.join(`, `)}`);

    let pkgProgress = 1;

    for (const pkg of packages) {
      await this.logger.group(
        `[${pkgProgress++}/${packages.length}]  ${pkg}`,
        async () => {
          await this.bundlePackage(pkg);
        },
      );
    }
  }

  private async bundlePackage(pkg: string) {
    try {
      const workspace = this.project.getWorkspaceByIdent(
        structUtils.parseIdent(pkg),
      );

      await this.installPackageDeps(workspace);
      await this.makeArchive(workspace);

      // await this.copyPackageDeps();
      // await this.copySources(workspace);
    } finally {
      // await this.clear(report);
    }
  }

  private async installPackageDeps(workspace: Workspace) {
    return PackageDeps.install(
      workspace,
      this.project,
      this.cache,
      this.logger,
    );
  }

  private async makeArchive(workspace: Workspace): Promise<void> {
    return Archive.make(this.project, workspace, this.outDir);
  }
}
