import { Cache, Project, Workspace } from '@yarnpkg/core';
import { rm } from 'fs/promises';
import { resolve } from 'path';
import { Logger } from './logger';

export class PackageDeps {
  static async install(
    workspaceRoot: Workspace,
    projectRoot: Project,
    cache: Cache,
    logger: Logger,
  ) {
    const { project } = await Project.find(
      projectRoot.configuration,
      projectRoot.cwd,
    );

    const workspace = project.getWorkspaceByIdent(workspaceRoot.locator);

    const requiredWorkspaces = new Set([workspace]);

    for (const workspace of requiredWorkspaces) {
      const dependencies = workspace.manifest
        .getForScope('dependencies')
        .values();

      for (const descriptor of dependencies) {
        const matchingWorkspace = project.tryWorkspaceByDescriptor(descriptor);

        if (matchingWorkspace === null) continue;

        requiredWorkspaces.add(matchingWorkspace);
      }
    }

    for (const workspace of project.workspaces) {
      if (requiredWorkspaces.has(workspace)) {
        workspace.manifest.devDependencies.clear();
      } else {
        workspace.manifest.installConfig =
          workspace.manifest.installConfig || {};
        workspace.manifest.installConfig.selfReferences = false;
        workspace.manifest.dependencies.clear();
        workspace.manifest.devDependencies.clear();
        workspace.manifest.peerDependencies.clear();
        workspace.manifest.scripts.clear();
      }
    }

    await project.install({
      cache,
      report: logger.getStreamReport(),
      persistProject: false,
    });

    // remove self from node_modules
    const nmSelfPath = resolve(
      project.cwd,
      'node_modules',
      `@${workspace.locator.scope}`,
      workspace.locator.name,
    );

    await rm(nmSelfPath, { recursive: true, force: true });
  }
}
