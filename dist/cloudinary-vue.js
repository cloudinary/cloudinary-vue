(function webpackUniversalModuleDefinition(root, factory) {
	///* eslint-disable */
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cloudinary-core"));
	///* eslint-disable */
	else if(typeof define === 'function' && define.amd)
		define("cloudinaryVue", ["cloudinary-core"], factory);
	///* eslint-disable */
	else if(typeof exports === 'object')
		exports["cloudinaryVue"] = factory(require("cloudinary-core"));
	///* eslint-disable */
	else
		root["cloudinaryVue"] = factory(root["cloudinary"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/reactive/Channel.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @typedef {Object} IListener
 * @property {Function} next
 * @property {Function} error
 * @property {Function} complete
 */

/**
 * Message passing entity.
 * Allows registering listeners that are then triggered with a message, error or end signal.
 */
var Channel =
/*#__PURE__*/
function () {
  function Channel() {
    _classCallCheck(this, Channel);

    this.subs = [];
  }
  /**
   * Push a message to all active listeners
   * @param {*} message
   * @returns {undefined}
   */


  _createClass(Channel, [{
    key: "next",
    value: function next(value) {
      this.subs.forEach(function (sub) {
        return sub && _typeof(sub) === "object" && "next" in sub && sub.next ? sub.next(value) : null;
      });
    }
    /**
     * Push an error signal to all active listeners
     * @param {Error} error
     * @returns {undefined}
     */

  }, {
    key: "error",
    value: function error(_error) {
      this.subs.splice(0).forEach(function (sub) {
        return sub && _typeof(sub) === "object" && "error" in sub && sub.error ? sub.error(_error) : null;
      });
    }
    /**
     * Push an end signal to all active listeners
     * @returns {undefined}
     */

  }, {
    key: "complete",
    value: function complete() {
      this.subs.splice(0).forEach(function (sub) {
        return sub && _typeof(sub) === "object" && "complete" in sub && sub.complete ? sub.complete() : null;
      });
    }
    /**
     * Register a listener
     * @param {IListener} listener
     * @returns {Function}
     */

  }, {
    key: "subscribe",
    value: function subscribe(listener) {
      var _this = this;

      this.subs.push(listener);
      return function () {
        _this.subs = _this.subs.filter(function (sub) {
          return sub !== listener;
        });
      };
    }
  }]);

  return Channel;
}();
// CONCATENATED MODULE: ./src/reactive/State.js
function State_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { State_typeof = function _typeof(obj) { return typeof obj; }; } else { State_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return State_typeof(obj); }

function State_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function State_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function State_createClass(Constructor, protoProps, staticProps) { if (protoProps) State_defineProperties(Constructor.prototype, protoProps); if (staticProps) State_defineProperties(Constructor, staticProps); return Constructor; }


/**
 * @typedef {Object} IListener
 * @property {Function} next
 * @property {Function} error
 * @property {Function} complete
 */

/**
 * State broadcasting entity.
 * Like Channel, allows registering for updates,
 * but subscription is also notified immediately
 * of a last message passed through the entity
 */

var State_State =
/*#__PURE__*/
function () {
  function State(value) {
    State_classCallCheck(this, State);

    this.lastValue = value;
    this.channel = new Channel();
  }
  /**
   * Push a new state to all active listeners
   * @param {Function|*} state
   * @returns {undefined}
   */


  State_createClass(State, [{
    key: "next",
    value: function next(value) {
      if (this.lastValue === value) {
        return;
      }

      var computedValue = typeof value === "function" ? value(this.lastValue) : value;
      this.lastValue = computedValue;
      this.channel.next(computedValue);
    }
    /**
     * Push an error signal to all active listeners
     * @param {Error} error
     * @returns {undefined}
     */

  }, {
    key: "error",
    value: function error(_error) {
      return this.channel.error(_error);
    }
    /**
     * Push an end signal to all active listeners
     * @returns {undefined}
     */

  }, {
    key: "complete",
    value: function complete() {
      return this.channel.complete();
    }
    /**
     * Register a listener
     * @param {IListener} listener
     * @returns {Function}
     */

  }, {
    key: "subscribe",
    value: function subscribe(listener) {
      if (listener && State_typeof(listener) === "object" && listener.next) {
        listener.next(this.lastValue);
      }

      return this.channel.subscribe(listener);
    }
    /**
     * Returns a last pushed state
     */

  }, {
    key: "get",
    value: function get() {
      return this.lastValue;
    }
  }]);

  return State;
}();
// EXTERNAL MODULE: external {"commonjs":"cloudinary-core","commonjs2":"cloudinary-core","amd":"cloudinary-core","umd":"cloudinary","root":"cloudinary"}
var external_commonjs_cloudinary_core_commonjs2_cloudinary_core_amd_cloudinary_core_umd_cloudinary_root_cloudinary_ = __webpack_require__(0);

// CONCATENATED MODULE: ./src/utils/merge.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function merge() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args.length === 0) {
    return {};
  }

  if (args.length === 1) {
    return args[0];
  }

  if (args.length === 2) {
    var result = {};

    if (args[0] != null) {
      Object.keys(args[0]).forEach(function (k) {
        if (args[0][k] !== undefined) {
          result[k] = args[0][k];
        }
      });
    }

    if (args[1] != null) {
      Object.keys(args[1]).forEach(function (k) {
        if (args[1][k] !== undefined) {
          result[k] = args[1][k];
        }
      });
    }

    return result;
  }

  return merge(args[0], merge.apply(void 0, _toConsumableArray(args.slice(1))));
}
// CONCATENATED MODULE: ./src/utils/kv.js
function kv(k, v) {
  var result = {};
  result[k] = v;
  return result;
}
// CONCATENATED MODULE: ./src/utils/formatObject.js


function formatObject(subject, instructions) {
  if (subject == null && Object.keys(instructions).length === 0) {
    return subject;
  }

  return Object.keys(subject).reduce(function (result, key) {
    return key in instructions ? merge(result, kv(key, instructions[key](subject[key]))) : merge(result, kv(key, subject[key]));
  }, {});
}
// CONCATENATED MODULE: ./src/utils/normalizeObject.js


function normalizeObject(subject) {
  if (subject == null) {
    return subject;
  }

  return Object.keys(subject).reduce(function (result, key) {
    return subject[key] == null ? result : merge(result, kv(key, subject[key]));
  }, {});
}
// CONCATENATED MODULE: ./src/utils/omit.js


function omit(subject, disallowed) {
  if (subject == null) {
    return subject;
  }

  return Object.keys(subject).reduce(function (result, key) {
    return (disallowed || []).indexOf(key) < 0 ? merge(result, kv(key, subject[key])) : result;
  }, {});
}
// CONCATENATED MODULE: ./src/utils/pick.js


function pick(subject, allowed) {
  if (subject == null) {
    return subject;
  }

  return (allowed || []).reduce(function (result, key) {
    return key in subject ? merge(result, kv(key, subject[key])) : result;
  }, {});
}
// CONCATENATED MODULE: ./src/utils/uniq.js
function uniq(subjectA, subjectB) {
  return (subjectA || []).concat(subjectB || []).reduce(function (r, i) {
    return r.indexOf(i) < 0 ? r.concat([i]) : r;
  }, []);
}
// CONCATENATED MODULE: ./src/utils/equal.js
function equal_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { equal_typeof = function _typeof(obj) { return typeof obj; }; } else { equal_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return equal_typeof(obj); }


function equal(subjectA, subjectB) {
  if (subjectA === null && subjectB === null || subjectA === undefined && subjectB === undefined) {
    return true;
  }

  if ((subjectA === null || subjectB === null) && (subjectA !== null || subjectB !== null) || (subjectA === undefined || subjectB === undefined) && (subjectA !== undefined || subjectB !== undefined)) {
    return false;
  }

  if (equal_typeof(subjectA) === "object" && equal_typeof(subjectB) === "object") {
    var subjectAKeys = Object.keys(subjectA);
    var subjectBKeys = Object.keys(subjectB);

    if (subjectAKeys.length !== subjectBKeys.length) {
      return false;
    }

    var allKeys = uniq(subjectAKeys, subjectBKeys);

    if (allKeys.length !== subjectAKeys.length) {
      return false;
    }

    for (var i = 0; i < allKeys.length; i += 1) {
      var k = allKeys[i];

      if (!equal(subjectA[k], subjectB[k])) {
        return false;
      }
    }

    return true;
  }

  return subjectA === subjectB;
}
// CONCATENATED MODULE: ./src/utils/debounce.js
function debounce(fn, timeout) {
  var forceUpdateTimeoutToken = null;
  return function debounced() {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    clearTimeout(forceUpdateTimeoutToken);
    forceUpdateTimeoutToken = setTimeout(function () {
      fn.apply(_this, args);
    }, timeout);
  };
}
// CONCATENATED MODULE: ./src/utils/find.js
function find_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { find_typeof = function _typeof(obj) { return typeof obj; }; } else { find_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return find_typeof(obj); }

function find(subject, predicate) {
  var result = null;

  if (!(subject instanceof Array)) {
    throw new Error("find 1st arg must be Array, is: ".concat(find_typeof(subject)));
  }

  subject.forEach(function (i) {
    if (!result && predicate(i)) {
      result = {
        value: i
      };
    }
  });
  return result ? result.value : undefined;
}
// CONCATENATED MODULE: ./src/utils/range.js
/**
 * Returns an array containing all numbers between and including `min` and `max` in a distance of `step` from each other
 * @param {Number} min
 * @param {Number} max
 * @param {Number} step
 */
function range(min, max, step) {
  var result = [];

  for (var i = min; i <= max; i += step) {
    result.push(i);
  }

  return result;
}
// CONCATENATED MODULE: ./src/utils/assign.js
function assign_assign() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args.length === 0) {
    return undefined;
  }

  if (args.length === 1) {
    return args[0];
  }

  if (args.length === 2) {
    var subject = args[0];
    var mod = args[1];
    Object.keys(mod).forEach(function (k) {
      subject[k] = mod[k];
    });
    return subject;
  }

  return assign_assign.apply(this, [assign_assign(args[0], args[1])].concat(args.slice(2)));
}
// CONCATENATED MODULE: ./src/utils/flatten.js
function flatten(subject) {
  if (subject == null) {
    return subject;
  }

  return [].concat(subject).reduce(function (result, item) {
    return result.concat(item);
  }, []);
}
// CONCATENATED MODULE: ./src/utils/index.js













// CONCATENATED MODULE: ./src/helpers/attributes.js


/** List of all configuration fields as they are needed in components attributes */

var attributes_configuration = external_commonjs_cloudinary_core_commonjs2_cloudinary_core_amd_cloudinary_core_umd_cloudinary_root_cloudinary_["Configuration"].CONFIG_PARAMS.map(external_commonjs_cloudinary_core_commonjs2_cloudinary_core_amd_cloudinary_core_umd_cloudinary_root_cloudinary_["Util"].camelCase);
/** List of all transformation fields as they are needed in components attributes */

var attributes_transformation = external_commonjs_cloudinary_core_commonjs2_cloudinary_core_amd_cloudinary_core_umd_cloudinary_root_cloudinary_["Transformation"].PARAM_NAMES.map(external_commonjs_cloudinary_core_commonjs2_cloudinary_core_amd_cloudinary_core_umd_cloudinary_root_cloudinary_["Util"].camelCase).filter(function (name) {
  return attributes_configuration.indexOf(name) < 0;
});
/** Extract configuration options for provided object */

function normalizeConfiguration(cfg) {
  return external_commonjs_cloudinary_core_commonjs2_cloudinary_core_amd_cloudinary_core_umd_cloudinary_root_cloudinary_["Util"].withSnakeCaseKeys(formatObject(normalizeObject(pick(cfg, attributes_configuration)), {
    secure: function secure(v) {
      return typeof v === "boolean" ? v : v === "true";
    }
  }));
}
/** Extract transformation options for provided object */

function normalizeTransformation(cfg) {
  return external_commonjs_cloudinary_core_commonjs2_cloudinary_core_amd_cloudinary_core_umd_cloudinary_root_cloudinary_["Util"].withSnakeCaseKeys(normalizeObject(pick(cfg, attributes_transformation)));
}
/** Extract fields that are not used for configuration nor transformation in provided object */

function normalizeRest(cfg) {
  return normalizeObject(omit(cfg, attributes_transformation.concat(attributes_configuration)));
}
// CONCATENATED MODULE: ./src/mixins/ready.js

/**
 * helper mixin for marking
 * which of other mixins report "ready" state
 */

var ready = {
  data: function data() {
    return {
      ready: {}
    };
  },
  computed: {
    /**
     * Produces a ready state (boolean)
     * If any of registered ready flags (object props)
     * are marked "true"
     */
    isReady: function isReady() {
      var flags = Object.keys(this.ready);

      if (flags.length === 0) {
        return false;
      }

      for (var i = 0; i < flags.length; i += 1) {
        if (!this.ready[flags[i]]) {
          return false;
        }
      }

      return true;
    }
  },
  methods: {
    /**
     * Register a single mixin ready flag to true
     * @param {string} name
     */
    addReadyCheck: function addReadyCheck(name) {
      this.ready = merge(this.ready, kv(name, false));
    },

    /**
     * Switch on a single mixin ready flag to true
     * @param {string} name
     */
    markReadyCheck: function markReadyCheck(name) {
      if (!this.ready[name]) {
        this.ready = merge(this.ready, kv(name, true));
      }
    }
  }
};
// CONCATENATED MODULE: ./src/mixins/mounted.js

/**
 * A ready-check for if component
 * has been mounted,
 * so it is true that
 * all current children-modifier components
 * like CldTransformation
 * had been initialized already
 */

var mounted = {
  mixins: [ready],
  created: function created() {
    this.addReadyCheck("mounted");
    /*
     * hold "ready" until mounted only in case of
     * potential children-modifiers
     * not created yet
     * either as children of this element
     * or children of parent context
     */

    if (!this.CldParentState && (!this.$slots || !this.$slots["default"] || !this.$slots["default"].length)) {
      this.markReadyCheck("mounted");
    }
  },
  mounted: function mounted() {
    this.markReadyCheck("mounted");
  }
};
// CONCATENATED MODULE: ./src/reactive/CombinedState.js
function CombinedState_toConsumableArray(arr) { return CombinedState_arrayWithoutHoles(arr) || CombinedState_iterableToArray(arr) || CombinedState_nonIterableSpread(); }

function CombinedState_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function CombinedState_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function CombinedState_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function CombinedState_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CombinedState_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CombinedState_createClass(Constructor, protoProps, staticProps) { if (protoProps) CombinedState_defineProperties(Constructor.prototype, protoProps); if (staticProps) CombinedState_defineProperties(Constructor, staticProps); return Constructor; }



/**
 * @typedef {Object} IListener
 * @property {Function} next
 * @property {Function} error
 * @property {Function} complete
 */

/**
 * A complex observable state entity
 * which allows spawning partial state containers
 * that contents are then reactively combined
 * in an order of creating those spawns
 *
 * Does not contain next/error/complete methods
 * as those are in partial state containers
 * which are the only source of truth -
 * the combined state is only a conclusion
 * over partial states.
 */

var CombinedState_CombinedState =
/*#__PURE__*/
function () {
  /**
   * Constructor *may* be provided with a function
   * that will combine all partial states.
   * Otherwise it'll assume that all partial states are object
   * and combine it by overriding properties
   * in result state by every next partial state object
   * @param {Function} composition
   */
  function CombinedState(composition) {
    var _this = this;

    CombinedState_classCallCheck(this, CombinedState);

    this.chunkedState = new State_State([]);
    this.solidState = new State_State({});
    this.chunkedState.subscribe({
      next: function next(v) {
        var nextSum = (composition || merge).apply(void 0, CombinedState_toConsumableArray(v || []));

        _this.solidState.next(nextSum);
      },
      error: function error(e) {
        return _this.solidState.error(e);
      },
      complete: function complete() {
        return _this.solidState.complete();
      }
    });
  }
  /**
   * Creates new partial state
   * and returns State class to represent it
   * and to allow that state part modification
   */


  CombinedState_createClass(CombinedState, [{
    key: "spawn",
    value: function spawn() {
      var _this2 = this;

      var last = {};
      var didStatePushedEmpty = false;
      var newSpawn = new State_State(last);
      newSpawn.subscribe({
        next: function next(v) {
          if (!didStatePushedEmpty) {
            didStatePushedEmpty = true;
            return;
          }

          _this2.chunkedState.next(function (currentState) {
            return currentState.indexOf(last) >= 0 ? currentState.map(function (chunk) {
              return chunk === last ? v : chunk;
            }) : currentState.concat([v]);
          });

          last = v;
        },
        error: function error() {
          _this2.chunkedState.next(function (p) {
            return p.filter(function (chunk) {
              return chunk !== last;
            });
          });
        },
        complete: function complete() {
          _this2.chunkedState.next(function (p) {
            return p.filter(function (chunk) {
              return chunk !== last;
            });
          });
        }
      });
      return newSpawn;
    }
    /**
     * Returns a current combined state
     */

  }, {
    key: "get",
    value: function get() {
      return this.solidState.get();
    }
    /**
     * Register a listener
     * @param {IListener} listener
     * @returns {Function}
     */

  }, {
    key: "subscribe",
    value: function subscribe(listener) {
      return this.solidState.subscribe(listener);
    }
  }]);

  return CombinedState;
}();
// CONCATENATED MODULE: ./src/helpers/combineOptions.js
function combineOptions_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { combineOptions_typeof = function _typeof(obj) { return typeof obj; }; } else { combineOptions_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return combineOptions_typeof(obj); }


/** Combines many objects
 * { publicId, configuration, transformation }
 * provided as arguments into one
 * @param  {...{ publicId, configuration, transformation }} transformations
 */

function combineOptions() {
  for (var _len = arguments.length, options = new Array(_len), _key = 0; _key < _len; _key++) {
    options[_key] = arguments[_key];
  }

  var _merge$apply = merge.apply(this, options),
      publicId = _merge$apply.publicId;

  var configuration = normalizeObject(merge.apply(this, options.filter(isObjectWithKeys).map(function (_) {
    return _.configuration;
  }).filter(isObjectWithKeys)));
  var transformation = normalizeObject(combineTransformations.apply(this, options.filter(isObjectWithKeys).map(function (_) {
    return _.transformation;
  }).filter(isObjectWithKeys)));
  return normalizeObject({
    publicId: publicId,
    configuration: isObjectWithKeys(configuration) ? configuration : undefined,
    transformation: isObjectWithKeys(transformation) ? transformation : undefined
  });
}
/**
 * Combines many transformations
 * provided as arguments
 * into one
 * @param  {...object} transformations
 */

function combineTransformations() {
  for (var _len2 = arguments.length, transformations = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    transformations[_key2] = arguments[_key2];
  }

  return transformations.filter(isObjectWithKeys).reduce(function (result, item) {
    var transformation = [].concat(result.transformation).concat(item.transformation).filter(isObjectWithKeys);
    return merge(result, item, transformation.length === 0 ? {} : {
      transformation: transformation
    });
  }, {});
}

function isObjectWithKeys(subject) {
  return combineOptions_typeof(subject) === "object" && subject && Object.keys(subject).length > 0;
}
// CONCATENATED MODULE: ./src/mixins/cldAttrs.js



/**
 * Creates a components own CombinedState
 * and posts its changes
 * into components data
 */

var cldAttrs = {
  mixins: [ready],
  provide: function provide() {
    return {
      CldParentState: this.cldAttrsState
    };
  },
  data: function data() {
    var cldAttrsState = new CombinedState_CombinedState(combineOptions);
    return {
      cldAttrsState: cldAttrsState,
      cldAttrs: cldAttrsState.get()
    };
  },
  created: function created() {
    var _this = this;

    this.addReadyCheck("cldAttrs");
    this.cldAttrsStateSub = this.cldAttrsState.subscribe({
      next: function next(v) {
        _this.cldAttrs = v;

        _this.markReadyCheck("cldAttrs");
      }
    });
  },
  destroyed: function destroyed() {
    this.cldAttrsStateSub();
  }
};
// CONCATENATED MODULE: ./src/mixins/cldAttrsOwned.js




/**
 * In order to maintain merging order
 * of config+transformation sources (context+own+modifiers)
 * create a sub-State
 * of components main CombineState instance
 * and submit components config+transformation
 */

var cldAttrsOwned = {
  mixins: [cldAttrs],
  computed: {
    attributes: function attributes() {
      return this.$attrs;
    },
    cldAttributes: function cldAttributes() {
      var configuration = normalizeConfiguration(this.attributes);
      var transformation = normalizeTransformation(this.attributes);
      return combineOptions({
        publicId: this.attributes.publicId,
        configuration: configuration,
        transformation: transformation
      });
    }
  },
  created: function created() {
    this.markReadyCheck("cldAttrsOwned");
    this.ownState = this.cldAttrsState.spawn();
    this.ownState.next(this.cldAttributes);
  },
  updated: function updated() {
    var prev = this.ownState.get();
    var current = this.cldAttributes;

    if (!equal(prev, current)) {
      this.ownState.next(current);
    }
  },
  destroyed: function destroyed() {
    this.ownState.complete();
  }
};
// CONCATENATED MODULE: ./src/mixins/cldChild.js
/**
 * Injects cloudinary parent State (stateful stream)
 */
var cldChild = {
  inject: {
    CldParentState: {
      "default": function _default() {
        return this.CldGlobalContextState ? this.CldGlobalContextState : null;
      }
    }
  }
};
// CONCATENATED MODULE: ./src/mixins/cldAttrsInherited.js


/**
 * Ties cloudinary parent element state
 * with components own
 */

var cldAttrsInherited = {
  mixins: [cldAttrs, cldChild],
  created: function created() {
    var _this = this;

    this.addReadyCheck("cldAttrsOwned");

    if (this.CldParentState) {
      this.contextState = this.cldAttrsState.spawn();
      this.contextStateSub = this.CldParentState.subscribe({
        next: function next(v) {
          _this.contextState.next(v);

          _this.markReadyCheck("cldAttrsOwned");
        }
      });
    } else {
      this.markReadyCheck("cldAttrsOwned");
    }
  },
  destroyed: function destroyed() {
    if (this.contextStateSub) {
      this.contextStateSub();
    }

    if (this.contextState) {
      this.contextState.complete();
    }
  }
};
// CONCATENATED MODULE: ./src/components/CldContext.js




/**
 * Cloudinary context providing element
 */

