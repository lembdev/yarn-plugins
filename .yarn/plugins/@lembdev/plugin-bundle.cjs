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
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // ../../../../../.yarn/berry/cache/original-fs-npm-1.1.0-0dc4e6db15-10c0.zip/node_modules/original-fs/index.js
  var require_original_fs = __commonJS({
    "../../../../../.yarn/berry/cache/original-fs-npm-1.1.0-0dc4e6db15-10c0.zip/node_modules/original-fs/index.js"(exports, module) {
      "use strict";
      var _default = __require("fs");
      module.exports = _default;
    }
  });

  // ../../../../../.yarn/berry/cache/adm-zip-npm-0.5.14-2df92cc02d-10c0.zip/node_modules/adm-zip/util/fileSystem.js
  var require_fileSystem = __commonJS({
    "../../../../../.yarn/berry/cache/adm-zip-npm-0.5.14-2df92cc02d-10c0.zip/node_modules/adm-zip/util/fileSystem.js"(exports) {
      exports.require = function() {
        if (typeof process === "object" && process.versions && process.versions["electron"]) {
          try {
            const originalFs = require_original_fs();
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

  // ../../../../../.yarn/berry/cache/adm-zip-npm-0.5.14-2df92cc02d-10c0.zip/node_modules/adm-zip/util/constants.js
  var require_constants = __commonJS({
    "../../../../../.yarn/berry/cache/adm-zip-npm-0.5.14-2df92cc02d-10c0.zip/node_modules/adm-zip/util/constants.js"(exports, module) {
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

  // ../../../../../.yarn/berry/cache/adm-zip-npm-0.5.14-2df92cc02d-10c0.zip/node_modules/adm-zip/util/errors.js
  var require_errors = __commonJS({
    "../../../../../.yarn/berry/cache/adm-zip-npm-0.5.14-2df92cc02d-10c0.zip/node_modules/adm-zip/util/errors.js"(exports, module) {
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
        DISK_ENTRY_TOO_LARGE: "Number of disk entries is too large",
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

  // ../../../../../.yarn/berry/cache/adm-zip-npm-0.5.14-2df92cc02d-10c0.zip/node_modules/adm-zip/util/utils.js
  var require_utils = __commonJS({
    "../../../../../.yarn/berry/cache/adm-zip-npm-0.5.14-2df92cc02d-10c0.zip/node_modules/adm-zip/util/utils.js"(exports, module) {
      var fsystem = require_fileSystem().require();
      var pth = __require("path");
      var Constants = require_constants();
      var Errors = require_errors();
      var isWin = typeof process === "object" && "win32" === process.platform;
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
      Utils.prototype.writeFileTo = function(path3, content, overwrite, attr) {
        const self = this;
        if (self.fs.existsSync(path3)) {
          if (!overwrite)
            return false;
          var stat = self.fs.statSync(path3);
          if (stat.isDirectory()) {
            return false;
          }
        }
        var folder = pth.dirname(path3);
        if (!self.fs.existsSync(folder)) {
          self.makeDir(folder);
        }
        var fd;
        try {
          fd = self.fs.openSync(path3, "w", 438);
        } catch (e) {
          self.fs.chmodSync(path3, 438);
          fd = self.fs.openSync(path3, "w", 438);
        }
        if (fd) {
          try {
            self.fs.writeSync(fd, content, 0, content.length, 0);
          } finally {
            self.fs.closeSync(fd);
          }
        }
        self.fs.chmodSync(path3, attr || 438);
        return true;
      };
      Utils.prototype.writeFileToAsync = function(path3, content, overwrite, attr, callback) {
        if (typeof attr === "function") {
          callback = attr;
          attr = void 0;
        }
        const self = this;
        self.fs.exists(path3, function(exist) {
          if (exist && !overwrite)
            return callback(false);
          self.fs.stat(path3, function(err, stat) {
            if (exist && stat.isDirectory()) {
              return callback(false);
            }
            var folder = pth.dirname(path3);
            self.fs.exists(folder, function(exists) {
              if (!exists)
                self.makeDir(folder);
              self.fs.open(path3, "w", 438, function(err2, fd) {
                if (err2) {
                  self.fs.chmod(path3, 438, function() {
                    self.fs.open(path3, "w", 438, function(err3, fd2) {
                      self.fs.write(fd2, content, 0, content.length, 0, function() {
                        self.fs.close(fd2, function() {
                          self.fs.chmod(path3, attr || 438, function() {
                            callback(true);
                          });
                        });
                      });
                    });
                  });
                } else if (fd) {
                  self.fs.write(fd, content, 0, content.length, 0, function() {
                    self.fs.close(fd, function() {
                      self.fs.chmod(path3, attr || 438, function() {
                        callback(true);
                      });
                    });
                  });
                } else {
                  self.fs.chmod(path3, attr || 438, function() {
                    callback(true);
                  });
                }
              });
            });
          });
        });
      };
      Utils.prototype.findFiles = function(path3) {
        const self = this;
        function findSync(dir, pattern, recursive) {
          if (typeof pattern === "boolean") {
            recursive = pattern;
            pattern = void 0;
          }
          let files = [];
          self.fs.readdirSync(dir).forEach(function(file) {
            var path4 = pth.join(dir, file);
            if (self.fs.statSync(path4).isDirectory() && recursive)
              files = files.concat(findSync(path4, pattern, recursive));
            if (!pattern || pattern.test(path4)) {
              files.push(pth.normalize(path4) + (self.fs.statSync(path4).isDirectory() ? self.sep : ""));
            }
          });
          return files;
        }
        return findSync(path3, void 0, true);
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
      Utils.canonical = function(path3) {
        if (!path3)
          return "";
        var safeSuffix = pth.posix.normalize("/" + path3.split("\\").join("/"));
        return pth.join(".", safeSuffix);
      };
      Utils.sanitize = function(prefix, name) {
        prefix = pth.resolve(pth.normalize(prefix));
        var parts = name.split("/");
        for (var i = 0, l = parts.length; i < l; i++) {
          var path3 = pth.normalize(pth.join(prefix, parts.slice(i, l).join(pth.sep)));
          if (path3.indexOf(prefix) === 0) {
            return path3;
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

  // ../../../../../.yarn/berry/cache/adm-zip-npm-0.5.14-2df92cc02d-10c0.zip/node_modules/adm-zip/util/fattr.js
  var require_fattr = __commonJS({
    "../../../../../.yarn/berry/cache/adm-zip-npm-0.5.14-2df92cc02d-10c0.zip/node_modules/adm-zip/util/fattr.js"(exports, module) {
      var fs = require_fileSystem().require();
      var pth = __require("path");
      fs.existsSync = fs.existsSync || pth.existsSync;
      module.exports = function(path3) {
        var _path = path3 || "", _obj = newAttr(), _stat = null;
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
        if (_path && fs.existsSync(_path)) {
          _stat = fs.statSync(_path);
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

  // ../../../../../.yarn/berry/cache/adm-zip-npm-0.5.14-2df92cc02d-10c0.zip/node_modules/adm-zip/util/index.js
  var require_util = __commonJS({
    "../../../../../.yarn/berry/cache/adm-zip-npm-0.5.14-2df92cc02d-10c0.zip/node_modules/adm-zip/util/index.js"(exports, module) {
      module.exports = require_utils();
      module.exports.Constants = require_constants();
      module.exports.Errors = require_errors();
      module.exports.FileAttr = require_fattr();
    }
  });

  // ../../../../../.yarn/berry/cache/adm-zip-npm-0.5.14-2df92cc02d-10c0.zip/node_modules/adm-zip/headers/entryHeader.js
  var require_entryHeader = __commonJS({
    "../../../../../.yarn/berry/cache/adm-zip-npm-0.5.14-2df92cc02d-10c0.zip/node_modules/adm-zip/headers/entryHeader.js"(exports, module) {
      var Utils = require_util();
      var Constants = Utils.Constants;
      module.exports = function() {
        var _verMade = 20, _version = 10, _flags = 0, _method = 0, _time = 0, _crc = 0, _compressedSize = 0, _size = 0, _fnameLen = 0, _extraLen = 0, _comLen = 0, _diskStart = 0, _inattr = 0, _attr = 0, _offset = 0;
        _verMade |= Utils.isWin ? 2560 : 768;
        _flags |= Constants.FLG_EFS;
        var _localHeader = {};
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
          get timeHighByte() {
            return _time >>> 8 & 255;
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
          get encrypted() {
            return (_flags & 1) === 1;
          },
          get centralHeaderSize() {
            return Constants.CENHDR + _fnameLen + _extraLen + _comLen;
          },
          get realDataOffset() {
            return _offset + Constants.LOCHDR + _localHeader.fnameLen + _localHeader.extraLen;
          },
          get localHeader() {
            return _localHeader;
          },
          loadLocalHeaderFromBinary: function(input) {
            var data = input.slice(_offset, _offset + Constants.LOCHDR);
            if (data.readUInt32LE(0) !== Constants.LOCSIG) {
              throw new Error(Utils.Errors.INVALID_LOC);
            }
            _localHeader = {
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
          localHeaderToBinary: function() {
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
          centralHeaderToBinary: function() {
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
              centralHeaderSize: bytes(Constants.CENHDR + _fnameLen + _extraLen + _comLen)
            };
          },
          toString: function() {
            return JSON.stringify(this.toJSON(), null, "	");
          }
        };
      };
    }
  });

  // ../../../../../.yarn/berry/cache/adm-zip-npm-0.5.14-2df92cc02d-10c0.zip/node_modules/adm-zip/headers/mainHeader.js
  var require_mainHeader = __commonJS({
    "../../../../../.yarn/berry/cache/adm-zip-npm-0.5.14-2df92cc02d-10c0.zip/node_modules/adm-zip/headers/mainHeader.js"(exports, module) {
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
              _size = Utils.readBigUInt64LE(data, Constants.ZIP64SIZE);
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

  // ../../../../../.yarn/berry/cache/adm-zip-npm-0.5.14-2df92cc02d-10c0.zip/node_modules/adm-zip/headers/index.js
  var require_headers = __commonJS({
    "../../../../../.yarn/berry/cache/adm-zip-npm-0.5.14-2df92cc02d-10c0.zip/node_modules/adm-zip/headers/index.js"(exports) {
      exports.EntryHeader = require_entryHeader();
      exports.MainHeader = require_mainHeader();
    }
  });

  // ../../../../../.yarn/berry/cache/adm-zip-npm-0.5.14-2df92cc02d-10c0.zip/node_modules/adm-zip/methods/deflater.js
  var require_deflater = __commonJS({
    "../../../../../.yarn/berry/cache/adm-zip-npm-0.5.14-2df92cc02d-10c0.zip/node_modules/adm-zip/methods/deflater.js"(exports, module) {
      module.exports = function(inbuf) {
        var zlib = __require("zlib");
        var opts = { chunkSize: (parseInt(inbuf.length / 1024) + 1) * 1024 };
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

  // ../../../../../.yarn/berry/cache/adm-zip-npm-0.5.14-2df92cc02d-10c0.zip/node_modules/adm-zip/methods/inflater.js
  var require_inflater = __commonJS({
    "../../../../../.yarn/berry/cache/adm-zip-npm-0.5.14-2df92cc02d-10c0.zip/node_modules/adm-zip/methods/inflater.js"(exports, module) {
      var version = +(process.versions ? process.versions.node : "").split(".")[0] || 0;
      module.exports = function(inbuf, expectedLength) {
        var zlib = __require("zlib");
        const option = version >= 15 && expectedLength > 0 ? { maxOutputLength: expectedLength } : {};
        return {
          inflate: function() {
            return zlib.inflateRawSync(inbuf, option);
          },
          inflateAsync: function(callback) {
            var tmp = zlib.createInflateRaw(option), parts = [], total = 0;
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

  // ../../../../../.yarn/berry/cache/adm-zip-npm-0.5.14-2df92cc02d-10c0.zip/node_modules/adm-zip/methods/zipcrypto.js
  var require_zipcrypto = __commonJS({
    "../../../../../.yarn/berry/cache/adm-zip-npm-0.5.14-2df92cc02d-10c0.zip/node_modules/adm-zip/methods/zipcrypto.js"(exports, module) {
      "use strict";
      var { randomFillSync } = __require("crypto");
      var crctable = new Uint32Array(256).map((t, crc) => {
        for (let j = 0; j < 8; j++) {
          if (0 !== (crc & 1)) {
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
        if ("function" === typeof randomFillSync) {
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
        const verifyByte = (header.flags & 8) === 8 ? header.timeHighByte : header.crc >>> 24;
        if (salt[11] !== verifyByte) {
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
      module.exports = { decrypt, encrypt, _salter };
    }
  });

  // ../../../../../.yarn/berry/cache/adm-zip-npm-0.5.14-2df92cc02d-10c0.zip/node_modules/adm-zip/methods/index.js
  var require_methods = __commonJS({
    "../../../../../.yarn/berry/cache/adm-zip-npm-0.5.14-2df92cc02d-10c0.zip/node_modules/adm-zip/methods/index.js"(exports) {
      exports.Deflater = require_deflater();
      exports.Inflater = require_inflater();
      exports.ZipCrypto = require_zipcrypto();
    }
  });

  // ../../../../../.yarn/berry/cache/adm-zip-npm-0.5.14-2df92cc02d-10c0.zip/node_modules/adm-zip/zipEntry.js
  var require_zipEntry = __commonJS({
    "../../../../../.yarn/berry/cache/adm-zip-npm-0.5.14-2df92cc02d-10c0.zip/node_modules/adm-zip/zipEntry.js"(exports, module) {
      var Utils = require_util();
      var Headers = require_headers();
      var Constants = Utils.Constants;
      var Methods = require_methods();
      module.exports = function(input) {
        var _centralHeader = new Headers.EntryHeader(), _entryName = Buffer.alloc(0), _comment = Buffer.alloc(0), _isDirectory = false, uncompressedData = null, _extra = Buffer.alloc(0);
        function getCompressedDataFromZip() {
          if (!input || !(input instanceof Uint8Array)) {
            return Buffer.alloc(0);
          }
          _centralHeader.loadLocalHeaderFromBinary(input);
          return input.slice(_centralHeader.realDataOffset, _centralHeader.realDataOffset + _centralHeader.compressedSize);
        }
        function crc32OK(data) {
          if ((_centralHeader.flags & 8) !== 8) {
            if (Utils.crc32(data) !== _centralHeader.localHeader.crc) {
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
          if (_centralHeader.encrypted) {
            if ("string" !== typeof pass && !Buffer.isBuffer(pass)) {
              throw new Error("ADM-ZIP: Incompatible password parameter");
            }
            compressedData = Methods.ZipCrypto.decrypt(compressedData, _centralHeader, pass);
          }
          var data = Buffer.alloc(_centralHeader.size);
          switch (_centralHeader.method) {
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
              var inflater = new Methods.Inflater(compressedData, _centralHeader.size);
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
            switch (_centralHeader.method) {
              case Utils.Constants.STORED:
                _centralHeader.compressedSize = _centralHeader.size;
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
                  _centralHeader.compressedSize = deflated.length;
                  return deflated;
                } else {
                  deflater.deflateAsync(function(data) {
                    compressedData = Buffer.alloc(data.length);
                    _centralHeader.compressedSize = data.length;
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
            if (_centralHeader.size === Constants.EF_ZIP64_OR_32) {
              _centralHeader.size = size;
            }
          }
          if (data.length >= Constants.EF_ZIP64_RHO) {
            compressedSize = readUInt64LE(data, Constants.EF_ZIP64_SCOMP);
            if (_centralHeader.compressedSize === Constants.EF_ZIP64_OR_32) {
              _centralHeader.compressedSize = compressedSize;
            }
          }
          if (data.length >= Constants.EF_ZIP64_DSN) {
            offset = readUInt64LE(data, Constants.EF_ZIP64_RHO);
            if (_centralHeader.offset === Constants.EF_ZIP64_OR_32) {
              _centralHeader.offset = offset;
            }
          }
          if (data.length >= Constants.EF_ZIP64_DSN + 4) {
            diskNumStart = data.readUInt32LE(Constants.EF_ZIP64_DSN);
            if (_centralHeader.diskNumStart === Constants.EF_ZIP64_OR_16) {
              _centralHeader.diskNumStart = diskNumStart;
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
            _centralHeader.fileNameLength = _entryName.length;
          },
          get extra() {
            return _extra;
          },
          set extra(val) {
            _extra = val;
            _centralHeader.extraLength = val.length;
            parseExtra(val);
          },
          get comment() {
            return _comment.toString();
          },
          set comment(val) {
            _comment = Utils.toBuffer(val);
            _centralHeader.commentLength = _comment.length;
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
              _centralHeader.size = uncompressedData.length;
              _centralHeader.method = Utils.Constants.DEFLATED;
              _centralHeader.crc = Utils.crc32(value);
              _centralHeader.changed = true;
            } else {
              _centralHeader.method = Utils.Constants.STORED;
            }
          },
          getData: function(pass) {
            if (_centralHeader.changed) {
              return uncompressedData;
            } else {
              return decompress(false, null, pass);
            }
          },
          getDataAsync: function(callback, pass) {
            if (_centralHeader.changed) {
              callback(uncompressedData);
            } else {
              decompress(true, callback, pass);
            }
          },
          set attr(attr) {
            _centralHeader.attr = attr;
          },
          get attr() {
            return _centralHeader.attr;
          },
          set header(data) {
            _centralHeader.loadFromBinary(data);
          },
          get header() {
            return _centralHeader;
          },
          packCentralHeader: function() {
            var header = _centralHeader.centralHeaderToBinary();
            var addpos = Utils.Constants.CENHDR;
            _entryName.copy(header, addpos);
            addpos += _entryName.length;
            if (_centralHeader.extraLength) {
              _extra.copy(header, addpos);
              addpos += _centralHeader.extraLength;
            }
            if (_centralHeader.commentLength) {
              _comment.copy(header, addpos);
            }
            return header;
          },
          packLocalHeader: function() {
            let addpos = 0;
            const localHeaderBuf = _centralHeader.localHeaderToBinary();
            const localHeader = Buffer.alloc(localHeaderBuf.length + _entryName.length + _extra.length);
            localHeaderBuf.copy(localHeader, addpos);
            addpos += localHeaderBuf.length;
            _entryName.copy(localHeader, addpos);
            addpos += _entryName.length;
            _extra.copy(localHeader, addpos);
            addpos += _extra.length;
            return localHeader;
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
              header: _centralHeader.toJSON(),
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

  // ../../../../../.yarn/berry/cache/adm-zip-npm-0.5.14-2df92cc02d-10c0.zip/node_modules/adm-zip/zipFile.js
  var require_zipFile = __commonJS({
    "../../../../../.yarn/berry/cache/adm-zip-npm-0.5.14-2df92cc02d-10c0.zip/node_modules/adm-zip/zipFile.js"(exports, module) {
      var ZipEntry = require_zipEntry();
      var Headers = require_headers();
      var Utils = require_util();
      module.exports = function(inBuffer, options) {
        var entryList = [], entryTable = {}, _comment = Buffer.alloc(0), mainHeader = new Headers.MainHeader(), loadedEntries = false;
        var password = null;
        const opts = Object.assign(/* @__PURE__ */ Object.create(null), options);
        const { noSort } = opts;
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
            index += entry.header.centralHeaderSize;
            callback(entry);
          }
        }
        function readEntries() {
          loadedEntries = true;
          entryTable = {};
          if (mainHeader.diskEntries > (inBuffer.length - mainHeader.offset) / Utils.Constants.CENHDR) {
            throw new Error(Utils.Errors.DISK_ENTRY_TOO_LARGE);
          }
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
            index += entry.header.centralHeaderSize;
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
            const headerBlocks = [];
            let totalSize = 0;
            let dindex = 0;
            mainHeader.size = 0;
            mainHeader.offset = 0;
            for (const entry of entryList) {
              const compressedData = entry.getCompressedData();
              entry.header.offset = dindex;
              const localHeader = entry.packLocalHeader();
              const dataLength = localHeader.length + compressedData.length;
              dindex += dataLength;
              dataBlock.push(localHeader);
              dataBlock.push(compressedData);
              const centralHeader = entry.packCentralHeader();
              headerBlocks.push(centralHeader);
              mainHeader.size += centralHeader.length;
              totalSize += dataLength + centralHeader.length;
            }
            totalSize += mainHeader.mainHeaderSize;
            mainHeader.offset = dindex;
            dindex = 0;
            const outBuffer = Buffer.alloc(totalSize);
            for (const content of dataBlock) {
              content.copy(outBuffer, dindex);
              dindex += content.length;
            }
            for (const content of headerBlocks) {
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
              const centralHeaders = [];
              let totalSize = 0;
              let dindex = 0;
              mainHeader.size = 0;
              mainHeader.offset = 0;
              const compress2Buffer = function(entryLists) {
                if (entryLists.length > 0) {
                  const entry = entryLists.shift();
                  const name = entry.entryName + entry.extra.toString();
                  if (onItemStart)
                    onItemStart(name);
                  entry.getCompressedDataAsync(function(compressedData) {
                    if (onItemEnd)
                      onItemEnd(name);
                    entry.header.offset = dindex;
                    const localHeader = entry.packLocalHeader();
                    const dataLength = localHeader.length + compressedData.length;
                    dindex += dataLength;
                    dataBlock.push(localHeader);
                    dataBlock.push(compressedData);
                    const centalHeader = entry.packCentralHeader();
                    centralHeaders.push(centalHeader);
                    mainHeader.size += centalHeader.length;
                    totalSize += dataLength + centalHeader.length;
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
                  centralHeaders.forEach(function(content) {
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
              compress2Buffer(Array.from(entryList));
            } catch (e) {
              onFail(e);
            }
          }
        };
      };
    }
  });

  // ../../../../../.yarn/berry/cache/adm-zip-npm-0.5.14-2df92cc02d-10c0.zip/node_modules/adm-zip/adm-zip.js
  var require_adm_zip = __commonJS({
    "../../../../../.yarn/berry/cache/adm-zip-npm-0.5.14-2df92cc02d-10c0.zip/node_modules/adm-zip/adm-zip.js"(exports, module) {
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
        const opts = Object.assign(/* @__PURE__ */ Object.create(null), defaultOptions);
        if (input && "object" === typeof input) {
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
        if (input && "string" === typeof input) {
          if (filetools.fs.existsSync(input)) {
            opts.method = Utils.Constants.FILE;
            opts.filename = input;
            inBuffer = filetools.fs.readFileSync(input);
          } else {
            throw new Error(Utils.Errors.INVALID_FILENAME);
          }
        }
        const _zip = new ZipFile(inBuffer, opts);
        const { canonical, sanitize } = Utils;
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
          const { join, normalize, sep } = pth.posix;
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
          addLocalFolder: function(localPath, zipPath, filter, attr) {
            if (filter instanceof RegExp) {
              filter = function(rx) {
                return function(filename) {
                  return rx.test(filename);
                };
              }(filter);
            } else if ("function" !== typeof filter) {
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
                      self.addFile(zipPath + p, filetools.fs.readFileSync(filepath), "", attr ? attr : stats);
                    } else {
                      self.addFile(zipPath + p + "/", Buffer.alloc(0), "", attr ? attr : stats);
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
            } else if ("function" !== typeof filter) {
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
                      process.nextTick(() => {
                        next();
                      });
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
            return new Promise((resolve2, reject) => {
              const { filter, zipPath } = Object.assign({}, props);
              this.addLocalFolderAsync(
                localPath,
                (done, err) => {
                  if (err)
                    reject(err);
                  if (done)
                    resolve2(this);
                },
                zipPath,
                filter
              );
            });
          },
          addFile: function(entryName, content, comment, attr) {
            let entry = getEntry(entryName);
            const update = entry != null;
            if (!update) {
              entry = new ZipEntry();
              entry.entryName = Utils.canonical(entryName);
            }
            entry.comment = comment || "";
            const isStat = "object" === typeof attr && attr instanceof filetools.fs.Stats;
            if (isStat) {
              entry.header.time = attr.mtime;
            }
            var fileattr = entry.isDirectory ? 16 : 0;
            let unix = entry.isDirectory ? 16384 : 32768;
            if (isStat) {
              unix |= 4095 & attr.mode;
            } else if ("number" === typeof attr) {
              unix |= 4095 & attr;
            } else {
              unix |= entry.isDirectory ? 493 : 420;
            }
            fileattr = (fileattr | unix << 16) >>> 0;
            entry.attr = fileattr;
            entry.setData(content);
            if (!update)
              _zip.setEntry(entry);
            return entry;
          },
          getEntries: function(password) {
            _zip.password = password;
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
            var content = item.getData(_zip.password);
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
            if (typeof overwrite === "function" && !callback)
              callback = overwrite;
            overwrite = get_Bool(overwrite, false);
            if (typeof keepOriginalPermission === "function" && !callback)
              callback = keepOriginalPermission;
            keepOriginalPermission = get_Bool(keepOriginalPermission, false);
            if (!callback) {
              return new Promise((resolve2, reject) => {
                this.extractAllToAsync(targetPath, overwrite, keepOriginalPermission, function(err) {
                  if (err) {
                    reject(err);
                  } else {
                    resolve2(this);
                  }
                });
              });
            }
            if (!_zip) {
              callback(new Error(Utils.Errors.NO_ZIP));
              return;
            }
            targetPath = pth.resolve(targetPath);
            const getPath = (entry) => sanitize(targetPath, pth.normalize(canonical(entry.entryName.toString())));
            const getError = (msg, file) => new Error(msg + ': "' + file + '"');
            const dirEntries = [];
            const fileEntries = [];
            _zip.entries.forEach((e) => {
              if (e.isDirectory) {
                dirEntries.push(e);
              } else {
                fileEntries.push(e);
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
            fileEntries.reverse().reduce(function(next, entry) {
              return function(err) {
                if (err) {
                  next(err);
                } else {
                  const entryName = pth.normalize(canonical(entry.entryName.toString()));
                  const filePath = sanitize(targetPath, entryName);
                  entry.getDataAsync(function(content, err_1) {
                    if (err_1) {
                      next(new Error(err_1));
                    } else if (!content) {
                      next(new Error(Utils.Errors.CANT_EXTRACT_FILE));
                    } else {
                      const fileAttr = keepOriginalPermission ? entry.header.fileAttr : void 0;
                      filetools.writeFileToAsync(filePath, content, overwrite, fileAttr, function(succ) {
                        if (!succ) {
                          next(getError("Unable to write file", filePath));
                        }
                        filetools.fs.utimes(filePath, entry.header.time, entry.header.time, function(err_2) {
                          if (err_2) {
                            next(getError("Unable to set times", filePath));
                          } else {
                            next();
                          }
                        });
                      });
                    }
                  });
                }
              };
            }, callback)();
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
            const { overwrite, perm } = Object.assign({ overwrite: true }, props);
            return new Promise((resolve2, reject) => {
              if (!targetFileName && opts.filename)
                targetFileName = opts.filename;
              if (!targetFileName)
                reject("ADM-ZIP: ZIP File Name Missing");
              this.toBufferPromise().then((zipData) => {
                const ret = (done) => done ? resolve2(done) : reject("ADM-ZIP: Wasn't able to write zip file");
                filetools.writeFileToAsync(targetFileName, zipData, overwrite, perm, ret);
              }, reject);
            });
          },
          toBufferPromise: function() {
            return new Promise((resolve2, reject) => {
              _zip.toAsyncBuffer(resolve2, reject);
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

  // sources/index.ts
  var sources_exports = {};
  __export(sources_exports, {
    default: () => sources_default
  });

  // sources/commands/bundle.command.ts
  var import_process = __toESM(__require("process"));
  var import_path3 = __toESM(__require("path"));
  var import_os = __toESM(__require("os"));
  var import_clipanion = __require("clipanion");
  var import_core3 = __require("@yarnpkg/core");
  var import_cli = __require("@yarnpkg/cli");

  // sources/bundle/bundle.ts
  var import_core2 = __require("@yarnpkg/core");

  // sources/bundle/package-deps.ts
  var import_core = __require("@yarnpkg/core");
  var import_promises = __require("fs/promises");
  var import_path = __require("path");
  var PackageDeps = class {
    static async install(workspaceRoot, projectRoot, cache, logger) {
      const { project } = await import_core.Project.find(
        projectRoot.configuration,
        projectRoot.cwd
      );
      const workspace = project.getWorkspaceByIdent(workspaceRoot.locator);
      const requiredWorkspaces = /* @__PURE__ */ new Set([workspace]);
      for (const workspace2 of requiredWorkspaces) {
        const dependencies = workspace2.manifest.getForScope("dependencies").values();
        for (const descriptor of dependencies) {
          const matchingWorkspace = project.tryWorkspaceByDescriptor(descriptor);
          if (matchingWorkspace === null)
            continue;
          requiredWorkspaces.add(matchingWorkspace);
        }
      }
      for (const workspace2 of project.workspaces) {
        if (requiredWorkspaces.has(workspace2)) {
          workspace2.manifest.devDependencies.clear();
        } else {
          workspace2.manifest.installConfig = workspace2.manifest.installConfig || {};
          workspace2.manifest.installConfig.selfReferences = false;
          workspace2.manifest.dependencies.clear();
          workspace2.manifest.devDependencies.clear();
          workspace2.manifest.peerDependencies.clear();
          workspace2.manifest.scripts.clear();
        }
      }
      await project.install({
        cache,
        report: logger.getStreamReport(),
        persistProject: false
      });
      const nmSelfPath = (0, import_path.resolve)(
        project.cwd,
        "node_modules",
        `@${workspace.locator.scope}`,
        workspace.locator.name
      );
      await (0, import_promises.rm)(nmSelfPath, { recursive: true, force: true });
    }
  };

  // sources/bundle/archive.ts
  var import_adm_zip = __toESM(require_adm_zip());
  var import_path2 = __toESM(__require("path"));
  var Archive = class {
    static async make(project, workspace, outDir) {
      return new Promise((resolve2, reject) => {
        const targetFileName = `${workspace.computeCandidateName()}.zip`;
        const targetFilePath = import_path2.default.resolve(outDir, targetFileName);
        const zip = new import_adm_zip.default();
        zip.addLocalFolder(import_path2.default.resolve(workspace.cwd));
        zip.addLocalFolder(
          import_path2.default.resolve(project.cwd, "node_modules"),
          "node_modules"
        );
        zip.writeZip(targetFilePath, (error) => {
          if (error) {
            reject(error);
          } else {
            resolve2(`Archive path: ${targetFilePath}`);
          }
        });
      });
    }
  };

  // sources/bundle/bundle.ts
  var Bundle = class {
    constructor(logger, cache, project, tmpDir, outDir) {
      this.logger = logger;
      this.cache = cache;
      this.project = project;
      this.tmpDir = tmpDir;
      this.outDir = outDir;
    }
    async bundlePackages(packages) {
      this.logger.log(`Bundle workspaces: ${packages.join(`, `)}`);
      let pkgProgress = 1;
      for (const pkg of packages) {
        await this.logger.group(
          `[${pkgProgress++}/${packages.length}]  ${pkg}`,
          async () => {
            await this.bundlePackage(pkg);
          }
        );
      }
    }
    async bundlePackage(pkg) {
      try {
        const workspace = this.project.getWorkspaceByIdent(
          import_core2.structUtils.parseIdent(pkg)
        );
        await this.installPackageDeps(workspace);
        await this.makeArchive(workspace);
      } finally {
      }
    }
    async installPackageDeps(workspace) {
      return PackageDeps.install(
        workspace,
        this.project,
        this.cache,
        this.logger
      );
    }
    async makeArchive(workspace) {
      return Archive.make(this.project, workspace, this.outDir);
    }
  };

  // sources/bundle/logger.ts
  var Logger = class {
    constructor(report) {
      this.report = report;
    }
    log(message, context) {
      this.report.reportInfo(null, message);
      this.report.reportJson({
        type: "info",
        message,
        ...context
      });
    }
    warning(message, context) {
      this.report.reportWarning(null, message);
      this.report.reportJson({
        type: "warning",
        message,
        ...context
      });
    }
    error(message, context) {
      this.report.reportError(null, message);
      this.report.reportJson({
        type: "error",
        message,
        ...context
      });
    }
    async group(message, cb) {
      await this.report.startTimerPromise(message, cb);
      this.report.reportSeparator();
    }
    getStreamReport() {
      return this.report;
    }
  };

  // sources/commands/bundle.command.ts
  var DEFAULT_OUT_DIR = import_process.default.cwd();
  var DEFAULT_TMP_DIR = import_path3.default.resolve(import_os.default.tmpdir(), import_process.default.pid.toString());
  var BundleCommand = class extends import_cli.BaseCommand {
    constructor() {
      super(...arguments);
      this.outDir = import_clipanion.Option.String(`-o,--output`, DEFAULT_OUT_DIR, {
        description: `Directory where bundles will be saved (default: current directory)`
      });
      this.tmpDir = import_clipanion.Option.String(`-t,--tmp`, DEFAULT_TMP_DIR, {
        description: `Temp directory (default: system temp dir)`
      });
      this.verbose = import_clipanion.Option.Boolean(`-v,--verbose`, false, {
        description: `Prefix each output line with the name of the originating workspace`
      });
      this.json = import_clipanion.Option.Boolean(`--json`, false, {
        description: `flag is set the output will follow a JSON-stream output also known as NDJSON (https://github.com/ndjson/ndjson-spec)`
      });
      this.targetPackages = import_clipanion.Option.Rest();
    }
    async execute() {
      const configuration = await import_core3.Configuration.find(
        this.context.cwd,
        this.context.plugins
      );
      if (configuration.values.get("nodeLinker") !== "node-modules") {
        throw new Error(
          "This plugin will work only if Yarn configuration option `nodeLinker` is set to `node-modules`"
        );
      }
      const cache = await import_core3.Cache.find(configuration);
      const { project } = await import_core3.Project.find(configuration, this.context.cwd);
      const report = await import_core3.StreamReport.start(
        {
          configuration,
          stdout: this.context.stdout,
          includeWarnings: this.verbose,
          json: this.json
        },
        async (report2) => {
          const logger = new Logger(report2);
          const bundler = new Bundle(
            logger,
            cache,
            project,
            this.tmpDir,
            this.outDir
          );
          await bundler.bundlePackages(this.targetPackages);
        }
      );
      return report.exitCode();
    }
  };
  BundleCommand.paths = [[`bundle`]];

  // sources/index.ts
  var sources_default = {
    commands: [BundleCommand]
  };
  return __toCommonJS(sources_exports);
})();
return plugin;
}
};
