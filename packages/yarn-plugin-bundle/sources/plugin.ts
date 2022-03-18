import { Plugin } from "@yarnpkg/core";

import bundle from "./commands/bundle";

export const plugin: Plugin = {
  commands: [bundle],
};