/* harmony default export */ var CldContext = ({
  name: "CldContext",
  render: function render(h) {
    return h("div", this.htmlAttributes, this.$slots ? this.$slots["default"] : null);
  },
  inheritAttrs: false,
  mixins: [mounted, cldAttrsInherited, cldAttrsOwned],
  props: {},
  computed: {
    htmlAttributes: function htmlAttributes() {
      return {
        "class": "cld-context",
        attrs: normalizeRest(this.$attrs)
      };
    }
  }
});
// CONCATENATED MODULE: ./src/helpers/findInTransformations.js

function findInTransformations(transformations, predicate) {
  if (!transformations) {
    return undefined;
  }

  return find([].concat(transformations).concat(transformations.transformation || []), predicate);
}
// CONCATENATED MODULE: ./src/helpers/evalBreakpoints.js
/**
 * Normalizes `breakpoint` component attribute to an array of numbers
 * @param {Function|Array|String} valueOrGetter
 */
function evalBreakpoints(valueOrGetter) {
  if (typeof valueOrGetter === "function") {
    return valueOrGetter();
  }

  if (typeof valueOrGetter === "string") {
    return JSON.parse((valueOrGetter.slice(0, 1) === "[" ? "" : "[") + valueOrGetter + (valueOrGetter.slice(0, 1) === "]" ? "" : "]"));
  }

  return valueOrGetter;
}
// CONCATENATED MODULE: ./src/helpers/getDPRAttr.js
/** Generate DPR transformation if DPR information is available */
function getDPRAttr() {
  return typeof window !== "undefined" && "devicePixelRatio" in window ? {
    dpr: window.devicePixelRatio
  } : {};
}
// CONCATENATED MODULE: ./src/helpers/findBreakpoint.js
/**
 * Finds a number in breakpoints array
 * that provided a suggestion
 * qualifies the most to be used as a value
 * @param {Array<number>} stops
 * @param {number} value
 */
function findBreakpoint(stops, value) {
  if (stops.length === 0) {
    return value;
  }

  return stops.concat([]).sort(function (a, b) {
    return a - b;
  }).filter(function (stop) {
    return stop >= value;
  }).concat(stops[0])[0];
}
// CONCATENATED MODULE: ./src/helpers/getResizeTransformation.js



/**
 * Based an selected mode
 * and breakpoints range
 * generates size transformations
 * @param {'fill'|'width'|'height'|'none'} mode
 * @param {object} size
 * @param {array} breakpoints
 */

function getResizeTransformation(mode, size, breakpoints) {
  switch (mode) {
    case "fill":
      return merge(getDPRAttr(), {
        crop: "crop",
        width: size ? Math.floor(breakpoints ? findBreakpoint(breakpoints, size.width) : size.width) : 0,
        height: size ? Math.floor(breakpoints ? findBreakpoint(breakpoints, size.height) : size.height) : 0
      });

    case "width":
      return merge(getDPRAttr(), {
        crop: "scale",
        width: size ? Math.floor(breakpoints ? findBreakpoint(breakpoints, size.width) : size.width) : 0
      });

    case "height":
      return merge(getDPRAttr(), {
        crop: "scale",
        height: size ? Math.floor(breakpoints ? findBreakpoint(breakpoints, size.height) : size.height) : 0
      });

    case "none":
    default:
      return null;
  }
}
// CONCATENATED MODULE: ./src/helpers/getPlaceholderURL.js


/** Get media URL with some transformations
 * that will make the image lighter
 * so it can serve as a placeholder
 * for an actual image
 *
 * @param {'lqip'|'color'|'pixelate'} mode How savings should be made
 * @param {Object} options All currently gathered options of the resource request
 */

function getPlaceholderURL(mode, options) {
  var placeholderOptions = combineOptions({
    lqip: {
      transformation: {
        transformation: [{
          variables: [["$nh", "ih"], ["$nw", "iw"]],
          crop: "scale",
          width: "20",
          quality: "auto"
        }, {
          crop: "scale",
          width: "$nw",
          height: "$nh"
        }]
      }
    },
    color: {
      transformation: {
        transformation: [{
          variables: [["$nh", "ih"], ["$nw", "iw"]],
          crop: "scale",
          width: "1",
          quality: "1"
        }, {
          crop: "scale",
          width: "$nw",
          height: "$nh"
        }]
      }
    },
    pixelate: {
      transformation: {
        transformation: [{
          effect: "pixelate:100"
        }]
      }
    }
  }[mode], options);
  return external_commonjs_cloudinary_core_commonjs2_cloudinary_core_amd_cloudinary_core_umd_cloudinary_root_cloudinary_["Cloudinary"]["new"](placeholderOptions.configuration).url(placeholderOptions.publicId, placeholderOptions.transformation);
}
// CONCATENATED MODULE: ./src/mixins/size.js
function size_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { size_typeof = function _typeof(obj) { return typeof obj; }; } else { size_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return size_typeof(obj); }



/**
 * If necessary posts root element
 * size information
 * into components data
 */

var size_size = {
  mixins: [ready],
  props: {},
  data: function data() {
    return {
      size: null
    };
  },
  computed: {
    /* should be overriden */
    shouldMeasureSize: function shouldMeasureSize() {
      return false;
    }
  },
  created: function created() {
    this.addReadyCheck("size");
    fix.call(this);
  },
  updated: function updated() {
    fix.call(this);
  },
  mounted: function mounted() {
    fix.call(this);
  },
  destroyed: function destroyed() {
    if (this.cancelSizeListener) {
      this.cancelSizeListener();
    }
  }
};

function fix() {
  var _this = this;

  if (this.shouldMeasureSize) {
    if (this.$el && !this.cancelSizeListener) {
      this.cancelSizeListener = watchElementSize(this.$el, function (measurement) {
        var currentSize = pick(_this.size, ["width", "height"]);
        var nextSize = pick(measurement, ["width", "height"]);

        if (!equal(currentSize, nextSize)) {
          _this.size = nextSize;

          _this.markReadyCheck("size");
        }
      });
    }
  } else {
    this.markReadyCheck("size");

    if (this.cancelSizeListener) {
      this.cancelSizeListener();
    }
  }
}
/**
 * Call back a provided function
 * whenever element changed it's size
 * @param {HTMLElement} element
 * @param {Function} cb
 */


function watchElementSize(element, cb) {
  var delayedCallback = debounce(cb, 150);
  var cancelled = false;

  if ((typeof window === "undefined" ? "undefined" : size_typeof(window)) === "object") {
    if ("ResizeObserver" in window) {
      var resizeObserver = new ResizeObserver(function (entries) {
        for (var i = 0, entry = entries[i]; i < entries.length; i += 1) {
          delayedCallback(pick(entry.contentRect, ["width", "height"]));
        }
      });
      resizeObserver.observe(element);
      return function () {
        if (cancelled) {
          return;
        }

        cancelled = true;
        resizeObserver.disconnect();
      };
    }

    var handleWindowResize = function handleWindowResize() {
      delayedCallback(pick(element.getBoundingClientRect(), ["width", "height"]));
    };

    window.addEventListener("resize", handleWindowResize);
    handleWindowResize();
    return function () {
      if (cancelled) {
        return;
      }

      cancelled = true;
      window.removeEventListener("resize", handleWindowResize);
    };
  }

  return function () {};
}
// CONCATENATED MODULE: ./src/mixins/lazy.js
function lazy_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { lazy_typeof = function _typeof(obj) { return typeof obj; }; } else { lazy_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return lazy_typeof(obj); }


/**
 * If necessary watches for root elements visibility
 * and posts the result to components data
 */

var lazy = {
  mixins: [ready],
  props: {
    /**
     * Whether to only load the asset when it needs to be displayed instead of when the page first loads.
     */
    lazy: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      visible: false
    };
  },
  created: function created() {
    this.markReadyCheck("lazy");
    lazy_fix.call(this);
  },
  mounted: function mounted() {
    lazy_fix.call(this);
  },
  updated: function updated() {
    lazy_fix.call(this);
  },
  destroyed: function destroyed() {
    if (this.cancelVisibilityListener) {
      this.cancelVisibilityListener();
    }
  }
};

function lazy_fix() {
  var _this = this;

  if (this.lazy) {
    if (this.$el && !this.cancelVisibilityListener) {
      this.cancelVisibilityListener = watchElementVisibility(this.$el, function (visible) {
        _this.visible = _this.visible || visible;
      });
    }
  } else {
    this.visible = true;

    if (this.cancelVisibilityListener) {
      var cancelVisibilityListener = this.cancelVisibilityListener;
      this.cancelVisibilityListener = null;
      cancelVisibilityListener();
    }
  }
}

function watchElementVisibility(element, listener) {
  if ((typeof window === "undefined" ? "undefined" : lazy_typeof(window)) === "object" && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.target === element) {
          listener(entry.isIntersecting);
        }
      });
    }, {
      threshold: [0, 0.01]
    });
    observer.observe(element);
    return function () {
      observer.disconnect();
    };
  }

  listener(true);
  return noop;
}

function noop() {}
// CONCATENATED MODULE: ./src/components/CldImage.js














/**
 * Deliver images and specify image transformations using the cld-image (CldImage) component,
 * which automatically generates an `<img>` tag including the dynamic URL of the image source.
 *
 *
 * You can optionally include [cld-transformation](#cldtransformation) components to define transformations to apply to the delivered image.
 *
 * For more information see the
 * [cld-image component](https://cloudinary.com/documentation/vue_image_manipulation#cldvideo_component)
 * and
 * [embedding images in web pages](https://cloudinary.com/documentation/image_transformations#embedding_images_in_web_pages)
 * documentation.
 */

/* harmony default export */ var CldImage = ({
  name: "CldImage",
  inheritAttrs: false,
  mixins: [ready, size_size, mounted, lazy, cldAttrsInherited, cldAttrsOwned],
  render: function render(h) {
    return h("img", this.imageAttrs, this.$slots ? this.$slots["default"] : null);
  },
  props: {
    /**
     * The unique identifier of an uploaded image.
     */
    publicId: {
      type: String,
      "default": "",
      required: true
    },

    /**
     * Whether to generate a JPEG using the [progressive (interlaced) JPEG
     * format](https://cloudinary.com/documentation/transformation_flags#delivery_and_image_format_flags).
     */
    progressive: {
      type: Boolean,
      "default": false
    },

    /**
     * The placeholder image to use while the image is loading. Possible values:
     *
     * - `"lqip"` to use a low quality image
     * - `"color"` to use an average color image
     * - `"pixelate"` to use a pixelated image
     */
    placeholder: {
      type: String,
      "default": ""
    },

    /**
     * How to make the image responsive to the available size based on layout. Possible values:
     *
     * - `width` uses the available image *width* and allows image *height* to be set dynamically
     * - `height` uses the available image *height* and allows image *width* to be set dynamically
     * - `fill` uses the available image *width* and *height*
     */
    responsive: {
      type: String,
      "default": "none"
    },

    /**
     * The set of possible breakpoint values to be used together with the responsive property. Either:
     *
     * - an array of numbers
     * - a comma separated list of numbers as a single string
     * - a function that returns an array of numbers
     */
    breakpoints: {
      type: [Array, Function, String],
      "default": function _default() {
        return range(100, 4000, 100);
      }
    }
  },
  computed: {
    attributes: function attributes() {
      return merge(this.$attrs, this.progressive ? {
        flags: [].concat(this.$attrs.flags ? this.$attrs.flags : []).concat("progressive")
      } : {}, this.responsive !== "none" && this.size ? {
        transformation: [].concat(this.$attrs.transformation || []).concat(getResizeTransformation(this.responsive, this.size, evalBreakpoints(this.breakpoints)))
      } : {});
    },
    shouldMeasureSize: function shouldMeasureSize() {
      return this.responsive !== "none";
    },
    imageAttrs: function imageAttrs() {
      var className = {
        "cld-image": true,
        "cld-image--fill": this.responsive === "fill",
        "cld-image--fill-width": this.responsive === "width",
        "cld-image--fill-height": this.responsive === "height"
      };
      var style = {
        height: {
          display: "block",
          height: "100%",
          width: "auto"
        },
        width: {
          display: "block",
          width: "100%"
        },
        fill: {
          display: "block",
          width: "100%",
          height: "100%"
        }
      }[this.responsive] || {};

      if (!this.isReady || !this.publicId || !!findInTransformations(this.cldAttrs.transformation, function (t) {
        return t.width === 0 || t.height === 0;
      })) {
        return {
          "class": className,
          style: style
        };
      }

      if (this.lazy && !this.visible) {
        return {
          "class": className,
          style: style,
          attrs: this.placeholder ? {
            src: getPlaceholderURL(this.placeholder, combineOptions({
              publicId: this.publicId
            }, this.cldAttrs)) || this.placeholder
          } : {}
        };
      }

      var htmlAttrs = external_commonjs_cloudinary_core_commonjs2_cloudinary_core_amd_cloudinary_core_umd_cloudinary_root_cloudinary_["Transformation"]["new"](this.cldAttrs.transformation).toHtmlAttributes();
      var src = external_commonjs_cloudinary_core_commonjs2_cloudinary_core_amd_cloudinary_core_umd_cloudinary_root_cloudinary_["Cloudinary"]["new"](this.cldAttrs.configuration).url(this.publicId, this.cldAttrs);
      return {
        "class": className,
        style: style,
        attrs: merge(normalizeRest(this.$attrs), htmlAttrs, src ? {
          src: src
        } : {})
      };
    }
  }
});
// CONCATENATED MODULE: ./src/mixins/cldAttrsSubmitting.js


/**
 * Modify cloudinary parent CombinedState
 * with its own config+transformations
 * through dedicated State instance
 */

var cldAttrsSubmitting = {
  mixins: [cldAttrs, cldChild],
  created: function created() {
    var _this = this;

    if (!this.CldParentState) {
      throw new Error("This component has to have a Cloudinary parent that can receive it's attributes");
    }

    this.addReadyCheck("cldAttrsSubmitting");
    this.submitter = this.CldParentState.spawn();
    this.submitterSub = this.cldAttrsState.subscribe({
      next: function next(v) {
        _this.submitter.next(v);

        _this.markReadyCheck("cldAttrsSubmitting");
      }
    });
  },
  destroyed: function destroyed() {
    if (this.submitterSub) {
      this.submitterSub();
    }

    if (this.submitter) {
      this.submitter.complete();
    }
  }
};
// CONCATENATED MODULE: ./src/components/CldPoster.js



/**
 * The image to be shown while a video is downloading or until the user hits the play button.
 * This component must be added as a child of the [CldVideo](#cldvideo) component.
 *
 * If this component is not given then the poster image defaults to the middle frame of the source video in jpg format.
 */

/* harmony default export */ var CldPoster = ({
  name: "CldPoster",
  render: function render(h) {
    if (!this.$slots || !this.$slots["default"]) {
      return null;
    }

    return h("span", {
      "class": "cld-poster"
    }, this.$slots["default"]);
  },
  inheritAttrs: false,
  mixins: [cldAttrsOwned, cldAttrsSubmitting],
  props: {
    /**
     * The unique identifier of an uploaded image.
     */
    publicId: {
      type: String
    }
  },
  inject: {
    CldParentState: {
      from: "CldPosterState"
    }
  },
  computed: {
    attributes: function attributes() {
      return normalizeObject(merge({
        publicId: this.publicId
      }, this.$attrs));
    }
  }
});
// CONCATENATED MODULE: ./src/components/CldTransformation.js


/**
 * One or more [transformation parameters](https://cloudinary.com/documentation/image_transformation_reference)
 * in a single component, or a set of [chained transformations](https://cloudinary.com/documentation/image_transformations#chained_transformations) in multiple components.
 */

/* harmony default export */ var CldTransformation = ({
  name: "CldTransformation",
  render: function render(h) {
    if (!this.$slots || !this.$slots["default"]) {
      return null;
    }

    return h("span", {
      "class": "cld-transformation"
    }, this.$slots["default"]);
  },
  inheritAttrs: false,
  mixins: [cldAttrsOwned, cldAttrsSubmitting],
  computed: {
    attributes: function attributes() {
      return {
        transformation: this.$attrs
      };
    }
  }
});
// CONCATENATED MODULE: ./src/components/CldVideo.js
function CldVideo_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CldVideo_typeof = function _typeof(obj) { return typeof obj; }; } else { CldVideo_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CldVideo_typeof(obj); }












/**
 * Deliver videos and specify video transformations using the `cld-video` (CldVideo) element,
 * which automatically generates an HTML5 video tag including the URL sources for the main formats
 * supported by web browsers (webm, mp4 and ogv by default), as well as a poster thumbnail image,
 * which is automatically generated from a frame in the video.
 * Browsers can automatically select and play the video format that they best support,
 * and the video files are created dynamically when first accessed by your users.
 *
 * You can optionally include `cld-transformation` components to define transformations to apply to the delivered video.
 *
 * For more information see
 * [cld-video component](https://cloudinary.com/documentation/vue_video_manipulation#cldvideo_component)
 * and
 * [embedding videos in web pages](https://cloudinary.com/documentation/video_manipulation_and_delivery#embedding_videos_in_web_pages)
 */

/* harmony default export */ var CldVideo = ({
  name: "CldVideo",
  inheritAttrs: false,
  mixins: [ready, mounted, lazy, cldAttrsInherited, cldAttrsOwned],
  render: function render(h) {
    return h("video", this.videoAttrs, this.sources.map(function (attrs) {
      return h("source", {
        key: attrs.mimeType,
        attrs: attrs
      });
    }).concat(this.$slots["default"]));
  },
  props: {
    /**
     * The unique identifier of an uploaded video.
     */
    publicId: {
      type: String,
      "default": "",
      required: true
    },

    /**
     * An ordered array of the video source types to include in the HTML5 tag, where the type is mapped to the mime type.
     * You can also add a specific transformation for each specified video format by adding a transformation struct. Example:
     *
     * `<CldVideo :sourceTypes="{ mp4: { quality: 10 } }" />`
     */
    sourceTypes: {
      type: Object,
      "default": function _default() {
        return merge.apply(this, external_commonjs_cloudinary_core_commonjs2_cloudinary_core_amd_cloudinary_core_umd_cloudinary_root_cloudinary_["Cloudinary"].DEFAULT_VIDEO_PARAMS.source_types.map(function (type) {
          return kv(type, {});
        }));
      }
    }
  },
  provide: function provide() {
    return {
      CldPosterState: this.posterCombinedState
    };
  },
  data: function data() {
    var posterCombinedState = new CombinedState_CombinedState(combineOptions);
    return {
      posterCombinedState: posterCombinedState,
      posterCldAttrs: null
    };
  },
  computed: {
    videoAttrs: function videoAttrs() {
      var className = {
        "cld-video": true
      };

      if (!this.isReady || !this.publicId || !!findInTransformations(this.cldAttrs.transformation, function (t) {
        return t.width === 0 || t.height === 0;
      })) {
        return {
          "class": className
        };
      }

      var htmlAttrs = merge(typeof this.$attrs.poster === "string" ? {
        poster: this.$attrs.poster
      } : this.posterOptions ? {
        poster: external_commonjs_cloudinary_core_commonjs2_cloudinary_core_amd_cloudinary_core_umd_cloudinary_root_cloudinary_["Cloudinary"]["new"](this.posterOptions.configuration).url(this.posterOptions.publicId, this.posterOptions.transformation)
      } : {}, external_commonjs_cloudinary_core_commonjs2_cloudinary_core_amd_cloudinary_core_umd_cloudinary_root_cloudinary_["Transformation"]["new"](this.cldAttrs.transformation).toHtmlAttributes());
      return {
        "class": className,
        attrs: merge(normalizeRest(this.$attrs), htmlAttrs)
      };
    },
    sources: function sources() {
      var _this = this;

      if (!this.isReady || !this.publicId) {
        return [];
      }

      if (this.lazy && !this.visible) {
        return [];
      }

      return Object.keys(this.sourceTypes).map(function (srcType) {
        var configuration = merge(_this.cldAttrs.configuration, normalizeConfiguration(_this.sourceTypes[srcType] || {}));
        var transformation = combineTransformations(_this.cldAttrs.transformation, normalizeTransformation(_this.sourceTypes[srcType] || {}));
        var htmlAttrs = normalizeRest(_this.sourceTypes[srcType] || {});
        var src = external_commonjs_cloudinary_core_commonjs2_cloudinary_core_amd_cloudinary_core_umd_cloudinary_root_cloudinary_["Cloudinary"]["new"](configuration).url(_this.publicId, merge({
          resource_type: "video",
          format: srcType
        }, transformation));
        var mimeType = "video/" + (srcType === "ogv" ? "ogg" : srcType);
        return merge(htmlAttrs, {
          mimeType: mimeType,
          src: src
        });
      });
    },
    posterOptions: function posterOptions() {
      var ownPosterAttrs = combineOptions({
        configuration: this.cldAttrs.configuration
      }, {
        publicId: CldVideo_typeof(this.$attrs.poster) === "object" ? (this.$attrs.poster || {}).publicId : null,
        configuration: normalizeConfiguration(CldVideo_typeof(this.$attrs.poster) === "object" && this.$attrs.poster ? this.$attrs.poster : {}),
        transformation: normalizeTransformation(CldVideo_typeof(this.$attrs.poster) === "object" && this.$attrs.poster ? this.$attrs.poster : {})
      });
      ownPosterAttrs.transformation = ownPosterAttrs.transformation || {};

      if ((this.$attrs.poster || {}).publicId) {
        ownPosterAttrs.transformation.resource_type = "image";
      } else {
        ownPosterAttrs.transformation.resource_type = "video";
        ownPosterAttrs.transformation.format = "jpeg";
      }

      var extPosterAttrs = this.posterCldAttrs ? combineOptions({
        publicId: this.publicId,
        configuration: this.cldAttrs.configuration
      }, this.posterCldAttrs) : {};
      extPosterAttrs.transformation = extPosterAttrs.transformation || {};

      if ((this.posterCldAttrs || {}).publicId) {
        extPosterAttrs.transformation.resource_type = "image";
      } else {
        extPosterAttrs.transformation.resource_type = "video";
        extPosterAttrs.transformation.format = "jpeg";
      }

      var defaultPoster = merge(combineOptions({
        publicId: this.publicId
      }, this.cldAttrs), {
        transformation: {
          resource_type: "video",
          format: "jpeg"
        }
      });
      return find([extPosterAttrs, ownPosterAttrs, defaultPoster], function (options) {
        return options.publicId;
      });
    }
  },
  created: function created() {
    var _this2 = this;

    this.posterCombinedStateSub = this.posterCombinedState.subscribe({
      next: function next(v) {
        if (Object.keys(v).length) {
          _this2.posterCldAttrs = v;
        }
      }
    });
  },
  destroyed: function destroyed() {
    this.posterCombinedStateSub();
  }
});
// CONCATENATED MODULE: ./src/plugin.js
function plugin_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { plugin_typeof = function _typeof(obj) { return typeof obj; }; } else { plugin_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return plugin_typeof(obj); }








