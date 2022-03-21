import { logger } from './logger';

export const LoggerDecorator = (group: string): MethodDecorator => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      logger.groupStart(group);
      try {
        return await originalMethod.call(this, ...args);
      } finally {
        logger.groupEnd(group);
      }
    };

    return descriptor;
  };
};
