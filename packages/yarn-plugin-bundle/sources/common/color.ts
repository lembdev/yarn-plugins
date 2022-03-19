import styles from 'ansi-styles';

const formatter = (
  msg: string,
  color: { open: string; close: string },
): string => `${color.open}${msg}${color.close}`;

export const color = {
  log: (msg: string) => msg,
  error: (msg: string) => formatter(msg, styles.red),
  warn: (msg: string) => formatter(msg, styles.yellow),
  debug: (msg: string) => formatter(msg, styles.blue),
  verbose: (msg: string) => formatter(msg, styles.cyan),
  success: (msg: string) => formatter(msg, styles.green),
  accent: (msg: string) => formatter(msg, styles.magenta),
};