/* eslint no-param-reassign: 0 */

function install(Vue, options) {
  if (Vue.CldInstalled) {
    throw new Error("Cloudinary plugin already installed");
  }

  Vue.CldInstalled = true;
  options = options || {};
  [CldContext, CldImage, CldPoster, CldTransformation, CldVideo].forEach(function (component) {
    var userComponentName = getUserComponentName(options.components, component.name);

    if (userComponentName != null) {
      Vue.component(userComponentName, component);
    }
  });

  if (options.configuration) {
    Vue.prototype.CldGlobalContextState = new State_State({
      configuration: normalizeConfiguration(options.configuration)
    });
  }
}

function getUserComponentName(components, name) {
  if (!components) {
    return name;
  }

  if (plugin_typeof(components) === "object") {
    // { components: ['CldImage'] }
    if (Array.isArray(components)) {
      return components.indexOf(name) >= 0 ? name : null;
    } // { components: { CldImage: true } }


    if (typeof components[name] === "boolean") {
      return components[name] === true ? name : null;
    } // { components: { CldImage: 'CloudinaryImage' } }


    if (typeof components[name] === "string") {
      return components[name];
    } // { components: { CloudinaryImage: 'CldImage' } }


    var keys = Object.keys(components);
    var values = keys.map(function (key) {
      return components[key];
    });

    if (values.indexOf(name) >= 0) {
      return keys[values.indexOf(name)];
    }
  }

  return null;
}
// CONCATENATED MODULE: ./src/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return src_plugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return src_plugin; });
/* concated harmony reexport CldContext */__webpack_require__.d(__webpack_exports__, "CldContext", function() { return CldContext; });
/* concated harmony reexport CldImage */__webpack_require__.d(__webpack_exports__, "CldImage", function() { return CldImage; });
/* concated harmony reexport CldVideo */__webpack_require__.d(__webpack_exports__, "CldVideo", function() { return CldVideo; });
/* concated harmony reexport CldPoster */__webpack_require__.d(__webpack_exports__, "CldPoster", function() { return CldPoster; });
/* concated harmony reexport CldTransformation */__webpack_require__.d(__webpack_exports__, "CldTransformation", function() { return CldTransformation; });
/* concated harmony reexport install */__webpack_require__.d(__webpack_exports__, "install", function() { return install; });






