/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@lembdev/plugin-bundle",
factory: function (require) {
var plugin = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
  var __require = (x) => {
    if (typeof require !== "undefined")
      return require(x);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, {get: all[name], enumerable: true});
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? {get: () => module.default, enumerable: true} : {value: module, enumerable: true})), module);
  };

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/packages/yarn-plugin-bundle/sources/index.ts
  var sources_exports = {};
  __export(sources_exports, {
    default: () => sources_default
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/packages/yarn-plugin-bundle/sources/commands/bundle.ts
  var import_path = __toModule(__require("path"));
  var import_os = __toModule(__require("os"));
  var import_process = __toModule(__require("process"));
  var import_clipanion = __toModule(__require("clipanion"));
  var import_cli = __toModule(__require("@yarnpkg/cli"));
  var import_core = __toModule(__require("@yarnpkg/core"));

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/ansi-styles-npm-6.1.0-4f6a594d04-7a7f8528c0.zip/node_modules/ansi-styles/index.js
  var ANSI_BACKGROUND_OFFSET = 10;
  var wrapAnsi16 = (offset = 0) => (code) => `[${code + offset}m`;
  var wrapAnsi256 = (offset = 0) => (code) => `[${38 + offset};5;${code}m`;
  var wrapAnsi16m = (offset = 0) => (red, green, blue) => `[${38 + offset};2;${red};${green};${blue}m`;
  function assembleStyles() {
    const codes = new Map();
    const styles = {
      modifier: {
        reset: [0, 0],
        bold: [1, 22],
        dim: [2, 22],
        italic: [3, 23],
        underline: [4, 24],
        overline: [53, 55],
        inverse: [7, 27],
        hidden: [8, 28],
        strikethrough: [9, 29]
      },
      color: {
        black: [30, 39],
        red: [31, 39],
        green: [32, 39],
        yellow: [33, 39],
        blue: [34, 39],
        magenta: [35, 39],
        cyan: [36, 39],
        white: [37, 39],
        blackBright: [90, 39],
        redBright: [91, 39],
        greenBright: [92, 39],
        yellowBright: [93, 39],
        blueBright: [94, 39],
        magentaBright: [95, 39],
        cyanBright: [96, 39],
        whiteBright: [97, 39]
      },
      bgColor: {
        bgBlack: [40, 49],
        bgRed: [41, 49],
        bgGreen: [42, 49],
        bgYellow: [43, 49],
        bgBlue: [44, 49],
        bgMagenta: [45, 49],
        bgCyan: [46, 49],
        bgWhite: [47, 49],
        bgBlackBright: [100, 49],
        bgRedBright: [101, 49],
        bgGreenBright: [102, 49],
        bgYellowBright: [103, 49],
        bgBlueBright: [104, 49],
        bgMagentaBright: [105, 49],
        bgCyanBright: [106, 49],
        bgWhiteBright: [107, 49]
      }
    };
    styles.color.gray = styles.color.blackBright;
    styles.bgColor.bgGray = styles.bgColor.bgBlackBright;
    styles.color.grey = styles.color.blackBright;
    styles.bgColor.bgGrey = styles.bgColor.bgBlackBright;
    for (const [groupName, group] of Object.entries(styles)) {
      for (const [styleName, style] of Object.entries(group)) {
        styles[styleName] = {
          open: `[${style[0]}m`,
          close: `[${style[1]}m`
        };
        group[styleName] = styles[styleName];
        codes.set(style[0], style[1]);
      }
      Object.defineProperty(styles, groupName, {
        value: group,
        enumerable: false
      });
    }
    Object.defineProperty(styles, "codes", {
      value: codes,
      enumerable: false
    });
    styles.color.close = "[39m";
    styles.bgColor.close = "[49m";
    styles.color.ansi = wrapAnsi16();
    styles.color.ansi256 = wrapAnsi256();
    styles.color.ansi16m = wrapAnsi16m();
    styles.bgColor.ansi = wrapAnsi16(ANSI_BACKGROUND_OFFSET);
    styles.bgColor.ansi256 = wrapAnsi256(ANSI_BACKGROUND_OFFSET);
    styles.bgColor.ansi16m = wrapAnsi16m(ANSI_BACKGROUND_OFFSET);
    Object.defineProperties(styles, {
      rgbToAnsi256: {
        value: (red, green, blue) => {
          if (red === green && green === blue) {
            if (red < 8) {
              return 16;
            }
            if (red > 248) {
              return 231;
            }
            return Math.round((red - 8) / 247 * 24) + 232;
          }
          return 16 + 36 * Math.round(red / 255 * 5) + 6 * Math.round(green / 255 * 5) + Math.round(blue / 255 * 5);
        },
        enumerable: false
      },
      hexToRgb: {
        value: (hex) => {
          const matches = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(hex.toString(16));
          if (!matches) {
            return [0, 0, 0];
          }
          let {colorString} = matches.groups;
          if (colorString.length === 3) {
            colorString = colorString.split("").map((character) => character + character).join("");
          }
          const integer = Number.parseInt(colorString, 16);
          return [
            integer >> 16 & 255,
            integer >> 8 & 255,
            integer & 255
          ];
        },
        enumerable: false
      },
      hexToAnsi256: {
        value: (hex) => styles.rgbToAnsi256(...styles.hexToRgb(hex)),
        enumerable: false
      },
      ansi256ToAnsi: {
        value: (code) => {
          if (code < 8) {
            return 30 + code;
          }
          if (code < 16) {
            return 90 + (code - 8);
          }
          let red;
          let green;
          let blue;
          if (code >= 232) {
            red = ((code - 232) * 10 + 8) / 255;
            green = red;
            blue = red;
          } else {
            code -= 16;
            const remainder = code % 36;
            red = Math.floor(code / 36) / 5;
            green = Math.floor(remainder / 6) / 5;
            blue = remainder % 6 / 5;
          }
          const value = Math.max(red, green, blue) * 2;
          if (value === 0) {
            return 30;
          }
          let result = 30 + (Math.round(blue) << 2 | Math.round(green) << 1 | Math.round(red));
          if (value === 2) {
            result += 60;
          }
          return result;
        },
        enumerable: false
      },
      rgbToAnsi: {
        value: (red, green, blue) => styles.ansi256ToAnsi(styles.rgbToAnsi256(red, green, blue)),
        enumerable: false
      },
      hexToAnsi: {
        value: (hex) => styles.ansi256ToAnsi(styles.hexToAnsi256(hex)),
        enumerable: false
      }
    });
    return styles;
  }
  var ansiStyles = assembleStyles();
  var ansi_styles_default = ansiStyles;

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/packages/yarn-plugin-bundle/sources/common/color.ts
  var formatter = (msg, color2) => `${color2.open}${msg}${color2.close}`;
  var color = {
    log: (msg) => msg,
    error: (msg) => formatter(msg, ansi_styles_default.red),
    warn: (msg) => formatter(msg, ansi_styles_default.yellow),
    debug: (msg) => formatter(msg, ansi_styles_default.blue),
    verbose: (msg) => formatter(msg, ansi_styles_default.cyan),
    success: (msg) => formatter(msg, ansi_styles_default.green),
    accent: (msg) => formatter(msg, ansi_styles_default.magenta)
  };

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/packages/yarn-plugin-bundle/sources/common/stringify.ts
  var stringify = (val) => {
    if (!val) {
      return `${val}`;
    }
    if (typeof val === "function") {
      return `[ function ]`;
    }
    if (typeof val === "object") {
      if (Array.isArray(val)) {
        const arr = [];
        val.forEach(function(v) {
          arr.push(stringify(v));
        });
        return `[${arr.join(",")}]`;
      }
      const obj = [];
      for (const x in val) {
        if (val.hasOwnProperty(x)) {
          const actual = val[x];
          if (typeof actual !== "undefined") {
            obj.push(`${x}:${stringify(actual)}`);
          }
        }
      }
      return `{${obj.join(",")}}`;
    }
    return `${val}`;
  };

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/packages/yarn-plugin-bundle/sources/common/pretty-duration.ts
  var prettyDuration = (duration) => {
    if (duration > 1e3 * 60) {
      const minutes = Math.floor(duration / 1e3 / 60);
      const seconds = Math.ceil((duration - minutes * 60 * 1e3) / 1e3);
      return seconds === 0 ? `${minutes}m` : `${minutes}m ${seconds}s`;
    } else {
      const seconds = Math.floor(duration / 1e3);
      const milliseconds = duration - seconds * 1e3;
      return milliseconds === 0 ? `${seconds}s` : `${seconds}s ${milliseconds}ms`;
    }
  };

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/packages/yarn-plugin-bundle/sources/common/logger/logger.ts
  var CI = !!process.env.GITHUB_ACTIONS;
  var _Logger = class {
    constructor() {
      this.isDebug = false;
      this.isVerbose = false;
      this.groupNesting = 0;
      this.groupTimers = new Map();
      this.transport = console;
      this.isQuiet = false;
    }
    setQuiet(enabled) {
      this.isQuiet = enabled;
      return this;
    }
    setDebug(enabled) {
      this.isDebug = enabled;
      return this;
    }
    setVerbose(enabled) {
      this.isVerbose = enabled;
      return this;
    }
    setTransport(transport) {
      this.transport = transport;
      return this;
    }
    groupStart(group) {
      if (this.isQuiet)
        return;
      if (this.isDebug) {
        this.groupTimers.set(group, new Date().getTime());
      }
      this.transport.log(`${this.nestedGroup()}${_Logger.GROUP_START} ${group}`);
      this.groupNesting += 1;
      CI && this.transport.log(`::group::${group}
`);
    }
    groupEnd(group) {
      if (this.isQuiet)
        return;
      CI && this.transport.log(`::endgroup::
`);
      this.groupNesting -= 1;
      let message = `${this.nestedGroup()}${_Logger.GROUP_END} Completed`;
      if (this.isDebug) {
        const duration = prettyDuration(new Date().getTime() - this.groupTimers.get(group));
        message = `${message} in ${duration}`;
      }
      return this.transport.log(message);
    }
    log(message, ...args) {
      if (this.isQuiet)
        return;
      this._log("log", message, color.log);
      this._log("log", args, color.log);
    }
    error(error) {
      return typeof error === "object" ? this._log("error", [error.stack], color.error) : this._log("error", error, color.error);
    }
    critical(message) {
    }
    debug(message, ...args) {
    }
    verbose(message, ...args) {
    }
    _log(level, message, cb = (msg) => msg) {
      const rows = Array.isArray(message) ? message : [message];
      const prefix = this.nestedGroup();
      rows.forEach((message2) => stringify(message2).split("\n").forEach((row) => this.transport[level](`${prefix} ${cb(row)}`)));
    }
    nestedGroup() {
      return this.groupNesting ? _Logger.GROUP_PROGRESS.repeat(this.groupNesting) : "";
    }
  };
  var Logger = _Logger;
  Logger.GROUP_START = " \u250C";
  Logger.GROUP_PROGRESS = " \u2502";
  Logger.GROUP_END = " \u2514";
  var logger = new Logger();

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/packages/yarn-plugin-bundle/sources/commands/bundle.ts
  var Bundler = class {
    constructor(configuration, project, workspace, stdout, tmpDir, outDir, isNdJson, logger2 = console) {
      this.configuration = configuration;
      this.project = project;
      this.workspace = workspace;
      this.stdout = stdout;
      this.tmpDir = tmpDir;
      this.outDir = outDir;
      this.isNdJson = isNdJson;
      this.logger = logger2;
    }
    async bundle() {
      try {
        await this.installWorkspaceDeps();
        await this.copyPackageDeps();
        await this.copySource();
        await this.pack();
      } catch (error) {
        logger.error(error);
      } finally {
        await this.clean();
      }
    }
    async installWorkspaceDeps() {
      const cache = await import_core.Cache.find(this.configuration);
      const requiredWorkspaces = new Set([this.workspace]);
      for (const descriptor of this.workspace.manifest.getForScope(`dependencies`).values()) {
        const matchingWorkspace = this.project.tryWorkspaceByDescriptor(descriptor);
        if (matchingWorkspace === null)
          continue;
        requiredWorkspaces.add(matchingWorkspace);
      }
      for (const workspace of this.project.workspaces) {
        if (!requiredWorkspaces.has(workspace)) {
          workspace.manifest.installConfig = workspace.manifest.installConfig || {};
          workspace.manifest.installConfig.selfReferences = false;
          workspace.manifest.dependencies.clear();
          workspace.manifest.scripts.clear();
        }
        workspace.manifest.devDependencies.clear();
        workspace.manifest.peerDependencies.clear();
      }
      const report = await import_core.StreamReport.start({
        configuration: this.configuration,
        json: this.isNdJson,
        stdout: this.stdout,
        includeLogs: true
      }, async (report2) => {
        await this.project.install({cache, report: report2, persistProject: false});
      });
      if (report.exitCode() === 1) {
        throw new Error("Install dependencies failed");
      }
    }
    async copyPackageDeps() {
    }
    async copySource() {
    }
    async pack() {
    }
    async clean() {
    }
  };
  var BundleCommand = class extends import_cli.BaseCommand {
    constructor() {
      super(...arguments);
      this.outDir = import_clipanion.Option.String(`-o,--out-dir`, import_process.default.cwd(), {
        description: `Directory where bundles will be saved (default: current directory)`
      });
      this.tmpDir = import_clipanion.Option.String(`-t,--tmp-dir`, import_path.default.resolve(import_os.default.tmpdir(), import_process.default.pid.toString()), {
        description: `Temp directory (default: system temp dir)`
      });
      this.isNdJson = import_clipanion.Option.Boolean(`--json`, false, {
        description: `Format the output as an NDJSON stream`
      });
      this.isVerbose = import_clipanion.Option.Boolean(`--verbose`, false, {
        description: `Show extra log messages`
      });
      this.isDebug = import_clipanion.Option.Boolean(`--debug`, false, {
        description: `Do not clear tmp folder`
      });
      this.rest = import_clipanion.Option.Rest();
    }
    async execute() {
      logger.setDebug(this.isDebug).setVerbose(this.isVerbose);
      const configuration = await import_core.Configuration.find(this.context.cwd, this.context.plugins);
      const {project, workspace} = await import_core.Project.find(configuration, this.context.cwd);
      const requiredWorkspace = this.getRequiredWorkspace(project, workspace);
      const bundler = new Bundler(configuration, project, requiredWorkspace, this.context.stdout, this.tmpDir, this.outDir, this.isNdJson, logger);
      await bundler.bundle();
    }
    getRequiredWorkspace(project, workspace) {
      if (this.rest.length) {
        return project.getWorkspaceByIdent(import_core.structUtils.parseIdent(this.rest[0]));
      }
      if (!workspace) {
        throw new import_cli.WorkspaceRequiredError(project.cwd, this.context.cwd);
      }
      return workspace;
    }
  };
  BundleCommand.paths = [[`bundle`]];
  var bundle_default = BundleCommand;

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/packages/yarn-plugin-bundle/sources/plugin.ts
  var plugin = {
    commands: [bundle_default]
  };

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/packages/yarn-plugin-bundle/sources/index.ts
  var sources_default = plugin;
  return sources_exports;
})();
return plugin;
}
};
