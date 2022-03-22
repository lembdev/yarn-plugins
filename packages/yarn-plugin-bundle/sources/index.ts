import { Plugin } from '@yarnpkg/core';

import bundle from './commands/bundle';

export default <Plugin>{
  commands: [bundle],
};
