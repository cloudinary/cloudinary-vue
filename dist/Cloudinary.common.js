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

/***/ "04f7":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/esm/defineProperty");

/***/ }),

/***/ "139f":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.for-each");

/***/ }),

/***/ "169d":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.reduce");

/***/ }),

/***/ "18d2":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.concat");

/***/ }),

/***/ "19e6":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/core-js/object/get-own-property-descriptors");

/***/ }),

/***/ "255a":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/core-js/object/define-property");

/***/ }),

/***/ "25f4":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/core-js/object/get-own-property-symbols");

/***/ }),

/***/ "2ae6":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/core-js/array/is-array");

/***/ }),

/***/ "3732":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/esm/arrayWithoutHoles");

/***/ }),

/***/ "3c59":
/***/ (function(module, exports) {

module.exports = require("cloudinary-core");

/***/ }),

/***/ "4a38":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.filter");

/***/ }),

/***/ "51e9":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.symbol.description");

/***/ }),

/***/ "5a5e":
/***/ (function(module, exports) {

module.exports = require("@vue/babel-helper-vue-jsx-merge-props");

/***/ }),

/***/ "5fc9":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/core-js/object/define-properties");

/***/ }),

/***/ "6049":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.symbol");

/***/ }),

/***/ "61b7":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/esm/unsupportedIterableToArray");

/***/ }),

/***/ "6579":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.slice");

/***/ }),

/***/ "850c":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.to-string");

/***/ }),

/***/ "9bb0":
/***/ (function(module, exports) {

module.exports = require("@soda/get-current-script");

/***/ }),

/***/ "bcd8":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.function.name");

/***/ }),

/***/ "bcda":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom-collections.for-each");

/***/ }),

/***/ "c08d":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/core-js/object/keys");

/***/ }),

/***/ "cb18":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/core-js/object/get-own-property-descriptor");

/***/ }),

/***/ "daf4":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/core-js/get-iterator");

/***/ }),

/***/ "df93":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/core-js/object/freeze");

/***/ }),

/***/ "e3b9":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/core-js/symbol");

/***/ }),

/***/ "e3f0":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime-corejs2/core-js/symbol/iterator");

/***/ }),

/***/ "efd2":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/esm/nonIterableSpread");

/***/ }),

/***/ "f705":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.map");

/***/ }),

/***/ "f906":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/esm/iterableToArray");

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Cloudinary", function() { return /* reexport */ Cloudinary; });
__webpack_require__.d(__webpack_exports__, "CldContext", function() { return /* reexport */ CldContext; });
__webpack_require__.d(__webpack_exports__, "CldImage", function() { return /* reexport */ CldImage; });
__webpack_require__.d(__webpack_exports__, "CldVideo", function() { return /* reexport */ CldVideo; });
__webpack_require__.d(__webpack_exports__, "CldTransformation", function() { return /* reexport */ CldTransformation; });
__webpack_require__.d(__webpack_exports__, "CldPoster", function() { return /* reexport */ CldPoster; });
__webpack_require__.d(__webpack_exports__, "CldPlaceholder", function() { return /* reexport */ CldPlaceholder; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("9bb0")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var setPublicPath_src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (setPublicPath_src) {
    __webpack_require__.p = setPublicPath_src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external "core-js/modules/es.array.filter"
var es_array_filter_ = __webpack_require__("4a38");

// EXTERNAL MODULE: external "core-js/modules/es.array.for-each"
var es_array_for_each_ = __webpack_require__("139f");

// EXTERNAL MODULE: external "core-js/modules/web.dom-collections.for-each"
var web_dom_collections_for_each_ = __webpack_require__("bcda");

// EXTERNAL MODULE: external "@babel/runtime-corejs2/core-js/object/define-property"
var define_property_ = __webpack_require__("255a");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property_);

// EXTERNAL MODULE: external "@babel/runtime-corejs2/core-js/object/define-properties"
var define_properties_ = __webpack_require__("5fc9");
var define_properties_default = /*#__PURE__*/__webpack_require__.n(define_properties_);

// EXTERNAL MODULE: external "@babel/runtime-corejs2/core-js/object/get-own-property-descriptors"
var get_own_property_descriptors_ = __webpack_require__("19e6");
var get_own_property_descriptors_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptors_);

// EXTERNAL MODULE: external "@babel/runtime-corejs2/core-js/object/get-own-property-descriptor"
var get_own_property_descriptor_ = __webpack_require__("cb18");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor_);

// EXTERNAL MODULE: external "@babel/runtime-corejs2/core-js/object/get-own-property-symbols"
var get_own_property_symbols_ = __webpack_require__("25f4");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols_);

// EXTERNAL MODULE: external "@babel/runtime-corejs2/core-js/object/keys"
var keys_ = __webpack_require__("c08d");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/esm/defineProperty"
var defineProperty_ = __webpack_require__("04f7");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js











