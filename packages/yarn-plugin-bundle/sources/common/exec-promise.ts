import { spawn } from 'child_process';

const bufferToString = (buffers: Buffer[]) =>
  Buffer.concat(buffers).toString().trim();

export const execPromise = async (command: string): Promise<string> =>
  new Promise<string>((resolve, reject) => {
    const [spawnCommand, ...args] = command.split(/\s+/);
    const chunks: Buffer[] = [];
    const errorChunks: Buffer[] = [];

    const spawnProcess = spawn(spawnCommand, args);

    spawnProcess.stdout.on('data', (data) => chunks.push(data));
    spawnProcess.stderr.on('data', (data) => errorChunks.push(data));

    spawnProcess.on('error', (error) => reject(error));
    spawnProcess.on('close', (code) => {
      return code === 1
        ? reject(bufferToString(errorChunks))
        : resolve(bufferToString(chunks));
    });
  });
