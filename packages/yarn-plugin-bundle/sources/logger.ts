import { StreamReport } from '@yarnpkg/core';

export class Logger {
  constructor(private readonly report: StreamReport) {}

  log(message: string, context?: any) {
    this.report.reportInfo(null, message);

    this.report.reportJson({
      type: 'info',
      message,
      ...context,
    });
  }

  warn(message: string, context?: any) {
    this.report.reportWarning(null, message);

    this.report.reportJson({
      type: 'warning',
      message,
      ...context,
    });
  }

  error(message: string, context?: any) {
    this.report.reportError(null, message);

    this.report.reportJson({
      type: 'error',
      message,
      ...context,
    });
  }

  async separator() {
    this.report.reportSeparator();
    this.report.reportSeparator();
  }
}