function ownKeys(object, enumerableOnly) {
  var keys = keys_default()(object);

  if (get_own_property_symbols_default.a) {
    var symbols = get_own_property_symbols_default()(object);

    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return get_own_property_descriptor_default()(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (get_own_property_descriptors_default.a) {
      define_properties_default()(target, get_own_property_descriptors_default()(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        define_property_default()(target, key, get_own_property_descriptor_default()(source, key));
      });
    }
  }

  return target;
}
// EXTERNAL MODULE: external "core-js/modules/es.array.reduce"
var es_array_reduce_ = __webpack_require__("169d");

// EXTERNAL MODULE: external "core-js/modules/es.function.name"
var es_function_name_ = __webpack_require__("bcd8");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// EXTERNAL MODULE: external "@babel/runtime-corejs2/core-js/array/is-array"
var is_array_ = __webpack_require__("2ae6");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array_);

// CONCATENATED MODULE: ./src/plugin.js





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

  /* eslint-disable-next-line */
  if (!defaultConfigurations) {
    console.warn('🛑 There is no default configuration for Cloudinary found!');
  }

  for (var key in components) {
    var component = components[key];

    if (component) {
      (function () {
        var _data = component.data ? component.data() : {};

        Vue.component(key, _objectSpread2(_objectSpread2({}, component), {}, {
          data: function data() {
            return _objectSpread2(_objectSpread2({}, _data), {}, {
              defaultConfigurations: defaultConfigurations
            });
          }
        }));
      })();
    }
  }
}

function initComponents(Vue, options) {
  var configuration = options.configuration;
  var components = is_array_default()(options.components) ? options.components.reduce(function (obj, component) {
    return _objectSpread2(_objectSpread2({}, obj), {}, _defineProperty({}, component.name, component));
  }, {}) : options.components;
  registerComponents(Vue, components, configuration);
}
// EXTERNAL MODULE: external "@babel/runtime-corejs2/core-js/object/freeze"
var freeze_ = __webpack_require__("df93");
var freeze_default = /*#__PURE__*/__webpack_require__.n(freeze_);

// CONCATENATED MODULE: ./src/constants.js




var _IMAGE_WITH_PLACEHOLD;

var ACCESSIBILITY_TRANSFORMATIONS = {
  'darkmode': {
    effect: 'tint:75:black'
  },
  'brightmode': {
    effect: 'tint:50:white'
  },
  'monochrome': {
    effect: 'grayscale'
  },
  'colorblind': {
    effect: 'assist_colorblind'
  }
};
var predominantColorTransformPxl = [{
  width: 'iw_div_2',
  aspect_ratio: 1,
  crop: 'pad',
  background: 'auto'
}, {
  crop: 'crop',
  width: 1,
  height: 1,
  gravity: 'north_east'
}, {
  fetch_format: 'auto',
  quality: 'auto'
}];
var predominantColorTransform = [{
  variables: [['$currWidth', 'w'], ['$currHeight', 'h']]
}, {
  width: 'iw_div_2',
  aspect_ratio: 1,
  crop: 'pad',
  background: 'auto'
}, {
  crop: 'crop',
  width: 10,
  height: 10,
  gravity: 'north_east'
}, {
  width: '$currWidth',
  height: '$currHeight',
  crop: 'fill'
}, {
  fetch_format: 'auto',
  quality: 'auto'
}];
var PLACEHOLDER_TRANSFORMATIONS = {
  vectorize: [{
    effect: 'vectorize:3:0.1',
    fetch_format: 'svg'
  }],
  pixelate: [{
    effect: 'pixelate',
    quality: 1,
    fetch_format: 'auto'
  }],
  blur: [{
    effect: 'blur:2000',
    quality: 1,
    fetch_format: 'auto'
  }],
  'predominant-color': predominantColorTransform,
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
  }]
};
var constants_progressive = {
  flags: ["progressive"]
};
var COMPONENTS = {
  CldImage: 'CldImage',
  CldPlaceholder: 'CldPlaceholder',
  CldVideo: 'CldVideo',
  CldPoster: 'CldPoster',
  CldTransformation: 'CldTransformation',
  CldContext: 'CldContext'
};
var RESPONSIVE_CSS_DEFAULT = freeze_default()({
  display: "block",
  width: "100%"
});
var RESPONSIVE_CSS = {
  height: {
    display: "block",
    height: "100%",
    width: "auto"
  },
  true: RESPONSIVE_CSS_DEFAULT,
  auto: RESPONSIVE_CSS_DEFAULT,
  width: RESPONSIVE_CSS_DEFAULT,
  fill: _objectSpread2(_objectSpread2({}, RESPONSIVE_CSS_DEFAULT), {}, {
    height: "100%"
  })
};
var LAZY_LOADING = 'lazy';
var IMAGE_CLASSES = {
  LOADING: 'cld-image-loading',
  LOADED: 'cld-image-loaded',
  DEFAULT: 'cld-image'
};
var PLACEHOLDER_CLASS = 'cld-placeholder';
var IMAGE_WITH_PLACEHOLDER_CSS = (_IMAGE_WITH_PLACEHOLD = {}, _defineProperty(_IMAGE_WITH_PLACEHOLD, IMAGE_CLASSES.LOADING, {
  opacity: 0,
  position: 'absolute'
}), _defineProperty(_IMAGE_WITH_PLACEHOLD, PLACEHOLDER_CLASS, {
  display: 'inline-block'
}), _IMAGE_WITH_PLACEHOLD);
var CLD_IMAGE_WRAPPER_CLASS = "cld-image-wrapper";
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CldContext/CldContext.vue?vue&type=script&lang=js&
//

