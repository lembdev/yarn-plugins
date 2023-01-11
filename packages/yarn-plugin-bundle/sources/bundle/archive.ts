import { Project, Workspace } from '@yarnpkg/core';
import Zip from 'adm-zip';
import path from 'path';

export class Archive {
  static async make(
    project: Project,
    workspace: Workspace,
    outDir: string,
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      const targetFileName = `${workspace.computeCandidateName()}.zip`;
      const targetFilePath = path.resolve(outDir, targetFileName);

      const zip = new Zip();

      zip.addLocalFolder(path.resolve(workspace.cwd));
      zip.addLocalFolder(
        path.resolve(project.cwd, 'node_modules'),
        'node_modules',
      );
      zip.writeZip(targetFilePath, (error: Error | null) => {
        if (error) {
          reject(error);
        } else {
          resolve(`Archive path: ${targetFilePath}`);
        }
      });
    });
  }
}
