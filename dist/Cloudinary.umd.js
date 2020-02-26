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

/***/ "3c59":
/***/ (function(module, exports) {

module.exports = require("cloudinary-core");

/***/ }),

/***/ "dc65":
/***/ (function(module, exports) {

module.exports = require("current-script-polyfill");

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("dc65")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./src/plugin.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function plugin_install(Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (Vue.CldInstalled) {
    throw new Error("Cloudinary plugin already installed");
  }

  Vue.CldInstalled = true;
  initComponents(Vue, options);
}

function registerComponents(Vue) {
  var components = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var defaultConfigurations = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (!components) {
    throw new Error("No component found.");
  }

  var _loop = function _loop(key) {
    var component = components[key];

    if (component) {
      Vue.component(key, _objectSpread({}, component, {
        data: function data() {
          return _objectSpread({}, component.data ? component.data() : {}, {
            defaultConfigurations: defaultConfigurations
          });
        }
      }));
    }
  };

  for (var key in components) {
    _loop(key);
  }
}

function initComponents(Vue, options) {
  var configuration = options.configuration;
  var components = Array.isArray(options.components) ? options.components.reduce(function (obj, component) {
    return _objectSpread({}, obj, _defineProperty({}, component.name, component));
  }, {}) : options.components;
  registerComponents(Vue, components, configuration);
}
// EXTERNAL MODULE: external "cloudinary-core"
var external_cloudinary_core_ = __webpack_require__("3c59");

// CONCATENATED MODULE: ./src/utils/debounce.js
var debounce = function debounce(fn, timeout) {
  var forceUpdateTimeoutToken = null;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    clearTimeout(forceUpdateTimeoutToken);
    forceUpdateTimeoutToken = setTimeout(function () {
      return fn.apply(void 0, args);
    }, timeout);
  };
};
// CONCATENATED MODULE: ./src/utils/find.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Returns the first found element of `arr` that satisfies `predicate` check
 * @param {Array} arr 
 * @param {Function} predicate 
 */
var find = function find(arr, predicate) {
  if (!(arr instanceof Array)) {
    throw new Error("find 1st arg must be Array, is: ".concat(typeof subject === "undefined" ? "undefined" : _typeof(subject)));
  }

  for (var i = 0; i < arr.length; i++) {
    var element = arr[i];

    if (predicate(element)) {
      return element;
    }
  }

  return null;
};
// CONCATENATED MODULE: ./src/utils/compact.js
/**
 * Returns free-of-falsy-element array from input `arr`
 * @param {Array} arr 
 */
var compact = function compact(arr) {
  return arr.filter(Boolean);
};
// CONCATENATED MODULE: ./src/utils/range.js
/**
 * Returns an array containing all numbers between and including `min` and `max` in a distance of `step` from each other
 * @param {Number} min
 * @param {Number} max
 * @param {Number} step
 */
var range = function range(min, max, step) {
  var result = [];

  for (var i = min; i <= max; i += step) {
    result.push(i);
  }

  return result;
};
// CONCATENATED MODULE: ./src/utils/pick.js
/**
 * Returns new object contains only `originalObj`'s properities that exist in `keysToPick` 
 * @param {Object} originalObj 
 * @param {Array} keysToPick 
 */
var pick = function pick() {
  var originalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var keysToPick = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var target = {};

  for (var i = 0; i < keysToPick.length; i++) {
    var key = keysToPick[i];

    if (originalObj.hasOwnProperty(key)) {
      target[key] = originalObj[key];
    }
  }

  return target;
};
// CONCATENATED MODULE: ./src/utils/index.js





// CONCATENATED MODULE: ./src/helpers/attributes.js



var attributes_hasZeroSizeTransformation = function hasZeroSizeTransformation(transformations) {
  return find(transformations, function (t) {
    return t.width === 0 || t.height === 0;
  });
};
/** List of all configuration fields as they are needed in components attributes */

var attributes_configuration = external_cloudinary_core_["Configuration"].CONFIG_PARAMS.map(external_cloudinary_core_["Util"].camelCase);
/** List of all transformation fields as they are needed in components attributes */

var attributes_transformation = external_cloudinary_core_["Transformation"].methods;
var mappedCfgMethods = attributes_transformation.concat(attributes_configuration);
/** Extract configuration options for provided object */

function normalizeConfiguration() {
  var cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var formattedConfigs = external_cloudinary_core_["Util"].withSnakeCaseKeys(cfg);

  if (formattedConfigs.secure) {
    formattedConfigs.secure = formattedConfigs.secure === true || formattedConfigs.secure === 'true';
  }

  return pick(formattedConfigs, external_cloudinary_core_["Configuration"].CONFIG_PARAMS);
}
/** Extract transformation options for provided object */

function normalizeTransformation() {
  var cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return external_cloudinary_core_["Util"].withSnakeCaseKeys(pick(cfg, attributes_transformation));
}
/** Extract fields that are not used for configuration nor transformation in provided object */

var normalizeNonCloudinary = function normalizeNonCloudinary() {
  var currConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var cleanCfgs = {};
  Object.keys(currConfig).forEach(function (key) {
    if (mappedCfgMethods.indexOf(key) === -1) {
      cleanCfgs[key] = currConfig[key];
    }
  });
  return cleanCfgs;
};
var attributes_getHTMLAttributes = function getHTMLAttributes(options) {
  return external_cloudinary_core_["Transformation"].new(options).toHtmlAttributes();
};
// CONCATENATED MODULE: ./src/mixins/withOptions.js
function withOptions_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function withOptions_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { withOptions_ownKeys(source, true).forEach(function (key) { withOptions_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { withOptions_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function withOptions_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 * This extracts configuration and transformation options
 * from the element's own and inherited attributes
 */

var withOptions = {
  computed: {
    configuration: function configuration() {
      return normalizeConfiguration(withOptions_objectSpread({}, this.defaultConfigurations || [], {}, this.$props || [], {}, this.contextConfiguration, {}, this.$attrs));
    },
    options: function options() {
      return normalizeTransformation(this.$attrs);
    }
  }
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CldContext/CldContext.vue?vue&type=script&lang=js&
//


/**
 * Cloudinary context providing element
 */

/* harmony default export */ var CldContextvue_type_script_lang_js_ = ({
  name: "CldContext",
  inheritAttrs: false,
  mixins: [withOptions],
  provide: function provide() {
    return {
      contextConfiguration: this.configuration
    };
  },
  computed: {
    attributes: function attributes() {
      return normalizeNonCloudinary(this.$attrs);
    }
  },
  render: function render(h) {
    return h("div", {
      class: {
        "cld-context": true
      },
      attrs: this.attributes
    }, this.$slots.default);
  }
});
// CONCATENATED MODULE: ./src/components/CldContext/CldContext.vue?vue&type=script&lang=js&
 /* harmony default export */ var CldContext_CldContextvue_type_script_lang_js_ = (CldContextvue_type_script_lang_js_); 
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

// CONCATENATED MODULE: ./src/components/CldContext/CldContext.vue
var render, staticRenderFns




/* normalize component */

var component = normalizeComponent(
  CldContext_CldContextvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CldContext = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f83c5bd8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CldImage/CldImage.vue?vue&type=template&id=6d90b5f3&
var CldImagevue_type_template_id_6d90b5f3_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cld-image",style:(_vm.style)},[_c('img',_vm._b({style:(_vm.style)},'img',_vm.imageAttrs,false)),_vm._t("default")],2)}
var CldImagevue_type_template_id_6d90b5f3_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CldImage/CldImage.vue?vue&type=template&id=6d90b5f3&

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
function responsiveness_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function responsiveness_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { responsiveness_ownKeys(source, true).forEach(function (key) { responsiveness_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { responsiveness_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function responsiveness_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



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
      var computedSize = breakpoints ? {
        width: Math.floor(findBreakpoint(breakpoints, size.width)),
        height: Math.floor(size.height / size.width * findBreakpoint(breakpoints, size.width))
      } : {
        width: Math.floor(size.width),
        height: Math.floor(size.height)
      };
      return normalizeTransformation(responsiveness_objectSpread({}, getDPRAttr(), {
        crop: "fill"
      }, computedSize));

    case true:
    case "width":
      return normalizeTransformation(responsiveness_objectSpread({}, getDPRAttr(), {
        crop: "scale",
        width: Math.floor(breakpoints ? findBreakpoint(breakpoints, size.width) : size.width)
      }));

    case "height":
      return normalizeTransformation(responsiveness_objectSpread({}, getDPRAttr(), {
        crop: "scale",
        height: Math.floor(breakpoints ? findBreakpoint(breakpoints, size.height) : size.height)
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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function getPlaceholderURL_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function getPlaceholderURL_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { getPlaceholderURL_ownKeys(source, true).forEach(function (key) { getPlaceholderURL_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { getPlaceholderURL_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function getPlaceholderURL_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



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
      return external_cloudinary_core_["Cloudinary"].new(configuration).url(publicId, getPlaceholderURL_objectSpread({}, transformation, {
        transformation: [].concat(_toConsumableArray(transformation.transformation || []), _toConsumableArray(placeholderTransformations[mode]))
      }));
    }

    return mode;
  }

  return "";
}
// CONCATENATED MODULE: ./src/mixins/size.js
function size_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { size_typeof = function _typeof(obj) { return typeof obj; }; } else { size_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return size_typeof(obj); }


/**
 * If necessary posts root element
 * size information
 * into components data
 */

var size_size = {
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
            if (!size) return;

            if (!_this.size || _this.size.width !== size.width || _this.size.height !== size.height) {
              _this.size = size;
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

  if (window && (typeof window === "undefined" ? "undefined" : size_typeof(window)) === "object") {
    if ("ResizeObserver" in window) {
      var resizeObserver = new ResizeObserver(function (entries) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var entry = _step.value;
            delayedCallback({
              width: entry.contentRect.width,
              height: entry.contentRect.height
            });
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
        var rect = element.getBoundingClientRect();
        delayedCallback({
          width: rect.width,
          height: rect.height
        });
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
function lazy_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { lazy_typeof = function _typeof(obj) { return typeof obj; }; } else { lazy_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return lazy_typeof(obj); }

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
  } else {
    listener(true);
    return noop;
  }
}

function noop() {}
// CONCATENATED MODULE: ./src/helpers/URLGenerator.js

var URLGenerator_generateUrl = function generateUrl(_ref) {
  var publicId = _ref.publicId,
      configuration = _ref.configuration,
      transformation = _ref.transformation;
  return external_cloudinary_core_["Cloudinary"].new(configuration).url(publicId, transformation);
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CldImage/CldImage.vue?vue&type=script&lang=js&
function CldImagevue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function CldImagevue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CldImagevue_type_script_lang_js_ownKeys(source, true).forEach(function (key) { CldImagevue_type_script_lang_js_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CldImagevue_type_script_lang_js_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function CldImagevue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CldImagevue_type_script_lang_js_toConsumableArray(arr) { return CldImagevue_type_script_lang_js_arrayWithoutHoles(arr) || CldImagevue_type_script_lang_js_iterableToArray(arr) || CldImagevue_type_script_lang_js_nonIterableSpread(); }

function CldImagevue_type_script_lang_js_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function CldImagevue_type_script_lang_js_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function CldImagevue_type_script_lang_js_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

//
//
//
//
//
//










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
  provide: function provide() {
    return {
      registerTransformation: this.registerTransformation
    };
  },
  inject: {
    contextConfiguration: {
      default: {}
    }
  },
  // mixins: [size, lazy, withOptions],
  mixins: [lazy, size_size, withOptions],
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
  data: function data() {
    return {
      transformations: []
    };
  },
  methods: {
    registerTransformation: function registerTransformation(transformation) {
      this.transformations = [].concat(CldImagevue_type_script_lang_js_toConsumableArray(this.transformations), [normalizeTransformation(transformation)]);
    },
    computeLazyLoadSrc: function computeLazyLoadSrc() {
      var src = getPlaceholderURL(this.placeholder, this.publicId, this.configuration, this.transformOptions);
      return CldImagevue_type_script_lang_js_objectSpread({}, this.nonCldAttrs, {
        src: src
      });
    }
  },
  computed: {
    isWithoutTransformation: function isWithoutTransformation() {
      return !this.publicId || attributes_hasZeroSizeTransformation(this.transformations) || this.responsive && !this.size;
    },
    style: function style() {
      return getResponsiveStyle(this.responsive);
    },
    nonCldAttrs: function nonCldAttrs() {
      return normalizeNonCloudinary(this.$attrs);
    },
    transformOptions: function transformOptions() {
      return CldImagevue_type_script_lang_js_objectSpread({}, this.options, {
        transformation: [].concat(CldImagevue_type_script_lang_js_toConsumableArray(this.options.transformation || []), CldImagevue_type_script_lang_js_toConsumableArray(this.transformations))
      });
    },
    isLazyLoadInvisible: function isLazyLoadInvisible() {
      return this.lazy && !this.visible;
    },
    imageAttrs: function imageAttrs() {
      if (this.isWithoutTransformation) {
        return this.nonCldAttrs;
      }

      if (this.isLazyLoadInvisible) {
        return this.computeLazyLoadSrc();
      }

      var htmlAttrs = attributes_getHTMLAttributes(this.options);
      var src = URLGenerator_generateUrl({
        publicId: this.publicId,
        configuration: this.configuration,
        transformation: CldImagevue_type_script_lang_js_objectSpread({}, this.options, {
          transformation: [].concat(CldImagevue_type_script_lang_js_toConsumableArray(this.transformOptions.transformation), [getResizeTransformation(this.responsive, this.size, evalBreakpoints(this.breakpoints))], CldImagevue_type_script_lang_js_toConsumableArray(this.progressive ? [{
            flags: ["progressive"]
          }] : []))
        })
      });
      return CldImagevue_type_script_lang_js_objectSpread({}, this.nonCldAttrs, {}, htmlAttrs, {
        src: src
      });
    },
    shouldMeasureSize: function shouldMeasureSize() {
      return this.responsive !== false;
    }
  }
});
// CONCATENATED MODULE: ./src/components/CldImage/CldImage.vue?vue&type=script&lang=js&
 /* harmony default export */ var CldImage_CldImagevue_type_script_lang_js_ = (CldImagevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/CldImage/CldImage.vue





/* normalize component */

var CldImage_component = normalizeComponent(
  CldImage_CldImagevue_type_script_lang_js_,
  CldImagevue_type_template_id_6d90b5f3_render,
  CldImagevue_type_template_id_6d90b5f3_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CldImage = (CldImage_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f83c5bd8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CldVideo/CldVideo.vue?vue&type=template&id=cf33497c&
var CldVideovue_type_template_id_cf33497c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cld-video"},[_c('video',_vm._b({},'video',_vm.videoAttrs,false),_vm._l((_vm.sources),function(source,index){return _c('source',_vm._b({key:index},'source',source,false))}),0),_vm._t("default")],2)}
var CldVideovue_type_template_id_cf33497c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CldVideo/CldVideo.vue?vue&type=template&id=cf33497c&

// CONCATENATED MODULE: ./src/helpers/findInTransformations.js

function findInTransformations(transformations, predicate) {
  if (!transformations) {
    return undefined;
  }

  return find([].concat(transformations).concat(transformations.transformation || []), predicate);
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CldVideo/CldVideo.vue?vue&type=script&lang=js&
function CldVideovue_type_script_lang_js_toConsumableArray(arr) { return CldVideovue_type_script_lang_js_arrayWithoutHoles(arr) || CldVideovue_type_script_lang_js_iterableToArray(arr) || CldVideovue_type_script_lang_js_nonIterableSpread(); }

function CldVideovue_type_script_lang_js_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function CldVideovue_type_script_lang_js_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function CldVideovue_type_script_lang_js_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function CldVideovue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function CldVideovue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CldVideovue_type_script_lang_js_ownKeys(source, true).forEach(function (key) { CldVideovue_type_script_lang_js_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CldVideovue_type_script_lang_js_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function CldVideovue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//







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
  provide: function provide() {
    return {
      registerTransformation: this.registerTransformation,
      registerPoster: this.registerPoster
    };
  },
  mixins: [lazy, withOptions],
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
        return external_cloudinary_core_["Cloudinary"].DEFAULT_VIDEO_PARAMS.source_types.reduce(function (currSrc, type) {
          return CldVideovue_type_script_lang_js_objectSpread({}, currSrc, CldVideovue_type_script_lang_js_defineProperty({}, type, {}));
        }, {});
      }
    }
  },
  data: function data() {
    return {
      transformations: [],
      posterAttrs: {}
    };
  },
  methods: {
    registerPoster: function registerPoster(posterOptions) {
      this.posterAttrs = CldVideovue_type_script_lang_js_objectSpread({}, this.posterAttrs, {}, posterOptions);
    },
    registerTransformation: function registerTransformation(transformation) {
      this.transformations = [].concat(CldVideovue_type_script_lang_js_toConsumableArray(this.transformations), [normalizeTransformation(transformation)]);
    }
  },
  computed: {
    videoAttrs: function videoAttrs() {
      if (!this.publicId || !!findInTransformations(this.options, function (t) {
        return t.width === 0 || t.height === 0;
      })) {
        return {};
      }

      var htmlAttrs = CldVideovue_type_script_lang_js_objectSpread({
        poster: this.posterUrl
      }, attributes_getHTMLAttributes(this.options));

      var normalizedNonCloudinaryAttrs = normalizeNonCloudinary(this.$attrs);
      return CldVideovue_type_script_lang_js_objectSpread({}, normalizedNonCloudinaryAttrs, {}, htmlAttrs);
    },
    sources: function sources() {
      var _this = this;

      if (!this.publicId || this.lazy && !this.visible) {
        return [];
      }

      var sources = Object.keys(this.sourceTypes).map(function (srcType) {
        var srcTypeOptions = _this.sourceTypes[srcType];
        var srcTypeChainedTransformation = Array.isArray(srcTypeOptions) ? srcTypeOptions.map(normalizeTransformation) : [normalizeTransformation(srcTypeOptions)];
        var src = URLGenerator_generateUrl({
          configuration: CldVideovue_type_script_lang_js_objectSpread({}, _this.configuration, {}, normalizeConfiguration(_this.sourceTypes[srcType])),
          publicId: _this.publicId,
          transformation: CldVideovue_type_script_lang_js_objectSpread({
            resource_type: "video",
            format: srcType
          }, _this.options, {
            transformation: [].concat(CldVideovue_type_script_lang_js_toConsumableArray(_this.options.transformation || []), CldVideovue_type_script_lang_js_toConsumableArray(srcTypeChainedTransformation), CldVideovue_type_script_lang_js_toConsumableArray(_this.transformations))
          })
        });
        var htmlAttrs = normalizeNonCloudinary(_this.sourceTypes[srcType] || {});
        return CldVideovue_type_script_lang_js_objectSpread({}, htmlAttrs, {
          mimeType: "video/".concat(srcType === "ogv" ? "ogg" : srcType),
          type: "video/".concat(srcType === "ogv" ? "ogg" : srcType),
          src: src
        });
      });
      return sources;
    },
    posterUrl: function posterUrl() {
      // <cld-video poster="url" />
      if (this.$attrs.poster && typeof this.$attrs.poster === "string") {
        return this.$attrs.poster;
      }

      var attrPosterOptions = this.$attrs.poster || {};
      var posterOptions = this.posterAttrs || {};
      var injectedOptions = this.options || {};
      var normalizedAttrsTransformation = normalizeTransformation(attrPosterOptions);

      var configuration = CldVideovue_type_script_lang_js_objectSpread({}, this.configuration, {}, normalizeConfiguration(attrPosterOptions), {}, posterOptions.configuration);

      var transformation = [].concat(CldVideovue_type_script_lang_js_toConsumableArray(injectedOptions.transformation || []), [normalizedAttrsTransformation], CldVideovue_type_script_lang_js_toConsumableArray(posterOptions.transformation || [])); // <cld-video :poster="{publicId:'x'}" />
      // <cld-video> <cld-poster publicId="x" /> </cld-video>

      var poster = {
        configuration: configuration,
        publicId: posterOptions.publicId || attrPosterOptions.publicId || this.publicId,
        transformation: CldVideovue_type_script_lang_js_objectSpread({
          resource_type: posterOptions.publicId || attrPosterOptions.publicId ? "image" : "video",
          format: posterOptions.publicId || attrPosterOptions.publicId ? null : 'jpeg'
        }, posterOptions || injectedOptions, {
          transformation: transformation
        })
      };
      return URLGenerator_generateUrl(poster);
    }
  }
});
// CONCATENATED MODULE: ./src/components/CldVideo/CldVideo.vue?vue&type=script&lang=js&
 /* harmony default export */ var CldVideo_CldVideovue_type_script_lang_js_ = (CldVideovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/CldVideo/CldVideo.vue





/* normalize component */

var CldVideo_component = normalizeComponent(
  CldVideo_CldVideovue_type_script_lang_js_,
  CldVideovue_type_template_id_cf33497c_render,
  CldVideovue_type_template_id_cf33497c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CldVideo = (CldVideo_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CldVideo/CldPoster.vue?vue&type=script&lang=js&
function CldPostervue_type_script_lang_js_toConsumableArray(arr) { return CldPostervue_type_script_lang_js_arrayWithoutHoles(arr) || CldPostervue_type_script_lang_js_iterableToArray(arr) || CldPostervue_type_script_lang_js_nonIterableSpread(); }

function CldPostervue_type_script_lang_js_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function CldPostervue_type_script_lang_js_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function CldPostervue_type_script_lang_js_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


/**
 * The image to be shown while a video is downloading or until the user hits the play button.
 * This component must be added as a child of the [CldVideo](#cldvideo) component.
 *
 * If this component is not given then the poster image defaults to the middle frame of the source video in jpg format.
 */

/* harmony default export */ var CldPostervue_type_script_lang_js_ = ({
  name: "CldPoster",
  inject: {
    registerPoster: {
      default: null
    }
  },
  provide: function provide() {
    return {
      registerTransformation: this.registerTransformation
    };
  },
  data: function data() {
    return {
      transformations: []
    };
  },
  mounted: function mounted() {
    if (this.registerPoster) {
      var posterAttrs = this.$attrs || {};
      var configuration = normalizeConfiguration(posterAttrs);
      var transformation = [normalizeTransformation(posterAttrs)].concat(CldPostervue_type_script_lang_js_toConsumableArray(this.transformations));
      this.registerPoster({
        configuration: configuration,
        publicId: posterAttrs.publicId,
        transformation: transformation
      }); // this.registerPoster({...(this.$attrs || {}), transformation: this.transformations });
    }
  },
  methods: {
    registerTransformation: function registerTransformation(transformation) {
      this.transformations = [].concat(CldPostervue_type_script_lang_js_toConsumableArray(this.transformations), [normalizeTransformation(transformation)]);
    }
  },
  render: function render(h) {
    return h("div", {}, this.$slots.default);
  }
});
// CONCATENATED MODULE: ./src/components/CldVideo/CldPoster.vue?vue&type=script&lang=js&
 /* harmony default export */ var CldVideo_CldPostervue_type_script_lang_js_ = (CldPostervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/CldVideo/CldPoster.vue
var CldPoster_render, CldPoster_staticRenderFns




/* normalize component */

var CldPoster_component = normalizeComponent(
  CldVideo_CldPostervue_type_script_lang_js_,
  CldPoster_render,
  CldPoster_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CldPoster = (CldPoster_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CldTransformation/CldTransformation.vue?vue&type=script&lang=js&
/**
 * One or more [transformation parameters](https://cloudinary.com/documentation/image_transformation_reference)
 * in a single component, or a set of [chained transformations](https://cloudinary.com/documentation/image_transformations#chained_transformations) in multiple components.
 */
/* harmony default export */ var CldTransformationvue_type_script_lang_js_ = ({
  name: "CldTransformation",
  inject: {
    registerTransformation: {
      default: null
    }
  },
  created: function created() {
    if (this.registerTransformation) {
      this.registerTransformation(this.$attrs || {});
    }
  },
  render: function render() {
    return null;
  }
});
// CONCATENATED MODULE: ./src/components/CldTransformation/CldTransformation.vue?vue&type=script&lang=js&
 /* harmony default export */ var CldTransformation_CldTransformationvue_type_script_lang_js_ = (CldTransformationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/CldTransformation/CldTransformation.vue
var CldTransformation_render, CldTransformation_staticRenderFns




/* normalize component */

var CldTransformation_component = normalizeComponent(
  CldTransformation_CldTransformationvue_type_script_lang_js_,
  CldTransformation_render,
  CldTransformation_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CldTransformation = (CldTransformation_component.exports);
// CONCATENATED MODULE: ./src/index.js
function src_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function src_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { src_ownKeys(source, true).forEach(function (key) { src_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { src_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function src_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Cloudinary = {
  install: function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    plugin_install(Vue, options.components ? options : src_objectSpread({}, options, {
      components: {
        CldContext: CldContext,
        CldImage: CldImage,
        CldVideo: CldVideo,
        CldTransformation: CldTransformation,
        CldPoster: CldPoster
      }
    }));
  }
};

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport Cloudinary */__webpack_require__.d(__webpack_exports__, "Cloudinary", function() { return Cloudinary; });
/* concated harmony reexport CldContext */__webpack_require__.d(__webpack_exports__, "CldContext", function() { return CldContext; });
/* concated harmony reexport CldImage */__webpack_require__.d(__webpack_exports__, "CldImage", function() { return CldImage; });
/* concated harmony reexport CldVideo */__webpack_require__.d(__webpack_exports__, "CldVideo", function() { return CldVideo; });
/* concated harmony reexport CldTransformation */__webpack_require__.d(__webpack_exports__, "CldTransformation", function() { return CldTransformation; });
/* concated harmony reexport CldPoster */__webpack_require__.d(__webpack_exports__, "CldPoster", function() { return CldPoster; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (Cloudinary);



/***/ })

/******/ });
});
//# sourceMappingURL=Cloudinary.umd.js.map