/**
 * Cloudinary context providing element
 */

/* harmony default export */ var CldContextvue_type_script_lang_js_ = ({
  name: COMPONENTS.CldContext,
  inheritAttrs: false,
  provide: function provide() {
    return {
      contextConfiguration: this.configuration,
      contextOptions: this.$attrs
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
      attrs: this.$attrs
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
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
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
var CldContext_render, staticRenderFns




/* normalize component */

var CldContext_component = normalizeComponent(
  CldContext_CldContextvue_type_script_lang_js_,
  CldContext_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CldContext = (CldContext_component.exports);
// EXTERNAL MODULE: external "core-js/modules/es.array.concat"
var es_array_concat_ = __webpack_require__("18d2");

// EXTERNAL MODULE: external "@vue/babel-helper-vue-jsx-merge-props"
var babel_helper_vue_jsx_merge_props_ = __webpack_require__("5a5e");
var babel_helper_vue_jsx_merge_props_default = /*#__PURE__*/__webpack_require__.n(babel_helper_vue_jsx_merge_props_);

// EXTERNAL MODULE: external "cloudinary-core"
var external_cloudinary_core_ = __webpack_require__("3c59");

// CONCATENATED MODULE: ./src/mixins/setup.js

/**
 * To set up Cloudinary instance in component
 */

var setup_setup = {
  data: function data() {
    return {
      defaultConfigurations: {}
    };
  },
  inject: {
    contextConfiguration: {
      default: {}
    },
    contextOptions: {
      default: {}
    }
  },
  methods: {
    setup: function setup(extraConfigs) {
      if (!this.cloudinary) {
        this.cloudinary = new external_cloudinary_core_["Cloudinary"](this.toSnakeCase(this.defaultConfigurations));
      }

      this.cloudinary.config(this.toSnakeCase(this.contextOptions));

      if (extraConfigs) {
        this.cloudinary.config(this.toSnakeCase(extraConfigs));
      }
    },
    toSnakeCase: function toSnakeCase(options) {
      return external_cloudinary_core_["Util"].withSnakeCaseKeys(options);
    }
  }
};
// EXTERNAL MODULE: external "@babel/runtime/helpers/esm/arrayWithoutHoles"
var arrayWithoutHoles_ = __webpack_require__("3732");
var arrayWithoutHoles_default = /*#__PURE__*/__webpack_require__.n(arrayWithoutHoles_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/esm/iterableToArray"
var iterableToArray_ = __webpack_require__("f906");
var iterableToArray_default = /*#__PURE__*/__webpack_require__.n(iterableToArray_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/esm/unsupportedIterableToArray"
var unsupportedIterableToArray_ = __webpack_require__("61b7");
var unsupportedIterableToArray_default = /*#__PURE__*/__webpack_require__.n(unsupportedIterableToArray_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/esm/nonIterableSpread"
var nonIterableSpread_ = __webpack_require__("efd2");
var nonIterableSpread_default = /*#__PURE__*/__webpack_require__.n(nonIterableSpread_);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return arrayWithoutHoles_default()(arr) || iterableToArray_default()(arr) || unsupportedIterableToArray_default()(arr) || nonIterableSpread_default()();
}
// CONCATENATED MODULE: ./src/helpers/findBreakpoint.js




/**
 * Finds a number in breakpoints array
 * that provided a suggestion
 * qualifies the most to be used as a value
 * @param {Array<number>} stops
 * @param {number} value
 */
function findBreakpoint() {
  var stops = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var value = arguments.length > 1 ? arguments[1] : undefined;
  var givenBreakpoints = stops && is_array_default()(stops) ? _toConsumableArray(stops) : [stops];
  var filteredBreakpoints = givenBreakpoints.sort(function (a, b) {
    return a - b;
  }).filter(function (stop) {
    return stop >= value;
  });
  return (filteredBreakpoints.length ? filteredBreakpoints : stops)[0];
}
// EXTERNAL MODULE: external "core-js/modules/es.array.slice"
var es_array_slice_ = __webpack_require__("6579");

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
    var firstChar = valueOrGetter.slice(0, 1);
    var lastChar = valueOrGetter.slice(-1);
    return JSON.parse("".concat(firstChar === '[' ? '' : '[').concat(valueOrGetter).concat(lastChar === ']' ? '' : ']'));
  }

  return valueOrGetter;
}
// CONCATENATED MODULE: ./src/helpers/responsiveness.js



/**
 * Based an selected mode
 * and breakpoints range
 * generates size transformations
 * @param {'fill'|'width'|'height'|boolean} mode
 * @param {object} size
 * @param {array} breakpoints
 */

function getResizeTransformation(mode, size, originalBP) {
  if (!mode || !size) {
    return {};
  }

  var breakpoints = evalBreakpoints(originalBP);

  switch (mode) {
    case "fill":
      var computedSize = breakpoints ? {
        width: Math.floor(findBreakpoint(breakpoints, size.width)),
        height: Math.floor(size.height / size.width * findBreakpoint(breakpoints, size.width))
      } : {
        width: Math.floor(size.width),
        height: Math.floor(size.height)
      };
      return _objectSpread2({
        crop: "fill"
      }, computedSize);

    case true:
    case "width":
      return {
        crop: "scale",
        width: Math.floor(breakpoints ? findBreakpoint(breakpoints, size.width) : size.width)
      };

    case "height":
      return {
        crop: "scale",
        height: Math.floor(breakpoints ? findBreakpoint(breakpoints, size.height) : size.height)
      };

    default:
      return {};
  }
}
// CONCATENATED MODULE: ./src/helpers/computeOptions.js






/**
 * 
 * @param {Boolean} enable 
 * @returns {Object} transformation object for progressive effect
 */

var computeOptions_addProgressive = function addProgressive() {
  var enable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return enable ? constants_progressive : {};
};
/**
 * 
 * @param {Object} baseOptions 
 * @param {Object} extra 
 * @returns {Object} new options Object with extra inside transformation
 */


var computeOptions_extendOptions = function extendOptions() {
  var baseOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var extra = arguments.length > 1 ? arguments[1] : undefined;
  var transformation = baseOptions.transformation ? _toConsumableArray(baseOptions.transformation) : [];

  if (is_array_default()(extra)) {
    extra.forEach(function (effect) {
      return transformation.push(effect);
    });
  } else if (extra) {
    transformation.push(extra);
  }

  return _objectSpread2(_objectSpread2({}, baseOptions), {}, {
    transformation: transformation
  });
};
/**
 * 
 * @param {'lqip'|'color'|'pixelate'|'predominant-color'|'vectorize'|'blur'} type 
 * @param {Option} imgOptions
 * @returns {Object} options for generating delivery URL of a placeholder image
 */

var computeOptions_computePlaceholder = function computePlaceholder(type) {
  var imgOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var isPredominantWithSize = type === 'predominant-color' && imgOptions.width && imgOptions.height;
  var placeholder = isPredominantWithSize ? predominantColorTransformPxl : PLACEHOLDER_TRANSFORMATIONS[type] || {};
  return computeOptions_extendOptions(imgOptions, placeholder);
};
/**
 * 
 * @param {Object} object contains accessibility, withProgressive, cldTransforms and baseOptions
 * @returns {Object} options for generating delivery URL of a media component 
 */

var computeOptions_computeOptions = function computeOptions(_ref) {
  var accessibility = _ref.accessibility,
      withProgressive = _ref.withProgressive,
      _ref$baseOptions = _ref.baseOptions,
      baseOptions = _ref$baseOptions === void 0 ? {} : _ref$baseOptions,
      _ref$extra = _ref.extra,
      extra = _ref$extra === void 0 ? [] : _ref$extra;

  var transformation = _toConsumableArray(extra);

  var progressive = computeOptions_addProgressive(withProgressive);
  transformation.push(progressive);

  var res = _objectSpread2(_objectSpread2({}, baseOptions), {}, {
    transformation: transformation
  });

  if (accessibility) {
    res.accessibility = accessibility;
  }

  return res;
};
// CONCATENATED MODULE: ./src/mixins/compute.js



var compute = {
  methods: {
    computeURLOptions: function computeURLOptions() {
      var inheritOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var responsiveOptions = getResizeTransformation(this.responsive, this.size, this.breakpoints);

      var baseOptions = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, this.contextOptions), inheritOptions), this.$attrs), responsiveOptions);

      var options = computeOptions_computeOptions({
        accessibility: this.accessibility,
        withProgressive: this.progressive,
        baseOptions: baseOptions,
        extra: this.extraTransformations
      });
      return options;
    }
  }
};
// CONCATENATED MODULE: ./src/mixins/registerTransformation.js
var register = {
  provide: function provide() {
    return {
      registerTransformation: this.registerTransformation
    };
  },
  data: function data() {
    return {
      extraTransformations: []
    };
  },
  methods: {
    registerTransformation: function registerTransformation(options) {
      this.extraTransformations.push(options);
    }
  }
};
// EXTERNAL MODULE: external "core-js/modules/es.array.find"
var es_array_find_ = __webpack_require__("fe0e");

// CONCATENATED MODULE: ./src/helpers/findComponent.js



/**
 * 
 * @param {Array<VNode>} children - nested Vue components
 * @returns {Object | null} cld-placeholder component if found.
 */

var getCldPlaceholder = function getCldPlaceholder() {
  var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return children === null || children === void 0 ? void 0 : children.find(function (child) {
    return findComponent_isCldPlaceholder(child);
  });
};
var getCldPoster = function getCldPoster() {
  var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return children === null || children === void 0 ? void 0 : children.find(function (child) {
    return findComponent_isCldPoster(child);
  });
};
/**
* @param {VNode} component 
* @returns {Boolean} true if component is CldPlaceholder
*/

var findComponent_isCldPlaceholder = function isCldPlaceholder(component) {
  var _component$componentO, _component$componentO2, _component$componentO3;

  return ((_component$componentO = component.componentOptions) === null || _component$componentO === void 0 ? void 0 : (_component$componentO2 = _component$componentO.Ctor) === null || _component$componentO2 === void 0 ? void 0 : (_component$componentO3 = _component$componentO2.extendOptions) === null || _component$componentO3 === void 0 ? void 0 : _component$componentO3.name) === COMPONENTS.CldPlaceholder;
};
var findComponent_isCldPoster = function isCldPoster(component) {
  var _component$componentO4, _component$componentO5, _component$componentO6;

  return ((_component$componentO4 = component.componentOptions) === null || _component$componentO4 === void 0 ? void 0 : (_component$componentO5 = _component$componentO4.Ctor) === null || _component$componentO5 === void 0 ? void 0 : (_component$componentO6 = _component$componentO5.extendOptions) === null || _component$componentO6 === void 0 ? void 0 : _component$componentO6.name) === COMPONENTS.CldPoster;
};
// EXTERNAL MODULE: external "@babel/runtime-corejs2/core-js/get-iterator"
var get_iterator_ = __webpack_require__("daf4");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator_);

