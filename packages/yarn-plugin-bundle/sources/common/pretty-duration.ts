export const prettyDuration = (duration: number): string => {
  if (duration > 1000 * 60) {
    const minutes = Math.floor(duration / 1000 / 60);
    const seconds = Math.ceil((duration - minutes * 60 * 1000) / 1000);
    return seconds === 0 ? `${minutes}m` : `${minutes}m ${seconds}s`;
  } else {
    const seconds = Math.floor(duration / 1000);
    const milliseconds = duration - seconds * 1000;
    return milliseconds === 0 ? `${seconds}s` : `${seconds}s ${milliseconds}ms`;
  }
};
