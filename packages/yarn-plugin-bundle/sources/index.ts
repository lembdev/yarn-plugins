import { Plugin } from '@yarnpkg/core';

import bundle from './commands/bundle.command';

export default <Plugin>{
  commands: [bundle],
};
