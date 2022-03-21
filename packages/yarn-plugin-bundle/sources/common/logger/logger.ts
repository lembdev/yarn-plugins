import type { LoggerService, LOG_LEVEL } from './logger.interface';
import { color } from './../color';
import { stringify } from '../stringify';
import { prettyDuration } from '../pretty-duration';

const CI = !!process.env.GITHUB_ACTIONS;

export interface ILogger {
  log(message: unknown, ...args: unknown[]): void;
  error(error: Error | string): void;
  debug(message: unknown, ...args: unknown[]): void;
}
class Logger implements ILogger {
  private static readonly GROUP_START = ' ┌';

  private static readonly GROUP_PROGRESS = ' │';

  private static readonly GROUP_END = ' └';

  private isDebug = false;

  private isVerbose = false;

  private groupNesting = 0;

  private groupTimers = new Map<string, number>();

  private transport: LoggerService = console;

  private isQuiet = false;

  public setQuiet(enabled: boolean): Logger {
    this.isQuiet = enabled;

    return this;
  }

  public setDebug(enabled: boolean): Logger {
    this.isDebug = enabled;

    return this;
  }

  public setVerbose(enabled: boolean): Logger {
    this.isVerbose = enabled;

    return this;
  }

  public setTransport(transport: LoggerService): Logger {
    this.transport = transport;

    return this;
  }

  public groupStart(group: string): void {
    if (this.isQuiet) return;

    if (this.isDebug) {
      this.groupTimers.set(group, new Date().getTime());
    }

    this.transport.log(`${this.nestedGroup()}${Logger.GROUP_START} ${group}`);

    this.groupNesting += 1;

    CI && this.transport.log(`::group::${group}\n`);
  }

  public groupEnd(group: string): void {
    if (this.isQuiet) return;

    CI && this.transport.log(`::endgroup::\n`);

    this.groupNesting -= 1;

    let message = `${this.nestedGroup()}${Logger.GROUP_END} Completed`;

    if (this.isDebug) {
      const duration = prettyDuration(
        new Date().getTime() - this.groupTimers.get(group),
      );

      message = `${message} in ${duration}`;
    }

    return this.transport.log(message);
  }

  public log(message: unknown, ...args: unknown[]): void {
    if (this.isQuiet) return;
    this._log('log', message, color.log);
    this._log('log', args, color.log);
  }

  public error(error: Error | string): void {
    return typeof error === 'object'
      ? this._log('error', [error.stack], color.error)
      : this._log('error', error, color.error);
  }

  public critical(message: string): void {
    // this._log('error', message, color.error);
    // process.exit(1);
  }

  public debug(message: unknown, ...args: unknown[]): void {
    // if (this.isQuiet || !this.isDebug) return;
    // this._log('log', message, color.debug);
    // this._log('log', args, color.debug);
  }

  public verbose(message: unknown, ...args: unknown[]): void {
    // if (this.isQuiet || !this.isVerbose) return;
    // this._log('log', message, color.verbose);
    // this._log('log', args, color.verbose);
  }

  private _log(
    level: LOG_LEVEL,
    message: unknown | unknown[],
    cb = (msg: string) => msg,
  ): void {
    const rows = Array.isArray(message) ? message : [message];
    const prefix = this.nestedGroup();

    rows.forEach((message) =>
      stringify(message)
        .split('\n')
        .forEach((row) => this.transport[level](`${prefix} ${cb(row)}`)),
    );
  }

  private nestedGroup(): string {
    return this.groupNesting
      ? Logger.GROUP_PROGRESS.repeat(this.groupNesting)
      : '';
  }
}

export const logger = new Logger();
