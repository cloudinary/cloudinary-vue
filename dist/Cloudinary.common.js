module.exports =
/******/ (function(modules) { // webpackBootstrap
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

/***/ "1750":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.symbol");

/***/ }),

/***/ "25fc":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.function.name");

/***/ }),

/***/ "2a3b":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

/***/ }),

/***/ "2c92":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.iterator");

/***/ }),

/***/ "3c59":
/***/ (function(module, exports) {

module.exports = require("cloudinary-core");

/***/ }),

/***/ "4685":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es7.symbol.async-iterator");

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

/***/ "67bb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("bea1");

/***/ }),

/***/ "6e74":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.object.keys");

/***/ }),

/***/ "774e":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("afb5");

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

/***/ "a745":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("4764");

/***/ }),

/***/ "afb5":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "bea1":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "c8bb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("2a3b");

/***/ }),

/***/ "dc65":
/***/ (function(module, exports) {

module.exports = require("current-script-polyfill");

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
  if (true) {
    __webpack_require__("dc65")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external "core-js/modules/es6.array.iterator"
var es6_array_iterator_ = __webpack_require__("2c92");

// EXTERNAL MODULE: external "core-js/modules/es6.object.keys"
var es6_object_keys_ = __webpack_require__("6e74");

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

    this.listeners = [];
  }
  /**
   * Push a message to all active listeners
   * @param {*} message
   * @returns {undefined}
   */


  _createClass(Channel, [{
    key: "next",
    value: function next(value) {
      this.listeners.forEach(function (sub) {
        return "next" in sub && sub.next ? sub.next(value) : null;
      });
    }
    /**
     * Push an error signal to all active listeners.
     * Completes all subscriptions.
     * @param {Error} error
     * @returns {undefined}
     */

  }, {
    key: "error",
    value: function error(_error) {
      this.listeners.splice(0).forEach(function (sub) {
        return "error" in sub && sub.error ? sub.error(_error) : null;
      });
    }
    /**
     * Push an end signal to all active listeners
     * @returns {undefined}
     */

  }, {
    key: "complete",
    value: function complete() {
      this.listeners.splice(0).forEach(function (sub) {
        return "complete" in sub && sub.complete ? sub.complete() : null;
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

      if (listener && typeof_typeof(listener) === "object") {
        this.listeners.push(listener);
      }

      return function () {
        var pos = _this.listeners.indexOf(listener);

        if (pos >= 0) {
          _this.listeners.splice(pos, 1);
        }
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
  for (var _len = arguments.length, parts = new Array(_len), _key = 0; _key < _len; _key++) {
    parts[_key] = arguments[_key];
  }

  return external_cloudinary_core_["Util"].assign.apply(external_cloudinary_core_["Util"], [{}].concat(parts));
}
// CONCATENATED MODULE: ./src/utils/kv.js
function kv(k, v) {
  var result = {};
  result[k] = v;
  return result;
}
// CONCATENATED MODULE: ./src/utils/formatObject.js





function formatObject(subject, instructions) {
  if (subject == null || Object.keys(instructions).length === 0) {
    return subject;
  }

  return Object.keys(subject).reduce(function (result, key) {
    return key in instructions ? merge(result, kv(key, instructions[key](subject[key]))) : merge(result, kv(key, subject[key]));
  }, {});
}
// CONCATENATED MODULE: ./src/utils/compact.js



function compact(subject) {
  if (subject == null) {
    return subject;
  }

  if (subject instanceof Array) {
    return subject.reduce(function (result, item) {
      if (item != null) {
        result.push(item);
      }

      return result;
    }, []);
  }

  return Object.keys(subject).reduce(function (result, key) {
    if (subject[key] !== undefined) {
      result[key] = subject[key];
    }

    return result;
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

  if (!allowed || !allowed.length) {
    return {};
  }

  var target = {};

  for (var i = 0; i < allowed.length; i++) {
    var key = allowed[i];

    if (key in subject) {
      target[key] = subject[key];
    }
  }

  return target;
}
// CONCATENATED MODULE: ./src/utils/uniq.js
function uniq(subject) {
  return (subject || []).reduce(function (r, i) {
    return r.indexOf(i) < 0 ? r.concat([i]) : r;
  }, []);
}
// CONCATENATED MODULE: ./src/utils/union.js
function union(subjectA, subjectB) {
  return (subjectA || []).concat(subjectB || []);
}
// CONCATENATED MODULE: ./src/utils/equal.js






function equal(subjectA, subjectB) {
  if (subjectA === null && subjectB === null || subjectA === undefined && subjectB === undefined) {
    return true;
  }

  if (subjectA == null && subjectB == null || subjectA == null || subjectB == null) {
    return false;
  }

  if (typeof_typeof(subjectA) === "object" && typeof_typeof(subjectB) === "object") {
    var subjectAKeys = Object.keys(subjectA);
    var subjectBKeys = Object.keys(subjectB);

    if (subjectAKeys.length !== subjectBKeys.length) {
      return false;
    }

    var allKeys = uniq(union(subjectAKeys, subjectBKeys));

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
  if (!(subject instanceof Array)) {
    throw new Error("find 1st arg must be Array, is: ".concat(typeof_typeof(subject)));
  }

  for (var i = 0, l = subject.length; i < l; i++) {
    if (predicate(subject[i])) {
      return subject[i];
    }
  }
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
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("a745");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (is_array_default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/from.js
var from = __webpack_require__("774e");
var from_default = /*#__PURE__*/__webpack_require__.n(from);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js
var is_iterable = __webpack_require__("c8bb");
var is_iterable_default = /*#__PURE__*/__webpack_require__.n(is_iterable);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js


function _iterableToArray(iter) {
  if (is_iterable_default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return from_default()(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
// CONCATENATED MODULE: ./src/utils/flatten.js

function flatten(subject) {
  if (subject == null) {
    return subject;
  }

  var result = [];

  for (var i = 0; i < subject.length; i++) {
    if (Array.isArray(subject[i])) {
      result.push.apply(result, _toConsumableArray(subject[i]));
    } else {
      result.push(subject[i]);
    }
  }

  return result;
}
// CONCATENATED MODULE: ./src/utils/index.js












// CONCATENATED MODULE: ./src/helpers/attributes.js


/** List of all configuration fields as they are needed in components attributes */

var attributes_configuration = external_cloudinary_core_["Configuration"].CONFIG_PARAMS.map(external_cloudinary_core_["Util"].camelCase);
/** List of all transformation fields as they are needed in components attributes */

var attributes_transformation = external_cloudinary_core_["Transformation"].methods;
/** Extract configuration options for provided object */

function normalizeConfiguration(cfg) {
  return external_cloudinary_core_["Util"].withSnakeCaseKeys(formatObject(compact(pick(cfg, attributes_configuration)), {
    secure: function secure(v) {
      return typeof v === "boolean" ? v : v === "true";
    }
  }));
}
/** Extract transformation options for provided object */

function normalizeTransformation(cfg) {
  return external_cloudinary_core_["Util"].withSnakeCaseKeys(compact(pick(cfg, attributes_transformation)));
}
/** Extract fields that are not used for configuration nor transformation in provided object */

function normalizeNonCloudinary(cfg) {
  return compact(omit(cfg, attributes_transformation.concat(attributes_configuration)));
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CldTransformation.vue?vue&type=script&lang=js&
/**
 * One or more [transformation parameters](https://cloudinary.com/documentation/image_transformation_reference)
 * in a single component, or a set of [chained transformations](https://cloudinary.com/documentation/image_transformations#chained_transformations) in multiple components.
 */
/* harmony default export */ var CldTransformationvue_type_script_lang_js_ = ({
  name: "CldTransformation",
  inheritAttrs: false,
  render: function render() {
    console.error("<cld-transformation /> should be a immediate descendant of cld-(image|video|poster)");
    return null;
  }
});
// CONCATENATED MODULE: ./src/components/CldTransformation.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CldTransformationvue_type_script_lang_js_ = (CldTransformationvue_type_script_lang_js_); 
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

// CONCATENATED MODULE: ./src/components/CldTransformation.vue
var CldTransformation_render, staticRenderFns




/* normalize component */

var CldTransformation_component = normalizeComponent(
  components_CldTransformationvue_type_script_lang_js_,
  CldTransformation_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CldTransformation = (CldTransformation_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CldPoster.vue?vue&type=script&lang=js&
/**
 * The image to be shown while a video is downloading or until the user hits the play button.
 * This component must be added as a child of the [CldVideo](#cldvideo) component.
 *
 * If this component is not given then the poster image defaults to the middle frame of the source video in jpg format.
 */
/* harmony default export */ var CldPostervue_type_script_lang_js_ = ({
  name: "CldPoster",
  inheritAttrs: false,
  render: function render() {
    console.error("<cld-poster /> should be a immediate descendant of cld-video");
    return null;
  }
});
// CONCATENATED MODULE: ./src/components/CldPoster.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CldPostervue_type_script_lang_js_ = (CldPostervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/CldPoster.vue
var CldPoster_render, CldPoster_staticRenderFns




/* normalize component */

var CldPoster_component = normalizeComponent(
  components_CldPostervue_type_script_lang_js_,
  CldPoster_render,
  CldPoster_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CldPoster = (CldPoster_component.exports);
// CONCATENATED MODULE: ./src/helpers/rejectTransformations.js


function rejectTransformations(slot) {
  return slot == null ? [] : slot.filter(function (child) {
    return !(child.componentOptions && (child.componentOptions.Ctor.options.render === CldTransformation.render || child.componentOptions.Ctor.options.render === CldPoster.render));
  });
}
// CONCATENATED MODULE: ./src/mixins/inContext.js
/**
 * This ensures injection of inherited configuration
 * and application of updates of those
 * either from parent CldContext or plugin options
 */
var inContext = {
  inject: {
    cldOptionsState: {
      default: function _default() {
        return this.cldGlobalContextState;
      }
    }
  },
  data: function data() {
    return {
      cldOptions: {}
    };
  },
  created: function created() {
    var _this = this;

    if (this.cldOptionsState) {
      this.cldOptionsStateSubCancel = this.cldOptionsState.subscribe({
        next: function next(options) {
          _this.cldOptions = options;
        }
      });
    }
  },
  destroyed: function destroyed() {
    if (this.cldOptionsStateSubCancel) {
      this.cldOptionsStateSubCancel();
    }
  }
};
// CONCATENATED MODULE: ./src/mixins/withOptions.js









/**
 * This extracts configuration and transformation options
 * from the element's own and inherited attributes
 */

var withOptions = {
  mixins: [inContext],
  computed: {
    configuration: function configuration() {
      return merge(this.cldOptions.configuration, normalizeConfiguration(this.$attrs));
    },
    contextTransformation: function contextTransformation() {
      return this.cldOptions.transformation || [];
    },
    ownTransformation: function ownTransformation() {
      return normalizeTransformation(this.$attrs);
    },
    ownChildTransformations: function ownChildTransformations() {
      return this.$slots && this.$slots.default && this.$slots.default.length ? compact(this.$slots.default.map(function (child) {
        return child.componentOptions && child.componentOptions.Ctor.options.render === CldTransformation.render ? normalizeTransformation(child.data.attrs) : null;
      })) : [];
    },
    transformation: function transformation() {
      return [].concat(_toConsumableArray(this.contextTransformation), [this.ownTransformation], _toConsumableArray(this.ownChildTransformations)).filter(function (transformation) {
        return typeof_typeof(transformation) === "object" && transformation && Object.keys(transformation).length;
      });
    }
  }
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CldContext.vue?vue&type=script&lang=js&




/**
 * Cloudinary context providing element
 */

/* harmony default export */ var CldContextvue_type_script_lang_js_ = ({
  name: "CldContext",
  inheritAttrs: false,
  mixins: [withOptions],
  provide: function provide() {
    return {
      cldOptionsState: this.nextCldOptionsState
    };
  },
  render: function render(h) {
    return h("div", {
      class: {
        "cld-context": true
      },
      attrs: normalizeNonCloudinary(this.$attrs)
    }, rejectTransformations(this.$slots.default));
  },
  data: function data() {
    return {
      nextCldOptionsState: new State_State({})
    };
  },
  methods: {
    postOptions: function postOptions() {
      this.nextCldOptionsState.next({
        configuration: this.configuration,
        transformation: this.transformation
      });
    }
  },
  created: function created() {
    this.postOptions();
  },
  updated: function updated() {
    this.postOptions();
  },
  destroyed: function destroyed() {
    this.nextCldOptionsState.complete();
  }
});
// CONCATENATED MODULE: ./src/components/CldContext.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CldContextvue_type_script_lang_js_ = (CldContextvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/CldContext.vue
var CldContext_render, CldContext_staticRenderFns




/* normalize component */

var CldContext_component = normalizeComponent(
  components_CldContextvue_type_script_lang_js_,
  CldContext_render,
  CldContext_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CldContext = (CldContext_component.exports);
// CONCATENATED MODULE: ./src/helpers/findInTransformations.js


function findInTransformations(transformations, predicate) {
  if (!transformations) {
    return undefined;
  }

  return find([transformations].concat(_toConsumableArray(transformations.transformation || [])), predicate);
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
// CONCATENATED MODULE: ./src/helpers/responsiveness.js



/**
 * Return styles according to a responsive mode
 * @param {'fill'|'width'|'height'|boolean} mode
 */

function getResponsiveStyle(mode) {
  switch (mode) {
    case "height":
      return {
        display: "block",
        height: "100%",
        width: "auto"
      };

    case true:
    case "width":
      return {
        display: "block",
        width: "100%"
      };

    case "fill":
      return {
        display: "block",
        width: "100%",
        height: "100%"
      };

    default:
      return {};
  }
}
/**
 * Based an selected mode
 * and breakpoints range
 * generates size transformations
 * @param {'fill'|'width'|'height'|boolean} mode
 * @param {object} size
 * @param {array} breakpoints
 */

function getResizeTransformation(mode, size, breakpoints) {
  if (!size) {
    return {};
  }

  switch (mode) {
    case "fill":
      return normalizeTransformation(merge(getDPRAttr(), {
        crop: "fill"
      }, !size ? {
        width: 0,
        height: 0
      } : breakpoints ? {
        width: Math.floor(findBreakpoint(breakpoints, size.width)),
        height: Math.floor(size.height / size.width * findBreakpoint(breakpoints, size.width))
      } : {
        width: Math.floor(size.width),
        height: Math.floor(size.height)
      }));

    case true:
    case "width":
      return normalizeTransformation(merge(getDPRAttr(), {
        crop: "scale",
        width: Math.floor(!size ? 0 : breakpoints ? findBreakpoint(breakpoints, size.width) : size.width)
      }));

    case "height":
      return normalizeTransformation(merge(getDPRAttr(), {
        crop: "scale",
        height: Math.floor(!size ? 0 : breakpoints ? findBreakpoint(breakpoints, size.height) : size.height)
      }));

    default:
      return {};
  }
}
/** Generate DPR transformation if DPR information is available */

function getDPRAttr() {
  return "devicePixelRatio" in window ? {
    dpr: window.devicePixelRatio
  } : {};
}
// CONCATENATED MODULE: ./src/helpers/getPlaceholderURL.js



var placeholderTransformations = {
  lqip: [{
    variables: [["$nh", "ih"], ["$nw", "iw"]],
    crop: "scale",
    width: "20",
    quality: "auto"
  }, {
    crop: "scale",
    width: "$nw",
    height: "$nh"
  }],
  color: [{
    variables: [["$nh", "ih"], ["$nw", "iw"]],
    crop: "scale",
    width: "1",
    quality: "1"
  }, {
    crop: "scale",
    width: "$nw",
    height: "$nh"
  }],
  pixelate: [{
    effect: "pixelate:100"
  }]
};
/** Get media URL with some transformations
 * that will make the image lighter
 * so it can serve as a placeholder
 * for an actual image
 *
 * @param {'lqip'|'color'|'pixelate'} mode How savings should be made
 * @param {Object} options All currently gathered options of the resource request
 */

function getPlaceholderURL(mode, publicId, configuration, transformation) {
  if (typeof mode === "string") {
    if (mode in placeholderTransformations) {
      return external_cloudinary_core_["Cloudinary"].new(configuration).url(publicId, merge(transformation, {
        transformation: [].concat(_toConsumableArray(transformation.transformation || []), _toConsumableArray(placeholderTransformations[mode]))
      }));
    }

    return mode;
  }

  return "";
}
// EXTERNAL MODULE: external "core-js/modules/es7.symbol.async-iterator"
var es7_symbol_async_iterator_ = __webpack_require__("4685");

// EXTERNAL MODULE: external "core-js/modules/es6.symbol"
var es6_symbol_ = __webpack_require__("1750");

// CONCATENATED MODULE: ./src/mixins/size.js





/**
 * If necessary posts root element
 * size information
 * into components data
 */

var size_size = {
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
  methods: {
    updateSizeObservation: function updateSizeObservation() {
      var _this = this;

      if (this.shouldMeasureSize) {
        if (this.$el && !this.cancelSizeListener) {
          this.cancelSizeListener = watchElementSize(this.$el, function (size) {
            var currentSize = pick(_this.size, ["width", "height"]);
            var nextSize = pick(size, ["width", "height"]);

            if (!equal(currentSize, nextSize)) {
              _this.size = nextSize;
            }
          });
        }
      } else {
        if (this.cancelSizeListener) {
          this.cancelSizeListener();
        }
      }
    }
  },
  created: function created() {
    this.updateSizeObservation();
  },
  updated: function updated() {
    this.updateSizeObservation();
  },
  mounted: function mounted() {
    this.updateSizeObservation();
  },
  destroyed: function destroyed() {
    if (this.cancelSizeListener) {
      this.cancelSizeListener();
    }
  }
};
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
          for (var _iterator = entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var entry = _step.value;

            var _size = pick(entry.contentRect, ["width", "height"]);

            delayedCallback(_size);
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
        var size = element.getBoundingClientRect ? pick(element.getBoundingClientRect(), ["width", "height"]) : {
          width: 0,
          height: 0
        };
        delayedCallback(size);
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
  methods: {
    updateVisibilityObservation: function updateVisibilityObservation() {
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
  },
  created: function created() {
    this.updateVisibilityObservation();
  },
  mounted: function mounted() {
    this.updateVisibilityObservation();
  },
  updated: function updated() {
    this.updateVisibilityObservation();
  },
  destroyed: function destroyed() {
    if (this.cancelVisibilityListener) {
      this.cancelVisibilityListener();
    }
  }
};

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
  mixins: [size_size, lazy, withOptions],
  render: function render(h) {
    return h("img", this.imageAttrs, rejectTransformations(this.$slots.default));
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
     * - `false` turns the feature off
     * - `"width"` and `true` uses the available image *width* and allows image *height* to be set dynamically
     * - `"height"` uses the available image *height* and allows image *width* to be set dynamically
     * - `"fill"` uses the available image *width* and *height*
     */
    responsive: {
      type: [Boolean, String],
      default: false
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
    imageAttrs: function imageAttrs() {
      var className = {
        "cld-image": true
      };

      if (!this.publicId || !!findInTransformations(this.transformation, function (t) {
        return t.width === 0 || t.height === 0;
      }) || this.responsive && !this.size) {
        return {
          class: className,
          style: getResponsiveStyle(this.responsive),
          attrs: normalizeNonCloudinary(this.$attrs)
        };
      }

      if (this.lazy && !this.visible) {
        var _src = getPlaceholderURL(this.placeholder, this.publicId, this.configuration, this.transformation);

        return {
          class: className,
          style: getResponsiveStyle(this.responsive),
          attrs: merge(normalizeNonCloudinary(this.$attrs), _src ? {
            src: _src
          } : {})
        };
      }

      var src = external_cloudinary_core_["Cloudinary"].new(this.configuration).url(this.publicId, {
        transformation: [].concat(_toConsumableArray(this.transformation), [getResizeTransformation(this.responsive, this.size, evalBreakpoints(this.breakpoints))], _toConsumableArray(this.progressive ? [{
          flags: ["progressive"]
        }] : []))
      });
      var htmlAttrs = external_cloudinary_core_["Transformation"].new(this.ownTransformation).toHtmlAttributes();
      return {
        class: className,
        style: getResponsiveStyle(this.responsive),
        attrs: merge(normalizeNonCloudinary(this.$attrs), htmlAttrs, src ? {
          src: src
        } : {})
      };
    },
    shouldMeasureSize: function shouldMeasureSize() {
      return !this.responsive;
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
  mixins: [lazy, withOptions],
  render: function render(h) {
    return h("video", this.videoAttrs, this.sources.map(function (attrs) {
      return h("source", {
        key: attrs.mimeType,
        attrs: attrs
      });
    }).concat(rejectTransformations(this.$slots.default)));
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
        return merge.apply(void 0, _toConsumableArray(external_cloudinary_core_["Cloudinary"].DEFAULT_VIDEO_PARAMS.source_types.map(function (type) {
          return kv(type, {});
        })));
      }
    }
  },
  computed: {
    videoAttrs: function videoAttrs() {
      var className = {
        "cld-video": true
      };

      if (!this.publicId || !!findInTransformations(this.transformation, function (t) {
        return t.width === 0 || t.height === 0;
      })) {
        return {
          class: className
        };
      }

      var htmlAttrs = merge({
        poster: this.poster
      }, external_cloudinary_core_["Transformation"].new(this.ownTransformation).toHtmlAttributes());
      return {
        class: className,
        attrs: merge(normalizeNonCloudinary(this.$attrs), htmlAttrs)
      };
    },
    sources: function sources() {
      var _this = this;

      if (!this.publicId || this.lazy && !this.visible) {
        return [];
      }

      return Object.keys(this.sourceTypes).map(function (srcType) {
        var configuration = merge(_this.configuration, normalizeConfiguration(_this.sourceTypes[srcType] || {}));
        var videoChainedTransformation = _this.transformation.transformation || [];
        var sourceTypeChainedTransformation = Array.isArray(_this.sourceTypes[srcType]) ? _this.sourceTypes[srcType].map(normalizeTransformation) : [normalizeTransformation(_this.sourceTypes[srcType] || {})];
        var transformation = [].concat(_toConsumableArray(_this.transformation), _toConsumableArray(videoChainedTransformation), _toConsumableArray(sourceTypeChainedTransformation));
        var src = external_cloudinary_core_["Cloudinary"].new(configuration).url(_this.publicId, {
          resource_type: "video",
          format: srcType,
          transformation: transformation
        });
        var mimeType = "video/" + (srcType === "ogv" ? "ogg" : srcType);
        var htmlAttrs = normalizeNonCloudinary(_this.sourceTypes[srcType] || {});
        return merge(htmlAttrs, {
          mimeType: mimeType,
          src: src
        });
      });
    },
    poster: function poster() {
      // <cld-video poster="url" />
      if (this.$attrs.poster && typeof this.$attrs.poster === "string") {
        return this.$attrs.poster;
      } // <cld-video :poster="{publicId:'x'}" />


      if (this.$attrs.poster && typeof_typeof(this.$attrs.poster) === "object") {
        return external_cloudinary_core_["Cloudinary"].new(merge(this.configuration, normalizeConfiguration(this.$attrs.poster))).url(this.$attrs.poster.publicId || this.publicId, merge(this.$attrs.poster.publicId ? {
          resource_type: "image"
        } : {
          resource_type: "video",
          format: "jpeg"
        }, this.transformation, {
          transformation: [].concat(_toConsumableArray(this.transformation.transformation ? this.transformation.transformation : []), _toConsumableArray((Array.isArray(this.$attrs.poster) ? this.$attrs.poster : [this.$attrs.poster]).map(normalizeTransformation)))
        }));
      } // <cld-video> <cld-poster publicId="x" /> </cld-video>


      var posterChild = this.$slots.default ? find(this.$slots.default, function (child) {
        return child.componentOptions && child.componentOptions.Ctor.options.render === CldPoster.render;
      }) : null;

      if (posterChild) {
        var posterAttrs = normalizeTransformation(posterChild.data && posterChild.data.attrs || {});
        var posterId = (posterChild.data && posterChild.data.attrs || {}).publicId;
        var posterTransformations = (posterChild.componentOptions.children || []).filter(function (child) {
          return child.componentOptions && child.componentOptions.Ctor.options.render === CldTransformation.render;
        });
        return external_cloudinary_core_["Cloudinary"].new(merge(this.configuration, normalizeConfiguration(posterAttrs))).url(posterId || this.publicId, merge(posterId ? {
          resource_type: "image"
        } : {
          resource_type: "video",
          format: "jpeg"
        }, posterAttrs, {
          transformation: [].concat(_toConsumableArray(posterAttrs.transformation || []), _toConsumableArray(posterTransformations.map(function (posterTransformation) {
            return normalizeTransformation(posterTransformation.data && posterTransformation.data.attrs || {});
          })))
        }));
      } // default poster


      return external_cloudinary_core_["Cloudinary"].new(this.configuration).url(this.publicId, merge({
        resource_type: "video",
        format: "jpeg"
      }, this.transformation));
    }
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











var allComponents = [CldContext, CldImage, CldVideo];
function install(Vue, options) {
  if (Vue.CldInstalled) {
    throw new Error("Cloudinary plugin already installed");
  }

  Vue.CldInstalled = true;
  options = options || {};
  allComponents.forEach(function (component) {
    var userComponentName = getUserComponentName(options.components, component.name);

    if (userComponentName != null) {
      Vue.component(userComponentName, component);
    }
  });

  if (options.configuration) {
    Vue.prototype.cldGlobalContextState = new State_State({
      configuration: normalizeConfiguration(options.configuration)
    });
  }
}

function getUserComponentName(components, name) {
  if (!components) {
    return name;
  } // { components: ['CldImage'] }
  // and
  // { components: [CldImage] }


  if (Array.isArray(components)) {
    var entry = find(components, function (component) {
      return typeof component === "string" && component === name || typeof_typeof(component) === "object" && component != null && component.name === name;
    });

    if (entry == null) {
      return null;
    }

    if (typeof entry === "string") {
      return entry;
    }

    return entry.name;
  } // { components: { CldImage: true } }


  if (typeof components[name] === "boolean") {
    return components[name] === true ? name : null;
  } // { components: { CldImage: 'CloudinaryImage' } }


  if (typeof components[name] === "string") {
    return components[name];
  } // { components: { CloudinaryImage: 'CldImage' } }
  // and
  // { components: { CloudinaryImage: CldImage } }


  var found = find(Object.keys(components), function (k) {
    return typeof components[k] === "string" && components[k] === name || typeof_typeof(components[k]) === "object" && components[k] != null && components[k].name === name;
  });
  return found === undefined ? null : found;
}
// CONCATENATED MODULE: ./src/index.js




var src_components = {
  CldContext: CldContext,
  CldImage: CldImage,
  CldVideo: CldVideo
};

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport plugin */__webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin_namespaceObject; });
/* concated harmony reexport components */__webpack_require__.d(__webpack_exports__, "components", function() { return src_components; });
/* concated harmony reexport CldContext */__webpack_require__.d(__webpack_exports__, "CldContext", function() { return CldContext; });
/* concated harmony reexport CldImage */__webpack_require__.d(__webpack_exports__, "CldImage", function() { return CldImage; });
/* concated harmony reexport CldVideo */__webpack_require__.d(__webpack_exports__, "CldVideo", function() { return CldVideo; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (plugin_namespaceObject);



/***/ })

/******/ });
//# sourceMappingURL=Cloudinary.common.js.map