// EXTERNAL MODULE: external "@babel/runtime-corejs2/core-js/symbol/iterator"
var iterator_ = __webpack_require__("e3f0");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator_);

// EXTERNAL MODULE: external "@babel/runtime-corejs2/core-js/symbol"
var symbol_ = __webpack_require__("e3b9");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol_);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js





function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof symbol_default.a === "undefined" || o[iterator_default.a] == null) {
    if (is_array_default()(o) || (it = unsupportedIterableToArray_default()(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = get_iterator_default()(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}
// EXTERNAL MODULE: external "core-js/modules/es.symbol"
var es_symbol_ = __webpack_require__("6049");

// EXTERNAL MODULE: external "core-js/modules/es.symbol.description"
var es_symbol_description_ = __webpack_require__("51e9");

// EXTERNAL MODULE: external "core-js/modules/es.object.to-string"
var es_object_to_string_ = __webpack_require__("850c");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js





function typeof_typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj;
    };
  }

  return typeof_typeof(obj);
}
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
// CONCATENATED MODULE: ./src/utils/index.js


// CONCATENATED MODULE: ./src/helpers/size.js



/**
 * Call back a provided function
 * whenever element changed it's size
 * @param {HTMLElement} element
 * @param {Function} cb
 */

var size_watchElementSize = function watchElementSize(element, cb) {
  if (!window || (typeof window === "undefined" ? "undefined" : typeof_typeof(window)) !== "object") return;
  var delayedCallback = debounce(cb, 150);
  var cancelled = false;

  if (window.ResizeObserver) {
    var resizeObserver = new ResizeObserver(function (entries) {
      var _iterator = _createForOfIteratorHelper(entries),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var entry = _step.value;
          delayedCallback({
            width: entry.contentRect.width,
            height: entry.contentRect.height
          });
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
    resizeObserver.observe(element);
    return function () {
      if (cancelled) return;
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
      if (cancelled) return;
      cancelled = true;
      window.removeEventListener("resize", handleWindowResize);
    };
  }
};
// CONCATENATED MODULE: ./src/mixins/size.js



/**
 * If necessary posts root element
 * size information
 * into components data
 */

var size_size = {
  props: {
    responsive: {
      type: [Boolean, String],
      default: false,
      validator: function validator(value) {
        return !value || RESPONSIVE_CSS[value];
      }
    },
    breakpoints: {
      type: [Array, Function, String],
      default: function _default() {
        return range(100, 4000, 100);
      }
    }
  },
  data: function data() {
    return {
      size: null
    };
  },
  computed: {
    hasResponsiveActive: function hasResponsiveActive() {
      return this.responsive && this.size && this.size.width && this.size.height;
    },

    /* should be overriden */
    shouldMeasureSize: function shouldMeasureSize() {
      return false;
    }
  },
  methods: {
    updateSizeObservation: function updateSizeObservation() {
      var _this$$el$classList,
          _this$$el$classList2,
          _this = this;

      if (!this.responsive) {
        this.cancelSizeListener && this.cancelSizeListener();
        return;
      }

      var isElementRendered = !!this.$el && (((_this$$el$classList = this.$el.classList) === null || _this$$el$classList === void 0 ? void 0 : _this$$el$classList.contains(IMAGE_CLASSES.DEFAULT)) || ((_this$$el$classList2 = this.$el.classList) === null || _this$$el$classList2 === void 0 ? void 0 : _this$$el$classList2.contains(CLD_IMAGE_WRAPPER_CLASS)));
      if (!isElementRendered || this.cancelSizeListener) return;
      this.cancelSizeListener = size_watchElementSize(this.$el, function (newSize) {
        if (!newSize) return;

        if (!_this.size || _this.size.width !== newSize.width || _this.size.height !== newSize.height) {
          _this.size = newSize;
        }
      });
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
// CONCATENATED MODULE: ./src/helpers/visibility.js



var visibility_watchElementVisibility = function watchElementVisibility(element, listener) {
  if (!window || (typeof window === "undefined" ? "undefined" : typeof_typeof(window)) !== "object") return;

  if (window.IntersectionObserver) {
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
};
var noop = function noop() {};
// CONCATENATED MODULE: ./src/mixins/lazy.js


/**
 * If necessary watches for root elements visibility
 * and posts the result to components data
 */

var lazy = {
  props: {
    /**
     * **Deprecated**
     * 
     * Whether to only load the asset when it needs to be displayed instead of when the page first loads.
     * @deprecated - Use `loading` instead
     */
    lazy: {
      type: Boolean,
      default: false
    },

    /**
     * Set loading type for the component
     * use loading='lazy' to lazyload
     */
    loading: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      visible: false
    };
  },
  computed: {
    hasLazyLoading: function hasLazyLoading() {
      return this.lazy || this.loading === LAZY_LOADING;
    }
  },
  methods: {
    updateVisibilityObservation: function updateVisibilityObservation() {
      var _this$$el$classList,
          _this$$el$classList2,
          _this = this;

      if (!this.hasLazyLoading) {
        this.visible = true;
        this.cancelVisibilityListener && this.cancelVisibilityListener();
        return;
      }

      var isElementRendered = !!this.$el && (((_this$$el$classList = this.$el.classList) === null || _this$$el$classList === void 0 ? void 0 : _this$$el$classList.contains(IMAGE_CLASSES.DEFAULT)) || ((_this$$el$classList2 = this.$el.classList) === null || _this$$el$classList2 === void 0 ? void 0 : _this$$el$classList2.contains(CLD_IMAGE_WRAPPER_CLASS)));
      if (!isElementRendered || this.cancelVisibilityListener) return;
      this.cancelVisibilityListener = visibility_watchElementVisibility(this.$el, function (isVisible) {
        _this.visible = _this.visible || isVisible;
      });
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CldImage/CldImage.vue?vue&type=script&lang=js&












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
  name: COMPONENTS.CldImage,
  mixins: [setup_setup, compute, lazy, size_size, register],
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
     * **Deprecated**
     * 
     * The placeholder image to use while the image is loading. Possible values:
     * - `"blur"` to use blur placeholder
     * - `"lqip"` to use a low quality image
     * - `"color"` to use an average color image
     * - `"pixelate"` to use a pixelated image
     * - `"vectorize"` to use a vectorized image
     * - `"predominant-color" to use a predominant color image
     * @deprecated - Use CldPlaceholder instead
     */
    placeholder: {
      type: String,
      default: "",
      validator: function validator(value) {
        return !value || !!PLACEHOLDER_TRANSFORMATIONS[value];
      }
    },

    /**
     * Out-of-the-box support for accessibility mode, including colorblind and dark/light mode
     */
    accessibility: {
      type: String,
      default: "",
      validator: function validator(value) {
        return !value || !!ACCESSIBILITY_TRANSFORMATIONS[value];
      }
    }
  },
  data: function data() {
    return {
      imageLoaded: false,
      cloudinary: null
    };
  },
  methods: {
    load: function load() {
      this.imageLoaded = true;
    },
    renderImageOnly: function renderImageOnly(src) {
      var hasPlaceholder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var h = this.$createElement;
      var imgClass = "".concat(IMAGE_CLASSES.DEFAULT, " ").concat(!this.imageLoaded ? IMAGE_CLASSES.LOADING : IMAGE_CLASSES.LOADED);

      var style = _objectSpread2(_objectSpread2({}, this.responsive ? RESPONSIVE_CSS[this.responsive] : {}), !this.imageLoaded && hasPlaceholder ? IMAGE_WITH_PLACEHOLDER_CSS[IMAGE_CLASSES.LOADING] : {});

      return h("img", babel_helper_vue_jsx_merge_props_default()([{}, {
        "attrs": this.$attrs
      }, {
        "attrs": {
          "src": src,
          "loading": this.hasLazyLoading ? LAZY_LOADING : null
        },
        "class": imgClass,
        "on": {
          "load": this.load
        },
        "style": style
      }]));
    },
    renderComp: function renderComp(children) {
      var _cldPlaceholder$compo, _cldPlaceholder$compo2;

      var h = this.$createElement;
      this.setup(this.$attrs);

      if (this.placeholder) {
        // eslint-disable-next-line
        console.warn('The prop "placeholder" has been deprecated, please use the cld-placeholder component');
      }

      var responsiveModeNoSize = this.responsive && !this.size;
      var lazyModeInvisible = this.hasLazyLoading && !this.visible;
      var options = this.computeURLOptions();
      var src = responsiveModeNoSize || lazyModeInvisible ? '' : this.cloudinary.url(this.publicId, this.toSnakeCase(options));
      var cldPlaceholder = getCldPlaceholder(children);
      var cldPlaceholderType = cldPlaceholder ? ((_cldPlaceholder$compo = cldPlaceholder.componentOptions) === null || _cldPlaceholder$compo === void 0 ? void 0 : (_cldPlaceholder$compo2 = _cldPlaceholder$compo.propsData) === null || _cldPlaceholder$compo2 === void 0 ? void 0 : _cldPlaceholder$compo2.type) || 'blur' : '';
      var placeholderType = cldPlaceholderType || this.placeholder;
      var placeholderOptions = placeholderType ? this.toSnakeCase(computeOptions_computePlaceholder(placeholderType, options)) : null;

      if (!placeholderOptions) {
        return this.renderImageOnly(src);
      }

      var placeholder = responsiveModeNoSize ? '' : this.cloudinary.url(this.publicId, placeholderOptions);
      var displayPlaceholder = !this.imageLoaded && placeholder;
      return h("div", {
        "class": CLD_IMAGE_WRAPPER_CLASS
      }, [this.renderImageOnly(src, true), displayPlaceholder && h("img", babel_helper_vue_jsx_merge_props_default()([{
        "attrs": {
          "src": placeholder
        }
      }, {
        "attrs": this.$attrs
      }, {
        "class": PLACEHOLDER_CLASS,
        "style": IMAGE_WITH_PLACEHOLDER_CSS[PLACEHOLDER_CLASS]
      }]))]);
    }
  },
  render: function render(h) {
    if (!this.publicId) return null;
    var children = this.$slots.default || [];
    var hasExtraTransformations = children.length > 1 || children.length === 1 && !findComponent_isCldPlaceholder(children[0]);
    /* Render the children first to get the extra transformations (if there is any) */

    if (hasExtraTransformations && !this.extraTransformations.length) {
      return h("img", {
        attrs: this.attrs
      }, this.$slots.default);
    }

    return this.renderComp(children);
  }
});
// CONCATENATED MODULE: ./src/components/CldImage/CldImage.vue?vue&type=script&lang=js&
 /* harmony default export */ var CldImage_CldImagevue_type_script_lang_js_ = (CldImagevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/CldImage/CldImage.vue
var CldImage_render, CldImage_staticRenderFns




/* normalize component */

var CldImage_component = normalizeComponent(
  CldImage_CldImagevue_type_script_lang_js_,
  CldImage_render,
  CldImage_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CldImage = (CldImage_component.exports);
// EXTERNAL MODULE: external "core-js/modules/es.array.map"
var es_array_map_ = __webpack_require__("f705");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CldVideo/CldVideo.vue?vue&type=script&lang=js&














var defaultSourceTypes = external_cloudinary_core_["Cloudinary"].DEFAULT_VIDEO_SOURCE_TYPES.reduce(function (types, type) {
  return _objectSpread2(_objectSpread2({}, types), {}, _defineProperty({}, type, {}));
}, {});
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
  name: COMPONENTS.CldVideo,
  mixins: [setup_setup, compute, lazy, register],
  provide: function provide() {
    var _this = this;

    return {
      registerPoster: this.registerPoster,
      getConfig: function getConfig() {
        var _this$cloudinary;

        return ((_this$cloudinary = _this.cloudinary) === null || _this$cloudinary === void 0 ? void 0 : _this$cloudinary.config()) || {};
      },
      getOptions: function getOptions() {
        if (_this.poster && typeof _this.poster === 'string') return {};
        return _objectSpread2({
          publicId: _this.publicId
        }, _this.poster || {});
      }
    };
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
     * The video source types to include in the HTML5 tag, where the type is mapped to the mime type.
     * You can also add a specific transformation for each specified video format by adding a transformation struct. Example:
     *
     * `<CldVideo :sourceTypes="{ mp4: { quality: 10 } }" />`
     */
    sourceTypes: {
      type: Object,
      default: function _default() {
        return defaultSourceTypes;
      },
      validator: function validator(value) {
        return typeof value !== 'Object';
      }
    },
    poster: {
      type: [String, Object, Array]
    }
  },
  data: function data() {
    return {
      posterUrl: '',
      cloudinary: null
    };
  },
  methods: {
    registerPoster: function registerPoster(posterUrl) {
      this.posterUrl = posterUrl;
    },
    getSources: function getSources() {
      var options = this.computeURLOptions();
      var sources = [];

      for (var type in this.sourceTypes) {
        var typeOptions = this.sourceTypes[type];
        var formatType = type === "ogv" ? "ogg" : type;
        var srcOptions = computeOptions_extendOptions(options, typeOptions);
        srcOptions.format = type;
        sources.push(_objectSpread2(_objectSpread2({}, typeOptions), {}, {
          mimeType: "video/".concat(formatType),
          type: "video/".concat(formatType),
          src: this.cloudinary.video_url(this.publicId, this.toSnakeCase(srcOptions))
        }));
      }

      return sources;
    },
    getPosterUrl: function getPosterUrl() {
      var _this$poster;

      var isPosterAnUrl = typeof this.poster === 'string';
      if (isPosterAnUrl) return this.poster;
      var hasInlinePosterOptions = this.poster && !isPosterAnUrl;
      var options = hasInlinePosterOptions ? this.poster : {};
      return this.cloudinary.url(((_this$poster = this.poster) === null || _this$poster === void 0 ? void 0 : _this$poster.publicId) || this.publicId, this.toSnakeCase(options));
    }
  },
  mounted: function mounted() {
    this.$videoElement = this.$refs.videoElement;
  },
  render: function render(h) {
    if (!this.publicId) return null;
    var children = this.$slots.default || [];
    var cldPoster = getCldPoster(children);
    var hasExtraTransformations = children.length > 1 || children.length === 1 && !cldPoster;
    /* Render the children first to get the extra transformations (if there is any) */

    if (hasExtraTransformations && !this.extraTransformations.length) {
      return h("div", {
        attrs: this.attrs
      }, this.$slots.default);
    }

    this.setup(this.$attrs);
    var sources = this.getSources();
    var poster = cldPoster ? this.posterUrl : this.getPosterUrl();
    return h("video", babel_helper_vue_jsx_merge_props_default()([{}, {
      "attrs": this.$attrs
    }, {
      "attrs": {
        "poster": poster
      },
      "ref": "videoElement"
    }]), [sources.map(function (source, index) {
      return h("source", babel_helper_vue_jsx_merge_props_default()([{
        "key": index
      }, {
        "attrs": source
      }]));
    }), this.$slots.default]);
  }
});
// CONCATENATED MODULE: ./src/components/CldVideo/CldVideo.vue?vue&type=script&lang=js&
 /* harmony default export */ var CldVideo_CldVideovue_type_script_lang_js_ = (CldVideovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/CldVideo/CldVideo.vue
var CldVideo_render, CldVideo_staticRenderFns




/* normalize component */

var CldVideo_component = normalizeComponent(
  CldVideo_CldVideovue_type_script_lang_js_,
  CldVideo_render,
  CldVideo_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CldVideo = (CldVideo_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CldVideo/CldPoster.vue?vue&type=script&lang=js&





/**
 * The image to be shown while a video is downloading or until the user hits the play button.
 * This component must be added as a direct child of the [CldVideo](#cldvideo) component.
 *
 * If this component is not given then the poster image defaults to the middle frame of the source video in jpg format.
 */

/* harmony default export */ var CldPostervue_type_script_lang_js_ = ({
  name: COMPONENTS.CldPoster,
  mixins: [register, setup_setup, compute],
  inject: {
    registerPoster: {
      default: null
    },
    getConfig: {
      default: function _default() {
        return {};
      }
    },
    getOptions: {
      default: function _default() {
        return {};
      }
    }
  },
  props: {
    publicId: {
      type: String
    }
  },
  render: function render(h) {
    var baseOptions = this.getOptions();
    var publicId = this.publicId || baseOptions.publicId;
    if (!publicId || !this.registerPoster) return null;
    var children = this.$slots.default || [];
    var hasExtraTransformations = children.length > 0;
    /* Render the children first to get the extra transformations (if there is any) */

    if (hasExtraTransformations && !this.extraTransformations.length) {
      return h("div", {}, this.$slots.default);
    }

    this.setup(_objectSpread2(_objectSpread2(_objectSpread2({}, this.getConfig()), baseOptions), this.$attrs));
    var options = this.computeURLOptions(baseOptions);
    this.registerPoster(this.cloudinary.url(publicId, options));
    return null;
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
  name: COMPONENTS.CldTransformation,
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CldPlaceholder/CldPlaceholder.vue?vue&type=script&lang=js&

/* harmony default export */ var CldPlaceholdervue_type_script_lang_js_ = ({
  name: COMPONENTS.CldPlaceholder,
  props: {
    // type is a prop name, unfortunately confusing.
    type: {
      type: String,
      default: 'blur',
      validator: function validator(value) {
        return !!PLACEHOLDER_TRANSFORMATIONS[value];
      }
    }
  },
  render: function render() {
    return null;
  }
});
// CONCATENATED MODULE: ./src/components/CldPlaceholder/CldPlaceholder.vue?vue&type=script&lang=js&
 /* harmony default export */ var CldPlaceholder_CldPlaceholdervue_type_script_lang_js_ = (CldPlaceholdervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/CldPlaceholder/CldPlaceholder.vue
var CldPlaceholder_render, CldPlaceholder_staticRenderFns




/* normalize component */

var CldPlaceholder_component = normalizeComponent(
  CldPlaceholder_CldPlaceholdervue_type_script_lang_js_,
  CldPlaceholder_render,
  CldPlaceholder_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CldPlaceholder = (CldPlaceholder_component.exports);
// CONCATENATED MODULE: ./src/index.js








var Cloudinary = {
  install: function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    plugin_install(Vue, options.components ? options : _objectSpread2(_objectSpread2({}, options), {}, {
      components: {
        CldContext: CldContext,
        CldImage: CldImage,
        CldVideo: CldVideo,
        CldTransformation: CldTransformation,
        CldPoster: CldPoster,
        CldPlaceholder: CldPlaceholder
      }
    }));
  }
};

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (Cloudinary);



/***/ }),

/***/ "fe0e":
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.find");

/***/ })

/******/ });
//# sourceMappingURL=Cloudinary.common.js.map