(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Cloudinary"] = factory();
	else
		root["Cloudinary"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "25fc":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.function.name");

/***/ }),

/***/ "277f":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "3c59":
/***/ (function(module, exports) {

module.exports = require("cloudinary-core");

/***/ }),

/***/ "4764":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "4d40":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "5d58":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("8079");

/***/ }),

/***/ "5d73":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("277f");

/***/ }),

/***/ "61d3":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.regexp.flags");

/***/ }),

/***/ "67bb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("bea1");

/***/ }),

/***/ "8079":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "80a8":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom.iterable");

/***/ }),

/***/ "85f2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("4d40");

/***/ }),

/***/ "a4bb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("a898");

/***/ }),

/***/ "a745":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("4764");

/***/ }),

/***/ "a898":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "bea1":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "f61e":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.sort");

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var plugin_namespaceObject = {};
__webpack_require__.r(plugin_namespaceObject);
__webpack_require__.d(plugin_namespaceObject, "install", function() { return install; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var object_keys = __webpack_require__("a4bb");
var keys_default = /*#__PURE__*/__webpack_require__.n(object_keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("a745");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("5d58");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("67bb");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: external "core-js/modules/es6.function.name"
var es6_function_name_ = __webpack_require__("25fc");

// EXTERNAL MODULE: external "core-js/modules/web.dom.iterable"
var web_dom_iterable_ = __webpack_require__("80a8");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("85f2");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    define_property_default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
// CONCATENATED MODULE: ./src/reactive/Channel.js





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
var Channel_Channel =
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
        return sub && typeof_typeof(sub) === "object" && "next" in sub && sub.next ? sub.next(value) : null;
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
        return sub && typeof_typeof(sub) === "object" && "error" in sub && sub.error ? sub.error(_error) : null;
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
        return sub && typeof_typeof(sub) === "object" && "complete" in sub && sub.complete ? sub.complete() : null;
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
    _classCallCheck(this, State);

    this.lastValue = value;
    this.channel = new Channel_Channel();
  }
  /**
   * Push a new state to all active listeners
   * @param {Function|*} state
   * @returns {undefined}
   */


  _createClass(State, [{
    key: "next",
    value: function next(value) {
      if (this.lastValue === value) {
        return;
      }

      var computedValue = typeof value === "function" ? value(this.lastValue) : value;
      this.lastValue = computedValue;
      return this.channel.next(computedValue);
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
      if (listener && typeof_typeof(listener) === "object" && listener.next) {
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
// EXTERNAL MODULE: external "cloudinary-core"
var external_cloudinary_core_ = __webpack_require__("3c59");

// CONCATENATED MODULE: ./src/utils/merge.js


function merge() {
  var args = Array.prototype.slice.call(arguments, 0).filter(function (x) {
    return x != null;
  });

  if (args.length === 0) {
    return {};
  }

  if (args.length === 1) {
    return args[0];
  }

  if (args.length === 2) {
    var result = {};

    if (args[0] != null) {
      keys_default()(args[0]).forEach(function (k) {
        if (args[0][k] !== undefined) {
          result[k] = args[0][k];
        }
      });
    }

    if (args[1] != null) {
      keys_default()(args[1]).forEach(function (k) {
        if (args[1][k] !== undefined) {
          result[k] = args[1][k];
        }
      });
    }

    return result;
  }

  return merge(args[0], merge.apply(null, args.slice(1)));
}
// CONCATENATED MODULE: ./src/utils/kv.js
function kv(k, v) {
  var result = {};
  result[k] = v;
  return result;
}
// CONCATENATED MODULE: ./src/utils/formatObject.js



function formatObject(subject, instructions) {
  if (subject == null && keys_default()(instructions).length === 0) {
    return subject;
  }

  return keys_default()(subject).reduce(function (result, key) {
    return key in instructions ? merge(result, kv(key, instructions[key](subject[key]))) : merge(result, kv(key, subject[key]));
  }, {});
}
// CONCATENATED MODULE: ./src/utils/normalizeObject.js



function normalizeObject(subject) {
  if (subject == null) {
    return subject;
  }

  return keys_default()(subject).reduce(function (result, key) {
    return subject[key] == undefined ? result : merge(result, kv(key, subject[key]));
  }, {});
}
// CONCATENATED MODULE: ./src/utils/omit.js



function omit(subject, disallowed) {
  if (subject == null) {
    return subject;
  }

  return keys_default()(subject).reduce(function (result, key) {
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



function equal(subjectA, subjectB) {
  if (subjectA === null && subjectB === null || subjectA === undefined && subjectB === undefined) {
    return true;
  }

  if ((subjectA === null || subjectB === null) && (subjectA !== null || subjectB !== null) || (subjectA === undefined || subjectB === undefined) && (subjectA !== undefined || subjectB !== undefined)) {
    return false;
  }

  if (typeof_typeof(subjectA) === "object" && typeof_typeof(subjectB) === "object") {
    var subjectAKeys = keys_default()(subjectA);

    var subjectBKeys = keys_default()(subjectB);

    if (subjectAKeys.length !== subjectBKeys.length) {
      return false;
    }

    var allKeys = uniq(subjectAKeys, subjectBKeys);

    if (allKeys.length !== subjectAKeys.length) {
      return false;
    }

    for (var i = 0; i < allKeys.length; i++) {
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
  return function () {
    var _this = this;

    var args = Array.prototype.slice.call(arguments, 0);
    clearTimeout(forceUpdateTimeoutToken);
    forceUpdateTimeoutToken = setTimeout(function () {
      fn.apply(_this, args);
    }, timeout);
  };
}
// CONCATENATED MODULE: ./src/utils/find.js


function find(subject, predicate) {
  var result = null;

  if (!(subject instanceof Array)) {
    throw new Error("find 1st arg must be Array, is: ".concat(typeof_typeof(subject)));
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
  var args = Array.prototype.slice.call(arguments, 0).filter(function (x) {
    return x != null;
  });

  if (args.length === 0) {
    return undefined;
  }

  if (args.length === 1) {
    return args[0];
  }

  if (args.length === 2) {
    var subject = args[0];
    var mod = args[1];

    keys_default()(mod).forEach(function (k) {
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

var attributes_configuration = external_cloudinary_core_["Configuration"].CONFIG_PARAMS.map(external_cloudinary_core_["Util"].camelCase);
/** List of all transformation fields as they are needed in components attributes */

var attributes_transformation = external_cloudinary_core_["Transformation"].PARAM_NAMES.map(external_cloudinary_core_["Util"].camelCase).filter(function (name) {
  return attributes_configuration.indexOf(name) < 0;
});
/** Extract configuration options for provided object */

function normalizeConfiguration(cfg) {
  return external_cloudinary_core_["Util"].withSnakeCaseKeys(formatObject(normalizeObject(pick(cfg, attributes_configuration)), {
    secure: function secure(v) {
      return typeof v === "boolean" ? v : v === "true";
    }
  }));
}
/** Extract transformation options for provided object */

function normalizeTransformation(cfg) {
  return external_cloudinary_core_["Util"].withSnakeCaseKeys(normalizeObject(pick(cfg, attributes_transformation)));
}
/** Extract fields that are not used for configuration nor transformation in provided object */

function normalizeRest(cfg) {
  return normalizeObject(omit(cfg, attributes_transformation.concat(attributes_configuration)));
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3201b759-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CldContext.vue?vue&type=template&id=2e44c574&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._b({staticClass:"cld-context"},'div',_vm.htmlAttributes,false),[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CldContext.vue?vue&type=template&id=2e44c574&

// CONCATENATED MODULE: ./src/mixins/ready.js



/**
 * helper mixin for marking
 * which of other mixins report "ready" state
 */

var ready_ready = {
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
      var ready = this.ready;

      var flags = keys_default()(ready);

      if (flags.length === 0) {
        return false;
      }

      for (var i = 0; i < flags.length; i++) {
        if (!ready[flags[i]]) {
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
  mixins: [ready_ready],
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

    _classCallCheck(this, CombinedState);

    this.chunkedState = new State_State([]);
    this.solidState = new State_State({});
    this.chunkedState.subscribe({
      next: function next(v) {
        var nextSum = (composition || merge).apply(null, v ? v : []);

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


  _createClass(CombinedState, [{
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
              return chunk === last ? last = v : chunk;
            }) : currentState.concat([last = v]);
          });
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



/** Combines many objects
 * { publicId, configuration, transformation }
 * provided as arguments into one
 * @param  {...{ publicId, configuration, transformation }} transformations
 */

function combineOptions() {
  for (var _len = arguments.length, options = new Array(_len), _key = 0; _key < _len; _key++) {
    options[_key] = arguments[_key];
  }

  var publicId = merge.apply(this, options).publicId;
  var configuration = normalizeObject(merge.apply(this, options.filter(isObjectWithKeys).map(function (_) {
    return _.configuration;
  }).filter(isObjectWithKeys)));
  var transformation = normalizeObject(combineTransformations.apply(this, options.filter(isObjectWithKeys).map(function (_) {
    return _.transformation;
  }).filter(isObjectWithKeys)));
  return normalizeObject({
    publicId: publicId ? publicId : undefined,
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
  return typeof_typeof(subject) === "object" && subject && keys_default()(subject).length > 0;
}
// CONCATENATED MODULE: ./src/mixins/cldAttrs.js



/**
 * Creates a components own CombinedState
 * and posts its changes
 * into components data
 */

var cldAttrs = {
  mixins: [ready_ready],
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CldContext.vue?vue&type=script&lang=js&
//
//
//
//
//
//




/**
 * Cloudinary context providing element
 */

/* harmony default export */ var CldContextvue_type_script_lang_js_ = ({
  name: "CldContext",
  inheritAttrs: false,
  mixins: [mounted, cldAttrsInherited, cldAttrsOwned],
  props: {},
  computed: {
    htmlAttributes: function htmlAttributes() {
      return normalizeRest(this.$attrs);
    }
  }
});
// CONCATENATED MODULE: ./src/components/CldContext.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CldContextvue_type_script_lang_js_ = (CldContextvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/CldContext.vue





/* normalize component */

var component = normalizeComponent(
  components_CldContextvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CldContext = (component.exports);
// EXTERNAL MODULE: external "core-js/modules/es6.regexp.flags"
var es6_regexp_flags_ = __webpack_require__("61d3");

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
  return "devicePixelRatio" in window ? {
    dpr: window.devicePixelRatio
  } : {};
}
// EXTERNAL MODULE: external "core-js/modules/es6.array.sort"
var es6_array_sort_ = __webpack_require__("f61e");

// CONCATENATED MODULE: ./src/helpers/findBreakpoint.js


/**
 * Finds a number in breakpoints array
 * that provided a suggestion
 * qualifies the most to be used as a value
 * @param {Array<number>} stops
 * @param {number} value
 */
function findBreakpoint(stops, value) {
  return stops.concat([]).sort(function (a, b) {
    return a - b;
  }).filter(function (stop) {
    return stop >= value;
  }).concat(stop)[0];
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
  return {
    fill: merge(getDPRAttr(), {
      crop: "crop"
    }, !size ? {
      width: 0,
      height: 0
    } : breakpoints ? {
      width: Math.floor(findBreakpoint(breakpoints, size.width)),
      height: Math.floor(size.height / size.width * findBreakpoint(breakpoints, size.width))
    } : {
      width: Math.floor(size.width),
      height: Math.floor(size.height)
    }),
    width: merge(getDPRAttr(), {
      crop: "scale",
      width: Math.floor(!size ? 0 : breakpoints ? findBreakpoint(breakpoints, size.width) : size.width)
    }),
    height: merge(getDPRAttr(), {
      crop: "scale",
      height: Math.floor(!size ? 0 : breakpoints ? findBreakpoint(breakpoints, size.height) : size.height)
    }),
    none: null
  }[mode];
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
  return external_cloudinary_core_["Cloudinary"].new(placeholderOptions.configuration).url(placeholderOptions.publicId, placeholderOptions.transformation);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js
var get_iterator = __webpack_require__("5d73");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// CONCATENATED MODULE: ./src/mixins/size.js




/**
 * If necessary posts root element
 * size information
 * into components data
 */

var size_size = {
  mixins: [ready_ready],
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
      this.cancelSizeListener = watchElementSize(this.$el, function (size) {
        var currentSize = pick(_this.size, ["width", "height"]);
        var nextSize = pick(size, ["width", "height"]);

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

  if ((typeof window === "undefined" ? "undefined" : typeof_typeof(window)) === "object") {
    if ("ResizeObserver" in window) {
      var resizeObserver = new ResizeObserver(function (entries) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = get_iterator_default()(entries), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var entry = _step.value;
            delayedCallback(pick(entry.contentRect, ["width", "height"]));
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
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
    } else {
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
  }
}
// CONCATENATED MODULE: ./src/mixins/lazy.js



/**
 * If necessary watches for root elements visibility
 * and posts the result to components data
 */

var lazy = {
  mixins: [ready_ready],
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
  if ((typeof window === "undefined" ? "undefined" : typeof_typeof(window)) === "object" && "IntersectionObserver" in window) {
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
  } else {
    listener(true);
    return noop;
  }
}

function noop() {}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CldImage.vue?vue&type=script&lang=js&















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

/* harmony default export */ var CldImagevue_type_script_lang_js_ = ({
  name: "CldImage",
  inheritAttrs: false,
  mixins: [ready_ready, size_size, mounted, lazy, cldAttrsInherited, cldAttrsOwned],
  render: function render(h) {
    return h("img", this.imageAttrs, this.$slots.default);
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
      return merge(this.$attrs, this.progressive == true ? {
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
        "cld-image": true
      };
      var responsiveStyle = {
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
          class: className,
          style: responsiveStyle
        };
      }

      if (this.lazy && !this.visible) {
        return {
          class: className,
          style: responsiveStyle,
          attrs: this.placeholder ? {
            src: getPlaceholderURL(this.placeholder, combineOptions({
              publicId: this.publicId
            }, this.cldAttrs)) || this.placeholder
          } : {}
        };
      }

      var htmlAttrs = external_cloudinary_core_["Transformation"].new(this.cldAttrs.transformation).toHtmlAttributes();
      var src = external_cloudinary_core_["Cloudinary"].new(this.cldAttrs.configuration).url(this.publicId, this.cldAttrs);
      return {
        class: className,
        style: responsiveStyle,
        attrs: merge(normalizeRest(this.$attrs), htmlAttrs, src ? {
          src: src
        } : {})
      };
    }
  }
});
// CONCATENATED MODULE: ./src/components/CldImage.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CldImagevue_type_script_lang_js_ = (CldImagevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/CldImage.vue
var CldImage_render, CldImage_staticRenderFns




/* normalize component */

var CldImage_component = normalizeComponent(
  components_CldImagevue_type_script_lang_js_,
  CldImage_render,
  CldImage_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CldImage = (CldImage_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3201b759-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CldPoster.vue?vue&type=template&id=5afee394&
var CldPostervue_type_template_id_5afee394_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.$slots.default)?_c('span',{staticClass:"cld-poster"},[_vm._t("default")],2):_vm._e()}
var CldPostervue_type_template_id_5afee394_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CldPoster.vue?vue&type=template&id=5afee394&

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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CldPoster.vue?vue&type=script&lang=js&
//
//
//
//
//
//



/**
 * The image to be shown while a video is downloading or until the user hits the play button.
 * This component must be added as a child of the [CldVideo](#cldvideo) component.
 *
 * If this component is not given then the poster image defaults to the middle frame of the source video in jpg format.
 */

/* harmony default export */ var CldPostervue_type_script_lang_js_ = ({
  name: "CldPoster",
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
// CONCATENATED MODULE: ./src/components/CldPoster.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CldPostervue_type_script_lang_js_ = (CldPostervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/CldPoster.vue





/* normalize component */

var CldPoster_component = normalizeComponent(
  components_CldPostervue_type_script_lang_js_,
  CldPostervue_type_template_id_5afee394_render,
  CldPostervue_type_template_id_5afee394_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CldPoster = (CldPoster_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3201b759-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CldTransformation.vue?vue&type=template&id=6f22c24a&
var CldTransformationvue_type_template_id_6f22c24a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.$slots.default)?_c('span',{staticClass:"cld-transformation"},[_vm._t("default")],2):_vm._e()}
var CldTransformationvue_type_template_id_6f22c24a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CldTransformation.vue?vue&type=template&id=6f22c24a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CldTransformation.vue?vue&type=script&lang=js&
//
//
//
//
//
//


/**
 * One or more [transformation parameters](https://cloudinary.com/documentation/image_transformation_reference)
 * in a single component, or a set of [chained transformations](https://cloudinary.com/documentation/image_transformations#chained_transformations) in multiple components.
 */

/* harmony default export */ var CldTransformationvue_type_script_lang_js_ = ({
  name: "CldTransformation",
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
// CONCATENATED MODULE: ./src/components/CldTransformation.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CldTransformationvue_type_script_lang_js_ = (CldTransformationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/CldTransformation.vue





/* normalize component */

var CldTransformation_component = normalizeComponent(
  components_CldTransformationvue_type_script_lang_js_,
  CldTransformationvue_type_template_id_6f22c24a_render,
  CldTransformationvue_type_template_id_6f22c24a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CldTransformation = (CldTransformation_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CldVideo.vue?vue&type=script&lang=js&













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

/* harmony default export */ var CldVideovue_type_script_lang_js_ = ({
  name: "CldVideo",
  inheritAttrs: false,
  mixins: [ready_ready, mounted, lazy, cldAttrsInherited, cldAttrsOwned],
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
        return merge.apply(this, external_cloudinary_core_["Cloudinary"].DEFAULT_VIDEO_PARAMS.source_types.map(function (type) {
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
        poster: external_cloudinary_core_["Cloudinary"].new(this.posterOptions.configuration).url(this.posterOptions.publicId, this.posterOptions.transformation)
      } : {}, external_cloudinary_core_["Transformation"].new(this.cldAttrs.transformation).toHtmlAttributes());
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

      return keys_default()(this.sourceTypes).map(function (srcType) {
        var configuration = merge(_this.cldAttrs.configuration, normalizeConfiguration(_this.sourceTypes[srcType] || {}));
        var transformation = combineTransformations(_this.cldAttrs.transformation, normalizeTransformation(_this.sourceTypes[srcType] || {}));
        var htmlAttrs = normalizeRest(_this.sourceTypes[srcType] || {});
        var src = external_cloudinary_core_["Cloudinary"].new(configuration).url(_this.publicId, merge({
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
        publicId: typeof_typeof(this.$attrs.poster) === "object" ? (this.$attrs.poster || {}).publicId : null,
        configuration: normalizeConfiguration(typeof_typeof(this.$attrs.poster) === "object" && this.$attrs.poster ? this.$attrs.poster : {}),
        transformation: normalizeTransformation(typeof_typeof(this.$attrs.poster) === "object" && this.$attrs.poster ? this.$attrs.poster : {})
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
        if (keys_default()(v).length) {
          _this2.posterCldAttrs = v;
        }
      }
    });
  },
  destroyed: function destroyed() {
    this.posterCombinedStateSub();
  }
});
// CONCATENATED MODULE: ./src/components/CldVideo.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CldVideovue_type_script_lang_js_ = (CldVideovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/CldVideo.vue
var CldVideo_render, CldVideo_staticRenderFns




/* normalize component */

var CldVideo_component = normalizeComponent(
  components_CldVideovue_type_script_lang_js_,
  CldVideo_render,
  CldVideo_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CldVideo = (CldVideo_component.exports);
// CONCATENATED MODULE: ./src/plugin.js












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

  if (typeof_typeof(components) === "object") {
    // { components: ['CldImage'] }
    if (is_array_default()(components)) {
      return components.indexOf(name) >= 0 ? name : null;
    } // { components: { CldImage: true } }


    if (typeof components[name] === "boolean") {
      return components[name] === true ? name : null;
    } // { components: { CldImage: 'CloudinaryImage' } }


    if (typeof components[name] === "string") {
      return components[name];
    } // { components: { CloudinaryImage: 'CldImage' } }


    var keys = keys_default()(components);

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






var src_components = {
  CldContext: CldContext,
  CldImage: CldImage,
  CldVideo: CldVideo,
  CldPoster: CldPoster,
  CldTransformation: CldTransformation
};

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport plugin */__webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin_namespaceObject; });
/* concated harmony reexport components */__webpack_require__.d(__webpack_exports__, "components", function() { return src_components; });
/* concated harmony reexport CldContext */__webpack_require__.d(__webpack_exports__, "CldContext", function() { return CldContext; });
/* concated harmony reexport CldImage */__webpack_require__.d(__webpack_exports__, "CldImage", function() { return CldImage; });
/* concated harmony reexport CldVideo */__webpack_require__.d(__webpack_exports__, "CldVideo", function() { return CldVideo; });
/* concated harmony reexport CldPoster */__webpack_require__.d(__webpack_exports__, "CldPoster", function() { return CldPoster; });
/* concated harmony reexport CldTransformation */__webpack_require__.d(__webpack_exports__, "CldTransformation", function() { return CldTransformation; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (plugin_namespaceObject);



/***/ })

/******/ });
});
//# sourceMappingURL=Cloudinary.umd.js.map