var src_plugin = {
  install: install
};


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbG91ZGluYXJ5VnVlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9jbG91ZGluYXJ5VnVlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Nsb3VkaW5hcnlWdWUvZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcImNsb3VkaW5hcnktY29yZVwiLFwiY29tbW9uanMyXCI6XCJjbG91ZGluYXJ5LWNvcmVcIixcImFtZFwiOlwiY2xvdWRpbmFyeS1jb3JlXCIsXCJ1bWRcIjpcImNsb3VkaW5hcnlcIixcInJvb3RcIjpcImNsb3VkaW5hcnlcIn0iLCJ3ZWJwYWNrOi8vY2xvdWRpbmFyeVZ1ZS8uL3NyYy9yZWFjdGl2ZS9DaGFubmVsLmpzIiwid2VicGFjazovL2Nsb3VkaW5hcnlWdWUvLi9zcmMvcmVhY3RpdmUvU3RhdGUuanMiLCJ3ZWJwYWNrOi8vY2xvdWRpbmFyeVZ1ZS8uL3NyYy91dGlscy9tZXJnZS5qcyIsIndlYnBhY2s6Ly9jbG91ZGluYXJ5VnVlLy4vc3JjL3V0aWxzL2t2LmpzIiwid2VicGFjazovL2Nsb3VkaW5hcnlWdWUvLi9zcmMvdXRpbHMvZm9ybWF0T2JqZWN0LmpzIiwid2VicGFjazovL2Nsb3VkaW5hcnlWdWUvLi9zcmMvdXRpbHMvbm9ybWFsaXplT2JqZWN0LmpzIiwid2VicGFjazovL2Nsb3VkaW5hcnlWdWUvLi9zcmMvdXRpbHMvb21pdC5qcyIsIndlYnBhY2s6Ly9jbG91ZGluYXJ5VnVlLy4vc3JjL3V0aWxzL3BpY2suanMiLCJ3ZWJwYWNrOi8vY2xvdWRpbmFyeVZ1ZS8uL3NyYy91dGlscy91bmlxLmpzIiwid2VicGFjazovL2Nsb3VkaW5hcnlWdWUvLi9zcmMvdXRpbHMvZXF1YWwuanMiLCJ3ZWJwYWNrOi8vY2xvdWRpbmFyeVZ1ZS8uL3NyYy91dGlscy9kZWJvdW5jZS5qcyIsIndlYnBhY2s6Ly9jbG91ZGluYXJ5VnVlLy4vc3JjL3V0aWxzL2ZpbmQuanMiLCJ3ZWJwYWNrOi8vY2xvdWRpbmFyeVZ1ZS8uL3NyYy91dGlscy9yYW5nZS5qcyIsIndlYnBhY2s6Ly9jbG91ZGluYXJ5VnVlLy4vc3JjL3V0aWxzL2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly9jbG91ZGluYXJ5VnVlLy4vc3JjL3V0aWxzL2ZsYXR0ZW4uanMiLCJ3ZWJwYWNrOi8vY2xvdWRpbmFyeVZ1ZS8uL3NyYy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jbG91ZGluYXJ5VnVlLy4vc3JjL2hlbHBlcnMvYXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jbG91ZGluYXJ5VnVlLy4vc3JjL21peGlucy9yZWFkeS5qcyIsIndlYnBhY2s6Ly9jbG91ZGluYXJ5VnVlLy4vc3JjL21peGlucy9tb3VudGVkLmpzIiwid2VicGFjazovL2Nsb3VkaW5hcnlWdWUvLi9zcmMvcmVhY3RpdmUvQ29tYmluZWRTdGF0ZS5qcyIsIndlYnBhY2s6Ly9jbG91ZGluYXJ5VnVlLy4vc3JjL2hlbHBlcnMvY29tYmluZU9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vY2xvdWRpbmFyeVZ1ZS8uL3NyYy9taXhpbnMvY2xkQXR0cnMuanMiLCJ3ZWJwYWNrOi8vY2xvdWRpbmFyeVZ1ZS8uL3NyYy9taXhpbnMvY2xkQXR0cnNPd25lZC5qcyIsIndlYnBhY2s6Ly9jbG91ZGluYXJ5VnVlLy4vc3JjL21peGlucy9jbGRDaGlsZC5qcyIsIndlYnBhY2s6Ly9jbG91ZGluYXJ5VnVlLy4vc3JjL21peGlucy9jbGRBdHRyc0luaGVyaXRlZC5qcyIsIndlYnBhY2s6Ly9jbG91ZGluYXJ5VnVlLy4vc3JjL2NvbXBvbmVudHMvQ2xkQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9jbG91ZGluYXJ5VnVlLy4vc3JjL2hlbHBlcnMvZmluZEluVHJhbnNmb3JtYXRpb25zLmpzIiwid2VicGFjazovL2Nsb3VkaW5hcnlWdWUvLi9zcmMvaGVscGVycy9ldmFsQnJlYWtwb2ludHMuanMiLCJ3ZWJwYWNrOi8vY2xvdWRpbmFyeVZ1ZS8uL3NyYy9oZWxwZXJzL2dldERQUkF0dHIuanMiLCJ3ZWJwYWNrOi8vY2xvdWRpbmFyeVZ1ZS8uL3NyYy9oZWxwZXJzL2ZpbmRCcmVha3BvaW50LmpzIiwid2VicGFjazovL2Nsb3VkaW5hcnlWdWUvLi9zcmMvaGVscGVycy9nZXRSZXNpemVUcmFuc2Zvcm1hdGlvbi5qcyIsIndlYnBhY2s6Ly9jbG91ZGluYXJ5VnVlLy4vc3JjL2hlbHBlcnMvZ2V0UGxhY2Vob2xkZXJVUkwuanMiLCJ3ZWJwYWNrOi8vY2xvdWRpbmFyeVZ1ZS8uL3NyYy9taXhpbnMvc2l6ZS5qcyIsIndlYnBhY2s6Ly9jbG91ZGluYXJ5VnVlLy4vc3JjL21peGlucy9sYXp5LmpzIiwid2VicGFjazovL2Nsb3VkaW5hcnlWdWUvLi9zcmMvY29tcG9uZW50cy9DbGRJbWFnZS5qcyIsIndlYnBhY2s6Ly9jbG91ZGluYXJ5VnVlLy4vc3JjL21peGlucy9jbGRBdHRyc1N1Ym1pdHRpbmcuanMiLCJ3ZWJwYWNrOi8vY2xvdWRpbmFyeVZ1ZS8uL3NyYy9jb21wb25lbnRzL0NsZFBvc3Rlci5qcyIsIndlYnBhY2s6Ly9jbG91ZGluYXJ5VnVlLy4vc3JjL2NvbXBvbmVudHMvQ2xkVHJhbnNmb3JtYXRpb24uanMiLCJ3ZWJwYWNrOi8vY2xvdWRpbmFyeVZ1ZS8uL3NyYy9jb21wb25lbnRzL0NsZFZpZGVvLmpzIiwid2VicGFjazovL2Nsb3VkaW5hcnlWdWUvLi9zcmMvcGx1Z2luLmpzIiwid2VicGFjazovL2Nsb3VkaW5hcnlWdWUvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiQ2hhbm5lbCIsInN1YnMiLCJ2YWx1ZSIsImZvckVhY2giLCJzdWIiLCJuZXh0IiwiZXJyb3IiLCJzcGxpY2UiLCJjb21wbGV0ZSIsImxpc3RlbmVyIiwicHVzaCIsImZpbHRlciIsIlN0YXRlIiwibGFzdFZhbHVlIiwiY2hhbm5lbCIsImNvbXB1dGVkVmFsdWUiLCJzdWJzY3JpYmUiLCJtZXJnZSIsImFyZ3MiLCJsZW5ndGgiLCJyZXN1bHQiLCJPYmplY3QiLCJrZXlzIiwiayIsInVuZGVmaW5lZCIsInNsaWNlIiwia3YiLCJ2IiwiZm9ybWF0T2JqZWN0Iiwic3ViamVjdCIsImluc3RydWN0aW9ucyIsInJlZHVjZSIsImtleSIsIm5vcm1hbGl6ZU9iamVjdCIsIm9taXQiLCJkaXNhbGxvd2VkIiwiaW5kZXhPZiIsInBpY2siLCJhbGxvd2VkIiwidW5pcSIsInN1YmplY3RBIiwic3ViamVjdEIiLCJjb25jYXQiLCJyIiwiaSIsImVxdWFsIiwic3ViamVjdEFLZXlzIiwic3ViamVjdEJLZXlzIiwiYWxsS2V5cyIsImRlYm91bmNlIiwiZm4iLCJ0aW1lb3V0IiwiZm9yY2VVcGRhdGVUaW1lb3V0VG9rZW4iLCJkZWJvdW5jZWQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiYXBwbHkiLCJmaW5kIiwicHJlZGljYXRlIiwiQXJyYXkiLCJFcnJvciIsInJhbmdlIiwibWluIiwibWF4Iiwic3RlcCIsImFzc2lnbiIsIm1vZCIsImZsYXR0ZW4iLCJpdGVtIiwiY29uZmlndXJhdGlvbiIsIkNvbmZpZ3VyYXRpb24iLCJDT05GSUdfUEFSQU1TIiwibWFwIiwiVXRpbCIsImNhbWVsQ2FzZSIsInRyYW5zZm9ybWF0aW9uIiwiVHJhbnNmb3JtYXRpb24iLCJQQVJBTV9OQU1FUyIsIm5hbWUiLCJub3JtYWxpemVDb25maWd1cmF0aW9uIiwiY2ZnIiwid2l0aFNuYWtlQ2FzZUtleXMiLCJzZWN1cmUiLCJub3JtYWxpemVUcmFuc2Zvcm1hdGlvbiIsIm5vcm1hbGl6ZVJlc3QiLCJyZWFkeSIsImRhdGEiLCJjb21wdXRlZCIsImlzUmVhZHkiLCJmbGFncyIsIm1ldGhvZHMiLCJhZGRSZWFkeUNoZWNrIiwibWFya1JlYWR5Q2hlY2siLCJtb3VudGVkIiwibWl4aW5zIiwiY3JlYXRlZCIsIkNsZFBhcmVudFN0YXRlIiwiJHNsb3RzIiwiQ29tYmluZWRTdGF0ZSIsImNvbXBvc2l0aW9uIiwiY2h1bmtlZFN0YXRlIiwic29saWRTdGF0ZSIsIm5leHRTdW0iLCJlIiwibGFzdCIsImRpZFN0YXRlUHVzaGVkRW1wdHkiLCJuZXdTcGF3biIsImN1cnJlbnRTdGF0ZSIsImNodW5rIiwicCIsImdldCIsImNvbWJpbmVPcHRpb25zIiwib3B0aW9ucyIsInB1YmxpY0lkIiwiaXNPYmplY3RXaXRoS2V5cyIsIl8iLCJjb21iaW5lVHJhbnNmb3JtYXRpb25zIiwidHJhbnNmb3JtYXRpb25zIiwiY2xkQXR0cnMiLCJwcm92aWRlIiwiY2xkQXR0cnNTdGF0ZSIsImNsZEF0dHJzU3RhdGVTdWIiLCJkZXN0cm95ZWQiLCJjbGRBdHRyc093bmVkIiwiYXR0cmlidXRlcyIsIiRhdHRycyIsImNsZEF0dHJpYnV0ZXMiLCJvd25TdGF0ZSIsInNwYXduIiwidXBkYXRlZCIsInByZXYiLCJjdXJyZW50IiwiY2xkQ2hpbGQiLCJpbmplY3QiLCJDbGRHbG9iYWxDb250ZXh0U3RhdGUiLCJjbGRBdHRyc0luaGVyaXRlZCIsImNvbnRleHRTdGF0ZSIsImNvbnRleHRTdGF0ZVN1YiIsInJlbmRlciIsImgiLCJodG1sQXR0cmlidXRlcyIsImluaGVyaXRBdHRycyIsInByb3BzIiwiYXR0cnMiLCJmaW5kSW5UcmFuc2Zvcm1hdGlvbnMiLCJldmFsQnJlYWtwb2ludHMiLCJ2YWx1ZU9yR2V0dGVyIiwiSlNPTiIsInBhcnNlIiwiZ2V0RFBSQXR0ciIsIndpbmRvdyIsImRwciIsImRldmljZVBpeGVsUmF0aW8iLCJmaW5kQnJlYWtwb2ludCIsInN0b3BzIiwic29ydCIsImEiLCJiIiwic3RvcCIsImdldFJlc2l6ZVRyYW5zZm9ybWF0aW9uIiwibW9kZSIsInNpemUiLCJicmVha3BvaW50cyIsImNyb3AiLCJ3aWR0aCIsIk1hdGgiLCJmbG9vciIsImhlaWdodCIsImdldFBsYWNlaG9sZGVyVVJMIiwicGxhY2Vob2xkZXJPcHRpb25zIiwibHFpcCIsInZhcmlhYmxlcyIsInF1YWxpdHkiLCJjb2xvciIsInBpeGVsYXRlIiwiZWZmZWN0IiwiQ2xvdWRpbmFyeSIsInVybCIsInNob3VsZE1lYXN1cmVTaXplIiwiZml4IiwiY2FsbCIsImNhbmNlbFNpemVMaXN0ZW5lciIsIiRlbCIsIndhdGNoRWxlbWVudFNpemUiLCJtZWFzdXJlbWVudCIsImN1cnJlbnRTaXplIiwibmV4dFNpemUiLCJlbGVtZW50IiwiY2IiLCJkZWxheWVkQ2FsbGJhY2siLCJjYW5jZWxsZWQiLCJyZXNpemVPYnNlcnZlciIsIlJlc2l6ZU9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY29udGVudFJlY3QiLCJvYnNlcnZlIiwiZGlzY29ubmVjdCIsImhhbmRsZVdpbmRvd1Jlc2l6ZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibGF6eSIsInR5cGUiLCJCb29sZWFuIiwidmlzaWJsZSIsImNhbmNlbFZpc2liaWxpdHlMaXN0ZW5lciIsIndhdGNoRWxlbWVudFZpc2liaWxpdHkiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwidGFyZ2V0IiwiaXNJbnRlcnNlY3RpbmciLCJ0aHJlc2hvbGQiLCJub29wIiwiaW1hZ2VBdHRycyIsIlN0cmluZyIsInJlcXVpcmVkIiwicHJvZ3Jlc3NpdmUiLCJwbGFjZWhvbGRlciIsInJlc3BvbnNpdmUiLCJGdW5jdGlvbiIsImNsYXNzTmFtZSIsInN0eWxlIiwiZGlzcGxheSIsImZpbGwiLCJ0Iiwic3JjIiwiaHRtbEF0dHJzIiwidG9IdG1sQXR0cmlidXRlcyIsImNsZEF0dHJzU3VibWl0dGluZyIsInN1Ym1pdHRlciIsInN1Ym1pdHRlclN1YiIsImZyb20iLCJ2aWRlb0F0dHJzIiwic291cmNlcyIsIm1pbWVUeXBlIiwic291cmNlVHlwZXMiLCJERUZBVUxUX1ZJREVPX1BBUkFNUyIsInNvdXJjZV90eXBlcyIsIkNsZFBvc3RlclN0YXRlIiwicG9zdGVyQ29tYmluZWRTdGF0ZSIsInBvc3RlckNsZEF0dHJzIiwicG9zdGVyIiwicG9zdGVyT3B0aW9ucyIsInNyY1R5cGUiLCJyZXNvdXJjZV90eXBlIiwiZm9ybWF0Iiwib3duUG9zdGVyQXR0cnMiLCJleHRQb3N0ZXJBdHRycyIsImRlZmF1bHRQb3N0ZXIiLCJwb3N0ZXJDb21iaW5lZFN0YXRlU3ViIiwiaW5zdGFsbCIsIlZ1ZSIsIkNsZEluc3RhbGxlZCIsIkNsZENvbnRleHQiLCJDbGRJbWFnZSIsIkNsZFBvc3RlciIsIkNsZFRyYW5zZm9ybWF0aW9uIiwiQ2xkVmlkZW8iLCJjb21wb25lbnQiLCJ1c2VyQ29tcG9uZW50TmFtZSIsImdldFVzZXJDb21wb25lbnROYW1lIiwiY29tcG9uZW50cyIsInByb3RvdHlwZSIsImlzQXJyYXkiLCJ2YWx1ZXMiLCJwbHVnaW4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNkQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7QUNsRkEsZ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7O0FBT0E7Ozs7QUFJTyxJQUFNQSxPQUFiO0FBQUE7QUFBQTtBQUNF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LFVBQU0sR0FBRztBQUFFZixTQUFPLEVBQVBBLE9BQU9BO0FBQVQsQ0FBZiIsImZpbGUiOiJjbG91ZGluYXJ5LXZ1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdC8vLyogZXNsaW50LWRpc2FibGUgKi9cblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2xvdWRpbmFyeS1jb3JlXCIpKTtcblx0Ly8vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJjbG91ZGluYXJ5VnVlXCIsIFtcImNsb3VkaW5hcnktY29yZVwiXSwgZmFjdG9yeSk7XG5cdC8vLyogZXNsaW50LWRpc2FibGUgKi9cblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImNsb3VkaW5hcnlWdWVcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjbG91ZGluYXJ5LWNvcmVcIikpO1xuXHQvLy8qIGVzbGludC1kaXNhYmxlICovXG5cdGVsc2Vcblx0XHRyb290W1wiY2xvdWRpbmFyeVZ1ZVwiXSA9IGZhY3Rvcnkocm9vdFtcImNsb3VkaW5hcnlcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzBfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fMF9fOyIsIi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gSUxpc3RlbmVyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBuZXh0XG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBlcnJvclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY29tcGxldGVcbiAqL1xuXG4vKipcbiAqIE1lc3NhZ2UgcGFzc2luZyBlbnRpdHkuXG4gKiBBbGxvd3MgcmVnaXN0ZXJpbmcgbGlzdGVuZXJzIHRoYXQgYXJlIHRoZW4gdHJpZ2dlcmVkIHdpdGggYSBtZXNzYWdlLCBlcnJvciBvciBlbmQgc2lnbmFsLlxuICovXG5leHBvcnQgY2xhc3MgQ2hhbm5lbCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc3VicyA9IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1c2ggYSBtZXNzYWdlIHRvIGFsbCBhY3RpdmUgbGlzdGVuZXJzXG4gICAqIEBwYXJhbSB7Kn0gbWVzc2FnZVxuICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgKi9cbiAgbmV4dCh2YWx1ZSkge1xuICAgIHRoaXMuc3Vicy5mb3JFYWNoKHN1YiA9PlxuICAgICAgc3ViICYmIHR5cGVvZiBzdWIgPT09IFwib2JqZWN0XCIgJiYgXCJuZXh0XCIgaW4gc3ViICYmIHN1Yi5uZXh0XG4gICAgICAgID8gc3ViLm5leHQodmFsdWUpXG4gICAgICAgIDogbnVsbFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUHVzaCBhbiBlcnJvciBzaWduYWwgdG8gYWxsIGFjdGl2ZSBsaXN0ZW5lcnNcbiAgICogQHBhcmFtIHtFcnJvcn0gZXJyb3JcbiAgICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAgICovXG4gIGVycm9yKGVycm9yKSB7XG4gICAgdGhpcy5zdWJzXG4gICAgICAuc3BsaWNlKDApXG4gICAgICAuZm9yRWFjaChzdWIgPT5cbiAgICAgICAgc3ViICYmIHR5cGVvZiBzdWIgPT09IFwib2JqZWN0XCIgJiYgXCJlcnJvclwiIGluIHN1YiAmJiBzdWIuZXJyb3JcbiAgICAgICAgICA/IHN1Yi5lcnJvcihlcnJvcilcbiAgICAgICAgICA6IG51bGxcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUHVzaCBhbiBlbmQgc2lnbmFsIHRvIGFsbCBhY3RpdmUgbGlzdGVuZXJzXG4gICAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAqL1xuICBjb21wbGV0ZSgpIHtcbiAgICB0aGlzLnN1YnNcbiAgICAgIC5zcGxpY2UoMClcbiAgICAgIC5mb3JFYWNoKHN1YiA9PlxuICAgICAgICBzdWIgJiYgdHlwZW9mIHN1YiA9PT0gXCJvYmplY3RcIiAmJiBcImNvbXBsZXRlXCIgaW4gc3ViICYmIHN1Yi5jb21wbGV0ZVxuICAgICAgICAgID8gc3ViLmNvbXBsZXRlKClcbiAgICAgICAgICA6IG51bGxcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBsaXN0ZW5lclxuICAgKiBAcGFyYW0ge0lMaXN0ZW5lcn0gbGlzdGVuZXJcbiAgICogQHJldHVybnMge0Z1bmN0aW9ufVxuICAgKi9cbiAgc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgdGhpcy5zdWJzLnB1c2gobGlzdGVuZXIpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB0aGlzLnN1YnMgPSB0aGlzLnN1YnMuZmlsdGVyKHN1YiA9PiBzdWIgIT09IGxpc3RlbmVyKTtcbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyBDaGFubmVsIH0gZnJvbSBcIi4vQ2hhbm5lbFwiO1xuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBJTGlzdGVuZXJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IG5leHRcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGVycm9yXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBjb21wbGV0ZVxuICovXG5cbi8qKlxuICogU3RhdGUgYnJvYWRjYXN0aW5nIGVudGl0eS5cbiAqIExpa2UgQ2hhbm5lbCwgYWxsb3dzIHJlZ2lzdGVyaW5nIGZvciB1cGRhdGVzLFxuICogYnV0IHN1YnNjcmlwdGlvbiBpcyBhbHNvIG5vdGlmaWVkIGltbWVkaWF0ZWx5XG4gKiBvZiBhIGxhc3QgbWVzc2FnZSBwYXNzZWQgdGhyb3VnaCB0aGUgZW50aXR5XG4gKi9cbmV4cG9ydCBjbGFzcyBTdGF0ZSB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgdGhpcy5sYXN0VmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmNoYW5uZWwgPSBuZXcgQ2hhbm5lbCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1c2ggYSBuZXcgc3RhdGUgdG8gYWxsIGFjdGl2ZSBsaXN0ZW5lcnNcbiAgICogQHBhcmFtIHtGdW5jdGlvbnwqfSBzdGF0ZVxuICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgKi9cbiAgbmV4dCh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmxhc3RWYWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY29tcHV0ZWRWYWx1ZSA9XG4gICAgICB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIiA/IHZhbHVlKHRoaXMubGFzdFZhbHVlKSA6IHZhbHVlO1xuICAgIHRoaXMubGFzdFZhbHVlID0gY29tcHV0ZWRWYWx1ZTtcbiAgICB0aGlzLmNoYW5uZWwubmV4dChjb21wdXRlZFZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdXNoIGFuIGVycm9yIHNpZ25hbCB0byBhbGwgYWN0aXZlIGxpc3RlbmVyc1xuICAgKiBAcGFyYW0ge0Vycm9yfSBlcnJvclxuICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgKi9cbiAgZXJyb3IoZXJyb3IpIHtcbiAgICByZXR1cm4gdGhpcy5jaGFubmVsLmVycm9yKGVycm9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdXNoIGFuIGVuZCBzaWduYWwgdG8gYWxsIGFjdGl2ZSBsaXN0ZW5lcnNcbiAgICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAgICovXG4gIGNvbXBsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLmNoYW5uZWwuY29tcGxldGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIGxpc3RlbmVyXG4gICAqIEBwYXJhbSB7SUxpc3RlbmVyfSBsaXN0ZW5lclxuICAgKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gICAqL1xuICBzdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICBpZiAobGlzdGVuZXIgJiYgdHlwZW9mIGxpc3RlbmVyID09PSBcIm9iamVjdFwiICYmIGxpc3RlbmVyLm5leHQpIHtcbiAgICAgIGxpc3RlbmVyLm5leHQodGhpcy5sYXN0VmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jaGFubmVsLnN1YnNjcmliZShsaXN0ZW5lcik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxhc3QgcHVzaGVkIHN0YXRlXG4gICAqL1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFzdFZhbHVlO1xuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbWVyZ2UoLi4uYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4ge307XG4gIH1cbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGFyZ3NbMF07XG4gIH1cbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAyKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgaWYgKGFyZ3NbMF0gIT0gbnVsbCkge1xuICAgICAgT2JqZWN0LmtleXMoYXJnc1swXSkuZm9yRWFjaChrID0+IHtcbiAgICAgICAgaWYgKGFyZ3NbMF1ba10gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJlc3VsdFtrXSA9IGFyZ3NbMF1ba107XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoYXJnc1sxXSAhPSBudWxsKSB7XG4gICAgICBPYmplY3Qua2V5cyhhcmdzWzFdKS5mb3JFYWNoKGsgPT4ge1xuICAgICAgICBpZiAoYXJnc1sxXVtrXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmVzdWx0W2tdID0gYXJnc1sxXVtrXTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIG1lcmdlKGFyZ3NbMF0sIG1lcmdlKC4uLmFyZ3Muc2xpY2UoMSkpKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBrdihrLCB2KSB7XG4gIGNvbnN0IHJlc3VsdCA9IHt9O1xuICByZXN1bHRba10gPSB2O1xuICByZXR1cm4gcmVzdWx0O1xufVxuIiwiaW1wb3J0IHsgbWVyZ2UgfSBmcm9tIFwiLi9tZXJnZVwiO1xuaW1wb3J0IHsga3YgfSBmcm9tIFwiLi9rdlwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0T2JqZWN0KHN1YmplY3QsIGluc3RydWN0aW9ucykge1xuICBpZiAoc3ViamVjdCA9PSBudWxsICYmIE9iamVjdC5rZXlzKGluc3RydWN0aW9ucykubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHN1YmplY3Q7XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmtleXMoc3ViamVjdCkucmVkdWNlKFxuICAgIChyZXN1bHQsIGtleSkgPT5cbiAgICAgIGtleSBpbiBpbnN0cnVjdGlvbnNcbiAgICAgICAgPyBtZXJnZShyZXN1bHQsIGt2KGtleSwgaW5zdHJ1Y3Rpb25zW2tleV0oc3ViamVjdFtrZXldKSkpXG4gICAgICAgIDogbWVyZ2UocmVzdWx0LCBrdihrZXksIHN1YmplY3Rba2V5XSkpLFxuICAgIHt9XG4gICk7XG59XG4iLCJpbXBvcnQgeyBtZXJnZSB9IGZyb20gXCIuL21lcmdlXCI7XG5pbXBvcnQgeyBrdiB9IGZyb20gXCIuL2t2XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVPYmplY3Qoc3ViamVjdCkge1xuICBpZiAoc3ViamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHN1YmplY3Q7XG4gIH1cbiAgcmV0dXJuIE9iamVjdC5rZXlzKHN1YmplY3QpLnJlZHVjZShcbiAgICAocmVzdWx0LCBrZXkpID0+XG4gICAgICBzdWJqZWN0W2tleV0gPT0gbnVsbCA/IHJlc3VsdCA6IG1lcmdlKHJlc3VsdCwga3Yoa2V5LCBzdWJqZWN0W2tleV0pKSxcbiAgICB7fVxuICApO1xufVxuIiwiaW1wb3J0IHsgbWVyZ2UgfSBmcm9tIFwiLi9tZXJnZVwiO1xuaW1wb3J0IHsga3YgfSBmcm9tIFwiLi9rdlwiO1xuXG5leHBvcnQgZnVuY3Rpb24gb21pdChzdWJqZWN0LCBkaXNhbGxvd2VkKSB7XG4gIGlmIChzdWJqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gc3ViamVjdDtcbiAgfVxuICByZXR1cm4gT2JqZWN0LmtleXMoc3ViamVjdCkucmVkdWNlKFxuICAgIChyZXN1bHQsIGtleSkgPT5cbiAgICAgIChkaXNhbGxvd2VkIHx8IFtdKS5pbmRleE9mKGtleSkgPCAwXG4gICAgICAgID8gbWVyZ2UocmVzdWx0LCBrdihrZXksIHN1YmplY3Rba2V5XSkpXG4gICAgICAgIDogcmVzdWx0LFxuICAgIHt9XG4gICk7XG59XG4iLCJpbXBvcnQgeyBtZXJnZSB9IGZyb20gXCIuL21lcmdlXCI7XG5pbXBvcnQgeyBrdiB9IGZyb20gXCIuL2t2XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwaWNrKHN1YmplY3QsIGFsbG93ZWQpIHtcbiAgaWYgKHN1YmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiBzdWJqZWN0O1xuICB9XG4gIHJldHVybiAoYWxsb3dlZCB8fCBbXSkucmVkdWNlKFxuICAgIChyZXN1bHQsIGtleSkgPT5cbiAgICAgIGtleSBpbiBzdWJqZWN0ID8gbWVyZ2UocmVzdWx0LCBrdihrZXksIHN1YmplY3Rba2V5XSkpIDogcmVzdWx0LFxuICAgIHt9XG4gICk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gdW5pcShzdWJqZWN0QSwgc3ViamVjdEIpIHtcbiAgcmV0dXJuIChzdWJqZWN0QSB8fCBbXSlcbiAgICAuY29uY2F0KHN1YmplY3RCIHx8IFtdKVxuICAgIC5yZWR1Y2UoKHIsIGkpID0+IChyLmluZGV4T2YoaSkgPCAwID8gci5jb25jYXQoW2ldKSA6IHIpLCBbXSk7XG59XG4iLCJpbXBvcnQgeyB1bmlxIH0gZnJvbSBcIi4vdW5pcVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWwoc3ViamVjdEEsIHN1YmplY3RCKSB7XG4gIGlmIChcbiAgICAoc3ViamVjdEEgPT09IG51bGwgJiYgc3ViamVjdEIgPT09IG51bGwpIHx8XG4gICAgKHN1YmplY3RBID09PSB1bmRlZmluZWQgJiYgc3ViamVjdEIgPT09IHVuZGVmaW5lZClcbiAgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoXG4gICAgKChzdWJqZWN0QSA9PT0gbnVsbCB8fCBzdWJqZWN0QiA9PT0gbnVsbCkgJiZcbiAgICAgIChzdWJqZWN0QSAhPT0gbnVsbCB8fCBzdWJqZWN0QiAhPT0gbnVsbCkpIHx8XG4gICAgKChzdWJqZWN0QSA9PT0gdW5kZWZpbmVkIHx8IHN1YmplY3RCID09PSB1bmRlZmluZWQpICYmXG4gICAgICAoc3ViamVjdEEgIT09IHVuZGVmaW5lZCB8fCBzdWJqZWN0QiAhPT0gdW5kZWZpbmVkKSlcbiAgKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBzdWJqZWN0QSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygc3ViamVjdEIgPT09IFwib2JqZWN0XCIpIHtcbiAgICBjb25zdCBzdWJqZWN0QUtleXMgPSBPYmplY3Qua2V5cyhzdWJqZWN0QSk7XG4gICAgY29uc3Qgc3ViamVjdEJLZXlzID0gT2JqZWN0LmtleXMoc3ViamVjdEIpO1xuICAgIGlmIChzdWJqZWN0QUtleXMubGVuZ3RoICE9PSBzdWJqZWN0QktleXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGFsbEtleXMgPSB1bmlxKHN1YmplY3RBS2V5cywgc3ViamVjdEJLZXlzKTtcbiAgICBpZiAoYWxsS2V5cy5sZW5ndGggIT09IHN1YmplY3RBS2V5cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxLZXlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBrID0gYWxsS2V5c1tpXTtcbiAgICAgIGlmICghZXF1YWwoc3ViamVjdEFba10sIHN1YmplY3RCW2tdKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHN1YmplY3RBID09PSBzdWJqZWN0Qjtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZShmbiwgdGltZW91dCkge1xuICBsZXQgZm9yY2VVcGRhdGVUaW1lb3V0VG9rZW4gPSBudWxsO1xuICByZXR1cm4gZnVuY3Rpb24gZGVib3VuY2VkKC4uLmFyZ3MpIHtcbiAgICBjbGVhclRpbWVvdXQoZm9yY2VVcGRhdGVUaW1lb3V0VG9rZW4pO1xuICAgIGZvcmNlVXBkYXRlVGltZW91dFRva2VuID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBmbi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9LCB0aW1lb3V0KTtcbiAgfTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBmaW5kKHN1YmplY3QsIHByZWRpY2F0ZSkge1xuICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgaWYgKCEoc3ViamVjdCBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgZmluZCAxc3QgYXJnIG11c3QgYmUgQXJyYXksIGlzOiAke3R5cGVvZiBzdWJqZWN0fWApO1xuICB9XG4gIHN1YmplY3QuZm9yRWFjaChpID0+IHtcbiAgICBpZiAoIXJlc3VsdCAmJiBwcmVkaWNhdGUoaSkpIHtcbiAgICAgIHJlc3VsdCA9IHsgdmFsdWU6IGkgfTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0ID8gcmVzdWx0LnZhbHVlIDogdW5kZWZpbmVkO1xufVxuIiwiLyoqXG4gKiBSZXR1cm5zIGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIG51bWJlcnMgYmV0d2VlbiBhbmQgaW5jbHVkaW5nIGBtaW5gIGFuZCBgbWF4YCBpbiBhIGRpc3RhbmNlIG9mIGBzdGVwYCBmcm9tIGVhY2ggb3RoZXJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtaW5cbiAqIEBwYXJhbSB7TnVtYmVyfSBtYXhcbiAqIEBwYXJhbSB7TnVtYmVyfSBzdGVwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByYW5nZShtaW4sIG1heCwgc3RlcCkge1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgZm9yIChsZXQgaSA9IG1pbjsgaSA8PSBtYXg7IGkgKz0gc3RlcCkge1xuICAgIHJlc3VsdC5wdXNoKGkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYXNzaWduKC4uLmFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBhcmdzWzBdO1xuICB9XG5cbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAyKSB7XG4gICAgY29uc3Qgc3ViamVjdCA9IGFyZ3NbMF07XG4gICAgY29uc3QgbW9kID0gYXJnc1sxXTtcbiAgICBPYmplY3Qua2V5cyhtb2QpLmZvckVhY2goayA9PiB7XG4gICAgICBzdWJqZWN0W2tdID0gbW9kW2tdO1xuICAgIH0pO1xuICAgIHJldHVybiBzdWJqZWN0O1xuICB9XG5cbiAgcmV0dXJuIGFzc2lnbi5hcHBseSh0aGlzLCBbYXNzaWduKGFyZ3NbMF0sIGFyZ3NbMV0pXS5jb25jYXQoYXJncy5zbGljZSgyKSkpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW4oc3ViamVjdCkge1xuICBpZiAoc3ViamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHN1YmplY3Q7XG4gIH1cbiAgcmV0dXJuIFtdLmNvbmNhdChzdWJqZWN0KS5yZWR1Y2UoKHJlc3VsdCwgaXRlbSkgPT4gcmVzdWx0LmNvbmNhdChpdGVtKSwgW10pO1xufVxuIiwiZXhwb3J0IHsgZm9ybWF0T2JqZWN0IH0gZnJvbSBcIi4vZm9ybWF0T2JqZWN0XCI7XG5leHBvcnQgeyBrdiB9IGZyb20gXCIuL2t2XCI7XG5leHBvcnQgeyBtZXJnZSB9IGZyb20gXCIuL21lcmdlXCI7XG5leHBvcnQgeyBub3JtYWxpemVPYmplY3QgfSBmcm9tIFwiLi9ub3JtYWxpemVPYmplY3RcIjtcbmV4cG9ydCB7IG9taXQgfSBmcm9tIFwiLi9vbWl0XCI7XG5leHBvcnQgeyBwaWNrIH0gZnJvbSBcIi4vcGlja1wiO1xuZXhwb3J0IHsgZXF1YWwgfSBmcm9tIFwiLi9lcXVhbFwiO1xuZXhwb3J0IHsgdW5pcSB9IGZyb20gXCIuL3VuaXFcIjtcbmV4cG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcIi4vZGVib3VuY2VcIjtcbmV4cG9ydCB7IGZpbmQgfSBmcm9tIFwiLi9maW5kXCI7XG5leHBvcnQgeyByYW5nZSB9IGZyb20gXCIuL3JhbmdlXCI7XG5leHBvcnQgeyBhc3NpZ24gfSBmcm9tIFwiLi9hc3NpZ25cIjtcbmV4cG9ydCB7IGZsYXR0ZW4gfSBmcm9tIFwiLi9mbGF0dGVuXCI7XG4iLCJpbXBvcnQgeyBUcmFuc2Zvcm1hdGlvbiwgVXRpbCwgQ29uZmlndXJhdGlvbiB9IGZyb20gXCJjbG91ZGluYXJ5LWNvcmVcIjtcbmltcG9ydCB7IGZvcm1hdE9iamVjdCwgbm9ybWFsaXplT2JqZWN0LCBwaWNrLCBvbWl0IH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5cbi8qKiBMaXN0IG9mIGFsbCBjb25maWd1cmF0aW9uIGZpZWxkcyBhcyB0aGV5IGFyZSBuZWVkZWQgaW4gY29tcG9uZW50cyBhdHRyaWJ1dGVzICovXG5leHBvcnQgY29uc3QgY29uZmlndXJhdGlvbiA9IENvbmZpZ3VyYXRpb24uQ09ORklHX1BBUkFNUy5tYXAoVXRpbC5jYW1lbENhc2UpO1xuXG4vKiogTGlzdCBvZiBhbGwgdHJhbnNmb3JtYXRpb24gZmllbGRzIGFzIHRoZXkgYXJlIG5lZWRlZCBpbiBjb21wb25lbnRzIGF0dHJpYnV0ZXMgKi9cbmV4cG9ydCBjb25zdCB0cmFuc2Zvcm1hdGlvbiA9IFRyYW5zZm9ybWF0aW9uLlBBUkFNX05BTUVTLm1hcChcbiAgVXRpbC5jYW1lbENhc2VcbikuZmlsdGVyKG5hbWUgPT4gY29uZmlndXJhdGlvbi5pbmRleE9mKG5hbWUpIDwgMCk7XG5cbi8qKiBFeHRyYWN0IGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgcHJvdmlkZWQgb2JqZWN0ICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQ29uZmlndXJhdGlvbihjZmcpIHtcbiAgcmV0dXJuIFV0aWwud2l0aFNuYWtlQ2FzZUtleXMoXG4gICAgZm9ybWF0T2JqZWN0KG5vcm1hbGl6ZU9iamVjdChwaWNrKGNmZywgY29uZmlndXJhdGlvbikpLCB7XG4gICAgICBzZWN1cmU6IHYgPT4gKHR5cGVvZiB2ID09PSBcImJvb2xlYW5cIiA/IHYgOiB2ID09PSBcInRydWVcIilcbiAgICB9KVxuICApO1xufVxuXG4vKiogRXh0cmFjdCB0cmFuc2Zvcm1hdGlvbiBvcHRpb25zIGZvciBwcm92aWRlZCBvYmplY3QgKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVUcmFuc2Zvcm1hdGlvbihjZmcpIHtcbiAgcmV0dXJuIFV0aWwud2l0aFNuYWtlQ2FzZUtleXMobm9ybWFsaXplT2JqZWN0KHBpY2soY2ZnLCB0cmFuc2Zvcm1hdGlvbikpKTtcbn1cblxuLyoqIEV4dHJhY3QgZmllbGRzIHRoYXQgYXJlIG5vdCB1c2VkIGZvciBjb25maWd1cmF0aW9uIG5vciB0cmFuc2Zvcm1hdGlvbiBpbiBwcm92aWRlZCBvYmplY3QgKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVSZXN0KGNmZykge1xuICByZXR1cm4gbm9ybWFsaXplT2JqZWN0KG9taXQoY2ZnLCB0cmFuc2Zvcm1hdGlvbi5jb25jYXQoY29uZmlndXJhdGlvbikpKTtcbn1cbiIsImltcG9ydCB7IGt2LCBtZXJnZSB9IGZyb20gXCIuLi91dGlsc1wiO1xuXG4vKipcbiAqIGhlbHBlciBtaXhpbiBmb3IgbWFya2luZ1xuICogd2hpY2ggb2Ygb3RoZXIgbWl4aW5zIHJlcG9ydCBcInJlYWR5XCIgc3RhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IHJlYWR5ID0ge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7IHJlYWR5OiB7fSB9O1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIC8qKlxuICAgICAqIFByb2R1Y2VzIGEgcmVhZHkgc3RhdGUgKGJvb2xlYW4pXG4gICAgICogSWYgYW55IG9mIHJlZ2lzdGVyZWQgcmVhZHkgZmxhZ3MgKG9iamVjdCBwcm9wcylcbiAgICAgKiBhcmUgbWFya2VkIFwidHJ1ZVwiXG4gICAgICovXG4gICAgaXNSZWFkeSgpIHtcbiAgICAgIGNvbnN0IGZsYWdzID0gT2JqZWN0LmtleXModGhpcy5yZWFkeSk7XG5cbiAgICAgIGlmIChmbGFncy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZsYWdzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmICghdGhpcy5yZWFkeVtmbGFnc1tpXV0pIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgYSBzaW5nbGUgbWl4aW4gcmVhZHkgZmxhZyB0byB0cnVlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKi9cbiAgICBhZGRSZWFkeUNoZWNrKG5hbWUpIHtcbiAgICAgIHRoaXMucmVhZHkgPSBtZXJnZSh0aGlzLnJlYWR5LCBrdihuYW1lLCBmYWxzZSkpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogU3dpdGNoIG9uIGEgc2luZ2xlIG1peGluIHJlYWR5IGZsYWcgdG8gdHJ1ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICovXG4gICAgbWFya1JlYWR5Q2hlY2sobmFtZSkge1xuICAgICAgaWYgKCF0aGlzLnJlYWR5W25hbWVdKSB7XG4gICAgICAgIHRoaXMucmVhZHkgPSBtZXJnZSh0aGlzLnJlYWR5LCBrdihuYW1lLCB0cnVlKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuIiwiaW1wb3J0IHsgcmVhZHkgfSBmcm9tIFwiLi9yZWFkeVwiO1xuXG4vKipcbiAqIEEgcmVhZHktY2hlY2sgZm9yIGlmIGNvbXBvbmVudFxuICogaGFzIGJlZW4gbW91bnRlZCxcbiAqIHNvIGl0IGlzIHRydWUgdGhhdFxuICogYWxsIGN1cnJlbnQgY2hpbGRyZW4tbW9kaWZpZXIgY29tcG9uZW50c1xuICogbGlrZSBDbGRUcmFuc2Zvcm1hdGlvblxuICogaGFkIGJlZW4gaW5pdGlhbGl6ZWQgYWxyZWFkeVxuICovXG5leHBvcnQgY29uc3QgbW91bnRlZCA9IHtcbiAgbWl4aW5zOiBbcmVhZHldLFxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5hZGRSZWFkeUNoZWNrKFwibW91bnRlZFwiKTtcblxuICAgIC8qXG4gICAgICogaG9sZCBcInJlYWR5XCIgdW50aWwgbW91bnRlZCBvbmx5IGluIGNhc2Ugb2ZcbiAgICAgKiBwb3RlbnRpYWwgY2hpbGRyZW4tbW9kaWZpZXJzXG4gICAgICogbm90IGNyZWF0ZWQgeWV0XG4gICAgICogZWl0aGVyIGFzIGNoaWxkcmVuIG9mIHRoaXMgZWxlbWVudFxuICAgICAqIG9yIGNoaWxkcmVuIG9mIHBhcmVudCBjb250ZXh0XG4gICAgICovXG4gICAgaWYgKFxuICAgICAgIXRoaXMuQ2xkUGFyZW50U3RhdGUgJiZcbiAgICAgICghdGhpcy4kc2xvdHMgfHwgIXRoaXMuJHNsb3RzLmRlZmF1bHQgfHwgIXRoaXMuJHNsb3RzLmRlZmF1bHQubGVuZ3RoKVxuICAgICkge1xuICAgICAgdGhpcy5tYXJrUmVhZHlDaGVjayhcIm1vdW50ZWRcIik7XG4gICAgfVxuICB9LFxuXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5tYXJrUmVhZHlDaGVjayhcIm1vdW50ZWRcIik7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBTdGF0ZSB9IGZyb20gXCIuL1N0YXRlXCI7XG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gXCIuLi91dGlsc1wiO1xuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBJTGlzdGVuZXJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IG5leHRcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGVycm9yXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBjb21wbGV0ZVxuICovXG5cbi8qKlxuICogQSBjb21wbGV4IG9ic2VydmFibGUgc3RhdGUgZW50aXR5XG4gKiB3aGljaCBhbGxvd3Mgc3Bhd25pbmcgcGFydGlhbCBzdGF0ZSBjb250YWluZXJzXG4gKiB0aGF0IGNvbnRlbnRzIGFyZSB0aGVuIHJlYWN0aXZlbHkgY29tYmluZWRcbiAqIGluIGFuIG9yZGVyIG9mIGNyZWF0aW5nIHRob3NlIHNwYXduc1xuICpcbiAqIERvZXMgbm90IGNvbnRhaW4gbmV4dC9lcnJvci9jb21wbGV0ZSBtZXRob2RzXG4gKiBhcyB0aG9zZSBhcmUgaW4gcGFydGlhbCBzdGF0ZSBjb250YWluZXJzXG4gKiB3aGljaCBhcmUgdGhlIG9ubHkgc291cmNlIG9mIHRydXRoIC1cbiAqIHRoZSBjb21iaW5lZCBzdGF0ZSBpcyBvbmx5IGEgY29uY2x1c2lvblxuICogb3ZlciBwYXJ0aWFsIHN0YXRlcy5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbWJpbmVkU3RhdGUge1xuICAvKipcbiAgICogQ29uc3RydWN0b3IgKm1heSogYmUgcHJvdmlkZWQgd2l0aCBhIGZ1bmN0aW9uXG4gICAqIHRoYXQgd2lsbCBjb21iaW5lIGFsbCBwYXJ0aWFsIHN0YXRlcy5cbiAgICogT3RoZXJ3aXNlIGl0J2xsIGFzc3VtZSB0aGF0IGFsbCBwYXJ0aWFsIHN0YXRlcyBhcmUgb2JqZWN0XG4gICAqIGFuZCBjb21iaW5lIGl0IGJ5IG92ZXJyaWRpbmcgcHJvcGVydGllc1xuICAgKiBpbiByZXN1bHQgc3RhdGUgYnkgZXZlcnkgbmV4dCBwYXJ0aWFsIHN0YXRlIG9iamVjdFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb21wb3NpdGlvblxuICAgKi9cbiAgY29uc3RydWN0b3IoY29tcG9zaXRpb24pIHtcbiAgICB0aGlzLmNodW5rZWRTdGF0ZSA9IG5ldyBTdGF0ZShbXSk7XG4gICAgdGhpcy5zb2xpZFN0YXRlID0gbmV3IFN0YXRlKHt9KTtcbiAgICB0aGlzLmNodW5rZWRTdGF0ZS5zdWJzY3JpYmUoe1xuICAgICAgbmV4dDogdiA9PiB7XG4gICAgICAgIGNvbnN0IG5leHRTdW0gPSAoY29tcG9zaXRpb24gfHwgbWVyZ2UpKC4uLih2IHx8IFtdKSk7XG4gICAgICAgIHRoaXMuc29saWRTdGF0ZS5uZXh0KG5leHRTdW0pO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiBlID0+IHRoaXMuc29saWRTdGF0ZS5lcnJvcihlKSxcbiAgICAgIGNvbXBsZXRlOiAoKSA9PiB0aGlzLnNvbGlkU3RhdGUuY29tcGxldGUoKVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgbmV3IHBhcnRpYWwgc3RhdGVcbiAgICogYW5kIHJldHVybnMgU3RhdGUgY2xhc3MgdG8gcmVwcmVzZW50IGl0XG4gICAqIGFuZCB0byBhbGxvdyB0aGF0IHN0YXRlIHBhcnQgbW9kaWZpY2F0aW9uXG4gICAqL1xuICBzcGF3bigpIHtcbiAgICBsZXQgbGFzdCA9IHt9O1xuICAgIGxldCBkaWRTdGF0ZVB1c2hlZEVtcHR5ID0gZmFsc2U7XG4gICAgY29uc3QgbmV3U3Bhd24gPSBuZXcgU3RhdGUobGFzdCk7XG4gICAgbmV3U3Bhd24uc3Vic2NyaWJlKHtcbiAgICAgIG5leHQ6IHYgPT4ge1xuICAgICAgICBpZiAoIWRpZFN0YXRlUHVzaGVkRW1wdHkpIHtcbiAgICAgICAgICBkaWRTdGF0ZVB1c2hlZEVtcHR5ID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaHVua2VkU3RhdGUubmV4dChjdXJyZW50U3RhdGUgPT5cbiAgICAgICAgICBjdXJyZW50U3RhdGUuaW5kZXhPZihsYXN0KSA+PSAwXG4gICAgICAgICAgICA/IGN1cnJlbnRTdGF0ZS5tYXAoY2h1bmsgPT4gKGNodW5rID09PSBsYXN0ID8gdiA6IGNodW5rKSlcbiAgICAgICAgICAgIDogY3VycmVudFN0YXRlLmNvbmNhdChbdl0pXG4gICAgICAgICk7XG4gICAgICAgIGxhc3QgPSB2O1xuICAgICAgfSxcbiAgICAgIGVycm9yOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuY2h1bmtlZFN0YXRlLm5leHQocCA9PiBwLmZpbHRlcihjaHVuayA9PiBjaHVuayAhPT0gbGFzdCkpO1xuICAgICAgfSxcbiAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuY2h1bmtlZFN0YXRlLm5leHQocCA9PiBwLmZpbHRlcihjaHVuayA9PiBjaHVuayAhPT0gbGFzdCkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBuZXdTcGF3bjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgY3VycmVudCBjb21iaW5lZCBzdGF0ZVxuICAgKi9cbiAgZ2V0KCkge1xuICAgIHJldHVybiB0aGlzLnNvbGlkU3RhdGUuZ2V0KCk7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBsaXN0ZW5lclxuICAgKiBAcGFyYW0ge0lMaXN0ZW5lcn0gbGlzdGVuZXJcbiAgICogQHJldHVybnMge0Z1bmN0aW9ufVxuICAgKi9cbiAgc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgcmV0dXJuIHRoaXMuc29saWRTdGF0ZS5zdWJzY3JpYmUobGlzdGVuZXIpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBtZXJnZSwgbm9ybWFsaXplT2JqZWN0IH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5cbi8qKiBDb21iaW5lcyBtYW55IG9iamVjdHNcbiAqIHsgcHVibGljSWQsIGNvbmZpZ3VyYXRpb24sIHRyYW5zZm9ybWF0aW9uIH1cbiAqIHByb3ZpZGVkIGFzIGFyZ3VtZW50cyBpbnRvIG9uZVxuICogQHBhcmFtICB7Li4ueyBwdWJsaWNJZCwgY29uZmlndXJhdGlvbiwgdHJhbnNmb3JtYXRpb24gfX0gdHJhbnNmb3JtYXRpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lT3B0aW9ucyguLi5vcHRpb25zKSB7XG4gIGNvbnN0IHsgcHVibGljSWQgfSA9IG1lcmdlLmFwcGx5KHRoaXMsIG9wdGlvbnMpO1xuXG4gIGNvbnN0IGNvbmZpZ3VyYXRpb24gPSBub3JtYWxpemVPYmplY3QoXG4gICAgbWVyZ2UuYXBwbHkoXG4gICAgICB0aGlzLFxuICAgICAgb3B0aW9uc1xuICAgICAgICAuZmlsdGVyKGlzT2JqZWN0V2l0aEtleXMpXG4gICAgICAgIC5tYXAoXyA9PiBfLmNvbmZpZ3VyYXRpb24pXG4gICAgICAgIC5maWx0ZXIoaXNPYmplY3RXaXRoS2V5cylcbiAgICApXG4gICk7XG5cbiAgY29uc3QgdHJhbnNmb3JtYXRpb24gPSBub3JtYWxpemVPYmplY3QoXG4gICAgY29tYmluZVRyYW5zZm9ybWF0aW9ucy5hcHBseShcbiAgICAgIHRoaXMsXG4gICAgICBvcHRpb25zXG4gICAgICAgIC5maWx0ZXIoaXNPYmplY3RXaXRoS2V5cylcbiAgICAgICAgLm1hcChfID0+IF8udHJhbnNmb3JtYXRpb24pXG4gICAgICAgIC5maWx0ZXIoaXNPYmplY3RXaXRoS2V5cylcbiAgICApXG4gICk7XG5cbiAgcmV0dXJuIG5vcm1hbGl6ZU9iamVjdCh7XG4gICAgcHVibGljSWQsXG4gICAgY29uZmlndXJhdGlvbjogaXNPYmplY3RXaXRoS2V5cyhjb25maWd1cmF0aW9uKSA/IGNvbmZpZ3VyYXRpb24gOiB1bmRlZmluZWQsXG4gICAgdHJhbnNmb3JtYXRpb246IGlzT2JqZWN0V2l0aEtleXModHJhbnNmb3JtYXRpb24pXG4gICAgICA/IHRyYW5zZm9ybWF0aW9uXG4gICAgICA6IHVuZGVmaW5lZFxuICB9KTtcbn1cblxuLyoqXG4gKiBDb21iaW5lcyBtYW55IHRyYW5zZm9ybWF0aW9uc1xuICogcHJvdmlkZWQgYXMgYXJndW1lbnRzXG4gKiBpbnRvIG9uZVxuICogQHBhcmFtICB7Li4ub2JqZWN0fSB0cmFuc2Zvcm1hdGlvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVUcmFuc2Zvcm1hdGlvbnMoLi4udHJhbnNmb3JtYXRpb25zKSB7XG4gIHJldHVybiB0cmFuc2Zvcm1hdGlvbnMuZmlsdGVyKGlzT2JqZWN0V2l0aEtleXMpLnJlZHVjZSgocmVzdWx0LCBpdGVtKSA9PiB7XG4gICAgY29uc3QgdHJhbnNmb3JtYXRpb24gPSBbXVxuICAgICAgLmNvbmNhdChyZXN1bHQudHJhbnNmb3JtYXRpb24pXG4gICAgICAuY29uY2F0KGl0ZW0udHJhbnNmb3JtYXRpb24pXG4gICAgICAuZmlsdGVyKGlzT2JqZWN0V2l0aEtleXMpO1xuICAgIHJldHVybiBtZXJnZShcbiAgICAgIHJlc3VsdCxcbiAgICAgIGl0ZW0sXG4gICAgICB0cmFuc2Zvcm1hdGlvbi5sZW5ndGggPT09IDAgPyB7fSA6IHsgdHJhbnNmb3JtYXRpb24gfVxuICAgICk7XG4gIH0sIHt9KTtcbn1cblxuZnVuY3Rpb24gaXNPYmplY3RXaXRoS2V5cyhzdWJqZWN0KSB7XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHN1YmplY3QgPT09IFwib2JqZWN0XCIgJiYgc3ViamVjdCAmJiBPYmplY3Qua2V5cyhzdWJqZWN0KS5sZW5ndGggPiAwXG4gICk7XG59XG4iLCJpbXBvcnQgeyBDb21iaW5lZFN0YXRlIH0gZnJvbSBcIi4uL3JlYWN0aXZlL0NvbWJpbmVkU3RhdGVcIjtcbmltcG9ydCB7IGNvbWJpbmVPcHRpb25zIH0gZnJvbSBcIi4uL2hlbHBlcnMvY29tYmluZU9wdGlvbnNcIjtcbmltcG9ydCB7IHJlYWR5IH0gZnJvbSBcIi4vcmVhZHlcIjtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY29tcG9uZW50cyBvd24gQ29tYmluZWRTdGF0ZVxuICogYW5kIHBvc3RzIGl0cyBjaGFuZ2VzXG4gKiBpbnRvIGNvbXBvbmVudHMgZGF0YVxuICovXG5leHBvcnQgY29uc3QgY2xkQXR0cnMgPSB7XG4gIG1peGluczogW3JlYWR5XSxcblxuICBwcm92aWRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBDbGRQYXJlbnRTdGF0ZTogdGhpcy5jbGRBdHRyc1N0YXRlXG4gICAgfTtcbiAgfSxcblxuICBkYXRhKCkge1xuICAgIGNvbnN0IGNsZEF0dHJzU3RhdGUgPSBuZXcgQ29tYmluZWRTdGF0ZShjb21iaW5lT3B0aW9ucyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsZEF0dHJzU3RhdGUsXG4gICAgICBjbGRBdHRyczogY2xkQXR0cnNTdGF0ZS5nZXQoKVxuICAgIH07XG4gIH0sXG5cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLmFkZFJlYWR5Q2hlY2soXCJjbGRBdHRyc1wiKTtcbiAgICB0aGlzLmNsZEF0dHJzU3RhdGVTdWIgPSB0aGlzLmNsZEF0dHJzU3RhdGUuc3Vic2NyaWJlKHtcbiAgICAgIG5leHQ6IHYgPT4ge1xuICAgICAgICB0aGlzLmNsZEF0dHJzID0gdjtcbiAgICAgICAgdGhpcy5tYXJrUmVhZHlDaGVjayhcImNsZEF0dHJzXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIGRlc3Ryb3llZCgpIHtcbiAgICB0aGlzLmNsZEF0dHJzU3RhdGVTdWIoKTtcbiAgfVxufTtcbiIsImltcG9ydCB7IGVxdWFsIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5pbXBvcnQge1xuICBub3JtYWxpemVDb25maWd1cmF0aW9uLFxuICBub3JtYWxpemVUcmFuc2Zvcm1hdGlvblxufSBmcm9tIFwiLi4vaGVscGVycy9hdHRyaWJ1dGVzXCI7XG5pbXBvcnQgeyBjbGRBdHRycyB9IGZyb20gXCIuL2NsZEF0dHJzXCI7XG5pbXBvcnQgeyBjb21iaW5lT3B0aW9ucyB9IGZyb20gXCIuLi9oZWxwZXJzL2NvbWJpbmVPcHRpb25zXCI7XG5cbi8qKlxuICogSW4gb3JkZXIgdG8gbWFpbnRhaW4gbWVyZ2luZyBvcmRlclxuICogb2YgY29uZmlnK3RyYW5zZm9ybWF0aW9uIHNvdXJjZXMgKGNvbnRleHQrb3duK21vZGlmaWVycylcbiAqIGNyZWF0ZSBhIHN1Yi1TdGF0ZVxuICogb2YgY29tcG9uZW50cyBtYWluIENvbWJpbmVTdGF0ZSBpbnN0YW5jZVxuICogYW5kIHN1Ym1pdCBjb21wb25lbnRzIGNvbmZpZyt0cmFuc2Zvcm1hdGlvblxuICovXG5leHBvcnQgY29uc3QgY2xkQXR0cnNPd25lZCA9IHtcbiAgbWl4aW5zOiBbY2xkQXR0cnNdLFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgYXR0cmlidXRlcygpIHtcbiAgICAgIHJldHVybiB0aGlzLiRhdHRycztcbiAgICB9LFxuICAgIGNsZEF0dHJpYnV0ZXMoKSB7XG4gICAgICBjb25zdCBjb25maWd1cmF0aW9uID0gbm9ybWFsaXplQ29uZmlndXJhdGlvbih0aGlzLmF0dHJpYnV0ZXMpO1xuICAgICAgY29uc3QgdHJhbnNmb3JtYXRpb24gPSBub3JtYWxpemVUcmFuc2Zvcm1hdGlvbih0aGlzLmF0dHJpYnV0ZXMpO1xuICAgICAgcmV0dXJuIGNvbWJpbmVPcHRpb25zKHtcbiAgICAgICAgcHVibGljSWQ6IHRoaXMuYXR0cmlidXRlcy5wdWJsaWNJZCxcbiAgICAgICAgY29uZmlndXJhdGlvbixcbiAgICAgICAgdHJhbnNmb3JtYXRpb25cbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMubWFya1JlYWR5Q2hlY2soXCJjbGRBdHRyc093bmVkXCIpO1xuXG4gICAgdGhpcy5vd25TdGF0ZSA9IHRoaXMuY2xkQXR0cnNTdGF0ZS5zcGF3bigpO1xuICAgIHRoaXMub3duU3RhdGUubmV4dCh0aGlzLmNsZEF0dHJpYnV0ZXMpO1xuICB9LFxuXG4gIHVwZGF0ZWQoKSB7XG4gICAgY29uc3QgcHJldiA9IHRoaXMub3duU3RhdGUuZ2V0KCk7XG4gICAgY29uc3QgY3VycmVudCA9IHRoaXMuY2xkQXR0cmlidXRlcztcbiAgICBpZiAoIWVxdWFsKHByZXYsIGN1cnJlbnQpKSB7XG4gICAgICB0aGlzLm93blN0YXRlLm5leHQoY3VycmVudCk7XG4gICAgfVxuICB9LFxuXG4gIGRlc3Ryb3llZCgpIHtcbiAgICB0aGlzLm93blN0YXRlLmNvbXBsZXRlKCk7XG4gIH1cbn07XG4iLCIvKipcbiAqIEluamVjdHMgY2xvdWRpbmFyeSBwYXJlbnQgU3RhdGUgKHN0YXRlZnVsIHN0cmVhbSlcbiAqL1xuZXhwb3J0IGNvbnN0IGNsZENoaWxkID0ge1xuICBpbmplY3Q6IHtcbiAgICBDbGRQYXJlbnRTdGF0ZToge1xuICAgICAgZGVmYXVsdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuQ2xkR2xvYmFsQ29udGV4dFN0YXRlID8gdGhpcy5DbGRHbG9iYWxDb250ZXh0U3RhdGUgOiBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbiIsImltcG9ydCB7IGNsZEF0dHJzIH0gZnJvbSBcIi4vY2xkQXR0cnNcIjtcbmltcG9ydCB7IGNsZENoaWxkIH0gZnJvbSBcIi4vY2xkQ2hpbGRcIjtcblxuLyoqXG4gKiBUaWVzIGNsb3VkaW5hcnkgcGFyZW50IGVsZW1lbnQgc3RhdGVcbiAqIHdpdGggY29tcG9uZW50cyBvd25cbiAqL1xuZXhwb3J0IGNvbnN0IGNsZEF0dHJzSW5oZXJpdGVkID0ge1xuICBtaXhpbnM6IFtjbGRBdHRycywgY2xkQ2hpbGRdLFxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5hZGRSZWFkeUNoZWNrKFwiY2xkQXR0cnNPd25lZFwiKTtcblxuICAgIGlmICh0aGlzLkNsZFBhcmVudFN0YXRlKSB7XG4gICAgICB0aGlzLmNvbnRleHRTdGF0ZSA9IHRoaXMuY2xkQXR0cnNTdGF0ZS5zcGF3bigpO1xuICAgICAgdGhpcy5jb250ZXh0U3RhdGVTdWIgPSB0aGlzLkNsZFBhcmVudFN0YXRlLnN1YnNjcmliZSh7XG4gICAgICAgIG5leHQ6IHYgPT4ge1xuICAgICAgICAgIHRoaXMuY29udGV4dFN0YXRlLm5leHQodik7XG4gICAgICAgICAgdGhpcy5tYXJrUmVhZHlDaGVjayhcImNsZEF0dHJzT3duZWRcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1hcmtSZWFkeUNoZWNrKFwiY2xkQXR0cnNPd25lZFwiKTtcbiAgICB9XG4gIH0sXG5cbiAgZGVzdHJveWVkKCkge1xuICAgIGlmICh0aGlzLmNvbnRleHRTdGF0ZVN1Yikge1xuICAgICAgdGhpcy5jb250ZXh0U3RhdGVTdWIoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29udGV4dFN0YXRlKSB7XG4gICAgICB0aGlzLmNvbnRleHRTdGF0ZS5jb21wbGV0ZSgpO1xuICAgIH1cbiAgfVxufTtcbiIsImltcG9ydCB7IG5vcm1hbGl6ZVJlc3QgfSBmcm9tIFwiLi4vaGVscGVycy9hdHRyaWJ1dGVzXCI7XG5pbXBvcnQgeyBtb3VudGVkIH0gZnJvbSBcIi4uL21peGlucy9tb3VudGVkXCI7XG5pbXBvcnQgeyBjbGRBdHRyc093bmVkIH0gZnJvbSBcIi4uL21peGlucy9jbGRBdHRyc093bmVkXCI7XG5pbXBvcnQgeyBjbGRBdHRyc0luaGVyaXRlZCB9IGZyb20gXCIuLi9taXhpbnMvY2xkQXR0cnNJbmhlcml0ZWRcIjtcblxuLyoqXG4gKiBDbG91ZGluYXJ5IGNvbnRleHQgcHJvdmlkaW5nIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIkNsZENvbnRleHRcIixcbiAgcmVuZGVyKGgpIHtcbiAgICByZXR1cm4gaChcbiAgICAgIFwiZGl2XCIsXG4gICAgICB0aGlzLmh0bWxBdHRyaWJ1dGVzLFxuICAgICAgdGhpcy4kc2xvdHMgPyB0aGlzLiRzbG90cy5kZWZhdWx0IDogbnVsbFxuICAgICk7XG4gIH0sXG4gIGluaGVyaXRBdHRyczogZmFsc2UsXG4gIG1peGluczogW21vdW50ZWQsIGNsZEF0dHJzSW5oZXJpdGVkLCBjbGRBdHRyc093bmVkXSxcbiAgcHJvcHM6IHt9LFxuICBjb21wdXRlZDoge1xuICAgIGh0bWxBdHRyaWJ1dGVzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY2xhc3M6IFwiY2xkLWNvbnRleHRcIixcbiAgICAgICAgYXR0cnM6IG5vcm1hbGl6ZVJlc3QodGhpcy4kYXR0cnMpXG4gICAgICB9O1xuICAgIH1cbiAgfVxufTtcbiIsImltcG9ydCB7IGZpbmQgfSBmcm9tIFwiLi4vdXRpbHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRJblRyYW5zZm9ybWF0aW9ucyh0cmFuc2Zvcm1hdGlvbnMsIHByZWRpY2F0ZSkge1xuICBpZiAoIXRyYW5zZm9ybWF0aW9ucykge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIGZpbmQoXG4gICAgW10uY29uY2F0KHRyYW5zZm9ybWF0aW9ucykuY29uY2F0KHRyYW5zZm9ybWF0aW9ucy50cmFuc2Zvcm1hdGlvbiB8fCBbXSksXG4gICAgcHJlZGljYXRlXG4gICk7XG59XG4iLCIvKipcbiAqIE5vcm1hbGl6ZXMgYGJyZWFrcG9pbnRgIGNvbXBvbmVudCBhdHRyaWJ1dGUgdG8gYW4gYXJyYXkgb2YgbnVtYmVyc1xuICogQHBhcmFtIHtGdW5jdGlvbnxBcnJheXxTdHJpbmd9IHZhbHVlT3JHZXR0ZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV2YWxCcmVha3BvaW50cyh2YWx1ZU9yR2V0dGVyKSB7XG4gIGlmICh0eXBlb2YgdmFsdWVPckdldHRlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHZhbHVlT3JHZXR0ZXIoKTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlT3JHZXR0ZXIgPT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShcbiAgICAgICh2YWx1ZU9yR2V0dGVyLnNsaWNlKDAsIDEpID09PSBcIltcIiA/IFwiXCIgOiBcIltcIikgK1xuICAgICAgICB2YWx1ZU9yR2V0dGVyICtcbiAgICAgICAgKHZhbHVlT3JHZXR0ZXIuc2xpY2UoMCwgMSkgPT09IFwiXVwiID8gXCJcIiA6IFwiXVwiKVxuICAgICk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlT3JHZXR0ZXI7XG59XG4iLCIvKiogR2VuZXJhdGUgRFBSIHRyYW5zZm9ybWF0aW9uIGlmIERQUiBpbmZvcm1hdGlvbiBpcyBhdmFpbGFibGUgKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREUFJBdHRyKCkge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBcImRldmljZVBpeGVsUmF0aW9cIiBpbiB3aW5kb3dcbiAgICA/IHsgZHByOiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB9XG4gICAgOiB7fTtcbn1cbiIsIi8qKlxuICogRmluZHMgYSBudW1iZXIgaW4gYnJlYWtwb2ludHMgYXJyYXlcbiAqIHRoYXQgcHJvdmlkZWQgYSBzdWdnZXN0aW9uXG4gKiBxdWFsaWZpZXMgdGhlIG1vc3QgdG8gYmUgdXNlZCBhcyBhIHZhbHVlXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHN0b3BzXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRCcmVha3BvaW50KHN0b3BzLCB2YWx1ZSkge1xuICBpZiAoc3RvcHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHJldHVybiBzdG9wc1xuICAgIC5jb25jYXQoW10pXG4gICAgLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuICAgIC5maWx0ZXIoc3RvcCA9PiBzdG9wID49IHZhbHVlKVxuICAgIC5jb25jYXQoc3RvcHNbMF0pWzBdO1xufVxuIiwiaW1wb3J0IHsgbWVyZ2UgfSBmcm9tIFwiLi4vdXRpbHNcIjtcbmltcG9ydCB7IGdldERQUkF0dHIgfSBmcm9tIFwiLi9nZXREUFJBdHRyXCI7XG5pbXBvcnQgeyBmaW5kQnJlYWtwb2ludCB9IGZyb20gXCIuL2ZpbmRCcmVha3BvaW50XCI7XG4vKipcbiAqIEJhc2VkIGFuIHNlbGVjdGVkIG1vZGVcbiAqIGFuZCBicmVha3BvaW50cyByYW5nZVxuICogZ2VuZXJhdGVzIHNpemUgdHJhbnNmb3JtYXRpb25zXG4gKiBAcGFyYW0geydmaWxsJ3wnd2lkdGgnfCdoZWlnaHQnfCdub25lJ30gbW9kZVxuICogQHBhcmFtIHtvYmplY3R9IHNpemVcbiAqIEBwYXJhbSB7YXJyYXl9IGJyZWFrcG9pbnRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZXNpemVUcmFuc2Zvcm1hdGlvbihtb2RlLCBzaXplLCBicmVha3BvaW50cykge1xuICBzd2l0Y2ggKG1vZGUpIHtcbiAgICBjYXNlIFwiZmlsbFwiOlxuICAgICAgcmV0dXJuIG1lcmdlKGdldERQUkF0dHIoKSwge1xuICAgICAgICBjcm9wOiBcImNyb3BcIixcbiAgICAgICAgd2lkdGg6IHNpemVcbiAgICAgICAgICA/IE1hdGguZmxvb3IoXG4gICAgICAgICAgICAgIGJyZWFrcG9pbnRzID8gZmluZEJyZWFrcG9pbnQoYnJlYWtwb2ludHMsIHNpemUud2lkdGgpIDogc2l6ZS53aWR0aFxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogMCxcbiAgICAgICAgaGVpZ2h0OiBzaXplXG4gICAgICAgICAgPyBNYXRoLmZsb29yKFxuICAgICAgICAgICAgICBicmVha3BvaW50c1xuICAgICAgICAgICAgICAgID8gZmluZEJyZWFrcG9pbnQoYnJlYWtwb2ludHMsIHNpemUuaGVpZ2h0KVxuICAgICAgICAgICAgICAgIDogc2l6ZS5oZWlnaHRcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IDBcbiAgICAgIH0pO1xuXG4gICAgY2FzZSBcIndpZHRoXCI6XG4gICAgICByZXR1cm4gbWVyZ2UoZ2V0RFBSQXR0cigpLCB7XG4gICAgICAgIGNyb3A6IFwic2NhbGVcIixcbiAgICAgICAgd2lkdGg6IHNpemVcbiAgICAgICAgICA/IE1hdGguZmxvb3IoXG4gICAgICAgICAgICAgIGJyZWFrcG9pbnRzID8gZmluZEJyZWFrcG9pbnQoYnJlYWtwb2ludHMsIHNpemUud2lkdGgpIDogc2l6ZS53aWR0aFxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogMFxuICAgICAgfSk7XG5cbiAgICBjYXNlIFwiaGVpZ2h0XCI6XG4gICAgICByZXR1cm4gbWVyZ2UoZ2V0RFBSQXR0cigpLCB7XG4gICAgICAgIGNyb3A6IFwic2NhbGVcIixcbiAgICAgICAgaGVpZ2h0OiBzaXplXG4gICAgICAgICAgPyBNYXRoLmZsb29yKFxuICAgICAgICAgICAgICBicmVha3BvaW50c1xuICAgICAgICAgICAgICAgID8gZmluZEJyZWFrcG9pbnQoYnJlYWtwb2ludHMsIHNpemUuaGVpZ2h0KVxuICAgICAgICAgICAgICAgIDogc2l6ZS5oZWlnaHRcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IDBcbiAgICAgIH0pO1xuXG4gICAgY2FzZSBcIm5vbmVcIjpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiIsImltcG9ydCB7IENsb3VkaW5hcnkgfSBmcm9tIFwiY2xvdWRpbmFyeS1jb3JlXCI7XG5pbXBvcnQgeyBjb21iaW5lT3B0aW9ucyB9IGZyb20gXCIuL2NvbWJpbmVPcHRpb25zXCI7XG5cbi8qKiBHZXQgbWVkaWEgVVJMIHdpdGggc29tZSB0cmFuc2Zvcm1hdGlvbnNcbiAqIHRoYXQgd2lsbCBtYWtlIHRoZSBpbWFnZSBsaWdodGVyXG4gKiBzbyBpdCBjYW4gc2VydmUgYXMgYSBwbGFjZWhvbGRlclxuICogZm9yIGFuIGFjdHVhbCBpbWFnZVxuICpcbiAqIEBwYXJhbSB7J2xxaXAnfCdjb2xvcid8J3BpeGVsYXRlJ30gbW9kZSBIb3cgc2F2aW5ncyBzaG91bGQgYmUgbWFkZVxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQWxsIGN1cnJlbnRseSBnYXRoZXJlZCBvcHRpb25zIG9mIHRoZSByZXNvdXJjZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQbGFjZWhvbGRlclVSTChtb2RlLCBvcHRpb25zKSB7XG4gIGNvbnN0IHBsYWNlaG9sZGVyT3B0aW9ucyA9IGNvbWJpbmVPcHRpb25zKFxuICAgIHtcbiAgICAgIGxxaXA6IHtcbiAgICAgICAgdHJhbnNmb3JtYXRpb246IHtcbiAgICAgICAgICB0cmFuc2Zvcm1hdGlvbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB2YXJpYWJsZXM6IFtbXCIkbmhcIiwgXCJpaFwiXSwgW1wiJG53XCIsIFwiaXdcIl1dLFxuICAgICAgICAgICAgICBjcm9wOiBcInNjYWxlXCIsXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjIwXCIsXG4gICAgICAgICAgICAgIHF1YWxpdHk6IFwiYXV0b1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBjcm9wOiBcInNjYWxlXCIsIHdpZHRoOiBcIiRud1wiLCBoZWlnaHQ6IFwiJG5oXCIgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIHRyYW5zZm9ybWF0aW9uOiB7XG4gICAgICAgICAgdHJhbnNmb3JtYXRpb246IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdmFyaWFibGVzOiBbW1wiJG5oXCIsIFwiaWhcIl0sIFtcIiRud1wiLCBcIml3XCJdXSxcbiAgICAgICAgICAgICAgY3JvcDogXCJzY2FsZVwiLFxuICAgICAgICAgICAgICB3aWR0aDogXCIxXCIsXG4gICAgICAgICAgICAgIHF1YWxpdHk6IFwiMVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBjcm9wOiBcInNjYWxlXCIsIHdpZHRoOiBcIiRud1wiLCBoZWlnaHQ6IFwiJG5oXCIgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHBpeGVsYXRlOiB7XG4gICAgICAgIHRyYW5zZm9ybWF0aW9uOiB7XG4gICAgICAgICAgdHJhbnNmb3JtYXRpb246IFt7IGVmZmVjdDogXCJwaXhlbGF0ZToxMDBcIiB9XVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVttb2RlXSxcbiAgICBvcHRpb25zXG4gICk7XG5cbiAgcmV0dXJuIENsb3VkaW5hcnkubmV3KHBsYWNlaG9sZGVyT3B0aW9ucy5jb25maWd1cmF0aW9uKS51cmwoXG4gICAgcGxhY2Vob2xkZXJPcHRpb25zLnB1YmxpY0lkLFxuICAgIHBsYWNlaG9sZGVyT3B0aW9ucy50cmFuc2Zvcm1hdGlvblxuICApO1xufVxuIiwiaW1wb3J0IHsgcmVhZHkgfSBmcm9tIFwiLi9yZWFkeVwiO1xuaW1wb3J0IHsgZXF1YWwsIHBpY2ssIGRlYm91bmNlIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5cbi8qKlxuICogSWYgbmVjZXNzYXJ5IHBvc3RzIHJvb3QgZWxlbWVudFxuICogc2l6ZSBpbmZvcm1hdGlvblxuICogaW50byBjb21wb25lbnRzIGRhdGFcbiAqL1xuZXhwb3J0IGNvbnN0IHNpemUgPSB7XG4gIG1peGluczogW3JlYWR5XSxcblxuICBwcm9wczoge30sXG5cbiAgZGF0YSgpIHtcbiAgICByZXR1cm4geyBzaXplOiBudWxsIH07XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICAvKiBzaG91bGQgYmUgb3ZlcnJpZGVuICovXG4gICAgc2hvdWxkTWVhc3VyZVNpemUoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9LFxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5hZGRSZWFkeUNoZWNrKFwic2l6ZVwiKTtcbiAgICBmaXguY2FsbCh0aGlzKTtcbiAgfSxcblxuICB1cGRhdGVkKCkge1xuICAgIGZpeC5jYWxsKHRoaXMpO1xuICB9LFxuXG4gIG1vdW50ZWQoKSB7XG4gICAgZml4LmNhbGwodGhpcyk7XG4gIH0sXG5cbiAgZGVzdHJveWVkKCkge1xuICAgIGlmICh0aGlzLmNhbmNlbFNpemVMaXN0ZW5lcikge1xuICAgICAgdGhpcy5jYW5jZWxTaXplTGlzdGVuZXIoKTtcbiAgICB9XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGZpeCgpIHtcbiAgaWYgKHRoaXMuc2hvdWxkTWVhc3VyZVNpemUpIHtcbiAgICBpZiAodGhpcy4kZWwgJiYgIXRoaXMuY2FuY2VsU2l6ZUxpc3RlbmVyKSB7XG4gICAgICB0aGlzLmNhbmNlbFNpemVMaXN0ZW5lciA9IHdhdGNoRWxlbWVudFNpemUodGhpcy4kZWwsIG1lYXN1cmVtZW50ID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudFNpemUgPSBwaWNrKHRoaXMuc2l6ZSwgW1wid2lkdGhcIiwgXCJoZWlnaHRcIl0pO1xuICAgICAgICBjb25zdCBuZXh0U2l6ZSA9IHBpY2sobWVhc3VyZW1lbnQsIFtcIndpZHRoXCIsIFwiaGVpZ2h0XCJdKTtcbiAgICAgICAgaWYgKCFlcXVhbChjdXJyZW50U2l6ZSwgbmV4dFNpemUpKSB7XG4gICAgICAgICAgdGhpcy5zaXplID0gbmV4dFNpemU7XG4gICAgICAgICAgdGhpcy5tYXJrUmVhZHlDaGVjayhcInNpemVcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aGlzLm1hcmtSZWFkeUNoZWNrKFwic2l6ZVwiKTtcbiAgICBpZiAodGhpcy5jYW5jZWxTaXplTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuY2FuY2VsU2l6ZUxpc3RlbmVyKCk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ2FsbCBiYWNrIGEgcHJvdmlkZWQgZnVuY3Rpb25cbiAqIHdoZW5ldmVyIGVsZW1lbnQgY2hhbmdlZCBpdCdzIHNpemVcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3YXRjaEVsZW1lbnRTaXplKGVsZW1lbnQsIGNiKSB7XG4gIGNvbnN0IGRlbGF5ZWRDYWxsYmFjayA9IGRlYm91bmNlKGNiLCAxNTApO1xuICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIHtcbiAgICBpZiAoXCJSZXNpemVPYnNlcnZlclwiIGluIHdpbmRvdykge1xuICAgICAgY29uc3QgcmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZW50cmllcyA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBlbnRyeSA9IGVudHJpZXNbaV07IGkgPCBlbnRyaWVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgZGVsYXllZENhbGxiYWNrKHBpY2soZW50cnkuY29udGVudFJlY3QsIFtcIndpZHRoXCIsIFwiaGVpZ2h0XCJdKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgcmVzaXplT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlV2luZG93UmVzaXplID0gKCkgPT4ge1xuICAgICAgZGVsYXllZENhbGxiYWNrKFxuICAgICAgICBwaWNrKGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIFtcIndpZHRoXCIsIFwiaGVpZ2h0XCJdKVxuICAgICAgKTtcbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVdpbmRvd1Jlc2l6ZSk7XG4gICAgaGFuZGxlV2luZG93UmVzaXplKCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVdpbmRvd1Jlc2l6ZSk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gKCkgPT4ge307XG59XG4iLCJpbXBvcnQgeyByZWFkeSB9IGZyb20gXCIuL3JlYWR5XCI7XG5cbi8qKlxuICogSWYgbmVjZXNzYXJ5IHdhdGNoZXMgZm9yIHJvb3QgZWxlbWVudHMgdmlzaWJpbGl0eVxuICogYW5kIHBvc3RzIHRoZSByZXN1bHQgdG8gY29tcG9uZW50cyBkYXRhXG4gKi9cbmV4cG9ydCBjb25zdCBsYXp5ID0ge1xuICBtaXhpbnM6IFtyZWFkeV0sXG5cbiAgcHJvcHM6IHtcbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRvIG9ubHkgbG9hZCB0aGUgYXNzZXQgd2hlbiBpdCBuZWVkcyB0byBiZSBkaXNwbGF5ZWQgaW5zdGVhZCBvZiB3aGVuIHRoZSBwYWdlIGZpcnN0IGxvYWRzLlxuICAgICAqL1xuICAgIGxhenk6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH1cbiAgfSxcblxuICBkYXRhKCkge1xuICAgIHJldHVybiB7IHZpc2libGU6IGZhbHNlIH07XG4gIH0sXG5cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLm1hcmtSZWFkeUNoZWNrKFwibGF6eVwiKTtcbiAgICBmaXguY2FsbCh0aGlzKTtcbiAgfSxcblxuICBtb3VudGVkKCkge1xuICAgIGZpeC5jYWxsKHRoaXMpO1xuICB9LFxuXG4gIHVwZGF0ZWQoKSB7XG4gICAgZml4LmNhbGwodGhpcyk7XG4gIH0sXG5cbiAgZGVzdHJveWVkKCkge1xuICAgIGlmICh0aGlzLmNhbmNlbFZpc2liaWxpdHlMaXN0ZW5lcikge1xuICAgICAgdGhpcy5jYW5jZWxWaXNpYmlsaXR5TGlzdGVuZXIoKTtcbiAgICB9XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGZpeCgpIHtcbiAgaWYgKHRoaXMubGF6eSkge1xuICAgIGlmICh0aGlzLiRlbCAmJiAhdGhpcy5jYW5jZWxWaXNpYmlsaXR5TGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuY2FuY2VsVmlzaWJpbGl0eUxpc3RlbmVyID0gd2F0Y2hFbGVtZW50VmlzaWJpbGl0eShcbiAgICAgICAgdGhpcy4kZWwsXG4gICAgICAgIHZpc2libGUgPT4ge1xuICAgICAgICAgIHRoaXMudmlzaWJsZSA9IHRoaXMudmlzaWJsZSB8fCB2aXNpYmxlO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgIGlmICh0aGlzLmNhbmNlbFZpc2liaWxpdHlMaXN0ZW5lcikge1xuICAgICAgY29uc3QgeyBjYW5jZWxWaXNpYmlsaXR5TGlzdGVuZXIgfSA9IHRoaXM7XG4gICAgICB0aGlzLmNhbmNlbFZpc2liaWxpdHlMaXN0ZW5lciA9IG51bGw7XG4gICAgICBjYW5jZWxWaXNpYmlsaXR5TGlzdGVuZXIoKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gd2F0Y2hFbGVtZW50VmlzaWJpbGl0eShlbGVtZW50LCBsaXN0ZW5lcikge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIiAmJiBcIkludGVyc2VjdGlvbk9ic2VydmVyXCIgaW4gd2luZG93KSB7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgICBlbnRyaWVzID0+IHtcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICBpZiAoZW50cnkudGFyZ2V0ID09PSBlbGVtZW50KSB7XG4gICAgICAgICAgICBsaXN0ZW5lcihlbnRyeS5pc0ludGVyc2VjdGluZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICB7IHRocmVzaG9sZDogWzAsIDAuMDFdIH1cbiAgICApO1xuICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9O1xuICB9XG5cbiAgbGlzdGVuZXIodHJ1ZSk7XG4gIHJldHVybiBub29wO1xufVxuXG5mdW5jdGlvbiBub29wKCkge31cbiIsImltcG9ydCB7IENsb3VkaW5hcnksIFRyYW5zZm9ybWF0aW9uIH0gZnJvbSBcImNsb3VkaW5hcnktY29yZVwiO1xuaW1wb3J0IHsgbWVyZ2UsIHJhbmdlIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5pbXBvcnQgeyBmaW5kSW5UcmFuc2Zvcm1hdGlvbnMgfSBmcm9tIFwiLi4vaGVscGVycy9maW5kSW5UcmFuc2Zvcm1hdGlvbnNcIjtcbmltcG9ydCB7IG5vcm1hbGl6ZVJlc3QgfSBmcm9tIFwiLi4vaGVscGVycy9hdHRyaWJ1dGVzXCI7XG5pbXBvcnQgeyBldmFsQnJlYWtwb2ludHMgfSBmcm9tIFwiLi4vaGVscGVycy9ldmFsQnJlYWtwb2ludHNcIjtcbmltcG9ydCB7IGdldFJlc2l6ZVRyYW5zZm9ybWF0aW9uIH0gZnJvbSBcIi4uL2hlbHBlcnMvZ2V0UmVzaXplVHJhbnNmb3JtYXRpb25cIjtcbmltcG9ydCB7IGdldFBsYWNlaG9sZGVyVVJMIH0gZnJvbSBcIi4uL2hlbHBlcnMvZ2V0UGxhY2Vob2xkZXJVUkxcIjtcbmltcG9ydCB7IGNvbWJpbmVPcHRpb25zIH0gZnJvbSBcIi4uL2hlbHBlcnMvY29tYmluZU9wdGlvbnNcIjtcblxuaW1wb3J0IHsgcmVhZHkgfSBmcm9tIFwiLi4vbWl4aW5zL3JlYWR5XCI7XG5pbXBvcnQgeyBzaXplIH0gZnJvbSBcIi4uL21peGlucy9zaXplXCI7XG5pbXBvcnQgeyBtb3VudGVkIH0gZnJvbSBcIi4uL21peGlucy9tb3VudGVkXCI7XG5pbXBvcnQgeyBjbGRBdHRyc0luaGVyaXRlZCB9IGZyb20gXCIuLi9taXhpbnMvY2xkQXR0cnNJbmhlcml0ZWRcIjtcbmltcG9ydCB7IGNsZEF0dHJzT3duZWQgfSBmcm9tIFwiLi4vbWl4aW5zL2NsZEF0dHJzT3duZWRcIjtcbmltcG9ydCB7IGxhenkgfSBmcm9tIFwiLi4vbWl4aW5zL2xhenlcIjtcblxuLyoqXG4gKiBEZWxpdmVyIGltYWdlcyBhbmQgc3BlY2lmeSBpbWFnZSB0cmFuc2Zvcm1hdGlvbnMgdXNpbmcgdGhlIGNsZC1pbWFnZSAoQ2xkSW1hZ2UpIGNvbXBvbmVudCxcbiAqIHdoaWNoIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVzIGFuIGA8aW1nPmAgdGFnIGluY2x1ZGluZyB0aGUgZHluYW1pYyBVUkwgb2YgdGhlIGltYWdlIHNvdXJjZS5cbiAqXG4gKlxuICogWW91IGNhbiBvcHRpb25hbGx5IGluY2x1ZGUgW2NsZC10cmFuc2Zvcm1hdGlvbl0oI2NsZHRyYW5zZm9ybWF0aW9uKSBjb21wb25lbnRzIHRvIGRlZmluZSB0cmFuc2Zvcm1hdGlvbnMgdG8gYXBwbHkgdG8gdGhlIGRlbGl2ZXJlZCBpbWFnZS5cbiAqXG4gKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiBzZWUgdGhlXG4gKiBbY2xkLWltYWdlIGNvbXBvbmVudF0oaHR0cHM6Ly9jbG91ZGluYXJ5LmNvbS9kb2N1bWVudGF0aW9uL3Z1ZV9pbWFnZV9tYW5pcHVsYXRpb24jY2xkdmlkZW9fY29tcG9uZW50KVxuICogYW5kXG4gKiBbZW1iZWRkaW5nIGltYWdlcyBpbiB3ZWIgcGFnZXNdKGh0dHBzOi8vY2xvdWRpbmFyeS5jb20vZG9jdW1lbnRhdGlvbi9pbWFnZV90cmFuc2Zvcm1hdGlvbnMjZW1iZWRkaW5nX2ltYWdlc19pbl93ZWJfcGFnZXMpXG4gKiBkb2N1bWVudGF0aW9uLlxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiQ2xkSW1hZ2VcIixcbiAgaW5oZXJpdEF0dHJzOiBmYWxzZSxcbiAgbWl4aW5zOiBbcmVhZHksIHNpemUsIG1vdW50ZWQsIGxhenksIGNsZEF0dHJzSW5oZXJpdGVkLCBjbGRBdHRyc093bmVkXSxcbiAgcmVuZGVyKGgpIHtcbiAgICByZXR1cm4gaChcImltZ1wiLCB0aGlzLmltYWdlQXR0cnMsIHRoaXMuJHNsb3RzID8gdGhpcy4kc2xvdHMuZGVmYXVsdCA6IG51bGwpO1xuICB9LFxuICBwcm9wczoge1xuICAgIC8qKlxuICAgICAqIFRoZSB1bmlxdWUgaWRlbnRpZmllciBvZiBhbiB1cGxvYWRlZCBpbWFnZS5cbiAgICAgKi9cbiAgICBwdWJsaWNJZDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFwiXCIsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgLyoqXG4gICAgICogV2hldGhlciB0byBnZW5lcmF0ZSBhIEpQRUcgdXNpbmcgdGhlIFtwcm9ncmVzc2l2ZSAoaW50ZXJsYWNlZCkgSlBFR1xuICAgICAqIGZvcm1hdF0oaHR0cHM6Ly9jbG91ZGluYXJ5LmNvbS9kb2N1bWVudGF0aW9uL3RyYW5zZm9ybWF0aW9uX2ZsYWdzI2RlbGl2ZXJ5X2FuZF9pbWFnZV9mb3JtYXRfZmxhZ3MpLlxuICAgICAqL1xuICAgIHByb2dyZXNzaXZlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFRoZSBwbGFjZWhvbGRlciBpbWFnZSB0byB1c2Ugd2hpbGUgdGhlIGltYWdlIGlzIGxvYWRpbmcuIFBvc3NpYmxlIHZhbHVlczpcbiAgICAgKlxuICAgICAqIC0gYFwibHFpcFwiYCB0byB1c2UgYSBsb3cgcXVhbGl0eSBpbWFnZVxuICAgICAqIC0gYFwiY29sb3JcImAgdG8gdXNlIGFuIGF2ZXJhZ2UgY29sb3IgaW1hZ2VcbiAgICAgKiAtIGBcInBpeGVsYXRlXCJgIHRvIHVzZSBhIHBpeGVsYXRlZCBpbWFnZVxuICAgICAqL1xuICAgIHBsYWNlaG9sZGVyOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBcIlwiXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBIb3cgdG8gbWFrZSB0aGUgaW1hZ2UgcmVzcG9uc2l2ZSB0byB0aGUgYXZhaWxhYmxlIHNpemUgYmFzZWQgb24gbGF5b3V0LiBQb3NzaWJsZSB2YWx1ZXM6XG4gICAgICpcbiAgICAgKiAtIGB3aWR0aGAgdXNlcyB0aGUgYXZhaWxhYmxlIGltYWdlICp3aWR0aCogYW5kIGFsbG93cyBpbWFnZSAqaGVpZ2h0KiB0byBiZSBzZXQgZHluYW1pY2FsbHlcbiAgICAgKiAtIGBoZWlnaHRgIHVzZXMgdGhlIGF2YWlsYWJsZSBpbWFnZSAqaGVpZ2h0KiBhbmQgYWxsb3dzIGltYWdlICp3aWR0aCogdG8gYmUgc2V0IGR5bmFtaWNhbGx5XG4gICAgICogLSBgZmlsbGAgdXNlcyB0aGUgYXZhaWxhYmxlIGltYWdlICp3aWR0aCogYW5kICpoZWlnaHQqXG4gICAgICovXG4gICAgcmVzcG9uc2l2ZTogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFwibm9uZVwiIH0sXG4gICAgLyoqXG4gICAgICogVGhlIHNldCBvZiBwb3NzaWJsZSBicmVha3BvaW50IHZhbHVlcyB0byBiZSB1c2VkIHRvZ2V0aGVyIHdpdGggdGhlIHJlc3BvbnNpdmUgcHJvcGVydHkuIEVpdGhlcjpcbiAgICAgKlxuICAgICAqIC0gYW4gYXJyYXkgb2YgbnVtYmVyc1xuICAgICAqIC0gYSBjb21tYSBzZXBhcmF0ZWQgbGlzdCBvZiBudW1iZXJzIGFzIGEgc2luZ2xlIHN0cmluZ1xuICAgICAqIC0gYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gYXJyYXkgb2YgbnVtYmVyc1xuICAgICAqL1xuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICB0eXBlOiBbQXJyYXksIEZ1bmN0aW9uLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogKCkgPT4gcmFuZ2UoMTAwLCA0MDAwLCAxMDApXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGF0dHJpYnV0ZXMoKSB7XG4gICAgICByZXR1cm4gbWVyZ2UoXG4gICAgICAgIHRoaXMuJGF0dHJzLFxuICAgICAgICB0aGlzLnByb2dyZXNzaXZlXG4gICAgICAgICAgPyB7XG4gICAgICAgICAgICAgIGZsYWdzOiBbXVxuICAgICAgICAgICAgICAgIC5jb25jYXQodGhpcy4kYXR0cnMuZmxhZ3MgPyB0aGlzLiRhdHRycy5mbGFncyA6IFtdKVxuICAgICAgICAgICAgICAgIC5jb25jYXQoXCJwcm9ncmVzc2l2ZVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDoge30sXG4gICAgICAgIHRoaXMucmVzcG9uc2l2ZSAhPT0gXCJub25lXCIgJiYgdGhpcy5zaXplXG4gICAgICAgICAgPyB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybWF0aW9uOiBbXVxuICAgICAgICAgICAgICAgIC5jb25jYXQodGhpcy4kYXR0cnMudHJhbnNmb3JtYXRpb24gfHwgW10pXG4gICAgICAgICAgICAgICAgLmNvbmNhdChcbiAgICAgICAgICAgICAgICAgIGdldFJlc2l6ZVRyYW5zZm9ybWF0aW9uKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNpdmUsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgZXZhbEJyZWFrcG9pbnRzKHRoaXMuYnJlYWtwb2ludHMpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDoge31cbiAgICAgICk7XG4gICAgfSxcbiAgICBzaG91bGRNZWFzdXJlU2l6ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlc3BvbnNpdmUgIT09IFwibm9uZVwiO1xuICAgIH0sXG4gICAgaW1hZ2VBdHRycygpIHtcbiAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IHtcbiAgICAgICAgXCJjbGQtaW1hZ2VcIjogdHJ1ZSxcbiAgICAgICAgXCJjbGQtaW1hZ2UtLWZpbGxcIjogdGhpcy5yZXNwb25zaXZlID09PSBcImZpbGxcIixcbiAgICAgICAgXCJjbGQtaW1hZ2UtLWZpbGwtd2lkdGhcIjogdGhpcy5yZXNwb25zaXZlID09PSBcIndpZHRoXCIsXG4gICAgICAgIFwiY2xkLWltYWdlLS1maWxsLWhlaWdodFwiOiB0aGlzLnJlc3BvbnNpdmUgPT09IFwiaGVpZ2h0XCJcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHN0eWxlID1cbiAgICAgICAge1xuICAgICAgICAgIGhlaWdodDoge1xuICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgIHdpZHRoOiBcImF1dG9cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgd2lkdGg6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVt0aGlzLnJlc3BvbnNpdmVdIHx8IHt9O1xuXG4gICAgICBpZiAoXG4gICAgICAgICF0aGlzLmlzUmVhZHkgfHxcbiAgICAgICAgIXRoaXMucHVibGljSWQgfHxcbiAgICAgICAgISFmaW5kSW5UcmFuc2Zvcm1hdGlvbnMoXG4gICAgICAgICAgdGhpcy5jbGRBdHRycy50cmFuc2Zvcm1hdGlvbixcbiAgICAgICAgICB0ID0+IHQud2lkdGggPT09IDAgfHwgdC5oZWlnaHQgPT09IDBcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY2xhc3M6IGNsYXNzTmFtZSxcbiAgICAgICAgICBzdHlsZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5sYXp5ICYmICF0aGlzLnZpc2libGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjbGFzczogY2xhc3NOYW1lLFxuICAgICAgICAgIHN0eWxlLFxuICAgICAgICAgIGF0dHJzOiB0aGlzLnBsYWNlaG9sZGVyXG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgICBnZXRQbGFjZWhvbGRlclVSTChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZWhvbGRlcixcbiAgICAgICAgICAgICAgICAgICAgY29tYmluZU9wdGlvbnMoeyBwdWJsaWNJZDogdGhpcy5wdWJsaWNJZCB9LCB0aGlzLmNsZEF0dHJzKVxuICAgICAgICAgICAgICAgICAgKSB8fCB0aGlzLnBsYWNlaG9sZGVyXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDoge31cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaHRtbEF0dHJzID0gVHJhbnNmb3JtYXRpb24ubmV3KFxuICAgICAgICB0aGlzLmNsZEF0dHJzLnRyYW5zZm9ybWF0aW9uXG4gICAgICApLnRvSHRtbEF0dHJpYnV0ZXMoKTtcbiAgICAgIGNvbnN0IHNyYyA9IENsb3VkaW5hcnkubmV3KHRoaXMuY2xkQXR0cnMuY29uZmlndXJhdGlvbikudXJsKFxuICAgICAgICB0aGlzLnB1YmxpY0lkLFxuICAgICAgICB0aGlzLmNsZEF0dHJzXG4gICAgICApO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY2xhc3M6IGNsYXNzTmFtZSxcbiAgICAgICAgc3R5bGUsXG4gICAgICAgIGF0dHJzOiBtZXJnZShcbiAgICAgICAgICBub3JtYWxpemVSZXN0KHRoaXMuJGF0dHJzKSxcbiAgICAgICAgICBodG1sQXR0cnMsXG4gICAgICAgICAgc3JjXG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICBzcmNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiB7fVxuICAgICAgICApXG4gICAgICB9O1xuICAgIH1cbiAgfVxufTtcbiIsImltcG9ydCB7IGNsZEF0dHJzIH0gZnJvbSBcIi4vY2xkQXR0cnNcIjtcbmltcG9ydCB7IGNsZENoaWxkIH0gZnJvbSBcIi4vY2xkQ2hpbGRcIjtcblxuLyoqXG4gKiBNb2RpZnkgY2xvdWRpbmFyeSBwYXJlbnQgQ29tYmluZWRTdGF0ZVxuICogd2l0aCBpdHMgb3duIGNvbmZpZyt0cmFuc2Zvcm1hdGlvbnNcbiAqIHRocm91Z2ggZGVkaWNhdGVkIFN0YXRlIGluc3RhbmNlXG4gKi9cbmV4cG9ydCBjb25zdCBjbGRBdHRyc1N1Ym1pdHRpbmcgPSB7XG4gIG1peGluczogW2NsZEF0dHJzLCBjbGRDaGlsZF0sXG5cbiAgY3JlYXRlZCgpIHtcbiAgICBpZiAoIXRoaXMuQ2xkUGFyZW50U3RhdGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJUaGlzIGNvbXBvbmVudCBoYXMgdG8gaGF2ZSBhIENsb3VkaW5hcnkgcGFyZW50IHRoYXQgY2FuIHJlY2VpdmUgaXQncyBhdHRyaWJ1dGVzXCJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGhpcy5hZGRSZWFkeUNoZWNrKFwiY2xkQXR0cnNTdWJtaXR0aW5nXCIpO1xuXG4gICAgdGhpcy5zdWJtaXR0ZXIgPSB0aGlzLkNsZFBhcmVudFN0YXRlLnNwYXduKCk7XG4gICAgdGhpcy5zdWJtaXR0ZXJTdWIgPSB0aGlzLmNsZEF0dHJzU3RhdGUuc3Vic2NyaWJlKHtcbiAgICAgIG5leHQ6IHYgPT4ge1xuICAgICAgICB0aGlzLnN1Ym1pdHRlci5uZXh0KHYpO1xuICAgICAgICB0aGlzLm1hcmtSZWFkeUNoZWNrKFwiY2xkQXR0cnNTdWJtaXR0aW5nXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIGRlc3Ryb3llZCgpIHtcbiAgICBpZiAodGhpcy5zdWJtaXR0ZXJTdWIpIHtcbiAgICAgIHRoaXMuc3VibWl0dGVyU3ViKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnN1Ym1pdHRlcikge1xuICAgICAgdGhpcy5zdWJtaXR0ZXIuY29tcGxldGUoKTtcbiAgICB9XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBub3JtYWxpemVPYmplY3QsIG1lcmdlIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5pbXBvcnQgeyBjbGRBdHRyc1N1Ym1pdHRpbmcgfSBmcm9tIFwiLi4vbWl4aW5zL2NsZEF0dHJzU3VibWl0dGluZ1wiO1xuaW1wb3J0IHsgY2xkQXR0cnNPd25lZCB9IGZyb20gXCIuLi9taXhpbnMvY2xkQXR0cnNPd25lZFwiO1xuXG4vKipcbiAqIFRoZSBpbWFnZSB0byBiZSBzaG93biB3aGlsZSBhIHZpZGVvIGlzIGRvd25sb2FkaW5nIG9yIHVudGlsIHRoZSB1c2VyIGhpdHMgdGhlIHBsYXkgYnV0dG9uLlxuICogVGhpcyBjb21wb25lbnQgbXVzdCBiZSBhZGRlZCBhcyBhIGNoaWxkIG9mIHRoZSBbQ2xkVmlkZW9dKCNjbGR2aWRlbykgY29tcG9uZW50LlxuICpcbiAqIElmIHRoaXMgY29tcG9uZW50IGlzIG5vdCBnaXZlbiB0aGVuIHRoZSBwb3N0ZXIgaW1hZ2UgZGVmYXVsdHMgdG8gdGhlIG1pZGRsZSBmcmFtZSBvZiB0aGUgc291cmNlIHZpZGVvIGluIGpwZyBmb3JtYXQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJDbGRQb3N0ZXJcIixcbiAgcmVuZGVyKGgpIHtcbiAgICBpZiAoIXRoaXMuJHNsb3RzIHx8ICF0aGlzLiRzbG90cy5kZWZhdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGgoXCJzcGFuXCIsIHsgY2xhc3M6IFwiY2xkLXBvc3RlclwiIH0sIHRoaXMuJHNsb3RzLmRlZmF1bHQpO1xuICB9LFxuICBpbmhlcml0QXR0cnM6IGZhbHNlLFxuICBtaXhpbnM6IFtjbGRBdHRyc093bmVkLCBjbGRBdHRyc1N1Ym1pdHRpbmddLFxuICBwcm9wczoge1xuICAgIC8qKlxuICAgICAqIFRoZSB1bmlxdWUgaWRlbnRpZmllciBvZiBhbiB1cGxvYWRlZCBpbWFnZS5cbiAgICAgKi9cbiAgICBwdWJsaWNJZDogeyB0eXBlOiBTdHJpbmcgfVxuICB9LFxuICBpbmplY3Q6IHtcbiAgICBDbGRQYXJlbnRTdGF0ZTogeyBmcm9tOiBcIkNsZFBvc3RlclN0YXRlXCIgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGF0dHJpYnV0ZXMoKSB7XG4gICAgICByZXR1cm4gbm9ybWFsaXplT2JqZWN0KFxuICAgICAgICBtZXJnZShcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwdWJsaWNJZDogdGhpcy5wdWJsaWNJZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGhpcy4kYXR0cnNcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBjbGRBdHRyc093bmVkIH0gZnJvbSBcIi4uL21peGlucy9jbGRBdHRyc093bmVkXCI7XG5pbXBvcnQgeyBjbGRBdHRyc1N1Ym1pdHRpbmcgfSBmcm9tIFwiLi4vbWl4aW5zL2NsZEF0dHJzU3VibWl0dGluZ1wiO1xuXG4vKipcbiAqIE9uZSBvciBtb3JlIFt0cmFuc2Zvcm1hdGlvbiBwYXJhbWV0ZXJzXShodHRwczovL2Nsb3VkaW5hcnkuY29tL2RvY3VtZW50YXRpb24vaW1hZ2VfdHJhbnNmb3JtYXRpb25fcmVmZXJlbmNlKVxuICogaW4gYSBzaW5nbGUgY29tcG9uZW50LCBvciBhIHNldCBvZiBbY2hhaW5lZCB0cmFuc2Zvcm1hdGlvbnNdKGh0dHBzOi8vY2xvdWRpbmFyeS5jb20vZG9jdW1lbnRhdGlvbi9pbWFnZV90cmFuc2Zvcm1hdGlvbnMjY2hhaW5lZF90cmFuc2Zvcm1hdGlvbnMpIGluIG11bHRpcGxlIGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJDbGRUcmFuc2Zvcm1hdGlvblwiLFxuICByZW5kZXIoaCkge1xuICAgIGlmICghdGhpcy4kc2xvdHMgfHwgIXRoaXMuJHNsb3RzLmRlZmF1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gaChcInNwYW5cIiwgeyBjbGFzczogXCJjbGQtdHJhbnNmb3JtYXRpb25cIiB9LCB0aGlzLiRzbG90cy5kZWZhdWx0KTtcbiAgfSxcbiAgaW5oZXJpdEF0dHJzOiBmYWxzZSxcbiAgbWl4aW5zOiBbY2xkQXR0cnNPd25lZCwgY2xkQXR0cnNTdWJtaXR0aW5nXSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBhdHRyaWJ1dGVzKCkge1xuICAgICAgcmV0dXJuIHsgdHJhbnNmb3JtYXRpb246IHRoaXMuJGF0dHJzIH07XG4gICAgfVxuICB9XG59O1xuIiwiaW1wb3J0IHsgQ2xvdWRpbmFyeSwgVHJhbnNmb3JtYXRpb24gfSBmcm9tIFwiY2xvdWRpbmFyeS1jb3JlXCI7XG5pbXBvcnQgeyBtZXJnZSwga3YsIGZpbmQgfSBmcm9tIFwiLi4vdXRpbHNcIjtcbmltcG9ydCB7IGZpbmRJblRyYW5zZm9ybWF0aW9ucyB9IGZyb20gXCIuLi9oZWxwZXJzL2ZpbmRJblRyYW5zZm9ybWF0aW9uc1wiO1xuaW1wb3J0IHsgQ29tYmluZWRTdGF0ZSB9IGZyb20gXCIuLi9yZWFjdGl2ZS9Db21iaW5lZFN0YXRlXCI7XG5pbXBvcnQge1xuICBub3JtYWxpemVUcmFuc2Zvcm1hdGlvbixcbiAgbm9ybWFsaXplQ29uZmlndXJhdGlvbixcbiAgbm9ybWFsaXplUmVzdFxufSBmcm9tIFwiLi4vaGVscGVycy9hdHRyaWJ1dGVzXCI7XG5pbXBvcnQge1xuICBjb21iaW5lT3B0aW9ucyxcbiAgY29tYmluZVRyYW5zZm9ybWF0aW9uc1xufSBmcm9tIFwiLi4vaGVscGVycy9jb21iaW5lT3B0aW9uc1wiO1xuXG5pbXBvcnQgeyByZWFkeSB9IGZyb20gXCIuLi9taXhpbnMvcmVhZHlcIjtcbmltcG9ydCB7IG1vdW50ZWQgfSBmcm9tIFwiLi4vbWl4aW5zL21vdW50ZWRcIjtcbmltcG9ydCB7IGxhenkgfSBmcm9tIFwiLi4vbWl4aW5zL2xhenlcIjtcbmltcG9ydCB7IGNsZEF0dHJzSW5oZXJpdGVkIH0gZnJvbSBcIi4uL21peGlucy9jbGRBdHRyc0luaGVyaXRlZFwiO1xuaW1wb3J0IHsgY2xkQXR0cnNPd25lZCB9IGZyb20gXCIuLi9taXhpbnMvY2xkQXR0cnNPd25lZFwiO1xuXG4vKipcbiAqIERlbGl2ZXIgdmlkZW9zIGFuZCBzcGVjaWZ5IHZpZGVvIHRyYW5zZm9ybWF0aW9ucyB1c2luZyB0aGUgYGNsZC12aWRlb2AgKENsZFZpZGVvKSBlbGVtZW50LFxuICogd2hpY2ggYXV0b21hdGljYWxseSBnZW5lcmF0ZXMgYW4gSFRNTDUgdmlkZW8gdGFnIGluY2x1ZGluZyB0aGUgVVJMIHNvdXJjZXMgZm9yIHRoZSBtYWluIGZvcm1hdHNcbiAqIHN1cHBvcnRlZCBieSB3ZWIgYnJvd3NlcnMgKHdlYm0sIG1wNCBhbmQgb2d2IGJ5IGRlZmF1bHQpLCBhcyB3ZWxsIGFzIGEgcG9zdGVyIHRodW1ibmFpbCBpbWFnZSxcbiAqIHdoaWNoIGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGZyb20gYSBmcmFtZSBpbiB0aGUgdmlkZW8uXG4gKiBCcm93c2VycyBjYW4gYXV0b21hdGljYWxseSBzZWxlY3QgYW5kIHBsYXkgdGhlIHZpZGVvIGZvcm1hdCB0aGF0IHRoZXkgYmVzdCBzdXBwb3J0LFxuICogYW5kIHRoZSB2aWRlbyBmaWxlcyBhcmUgY3JlYXRlZCBkeW5hbWljYWxseSB3aGVuIGZpcnN0IGFjY2Vzc2VkIGJ5IHlvdXIgdXNlcnMuXG4gKlxuICogWW91IGNhbiBvcHRpb25hbGx5IGluY2x1ZGUgYGNsZC10cmFuc2Zvcm1hdGlvbmAgY29tcG9uZW50cyB0byBkZWZpbmUgdHJhbnNmb3JtYXRpb25zIHRvIGFwcGx5IHRvIHRoZSBkZWxpdmVyZWQgdmlkZW8uXG4gKlxuICogRm9yIG1vcmUgaW5mb3JtYXRpb24gc2VlXG4gKiBbY2xkLXZpZGVvIGNvbXBvbmVudF0oaHR0cHM6Ly9jbG91ZGluYXJ5LmNvbS9kb2N1bWVudGF0aW9uL3Z1ZV92aWRlb19tYW5pcHVsYXRpb24jY2xkdmlkZW9fY29tcG9uZW50KVxuICogYW5kXG4gKiBbZW1iZWRkaW5nIHZpZGVvcyBpbiB3ZWIgcGFnZXNdKGh0dHBzOi8vY2xvdWRpbmFyeS5jb20vZG9jdW1lbnRhdGlvbi92aWRlb19tYW5pcHVsYXRpb25fYW5kX2RlbGl2ZXJ5I2VtYmVkZGluZ192aWRlb3NfaW5fd2ViX3BhZ2VzKVxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiQ2xkVmlkZW9cIixcbiAgaW5oZXJpdEF0dHJzOiBmYWxzZSxcbiAgbWl4aW5zOiBbcmVhZHksIG1vdW50ZWQsIGxhenksIGNsZEF0dHJzSW5oZXJpdGVkLCBjbGRBdHRyc093bmVkXSxcbiAgcmVuZGVyKGgpIHtcbiAgICByZXR1cm4gaChcbiAgICAgIFwidmlkZW9cIixcbiAgICAgIHRoaXMudmlkZW9BdHRycyxcbiAgICAgIHRoaXMuc291cmNlc1xuICAgICAgICAubWFwKGF0dHJzID0+IGgoXCJzb3VyY2VcIiwgeyBrZXk6IGF0dHJzLm1pbWVUeXBlLCBhdHRycyB9KSlcbiAgICAgICAgLmNvbmNhdCh0aGlzLiRzbG90cy5kZWZhdWx0KVxuICAgICk7XG4gIH0sXG4gIHByb3BzOiB7XG4gICAgLyoqXG4gICAgICogVGhlIHVuaXF1ZSBpZGVudGlmaWVyIG9mIGFuIHVwbG9hZGVkIHZpZGVvLlxuICAgICAqL1xuICAgIHB1YmxpY0lkOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogXCJcIiwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICAvKipcbiAgICAgKiBBbiBvcmRlcmVkIGFycmF5IG9mIHRoZSB2aWRlbyBzb3VyY2UgdHlwZXMgdG8gaW5jbHVkZSBpbiB0aGUgSFRNTDUgdGFnLCB3aGVyZSB0aGUgdHlwZSBpcyBtYXBwZWQgdG8gdGhlIG1pbWUgdHlwZS5cbiAgICAgKiBZb3UgY2FuIGFsc28gYWRkIGEgc3BlY2lmaWMgdHJhbnNmb3JtYXRpb24gZm9yIGVhY2ggc3BlY2lmaWVkIHZpZGVvIGZvcm1hdCBieSBhZGRpbmcgYSB0cmFuc2Zvcm1hdGlvbiBzdHJ1Y3QuIEV4YW1wbGU6XG4gICAgICpcbiAgICAgKiBgPENsZFZpZGVvIDpzb3VyY2VUeXBlcz1cInsgbXA0OiB7IHF1YWxpdHk6IDEwIH0gfVwiIC8+YFxuICAgICAqL1xuICAgIHNvdXJjZVR5cGVzOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICBkZWZhdWx0KCkge1xuICAgICAgICByZXR1cm4gbWVyZ2UuYXBwbHkoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBDbG91ZGluYXJ5LkRFRkFVTFRfVklERU9fUEFSQU1TLnNvdXJjZV90eXBlcy5tYXAodHlwZSA9PiBrdih0eXBlLCB7fSkpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBwcm92aWRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBDbGRQb3N0ZXJTdGF0ZTogdGhpcy5wb3N0ZXJDb21iaW5lZFN0YXRlXG4gICAgfTtcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICBjb25zdCBwb3N0ZXJDb21iaW5lZFN0YXRlID0gbmV3IENvbWJpbmVkU3RhdGUoY29tYmluZU9wdGlvbnMpO1xuICAgIHJldHVybiB7XG4gICAgICBwb3N0ZXJDb21iaW5lZFN0YXRlLFxuICAgICAgcG9zdGVyQ2xkQXR0cnM6IG51bGxcbiAgICB9O1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIHZpZGVvQXR0cnMoKSB7XG4gICAgICBjb25zdCBjbGFzc05hbWUgPSB7XG4gICAgICAgIFwiY2xkLXZpZGVvXCI6IHRydWVcbiAgICAgIH07XG5cbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMuaXNSZWFkeSB8fFxuICAgICAgICAhdGhpcy5wdWJsaWNJZCB8fFxuICAgICAgICAhIWZpbmRJblRyYW5zZm9ybWF0aW9ucyhcbiAgICAgICAgICB0aGlzLmNsZEF0dHJzLnRyYW5zZm9ybWF0aW9uLFxuICAgICAgICAgIHQgPT4gdC53aWR0aCA9PT0gMCB8fCB0LmhlaWdodCA9PT0gMFxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHsgY2xhc3M6IGNsYXNzTmFtZSB9O1xuICAgICAgfVxuXG4gICAgICBjb25zdCBodG1sQXR0cnMgPSBtZXJnZShcbiAgICAgICAgdHlwZW9mIHRoaXMuJGF0dHJzLnBvc3RlciA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgID8geyBwb3N0ZXI6IHRoaXMuJGF0dHJzLnBvc3RlciB9XG4gICAgICAgICAgOiB0aGlzLnBvc3Rlck9wdGlvbnNcbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgcG9zdGVyOiBDbG91ZGluYXJ5Lm5ldyh0aGlzLnBvc3Rlck9wdGlvbnMuY29uZmlndXJhdGlvbikudXJsKFxuICAgICAgICAgICAgICAgIHRoaXMucG9zdGVyT3B0aW9ucy5wdWJsaWNJZCxcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3Rlck9wdGlvbnMudHJhbnNmb3JtYXRpb25cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDoge30sXG4gICAgICAgIFRyYW5zZm9ybWF0aW9uLm5ldyh0aGlzLmNsZEF0dHJzLnRyYW5zZm9ybWF0aW9uKS50b0h0bWxBdHRyaWJ1dGVzKClcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNsYXNzOiBjbGFzc05hbWUsXG4gICAgICAgIGF0dHJzOiBtZXJnZShub3JtYWxpemVSZXN0KHRoaXMuJGF0dHJzKSwgaHRtbEF0dHJzKVxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgc291cmNlcygpIHtcbiAgICAgIGlmICghdGhpcy5pc1JlYWR5IHx8ICF0aGlzLnB1YmxpY0lkKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMubGF6eSAmJiAhdGhpcy52aXNpYmxlKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuc291cmNlVHlwZXMpLm1hcChzcmNUeXBlID0+IHtcbiAgICAgICAgY29uc3QgY29uZmlndXJhdGlvbiA9IG1lcmdlKFxuICAgICAgICAgIHRoaXMuY2xkQXR0cnMuY29uZmlndXJhdGlvbixcbiAgICAgICAgICBub3JtYWxpemVDb25maWd1cmF0aW9uKHRoaXMuc291cmNlVHlwZXNbc3JjVHlwZV0gfHwge30pXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybWF0aW9uID0gY29tYmluZVRyYW5zZm9ybWF0aW9ucyhcbiAgICAgICAgICB0aGlzLmNsZEF0dHJzLnRyYW5zZm9ybWF0aW9uLFxuICAgICAgICAgIG5vcm1hbGl6ZVRyYW5zZm9ybWF0aW9uKHRoaXMuc291cmNlVHlwZXNbc3JjVHlwZV0gfHwge30pXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGh0bWxBdHRycyA9IG5vcm1hbGl6ZVJlc3QodGhpcy5zb3VyY2VUeXBlc1tzcmNUeXBlXSB8fCB7fSk7XG5cbiAgICAgICAgY29uc3Qgc3JjID0gQ2xvdWRpbmFyeS5uZXcoY29uZmlndXJhdGlvbikudXJsKFxuICAgICAgICAgIHRoaXMucHVibGljSWQsXG4gICAgICAgICAgbWVyZ2UoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlc291cmNlX3R5cGU6IFwidmlkZW9cIixcbiAgICAgICAgICAgICAgZm9ybWF0OiBzcmNUeXBlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHJhbnNmb3JtYXRpb25cbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG1pbWVUeXBlID0gXCJ2aWRlby9cIiArIChzcmNUeXBlID09PSBcIm9ndlwiID8gXCJvZ2dcIiA6IHNyY1R5cGUpO1xuXG4gICAgICAgIHJldHVybiBtZXJnZShodG1sQXR0cnMsIHsgbWltZVR5cGUsIHNyYyB9KTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBwb3N0ZXJPcHRpb25zKCkge1xuICAgICAgY29uc3Qgb3duUG9zdGVyQXR0cnMgPSBjb21iaW5lT3B0aW9ucyhcbiAgICAgICAge1xuICAgICAgICAgIGNvbmZpZ3VyYXRpb246IHRoaXMuY2xkQXR0cnMuY29uZmlndXJhdGlvblxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHVibGljSWQ6XG4gICAgICAgICAgICB0eXBlb2YgdGhpcy4kYXR0cnMucG9zdGVyID09PSBcIm9iamVjdFwiXG4gICAgICAgICAgICAgID8gKHRoaXMuJGF0dHJzLnBvc3RlciB8fCB7fSkucHVibGljSWRcbiAgICAgICAgICAgICAgOiBudWxsLFxuICAgICAgICAgIGNvbmZpZ3VyYXRpb246IG5vcm1hbGl6ZUNvbmZpZ3VyYXRpb24oXG4gICAgICAgICAgICB0eXBlb2YgdGhpcy4kYXR0cnMucG9zdGVyID09PSBcIm9iamVjdFwiICYmIHRoaXMuJGF0dHJzLnBvc3RlclxuICAgICAgICAgICAgICA/IHRoaXMuJGF0dHJzLnBvc3RlclxuICAgICAgICAgICAgICA6IHt9XG4gICAgICAgICAgKSxcbiAgICAgICAgICB0cmFuc2Zvcm1hdGlvbjogbm9ybWFsaXplVHJhbnNmb3JtYXRpb24oXG4gICAgICAgICAgICB0eXBlb2YgdGhpcy4kYXR0cnMucG9zdGVyID09PSBcIm9iamVjdFwiICYmIHRoaXMuJGF0dHJzLnBvc3RlclxuICAgICAgICAgICAgICA/IHRoaXMuJGF0dHJzLnBvc3RlclxuICAgICAgICAgICAgICA6IHt9XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgb3duUG9zdGVyQXR0cnMudHJhbnNmb3JtYXRpb24gPSBvd25Qb3N0ZXJBdHRycy50cmFuc2Zvcm1hdGlvbiB8fCB7fTtcbiAgICAgIGlmICgodGhpcy4kYXR0cnMucG9zdGVyIHx8IHt9KS5wdWJsaWNJZCkge1xuICAgICAgICBvd25Qb3N0ZXJBdHRycy50cmFuc2Zvcm1hdGlvbi5yZXNvdXJjZV90eXBlID0gXCJpbWFnZVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3duUG9zdGVyQXR0cnMudHJhbnNmb3JtYXRpb24ucmVzb3VyY2VfdHlwZSA9IFwidmlkZW9cIjtcbiAgICAgICAgb3duUG9zdGVyQXR0cnMudHJhbnNmb3JtYXRpb24uZm9ybWF0ID0gXCJqcGVnXCI7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGV4dFBvc3RlckF0dHJzID0gdGhpcy5wb3N0ZXJDbGRBdHRyc1xuICAgICAgICA/IGNvbWJpbmVPcHRpb25zKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwdWJsaWNJZDogdGhpcy5wdWJsaWNJZCxcbiAgICAgICAgICAgICAgY29uZmlndXJhdGlvbjogdGhpcy5jbGRBdHRycy5jb25maWd1cmF0aW9uXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpcy5wb3N0ZXJDbGRBdHRyc1xuICAgICAgICAgIClcbiAgICAgICAgOiB7fTtcbiAgICAgIGV4dFBvc3RlckF0dHJzLnRyYW5zZm9ybWF0aW9uID0gZXh0UG9zdGVyQXR0cnMudHJhbnNmb3JtYXRpb24gfHwge307XG4gICAgICBpZiAoKHRoaXMucG9zdGVyQ2xkQXR0cnMgfHwge30pLnB1YmxpY0lkKSB7XG4gICAgICAgIGV4dFBvc3RlckF0dHJzLnRyYW5zZm9ybWF0aW9uLnJlc291cmNlX3R5cGUgPSBcImltYWdlXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBleHRQb3N0ZXJBdHRycy50cmFuc2Zvcm1hdGlvbi5yZXNvdXJjZV90eXBlID0gXCJ2aWRlb1wiO1xuICAgICAgICBleHRQb3N0ZXJBdHRycy50cmFuc2Zvcm1hdGlvbi5mb3JtYXQgPSBcImpwZWdcIjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGVmYXVsdFBvc3RlciA9IG1lcmdlKFxuICAgICAgICBjb21iaW5lT3B0aW9ucyh7IHB1YmxpY0lkOiB0aGlzLnB1YmxpY0lkIH0sIHRoaXMuY2xkQXR0cnMpLFxuICAgICAgICB7XG4gICAgICAgICAgdHJhbnNmb3JtYXRpb246IHtcbiAgICAgICAgICAgIHJlc291cmNlX3R5cGU6IFwidmlkZW9cIixcbiAgICAgICAgICAgIGZvcm1hdDogXCJqcGVnXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBmaW5kKFxuICAgICAgICBbZXh0UG9zdGVyQXR0cnMsIG93blBvc3RlckF0dHJzLCBkZWZhdWx0UG9zdGVyXSxcbiAgICAgICAgb3B0aW9ucyA9PiBvcHRpb25zLnB1YmxpY0lkXG4gICAgICApO1xuICAgIH1cbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLnBvc3RlckNvbWJpbmVkU3RhdGVTdWIgPSB0aGlzLnBvc3RlckNvbWJpbmVkU3RhdGUuc3Vic2NyaWJlKHtcbiAgICAgIG5leHQ6IHYgPT4ge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXModikubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5wb3N0ZXJDbGRBdHRycyA9IHY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgZGVzdHJveWVkKCkge1xuICAgIHRoaXMucG9zdGVyQ29tYmluZWRTdGF0ZVN1YigpO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi9yZWFjdGl2ZS9TdGF0ZVwiO1xuaW1wb3J0IHsgbm9ybWFsaXplQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuL2hlbHBlcnMvYXR0cmlidXRlc1wiO1xuXG5pbXBvcnQgQ2xkQ29udGV4dCBmcm9tIFwiLi9jb21wb25lbnRzL0NsZENvbnRleHRcIjtcbmltcG9ydCBDbGRJbWFnZSBmcm9tIFwiLi9jb21wb25lbnRzL0NsZEltYWdlXCI7XG5pbXBvcnQgQ2xkUG9zdGVyIGZyb20gXCIuL2NvbXBvbmVudHMvQ2xkUG9zdGVyXCI7XG5pbXBvcnQgQ2xkVHJhbnNmb3JtYXRpb24gZnJvbSBcIi4vY29tcG9uZW50cy9DbGRUcmFuc2Zvcm1hdGlvblwiO1xuaW1wb3J0IENsZFZpZGVvIGZyb20gXCIuL2NvbXBvbmVudHMvQ2xkVmlkZW9cIjtcblxuLyogZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOiAwICovXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnN0YWxsKFZ1ZSwgb3B0aW9ucykge1xuICBpZiAoVnVlLkNsZEluc3RhbGxlZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNsb3VkaW5hcnkgcGx1Z2luIGFscmVhZHkgaW5zdGFsbGVkXCIpO1xuICB9XG4gIFZ1ZS5DbGRJbnN0YWxsZWQgPSB0cnVlO1xuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIFtDbGRDb250ZXh0LCBDbGRJbWFnZSwgQ2xkUG9zdGVyLCBDbGRUcmFuc2Zvcm1hdGlvbiwgQ2xkVmlkZW9dLmZvckVhY2goXG4gICAgY29tcG9uZW50ID0+IHtcbiAgICAgIGNvbnN0IHVzZXJDb21wb25lbnROYW1lID0gZ2V0VXNlckNvbXBvbmVudE5hbWUoXG4gICAgICAgIG9wdGlvbnMuY29tcG9uZW50cyxcbiAgICAgICAgY29tcG9uZW50Lm5hbWVcbiAgICAgICk7XG4gICAgICBpZiAodXNlckNvbXBvbmVudE5hbWUgIT0gbnVsbCkge1xuICAgICAgICBWdWUuY29tcG9uZW50KHVzZXJDb21wb25lbnROYW1lLCBjb21wb25lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgKTtcblxuICBpZiAob3B0aW9ucy5jb25maWd1cmF0aW9uKSB7XG4gICAgVnVlLnByb3RvdHlwZS5DbGRHbG9iYWxDb250ZXh0U3RhdGUgPSBuZXcgU3RhdGUoe1xuICAgICAgY29uZmlndXJhdGlvbjogbm9ybWFsaXplQ29uZmlndXJhdGlvbihvcHRpb25zLmNvbmZpZ3VyYXRpb24pXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0VXNlckNvbXBvbmVudE5hbWUoY29tcG9uZW50cywgbmFtZSkge1xuICBpZiAoIWNvbXBvbmVudHMpIHtcbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gXCJvYmplY3RcIikge1xuICAgIC8vIHsgY29tcG9uZW50czogWydDbGRJbWFnZSddIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShjb21wb25lbnRzKSkge1xuICAgICAgcmV0dXJuIGNvbXBvbmVudHMuaW5kZXhPZihuYW1lKSA+PSAwID8gbmFtZSA6IG51bGw7XG4gICAgfVxuICAgIC8vIHsgY29tcG9uZW50czogeyBDbGRJbWFnZTogdHJ1ZSB9IH1cbiAgICBpZiAodHlwZW9mIGNvbXBvbmVudHNbbmFtZV0gPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICByZXR1cm4gY29tcG9uZW50c1tuYW1lXSA9PT0gdHJ1ZSA/IG5hbWUgOiBudWxsO1xuICAgIH1cbiAgICAvLyB7IGNvbXBvbmVudHM6IHsgQ2xkSW1hZ2U6ICdDbG91ZGluYXJ5SW1hZ2UnIH0gfVxuICAgIGlmICh0eXBlb2YgY29tcG9uZW50c1tuYW1lXSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgcmV0dXJuIGNvbXBvbmVudHNbbmFtZV07XG4gICAgfVxuICAgIC8vIHsgY29tcG9uZW50czogeyBDbG91ZGluYXJ5SW1hZ2U6ICdDbGRJbWFnZScgfSB9XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNvbXBvbmVudHMpO1xuICAgIGNvbnN0IHZhbHVlcyA9IGtleXMubWFwKGtleSA9PiBjb21wb25lbnRzW2tleV0pO1xuICAgIGlmICh2YWx1ZXMuaW5kZXhPZihuYW1lKSA+PSAwKSB7XG4gICAgICByZXR1cm4ga2V5c1t2YWx1ZXMuaW5kZXhPZihuYW1lKV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG4iLCJpbXBvcnQgeyBpbnN0YWxsIH0gZnJvbSBcIi4vcGx1Z2luXCI7XG5pbXBvcnQgQ2xkQ29udGV4dCBmcm9tIFwiLi9jb21wb25lbnRzL0NsZENvbnRleHRcIjtcbmltcG9ydCBDbGRJbWFnZSBmcm9tIFwiLi9jb21wb25lbnRzL0NsZEltYWdlXCI7XG5pbXBvcnQgQ2xkVmlkZW8gZnJvbSBcIi4vY29tcG9uZW50cy9DbGRWaWRlb1wiO1xuaW1wb3J0IENsZFBvc3RlciBmcm9tIFwiLi9jb21wb25lbnRzL0NsZFBvc3RlclwiO1xuaW1wb3J0IENsZFRyYW5zZm9ybWF0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvQ2xkVHJhbnNmb3JtYXRpb25cIjtcblxuY29uc3QgcGx1Z2luID0geyBpbnN0YWxsIH07XG5cbmV4cG9ydCB7XG4gIHBsdWdpbixcbiAgcGx1Z2luIGFzIGRlZmF1bHQsXG4gIENsZENvbnRleHQsXG4gIENsZEltYWdlLFxuICBDbGRWaWRlbyxcbiAgQ2xkUG9zdGVyLFxuICBDbGRUcmFuc2Zvcm1hdGlvbixcbiAgaW5zdGFsbFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=