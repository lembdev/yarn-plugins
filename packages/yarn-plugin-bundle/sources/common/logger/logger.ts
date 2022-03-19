import type { LoggerService, LOG_LEVEL } from './logger.interface';
import { Configuration } from '@yarnpkg/core';
import { color } from './../color';
import { stringify } from '../stringify';
import { prettyDuration } from '../pretty-duration';

const CI = !!process.env.GITHUB_ACTIONS;
const LOG_GROUP = Object.freeze({
  START: ' ┌',
  PROGRESS: ' │',
  END: ' └',
});

class Logger {
  private isDebug = false;

  private groupNesting = 0;

  private groupTimers = new Map<string, number>();

  private transport: LoggerService = console;

  private configuration: Configuration;

  public setDebug(enabled: boolean): Logger {
    this.isDebug = enabled;

    return this;
  }

  public setTransport(transport: LoggerService): Logger {
    this.transport = transport;

    return this;
  }

  public groupStart(group: string): void {
    this.groupNesting += 1;

    const preMsg = `${this.nestedGroup()}${LOG_GROUP.START}`;

    this.groupTimers.set(group, new Date().getTime());
    this.transport.log(`${preMsg} ${group}`);

    CI && this.transport.log(`::group::${group}\n`);
  }

  public groupEnd(group: string): void {
    const duration = prettyDuration(
      new Date().getTime() - this.groupTimers.get(group),
    );
    const preMsg = `${this.nestedGroup()}${LOG_GROUP.END}`;

    CI && this.transport.log(`::endgroup::\n`);
    this.transport.log(`${preMsg} Completed in ${duration}`);
    this.groupNesting -= 1;
  }

  public log(message: unknown, ...args: unknown[]): void {
    this._log('error', message, color.log);
    this._log('error', args, color.log);
  }

  public error({ message, stack }: Error): void {
    return stack
      ? this._log('error', [stack], color.error)
      : this._log('error', message, color.error);
  }

  public verbose(message: unknown, ...args: unknown[]): void {
    if (!this.isDebug) return;

    this._log('log', message, color.verbose);
    this._log('log', args, color.verbose);
  }

  private _log(
    level: LOG_LEVEL,
    message: unknown | unknown[],
    cb = (msg: string) => msg,
  ): void {
    const isNested = Array.isArray(message);
    const prefix = `${this.nestedGroup()}${LOG_GROUP.PROGRESS}`;
    const separator = isNested ? '    ∙ ' : '  ➤ ';
    const messages = isNested ? message : [message];

    messages.forEach((message) =>
      stringify(message)
        .split('\n')
        .forEach((row: string) => {
          this.transport[level](`${prefix}${separator}${cb(row)}`);
        }),
    );
  }

  private nestedGroup(): string {
    const nestingLevel = this.groupNesting - 1;

    return nestingLevel > 0 ? LOG_GROUP.PROGRESS.repeat(nestingLevel) : '';
  }
}

export const logger = new Logger();
