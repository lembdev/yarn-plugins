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
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
  var __require = (x) => {
    if (typeof require !== "undefined")
      return require(x);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  };
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = {exports: {}}).exports, mod), mod.exports;
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
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/universalify-npm-2.0.0-03b8b418a8-2406a4edf4.zip/node_modules/universalify/index.js
  var require_universalify = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/universalify-npm-2.0.0-03b8b418a8-2406a4edf4.zip/node_modules/universalify/index.js"(exports) {
      "use strict";
      exports.fromCallback = function(fn) {
        return Object.defineProperty(function(...args) {
          if (typeof args[args.length - 1] === "function")
            fn.apply(this, args);
          else {
            return new Promise((resolve, reject) => {
              fn.call(this, ...args, (err, res) => err != null ? reject(err) : resolve(res));
            });
          }
        }, "name", {value: fn.name});
      };
      exports.fromPromise = function(fn) {
        return Object.defineProperty(function(...args) {
          const cb = args[args.length - 1];
          if (typeof cb !== "function")
            return fn.apply(this, args);
          else
            fn.apply(this, args.slice(0, -1)).then((r) => cb(null, r), cb);
        }, "name", {value: fn.name});
      };
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/graceful-fs-npm-4.2.9-ee48e00aaa-68ea4e07ff.zip/node_modules/graceful-fs/polyfills.js
  var require_polyfills = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/graceful-fs-npm-4.2.9-ee48e00aaa-68ea4e07ff.zip/node_modules/graceful-fs/polyfills.js"(exports, module) {
      var constants = __require("constants");
      var origCwd = process.cwd;
      var cwd = null;
      var platform = process.env.GRACEFUL_FS_PLATFORM || process.platform;
      process.cwd = function() {
        if (!cwd)
          cwd = origCwd.call(process);
        return cwd;
      };
      try {
        process.cwd();
      } catch (er) {
      }
      if (typeof process.chdir === "function") {
        chdir = process.chdir;
        process.chdir = function(d) {
          cwd = null;
          chdir.call(process, d);
        };
        if (Object.setPrototypeOf)
          Object.setPrototypeOf(process.chdir, chdir);
      }
      var chdir;
      module.exports = patch;
      function patch(fs2) {
        if (constants.hasOwnProperty("O_SYMLINK") && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)) {
          patchLchmod(fs2);
        }
        if (!fs2.lutimes) {
          patchLutimes(fs2);
        }
        fs2.chown = chownFix(fs2.chown);
        fs2.fchown = chownFix(fs2.fchown);
        fs2.lchown = chownFix(fs2.lchown);
        fs2.chmod = chmodFix(fs2.chmod);
        fs2.fchmod = chmodFix(fs2.fchmod);
        fs2.lchmod = chmodFix(fs2.lchmod);
        fs2.chownSync = chownFixSync(fs2.chownSync);
        fs2.fchownSync = chownFixSync(fs2.fchownSync);
        fs2.lchownSync = chownFixSync(fs2.lchownSync);
        fs2.chmodSync = chmodFixSync(fs2.chmodSync);
        fs2.fchmodSync = chmodFixSync(fs2.fchmodSync);
        fs2.lchmodSync = chmodFixSync(fs2.lchmodSync);
        fs2.stat = statFix(fs2.stat);
        fs2.fstat = statFix(fs2.fstat);
        fs2.lstat = statFix(fs2.lstat);
        fs2.statSync = statFixSync(fs2.statSync);
        fs2.fstatSync = statFixSync(fs2.fstatSync);
        fs2.lstatSync = statFixSync(fs2.lstatSync);
        if (!fs2.lchmod) {
          fs2.lchmod = function(path2, mode, cb) {
            if (cb)
              process.nextTick(cb);
          };
          fs2.lchmodSync = function() {
          };
        }
        if (!fs2.lchown) {
          fs2.lchown = function(path2, uid, gid, cb) {
            if (cb)
              process.nextTick(cb);
          };
          fs2.lchownSync = function() {
          };
        }
        if (platform === "win32") {
          fs2.rename = function(fs$rename) {
            return function(from, to, cb) {
              var start = Date.now();
              var backoff = 0;
              fs$rename(from, to, function CB(er) {
                if (er && (er.code === "EACCES" || er.code === "EPERM") && Date.now() - start < 6e4) {
                  setTimeout(function() {
                    fs2.stat(to, function(stater, st) {
                      if (stater && stater.code === "ENOENT")
                        fs$rename(from, to, CB);
                      else
                        cb(er);
                    });
                  }, backoff);
                  if (backoff < 100)
                    backoff += 10;
                  return;
                }
                if (cb)
                  cb(er);
              });
            };
          }(fs2.rename);
        }
        fs2.read = function(fs$read) {
          function read(fd, buffer, offset, length, position, callback_) {
            var callback;
            if (callback_ && typeof callback_ === "function") {
              var eagCounter = 0;
              callback = function(er, _, __) {
                if (er && er.code === "EAGAIN" && eagCounter < 10) {
                  eagCounter++;
                  return fs$read.call(fs2, fd, buffer, offset, length, position, callback);
                }
                callback_.apply(this, arguments);
              };
            }
            return fs$read.call(fs2, fd, buffer, offset, length, position, callback);
          }
          if (Object.setPrototypeOf)
            Object.setPrototypeOf(read, fs$read);
          return read;
        }(fs2.read);
        fs2.readSync = function(fs$readSync) {
          return function(fd, buffer, offset, length, position) {
            var eagCounter = 0;
            while (true) {
              try {
                return fs$readSync.call(fs2, fd, buffer, offset, length, position);
              } catch (er) {
                if (er.code === "EAGAIN" && eagCounter < 10) {
                  eagCounter++;
                  continue;
                }
                throw er;
              }
            }
          };
        }(fs2.readSync);
        function patchLchmod(fs3) {
          fs3.lchmod = function(path2, mode, callback) {
            fs3.open(path2, constants.O_WRONLY | constants.O_SYMLINK, mode, function(err, fd) {
              if (err) {
                if (callback)
                  callback(err);
                return;
              }
              fs3.fchmod(fd, mode, function(err2) {
                fs3.close(fd, function(err22) {
                  if (callback)
                    callback(err2 || err22);
                });
              });
            });
          };
          fs3.lchmodSync = function(path2, mode) {
            var fd = fs3.openSync(path2, constants.O_WRONLY | constants.O_SYMLINK, mode);
            var threw = true;
            var ret;
            try {
              ret = fs3.fchmodSync(fd, mode);
              threw = false;
            } finally {
              if (threw) {
                try {
                  fs3.closeSync(fd);
                } catch (er) {
                }
              } else {
                fs3.closeSync(fd);
              }
            }
            return ret;
          };
        }
        function patchLutimes(fs3) {
          if (constants.hasOwnProperty("O_SYMLINK")) {
            fs3.lutimes = function(path2, at, mt, cb) {
              fs3.open(path2, constants.O_SYMLINK, function(er, fd) {
                if (er) {
                  if (cb)
                    cb(er);
                  return;
                }
                fs3.futimes(fd, at, mt, function(er2) {
                  fs3.close(fd, function(er22) {
                    if (cb)
                      cb(er2 || er22);
                  });
                });
              });
            };
            fs3.lutimesSync = function(path2, at, mt) {
              var fd = fs3.openSync(path2, constants.O_SYMLINK);
              var ret;
              var threw = true;
              try {
                ret = fs3.futimesSync(fd, at, mt);
                threw = false;
              } finally {
                if (threw) {
                  try {
                    fs3.closeSync(fd);
                  } catch (er) {
                  }
                } else {
                  fs3.closeSync(fd);
                }
              }
              return ret;
            };
          } else {
            fs3.lutimes = function(_a, _b, _c, cb) {
              if (cb)
                process.nextTick(cb);
            };
            fs3.lutimesSync = function() {
            };
          }
        }
        function chmodFix(orig) {
          if (!orig)
            return orig;
          return function(target, mode, cb) {
            return orig.call(fs2, target, mode, function(er) {
              if (chownErOk(er))
                er = null;
              if (cb)
                cb.apply(this, arguments);
            });
          };
        }
        function chmodFixSync(orig) {
          if (!orig)
            return orig;
          return function(target, mode) {
            try {
              return orig.call(fs2, target, mode);
            } catch (er) {
              if (!chownErOk(er))
                throw er;
            }
          };
        }
        function chownFix(orig) {
          if (!orig)
            return orig;
          return function(target, uid, gid, cb) {
            return orig.call(fs2, target, uid, gid, function(er) {
              if (chownErOk(er))
                er = null;
              if (cb)
                cb.apply(this, arguments);
            });
          };
        }
        function chownFixSync(orig) {
          if (!orig)
            return orig;
          return function(target, uid, gid) {
            try {
              return orig.call(fs2, target, uid, gid);
            } catch (er) {
              if (!chownErOk(er))
                throw er;
            }
          };
        }
        function statFix(orig) {
          if (!orig)
            return orig;
          return function(target, options, cb) {
            if (typeof options === "function") {
              cb = options;
              options = null;
            }
            function callback(er, stats) {
              if (stats) {
                if (stats.uid < 0)
                  stats.uid += 4294967296;
                if (stats.gid < 0)
                  stats.gid += 4294967296;
              }
              if (cb)
                cb.apply(this, arguments);
            }
            return options ? orig.call(fs2, target, options, callback) : orig.call(fs2, target, callback);
          };
        }
        function statFixSync(orig) {
          if (!orig)
            return orig;
          return function(target, options) {
            var stats = options ? orig.call(fs2, target, options) : orig.call(fs2, target);
            if (stats) {
              if (stats.uid < 0)
                stats.uid += 4294967296;
              if (stats.gid < 0)
                stats.gid += 4294967296;
            }
            return stats;
          };
        }
        function chownErOk(er) {
          if (!er)
            return true;
          if (er.code === "ENOSYS")
            return true;
          var nonroot = !process.getuid || process.getuid() !== 0;
          if (nonroot) {
            if (er.code === "EINVAL" || er.code === "EPERM")
              return true;
          }
          return false;
        }
      }
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/graceful-fs-npm-4.2.9-ee48e00aaa-68ea4e07ff.zip/node_modules/graceful-fs/legacy-streams.js
  var require_legacy_streams = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/graceful-fs-npm-4.2.9-ee48e00aaa-68ea4e07ff.zip/node_modules/graceful-fs/legacy-streams.js"(exports, module) {
      var Stream = __require("stream").Stream;
      module.exports = legacy;
      function legacy(fs2) {
        return {
          ReadStream,
          WriteStream
        };
        function ReadStream(path2, options) {
          if (!(this instanceof ReadStream))
            return new ReadStream(path2, options);
          Stream.call(this);
          var self = this;
          this.path = path2;
          this.fd = null;
          this.readable = true;
          this.paused = false;
          this.flags = "r";
          this.mode = 438;
          this.bufferSize = 64 * 1024;
          options = options || {};
          var keys = Object.keys(options);
          for (var index = 0, length = keys.length; index < length; index++) {
            var key = keys[index];
            this[key] = options[key];
          }
          if (this.encoding)
            this.setEncoding(this.encoding);
          if (this.start !== void 0) {
            if (typeof this.start !== "number") {
              throw TypeError("start must be a Number");
            }
            if (this.end === void 0) {
              this.end = Infinity;
            } else if (typeof this.end !== "number") {
              throw TypeError("end must be a Number");
            }
            if (this.start > this.end) {
              throw new Error("start must be <= end");
            }
            this.pos = this.start;
          }
          if (this.fd !== null) {
            process.nextTick(function() {
              self._read();
            });
            return;
          }
          fs2.open(this.path, this.flags, this.mode, function(err, fd) {
            if (err) {
              self.emit("error", err);
              self.readable = false;
              return;
            }
            self.fd = fd;
            self.emit("open", fd);
            self._read();
          });
        }
        function WriteStream(path2, options) {
          if (!(this instanceof WriteStream))
            return new WriteStream(path2, options);
          Stream.call(this);
          this.path = path2;
          this.fd = null;
          this.writable = true;
          this.flags = "w";
          this.encoding = "binary";
          this.mode = 438;
          this.bytesWritten = 0;
          options = options || {};
          var keys = Object.keys(options);
          for (var index = 0, length = keys.length; index < length; index++) {
            var key = keys[index];
            this[key] = options[key];
          }
          if (this.start !== void 0) {
            if (typeof this.start !== "number") {
              throw TypeError("start must be a Number");
            }
            if (this.start < 0) {
              throw new Error("start must be >= zero");
            }
            this.pos = this.start;
          }
          this.busy = false;
          this._queue = [];
          if (this.fd === null) {
            this._open = fs2.open;
            this._queue.push([this._open, this.path, this.flags, this.mode, void 0]);
            this.flush();
          }
        }
      }
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/graceful-fs-npm-4.2.9-ee48e00aaa-68ea4e07ff.zip/node_modules/graceful-fs/clone.js
  var require_clone = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/graceful-fs-npm-4.2.9-ee48e00aaa-68ea4e07ff.zip/node_modules/graceful-fs/clone.js"(exports, module) {
      "use strict";
      module.exports = clone;
      var getPrototypeOf = Object.getPrototypeOf || function(obj) {
        return obj.__proto__;
      };
      function clone(obj) {
        if (obj === null || typeof obj !== "object")
          return obj;
        if (obj instanceof Object)
          var copy = {__proto__: getPrototypeOf(obj)};
        else
          var copy = Object.create(null);
        Object.getOwnPropertyNames(obj).forEach(function(key) {
          Object.defineProperty(copy, key, Object.getOwnPropertyDescriptor(obj, key));
        });
        return copy;
      }
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/graceful-fs-npm-4.2.9-ee48e00aaa-68ea4e07ff.zip/node_modules/graceful-fs/graceful-fs.js
  var require_graceful_fs = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/graceful-fs-npm-4.2.9-ee48e00aaa-68ea4e07ff.zip/node_modules/graceful-fs/graceful-fs.js"(exports, module) {
      var fs2 = __require("fs");
      var polyfills = require_polyfills();
      var legacy = require_legacy_streams();
      var clone = require_clone();
      var util = __require("util");
      var gracefulQueue;
      var previousSymbol;
      if (typeof Symbol === "function" && typeof Symbol.for === "function") {
        gracefulQueue = Symbol.for("graceful-fs.queue");
        previousSymbol = Symbol.for("graceful-fs.previous");
      } else {
        gracefulQueue = "___graceful-fs.queue";
        previousSymbol = "___graceful-fs.previous";
      }
      function noop() {
      }
      function publishQueue(context, queue2) {
        Object.defineProperty(context, gracefulQueue, {
          get: function() {
            return queue2;
          }
        });
      }
      var debug = noop;
      if (util.debuglog)
        debug = util.debuglog("gfs4");
      else if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || ""))
        debug = function() {
          var m = util.format.apply(util, arguments);
          m = "GFS4: " + m.split(/\n/).join("\nGFS4: ");
          console.error(m);
        };
      if (!fs2[gracefulQueue]) {
        queue = global[gracefulQueue] || [];
        publishQueue(fs2, queue);
        fs2.close = function(fs$close) {
          function close(fd, cb) {
            return fs$close.call(fs2, fd, function(err) {
              if (!err) {
                resetQueue();
              }
              if (typeof cb === "function")
                cb.apply(this, arguments);
            });
          }
          Object.defineProperty(close, previousSymbol, {
            value: fs$close
          });
          return close;
        }(fs2.close);
        fs2.closeSync = function(fs$closeSync) {
          function closeSync(fd) {
            fs$closeSync.apply(fs2, arguments);
            resetQueue();
          }
          Object.defineProperty(closeSync, previousSymbol, {
            value: fs$closeSync
          });
          return closeSync;
        }(fs2.closeSync);
        if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || "")) {
          process.on("exit", function() {
            debug(fs2[gracefulQueue]);
            __require("assert").equal(fs2[gracefulQueue].length, 0);
          });
        }
      }
      var queue;
      if (!global[gracefulQueue]) {
        publishQueue(global, fs2[gracefulQueue]);
      }
      module.exports = patch(clone(fs2));
      if (process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !fs2.__patched) {
        module.exports = patch(fs2);
        fs2.__patched = true;
      }
      function patch(fs3) {
        polyfills(fs3);
        fs3.gracefulify = patch;
        fs3.createReadStream = createReadStream;
        fs3.createWriteStream = createWriteStream;
        var fs$readFile = fs3.readFile;
        fs3.readFile = readFile;
        function readFile(path2, options, cb) {
          if (typeof options === "function")
            cb = options, options = null;
          return go$readFile(path2, options, cb);
          function go$readFile(path3, options2, cb2, startTime) {
            return fs$readFile(path3, options2, function(err) {
              if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
                enqueue([go$readFile, [path3, options2, cb2], err, startTime || Date.now(), Date.now()]);
              else {
                if (typeof cb2 === "function")
                  cb2.apply(this, arguments);
              }
            });
          }
        }
        var fs$writeFile = fs3.writeFile;
        fs3.writeFile = writeFile;
        function writeFile(path2, data, options, cb) {
          if (typeof options === "function")
            cb = options, options = null;
          return go$writeFile(path2, data, options, cb);
          function go$writeFile(path3, data2, options2, cb2, startTime) {
            return fs$writeFile(path3, data2, options2, function(err) {
              if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
                enqueue([go$writeFile, [path3, data2, options2, cb2], err, startTime || Date.now(), Date.now()]);
              else {
                if (typeof cb2 === "function")
                  cb2.apply(this, arguments);
              }
            });
          }
        }
        var fs$appendFile = fs3.appendFile;
        if (fs$appendFile)
          fs3.appendFile = appendFile;
        function appendFile(path2, data, options, cb) {
          if (typeof options === "function")
            cb = options, options = null;
          return go$appendFile(path2, data, options, cb);
          function go$appendFile(path3, data2, options2, cb2, startTime) {
            return fs$appendFile(path3, data2, options2, function(err) {
              if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
                enqueue([go$appendFile, [path3, data2, options2, cb2], err, startTime || Date.now(), Date.now()]);
              else {
                if (typeof cb2 === "function")
                  cb2.apply(this, arguments);
              }
            });
          }
        }
        var fs$copyFile = fs3.copyFile;
        if (fs$copyFile)
          fs3.copyFile = copyFile;
        function copyFile(src, dest, flags, cb) {
          if (typeof flags === "function") {
            cb = flags;
            flags = 0;
          }
          return go$copyFile(src, dest, flags, cb);
          function go$copyFile(src2, dest2, flags2, cb2, startTime) {
            return fs$copyFile(src2, dest2, flags2, function(err) {
              if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
                enqueue([go$copyFile, [src2, dest2, flags2, cb2], err, startTime || Date.now(), Date.now()]);
              else {
                if (typeof cb2 === "function")
                  cb2.apply(this, arguments);
              }
            });
          }
        }
        var fs$readdir = fs3.readdir;
        fs3.readdir = readdir;
        function readdir(path2, options, cb) {
          if (typeof options === "function")
            cb = options, options = null;
          return go$readdir(path2, options, cb);
          function go$readdir(path3, options2, cb2, startTime) {
            return fs$readdir(path3, options2, function(err, files) {
              if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
                enqueue([go$readdir, [path3, options2, cb2], err, startTime || Date.now(), Date.now()]);
              else {
                if (files && files.sort)
                  files.sort();
                if (typeof cb2 === "function")
                  cb2.call(this, err, files);
              }
            });
          }
        }
        if (process.version.substr(0, 4) === "v0.8") {
          var legStreams = legacy(fs3);
          ReadStream = legStreams.ReadStream;
          WriteStream = legStreams.WriteStream;
        }
        var fs$ReadStream = fs3.ReadStream;
        if (fs$ReadStream) {
          ReadStream.prototype = Object.create(fs$ReadStream.prototype);
          ReadStream.prototype.open = ReadStream$open;
        }
        var fs$WriteStream = fs3.WriteStream;
        if (fs$WriteStream) {
          WriteStream.prototype = Object.create(fs$WriteStream.prototype);
          WriteStream.prototype.open = WriteStream$open;
        }
        Object.defineProperty(fs3, "ReadStream", {
          get: function() {
            return ReadStream;
          },
          set: function(val) {
            ReadStream = val;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(fs3, "WriteStream", {
          get: function() {
            return WriteStream;
          },
          set: function(val) {
            WriteStream = val;
          },
          enumerable: true,
          configurable: true
        });
        var FileReadStream = ReadStream;
        Object.defineProperty(fs3, "FileReadStream", {
          get: function() {
            return FileReadStream;
          },
          set: function(val) {
            FileReadStream = val;
          },
          enumerable: true,
          configurable: true
        });
        var FileWriteStream = WriteStream;
        Object.defineProperty(fs3, "FileWriteStream", {
          get: function() {
            return FileWriteStream;
          },
          set: function(val) {
            FileWriteStream = val;
          },
          enumerable: true,
          configurable: true
        });
        function ReadStream(path2, options) {
          if (this instanceof ReadStream)
            return fs$ReadStream.apply(this, arguments), this;
          else
            return ReadStream.apply(Object.create(ReadStream.prototype), arguments);
        }
        function ReadStream$open() {
          var that = this;
          open(that.path, that.flags, that.mode, function(err, fd) {
            if (err) {
              if (that.autoClose)
                that.destroy();
              that.emit("error", err);
            } else {
              that.fd = fd;
              that.emit("open", fd);
              that.read();
            }
          });
        }
        function WriteStream(path2, options) {
          if (this instanceof WriteStream)
            return fs$WriteStream.apply(this, arguments), this;
          else
            return WriteStream.apply(Object.create(WriteStream.prototype), arguments);
        }
        function WriteStream$open() {
          var that = this;
          open(that.path, that.flags, that.mode, function(err, fd) {
            if (err) {
              that.destroy();
              that.emit("error", err);
            } else {
              that.fd = fd;
              that.emit("open", fd);
            }
          });
        }
        function createReadStream(path2, options) {
          return new fs3.ReadStream(path2, options);
        }
        function createWriteStream(path2, options) {
          return new fs3.WriteStream(path2, options);
        }
        var fs$open = fs3.open;
        fs3.open = open;
        function open(path2, flags, mode, cb) {
          if (typeof mode === "function")
            cb = mode, mode = null;
          return go$open(path2, flags, mode, cb);
          function go$open(path3, flags2, mode2, cb2, startTime) {
            return fs$open(path3, flags2, mode2, function(err, fd) {
              if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
                enqueue([go$open, [path3, flags2, mode2, cb2], err, startTime || Date.now(), Date.now()]);
              else {
                if (typeof cb2 === "function")
                  cb2.apply(this, arguments);
              }
            });
          }
        }
        return fs3;
      }
      function enqueue(elem) {
        debug("ENQUEUE", elem[0].name, elem[1]);
        fs2[gracefulQueue].push(elem);
        retry();
      }
      var retryTimer;
      function resetQueue() {
        var now = Date.now();
        for (var i = 0; i < fs2[gracefulQueue].length; ++i) {
          if (fs2[gracefulQueue][i].length > 2) {
            fs2[gracefulQueue][i][3] = now;
            fs2[gracefulQueue][i][4] = now;
          }
        }
        retry();
      }
      function retry() {
        clearTimeout(retryTimer);
        retryTimer = void 0;
        if (fs2[gracefulQueue].length === 0)
          return;
        var elem = fs2[gracefulQueue].shift();
        var fn = elem[0];
        var args = elem[1];
        var err = elem[2];
        var startTime = elem[3];
        var lastTime = elem[4];
        if (startTime === void 0) {
          debug("RETRY", fn.name, args);
          fn.apply(null, args);
        } else if (Date.now() - startTime >= 6e4) {
          debug("TIMEOUT", fn.name, args);
          var cb = args.pop();
          if (typeof cb === "function")
            cb.call(null, err);
        } else {
          var sinceAttempt = Date.now() - lastTime;
          var sinceStart = Math.max(lastTime - startTime, 1);
          var desiredDelay = Math.min(sinceStart * 1.2, 100);
          if (sinceAttempt >= desiredDelay) {
            debug("RETRY", fn.name, args);
            fn.apply(null, args.concat([startTime]));
          } else {
            fs2[gracefulQueue].push(elem);
          }
        }
        if (retryTimer === void 0) {
          retryTimer = setTimeout(retry, 0);
        }
      }
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/fs/index.js
  var require_fs = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/fs/index.js"(exports) {
      "use strict";
      var u = require_universalify().fromCallback;
      var fs2 = require_graceful_fs();
      var api = [
        "access",
        "appendFile",
        "chmod",
        "chown",
        "close",
        "copyFile",
        "fchmod",
        "fchown",
        "fdatasync",
        "fstat",
        "fsync",
        "ftruncate",
        "futimes",
        "lchmod",
        "lchown",
        "link",
        "lstat",
        "mkdir",
        "mkdtemp",
        "open",
        "opendir",
        "readdir",
        "readFile",
        "readlink",
        "realpath",
        "rename",
        "rm",
        "rmdir",
        "stat",
        "symlink",
        "truncate",
        "unlink",
        "utimes",
        "writeFile"
      ].filter((key) => {
        return typeof fs2[key] === "function";
      });
      Object.assign(exports, fs2);
      api.forEach((method) => {
        exports[method] = u(fs2[method]);
      });
      exports.realpath.native = u(fs2.realpath.native);
      exports.exists = function(filename, callback) {
        if (typeof callback === "function") {
          return fs2.exists(filename, callback);
        }
        return new Promise((resolve) => {
          return fs2.exists(filename, resolve);
        });
      };
      exports.read = function(fd, buffer, offset, length, position, callback) {
        if (typeof callback === "function") {
          return fs2.read(fd, buffer, offset, length, position, callback);
        }
        return new Promise((resolve, reject) => {
          fs2.read(fd, buffer, offset, length, position, (err, bytesRead, buffer2) => {
            if (err)
              return reject(err);
            resolve({bytesRead, buffer: buffer2});
          });
        });
      };
      exports.write = function(fd, buffer, ...args) {
        if (typeof args[args.length - 1] === "function") {
          return fs2.write(fd, buffer, ...args);
        }
        return new Promise((resolve, reject) => {
          fs2.write(fd, buffer, ...args, (err, bytesWritten, buffer2) => {
            if (err)
              return reject(err);
            resolve({bytesWritten, buffer: buffer2});
          });
        });
      };
      if (typeof fs2.writev === "function") {
        exports.writev = function(fd, buffers, ...args) {
          if (typeof args[args.length - 1] === "function") {
            return fs2.writev(fd, buffers, ...args);
          }
          return new Promise((resolve, reject) => {
            fs2.writev(fd, buffers, ...args, (err, bytesWritten, buffers2) => {
              if (err)
                return reject(err);
              resolve({bytesWritten, buffers: buffers2});
            });
          });
        };
      }
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/mkdirs/utils.js
  var require_utils = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/mkdirs/utils.js"(exports, module) {
      "use strict";
      var path2 = __require("path");
      module.exports.checkPath = function checkPath(pth) {
        if (process.platform === "win32") {
          const pathHasInvalidWinCharacters = /[<>:"|?*]/.test(pth.replace(path2.parse(pth).root, ""));
          if (pathHasInvalidWinCharacters) {
            const error = new Error(`Path contains invalid characters: ${pth}`);
            error.code = "EINVAL";
            throw error;
          }
        }
      };
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/mkdirs/make-dir.js
  var require_make_dir = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/mkdirs/make-dir.js"(exports, module) {
      "use strict";
      var fs2 = require_fs();
      var {checkPath} = require_utils();
      var getMode = (options) => {
        const defaults = {mode: 511};
        if (typeof options === "number")
          return options;
        return __spreadValues(__spreadValues({}, defaults), options).mode;
      };
      module.exports.makeDir = async (dir, options) => {
        checkPath(dir);
        return fs2.mkdir(dir, {
          mode: getMode(options),
          recursive: true
        });
      };
      module.exports.makeDirSync = (dir, options) => {
        checkPath(dir);
        return fs2.mkdirSync(dir, {
          mode: getMode(options),
          recursive: true
        });
      };
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/mkdirs/index.js
  var require_mkdirs = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/mkdirs/index.js"(exports, module) {
      "use strict";
      var u = require_universalify().fromPromise;
      var {makeDir: _makeDir, makeDirSync} = require_make_dir();
      var makeDir = u(_makeDir);
      module.exports = {
        mkdirs: makeDir,
        mkdirsSync: makeDirSync,
        mkdirp: makeDir,
        mkdirpSync: makeDirSync,
        ensureDir: makeDir,
        ensureDirSync: makeDirSync
      };
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/path-exists/index.js
  var require_path_exists = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/path-exists/index.js"(exports, module) {
      "use strict";
      var u = require_universalify().fromPromise;
      var fs2 = require_fs();
      function pathExists(path2) {
        return fs2.access(path2).then(() => true).catch(() => false);
      }
      module.exports = {
        pathExists: u(pathExists),
        pathExistsSync: fs2.existsSync
      };
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/util/utimes.js
  var require_utimes = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/util/utimes.js"(exports, module) {
      "use strict";
      var fs2 = require_graceful_fs();
      function utimesMillis(path2, atime, mtime, callback) {
        fs2.open(path2, "r+", (err, fd) => {
          if (err)
            return callback(err);
          fs2.futimes(fd, atime, mtime, (futimesErr) => {
            fs2.close(fd, (closeErr) => {
              if (callback)
                callback(futimesErr || closeErr);
            });
          });
        });
      }
      function utimesMillisSync(path2, atime, mtime) {
        const fd = fs2.openSync(path2, "r+");
        fs2.futimesSync(fd, atime, mtime);
        return fs2.closeSync(fd);
      }
      module.exports = {
        utimesMillis,
        utimesMillisSync
      };
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/util/stat.js
  var require_stat = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/util/stat.js"(exports, module) {
      "use strict";
      var fs2 = require_fs();
      var path2 = __require("path");
      var util = __require("util");
      function getStats(src, dest, opts) {
        const statFunc = opts.dereference ? (file) => fs2.stat(file, {bigint: true}) : (file) => fs2.lstat(file, {bigint: true});
        return Promise.all([
          statFunc(src),
          statFunc(dest).catch((err) => {
            if (err.code === "ENOENT")
              return null;
            throw err;
          })
        ]).then(([srcStat, destStat]) => ({srcStat, destStat}));
      }
      function getStatsSync(src, dest, opts) {
        let destStat;
        const statFunc = opts.dereference ? (file) => fs2.statSync(file, {bigint: true}) : (file) => fs2.lstatSync(file, {bigint: true});
        const srcStat = statFunc(src);
        try {
          destStat = statFunc(dest);
        } catch (err) {
          if (err.code === "ENOENT")
            return {srcStat, destStat: null};
          throw err;
        }
        return {srcStat, destStat};
      }
      function checkPaths(src, dest, funcName, opts, cb) {
        util.callbackify(getStats)(src, dest, opts, (err, stats) => {
          if (err)
            return cb(err);
          const {srcStat, destStat} = stats;
          if (destStat) {
            if (areIdentical(srcStat, destStat)) {
              const srcBaseName = path2.basename(src);
              const destBaseName = path2.basename(dest);
              if (funcName === "move" && srcBaseName !== destBaseName && srcBaseName.toLowerCase() === destBaseName.toLowerCase()) {
                return cb(null, {srcStat, destStat, isChangingCase: true});
              }
              return cb(new Error("Source and destination must not be the same."));
            }
            if (srcStat.isDirectory() && !destStat.isDirectory()) {
              return cb(new Error(`Cannot overwrite non-directory '${dest}' with directory '${src}'.`));
            }
            if (!srcStat.isDirectory() && destStat.isDirectory()) {
              return cb(new Error(`Cannot overwrite directory '${dest}' with non-directory '${src}'.`));
            }
          }
          if (srcStat.isDirectory() && isSrcSubdir(src, dest)) {
            return cb(new Error(errMsg(src, dest, funcName)));
          }
          return cb(null, {srcStat, destStat});
        });
      }
      function checkPathsSync(src, dest, funcName, opts) {
        const {srcStat, destStat} = getStatsSync(src, dest, opts);
        if (destStat) {
          if (areIdentical(srcStat, destStat)) {
            const srcBaseName = path2.basename(src);
            const destBaseName = path2.basename(dest);
            if (funcName === "move" && srcBaseName !== destBaseName && srcBaseName.toLowerCase() === destBaseName.toLowerCase()) {
              return {srcStat, destStat, isChangingCase: true};
            }
            throw new Error("Source and destination must not be the same.");
          }
          if (srcStat.isDirectory() && !destStat.isDirectory()) {
            throw new Error(`Cannot overwrite non-directory '${dest}' with directory '${src}'.`);
          }
          if (!srcStat.isDirectory() && destStat.isDirectory()) {
            throw new Error(`Cannot overwrite directory '${dest}' with non-directory '${src}'.`);
          }
        }
        if (srcStat.isDirectory() && isSrcSubdir(src, dest)) {
          throw new Error(errMsg(src, dest, funcName));
        }
        return {srcStat, destStat};
      }
      function checkParentPaths(src, srcStat, dest, funcName, cb) {
        const srcParent = path2.resolve(path2.dirname(src));
        const destParent = path2.resolve(path2.dirname(dest));
        if (destParent === srcParent || destParent === path2.parse(destParent).root)
          return cb();
        fs2.stat(destParent, {bigint: true}, (err, destStat) => {
          if (err) {
            if (err.code === "ENOENT")
              return cb();
            return cb(err);
          }
          if (areIdentical(srcStat, destStat)) {
            return cb(new Error(errMsg(src, dest, funcName)));
          }
          return checkParentPaths(src, srcStat, destParent, funcName, cb);
        });
      }
      function checkParentPathsSync(src, srcStat, dest, funcName) {
        const srcParent = path2.resolve(path2.dirname(src));
        const destParent = path2.resolve(path2.dirname(dest));
        if (destParent === srcParent || destParent === path2.parse(destParent).root)
          return;
        let destStat;
        try {
          destStat = fs2.statSync(destParent, {bigint: true});
        } catch (err) {
          if (err.code === "ENOENT")
            return;
          throw err;
        }
        if (areIdentical(srcStat, destStat)) {
          throw new Error(errMsg(src, dest, funcName));
        }
        return checkParentPathsSync(src, srcStat, destParent, funcName);
      }
      function areIdentical(srcStat, destStat) {
        return destStat.ino && destStat.dev && destStat.ino === srcStat.ino && destStat.dev === srcStat.dev;
      }
      function isSrcSubdir(src, dest) {
        const srcArr = path2.resolve(src).split(path2.sep).filter((i) => i);
        const destArr = path2.resolve(dest).split(path2.sep).filter((i) => i);
        return srcArr.reduce((acc, cur, i) => acc && destArr[i] === cur, true);
      }
      function errMsg(src, dest, funcName) {
        return `Cannot ${funcName} '${src}' to a subdirectory of itself, '${dest}'.`;
      }
      module.exports = {
        checkPaths,
        checkPathsSync,
        checkParentPaths,
        checkParentPathsSync,
        isSrcSubdir,
        areIdentical
      };
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/copy/copy.js
  var require_copy = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/copy/copy.js"(exports, module) {
      "use strict";
      var fs2 = require_graceful_fs();
      var path2 = __require("path");
      var mkdirs = require_mkdirs().mkdirs;
      var pathExists = require_path_exists().pathExists;
      var utimesMillis = require_utimes().utimesMillis;
      var stat = require_stat();
      function copy(src, dest, opts, cb) {
        if (typeof opts === "function" && !cb) {
          cb = opts;
          opts = {};
        } else if (typeof opts === "function") {
          opts = {filter: opts};
        }
        cb = cb || function() {
        };
        opts = opts || {};
        opts.clobber = "clobber" in opts ? !!opts.clobber : true;
        opts.overwrite = "overwrite" in opts ? !!opts.overwrite : opts.clobber;
        if (opts.preserveTimestamps && process.arch === "ia32") {
          console.warn(`fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;

    see https://github.com/jprichardson/node-fs-extra/issues/269`);
        }
        stat.checkPaths(src, dest, "copy", opts, (err, stats) => {
          if (err)
            return cb(err);
          const {srcStat, destStat} = stats;
          stat.checkParentPaths(src, srcStat, dest, "copy", (err2) => {
            if (err2)
              return cb(err2);
            if (opts.filter)
              return handleFilter(checkParentDir, destStat, src, dest, opts, cb);
            return checkParentDir(destStat, src, dest, opts, cb);
          });
        });
      }
      function checkParentDir(destStat, src, dest, opts, cb) {
        const destParent = path2.dirname(dest);
        pathExists(destParent, (err, dirExists) => {
          if (err)
            return cb(err);
          if (dirExists)
            return getStats(destStat, src, dest, opts, cb);
          mkdirs(destParent, (err2) => {
            if (err2)
              return cb(err2);
            return getStats(destStat, src, dest, opts, cb);
          });
        });
      }
      function handleFilter(onInclude, destStat, src, dest, opts, cb) {
        Promise.resolve(opts.filter(src, dest)).then((include) => {
          if (include)
            return onInclude(destStat, src, dest, opts, cb);
          return cb();
        }, (error) => cb(error));
      }
      function startCopy(destStat, src, dest, opts, cb) {
        if (opts.filter)
          return handleFilter(getStats, destStat, src, dest, opts, cb);
        return getStats(destStat, src, dest, opts, cb);
      }
      function getStats(destStat, src, dest, opts, cb) {
        const stat2 = opts.dereference ? fs2.stat : fs2.lstat;
        stat2(src, (err, srcStat) => {
          if (err)
            return cb(err);
          if (srcStat.isDirectory())
            return onDir(srcStat, destStat, src, dest, opts, cb);
          else if (srcStat.isFile() || srcStat.isCharacterDevice() || srcStat.isBlockDevice())
            return onFile(srcStat, destStat, src, dest, opts, cb);
          else if (srcStat.isSymbolicLink())
            return onLink(destStat, src, dest, opts, cb);
          else if (srcStat.isSocket())
            return cb(new Error(`Cannot copy a socket file: ${src}`));
          else if (srcStat.isFIFO())
            return cb(new Error(`Cannot copy a FIFO pipe: ${src}`));
          return cb(new Error(`Unknown file: ${src}`));
        });
      }
      function onFile(srcStat, destStat, src, dest, opts, cb) {
        if (!destStat)
          return copyFile(srcStat, src, dest, opts, cb);
        return mayCopyFile(srcStat, src, dest, opts, cb);
      }
      function mayCopyFile(srcStat, src, dest, opts, cb) {
        if (opts.overwrite) {
          fs2.unlink(dest, (err) => {
            if (err)
              return cb(err);
            return copyFile(srcStat, src, dest, opts, cb);
          });
        } else if (opts.errorOnExist) {
          return cb(new Error(`'${dest}' already exists`));
        } else
          return cb();
      }
      function copyFile(srcStat, src, dest, opts, cb) {
        fs2.copyFile(src, dest, (err) => {
          if (err)
            return cb(err);
          if (opts.preserveTimestamps)
            return handleTimestampsAndMode(srcStat.mode, src, dest, cb);
          return setDestMode(dest, srcStat.mode, cb);
        });
      }
      function handleTimestampsAndMode(srcMode, src, dest, cb) {
        if (fileIsNotWritable(srcMode)) {
          return makeFileWritable(dest, srcMode, (err) => {
            if (err)
              return cb(err);
            return setDestTimestampsAndMode(srcMode, src, dest, cb);
          });
        }
        return setDestTimestampsAndMode(srcMode, src, dest, cb);
      }
      function fileIsNotWritable(srcMode) {
        return (srcMode & 128) === 0;
      }
      function makeFileWritable(dest, srcMode, cb) {
        return setDestMode(dest, srcMode | 128, cb);
      }
      function setDestTimestampsAndMode(srcMode, src, dest, cb) {
        setDestTimestamps(src, dest, (err) => {
          if (err)
            return cb(err);
          return setDestMode(dest, srcMode, cb);
        });
      }
      function setDestMode(dest, srcMode, cb) {
        return fs2.chmod(dest, srcMode, cb);
      }
      function setDestTimestamps(src, dest, cb) {
        fs2.stat(src, (err, updatedSrcStat) => {
          if (err)
            return cb(err);
          return utimesMillis(dest, updatedSrcStat.atime, updatedSrcStat.mtime, cb);
        });
      }
      function onDir(srcStat, destStat, src, dest, opts, cb) {
        if (!destStat)
          return mkDirAndCopy(srcStat.mode, src, dest, opts, cb);
        return copyDir(src, dest, opts, cb);
      }
      function mkDirAndCopy(srcMode, src, dest, opts, cb) {
        fs2.mkdir(dest, (err) => {
          if (err)
            return cb(err);
          copyDir(src, dest, opts, (err2) => {
            if (err2)
              return cb(err2);
            return setDestMode(dest, srcMode, cb);
          });
        });
      }
      function copyDir(src, dest, opts, cb) {
        fs2.readdir(src, (err, items) => {
          if (err)
            return cb(err);
          return copyDirItems(items, src, dest, opts, cb);
        });
      }
      function copyDirItems(items, src, dest, opts, cb) {
        const item = items.pop();
        if (!item)
          return cb();
        return copyDirItem(items, item, src, dest, opts, cb);
      }
      function copyDirItem(items, item, src, dest, opts, cb) {
        const srcItem = path2.join(src, item);
        const destItem = path2.join(dest, item);
        stat.checkPaths(srcItem, destItem, "copy", opts, (err, stats) => {
          if (err)
            return cb(err);
          const {destStat} = stats;
          startCopy(destStat, srcItem, destItem, opts, (err2) => {
            if (err2)
              return cb(err2);
            return copyDirItems(items, src, dest, opts, cb);
          });
        });
      }
      function onLink(destStat, src, dest, opts, cb) {
        fs2.readlink(src, (err, resolvedSrc) => {
          if (err)
            return cb(err);
          if (opts.dereference) {
            resolvedSrc = path2.resolve(process.cwd(), resolvedSrc);
          }
          if (!destStat) {
            return fs2.symlink(resolvedSrc, dest, cb);
          } else {
            fs2.readlink(dest, (err2, resolvedDest) => {
              if (err2) {
                if (err2.code === "EINVAL" || err2.code === "UNKNOWN")
                  return fs2.symlink(resolvedSrc, dest, cb);
                return cb(err2);
              }
              if (opts.dereference) {
                resolvedDest = path2.resolve(process.cwd(), resolvedDest);
              }
              if (stat.isSrcSubdir(resolvedSrc, resolvedDest)) {
                return cb(new Error(`Cannot copy '${resolvedSrc}' to a subdirectory of itself, '${resolvedDest}'.`));
              }
              if (destStat.isDirectory() && stat.isSrcSubdir(resolvedDest, resolvedSrc)) {
                return cb(new Error(`Cannot overwrite '${resolvedDest}' with '${resolvedSrc}'.`));
              }
              return copyLink(resolvedSrc, dest, cb);
            });
          }
        });
      }
      function copyLink(resolvedSrc, dest, cb) {
        fs2.unlink(dest, (err) => {
          if (err)
            return cb(err);
          return fs2.symlink(resolvedSrc, dest, cb);
        });
      }
      module.exports = copy;
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/copy/copy-sync.js
  var require_copy_sync = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/copy/copy-sync.js"(exports, module) {
      "use strict";
      var fs2 = require_graceful_fs();
      var path2 = __require("path");
      var mkdirsSync = require_mkdirs().mkdirsSync;
      var utimesMillisSync = require_utimes().utimesMillisSync;
      var stat = require_stat();
      function copySync(src, dest, opts) {
        if (typeof opts === "function") {
          opts = {filter: opts};
        }
        opts = opts || {};
        opts.clobber = "clobber" in opts ? !!opts.clobber : true;
        opts.overwrite = "overwrite" in opts ? !!opts.overwrite : opts.clobber;
        if (opts.preserveTimestamps && process.arch === "ia32") {
          console.warn(`fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;

    see https://github.com/jprichardson/node-fs-extra/issues/269`);
        }
        const {srcStat, destStat} = stat.checkPathsSync(src, dest, "copy", opts);
        stat.checkParentPathsSync(src, srcStat, dest, "copy");
        return handleFilterAndCopy(destStat, src, dest, opts);
      }
      function handleFilterAndCopy(destStat, src, dest, opts) {
        if (opts.filter && !opts.filter(src, dest))
          return;
        const destParent = path2.dirname(dest);
        if (!fs2.existsSync(destParent))
          mkdirsSync(destParent);
        return getStats(destStat, src, dest, opts);
      }
      function startCopy(destStat, src, dest, opts) {
        if (opts.filter && !opts.filter(src, dest))
          return;
        return getStats(destStat, src, dest, opts);
      }
      function getStats(destStat, src, dest, opts) {
        const statSync = opts.dereference ? fs2.statSync : fs2.lstatSync;
        const srcStat = statSync(src);
        if (srcStat.isDirectory())
          return onDir(srcStat, destStat, src, dest, opts);
        else if (srcStat.isFile() || srcStat.isCharacterDevice() || srcStat.isBlockDevice())
          return onFile(srcStat, destStat, src, dest, opts);
        else if (srcStat.isSymbolicLink())
          return onLink(destStat, src, dest, opts);
        else if (srcStat.isSocket())
          throw new Error(`Cannot copy a socket file: ${src}`);
        else if (srcStat.isFIFO())
          throw new Error(`Cannot copy a FIFO pipe: ${src}`);
        throw new Error(`Unknown file: ${src}`);
      }
      function onFile(srcStat, destStat, src, dest, opts) {
        if (!destStat)
          return copyFile(srcStat, src, dest, opts);
        return mayCopyFile(srcStat, src, dest, opts);
      }
      function mayCopyFile(srcStat, src, dest, opts) {
        if (opts.overwrite) {
          fs2.unlinkSync(dest);
          return copyFile(srcStat, src, dest, opts);
        } else if (opts.errorOnExist) {
          throw new Error(`'${dest}' already exists`);
        }
      }
      function copyFile(srcStat, src, dest, opts) {
        fs2.copyFileSync(src, dest);
        if (opts.preserveTimestamps)
          handleTimestamps(srcStat.mode, src, dest);
        return setDestMode(dest, srcStat.mode);
      }
      function handleTimestamps(srcMode, src, dest) {
        if (fileIsNotWritable(srcMode))
          makeFileWritable(dest, srcMode);
        return setDestTimestamps(src, dest);
      }
      function fileIsNotWritable(srcMode) {
        return (srcMode & 128) === 0;
      }
      function makeFileWritable(dest, srcMode) {
        return setDestMode(dest, srcMode | 128);
      }
      function setDestMode(dest, srcMode) {
        return fs2.chmodSync(dest, srcMode);
      }
      function setDestTimestamps(src, dest) {
        const updatedSrcStat = fs2.statSync(src);
        return utimesMillisSync(dest, updatedSrcStat.atime, updatedSrcStat.mtime);
      }
      function onDir(srcStat, destStat, src, dest, opts) {
        if (!destStat)
          return mkDirAndCopy(srcStat.mode, src, dest, opts);
        return copyDir(src, dest, opts);
      }
      function mkDirAndCopy(srcMode, src, dest, opts) {
        fs2.mkdirSync(dest);
        copyDir(src, dest, opts);
        return setDestMode(dest, srcMode);
      }
      function copyDir(src, dest, opts) {
        fs2.readdirSync(src).forEach((item) => copyDirItem(item, src, dest, opts));
      }
      function copyDirItem(item, src, dest, opts) {
        const srcItem = path2.join(src, item);
        const destItem = path2.join(dest, item);
        const {destStat} = stat.checkPathsSync(srcItem, destItem, "copy", opts);
        return startCopy(destStat, srcItem, destItem, opts);
      }
      function onLink(destStat, src, dest, opts) {
        let resolvedSrc = fs2.readlinkSync(src);
        if (opts.dereference) {
          resolvedSrc = path2.resolve(process.cwd(), resolvedSrc);
        }
        if (!destStat) {
          return fs2.symlinkSync(resolvedSrc, dest);
        } else {
          let resolvedDest;
          try {
            resolvedDest = fs2.readlinkSync(dest);
          } catch (err) {
            if (err.code === "EINVAL" || err.code === "UNKNOWN")
              return fs2.symlinkSync(resolvedSrc, dest);
            throw err;
          }
          if (opts.dereference) {
            resolvedDest = path2.resolve(process.cwd(), resolvedDest);
          }
          if (stat.isSrcSubdir(resolvedSrc, resolvedDest)) {
            throw new Error(`Cannot copy '${resolvedSrc}' to a subdirectory of itself, '${resolvedDest}'.`);
          }
          if (fs2.statSync(dest).isDirectory() && stat.isSrcSubdir(resolvedDest, resolvedSrc)) {
            throw new Error(`Cannot overwrite '${resolvedDest}' with '${resolvedSrc}'.`);
          }
          return copyLink(resolvedSrc, dest);
        }
      }
      function copyLink(resolvedSrc, dest) {
        fs2.unlinkSync(dest);
        return fs2.symlinkSync(resolvedSrc, dest);
      }
      module.exports = copySync;
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/copy/index.js
  var require_copy2 = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/copy/index.js"(exports, module) {
      "use strict";
      var u = require_universalify().fromCallback;
      module.exports = {
        copy: u(require_copy()),
        copySync: require_copy_sync()
      };
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/remove/rimraf.js
  var require_rimraf = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/remove/rimraf.js"(exports, module) {
      "use strict";
      var fs2 = require_graceful_fs();
      var path2 = __require("path");
      var assert = __require("assert");
      var isWindows = process.platform === "win32";
      function defaults(options) {
        const methods = [
          "unlink",
          "chmod",
          "stat",
          "lstat",
          "rmdir",
          "readdir"
        ];
        methods.forEach((m) => {
          options[m] = options[m] || fs2[m];
          m = m + "Sync";
          options[m] = options[m] || fs2[m];
        });
        options.maxBusyTries = options.maxBusyTries || 3;
      }
      function rimraf(p, options, cb) {
        let busyTries = 0;
        if (typeof options === "function") {
          cb = options;
          options = {};
        }
        assert(p, "rimraf: missing path");
        assert.strictEqual(typeof p, "string", "rimraf: path should be a string");
        assert.strictEqual(typeof cb, "function", "rimraf: callback function required");
        assert(options, "rimraf: invalid options argument provided");
        assert.strictEqual(typeof options, "object", "rimraf: options should be object");
        defaults(options);
        rimraf_(p, options, function CB(er) {
          if (er) {
            if ((er.code === "EBUSY" || er.code === "ENOTEMPTY" || er.code === "EPERM") && busyTries < options.maxBusyTries) {
              busyTries++;
              const time = busyTries * 100;
              return setTimeout(() => rimraf_(p, options, CB), time);
            }
            if (er.code === "ENOENT")
              er = null;
          }
          cb(er);
        });
      }
      function rimraf_(p, options, cb) {
        assert(p);
        assert(options);
        assert(typeof cb === "function");
        options.lstat(p, (er, st) => {
          if (er && er.code === "ENOENT") {
            return cb(null);
          }
          if (er && er.code === "EPERM" && isWindows) {
            return fixWinEPERM(p, options, er, cb);
          }
          if (st && st.isDirectory()) {
            return rmdir(p, options, er, cb);
          }
          options.unlink(p, (er2) => {
            if (er2) {
              if (er2.code === "ENOENT") {
                return cb(null);
              }
              if (er2.code === "EPERM") {
                return isWindows ? fixWinEPERM(p, options, er2, cb) : rmdir(p, options, er2, cb);
              }
              if (er2.code === "EISDIR") {
                return rmdir(p, options, er2, cb);
              }
            }
            return cb(er2);
          });
        });
      }
      function fixWinEPERM(p, options, er, cb) {
        assert(p);
        assert(options);
        assert(typeof cb === "function");
        options.chmod(p, 438, (er2) => {
          if (er2) {
            cb(er2.code === "ENOENT" ? null : er);
          } else {
            options.stat(p, (er3, stats) => {
              if (er3) {
                cb(er3.code === "ENOENT" ? null : er);
              } else if (stats.isDirectory()) {
                rmdir(p, options, er, cb);
              } else {
                options.unlink(p, cb);
              }
            });
          }
        });
      }
      function fixWinEPERMSync(p, options, er) {
        let stats;
        assert(p);
        assert(options);
        try {
          options.chmodSync(p, 438);
        } catch (er2) {
          if (er2.code === "ENOENT") {
            return;
          } else {
            throw er;
          }
        }
        try {
          stats = options.statSync(p);
        } catch (er3) {
          if (er3.code === "ENOENT") {
            return;
          } else {
            throw er;
          }
        }
        if (stats.isDirectory()) {
          rmdirSync(p, options, er);
        } else {
          options.unlinkSync(p);
        }
      }
      function rmdir(p, options, originalEr, cb) {
        assert(p);
        assert(options);
        assert(typeof cb === "function");
        options.rmdir(p, (er) => {
          if (er && (er.code === "ENOTEMPTY" || er.code === "EEXIST" || er.code === "EPERM")) {
            rmkids(p, options, cb);
          } else if (er && er.code === "ENOTDIR") {
            cb(originalEr);
          } else {
            cb(er);
          }
        });
      }
      function rmkids(p, options, cb) {
        assert(p);
        assert(options);
        assert(typeof cb === "function");
        options.readdir(p, (er, files) => {
          if (er)
            return cb(er);
          let n = files.length;
          let errState;
          if (n === 0)
            return options.rmdir(p, cb);
          files.forEach((f) => {
            rimraf(path2.join(p, f), options, (er2) => {
              if (errState) {
                return;
              }
              if (er2)
                return cb(errState = er2);
              if (--n === 0) {
                options.rmdir(p, cb);
              }
            });
          });
        });
      }
      function rimrafSync(p, options) {
        let st;
        options = options || {};
        defaults(options);
        assert(p, "rimraf: missing path");
        assert.strictEqual(typeof p, "string", "rimraf: path should be a string");
        assert(options, "rimraf: missing options");
        assert.strictEqual(typeof options, "object", "rimraf: options should be object");
        try {
          st = options.lstatSync(p);
        } catch (er) {
          if (er.code === "ENOENT") {
            return;
          }
          if (er.code === "EPERM" && isWindows) {
            fixWinEPERMSync(p, options, er);
          }
        }
        try {
          if (st && st.isDirectory()) {
            rmdirSync(p, options, null);
          } else {
            options.unlinkSync(p);
          }
        } catch (er) {
          if (er.code === "ENOENT") {
            return;
          } else if (er.code === "EPERM") {
            return isWindows ? fixWinEPERMSync(p, options, er) : rmdirSync(p, options, er);
          } else if (er.code !== "EISDIR") {
            throw er;
          }
          rmdirSync(p, options, er);
        }
      }
      function rmdirSync(p, options, originalEr) {
        assert(p);
        assert(options);
        try {
          options.rmdirSync(p);
        } catch (er) {
          if (er.code === "ENOTDIR") {
            throw originalEr;
          } else if (er.code === "ENOTEMPTY" || er.code === "EEXIST" || er.code === "EPERM") {
            rmkidsSync(p, options);
          } else if (er.code !== "ENOENT") {
            throw er;
          }
        }
      }
      function rmkidsSync(p, options) {
        assert(p);
        assert(options);
        options.readdirSync(p).forEach((f) => rimrafSync(path2.join(p, f), options));
        if (isWindows) {
          const startTime = Date.now();
          do {
            try {
              const ret = options.rmdirSync(p, options);
              return ret;
            } catch {
            }
          } while (Date.now() - startTime < 500);
        } else {
          const ret = options.rmdirSync(p, options);
          return ret;
        }
      }
      module.exports = rimraf;
      rimraf.sync = rimrafSync;
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/remove/index.js
  var require_remove = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/remove/index.js"(exports, module) {
      "use strict";
      var fs2 = require_graceful_fs();
      var u = require_universalify().fromCallback;
      var rimraf = require_rimraf();
      function remove(path2, callback) {
        if (fs2.rm)
          return fs2.rm(path2, {recursive: true, force: true}, callback);
        rimraf(path2, callback);
      }
      function removeSync(path2) {
        if (fs2.rmSync)
          return fs2.rmSync(path2, {recursive: true, force: true});
        rimraf.sync(path2);
      }
      module.exports = {
        remove: u(remove),
        removeSync
      };
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/empty/index.js
  var require_empty = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/empty/index.js"(exports, module) {
      "use strict";
      var u = require_universalify().fromPromise;
      var fs2 = require_fs();
      var path2 = __require("path");
      var mkdir = require_mkdirs();
      var remove = require_remove();
      var emptyDir = u(async function emptyDir2(dir) {
        let items;
        try {
          items = await fs2.readdir(dir);
        } catch {
          return mkdir.mkdirs(dir);
        }
        return Promise.all(items.map((item) => remove.remove(path2.join(dir, item))));
      });
      function emptyDirSync(dir) {
        let items;
        try {
          items = fs2.readdirSync(dir);
        } catch {
          return mkdir.mkdirsSync(dir);
        }
        items.forEach((item) => {
          item = path2.join(dir, item);
          remove.removeSync(item);
        });
      }
      module.exports = {
        emptyDirSync,
        emptydirSync: emptyDirSync,
        emptyDir,
        emptydir: emptyDir
      };
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/ensure/file.js
  var require_file = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/ensure/file.js"(exports, module) {
      "use strict";
      var u = require_universalify().fromCallback;
      var path2 = __require("path");
      var fs2 = require_graceful_fs();
      var mkdir = require_mkdirs();
      function createFile(file, callback) {
        function makeFile() {
          fs2.writeFile(file, "", (err) => {
            if (err)
              return callback(err);
            callback();
          });
        }
        fs2.stat(file, (err, stats) => {
          if (!err && stats.isFile())
            return callback();
          const dir = path2.dirname(file);
          fs2.stat(dir, (err2, stats2) => {
            if (err2) {
              if (err2.code === "ENOENT") {
                return mkdir.mkdirs(dir, (err3) => {
                  if (err3)
                    return callback(err3);
                  makeFile();
                });
              }
              return callback(err2);
            }
            if (stats2.isDirectory())
              makeFile();
            else {
              fs2.readdir(dir, (err3) => {
                if (err3)
                  return callback(err3);
              });
            }
          });
        });
      }
      function createFileSync(file) {
        let stats;
        try {
          stats = fs2.statSync(file);
        } catch {
        }
        if (stats && stats.isFile())
          return;
        const dir = path2.dirname(file);
        try {
          if (!fs2.statSync(dir).isDirectory()) {
            fs2.readdirSync(dir);
          }
        } catch (err) {
          if (err && err.code === "ENOENT")
            mkdir.mkdirsSync(dir);
          else
            throw err;
        }
        fs2.writeFileSync(file, "");
      }
      module.exports = {
        createFile: u(createFile),
        createFileSync
      };
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/ensure/link.js
  var require_link = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/ensure/link.js"(exports, module) {
      "use strict";
      var u = require_universalify().fromCallback;
      var path2 = __require("path");
      var fs2 = require_graceful_fs();
      var mkdir = require_mkdirs();
      var pathExists = require_path_exists().pathExists;
      var {areIdentical} = require_stat();
      function createLink(srcpath, dstpath, callback) {
        function makeLink(srcpath2, dstpath2) {
          fs2.link(srcpath2, dstpath2, (err) => {
            if (err)
              return callback(err);
            callback(null);
          });
        }
        fs2.lstat(dstpath, (_, dstStat) => {
          fs2.lstat(srcpath, (err, srcStat) => {
            if (err) {
              err.message = err.message.replace("lstat", "ensureLink");
              return callback(err);
            }
            if (dstStat && areIdentical(srcStat, dstStat))
              return callback(null);
            const dir = path2.dirname(dstpath);
            pathExists(dir, (err2, dirExists) => {
              if (err2)
                return callback(err2);
              if (dirExists)
                return makeLink(srcpath, dstpath);
              mkdir.mkdirs(dir, (err3) => {
                if (err3)
                  return callback(err3);
                makeLink(srcpath, dstpath);
              });
            });
          });
        });
      }
      function createLinkSync(srcpath, dstpath) {
        let dstStat;
        try {
          dstStat = fs2.lstatSync(dstpath);
        } catch {
        }
        try {
          const srcStat = fs2.lstatSync(srcpath);
          if (dstStat && areIdentical(srcStat, dstStat))
            return;
        } catch (err) {
          err.message = err.message.replace("lstat", "ensureLink");
          throw err;
        }
        const dir = path2.dirname(dstpath);
        const dirExists = fs2.existsSync(dir);
        if (dirExists)
          return fs2.linkSync(srcpath, dstpath);
        mkdir.mkdirsSync(dir);
        return fs2.linkSync(srcpath, dstpath);
      }
      module.exports = {
        createLink: u(createLink),
        createLinkSync
      };
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/ensure/symlink-paths.js
  var require_symlink_paths = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/ensure/symlink-paths.js"(exports, module) {
      "use strict";
      var path2 = __require("path");
      var fs2 = require_graceful_fs();
      var pathExists = require_path_exists().pathExists;
      function symlinkPaths(srcpath, dstpath, callback) {
        if (path2.isAbsolute(srcpath)) {
          return fs2.lstat(srcpath, (err) => {
            if (err) {
              err.message = err.message.replace("lstat", "ensureSymlink");
              return callback(err);
            }
            return callback(null, {
              toCwd: srcpath,
              toDst: srcpath
            });
          });
        } else {
          const dstdir = path2.dirname(dstpath);
          const relativeToDst = path2.join(dstdir, srcpath);
          return pathExists(relativeToDst, (err, exists) => {
            if (err)
              return callback(err);
            if (exists) {
              return callback(null, {
                toCwd: relativeToDst,
                toDst: srcpath
              });
            } else {
              return fs2.lstat(srcpath, (err2) => {
                if (err2) {
                  err2.message = err2.message.replace("lstat", "ensureSymlink");
                  return callback(err2);
                }
                return callback(null, {
                  toCwd: srcpath,
                  toDst: path2.relative(dstdir, srcpath)
                });
              });
            }
          });
        }
      }
      function symlinkPathsSync(srcpath, dstpath) {
        let exists;
        if (path2.isAbsolute(srcpath)) {
          exists = fs2.existsSync(srcpath);
          if (!exists)
            throw new Error("absolute srcpath does not exist");
          return {
            toCwd: srcpath,
            toDst: srcpath
          };
        } else {
          const dstdir = path2.dirname(dstpath);
          const relativeToDst = path2.join(dstdir, srcpath);
          exists = fs2.existsSync(relativeToDst);
          if (exists) {
            return {
              toCwd: relativeToDst,
              toDst: srcpath
            };
          } else {
            exists = fs2.existsSync(srcpath);
            if (!exists)
              throw new Error("relative srcpath does not exist");
            return {
              toCwd: srcpath,
              toDst: path2.relative(dstdir, srcpath)
            };
          }
        }
      }
      module.exports = {
        symlinkPaths,
        symlinkPathsSync
      };
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/ensure/symlink-type.js
  var require_symlink_type = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/ensure/symlink-type.js"(exports, module) {
      "use strict";
      var fs2 = require_graceful_fs();
      function symlinkType(srcpath, type, callback) {
        callback = typeof type === "function" ? type : callback;
        type = typeof type === "function" ? false : type;
        if (type)
          return callback(null, type);
        fs2.lstat(srcpath, (err, stats) => {
          if (err)
            return callback(null, "file");
          type = stats && stats.isDirectory() ? "dir" : "file";
          callback(null, type);
        });
      }
      function symlinkTypeSync(srcpath, type) {
        let stats;
        if (type)
          return type;
        try {
          stats = fs2.lstatSync(srcpath);
        } catch {
          return "file";
        }
        return stats && stats.isDirectory() ? "dir" : "file";
      }
      module.exports = {
        symlinkType,
        symlinkTypeSync
      };
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/ensure/symlink.js
  var require_symlink = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/ensure/symlink.js"(exports, module) {
      "use strict";
      var u = require_universalify().fromCallback;
      var path2 = __require("path");
      var fs2 = require_fs();
      var _mkdirs = require_mkdirs();
      var mkdirs = _mkdirs.mkdirs;
      var mkdirsSync = _mkdirs.mkdirsSync;
      var _symlinkPaths = require_symlink_paths();
      var symlinkPaths = _symlinkPaths.symlinkPaths;
      var symlinkPathsSync = _symlinkPaths.symlinkPathsSync;
      var _symlinkType = require_symlink_type();
      var symlinkType = _symlinkType.symlinkType;
      var symlinkTypeSync = _symlinkType.symlinkTypeSync;
      var pathExists = require_path_exists().pathExists;
      var {areIdentical} = require_stat();
      function createSymlink(srcpath, dstpath, type, callback) {
        callback = typeof type === "function" ? type : callback;
        type = typeof type === "function" ? false : type;
        fs2.lstat(dstpath, (err, stats) => {
          if (!err && stats.isSymbolicLink()) {
            Promise.all([
              fs2.stat(srcpath),
              fs2.stat(dstpath)
            ]).then(([srcStat, dstStat]) => {
              if (areIdentical(srcStat, dstStat))
                return callback(null);
              _createSymlink(srcpath, dstpath, type, callback);
            });
          } else
            _createSymlink(srcpath, dstpath, type, callback);
        });
      }
      function _createSymlink(srcpath, dstpath, type, callback) {
        symlinkPaths(srcpath, dstpath, (err, relative) => {
          if (err)
            return callback(err);
          srcpath = relative.toDst;
          symlinkType(relative.toCwd, type, (err2, type2) => {
            if (err2)
              return callback(err2);
            const dir = path2.dirname(dstpath);
            pathExists(dir, (err3, dirExists) => {
              if (err3)
                return callback(err3);
              if (dirExists)
                return fs2.symlink(srcpath, dstpath, type2, callback);
              mkdirs(dir, (err4) => {
                if (err4)
                  return callback(err4);
                fs2.symlink(srcpath, dstpath, type2, callback);
              });
            });
          });
        });
      }
      function createSymlinkSync(srcpath, dstpath, type) {
        let stats;
        try {
          stats = fs2.lstatSync(dstpath);
        } catch {
        }
        if (stats && stats.isSymbolicLink()) {
          const srcStat = fs2.statSync(srcpath);
          const dstStat = fs2.statSync(dstpath);
          if (areIdentical(srcStat, dstStat))
            return;
        }
        const relative = symlinkPathsSync(srcpath, dstpath);
        srcpath = relative.toDst;
        type = symlinkTypeSync(relative.toCwd, type);
        const dir = path2.dirname(dstpath);
        const exists = fs2.existsSync(dir);
        if (exists)
          return fs2.symlinkSync(srcpath, dstpath, type);
        mkdirsSync(dir);
        return fs2.symlinkSync(srcpath, dstpath, type);
      }
      module.exports = {
        createSymlink: u(createSymlink),
        createSymlinkSync
      };
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/ensure/index.js
  var require_ensure = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/ensure/index.js"(exports, module) {
      "use strict";
      var {createFile, createFileSync} = require_file();
      var {createLink, createLinkSync} = require_link();
      var {createSymlink, createSymlinkSync} = require_symlink();
      module.exports = {
        createFile,
        createFileSync,
        ensureFile: createFile,
        ensureFileSync: createFileSync,
        createLink,
        createLinkSync,
        ensureLink: createLink,
        ensureLinkSync: createLinkSync,
        createSymlink,
        createSymlinkSync,
        ensureSymlink: createSymlink,
        ensureSymlinkSync: createSymlinkSync
      };
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/jsonfile-npm-6.1.0-20a4796cee-7af3b8e1ac.zip/node_modules/jsonfile/utils.js
  var require_utils2 = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/jsonfile-npm-6.1.0-20a4796cee-7af3b8e1ac.zip/node_modules/jsonfile/utils.js"(exports, module) {
      function stringify2(obj, {EOL = "\n", finalEOL = true, replacer = null, spaces} = {}) {
        const EOF = finalEOL ? EOL : "";
        const str = JSON.stringify(obj, replacer, spaces);
        return str.replace(/\n/g, EOL) + EOF;
      }
      function stripBom(content) {
        if (Buffer.isBuffer(content))
          content = content.toString("utf8");
        return content.replace(/^\uFEFF/, "");
      }
      module.exports = {stringify: stringify2, stripBom};
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/jsonfile-npm-6.1.0-20a4796cee-7af3b8e1ac.zip/node_modules/jsonfile/index.js
  var require_jsonfile = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/jsonfile-npm-6.1.0-20a4796cee-7af3b8e1ac.zip/node_modules/jsonfile/index.js"(exports, module) {
      var _fs;
      try {
        _fs = require_graceful_fs();
      } catch (_) {
        _fs = __require("fs");
      }
      var universalify = require_universalify();
      var {stringify: stringify2, stripBom} = require_utils2();
      async function _readFile(file, options = {}) {
        if (typeof options === "string") {
          options = {encoding: options};
        }
        const fs2 = options.fs || _fs;
        const shouldThrow = "throws" in options ? options.throws : true;
        let data = await universalify.fromCallback(fs2.readFile)(file, options);
        data = stripBom(data);
        let obj;
        try {
          obj = JSON.parse(data, options ? options.reviver : null);
        } catch (err) {
          if (shouldThrow) {
            err.message = `${file}: ${err.message}`;
            throw err;
          } else {
            return null;
          }
        }
        return obj;
      }
      var readFile = universalify.fromPromise(_readFile);
      function readFileSync(file, options = {}) {
        if (typeof options === "string") {
          options = {encoding: options};
        }
        const fs2 = options.fs || _fs;
        const shouldThrow = "throws" in options ? options.throws : true;
        try {
          let content = fs2.readFileSync(file, options);
          content = stripBom(content);
          return JSON.parse(content, options.reviver);
        } catch (err) {
          if (shouldThrow) {
            err.message = `${file}: ${err.message}`;
            throw err;
          } else {
            return null;
          }
        }
      }
      async function _writeFile(file, obj, options = {}) {
        const fs2 = options.fs || _fs;
        const str = stringify2(obj, options);
        await universalify.fromCallback(fs2.writeFile)(file, str, options);
      }
      var writeFile = universalify.fromPromise(_writeFile);
      function writeFileSync(file, obj, options = {}) {
        const fs2 = options.fs || _fs;
        const str = stringify2(obj, options);
        return fs2.writeFileSync(file, str, options);
      }
      var jsonfile = {
        readFile,
        readFileSync,
        writeFile,
        writeFileSync
      };
      module.exports = jsonfile;
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/json/jsonfile.js
  var require_jsonfile2 = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/json/jsonfile.js"(exports, module) {
      "use strict";
      var jsonFile = require_jsonfile();
      module.exports = {
        readJson: jsonFile.readFile,
        readJsonSync: jsonFile.readFileSync,
        writeJson: jsonFile.writeFile,
        writeJsonSync: jsonFile.writeFileSync
      };
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/output-file/index.js
  var require_output_file = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/output-file/index.js"(exports, module) {
      "use strict";
      var u = require_universalify().fromCallback;
      var fs2 = require_graceful_fs();
      var path2 = __require("path");
      var mkdir = require_mkdirs();
      var pathExists = require_path_exists().pathExists;
      function outputFile(file, data, encoding, callback) {
        if (typeof encoding === "function") {
          callback = encoding;
          encoding = "utf8";
        }
        const dir = path2.dirname(file);
        pathExists(dir, (err, itDoes) => {
          if (err)
            return callback(err);
          if (itDoes)
            return fs2.writeFile(file, data, encoding, callback);
          mkdir.mkdirs(dir, (err2) => {
            if (err2)
              return callback(err2);
            fs2.writeFile(file, data, encoding, callback);
          });
        });
      }
      function outputFileSync(file, ...args) {
        const dir = path2.dirname(file);
        if (fs2.existsSync(dir)) {
          return fs2.writeFileSync(file, ...args);
        }
        mkdir.mkdirsSync(dir);
        fs2.writeFileSync(file, ...args);
      }
      module.exports = {
        outputFile: u(outputFile),
        outputFileSync
      };
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/json/output-json.js
  var require_output_json = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/json/output-json.js"(exports, module) {
      "use strict";
      var {stringify: stringify2} = require_utils2();
      var {outputFile} = require_output_file();
      async function outputJson(file, data, options = {}) {
        const str = stringify2(data, options);
        await outputFile(file, str, options);
      }
      module.exports = outputJson;
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/json/output-json-sync.js
  var require_output_json_sync = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/json/output-json-sync.js"(exports, module) {
      "use strict";
      var {stringify: stringify2} = require_utils2();
      var {outputFileSync} = require_output_file();
      function outputJsonSync(file, data, options) {
        const str = stringify2(data, options);
        outputFileSync(file, str, options);
      }
      module.exports = outputJsonSync;
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/json/index.js
  var require_json = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/json/index.js"(exports, module) {
      "use strict";
      var u = require_universalify().fromPromise;
      var jsonFile = require_jsonfile2();
      jsonFile.outputJson = u(require_output_json());
      jsonFile.outputJsonSync = require_output_json_sync();
      jsonFile.outputJSON = jsonFile.outputJson;
      jsonFile.outputJSONSync = jsonFile.outputJsonSync;
      jsonFile.writeJSON = jsonFile.writeJson;
      jsonFile.writeJSONSync = jsonFile.writeJsonSync;
      jsonFile.readJSON = jsonFile.readJson;
      jsonFile.readJSONSync = jsonFile.readJsonSync;
      module.exports = jsonFile;
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/move/move.js
  var require_move = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/move/move.js"(exports, module) {
      "use strict";
      var fs2 = require_graceful_fs();
      var path2 = __require("path");
      var copy = require_copy2().copy;
      var remove = require_remove().remove;
      var mkdirp = require_mkdirs().mkdirp;
      var pathExists = require_path_exists().pathExists;
      var stat = require_stat();
      function move(src, dest, opts, cb) {
        if (typeof opts === "function") {
          cb = opts;
          opts = {};
        }
        const overwrite = opts.overwrite || opts.clobber || false;
        stat.checkPaths(src, dest, "move", opts, (err, stats) => {
          if (err)
            return cb(err);
          const {srcStat, isChangingCase = false} = stats;
          stat.checkParentPaths(src, srcStat, dest, "move", (err2) => {
            if (err2)
              return cb(err2);
            if (isParentRoot(dest))
              return doRename(src, dest, overwrite, isChangingCase, cb);
            mkdirp(path2.dirname(dest), (err3) => {
              if (err3)
                return cb(err3);
              return doRename(src, dest, overwrite, isChangingCase, cb);
            });
          });
        });
      }
      function isParentRoot(dest) {
        const parent = path2.dirname(dest);
        const parsedPath = path2.parse(parent);
        return parsedPath.root === parent;
      }
      function doRename(src, dest, overwrite, isChangingCase, cb) {
        if (isChangingCase)
          return rename(src, dest, overwrite, cb);
        if (overwrite) {
          return remove(dest, (err) => {
            if (err)
              return cb(err);
            return rename(src, dest, overwrite, cb);
          });
        }
        pathExists(dest, (err, destExists) => {
          if (err)
            return cb(err);
          if (destExists)
            return cb(new Error("dest already exists."));
          return rename(src, dest, overwrite, cb);
        });
      }
      function rename(src, dest, overwrite, cb) {
        fs2.rename(src, dest, (err) => {
          if (!err)
            return cb();
          if (err.code !== "EXDEV")
            return cb(err);
          return moveAcrossDevice(src, dest, overwrite, cb);
        });
      }
      function moveAcrossDevice(src, dest, overwrite, cb) {
        const opts = {
          overwrite,
          errorOnExist: true
        };
        copy(src, dest, opts, (err) => {
          if (err)
            return cb(err);
          return remove(src, cb);
        });
      }
      module.exports = move;
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/move/move-sync.js
  var require_move_sync = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/move/move-sync.js"(exports, module) {
      "use strict";
      var fs2 = require_graceful_fs();
      var path2 = __require("path");
      var copySync = require_copy2().copySync;
      var removeSync = require_remove().removeSync;
      var mkdirpSync = require_mkdirs().mkdirpSync;
      var stat = require_stat();
      function moveSync(src, dest, opts) {
        opts = opts || {};
        const overwrite = opts.overwrite || opts.clobber || false;
        const {srcStat, isChangingCase = false} = stat.checkPathsSync(src, dest, "move", opts);
        stat.checkParentPathsSync(src, srcStat, dest, "move");
        if (!isParentRoot(dest))
          mkdirpSync(path2.dirname(dest));
        return doRename(src, dest, overwrite, isChangingCase);
      }
      function isParentRoot(dest) {
        const parent = path2.dirname(dest);
        const parsedPath = path2.parse(parent);
        return parsedPath.root === parent;
      }
      function doRename(src, dest, overwrite, isChangingCase) {
        if (isChangingCase)
          return rename(src, dest, overwrite);
        if (overwrite) {
          removeSync(dest);
          return rename(src, dest, overwrite);
        }
        if (fs2.existsSync(dest))
          throw new Error("dest already exists.");
        return rename(src, dest, overwrite);
      }
      function rename(src, dest, overwrite) {
        try {
          fs2.renameSync(src, dest);
        } catch (err) {
          if (err.code !== "EXDEV")
            throw err;
          return moveAcrossDevice(src, dest, overwrite);
        }
      }
      function moveAcrossDevice(src, dest, overwrite) {
        const opts = {
          overwrite,
          errorOnExist: true
        };
        copySync(src, dest, opts);
        return removeSync(src);
      }
      module.exports = moveSync;
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/move/index.js
  var require_move2 = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/move/index.js"(exports, module) {
      "use strict";
      var u = require_universalify().fromCallback;
      module.exports = {
        move: u(require_move()),
        moveSync: require_move_sync()
      };
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/index.js
  var require_lib = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/fs-extra-npm-10.0.1-7c8ee14050-c1faaa5eb9.zip/node_modules/fs-extra/lib/index.js"(exports, module) {
      "use strict";
      module.exports = __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, require_fs()), require_copy2()), require_empty()), require_ensure()), require_json()), require_mkdirs()), require_move2()), require_output_file()), require_path_exists()), require_remove());
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/adm-zip-npm-0.5.9-765c0e1a32-4909bc0411.zip/node_modules/adm-zip/util/fileSystem.js
  var require_fileSystem = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/adm-zip-npm-0.5.9-765c0e1a32-4909bc0411.zip/node_modules/adm-zip/util/fileSystem.js"(exports) {
      exports.require = function() {
        if (typeof process === "object" && process.versions && process.versions["electron"]) {
          try {
            const originalFs = __require("original-fs");
            if (Object.keys(originalFs).length > 0) {
              return originalFs;
            }
          } catch (e) {
          }
        }
        return __require("fs");
      };
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/adm-zip-npm-0.5.9-765c0e1a32-4909bc0411.zip/node_modules/adm-zip/util/constants.js
  var require_constants = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/adm-zip-npm-0.5.9-765c0e1a32-4909bc0411.zip/node_modules/adm-zip/util/constants.js"(exports, module) {
      module.exports = {
        LOCHDR: 30,
        LOCSIG: 67324752,
        LOCVER: 4,
        LOCFLG: 6,
        LOCHOW: 8,
        LOCTIM: 10,
        LOCCRC: 14,
        LOCSIZ: 18,
        LOCLEN: 22,
        LOCNAM: 26,
        LOCEXT: 28,
        EXTSIG: 134695760,
        EXTHDR: 16,
        EXTCRC: 4,
        EXTSIZ: 8,
        EXTLEN: 12,
        CENHDR: 46,
        CENSIG: 33639248,
        CENVEM: 4,
        CENVER: 6,
        CENFLG: 8,
        CENHOW: 10,
        CENTIM: 12,
        CENCRC: 16,
        CENSIZ: 20,
        CENLEN: 24,
        CENNAM: 28,
        CENEXT: 30,
        CENCOM: 32,
        CENDSK: 34,
        CENATT: 36,
        CENATX: 38,
        CENOFF: 42,
        ENDHDR: 22,
        ENDSIG: 101010256,
        ENDSUB: 8,
        ENDTOT: 10,
        ENDSIZ: 12,
        ENDOFF: 16,
        ENDCOM: 20,
        END64HDR: 20,
        END64SIG: 117853008,
        END64START: 4,
        END64OFF: 8,
        END64NUMDISKS: 16,
        ZIP64SIG: 101075792,
        ZIP64HDR: 56,
        ZIP64LEAD: 12,
        ZIP64SIZE: 4,
        ZIP64VEM: 12,
        ZIP64VER: 14,
        ZIP64DSK: 16,
        ZIP64DSKDIR: 20,
        ZIP64SUB: 24,
        ZIP64TOT: 32,
        ZIP64SIZB: 40,
        ZIP64OFF: 48,
        ZIP64EXTRA: 56,
        STORED: 0,
        SHRUNK: 1,
        REDUCED1: 2,
        REDUCED2: 3,
        REDUCED3: 4,
        REDUCED4: 5,
        IMPLODED: 6,
        DEFLATED: 8,
        ENHANCED_DEFLATED: 9,
        PKWARE: 10,
        BZIP2: 12,
        LZMA: 14,
        IBM_TERSE: 18,
        IBM_LZ77: 19,
        AES_ENCRYPT: 99,
        FLG_ENC: 1,
        FLG_COMP1: 2,
        FLG_COMP2: 4,
        FLG_DESC: 8,
        FLG_ENH: 16,
        FLG_PATCH: 32,
        FLG_STR: 64,
        FLG_EFS: 2048,
        FLG_MSK: 4096,
        FILE: 2,
        BUFFER: 1,
        NONE: 0,
        EF_ID: 0,
        EF_SIZE: 2,
        ID_ZIP64: 1,
        ID_AVINFO: 7,
        ID_PFS: 8,
        ID_OS2: 9,
        ID_NTFS: 10,
        ID_OPENVMS: 12,
        ID_UNIX: 13,
        ID_FORK: 14,
        ID_PATCH: 15,
        ID_X509_PKCS7: 20,
        ID_X509_CERTID_F: 21,
        ID_X509_CERTID_C: 22,
        ID_STRONGENC: 23,
        ID_RECORD_MGT: 24,
        ID_X509_PKCS7_RL: 25,
        ID_IBM1: 101,
        ID_IBM2: 102,
        ID_POSZIP: 18064,
        EF_ZIP64_OR_32: 4294967295,
        EF_ZIP64_OR_16: 65535,
        EF_ZIP64_SUNCOMP: 0,
        EF_ZIP64_SCOMP: 8,
        EF_ZIP64_RHO: 16,
        EF_ZIP64_DSN: 24
      };
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/adm-zip-npm-0.5.9-765c0e1a32-4909bc0411.zip/node_modules/adm-zip/util/utils.js
  var require_utils3 = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/adm-zip-npm-0.5.9-765c0e1a32-4909bc0411.zip/node_modules/adm-zip/util/utils.js"(exports, module) {
      var fsystem = require_fileSystem().require();
      var pth = __require("path");
      var Constants = require_constants();
      var isWin = typeof process === "object" && process.platform === "win32";
      var is_Obj = (obj) => obj && typeof obj === "object";
      var crcTable = new Uint32Array(256).map((t, c) => {
        for (let k = 0; k < 8; k++) {
          if ((c & 1) !== 0) {
            c = 3988292384 ^ c >>> 1;
          } else {
            c >>>= 1;
          }
        }
        return c >>> 0;
      });
      function Utils(opts) {
        this.sep = pth.sep;
        this.fs = fsystem;
        if (is_Obj(opts)) {
          if (is_Obj(opts.fs) && typeof opts.fs.statSync === "function") {
            this.fs = opts.fs;
          }
        }
      }
      module.exports = Utils;
      Utils.prototype.makeDir = function(folder) {
        const self = this;
        function mkdirSync(fpath) {
          let resolvedPath = fpath.split(self.sep)[0];
          fpath.split(self.sep).forEach(function(name) {
            if (!name || name.substr(-1, 1) === ":")
              return;
            resolvedPath += self.sep + name;
            var stat;
            try {
              stat = self.fs.statSync(resolvedPath);
            } catch (e) {
              self.fs.mkdirSync(resolvedPath);
            }
            if (stat && stat.isFile())
              throw Errors.FILE_IN_THE_WAY.replace("%s", resolvedPath);
          });
        }
        mkdirSync(folder);
      };
      Utils.prototype.writeFileTo = function(path2, content, overwrite, attr) {
        const self = this;
        if (self.fs.existsSync(path2)) {
          if (!overwrite)
            return false;
          var stat = self.fs.statSync(path2);
          if (stat.isDirectory()) {
            return false;
          }
        }
        var folder = pth.dirname(path2);
        if (!self.fs.existsSync(folder)) {
          self.makeDir(folder);
        }
        var fd;
        try {
          fd = self.fs.openSync(path2, "w", 438);
        } catch (e) {
          self.fs.chmodSync(path2, 438);
          fd = self.fs.openSync(path2, "w", 438);
        }
        if (fd) {
          try {
            self.fs.writeSync(fd, content, 0, content.length, 0);
          } finally {
            self.fs.closeSync(fd);
          }
        }
        self.fs.chmodSync(path2, attr || 438);
        return true;
      };
      Utils.prototype.writeFileToAsync = function(path2, content, overwrite, attr, callback) {
        if (typeof attr === "function") {
          callback = attr;
          attr = void 0;
        }
        const self = this;
        self.fs.exists(path2, function(exist) {
          if (exist && !overwrite)
            return callback(false);
          self.fs.stat(path2, function(err, stat) {
            if (exist && stat.isDirectory()) {
              return callback(false);
            }
            var folder = pth.dirname(path2);
            self.fs.exists(folder, function(exists) {
              if (!exists)
                self.makeDir(folder);
              self.fs.open(path2, "w", 438, function(err2, fd) {
                if (err2) {
                  self.fs.chmod(path2, 438, function() {
                    self.fs.open(path2, "w", 438, function(err3, fd2) {
                      self.fs.write(fd2, content, 0, content.length, 0, function() {
                        self.fs.close(fd2, function() {
                          self.fs.chmod(path2, attr || 438, function() {
                            callback(true);
                          });
                        });
                      });
                    });
                  });
                } else if (fd) {
                  self.fs.write(fd, content, 0, content.length, 0, function() {
                    self.fs.close(fd, function() {
                      self.fs.chmod(path2, attr || 438, function() {
                        callback(true);
                      });
                    });
                  });
                } else {
                  self.fs.chmod(path2, attr || 438, function() {
                    callback(true);
                  });
                }
              });
            });
          });
        });
      };
      Utils.prototype.findFiles = function(path2) {
        const self = this;
        function findSync(dir, pattern, recursive) {
          if (typeof pattern === "boolean") {
            recursive = pattern;
            pattern = void 0;
          }
          let files = [];
          self.fs.readdirSync(dir).forEach(function(file) {
            var path3 = pth.join(dir, file);
            if (self.fs.statSync(path3).isDirectory() && recursive)
              files = files.concat(findSync(path3, pattern, recursive));
            if (!pattern || pattern.test(path3)) {
              files.push(pth.normalize(path3) + (self.fs.statSync(path3).isDirectory() ? self.sep : ""));
            }
          });
          return files;
        }
        return findSync(path2, void 0, true);
      };
      Utils.prototype.getAttributes = function() {
      };
      Utils.prototype.setAttributes = function() {
      };
      Utils.crc32update = function(crc, byte) {
        return crcTable[(crc ^ byte) & 255] ^ crc >>> 8;
      };
      Utils.crc32 = function(buf) {
        if (typeof buf === "string") {
          buf = Buffer.from(buf, "utf8");
        }
        if (!crcTable.length)
          genCRCTable();
        let len = buf.length;
        let crc = ~0;
        for (let off = 0; off < len; )
          crc = Utils.crc32update(crc, buf[off++]);
        return ~crc >>> 0;
      };
      Utils.methodToString = function(method) {
        switch (method) {
          case Constants.STORED:
            return "STORED (" + method + ")";
          case Constants.DEFLATED:
            return "DEFLATED (" + method + ")";
          default:
            return "UNSUPPORTED (" + method + ")";
        }
      };
      Utils.canonical = function(path2) {
        if (!path2)
          return "";
        var safeSuffix = pth.posix.normalize("/" + path2.split("\\").join("/"));
        return pth.join(".", safeSuffix);
      };
      Utils.sanitize = function(prefix, name) {
        prefix = pth.resolve(pth.normalize(prefix));
        var parts = name.split("/");
        for (var i = 0, l = parts.length; i < l; i++) {
          var path2 = pth.normalize(pth.join(prefix, parts.slice(i, l).join(pth.sep)));
          if (path2.indexOf(prefix) === 0) {
            return path2;
          }
        }
        return pth.normalize(pth.join(prefix, pth.basename(name)));
      };
      Utils.toBuffer = function toBuffer(input) {
        if (Buffer.isBuffer(input)) {
          return input;
        } else if (input instanceof Uint8Array) {
          return Buffer.from(input);
        } else {
          return typeof input === "string" ? Buffer.from(input, "utf8") : Buffer.alloc(0);
        }
      };
      Utils.readBigUInt64LE = function(buffer, index) {
        var slice = Buffer.from(buffer.slice(index, index + 8));
        slice.swap64();
        return parseInt(`0x${slice.toString("hex")}`);
      };
      Utils.isWin = isWin;
      Utils.crcTable = crcTable;
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/adm-zip-npm-0.5.9-765c0e1a32-4909bc0411.zip/node_modules/adm-zip/util/errors.js
  var require_errors = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/adm-zip-npm-0.5.9-765c0e1a32-4909bc0411.zip/node_modules/adm-zip/util/errors.js"(exports, module) {
      module.exports = {
        INVALID_LOC: "Invalid LOC header (bad signature)",
        INVALID_CEN: "Invalid CEN header (bad signature)",
        INVALID_END: "Invalid END header (bad signature)",
        NO_DATA: "Nothing to decompress",
        BAD_CRC: "CRC32 checksum failed",
        FILE_IN_THE_WAY: "There is a file in the way: %s",
        UNKNOWN_METHOD: "Invalid/unsupported compression method",
        AVAIL_DATA: "inflate::Available inflate data did not terminate",
        INVALID_DISTANCE: "inflate::Invalid literal/length or distance code in fixed or dynamic block",
        TO_MANY_CODES: "inflate::Dynamic block code description: too many length or distance codes",
        INVALID_REPEAT_LEN: "inflate::Dynamic block code description: repeat more than specified lengths",
        INVALID_REPEAT_FIRST: "inflate::Dynamic block code description: repeat lengths with no first length",
        INCOMPLETE_CODES: "inflate::Dynamic block code description: code lengths codes incomplete",
        INVALID_DYN_DISTANCE: "inflate::Dynamic block code description: invalid distance code lengths",
        INVALID_CODES_LEN: "inflate::Dynamic block code description: invalid literal/length code lengths",
        INVALID_STORE_BLOCK: "inflate::Stored block length did not match one's complement",
        INVALID_BLOCK_TYPE: "inflate::Invalid block type (type == 3)",
        CANT_EXTRACT_FILE: "Could not extract the file",
        CANT_OVERRIDE: "Target file already exists",
        NO_ZIP: "No zip file was loaded",
        NO_ENTRY: "Entry doesn't exist",
        DIRECTORY_CONTENT_ERROR: "A directory cannot have content",
        FILE_NOT_FOUND: "File not found: %s",
        NOT_IMPLEMENTED: "Not implemented",
        INVALID_FILENAME: "Invalid filename",
        INVALID_FORMAT: "Invalid or unsupported zip format. No END header found"
      };
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/adm-zip-npm-0.5.9-765c0e1a32-4909bc0411.zip/node_modules/adm-zip/util/fattr.js
  var require_fattr = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/adm-zip-npm-0.5.9-765c0e1a32-4909bc0411.zip/node_modules/adm-zip/util/fattr.js"(exports, module) {
      var fs2 = require_fileSystem().require();
      var pth = __require("path");
      fs2.existsSync = fs2.existsSync || pth.existsSync;
      module.exports = function(path2) {
        var _path = path2 || "", _obj = newAttr(), _stat = null;
        function newAttr() {
          return {
            directory: false,
            readonly: false,
            hidden: false,
            executable: false,
            mtime: 0,
            atime: 0
          };
        }
        if (_path && fs2.existsSync(_path)) {
          _stat = fs2.statSync(_path);
          _obj.directory = _stat.isDirectory();
          _obj.mtime = _stat.mtime;
          _obj.atime = _stat.atime;
          _obj.executable = (73 & _stat.mode) !== 0;
          _obj.readonly = (128 & _stat.mode) === 0;
          _obj.hidden = pth.basename(_path)[0] === ".";
        } else {
          console.warn("Invalid path: " + _path);
        }
        return {
          get directory() {
            return _obj.directory;
          },
          get readOnly() {
            return _obj.readonly;
          },
          get hidden() {
            return _obj.hidden;
          },
          get mtime() {
            return _obj.mtime;
          },
          get atime() {
            return _obj.atime;
          },
          get executable() {
            return _obj.executable;
          },
          decodeAttributes: function() {
          },
          encodeAttributes: function() {
          },
          toJSON: function() {
            return {
              path: _path,
              isDirectory: _obj.directory,
              isReadOnly: _obj.readonly,
              isHidden: _obj.hidden,
              isExecutable: _obj.executable,
              mTime: _obj.mtime,
              aTime: _obj.atime
            };
          },
          toString: function() {
            return JSON.stringify(this.toJSON(), null, "	");
          }
        };
      };
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/adm-zip-npm-0.5.9-765c0e1a32-4909bc0411.zip/node_modules/adm-zip/util/index.js
  var require_util = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/adm-zip-npm-0.5.9-765c0e1a32-4909bc0411.zip/node_modules/adm-zip/util/index.js"(exports, module) {
      module.exports = require_utils3();
      module.exports.Constants = require_constants();
      module.exports.Errors = require_errors();
      module.exports.FileAttr = require_fattr();
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/adm-zip-npm-0.5.9-765c0e1a32-4909bc0411.zip/node_modules/adm-zip/headers/entryHeader.js
  var require_entryHeader = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/adm-zip-npm-0.5.9-765c0e1a32-4909bc0411.zip/node_modules/adm-zip/headers/entryHeader.js"(exports, module) {
      var Utils = require_util();
      var Constants = Utils.Constants;
      module.exports = function() {
        var _verMade = 20, _version = 10, _flags = 0, _method = 0, _time = 0, _crc = 0, _compressedSize = 0, _size = 0, _fnameLen = 0, _extraLen = 0, _comLen = 0, _diskStart = 0, _inattr = 0, _attr = 0, _offset = 0;
        _verMade |= Utils.isWin ? 2560 : 768;
        _flags |= Constants.FLG_EFS;
        var _dataHeader = {};
        function setTime(val) {
          val = new Date(val);
          _time = (val.getFullYear() - 1980 & 127) << 25 | val.getMonth() + 1 << 21 | val.getDate() << 16 | val.getHours() << 11 | val.getMinutes() << 5 | val.getSeconds() >> 1;
        }
        setTime(+new Date());
        return {
          get made() {
            return _verMade;
          },
          set made(val) {
            _verMade = val;
          },
          get version() {
            return _version;
          },
          set version(val) {
            _version = val;
          },
          get flags() {
            return _flags;
          },
          set flags(val) {
            _flags = val;
          },
          get method() {
            return _method;
          },
          set method(val) {
            switch (val) {
              case Constants.STORED:
                this.version = 10;
              case Constants.DEFLATED:
              default:
                this.version = 20;
            }
            _method = val;
          },
          get time() {
            return new Date((_time >> 25 & 127) + 1980, (_time >> 21 & 15) - 1, _time >> 16 & 31, _time >> 11 & 31, _time >> 5 & 63, (_time & 31) << 1);
          },
          set time(val) {
            setTime(val);
          },
          get crc() {
            return _crc;
          },
          set crc(val) {
            _crc = Math.max(0, val) >>> 0;
          },
          get compressedSize() {
            return _compressedSize;
          },
          set compressedSize(val) {
            _compressedSize = Math.max(0, val) >>> 0;
          },
          get size() {
            return _size;
          },
          set size(val) {
            _size = Math.max(0, val) >>> 0;
          },
          get fileNameLength() {
            return _fnameLen;
          },
          set fileNameLength(val) {
            _fnameLen = val;
          },
          get extraLength() {
            return _extraLen;
          },
          set extraLength(val) {
            _extraLen = val;
          },
          get commentLength() {
            return _comLen;
          },
          set commentLength(val) {
            _comLen = val;
          },
          get diskNumStart() {
            return _diskStart;
          },
          set diskNumStart(val) {
            _diskStart = Math.max(0, val) >>> 0;
          },
          get inAttr() {
            return _inattr;
          },
          set inAttr(val) {
            _inattr = Math.max(0, val) >>> 0;
          },
          get attr() {
            return _attr;
          },
          set attr(val) {
            _attr = Math.max(0, val) >>> 0;
          },
          get fileAttr() {
            return _attr ? (_attr >>> 0 | 0) >> 16 & 4095 : 0;
          },
          get offset() {
            return _offset;
          },
          set offset(val) {
            _offset = Math.max(0, val) >>> 0;
          },
          get encripted() {
            return (_flags & 1) === 1;
          },
          get entryHeaderSize() {
            return Constants.CENHDR + _fnameLen + _extraLen + _comLen;
          },
          get realDataOffset() {
            return _offset + Constants.LOCHDR + _dataHeader.fnameLen + _dataHeader.extraLen;
          },
          get dataHeader() {
            return _dataHeader;
          },
          loadDataHeaderFromBinary: function(input) {
            var data = input.slice(_offset, _offset + Constants.LOCHDR);
            if (data.readUInt32LE(0) !== Constants.LOCSIG) {
              throw new Error(Utils.Errors.INVALID_LOC);
            }
            _dataHeader = {
              version: data.readUInt16LE(Constants.LOCVER),
              flags: data.readUInt16LE(Constants.LOCFLG),
              method: data.readUInt16LE(Constants.LOCHOW),
              time: data.readUInt32LE(Constants.LOCTIM),
              crc: data.readUInt32LE(Constants.LOCCRC),
              compressedSize: data.readUInt32LE(Constants.LOCSIZ),
              size: data.readUInt32LE(Constants.LOCLEN),
              fnameLen: data.readUInt16LE(Constants.LOCNAM),
              extraLen: data.readUInt16LE(Constants.LOCEXT)
            };
          },
          loadFromBinary: function(data) {
            if (data.length !== Constants.CENHDR || data.readUInt32LE(0) !== Constants.CENSIG) {
              throw new Error(Utils.Errors.INVALID_CEN);
            }
            _verMade = data.readUInt16LE(Constants.CENVEM);
            _version = data.readUInt16LE(Constants.CENVER);
            _flags = data.readUInt16LE(Constants.CENFLG);
            _method = data.readUInt16LE(Constants.CENHOW);
            _time = data.readUInt32LE(Constants.CENTIM);
            _crc = data.readUInt32LE(Constants.CENCRC);
            _compressedSize = data.readUInt32LE(Constants.CENSIZ);
            _size = data.readUInt32LE(Constants.CENLEN);
            _fnameLen = data.readUInt16LE(Constants.CENNAM);
            _extraLen = data.readUInt16LE(Constants.CENEXT);
            _comLen = data.readUInt16LE(Constants.CENCOM);
            _diskStart = data.readUInt16LE(Constants.CENDSK);
            _inattr = data.readUInt16LE(Constants.CENATT);
            _attr = data.readUInt32LE(Constants.CENATX);
            _offset = data.readUInt32LE(Constants.CENOFF);
          },
          dataHeaderToBinary: function() {
            var data = Buffer.alloc(Constants.LOCHDR);
            data.writeUInt32LE(Constants.LOCSIG, 0);
            data.writeUInt16LE(_version, Constants.LOCVER);
            data.writeUInt16LE(_flags, Constants.LOCFLG);
            data.writeUInt16LE(_method, Constants.LOCHOW);
            data.writeUInt32LE(_time, Constants.LOCTIM);
            data.writeUInt32LE(_crc, Constants.LOCCRC);
            data.writeUInt32LE(_compressedSize, Constants.LOCSIZ);
            data.writeUInt32LE(_size, Constants.LOCLEN);
            data.writeUInt16LE(_fnameLen, Constants.LOCNAM);
            data.writeUInt16LE(_extraLen, Constants.LOCEXT);
            return data;
          },
          entryHeaderToBinary: function() {
            var data = Buffer.alloc(Constants.CENHDR + _fnameLen + _extraLen + _comLen);
            data.writeUInt32LE(Constants.CENSIG, 0);
            data.writeUInt16LE(_verMade, Constants.CENVEM);
            data.writeUInt16LE(_version, Constants.CENVER);
            data.writeUInt16LE(_flags, Constants.CENFLG);
            data.writeUInt16LE(_method, Constants.CENHOW);
            data.writeUInt32LE(_time, Constants.CENTIM);
            data.writeUInt32LE(_crc, Constants.CENCRC);
            data.writeUInt32LE(_compressedSize, Constants.CENSIZ);
            data.writeUInt32LE(_size, Constants.CENLEN);
            data.writeUInt16LE(_fnameLen, Constants.CENNAM);
            data.writeUInt16LE(_extraLen, Constants.CENEXT);
            data.writeUInt16LE(_comLen, Constants.CENCOM);
            data.writeUInt16LE(_diskStart, Constants.CENDSK);
            data.writeUInt16LE(_inattr, Constants.CENATT);
            data.writeUInt32LE(_attr, Constants.CENATX);
            data.writeUInt32LE(_offset, Constants.CENOFF);
            data.fill(0, Constants.CENHDR);
            return data;
          },
          toJSON: function() {
            const bytes = function(nr) {
              return nr + " bytes";
            };
            return {
              made: _verMade,
              version: _version,
              flags: _flags,
              method: Utils.methodToString(_method),
              time: this.time,
              crc: "0x" + _crc.toString(16).toUpperCase(),
              compressedSize: bytes(_compressedSize),
              size: bytes(_size),
              fileNameLength: bytes(_fnameLen),
              extraLength: bytes(_extraLen),
              commentLength: bytes(_comLen),
              diskNumStart: _diskStart,
              inAttr: _inattr,
              attr: _attr,
              offset: _offset,
              entryHeaderSize: bytes(Constants.CENHDR + _fnameLen + _extraLen + _comLen)
            };
          },
          toString: function() {
            return JSON.stringify(this.toJSON(), null, "	");
          }
        };
      };
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/adm-zip-npm-0.5.9-765c0e1a32-4909bc0411.zip/node_modules/adm-zip/headers/mainHeader.js
  var require_mainHeader = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/adm-zip-npm-0.5.9-765c0e1a32-4909bc0411.zip/node_modules/adm-zip/headers/mainHeader.js"(exports, module) {
      var Utils = require_util();
      var Constants = Utils.Constants;
      module.exports = function() {
        var _volumeEntries = 0, _totalEntries = 0, _size = 0, _offset = 0, _commentLength = 0;
        return {
          get diskEntries() {
            return _volumeEntries;
          },
          set diskEntries(val) {
            _volumeEntries = _totalEntries = val;
          },
          get totalEntries() {
            return _totalEntries;
          },
          set totalEntries(val) {
            _totalEntries = _volumeEntries = val;
          },
          get size() {
            return _size;
          },
          set size(val) {
            _size = val;
          },
          get offset() {
            return _offset;
          },
          set offset(val) {
            _offset = val;
          },
          get commentLength() {
            return _commentLength;
          },
          set commentLength(val) {
            _commentLength = val;
          },
          get mainHeaderSize() {
            return Constants.ENDHDR + _commentLength;
          },
          loadFromBinary: function(data) {
            if ((data.length !== Constants.ENDHDR || data.readUInt32LE(0) !== Constants.ENDSIG) && (data.length < Constants.ZIP64HDR || data.readUInt32LE(0) !== Constants.ZIP64SIG)) {
              throw new Error(Utils.Errors.INVALID_END);
            }
            if (data.readUInt32LE(0) === Constants.ENDSIG) {
              _volumeEntries = data.readUInt16LE(Constants.ENDSUB);
              _totalEntries = data.readUInt16LE(Constants.ENDTOT);
              _size = data.readUInt32LE(Constants.ENDSIZ);
              _offset = data.readUInt32LE(Constants.ENDOFF);
              _commentLength = data.readUInt16LE(Constants.ENDCOM);
            } else {
              _volumeEntries = Utils.readBigUInt64LE(data, Constants.ZIP64SUB);
              _totalEntries = Utils.readBigUInt64LE(data, Constants.ZIP64TOT);
              _size = Utils.readBigUInt64LE(data, Constants.ZIP64SIZ);
              _offset = Utils.readBigUInt64LE(data, Constants.ZIP64OFF);
              _commentLength = 0;
            }
          },
          toBinary: function() {
            var b = Buffer.alloc(Constants.ENDHDR + _commentLength);
            b.writeUInt32LE(Constants.ENDSIG, 0);
            b.writeUInt32LE(0, 4);
            b.writeUInt16LE(_volumeEntries, Constants.ENDSUB);
            b.writeUInt16LE(_totalEntries, Constants.ENDTOT);
            b.writeUInt32LE(_size, Constants.ENDSIZ);
            b.writeUInt32LE(_offset, Constants.ENDOFF);
            b.writeUInt16LE(_commentLength, Constants.ENDCOM);
            b.fill(" ", Constants.ENDHDR);
            return b;
          },
          toJSON: function() {
            const offset = function(nr, len) {
              let offs = nr.toString(16).toUpperCase();
              while (offs.length < len)
                offs = "0" + offs;
              return "0x" + offs;
            };
            return {
              diskEntries: _volumeEntries,
              totalEntries: _totalEntries,
              size: _size + " bytes",
              offset: offset(_offset, 4),
              commentLength: _commentLength
            };
          },
          toString: function() {
            return JSON.stringify(this.toJSON(), null, "	");
          }
        };
      };
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/adm-zip-npm-0.5.9-765c0e1a32-4909bc0411.zip/node_modules/adm-zip/headers/index.js
  var require_headers = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/adm-zip-npm-0.5.9-765c0e1a32-4909bc0411.zip/node_modules/adm-zip/headers/index.js"(exports) {
      exports.EntryHeader = require_entryHeader();
      exports.MainHeader = require_mainHeader();
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/adm-zip-npm-0.5.9-765c0e1a32-4909bc0411.zip/node_modules/adm-zip/methods/deflater.js
  var require_deflater = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/adm-zip-npm-0.5.9-765c0e1a32-4909bc0411.zip/node_modules/adm-zip/methods/deflater.js"(exports, module) {
      module.exports = function(inbuf) {
        var zlib = __require("zlib");
        var opts = {chunkSize: (parseInt(inbuf.length / 1024) + 1) * 1024};
        return {
          deflate: function() {
            return zlib.deflateRawSync(inbuf, opts);
          },
          deflateAsync: function(callback) {
            var tmp = zlib.createDeflateRaw(opts), parts = [], total = 0;
            tmp.on("data", function(data) {
              parts.push(data);
              total += data.length;
            });
            tmp.on("end", function() {
              var buf = Buffer.alloc(total), written = 0;
              buf.fill(0);
              for (var i = 0; i < parts.length; i++) {
                var part = parts[i];
                part.copy(buf, written);
                written += part.length;
              }
              callback && callback(buf);
            });
            tmp.end(inbuf);
          }
        };
      };
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/adm-zip-npm-0.5.9-765c0e1a32-4909bc0411.zip/node_modules/adm-zip/methods/inflater.js
  var require_inflater = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/adm-zip-npm-0.5.9-765c0e1a32-4909bc0411.zip/node_modules/adm-zip/methods/inflater.js"(exports, module) {
      module.exports = function(inbuf) {
        var zlib = __require("zlib");
        return {
          inflate: function() {
            return zlib.inflateRawSync(inbuf);
          },
          inflateAsync: function(callback) {
            var tmp = zlib.createInflateRaw(), parts = [], total = 0;
            tmp.on("data", function(data) {
              parts.push(data);
              total += data.length;
            });
            tmp.on("end", function() {
              var buf = Buffer.alloc(total), written = 0;
              buf.fill(0);
              for (var i = 0; i < parts.length; i++) {
                var part = parts[i];
                part.copy(buf, written);
                written += part.length;
              }
              callback && callback(buf);
            });
            tmp.end(inbuf);
          }
        };
      };
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/adm-zip-npm-0.5.9-765c0e1a32-4909bc0411.zip/node_modules/adm-zip/methods/zipcrypto.js
  var require_zipcrypto = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/adm-zip-npm-0.5.9-765c0e1a32-4909bc0411.zip/node_modules/adm-zip/methods/zipcrypto.js"(exports, module) {
      "use strict";
      var {randomFillSync} = __require("crypto");
      var crctable = new Uint32Array(256).map((t, crc) => {
        for (let j = 0; j < 8; j++) {
          if ((crc & 1) !== 0) {
            crc = crc >>> 1 ^ 3988292384;
          } else {
            crc >>>= 1;
          }
        }
        return crc >>> 0;
      });
      var uMul = (a, b) => Math.imul(a, b) >>> 0;
      var crc32update = (pCrc32, bval) => {
        return crctable[(pCrc32 ^ bval) & 255] ^ pCrc32 >>> 8;
      };
      var genSalt = () => {
        if (typeof randomFillSync === "function") {
          return randomFillSync(Buffer.alloc(12));
        } else {
          return genSalt.node();
        }
      };
      genSalt.node = () => {
        const salt = Buffer.alloc(12);
        const len = salt.length;
        for (let i = 0; i < len; i++)
          salt[i] = Math.random() * 256 & 255;
        return salt;
      };
      var config = {
        genSalt
      };
      function Initkeys(pw) {
        const pass = Buffer.isBuffer(pw) ? pw : Buffer.from(pw);
        this.keys = new Uint32Array([305419896, 591751049, 878082192]);
        for (let i = 0; i < pass.length; i++) {
          this.updateKeys(pass[i]);
        }
      }
      Initkeys.prototype.updateKeys = function(byteValue) {
        const keys = this.keys;
        keys[0] = crc32update(keys[0], byteValue);
        keys[1] += keys[0] & 255;
        keys[1] = uMul(keys[1], 134775813) + 1;
        keys[2] = crc32update(keys[2], keys[1] >>> 24);
        return byteValue;
      };
      Initkeys.prototype.next = function() {
        const k = (this.keys[2] | 2) >>> 0;
        return uMul(k, k ^ 1) >> 8 & 255;
      };
      function make_decrypter(pwd) {
        const keys = new Initkeys(pwd);
        return function(data) {
          const result = Buffer.alloc(data.length);
          let pos = 0;
          for (let c of data) {
            result[pos++] = keys.updateKeys(c ^ keys.next());
          }
          return result;
        };
      }
      function make_encrypter(pwd) {
        const keys = new Initkeys(pwd);
        return function(data, result, pos = 0) {
          if (!result)
            result = Buffer.alloc(data.length);
          for (let c of data) {
            const k = keys.next();
            result[pos++] = c ^ k;
            keys.updateKeys(c);
          }
          return result;
        };
      }
      function decrypt(data, header, pwd) {
        if (!data || !Buffer.isBuffer(data) || data.length < 12) {
          return Buffer.alloc(0);
        }
        const decrypter = make_decrypter(pwd);
        const salt = decrypter(data.slice(0, 12));
        if (salt[11] !== header.crc >>> 24) {
          throw "ADM-ZIP: Wrong Password";
        }
        return decrypter(data.slice(12));
      }
      function _salter(data) {
        if (Buffer.isBuffer(data) && data.length >= 12) {
          config.genSalt = function() {
            return data.slice(0, 12);
          };
        } else if (data === "node") {
          config.genSalt = genSalt.node;
        } else {
          config.genSalt = genSalt;
        }
      }
      function encrypt(data, header, pwd, oldlike = false) {
        if (data == null)
          data = Buffer.alloc(0);
        if (!Buffer.isBuffer(data))
          data = Buffer.from(data.toString());
        const encrypter = make_encrypter(pwd);
        const salt = config.genSalt();
        salt[11] = header.crc >>> 24 & 255;
        if (oldlike)
          salt[10] = header.crc >>> 16 & 255;
        const result = Buffer.alloc(data.length + 12);
        encrypter(salt, result);
        return encrypter(data, result, 12);
      }
      module.exports = {decrypt, encrypt, _salter};
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/adm-zip-npm-0.5.9-765c0e1a32-4909bc0411.zip/node_modules/adm-zip/methods/index.js
  var require_methods = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/adm-zip-npm-0.5.9-765c0e1a32-4909bc0411.zip/node_modules/adm-zip/methods/index.js"(exports) {
      exports.Deflater = require_deflater();
      exports.Inflater = require_inflater();
      exports.ZipCrypto = require_zipcrypto();
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/adm-zip-npm-0.5.9-765c0e1a32-4909bc0411.zip/node_modules/adm-zip/zipEntry.js
  var require_zipEntry = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/adm-zip-npm-0.5.9-765c0e1a32-4909bc0411.zip/node_modules/adm-zip/zipEntry.js"(exports, module) {
      var Utils = require_util();
      var Headers = require_headers();
      var Constants = Utils.Constants;
      var Methods = require_methods();
      module.exports = function(input) {
        var _entryHeader = new Headers.EntryHeader(), _entryName = Buffer.alloc(0), _comment = Buffer.alloc(0), _isDirectory = false, uncompressedData = null, _extra = Buffer.alloc(0);
        function getCompressedDataFromZip() {
          if (!input || !Buffer.isBuffer(input)) {
            return Buffer.alloc(0);
          }
          _entryHeader.loadDataHeaderFromBinary(input);
          return input.slice(_entryHeader.realDataOffset, _entryHeader.realDataOffset + _entryHeader.compressedSize);
        }
        function crc32OK(data) {
          if ((_entryHeader.flags & 8) !== 8) {
            if (Utils.crc32(data) !== _entryHeader.dataHeader.crc) {
              return false;
            }
          } else {
          }
          return true;
        }
        function decompress(async, callback, pass) {
          if (typeof callback === "undefined" && typeof async === "string") {
            pass = async;
            async = void 0;
          }
          if (_isDirectory) {
            if (async && callback) {
              callback(Buffer.alloc(0), Utils.Errors.DIRECTORY_CONTENT_ERROR);
            }
            return Buffer.alloc(0);
          }
          var compressedData = getCompressedDataFromZip();
          if (compressedData.length === 0) {
            if (async && callback)
              callback(compressedData);
            return compressedData;
          }
          if (_entryHeader.encripted) {
            if (typeof pass !== "string" && !Buffer.isBuffer(pass)) {
              throw new Error("ADM-ZIP: Incompatible password parameter");
            }
            compressedData = Methods.ZipCrypto.decrypt(compressedData, _entryHeader, pass);
          }
          var data = Buffer.alloc(_entryHeader.size);
          switch (_entryHeader.method) {
            case Utils.Constants.STORED:
              compressedData.copy(data);
              if (!crc32OK(data)) {
                if (async && callback)
                  callback(data, Utils.Errors.BAD_CRC);
                throw new Error(Utils.Errors.BAD_CRC);
              } else {
                if (async && callback)
                  callback(data);
                return data;
              }
            case Utils.Constants.DEFLATED:
              var inflater = new Methods.Inflater(compressedData);
              if (!async) {
                const result = inflater.inflate(data);
                result.copy(data, 0);
                if (!crc32OK(data)) {
                  throw new Error(Utils.Errors.BAD_CRC + " " + _entryName.toString());
                }
                return data;
              } else {
                inflater.inflateAsync(function(result) {
                  result.copy(result, 0);
                  if (callback) {
                    if (!crc32OK(result)) {
                      callback(result, Utils.Errors.BAD_CRC);
                    } else {
                      callback(result);
                    }
                  }
                });
              }
              break;
            default:
              if (async && callback)
                callback(Buffer.alloc(0), Utils.Errors.UNKNOWN_METHOD);
              throw new Error(Utils.Errors.UNKNOWN_METHOD);
          }
        }
        function compress(async, callback) {
          if ((!uncompressedData || !uncompressedData.length) && Buffer.isBuffer(input)) {
            if (async && callback)
              callback(getCompressedDataFromZip());
            return getCompressedDataFromZip();
          }
          if (uncompressedData.length && !_isDirectory) {
            var compressedData;
            switch (_entryHeader.method) {
              case Utils.Constants.STORED:
                _entryHeader.compressedSize = _entryHeader.size;
                compressedData = Buffer.alloc(uncompressedData.length);
                uncompressedData.copy(compressedData);
                if (async && callback)
                  callback(compressedData);
                return compressedData;
              default:
              case Utils.Constants.DEFLATED:
                var deflater = new Methods.Deflater(uncompressedData);
                if (!async) {
                  var deflated = deflater.deflate();
                  _entryHeader.compressedSize = deflated.length;
                  return deflated;
                } else {
                  deflater.deflateAsync(function(data) {
                    compressedData = Buffer.alloc(data.length);
                    _entryHeader.compressedSize = data.length;
                    data.copy(compressedData);
                    callback && callback(compressedData);
                  });
                }
                deflater = null;
                break;
            }
          } else if (async && callback) {
            callback(Buffer.alloc(0));
          } else {
            return Buffer.alloc(0);
          }
        }
        function readUInt64LE(buffer, offset) {
          return (buffer.readUInt32LE(offset + 4) << 4) + buffer.readUInt32LE(offset);
        }
        function parseExtra(data) {
          var offset = 0;
          var signature, size, part;
          while (offset < data.length) {
            signature = data.readUInt16LE(offset);
            offset += 2;
            size = data.readUInt16LE(offset);
            offset += 2;
            part = data.slice(offset, offset + size);
            offset += size;
            if (Constants.ID_ZIP64 === signature) {
              parseZip64ExtendedInformation(part);
            }
          }
        }
        function parseZip64ExtendedInformation(data) {
          var size, compressedSize, offset, diskNumStart;
          if (data.length >= Constants.EF_ZIP64_SCOMP) {
            size = readUInt64LE(data, Constants.EF_ZIP64_SUNCOMP);
            if (_entryHeader.size === Constants.EF_ZIP64_OR_32) {
              _entryHeader.size = size;
            }
          }
          if (data.length >= Constants.EF_ZIP64_RHO) {
            compressedSize = readUInt64LE(data, Constants.EF_ZIP64_SCOMP);
            if (_entryHeader.compressedSize === Constants.EF_ZIP64_OR_32) {
              _entryHeader.compressedSize = compressedSize;
            }
          }
          if (data.length >= Constants.EF_ZIP64_DSN) {
            offset = readUInt64LE(data, Constants.EF_ZIP64_RHO);
            if (_entryHeader.offset === Constants.EF_ZIP64_OR_32) {
              _entryHeader.offset = offset;
            }
          }
          if (data.length >= Constants.EF_ZIP64_DSN + 4) {
            diskNumStart = data.readUInt32LE(Constants.EF_ZIP64_DSN);
            if (_entryHeader.diskNumStart === Constants.EF_ZIP64_OR_16) {
              _entryHeader.diskNumStart = diskNumStart;
            }
          }
        }
        return {
          get entryName() {
            return _entryName.toString();
          },
          get rawEntryName() {
            return _entryName;
          },
          set entryName(val) {
            _entryName = Utils.toBuffer(val);
            var lastChar = _entryName[_entryName.length - 1];
            _isDirectory = lastChar === 47 || lastChar === 92;
            _entryHeader.fileNameLength = _entryName.length;
          },
          get extra() {
            return _extra;
          },
          set extra(val) {
            _extra = val;
            _entryHeader.extraLength = val.length;
            parseExtra(val);
          },
          get comment() {
            return _comment.toString();
          },
          set comment(val) {
            _comment = Utils.toBuffer(val);
            _entryHeader.commentLength = _comment.length;
          },
          get name() {
            var n = _entryName.toString();
            return _isDirectory ? n.substr(n.length - 1).split("/").pop() : n.split("/").pop();
          },
          get isDirectory() {
            return _isDirectory;
          },
          getCompressedData: function() {
            return compress(false, null);
          },
          getCompressedDataAsync: function(callback) {
            compress(true, callback);
          },
          setData: function(value) {
            uncompressedData = Utils.toBuffer(value);
            if (!_isDirectory && uncompressedData.length) {
              _entryHeader.size = uncompressedData.length;
              _entryHeader.method = Utils.Constants.DEFLATED;
              _entryHeader.crc = Utils.crc32(value);
              _entryHeader.changed = true;
            } else {
              _entryHeader.method = Utils.Constants.STORED;
            }
          },
          getData: function(pass) {
            if (_entryHeader.changed) {
              return uncompressedData;
            } else {
              return decompress(false, null, pass);
            }
          },
          getDataAsync: function(callback, pass) {
            if (_entryHeader.changed) {
              callback(uncompressedData);
            } else {
              decompress(true, callback, pass);
            }
          },
          set attr(attr) {
            _entryHeader.attr = attr;
          },
          get attr() {
            return _entryHeader.attr;
          },
          set header(data) {
            _entryHeader.loadFromBinary(data);
          },
          get header() {
            return _entryHeader;
          },
          packHeader: function() {
            var header = _entryHeader.entryHeaderToBinary();
            var addpos = Utils.Constants.CENHDR;
            _entryName.copy(header, addpos);
            addpos += _entryName.length;
            if (_entryHeader.extraLength) {
              _extra.copy(header, addpos);
              addpos += _entryHeader.extraLength;
            }
            if (_entryHeader.commentLength) {
              _comment.copy(header, addpos);
            }
            return header;
          },
          toJSON: function() {
            const bytes = function(nr) {
              return "<" + (nr && nr.length + " bytes buffer" || "null") + ">";
            };
            return {
              entryName: this.entryName,
              name: this.name,
              comment: this.comment,
              isDirectory: this.isDirectory,
              header: _entryHeader.toJSON(),
              compressedData: bytes(input),
              data: bytes(uncompressedData)
            };
          },
          toString: function() {
            return JSON.stringify(this.toJSON(), null, "	");
          }
        };
      };
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/adm-zip-npm-0.5.9-765c0e1a32-4909bc0411.zip/node_modules/adm-zip/zipFile.js
  var require_zipFile = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/adm-zip-npm-0.5.9-765c0e1a32-4909bc0411.zip/node_modules/adm-zip/zipFile.js"(exports, module) {
      var ZipEntry = require_zipEntry();
      var Headers = require_headers();
      var Utils = require_util();
      module.exports = function(inBuffer, options) {
        var entryList = [], entryTable = {}, _comment = Buffer.alloc(0), mainHeader = new Headers.MainHeader(), loadedEntries = false;
        const opts = Object.assign(Object.create(null), options);
        const {noSort} = opts;
        if (inBuffer) {
          readMainHeader(opts.readEntries);
        } else {
          loadedEntries = true;
        }
        function iterateEntries(callback) {
          const totalEntries = mainHeader.diskEntries;
          let index = mainHeader.offset;
          for (let i = 0; i < totalEntries; i++) {
            let tmp = index;
            const entry = new ZipEntry(inBuffer);
            entry.header = inBuffer.slice(tmp, tmp += Utils.Constants.CENHDR);
            entry.entryName = inBuffer.slice(tmp, tmp += entry.header.fileNameLength);
            index += entry.header.entryHeaderSize;
            callback(entry);
          }
        }
        function readEntries() {
          loadedEntries = true;
          entryTable = {};
          entryList = new Array(mainHeader.diskEntries);
          var index = mainHeader.offset;
          for (var i = 0; i < entryList.length; i++) {
            var tmp = index, entry = new ZipEntry(inBuffer);
            entry.header = inBuffer.slice(tmp, tmp += Utils.Constants.CENHDR);
            entry.entryName = inBuffer.slice(tmp, tmp += entry.header.fileNameLength);
            if (entry.header.extraLength) {
              entry.extra = inBuffer.slice(tmp, tmp += entry.header.extraLength);
            }
            if (entry.header.commentLength)
              entry.comment = inBuffer.slice(tmp, tmp + entry.header.commentLength);
            index += entry.header.entryHeaderSize;
            entryList[i] = entry;
            entryTable[entry.entryName] = entry;
          }
        }
        function readMainHeader(readNow) {
          var i = inBuffer.length - Utils.Constants.ENDHDR, max = Math.max(0, i - 65535), n = max, endStart = inBuffer.length, endOffset = -1, commentEnd = 0;
          for (i; i >= n; i--) {
            if (inBuffer[i] !== 80)
              continue;
            if (inBuffer.readUInt32LE(i) === Utils.Constants.ENDSIG) {
              endOffset = i;
              commentEnd = i;
              endStart = i + Utils.Constants.ENDHDR;
              n = i - Utils.Constants.END64HDR;
              continue;
            }
            if (inBuffer.readUInt32LE(i) === Utils.Constants.END64SIG) {
              n = max;
              continue;
            }
            if (inBuffer.readUInt32LE(i) === Utils.Constants.ZIP64SIG) {
              endOffset = i;
              endStart = i + Utils.readBigUInt64LE(inBuffer, i + Utils.Constants.ZIP64SIZE) + Utils.Constants.ZIP64LEAD;
              break;
            }
          }
          if (!~endOffset)
            throw new Error(Utils.Errors.INVALID_FORMAT);
          mainHeader.loadFromBinary(inBuffer.slice(endOffset, endStart));
          if (mainHeader.commentLength) {
            _comment = inBuffer.slice(commentEnd + Utils.Constants.ENDHDR);
          }
          if (readNow)
            readEntries();
        }
        function sortEntries() {
          if (entryList.length > 1 && !noSort) {
            entryList.sort((a, b) => a.entryName.toLowerCase().localeCompare(b.entryName.toLowerCase()));
          }
        }
        return {
          get entries() {
            if (!loadedEntries) {
              readEntries();
            }
            return entryList;
          },
          get comment() {
            return _comment.toString();
          },
          set comment(val) {
            _comment = Utils.toBuffer(val);
            mainHeader.commentLength = _comment.length;
          },
          getEntryCount: function() {
            if (!loadedEntries) {
              return mainHeader.diskEntries;
            }
            return entryList.length;
          },
          forEach: function(callback) {
            if (!loadedEntries) {
              iterateEntries(callback);
              return;
            }
            entryList.forEach(callback);
          },
          getEntry: function(entryName) {
            if (!loadedEntries) {
              readEntries();
            }
            return entryTable[entryName] || null;
          },
          setEntry: function(entry) {
            if (!loadedEntries) {
              readEntries();
            }
            entryList.push(entry);
            entryTable[entry.entryName] = entry;
            mainHeader.totalEntries = entryList.length;
          },
          deleteEntry: function(entryName) {
            if (!loadedEntries) {
              readEntries();
            }
            var entry = entryTable[entryName];
            if (entry && entry.isDirectory) {
              var _self = this;
              this.getEntryChildren(entry).forEach(function(child) {
                if (child.entryName !== entryName) {
                  _self.deleteEntry(child.entryName);
                }
              });
            }
            entryList.splice(entryList.indexOf(entry), 1);
            delete entryTable[entryName];
            mainHeader.totalEntries = entryList.length;
          },
          getEntryChildren: function(entry) {
            if (!loadedEntries) {
              readEntries();
            }
            if (entry && entry.isDirectory) {
              const list = [];
              const name = entry.entryName;
              const len = name.length;
              entryList.forEach(function(zipEntry) {
                if (zipEntry.entryName.substr(0, len) === name) {
                  list.push(zipEntry);
                }
              });
              return list;
            }
            return [];
          },
          compressToBuffer: function() {
            if (!loadedEntries) {
              readEntries();
            }
            sortEntries();
            const dataBlock = [];
            const entryHeaders = [];
            let totalSize = 0;
            let dindex = 0;
            mainHeader.size = 0;
            mainHeader.offset = 0;
            for (const entry of entryList) {
              const compressedData = entry.getCompressedData();
              entry.header.offset = dindex;
              const dataHeader = entry.header.dataHeaderToBinary();
              const entryNameLen = entry.rawEntryName.length;
              const postHeader = Buffer.alloc(entryNameLen + entry.extra.length);
              entry.rawEntryName.copy(postHeader, 0);
              postHeader.copy(entry.extra, entryNameLen);
              const dataLength = dataHeader.length + postHeader.length + compressedData.length;
              dindex += dataLength;
              dataBlock.push(dataHeader);
              dataBlock.push(postHeader);
              dataBlock.push(compressedData);
              const entryHeader = entry.packHeader();
              entryHeaders.push(entryHeader);
              mainHeader.size += entryHeader.length;
              totalSize += dataLength + entryHeader.length;
            }
            totalSize += mainHeader.mainHeaderSize;
            mainHeader.offset = dindex;
            dindex = 0;
            const outBuffer = Buffer.alloc(totalSize);
            for (const content of dataBlock) {
              content.copy(outBuffer, dindex);
              dindex += content.length;
            }
            for (const content of entryHeaders) {
              content.copy(outBuffer, dindex);
              dindex += content.length;
            }
            const mh = mainHeader.toBinary();
            if (_comment) {
              _comment.copy(mh, Utils.Constants.ENDHDR);
            }
            mh.copy(outBuffer, dindex);
            return outBuffer;
          },
          toAsyncBuffer: function(onSuccess, onFail, onItemStart, onItemEnd) {
            try {
              if (!loadedEntries) {
                readEntries();
              }
              sortEntries();
              const dataBlock = [];
              const entryHeaders = [];
              let totalSize = 0;
              let dindex = 0;
              mainHeader.size = 0;
              mainHeader.offset = 0;
              const compress2Buffer = function(entryLists) {
                if (entryLists.length) {
                  const entry = entryLists.pop();
                  const name = entry.entryName + entry.extra.toString();
                  if (onItemStart)
                    onItemStart(name);
                  entry.getCompressedDataAsync(function(compressedData) {
                    if (onItemEnd)
                      onItemEnd(name);
                    entry.header.offset = dindex;
                    const dataHeader = entry.header.dataHeaderToBinary();
                    const postHeader = Buffer.alloc(name.length, name);
                    const dataLength = dataHeader.length + postHeader.length + compressedData.length;
                    dindex += dataLength;
                    dataBlock.push(dataHeader);
                    dataBlock.push(postHeader);
                    dataBlock.push(compressedData);
                    const entryHeader = entry.packHeader();
                    entryHeaders.push(entryHeader);
                    mainHeader.size += entryHeader.length;
                    totalSize += dataLength + entryHeader.length;
                    compress2Buffer(entryLists);
                  });
                } else {
                  totalSize += mainHeader.mainHeaderSize;
                  mainHeader.offset = dindex;
                  dindex = 0;
                  const outBuffer = Buffer.alloc(totalSize);
                  dataBlock.forEach(function(content) {
                    content.copy(outBuffer, dindex);
                    dindex += content.length;
                  });
                  entryHeaders.forEach(function(content) {
                    content.copy(outBuffer, dindex);
                    dindex += content.length;
                  });
                  const mh = mainHeader.toBinary();
                  if (_comment) {
                    _comment.copy(mh, Utils.Constants.ENDHDR);
                  }
                  mh.copy(outBuffer, dindex);
                  onSuccess(outBuffer);
                }
              };
              compress2Buffer(entryList);
            } catch (e) {
              onFail(e);
            }
          }
        };
      };
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/adm-zip-npm-0.5.9-765c0e1a32-4909bc0411.zip/node_modules/adm-zip/adm-zip.js
  var require_adm_zip = __commonJS({
    "pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/.yarn/cache/adm-zip-npm-0.5.9-765c0e1a32-4909bc0411.zip/node_modules/adm-zip/adm-zip.js"(exports, module) {
      var Utils = require_util();
      var pth = __require("path");
      var ZipEntry = require_zipEntry();
      var ZipFile = require_zipFile();
      var get_Bool = (val, def) => typeof val === "boolean" ? val : def;
      var get_Str = (val, def) => typeof val === "string" ? val : def;
      var defaultOptions = {
        noSort: false,
        readEntries: false,
        method: Utils.Constants.NONE,
        fs: null
      };
      module.exports = function(input, options) {
        let inBuffer = null;
        const opts = Object.assign(Object.create(null), defaultOptions);
        if (input && typeof input === "object") {
          if (!(input instanceof Uint8Array)) {
            Object.assign(opts, input);
            input = opts.input ? opts.input : void 0;
            if (opts.input)
              delete opts.input;
          }
          if (Buffer.isBuffer(input)) {
            inBuffer = input;
            opts.method = Utils.Constants.BUFFER;
            input = void 0;
          }
        }
        Object.assign(opts, options);
        const filetools = new Utils(opts);
        if (input && typeof input === "string") {
          if (filetools.fs.existsSync(input)) {
            opts.method = Utils.Constants.FILE;
            opts.filename = input;
            inBuffer = filetools.fs.readFileSync(input);
          } else {
            throw new Error(Utils.Errors.INVALID_FILENAME);
          }
        }
        const _zip = new ZipFile(inBuffer, opts);
        const {canonical, sanitize} = Utils;
        function getEntry(entry) {
          if (entry && _zip) {
            var item;
            if (typeof entry === "string")
              item = _zip.getEntry(entry);
            if (typeof entry === "object" && typeof entry.entryName !== "undefined" && typeof entry.header !== "undefined")
              item = _zip.getEntry(entry.entryName);
            if (item) {
              return item;
            }
          }
          return null;
        }
        function fixPath(zipPath) {
          const {join, normalize, sep} = pth.posix;
          return join(".", normalize(sep + zipPath.split("\\").join(sep) + sep));
        }
        return {
          readFile: function(entry, pass) {
            var item = getEntry(entry);
            return item && item.getData(pass) || null;
          },
          readFileAsync: function(entry, callback) {
            var item = getEntry(entry);
            if (item) {
              item.getDataAsync(callback);
            } else {
              callback(null, "getEntry failed for:" + entry);
            }
          },
          readAsText: function(entry, encoding) {
            var item = getEntry(entry);
            if (item) {
              var data = item.getData();
              if (data && data.length) {
                return data.toString(encoding || "utf8");
              }
            }
            return "";
          },
          readAsTextAsync: function(entry, callback, encoding) {
            var item = getEntry(entry);
            if (item) {
              item.getDataAsync(function(data, err) {
                if (err) {
                  callback(data, err);
                  return;
                }
                if (data && data.length) {
                  callback(data.toString(encoding || "utf8"));
                } else {
                  callback("");
                }
              });
            } else {
              callback("");
            }
          },
          deleteFile: function(entry) {
            var item = getEntry(entry);
            if (item) {
              _zip.deleteEntry(item.entryName);
            }
          },
          addZipComment: function(comment) {
            _zip.comment = comment;
          },
          getZipComment: function() {
            return _zip.comment || "";
          },
          addZipEntryComment: function(entry, comment) {
            var item = getEntry(entry);
            if (item) {
              item.comment = comment;
            }
          },
          getZipEntryComment: function(entry) {
            var item = getEntry(entry);
            if (item) {
              return item.comment || "";
            }
            return "";
          },
          updateFile: function(entry, content) {
            var item = getEntry(entry);
            if (item) {
              item.setData(content);
            }
          },
          addLocalFile: function(localPath, zipPath, zipName, comment) {
            if (filetools.fs.existsSync(localPath)) {
              zipPath = zipPath ? fixPath(zipPath) : "";
              var p = localPath.split("\\").join("/").split("/").pop();
              zipPath += zipName ? zipName : p;
              const _attr = filetools.fs.statSync(localPath);
              this.addFile(zipPath, filetools.fs.readFileSync(localPath), comment, _attr);
            } else {
              throw new Error(Utils.Errors.FILE_NOT_FOUND.replace("%s", localPath));
            }
          },
          addLocalFolder: function(localPath, zipPath, filter) {
            if (filter instanceof RegExp) {
              filter = function(rx) {
                return function(filename) {
                  return rx.test(filename);
                };
              }(filter);
            } else if (typeof filter !== "function") {
              filter = function() {
                return true;
              };
            }
            zipPath = zipPath ? fixPath(zipPath) : "";
            localPath = pth.normalize(localPath);
            if (filetools.fs.existsSync(localPath)) {
              const items = filetools.findFiles(localPath);
              const self = this;
              if (items.length) {
                items.forEach(function(filepath) {
                  var p = pth.relative(localPath, filepath).split("\\").join("/");
                  if (filter(p)) {
                    var stats = filetools.fs.statSync(filepath);
                    if (stats.isFile()) {
                      self.addFile(zipPath + p, filetools.fs.readFileSync(filepath), "", stats);
                    } else {
                      self.addFile(zipPath + p + "/", Buffer.alloc(0), "", stats);
                    }
                  }
                });
              }
            } else {
              throw new Error(Utils.Errors.FILE_NOT_FOUND.replace("%s", localPath));
            }
          },
          addLocalFolderAsync: function(localPath, callback, zipPath, filter) {
            if (filter instanceof RegExp) {
              filter = function(rx) {
                return function(filename) {
                  return rx.test(filename);
                };
              }(filter);
            } else if (typeof filter !== "function") {
              filter = function() {
                return true;
              };
            }
            zipPath = zipPath ? fixPath(zipPath) : "";
            localPath = pth.normalize(localPath);
            var self = this;
            filetools.fs.open(localPath, "r", function(err) {
              if (err && err.code === "ENOENT") {
                callback(void 0, Utils.Errors.FILE_NOT_FOUND.replace("%s", localPath));
              } else if (err) {
                callback(void 0, err);
              } else {
                var items = filetools.findFiles(localPath);
                var i = -1;
                var next = function() {
                  i += 1;
                  if (i < items.length) {
                    var filepath = items[i];
                    var p = pth.relative(localPath, filepath).split("\\").join("/");
                    p = p.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\x20-\x7E]/g, "");
                    if (filter(p)) {
                      filetools.fs.stat(filepath, function(er0, stats) {
                        if (er0)
                          callback(void 0, er0);
                        if (stats.isFile()) {
                          filetools.fs.readFile(filepath, function(er1, data) {
                            if (er1) {
                              callback(void 0, er1);
                            } else {
                              self.addFile(zipPath + p, data, "", stats);
                              next();
                            }
                          });
                        } else {
                          self.addFile(zipPath + p + "/", Buffer.alloc(0), "", stats);
                          next();
                        }
                      });
                    } else {
                      next();
                    }
                  } else {
                    callback(true, void 0);
                  }
                };
                next();
              }
            });
          },
          addLocalFolderPromise: function(localPath, props) {
            return new Promise((resolve, reject) => {
              const {filter, zipPath} = Object.assign({}, props);
              this.addLocalFolderAsync(localPath, (done, err) => {
                if (err)
                  reject(err);
                if (done)
                  resolve(this);
              }, zipPath, filter);
            });
          },
          addFile: function(entryName, content, comment, attr) {
            let entry = getEntry(entryName);
            const update = entry != null;
            if (!update) {
              entry = new ZipEntry();
              entry.entryName = entryName;
            }
            entry.comment = comment || "";
            const isStat = typeof attr === "object" && attr instanceof filetools.fs.Stats;
            if (isStat) {
              entry.header.time = attr.mtime;
            }
            var fileattr = entry.isDirectory ? 16 : 0;
            if (!Utils.isWin) {
              let unix = entry.isDirectory ? 16384 : 32768;
              if (isStat) {
                unix |= 4095 & attr.mode;
              } else if (typeof attr === "number") {
                unix |= 4095 & attr;
              } else {
                unix |= entry.isDirectory ? 493 : 420;
              }
              fileattr = (fileattr | unix << 16) >>> 0;
            }
            entry.attr = fileattr;
            entry.setData(content);
            if (!update)
              _zip.setEntry(entry);
          },
          getEntries: function() {
            return _zip ? _zip.entries : [];
          },
          getEntry: function(name) {
            return getEntry(name);
          },
          getEntryCount: function() {
            return _zip.getEntryCount();
          },
          forEach: function(callback) {
            return _zip.forEach(callback);
          },
          extractEntryTo: function(entry, targetPath, maintainEntryPath, overwrite, keepOriginalPermission, outFileName) {
            overwrite = get_Bool(overwrite, false);
            keepOriginalPermission = get_Bool(keepOriginalPermission, false);
            maintainEntryPath = get_Bool(maintainEntryPath, true);
            outFileName = get_Str(outFileName, get_Str(keepOriginalPermission, void 0));
            var item = getEntry(entry);
            if (!item) {
              throw new Error(Utils.Errors.NO_ENTRY);
            }
            var entryName = canonical(item.entryName);
            var target = sanitize(targetPath, outFileName && !item.isDirectory ? outFileName : maintainEntryPath ? entryName : pth.basename(entryName));
            if (item.isDirectory) {
              var children = _zip.getEntryChildren(item);
              children.forEach(function(child) {
                if (child.isDirectory)
                  return;
                var content2 = child.getData();
                if (!content2) {
                  throw new Error(Utils.Errors.CANT_EXTRACT_FILE);
                }
                var name = canonical(child.entryName);
                var childName = sanitize(targetPath, maintainEntryPath ? name : pth.basename(name));
                const fileAttr2 = keepOriginalPermission ? child.header.fileAttr : void 0;
                filetools.writeFileTo(childName, content2, overwrite, fileAttr2);
              });
              return true;
            }
            var content = item.getData();
            if (!content)
              throw new Error(Utils.Errors.CANT_EXTRACT_FILE);
            if (filetools.fs.existsSync(target) && !overwrite) {
              throw new Error(Utils.Errors.CANT_OVERRIDE);
            }
            const fileAttr = keepOriginalPermission ? entry.header.fileAttr : void 0;
            filetools.writeFileTo(target, content, overwrite, fileAttr);
            return true;
          },
          test: function(pass) {
            if (!_zip) {
              return false;
            }
            for (var entry in _zip.entries) {
              try {
                if (entry.isDirectory) {
                  continue;
                }
                var content = _zip.entries[entry].getData(pass);
                if (!content) {
                  return false;
                }
              } catch (err) {
                return false;
              }
            }
            return true;
          },
          extractAllTo: function(targetPath, overwrite, keepOriginalPermission, pass) {
            overwrite = get_Bool(overwrite, false);
            pass = get_Str(keepOriginalPermission, pass);
            keepOriginalPermission = get_Bool(keepOriginalPermission, false);
            if (!_zip) {
              throw new Error(Utils.Errors.NO_ZIP);
            }
            _zip.entries.forEach(function(entry) {
              var entryName = sanitize(targetPath, canonical(entry.entryName.toString()));
              if (entry.isDirectory) {
                filetools.makeDir(entryName);
                return;
              }
              var content = entry.getData(pass);
              if (!content) {
                throw new Error(Utils.Errors.CANT_EXTRACT_FILE);
              }
              const fileAttr = keepOriginalPermission ? entry.header.fileAttr : void 0;
              filetools.writeFileTo(entryName, content, overwrite, fileAttr);
              try {
                filetools.fs.utimesSync(entryName, entry.header.time, entry.header.time);
              } catch (err) {
                throw new Error(Utils.Errors.CANT_EXTRACT_FILE);
              }
            });
          },
          extractAllToAsync: function(targetPath, overwrite, keepOriginalPermission, callback) {
            if (!callback) {
              callback = function() {
              };
            }
            overwrite = get_Bool(overwrite, false);
            if (typeof keepOriginalPermission === "function" && !callback)
              callback = keepOriginalPermission;
            keepOriginalPermission = get_Bool(keepOriginalPermission, false);
            if (!_zip) {
              callback(new Error(Utils.Errors.NO_ZIP));
              return;
            }
            targetPath = pth.resolve(targetPath);
            const getPath = (entry) => sanitize(targetPath, pth.normalize(canonical(entry.entryName.toString())));
            const getError = (msg, file) => new Error(msg + ': "' + file + '"');
            const dirEntries = [];
            const fileEntries = new Set();
            _zip.entries.forEach((e) => {
              if (e.isDirectory) {
                dirEntries.push(e);
              } else {
                fileEntries.add(e);
              }
            });
            for (const entry of dirEntries) {
              const dirPath = getPath(entry);
              const dirAttr = keepOriginalPermission ? entry.header.fileAttr : void 0;
              try {
                filetools.makeDir(dirPath);
                if (dirAttr)
                  filetools.fs.chmodSync(dirPath, dirAttr);
                filetools.fs.utimesSync(dirPath, entry.header.time, entry.header.time);
              } catch (er) {
                callback(getError("Unable to create folder", dirPath));
              }
            }
            const done = () => {
              if (fileEntries.size === 0) {
                callback();
              }
            };
            for (const entry of fileEntries.values()) {
              const entryName = pth.normalize(canonical(entry.entryName.toString()));
              const filePath = sanitize(targetPath, entryName);
              entry.getDataAsync(function(content, err_1) {
                if (err_1) {
                  callback(new Error(err_1));
                  return;
                }
                if (!content) {
                  callback(new Error(Utils.Errors.CANT_EXTRACT_FILE));
                } else {
                  const fileAttr = keepOriginalPermission ? entry.header.fileAttr : void 0;
                  filetools.writeFileToAsync(filePath, content, overwrite, fileAttr, function(succ) {
                    if (!succ) {
                      callback(getError("Unable to write file", filePath));
                      return;
                    }
                    filetools.fs.utimes(filePath, entry.header.time, entry.header.time, function(err_2) {
                      if (err_2) {
                        callback(getError("Unable to set times", filePath));
                        return;
                      }
                      fileEntries.delete(entry);
                      done();
                    });
                  });
                }
              });
            }
            done();
          },
          writeZip: function(targetFileName, callback) {
            if (arguments.length === 1) {
              if (typeof targetFileName === "function") {
                callback = targetFileName;
                targetFileName = "";
              }
            }
            if (!targetFileName && opts.filename) {
              targetFileName = opts.filename;
            }
            if (!targetFileName)
              return;
            var zipData = _zip.compressToBuffer();
            if (zipData) {
              var ok = filetools.writeFileTo(targetFileName, zipData, true);
              if (typeof callback === "function")
                callback(!ok ? new Error("failed") : null, "");
            }
          },
          writeZipPromise: function(targetFileName, props) {
            const {overwrite, perm} = Object.assign({overwrite: true}, props);
            return new Promise((resolve, reject) => {
              if (!targetFileName && opts.filename)
                targetFileName = opts.filename;
              if (!targetFileName)
                reject("ADM-ZIP: ZIP File Name Missing");
              this.toBufferPromise().then((zipData) => {
                const ret = (done) => done ? resolve(done) : reject("ADM-ZIP: Wasn't able to write zip file");
                filetools.writeFileToAsync(targetFileName, zipData, overwrite, perm, ret);
              }, reject);
            });
          },
          toBufferPromise: function() {
            return new Promise((resolve, reject) => {
              _zip.toAsyncBuffer(resolve, reject);
            });
          },
          toBuffer: function(onSuccess, onFail, onItemStart, onItemEnd) {
            this.valueOf = 2;
            if (typeof onSuccess === "function") {
              _zip.toAsyncBuffer(onSuccess, onFail, onItemStart, onItemEnd);
              return null;
            }
            return _zip.compressToBuffer();
          }
        };
      };
    }
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/packages/yarn-plugin-bundle/sources/index.ts
  var sources_exports = {};
  __export(sources_exports, {
    default: () => sources_default
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/packages/yarn-plugin-bundle/sources/commands/bundle.ts
  var import_process = __toModule(__require("process"));
  var import_path = __toModule(__require("path"));
  var import_fs_extra = __toModule(require_lib());
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
  var LOG_GROUP = Object.freeze({
    START: " \u250C",
    PROGRESS: " \u2502",
    END: " \u2514"
  });
  var Logger = class {
    constructor() {
      this.isDebug = false;
      this.groupNesting = 0;
      this.groupTimers = new Map();
      this.transport = console;
    }
    setDebug(enabled) {
      this.isDebug = enabled;
      return this;
    }
    setTransport(transport) {
      this.transport = transport;
      return this;
    }
    groupStart(group) {
      this.groupNesting += 1;
      const preMsg = `${this.nestedGroup()}${LOG_GROUP.START}`;
      this.groupTimers.set(group, new Date().getTime());
      this.transport.log(`${preMsg} ${group}`);
      CI && this.transport.log(`::group::${group}
`);
    }
    groupEnd(group) {
      const duration = prettyDuration(new Date().getTime() - this.groupTimers.get(group));
      const preMsg = `${this.nestedGroup()}${LOG_GROUP.END}`;
      CI && this.transport.log(`::endgroup::
`);
      this.transport.log(`${preMsg} Completed in ${duration}`);
      this.groupNesting -= 1;
    }
    log(message, ...args) {
      this._log("error", message, color.log);
      this._log("error", args, color.log);
    }
    error({message, stack}) {
      return stack ? this._log("error", [stack], color.error) : this._log("error", message, color.error);
    }
    verbose(message, ...args) {
      if (!this.isDebug)
        return;
      this._log("log", message, color.verbose);
      this._log("log", args, color.verbose);
    }
    _log(level, message, cb = (msg) => msg) {
      const isNested = Array.isArray(message);
      const prefix = `${this.nestedGroup()}${LOG_GROUP.PROGRESS}`;
      const separator = isNested ? "    \u2219 " : "  \u27A4 ";
      const messages = isNested ? message : [message];
      messages.forEach((message2) => stringify(message2).split("\n").forEach((row) => {
        this.transport[level](`${prefix}${separator}${cb(row)}`);
      }));
    }
    nestedGroup() {
      const nestingLevel = this.groupNesting - 1;
      return nestingLevel > 0 ? LOG_GROUP.PROGRESS.repeat(nestingLevel) : "";
    }
  };
  var logger = new Logger();

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/packages/yarn-plugin-bundle/sources/common/logger/logger.decorator.ts
  var LoggerDecorator = (group) => {
    return (target, propertyKey, descriptor) => {
      const originalMethod = descriptor.value;
      descriptor.value = async function(...args) {
        logger.groupStart(group);
        try {
          return await originalMethod.call(this, ...args);
        } catch (error) {
          logger.error(error);
          throw error;
        } finally {
          logger.groupEnd(group);
        }
      };
      return descriptor;
    };
  };

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/packages/yarn-plugin-bundle/sources/common/exec-promise.ts
  var import_child_process = __toModule(__require("child_process"));
  var bufferToString = (buffers) => Buffer.concat(buffers).toString().trim();
  var execPromise = async (command) => new Promise((resolve, reject) => {
    const [spawnCommand, ...args] = command.split(/\s+/);
    const chunks = [];
    const errorChunks = [];
    const spawnProcess = (0, import_child_process.spawn)(spawnCommand, args);
    spawnProcess.stdout.on("data", (data) => chunks.push(data));
    spawnProcess.stderr.on("data", (data) => errorChunks.push(data));
    spawnProcess.on("error", (error) => reject(error));
    spawnProcess.on("close", (code) => {
      return code === 1 ? reject(bufferToString(errorChunks)) : resolve(bufferToString(chunks));
    });
  });

  // pnp:/Users/avyzhanov/code/lembdev/yarn-plugins/packages/yarn-plugin-bundle/sources/commands/bundle.ts
  var import_adm_zip = __toModule(require_adm_zip());
  var TMP_FOLDER = "/tmp";
  var EXIT_CODE = {
    SUCCESS: 0,
    ERROR: 1
  };
  var BundleCommand = class extends import_cli.BaseCommand {
    constructor() {
      super(...arguments);
      this.isDebug = import_clipanion.Option.Boolean(`--debug`, false, {
        description: `Do not clear tmp folder`
      });
      this.restOptions = import_clipanion.Option.Rest();
      this.tmpDir = import_path.default.resolve(TMP_FOLDER, import_process.default.pid.toString());
      this.rootDir = import_process.default.env.OLDPWD;
    }
    async execute() {
      this.configuration = await import_core.Configuration.find(this.context.cwd, this.context.plugins);
      logger.setDebug(this.isDebug);
      try {
        await this.init();
        await this.processDependencies();
        await this.makeArchive();
        return EXIT_CODE.SUCCESS;
      } catch (error) {
        return EXIT_CODE.ERROR;
      } finally {
        await this.restoreDeps();
        await this.clearTmp();
      }
    }
    async init() {
      await this.resolveWorkspace();
      await this.resolveWorkspacesList();
      await this.resolveTargetPackageName();
      await this.resolveTargetPackageDeps();
      logger.verbose(`Tmp directory: '${this.tmpDir}'`);
      logger.verbose(`Root directory: '${this.rootDir}'`);
    }
    async processDependencies() {
      const packagesList = [this.targetPackageName, ...this.targetPackageDeps];
      for (const packageName of packagesList) {
        await this.installPackageDeps(packageName);
        await this.copyPackageDeps();
        await this.copySource(packageName);
      }
    }
    async makeArchive() {
      return new Promise((resolve, reject) => {
        const zip = new import_adm_zip.default();
        const targetFileName = `${this.targetPackageName.split("/").pop()}.zip`;
        zip.addLocalFolder(this.tmpDir);
        zip.writeZip(import_path.default.resolve(this.rootDir, targetFileName), (error) => error ? reject(error) : resolve(void 0));
      });
    }
    async resolveWorkspace() {
      const {workspace} = await import_core.Project.find(this.configuration, this.context.cwd);
      this.workspace = workspace;
    }
    async resolveWorkspacesList() {
      const packages = new Map();
      const result = await execPromise("yarn workspaces list --json");
      result.split("\n").forEach((row) => {
        const {name, location} = JSON.parse(row);
        if (location === ".")
          return;
        packages.set(name, location);
      });
      logger.verbose("Workspaces:", [...packages.keys()]);
      this.workspacesList = packages;
    }
    async resolveTargetPackageName() {
      const targetPackageName = this.restOptions.length ? this.restOptions[0] : this.workspace.manifest.raw.name;
      if (!this.workspacesList.has(targetPackageName)) {
        throw new Error("Package not listed in yarn workspace packages");
      }
      logger.log(`Target package: "${targetPackageName}"`);
      this.targetPackageName = targetPackageName;
    }
    async resolveTargetPackageDeps() {
      const targetPackageDeps = new Set();
      const packageLocation = this.workspacesList.get(this.targetPackageName);
      if (!packageLocation) {
        throw new Error("package not in yarn workspace");
      }
      const packageInfoPath = import_path.default.resolve(this.rootDir, packageLocation, "package.json");
      logger.verbose(`Load "${color.accent(packageInfoPath)}" file`);
      const {dependencies} = JSON.parse(import_fs_extra.default.readFileSync(packageInfoPath, "utf-8"));
      if (dependencies) {
        Object.entries(dependencies).forEach(([depName]) => {
          if (this.workspacesList.has(depName)) {
            targetPackageDeps.add(depName);
          }
        });
      }
      if (targetPackageDeps.size) {
        logger.verbose("target package local dependencies:", targetPackageDeps);
      } else {
        logger.log("target package has no local dependencies");
      }
      this.targetPackageDeps = targetPackageDeps;
    }
    async installPackageDeps(packageName) {
      logger.verbose(`Package: ${packageName}`);
      const result = await execPromise(`yarn workspaces focus ${this.targetPackageName} --production`);
      logger.verbose(result);
    }
    async copyPackageDeps() {
      const targetDir = import_path.default.resolve(this.rootDir, "node_modules");
      const destDir = import_path.default.resolve(this.tmpDir, "node_modules");
      logger.verbose(`Copy '${targetDir}' to '${destDir}'`);
      await import_fs_extra.default.copy(targetDir, destDir, {
        overwrite: false,
        dereference: true,
        recursive: true
      });
      logger.verbose(`Copy '${targetDir}' to '${destDir}' ${color.success("completed")}`);
    }
    async copySource(packageName) {
      const isTargetPackage = packageName === this.targetPackageName;
      const targetDir = import_path.default.resolve(this.rootDir, this.workspacesList.get(packageName));
      const destDir = isTargetPackage ? this.tmpDir : import_path.default.resolve(this.tmpDir, "node_modules", packageName);
      logger.verbose(`Copy '${targetDir}' to '${destDir}'`);
      await import_fs_extra.default.copy(targetDir, destDir, {
        overwrite: false,
        dereference: true,
        recursive: true
      });
      logger.verbose(`Copy '${targetDir}' to '${destDir}' ${color.success("completed")}`);
    }
    async restoreDeps() {
      await execPromise(`yarn install`);
    }
    async clearTmp() {
      return new Promise((resolve, reject) => {
        import_fs_extra.default.remove(this.tmpDir, (error) => error ? reject(error) : resolve(void 0));
      });
    }
  };
  BundleCommand.paths = [[`bundle`]];
  __decorateClass([
    LoggerDecorator("Plugin initialization")
  ], BundleCommand.prototype, "init", 1);
  __decorateClass([
    LoggerDecorator("Process packages")
  ], BundleCommand.prototype, "processDependencies", 1);
  __decorateClass([
    LoggerDecorator("Make archive")
  ], BundleCommand.prototype, "makeArchive", 1);
  __decorateClass([
    LoggerDecorator("Resolve workspace")
  ], BundleCommand.prototype, "resolveWorkspace", 1);
  __decorateClass([
    LoggerDecorator("Resolve workspaces list")
  ], BundleCommand.prototype, "resolveWorkspacesList", 1);
  __decorateClass([
    LoggerDecorator("Resolve target package name")
  ], BundleCommand.prototype, "resolveTargetPackageName", 1);
  __decorateClass([
    LoggerDecorator("Resolve target package dependencies")
  ], BundleCommand.prototype, "resolveTargetPackageDeps", 1);
  __decorateClass([
    LoggerDecorator("Install package dependencies")
  ], BundleCommand.prototype, "installPackageDeps", 1);
  __decorateClass([
    LoggerDecorator("Copy package dependencies")
  ], BundleCommand.prototype, "copyPackageDeps", 1);
  __decorateClass([
    LoggerDecorator("Copy source")
  ], BundleCommand.prototype, "copySource", 1);
  __decorateClass([
    LoggerDecorator("Revert all dependencies")
  ], BundleCommand.prototype, "restoreDeps", 1);
  __decorateClass([
    LoggerDecorator("Clear tmp folder")
  ], BundleCommand.prototype, "clearTmp", 1);
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
