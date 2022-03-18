import type { LoggerService } from './logger.interface';
import { Configuration } from '@yarnpkg/core';
import { GITHUB_ACTIONS, TRAVIS, GITLAB } from 'ci-info';
import { stringify } from 'anything-to-string';
import clc from 'cli-color';
import { prettyDuration } from '../pretty-duration';

enum LOG_GROUP {
  START = ' ┌',
  PROGRESS = ' │',
  END = ' └',
}

const COLOR = Object.freeze({
  LOG: clc.cyanBright,
  ERROR: clc.red.bold,
  VERBOSE: clc.blackBright,
});

type LOG_LVL = keyof LoggerService;

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

  public setConfiguration(configuration: Configuration): Logger {
    this.configuration = configuration;
    return this;
  }

  public groupStart(group: string): void {
    this.groupNesting += 1;

    const preMsg = `${this.nestedGroup()}${LOG_GROUP.START}`;

    this.groupTimers.set(group, new Date().getTime());
    this.transport.log(`${preMsg} ${group}`);
    this.ciGroupStart(group);
  }

  public groupEnd(group: string): void {
    const duration = prettyDuration(
      new Date().getTime() - this.groupTimers.get(group),
    );
    const preMsg = `${this.nestedGroup()}${LOG_GROUP.END}`;

    this.ciGroupEnd(group);
    this.transport.log(`${preMsg} Completed in ${duration}`);
    this.groupNesting -= 1;
  }

  public log(message: unknown, ...args: unknown[]): void {
    this._log('error', message, COLOR.LOG);
    this._log('error', args, COLOR.LOG);
  }

  public error({ message, stack }: Error): void {
    if (stack) {
      this._log('error', [stack], COLOR.ERROR);
    } else {
      this._log('error', message, COLOR.ERROR);
    }
  }

  public verbose(message: unknown, ...args: unknown[]): void {
    if (!this.isDebug) return;

    this._log('log', message, COLOR.VERBOSE);
    this._log('log', args, COLOR.VERBOSE);
  }

  private ciGroupStart(group: string): void {
    switch (true) {
      case GITHUB_ACTIONS:
        return this.transport.log(`::group::${group}\n`);
      case TRAVIS:
        return this.transport.log(`travis_fold:start:${group}\n`);
      case GITLAB:
        return this.transport.log(
          `section_start:${Math.floor(Date.now() / 1000)}:${group
            .toLowerCase()
            .replace(/\W+/g, `_`)}[collapsed=true]\r\x1b[0K${group}\n`,
        );
      default:
        return;
    }
  }

  private ciGroupEnd(group: string): void {
    switch (true) {
      case GITHUB_ACTIONS:
        return this.transport.log(`::endgroup::\n`);
      case TRAVIS:
        return this.transport.log(`travis_fold:end:${group}\n`);
      case GITLAB:
        return this.transport.log(
          `section_end:${Math.floor(Date.now() / 1000)}:${group
            .toLowerCase()
            .replace(/\W+/g, `_`)}\r\x1b[0K`,
        );
      default:
        return;
    }
  }

  updatePreviousLine() {
    process.stdout.write(clc.move.up(1));
    process.stdout.write(clc.erase.line);
  }

  private _log(
    level: LOG_LVL,
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
          const msg = row.trim().replace(/["]?(.*)["]/gm, '$1');
          this.transport[level](`${prefix}${separator}${cb(msg)}`);
        }),
    );
  }

  private nestedGroup(): string {
    const nestingLevel = this.groupNesting - 1;
    return nestingLevel > 0 ? LOG_GROUP.PROGRESS.repeat(nestingLevel) : '';
  }
}

export const logger = new Logger();
