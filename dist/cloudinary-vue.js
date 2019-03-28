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

    if (!this.CldParentState && (!this.$slots || !this.$slots.default || !this.$slots.default.length)) {
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
      default: function _default() {
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
// CONCATENATED MODULE: ./src/components/CldContext.jsx




/**
 * Cloudinary context providing element
 */

/* harmony default export */ var CldContext = ({
  name: "CldContext",
  render: function render(h) {
    return h("div", this.htmlAttributes, this.$slots ? this.$slots.default : null);
  },
  inheritAttrs: false,
  mixins: [mounted, cldAttrsInherited, cldAttrsOwned],
  props: {},
  computed: {
    htmlAttributes: function htmlAttributes() {
      return {
        class: "cld-context",
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
  return external_commonjs_cloudinary_core_commonjs2_cloudinary_core_amd_cloudinary_core_umd_cloudinary_root_cloudinary_["Cloudinary"].new(placeholderOptions.configuration).url(placeholderOptions.publicId, placeholderOptions.transformation);
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
      default: false
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
// CONCATENATED MODULE: ./src/components/CldImage.jsx














/**
 * Deliver images and specify image transformations using the cld-image (CldImage) component,
 * which automatically generates an `<img>` tag including the dynamic URL of the image source.
 *
 *
 * You can optionally include [cld-transformation](#cldtransformation) components to define transformations to apply to the delivered image.
 *
 * For more information see the
 * <a href="https://cloudinary.com/documentation/vue_image_manipulation#cldvideo_component" target="_blank">
 * cld-image component</a> and
 * <a href="https://cloudinary.com/documentation/image_transformations#embedding_images_in_web_pages"
 * target="_blank">embedding images in web pages</a> documentation.
 */

/* harmony default export */ var CldImage = ({
  name: "CldImage",
  inheritAttrs: false,
  mixins: [ready, size_size, mounted, lazy, cldAttrsInherited, cldAttrsOwned],
  render: function render(h) {
    return h("img", this.imageAttrs, this.$slots ? this.$slots.default : null);
  },
  props: {
    /**
     * The unique identifier of an uploaded image.
     */
    publicId: {
      type: String,
      default: "",
      required: true
    },

    /**
     * Whether to generate a JPEG using the [progressive (interlaced) JPEG
     * format](https://cloudinary.com/documentation/transformation_flags#delivery_and_image_format_flags).
     */
    progressive: {
      type: Boolean,
      default: false
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
      default: ""
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
      default: "none"
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
      default: function _default() {
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
        "cld-fill": this.responsive === "fill",
        "cld-fill-width": this.responsive === "width",
        "cld-fill-height": this.responsive === "height"
      };

      if (!this.isReady || !this.publicId || !!findInTransformations(this.cldAttrs.transformation, function (t) {
        return t.width === 0 || t.height === 0;
      })) {
        return {
          class: className
        };
      }

      if (this.lazy && !this.visible) {
        return {
          class: className,
          attrs: this.placeholder ? {
            src: getPlaceholderURL(this.placeholder, combineOptions({
              publicId: this.publicId
            }, this.cldAttrs)) || this.placeholder
          } : {}
        };
      }

      var htmlAttrs = external_commonjs_cloudinary_core_commonjs2_cloudinary_core_amd_cloudinary_core_umd_cloudinary_root_cloudinary_["Transformation"].new(this.cldAttrs.transformation).toHtmlAttributes();
      var src = external_commonjs_cloudinary_core_commonjs2_cloudinary_core_amd_cloudinary_core_umd_cloudinary_root_cloudinary_["Cloudinary"].new(this.cldAttrs.configuration).url(this.publicId, this.cldAttrs);
      return {
        class: className,
        attrs: merge(normalizeRest(this.$attrs), htmlAttrs, src ? {
          src: src
        } : {})
      };
    }
  }
});

if (typeof window !== "undefined") {
  var style = document.createElement("style");
  style.innerText = "\n    .cld-image.cld-fill-height {\n      display: block;\n      height: 100%;\n      width: auto;\n    }\n    \n    .cld-image.cld-fill-width {\n      display: block;\n      width: 100%;\n    }\n    \n    .cld-image.cld-fill {\n      display: block;\n      width: 100%;\n      height: 100%;\n    }\n    </style>\n    ";

  if (document.head.firstChild) {
    document.head.insertBefore(style, document.head.firstChild);
  } else {
    document.head.appendChild(style);
  }
}
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
// CONCATENATED MODULE: ./src/components/CldPoster.jsx



/**
 * The image to be shown while a video is downloading or until the user hits the play button.
 * This component must be added as a child of the [CldVideo](#cldvideo) component.
 *
 * If this component is not given then the poster image defaults to the middle frame of the source video in jpg format.
 */

/* harmony default export */ var CldPoster = ({
  name: "CldPoster",
  render: function render(h) {
    if (!this.$slots || !this.$slots.default) {
      return null;
    }

    return h("span", {
      class: "cld-poster"
    }, this.$slots.default);
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
// CONCATENATED MODULE: ./src/components/CldTransformation.jsx


/**
 * One or more [transformation parameters](https://cloudinary.com/documentation/image_transformation_reference)
 * in a single component, or a set of [chained transformations](https://cloudinary.com/documentation/image_transformations#chained_transformations) in multiple components.
 */

/* harmony default export */ var CldTransformation = ({
  name: "CldTransformation",
  render: function render(h) {
    if (!this.$slots || !this.$slots.default) {
      return null;
    }

    return h("span", {
      class: "cld-transformation"
    }, this.$slots.default);
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
// CONCATENATED MODULE: ./src/components/CldVideo.jsx
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
 * <a href="https://cloudinary.com/documentation/vue_video_manipulation#cldvideo_component" target="_blank">
 * cld-video component</a> and
 * <a href="https://cloudinary.com/documentation/video_manipulation_and_delivery#embedding_videos_in_web_pages"
 * target="_blank">embedding videos in web pages</a>
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
    }).concat(this.$slots.default));
  },
  props: {
    /**
     * The unique identifier of an uploaded video.
     */
    publicId: {
      type: String,
      default: "",
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
      default: function _default() {
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
          class: className
        };
      }

      var htmlAttrs = merge(typeof this.$attrs.poster === "string" ? {
        poster: this.$attrs.poster
      } : this.posterOptions ? {
        poster: external_commonjs_cloudinary_core_commonjs2_cloudinary_core_amd_cloudinary_core_umd_cloudinary_root_cloudinary_["Cloudinary"].new(this.posterOptions.configuration).url(this.posterOptions.publicId, this.posterOptions.transformation)
      } : {}, external_commonjs_cloudinary_core_commonjs2_cloudinary_core_amd_cloudinary_core_umd_cloudinary_root_cloudinary_["Transformation"].new(this.cldAttrs.transformation).toHtmlAttributes());
      return {
        class: className,
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
        var src = external_commonjs_cloudinary_core_commonjs2_cloudinary_core_amd_cloudinary_core_umd_cloudinary_root_cloudinary_["Cloudinary"].new(configuration).url(_this.publicId, merge({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbG91ZGluYXJ5VnVlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9jbG91ZGluYXJ5VnVlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Nsb3VkaW5hcnlWdWUvZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcImNsb3VkaW5hcnktY29yZVwiLFwiY29tbW9uanMyXCI6XCJjbG91ZGluYXJ5LWNvcmVcIixcImFtZFwiOlwiY2xvdWRpbmFyeS1jb3JlXCIsXCJ1bWRcIjpcImNsb3VkaW5hcnlcIixcInJvb3RcIjpcImNsb3VkaW5hcnlcIn0iLCJ3ZWJwYWNrOi8vY2xvdWRpbmFyeVZ1ZS8uL3NyYy9yZWFjdGl2ZS9DaGFubmVsLmpzIiwid2VicGFjazovL2Nsb3VkaW5hcnlWdWUvLi9zcmMvcmVhY3RpdmUvU3RhdGUuanMiLCJ3ZWJwYWNrOi8vY2xvdWRpbmFyeVZ1ZS8uL3NyYy91dGlscy9tZXJnZS5qcyIsIndlYnBhY2s6Ly9jbG91ZGluYXJ5VnVlLy4vc3JjL3V0aWxzL2t2LmpzIiwid2VicGFjazovL2Nsb3VkaW5hcnlWdWUvLi9zcmMvdXRpbHMvZm9ybWF0T2JqZWN0LmpzIiwid2VicGFjazovL2Nsb3VkaW5hcnlWdWUvLi9zcmMvdXRpbHMvbm9ybWFsaXplT2JqZWN0LmpzIiwid2VicGFjazovL2Nsb3VkaW5hcnlWdWUvLi9zcmMvdXRpbHMvb21pdC5qcyIsIndlYnBhY2s6Ly9jbG91ZGluYXJ5VnVlLy4vc3JjL3V0aWxzL3BpY2suanMiLCJ3ZWJwYWNrOi8vY2xvdWRpbmFyeVZ1ZS8uL3NyYy91dGlscy91bmlxLmpzIiwid2VicGFjazovL2Nsb3VkaW5hcnlWdWUvLi9zcmMvdXRpbHMvZXF1YWwuanMiLCJ3ZWJwYWNrOi8vY2xvdWRpbmFyeVZ1ZS8uL3NyYy91dGlscy9kZWJvdW5jZS5qcyIsIndlYnBhY2s6Ly9jbG91ZGluYXJ5VnVlLy4vc3JjL3V0aWxzL2ZpbmQuanMiLCJ3ZWJwYWNrOi8vY2xvdWRpbmFyeVZ1ZS8uL3NyYy91dGlscy9yYW5nZS5qcyIsIndlYnBhY2s6Ly9jbG91ZGluYXJ5VnVlLy4vc3JjL3V0aWxzL2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly9jbG91ZGluYXJ5VnVlLy4vc3JjL3V0aWxzL2ZsYXR0ZW4uanMiLCJ3ZWJwYWNrOi8vY2xvdWRpbmFyeVZ1ZS8uL3NyYy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jbG91ZGluYXJ5VnVlLy4vc3JjL2hlbHBlcnMvYXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jbG91ZGluYXJ5VnVlLy4vc3JjL21peGlucy9yZWFkeS5qcyIsIndlYnBhY2s6Ly9jbG91ZGluYXJ5VnVlLy4vc3JjL21peGlucy9tb3VudGVkLmpzIiwid2VicGFjazovL2Nsb3VkaW5hcnlWdWUvLi9zcmMvcmVhY3RpdmUvQ29tYmluZWRTdGF0ZS5qcyIsIndlYnBhY2s6Ly9jbG91ZGluYXJ5VnVlLy4vc3JjL2hlbHBlcnMvY29tYmluZU9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vY2xvdWRpbmFyeVZ1ZS8uL3NyYy9taXhpbnMvY2xkQXR0cnMuanMiLCJ3ZWJwYWNrOi8vY2xvdWRpbmFyeVZ1ZS8uL3NyYy9taXhpbnMvY2xkQXR0cnNPd25lZC5qcyIsIndlYnBhY2s6Ly9jbG91ZGluYXJ5VnVlLy4vc3JjL21peGlucy9jbGRDaGlsZC5qcyIsIndlYnBhY2s6Ly9jbG91ZGluYXJ5VnVlLy4vc3JjL21peGlucy9jbGRBdHRyc0luaGVyaXRlZC5qcyIsIndlYnBhY2s6Ly9jbG91ZGluYXJ5VnVlLy4vc3JjL2NvbXBvbmVudHMvQ2xkQ29udGV4dC5qc3giLCJ3ZWJwYWNrOi8vY2xvdWRpbmFyeVZ1ZS8uL3NyYy9oZWxwZXJzL2ZpbmRJblRyYW5zZm9ybWF0aW9ucy5qcyIsIndlYnBhY2s6Ly9jbG91ZGluYXJ5VnVlLy4vc3JjL2hlbHBlcnMvZXZhbEJyZWFrcG9pbnRzLmpzIiwid2VicGFjazovL2Nsb3VkaW5hcnlWdWUvLi9zcmMvaGVscGVycy9nZXREUFJBdHRyLmpzIiwid2VicGFjazovL2Nsb3VkaW5hcnlWdWUvLi9zcmMvaGVscGVycy9maW5kQnJlYWtwb2ludC5qcyIsIndlYnBhY2s6Ly9jbG91ZGluYXJ5VnVlLy4vc3JjL2hlbHBlcnMvZ2V0UmVzaXplVHJhbnNmb3JtYXRpb24uanMiLCJ3ZWJwYWNrOi8vY2xvdWRpbmFyeVZ1ZS8uL3NyYy9oZWxwZXJzL2dldFBsYWNlaG9sZGVyVVJMLmpzIiwid2VicGFjazovL2Nsb3VkaW5hcnlWdWUvLi9zcmMvbWl4aW5zL3NpemUuanMiLCJ3ZWJwYWNrOi8vY2xvdWRpbmFyeVZ1ZS8uL3NyYy9taXhpbnMvbGF6eS5qcyIsIndlYnBhY2s6Ly9jbG91ZGluYXJ5VnVlLy4vc3JjL2NvbXBvbmVudHMvQ2xkSW1hZ2UuanN4Iiwid2VicGFjazovL2Nsb3VkaW5hcnlWdWUvLi9zcmMvbWl4aW5zL2NsZEF0dHJzU3VibWl0dGluZy5qcyIsIndlYnBhY2s6Ly9jbG91ZGluYXJ5VnVlLy4vc3JjL2NvbXBvbmVudHMvQ2xkUG9zdGVyLmpzeCIsIndlYnBhY2s6Ly9jbG91ZGluYXJ5VnVlLy4vc3JjL2NvbXBvbmVudHMvQ2xkVHJhbnNmb3JtYXRpb24uanN4Iiwid2VicGFjazovL2Nsb3VkaW5hcnlWdWUvLi9zcmMvY29tcG9uZW50cy9DbGRWaWRlby5qc3giLCJ3ZWJwYWNrOi8vY2xvdWRpbmFyeVZ1ZS8uL3NyYy9wbHVnaW4uanMiLCJ3ZWJwYWNrOi8vY2xvdWRpbmFyeVZ1ZS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJDaGFubmVsIiwic3VicyIsInZhbHVlIiwiZm9yRWFjaCIsInN1YiIsIm5leHQiLCJlcnJvciIsInNwbGljZSIsImNvbXBsZXRlIiwibGlzdGVuZXIiLCJwdXNoIiwiZmlsdGVyIiwiU3RhdGUiLCJsYXN0VmFsdWUiLCJjaGFubmVsIiwiY29tcHV0ZWRWYWx1ZSIsInN1YnNjcmliZSIsIm1lcmdlIiwiYXJncyIsImxlbmd0aCIsInJlc3VsdCIsIk9iamVjdCIsImtleXMiLCJrIiwidW5kZWZpbmVkIiwic2xpY2UiLCJrdiIsInYiLCJmb3JtYXRPYmplY3QiLCJzdWJqZWN0IiwiaW5zdHJ1Y3Rpb25zIiwicmVkdWNlIiwia2V5Iiwibm9ybWFsaXplT2JqZWN0Iiwib21pdCIsImRpc2FsbG93ZWQiLCJpbmRleE9mIiwicGljayIsImFsbG93ZWQiLCJ1bmlxIiwic3ViamVjdEEiLCJzdWJqZWN0QiIsImNvbmNhdCIsInIiLCJpIiwiZXF1YWwiLCJzdWJqZWN0QUtleXMiLCJzdWJqZWN0QktleXMiLCJhbGxLZXlzIiwiZGVib3VuY2UiLCJmbiIsInRpbWVvdXQiLCJmb3JjZVVwZGF0ZVRpbWVvdXRUb2tlbiIsImRlYm91bmNlZCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJhcHBseSIsImZpbmQiLCJwcmVkaWNhdGUiLCJBcnJheSIsIkVycm9yIiwicmFuZ2UiLCJtaW4iLCJtYXgiLCJzdGVwIiwiYXNzaWduIiwibW9kIiwiZmxhdHRlbiIsIml0ZW0iLCJjb25maWd1cmF0aW9uIiwiQ29uZmlndXJhdGlvbiIsIkNPTkZJR19QQVJBTVMiLCJtYXAiLCJVdGlsIiwiY2FtZWxDYXNlIiwidHJhbnNmb3JtYXRpb24iLCJUcmFuc2Zvcm1hdGlvbiIsIlBBUkFNX05BTUVTIiwibmFtZSIsIm5vcm1hbGl6ZUNvbmZpZ3VyYXRpb24iLCJjZmciLCJ3aXRoU25ha2VDYXNlS2V5cyIsInNlY3VyZSIsIm5vcm1hbGl6ZVRyYW5zZm9ybWF0aW9uIiwibm9ybWFsaXplUmVzdCIsInJlYWR5IiwiZGF0YSIsImNvbXB1dGVkIiwiaXNSZWFkeSIsImZsYWdzIiwibWV0aG9kcyIsImFkZFJlYWR5Q2hlY2siLCJtYXJrUmVhZHlDaGVjayIsIm1vdW50ZWQiLCJtaXhpbnMiLCJjcmVhdGVkIiwiQ2xkUGFyZW50U3RhdGUiLCIkc2xvdHMiLCJkZWZhdWx0IiwiQ29tYmluZWRTdGF0ZSIsImNvbXBvc2l0aW9uIiwiY2h1bmtlZFN0YXRlIiwic29saWRTdGF0ZSIsIm5leHRTdW0iLCJlIiwibGFzdCIsImRpZFN0YXRlUHVzaGVkRW1wdHkiLCJuZXdTcGF3biIsImN1cnJlbnRTdGF0ZSIsImNodW5rIiwicCIsImdldCIsImNvbWJpbmVPcHRpb25zIiwib3B0aW9ucyIsInB1YmxpY0lkIiwiaXNPYmplY3RXaXRoS2V5cyIsIl8iLCJjb21iaW5lVHJhbnNmb3JtYXRpb25zIiwidHJhbnNmb3JtYXRpb25zIiwiY2xkQXR0cnMiLCJwcm92aWRlIiwiY2xkQXR0cnNTdGF0ZSIsImNsZEF0dHJzU3RhdGVTdWIiLCJkZXN0cm95ZWQiLCJjbGRBdHRyc093bmVkIiwiYXR0cmlidXRlcyIsIiRhdHRycyIsImNsZEF0dHJpYnV0ZXMiLCJvd25TdGF0ZSIsInNwYXduIiwidXBkYXRlZCIsInByZXYiLCJjdXJyZW50IiwiY2xkQ2hpbGQiLCJpbmplY3QiLCJDbGRHbG9iYWxDb250ZXh0U3RhdGUiLCJjbGRBdHRyc0luaGVyaXRlZCIsImNvbnRleHRTdGF0ZSIsImNvbnRleHRTdGF0ZVN1YiIsInJlbmRlciIsImgiLCJodG1sQXR0cmlidXRlcyIsImluaGVyaXRBdHRycyIsInByb3BzIiwiY2xhc3MiLCJhdHRycyIsImZpbmRJblRyYW5zZm9ybWF0aW9ucyIsImV2YWxCcmVha3BvaW50cyIsInZhbHVlT3JHZXR0ZXIiLCJKU09OIiwicGFyc2UiLCJnZXREUFJBdHRyIiwid2luZG93IiwiZHByIiwiZGV2aWNlUGl4ZWxSYXRpbyIsImZpbmRCcmVha3BvaW50Iiwic3RvcHMiLCJzb3J0IiwiYSIsImIiLCJzdG9wIiwiZ2V0UmVzaXplVHJhbnNmb3JtYXRpb24iLCJtb2RlIiwic2l6ZSIsImJyZWFrcG9pbnRzIiwiY3JvcCIsIndpZHRoIiwiTWF0aCIsImZsb29yIiwiaGVpZ2h0IiwiZ2V0UGxhY2Vob2xkZXJVUkwiLCJwbGFjZWhvbGRlck9wdGlvbnMiLCJscWlwIiwidmFyaWFibGVzIiwicXVhbGl0eSIsImNvbG9yIiwicGl4ZWxhdGUiLCJlZmZlY3QiLCJDbG91ZGluYXJ5IiwibmV3IiwidXJsIiwic2hvdWxkTWVhc3VyZVNpemUiLCJmaXgiLCJjYWxsIiwiY2FuY2VsU2l6ZUxpc3RlbmVyIiwiJGVsIiwid2F0Y2hFbGVtZW50U2l6ZSIsIm1lYXN1cmVtZW50IiwiY3VycmVudFNpemUiLCJuZXh0U2l6ZSIsImVsZW1lbnQiLCJjYiIsImRlbGF5ZWRDYWxsYmFjayIsImNhbmNlbGxlZCIsInJlc2l6ZU9ic2VydmVyIiwiUmVzaXplT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjb250ZW50UmVjdCIsIm9ic2VydmUiLCJkaXNjb25uZWN0IiwiaGFuZGxlV2luZG93UmVzaXplIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJsYXp5IiwidHlwZSIsIkJvb2xlYW4iLCJ2aXNpYmxlIiwiY2FuY2VsVmlzaWJpbGl0eUxpc3RlbmVyIiwid2F0Y2hFbGVtZW50VmlzaWJpbGl0eSIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ0YXJnZXQiLCJpc0ludGVyc2VjdGluZyIsInRocmVzaG9sZCIsIm5vb3AiLCJpbWFnZUF0dHJzIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJwcm9ncmVzc2l2ZSIsInBsYWNlaG9sZGVyIiwicmVzcG9uc2l2ZSIsIkZ1bmN0aW9uIiwiY2xhc3NOYW1lIiwidCIsInNyYyIsImh0bWxBdHRycyIsInRvSHRtbEF0dHJpYnV0ZXMiLCJzdHlsZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVyVGV4dCIsImhlYWQiLCJmaXJzdENoaWxkIiwiaW5zZXJ0QmVmb3JlIiwiYXBwZW5kQ2hpbGQiLCJjbGRBdHRyc1N1Ym1pdHRpbmciLCJzdWJtaXR0ZXIiLCJzdWJtaXR0ZXJTdWIiLCJmcm9tIiwidmlkZW9BdHRycyIsInNvdXJjZXMiLCJtaW1lVHlwZSIsInNvdXJjZVR5cGVzIiwiREVGQVVMVF9WSURFT19QQVJBTVMiLCJzb3VyY2VfdHlwZXMiLCJDbGRQb3N0ZXJTdGF0ZSIsInBvc3RlckNvbWJpbmVkU3RhdGUiLCJwb3N0ZXJDbGRBdHRycyIsInBvc3RlciIsInBvc3Rlck9wdGlvbnMiLCJzcmNUeXBlIiwicmVzb3VyY2VfdHlwZSIsImZvcm1hdCIsIm93blBvc3RlckF0dHJzIiwiZXh0UG9zdGVyQXR0cnMiLCJkZWZhdWx0UG9zdGVyIiwicG9zdGVyQ29tYmluZWRTdGF0ZVN1YiIsImluc3RhbGwiLCJWdWUiLCJDbGRJbnN0YWxsZWQiLCJDbGRDb250ZXh0IiwiQ2xkSW1hZ2UiLCJDbGRQb3N0ZXIiLCJDbGRUcmFuc2Zvcm1hdGlvbiIsIkNsZFZpZGVvIiwiY29tcG9uZW50IiwidXNlckNvbXBvbmVudE5hbWUiLCJnZXRVc2VyQ29tcG9uZW50TmFtZSIsImNvbXBvbmVudHMiLCJwcm90b3R5cGUiLCJpc0FycmF5IiwidmFsdWVzIiwicGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDZEE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVy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Q0FBQzlPLEdBQUQsQ0FBZDtBQUFBLEtBQVosQ0FBZjs7QUFDQSxRQUFJaVAsTUFBTSxDQUFDN08sT0FBUCxDQUFlMEMsSUFBZixLQUF3QixDQUE1QixFQUErQjtBQUM3QixhQUFPeEQsSUFBSSxDQUFDMlAsTUFBTSxDQUFDN08sT0FBUCxDQUFlMEMsSUFBZixDQUFELENBQVg7QUFDRDtBQUNGOztBQUVELFNBQU8sSUFBUDtBQUNELEM7O0FDakVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNb00sVUFBTSxHQUFHO0FBQUVmLFNBQU8sRUFBUEEsT0FBT0E7QUFBVCxDQUFmIiwiZmlsZSI6ImNsb3VkaW5hcnktdnVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0Ly8vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjbG91ZGluYXJ5LWNvcmVcIikpO1xuXHQvLy8qIGVzbGludC1kaXNhYmxlICovXG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImNsb3VkaW5hcnlWdWVcIiwgW1wiY2xvdWRpbmFyeS1jb3JlXCJdLCBmYWN0b3J5KTtcblx0Ly8vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiY2xvdWRpbmFyeVZ1ZVwiXSA9IGZhY3RvcnkocmVxdWlyZShcImNsb3VkaW5hcnktY29yZVwiKSk7XG5cdC8vLyogZXNsaW50LWRpc2FibGUgKi9cblx0ZWxzZVxuXHRcdHJvb3RbXCJjbG91ZGluYXJ5VnVlXCJdID0gZmFjdG9yeShyb290W1wiY2xvdWRpbmFyeVwiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fMF9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18wX187IiwiLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBJTGlzdGVuZXJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IG5leHRcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGVycm9yXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBjb21wbGV0ZVxuICovXG5cbi8qKlxuICogTWVzc2FnZSBwYXNzaW5nIGVudGl0eS5cbiAqIEFsbG93cyByZWdpc3RlcmluZyBsaXN0ZW5lcnMgdGhhdCBhcmUgdGhlbiB0cmlnZ2VyZWQgd2l0aCBhIG1lc3NhZ2UsIGVycm9yIG9yIGVuZCBzaWduYWwuXG4gKi9cbmV4cG9ydCBjbGFzcyBDaGFubmVsIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zdWJzID0gW107XG4gIH1cblxuICAvKipcbiAgICogUHVzaCBhIG1lc3NhZ2UgdG8gYWxsIGFjdGl2ZSBsaXN0ZW5lcnNcbiAgICogQHBhcmFtIHsqfSBtZXNzYWdlXG4gICAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAqL1xuICBuZXh0KHZhbHVlKSB7XG4gICAgdGhpcy5zdWJzLmZvckVhY2goc3ViID0+XG4gICAgICBzdWIgJiYgdHlwZW9mIHN1YiA9PT0gXCJvYmplY3RcIiAmJiBcIm5leHRcIiBpbiBzdWIgJiYgc3ViLm5leHRcbiAgICAgICAgPyBzdWIubmV4dCh2YWx1ZSlcbiAgICAgICAgOiBudWxsXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdXNoIGFuIGVycm9yIHNpZ25hbCB0byBhbGwgYWN0aXZlIGxpc3RlbmVyc1xuICAgKiBAcGFyYW0ge0Vycm9yfSBlcnJvclxuICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgKi9cbiAgZXJyb3IoZXJyb3IpIHtcbiAgICB0aGlzLnN1YnNcbiAgICAgIC5zcGxpY2UoMClcbiAgICAgIC5mb3JFYWNoKHN1YiA9PlxuICAgICAgICBzdWIgJiYgdHlwZW9mIHN1YiA9PT0gXCJvYmplY3RcIiAmJiBcImVycm9yXCIgaW4gc3ViICYmIHN1Yi5lcnJvclxuICAgICAgICAgID8gc3ViLmVycm9yKGVycm9yKVxuICAgICAgICAgIDogbnVsbFxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdXNoIGFuIGVuZCBzaWduYWwgdG8gYWxsIGFjdGl2ZSBsaXN0ZW5lcnNcbiAgICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAgICovXG4gIGNvbXBsZXRlKCkge1xuICAgIHRoaXMuc3Vic1xuICAgICAgLnNwbGljZSgwKVxuICAgICAgLmZvckVhY2goc3ViID0+XG4gICAgICAgIHN1YiAmJiB0eXBlb2Ygc3ViID09PSBcIm9iamVjdFwiICYmIFwiY29tcGxldGVcIiBpbiBzdWIgJiYgc3ViLmNvbXBsZXRlXG4gICAgICAgICAgPyBzdWIuY29tcGxldGUoKVxuICAgICAgICAgIDogbnVsbFxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIGxpc3RlbmVyXG4gICAqIEBwYXJhbSB7SUxpc3RlbmVyfSBsaXN0ZW5lclxuICAgKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gICAqL1xuICBzdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICB0aGlzLnN1YnMucHVzaChsaXN0ZW5lcik7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHRoaXMuc3VicyA9IHRoaXMuc3Vicy5maWx0ZXIoc3ViID0+IHN1YiAhPT0gbGlzdGVuZXIpO1xuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IENoYW5uZWwgfSBmcm9tIFwiLi9DaGFubmVsXCI7XG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IElMaXN0ZW5lclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gbmV4dFxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gZXJyb3JcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNvbXBsZXRlXG4gKi9cblxuLyoqXG4gKiBTdGF0ZSBicm9hZGNhc3RpbmcgZW50aXR5LlxuICogTGlrZSBDaGFubmVsLCBhbGxvd3MgcmVnaXN0ZXJpbmcgZm9yIHVwZGF0ZXMsXG4gKiBidXQgc3Vic2NyaXB0aW9uIGlzIGFsc28gbm90aWZpZWQgaW1tZWRpYXRlbHlcbiAqIG9mIGEgbGFzdCBtZXNzYWdlIHBhc3NlZCB0aHJvdWdoIHRoZSBlbnRpdHlcbiAqL1xuZXhwb3J0IGNsYXNzIFN0YXRlIHtcbiAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICB0aGlzLmxhc3RWYWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuY2hhbm5lbCA9IG5ldyBDaGFubmVsKCk7XG4gIH1cblxuICAvKipcbiAgICogUHVzaCBhIG5ldyBzdGF0ZSB0byBhbGwgYWN0aXZlIGxpc3RlbmVyc1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufCp9IHN0YXRlXG4gICAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAqL1xuICBuZXh0KHZhbHVlKSB7XG4gICAgaWYgKHRoaXMubGFzdFZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjb21wdXRlZFZhbHVlID1cbiAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiID8gdmFsdWUodGhpcy5sYXN0VmFsdWUpIDogdmFsdWU7XG4gICAgdGhpcy5sYXN0VmFsdWUgPSBjb21wdXRlZFZhbHVlO1xuICAgIHRoaXMuY2hhbm5lbC5uZXh0KGNvbXB1dGVkVmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1c2ggYW4gZXJyb3Igc2lnbmFsIHRvIGFsbCBhY3RpdmUgbGlzdGVuZXJzXG4gICAqIEBwYXJhbSB7RXJyb3J9IGVycm9yXG4gICAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAqL1xuICBlcnJvcihlcnJvcikge1xuICAgIHJldHVybiB0aGlzLmNoYW5uZWwuZXJyb3IoZXJyb3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1c2ggYW4gZW5kIHNpZ25hbCB0byBhbGwgYWN0aXZlIGxpc3RlbmVyc1xuICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgKi9cbiAgY29tcGxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbm5lbC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgbGlzdGVuZXJcbiAgICogQHBhcmFtIHtJTGlzdGVuZXJ9IGxpc3RlbmVyXG4gICAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAgICovXG4gIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgIGlmIChsaXN0ZW5lciAmJiB0eXBlb2YgbGlzdGVuZXIgPT09IFwib2JqZWN0XCIgJiYgbGlzdGVuZXIubmV4dCkge1xuICAgICAgbGlzdGVuZXIubmV4dCh0aGlzLmxhc3RWYWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNoYW5uZWwuc3Vic2NyaWJlKGxpc3RlbmVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbGFzdCBwdXNoZWQgc3RhdGVcbiAgICovXG4gIGdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5sYXN0VmFsdWU7XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBtZXJnZSguLi5hcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuICBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gYXJnc1swXTtcbiAgfVxuICBpZiAoYXJncy5sZW5ndGggPT09IDIpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBpZiAoYXJnc1swXSAhPSBudWxsKSB7XG4gICAgICBPYmplY3Qua2V5cyhhcmdzWzBdKS5mb3JFYWNoKGsgPT4ge1xuICAgICAgICBpZiAoYXJnc1swXVtrXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmVzdWx0W2tdID0gYXJnc1swXVtrXTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChhcmdzWzFdICE9IG51bGwpIHtcbiAgICAgIE9iamVjdC5rZXlzKGFyZ3NbMV0pLmZvckVhY2goayA9PiB7XG4gICAgICAgIGlmIChhcmdzWzFdW2tdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXN1bHRba10gPSBhcmdzWzFdW2tdO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICByZXR1cm4gbWVyZ2UoYXJnc1swXSwgbWVyZ2UoLi4uYXJncy5zbGljZSgxKSkpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGt2KGssIHYpIHtcbiAgY29uc3QgcmVzdWx0ID0ge307XG4gIHJlc3VsdFtrXSA9IHY7XG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCJpbXBvcnQgeyBtZXJnZSB9IGZyb20gXCIuL21lcmdlXCI7XG5pbXBvcnQgeyBrdiB9IGZyb20gXCIuL2t2XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRPYmplY3Qoc3ViamVjdCwgaW5zdHJ1Y3Rpb25zKSB7XG4gIGlmIChzdWJqZWN0ID09IG51bGwgJiYgT2JqZWN0LmtleXMoaW5zdHJ1Y3Rpb25zKS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gc3ViamVjdDtcbiAgfVxuXG4gIHJldHVybiBPYmplY3Qua2V5cyhzdWJqZWN0KS5yZWR1Y2UoXG4gICAgKHJlc3VsdCwga2V5KSA9PlxuICAgICAga2V5IGluIGluc3RydWN0aW9uc1xuICAgICAgICA/IG1lcmdlKHJlc3VsdCwga3Yoa2V5LCBpbnN0cnVjdGlvbnNba2V5XShzdWJqZWN0W2tleV0pKSlcbiAgICAgICAgOiBtZXJnZShyZXN1bHQsIGt2KGtleSwgc3ViamVjdFtrZXldKSksXG4gICAge31cbiAgKTtcbn1cbiIsImltcG9ydCB7IG1lcmdlIH0gZnJvbSBcIi4vbWVyZ2VcIjtcbmltcG9ydCB7IGt2IH0gZnJvbSBcIi4va3ZcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZU9iamVjdChzdWJqZWN0KSB7XG4gIGlmIChzdWJqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gc3ViamVjdDtcbiAgfVxuICByZXR1cm4gT2JqZWN0LmtleXMoc3ViamVjdCkucmVkdWNlKFxuICAgIChyZXN1bHQsIGtleSkgPT5cbiAgICAgIHN1YmplY3Rba2V5XSA9PSBudWxsID8gcmVzdWx0IDogbWVyZ2UocmVzdWx0LCBrdihrZXksIHN1YmplY3Rba2V5XSkpLFxuICAgIHt9XG4gICk7XG59XG4iLCJpbXBvcnQgeyBtZXJnZSB9IGZyb20gXCIuL21lcmdlXCI7XG5pbXBvcnQgeyBrdiB9IGZyb20gXCIuL2t2XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvbWl0KHN1YmplY3QsIGRpc2FsbG93ZWQpIHtcbiAgaWYgKHN1YmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiBzdWJqZWN0O1xuICB9XG4gIHJldHVybiBPYmplY3Qua2V5cyhzdWJqZWN0KS5yZWR1Y2UoXG4gICAgKHJlc3VsdCwga2V5KSA9PlxuICAgICAgKGRpc2FsbG93ZWQgfHwgW10pLmluZGV4T2Yoa2V5KSA8IDBcbiAgICAgICAgPyBtZXJnZShyZXN1bHQsIGt2KGtleSwgc3ViamVjdFtrZXldKSlcbiAgICAgICAgOiByZXN1bHQsXG4gICAge31cbiAgKTtcbn1cbiIsImltcG9ydCB7IG1lcmdlIH0gZnJvbSBcIi4vbWVyZ2VcIjtcbmltcG9ydCB7IGt2IH0gZnJvbSBcIi4va3ZcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHBpY2soc3ViamVjdCwgYWxsb3dlZCkge1xuICBpZiAoc3ViamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHN1YmplY3Q7XG4gIH1cbiAgcmV0dXJuIChhbGxvd2VkIHx8IFtdKS5yZWR1Y2UoXG4gICAgKHJlc3VsdCwga2V5KSA9PlxuICAgICAga2V5IGluIHN1YmplY3QgPyBtZXJnZShyZXN1bHQsIGt2KGtleSwgc3ViamVjdFtrZXldKSkgOiByZXN1bHQsXG4gICAge31cbiAgKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiB1bmlxKHN1YmplY3RBLCBzdWJqZWN0Qikge1xuICByZXR1cm4gKHN1YmplY3RBIHx8IFtdKVxuICAgIC5jb25jYXQoc3ViamVjdEIgfHwgW10pXG4gICAgLnJlZHVjZSgociwgaSkgPT4gKHIuaW5kZXhPZihpKSA8IDAgPyByLmNvbmNhdChbaV0pIDogciksIFtdKTtcbn1cbiIsImltcG9ydCB7IHVuaXEgfSBmcm9tIFwiLi91bmlxXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbChzdWJqZWN0QSwgc3ViamVjdEIpIHtcbiAgaWYgKFxuICAgIChzdWJqZWN0QSA9PT0gbnVsbCAmJiBzdWJqZWN0QiA9PT0gbnVsbCkgfHxcbiAgICAoc3ViamVjdEEgPT09IHVuZGVmaW5lZCAmJiBzdWJqZWN0QiA9PT0gdW5kZWZpbmVkKVxuICApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChcbiAgICAoKHN1YmplY3RBID09PSBudWxsIHx8IHN1YmplY3RCID09PSBudWxsKSAmJlxuICAgICAgKHN1YmplY3RBICE9PSBudWxsIHx8IHN1YmplY3RCICE9PSBudWxsKSkgfHxcbiAgICAoKHN1YmplY3RBID09PSB1bmRlZmluZWQgfHwgc3ViamVjdEIgPT09IHVuZGVmaW5lZCkgJiZcbiAgICAgIChzdWJqZWN0QSAhPT0gdW5kZWZpbmVkIHx8IHN1YmplY3RCICE9PSB1bmRlZmluZWQpKVxuICApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodHlwZW9mIHN1YmplY3RBID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBzdWJqZWN0QiA9PT0gXCJvYmplY3RcIikge1xuICAgIGNvbnN0IHN1YmplY3RBS2V5cyA9IE9iamVjdC5rZXlzKHN1YmplY3RBKTtcbiAgICBjb25zdCBzdWJqZWN0QktleXMgPSBPYmplY3Qua2V5cyhzdWJqZWN0Qik7XG4gICAgaWYgKHN1YmplY3RBS2V5cy5sZW5ndGggIT09IHN1YmplY3RCS2V5cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgYWxsS2V5cyA9IHVuaXEoc3ViamVjdEFLZXlzLCBzdWJqZWN0QktleXMpO1xuICAgIGlmIChhbGxLZXlzLmxlbmd0aCAhPT0gc3ViamVjdEFLZXlzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbEtleXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGsgPSBhbGxLZXlzW2ldO1xuICAgICAgaWYgKCFlcXVhbChzdWJqZWN0QVtrXSwgc3ViamVjdEJba10pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gc3ViamVjdEEgPT09IHN1YmplY3RCO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlKGZuLCB0aW1lb3V0KSB7XG4gIGxldCBmb3JjZVVwZGF0ZVRpbWVvdXRUb2tlbiA9IG51bGw7XG4gIHJldHVybiBmdW5jdGlvbiBkZWJvdW5jZWQoLi4uYXJncykge1xuICAgIGNsZWFyVGltZW91dChmb3JjZVVwZGF0ZVRpbWVvdXRUb2tlbik7XG4gICAgZm9yY2VVcGRhdGVUaW1lb3V0VG9rZW4gPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH0sIHRpbWVvdXQpO1xuICB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGZpbmQoc3ViamVjdCwgcHJlZGljYXRlKSB7XG4gIGxldCByZXN1bHQgPSBudWxsO1xuICBpZiAoIShzdWJqZWN0IGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBmaW5kIDFzdCBhcmcgbXVzdCBiZSBBcnJheSwgaXM6ICR7dHlwZW9mIHN1YmplY3R9YCk7XG4gIH1cbiAgc3ViamVjdC5mb3JFYWNoKGkgPT4ge1xuICAgIGlmICghcmVzdWx0ICYmIHByZWRpY2F0ZShpKSkge1xuICAgICAgcmVzdWx0ID0geyB2YWx1ZTogaSB9O1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQgPyByZXN1bHQudmFsdWUgOiB1bmRlZmluZWQ7XG59XG4iLCIvKipcbiAqIFJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZyBhbGwgbnVtYmVycyBiZXR3ZWVuIGFuZCBpbmNsdWRpbmcgYG1pbmAgYW5kIGBtYXhgIGluIGEgZGlzdGFuY2Ugb2YgYHN0ZXBgIGZyb20gZWFjaCBvdGhlclxuICogQHBhcmFtIHtOdW1iZXJ9IG1pblxuICogQHBhcmFtIHtOdW1iZXJ9IG1heFxuICogQHBhcmFtIHtOdW1iZXJ9IHN0ZXBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJhbmdlKG1pbiwgbWF4LCBzdGVwKSB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICBmb3IgKGxldCBpID0gbWluOyBpIDw9IG1heDsgaSArPSBzdGVwKSB7XG4gICAgcmVzdWx0LnB1c2goaSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oLi4uYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGFyZ3NbMF07XG4gIH1cblxuICBpZiAoYXJncy5sZW5ndGggPT09IDIpIHtcbiAgICBjb25zdCBzdWJqZWN0ID0gYXJnc1swXTtcbiAgICBjb25zdCBtb2QgPSBhcmdzWzFdO1xuICAgIE9iamVjdC5rZXlzKG1vZCkuZm9yRWFjaChrID0+IHtcbiAgICAgIHN1YmplY3Rba10gPSBtb2Rba107XG4gICAgfSk7XG4gICAgcmV0dXJuIHN1YmplY3Q7XG4gIH1cblxuICByZXR1cm4gYXNzaWduLmFwcGx5KHRoaXMsIFthc3NpZ24oYXJnc1swXSwgYXJnc1sxXSldLmNvbmNhdChhcmdzLnNsaWNlKDIpKSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZmxhdHRlbihzdWJqZWN0KSB7XG4gIGlmIChzdWJqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gc3ViamVjdDtcbiAgfVxuICByZXR1cm4gW10uY29uY2F0KHN1YmplY3QpLnJlZHVjZSgocmVzdWx0LCBpdGVtKSA9PiByZXN1bHQuY29uY2F0KGl0ZW0pLCBbXSk7XG59XG4iLCJleHBvcnQgeyBmb3JtYXRPYmplY3QgfSBmcm9tIFwiLi9mb3JtYXRPYmplY3RcIjtcbmV4cG9ydCB7IGt2IH0gZnJvbSBcIi4va3ZcIjtcbmV4cG9ydCB7IG1lcmdlIH0gZnJvbSBcIi4vbWVyZ2VcIjtcbmV4cG9ydCB7IG5vcm1hbGl6ZU9iamVjdCB9IGZyb20gXCIuL25vcm1hbGl6ZU9iamVjdFwiO1xuZXhwb3J0IHsgb21pdCB9IGZyb20gXCIuL29taXRcIjtcbmV4cG9ydCB7IHBpY2sgfSBmcm9tIFwiLi9waWNrXCI7XG5leHBvcnQgeyBlcXVhbCB9IGZyb20gXCIuL2VxdWFsXCI7XG5leHBvcnQgeyB1bmlxIH0gZnJvbSBcIi4vdW5pcVwiO1xuZXhwb3J0IHsgZGVib3VuY2UgfSBmcm9tIFwiLi9kZWJvdW5jZVwiO1xuZXhwb3J0IHsgZmluZCB9IGZyb20gXCIuL2ZpbmRcIjtcbmV4cG9ydCB7IHJhbmdlIH0gZnJvbSBcIi4vcmFuZ2VcIjtcbmV4cG9ydCB7IGFzc2lnbiB9IGZyb20gXCIuL2Fzc2lnblwiO1xuZXhwb3J0IHsgZmxhdHRlbiB9IGZyb20gXCIuL2ZsYXR0ZW5cIjtcbiIsImltcG9ydCB7IFRyYW5zZm9ybWF0aW9uLCBVdGlsLCBDb25maWd1cmF0aW9uIH0gZnJvbSBcImNsb3VkaW5hcnktY29yZVwiO1xuaW1wb3J0IHsgZm9ybWF0T2JqZWN0LCBub3JtYWxpemVPYmplY3QsIHBpY2ssIG9taXQgfSBmcm9tIFwiLi4vdXRpbHNcIjtcblxuLyoqIExpc3Qgb2YgYWxsIGNvbmZpZ3VyYXRpb24gZmllbGRzIGFzIHRoZXkgYXJlIG5lZWRlZCBpbiBjb21wb25lbnRzIGF0dHJpYnV0ZXMgKi9cbmV4cG9ydCBjb25zdCBjb25maWd1cmF0aW9uID0gQ29uZmlndXJhdGlvbi5DT05GSUdfUEFSQU1TLm1hcChVdGlsLmNhbWVsQ2FzZSk7XG5cbi8qKiBMaXN0IG9mIGFsbCB0cmFuc2Zvcm1hdGlvbiBmaWVsZHMgYXMgdGhleSBhcmUgbmVlZGVkIGluIGNvbXBvbmVudHMgYXR0cmlidXRlcyAqL1xuZXhwb3J0IGNvbnN0IHRyYW5zZm9ybWF0aW9uID0gVHJhbnNmb3JtYXRpb24uUEFSQU1fTkFNRVMubWFwKFxuICBVdGlsLmNhbWVsQ2FzZVxuKS5maWx0ZXIobmFtZSA9PiBjb25maWd1cmF0aW9uLmluZGV4T2YobmFtZSkgPCAwKTtcblxuLyoqIEV4dHJhY3QgY29uZmlndXJhdGlvbiBvcHRpb25zIGZvciBwcm92aWRlZCBvYmplY3QgKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVDb25maWd1cmF0aW9uKGNmZykge1xuICByZXR1cm4gVXRpbC53aXRoU25ha2VDYXNlS2V5cyhcbiAgICBmb3JtYXRPYmplY3Qobm9ybWFsaXplT2JqZWN0KHBpY2soY2ZnLCBjb25maWd1cmF0aW9uKSksIHtcbiAgICAgIHNlY3VyZTogdiA9PiAodHlwZW9mIHYgPT09IFwiYm9vbGVhblwiID8gdiA6IHYgPT09IFwidHJ1ZVwiKVxuICAgIH0pXG4gICk7XG59XG5cbi8qKiBFeHRyYWN0IHRyYW5zZm9ybWF0aW9uIG9wdGlvbnMgZm9yIHByb3ZpZGVkIG9iamVjdCAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVRyYW5zZm9ybWF0aW9uKGNmZykge1xuICByZXR1cm4gVXRpbC53aXRoU25ha2VDYXNlS2V5cyhub3JtYWxpemVPYmplY3QocGljayhjZmcsIHRyYW5zZm9ybWF0aW9uKSkpO1xufVxuXG4vKiogRXh0cmFjdCBmaWVsZHMgdGhhdCBhcmUgbm90IHVzZWQgZm9yIGNvbmZpZ3VyYXRpb24gbm9yIHRyYW5zZm9ybWF0aW9uIGluIHByb3ZpZGVkIG9iamVjdCAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVJlc3QoY2ZnKSB7XG4gIHJldHVybiBub3JtYWxpemVPYmplY3Qob21pdChjZmcsIHRyYW5zZm9ybWF0aW9uLmNvbmNhdChjb25maWd1cmF0aW9uKSkpO1xufVxuIiwiaW1wb3J0IHsga3YsIG1lcmdlIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5cbi8qKlxuICogaGVscGVyIG1peGluIGZvciBtYXJraW5nXG4gKiB3aGljaCBvZiBvdGhlciBtaXhpbnMgcmVwb3J0IFwicmVhZHlcIiBzdGF0ZVxuICovXG5leHBvcnQgY29uc3QgcmVhZHkgPSB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHsgcmVhZHk6IHt9IH07XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgLyoqXG4gICAgICogUHJvZHVjZXMgYSByZWFkeSBzdGF0ZSAoYm9vbGVhbilcbiAgICAgKiBJZiBhbnkgb2YgcmVnaXN0ZXJlZCByZWFkeSBmbGFncyAob2JqZWN0IHByb3BzKVxuICAgICAqIGFyZSBtYXJrZWQgXCJ0cnVlXCJcbiAgICAgKi9cbiAgICBpc1JlYWR5KCkge1xuICAgICAgY29uc3QgZmxhZ3MgPSBPYmplY3Qua2V5cyh0aGlzLnJlYWR5KTtcblxuICAgICAgaWYgKGZsYWdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmxhZ3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKCF0aGlzLnJlYWR5W2ZsYWdzW2ldXSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBhIHNpbmdsZSBtaXhpbiByZWFkeSBmbGFnIHRvIHRydWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqL1xuICAgIGFkZFJlYWR5Q2hlY2sobmFtZSkge1xuICAgICAgdGhpcy5yZWFkeSA9IG1lcmdlKHRoaXMucmVhZHksIGt2KG5hbWUsIGZhbHNlKSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBTd2l0Y2ggb24gYSBzaW5nbGUgbWl4aW4gcmVhZHkgZmxhZyB0byB0cnVlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKi9cbiAgICBtYXJrUmVhZHlDaGVjayhuYW1lKSB7XG4gICAgICBpZiAoIXRoaXMucmVhZHlbbmFtZV0pIHtcbiAgICAgICAgdGhpcy5yZWFkeSA9IG1lcmdlKHRoaXMucmVhZHksIGt2KG5hbWUsIHRydWUpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG4iLCJpbXBvcnQgeyByZWFkeSB9IGZyb20gXCIuL3JlYWR5XCI7XG5cbi8qKlxuICogQSByZWFkeS1jaGVjayBmb3IgaWYgY29tcG9uZW50XG4gKiBoYXMgYmVlbiBtb3VudGVkLFxuICogc28gaXQgaXMgdHJ1ZSB0aGF0XG4gKiBhbGwgY3VycmVudCBjaGlsZHJlbi1tb2RpZmllciBjb21wb25lbnRzXG4gKiBsaWtlIENsZFRyYW5zZm9ybWF0aW9uXG4gKiBoYWQgYmVlbiBpbml0aWFsaXplZCBhbHJlYWR5XG4gKi9cbmV4cG9ydCBjb25zdCBtb3VudGVkID0ge1xuICBtaXhpbnM6IFtyZWFkeV0sXG5cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLmFkZFJlYWR5Q2hlY2soXCJtb3VudGVkXCIpO1xuXG4gICAgLypcbiAgICAgKiBob2xkIFwicmVhZHlcIiB1bnRpbCBtb3VudGVkIG9ubHkgaW4gY2FzZSBvZlxuICAgICAqIHBvdGVudGlhbCBjaGlsZHJlbi1tb2RpZmllcnNcbiAgICAgKiBub3QgY3JlYXRlZCB5ZXRcbiAgICAgKiBlaXRoZXIgYXMgY2hpbGRyZW4gb2YgdGhpcyBlbGVtZW50XG4gICAgICogb3IgY2hpbGRyZW4gb2YgcGFyZW50IGNvbnRleHRcbiAgICAgKi9cbiAgICBpZiAoXG4gICAgICAhdGhpcy5DbGRQYXJlbnRTdGF0ZSAmJlxuICAgICAgKCF0aGlzLiRzbG90cyB8fCAhdGhpcy4kc2xvdHMuZGVmYXVsdCB8fCAhdGhpcy4kc2xvdHMuZGVmYXVsdC5sZW5ndGgpXG4gICAgKSB7XG4gICAgICB0aGlzLm1hcmtSZWFkeUNoZWNrKFwibW91bnRlZFwiKTtcbiAgICB9XG4gIH0sXG5cbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLm1hcmtSZWFkeUNoZWNrKFwibW91bnRlZFwiKTtcbiAgfVxufTtcbiIsImltcG9ydCB7IFN0YXRlIH0gZnJvbSBcIi4vU3RhdGVcIjtcbmltcG9ydCB7IG1lcmdlIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IElMaXN0ZW5lclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gbmV4dFxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gZXJyb3JcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNvbXBsZXRlXG4gKi9cblxuLyoqXG4gKiBBIGNvbXBsZXggb2JzZXJ2YWJsZSBzdGF0ZSBlbnRpdHlcbiAqIHdoaWNoIGFsbG93cyBzcGF3bmluZyBwYXJ0aWFsIHN0YXRlIGNvbnRhaW5lcnNcbiAqIHRoYXQgY29udGVudHMgYXJlIHRoZW4gcmVhY3RpdmVseSBjb21iaW5lZFxuICogaW4gYW4gb3JkZXIgb2YgY3JlYXRpbmcgdGhvc2Ugc3Bhd25zXG4gKlxuICogRG9lcyBub3QgY29udGFpbiBuZXh0L2Vycm9yL2NvbXBsZXRlIG1ldGhvZHNcbiAqIGFzIHRob3NlIGFyZSBpbiBwYXJ0aWFsIHN0YXRlIGNvbnRhaW5lcnNcbiAqIHdoaWNoIGFyZSB0aGUgb25seSBzb3VyY2Ugb2YgdHJ1dGggLVxuICogdGhlIGNvbWJpbmVkIHN0YXRlIGlzIG9ubHkgYSBjb25jbHVzaW9uXG4gKiBvdmVyIHBhcnRpYWwgc3RhdGVzLlxuICovXG5leHBvcnQgY2xhc3MgQ29tYmluZWRTdGF0ZSB7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvciAqbWF5KiBiZSBwcm92aWRlZCB3aXRoIGEgZnVuY3Rpb25cbiAgICogdGhhdCB3aWxsIGNvbWJpbmUgYWxsIHBhcnRpYWwgc3RhdGVzLlxuICAgKiBPdGhlcndpc2UgaXQnbGwgYXNzdW1lIHRoYXQgYWxsIHBhcnRpYWwgc3RhdGVzIGFyZSBvYmplY3RcbiAgICogYW5kIGNvbWJpbmUgaXQgYnkgb3ZlcnJpZGluZyBwcm9wZXJ0aWVzXG4gICAqIGluIHJlc3VsdCBzdGF0ZSBieSBldmVyeSBuZXh0IHBhcnRpYWwgc3RhdGUgb2JqZWN0XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbXBvc2l0aW9uXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb21wb3NpdGlvbikge1xuICAgIHRoaXMuY2h1bmtlZFN0YXRlID0gbmV3IFN0YXRlKFtdKTtcbiAgICB0aGlzLnNvbGlkU3RhdGUgPSBuZXcgU3RhdGUoe30pO1xuICAgIHRoaXMuY2h1bmtlZFN0YXRlLnN1YnNjcmliZSh7XG4gICAgICBuZXh0OiB2ID0+IHtcbiAgICAgICAgY29uc3QgbmV4dFN1bSA9IChjb21wb3NpdGlvbiB8fCBtZXJnZSkoLi4uKHYgfHwgW10pKTtcbiAgICAgICAgdGhpcy5zb2xpZFN0YXRlLm5leHQobmV4dFN1bSk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGUgPT4gdGhpcy5zb2xpZFN0YXRlLmVycm9yKGUpLFxuICAgICAgY29tcGxldGU6ICgpID0+IHRoaXMuc29saWRTdGF0ZS5jb21wbGV0ZSgpXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBuZXcgcGFydGlhbCBzdGF0ZVxuICAgKiBhbmQgcmV0dXJucyBTdGF0ZSBjbGFzcyB0byByZXByZXNlbnQgaXRcbiAgICogYW5kIHRvIGFsbG93IHRoYXQgc3RhdGUgcGFydCBtb2RpZmljYXRpb25cbiAgICovXG4gIHNwYXduKCkge1xuICAgIGxldCBsYXN0ID0ge307XG4gICAgbGV0IGRpZFN0YXRlUHVzaGVkRW1wdHkgPSBmYWxzZTtcbiAgICBjb25zdCBuZXdTcGF3biA9IG5ldyBTdGF0ZShsYXN0KTtcbiAgICBuZXdTcGF3bi5zdWJzY3JpYmUoe1xuICAgICAgbmV4dDogdiA9PiB7XG4gICAgICAgIGlmICghZGlkU3RhdGVQdXNoZWRFbXB0eSkge1xuICAgICAgICAgIGRpZFN0YXRlUHVzaGVkRW1wdHkgPSB0cnVlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNodW5rZWRTdGF0ZS5uZXh0KGN1cnJlbnRTdGF0ZSA9PlxuICAgICAgICAgIGN1cnJlbnRTdGF0ZS5pbmRleE9mKGxhc3QpID49IDBcbiAgICAgICAgICAgID8gY3VycmVudFN0YXRlLm1hcChjaHVuayA9PiAoY2h1bmsgPT09IGxhc3QgPyB2IDogY2h1bmspKVxuICAgICAgICAgICAgOiBjdXJyZW50U3RhdGUuY29uY2F0KFt2XSlcbiAgICAgICAgKTtcbiAgICAgICAgbGFzdCA9IHY7XG4gICAgICB9LFxuICAgICAgZXJyb3I6ICgpID0+IHtcbiAgICAgICAgdGhpcy5jaHVua2VkU3RhdGUubmV4dChwID0+IHAuZmlsdGVyKGNodW5rID0+IGNodW5rICE9PSBsYXN0KSk7XG4gICAgICB9LFxuICAgICAgY29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgdGhpcy5jaHVua2VkU3RhdGUubmV4dChwID0+IHAuZmlsdGVyKGNodW5rID0+IGNodW5rICE9PSBsYXN0KSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ld1NwYXduO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBjdXJyZW50IGNvbWJpbmVkIHN0YXRlXG4gICAqL1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc29saWRTdGF0ZS5nZXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIGxpc3RlbmVyXG4gICAqIEBwYXJhbSB7SUxpc3RlbmVyfSBsaXN0ZW5lclxuICAgKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gICAqL1xuICBzdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICByZXR1cm4gdGhpcy5zb2xpZFN0YXRlLnN1YnNjcmliZShsaXN0ZW5lcik7XG4gIH1cbn1cbiIsImltcG9ydCB7IG1lcmdlLCBub3JtYWxpemVPYmplY3QgfSBmcm9tIFwiLi4vdXRpbHNcIjtcblxuLyoqIENvbWJpbmVzIG1hbnkgb2JqZWN0c1xuICogeyBwdWJsaWNJZCwgY29uZmlndXJhdGlvbiwgdHJhbnNmb3JtYXRpb24gfVxuICogcHJvdmlkZWQgYXMgYXJndW1lbnRzIGludG8gb25lXG4gKiBAcGFyYW0gIHsuLi57IHB1YmxpY0lkLCBjb25maWd1cmF0aW9uLCB0cmFuc2Zvcm1hdGlvbiB9fSB0cmFuc2Zvcm1hdGlvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVPcHRpb25zKC4uLm9wdGlvbnMpIHtcbiAgY29uc3QgeyBwdWJsaWNJZCB9ID0gbWVyZ2UuYXBwbHkodGhpcywgb3B0aW9ucyk7XG5cbiAgY29uc3QgY29uZmlndXJhdGlvbiA9IG5vcm1hbGl6ZU9iamVjdChcbiAgICBtZXJnZS5hcHBseShcbiAgICAgIHRoaXMsXG4gICAgICBvcHRpb25zXG4gICAgICAgIC5maWx0ZXIoaXNPYmplY3RXaXRoS2V5cylcbiAgICAgICAgLm1hcChfID0+IF8uY29uZmlndXJhdGlvbilcbiAgICAgICAgLmZpbHRlcihpc09iamVjdFdpdGhLZXlzKVxuICAgIClcbiAgKTtcblxuICBjb25zdCB0cmFuc2Zvcm1hdGlvbiA9IG5vcm1hbGl6ZU9iamVjdChcbiAgICBjb21iaW5lVHJhbnNmb3JtYXRpb25zLmFwcGx5KFxuICAgICAgdGhpcyxcbiAgICAgIG9wdGlvbnNcbiAgICAgICAgLmZpbHRlcihpc09iamVjdFdpdGhLZXlzKVxuICAgICAgICAubWFwKF8gPT4gXy50cmFuc2Zvcm1hdGlvbilcbiAgICAgICAgLmZpbHRlcihpc09iamVjdFdpdGhLZXlzKVxuICAgIClcbiAgKTtcblxuICByZXR1cm4gbm9ybWFsaXplT2JqZWN0KHtcbiAgICBwdWJsaWNJZCxcbiAgICBjb25maWd1cmF0aW9uOiBpc09iamVjdFdpdGhLZXlzKGNvbmZpZ3VyYXRpb24pID8gY29uZmlndXJhdGlvbiA6IHVuZGVmaW5lZCxcbiAgICB0cmFuc2Zvcm1hdGlvbjogaXNPYmplY3RXaXRoS2V5cyh0cmFuc2Zvcm1hdGlvbilcbiAgICAgID8gdHJhbnNmb3JtYXRpb25cbiAgICAgIDogdW5kZWZpbmVkXG4gIH0pO1xufVxuXG4vKipcbiAqIENvbWJpbmVzIG1hbnkgdHJhbnNmb3JtYXRpb25zXG4gKiBwcm92aWRlZCBhcyBhcmd1bWVudHNcbiAqIGludG8gb25lXG4gKiBAcGFyYW0gIHsuLi5vYmplY3R9IHRyYW5zZm9ybWF0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZVRyYW5zZm9ybWF0aW9ucyguLi50cmFuc2Zvcm1hdGlvbnMpIHtcbiAgcmV0dXJuIHRyYW5zZm9ybWF0aW9ucy5maWx0ZXIoaXNPYmplY3RXaXRoS2V5cykucmVkdWNlKChyZXN1bHQsIGl0ZW0pID0+IHtcbiAgICBjb25zdCB0cmFuc2Zvcm1hdGlvbiA9IFtdXG4gICAgICAuY29uY2F0KHJlc3VsdC50cmFuc2Zvcm1hdGlvbilcbiAgICAgIC5jb25jYXQoaXRlbS50cmFuc2Zvcm1hdGlvbilcbiAgICAgIC5maWx0ZXIoaXNPYmplY3RXaXRoS2V5cyk7XG4gICAgcmV0dXJuIG1lcmdlKFxuICAgICAgcmVzdWx0LFxuICAgICAgaXRlbSxcbiAgICAgIHRyYW5zZm9ybWF0aW9uLmxlbmd0aCA9PT0gMCA/IHt9IDogeyB0cmFuc2Zvcm1hdGlvbiB9XG4gICAgKTtcbiAgfSwge30pO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdFdpdGhLZXlzKHN1YmplY3QpIHtcbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygc3ViamVjdCA9PT0gXCJvYmplY3RcIiAmJiBzdWJqZWN0ICYmIE9iamVjdC5rZXlzKHN1YmplY3QpLmxlbmd0aCA+IDBcbiAgKTtcbn1cbiIsImltcG9ydCB7IENvbWJpbmVkU3RhdGUgfSBmcm9tIFwiLi4vcmVhY3RpdmUvQ29tYmluZWRTdGF0ZVwiO1xuaW1wb3J0IHsgY29tYmluZU9wdGlvbnMgfSBmcm9tIFwiLi4vaGVscGVycy9jb21iaW5lT3B0aW9uc1wiO1xuaW1wb3J0IHsgcmVhZHkgfSBmcm9tIFwiLi9yZWFkeVwiO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjb21wb25lbnRzIG93biBDb21iaW5lZFN0YXRlXG4gKiBhbmQgcG9zdHMgaXRzIGNoYW5nZXNcbiAqIGludG8gY29tcG9uZW50cyBkYXRhXG4gKi9cbmV4cG9ydCBjb25zdCBjbGRBdHRycyA9IHtcbiAgbWl4aW5zOiBbcmVhZHldLFxuXG4gIHByb3ZpZGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIENsZFBhcmVudFN0YXRlOiB0aGlzLmNsZEF0dHJzU3RhdGVcbiAgICB9O1xuICB9LFxuXG4gIGRhdGEoKSB7XG4gICAgY29uc3QgY2xkQXR0cnNTdGF0ZSA9IG5ldyBDb21iaW5lZFN0YXRlKGNvbWJpbmVPcHRpb25zKTtcbiAgICByZXR1cm4ge1xuICAgICAgY2xkQXR0cnNTdGF0ZSxcbiAgICAgIGNsZEF0dHJzOiBjbGRBdHRyc1N0YXRlLmdldCgpXG4gICAgfTtcbiAgfSxcblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuYWRkUmVhZHlDaGVjayhcImNsZEF0dHJzXCIpO1xuICAgIHRoaXMuY2xkQXR0cnNTdGF0ZVN1YiA9IHRoaXMuY2xkQXR0cnNTdGF0ZS5zdWJzY3JpYmUoe1xuICAgICAgbmV4dDogdiA9PiB7XG4gICAgICAgIHRoaXMuY2xkQXR0cnMgPSB2O1xuICAgICAgICB0aGlzLm1hcmtSZWFkeUNoZWNrKFwiY2xkQXR0cnNcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgZGVzdHJveWVkKCkge1xuICAgIHRoaXMuY2xkQXR0cnNTdGF0ZVN1YigpO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgZXF1YWwgfSBmcm9tIFwiLi4vdXRpbHNcIjtcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZUNvbmZpZ3VyYXRpb24sXG4gIG5vcm1hbGl6ZVRyYW5zZm9ybWF0aW9uXG59IGZyb20gXCIuLi9oZWxwZXJzL2F0dHJpYnV0ZXNcIjtcbmltcG9ydCB7IGNsZEF0dHJzIH0gZnJvbSBcIi4vY2xkQXR0cnNcIjtcbmltcG9ydCB7IGNvbWJpbmVPcHRpb25zIH0gZnJvbSBcIi4uL2hlbHBlcnMvY29tYmluZU9wdGlvbnNcIjtcblxuLyoqXG4gKiBJbiBvcmRlciB0byBtYWludGFpbiBtZXJnaW5nIG9yZGVyXG4gKiBvZiBjb25maWcrdHJhbnNmb3JtYXRpb24gc291cmNlcyAoY29udGV4dCtvd24rbW9kaWZpZXJzKVxuICogY3JlYXRlIGEgc3ViLVN0YXRlXG4gKiBvZiBjb21wb25lbnRzIG1haW4gQ29tYmluZVN0YXRlIGluc3RhbmNlXG4gKiBhbmQgc3VibWl0IGNvbXBvbmVudHMgY29uZmlnK3RyYW5zZm9ybWF0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBjbGRBdHRyc093bmVkID0ge1xuICBtaXhpbnM6IFtjbGRBdHRyc10sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBhdHRyaWJ1dGVzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJGF0dHJzO1xuICAgIH0sXG4gICAgY2xkQXR0cmlidXRlcygpIHtcbiAgICAgIGNvbnN0IGNvbmZpZ3VyYXRpb24gPSBub3JtYWxpemVDb25maWd1cmF0aW9uKHRoaXMuYXR0cmlidXRlcyk7XG4gICAgICBjb25zdCB0cmFuc2Zvcm1hdGlvbiA9IG5vcm1hbGl6ZVRyYW5zZm9ybWF0aW9uKHRoaXMuYXR0cmlidXRlcyk7XG4gICAgICByZXR1cm4gY29tYmluZU9wdGlvbnMoe1xuICAgICAgICBwdWJsaWNJZDogdGhpcy5hdHRyaWJ1dGVzLnB1YmxpY0lkLFxuICAgICAgICBjb25maWd1cmF0aW9uLFxuICAgICAgICB0cmFuc2Zvcm1hdGlvblxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5tYXJrUmVhZHlDaGVjayhcImNsZEF0dHJzT3duZWRcIik7XG5cbiAgICB0aGlzLm93blN0YXRlID0gdGhpcy5jbGRBdHRyc1N0YXRlLnNwYXduKCk7XG4gICAgdGhpcy5vd25TdGF0ZS5uZXh0KHRoaXMuY2xkQXR0cmlidXRlcyk7XG4gIH0sXG5cbiAgdXBkYXRlZCgpIHtcbiAgICBjb25zdCBwcmV2ID0gdGhpcy5vd25TdGF0ZS5nZXQoKTtcbiAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5jbGRBdHRyaWJ1dGVzO1xuICAgIGlmICghZXF1YWwocHJldiwgY3VycmVudCkpIHtcbiAgICAgIHRoaXMub3duU3RhdGUubmV4dChjdXJyZW50KTtcbiAgICB9XG4gIH0sXG5cbiAgZGVzdHJveWVkKCkge1xuICAgIHRoaXMub3duU3RhdGUuY29tcGxldGUoKTtcbiAgfVxufTtcbiIsIi8qKlxuICogSW5qZWN0cyBjbG91ZGluYXJ5IHBhcmVudCBTdGF0ZSAoc3RhdGVmdWwgc3RyZWFtKVxuICovXG5leHBvcnQgY29uc3QgY2xkQ2hpbGQgPSB7XG4gIGluamVjdDoge1xuICAgIENsZFBhcmVudFN0YXRlOiB7XG4gICAgICBkZWZhdWx0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5DbGRHbG9iYWxDb250ZXh0U3RhdGUgPyB0aGlzLkNsZEdsb2JhbENvbnRleHRTdGF0ZSA6IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuIiwiaW1wb3J0IHsgY2xkQXR0cnMgfSBmcm9tIFwiLi9jbGRBdHRyc1wiO1xuaW1wb3J0IHsgY2xkQ2hpbGQgfSBmcm9tIFwiLi9jbGRDaGlsZFwiO1xuXG4vKipcbiAqIFRpZXMgY2xvdWRpbmFyeSBwYXJlbnQgZWxlbWVudCBzdGF0ZVxuICogd2l0aCBjb21wb25lbnRzIG93blxuICovXG5leHBvcnQgY29uc3QgY2xkQXR0cnNJbmhlcml0ZWQgPSB7XG4gIG1peGluczogW2NsZEF0dHJzLCBjbGRDaGlsZF0sXG5cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLmFkZFJlYWR5Q2hlY2soXCJjbGRBdHRyc093bmVkXCIpO1xuXG4gICAgaWYgKHRoaXMuQ2xkUGFyZW50U3RhdGUpIHtcbiAgICAgIHRoaXMuY29udGV4dFN0YXRlID0gdGhpcy5jbGRBdHRyc1N0YXRlLnNwYXduKCk7XG4gICAgICB0aGlzLmNvbnRleHRTdGF0ZVN1YiA9IHRoaXMuQ2xkUGFyZW50U3RhdGUuc3Vic2NyaWJlKHtcbiAgICAgICAgbmV4dDogdiA9PiB7XG4gICAgICAgICAgdGhpcy5jb250ZXh0U3RhdGUubmV4dCh2KTtcbiAgICAgICAgICB0aGlzLm1hcmtSZWFkeUNoZWNrKFwiY2xkQXR0cnNPd25lZFwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWFya1JlYWR5Q2hlY2soXCJjbGRBdHRyc093bmVkXCIpO1xuICAgIH1cbiAgfSxcblxuICBkZXN0cm95ZWQoKSB7XG4gICAgaWYgKHRoaXMuY29udGV4dFN0YXRlU3ViKSB7XG4gICAgICB0aGlzLmNvbnRleHRTdGF0ZVN1YigpO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb250ZXh0U3RhdGUpIHtcbiAgICAgIHRoaXMuY29udGV4dFN0YXRlLmNvbXBsZXRlKCk7XG4gICAgfVxuICB9XG59O1xuIiwiaW1wb3J0IHsgbm9ybWFsaXplUmVzdCB9IGZyb20gXCIuLi9oZWxwZXJzL2F0dHJpYnV0ZXNcIjtcbmltcG9ydCB7IG1vdW50ZWQgfSBmcm9tIFwiLi4vbWl4aW5zL21vdW50ZWRcIjtcbmltcG9ydCB7IGNsZEF0dHJzT3duZWQgfSBmcm9tIFwiLi4vbWl4aW5zL2NsZEF0dHJzT3duZWRcIjtcbmltcG9ydCB7IGNsZEF0dHJzSW5oZXJpdGVkIH0gZnJvbSBcIi4uL21peGlucy9jbGRBdHRyc0luaGVyaXRlZFwiO1xuXG4vKipcbiAqIENsb3VkaW5hcnkgY29udGV4dCBwcm92aWRpbmcgZWxlbWVudFxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiQ2xkQ29udGV4dFwiLFxuICByZW5kZXIoaCkge1xuICAgIHJldHVybiBoKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHRoaXMuaHRtbEF0dHJpYnV0ZXMsXG4gICAgICB0aGlzLiRzbG90cyA/IHRoaXMuJHNsb3RzLmRlZmF1bHQgOiBudWxsXG4gICAgKTtcbiAgfSxcbiAgaW5oZXJpdEF0dHJzOiBmYWxzZSxcbiAgbWl4aW5zOiBbbW91bnRlZCwgY2xkQXR0cnNJbmhlcml0ZWQsIGNsZEF0dHJzT3duZWRdLFxuICBwcm9wczoge30sXG4gIGNvbXB1dGVkOiB7XG4gICAgaHRtbEF0dHJpYnV0ZXMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjbGFzczogXCJjbGQtY29udGV4dFwiLFxuICAgICAgICBhdHRyczogbm9ybWFsaXplUmVzdCh0aGlzLiRhdHRycylcbiAgICAgIH07XG4gICAgfVxuICB9XG59O1xuIiwiaW1wb3J0IHsgZmluZCB9IGZyb20gXCIuLi91dGlsc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZmluZEluVHJhbnNmb3JtYXRpb25zKHRyYW5zZm9ybWF0aW9ucywgcHJlZGljYXRlKSB7XG4gIGlmICghdHJhbnNmb3JtYXRpb25zKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICByZXR1cm4gZmluZChcbiAgICBbXS5jb25jYXQodHJhbnNmb3JtYXRpb25zKS5jb25jYXQodHJhbnNmb3JtYXRpb25zLnRyYW5zZm9ybWF0aW9uIHx8IFtdKSxcbiAgICBwcmVkaWNhdGVcbiAgKTtcbn1cbiIsIi8qKlxuICogTm9ybWFsaXplcyBgYnJlYWtwb2ludGAgY29tcG9uZW50IGF0dHJpYnV0ZSB0byBhbiBhcnJheSBvZiBudW1iZXJzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufEFycmF5fFN0cmluZ30gdmFsdWVPckdldHRlclxuICovXG5leHBvcnQgZnVuY3Rpb24gZXZhbEJyZWFrcG9pbnRzKHZhbHVlT3JHZXR0ZXIpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZU9yR2V0dGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4gdmFsdWVPckdldHRlcigpO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWVPckdldHRlciA9PT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBKU09OLnBhcnNlKFxuICAgICAgKHZhbHVlT3JHZXR0ZXIuc2xpY2UoMCwgMSkgPT09IFwiW1wiID8gXCJcIiA6IFwiW1wiKSArXG4gICAgICAgIHZhbHVlT3JHZXR0ZXIgK1xuICAgICAgICAodmFsdWVPckdldHRlci5zbGljZSgwLCAxKSA9PT0gXCJdXCIgPyBcIlwiIDogXCJdXCIpXG4gICAgKTtcbiAgfVxuICByZXR1cm4gdmFsdWVPckdldHRlcjtcbn1cbiIsIi8qKiBHZW5lcmF0ZSBEUFIgdHJhbnNmb3JtYXRpb24gaWYgRFBSIGluZm9ybWF0aW9uIGlzIGF2YWlsYWJsZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERQUkF0dHIoKSB7XG4gIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIFwiZGV2aWNlUGl4ZWxSYXRpb1wiIGluIHdpbmRvd1xuICAgID8geyBkcHI6IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIH1cbiAgICA6IHt9O1xufVxuIiwiLyoqXG4gKiBGaW5kcyBhIG51bWJlciBpbiBicmVha3BvaW50cyBhcnJheVxuICogdGhhdCBwcm92aWRlZCBhIHN1Z2dlc3Rpb25cbiAqIHF1YWxpZmllcyB0aGUgbW9zdCB0byBiZSB1c2VkIGFzIGEgdmFsdWVcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gc3RvcHNcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZmluZEJyZWFrcG9pbnQoc3RvcHMsIHZhbHVlKSB7XG4gIGlmIChzdG9wcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHN0b3BzXG4gICAgLmNvbmNhdChbXSlcbiAgICAuc29ydCgoYSwgYikgPT4gYSAtIGIpXG4gICAgLmZpbHRlcihzdG9wID0+IHN0b3AgPj0gdmFsdWUpXG4gICAgLmNvbmNhdChzdG9wc1swXSlbMF07XG59XG4iLCJpbXBvcnQgeyBtZXJnZSB9IGZyb20gXCIuLi91dGlsc1wiO1xuaW1wb3J0IHsgZ2V0RFBSQXR0ciB9IGZyb20gXCIuL2dldERQUkF0dHJcIjtcbmltcG9ydCB7IGZpbmRCcmVha3BvaW50IH0gZnJvbSBcIi4vZmluZEJyZWFrcG9pbnRcIjtcbi8qKlxuICogQmFzZWQgYW4gc2VsZWN0ZWQgbW9kZVxuICogYW5kIGJyZWFrcG9pbnRzIHJhbmdlXG4gKiBnZW5lcmF0ZXMgc2l6ZSB0cmFuc2Zvcm1hdGlvbnNcbiAqIEBwYXJhbSB7J2ZpbGwnfCd3aWR0aCd8J2hlaWdodCd8J25vbmUnfSBtb2RlXG4gKiBAcGFyYW0ge29iamVjdH0gc2l6ZVxuICogQHBhcmFtIHthcnJheX0gYnJlYWtwb2ludHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFJlc2l6ZVRyYW5zZm9ybWF0aW9uKG1vZGUsIHNpemUsIGJyZWFrcG9pbnRzKSB7XG4gIHN3aXRjaCAobW9kZSkge1xuICAgIGNhc2UgXCJmaWxsXCI6XG4gICAgICByZXR1cm4gbWVyZ2UoZ2V0RFBSQXR0cigpLCB7XG4gICAgICAgIGNyb3A6IFwiY3JvcFwiLFxuICAgICAgICB3aWR0aDogc2l6ZVxuICAgICAgICAgID8gTWF0aC5mbG9vcihcbiAgICAgICAgICAgICAgYnJlYWtwb2ludHMgPyBmaW5kQnJlYWtwb2ludChicmVha3BvaW50cywgc2l6ZS53aWR0aCkgOiBzaXplLndpZHRoXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiAwLFxuICAgICAgICBoZWlnaHQ6IHNpemVcbiAgICAgICAgICA/IE1hdGguZmxvb3IoXG4gICAgICAgICAgICAgIGJyZWFrcG9pbnRzXG4gICAgICAgICAgICAgICAgPyBmaW5kQnJlYWtwb2ludChicmVha3BvaW50cywgc2l6ZS5oZWlnaHQpXG4gICAgICAgICAgICAgICAgOiBzaXplLmhlaWdodFxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogMFxuICAgICAgfSk7XG5cbiAgICBjYXNlIFwid2lkdGhcIjpcbiAgICAgIHJldHVybiBtZXJnZShnZXREUFJBdHRyKCksIHtcbiAgICAgICAgY3JvcDogXCJzY2FsZVwiLFxuICAgICAgICB3aWR0aDogc2l6ZVxuICAgICAgICAgID8gTWF0aC5mbG9vcihcbiAgICAgICAgICAgICAgYnJlYWtwb2ludHMgPyBmaW5kQnJlYWtwb2ludChicmVha3BvaW50cywgc2l6ZS53aWR0aCkgOiBzaXplLndpZHRoXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiAwXG4gICAgICB9KTtcblxuICAgIGNhc2UgXCJoZWlnaHRcIjpcbiAgICAgIHJldHVybiBtZXJnZShnZXREUFJBdHRyKCksIHtcbiAgICAgICAgY3JvcDogXCJzY2FsZVwiLFxuICAgICAgICBoZWlnaHQ6IHNpemVcbiAgICAgICAgICA/IE1hdGguZmxvb3IoXG4gICAgICAgICAgICAgIGJyZWFrcG9pbnRzXG4gICAgICAgICAgICAgICAgPyBmaW5kQnJlYWtwb2ludChicmVha3BvaW50cywgc2l6ZS5oZWlnaHQpXG4gICAgICAgICAgICAgICAgOiBzaXplLmhlaWdodFxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogMFxuICAgICAgfSk7XG5cbiAgICBjYXNlIFwibm9uZVwiOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ2xvdWRpbmFyeSB9IGZyb20gXCJjbG91ZGluYXJ5LWNvcmVcIjtcbmltcG9ydCB7IGNvbWJpbmVPcHRpb25zIH0gZnJvbSBcIi4vY29tYmluZU9wdGlvbnNcIjtcblxuLyoqIEdldCBtZWRpYSBVUkwgd2l0aCBzb21lIHRyYW5zZm9ybWF0aW9uc1xuICogdGhhdCB3aWxsIG1ha2UgdGhlIGltYWdlIGxpZ2h0ZXJcbiAqIHNvIGl0IGNhbiBzZXJ2ZSBhcyBhIHBsYWNlaG9sZGVyXG4gKiBmb3IgYW4gYWN0dWFsIGltYWdlXG4gKlxuICogQHBhcmFtIHsnbHFpcCd8J2NvbG9yJ3wncGl4ZWxhdGUnfSBtb2RlIEhvdyBzYXZpbmdzIHNob3VsZCBiZSBtYWRlXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBbGwgY3VycmVudGx5IGdhdGhlcmVkIG9wdGlvbnMgb2YgdGhlIHJlc291cmNlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFBsYWNlaG9sZGVyVVJMKG1vZGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgcGxhY2Vob2xkZXJPcHRpb25zID0gY29tYmluZU9wdGlvbnMoXG4gICAge1xuICAgICAgbHFpcDoge1xuICAgICAgICB0cmFuc2Zvcm1hdGlvbjoge1xuICAgICAgICAgIHRyYW5zZm9ybWF0aW9uOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHZhcmlhYmxlczogW1tcIiRuaFwiLCBcImloXCJdLCBbXCIkbndcIiwgXCJpd1wiXV0sXG4gICAgICAgICAgICAgIGNyb3A6IFwic2NhbGVcIixcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMjBcIixcbiAgICAgICAgICAgICAgcXVhbGl0eTogXCJhdXRvXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IGNyb3A6IFwic2NhbGVcIiwgd2lkdGg6IFwiJG53XCIsIGhlaWdodDogXCIkbmhcIiB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgdHJhbnNmb3JtYXRpb246IHtcbiAgICAgICAgICB0cmFuc2Zvcm1hdGlvbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB2YXJpYWJsZXM6IFtbXCIkbmhcIiwgXCJpaFwiXSwgW1wiJG53XCIsIFwiaXdcIl1dLFxuICAgICAgICAgICAgICBjcm9wOiBcInNjYWxlXCIsXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjFcIixcbiAgICAgICAgICAgICAgcXVhbGl0eTogXCIxXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IGNyb3A6IFwic2NhbGVcIiwgd2lkdGg6IFwiJG53XCIsIGhlaWdodDogXCIkbmhcIiB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcGl4ZWxhdGU6IHtcbiAgICAgICAgdHJhbnNmb3JtYXRpb246IHtcbiAgICAgICAgICB0cmFuc2Zvcm1hdGlvbjogW3sgZWZmZWN0OiBcInBpeGVsYXRlOjEwMFwiIH1dXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9W21vZGVdLFxuICAgIG9wdGlvbnNcbiAgKTtcblxuICByZXR1cm4gQ2xvdWRpbmFyeS5uZXcocGxhY2Vob2xkZXJPcHRpb25zLmNvbmZpZ3VyYXRpb24pLnVybChcbiAgICBwbGFjZWhvbGRlck9wdGlvbnMucHVibGljSWQsXG4gICAgcGxhY2Vob2xkZXJPcHRpb25zLnRyYW5zZm9ybWF0aW9uXG4gICk7XG59XG4iLCJpbXBvcnQgeyByZWFkeSB9IGZyb20gXCIuL3JlYWR5XCI7XG5pbXBvcnQgeyBlcXVhbCwgcGljaywgZGVib3VuY2UgfSBmcm9tIFwiLi4vdXRpbHNcIjtcblxuLyoqXG4gKiBJZiBuZWNlc3NhcnkgcG9zdHMgcm9vdCBlbGVtZW50XG4gKiBzaXplIGluZm9ybWF0aW9uXG4gKiBpbnRvIGNvbXBvbmVudHMgZGF0YVxuICovXG5leHBvcnQgY29uc3Qgc2l6ZSA9IHtcbiAgbWl4aW5zOiBbcmVhZHldLFxuXG4gIHByb3BzOiB7fSxcblxuICBkYXRhKCkge1xuICAgIHJldHVybiB7IHNpemU6IG51bGwgfTtcbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIC8qIHNob3VsZCBiZSBvdmVycmlkZW4gKi9cbiAgICBzaG91bGRNZWFzdXJlU2l6ZSgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sXG5cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLmFkZFJlYWR5Q2hlY2soXCJzaXplXCIpO1xuICAgIGZpeC5jYWxsKHRoaXMpO1xuICB9LFxuXG4gIHVwZGF0ZWQoKSB7XG4gICAgZml4LmNhbGwodGhpcyk7XG4gIH0sXG5cbiAgbW91bnRlZCgpIHtcbiAgICBmaXguY2FsbCh0aGlzKTtcbiAgfSxcblxuICBkZXN0cm95ZWQoKSB7XG4gICAgaWYgKHRoaXMuY2FuY2VsU2l6ZUxpc3RlbmVyKSB7XG4gICAgICB0aGlzLmNhbmNlbFNpemVMaXN0ZW5lcigpO1xuICAgIH1cbiAgfVxufTtcblxuZnVuY3Rpb24gZml4KCkge1xuICBpZiAodGhpcy5zaG91bGRNZWFzdXJlU2l6ZSkge1xuICAgIGlmICh0aGlzLiRlbCAmJiAhdGhpcy5jYW5jZWxTaXplTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuY2FuY2VsU2l6ZUxpc3RlbmVyID0gd2F0Y2hFbGVtZW50U2l6ZSh0aGlzLiRlbCwgbWVhc3VyZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50U2l6ZSA9IHBpY2sodGhpcy5zaXplLCBbXCJ3aWR0aFwiLCBcImhlaWdodFwiXSk7XG4gICAgICAgIGNvbnN0IG5leHRTaXplID0gcGljayhtZWFzdXJlbWVudCwgW1wid2lkdGhcIiwgXCJoZWlnaHRcIl0pO1xuICAgICAgICBpZiAoIWVxdWFsKGN1cnJlbnRTaXplLCBuZXh0U2l6ZSkpIHtcbiAgICAgICAgICB0aGlzLnNpemUgPSBuZXh0U2l6ZTtcbiAgICAgICAgICB0aGlzLm1hcmtSZWFkeUNoZWNrKFwic2l6ZVwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRoaXMubWFya1JlYWR5Q2hlY2soXCJzaXplXCIpO1xuICAgIGlmICh0aGlzLmNhbmNlbFNpemVMaXN0ZW5lcikge1xuICAgICAgdGhpcy5jYW5jZWxTaXplTGlzdGVuZXIoKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDYWxsIGJhY2sgYSBwcm92aWRlZCBmdW5jdGlvblxuICogd2hlbmV2ZXIgZWxlbWVudCBjaGFuZ2VkIGl0J3Mgc2l6ZVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdhdGNoRWxlbWVudFNpemUoZWxlbWVudCwgY2IpIHtcbiAgY29uc3QgZGVsYXllZENhbGxiYWNrID0gZGVib3VuY2UoY2IsIDE1MCk7XG4gIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcblxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikge1xuICAgIGlmIChcIlJlc2l6ZU9ic2VydmVyXCIgaW4gd2luZG93KSB7XG4gICAgICBjb25zdCByZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcihlbnRyaWVzID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGVudHJ5ID0gZW50cmllc1tpXTsgaSA8IGVudHJpZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBkZWxheWVkQ2FsbGJhY2socGljayhlbnRyeS5jb250ZW50UmVjdCwgW1wid2lkdGhcIiwgXCJoZWlnaHRcIl0pKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXNpemVPYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICByZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBoYW5kbGVXaW5kb3dSZXNpemUgPSAoKSA9PiB7XG4gICAgICBkZWxheWVkQ2FsbGJhY2soXG4gICAgICAgIHBpY2soZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgW1wid2lkdGhcIiwgXCJoZWlnaHRcIl0pXG4gICAgICApO1xuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlV2luZG93UmVzaXplKTtcbiAgICBoYW5kbGVXaW5kb3dSZXNpemUoKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlV2luZG93UmVzaXplKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiAoKSA9PiB7fTtcbn1cbiIsImltcG9ydCB7IHJlYWR5IH0gZnJvbSBcIi4vcmVhZHlcIjtcblxuLyoqXG4gKiBJZiBuZWNlc3Nhcnkgd2F0Y2hlcyBmb3Igcm9vdCBlbGVtZW50cyB2aXNpYmlsaXR5XG4gKiBhbmQgcG9zdHMgdGhlIHJlc3VsdCB0byBjb21wb25lbnRzIGRhdGFcbiAqL1xuZXhwb3J0IGNvbnN0IGxhenkgPSB7XG4gIG1peGluczogW3JlYWR5XSxcblxuICBwcm9wczoge1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdG8gb25seSBsb2FkIHRoZSBhc3NldCB3aGVuIGl0IG5lZWRzIHRvIGJlIGRpc3BsYXllZCBpbnN0ZWFkIG9mIHdoZW4gdGhlIHBhZ2UgZmlyc3QgbG9hZHMuXG4gICAgICovXG4gICAgbGF6eToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfVxuICB9LFxuXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHsgdmlzaWJsZTogZmFsc2UgfTtcbiAgfSxcblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMubWFya1JlYWR5Q2hlY2soXCJsYXp5XCIpO1xuICAgIGZpeC5jYWxsKHRoaXMpO1xuICB9LFxuXG4gIG1vdW50ZWQoKSB7XG4gICAgZml4LmNhbGwodGhpcyk7XG4gIH0sXG5cbiAgdXBkYXRlZCgpIHtcbiAgICBmaXguY2FsbCh0aGlzKTtcbiAgfSxcblxuICBkZXN0cm95ZWQoKSB7XG4gICAgaWYgKHRoaXMuY2FuY2VsVmlzaWJpbGl0eUxpc3RlbmVyKSB7XG4gICAgICB0aGlzLmNhbmNlbFZpc2liaWxpdHlMaXN0ZW5lcigpO1xuICAgIH1cbiAgfVxufTtcblxuZnVuY3Rpb24gZml4KCkge1xuICBpZiAodGhpcy5sYXp5KSB7XG4gICAgaWYgKHRoaXMuJGVsICYmICF0aGlzLmNhbmNlbFZpc2liaWxpdHlMaXN0ZW5lcikge1xuICAgICAgdGhpcy5jYW5jZWxWaXNpYmlsaXR5TGlzdGVuZXIgPSB3YXRjaEVsZW1lbnRWaXNpYmlsaXR5KFxuICAgICAgICB0aGlzLiRlbCxcbiAgICAgICAgdmlzaWJsZSA9PiB7XG4gICAgICAgICAgdGhpcy52aXNpYmxlID0gdGhpcy52aXNpYmxlIHx8IHZpc2libGU7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgaWYgKHRoaXMuY2FuY2VsVmlzaWJpbGl0eUxpc3RlbmVyKSB7XG4gICAgICBjb25zdCB7IGNhbmNlbFZpc2liaWxpdHlMaXN0ZW5lciB9ID0gdGhpcztcbiAgICAgIHRoaXMuY2FuY2VsVmlzaWJpbGl0eUxpc3RlbmVyID0gbnVsbDtcbiAgICAgIGNhbmNlbFZpc2liaWxpdHlMaXN0ZW5lcigpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB3YXRjaEVsZW1lbnRWaXNpYmlsaXR5KGVsZW1lbnQsIGxpc3RlbmVyKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiICYmIFwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcIiBpbiB3aW5kb3cpIHtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAgIGVudHJpZXMgPT4ge1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICAgIGlmIChlbnRyeS50YXJnZXQgPT09IGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyKGVudHJ5LmlzSW50ZXJzZWN0aW5nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIHsgdGhyZXNob2xkOiBbMCwgMC4wMV0gfVxuICAgICk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH07XG4gIH1cblxuICBsaXN0ZW5lcih0cnVlKTtcbiAgcmV0dXJuIG5vb3A7XG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuIiwiaW1wb3J0IHsgQ2xvdWRpbmFyeSwgVHJhbnNmb3JtYXRpb24gfSBmcm9tIFwiY2xvdWRpbmFyeS1jb3JlXCI7XG5pbXBvcnQgeyBtZXJnZSwgcmFuZ2UgfSBmcm9tIFwiLi4vdXRpbHNcIjtcbmltcG9ydCB7IGZpbmRJblRyYW5zZm9ybWF0aW9ucyB9IGZyb20gXCIuLi9oZWxwZXJzL2ZpbmRJblRyYW5zZm9ybWF0aW9uc1wiO1xuaW1wb3J0IHsgbm9ybWFsaXplUmVzdCB9IGZyb20gXCIuLi9oZWxwZXJzL2F0dHJpYnV0ZXNcIjtcbmltcG9ydCB7IGV2YWxCcmVha3BvaW50cyB9IGZyb20gXCIuLi9oZWxwZXJzL2V2YWxCcmVha3BvaW50c1wiO1xuaW1wb3J0IHsgZ2V0UmVzaXplVHJhbnNmb3JtYXRpb24gfSBmcm9tIFwiLi4vaGVscGVycy9nZXRSZXNpemVUcmFuc2Zvcm1hdGlvblwiO1xuaW1wb3J0IHsgZ2V0UGxhY2Vob2xkZXJVUkwgfSBmcm9tIFwiLi4vaGVscGVycy9nZXRQbGFjZWhvbGRlclVSTFwiO1xuaW1wb3J0IHsgY29tYmluZU9wdGlvbnMgfSBmcm9tIFwiLi4vaGVscGVycy9jb21iaW5lT3B0aW9uc1wiO1xuXG5pbXBvcnQgeyByZWFkeSB9IGZyb20gXCIuLi9taXhpbnMvcmVhZHlcIjtcbmltcG9ydCB7IHNpemUgfSBmcm9tIFwiLi4vbWl4aW5zL3NpemVcIjtcbmltcG9ydCB7IG1vdW50ZWQgfSBmcm9tIFwiLi4vbWl4aW5zL21vdW50ZWRcIjtcbmltcG9ydCB7IGNsZEF0dHJzSW5oZXJpdGVkIH0gZnJvbSBcIi4uL21peGlucy9jbGRBdHRyc0luaGVyaXRlZFwiO1xuaW1wb3J0IHsgY2xkQXR0cnNPd25lZCB9IGZyb20gXCIuLi9taXhpbnMvY2xkQXR0cnNPd25lZFwiO1xuaW1wb3J0IHsgbGF6eSB9IGZyb20gXCIuLi9taXhpbnMvbGF6eVwiO1xuXG4vKipcbiAqIERlbGl2ZXIgaW1hZ2VzIGFuZCBzcGVjaWZ5IGltYWdlIHRyYW5zZm9ybWF0aW9ucyB1c2luZyB0aGUgY2xkLWltYWdlIChDbGRJbWFnZSkgY29tcG9uZW50LFxuICogd2hpY2ggYXV0b21hdGljYWxseSBnZW5lcmF0ZXMgYW4gYDxpbWc+YCB0YWcgaW5jbHVkaW5nIHRoZSBkeW5hbWljIFVSTCBvZiB0aGUgaW1hZ2Ugc291cmNlLlxuICpcbiAqXG4gKiBZb3UgY2FuIG9wdGlvbmFsbHkgaW5jbHVkZSBbY2xkLXRyYW5zZm9ybWF0aW9uXSgjY2xkdHJhbnNmb3JtYXRpb24pIGNvbXBvbmVudHMgdG8gZGVmaW5lIHRyYW5zZm9ybWF0aW9ucyB0byBhcHBseSB0byB0aGUgZGVsaXZlcmVkIGltYWdlLlxuICpcbiAqIEZvciBtb3JlIGluZm9ybWF0aW9uIHNlZSB0aGVcbiAqIDxhIGhyZWY9XCJodHRwczovL2Nsb3VkaW5hcnkuY29tL2RvY3VtZW50YXRpb24vdnVlX2ltYWdlX21hbmlwdWxhdGlvbiNjbGR2aWRlb19jb21wb25lbnRcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAqIGNsZC1pbWFnZSBjb21wb25lbnQ8L2E+IGFuZFxuICogPGEgaHJlZj1cImh0dHBzOi8vY2xvdWRpbmFyeS5jb20vZG9jdW1lbnRhdGlvbi9pbWFnZV90cmFuc2Zvcm1hdGlvbnMjZW1iZWRkaW5nX2ltYWdlc19pbl93ZWJfcGFnZXNcIlxuICogdGFyZ2V0PVwiX2JsYW5rXCI+ZW1iZWRkaW5nIGltYWdlcyBpbiB3ZWIgcGFnZXM8L2E+IGRvY3VtZW50YXRpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJDbGRJbWFnZVwiLFxuICBpbmhlcml0QXR0cnM6IGZhbHNlLFxuICBtaXhpbnM6IFtyZWFkeSwgc2l6ZSwgbW91bnRlZCwgbGF6eSwgY2xkQXR0cnNJbmhlcml0ZWQsIGNsZEF0dHJzT3duZWRdLFxuICByZW5kZXIoaCkge1xuICAgIHJldHVybiBoKFwiaW1nXCIsIHRoaXMuaW1hZ2VBdHRycywgdGhpcy4kc2xvdHMgPyB0aGlzLiRzbG90cy5kZWZhdWx0IDogbnVsbCk7XG4gIH0sXG4gIHByb3BzOiB7XG4gICAgLyoqXG4gICAgICogVGhlIHVuaXF1ZSBpZGVudGlmaWVyIG9mIGFuIHVwbG9hZGVkIGltYWdlLlxuICAgICAqL1xuICAgIHB1YmxpY0lkOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogXCJcIiwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRvIGdlbmVyYXRlIGEgSlBFRyB1c2luZyB0aGUgW3Byb2dyZXNzaXZlIChpbnRlcmxhY2VkKSBKUEVHXG4gICAgICogZm9ybWF0XShodHRwczovL2Nsb3VkaW5hcnkuY29tL2RvY3VtZW50YXRpb24vdHJhbnNmb3JtYXRpb25fZmxhZ3MjZGVsaXZlcnlfYW5kX2ltYWdlX2Zvcm1hdF9mbGFncykuXG4gICAgICovXG4gICAgcHJvZ3Jlc3NpdmU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgLyoqXG4gICAgICogVGhlIHBsYWNlaG9sZGVyIGltYWdlIHRvIHVzZSB3aGlsZSB0aGUgaW1hZ2UgaXMgbG9hZGluZy4gUG9zc2libGUgdmFsdWVzOlxuICAgICAqXG4gICAgICogLSBgXCJscWlwXCJgIHRvIHVzZSBhIGxvdyBxdWFsaXR5IGltYWdlXG4gICAgICogLSBgXCJjb2xvclwiYCB0byB1c2UgYW4gYXZlcmFnZSBjb2xvciBpbWFnZVxuICAgICAqIC0gYFwicGl4ZWxhdGVcImAgdG8gdXNlIGEgcGl4ZWxhdGVkIGltYWdlXG4gICAgICovXG4gICAgcGxhY2Vob2xkZXI6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IFwiXCJcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEhvdyB0byBtYWtlIHRoZSBpbWFnZSByZXNwb25zaXZlIHRvIHRoZSBhdmFpbGFibGUgc2l6ZSBiYXNlZCBvbiBsYXlvdXQuIFBvc3NpYmxlIHZhbHVlczpcbiAgICAgKlxuICAgICAqIC0gYHdpZHRoYCB1c2VzIHRoZSBhdmFpbGFibGUgaW1hZ2UgKndpZHRoKiBhbmQgYWxsb3dzIGltYWdlICpoZWlnaHQqIHRvIGJlIHNldCBkeW5hbWljYWxseVxuICAgICAqIC0gYGhlaWdodGAgdXNlcyB0aGUgYXZhaWxhYmxlIGltYWdlICpoZWlnaHQqIGFuZCBhbGxvd3MgaW1hZ2UgKndpZHRoKiB0byBiZSBzZXQgZHluYW1pY2FsbHlcbiAgICAgKiAtIGBmaWxsYCB1c2VzIHRoZSBhdmFpbGFibGUgaW1hZ2UgKndpZHRoKiBhbmQgKmhlaWdodCpcbiAgICAgKi9cbiAgICByZXNwb25zaXZlOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogXCJub25lXCIgfSxcbiAgICAvKipcbiAgICAgKiBUaGUgc2V0IG9mIHBvc3NpYmxlIGJyZWFrcG9pbnQgdmFsdWVzIHRvIGJlIHVzZWQgdG9nZXRoZXIgd2l0aCB0aGUgcmVzcG9uc2l2ZSBwcm9wZXJ0eS4gRWl0aGVyOlxuICAgICAqXG4gICAgICogLSBhbiBhcnJheSBvZiBudW1iZXJzXG4gICAgICogLSBhIGNvbW1hIHNlcGFyYXRlZCBsaXN0IG9mIG51bWJlcnMgYXMgYSBzaW5nbGUgc3RyaW5nXG4gICAgICogLSBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBhcnJheSBvZiBudW1iZXJzXG4gICAgICovXG4gICAgYnJlYWtwb2ludHM6IHtcbiAgICAgIHR5cGU6IFtBcnJheSwgRnVuY3Rpb24sIFN0cmluZ10sXG4gICAgICBkZWZhdWx0OiAoKSA9PiByYW5nZSgxMDAsIDQwMDAsIDEwMClcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgYXR0cmlidXRlcygpIHtcbiAgICAgIHJldHVybiBtZXJnZShcbiAgICAgICAgdGhpcy4kYXR0cnMsXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NpdmVcbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgZmxhZ3M6IFtdXG4gICAgICAgICAgICAgICAgLmNvbmNhdCh0aGlzLiRhdHRycy5mbGFncyA/IHRoaXMuJGF0dHJzLmZsYWdzIDogW10pXG4gICAgICAgICAgICAgICAgLmNvbmNhdChcInByb2dyZXNzaXZlXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgOiB7fSxcbiAgICAgICAgdGhpcy5yZXNwb25zaXZlICE9PSBcIm5vbmVcIiAmJiB0aGlzLnNpemVcbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtYXRpb246IFtdXG4gICAgICAgICAgICAgICAgLmNvbmNhdCh0aGlzLiRhdHRycy50cmFuc2Zvcm1hdGlvbiB8fCBbXSlcbiAgICAgICAgICAgICAgICAuY29uY2F0KFxuICAgICAgICAgICAgICAgICAgZ2V0UmVzaXplVHJhbnNmb3JtYXRpb24oXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uc2l2ZSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaXplLFxuICAgICAgICAgICAgICAgICAgICBldmFsQnJlYWtwb2ludHModGhpcy5icmVha3BvaW50cylcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgOiB7fVxuICAgICAgKTtcbiAgICB9LFxuICAgIHNob3VsZE1lYXN1cmVTaXplKCkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzcG9uc2l2ZSAhPT0gXCJub25lXCI7XG4gICAgfSxcbiAgICBpbWFnZUF0dHJzKCkge1xuICAgICAgY29uc3QgY2xhc3NOYW1lID0ge1xuICAgICAgICBcImNsZC1pbWFnZVwiOiB0cnVlLFxuICAgICAgICBcImNsZC1maWxsXCI6IHRoaXMucmVzcG9uc2l2ZSA9PT0gXCJmaWxsXCIsXG4gICAgICAgIFwiY2xkLWZpbGwtd2lkdGhcIjogdGhpcy5yZXNwb25zaXZlID09PSBcIndpZHRoXCIsXG4gICAgICAgIFwiY2xkLWZpbGwtaGVpZ2h0XCI6IHRoaXMucmVzcG9uc2l2ZSA9PT0gXCJoZWlnaHRcIlxuICAgICAgfTtcbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMuaXNSZWFkeSB8fFxuICAgICAgICAhdGhpcy5wdWJsaWNJZCB8fFxuICAgICAgICAhIWZpbmRJblRyYW5zZm9ybWF0aW9ucyhcbiAgICAgICAgICB0aGlzLmNsZEF0dHJzLnRyYW5zZm9ybWF0aW9uLFxuICAgICAgICAgIHQgPT4gdC53aWR0aCA9PT0gMCB8fCB0LmhlaWdodCA9PT0gMFxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjbGFzczogY2xhc3NOYW1lXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmxhenkgJiYgIXRoaXMudmlzaWJsZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNsYXNzOiBjbGFzc05hbWUsXG4gICAgICAgICAgYXR0cnM6IHRoaXMucGxhY2Vob2xkZXJcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICAgIGdldFBsYWNlaG9sZGVyVVJMKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlaG9sZGVyLFxuICAgICAgICAgICAgICAgICAgICBjb21iaW5lT3B0aW9ucyh7IHB1YmxpY0lkOiB0aGlzLnB1YmxpY0lkIH0sIHRoaXMuY2xkQXR0cnMpXG4gICAgICAgICAgICAgICAgICApIHx8IHRoaXMucGxhY2Vob2xkZXJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiB7fVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBjb25zdCBodG1sQXR0cnMgPSBUcmFuc2Zvcm1hdGlvbi5uZXcoXG4gICAgICAgIHRoaXMuY2xkQXR0cnMudHJhbnNmb3JtYXRpb25cbiAgICAgICkudG9IdG1sQXR0cmlidXRlcygpO1xuICAgICAgY29uc3Qgc3JjID0gQ2xvdWRpbmFyeS5uZXcodGhpcy5jbGRBdHRycy5jb25maWd1cmF0aW9uKS51cmwoXG4gICAgICAgIHRoaXMucHVibGljSWQsXG4gICAgICAgIHRoaXMuY2xkQXR0cnNcbiAgICAgICk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjbGFzczogY2xhc3NOYW1lLFxuICAgICAgICBhdHRyczogbWVyZ2UoXG4gICAgICAgICAgbm9ybWFsaXplUmVzdCh0aGlzLiRhdHRycyksXG4gICAgICAgICAgaHRtbEF0dHJzLFxuICAgICAgICAgIHNyY1xuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgc3JjXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDoge31cbiAgICAgICAgKVxuICAgICAgfTtcbiAgICB9XG4gIH1cbn07XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBzdHlsZS5pbm5lclRleHQgPSBgXG4gICAgLmNsZC1pbWFnZS5jbGQtZmlsbC1oZWlnaHQge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICB9XG4gICAgXG4gICAgLmNsZC1pbWFnZS5jbGQtZmlsbC13aWR0aCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICBcbiAgICAuY2xkLWltYWdlLmNsZC1maWxsIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICAgIDwvc3R5bGU+XG4gICAgYDtcbiAgaWYgKGRvY3VtZW50LmhlYWQuZmlyc3RDaGlsZCkge1xuICAgIGRvY3VtZW50LmhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBkb2N1bWVudC5oZWFkLmZpcnN0Q2hpbGQpO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjbGRBdHRycyB9IGZyb20gXCIuL2NsZEF0dHJzXCI7XG5pbXBvcnQgeyBjbGRDaGlsZCB9IGZyb20gXCIuL2NsZENoaWxkXCI7XG5cbi8qKlxuICogTW9kaWZ5IGNsb3VkaW5hcnkgcGFyZW50IENvbWJpbmVkU3RhdGVcbiAqIHdpdGggaXRzIG93biBjb25maWcrdHJhbnNmb3JtYXRpb25zXG4gKiB0aHJvdWdoIGRlZGljYXRlZCBTdGF0ZSBpbnN0YW5jZVxuICovXG5leHBvcnQgY29uc3QgY2xkQXR0cnNTdWJtaXR0aW5nID0ge1xuICBtaXhpbnM6IFtjbGRBdHRycywgY2xkQ2hpbGRdLFxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgaWYgKCF0aGlzLkNsZFBhcmVudFN0YXRlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIFwiVGhpcyBjb21wb25lbnQgaGFzIHRvIGhhdmUgYSBDbG91ZGluYXJ5IHBhcmVudCB0aGF0IGNhbiByZWNlaXZlIGl0J3MgYXR0cmlidXRlc1wiXG4gICAgICApO1xuICAgIH1cblxuICAgIHRoaXMuYWRkUmVhZHlDaGVjayhcImNsZEF0dHJzU3VibWl0dGluZ1wiKTtcblxuICAgIHRoaXMuc3VibWl0dGVyID0gdGhpcy5DbGRQYXJlbnRTdGF0ZS5zcGF3bigpO1xuICAgIHRoaXMuc3VibWl0dGVyU3ViID0gdGhpcy5jbGRBdHRyc1N0YXRlLnN1YnNjcmliZSh7XG4gICAgICBuZXh0OiB2ID0+IHtcbiAgICAgICAgdGhpcy5zdWJtaXR0ZXIubmV4dCh2KTtcbiAgICAgICAgdGhpcy5tYXJrUmVhZHlDaGVjayhcImNsZEF0dHJzU3VibWl0dGluZ1wiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBkZXN0cm95ZWQoKSB7XG4gICAgaWYgKHRoaXMuc3VibWl0dGVyU3ViKSB7XG4gICAgICB0aGlzLnN1Ym1pdHRlclN1YigpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdWJtaXR0ZXIpIHtcbiAgICAgIHRoaXMuc3VibWl0dGVyLmNvbXBsZXRlKCk7XG4gICAgfVxuICB9XG59O1xuIiwiaW1wb3J0IHsgbm9ybWFsaXplT2JqZWN0LCBtZXJnZSB9IGZyb20gXCIuLi91dGlsc1wiO1xuaW1wb3J0IHsgY2xkQXR0cnNTdWJtaXR0aW5nIH0gZnJvbSBcIi4uL21peGlucy9jbGRBdHRyc1N1Ym1pdHRpbmdcIjtcbmltcG9ydCB7IGNsZEF0dHJzT3duZWQgfSBmcm9tIFwiLi4vbWl4aW5zL2NsZEF0dHJzT3duZWRcIjtcblxuLyoqXG4gKiBUaGUgaW1hZ2UgdG8gYmUgc2hvd24gd2hpbGUgYSB2aWRlbyBpcyBkb3dubG9hZGluZyBvciB1bnRpbCB0aGUgdXNlciBoaXRzIHRoZSBwbGF5IGJ1dHRvbi5cbiAqIFRoaXMgY29tcG9uZW50IG11c3QgYmUgYWRkZWQgYXMgYSBjaGlsZCBvZiB0aGUgW0NsZFZpZGVvXSgjY2xkdmlkZW8pIGNvbXBvbmVudC5cbiAqXG4gKiBJZiB0aGlzIGNvbXBvbmVudCBpcyBub3QgZ2l2ZW4gdGhlbiB0aGUgcG9zdGVyIGltYWdlIGRlZmF1bHRzIHRvIHRoZSBtaWRkbGUgZnJhbWUgb2YgdGhlIHNvdXJjZSB2aWRlbyBpbiBqcGcgZm9ybWF0LlxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiQ2xkUG9zdGVyXCIsXG4gIHJlbmRlcihoKSB7XG4gICAgaWYgKCF0aGlzLiRzbG90cyB8fCAhdGhpcy4kc2xvdHMuZGVmYXVsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBoKFwic3BhblwiLCB7IGNsYXNzOiBcImNsZC1wb3N0ZXJcIiB9LCB0aGlzLiRzbG90cy5kZWZhdWx0KTtcbiAgfSxcbiAgaW5oZXJpdEF0dHJzOiBmYWxzZSxcbiAgbWl4aW5zOiBbY2xkQXR0cnNPd25lZCwgY2xkQXR0cnNTdWJtaXR0aW5nXSxcbiAgcHJvcHM6IHtcbiAgICAvKipcbiAgICAgKiBUaGUgdW5pcXVlIGlkZW50aWZpZXIgb2YgYW4gdXBsb2FkZWQgaW1hZ2UuXG4gICAgICovXG4gICAgcHVibGljSWQ6IHsgdHlwZTogU3RyaW5nIH1cbiAgfSxcbiAgaW5qZWN0OiB7XG4gICAgQ2xkUGFyZW50U3RhdGU6IHsgZnJvbTogXCJDbGRQb3N0ZXJTdGF0ZVwiIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBhdHRyaWJ1dGVzKCkge1xuICAgICAgcmV0dXJuIG5vcm1hbGl6ZU9iamVjdChcbiAgICAgICAgbWVyZ2UoXG4gICAgICAgICAge1xuICAgICAgICAgICAgcHVibGljSWQ6IHRoaXMucHVibGljSWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRoaXMuJGF0dHJzXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XG59O1xuIiwiaW1wb3J0IHsgY2xkQXR0cnNPd25lZCB9IGZyb20gXCIuLi9taXhpbnMvY2xkQXR0cnNPd25lZFwiO1xuaW1wb3J0IHsgY2xkQXR0cnNTdWJtaXR0aW5nIH0gZnJvbSBcIi4uL21peGlucy9jbGRBdHRyc1N1Ym1pdHRpbmdcIjtcblxuLyoqXG4gKiBPbmUgb3IgbW9yZSBbdHJhbnNmb3JtYXRpb24gcGFyYW1ldGVyc10oaHR0cHM6Ly9jbG91ZGluYXJ5LmNvbS9kb2N1bWVudGF0aW9uL2ltYWdlX3RyYW5zZm9ybWF0aW9uX3JlZmVyZW5jZSlcbiAqIGluIGEgc2luZ2xlIGNvbXBvbmVudCwgb3IgYSBzZXQgb2YgW2NoYWluZWQgdHJhbnNmb3JtYXRpb25zXShodHRwczovL2Nsb3VkaW5hcnkuY29tL2RvY3VtZW50YXRpb24vaW1hZ2VfdHJhbnNmb3JtYXRpb25zI2NoYWluZWRfdHJhbnNmb3JtYXRpb25zKSBpbiBtdWx0aXBsZSBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiQ2xkVHJhbnNmb3JtYXRpb25cIixcbiAgcmVuZGVyKGgpIHtcbiAgICBpZiAoIXRoaXMuJHNsb3RzIHx8ICF0aGlzLiRzbG90cy5kZWZhdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGgoXCJzcGFuXCIsIHsgY2xhc3M6IFwiY2xkLXRyYW5zZm9ybWF0aW9uXCIgfSwgdGhpcy4kc2xvdHMuZGVmYXVsdCk7XG4gIH0sXG4gIGluaGVyaXRBdHRyczogZmFsc2UsXG4gIG1peGluczogW2NsZEF0dHJzT3duZWQsIGNsZEF0dHJzU3VibWl0dGluZ10sXG4gIGNvbXB1dGVkOiB7XG4gICAgYXR0cmlidXRlcygpIHtcbiAgICAgIHJldHVybiB7IHRyYW5zZm9ybWF0aW9uOiB0aGlzLiRhdHRycyB9O1xuICAgIH1cbiAgfVxufTtcbiIsImltcG9ydCB7IENsb3VkaW5hcnksIFRyYW5zZm9ybWF0aW9uIH0gZnJvbSBcImNsb3VkaW5hcnktY29yZVwiO1xuaW1wb3J0IHsgbWVyZ2UsIGt2LCBmaW5kIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5pbXBvcnQgeyBmaW5kSW5UcmFuc2Zvcm1hdGlvbnMgfSBmcm9tIFwiLi4vaGVscGVycy9maW5kSW5UcmFuc2Zvcm1hdGlvbnNcIjtcbmltcG9ydCB7IENvbWJpbmVkU3RhdGUgfSBmcm9tIFwiLi4vcmVhY3RpdmUvQ29tYmluZWRTdGF0ZVwiO1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplVHJhbnNmb3JtYXRpb24sXG4gIG5vcm1hbGl6ZUNvbmZpZ3VyYXRpb24sXG4gIG5vcm1hbGl6ZVJlc3Rcbn0gZnJvbSBcIi4uL2hlbHBlcnMvYXR0cmlidXRlc1wiO1xuaW1wb3J0IHtcbiAgY29tYmluZU9wdGlvbnMsXG4gIGNvbWJpbmVUcmFuc2Zvcm1hdGlvbnNcbn0gZnJvbSBcIi4uL2hlbHBlcnMvY29tYmluZU9wdGlvbnNcIjtcblxuaW1wb3J0IHsgcmVhZHkgfSBmcm9tIFwiLi4vbWl4aW5zL3JlYWR5XCI7XG5pbXBvcnQgeyBtb3VudGVkIH0gZnJvbSBcIi4uL21peGlucy9tb3VudGVkXCI7XG5pbXBvcnQgeyBsYXp5IH0gZnJvbSBcIi4uL21peGlucy9sYXp5XCI7XG5pbXBvcnQgeyBjbGRBdHRyc0luaGVyaXRlZCB9IGZyb20gXCIuLi9taXhpbnMvY2xkQXR0cnNJbmhlcml0ZWRcIjtcbmltcG9ydCB7IGNsZEF0dHJzT3duZWQgfSBmcm9tIFwiLi4vbWl4aW5zL2NsZEF0dHJzT3duZWRcIjtcblxuLyoqXG4gKiBEZWxpdmVyIHZpZGVvcyBhbmQgc3BlY2lmeSB2aWRlbyB0cmFuc2Zvcm1hdGlvbnMgdXNpbmcgdGhlIGBjbGQtdmlkZW9gIChDbGRWaWRlbykgZWxlbWVudCxcbiAqIHdoaWNoIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVzIGFuIEhUTUw1IHZpZGVvIHRhZyBpbmNsdWRpbmcgdGhlIFVSTCBzb3VyY2VzIGZvciB0aGUgbWFpbiBmb3JtYXRzXG4gKiBzdXBwb3J0ZWQgYnkgd2ViIGJyb3dzZXJzICh3ZWJtLCBtcDQgYW5kIG9ndiBieSBkZWZhdWx0KSwgYXMgd2VsbCBhcyBhIHBvc3RlciB0aHVtYm5haWwgaW1hZ2UsXG4gKiB3aGljaCBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBmcm9tIGEgZnJhbWUgaW4gdGhlIHZpZGVvLlxuICogQnJvd3NlcnMgY2FuIGF1dG9tYXRpY2FsbHkgc2VsZWN0IGFuZCBwbGF5IHRoZSB2aWRlbyBmb3JtYXQgdGhhdCB0aGV5IGJlc3Qgc3VwcG9ydCxcbiAqIGFuZCB0aGUgdmlkZW8gZmlsZXMgYXJlIGNyZWF0ZWQgZHluYW1pY2FsbHkgd2hlbiBmaXJzdCBhY2Nlc3NlZCBieSB5b3VyIHVzZXJzLlxuICpcbiAqIFlvdSBjYW4gb3B0aW9uYWxseSBpbmNsdWRlIGBjbGQtdHJhbnNmb3JtYXRpb25gIGNvbXBvbmVudHMgdG8gZGVmaW5lIHRyYW5zZm9ybWF0aW9ucyB0byBhcHBseSB0byB0aGUgZGVsaXZlcmVkIHZpZGVvLlxuICpcbiAqIEZvciBtb3JlIGluZm9ybWF0aW9uIHNlZVxuICogPGEgaHJlZj1cImh0dHBzOi8vY2xvdWRpbmFyeS5jb20vZG9jdW1lbnRhdGlvbi92dWVfdmlkZW9fbWFuaXB1bGF0aW9uI2NsZHZpZGVvX2NvbXBvbmVudFwiIHRhcmdldD1cIl9ibGFua1wiPlxuICogY2xkLXZpZGVvIGNvbXBvbmVudDwvYT4gYW5kXG4gKiA8YSBocmVmPVwiaHR0cHM6Ly9jbG91ZGluYXJ5LmNvbS9kb2N1bWVudGF0aW9uL3ZpZGVvX21hbmlwdWxhdGlvbl9hbmRfZGVsaXZlcnkjZW1iZWRkaW5nX3ZpZGVvc19pbl93ZWJfcGFnZXNcIlxuICogdGFyZ2V0PVwiX2JsYW5rXCI+ZW1iZWRkaW5nIHZpZGVvcyBpbiB3ZWIgcGFnZXM8L2E+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJDbGRWaWRlb1wiLFxuICBpbmhlcml0QXR0cnM6IGZhbHNlLFxuICBtaXhpbnM6IFtyZWFkeSwgbW91bnRlZCwgbGF6eSwgY2xkQXR0cnNJbmhlcml0ZWQsIGNsZEF0dHJzT3duZWRdLFxuICByZW5kZXIoaCkge1xuICAgIHJldHVybiBoKFxuICAgICAgXCJ2aWRlb1wiLFxuICAgICAgdGhpcy52aWRlb0F0dHJzLFxuICAgICAgdGhpcy5zb3VyY2VzXG4gICAgICAgIC5tYXAoYXR0cnMgPT4gaChcInNvdXJjZVwiLCB7IGtleTogYXR0cnMubWltZVR5cGUsIGF0dHJzIH0pKVxuICAgICAgICAuY29uY2F0KHRoaXMuJHNsb3RzLmRlZmF1bHQpXG4gICAgKTtcbiAgfSxcbiAgcHJvcHM6IHtcbiAgICAvKipcbiAgICAgKiBUaGUgdW5pcXVlIGlkZW50aWZpZXIgb2YgYW4gdXBsb2FkZWQgdmlkZW8uXG4gICAgICovXG4gICAgcHVibGljSWQ6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiBcIlwiLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIC8qKlxuICAgICAqIEFuIG9yZGVyZWQgYXJyYXkgb2YgdGhlIHZpZGVvIHNvdXJjZSB0eXBlcyB0byBpbmNsdWRlIGluIHRoZSBIVE1MNSB0YWcsIHdoZXJlIHRoZSB0eXBlIGlzIG1hcHBlZCB0byB0aGUgbWltZSB0eXBlLlxuICAgICAqIFlvdSBjYW4gYWxzbyBhZGQgYSBzcGVjaWZpYyB0cmFuc2Zvcm1hdGlvbiBmb3IgZWFjaCBzcGVjaWZpZWQgdmlkZW8gZm9ybWF0IGJ5IGFkZGluZyBhIHRyYW5zZm9ybWF0aW9uIHN0cnVjdC4gRXhhbXBsZTpcbiAgICAgKlxuICAgICAqIGA8Q2xkVmlkZW8gOnNvdXJjZVR5cGVzPVwieyBtcDQ6IHsgcXVhbGl0eTogMTAgfSB9XCIgLz5gXG4gICAgICovXG4gICAgc291cmNlVHlwZXM6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIGRlZmF1bHQoKSB7XG4gICAgICAgIHJldHVybiBtZXJnZS5hcHBseShcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIENsb3VkaW5hcnkuREVGQVVMVF9WSURFT19QQVJBTVMuc291cmNlX3R5cGVzLm1hcCh0eXBlID0+IGt2KHR5cGUsIHt9KSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHByb3ZpZGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIENsZFBvc3RlclN0YXRlOiB0aGlzLnBvc3RlckNvbWJpbmVkU3RhdGVcbiAgICB9O1xuICB9LFxuICBkYXRhKCkge1xuICAgIGNvbnN0IHBvc3RlckNvbWJpbmVkU3RhdGUgPSBuZXcgQ29tYmluZWRTdGF0ZShjb21iaW5lT3B0aW9ucyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBvc3RlckNvbWJpbmVkU3RhdGUsXG4gICAgICBwb3N0ZXJDbGRBdHRyczogbnVsbFxuICAgIH07XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgdmlkZW9BdHRycygpIHtcbiAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IHtcbiAgICAgICAgXCJjbGQtdmlkZW9cIjogdHJ1ZVxuICAgICAgfTtcblxuICAgICAgaWYgKFxuICAgICAgICAhdGhpcy5pc1JlYWR5IHx8XG4gICAgICAgICF0aGlzLnB1YmxpY0lkIHx8XG4gICAgICAgICEhZmluZEluVHJhbnNmb3JtYXRpb25zKFxuICAgICAgICAgIHRoaXMuY2xkQXR0cnMudHJhbnNmb3JtYXRpb24sXG4gICAgICAgICAgdCA9PiB0LndpZHRoID09PSAwIHx8IHQuaGVpZ2h0ID09PSAwXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICByZXR1cm4geyBjbGFzczogY2xhc3NOYW1lIH07XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGh0bWxBdHRycyA9IG1lcmdlKFxuICAgICAgICB0eXBlb2YgdGhpcy4kYXR0cnMucG9zdGVyID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgPyB7IHBvc3RlcjogdGhpcy4kYXR0cnMucG9zdGVyIH1cbiAgICAgICAgICA6IHRoaXMucG9zdGVyT3B0aW9uc1xuICAgICAgICAgID8ge1xuICAgICAgICAgICAgICBwb3N0ZXI6IENsb3VkaW5hcnkubmV3KHRoaXMucG9zdGVyT3B0aW9ucy5jb25maWd1cmF0aW9uKS51cmwoXG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0ZXJPcHRpb25zLnB1YmxpY0lkLFxuICAgICAgICAgICAgICAgIHRoaXMucG9zdGVyT3B0aW9ucy50cmFuc2Zvcm1hdGlvblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgOiB7fSxcbiAgICAgICAgVHJhbnNmb3JtYXRpb24ubmV3KHRoaXMuY2xkQXR0cnMudHJhbnNmb3JtYXRpb24pLnRvSHRtbEF0dHJpYnV0ZXMoKVxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY2xhc3M6IGNsYXNzTmFtZSxcbiAgICAgICAgYXR0cnM6IG1lcmdlKG5vcm1hbGl6ZVJlc3QodGhpcy4kYXR0cnMpLCBodG1sQXR0cnMpXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBzb3VyY2VzKCkge1xuICAgICAgaWYgKCF0aGlzLmlzUmVhZHkgfHwgIXRoaXMucHVibGljSWQpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5sYXp5ICYmICF0aGlzLnZpc2libGUpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5zb3VyY2VUeXBlcykubWFwKHNyY1R5cGUgPT4ge1xuICAgICAgICBjb25zdCBjb25maWd1cmF0aW9uID0gbWVyZ2UoXG4gICAgICAgICAgdGhpcy5jbGRBdHRycy5jb25maWd1cmF0aW9uLFxuICAgICAgICAgIG5vcm1hbGl6ZUNvbmZpZ3VyYXRpb24odGhpcy5zb3VyY2VUeXBlc1tzcmNUeXBlXSB8fCB7fSlcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtYXRpb24gPSBjb21iaW5lVHJhbnNmb3JtYXRpb25zKFxuICAgICAgICAgIHRoaXMuY2xkQXR0cnMudHJhbnNmb3JtYXRpb24sXG4gICAgICAgICAgbm9ybWFsaXplVHJhbnNmb3JtYXRpb24odGhpcy5zb3VyY2VUeXBlc1tzcmNUeXBlXSB8fCB7fSlcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgaHRtbEF0dHJzID0gbm9ybWFsaXplUmVzdCh0aGlzLnNvdXJjZVR5cGVzW3NyY1R5cGVdIHx8IHt9KTtcblxuICAgICAgICBjb25zdCBzcmMgPSBDbG91ZGluYXJ5Lm5ldyhjb25maWd1cmF0aW9uKS51cmwoXG4gICAgICAgICAgdGhpcy5wdWJsaWNJZCxcbiAgICAgICAgICBtZXJnZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVzb3VyY2VfdHlwZTogXCJ2aWRlb1wiLFxuICAgICAgICAgICAgICBmb3JtYXQ6IHNyY1R5cGVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0cmFuc2Zvcm1hdGlvblxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgbWltZVR5cGUgPSBcInZpZGVvL1wiICsgKHNyY1R5cGUgPT09IFwib2d2XCIgPyBcIm9nZ1wiIDogc3JjVHlwZSk7XG5cbiAgICAgICAgcmV0dXJuIG1lcmdlKGh0bWxBdHRycywgeyBtaW1lVHlwZSwgc3JjIH0pO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIHBvc3Rlck9wdGlvbnMoKSB7XG4gICAgICBjb25zdCBvd25Qb3N0ZXJBdHRycyA9IGNvbWJpbmVPcHRpb25zKFxuICAgICAgICB7XG4gICAgICAgICAgY29uZmlndXJhdGlvbjogdGhpcy5jbGRBdHRycy5jb25maWd1cmF0aW9uXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwdWJsaWNJZDpcbiAgICAgICAgICAgIHR5cGVvZiB0aGlzLiRhdHRycy5wb3N0ZXIgPT09IFwib2JqZWN0XCJcbiAgICAgICAgICAgICAgPyAodGhpcy4kYXR0cnMucG9zdGVyIHx8IHt9KS5wdWJsaWNJZFxuICAgICAgICAgICAgICA6IG51bGwsXG4gICAgICAgICAgY29uZmlndXJhdGlvbjogbm9ybWFsaXplQ29uZmlndXJhdGlvbihcbiAgICAgICAgICAgIHR5cGVvZiB0aGlzLiRhdHRycy5wb3N0ZXIgPT09IFwib2JqZWN0XCIgJiYgdGhpcy4kYXR0cnMucG9zdGVyXG4gICAgICAgICAgICAgID8gdGhpcy4kYXR0cnMucG9zdGVyXG4gICAgICAgICAgICAgIDoge31cbiAgICAgICAgICApLFxuICAgICAgICAgIHRyYW5zZm9ybWF0aW9uOiBub3JtYWxpemVUcmFuc2Zvcm1hdGlvbihcbiAgICAgICAgICAgIHR5cGVvZiB0aGlzLiRhdHRycy5wb3N0ZXIgPT09IFwib2JqZWN0XCIgJiYgdGhpcy4kYXR0cnMucG9zdGVyXG4gICAgICAgICAgICAgID8gdGhpcy4kYXR0cnMucG9zdGVyXG4gICAgICAgICAgICAgIDoge31cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICBvd25Qb3N0ZXJBdHRycy50cmFuc2Zvcm1hdGlvbiA9IG93blBvc3RlckF0dHJzLnRyYW5zZm9ybWF0aW9uIHx8IHt9O1xuICAgICAgaWYgKCh0aGlzLiRhdHRycy5wb3N0ZXIgfHwge30pLnB1YmxpY0lkKSB7XG4gICAgICAgIG93blBvc3RlckF0dHJzLnRyYW5zZm9ybWF0aW9uLnJlc291cmNlX3R5cGUgPSBcImltYWdlXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvd25Qb3N0ZXJBdHRycy50cmFuc2Zvcm1hdGlvbi5yZXNvdXJjZV90eXBlID0gXCJ2aWRlb1wiO1xuICAgICAgICBvd25Qb3N0ZXJBdHRycy50cmFuc2Zvcm1hdGlvbi5mb3JtYXQgPSBcImpwZWdcIjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZXh0UG9zdGVyQXR0cnMgPSB0aGlzLnBvc3RlckNsZEF0dHJzXG4gICAgICAgID8gY29tYmluZU9wdGlvbnMoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHB1YmxpY0lkOiB0aGlzLnB1YmxpY0lkLFxuICAgICAgICAgICAgICBjb25maWd1cmF0aW9uOiB0aGlzLmNsZEF0dHJzLmNvbmZpZ3VyYXRpb25cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGlzLnBvc3RlckNsZEF0dHJzXG4gICAgICAgICAgKVxuICAgICAgICA6IHt9O1xuICAgICAgZXh0UG9zdGVyQXR0cnMudHJhbnNmb3JtYXRpb24gPSBleHRQb3N0ZXJBdHRycy50cmFuc2Zvcm1hdGlvbiB8fCB7fTtcbiAgICAgIGlmICgodGhpcy5wb3N0ZXJDbGRBdHRycyB8fCB7fSkucHVibGljSWQpIHtcbiAgICAgICAgZXh0UG9zdGVyQXR0cnMudHJhbnNmb3JtYXRpb24ucmVzb3VyY2VfdHlwZSA9IFwiaW1hZ2VcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGV4dFBvc3RlckF0dHJzLnRyYW5zZm9ybWF0aW9uLnJlc291cmNlX3R5cGUgPSBcInZpZGVvXCI7XG4gICAgICAgIGV4dFBvc3RlckF0dHJzLnRyYW5zZm9ybWF0aW9uLmZvcm1hdCA9IFwianBlZ1wiO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkZWZhdWx0UG9zdGVyID0gbWVyZ2UoXG4gICAgICAgIGNvbWJpbmVPcHRpb25zKHsgcHVibGljSWQ6IHRoaXMucHVibGljSWQgfSwgdGhpcy5jbGRBdHRycyksXG4gICAgICAgIHtcbiAgICAgICAgICB0cmFuc2Zvcm1hdGlvbjoge1xuICAgICAgICAgICAgcmVzb3VyY2VfdHlwZTogXCJ2aWRlb1wiLFxuICAgICAgICAgICAgZm9ybWF0OiBcImpwZWdcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIGZpbmQoXG4gICAgICAgIFtleHRQb3N0ZXJBdHRycywgb3duUG9zdGVyQXR0cnMsIGRlZmF1bHRQb3N0ZXJdLFxuICAgICAgICBvcHRpb25zID0+IG9wdGlvbnMucHVibGljSWRcbiAgICAgICk7XG4gICAgfVxuICB9LFxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMucG9zdGVyQ29tYmluZWRTdGF0ZVN1YiA9IHRoaXMucG9zdGVyQ29tYmluZWRTdGF0ZS5zdWJzY3JpYmUoe1xuICAgICAgbmV4dDogdiA9PiB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh2KS5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLnBvc3RlckNsZEF0dHJzID0gdjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBkZXN0cm95ZWQoKSB7XG4gICAgdGhpcy5wb3N0ZXJDb21iaW5lZFN0YXRlU3ViKCk7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBTdGF0ZSB9IGZyb20gXCIuL3JlYWN0aXZlL1N0YXRlXCI7XG5pbXBvcnQgeyBub3JtYWxpemVDb25maWd1cmF0aW9uIH0gZnJvbSBcIi4vaGVscGVycy9hdHRyaWJ1dGVzXCI7XG5cbmltcG9ydCBDbGRDb250ZXh0IGZyb20gXCIuL2NvbXBvbmVudHMvQ2xkQ29udGV4dFwiO1xuaW1wb3J0IENsZEltYWdlIGZyb20gXCIuL2NvbXBvbmVudHMvQ2xkSW1hZ2VcIjtcbmltcG9ydCBDbGRQb3N0ZXIgZnJvbSBcIi4vY29tcG9uZW50cy9DbGRQb3N0ZXJcIjtcbmltcG9ydCBDbGRUcmFuc2Zvcm1hdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL0NsZFRyYW5zZm9ybWF0aW9uXCI7XG5pbXBvcnQgQ2xkVmlkZW8gZnJvbSBcIi4vY29tcG9uZW50cy9DbGRWaWRlb1wiO1xuXG4vKiBlc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246IDAgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbGwoVnVlLCBvcHRpb25zKSB7XG4gIGlmIChWdWUuQ2xkSW5zdGFsbGVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ2xvdWRpbmFyeSBwbHVnaW4gYWxyZWFkeSBpbnN0YWxsZWRcIik7XG4gIH1cbiAgVnVlLkNsZEluc3RhbGxlZCA9IHRydWU7XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgW0NsZENvbnRleHQsIENsZEltYWdlLCBDbGRQb3N0ZXIsIENsZFRyYW5zZm9ybWF0aW9uLCBDbGRWaWRlb10uZm9yRWFjaChcbiAgICBjb21wb25lbnQgPT4ge1xuICAgICAgY29uc3QgdXNlckNvbXBvbmVudE5hbWUgPSBnZXRVc2VyQ29tcG9uZW50TmFtZShcbiAgICAgICAgb3B0aW9ucy5jb21wb25lbnRzLFxuICAgICAgICBjb21wb25lbnQubmFtZVxuICAgICAgKTtcbiAgICAgIGlmICh1c2VyQ29tcG9uZW50TmFtZSAhPSBudWxsKSB7XG4gICAgICAgIFZ1ZS5jb21wb25lbnQodXNlckNvbXBvbmVudE5hbWUsIGNvbXBvbmVudCk7XG4gICAgICB9XG4gICAgfVxuICApO1xuXG4gIGlmIChvcHRpb25zLmNvbmZpZ3VyYXRpb24pIHtcbiAgICBWdWUucHJvdG90eXBlLkNsZEdsb2JhbENvbnRleHRTdGF0ZSA9IG5ldyBTdGF0ZSh7XG4gICAgICBjb25maWd1cmF0aW9uOiBub3JtYWxpemVDb25maWd1cmF0aW9uKG9wdGlvbnMuY29uZmlndXJhdGlvbilcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRVc2VyQ29tcG9uZW50TmFtZShjb21wb25lbnRzLCBuYW1lKSB7XG4gIGlmICghY29tcG9uZW50cykge1xuICAgIHJldHVybiBuYW1lO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSBcIm9iamVjdFwiKSB7XG4gICAgLy8geyBjb21wb25lbnRzOiBbJ0NsZEltYWdlJ10gfVxuICAgIGlmIChBcnJheS5pc0FycmF5KGNvbXBvbmVudHMpKSB7XG4gICAgICByZXR1cm4gY29tcG9uZW50cy5pbmRleE9mKG5hbWUpID49IDAgPyBuYW1lIDogbnVsbDtcbiAgICB9XG4gICAgLy8geyBjb21wb25lbnRzOiB7IENsZEltYWdlOiB0cnVlIH0gfVxuICAgIGlmICh0eXBlb2YgY29tcG9uZW50c1tuYW1lXSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgIHJldHVybiBjb21wb25lbnRzW25hbWVdID09PSB0cnVlID8gbmFtZSA6IG51bGw7XG4gICAgfVxuICAgIC8vIHsgY29tcG9uZW50czogeyBDbGRJbWFnZTogJ0Nsb3VkaW5hcnlJbWFnZScgfSB9XG4gICAgaWYgKHR5cGVvZiBjb21wb25lbnRzW25hbWVdID09PSBcInN0cmluZ1wiKSB7XG4gICAgICByZXR1cm4gY29tcG9uZW50c1tuYW1lXTtcbiAgICB9XG4gICAgLy8geyBjb21wb25lbnRzOiB7IENsb3VkaW5hcnlJbWFnZTogJ0NsZEltYWdlJyB9IH1cbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY29tcG9uZW50cyk7XG4gICAgY29uc3QgdmFsdWVzID0ga2V5cy5tYXAoa2V5ID0+IGNvbXBvbmVudHNba2V5XSk7XG4gICAgaWYgKHZhbHVlcy5pbmRleE9mKG5hbWUpID49IDApIHtcbiAgICAgIHJldHVybiBrZXlzW3ZhbHVlcy5pbmRleE9mKG5hbWUpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cbiIsImltcG9ydCB7IGluc3RhbGwgfSBmcm9tIFwiLi9wbHVnaW5cIjtcbmltcG9ydCBDbGRDb250ZXh0IGZyb20gXCIuL2NvbXBvbmVudHMvQ2xkQ29udGV4dFwiO1xuaW1wb3J0IENsZEltYWdlIGZyb20gXCIuL2NvbXBvbmVudHMvQ2xkSW1hZ2VcIjtcbmltcG9ydCBDbGRWaWRlbyBmcm9tIFwiLi9jb21wb25lbnRzL0NsZFZpZGVvXCI7XG5pbXBvcnQgQ2xkUG9zdGVyIGZyb20gXCIuL2NvbXBvbmVudHMvQ2xkUG9zdGVyXCI7XG5pbXBvcnQgQ2xkVHJhbnNmb3JtYXRpb24gZnJvbSBcIi4vY29tcG9uZW50cy9DbGRUcmFuc2Zvcm1hdGlvblwiO1xuXG5jb25zdCBwbHVnaW4gPSB7IGluc3RhbGwgfTtcblxuZXhwb3J0IHtcbiAgcGx1Z2luLFxuICBwbHVnaW4gYXMgZGVmYXVsdCxcbiAgQ2xkQ29udGV4dCxcbiAgQ2xkSW1hZ2UsXG4gIENsZFZpZGVvLFxuICBDbGRQb3N0ZXIsXG4gIENsZFRyYW5zZm9ybWF0aW9uLFxuICBpbnN0YWxsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==