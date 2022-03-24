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

/***/ "00b4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("ac1f");
var $ = __webpack_require__("23e7");
var isObject = __webpack_require__("861d");

var DELEGATES_TO_EXEC = function () {
  var execCalled = false;
  var re = /[ac]/;
  re.exec = function () {
    execCalled = true;
    return /./.exec.apply(this, arguments);
  };
  return re.test('abc') === true && execCalled;
}();

var nativeTest = /./.test;

// `RegExp.prototype.test` method
// https://tc39.es/ecma262/#sec-regexp.prototype.test
$({ target: 'RegExp', proto: true, forced: !DELEGATES_TO_EXEC }, {
  test: function (str) {
    if (typeof this.exec !== 'function') {
      return nativeTest.call(this, str);
    }
    var result = this.exec(str);
    if (result !== null && !isObject(result)) {
      throw new Error('RegExp exec method returned something other than an Object or null');
    }
    return !!result;
  }
});


/***/ }),

/***/ "00ee":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "00fd":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("9e69");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "0366":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("1c0b");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "03dd":
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__("eac5"),
    nativeKeys = __webpack_require__("57a5");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "057f":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-object-getownpropertynames -- safe */
var toIndexedObject = __webpack_require__("fc6a");
var $getOwnPropertyNames = __webpack_require__("241c").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "0621":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("9e69"),
    isArguments = __webpack_require__("d370"),
    isArray = __webpack_require__("6747");

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ "0644":
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__("3818");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var has = __webpack_require__("5135");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "07c7":
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "087d":
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "099a":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),

/***/ "0b07":
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__("34ac"),
    getValue = __webpack_require__("3698");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "0cb2":
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__("7b0b");

var floor = Math.floor;
var replace = ''.replace;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace.call(replacement, symbols, function (match, ch) {
    var capture;
    switch (ch.charAt(0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return str.slice(0, position);
      case "'": return str.slice(tailPos);
      case '<':
        capture = namedCaptures[ch.slice(1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "0d24":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__("2b3e"),
    stubFalse = __webpack_require__("07c7");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("62e4")(module)))

/***/ }),

/***/ "0f0f":
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__("8eeb"),
    keysIn = __webpack_require__("9934");

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),

/***/ "100e":
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__("cd9d"),
    overRest = __webpack_require__("2286"),
    setToString = __webpack_require__("c1c9");

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ "1041":
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__("8eeb"),
    getSymbolsIn = __webpack_require__("a029");

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),

/***/ "126d":
/***/ (function(module, exports, __webpack_require__) {

var asciiToArray = __webpack_require__("6da8"),
    hasUnicode = __webpack_require__("aaec"),
    unicodeToArray = __webpack_require__("d094");

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

module.exports = stringToArray;


/***/ }),

/***/ "1290":
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "1310":
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "1368":
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__("da03");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "14c3":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");
var regexpExec = __webpack_require__("9263");

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "159b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var forEach = __webpack_require__("17c2");
var createNonEnumerableProperty = __webpack_require__("9112");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "17c2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__("b727").forEach;
var arrayMethodIsStrict = __webpack_require__("a640");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ "194e":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer, process) {/**
   * cloudinary-core.js
   * Cloudinary's JavaScript library - Version 2.12.3
   * Copyright Cloudinary
   * see https://github.com/cloudinary/cloudinary_js
   *
   */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__("dce5"), __webpack_require__("0644"), __webpack_require__("c228"), __webpack_require__("ceac"), __webpack_require__("fb25"), __webpack_require__("cd9d"), __webpack_require__("8a30"), __webpack_require__("6747"), __webpack_require__("88fd"), __webpack_require__("9520"), __webpack_require__("60ed"), __webpack_require__("e2a0"), __webpack_require__("42454"), __webpack_require__("66c7"));
	else {}
})(this, function(__WEBPACK_EXTERNAL_MODULE_lodash_assign__, __WEBPACK_EXTERNAL_MODULE_lodash_cloneDeep__, __WEBPACK_EXTERNAL_MODULE_lodash_compact__, __WEBPACK_EXTERNAL_MODULE_lodash_difference__, __WEBPACK_EXTERNAL_MODULE_lodash_functions__, __WEBPACK_EXTERNAL_MODULE_lodash_identity__, __WEBPACK_EXTERNAL_MODULE_lodash_includes__, __WEBPACK_EXTERNAL_MODULE_lodash_isArray__, __WEBPACK_EXTERNAL_MODULE_lodash_isElement__, __WEBPACK_EXTERNAL_MODULE_lodash_isFunction__, __WEBPACK_EXTERNAL_MODULE_lodash_isPlainObject__, __WEBPACK_EXTERNAL_MODULE_lodash_isString__, __WEBPACK_EXTERNAL_MODULE_lodash_merge__, __WEBPACK_EXTERNAL_MODULE_lodash_trim__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/namespace/cloudinary-core.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/namespace/cloudinary-core.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "ClientHintsMetaTag", function() { return /* reexport */ clienthintsmetatag; });
__webpack_require__.d(__webpack_exports__, "Cloudinary", function() { return /* reexport */ cloudinary; });
__webpack_require__.d(__webpack_exports__, "Condition", function() { return /* reexport */ condition; });
__webpack_require__.d(__webpack_exports__, "Configuration", function() { return /* reexport */ src_configuration; });
__webpack_require__.d(__webpack_exports__, "crc32", function() { return /* reexport */ src_crc32; });
__webpack_require__.d(__webpack_exports__, "Expression", function() { return /* reexport */ expression; });
__webpack_require__.d(__webpack_exports__, "FetchLayer", function() { return /* reexport */ fetchlayer; });
__webpack_require__.d(__webpack_exports__, "HtmlTag", function() { return /* reexport */ htmltag; });
__webpack_require__.d(__webpack_exports__, "ImageTag", function() { return /* reexport */ imagetag; });
__webpack_require__.d(__webpack_exports__, "Layer", function() { return /* reexport */ layer_layer; });
__webpack_require__.d(__webpack_exports__, "PictureTag", function() { return /* reexport */ picturetag; });
__webpack_require__.d(__webpack_exports__, "SubtitlesLayer", function() { return /* reexport */ subtitleslayer; });
__webpack_require__.d(__webpack_exports__, "TextLayer", function() { return /* reexport */ textlayer; });
__webpack_require__.d(__webpack_exports__, "Transformation", function() { return /* reexport */ src_transformation; });
__webpack_require__.d(__webpack_exports__, "utf8_encode", function() { return /* reexport */ src_utf8_encode; });
__webpack_require__.d(__webpack_exports__, "Util", function() { return /* reexport */ lodash_namespaceObject; });
__webpack_require__.d(__webpack_exports__, "VideoTag", function() { return /* reexport */ videotag; });

// NAMESPACE OBJECT: ./src/constants.js
var constants_namespaceObject = {};
__webpack_require__.r(constants_namespaceObject);
__webpack_require__.d(constants_namespaceObject, "VERSION", function() { return VERSION; });
__webpack_require__.d(constants_namespaceObject, "CF_SHARED_CDN", function() { return CF_SHARED_CDN; });
__webpack_require__.d(constants_namespaceObject, "OLD_AKAMAI_SHARED_CDN", function() { return OLD_AKAMAI_SHARED_CDN; });
__webpack_require__.d(constants_namespaceObject, "AKAMAI_SHARED_CDN", function() { return AKAMAI_SHARED_CDN; });
__webpack_require__.d(constants_namespaceObject, "SHARED_CDN", function() { return SHARED_CDN; });
__webpack_require__.d(constants_namespaceObject, "DEFAULT_TIMEOUT_MS", function() { return DEFAULT_TIMEOUT_MS; });
__webpack_require__.d(constants_namespaceObject, "DEFAULT_POSTER_OPTIONS", function() { return DEFAULT_POSTER_OPTIONS; });
__webpack_require__.d(constants_namespaceObject, "DEFAULT_VIDEO_SOURCE_TYPES", function() { return DEFAULT_VIDEO_SOURCE_TYPES; });
__webpack_require__.d(constants_namespaceObject, "SEO_TYPES", function() { return SEO_TYPES; });
__webpack_require__.d(constants_namespaceObject, "DEFAULT_IMAGE_PARAMS", function() { return DEFAULT_IMAGE_PARAMS; });
__webpack_require__.d(constants_namespaceObject, "DEFAULT_VIDEO_PARAMS", function() { return DEFAULT_VIDEO_PARAMS; });
__webpack_require__.d(constants_namespaceObject, "DEFAULT_VIDEO_SOURCES", function() { return DEFAULT_VIDEO_SOURCES; });
__webpack_require__.d(constants_namespaceObject, "DEFAULT_EXTERNAL_LIBRARIES", function() { return DEFAULT_EXTERNAL_LIBRARIES; });
__webpack_require__.d(constants_namespaceObject, "PLACEHOLDER_IMAGE_MODES", function() { return PLACEHOLDER_IMAGE_MODES; });
__webpack_require__.d(constants_namespaceObject, "ACCESSIBILITY_MODES", function() { return ACCESSIBILITY_MODES; });
__webpack_require__.d(constants_namespaceObject, "URL_KEYS", function() { return URL_KEYS; });

// NAMESPACE OBJECT: ./src/util/lodash.js
var lodash_namespaceObject = {};
__webpack_require__.r(lodash_namespaceObject);
__webpack_require__.d(lodash_namespaceObject, "getSDKAnalyticsSignature", function() { return getSDKAnalyticsSignature; });
__webpack_require__.d(lodash_namespaceObject, "getAnalyticsOptions", function() { return getAnalyticsOptions; });
__webpack_require__.d(lodash_namespaceObject, "assign", function() { return assign_root_assign_default.a; });
__webpack_require__.d(lodash_namespaceObject, "cloneDeep", function() { return cloneDeep_root_cloneDeep_default.a; });
__webpack_require__.d(lodash_namespaceObject, "compact", function() { return compact_root_compact_default.a; });
__webpack_require__.d(lodash_namespaceObject, "difference", function() { return difference_root_difference_default.a; });
__webpack_require__.d(lodash_namespaceObject, "functions", function() { return functions_root_functions_default.a; });
__webpack_require__.d(lodash_namespaceObject, "identity", function() { return identity_root_identity_default.a; });
__webpack_require__.d(lodash_namespaceObject, "includes", function() { return includes_root_includes_default.a; });
__webpack_require__.d(lodash_namespaceObject, "isArray", function() { return isArray_root_isArray_default.a; });
__webpack_require__.d(lodash_namespaceObject, "isPlainObject", function() { return isPlainObject_root_isPlainObject_default.a; });
__webpack_require__.d(lodash_namespaceObject, "isString", function() { return isString_root_isString_default.a; });
__webpack_require__.d(lodash_namespaceObject, "merge", function() { return merge_root_merge_default.a; });
__webpack_require__.d(lodash_namespaceObject, "contains", function() { return includes_root_includes_default.a; });
__webpack_require__.d(lodash_namespaceObject, "isIntersectionObserverSupported", function() { return isIntersectionObserverSupported; });
__webpack_require__.d(lodash_namespaceObject, "isNativeLazyLoadSupported", function() { return isNativeLazyLoadSupported; });
__webpack_require__.d(lodash_namespaceObject, "detectIntersection", function() { return detectIntersection; });
__webpack_require__.d(lodash_namespaceObject, "omit", function() { return omit; });
__webpack_require__.d(lodash_namespaceObject, "allStrings", function() { return baseutil_allStrings; });
__webpack_require__.d(lodash_namespaceObject, "without", function() { return without; });
__webpack_require__.d(lodash_namespaceObject, "isNumberLike", function() { return isNumberLike; });
__webpack_require__.d(lodash_namespaceObject, "smartEscape", function() { return smartEscape; });
__webpack_require__.d(lodash_namespaceObject, "defaults", function() { return defaults; });
__webpack_require__.d(lodash_namespaceObject, "objectProto", function() { return objectProto; });
__webpack_require__.d(lodash_namespaceObject, "objToString", function() { return objToString; });
__webpack_require__.d(lodash_namespaceObject, "isObject", function() { return isObject; });
__webpack_require__.d(lodash_namespaceObject, "funcTag", function() { return funcTag; });
__webpack_require__.d(lodash_namespaceObject, "reWords", function() { return reWords; });
__webpack_require__.d(lodash_namespaceObject, "camelCase", function() { return camelCase; });
__webpack_require__.d(lodash_namespaceObject, "snakeCase", function() { return snakeCase; });
__webpack_require__.d(lodash_namespaceObject, "convertKeys", function() { return convertKeys; });
__webpack_require__.d(lodash_namespaceObject, "withCamelCaseKeys", function() { return withCamelCaseKeys; });
__webpack_require__.d(lodash_namespaceObject, "withSnakeCaseKeys", function() { return withSnakeCaseKeys; });
__webpack_require__.d(lodash_namespaceObject, "base64Encode", function() { return base64Encode; });
__webpack_require__.d(lodash_namespaceObject, "base64EncodeURL", function() { return base64EncodeURL; });
__webpack_require__.d(lodash_namespaceObject, "extractUrlParams", function() { return extractUrlParams; });
__webpack_require__.d(lodash_namespaceObject, "patchFetchFormat", function() { return patchFetchFormat; });
__webpack_require__.d(lodash_namespaceObject, "optionConsume", function() { return optionConsume; });
__webpack_require__.d(lodash_namespaceObject, "isEmpty", function() { return isEmpty; });
__webpack_require__.d(lodash_namespaceObject, "isAndroid", function() { return isAndroid; });
__webpack_require__.d(lodash_namespaceObject, "isEdge", function() { return isEdge; });
__webpack_require__.d(lodash_namespaceObject, "isChrome", function() { return isChrome; });
__webpack_require__.d(lodash_namespaceObject, "isSafari", function() { return isSafari; });
__webpack_require__.d(lodash_namespaceObject, "isElement", function() { return isElement_root_isElement_default.a; });
__webpack_require__.d(lodash_namespaceObject, "isFunction", function() { return isFunction_root_isFunction_default.a; });
__webpack_require__.d(lodash_namespaceObject, "trim", function() { return trim_root_trim_default.a; });
__webpack_require__.d(lodash_namespaceObject, "getData", function() { return lodash_getData; });
__webpack_require__.d(lodash_namespaceObject, "setData", function() { return lodash_setData; });
__webpack_require__.d(lodash_namespaceObject, "getAttribute", function() { return lodash_getAttribute; });
__webpack_require__.d(lodash_namespaceObject, "setAttribute", function() { return lodash_setAttribute; });
__webpack_require__.d(lodash_namespaceObject, "removeAttribute", function() { return lodash_removeAttribute; });
__webpack_require__.d(lodash_namespaceObject, "setAttributes", function() { return setAttributes; });
__webpack_require__.d(lodash_namespaceObject, "hasClass", function() { return lodash_hasClass; });
__webpack_require__.d(lodash_namespaceObject, "addClass", function() { return lodash_addClass; });
__webpack_require__.d(lodash_namespaceObject, "getStyles", function() { return getStyles; });
__webpack_require__.d(lodash_namespaceObject, "cssExpand", function() { return cssExpand; });
__webpack_require__.d(lodash_namespaceObject, "domStyle", function() { return domStyle; });
__webpack_require__.d(lodash_namespaceObject, "curCSS", function() { return curCSS; });
__webpack_require__.d(lodash_namespaceObject, "cssValue", function() { return cssValue; });
__webpack_require__.d(lodash_namespaceObject, "augmentWidthOrHeight", function() { return augmentWidthOrHeight; });
__webpack_require__.d(lodash_namespaceObject, "getWidthOrHeight", function() { return getWidthOrHeight; });
__webpack_require__.d(lodash_namespaceObject, "width", function() { return lodash_width; });

// CONCATENATED MODULE: ./src/utf8_encode.js
/**
 * UTF8 encoder
 * @private
 */
var utf8_encode;
/* harmony default export */ var src_utf8_encode = (utf8_encode = function utf8_encode(argString) {
  var c1, enc, end, n, start, string, stringl, utftext; // http://kevin.vanzonneveld.net
  // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +   improved by: sowberry
  // +    tweaked by: Jack
  // +   bugfixed by: Onno Marsman
  // +   improved by: Yves Sucaet
  // +   bugfixed by: Onno Marsman
  // +   bugfixed by: Ulrich
  // +   bugfixed by: Rafal Kukawski
  // +   improved by: kirilloid
  // *     example 1: utf8_encode('Kevin van Zonneveld');
  // *     returns 1: 'Kevin van Zonneveld'

  if (argString === null || typeof argString === 'undefined') {
    return '';
  }

  string = argString + ''; // .replace(/\r\n/g, "\n").replace(/\r/g, "\n");

  utftext = '';
  start = void 0;
  end = void 0;
  stringl = 0;
  start = end = 0;
  stringl = string.length;
  n = 0;

  while (n < stringl) {
    c1 = string.charCodeAt(n);
    enc = null;

    if (c1 < 128) {
      end++;
    } else if (c1 > 127 && c1 < 2048) {
      enc = String.fromCharCode(c1 >> 6 | 192, c1 & 63 | 128);
    } else {
      enc = String.fromCharCode(c1 >> 12 | 224, c1 >> 6 & 63 | 128, c1 & 63 | 128);
    }

    if (enc !== null) {
      if (end > start) {
        utftext += string.slice(start, end);
      }

      utftext += enc;
      start = end = n + 1;
    }

    n++;
  }

  if (end > start) {
    utftext += string.slice(start, stringl);
  }

  return utftext;
});
// CONCATENATED MODULE: ./src/crc32.js

/**
 * CRC32 calculator
 * Depends on 'utf8_encode'
 * @private
 * @param {string} str - The string to calculate the CRC32 for.
 * @return {number}
 */

function crc32(str) {
  var crc, i, iTop, table, x, y; // http://kevin.vanzonneveld.net
  // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
  // +   improved by: T0bsn
  // +   improved by: http://stackoverflow.com/questions/2647935/javascript-crc32-function-and-php-crc32-not-matching
  // -    depends on: utf8_encode
  // *     example 1: crc32('Kevin van Zonneveld');
  // *     returns 1: 1249991249

  str = src_utf8_encode(str);
  table = '00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D';
  crc = 0;
  x = 0;
  y = 0;
  crc = crc ^ -1;
  i = 0;
  iTop = str.length;

  while (i < iTop) {
    y = (crc ^ str.charCodeAt(i)) & 0xFF;
    x = '0x' + table.substr(y * 9, 8);
    crc = crc >>> 8 ^ x;
    i++;
  }

  crc = crc ^ -1; //convert to unsigned 32-bit int if needed

  if (crc < 0) {
    crc += 4294967296;
  }

  return crc;
}

/* harmony default export */ var src_crc32 = (crc32);
// CONCATENATED MODULE: ./src/sdkAnalytics/stringPad.js
function stringPad(value, targetLength, padString) {
  targetLength = targetLength >> 0; //truncate if number or convert non-number to 0;

  padString = String(typeof padString !== 'undefined' ? padString : ' ');

  if (value.length > targetLength) {
    return String(value);
  } else {
    targetLength = targetLength - value.length;

    if (targetLength > padString.length) {
      padString += repeatStringNumTimes(padString, targetLength / padString.length);
    }

    return padString.slice(0, targetLength) + String(value);
  }
}

function repeatStringNumTimes(string, times) {
  var repeatedString = "";

  while (times > 0) {
    repeatedString += string;
    times--;
  }

  return repeatedString;
}
// CONCATENATED MODULE: ./src/sdkAnalytics/base64Map.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
var base64Map_num = 0;
var map = {};

_toConsumableArray(chars).forEach(function (_char) {
  var key = base64Map_num.toString(2);
  key = stringPad(key, 6, '0');
  map[key] = _char;
  base64Map_num++;
});
/**
 * Map of six-bit binary codes to Base64 characters
 */


/* harmony default export */ var base64Map = (map);
// CONCATENATED MODULE: ./src/sdkAnalytics/reverseVersion.js

/**
 * @description A semVer like string, x.y.z or x.y is allowed
 *              Reverses the version positions, x.y.z turns to z.y.x
 *              Pads each segment with '0' so they have length of 2
 *              Example: 1.2.3 -> 03.02.01
 * @param {string} semVer Input can be either x.y.z or x.y
 * @return {string} in the form of zz.yy.xx (
 */

function reverseVersion(semVer) {
  if (semVer.split('.').length < 2) {
    throw new Error('invalid semVer, must have at least two segments');
  } // Split by '.', reverse, create new array with padded values and concat it together


  return semVer.split('.').reverse().map(function (segment) {
    return stringPad(segment, 2, '0');
  }).join('.');
}
// CONCATENATED MODULE: ./src/sdkAnalytics/encodeVersion.js



/**
 * @description Encodes a semVer-like version string
 * @param {string} semVer Input can be either x.y.z or x.y
 * @return {string} A string built from 3 characters of the base64 table that encode the semVer
 */

function encodeVersion(semVer) {
  var strResult = ''; // support x.y or x.y.z by using 'parts' as a variable

  var parts = semVer.split('.').length;
  var paddedStringLength = parts * 6; // we pad to either 12 or 18 characters
  // reverse (but don't mirror) the version. 1.5.15 -> 15.5.1
  // Pad to two spaces, 15.5.1 -> 15.05.01

  var paddedReversedSemver = reverseVersion(semVer); // turn 15.05.01 to a string '150501' then to a number 150501

  var num = parseInt(paddedReversedSemver.split('.').join('')); // Represent as binary, add left padding to 12 or 18 characters.
  // 150,501 -> 100100101111100101

  var paddedBinary = num.toString(2);
  paddedBinary = stringPad(paddedBinary, paddedStringLength, '0'); // Stop in case an invalid version number was provided
  // paddedBinary must be built from sections of 6 bits

  if (paddedBinary.length % 6 !== 0) {
    throw 'Version must be smaller than 43.21.26)';
  } // turn every 6 bits into a character using the base64Map


  paddedBinary.match(/.{1,6}/g).forEach(function (bitString) {
    // console.log(bitString);
    strResult += base64Map[bitString];
  });
  return strResult;
}
// CONCATENATED MODULE: ./src/sdkAnalytics/getSDKAnalyticsSignature.js

/**
 * @description Gets the SDK signature by encoding the SDK version and tech version
 * @param {{
 *    [techVersion]:string,
 *    [sdkSemver]: string,
 *    [sdkCode]: string,
 *    [feature]: string
 * }} analyticsOptions
 * @return {string} sdkAnalyticsSignature
 */

function getSDKAnalyticsSignature() {
  var analyticsOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  try {
    var twoPartVersion = removePatchFromSemver(analyticsOptions.techVersion);
    var encodedSDKVersion = encodeVersion(analyticsOptions.sdkSemver);
    var encodedTechVersion = encodeVersion(twoPartVersion);
    var featureCode = analyticsOptions.feature;
    var SDKCode = analyticsOptions.sdkCode;
    var algoVersion = 'A'; // The algo version is determined here, it should not be an argument

    return "".concat(algoVersion).concat(SDKCode).concat(encodedSDKVersion).concat(encodedTechVersion).concat(featureCode);
  } catch (e) {
    // Either SDK or Node versions were unparsable
    return 'E';
  }
}
/**
 * @description Removes patch version from the semver if it exists
 *              Turns x.y.z OR x.y into x.y
 * @param {'x.y.z' || 'x.y' || string} semVerStr
 */

function removePatchFromSemver(semVerStr) {
  var parts = semVerStr.split('.');
  return "".concat(parts[0], ".").concat(parts[1]);
}
// CONCATENATED MODULE: ./src/sdkAnalytics/getAnalyticsOptions.js
/**
 * @description Gets the analyticsOptions from options- should include sdkSemver, techVersion, sdkCode, and feature
 * @param options
 * @returns {{sdkSemver: (string), sdkCode, feature: string, techVersion: (string)} || {}}
 */
function getAnalyticsOptions(options) {
  var analyticsOptions = {
    sdkSemver: options.sdkSemver,
    techVersion: options.techVersion,
    sdkCode: options.sdkCode,
    feature: '0'
  };

  if (options.urlAnalytics) {
    if (options.accessibility) {
      analyticsOptions.feature = 'D';
    }

    if (options.loading === 'lazy') {
      analyticsOptions.feature = 'C';
    }

    if (options.responsive) {
      analyticsOptions.feature = 'A';
    }

    if (options.placeholder) {
      analyticsOptions.feature = 'B';
    }

    return analyticsOptions;
  } else {
    return {};
  }
}
// EXTERNAL MODULE: external {"commonjs":"lodash/assign","commonjs2":"lodash/assign","amd":"lodash/assign","root":["_","assign"]}
var assign_root_assign_ = __webpack_require__("lodash/assign");
var assign_root_assign_default = /*#__PURE__*/__webpack_require__.n(assign_root_assign_);

// EXTERNAL MODULE: external {"commonjs":"lodash/cloneDeep","commonjs2":"lodash/cloneDeep","amd":"lodash/cloneDeep","root":["_","cloneDeep"]}
var cloneDeep_root_cloneDeep_ = __webpack_require__("lodash/cloneDeep");
var cloneDeep_root_cloneDeep_default = /*#__PURE__*/__webpack_require__.n(cloneDeep_root_cloneDeep_);

// EXTERNAL MODULE: external {"commonjs":"lodash/compact","commonjs2":"lodash/compact","amd":"lodash/compact","root":["_","compact"]}
var compact_root_compact_ = __webpack_require__("lodash/compact");
var compact_root_compact_default = /*#__PURE__*/__webpack_require__.n(compact_root_compact_);

// EXTERNAL MODULE: external {"commonjs":"lodash/difference","commonjs2":"lodash/difference","amd":"lodash/difference","root":["_","difference"]}
var difference_root_difference_ = __webpack_require__("lodash/difference");
var difference_root_difference_default = /*#__PURE__*/__webpack_require__.n(difference_root_difference_);

// EXTERNAL MODULE: external {"commonjs":"lodash/functions","commonjs2":"lodash/functions","amd":"lodash/functions","root":["_","functions"]}
var functions_root_functions_ = __webpack_require__("lodash/functions");
var functions_root_functions_default = /*#__PURE__*/__webpack_require__.n(functions_root_functions_);

// EXTERNAL MODULE: external {"commonjs":"lodash/identity","commonjs2":"lodash/identity","amd":"lodash/identity","root":["_","identity"]}
var identity_root_identity_ = __webpack_require__("lodash/identity");
var identity_root_identity_default = /*#__PURE__*/__webpack_require__.n(identity_root_identity_);

// EXTERNAL MODULE: external {"commonjs":"lodash/includes","commonjs2":"lodash/includes","amd":"lodash/includes","root":["_","includes"]}
var includes_root_includes_ = __webpack_require__("lodash/includes");
var includes_root_includes_default = /*#__PURE__*/__webpack_require__.n(includes_root_includes_);

// EXTERNAL MODULE: external {"commonjs":"lodash/isArray","commonjs2":"lodash/isArray","amd":"lodash/isArray","root":["_","isArray"]}
var isArray_root_isArray_ = __webpack_require__("lodash/isArray");
var isArray_root_isArray_default = /*#__PURE__*/__webpack_require__.n(isArray_root_isArray_);

// EXTERNAL MODULE: external {"commonjs":"lodash/isPlainObject","commonjs2":"lodash/isPlainObject","amd":"lodash/isPlainObject","root":["_","isPlainObject"]}
var isPlainObject_root_isPlainObject_ = __webpack_require__("lodash/isPlainObject");
var isPlainObject_root_isPlainObject_default = /*#__PURE__*/__webpack_require__.n(isPlainObject_root_isPlainObject_);

// EXTERNAL MODULE: external {"commonjs":"lodash/isString","commonjs2":"lodash/isString","amd":"lodash/isString","root":["_","isString"]}
var isString_root_isString_ = __webpack_require__("lodash/isString");
var isString_root_isString_default = /*#__PURE__*/__webpack_require__.n(isString_root_isString_);

// EXTERNAL MODULE: external {"commonjs":"lodash/merge","commonjs2":"lodash/merge","amd":"lodash/merge","root":["_","merge"]}
var merge_root_merge_ = __webpack_require__("lodash/merge");
var merge_root_merge_default = /*#__PURE__*/__webpack_require__.n(merge_root_merge_);

// EXTERNAL MODULE: external {"commonjs":"lodash/isElement","commonjs2":"lodash/isElement","amd":"lodash/isElement","root":["_","isElement"]}
var isElement_root_isElement_ = __webpack_require__("lodash/isElement");
var isElement_root_isElement_default = /*#__PURE__*/__webpack_require__.n(isElement_root_isElement_);

// EXTERNAL MODULE: external {"commonjs":"lodash/isFunction","commonjs2":"lodash/isFunction","amd":"lodash/isFunction","root":["_","isFunction"]}
var isFunction_root_isFunction_ = __webpack_require__("lodash/isFunction");
var isFunction_root_isFunction_default = /*#__PURE__*/__webpack_require__.n(isFunction_root_isFunction_);

// EXTERNAL MODULE: external {"commonjs":"lodash/trim","commonjs2":"lodash/trim","amd":"lodash/trim","root":["_","trim"]}
var trim_root_trim_ = __webpack_require__("lodash/trim");
var trim_root_trim_default = /*#__PURE__*/__webpack_require__.n(trim_root_trim_);

// CONCATENATED MODULE: ./src/util/lazyLoad.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*
 * Includes utility methods for lazy loading media
 */

/**
 * Check if IntersectionObserver is supported
 * @return {boolean} true if window.IntersectionObserver is defined
 */
function isIntersectionObserverSupported() {
  // Check that 'IntersectionObserver' property is defined on window
  return (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && window.IntersectionObserver;
}
/**
 * Check if native lazy loading is supported
 * @return {boolean} true if 'loading' property is defined for HTMLImageElement
 */

function isNativeLazyLoadSupported() {
  return (typeof HTMLImageElement === "undefined" ? "undefined" : _typeof(HTMLImageElement)) === "object" && HTMLImageElement.prototype.loading;
}
/**
 * Calls onIntersect() when intersection is detected, or when
 * no native lazy loading or when IntersectionObserver isn't supported.
 * @param {Element} el - the element to observe
 * @param {function} onIntersect - called when the given element is in view
 */

function detectIntersection(el, onIntersect) {
  try {
    if (isNativeLazyLoadSupported() || !isIntersectionObserverSupported()) {
      // Return if there's no need or possibility to detect intersection
      onIntersect();
      return;
    } // Detect intersection with given element using IntersectionObserver


    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          onIntersect();
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: [0, 0.01]
    });
    observer.observe(el);
  } catch (e) {
    onIntersect();
  }
}
// CONCATENATED MODULE: ./src/constants.js
var VERSION = "2.5.0";
var CF_SHARED_CDN = "d3jpl91pxevbkh.cloudfront.net";
var OLD_AKAMAI_SHARED_CDN = "cloudinary-a.akamaihd.net";
var AKAMAI_SHARED_CDN = "res.cloudinary.com";
var SHARED_CDN = AKAMAI_SHARED_CDN;
var DEFAULT_TIMEOUT_MS = 10000;
var DEFAULT_POSTER_OPTIONS = {
  format: 'jpg',
  resource_type: 'video'
};
var DEFAULT_VIDEO_SOURCE_TYPES = ['webm', 'mp4', 'ogv'];
var SEO_TYPES = {
  "image/upload": "images",
  "image/private": "private_images",
  "image/authenticated": "authenticated_images",
  "raw/upload": "files",
  "video/upload": "videos"
};
/**
* @const {Object} Cloudinary.DEFAULT_IMAGE_PARAMS
* Defaults values for image parameters.
*
* (Previously defined using option_consume() )
 */

var DEFAULT_IMAGE_PARAMS = {
  resource_type: "image",
  transformation: [],
  type: 'upload'
};
/**
* Defaults values for video parameters.
* @const {Object} Cloudinary.DEFAULT_VIDEO_PARAMS
* (Previously defined using option_consume() )
 */

var DEFAULT_VIDEO_PARAMS = {
  fallback_content: '',
  resource_type: "video",
  source_transformation: {},
  source_types: DEFAULT_VIDEO_SOURCE_TYPES,
  transformation: [],
  type: 'upload'
};
/**
 * Recommended sources for video tag
 * @const {Object} Cloudinary.DEFAULT_VIDEO_SOURCES
 */

var DEFAULT_VIDEO_SOURCES = [{
  type: "mp4",
  codecs: "hev1",
  transformations: {
    video_codec: "h265"
  }
}, {
  type: "webm",
  codecs: "vp9",
  transformations: {
    video_codec: "vp9"
  }
}, {
  type: "mp4",
  transformations: {
    video_codec: "auto"
  }
}, {
  type: "webm",
  transformations: {
    video_codec: "auto"
  }
}];
var DEFAULT_EXTERNAL_LIBRARIES = {
  seeThru: 'https://unpkg.com/seethru@4/dist/seeThru.min.js'
};
/**
 * Predefined placeholder transformations
 * @const {Object} Cloudinary.PLACEHOLDER_IMAGE_MODES
 */

var PLACEHOLDER_IMAGE_MODES = {
  'blur': [{
    effect: 'blur:2000',
    quality: 1,
    fetch_format: 'auto'
  }],
  // Default
  'pixelate': [{
    effect: 'pixelate',
    quality: 1,
    fetch_format: 'auto'
  }],
  // Generates a pixel size image which color is the predominant color of the original image.
  'predominant-color-pixel': [{
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
  }],
  // Generates an image which color is the predominant color of the original image.
  'predominant-color': [{
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
  }],
  'vectorize': [{
    effect: 'vectorize:3:0.1',
    fetch_format: 'svg'
  }]
};
/**
 * Predefined accessibility transformations
 * @const {Object} Cloudinary.ACCESSIBILITY_MODES
 */

var ACCESSIBILITY_MODES = {
  darkmode: 'tint:75:black',
  brightmode: 'tint:50:white',
  monochrome: 'grayscale',
  colorblind: 'assist_colorblind'
};
/**
 * A list of keys used by the url() function.
 * @private
 */

var URL_KEYS = ['accessibility', 'api_secret', 'auth_token', 'cdn_subdomain', 'cloud_name', 'cname', 'format', 'placeholder', 'private_cdn', 'resource_type', 'secure', 'secure_cdn_subdomain', 'secure_distribution', 'shorten', 'sign_url', 'signature', 'ssl_detected', 'type', 'url_suffix', 'use_root_path', 'version'];
/**
 * The resource storage type
 * @typedef type
 * @enum {string}
 * @property  {string} 'upload' A resource uploaded directly to Cloudinary
 * @property  {string} 'fetch' A resource fetched by Cloudinary from a 3rd party storage
 * @property  {string} 'private'
 * @property  {string} 'authenticated'
 * @property  {string} 'sprite'
 * @property  {string} 'facebook'
 * @property  {string} 'twitter'
 * @property  {string} 'youtube'
 * @property  {string} 'vimeo'
 *
 */

/**
 * The resource type
 * @typedef resourceType
 * @enum {string}
 * @property {string} 'image' An image file
 * @property {string} 'video' A video file
 * @property {string} 'raw'   A raw file
 */
// CONCATENATED MODULE: ./src/util/baseutil.js
function baseutil_typeof(obj) { "@babel/helpers - typeof"; return baseutil_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, baseutil_typeof(obj); }

/*
 * Includes common utility methods and shims
 */


function omit(obj, keys) {
  obj = obj || {};
  var srcKeys = Object.keys(obj).filter(function (key) {
    return !includes_root_includes_default()(keys, key);
  });
  var filtered = {};
  srcKeys.forEach(function (key) {
    return filtered[key] = obj[key];
  });
  return filtered;
}
/**
 * Return true if all items in list are strings
 * @function Util.allString
 * @param {Array} list - an array of items
 */

var baseutil_allStrings = function allStrings(list) {
  return list.length && list.every(isString_root_isString_default.a);
};
/**
* Creates a new array without the given item.
* @function Util.without
* @param {Array} array - original array
* @param {*} item - the item to exclude from the new array
* @return {Array} a new array made of the original array's items except for `item`
 */

var without = function without(array, item) {
  return array.filter(function (v) {
    return v !== item;
  });
};
/**
* Return true is value is a number or a string representation of a number.
* @function Util.isNumberLike
* @param {*} value
* @returns {boolean} true if value is a number
* @example
*    Util.isNumber(0) // true
*    Util.isNumber("1.3") // true
*    Util.isNumber("") // false
*    Util.isNumber(undefined) // false
 */

var isNumberLike = function isNumberLike(value) {
  return value != null && !isNaN(parseFloat(value));
};
/**
 * Escape all characters matching unsafe in the given string
 * @function Util.smartEscape
 * @param {string} string - source string to escape
 * @param {RegExp} unsafe - characters that must be escaped
 * @return {string} escaped string
 */

var smartEscape = function smartEscape(string) {
  var unsafe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : /([^a-zA-Z0-9_.\-\/:]+)/g;
  return string.replace(unsafe, function (match) {
    return match.split("").map(function (c) {
      return "%" + c.charCodeAt(0).toString(16).toUpperCase();
    }).join("");
  });
};
/**
 * Assign values from sources if they are not defined in the destination.
 * Once a value is set it does not change
 * @function Util.defaults
 * @param {Object} destination - the object to assign defaults to
 * @param {...Object} source - the source object(s) to assign defaults from
 * @return {Object} destination after it was modified
 */

var defaults = function defaults(destination) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  return sources.reduce(function (dest, source) {
    var key, value;

    for (key in source) {
      value = source[key];

      if (dest[key] === void 0) {
        dest[key] = value;
      }
    }

    return dest;
  }, destination);
};
/*********** lodash functions */

var objectProto = Object.prototype;
/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */

var objToString = objectProto.toString;
/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
#isObject({});
 * // => true
 *
#isObject([1, 2, 3]);
 * // => true
 *
#isObject(1);
 * // => false
 */

var isObject = function isObject(value) {
  var type; // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.

  type = baseutil_typeof(value);
  return !!value && (type === 'object' || type === 'function');
};
var funcTag = '[object Function]';
/**
* Checks if `value` is classified as a `Function` object.
* @function Util.isFunction
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
* @example
*
* function Foo(){};
* isFunction(Foo);
* // => true
*
* isFunction(/abc/);
* // => false
 */

var isFunction = function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in older versions of Chrome and Safari which return 'function' for regexes
  // and Safari 8 which returns 'object' for typed array constructors.
  return isObject(value) && objToString.call(value) === funcTag;
};
/*********** lodash functions */

/** Used to match words to create compound words. */

var reWords = function () {
  var lower, upper;
  upper = '[A-Z]';
  lower = '[a-z]+';
  return RegExp(upper + '+(?=' + upper + lower + ')|' + upper + '?' + lower + '|' + upper + '+|[0-9]+', 'g');
}();
/**
* Convert string to camelCase
* @function Util.camelCase
* @param {string} source - the string to convert
* @return {string} in camelCase format
 */

var camelCase = function camelCase(source) {
  var words = source.match(reWords);
  words = words.map(function (word) {
    return word.charAt(0).toLocaleUpperCase() + word.slice(1).toLocaleLowerCase();
  });
  words[0] = words[0].toLocaleLowerCase();
  return words.join('');
};
/**
 * Convert string to snake_case
 * @function Util.snakeCase
 * @param {string} source - the string to convert
 * @return {string} in snake_case format
 */

var snakeCase = function snakeCase(source) {
  var words = source.match(reWords);
  words = words.map(function (word) {
    return word.toLocaleLowerCase();
  });
  return words.join('_');
};
/**
 * Creates a new object from source, with the keys transformed using the converter.
 * @param {object} source
 * @param {function|null} converter
 * @returns {object}
 */

var convertKeys = function convertKeys(source, converter) {
  var result, value;
  result = {};

  for (var key in source) {
    value = source[key];

    if (converter) {
      key = converter(key);
    }

    if (!isEmpty(key)) {
      result[key] = value;
    }
  }

  return result;
};
/**
 * Create a copy of the source object with all keys in camelCase
 * @function Util.withCamelCaseKeys
 * @param {Object} value - the object to copy
 * @return {Object} a new object
 */

var withCamelCaseKeys = function withCamelCaseKeys(source) {
  return convertKeys(source, camelCase);
};
/**
 * Create a copy of the source object with all keys in snake_case
 * @function Util.withSnakeCaseKeys
 * @param {Object} value - the object to copy
 * @return {Object} a new object
 */

var withSnakeCaseKeys = function withSnakeCaseKeys(source) {
  return convertKeys(source, snakeCase);
}; // Browser
// Node.js

var base64Encode = typeof btoa !== 'undefined' && isFunction(btoa) ? btoa : typeof Buffer !== 'undefined' && isFunction(Buffer) ? function (input) {
  if (!(input instanceof Buffer)) {
    input = new Buffer.from(String(input), 'binary');
  }

  return input.toString('base64');
} : function (input) {
  throw new Error("No base64 encoding function found");
};
/**
* Returns the Base64-decoded version of url.<br>
* This method delegates to `btoa` if present. Otherwise it tries `Buffer`.
* @function Util.base64EncodeURL
* @param {string} url - the url to encode. the value is URIdecoded and then re-encoded before converting to base64 representation
* @return {string} the base64 representation of the URL
 */

var base64EncodeURL = function base64EncodeURL(url) {
  try {
    url = decodeURI(url);
  } finally {
    url = encodeURI(url);
  }

  return base64Encode(url);
};
/**
 * Create a new object with only URL parameters
 * @param {object} options The source object
 * @return {Object} An object containing only URL parameters
 */

function extractUrlParams(options) {
  return URL_KEYS.reduce(function (obj, key) {
    if (options[key] != null) {
      obj[key] = options[key];
    }

    return obj;
  }, {});
}
/**
 * Handle the format parameter for fetch urls
 * @private
 * @param options url and transformation options. This argument may be changed by the function!
 */

function patchFetchFormat(options) {
  if (options == null) {
    options = {};
  }

  if (options.type === "fetch") {
    if (options.fetch_format == null) {
      options.fetch_format = optionConsume(options, "format");
    }
  }
}
/**
 * Deletes `option_name` from `options` and return the value if present.
 * If `options` doesn't contain `option_name` the default value is returned.
 * @param {Object} options a collection
 * @param {String} option_name the name (key) of the desired value
 * @param {*} [default_value] the value to return is option_name is missing
 */

function optionConsume(options, option_name, default_value) {
  var result = options[option_name];
  delete options[option_name];

  if (result != null) {
    return result;
  } else {
    return default_value;
  }
}
/**
 * Returns true if value is empty:
 * <ul>
 *   <li>value is null or undefined</li>
 *   <li>value is an array or string of length 0</li>
 *   <li>value is an object with no keys</li>
 * </ul>
 * @function Util.isEmpty
 * @param value
 * @returns {boolean} true if value is empty
 */

function isEmpty(value) {
  if (value == null) {
    return true;
  }

  if (typeof value.length == "number") {
    return value.length === 0;
  }

  if (typeof value.size == "number") {
    return value.size === 0;
  }

  if (baseutil_typeof(value) == "object") {
    for (var key in value) {
      if (value.hasOwnProperty(key)) {
        return false;
      }
    }

    return true;
  }

  return true;
}
// CONCATENATED MODULE: ./src/util/browser.js
/**
 * Based on video.js implementation:
 * https://github.com/videojs/video.js/blob/4238f5c1d88890547153e7e1de7bd0d1d8e0b236/src/js/utils/browser.js
 */

/**
* Retrieve from the navigator the user agent property.
* @returns user agent property.
*/
function getUserAgent() {
  return navigator && navigator.userAgent || '';
}
/**
 * Detect if current browser is any Android
 * @returns true if current browser is Android, false otherwise.
 */


function isAndroid() {
  var userAgent = getUserAgent();
  return /Android/i.test(userAgent);
}
/**
 * Detect if current browser is any Edge
 * @returns true if current browser is Edge, false otherwise.
 */

function isEdge() {
  var userAgent = getUserAgent();
  return /Edg/i.test(userAgent);
}
/**
 * Detect if current browser is chrome.
 * @returns true if current browser is Chrome, false otherwise.
 */

function isChrome() {
  var userAgent = getUserAgent();
  return !isEdge() && (/Chrome/i.test(userAgent) || /CriOS/i.test(userAgent));
}
/**
 * Detect if current browser is Safari.
 * @returns true if current browser is Safari, false otherwise.
 */

function isSafari() {
  // User agents for other browsers might include "Safari" so we must exclude them.
  // For example - this is the chrome user agent on windows 10:
  // Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36
  var userAgent = getUserAgent();
  return /Safari/i.test(userAgent) && !isChrome() && !isAndroid() && !isEdge();
}
// CONCATENATED MODULE: ./src/util/lodash.js
var nodeContains;






















/*
 * Includes utility methods and lodash / jQuery shims
 */

/**
 * Get data from the DOM element.
 *
 * This method will use jQuery's `data()` method if it is available, otherwise it will get the `data-` attribute
 * @param {Element} element - the element to get the data from
 * @param {string} name - the name of the data item
 * @returns the value associated with the `name`
 * @function Util.getData
 */

var lodash_getData = function getData(element, name) {
  switch (false) {
    case !(element == null):
      return void 0;

    case !isFunction_root_isFunction_default()(element.getAttribute):
      return element.getAttribute("data-".concat(name));

    case !isFunction_root_isFunction_default()(element.getAttr):
      return element.getAttr("data-".concat(name));

    case !isFunction_root_isFunction_default()(element.data):
      return element.data(name);

    case !(isFunction_root_isFunction_default()(typeof jQuery !== "undefined" && jQuery.fn && jQuery.fn.data) && isElement_root_isElement_default()(element)):
      return jQuery(element).data(name);
  }
};
/**
 * Set data in the DOM element.
 *
 * This method will use jQuery's `data()` method if it is available, otherwise it will set the `data-` attribute
 * @function Util.setData
 * @param {Element} element - the element to set the data in
 * @param {string} name - the name of the data item
 * @param {*} value - the value to be set
 *
 */

var lodash_setData = function setData(element, name, value) {
  switch (false) {
    case !(element == null):
      return void 0;

    case !isFunction_root_isFunction_default()(element.setAttribute):
      return element.setAttribute("data-".concat(name), value);

    case !isFunction_root_isFunction_default()(element.setAttr):
      return element.setAttr("data-".concat(name), value);

    case !isFunction_root_isFunction_default()(element.data):
      return element.data(name, value);

    case !(isFunction_root_isFunction_default()(typeof jQuery !== "undefined" && jQuery.fn && jQuery.fn.data) && isElement_root_isElement_default()(element)):
      return jQuery(element).data(name, value);
  }
};
/**
 * Get attribute from the DOM element.
 *
 * @function Util.getAttribute
 * @param {Element} element - the element to set the attribute for
 * @param {string} name - the name of the attribute
 * @returns {*} the value of the attribute
 *
 */

var lodash_getAttribute = function getAttribute(element, name) {
  switch (false) {
    case !(element == null):
      return void 0;

    case !isFunction_root_isFunction_default()(element.getAttribute):
      return element.getAttribute(name);

    case !isFunction_root_isFunction_default()(element.attr):
      return element.attr(name);

    case !isFunction_root_isFunction_default()(element.getAttr):
      return element.getAttr(name);
  }
};
/**
 * Set attribute in the DOM element.
 *
 * @function Util.setAttribute
 * @param {Element} element - the element to set the attribute for
 * @param {string} name - the name of the attribute
 * @param {*} value - the value to be set
 */

var lodash_setAttribute = function setAttribute(element, name, value) {
  switch (false) {
    case !(element == null):
      return void 0;

    case !isFunction_root_isFunction_default()(element.setAttribute):
      return element.setAttribute(name, value);

    case !isFunction_root_isFunction_default()(element.attr):
      return element.attr(name, value);

    case !isFunction_root_isFunction_default()(element.setAttr):
      return element.setAttr(name, value);
  }
};
/**
 * Remove an attribute in the DOM element.
 *
 * @function Util.removeAttribute
 * @param {Element} element - the element to set the attribute for
 * @param {string} name - the name of the attribute
 */

var lodash_removeAttribute = function removeAttribute(element, name) {
  switch (false) {
    case !(element == null):
      return void 0;

    case !isFunction_root_isFunction_default()(element.removeAttribute):
      return element.removeAttribute(name);

    default:
      return lodash_setAttribute(element, void 0);
  }
};
/**
 * Set a group of attributes to the element
 * @function Util.setAttributes
 * @param {Element} element - the element to set the attributes for
 * @param {Object} attributes - a hash of attribute names and values
 */

var setAttributes = function setAttributes(element, attributes) {
  var name, results, value;
  results = [];

  for (name in attributes) {
    value = attributes[name];

    if (value != null) {
      results.push(lodash_setAttribute(element, name, value));
    } else {
      results.push(lodash_removeAttribute(element, name));
    }
  }

  return results;
};
/**
 * Checks if element has a css class
 * @function Util.hasClass
 * @param {Element} element - the element to check
 * @param {string} name - the class name
 @returns {boolean} true if the element has the class
 */

var lodash_hasClass = function hasClass(element, name) {
  if (isElement_root_isElement_default()(element)) {
    return element.className.match(new RegExp("\\b".concat(name, "\\b")));
  }
};
/**
 * Add class to the element
 * @function Util.addClass
 * @param {Element} element - the element
 * @param {string} name - the class name to add
 */

var lodash_addClass = function addClass(element, name) {
  if (!element.className.match(new RegExp("\\b".concat(name, "\\b")))) {
    return element.className = trim_root_trim_default()("".concat(element.className, " ").concat(name));
  }
}; // The following code is taken from jQuery

var getStyles = function getStyles(elem) {
  // Support: IE<=11+, Firefox<=30+ (#15098, #14150)
  // IE throws on elements created in popups
  // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
  if (elem.ownerDocument.defaultView.opener) {
    return elem.ownerDocument.defaultView.getComputedStyle(elem, null);
  }

  return window.getComputedStyle(elem, null);
};
var cssExpand = ["Top", "Right", "Bottom", "Left"];

nodeContains = function nodeContains(a, b) {
  var adown, bup;
  adown = a.nodeType === 9 ? a.documentElement : a;
  bup = b && b.parentNode;
  return a === bup || !!(bup && bup.nodeType === 1 && adown.contains(bup));
}; // Truncated version of jQuery.style(elem, name)


var domStyle = function domStyle(elem, name) {
  if (!(!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style)) {
    return elem.style[name];
  }
};
var curCSS = function curCSS(elem, name, computed) {
  var maxWidth, minWidth, ret, rmargin, style, width;
  rmargin = /^margin/;
  width = void 0;
  minWidth = void 0;
  maxWidth = void 0;
  ret = void 0;
  style = elem.style;
  computed = computed || getStyles(elem);

  if (computed) {
    // Support: IE9
    // getPropertyValue is only needed for .css('filter') (#12537)
    ret = computed.getPropertyValue(name) || computed[name];
  }

  if (computed) {
    if (ret === "" && !nodeContains(elem.ownerDocument, elem)) {
      ret = domStyle(elem, name);
    } // Support: iOS < 6
    // A tribute to the "awesome hack by Dean Edwards"
    // iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
    // this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values


    if (rnumnonpx.test(ret) && rmargin.test(name)) {
      // Remember the original values
      width = style.width;
      minWidth = style.minWidth;
      maxWidth = style.maxWidth; // Put in the new values to get a computed value out

      style.minWidth = style.maxWidth = style.width = ret;
      ret = computed.width; // Revert the changed values

      style.width = width;
      style.minWidth = minWidth;
      style.maxWidth = maxWidth;
    }
  } // Support: IE
  // IE returns zIndex value as an integer.


  if (ret !== undefined) {
    return ret + "";
  } else {
    return ret;
  }
};
var cssValue = function cssValue(elem, name, convert, styles) {
  var val;
  val = curCSS(elem, name, styles);

  if (convert) {
    return parseFloat(val);
  } else {
    return val;
  }
};
var augmentWidthOrHeight = function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
  var i, len, side, sides, val; // If we already have the right measurement, avoid augmentation
  // Otherwise initialize for horizontal or vertical properties

  if (extra === (isBorderBox ? "border" : "content")) {
    return 0;
  } else {
    sides = name === "width" ? ["Right", "Left"] : ["Top", "Bottom"];
    val = 0;

    for (i = 0, len = sides.length; i < len; i++) {
      side = sides[i];

      if (extra === "margin") {
        // Both box models exclude margin, so add it if we want it
        val += cssValue(elem, extra + side, true, styles);
      }

      if (isBorderBox) {
        if (extra === "content") {
          // border-box includes padding, so remove it if we want content
          val -= cssValue(elem, "padding".concat(side), true, styles);
        }

        if (extra !== "margin") {
          // At this point, extra isn't border nor margin, so remove border
          val -= cssValue(elem, "border".concat(side, "Width"), true, styles);
        }
      } else {
        // At this point, extra isn't content, so add padding
        val += cssValue(elem, "padding".concat(side), true, styles);

        if (extra !== "padding") {
          // At this point, extra isn't content nor padding, so add border
          val += cssValue(elem, "border".concat(side, "Width"), true, styles);
        }
      }
    }

    return val;
  }
};
var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
var getWidthOrHeight = function getWidthOrHeight(elem, name, extra) {
  var isBorderBox, styles, val, valueIsBorderBox; // Start with offset property, which is equivalent to the border-box value

  valueIsBorderBox = true;
  val = name === "width" ? elem.offsetWidth : elem.offsetHeight;
  styles = getStyles(elem);
  isBorderBox = cssValue(elem, "boxSizing", false, styles) === "border-box"; // Some non-html elements return undefined for offsetWidth, so check for null/undefined
  // svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
  // MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668

  if (val <= 0 || val == null) {
    // Fall back to computed then uncomputed css if necessary
    val = curCSS(elem, name, styles);

    if (val < 0 || val == null) {
      val = elem.style[name];
    }

    if (rnumnonpx.test(val)) {
      // Computed unit is not pixels. Stop here and return.
      return val;
    } // Check for style in case a browser which returns unreliable values
    // for getComputedStyle silently falls back to the reliable elem.style
    //    valueIsBorderBox = isBorderBox and (support.boxSizingReliable() or val is elem.style[name])


    valueIsBorderBox = isBorderBox && val === elem.style[name]; // Normalize "", auto, and prepare for extra

    val = parseFloat(val) || 0;
  } // Use the active box-sizing model to add/subtract irrelevant styles


  return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles);
};
var lodash_width = function width(element) {
  return getWidthOrHeight(element, "width", "content");
};
/**
 * @class Util
 */

/**
 * Returns true if item is a string
 * @function Util.isString
 * @param item
 * @returns {boolean} true if item is a string
 */

/**
 * Returns true if item is empty:
 * <ul>
 *   <li>item is null or undefined</li>
 *   <li>item is an array or string of length 0</li>
 *   <li>item is an object with no keys</li>
 * </ul>
 * @function Util.isEmpty
 * @param item
 * @returns {boolean} true if item is empty
 */

/**
 * Assign source properties to destination.
 * If the property is an object it is assigned as a whole, overriding the destination object.
 * @function Util.assign
 * @param {Object} destination - the object to assign to
 */

/**
 * Recursively assign source properties to destination
 * @function Util.merge
 * @param {Object} destination - the object to assign to
 * @param {...Object} [sources] The source objects.
 */

/**
 * Create a new copy of the given object, including all internal objects.
 * @function Util.cloneDeep
 * @param {Object} value - the object to clone
 * @return {Object} a new deep copy of the object
 */

/**
 * Creates a new array from the parameter with "falsey" values removed
 * @function Util.compact
 * @param {Array} array - the array to remove values from
 * @return {Array} a new array without falsey values
 */

/**
 * Check if a given item is included in the given array
 * @function Util.contains
 * @param {Array} array - the array to search in
 * @param {*} item - the item to search for
 * @return {boolean} true if the item is included in the array
 */

/**
 * Returns values in the given array that are not included in the other array
 * @function Util.difference
 * @param {Array} arr - the array to select from
 * @param {Array} values - values to filter from arr
 * @return {Array} the filtered values
 */

/**
 * Returns a list of all the function names in obj
 * @function Util.functions
 * @param {Object} object - the object to inspect
 * @return {Array} a list of functions of object
 */

/**
 * Returns the provided value. This functions is used as a default predicate function.
 * @function Util.identity
 * @param {*} value
 * @return {*} the provided value
 */

/**
 * Remove leading or trailing spaces from text
 * @function Util.trim
 * @param {string} text
 * @return {string} the `text` without leading or trailing spaces
 */
// CONCATENATED MODULE: ./src/expression.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * Represents a transformation expression.
 * @param {string} expressionStr - An expression in string format.
 * @class Expression
 * Normally this class is not instantiated directly
 */
var Expression = /*#__PURE__*/function () {
  function Expression(expressionStr) {
    _classCallCheck(this, Expression);

    /**
     * @protected
     * @inner Expression-expressions
     */
    this.expressions = [];

    if (expressionStr != null) {
      this.expressions.push(Expression.normalize(expressionStr));
    }
  }
  /**
   * Convenience constructor method
   * @function Expression.new
   */


  _createClass(Expression, [{
    key: "serialize",
    value:
    /**
     * Serialize the expression
     * @return {string} the expression as a string
     */
    function serialize() {
      return Expression.normalize(this.expressions.join("_"));
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.serialize();
    }
    /**
     * Get the parent transformation of this expression
     * @return Transformation
     */

  }, {
    key: "getParent",
    value: function getParent() {
      return this.parent;
    }
    /**
     * Set the parent transformation of this expression
     * @param {Transformation} the parent transformation
     * @return {Expression} this expression
     */

  }, {
    key: "setParent",
    value: function setParent(parent) {
      this.parent = parent;
      return this;
    }
    /**
     * Add a expression
     * @function Expression#predicate
     * @internal
     */

  }, {
    key: "predicate",
    value: function predicate(name, operator, value) {
      if (Expression.OPERATORS[operator] != null) {
        operator = Expression.OPERATORS[operator];
      }

      this.expressions.push("".concat(name, "_").concat(operator, "_").concat(value));
      return this;
    }
    /**
     * @function Expression#and
     */

  }, {
    key: "and",
    value: function and() {
      this.expressions.push("and");
      return this;
    }
    /**
     * @function Expression#or
     */

  }, {
    key: "or",
    value: function or() {
      this.expressions.push("or");
      return this;
    }
    /**
     * Conclude expression
     * @function Expression#then
     * @return {Transformation} the transformation this expression is defined for
     */

  }, {
    key: "then",
    value: function then() {
      return this.getParent()["if"](this.toString());
    }
    /**
     * @function Expression#height
     * @param {string} operator the comparison operator (e.g. "<", "lt")
     * @param {string|number} value the right hand side value
     * @return {Expression} this expression
     */

  }, {
    key: "height",
    value: function height(operator, value) {
      return this.predicate("h", operator, value);
    }
    /**
     * @function Expression#width
     * @param {string} operator the comparison operator (e.g. "<", "lt")
     * @param {string|number} value the right hand side value
     * @return {Expression} this expression
     */

  }, {
    key: "width",
    value: function width(operator, value) {
      return this.predicate("w", operator, value);
    }
    /**
     * @function Expression#aspectRatio
     * @param {string} operator the comparison operator (e.g. "<", "lt")
     * @param {string|number} value the right hand side value
     * @return {Expression} this expression
     */

  }, {
    key: "aspectRatio",
    value: function aspectRatio(operator, value) {
      return this.predicate("ar", operator, value);
    }
    /**
     * @function Expression#pages
     * @param {string} operator the comparison operator (e.g. "<", "lt")
     * @param {string|number} value the right hand side value
     * @return {Expression} this expression
     */

  }, {
    key: "pageCount",
    value: function pageCount(operator, value) {
      return this.predicate("pc", operator, value);
    }
    /**
     * @function Expression#faces
     * @param {string} operator the comparison operator (e.g. "<", "lt")
     * @param {string|number} value the right hand side value
     * @return {Expression} this expression
     */

  }, {
    key: "faceCount",
    value: function faceCount(operator, value) {
      return this.predicate("fc", operator, value);
    }
  }, {
    key: "value",
    value: function value(_value) {
      this.expressions.push(_value);
      return this;
    }
    /**
     */

  }], [{
    key: "new",
    value: function _new(expressionStr) {
      return new this(expressionStr);
    }
    /**
     * Normalize a string expression
     * @function Cloudinary#normalize
     * @param {string} expression a expression, e.g. "w gt 100", "width_gt_100", "width > 100"
     * @return {string} the normalized form of the value expression, e.g. "w_gt_100"
     */

  }, {
    key: "normalize",
    value: function normalize(expression) {
      if (expression == null) {
        return expression;
      }

      expression = String(expression);
      var operators = "\\|\\||>=|<=|&&|!=|>|=|<|/|-|\\+|\\*|\\^"; // operators

      var operatorsPattern = "((" + operators + ")(?=[ _]))";
      var operatorsReplaceRE = new RegExp(operatorsPattern, "g");
      expression = expression.replace(operatorsReplaceRE, function (match) {
        return Expression.OPERATORS[match];
      }); // predefined variables
      // The :${v} part is to prevent normalization of vars with a preceding colon (such as :duration),
      // It won't be found in PREDEFINED_VARS and so won't be normalized.
      // It is done like this because ie11 does not support regex lookbehind

      var predefinedVarsPattern = "(" + Object.keys(Expression.PREDEFINED_VARS).map(function (v) {
        return ":".concat(v, "|").concat(v);
      }).join("|") + ")";
      var userVariablePattern = '(\\$_*[^_ ]+)';
      var variablesReplaceRE = new RegExp("".concat(userVariablePattern, "|").concat(predefinedVarsPattern), "g");
      expression = expression.replace(variablesReplaceRE, function (match) {
        return Expression.PREDEFINED_VARS[match] || match;
      });
      return expression.replace(/[ _]+/g, '_');
    }
  }, {
    key: "variable",
    value: function variable(name, value) {
      return new this(name).value(value);
    }
    /**
     * @returns Expression a new expression with the predefined variable "width"
     * @function Expression.width
     */

  }, {
    key: "width",
    value: function width() {
      return new this("width");
    }
    /**
     * @returns Expression a new expression with the predefined variable "height"
     * @function Expression.height
     */

  }, {
    key: "height",
    value: function height() {
      return new this("height");
    }
    /**
     * @returns Expression a new expression with the predefined variable "initialWidth"
     * @function Expression.initialWidth
     */

  }, {
    key: "initialWidth",
    value: function initialWidth() {
      return new this("initialWidth");
    }
    /**
     * @returns Expression a new expression with the predefined variable "initialHeight"
     * @function Expression.initialHeight
     */

  }, {
    key: "initialHeight",
    value: function initialHeight() {
      return new this("initialHeight");
    }
    /**
     * @returns Expression a new expression with the predefined variable "aspectRatio"
     * @function Expression.aspectRatio
     */

  }, {
    key: "aspectRatio",
    value: function aspectRatio() {
      return new this("aspectRatio");
    }
    /**
     * @returns Expression a new expression with the predefined variable "initialAspectRatio"
     * @function Expression.initialAspectRatio
     */

  }, {
    key: "initialAspectRatio",
    value: function initialAspectRatio() {
      return new this("initialAspectRatio");
    }
    /**
     * @returns Expression a new expression with the predefined variable "pageCount"
     * @function Expression.pageCount
     */

  }, {
    key: "pageCount",
    value: function pageCount() {
      return new this("pageCount");
    }
    /**
     * @returns Expression new expression with the predefined variable "faceCount"
     * @function Expression.faceCount
     */

  }, {
    key: "faceCount",
    value: function faceCount() {
      return new this("faceCount");
    }
    /**
     * @returns Expression a new expression with the predefined variable "currentPage"
     * @function Expression.currentPage
     */

  }, {
    key: "currentPage",
    value: function currentPage() {
      return new this("currentPage");
    }
    /**
     * @returns Expression a new expression with the predefined variable "tags"
     * @function Expression.tags
     */

  }, {
    key: "tags",
    value: function tags() {
      return new this("tags");
    }
    /**
     * @returns Expression a new expression with the predefined variable "pageX"
     * @function Expression.pageX
     */

  }, {
    key: "pageX",
    value: function pageX() {
      return new this("pageX");
    }
    /**
     * @returns Expression a new expression with the predefined variable "pageY"
     * @function Expression.pageY
     */

  }, {
    key: "pageY",
    value: function pageY() {
      return new this("pageY");
    }
  }]);

  return Expression;
}();
/**
 * @internal
 */


Expression.OPERATORS = {
  "=": 'eq',
  "!=": 'ne',
  "<": 'lt',
  ">": 'gt',
  "<=": 'lte',
  ">=": 'gte',
  "&&": 'and',
  "||": 'or',
  "*": "mul",
  "/": "div",
  "+": "add",
  "-": "sub",
  "^": "pow"
};
/**
 * @internal
 */

Expression.PREDEFINED_VARS = {
  "aspect_ratio": "ar",
  "aspectRatio": "ar",
  "current_page": "cp",
  "currentPage": "cp",
  "duration": "du",
  "face_count": "fc",
  "faceCount": "fc",
  "height": "h",
  "initial_aspect_ratio": "iar",
  "initial_duration": "idu",
  "initial_height": "ih",
  "initial_width": "iw",
  "initialAspectRatio": "iar",
  "initialDuration": "idu",
  "initialHeight": "ih",
  "initialWidth": "iw",
  "page_count": "pc",
  "page_x": "px",
  "page_y": "py",
  "pageCount": "pc",
  "pageX": "px",
  "pageY": "py",
  "tags": "tags",
  "width": "w"
};
/**
 * @internal
 */

Expression.BOUNDRY = "[ _]+";
/* harmony default export */ var expression = (Expression);
// CONCATENATED MODULE: ./src/condition.js
function condition_typeof(obj) { "@babel/helpers - typeof"; return condition_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, condition_typeof(obj); }

function condition_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function condition_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function condition_createClass(Constructor, protoProps, staticProps) { if (protoProps) condition_defineProperties(Constructor.prototype, protoProps); if (staticProps) condition_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (condition_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/**
 * Represents a transformation condition.
 * @param {string} conditionStr - a condition in string format
 * @class Condition
 * @example
 * // normally this class is not instantiated directly
 * var tr = cloudinary.Transformation.new()
 *    .if().width( ">", 1000).and().aspectRatio("<", "3:4").then()
 *      .width(1000)
 *      .crop("scale")
 *    .else()
 *      .width(500)
 *      .crop("scale")
 *
 * var tr = cloudinary.Transformation.new()
 *    .if("w > 1000 and aspectRatio < 3:4")
 *      .width(1000)
 *      .crop("scale")
 *    .else()
 *      .width(500)
 *      .crop("scale")
 *
 */

var Condition = /*#__PURE__*/function (_Expression) {
  _inherits(Condition, _Expression);

  var _super = _createSuper(Condition);

  function Condition(conditionStr) {
    condition_classCallCheck(this, Condition);

    return _super.call(this, conditionStr);
  }
  /**
   * @function Condition#height
   * @param {string} operator the comparison operator (e.g. "<", "lt")
   * @param {string|number} value the right hand side value
   * @return {Condition} this condition
   */


  condition_createClass(Condition, [{
    key: "height",
    value: function height(operator, value) {
      return this.predicate("h", operator, value);
    }
    /**
     * @function Condition#width
     * @param {string} operator the comparison operator (e.g. "<", "lt")
     * @param {string|number} value the right hand side value
     * @return {Condition} this condition
     */

  }, {
    key: "width",
    value: function width(operator, value) {
      return this.predicate("w", operator, value);
    }
    /**
     * @function Condition#aspectRatio
     * @param {string} operator the comparison operator (e.g. "<", "lt")
     * @param {string|number} value the right hand side value
     * @return {Condition} this condition
     */

  }, {
    key: "aspectRatio",
    value: function aspectRatio(operator, value) {
      return this.predicate("ar", operator, value);
    }
    /**
     * @function Condition#pages
     * @param {string} operator the comparison operator (e.g. "<", "lt")
     * @param {string|number} value the right hand side value
     * @return {Condition} this condition
     */

  }, {
    key: "pageCount",
    value: function pageCount(operator, value) {
      return this.predicate("pc", operator, value);
    }
    /**
     * @function Condition#faces
     * @param {string} operator the comparison operator (e.g. "<", "lt")
     * @param {string|number} value the right hand side value
     * @return {Condition} this condition
     */

  }, {
    key: "faceCount",
    value: function faceCount(operator, value) {
      return this.predicate("fc", operator, value);
    }
    /**
     * @function Condition#duration
     * @param {string} operator the comparison operator (e.g. "<", "lt")
     * @param {string|number} value the right hand side value
     * @return {Condition} this condition
     */

  }, {
    key: "duration",
    value: function duration(operator, value) {
      return this.predicate("du", operator, value);
    }
    /**
     * @function Condition#initialDuration
     * @param {string} operator the comparison operator (e.g. "<", "lt")
     * @param {string|number} value the right hand side value
     * @return {Condition} this condition
     */

  }, {
    key: "initialDuration",
    value: function initialDuration(operator, value) {
      return this.predicate("idu", operator, value);
    }
  }]);

  return Condition;
}(expression);

/* harmony default export */ var condition = (Condition);
// CONCATENATED MODULE: ./src/configuration.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || configuration_unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function configuration_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return configuration_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return configuration_arrayLikeToArray(o, minLen); }

function configuration_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function configuration_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function configuration_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function configuration_createClass(Constructor, protoProps, staticProps) { if (protoProps) configuration_defineProperties(Constructor.prototype, protoProps); if (staticProps) configuration_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * Class for defining account configuration options.
 * Depends on 'utils'
 */

/**
 * Class for defining account configuration options.
 * @constructor Configuration
 * @param {Object} options - The account configuration parameters to set.
 * @see <a href="https://cloudinary.com/documentation/solution_overview#configuration_parameters"
 *  target="_new">Available configuration options</a>
 */

var configuration_Configuration = /*#__PURE__*/function () {
  function Configuration(options) {
    configuration_classCallCheck(this, Configuration);

    this.configuration = options == null ? {} : cloneDeep_root_cloneDeep_default()(options);
    defaults(this.configuration, DEFAULT_CONFIGURATION_PARAMS);
  }
  /**
   * Initializes the configuration. This method is a convenience method that invokes both
   *  {@link Configuration#fromEnvironment|fromEnvironment()} (Node.js environment only)
   *  and {@link Configuration#fromDocument|fromDocument()}.
   *  It first tries to retrieve the configuration from the environment variable.
   *  If not available, it tries from the document meta tags.
   * @function Configuration#init
   * @return {Configuration} returns `this` for chaining
   * @see fromDocument
   * @see fromEnvironment
   */


  configuration_createClass(Configuration, [{
    key: "init",
    value: function init() {
      this.fromEnvironment();
      this.fromDocument();
      return this;
    }
    /**
     * Set a new configuration item
     * @function Configuration#set
     * @param {string} name - the name of the item to set
     * @param {*} value - the value to be set
     * @return {Configuration}
     *
     */

  }, {
    key: "set",
    value: function set(name, value) {
      this.configuration[name] = value;
      return this;
    }
    /**
     * Get the value of a configuration item
     * @function Configuration#get
     * @param {string} name - the name of the item to set
     * @return {*} the configuration item
     */

  }, {
    key: "get",
    value: function get(name) {
      return this.configuration[name];
    }
  }, {
    key: "merge",
    value: function merge(config) {
      assign_root_assign_default()(this.configuration, cloneDeep_root_cloneDeep_default()(config));
      return this;
    }
    /**
     * Initialize Cloudinary from HTML meta tags.
     * @function Configuration#fromDocument
     * @return {Configuration}
     * @example <meta name="cloudinary_cloud_name" content="mycloud">
     *
     */

  }, {
    key: "fromDocument",
    value: function fromDocument() {
      var el, i, len, meta_elements;
      meta_elements = typeof document !== "undefined" && document !== null ? document.querySelectorAll('meta[name^="cloudinary_"]') : void 0;

      if (meta_elements) {
        for (i = 0, len = meta_elements.length; i < len; i++) {
          el = meta_elements[i];
          this.configuration[el.getAttribute('name').replace('cloudinary_', '')] = el.getAttribute('content');
        }
      }

      return this;
    }
    /**
     * Initialize Cloudinary from the `CLOUDINARY_URL` environment variable.
     *
     * This function will only run under Node.js environment.
     * @function Configuration#fromEnvironment
     * @requires Node.js
     */

  }, {
    key: "fromEnvironment",
    value: function fromEnvironment() {
      var _this = this;

      var cloudinary_url, query, uri, uriRegex;

      if (typeof process !== "undefined" && process !== null && Object({"NODE_ENV":"production","BASE_URL":"/"}) && Object({"NODE_ENV":"production","BASE_URL":"/"}).CLOUDINARY_URL) {
        cloudinary_url = Object({"NODE_ENV":"production","BASE_URL":"/"}).CLOUDINARY_URL;
        uriRegex = /cloudinary:\/\/(?:(\w+)(?:\:([\w-]+))?@)?([\w\.-]+)(?:\/([^?]*))?(?:\?(.+))?/;
        uri = uriRegex.exec(cloudinary_url);

        if (uri) {
          if (uri[3] != null) {
            this.configuration['cloud_name'] = uri[3];
          }

          if (uri[1] != null) {
            this.configuration['api_key'] = uri[1];
          }

          if (uri[2] != null) {
            this.configuration['api_secret'] = uri[2];
          }

          if (uri[4] != null) {
            this.configuration['private_cdn'] = uri[4] != null;
          }

          if (uri[4] != null) {
            this.configuration['secure_distribution'] = uri[4];
          }

          query = uri[5];

          if (query != null) {
            query.split('&').forEach(function (value) {
              var _value$split = value.split('='),
                  _value$split2 = _slicedToArray(_value$split, 2),
                  k = _value$split2[0],
                  v = _value$split2[1];

              if (v == null) {
                v = true;
              }

              _this.configuration[k] = v;
            });
          }
        }
      }

      return this;
    }
    /**
     * Create or modify the Cloudinary client configuration
     *
     * Warning: `config()` returns the actual internal configuration object. modifying it will change the configuration.
     *
     * This is a backward compatibility method. For new code, use get(), merge() etc.
     * @function Configuration#config
     * @param {hash|string|boolean} new_config
     * @param {string} new_value
     * @returns {*} configuration, or value
     *
     * @see {@link fromEnvironment} for initialization using environment variables
     * @see {@link fromDocument} for initialization using HTML meta tags
     */

  }, {
    key: "config",
    value: function config(new_config, new_value) {
      switch (false) {
        case new_value === void 0:
          this.set(new_config, new_value);
          return this.configuration;

        case !isString_root_isString_default()(new_config):
          return this.get(new_config);

        case !isPlainObject_root_isPlainObject_default()(new_config):
          this.merge(new_config);
          return this.configuration;

        default:
          // Backward compatibility - return the internal object
          return this.configuration;
      }
    }
    /**
     * Returns a copy of the configuration parameters
     * @function Configuration#toOptions
     * @returns {Object} a key:value collection of the configuration parameters
     */

  }, {
    key: "toOptions",
    value: function toOptions() {
      return cloneDeep_root_cloneDeep_default()(this.configuration);
    }
  }]);

  return Configuration;
}();

var DEFAULT_CONFIGURATION_PARAMS = {
  responsive_class: 'cld-responsive',
  responsive_use_breakpoints: true,
  round_dpr: true,
  secure: (typeof window !== "undefined" && window !== null ? window.location ? window.location.protocol : void 0 : void 0) === 'https:'
};
configuration_Configuration.CONFIG_PARAMS = ["api_key", "api_secret", "callback", "cdn_subdomain", "cloud_name", "cname", "private_cdn", "protocol", "resource_type", "responsive", "responsive_class", "responsive_use_breakpoints", "responsive_width", "round_dpr", "secure", "secure_cdn_subdomain", "secure_distribution", "shorten", "type", "upload_preset", "url_suffix", "use_root_path", "version", "externalLibraries", "max_timeout_ms"];
/* harmony default export */ var src_configuration = (configuration_Configuration);
// CONCATENATED MODULE: ./src/layer/layer.js
function layer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function layer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function layer_createClass(Constructor, protoProps, staticProps) { if (protoProps) layer_defineProperties(Constructor.prototype, protoProps); if (staticProps) layer_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var layer_Layer = /*#__PURE__*/function () {
  /**
   * Layer
   * @constructor Layer
   * @param {Object} options - layer parameters
   */
  function Layer(options) {
    var _this = this;

    layer_classCallCheck(this, Layer);

    this.options = {};

    if (options != null) {
      ["resourceType", "type", "publicId", "format"].forEach(function (key) {
        var ref;
        return _this.options[key] = (ref = options[key]) != null ? ref : options[snakeCase(key)];
      });
    }
  }

  layer_createClass(Layer, [{
    key: "resourceType",
    value: function resourceType(value) {
      this.options.resourceType = value;
      return this;
    }
  }, {
    key: "type",
    value: function type(value) {
      this.options.type = value;
      return this;
    }
  }, {
    key: "publicId",
    value: function publicId(value) {
      this.options.publicId = value;
      return this;
    }
    /**
     * Get the public ID, formatted for layer parameter
     * @function Layer#getPublicId
     * @return {String} public ID
     */

  }, {
    key: "getPublicId",
    value: function getPublicId() {
      var ref;
      return (ref = this.options.publicId) != null ? ref.replace(/\//g, ":") : void 0;
    }
    /**
     * Get the public ID, with format if present
     * @function Layer#getFullPublicId
     * @return {String} public ID
     */

  }, {
    key: "getFullPublicId",
    value: function getFullPublicId() {
      if (this.options.format != null) {
        return this.getPublicId() + "." + this.options.format;
      } else {
        return this.getPublicId();
      }
    }
  }, {
    key: "format",
    value: function format(value) {
      this.options.format = value;
      return this;
    }
    /**
     * generate the string representation of the layer
     * @function Layer#toString
     */

  }, {
    key: "toString",
    value: function toString() {
      var components;
      components = [];

      if (this.options.publicId == null) {
        throw "Must supply publicId";
      }

      if (!(this.options.resourceType === "image")) {
        components.push(this.options.resourceType);
      }

      if (!(this.options.type === "upload")) {
        components.push(this.options.type);
      }

      components.push(this.getFullPublicId());
      return compact_root_compact_default()(components).join(":");
    }
  }, {
    key: "clone",
    value: function clone() {
      return new this.constructor(this.options);
    }
  }]);

  return Layer;
}();

/* harmony default export */ var layer_layer = (layer_Layer);
// CONCATENATED MODULE: ./src/layer/textlayer.js
function textlayer_typeof(obj) { "@babel/helpers - typeof"; return textlayer_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, textlayer_typeof(obj); }

function textlayer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function textlayer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function textlayer_createClass(Constructor, protoProps, staticProps) { if (protoProps) textlayer_defineProperties(Constructor.prototype, protoProps); if (staticProps) textlayer_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function textlayer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) textlayer_setPrototypeOf(subClass, superClass); }

function textlayer_setPrototypeOf(o, p) { textlayer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return textlayer_setPrototypeOf(o, p); }

function textlayer_createSuper(Derived) { var hasNativeReflectConstruct = textlayer_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = textlayer_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = textlayer_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return textlayer_possibleConstructorReturn(this, result); }; }

function textlayer_possibleConstructorReturn(self, call) { if (call && (textlayer_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return textlayer_assertThisInitialized(self); }

function textlayer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function textlayer_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function textlayer_getPrototypeOf(o) { textlayer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return textlayer_getPrototypeOf(o); }




var textlayer_TextLayer = /*#__PURE__*/function (_Layer) {
  textlayer_inherits(TextLayer, _Layer);

  var _super = textlayer_createSuper(TextLayer);

  /**
   * @constructor TextLayer
   * @param {Object} options - layer parameters
   */
  function TextLayer(options) {
    var _this;

    textlayer_classCallCheck(this, TextLayer);

    var keys;
    _this = _super.call(this, options);
    keys = ["resourceType", "resourceType", "fontFamily", "fontSize", "fontWeight", "fontStyle", "textDecoration", "textAlign", "stroke", "letterSpacing", "lineSpacing", "fontHinting", "fontAntialiasing", "text", "textStyle"];

    if (options != null) {
      keys.forEach(function (key) {
        var ref;
        return _this.options[key] = (ref = options[key]) != null ? ref : options[snakeCase(key)];
      });
    }

    _this.options.resourceType = "text";
    return _this;
  }

  textlayer_createClass(TextLayer, [{
    key: "resourceType",
    value: function resourceType(_resourceType) {
      throw "Cannot modify resourceType for text layers";
    }
  }, {
    key: "type",
    value: function type(_type) {
      throw "Cannot modify type for text layers";
    }
  }, {
    key: "format",
    value: function format(_format) {
      throw "Cannot modify format for text layers";
    }
  }, {
    key: "fontFamily",
    value: function fontFamily(_fontFamily) {
      this.options.fontFamily = _fontFamily;
      return this;
    }
  }, {
    key: "fontSize",
    value: function fontSize(_fontSize) {
      this.options.fontSize = _fontSize;
      return this;
    }
  }, {
    key: "fontWeight",
    value: function fontWeight(_fontWeight) {
      this.options.fontWeight = _fontWeight;
      return this;
    }
  }, {
    key: "fontStyle",
    value: function fontStyle(_fontStyle) {
      this.options.fontStyle = _fontStyle;
      return this;
    }
  }, {
    key: "textDecoration",
    value: function textDecoration(_textDecoration) {
      this.options.textDecoration = _textDecoration;
      return this;
    }
  }, {
    key: "textAlign",
    value: function textAlign(_textAlign) {
      this.options.textAlign = _textAlign;
      return this;
    }
  }, {
    key: "stroke",
    value: function stroke(_stroke) {
      this.options.stroke = _stroke;
      return this;
    }
  }, {
    key: "letterSpacing",
    value: function letterSpacing(_letterSpacing) {
      this.options.letterSpacing = _letterSpacing;
      return this;
    }
  }, {
    key: "lineSpacing",
    value: function lineSpacing(_lineSpacing) {
      this.options.lineSpacing = _lineSpacing;
      return this;
    }
  }, {
    key: "fontHinting",
    value: function fontHinting(_fontHinting) {
      this.options.fontHinting = _fontHinting;
      return this;
    }
  }, {
    key: "fontAntialiasing",
    value: function fontAntialiasing(_fontAntialiasing) {
      this.options.fontAntialiasing = _fontAntialiasing;
      return this;
    }
  }, {
    key: "text",
    value: function text(_text) {
      this.options.text = _text;
      return this;
    }
  }, {
    key: "textStyle",
    value: function textStyle(_textStyle) {
      this.options.textStyle = _textStyle;
      return this;
    }
    /**
     * generate the string representation of the layer
     * @function TextLayer#toString
     * @return {String}
     */

  }, {
    key: "toString",
    value: function toString() {
      var components, hasPublicId, hasStyle, publicId, re, res, start, style, text, textSource;
      style = this.textStyleIdentifier();

      if (this.options.publicId != null) {
        publicId = this.getFullPublicId();
      }

      if (this.options.text != null) {
        hasPublicId = !isEmpty(publicId);
        hasStyle = !isEmpty(style);

        if (hasPublicId && hasStyle || !hasPublicId && !hasStyle) {
          throw "Must supply either style parameters or a public_id when providing text parameter in a text overlay/underlay, but not both!";
        }

        re = /\$\([a-zA-Z]\w*\)/g;
        start = 0; //        textSource = text.replace(new RegExp("[,/]", 'g'), (c)-> "%#{c.charCodeAt(0).toString(16).toUpperCase()}")

        textSource = smartEscape(this.options.text, /[,\/]/g);
        text = "";

        while (res = re.exec(textSource)) {
          text += smartEscape(textSource.slice(start, res.index));
          text += res[0];
          start = res.index + res[0].length;
        }

        text += smartEscape(textSource.slice(start));
      }

      components = [this.options.resourceType, style, publicId, text];
      return compact_root_compact_default()(components).join(":");
    }
  }, {
    key: "textStyleIdentifier",
    value: function textStyleIdentifier() {
      // Note: if a text-style argument is provided as a whole, it overrides everything else, no mix and match.
      if (!isEmpty(this.options.textStyle)) {
        return this.options.textStyle;
      }

      var components;
      components = [];

      if (this.options.fontWeight !== "normal") {
        components.push(this.options.fontWeight);
      }

      if (this.options.fontStyle !== "normal") {
        components.push(this.options.fontStyle);
      }

      if (this.options.textDecoration !== "none") {
        components.push(this.options.textDecoration);
      }

      components.push(this.options.textAlign);

      if (this.options.stroke !== "none") {
        components.push(this.options.stroke);
      }

      if (!(isEmpty(this.options.letterSpacing) && !isNumberLike(this.options.letterSpacing))) {
        components.push("letter_spacing_" + this.options.letterSpacing);
      }

      if (!(isEmpty(this.options.lineSpacing) && !isNumberLike(this.options.lineSpacing))) {
        components.push("line_spacing_" + this.options.lineSpacing);
      }

      if (!isEmpty(this.options.fontAntialiasing)) {
        components.push("antialias_" + this.options.fontAntialiasing);
      }

      if (!isEmpty(this.options.fontHinting)) {
        components.push("hinting_" + this.options.fontHinting);
      }

      if (!isEmpty(compact_root_compact_default()(components))) {
        if (isEmpty(this.options.fontFamily)) {
          throw "Must supply fontFamily. ".concat(components);
        }

        if (isEmpty(this.options.fontSize) && !isNumberLike(this.options.fontSize)) {
          throw "Must supply fontSize.";
        }
      }

      components.unshift(this.options.fontFamily, this.options.fontSize);
      components = compact_root_compact_default()(components).join("_");
      return components;
    }
  }]);

  return TextLayer;
}(layer_layer);

;
/* harmony default export */ var textlayer = (textlayer_TextLayer);
// CONCATENATED MODULE: ./src/layer/subtitleslayer.js
function subtitleslayer_typeof(obj) { "@babel/helpers - typeof"; return subtitleslayer_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, subtitleslayer_typeof(obj); }

function subtitleslayer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function subtitleslayer_createClass(Constructor, protoProps, staticProps) { if (protoProps) subtitleslayer_defineProperties(Constructor.prototype, protoProps); if (staticProps) subtitleslayer_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function subtitleslayer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function subtitleslayer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) subtitleslayer_setPrototypeOf(subClass, superClass); }

function subtitleslayer_setPrototypeOf(o, p) { subtitleslayer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return subtitleslayer_setPrototypeOf(o, p); }

function subtitleslayer_createSuper(Derived) { var hasNativeReflectConstruct = subtitleslayer_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = subtitleslayer_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = subtitleslayer_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return subtitleslayer_possibleConstructorReturn(this, result); }; }

function subtitleslayer_possibleConstructorReturn(self, call) { if (call && (subtitleslayer_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return subtitleslayer_assertThisInitialized(self); }

function subtitleslayer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function subtitleslayer_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function subtitleslayer_getPrototypeOf(o) { subtitleslayer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return subtitleslayer_getPrototypeOf(o); }



var SubtitlesLayer = /*#__PURE__*/function (_TextLayer) {
  subtitleslayer_inherits(SubtitlesLayer, _TextLayer);

  var _super = subtitleslayer_createSuper(SubtitlesLayer);

  /**
   * Represent a subtitles layer
   * @constructor SubtitlesLayer
   * @param {Object} options - layer parameters
   */
  function SubtitlesLayer(options) {
    var _this;

    subtitleslayer_classCallCheck(this, SubtitlesLayer);

    _this = _super.call(this, options);
    _this.options.resourceType = "subtitles";
    return _this;
  }

  return subtitleslayer_createClass(SubtitlesLayer);
}(textlayer);

/* harmony default export */ var subtitleslayer = (SubtitlesLayer);
// CONCATENATED MODULE: ./src/layer/fetchlayer.js
function fetchlayer_typeof(obj) { "@babel/helpers - typeof"; return fetchlayer_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, fetchlayer_typeof(obj); }

function fetchlayer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function fetchlayer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function fetchlayer_createClass(Constructor, protoProps, staticProps) { if (protoProps) fetchlayer_defineProperties(Constructor.prototype, protoProps); if (staticProps) fetchlayer_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function fetchlayer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) fetchlayer_setPrototypeOf(subClass, superClass); }

function fetchlayer_setPrototypeOf(o, p) { fetchlayer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return fetchlayer_setPrototypeOf(o, p); }

function fetchlayer_createSuper(Derived) { var hasNativeReflectConstruct = fetchlayer_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = fetchlayer_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = fetchlayer_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return fetchlayer_possibleConstructorReturn(this, result); }; }

function fetchlayer_possibleConstructorReturn(self, call) { if (call && (fetchlayer_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return fetchlayer_assertThisInitialized(self); }

function fetchlayer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function fetchlayer_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function fetchlayer_getPrototypeOf(o) { fetchlayer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return fetchlayer_getPrototypeOf(o); }




var fetchlayer_FetchLayer = /*#__PURE__*/function (_Layer) {
  fetchlayer_inherits(FetchLayer, _Layer);

  var _super = fetchlayer_createSuper(FetchLayer);

  /**
   * @class FetchLayer
   * @classdesc Creates an image layer using a remote URL.
   * @param {Object|string} options - layer parameters or a url
   * @param {string} options.url the url of the image to fetch
   */
  function FetchLayer(options) {
    var _this;

    fetchlayer_classCallCheck(this, FetchLayer);

    _this = _super.call(this, options);

    if (isString_root_isString_default()(options)) {
      _this.options.url = options;
    } else if (options != null ? options.url : void 0) {
      _this.options.url = options.url;
    }

    return _this;
  }

  fetchlayer_createClass(FetchLayer, [{
    key: "url",
    value: function url(_url) {
      this.options.url = _url;
      return this;
    }
    /**
     * generate the string representation of the layer
     * @function FetchLayer#toString
     * @return {String}
     */

  }, {
    key: "toString",
    value: function toString() {
      return "fetch:".concat(base64EncodeURL(this.options.url));
    }
  }]);

  return FetchLayer;
}(layer_layer);

/* harmony default export */ var fetchlayer = (fetchlayer_FetchLayer);
// CONCATENATED MODULE: ./src/parameters.js
function parameters_typeof(obj) { "@babel/helpers - typeof"; return parameters_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, parameters_typeof(obj); }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = parameters_getPrototypeOf(object); if (object === null) break; } return object; }

function parameters_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) parameters_setPrototypeOf(subClass, superClass); }

function parameters_setPrototypeOf(o, p) { parameters_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return parameters_setPrototypeOf(o, p); }

function parameters_createSuper(Derived) { var hasNativeReflectConstruct = parameters_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = parameters_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = parameters_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return parameters_possibleConstructorReturn(this, result); }; }

function parameters_possibleConstructorReturn(self, call) { if (call && (parameters_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return parameters_assertThisInitialized(self); }

function parameters_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function parameters_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function parameters_getPrototypeOf(o) { parameters_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return parameters_getPrototypeOf(o); }

function parameters_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function parameters_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function parameters_createClass(Constructor, protoProps, staticProps) { if (protoProps) parameters_defineProperties(Constructor.prototype, protoProps); if (staticProps) parameters_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }








/**
 * Transformation parameters
 * Depends on 'util', 'transformation'
 */

var parameters_Param = /*#__PURE__*/function () {
  /**
   * Represents a single parameter.
   * @class Param
   * @param {string} name - The name of the parameter in snake_case
   * @param {string} shortName - The name of the serialized form of the parameter.
   *                         If a value is not provided, the parameter will not be serialized.
   * @param {function} [process=Util.identity ] - Manipulate origValue when value is called
   * @ignore
   */
  function Param(name, shortName) {
    var process = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : identity_root_identity_default.a;

    parameters_classCallCheck(this, Param);

    /**
     * The name of the parameter in snake_case
     * @member {string} Param#name
     */
    this.name = name;
    /**
     * The name of the serialized form of the parameter
     * @member {string} Param#shortName
     */

    this.shortName = shortName;
    /**
     * Manipulate origValue when value is called
     * @member {function} Param#process
     */

    this.process = process;
  }
  /**
   * Set a (unprocessed) value for this parameter
   * @function Param#set
   * @param {*} origValue - the value of the parameter
   * @return {Param} self for chaining
   */


  parameters_createClass(Param, [{
    key: "set",
    value: function set(origValue) {
      this.origValue = origValue;
      return this;
    }
    /**
     * Generate the serialized form of the parameter
     * @function Param#serialize
     * @return {string} the serialized form of the parameter
     */

  }, {
    key: "serialize",
    value: function serialize() {
      var val, valid;
      val = this.value();
      valid = isArray_root_isArray_default()(val) || isPlainObject_root_isPlainObject_default()(val) || isString_root_isString_default()(val) ? !isEmpty(val) : val != null;

      if (this.shortName != null && valid) {
        return "".concat(this.shortName, "_").concat(val);
      } else {
        return '';
      }
    }
    /**
     * Return the processed value of the parameter
     * @function Param#value
     */

  }, {
    key: "value",
    value: function value() {
      return this.process(this.origValue);
    }
  }], [{
    key: "norm_color",
    value: function norm_color(value) {
      return value != null ? value.replace(/^#/, 'rgb:') : void 0;
    }
  }, {
    key: "build_array",
    value: function build_array(arg) {
      if (arg == null) {
        return [];
      } else if (isArray_root_isArray_default()(arg)) {
        return arg;
      } else {
        return [arg];
      }
    }
    /**
    * Covert value to video codec string.
    *
    * If the parameter is an object,
    * @param {(string|Object)} param - the video codec as either a String or a Hash
    * @return {string} the video codec string in the format codec:profile:level
    * @example
    * vc_[ :profile : [level]]
    * or
      { codec: 'h264', profile: 'basic', level: '3.1' }
    * @ignore
     */

  }, {
    key: "process_video_params",
    value: function process_video_params(param) {
      var video;

      switch (param.constructor) {
        case Object:
          video = "";

          if ('codec' in param) {
            video = param.codec;

            if ('profile' in param) {
              video += ":" + param.profile;

              if ('level' in param) {
                video += ":" + param.level;
              }
            }
          }

          return video;

        case String:
          return param;

        default:
          return null;
      }
    }
  }]);

  return Param;
}();

var parameters_ArrayParam = /*#__PURE__*/function (_Param) {
  parameters_inherits(ArrayParam, _Param);

  var _super = parameters_createSuper(ArrayParam);

  /**
   * A parameter that represents an array.
   * @param {string} name - The name of the parameter in snake_case.
   * @param {string} shortName - The name of the serialized form of the parameter
   *                         If a value is not provided, the parameter will not be serialized.
   * @param {string} [sep='.'] - The separator to use when joining the array elements together
   * @param {function} [process=Util.identity ] - Manipulate origValue when value is called
   * @class ArrayParam
   * @extends Param
   * @ignore
   */
  function ArrayParam(name, shortName) {
    var _this;

    var sep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';
    var process = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;

    parameters_classCallCheck(this, ArrayParam);

    _this = _super.call(this, name, shortName, process);
    _this.sep = sep;
    return _this;
  }

  parameters_createClass(ArrayParam, [{
    key: "serialize",
    value: function serialize() {
      if (this.shortName != null) {
        var arrayValue = this.value();

        if (isEmpty(arrayValue)) {
          return '';
        } else if (isString_root_isString_default()(arrayValue)) {
          return "".concat(this.shortName, "_").concat(arrayValue);
        } else {
          var flat = arrayValue.map(function (t) {
            return isFunction_root_isFunction_default()(t.serialize) ? t.serialize() : t;
          }).join(this.sep);
          return "".concat(this.shortName, "_").concat(flat);
        }
      } else {
        return '';
      }
    }
  }, {
    key: "value",
    value: function value() {
      var _this2 = this;

      if (isArray_root_isArray_default()(this.origValue)) {
        return this.origValue.map(function (v) {
          return _this2.process(v);
        });
      } else {
        return this.process(this.origValue);
      }
    }
  }, {
    key: "set",
    value: function set(origValue) {
      if (origValue == null || isArray_root_isArray_default()(origValue)) {
        return _get(parameters_getPrototypeOf(ArrayParam.prototype), "set", this).call(this, origValue);
      } else {
        return _get(parameters_getPrototypeOf(ArrayParam.prototype), "set", this).call(this, [origValue]);
      }
    }
  }]);

  return ArrayParam;
}(parameters_Param);

var parameters_TransformationParam = /*#__PURE__*/function (_Param2) {
  parameters_inherits(TransformationParam, _Param2);

  var _super2 = parameters_createSuper(TransformationParam);

  /**
   * A parameter that represents a transformation
   * @param {string} name - The name of the parameter in snake_case
   * @param {string} [shortName='t'] - The name of the serialized form of the parameter
   * @param {string} [sep='.'] - The separator to use when joining the array elements together
   * @param {function} [process=Util.identity ] - Manipulate origValue when value is called
   * @class TransformationParam
   * @extends Param
   * @ignore
   */
  function TransformationParam(name) {
    var _this3;

    var shortName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "t";
    var sep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';
    var process = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;

    parameters_classCallCheck(this, TransformationParam);

    _this3 = _super2.call(this, name, shortName, process);
    _this3.sep = sep;
    return _this3;
  }
  /**
   * Generate string representations of the transformation.
   * @returns {*} Returns either the transformation as a string, or an array of string representations.
   */


  parameters_createClass(TransformationParam, [{
    key: "serialize",
    value: function serialize() {
      var _this4 = this;

      var result = '';
      var val = this.value();

      if (isEmpty(val)) {
        return result;
      } // val is an array of strings so join them


      if (baseutil_allStrings(val)) {
        var joined = val.join(this.sep); // creates t1.t2.t3 in case multiple named transformations were configured

        if (!isEmpty(joined)) {
          // in case options.transformation was not set with an empty string (val != ['']);
          result = "".concat(this.shortName, "_").concat(joined);
        }
      } else {
        // Convert val to an array of strings
        result = val.map(function (t) {
          if (isString_root_isString_default()(t) && !isEmpty(t)) {
            return "".concat(_this4.shortName, "_").concat(t);
          }

          if (isFunction_root_isFunction_default()(t.serialize)) {
            return t.serialize();
          }

          if (isPlainObject_root_isPlainObject_default()(t) && !isEmpty(t)) {
            return new src_transformation(t).serialize();
          }

          return undefined;
        }).filter(function (t) {
          return t;
        });
      }

      return result;
    }
  }, {
    key: "set",
    value: function set(origValue1) {
      this.origValue = origValue1;

      if (isArray_root_isArray_default()(this.origValue)) {
        return _get(parameters_getPrototypeOf(TransformationParam.prototype), "set", this).call(this, this.origValue);
      } else {
        return _get(parameters_getPrototypeOf(TransformationParam.prototype), "set", this).call(this, [this.origValue]);
      }
    }
  }]);

  return TransformationParam;
}(parameters_Param);

var number_pattern = "([0-9]*)\\.([0-9]+)|([0-9]+)";
var offset_any_pattern = "(" + number_pattern + ")([%pP])?";

var RangeParam = /*#__PURE__*/function (_Param3) {
  parameters_inherits(RangeParam, _Param3);

  var _super3 = parameters_createSuper(RangeParam);

  /**
   * A parameter that represents a range
   * @param {string} name - The name of the parameter in snake_case
   * @param {string} shortName - The name of the serialized form of the parameter
   *                         If a value is not provided, the parameter will not be serialized.
   * @param {function} [process=norm_range_value ] - Manipulate origValue when value is called
   * @class RangeParam
   * @extends Param
   * @ignore
   */
  function RangeParam(name, shortName) {
    var process = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : RangeParam.norm_range_value;

    parameters_classCallCheck(this, RangeParam);

    return _super3.call(this, name, shortName, process);
  }

  parameters_createClass(RangeParam, null, [{
    key: "norm_range_value",
    value: function norm_range_value(value) {
      var offset = String(value).match(new RegExp('^' + offset_any_pattern + '$'));

      if (offset) {
        var modifier = offset[5] != null ? 'p' : '';
        value = (offset[1] || offset[4]) + modifier;
      }

      return value;
    }
  }]);

  return RangeParam;
}(parameters_Param);

var parameters_RawParam = /*#__PURE__*/function (_Param4) {
  parameters_inherits(RawParam, _Param4);

  var _super4 = parameters_createSuper(RawParam);

  function RawParam(name, shortName) {
    var process = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : identity_root_identity_default.a;

    parameters_classCallCheck(this, RawParam);

    return _super4.call(this, name, shortName, process);
  }

  parameters_createClass(RawParam, [{
    key: "serialize",
    value: function serialize() {
      return this.value();
    }
  }]);

  return RawParam;
}(parameters_Param);

var parameters_LayerParam = /*#__PURE__*/function (_Param5) {
  parameters_inherits(LayerParam, _Param5);

  var _super5 = parameters_createSuper(LayerParam);

  function LayerParam() {
    parameters_classCallCheck(this, LayerParam);

    return _super5.apply(this, arguments);
  }

  parameters_createClass(LayerParam, [{
    key: "value",
    value: // Parse layer options
    // @return [string] layer transformation string
    // @private
    function value() {
      if (this.origValue == null) {
        return '';
      }

      var result;

      if (this.origValue instanceof layer_layer) {
        result = this.origValue;
      } else if (isPlainObject_root_isPlainObject_default()(this.origValue)) {
        var layerOptions = withCamelCaseKeys(this.origValue);

        if (layerOptions.resourceType === "text" || layerOptions.text != null) {
          result = new textlayer(layerOptions);
        } else if (layerOptions.resourceType === "subtitles") {
          result = new subtitleslayer(layerOptions);
        } else if (layerOptions.resourceType === "fetch" || layerOptions.url != null) {
          result = new fetchlayer(layerOptions);
        } else {
          result = new layer_layer(layerOptions);
        }
      } else if (isString_root_isString_default()(this.origValue)) {
        if (/^fetch:.+/.test(this.origValue)) {
          result = new fetchlayer(this.origValue.substr(6));
        } else {
          result = this.origValue;
        }
      } else {
        result = '';
      }

      return result.toString();
    }
  }], [{
    key: "textStyle",
    value: function textStyle(layer) {
      return new textlayer(layer).textStyleIdentifier();
    }
  }]);

  return LayerParam;
}(parameters_Param);

var parameters_ExpressionParam = /*#__PURE__*/function (_Param6) {
  parameters_inherits(ExpressionParam, _Param6);

  var _super6 = parameters_createSuper(ExpressionParam);

  function ExpressionParam() {
    parameters_classCallCheck(this, ExpressionParam);

    return _super6.apply(this, arguments);
  }

  parameters_createClass(ExpressionParam, [{
    key: "serialize",
    value: function serialize() {
      return expression.normalize(_get(parameters_getPrototypeOf(ExpressionParam.prototype), "serialize", this).call(this));
    }
  }]);

  return ExpressionParam;
}(parameters_Param);


// CONCATENATED MODULE: ./src/transformation.js
function transformation_typeof(obj) { "@babel/helpers - typeof"; return transformation_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, transformation_typeof(obj); }

function transformation_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) transformation_setPrototypeOf(subClass, superClass); }

function transformation_setPrototypeOf(o, p) { transformation_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return transformation_setPrototypeOf(o, p); }

function transformation_createSuper(Derived) { var hasNativeReflectConstruct = transformation_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = transformation_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = transformation_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return transformation_possibleConstructorReturn(this, result); }; }

function transformation_possibleConstructorReturn(self, call) { if (call && (transformation_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return transformation_assertThisInitialized(self); }

function transformation_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function transformation_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function transformation_getPrototypeOf(o) { transformation_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return transformation_getPrototypeOf(o); }

function transformation_slicedToArray(arr, i) { return transformation_arrayWithHoles(arr) || transformation_iterableToArrayLimit(arr, i) || transformation_unsupportedIterableToArray(arr, i) || transformation_nonIterableRest(); }

function transformation_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function transformation_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return transformation_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return transformation_arrayLikeToArray(o, minLen); }

function transformation_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function transformation_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function transformation_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function transformation_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function transformation_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function transformation_createClass(Constructor, protoProps, staticProps) { if (protoProps) transformation_defineProperties(Constructor.prototype, protoProps); if (staticProps) transformation_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }







/**
 * Assign key, value to target, when value is not null.<br>
 *   This function mutates the target!
 * @param {object} target the object to assign the values to
 * @param {object} sources one or more objects to get values from
 * @returns {object} the target after the assignment
 */

function assignNotNull(target) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  sources.forEach(function (source) {
    Object.keys(source).forEach(function (key) {
      if (source[key] != null) {
        target[key] = source[key];
      }
    });
  });
  return target;
}
/**
 * TransformationBase
 * Depends on 'configuration', 'parameters','util'
 * @internal
 */


var transformation_TransformationBase = /*#__PURE__*/function () {
  /**
   * The base class for transformations.
   * Members of this class are documented as belonging to the {@link Transformation} class for convenience.
   * @class TransformationBase
   */
  function TransformationBase(options) {
    transformation_classCallCheck(this, TransformationBase);

    /** @private */

    /** @private */
    var parent, trans;
    parent = void 0;
    trans = {};
    /**
     * Return an options object that can be used to create an identical Transformation
     * @function Transformation#toOptions
     * @return {Object} Returns a plain object representing this transformation
     */

    this.toOptions = function (withChain) {
      var opt = {};

      if (withChain == null) {
        withChain = true;
      }

      Object.keys(trans).forEach(function (key) {
        return opt[key] = trans[key].origValue;
      });
      assignNotNull(opt, this.otherOptions);

      if (withChain && !isEmpty(this.chained)) {
        var list = this.chained.map(function (tr) {
          return tr.toOptions();
        });
        list.push(opt);
        opt = {};
        assignNotNull(opt, this.otherOptions);
        opt.transformation = list;
      }

      return opt;
    };
    /**
     * Set a parent for this object for chaining purposes.
     *
     * @function Transformation#setParent
     * @param {Object} object - the parent to be assigned to
     * @returns {Transformation} Returns this instance for chaining purposes.
     */


    this.setParent = function (object) {
      parent = object;

      if (object != null) {
        this.fromOptions(typeof object.toOptions === "function" ? object.toOptions() : void 0);
      }

      return this;
    };
    /**
     * Returns the parent of this object in the chain
     * @function Transformation#getParent
     * @protected
     * @return {Object} Returns the parent of this object if there is any
     */


    this.getParent = function () {
      return parent;
    }; // Helper methods to create parameter methods
    // These methods are defined here because they access `trans` which is
    // a private member of `TransformationBase`

    /** @protected */


    this.param = function (value, name, abbr, defaultValue, process) {
      if (process == null) {
        if (isFunction_root_isFunction_default()(defaultValue)) {
          process = defaultValue;
        } else {
          process = identity_root_identity_default.a;
        }
      }

      trans[name] = new parameters_Param(name, abbr, process).set(value);
      return this;
    };
    /** @protected */


    this.rawParam = function (value, name, abbr, defaultValue, process) {
      process = lastArgCallback(arguments);
      trans[name] = new parameters_RawParam(name, abbr, process).set(value);
      return this;
    };
    /** @protected */


    this.rangeParam = function (value, name, abbr, defaultValue, process) {
      process = lastArgCallback(arguments);
      trans[name] = new RangeParam(name, abbr, process).set(value);
      return this;
    };
    /** @protected */


    this.arrayParam = function (value, name, abbr) {
      var sep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ":";
      var defaultValue = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
      var process = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;
      process = lastArgCallback(arguments);
      trans[name] = new parameters_ArrayParam(name, abbr, sep, process).set(value);
      return this;
    };
    /** @protected */


    this.transformationParam = function (value, name, abbr) {
      var sep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ".";
      var defaultValue = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
      var process = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;
      process = lastArgCallback(arguments);
      trans[name] = new parameters_TransformationParam(name, abbr, sep, process).set(value);
      return this;
    };

    this.layerParam = function (value, name, abbr) {
      trans[name] = new parameters_LayerParam(name, abbr).set(value);
      return this;
    }; // End Helper methods

    /**
     * Get the value associated with the given name.
     * @function Transformation#getValue
     * @param {string} name - the name of the parameter
     * @return {*} the processed value associated with the given name
     * @description Use {@link get}.origValue for the value originally provided for the parameter
     */


    this.getValue = function (name) {
      var value = trans[name] && trans[name].value();
      return value != null ? value : this.otherOptions[name];
    };
    /**
     * Get the parameter object for the given parameter name
     * @function Transformation#get
     * @param {string} name the name of the transformation parameter
     * @returns {Param} the param object for the given name, or undefined
     */


    this.get = function (name) {
      return trans[name];
    };
    /**
     * Remove a transformation option from the transformation.
     * @function Transformation#remove
     * @param {string} name - the name of the option to remove
     * @return {*} Returns the option that was removed or null if no option by that name was found. The type of the
     *              returned value depends on the value.
     */


    this.remove = function (name) {
      var temp;

      switch (false) {
        case trans[name] == null:
          temp = trans[name];
          delete trans[name];
          return temp.origValue;

        case this.otherOptions[name] == null:
          temp = this.otherOptions[name];
          delete this.otherOptions[name];
          return temp;

        default:
          return null;
      }
    };
    /**
     * Return an array of all the keys (option names) in the transformation.
     * @return {Array<string>} the keys in snakeCase format
     */


    this.keys = function () {
      var key;
      return function () {
        var results;
        results = [];

        for (key in trans) {
          if (key != null) {
            results.push(key.match(VAR_NAME_RE) ? key : snakeCase(key));
          }
        }

        return results;
      }().sort();
    };
    /**
     * Returns a plain object representation of the transformation. Values are processed.
     * @function Transformation#toPlainObject
     * @return {Object} the transformation options as plain object
     */


    this.toPlainObject = function () {
      var hash, key, list;
      hash = {};

      for (key in trans) {
        hash[key] = trans[key].value();

        if (isPlainObject_root_isPlainObject_default()(hash[key])) {
          hash[key] = cloneDeep_root_cloneDeep_default()(hash[key]);
        }
      }

      if (!isEmpty(this.chained)) {
        list = this.chained.map(function (tr) {
          return tr.toPlainObject();
        });
        list.push(hash);
        hash = {
          transformation: list
        };
      }

      return hash;
    };
    /**
     * Complete the current transformation and chain to a new one.
     * In the URL, transformations are chained together by slashes.
     * @function Transformation#chain
     * @return {Transformation} Returns this transformation for chaining
     * @example
     * var tr = cloudinary.Transformation.new();
     * tr.width(10).crop('fit').chain().angle(15).serialize()
     * // produces "c_fit,w_10/a_15"
     */


    this.chain = function () {
      var names, tr;
      names = Object.getOwnPropertyNames(trans);

      if (names.length !== 0) {
        tr = new this.constructor(this.toOptions(false));
        this.resetTransformations();
        this.chained.push(tr);
      }

      return this;
    };

    this.resetTransformations = function () {
      trans = {};
      return this;
    };

    this.otherOptions = {};
    this.chained = [];
    this.fromOptions(options);
  }
  /**
   * Merge the provided options with own's options
   * @param {Object} [options={}] key-value list of options
   * @returns {Transformation} Returns this instance for chaining
   */


  transformation_createClass(TransformationBase, [{
    key: "fromOptions",
    value: function fromOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (options instanceof TransformationBase) {
        this.fromTransformation(options);
      } else {
        if (isString_root_isString_default()(options) || isArray_root_isArray_default()(options)) {
          options = {
            transformation: options
          };
        }

        options = cloneDeep_root_cloneDeep_default()(options, function (value) {
          if (value instanceof TransformationBase || value instanceof Layer) {
            return new value.clone();
          }
        }); // Handling of "if" statements precedes other options as it creates a chained transformation

        if (options["if"]) {
          this.set("if", options["if"]);
          delete options["if"];
        }

        for (var key in options) {
          var opt = options[key];

          if (opt != null) {
            if (key.match(VAR_NAME_RE)) {
              if (key !== '$attr') {
                this.set('variable', key, opt);
              }
            } else {
              this.set(key, opt);
            }
          }
        }
      }

      return this;
    }
  }, {
    key: "fromTransformation",
    value: function fromTransformation(other) {
      var _this = this;

      if (other instanceof TransformationBase) {
        other.keys().forEach(function (key) {
          return _this.set(key, other.get(key).origValue);
        });
      }

      return this;
    }
    /**
     * Set a parameter.
     * The parameter name `key` is converted to
     * @param {string} key - the name of the parameter
     * @param {*} values - the value of the parameter
     * @returns {Transformation} Returns this instance for chaining
     */

  }, {
    key: "set",
    value: function set(key) {
      var camelKey;
      camelKey = camelCase(key);

      for (var _len2 = arguments.length, values = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        values[_key2 - 1] = arguments[_key2];
      }

      if (includes_root_includes_default()(transformation_Transformation.methods, camelKey)) {
        this[camelKey].apply(this, values);
      } else {
        this.otherOptions[key] = values[0];
      }

      return this;
    }
  }, {
    key: "hasLayer",
    value: function hasLayer() {
      return this.getValue("overlay") || this.getValue("underlay");
    }
    /**
     * Generate a string representation of the transformation.
     * @function Transformation#serialize
     * @return {string} Returns the transformation as a string
     */

  }, {
    key: "serialize",
    value: function serialize() {
      var ifParam, j, len, paramList, ref, ref1, ref2, ref3, ref4, resultArray, t, transformationList, transformationString, transformations, value, variables, vars;
      resultArray = this.chained.map(function (tr) {
        return tr.serialize();
      });
      paramList = this.keys();
      transformations = (ref = this.get("transformation")) != null ? ref.serialize() : void 0;
      ifParam = (ref1 = this.get("if")) != null ? ref1.serialize() : void 0;
      variables = processVar((ref2 = this.get("variables")) != null ? ref2.value() : void 0);
      paramList = difference_root_difference_default()(paramList, ["transformation", "if", "variables"]);
      vars = [];
      transformationList = [];

      for (j = 0, len = paramList.length; j < len; j++) {
        t = paramList[j];

        if (t.match(VAR_NAME_RE)) {
          vars.push(t + "_" + expression.normalize((ref3 = this.get(t)) != null ? ref3.value() : void 0));
        } else {
          transformationList.push((ref4 = this.get(t)) != null ? ref4.serialize() : void 0);
        }
      }

      switch (false) {
        case !isString_root_isString_default()(transformations):
          transformationList.push(transformations);
          break;

        case !isArray_root_isArray_default()(transformations):
          resultArray = resultArray.concat(transformations);
      }

      transformationList = function () {
        var k, len1, results;
        results = [];

        for (k = 0, len1 = transformationList.length; k < len1; k++) {
          value = transformationList[k];

          if (isArray_root_isArray_default()(value) && !isEmpty(value) || !isArray_root_isArray_default()(value) && value) {
            results.push(value);
          }
        }

        return results;
      }();

      transformationList = vars.sort().concat(variables).concat(transformationList.sort());

      if (ifParam === "if_end") {
        transformationList.push(ifParam);
      } else if (!isEmpty(ifParam)) {
        transformationList.unshift(ifParam);
      }

      transformationString = compact_root_compact_default()(transformationList).join(this.param_separator);

      if (!isEmpty(transformationString)) {
        resultArray.push(transformationString);
      }

      return compact_root_compact_default()(resultArray).join(this.trans_separator);
    }
    /**
     * Provide a list of all the valid transformation option names
     * @function Transformation#listNames
     * @private
     * @return {Array<string>} a array of all the valid option names
     */

  }, {
    key: "toHtmlAttributes",
    value:
    /**
     * Returns the attributes for an HTML tag.
     * @function Cloudinary.toHtmlAttributes
     * @return PlainObject
     */
    function toHtmlAttributes() {
      var _this2 = this;

      var attrName, height, options, ref2, ref3, value, width;
      options = {};
      var snakeCaseKey;
      Object.keys(this.otherOptions).forEach(function (key) {
        value = _this2.otherOptions[key];
        snakeCaseKey = snakeCase(key);

        if (!includes_root_includes_default()(transformation_Transformation.PARAM_NAMES, snakeCaseKey) && !includes_root_includes_default()(URL_KEYS, snakeCaseKey)) {
          attrName = /^html_/.test(key) ? key.slice(5) : key;
          options[attrName] = value;
        }
      }); // convert all "html_key" to "key" with the same value

      this.keys().forEach(function (key) {
        if (/^html_/.test(key)) {
          options[camelCase(key.slice(5))] = _this2.getValue(key);
        }
      });

      if (!(this.hasLayer() || this.getValue("angle") || includes_root_includes_default()(["fit", "limit", "lfill"], this.getValue("crop")))) {
        width = (ref2 = this.get("width")) != null ? ref2.origValue : void 0;
        height = (ref3 = this.get("height")) != null ? ref3.origValue : void 0;

        if (parseFloat(width) >= 1.0) {
          if (options.width == null) {
            options.width = width;
          }
        }

        if (parseFloat(height) >= 1.0) {
          if (options.height == null) {
            options.height = height;
          }
        }
      }

      return options;
    }
  }, {
    key: "toHtml",
    value:
    /**
     * Delegate to the parent (up the call chain) to produce HTML
     * @function Transformation#toHtml
     * @return {string} HTML representation of the parent if possible.
     * @example
     * tag = cloudinary.ImageTag.new("sample", {cloud_name: "demo"})
     * // ImageTag {name: "img", publicId: "sample"}
     * tag.toHtml()
     * // <img src="http://res.cloudinary.com/demo/image/upload/sample">
     * tag.transformation().crop("fit").width(300).toHtml()
     * // <img src="http://res.cloudinary.com/demo/image/upload/c_fit,w_300/sample">
     */
    function toHtml() {
      var ref;
      return (ref = this.getParent()) != null ? typeof ref.toHtml === "function" ? ref.toHtml() : void 0 : void 0;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.serialize();
    }
  }, {
    key: "clone",
    value: function clone() {
      return new this.constructor(this.toOptions(true));
    }
  }], [{
    key: "listNames",
    value: function listNames() {
      return transformation_Transformation.methods;
    }
  }, {
    key: "isValidParamName",
    value: function isValidParamName(name) {
      return transformation_Transformation.methods.indexOf(camelCase(name)) >= 0;
    }
  }]);

  return TransformationBase;
}();

var VAR_NAME_RE = /^\$[a-zA-Z0-9]+$/;
transformation_TransformationBase.prototype.trans_separator = '/';
transformation_TransformationBase.prototype.param_separator = ',';

function lastArgCallback(args) {
  var callback;
  callback = args != null ? args[args.length - 1] : void 0;

  if (isFunction_root_isFunction_default()(callback)) {
    return callback;
  } else {
    return void 0;
  }
}

function processVar(varArray) {
  var j, len, name, results, v;

  if (isArray_root_isArray_default()(varArray)) {
    results = [];

    for (j = 0, len = varArray.length; j < len; j++) {
      var _varArray$j = transformation_slicedToArray(varArray[j], 2);

      name = _varArray$j[0];
      v = _varArray$j[1];
      results.push("".concat(name, "_").concat(expression.normalize(v)));
    }

    return results;
  } else {
    return varArray;
  }
}

function processCustomFunction(_ref) {
  var function_type = _ref.function_type,
      source = _ref.source;

  if (function_type === 'remote') {
    return [function_type, btoa(source)].join(":");
  } else if (function_type === 'wasm') {
    return [function_type, source].join(":");
  }
}
/**
 * Transformation Class methods.
 * This is a list of the parameters defined in Transformation.
 * Values are camelCased.
 * @const Transformation.methods
 * @private
 * @ignore
 * @type {Array<string>}
 */

/**
 * Parameters that are filtered out before passing the options to an HTML tag.
 *
 * The list of parameters is a combination of `Transformation::methods` and `Configuration::CONFIG_PARAMS`
 * @const {Array<string>} Transformation.PARAM_NAMES
 * @private
 * @ignore
 * @see toHtmlAttributes
 */


var transformation_Transformation = /*#__PURE__*/function (_TransformationBase) {
  transformation_inherits(Transformation, _TransformationBase);

  var _super = transformation_createSuper(Transformation);

  /**
   * Represents a single transformation.
   * @class Transformation
   * @example
   * t = new cloudinary.Transformation();
   * t.angle(20).crop("scale").width("auto");
   *
   * // or
   *
   * t = new cloudinary.Transformation( {angle: 20, crop: "scale", width: "auto"});
   * @see <a href="https://cloudinary.com/documentation/image_transformation_reference"
   *  target="_blank">Available image transformations</a>
   * @see <a href="https://cloudinary.com/documentation/video_transformation_reference"
   *  target="_blank">Available video transformations</a>
   */
  function Transformation(options) {
    transformation_classCallCheck(this, Transformation);

    return _super.call(this, options);
  }
  /**
   * Convenience constructor
   * @param {Object} options
   * @return {Transformation}
   * @example cl = cloudinary.Transformation.new( {angle: 20, crop: "scale", width: "auto"})
   */


  transformation_createClass(Transformation, [{
    key: "angle",
    value:
    /*
      Transformation Parameters
    */
    function angle(value) {
      return this.arrayParam(value, "angle", "a", ".", expression.normalize);
    }
  }, {
    key: "audioCodec",
    value: function audioCodec(value) {
      return this.param(value, "audio_codec", "ac");
    }
  }, {
    key: "audioFrequency",
    value: function audioFrequency(value) {
      return this.param(value, "audio_frequency", "af");
    }
  }, {
    key: "aspectRatio",
    value: function aspectRatio(value) {
      return this.param(value, "aspect_ratio", "ar", expression.normalize);
    }
  }, {
    key: "background",
    value: function background(value) {
      return this.param(value, "background", "b", parameters_Param.norm_color);
    }
  }, {
    key: "bitRate",
    value: function bitRate(value) {
      return this.param(value, "bit_rate", "br");
    }
  }, {
    key: "border",
    value: function border(value) {
      return this.param(value, "border", "bo", function (border) {
        if (isPlainObject_root_isPlainObject_default()(border)) {
          border = assign_root_assign_default()({}, {
            color: "black",
            width: 2
          }, border);
          return "".concat(border.width, "px_solid_").concat(parameters_Param.norm_color(border.color));
        } else {
          return border;
        }
      });
    }
  }, {
    key: "color",
    value: function color(value) {
      return this.param(value, "color", "co", parameters_Param.norm_color);
    }
  }, {
    key: "colorSpace",
    value: function colorSpace(value) {
      return this.param(value, "color_space", "cs");
    }
  }, {
    key: "crop",
    value: function crop(value) {
      return this.param(value, "crop", "c");
    }
  }, {
    key: "customFunction",
    value: function customFunction(value) {
      return this.param(value, "custom_function", "fn", function () {
        return processCustomFunction(value);
      });
    }
  }, {
    key: "customPreFunction",
    value: function customPreFunction(value) {
      if (this.get('custom_function')) {
        return;
      }

      return this.rawParam(value, "custom_function", "", function () {
        value = processCustomFunction(value);
        return value ? "fn_pre:".concat(value) : value;
      });
    }
  }, {
    key: "defaultImage",
    value: function defaultImage(value) {
      return this.param(value, "default_image", "d");
    }
  }, {
    key: "delay",
    value: function delay(value) {
      return this.param(value, "delay", "dl");
    }
  }, {
    key: "density",
    value: function density(value) {
      return this.param(value, "density", "dn");
    }
  }, {
    key: "duration",
    value: function duration(value) {
      return this.rangeParam(value, "duration", "du");
    }
  }, {
    key: "dpr",
    value: function dpr(value) {
      return this.param(value, "dpr", "dpr", function (dpr) {
        dpr = dpr.toString();

        if (dpr != null ? dpr.match(/^\d+$/) : void 0) {
          return dpr + ".0";
        } else {
          return expression.normalize(dpr);
        }
      });
    }
  }, {
    key: "effect",
    value: function effect(value) {
      return this.arrayParam(value, "effect", "e", ":", expression.normalize);
    }
  }, {
    key: "else",
    value: function _else() {
      return this["if"]('else');
    }
  }, {
    key: "endIf",
    value: function endIf() {
      return this["if"]('end');
    }
  }, {
    key: "endOffset",
    value: function endOffset(value) {
      return this.rangeParam(value, "end_offset", "eo");
    }
  }, {
    key: "fallbackContent",
    value: function fallbackContent(value) {
      return this.param(value, "fallback_content");
    }
  }, {
    key: "fetchFormat",
    value: function fetchFormat(value) {
      return this.param(value, "fetch_format", "f");
    }
  }, {
    key: "format",
    value: function format(value) {
      return this.param(value, "format");
    }
  }, {
    key: "flags",
    value: function flags(value) {
      return this.arrayParam(value, "flags", "fl", ".");
    }
  }, {
    key: "gravity",
    value: function gravity(value) {
      return this.param(value, "gravity", "g");
    }
  }, {
    key: "fps",
    value: function fps(value) {
      return this.param(value, "fps", "fps", function (fps) {
        if (isString_root_isString_default()(fps)) {
          return fps;
        } else if (isArray_root_isArray_default()(fps)) {
          return fps.join("-");
        } else {
          return fps;
        }
      });
    }
  }, {
    key: "height",
    value: function height(value) {
      var _this3 = this;

      return this.param(value, "height", "h", function () {
        if (_this3.getValue("crop") || _this3.getValue("overlay") || _this3.getValue("underlay")) {
          return expression.normalize(value);
        } else {
          return null;
        }
      });
    }
  }, {
    key: "htmlHeight",
    value: function htmlHeight(value) {
      return this.param(value, "html_height");
    }
  }, {
    key: "htmlWidth",
    value: function htmlWidth(value) {
      return this.param(value, "html_width");
    }
  }, {
    key: "if",
    value: function _if() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var i, ifVal, j, ref, trIf, trRest;

      switch (value) {
        case "else":
          this.chain();
          return this.param(value, "if", "if");

        case "end":
          this.chain();

          for (i = j = ref = this.chained.length - 1; j >= 0; i = j += -1) {
            ifVal = this.chained[i].getValue("if");

            if (ifVal === "end") {
              break;
            } else if (ifVal != null) {
              trIf = Transformation["new"]()["if"](ifVal);
              this.chained[i].remove("if");
              trRest = this.chained[i];
              this.chained[i] = Transformation["new"]().transformation([trIf, trRest]);

              if (ifVal !== "else") {
                break;
              }
            }
          }

          return this.param(value, "if", "if");

        case "":
          return condition["new"]().setParent(this);

        default:
          return this.param(value, "if", "if", function (value) {
            return condition["new"](value).toString();
          });
      }
    }
  }, {
    key: "keyframeInterval",
    value: function keyframeInterval(value) {
      return this.param(value, "keyframe_interval", "ki");
    }
  }, {
    key: "ocr",
    value: function ocr(value) {
      return this.param(value, "ocr", "ocr");
    }
  }, {
    key: "offset",
    value: function offset(value) {
      var end_o, start_o;

      var _ref2 = isFunction_root_isFunction_default()(value != null ? value.split : void 0) ? value.split('..') : isArray_root_isArray_default()(value) ? value : [null, null];

      var _ref3 = transformation_slicedToArray(_ref2, 2);

      start_o = _ref3[0];
      end_o = _ref3[1];

      if (start_o != null) {
        this.startOffset(start_o);
      }

      if (end_o != null) {
        return this.endOffset(end_o);
      }
    }
  }, {
    key: "opacity",
    value: function opacity(value) {
      return this.param(value, "opacity", "o", expression.normalize);
    }
  }, {
    key: "overlay",
    value: function overlay(value) {
      return this.layerParam(value, "overlay", "l");
    }
  }, {
    key: "page",
    value: function page(value) {
      return this.param(value, "page", "pg");
    }
  }, {
    key: "poster",
    value: function poster(value) {
      return this.param(value, "poster");
    }
  }, {
    key: "prefix",
    value: function prefix(value) {
      return this.param(value, "prefix", "p");
    }
  }, {
    key: "quality",
    value: function quality(value) {
      return this.param(value, "quality", "q", expression.normalize);
    }
  }, {
    key: "radius",
    value: function radius(value) {
      return this.arrayParam(value, "radius", "r", ":", expression.normalize);
    }
  }, {
    key: "rawTransformation",
    value: function rawTransformation(value) {
      return this.rawParam(value, "raw_transformation");
    }
  }, {
    key: "size",
    value: function size(value) {
      var height, width;

      if (isFunction_root_isFunction_default()(value != null ? value.split : void 0)) {
        var _value$split = value.split('x');

        var _value$split2 = transformation_slicedToArray(_value$split, 2);

        width = _value$split2[0];
        height = _value$split2[1];
        this.width(width);
        return this.height(height);
      }
    }
  }, {
    key: "sourceTypes",
    value: function sourceTypes(value) {
      return this.param(value, "source_types");
    }
  }, {
    key: "sourceTransformation",
    value: function sourceTransformation(value) {
      return this.param(value, "source_transformation");
    }
  }, {
    key: "startOffset",
    value: function startOffset(value) {
      return this.rangeParam(value, "start_offset", "so");
    }
  }, {
    key: "streamingProfile",
    value: function streamingProfile(value) {
      return this.param(value, "streaming_profile", "sp");
    }
  }, {
    key: "transformation",
    value: function transformation(value) {
      return this.transformationParam(value, "transformation", "t");
    }
  }, {
    key: "underlay",
    value: function underlay(value) {
      return this.layerParam(value, "underlay", "u");
    }
  }, {
    key: "variable",
    value: function variable(name, value) {
      return this.param(value, name, name);
    }
  }, {
    key: "variables",
    value: function variables(values) {
      return this.arrayParam(values, "variables");
    }
  }, {
    key: "videoCodec",
    value: function videoCodec(value) {
      return this.param(value, "video_codec", "vc", parameters_Param.process_video_params);
    }
  }, {
    key: "videoSampling",
    value: function videoSampling(value) {
      return this.param(value, "video_sampling", "vs");
    }
  }, {
    key: "width",
    value: function width(value) {
      var _this4 = this;

      return this.param(value, "width", "w", function () {
        if (_this4.getValue("crop") || _this4.getValue("overlay") || _this4.getValue("underlay")) {
          return expression.normalize(value);
        } else {
          return null;
        }
      });
    }
  }, {
    key: "x",
    value: function x(value) {
      return this.param(value, "x", "x", expression.normalize);
    }
  }, {
    key: "y",
    value: function y(value) {
      return this.param(value, "y", "y", expression.normalize);
    }
  }, {
    key: "zoom",
    value: function zoom(value) {
      return this.param(value, "zoom", "z", expression.normalize);
    }
  }], [{
    key: "new",
    value: function _new(options) {
      return new Transformation(options);
    }
  }]);

  return Transformation;
}(transformation_TransformationBase);
/**
 * Transformation Class methods.
 * This is a list of the parameters defined in Transformation.
 * Values are camelCased.
 */


transformation_Transformation.methods = ["angle", "audioCodec", "audioFrequency", "aspectRatio", "background", "bitRate", "border", "color", "colorSpace", "crop", "customFunction", "customPreFunction", "defaultImage", "delay", "density", "duration", "dpr", "effect", "else", "endIf", "endOffset", "fallbackContent", "fetchFormat", "format", "flags", "gravity", "fps", "height", "htmlHeight", "htmlWidth", "if", "keyframeInterval", "ocr", "offset", "opacity", "overlay", "page", "poster", "prefix", "quality", "radius", "rawTransformation", "size", "sourceTypes", "sourceTransformation", "startOffset", "streamingProfile", "transformation", "underlay", "variable", "variables", "videoCodec", "videoSampling", "width", "x", "y", "zoom"];
/**
 * Parameters that are filtered out before passing the options to an HTML tag.
 *
 * The list of parameters is a combination of `Transformation::methods` and `Configuration::CONFIG_PARAMS`
 */

transformation_Transformation.PARAM_NAMES = transformation_Transformation.methods.map(snakeCase).concat(src_configuration.CONFIG_PARAMS);
/* harmony default export */ var src_transformation = (transformation_Transformation);
// CONCATENATED MODULE: ./src/tags/htmltag.js
function htmltag_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function htmltag_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function htmltag_createClass(Constructor, protoProps, staticProps) { if (protoProps) htmltag_defineProperties(Constructor.prototype, protoProps); if (staticProps) htmltag_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * Generic HTML tag
 * Depends on 'transformation', 'util'
 */


/**
 * Represents an HTML (DOM) tag
 * @constructor HtmlTag
 * @param {string} name - the name of the tag
 * @param {string} [publicId]
 * @param {Object} options
 * @example tag = new HtmlTag( 'div', { 'width': 10})
 */

var htmltag_HtmlTag = /*#__PURE__*/function () {
  function HtmlTag(name, publicId, options) {
    htmltag_classCallCheck(this, HtmlTag);

    var transformation;
    this.name = name;
    this.publicId = publicId;

    if (options == null) {
      if (isPlainObject_root_isPlainObject_default()(publicId)) {
        options = publicId;
        this.publicId = void 0;
      } else {
        options = {};
      }
    }

    transformation = new src_transformation(options);
    transformation.setParent(this);

    this.transformation = function () {
      return transformation;
    };
  }
  /**
   * Convenience constructor
   * Creates a new instance of an HTML (DOM) tag
   * @function HtmlTag.new
   * @param {string} name - the name of the tag
   * @param {string} [publicId]
   * @param {Object} options
   * @return {HtmlTag}
   * @example tag = HtmlTag.new( 'div', { 'width': 10})
   */


  htmltag_createClass(HtmlTag, [{
    key: "htmlAttrs",
    value:
    /**
     * combine key and value from the `attr` to generate an HTML tag attributes string.
     * `Transformation::toHtmlTagOptions` is used to filter out transformation and configuration keys.
     * @protected
     * @param {Object} attrs
     * @return {string} the attributes in the format `'key1="value1" key2="value2"'`
     * @ignore
     */
    function htmlAttrs(attrs) {
      var key, pairs, value;
      return pairs = function () {
        var results;
        results = [];

        for (key in attrs) {
          value = escapeQuotes(attrs[key]);

          if (value) {
            results.push(htmltag_toAttribute(key, value));
          }
        }

        return results;
      }().sort().join(' ');
    }
    /**
     * Get all options related to this tag.
     * @function HtmlTag#getOptions
     * @returns {Object} the options
     *
     */

  }, {
    key: "getOptions",
    value: function getOptions() {
      return this.transformation().toOptions();
    }
    /**
     * Get the value of option `name`
     * @function HtmlTag#getOption
     * @param {string} name - the name of the option
     * @returns {*} Returns the value of the option
     *
     */

  }, {
    key: "getOption",
    value: function getOption(name) {
      return this.transformation().getValue(name);
    }
    /**
     * Get the attributes of the tag.
     * @function HtmlTag#attributes
     * @returns {Object} attributes
     */

  }, {
    key: "attributes",
    value: function attributes() {
      // The attributes are be computed from the options every time this method is invoked.
      var htmlAttributes = this.transformation().toHtmlAttributes();
      Object.keys(htmlAttributes).forEach(function (key) {
        if (isPlainObject_root_isPlainObject_default()(htmlAttributes[key])) {
          delete htmlAttributes[key];
        }
      });

      if (htmlAttributes.attributes) {
        // Currently HTML attributes are defined both at the top level and under 'attributes'
        merge_root_merge_default()(htmlAttributes, htmlAttributes.attributes);
        delete htmlAttributes.attributes;
      }

      return htmlAttributes;
    }
    /**
     * Set a tag attribute named `name` to `value`
     * @function HtmlTag#setAttr
     * @param {string} name - the name of the attribute
     * @param {string} value - the value of the attribute
     */

  }, {
    key: "setAttr",
    value: function setAttr(name, value) {
      this.transformation().set("html_".concat(name), value);
      return this;
    }
    /**
     * Get the value of the tag attribute `name`
     * @function HtmlTag#getAttr
     * @param {string} name - the name of the attribute
     * @returns {*}
     */

  }, {
    key: "getAttr",
    value: function getAttr(name) {
      return this.attributes()["html_".concat(name)] || this.attributes()[name];
    }
    /**
     * Remove the tag attributed named `name`
     * @function HtmlTag#removeAttr
     * @param {string} name - the name of the attribute
     * @returns {*}
     */

  }, {
    key: "removeAttr",
    value: function removeAttr(name) {
      var ref;
      return (ref = this.transformation().remove("html_".concat(name))) != null ? ref : this.transformation().remove(name);
    }
    /**
     * @function HtmlTag#content
     * @protected
     * @ignore
     */

  }, {
    key: "content",
    value: function content() {
      return "";
    }
    /**
     * @function HtmlTag#openTag
     * @protected
     * @ignore
     */

  }, {
    key: "openTag",
    value: function openTag() {
      var tag = "<" + this.name;
      var htmlAttrs = this.htmlAttrs(this.attributes());

      if (htmlAttrs && htmlAttrs.length > 0) {
        tag += " " + htmlAttrs;
      }

      return tag + ">";
    }
    /**
     * @function HtmlTag#closeTag
     * @protected
     * @ignore
     */

  }, {
    key: "closeTag",
    value: function closeTag() {
      return "</".concat(this.name, ">");
    }
    /**
     * Generates an HTML representation of the tag.
     * @function HtmlTag#toHtml
     * @returns {string} Returns HTML in string format
     */

  }, {
    key: "toHtml",
    value: function toHtml() {
      return this.openTag() + this.content() + this.closeTag();
    }
    /**
     * Creates a DOM object representing the tag.
     * @function HtmlTag#toDOM
     * @returns {Element}
     */

  }, {
    key: "toDOM",
    value: function toDOM() {
      var element, name, ref, value;

      if (!isFunction_root_isFunction_default()(typeof document !== "undefined" && document !== null ? document.createElement : void 0)) {
        throw "Can't create DOM if document is not present!";
      }

      element = document.createElement(this.name);
      ref = this.attributes();

      for (name in ref) {
        value = ref[name];
        element.setAttribute(name, value);
      }

      return element;
    }
  }], [{
    key: "new",
    value: function _new(name, publicId, options) {
      return new this(name, publicId, options);
    }
  }, {
    key: "isResponsive",
    value: function isResponsive(tag, responsiveClass) {
      var dataSrc;
      dataSrc = lodash_getData(tag, 'src-cache') || lodash_getData(tag, 'src');
      return lodash_hasClass(tag, responsiveClass) && /\bw_auto\b/.exec(dataSrc);
    }
  }]);

  return HtmlTag;
}();

;
/**
 * Represent the given key and value as an HTML attribute.
 * @function toAttribute
 * @protected
 * @param {string} key - attribute name
 * @param {*|boolean} value - the value of the attribute. If the value is boolean `true`, return the key only.
 * @returns {string} the attribute
 *
 */

function htmltag_toAttribute(key, value) {
  if (!value) {
    return void 0;
  } else if (value === true) {
    return key;
  } else {
    return "".concat(key, "=\"").concat(value, "\"");
  }
}
/**
 * If given value is a string, replaces quotes with character entities (&#34;, &#39;)
 * @param value - value to change
 * @returns {*} changed value
 */


function escapeQuotes(value) {
  return isString_root_isString_default()(value) ? value.replace('"', '&#34;').replace("'", '&#39;') : value;
}

/* harmony default export */ var htmltag = (htmltag_HtmlTag);
// CONCATENATED MODULE: ./src/url.js
var _excluded = ["placeholder", "accessibility"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







/**
 * Adds protocol, host, pathname prefixes to given string
 * @param str
 * @returns {string}
 */

function makeUrl(str) {
  var prefix = document.location.protocol + '//' + document.location.host;

  if (str[0] === '?') {
    prefix += document.location.pathname;
  } else if (str[0] !== '/') {
    prefix += document.location.pathname.replace(/\/[^\/]*$/, '/');
  }

  return prefix + str;
}
/**
 * Check is given string is a url
 * @param str
 * @returns {boolean}
 */


function isUrl(str) {
  return str ? !!str.match(/^https?:\//) : false;
} // Produce a number between 1 and 5 to be used for cdn sub domains designation


function cdnSubdomainNumber(publicId) {
  return src_crc32(publicId) % 5 + 1;
}
/**
 * Removes signature from options and returns the signature
 * Makes sure signature is empty or of this format: s--signature--
 * @param {object} options
 * @returns {string} the formatted signature
 */


function handleSignature(options) {
  var signature = options.signature;
  var isFormatted = !signature || signature.indexOf('s--') === 0 && signature.substr(-2) === '--';
  delete options.signature;
  return isFormatted ? signature : "s--".concat(signature, "--");
}
/**
 * Create the URL prefix for Cloudinary resources.
 * @param {string} publicId the resource public ID
 * @param {object} options additional options
 * @param {string} options.cloud_name - the cloud name.
 * @param {boolean} [options.cdn_subdomain=false] - Whether to automatically build URLs with
 *  multiple CDN sub-domains.
 * @param {string} [options.private_cdn] - Boolean (default: false). Should be set to true for Advanced plan's users
 *  that have a private CDN distribution.
 * @param {string} [options.protocol="http://"] - the URI protocol to use. If options.secure is true,
 *  the value is overridden to "https://"
 * @param {string} [options.secure_distribution] - The domain name of the CDN distribution to use for building HTTPS URLs.
 *  Relevant only for Advanced plan's users that have a private CDN distribution.
 * @param {string} [options.cname] - Custom domain name to use for building HTTP URLs.
 *  Relevant only for Advanced plan's users that have a private CDN distribution and a custom CNAME.
 * @param {boolean} [options.secure_cdn_subdomain=true] - When options.secure is true and this parameter is false,
 *  the subdomain is set to "res".
 * @param {boolean} [options.secure=false] - Force HTTPS URLs of images even if embedded in non-secure HTTP pages.
 *  When this value is true, options.secure_distribution will be used as host if provided, and options.protocol is set
 *  to "https://".
 * @returns {string} the URL prefix for the resource.
 * @private
 */


function handlePrefix(publicId, options) {
  if (options.cloud_name && options.cloud_name[0] === '/') {
    return '/res' + options.cloud_name;
  } // defaults


  var protocol = "http://";
  var cdnPart = "";
  var subdomain = "res";
  var host = ".cloudinary.com";
  var path = "/" + options.cloud_name; // modifications

  if (options.protocol) {
    protocol = options.protocol + '//';
  }

  if (options.private_cdn) {
    cdnPart = options.cloud_name + "-";
    path = "";
  }

  if (options.cdn_subdomain) {
    subdomain = "res-" + cdnSubdomainNumber(publicId);
  }

  if (options.secure) {
    protocol = "https://";

    if (options.secure_cdn_subdomain === false) {
      subdomain = "res";
    }

    if (options.secure_distribution != null && options.secure_distribution !== OLD_AKAMAI_SHARED_CDN && options.secure_distribution !== SHARED_CDN) {
      cdnPart = "";
      subdomain = "";
      host = options.secure_distribution;
    }
  } else if (options.cname) {
    protocol = "http://";
    cdnPart = "";
    subdomain = options.cdn_subdomain ? 'a' + (src_crc32(publicId) % 5 + 1) + '.' : '';
    host = options.cname;
  }

  return [protocol, cdnPart, subdomain, host, path].join("");
}
/**
 * Return the resource type and action type based on the given configuration
 * @function Cloudinary#handleResourceType
 * @param {Object|string} resource_type
 * @param {string} [type='upload']
 * @param {string} [url_suffix]
 * @param {boolean} [use_root_path]
 * @param {boolean} [shorten]
 * @returns {string} resource_type/type
 * @ignore
 */


function handleResourceType(_ref) {
  var _ref$resource_type = _ref.resource_type,
      resource_type = _ref$resource_type === void 0 ? "image" : _ref$resource_type,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "upload" : _ref$type,
      url_suffix = _ref.url_suffix,
      use_root_path = _ref.use_root_path,
      shorten = _ref.shorten;
  var options,
      resourceType = resource_type;

  if (isPlainObject_root_isPlainObject_default()(resourceType)) {
    options = resourceType;
    resourceType = options.resource_type;
    type = options.type;
    shorten = options.shorten;
  }

  if (type == null) {
    type = 'upload';
  }

  if (url_suffix != null) {
    resourceType = SEO_TYPES["".concat(resourceType, "/").concat(type)];
    type = null;

    if (resourceType == null) {
      throw new Error("URL Suffix only supported for ".concat(Object.keys(SEO_TYPES).join(', ')));
    }
  }

  if (use_root_path) {
    if (resourceType === 'image' && type === 'upload' || resourceType === "images") {
      resourceType = null;
      type = null;
    } else {
      throw new Error("Root path only supported for image/upload");
    }
  }

  if (shorten && resourceType === 'image' && type === 'upload') {
    resourceType = 'iu';
    type = null;
  }

  return [resourceType, type].join("/");
}
/**
 * Encode publicId
 * @param publicId
 * @returns {string} encoded publicId
 */


function encodePublicId(publicId) {
  return encodeURIComponent(publicId).replace(/%3A/g, ':').replace(/%2F/g, '/');
}
/**
 * Encode and format publicId
 * @param publicId
 * @param options
 * @returns {string} publicId
 */


function formatPublicId(publicId, options) {
  if (isUrl(publicId)) {
    publicId = encodePublicId(publicId);
  } else {
    try {
      // Make sure publicId is URI encoded.
      publicId = decodeURIComponent(publicId);
    } catch (error) {}

    publicId = encodePublicId(publicId);

    if (options.url_suffix) {
      publicId = publicId + '/' + options.url_suffix;
    }

    if (options.format) {
      if (!options.trust_public_id) {
        publicId = publicId.replace(/\.(jpg|png|gif|webp)$/, '');
      }

      publicId = publicId + '.' + options.format;
    }
  }

  return publicId;
}
/**
 * Get any error with url options
 * @param options
 * @returns {string} if error, otherwise return undefined
 */


function validate(options) {
  var cloud_name = options.cloud_name,
      url_suffix = options.url_suffix;

  if (!cloud_name) {
    return 'Unknown cloud_name';
  }

  if (url_suffix && url_suffix.match(/[\.\/]/)) {
    return 'url_suffix should not include . or /';
  }
}
/**
 * Get version part of the url
 * @param publicId
 * @param options
 * @returns {string}
 */


function handleVersion(publicId, options) {
  // force_version param means to make sure there is a version in the url (Default is true)
  var isForceVersion = options.force_version || typeof options.force_version === 'undefined'; // Is version included in publicId or in options, or publicId is a url (doesn't need version)

  var isVersionExist = publicId.indexOf('/') < 0 || publicId.match(/^v[0-9]+/) || isUrl(publicId) || options.version;

  if (isForceVersion && !isVersionExist) {
    options.version = 1;
  }

  return options.version ? "v".concat(options.version) : '';
}
/**
 * Get final transformation component for url string
 * @param options
 * @returns {string}
 */


function handleTransformation(options) {
  var _ref2 = options || {},
      placeholder = _ref2.placeholder,
      accessibility = _ref2.accessibility,
      otherOptions = _objectWithoutProperties(_ref2, _excluded);

  var result = new src_transformation(otherOptions); // Append accessibility transformations

  if (accessibility && ACCESSIBILITY_MODES[accessibility]) {
    result.chain().effect(ACCESSIBILITY_MODES[accessibility]);
  } // Append placeholder transformations


  if (placeholder) {
    if (placeholder === "predominant-color" && result.getValue('width') && result.getValue('height')) {
      placeholder += '-pixel';
    }

    var placeholderTransformations = PLACEHOLDER_IMAGE_MODES[placeholder] || PLACEHOLDER_IMAGE_MODES.blur;
    placeholderTransformations.forEach(function (t) {
      return result.chain().transformation(t);
    });
  }

  return result.serialize();
}
/**
 * If type is 'fetch', update publicId to be a url
 * @param publicId
 * @param type
 * @returns {string}
 */


function preparePublicId(publicId, _ref3) {
  var type = _ref3.type;
  return !isUrl(publicId) && type === 'fetch' ? makeUrl(publicId) : publicId;
}
/**
 * Generate url string
 * @param publicId
 * @param options
 * @returns {string} final url
 */


function urlString(publicId, options) {
  if (isUrl(publicId) && (options.type === 'upload' || options.type === 'asset')) {
    return publicId;
  }

  var version = handleVersion(publicId, options);
  var transformationString = handleTransformation(options);
  var prefix = handlePrefix(publicId, options);
  var signature = handleSignature(options);
  var resourceType = handleResourceType(options);
  publicId = formatPublicId(publicId, options);
  return compact_root_compact_default()([prefix, resourceType, signature, transformationString, version, publicId]).join('/').replace(/([^:])\/+/g, '$1/') // replace '///' with '//'
  .replace(' ', '%20');
}
/**
 * Merge options and config with defaults
 * update options fetch_format according to 'type' param
 * @param options
 * @param config
 * @returns {*} updated options
 */


function prepareOptions(options, config) {
  if (options instanceof src_transformation) {
    options = options.toOptions();
  }

  options = defaults({}, options, config, DEFAULT_IMAGE_PARAMS);

  if (options.type === 'fetch') {
    options.fetch_format = options.fetch_format || options.format;
  }

  return options;
}
/**
 * Generates a URL for any asset in your Media library.
 * @function url
 * @ignore
 * @param {string} publicId - The public ID of the media asset.
 * @param {Object} [options={}] - The {@link Transformation} parameters to include in the URL.
 * @param {object} [config={}] - URL configuration parameters
 * @param {type} [options.type='upload'] - The asset's storage type.
 *  For details on all fetch types, see
 * <a href="https://cloudinary.com/documentation/image_transformations#fetching_images_from_remote_locations"
 *  target="_blank">Fetch types</a>.
 * @param {Object} [options.resource_type='image'] - The type of asset. <p>Possible values:<br/>
 *  - `image`<br/>
 *  - `video`<br/>
 *  - `raw`
 * @param {signature} [options.signature='s--12345678--'] - The signature component of a
 *  signed delivery URL of the format: /s--SIGNATURE--/.
 *  For details on signatures, see
 * <a href="https://cloudinary.com/documentation/signatures" target="_blank">Signatures</a>.
 * @return {string} The media asset URL.
 * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
 *  Available image transformations</a>
 * @see <a href="https://cloudinary.com/documentation/video_transformation_reference" target="_blank">
 *  Available video transformations</a>
 */


function url_url(publicId) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (!publicId) {
    return publicId;
  }

  options = prepareOptions(options, config);
  publicId = preparePublicId(publicId, options);
  var error = validate(options);

  if (error) {
    throw error;
  }

  var resultUrl = urlString(publicId, options);

  if (options.urlAnalytics) {
    var analyticsOptions = getAnalyticsOptions(options);
    var sdkAnalyticsSignature = getSDKAnalyticsSignature(analyticsOptions); // url might already have a '?' query param

    var appender = '?';

    if (resultUrl.indexOf('?') >= 0) {
      appender = '&';
    }

    resultUrl = "".concat(resultUrl).concat(appender, "_a=").concat(sdkAnalyticsSignature);
  }

  return resultUrl;
}
;
// CONCATENATED MODULE: ./src/util/generateBreakpoints.js
function generateBreakpoints_slicedToArray(arr, i) { return generateBreakpoints_arrayWithHoles(arr) || generateBreakpoints_iterableToArrayLimit(arr, i) || generateBreakpoints_unsupportedIterableToArray(arr, i) || generateBreakpoints_nonIterableRest(); }

function generateBreakpoints_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function generateBreakpoints_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return generateBreakpoints_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return generateBreakpoints_arrayLikeToArray(o, minLen); }

function generateBreakpoints_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function generateBreakpoints_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function generateBreakpoints_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Helper function. Gets or populates srcset breakpoints using provided parameters
 * Either the breakpoints or min_width, max_width, max_images must be provided.
 *
 * @private
 * @param {srcset} srcset Options with either `breakpoints` or `min_width`, `max_width`, and `max_images`
 *
 * @return {number[]} Array of breakpoints
 *
 */
function generateBreakpoints(srcset) {
  var breakpoints = srcset.breakpoints || [];

  if (breakpoints.length) {
    return breakpoints;
  }

  var _map = [srcset.min_width, srcset.max_width, srcset.max_images].map(Number),
      _map2 = generateBreakpoints_slicedToArray(_map, 3),
      min_width = _map2[0],
      max_width = _map2[1],
      max_images = _map2[2];

  if ([min_width, max_width, max_images].some(isNaN)) {
    throw 'Either (min_width, max_width, max_images) ' + 'or breakpoints must be provided to the image srcset attribute';
  }

  if (min_width > max_width) {
    throw 'min_width must be less than max_width';
  }

  if (max_images <= 0) {
    throw 'max_images must be a positive integer';
  } else if (max_images === 1) {
    min_width = max_width;
  }

  var stepSize = Math.ceil((max_width - min_width) / Math.max(max_images - 1, 1));

  for (var current = min_width; current < max_width; current += stepSize) {
    breakpoints.push(current);
  }

  breakpoints.push(max_width);
  return breakpoints;
}
// CONCATENATED MODULE: ./src/util/srcsetUtils.js

var srcsetUtils_isEmpty = isEmpty;



/**
 * Options used to generate the srcset attribute.
 * @typedef {object} srcset
 * @property {(number[]|string[])}   [breakpoints] An array of breakpoints.
 * @property {number}                [min_width]   Minimal width of the srcset images.
 * @property {number}                [max_width]   Maximal width of the srcset images.
 * @property {number}                [max_images]  Number of srcset images to generate.
 * @property {object|string}         [transformation] The transformation to use in the srcset urls.
 * @property {boolean}               [sizes] Whether to calculate and add the sizes attribute.
 */

/**
 * Helper function. Generates a single srcset item url
 *
 * @private
 * @param {string} public_id  Public ID of the resource.
 * @param {number} width      Width in pixels of the srcset item.
 * @param {object|string} transformation
 * @param {object} options    Additional options.
 *
 * @return {string} Resulting URL of the item
 */

function scaledUrl(public_id, width, transformation) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var configParams = extractUrlParams(options);
  transformation = transformation || options;
  configParams.raw_transformation = new src_transformation([merge_root_merge_default.a({}, transformation), {
    crop: 'scale',
    width: width
  }]).toString();
  return url_url(public_id, configParams);
}
/**
 * If cache is enabled, get the breakpoints from the cache. If the values were not found in the cache,
 * or cache is not enabled, generate the values.
 * @param {srcset} srcset The srcset configuration parameters
 * @param {string} public_id
 * @param {object} options
 * @return {*|Array}
 */

function getOrGenerateBreakpoints(public_id) {
  var srcset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return generateBreakpoints(srcset);
}
/**
 * Helper function. Generates srcset attribute value of the HTML img tag
 * @private
 *
 * @param {string} public_id  Public ID of the resource
 * @param {number[]} breakpoints An array of breakpoints (in pixels)
 * @param {object} transformation The transformation
 * @param {object} options Includes html tag options, transformation options
 * @return {string} Resulting srcset attribute value
 */

function generateSrcsetAttribute(public_id, breakpoints, transformation, options) {
  options = cloneDeep_root_cloneDeep_default.a(options);
  patchFetchFormat(options);
  return breakpoints.map(function (width) {
    return "".concat(scaledUrl(public_id, width, transformation, options), " ").concat(width, "w");
  }).join(', ');
}
/**
 * Helper function. Generates sizes attribute value of the HTML img tag
 * @private
 * @param {number[]} breakpoints An array of breakpoints.
 * @return {string} Resulting sizes attribute value
 */

function generateSizesAttribute(breakpoints) {
  if (breakpoints == null) {
    return '';
  }

  return breakpoints.map(function (width) {
    return "(max-width: ".concat(width, "px) ").concat(width, "px");
  }).join(', ');
}
/**
 * Helper function. Generates srcset and sizes attributes of the image tag
 *
 * Generated attributes are added to attributes argument
 *
 * @private
 * @param {string}    publicId  The public ID of the resource
 * @param {object}    attributes Existing HTML attributes.
 * @param {srcset}    srcsetData
 * @param {object}    options    Additional options.
 *
 * @return array The responsive attributes
 */

function generateImageResponsiveAttributes(publicId) {
  var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var srcsetData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  // Create both srcset and sizes here to avoid fetching breakpoints twice
  var responsiveAttributes = {};

  if (srcsetUtils_isEmpty(srcsetData)) {
    return responsiveAttributes;
  }

  var generateSizes = !attributes.sizes && srcsetData.sizes === true;
  var generateSrcset = !attributes.srcset;

  if (generateSrcset || generateSizes) {
    var breakpoints = getOrGenerateBreakpoints(publicId, srcsetData, options);

    if (generateSrcset) {
      var transformation = srcsetData.transformation;
      var srcsetAttr = generateSrcsetAttribute(publicId, breakpoints, transformation, options);

      if (!srcsetUtils_isEmpty(srcsetAttr)) {
        responsiveAttributes.srcset = srcsetAttr;
      }
    }

    if (generateSizes) {
      var sizesAttr = generateSizesAttribute(breakpoints);

      if (!srcsetUtils_isEmpty(sizesAttr)) {
        responsiveAttributes.sizes = sizesAttr;
      }
    }
  }

  return responsiveAttributes;
}
/**
 * Generate a media query
 *
 * @private
 * @param {object} options configuration options
 * @param {number|string} options.min_width
 * @param {number|string} options.max_width
 * @return {string} a media query string
 */

function generateMediaAttr(options) {
  var mediaQuery = [];

  if (options != null) {
    if (options.min_width != null) {
      mediaQuery.push("(min-width: ".concat(options.min_width, "px)"));
    }

    if (options.max_width != null) {
      mediaQuery.push("(max-width: ".concat(options.max_width, "px)"));
    }
  }

  return mediaQuery.join(' and ');
}
var srcsetUrl = scaledUrl;
// CONCATENATED MODULE: ./src/tags/imagetag.js
function imagetag_typeof(obj) { "@babel/helpers - typeof"; return imagetag_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, imagetag_typeof(obj); }

function imagetag_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function imagetag_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function imagetag_createClass(Constructor, protoProps, staticProps) { if (protoProps) imagetag_defineProperties(Constructor.prototype, protoProps); if (staticProps) imagetag_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function imagetag_get() { if (typeof Reflect !== "undefined" && Reflect.get) { imagetag_get = Reflect.get; } else { imagetag_get = function _get(target, property, receiver) { var base = imagetag_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return imagetag_get.apply(this, arguments); }

function imagetag_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = imagetag_getPrototypeOf(object); if (object === null) break; } return object; }

function imagetag_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) imagetag_setPrototypeOf(subClass, superClass); }

function imagetag_setPrototypeOf(o, p) { imagetag_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return imagetag_setPrototypeOf(o, p); }

function imagetag_createSuper(Derived) { var hasNativeReflectConstruct = imagetag_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = imagetag_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = imagetag_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return imagetag_possibleConstructorReturn(this, result); }; }

function imagetag_possibleConstructorReturn(self, call) { if (call && (imagetag_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return imagetag_assertThisInitialized(self); }

function imagetag_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function imagetag_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function imagetag_getPrototypeOf(o) { imagetag_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return imagetag_getPrototypeOf(o); }

/**
 * Image Tag
 * Depends on 'tags/htmltag', 'cloudinary'
 */




/**
 * Creates an HTML (DOM) Image tag using Cloudinary as the source.
 * @constructor ImageTag
 * @extends HtmlTag
 * @param {string} [publicId]
 * @param {Object} [options]
 */

var imagetag_ImageTag = /*#__PURE__*/function (_HtmlTag) {
  imagetag_inherits(ImageTag, _HtmlTag);

  var _super = imagetag_createSuper(ImageTag);

  function ImageTag(publicId) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    imagetag_classCallCheck(this, ImageTag);

    return _super.call(this, "img", publicId, options);
  }
  /** @override */


  imagetag_createClass(ImageTag, [{
    key: "closeTag",
    value: function closeTag() {
      return "";
    }
    /** @override */

  }, {
    key: "attributes",
    value: function attributes() {
      var attr, options, srcAttribute;
      attr = imagetag_get(imagetag_getPrototypeOf(ImageTag.prototype), "attributes", this).call(this) || {};
      options = this.getOptions();
      var attributes = this.getOption('attributes') || {};
      var srcsetParam = this.getOption('srcset') || attributes.srcset;
      var responsiveAttributes = {};

      if (isString_root_isString_default()(srcsetParam)) {
        responsiveAttributes.srcset = srcsetParam;
      } else {
        responsiveAttributes = generateImageResponsiveAttributes(this.publicId, attributes, srcsetParam, options);
      }

      if (!isEmpty(responsiveAttributes)) {
        delete attr.width;
        delete attr.height;
      }

      merge_root_merge_default()(attr, responsiveAttributes);
      srcAttribute = options.responsive && !options.client_hints ? 'data-src' : 'src';

      if (attr[srcAttribute] == null) {
        attr[srcAttribute] = url_url(this.publicId, this.getOptions());
      }

      return attr;
    }
  }]);

  return ImageTag;
}(htmltag);

;
/* harmony default export */ var imagetag = (imagetag_ImageTag);
// CONCATENATED MODULE: ./src/tags/sourcetag.js
function sourcetag_typeof(obj) { "@babel/helpers - typeof"; return sourcetag_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, sourcetag_typeof(obj); }

function sourcetag_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function sourcetag_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function sourcetag_createClass(Constructor, protoProps, staticProps) { if (protoProps) sourcetag_defineProperties(Constructor.prototype, protoProps); if (staticProps) sourcetag_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function sourcetag_get() { if (typeof Reflect !== "undefined" && Reflect.get) { sourcetag_get = Reflect.get; } else { sourcetag_get = function _get(target, property, receiver) { var base = sourcetag_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return sourcetag_get.apply(this, arguments); }

function sourcetag_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = sourcetag_getPrototypeOf(object); if (object === null) break; } return object; }

function sourcetag_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) sourcetag_setPrototypeOf(subClass, superClass); }

function sourcetag_setPrototypeOf(o, p) { sourcetag_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return sourcetag_setPrototypeOf(o, p); }

function sourcetag_createSuper(Derived) { var hasNativeReflectConstruct = sourcetag_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = sourcetag_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = sourcetag_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return sourcetag_possibleConstructorReturn(this, result); }; }

function sourcetag_possibleConstructorReturn(self, call) { if (call && (sourcetag_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return sourcetag_assertThisInitialized(self); }

function sourcetag_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function sourcetag_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function sourcetag_getPrototypeOf(o) { sourcetag_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return sourcetag_getPrototypeOf(o); }

/**
 * Image Tag
 * Depends on 'tags/htmltag', 'cloudinary'
 */




/**
 * Creates an HTML (DOM) Image tag using Cloudinary as the source.
 * @constructor SourceTag
 * @extends HtmlTag
 * @param {string} [publicId]
 * @param {Object} [options]
 */

var sourcetag_SourceTag = /*#__PURE__*/function (_HtmlTag) {
  sourcetag_inherits(SourceTag, _HtmlTag);

  var _super = sourcetag_createSuper(SourceTag);

  function SourceTag(publicId) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    sourcetag_classCallCheck(this, SourceTag);

    return _super.call(this, "source", publicId, options);
  }
  /** @override */


  sourcetag_createClass(SourceTag, [{
    key: "closeTag",
    value: function closeTag() {
      return "";
    }
    /** @override */

  }, {
    key: "attributes",
    value: function attributes() {
      var srcsetParam = this.getOption('srcset');
      var attr = sourcetag_get(sourcetag_getPrototypeOf(SourceTag.prototype), "attributes", this).call(this) || {};
      var options = this.getOptions();
      merge_root_merge_default()(attr, generateImageResponsiveAttributes(this.publicId, attr, srcsetParam, options));

      if (!attr.srcset) {
        attr.srcset = url_url(this.publicId, options);
      }

      if (!attr.media && options.media) {
        attr.media = generateMediaAttr(options.media);
      }

      return attr;
    }
  }]);

  return SourceTag;
}(htmltag);

;
/* harmony default export */ var sourcetag = (sourcetag_SourceTag);
// CONCATENATED MODULE: ./src/tags/picturetag.js
function picturetag_typeof(obj) { "@babel/helpers - typeof"; return picturetag_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, picturetag_typeof(obj); }

function picturetag_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function picturetag_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function picturetag_createClass(Constructor, protoProps, staticProps) { if (protoProps) picturetag_defineProperties(Constructor.prototype, protoProps); if (staticProps) picturetag_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function picturetag_get() { if (typeof Reflect !== "undefined" && Reflect.get) { picturetag_get = Reflect.get; } else { picturetag_get = function _get(target, property, receiver) { var base = picturetag_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return picturetag_get.apply(this, arguments); }

function picturetag_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = picturetag_getPrototypeOf(object); if (object === null) break; } return object; }

function picturetag_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) picturetag_setPrototypeOf(subClass, superClass); }

function picturetag_setPrototypeOf(o, p) { picturetag_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return picturetag_setPrototypeOf(o, p); }

function picturetag_createSuper(Derived) { var hasNativeReflectConstruct = picturetag_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = picturetag_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = picturetag_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return picturetag_possibleConstructorReturn(this, result); }; }

function picturetag_possibleConstructorReturn(self, call) { if (call && (picturetag_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return picturetag_assertThisInitialized(self); }

function picturetag_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function picturetag_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function picturetag_getPrototypeOf(o) { picturetag_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return picturetag_getPrototypeOf(o); }







var picturetag_PictureTag = /*#__PURE__*/function (_HtmlTag) {
  picturetag_inherits(PictureTag, _HtmlTag);

  var _super = picturetag_createSuper(PictureTag);

  function PictureTag(publicId) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var sources = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    picturetag_classCallCheck(this, PictureTag);

    _this = _super.call(this, 'picture', publicId, options);
    _this.widthList = sources;
    return _this;
  }
  /** @override */


  picturetag_createClass(PictureTag, [{
    key: "content",
    value: function content() {
      var _this2 = this;

      return this.widthList.map(function (_ref) {
        var min_width = _ref.min_width,
            max_width = _ref.max_width,
            transformation = _ref.transformation;

        var options = _this2.getOptions();

        var sourceTransformation = new src_transformation(options);
        sourceTransformation.chain().fromOptions(typeof transformation === 'string' ? {
          raw_transformation: transformation
        } : transformation);
        options = extractUrlParams(options);
        options.media = {
          min_width: min_width,
          max_width: max_width
        };
        options.transformation = sourceTransformation;
        return new sourcetag(_this2.publicId, options).toHtml();
      }).join('') + new imagetag(this.publicId, this.getOptions()).toHtml();
    }
    /** @override */

  }, {
    key: "attributes",
    value: function attributes() {
      var attr = picturetag_get(picturetag_getPrototypeOf(PictureTag.prototype), "attributes", this).call(this);

      delete attr.width;
      delete attr.height;
      return attr;
    }
    /** @override */

  }, {
    key: "closeTag",
    value: function closeTag() {
      return "</" + this.name + ">";
    }
  }]);

  return PictureTag;
}(htmltag);

;
/* harmony default export */ var picturetag = (picturetag_PictureTag);
// CONCATENATED MODULE: ./src/tags/videotag.js
function videotag_typeof(obj) { "@babel/helpers - typeof"; return videotag_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, videotag_typeof(obj); }

function videotag_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function videotag_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function videotag_createClass(Constructor, protoProps, staticProps) { if (protoProps) videotag_defineProperties(Constructor.prototype, protoProps); if (staticProps) videotag_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function videotag_get() { if (typeof Reflect !== "undefined" && Reflect.get) { videotag_get = Reflect.get; } else { videotag_get = function _get(target, property, receiver) { var base = videotag_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return videotag_get.apply(this, arguments); }

function videotag_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = videotag_getPrototypeOf(object); if (object === null) break; } return object; }

function videotag_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) videotag_setPrototypeOf(subClass, superClass); }

function videotag_setPrototypeOf(o, p) { videotag_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return videotag_setPrototypeOf(o, p); }

function videotag_createSuper(Derived) { var hasNativeReflectConstruct = videotag_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = videotag_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = videotag_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return videotag_possibleConstructorReturn(this, result); }; }

function videotag_possibleConstructorReturn(self, call) { if (call && (videotag_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return videotag_assertThisInitialized(self); }

function videotag_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function videotag_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function videotag_getPrototypeOf(o) { videotag_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return videotag_getPrototypeOf(o); }

/**
 * Video Tag
 * Depends on 'tags/htmltag', 'util', 'cloudinary'
 */




var VIDEO_TAG_PARAMS = ['source_types', 'source_transformation', 'fallback_content', 'poster', 'sources'];
var videotag_DEFAULT_VIDEO_SOURCE_TYPES = ['webm', 'mp4', 'ogv'];
var videotag_DEFAULT_POSTER_OPTIONS = {
  format: 'jpg',
  resource_type: 'video'
};
/**
 * Creates an HTML (DOM) Video tag using Cloudinary as the source.
 * @constructor VideoTag
 * @extends HtmlTag
 * @param {string} [publicId]
 * @param {Object} [options]
 */

var videotag_VideoTag = /*#__PURE__*/function (_HtmlTag) {
  videotag_inherits(VideoTag, _HtmlTag);

  var _super = videotag_createSuper(VideoTag);

  function VideoTag(publicId) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    videotag_classCallCheck(this, VideoTag);

    options = defaults({}, options, DEFAULT_VIDEO_PARAMS);
    return _super.call(this, "video", publicId.replace(/\.(mp4|ogv|webm)$/, ''), options);
  }
  /**
   * Set the transformation to apply on each source
   * @function VideoTag#setSourceTransformation
   * @param {Object} an object with pairs of source type and source transformation
   * @returns {VideoTag} Returns this instance for chaining purposes.
   */


  videotag_createClass(VideoTag, [{
    key: "setSourceTransformation",
    value: function setSourceTransformation(value) {
      this.transformation().sourceTransformation(value);
      return this;
    }
    /**
     * Set the source types to include in the video tag
     * @function VideoTag#setSourceTypes
     * @param {Array<string>} an array of source types
     * @returns {VideoTag} Returns this instance for chaining purposes.
     */

  }, {
    key: "setSourceTypes",
    value: function setSourceTypes(value) {
      this.transformation().sourceTypes(value);
      return this;
    }
    /**
     * Set the poster to be used in the video tag
     * @function VideoTag#setPoster
     * @param {string|Object} value
     * - string: a URL to use for the poster
     * - Object: transformation parameters to apply to the poster. May optionally include a public_id to use instead of the video public_id.
     * @returns {VideoTag} Returns this instance for chaining purposes.
     */

  }, {
    key: "setPoster",
    value: function setPoster(value) {
      this.transformation().poster(value);
      return this;
    }
    /**
     * Set the content to use as fallback in the video tag
     * @function VideoTag#setFallbackContent
     * @param {string} value - the content to use, in HTML format
     * @returns {VideoTag} Returns this instance for chaining purposes.
     */

  }, {
    key: "setFallbackContent",
    value: function setFallbackContent(value) {
      this.transformation().fallbackContent(value);
      return this;
    }
  }, {
    key: "content",
    value: function content() {
      var _this = this;

      var sourceTypes = this.transformation().getValue('source_types');
      var sourceTransformation = this.transformation().getValue('source_transformation');
      var fallback = this.transformation().getValue('fallback_content');
      var sources = this.getOption('sources');
      var innerTags = [];

      if (isArray_root_isArray_default()(sources) && !isEmpty(sources)) {
        innerTags = sources.map(function (source) {
          var src = url_url(_this.publicId, defaults({}, source.transformations || {}, {
            resource_type: 'video',
            format: source.type
          }), _this.getOptions());
          return _this.createSourceTag(src, source.type, source.codecs);
        });
      } else {
        if (isEmpty(sourceTypes)) {
          sourceTypes = videotag_DEFAULT_VIDEO_SOURCE_TYPES;
        }

        if (isArray_root_isArray_default()(sourceTypes)) {
          innerTags = sourceTypes.map(function (srcType) {
            var src = url_url(_this.publicId, defaults({}, sourceTransformation[srcType] || {}, {
              resource_type: 'video',
              format: srcType
            }), _this.getOptions());
            return _this.createSourceTag(src, srcType);
          });
        }
      }

      return innerTags.join('') + fallback;
    }
  }, {
    key: "attributes",
    value: function attributes() {
      var sourceTypes = this.getOption('source_types');
      var poster = this.getOption('poster');

      if (poster === undefined) {
        poster = {};
      }

      if (isPlainObject_root_isPlainObject_default()(poster)) {
        var defaultOptions = poster.public_id != null ? DEFAULT_IMAGE_PARAMS : videotag_DEFAULT_POSTER_OPTIONS;
        poster = url_url(poster.public_id || this.publicId, defaults({}, poster, defaultOptions, this.getOptions()));
      }

      var attr = videotag_get(videotag_getPrototypeOf(VideoTag.prototype), "attributes", this).call(this) || {};
      attr = omit(attr, VIDEO_TAG_PARAMS);
      var sources = this.getOption('sources'); // In case of empty sourceTypes - fallback to default source types is used.

      var hasSourceTags = !isEmpty(sources) || isEmpty(sourceTypes) || isArray_root_isArray_default()(sourceTypes);

      if (!hasSourceTags) {
        attr["src"] = url_url(this.publicId, this.getOptions(), {
          resource_type: 'video',
          format: sourceTypes
        });
      }

      if (poster != null) {
        attr["poster"] = poster;
      }

      return attr;
    }
  }, {
    key: "createSourceTag",
    value: function createSourceTag(src, sourceType) {
      var codecs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var mimeType = null;

      if (!isEmpty(sourceType)) {
        var videoType = sourceType === 'ogv' ? 'ogg' : sourceType;
        mimeType = 'video/' + videoType;

        if (!isEmpty(codecs)) {
          var codecsStr = isArray_root_isArray_default()(codecs) ? codecs.join(', ') : codecs;
          mimeType += '; codecs=' + codecsStr;
        }
      }

      return "<source " + this.htmlAttrs({
        src: src,
        type: mimeType
      }) + ">";
    }
  }]);

  return VideoTag;
}(htmltag);

/* harmony default export */ var videotag = (videotag_VideoTag);
// CONCATENATED MODULE: ./src/tags/clienthintsmetatag.js
function clienthintsmetatag_typeof(obj) { "@babel/helpers - typeof"; return clienthintsmetatag_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, clienthintsmetatag_typeof(obj); }

function clienthintsmetatag_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function clienthintsmetatag_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function clienthintsmetatag_createClass(Constructor, protoProps, staticProps) { if (protoProps) clienthintsmetatag_defineProperties(Constructor.prototype, protoProps); if (staticProps) clienthintsmetatag_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function clienthintsmetatag_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) clienthintsmetatag_setPrototypeOf(subClass, superClass); }

function clienthintsmetatag_setPrototypeOf(o, p) { clienthintsmetatag_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return clienthintsmetatag_setPrototypeOf(o, p); }

function clienthintsmetatag_createSuper(Derived) { var hasNativeReflectConstruct = clienthintsmetatag_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = clienthintsmetatag_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = clienthintsmetatag_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return clienthintsmetatag_possibleConstructorReturn(this, result); }; }

function clienthintsmetatag_possibleConstructorReturn(self, call) { if (call && (clienthintsmetatag_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return clienthintsmetatag_assertThisInitialized(self); }

function clienthintsmetatag_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function clienthintsmetatag_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function clienthintsmetatag_getPrototypeOf(o) { clienthintsmetatag_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return clienthintsmetatag_getPrototypeOf(o); }

/**
 * Image Tag
 * Depends on 'tags/htmltag', 'cloudinary'
 */


/**
 * Creates an HTML (DOM) Meta tag that enables Client-Hints for the HTML page. <br/>
 *  See
 *  <a href="https://cloudinary.com/documentation/responsive_images#automating_responsive_images_with_client_hints"
 *  target="_new">Automating responsive images with Client Hints</a> for more details.
 * @constructor ClientHintsMetaTag
 * @extends HtmlTag
 * @param {object} options
 * @example
 * tag = new ClientHintsMetaTag()
 * //returns: <meta http-equiv="Accept-CH" content="DPR, Viewport-Width, Width">
 */

var clienthintsmetatag_ClientHintsMetaTag = /*#__PURE__*/function (_HtmlTag) {
  clienthintsmetatag_inherits(ClientHintsMetaTag, _HtmlTag);

  var _super = clienthintsmetatag_createSuper(ClientHintsMetaTag);

  function ClientHintsMetaTag(options) {
    clienthintsmetatag_classCallCheck(this, ClientHintsMetaTag);

    return _super.call(this, 'meta', void 0, assign_root_assign_default()({
      "http-equiv": "Accept-CH",
      content: "DPR, Viewport-Width, Width"
    }, options));
  }
  /** @override */


  clienthintsmetatag_createClass(ClientHintsMetaTag, [{
    key: "closeTag",
    value: function closeTag() {
      return "";
    }
  }]);

  return ClientHintsMetaTag;
}(htmltag);

;
/* harmony default export */ var clienthintsmetatag = (clienthintsmetatag_ClientHintsMetaTag);
// CONCATENATED MODULE: ./src/util/parse/normalizeToArray.js
function normalizeToArray_toConsumableArray(arr) { return normalizeToArray_arrayWithoutHoles(arr) || normalizeToArray_iterableToArray(arr) || normalizeToArray_unsupportedIterableToArray(arr) || normalizeToArray_nonIterableSpread(); }

function normalizeToArray_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function normalizeToArray_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return normalizeToArray_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return normalizeToArray_arrayLikeToArray(o, minLen); }

function normalizeToArray_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function normalizeToArray_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return normalizeToArray_arrayLikeToArray(arr); }

function normalizeToArray_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


/**
 * @desc normalize elements, support a single element, array or nodelist, always outputs array
 * @param elements<HTMLElement[]>
 * @returns {[]}
 */

function normalizeToArray(elements) {
  if (isArray_root_isArray_default()(elements)) {
    return elements;
  } else if (elements.constructor.name === "NodeList") {
    return normalizeToArray_toConsumableArray(elements); // ensure an array is always returned, even if nodelist
  } else if (isString_root_isString_default()(elements)) {
    return Array.prototype.slice.call(document.querySelectorAll(elements), 0);
  } else {
    return [elements];
  }
}
// CONCATENATED MODULE: ./src/util/features/transparentVideo/mountCloudinaryVideoTag.js
/**
 * @param {HTMLElement} htmlElContainer
 * @param {object} clInstance cloudinary instance
 * @param {string} publicId
 * @param {object} options - TransformationOptions
 * @returns Promise<HTMLElement>
 */
function mountCloudinaryVideoTag(htmlElContainer, clInstance, publicId, options) {
  return new Promise(function (resolve, reject) {
    htmlElContainer.innerHTML = clInstance.videoTag(publicId, options).toHtml(); // All videos under the html container must have a width of 100%, or they might overflow from the container

    var cloudinaryVideoElement = htmlElContainer.querySelector('.cld-transparent-video');
    cloudinaryVideoElement.style.width = '100%';
    resolve(htmlElContainer);
  });
}

/* harmony default export */ var transparentVideo_mountCloudinaryVideoTag = (mountCloudinaryVideoTag);
// CONCATENATED MODULE: ./src/util/transformations/addFlag.js
/**
 * @description - Function will push a flag to incoming options
 * @param {{transformation} | {...transformation}} options - These options are the same options provided to all our SDK methods
 *                           We expect options to either be the transformation itself, or an object containing
 *                           an array of transformations
 *
 * @param {string} flag
 * @returns the mutated options object
 */
function addFlagToOptions(options, flag) {
  // Do we have transformation
  if (options.transformation) {
    options.transformation.push({
      flags: [flag]
    });
  } else {
    // no transformation
    // ensure the flags are extended
    if (!options.flags) {
      options.flags = [];
    }

    if (typeof options.flags === 'string') {
      options.flags = [options.flags];
    }

    options.flags.push(flag);
  }
}

/* harmony default export */ var addFlag = (addFlagToOptions);
// CONCATENATED MODULE: ./src/util/features/transparentVideo/enforceOptionsForTransparentVideo.js


/**
 * @description - Enforce option structure, sets defaults and ensures alpha flag exists
 * @param options {TransformationOptions}
 */

function enforceOptionsForTransparentVideo(options) {
  options.autoplay = true;
  options.muted = true;
  options.controls = false;
  options.max_timeout_ms = options.max_timeout_ms || DEFAULT_TIMEOUT_MS;
  options["class"] = options["class"] || '';
  options["class"] += ' cld-transparent-video';
  options.externalLibraries = options.externalLibraries || {};

  if (!options.externalLibraries.seeThru) {
    options.externalLibraries.seeThru = DEFAULT_EXTERNAL_LIBRARIES.seeThru;
  } // ensure there's an alpha transformation present
  // this is a non documented internal flag


  addFlag(options, 'alpha');
}

/* harmony default export */ var transparentVideo_enforceOptionsForTransparentVideo = (enforceOptionsForTransparentVideo);
// CONCATENATED MODULE: ./src/util/xhr/loadScript.js
/**
 * @description - Given a string URL, this function will load the script and resolve the promise.
 *                The function doesn't resolve any value,
 *                this is not a UMD loader where you can get your library name back.
 * @param scriptURL {string}
 * @param {number} max_timeout_ms - Time to elapse before promise is rejected
 * @param isAlreadyLoaded {boolean} if true, the loadScript resolves immediately
 *                                  this is used for multiple invocations - prevents the script from being loaded multiple times
 * @return {Promise<any | {status:string, message:string}>}
 */
function loadScript(scriptURL, max_timeout_ms, isAlreadyLoaded) {
  return new Promise(function (resolve, reject) {
    if (isAlreadyLoaded) {
      resolve();
    } else {
      var scriptTag = document.createElement('script');
      scriptTag.src = scriptURL;
      var timerID = setTimeout(function () {
        reject({
          status: 'error',
          message: "Timeout loading script ".concat(scriptURL)
        });
      }, max_timeout_ms); // 10 seconds for timeout

      scriptTag.onerror = function () {
        clearTimeout(timerID); // clear timeout reject error

        reject({
          status: 'error',
          message: "Error loading ".concat(scriptURL)
        });
      };

      scriptTag.onload = function () {
        clearTimeout(timerID); // clear timeout reject error

        resolve();
      };

      document.head.appendChild(scriptTag);
    }
  });
}

/* harmony default export */ var xhr_loadScript = (loadScript);
// CONCATENATED MODULE: ./src/util/xhr/getBlobFromURL.js
/**
 * Reject on timeout
 * @param maxTimeoutMS
 * @param reject
 * @returns {number} timerID
 */
function rejectOnTimeout(maxTimeoutMS, reject) {
  return setTimeout(function () {
    reject({
      status: 'error',
      message: 'Timeout loading Blob URL'
    });
  }, maxTimeoutMS);
}
/**
 * @description Converts a URL to a BLOB URL
 * @param {string} urlToLoad
 * @param {number} max_timeout_ms - Time to elapse before promise is rejected
 * @return {Promise<{
 *   status: 'success' | 'error'
 *   message?: string,
 *    payload: {
 *      url: string
 *    }
 * }>}
 */


function getBlobFromURL(urlToLoad, maxTimeoutMS) {
  return new Promise(function (resolve, reject) {
    var timerID = rejectOnTimeout(maxTimeoutMS, reject); // If fetch exists, use it to fetch blob, otherwise use XHR.
    // XHR causes issues on safari 14.1 so we prefer fetch

    var fetchBlob = typeof fetch !== 'undefined' && fetch ? loadUrlUsingFetch : loadUrlUsingXhr;
    fetchBlob(urlToLoad).then(function (blob) {
      resolve({
        status: 'success',
        payload: {
          blobURL: URL.createObjectURL(blob)
        }
      });
    })["catch"](function () {
      reject({
        status: 'error',
        message: 'Error loading Blob URL'
      });
    })["finally"](function () {
      // Clear the timeout timer on fail or success.
      clearTimeout(timerID);
    });
  });
}
/**
 * Use fetch function to fetch file
 * @param urlToLoad
 * @returns {Promise<unknown>}
 */


function loadUrlUsingFetch(urlToLoad) {
  return new Promise(function (resolve, reject) {
    fetch(urlToLoad).then(function (response) {
      response.blob().then(function (blob) {
        resolve(blob);
      });
    })["catch"](function () {
      reject('error');
    });
  });
}
/**
 * Use XHR to fetch file
 * @param urlToLoad
 * @returns {Promise<unknown>}
 */


function loadUrlUsingXhr(urlToLoad) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';

    xhr.onload = function (response) {
      resolve(xhr.response);
    };

    xhr.onerror = function () {
      reject('error');
    };

    xhr.open('GET', urlToLoad, true);
    xhr.send();
  });
}

/* harmony default export */ var xhr_getBlobFromURL = (getBlobFromURL);
// CONCATENATED MODULE: ./src/util/features/transparentVideo/createHiddenVideoTag.js
/**
 * @description Creates a hidden HTMLVideoElement with the specified videoOptions
 * @param {{autoplay, playsinline, loop, muted, poster, blobURL, videoURL }} videoOptions
 * @param {boolean} videoOptions.autoplay - autoplays the video if true
 * @param {string} videoOptions.blobURL - the blobURL to set as video.src
 * @param {string} videoOptions.videoURL - the original videoURL the user created (with transformations)
 * @return {HTMLVideoElement}
 */
function createHiddenVideoTag(videoOptions) {
  var autoplay = videoOptions.autoplay,
      playsinline = videoOptions.playsinline,
      loop = videoOptions.loop,
      muted = videoOptions.muted,
      poster = videoOptions.poster,
      blobURL = videoOptions.blobURL,
      videoURL = videoOptions.videoURL;
  var el = document.createElement('video');
  el.style.visibility = 'hidden';
  el.position = 'absolute';
  el.x = 0;
  el.y = 0;
  el.src = blobURL;
  el.setAttribute('data-video-url', videoURL); // for debugging/testing

  autoplay && el.setAttribute('autoplay', autoplay);
  playsinline && el.setAttribute('playsinline', playsinline);
  loop && el.setAttribute('loop', loop);
  muted && el.setAttribute('muted', muted);
  muted && (el.muted = muted); // this is also needed for autoplay, on top of setAttribute

  poster && el.setAttribute('poster', poster); // Free memory at the end of the file loading.

  el.onload = function () {
    URL.revokeObjectURL(blobURL);
  };

  return el;
}

/* harmony default export */ var transparentVideo_createHiddenVideoTag = (createHiddenVideoTag);
// CONCATENATED MODULE: ./src/util/features/transparentVideo/instantiateSeeThru.js
/**
 * @description This function creates a new instanc eof seeThru (seeThru.create()) and returns a promise of the seeThru instance
 * @param {HTMLVideoElement} videoElement
 * @param {number} max_timeout_ms - Time to elapse before promise is rejected
 * @param {string} customClass - A classname to be added to the canvas element created by seeThru
 * @param {boolean} autoPlay
 * @return {Promise<any>} SeeThru instance or rejection error
 */
function instantiateSeeThru(videoElement, max_timeout_ms, customClass, autoPlay) {
  var _window = window,
      seeThru = _window.seeThru,
      setTimeout = _window.setTimeout,
      clearTimeout = _window.clearTimeout;
  return new Promise(function (resolve, reject) {
    var timerID = setTimeout(function () {
      reject({
        status: 'error',
        message: 'Timeout instantiating seeThru instance'
      });
    }, max_timeout_ms);

    if (seeThru) {
      var seeThruInstance = seeThru.create(videoElement).ready(function () {
        // clear timeout reject error
        clearTimeout(timerID); // force container width, else the canvas can overflow out

        var canvasElement = seeThruInstance.getCanvas();
        canvasElement.style.width = '100%';
        canvasElement.className += ' ' + customClass; // start the video if autoplay is set

        if (autoPlay) {
          seeThruInstance.play();
        }

        resolve(seeThruInstance);
      });
    } else {
      reject({
        status: 'error',
        message: 'Error instantiating seeThru instance'
      });
    }
  });
}

/* harmony default export */ var transparentVideo_instantiateSeeThru = (instantiateSeeThru);
// CONCATENATED MODULE: ./src/util/features/transparentVideo/mountSeeThruCanvasTag.js




/**
 *
 * @param {HTMLElement} htmlElContainer
 * @param {string} videoURL
 * @param {TransformationOptions} options
 * @return {Promise<any>}
 */

function mountSeeThruCanvasTag(htmlElContainer, videoURL, options) {
  var poster = options.poster,
      autoplay = options.autoplay,
      playsinline = options.playsinline,
      loop = options.loop,
      muted = options.muted;
  videoURL = videoURL + '.mp4'; // seeThru always uses mp4

  return new Promise(function (resolve, reject) {
    xhr_loadScript(options.externalLibraries.seeThru, options.max_timeout_ms, window.seeThru).then(function () {
      xhr_getBlobFromURL(videoURL, options.max_timeout_ms).then(function (_ref) {
        var payload = _ref.payload;
        var videoElement = transparentVideo_createHiddenVideoTag({
          blobURL: payload.blobURL,
          videoURL: videoURL,
          // for debugging/testing
          poster: poster,
          autoplay: autoplay,
          playsinline: playsinline,
          loop: loop,
          muted: muted
        });
        htmlElContainer.appendChild(videoElement);
        transparentVideo_instantiateSeeThru(videoElement, options.max_timeout_ms, options["class"], options.autoplay).then(function () {
          resolve(htmlElContainer);
        })["catch"](function (err) {
          reject(err);
        }); // catch for getBlobFromURL()
      })["catch"](function (_ref2) {
        var status = _ref2.status,
            message = _ref2.message;
        reject({
          status: status,
          message: message
        });
      }); // catch for loadScript()
    })["catch"](function (_ref3) {
      var status = _ref3.status,
          message = _ref3.message;
      reject({
        status: status,
        message: message
      });
    });
  });
}

/* harmony default export */ var transparentVideo_mountSeeThruCanvasTag = (mountSeeThruCanvasTag);
// CONCATENATED MODULE: ./src/util/features/transparentVideo/checkSupportForTransparency.js
/**
 * @return {Promise<boolean>} - Whether the browser supports transparent videos or not
 */


function checkSupportForTransparency() {
  return new Promise(function (resolve, reject) {
    // Resolve early for safari.
    // Currently (29 December 2021) Safari can play webm/vp9,
    // but it does not support transparent video in the format we're outputting
    if (isSafari()) {
      resolve(false);
    }

    var video = document.createElement('video');
    var canPlay = video.canPlayType && video.canPlayType('video/webm; codecs="vp9"');
    resolve(canPlay === 'maybe' || canPlay === 'probably');
  });
}

/* harmony default export */ var transparentVideo_checkSupportForTransparency = (checkSupportForTransparency);
// CONCATENATED MODULE: ./src/cloudinary.js
function cloudinary_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function cloudinary_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function cloudinary_createClass(Constructor, protoProps, staticProps) { if (protoProps) cloudinary_defineProperties(Constructor.prototype, protoProps); if (staticProps) cloudinary_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


var applyBreakpoints, closestAbove, defaultBreakpoints, cloudinary_findContainerWidth, cloudinary_maxWidth, updateDpr;









 //






defaultBreakpoints = function defaultBreakpoints(width) {
  var steps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  return steps * Math.ceil(width / steps);
};

closestAbove = function closestAbove(list, value) {
  var i;
  i = list.length - 2;

  while (i >= 0 && list[i] >= value) {
    i--;
  }

  return list[i + 1];
};

applyBreakpoints = function applyBreakpoints(tag, width, steps, options) {
  var ref, ref1, ref2, responsive_use_breakpoints;
  responsive_use_breakpoints = (ref = (ref1 = (ref2 = options['responsive_use_breakpoints']) != null ? ref2 : options['responsive_use_stoppoints']) != null ? ref1 : this.config('responsive_use_breakpoints')) != null ? ref : this.config('responsive_use_stoppoints');

  if (!responsive_use_breakpoints || responsive_use_breakpoints === 'resize' && !options.resizing) {
    return width;
  } else {
    return this.calc_breakpoint(tag, width, steps);
  }
};

cloudinary_findContainerWidth = function findContainerWidth(element) {
  var containerWidth, style;
  containerWidth = 0;

  while ((element = element != null ? element.parentNode : void 0) instanceof Element && !containerWidth) {
    style = window.getComputedStyle(element);

    if (!/^inline/.test(style.display)) {
      containerWidth = lodash_width(element);
    }
  }

  return containerWidth;
};

updateDpr = function updateDpr(dataSrc, roundDpr) {
  return dataSrc.replace(/\bdpr_(1\.0|auto)\b/g, 'dpr_' + this.device_pixel_ratio(roundDpr));
};

cloudinary_maxWidth = function maxWidth(requiredWidth, tag) {
  var imageWidth;
  imageWidth = lodash_getData(tag, 'width') || 0;

  if (requiredWidth > imageWidth) {
    imageWidth = requiredWidth;
    lodash_setData(tag, 'width', requiredWidth);
  }

  return imageWidth;
};

var cloudinary_Cloudinary = /*#__PURE__*/function () {
  /**
   * Creates a new Cloudinary instance.
   * @class Cloudinary
   * @classdesc Main class for accessing Cloudinary functionality.
   * @param {Object} options - A {@link Configuration} object for globally configuring Cloudinary account settings.
   * @example<br/>
   *  var cl = new cloudinary.Cloudinary( { cloud_name: "mycloud"});<br/>
   *  var imgTag = cl.image("myPicID");
   * @see <a href="https://cloudinary.com/documentation/solution_overview#configuration_parameters" target="_blank">
   *  Available configuration options</a>
   */
  function Cloudinary(options) {
    cloudinary_classCallCheck(this, Cloudinary);

    var configuration;
    this.devicePixelRatioCache = {};
    this.responsiveConfig = {};
    this.responsiveResizeInitialized = false;
    configuration = new src_configuration(options); // Provided for backward compatibility

    this.config = function (newConfig, newValue) {
      return configuration.config(newConfig, newValue);
    };
    /**
     * Use \<meta\> tags in the document to configure this `cloudinary` instance.
     * @return This {Cloudinary} instance for chaining.
     */


    this.fromDocument = function () {
      configuration.fromDocument();
      return this;
    };
    /**
     * Use environment variables to configure this `cloudinary` instance.
     * @return This {Cloudinary} instance for chaining.
     */


    this.fromEnvironment = function () {
      configuration.fromEnvironment();
      return this;
    };
    /**
     * Initializes the configuration of this `cloudinary` instance.
     *  This is a convenience method that invokes both {@link Configuration#fromEnvironment|fromEnvironment()}
     *  (Node.js environment only) and {@link Configuration#fromDocument|fromDocument()}.
     *  It first tries to retrieve the configuration from the environment variable.
     *  If not available, it tries from the document meta tags.
     * @function Cloudinary#init
     * @see Configuration#init
     * @return This {Cloudinary} instance for chaining.
     */


    this.init = function () {
      configuration.init();
      return this;
    };
  }
  /**
   * Convenience constructor
   * @param {Object} options
   * @return {Cloudinary}
   * @example cl = cloudinary.Cloudinary.new( { cloud_name: "mycloud"})
   */


  cloudinary_createClass(Cloudinary, [{
    key: "url",
    value:
    /**
     * Generates a URL for any asset in your Media library.
     * @function Cloudinary#url
     * @param {string} publicId - The public ID of the media asset.
     * @param {Object} [options] - The {@link Transformation} parameters to include in the URL.
     * @param {type} [options.type='upload'] - The asset's storage type.
     *  For details on all fetch types, see
     * <a href="https://cloudinary.com/documentation/image_transformations#fetching_images_from_remote_locations"
     *  target="_blank">Fetch types</a>.
     * @param {resourceType} [options.resource_type='image'] - The type of asset. Possible values:<br/>
     *  - `image`<br/>
     *  - `video`<br/>
     *  - `raw`
     * @return {string} The media asset URL.
     * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
     *  Available image transformations</a>
     * @see <a href="https://cloudinary.com/documentation/video_transformation_reference" target="_blank">
     *  Available video transformations</a>
     */
    function url(publicId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return url_url(publicId, options, this.config());
    }
    /**
     * Generates a video asset URL.
     * @function Cloudinary#video_url
     * @param {string} publicId - The public ID of the video.
     * @param {Object} [options] - The {@link Transformation} parameters to include in the URL.
     * @param {type} [options.type='upload'] - The asset's storage type.
     *  For details on all fetch types, see
     *  <a href="https://cloudinary.com/documentation/image_transformations#fetching_images_from_remote_locations"
     *  target="_blank">Fetch types</a>.
     * @return {string} The video URL.
     * @see <a href="https://cloudinary.com/documentation/video_transformation_reference"
     *  target="_blank">Available video transformations</a>
     */

  }, {
    key: "video_url",
    value: function video_url(publicId, options) {
      options = assign_root_assign_default()({
        resource_type: 'video'
      }, options);
      return this.url(publicId, options);
    }
    /**
     * Generates a URL for an image intended to be used as a thumbnail for the specified video.
     *  Identical to {@link Cloudinary#url|url}, except that the `resource_type` is `video`
     *  and the default `format` is `jpg`.
     * @function Cloudinary#video_thumbnail_url
     * @param {string} publicId -  The unique identifier of the video from which you want to generate a thumbnail image.
     * @param {Object} [options] - The image {@link Transformation} parameters to apply to the thumbnail.
     * In addition to standard image transformations, you can also use the `start_offset` transformation parameter
     * to instruct Cloudinary to generate the thumbnail from a frame other than the middle frame of the video.
     * For details, see
     * <a href="https://cloudinary.com/documentation/video_manipulation_and_delivery#generating_video_thumbnails"
     * target="_blank">Generating video thumbnails</a> in the Cloudinary documentation.
     * @param {type} [options.type='upload'] - The asset's storage type.
     * @return {string} The URL of the video thumbnail image.
     * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
     *  Available image transformations</a>
     */

  }, {
    key: "video_thumbnail_url",
    value: function video_thumbnail_url(publicId, options) {
      options = assign_root_assign_default()({}, DEFAULT_POSTER_OPTIONS, options);
      return this.url(publicId, options);
    }
    /**
     * Generates a string representation of the specified transformation options.
     * @function Cloudinary#transformation_string
     * @param {Object} options - The {@link Transformation} options.
     * @returns {string} The transformation string.
     * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
     *  Available image transformations</a>
     * @see <a href="https://cloudinary.com/documentation/video_transformation_reference" target="_blank">
     *  Available video transformations</a>
     */

  }, {
    key: "transformation_string",
    value: function transformation_string(options) {
      return new src_transformation(options).serialize();
    }
    /**
     * Generates an image tag.
     * @function Cloudinary#image
     * @param {string} publicId - The public ID of the image.
     * @param {Object} options - The {@link Transformation} parameters, {@link Configuration} parameters,
     *  and standard HTML &lt;img&gt; tag attributes to apply to the image tag.
     * @return {HTMLImageElement} An image tag DOM element.
     * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
     *  Available image transformations</a>
     * @see <a href="https://cloudinary.com/documentation/solution_overview#configuration_parameters"
     *  target="_blank">Available configuration options</a>
     */

  }, {
    key: "image",
    value: function image(publicId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var client_hints, img, ref;
      img = this.imageTag(publicId, options);
      client_hints = (ref = options.client_hints != null ? options.client_hints : this.config('client_hints')) != null ? ref : false;

      if (options.src == null && !client_hints) {
        // src must be removed before creating the DOM element to avoid loading the image
        img.setAttr("src", '');
      }

      img = img.toDOM();

      if (!client_hints) {
        // cache the image src
        lodash_setData(img, 'src-cache', this.url(publicId, options)); // set image src taking responsiveness in account

        this.cloudinary_update(img, options);
      }

      return img;
    }
    /**
     * Creates a new ImageTag instance using the configuration defined for this `cloudinary` instance.
     * @function Cloudinary#imageTag
     * @param {string} publicId - The public ID of the image.
     * @param {Object} [options] - The {@link Transformation} parameters, {@link Configuration} parameters,
     *  and standard HTML &lt;img&gt; tag attributes to apply to the image tag.
     * @return {ImageTag} An ImageTag instance that is attached (chained) to this Cloudinary instance.
     * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
     *  Available image transformations</a>
     * @see <a href="https://cloudinary.com/documentation/solution_overview#configuration_parameters"
     *  target="_blank">Available configuration options</a>
     */

  }, {
    key: "imageTag",
    value: function imageTag(publicId, options) {
      var tag;
      tag = new imagetag(publicId, this.config());
      tag.transformation().fromOptions(options);
      return tag;
    }
    /**
     * Creates a new PictureTag instance, configured using this `cloudinary` instance.
     * @function Cloudinary#PictureTag
     * @param {string} publicId - the public ID of the resource
     * @param {Object} options - additional options to pass to the new ImageTag instance
     * @param {Array<Object>} sources - the sources definitions
     * @return {PictureTag} A PictureTag that is attached (chained) to this Cloudinary instance
     */

  }, {
    key: "pictureTag",
    value: function pictureTag(publicId, options, sources) {
      var tag;
      tag = new picturetag(publicId, this.config(), sources);
      tag.transformation().fromOptions(options);
      return tag;
    }
    /**
     * Creates a new SourceTag instance, configured using this `cloudinary` instance.
     * @function Cloudinary#SourceTag
     * @param {string} publicId - the public ID of the resource.
     * @param {Object} options - additional options to pass to the new instance.
     * @return {SourceTag} A SourceTag that is attached (chained) to this Cloudinary instance
     */

  }, {
    key: "sourceTag",
    value: function sourceTag(publicId, options) {
      var tag;
      tag = new sourcetag(publicId, this.config());
      tag.transformation().fromOptions(options);
      return tag;
    }
    /**
     * Generates a video thumbnail URL from the specified remote video and includes it in an image tag.
     * @function Cloudinary#video_thumbnail
     * @param {string} publicId - The unique identifier of the video from the relevant video site.
     *  Additionally, either append the image extension type to the identifier value or set
     *  the image delivery format in the 'options' parameter using the 'format' transformation option.
     *  For example, a YouTube video might have the identifier: 'o-urnlaJpOA.jpg'.
     * @param {Object} [options] - The {@link Transformation} parameters to apply.
     * @return {HTMLImageElement} An HTML image tag element
     * @see <a href="https://cloudinary.com/documentation/video_transformation_reference" target="_blank">
     *  Available video transformations</a>
     * @see <a href="https://cloudinary.com/documentation/solution_overview#configuration_parameters"
     *  target="_blank">Available configuration options</a>
     */

  }, {
    key: "video_thumbnail",
    value: function video_thumbnail(publicId, options) {
      return this.image(publicId, merge_root_merge_default()({}, DEFAULT_POSTER_OPTIONS, options));
    }
    /**
     * Fetches a facebook profile image and delivers it in an image tag element.
     * @function Cloudinary#facebook_profile_image
     * @param {string} publicId - The Facebook numeric ID. Additionally, either append the image extension type
     *  to the ID or set the image delivery format in the 'options' parameter using the 'format' transformation option.
     * @param {Object} [options] - The {@link Transformation} parameters, {@link Configuration} parameters,
     *  and standard HTML &lt;img&gt; tag attributes to apply to the image tag.
     * @return {HTMLImageElement} An image tag element.
     * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
     *  Available image transformations</a>
     * @see <a href="https://cloudinary.com/documentation/solution_overview#configuration_parameters"
     *  target="_blank">Available configuration options</a>
     */

  }, {
    key: "facebook_profile_image",
    value: function facebook_profile_image(publicId, options) {
      return this.image(publicId, assign_root_assign_default()({
        type: 'facebook'
      }, options));
    }
    /**
     * Fetches a Twitter profile image by ID and delivers it in an image tag element.
     * @function Cloudinary#twitter_profile_image
     * @param {string} publicId - The Twitter numeric ID. Additionally, either append the image extension type
     *  to the ID or set the image delivery format in the 'options' parameter using the 'format' transformation option.
     * @param {Object} [options] - The {@link Transformation} parameters, {@link Configuration} parameters,
     *  and standard HTML &lt;img&gt; tag attributes to apply to the image tag.
     * @return {HTMLImageElement} An image tag element.
     * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
     *  Available image transformations</a>
     * @see <a href="https://cloudinary.com/documentation/solution_overview#configuration_parameters"
     *  target="_blank">Available configuration options</a>
     */

  }, {
    key: "twitter_profile_image",
    value: function twitter_profile_image(publicId, options) {
      return this.image(publicId, assign_root_assign_default()({
        type: 'twitter'
      }, options));
    }
    /**
     * Fetches a Twitter profile image by name and delivers it in an image tag element.
     * @function Cloudinary#twitter_name_profile_image
     * @param {string} publicId - The Twitter screen name. Additionally, either append the image extension type
     *  to the screen name or set the image delivery format in the 'options' parameter using the 'format' transformation option.
     * @param {Object} [options] - The {@link Transformation} parameters, {@link Configuration} parameters,
     *  and standard HTML &lt;img&gt; tag attributes to apply to the image tag.
     * @return {HTMLImageElement} An image tag element.
     * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
     *  Available image transformations</a>
     * @see <a href="https://cloudinary.com/documentation/solution_overview#configuration_parameters"
     *  target="_blank">Available configuration options</a>
     */

  }, {
    key: "twitter_name_profile_image",
    value: function twitter_name_profile_image(publicId, options) {
      return this.image(publicId, assign_root_assign_default()({
        type: 'twitter_name'
      }, options));
    }
    /**
     * Fetches a Gravatar profile image and delivers it in an image tag element.
     * @function Cloudinary#gravatar_image
     * @param {string} publicId - The calculated hash for the Gravatar email address.
     *  Additionally, either append the image extension type to the screen name or set the image delivery format
     *  in the 'options' parameter using the 'format' transformation option.
     * @param {Object} [options] - The {@link Transformation} parameters, {@link Configuration} parameters,
     *  and standard HTML &lt;img&gt; tag attributes to apply to the image tag.
     * @return {HTMLImageElement} An image tag element.
     * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
     *  Available image transformations</a>
     * @see <a href="https://cloudinary.com/documentation/solution_overview#configuration_parameters"
     *  target="_blank">Available configuration options</a>
     */

  }, {
    key: "gravatar_image",
    value: function gravatar_image(publicId, options) {
      return this.image(publicId, assign_root_assign_default()({
        type: 'gravatar'
      }, options));
    }
    /**
     * Fetches an image from a remote URL and delivers it in an image tag element.
     * @function Cloudinary#fetch_image
     * @param {string} publicId - The full URL of the image to fetch, including the extension.
     * @param {Object} [options] - The {@link Transformation} parameters, {@link Configuration} parameters,
     *  and standard HTML &lt;img&gt; tag attributes to apply to the image tag.
     * @return {HTMLImageElement} An image tag element.
     * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
     *  Available image transformations</a>
     * @see <a href="https://cloudinary.com/documentation/solution_overview#configuration_parameters"
     *  target="_blank">Available configuration options</a>
     */

  }, {
    key: "fetch_image",
    value: function fetch_image(publicId, options) {
      return this.image(publicId, assign_root_assign_default()({
        type: 'fetch'
      }, options));
    }
    /**
     * Generates a video tag.
     * @function Cloudinary#video
     * @param {string} publicId - The public ID of the video.
     * @param {Object} [options] - The {@link Transformation} parameters, {@link Configuration} parameters,
     *  and standard HTML &lt;img&gt; tag attributes to apply to the image tag.
     * @return {HTMLVideoElement} A video tag DOM element.
     * @see <a href="https://cloudinary.com/documentation/video_transformation_reference" target="_blank">
     *  Available video transformations</a>
     * @see <a href="https://cloudinary.com/documentation/solution_overview#configuration_parameters"
     *  target="_blank">Available configuration options</a>
     */

  }, {
    key: "video",
    value: function video(publicId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.videoTag(publicId, options).toHtml();
    }
    /**
     * Creates a new VideoTag instance using the configuration defined for this `cloudinary` instance.
     * @function Cloudinary#videoTag
     * @param {string} publicId - The public ID of the video.
     * @param {Object} options - The {@link Transformation} parameters, {@link Configuration} parameters,
     *  and standard HTML &lt;img&gt; tag attributes to apply to the image tag.
     * @return {VideoTag} A VideoTag that is attached (chained) to this `cloudinary` instance.
     * @see <a href="https://cloudinary.com/documentation/video_transformation_reference" target="_blank">
     *  Available video transformations</a>
     * @see <a href="https://cloudinary.com/documentation/solution_overview#configuration_parameters"
     *  target="_blank">Available configuration options</a>
     */

  }, {
    key: "videoTag",
    value: function videoTag(publicId, options) {
      options = defaults({}, options, this.config());
      return new videotag(publicId, options);
    }
    /**
     * Generates a sprite PNG image that contains all images with the specified tag and the corresponding css file.
     * @function Cloudinary#sprite_css
     * @param {string} publicId - The tag on which to base the sprite image.
     * @param {Object} [options] - The {@link Transformation} parameters to include in the URL.
     * @return {string} The URL of the generated CSS file. The sprite image has the same URL, but with a PNG extension.
     * @see <a href="https://cloudinary.com/documentation/sprite_generation" target="_blank">
     *  Sprite generation</a>
     * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
     *  Available image transformations</a>
     */

  }, {
    key: "sprite_css",
    value: function sprite_css(publicId, options) {
      options = assign_root_assign_default()({
        type: 'sprite'
      }, options);

      if (!publicId.match(/.css$/)) {
        options.format = 'css';
      }

      return this.url(publicId, options);
    }
    /**
     * Initializes responsive image behavior for all image tags with the 'cld-responsive'
     *  (or other defined {@link Cloudinary#responsive|responsive} class).<br/>
     *  This method should be invoked after the page has loaded.<br/>
     *  <b>Note</b>: Calls {@link Cloudinary#cloudinary_update|cloudinary_update} to modify image tags.
     * @function Cloudinary#responsive
     * @param {Object} options
     * @param {String} [options.responsive_class='cld-responsive'] - An alternative class
     *  to locate the relevant &lt;img&gt; tags.
     * @param {number} [options.responsive_debounce=100] - The debounce interval in milliseconds.
     * @param {boolean} [bootstrap=true] If true, processes the &lt;img&gt; tags by calling
     *  {@link Cloudinary#cloudinary_update|cloudinary_update}. When false, the tags are processed
     *  only after a resize event.
     * @see {@link Cloudinary#cloudinary_update|cloudinary_update} for additional configuration parameters
     * @see <a href="https://cloudinary.com/documentation/responsive_images#automating_responsive_images_with_javascript"
     *  target="_blank">Automating responsive images with JavaScript</a>
     * @return {function} that when called, removes the resize EventListener added by this function
     */

  }, {
    key: "responsive",
    value: function responsive(options) {
      var _this = this;

      var bootstrap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var ref, ref1, ref2, responsiveClass, responsiveResize, timeout;
      this.responsiveConfig = merge_root_merge_default()(this.responsiveConfig || {}, options);
      responsiveClass = (ref = this.responsiveConfig.responsive_class) != null ? ref : this.config('responsive_class');

      if (bootstrap) {
        this.cloudinary_update("img.".concat(responsiveClass, ", img.cld-hidpi"), this.responsiveConfig);
      }

      responsiveResize = (ref1 = (ref2 = this.responsiveConfig.responsive_resize) != null ? ref2 : this.config('responsive_resize')) != null ? ref1 : true;

      if (responsiveResize && !this.responsiveResizeInitialized) {
        this.responsiveConfig.resizing = this.responsiveResizeInitialized = true;
        timeout = null;

        var makeResponsive = function makeResponsive() {
          var debounce, ref3, ref4, reset, run, wait, waitFunc;
          debounce = (ref3 = (ref4 = _this.responsiveConfig.responsive_debounce) != null ? ref4 : _this.config('responsive_debounce')) != null ? ref3 : 100;

          reset = function reset() {
            if (timeout) {
              clearTimeout(timeout);
              timeout = null;
            }
          };

          run = function run() {
            return _this.cloudinary_update("img.".concat(responsiveClass), _this.responsiveConfig);
          };

          waitFunc = function waitFunc() {
            reset();
            return run();
          };

          wait = function wait() {
            reset();
            timeout = setTimeout(waitFunc, debounce);
          };

          if (debounce) {
            return wait();
          } else {
            return run();
          }
        };

        window.addEventListener('resize', makeResponsive);
        return function () {
          return window.removeEventListener('resize', makeResponsive);
        };
      }
    }
    /**
     * @function Cloudinary#calc_breakpoint
     * @private
     * @ignore
     */

  }, {
    key: "calc_breakpoint",
    value: function calc_breakpoint(element, width, steps) {
      var breakpoints = lodash_getData(element, 'breakpoints') || lodash_getData(element, 'stoppoints') || this.config('breakpoints') || this.config('stoppoints') || defaultBreakpoints;

      if (isFunction_root_isFunction_default()(breakpoints)) {
        return breakpoints(width, steps);
      } else {
        if (isString_root_isString_default()(breakpoints)) {
          breakpoints = breakpoints.split(',').map(function (point) {
            return parseInt(point);
          }).sort(function (a, b) {
            return a - b;
          });
        }

        return closestAbove(breakpoints, width);
      }
    }
    /**
     * @function Cloudinary#calc_stoppoint
     * @deprecated Use {@link calc_breakpoint} instead.
     * @private
     * @ignore
     */

  }, {
    key: "calc_stoppoint",
    value: function calc_stoppoint(element, width, steps) {
      return this.calc_breakpoint(element, width, steps);
    }
    /**
     * @function Cloudinary#device_pixel_ratio
     * @private
     */

  }, {
    key: "device_pixel_ratio",
    value: function device_pixel_ratio(roundDpr) {
      roundDpr = roundDpr == null ? true : roundDpr;
      var dpr = (typeof window !== "undefined" && window !== null ? window.devicePixelRatio : void 0) || 1;

      if (roundDpr) {
        dpr = Math.ceil(dpr);
      }

      if (dpr <= 0 || dpr === 0 / 0) {
        dpr = 1;
      }

      var dprString = dpr.toString();

      if (dprString.match(/^\d+$/)) {
        dprString += '.0';
      }

      return dprString;
    }
    /**
    * Applies responsiveness to all <code>&lt;img&gt;</code> tags under each relevant node
    *  (regardless of whether the tag contains the {@link Cloudinary#responsive|responsive} class).
    * @param {Element[]} nodes The parent nodes where you want to search for &lt;img&gt; tags.
    * @param {Object} [options] The {@link Cloudinary#cloudinary_update|cloudinary_update} options to apply.
    * @see <a href="https://cloudinary.com/documentation/image_transformation_reference"
    *  target="_blank">Available image transformations</a>
    * @function Cloudinary#processImageTags
    */

  }, {
    key: "processImageTags",
    value: function processImageTags(nodes, options) {
      if (isEmpty(nodes)) {
        // similar to `$.fn.cloudinary`
        return this;
      }

      options = defaults({}, options || {}, this.config());
      var images = nodes.filter(function (node) {
        return /^img$/i.test(node.tagName);
      }).map(function (node) {
        var imgOptions = assign_root_assign_default()({
          width: node.getAttribute('width'),
          height: node.getAttribute('height'),
          src: node.getAttribute('src')
        }, options);
        var publicId = imgOptions['source'] || imgOptions['src'];
        delete imgOptions['source'];
        delete imgOptions['src'];
        var attr = new src_transformation(imgOptions).toHtmlAttributes();
        lodash_setData(node, 'src-cache', url_url(publicId, imgOptions));
        node.setAttribute('width', attr.width);
        node.setAttribute('height', attr.height);
        return node;
      });
      this.cloudinary_update(images, options);
      return this;
    }
    /**
    * Updates the dpr (for `dpr_auto`) and responsive (for `w_auto`) fields according to
    *  the current container size and the device pixel ratio.<br/>
    *  <b>Note</b>:`w_auto` is updated only for images marked with the `cld-responsive`
    *  (or other defined {@link Cloudinary#responsive|responsive}) class.
    * @function Cloudinary#cloudinary_update
    * @param {(Array|string|NodeList)} elements - The HTML image elements to modify.
    * @param {Object} options
    * @param {boolean|string} [options.responsive_use_breakpoints=true]
    * Possible values:<br/>
    *  - `true`: Always use breakpoints for width.<br/>
    *  - `resize`: Use exact width on first render and breakpoints on resize.<br/>
    *  - `false`: Always use exact width.
    * @param {boolean} [options.responsive] - If `true`, enable responsive on all specified elements.
    *  Alternatively, you can define specific HTML elements to modify by adding the `cld-responsive`
    *  (or other custom-defined {@link Cloudinary#responsive|responsive_class}) class to those elements.
    * @param {boolean} [options.responsive_preserve_height] - If `true`, original css height is preserved.
    *  Should be used only if the transformation supports different aspect ratios.
    */

  }, {
    key: "cloudinary_update",
    value: function cloudinary_update(elements, options) {
      var _this2 = this;

      var containerWidth, dataSrc, match, ref4, requiredWidth;

      if (elements === null) {
        return this;
      }

      if (options == null) {
        options = {};
      }

      var responsive = options.responsive != null ? options.responsive : this.config('responsive');
      elements = normalizeToArray(elements);
      var responsiveClass;

      if (this.responsiveConfig && this.responsiveConfig.responsive_class != null) {
        responsiveClass = this.responsiveConfig.responsive_class;
      } else if (options.responsive_class != null) {
        responsiveClass = options.responsive_class;
      } else {
        responsiveClass = this.config('responsive_class');
      }

      var roundDpr = options.round_dpr != null ? options.round_dpr : this.config('round_dpr');
      elements.forEach(function (tag) {
        if (/img/i.test(tag.tagName)) {
          var setUrl = true;

          if (responsive) {
            lodash_addClass(tag, responsiveClass);
          }

          dataSrc = lodash_getData(tag, 'src-cache') || lodash_getData(tag, 'src');

          if (!isEmpty(dataSrc)) {
            // Update dpr according to the device's devicePixelRatio
            dataSrc = updateDpr.call(_this2, dataSrc, roundDpr);

            if (htmltag.isResponsive(tag, responsiveClass)) {
              containerWidth = cloudinary_findContainerWidth(tag);

              if (containerWidth !== 0) {
                if (/w_auto:breakpoints/.test(dataSrc)) {
                  requiredWidth = cloudinary_maxWidth(containerWidth, tag);

                  if (requiredWidth) {
                    dataSrc = dataSrc.replace(/w_auto:breakpoints([_0-9]*)(:[0-9]+)?/, "w_auto:breakpoints$1:".concat(requiredWidth));
                  } else {
                    setUrl = false;
                  }
                } else {
                  match = /w_auto(:(\d+))?/.exec(dataSrc);

                  if (match) {
                    requiredWidth = applyBreakpoints.call(_this2, tag, containerWidth, match[2], options);
                    requiredWidth = cloudinary_maxWidth(requiredWidth, tag);

                    if (requiredWidth) {
                      dataSrc = dataSrc.replace(/w_auto[^,\/]*/g, "w_".concat(requiredWidth));
                    } else {
                      setUrl = false;
                    }
                  }
                }

                lodash_removeAttribute(tag, 'width');

                if (!options.responsive_preserve_height) {
                  lodash_removeAttribute(tag, 'height');
                }
              } else {
                // Container doesn't know the size yet - usually because the image is hidden or outside the DOM.
                setUrl = false;
              }
            }

            var isLazyLoading = options.loading === 'lazy' && !_this2.isNativeLazyLoadSupported() && _this2.isLazyLoadSupported() && !elements[0].getAttribute('src');

            if (setUrl || isLazyLoading) {
              // If data-width exists, set width to be data-width
              _this2.setAttributeIfExists(elements[0], 'width', 'data-width');
            }

            if (setUrl && !isLazyLoading) {
              lodash_setAttribute(tag, 'src', dataSrc);
            }
          }
        }
      });
      return this;
    }
    /**
     * Sets element[toAttribute] = element[fromAttribute] if element[fromAttribute] is set
     * @param element
     * @param toAttribute
     * @param fromAttribute
     */

  }, {
    key: "setAttributeIfExists",
    value: function setAttributeIfExists(element, toAttribute, fromAttribute) {
      var attributeValue = element.getAttribute(fromAttribute);

      if (attributeValue != null) {
        lodash_setAttribute(element, toAttribute, attributeValue);
      }
    }
    /**
     * Returns true if Intersection Observer API is supported
     * @returns {boolean}
     */

  }, {
    key: "isLazyLoadSupported",
    value: function isLazyLoadSupported() {
      return window && 'IntersectionObserver' in window;
    }
    /**
     * Returns true if using Chrome
     * @returns {boolean}
     */

  }, {
    key: "isNativeLazyLoadSupported",
    value: function isNativeLazyLoadSupported() {
      return 'loading' in HTMLImageElement.prototype;
    }
    /**
     * Returns a {@link Transformation} object, initialized with the specified options, for chaining purposes.
     * @function Cloudinary#transformation
     * @param {Object} options The {@link Transformation} options to apply.
     * @return {Transformation}
     * @see Transformation
     * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
     *  Available image transformations</a>
     * @see <a href="https://cloudinary.com/documentation/video_transformation_reference" target="_blank">
     *  Available video transformations</a>
     */

  }, {
    key: "transformation",
    value: function transformation(options) {
      return src_transformation["new"](this.config()).fromOptions(options).setParent(this);
    }
    /**
     * @description This function will append a TransparentVideo element to the htmlElContainer passed to it.
     *              TransparentVideo can either be an HTML Video tag, or an HTML Canvas Tag.
     * @param {HTMLElement} htmlElContainer
     * @param {string} publicId
     * @param {object} options The {@link TransparentVideoOptions} options to apply - Extends TransformationOptions
     *                 options.playsinline    - HTML Video Tag's native playsinline - passed to video element.
     *                 options.poster         - HTML Video Tag's native poster - passed to video element.
     *                 options.loop           - HTML Video Tag's native loop - passed to video element.
     *                 options?.externalLibraries = { [key: string]: string} - map of external libraries to be loaded
     * @return {Promise<HTMLElement | {status:string, message:string}>}
     */

  }, {
    key: "injectTransparentVideoElement",
    value: function injectTransparentVideoElement(htmlElContainer, publicId) {
      var _this3 = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (resolve, reject) {
        if (!htmlElContainer) {
          reject({
            status: 'error',
            message: 'Expecting htmlElContainer to be HTMLElement'
          });
        }

        transparentVideo_enforceOptionsForTransparentVideo(options);

        var videoURL = _this3.video_url(publicId, options);

        transparentVideo_checkSupportForTransparency().then(function (isNativelyTransparent) {
          var mountPromise;

          if (isNativelyTransparent) {
            mountPromise = transparentVideo_mountCloudinaryVideoTag(htmlElContainer, _this3, publicId, options);
            resolve(htmlElContainer);
          } else {
            mountPromise = transparentVideo_mountSeeThruCanvasTag(htmlElContainer, videoURL, options);
          }

          mountPromise.then(function () {
            resolve(htmlElContainer);
          })["catch"](function (_ref) {
            var status = _ref.status,
                message = _ref.message;
            reject({
              status: status,
              message: message
            });
          }); // catch for checkSupportForTransparency()
        })["catch"](function (_ref2) {
          var status = _ref2.status,
              message = _ref2.message;
          reject({
            status: status,
            message: message
          });
        });
      });
    }
  }], [{
    key: "new",
    value: function _new(options) {
      return new this(options);
    }
  }]);

  return Cloudinary;
}();

assign_root_assign_default()(cloudinary_Cloudinary, constants_namespaceObject);
/* harmony default export */ var cloudinary = (cloudinary_Cloudinary);
// CONCATENATED MODULE: ./src/namespace/cloudinary-core.js
/**
 * Creates the namespace for Cloudinary
 */

















/* harmony default export */ var cloudinary_core = __webpack_exports__["default"] = ({
  ClientHintsMetaTag: clienthintsmetatag,
  Cloudinary: cloudinary,
  Condition: condition,
  Configuration: src_configuration,
  crc32: src_crc32,
  Expression: expression,
  FetchLayer: fetchlayer,
  HtmlTag: htmltag,
  ImageTag: imagetag,
  Layer: layer_layer,
  PictureTag: picturetag,
  SubtitlesLayer: subtitleslayer,
  TextLayer: textlayer,
  Transformation: src_transformation,
  utf8_encode: src_utf8_encode,
  Util: lodash_namespaceObject,
  VideoTag: videotag
});


/***/ }),

/***/ "lodash/assign":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_assign__;

/***/ }),

/***/ "lodash/cloneDeep":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_cloneDeep__;

/***/ }),

/***/ "lodash/compact":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_compact__;

/***/ }),

/***/ "lodash/difference":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_difference__;

/***/ }),

/***/ "lodash/functions":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_functions__;

/***/ }),

/***/ "lodash/identity":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_identity__;

/***/ }),

/***/ "lodash/includes":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_includes__;

/***/ }),

/***/ "lodash/isArray":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_isArray__;

/***/ }),

/***/ "lodash/isElement":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_isElement__;

/***/ }),

/***/ "lodash/isFunction":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_isFunction__;

/***/ }),

/***/ "lodash/isPlainObject":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_isPlainObject__;

/***/ }),

/***/ "lodash/isString":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_isString__;

/***/ }),

/***/ "lodash/merge":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_merge__;

/***/ }),

/***/ "lodash/trim":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_trim__;

/***/ })

/******/ });
});
//# sourceMappingURL=cloudinary-core.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("b639").Buffer, __webpack_require__("4362")))

/***/ }),

/***/ "1a2d":
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__("42a2"),
    isObjectLike = __webpack_require__("1310");

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),

/***/ "1a8c":
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "1bac":
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__("7d1f"),
    getSymbolsIn = __webpack_require__("a029"),
    keysIn = __webpack_require__("9934");

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1c0b":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "1c7e":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "1cec":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("0b07"),
    root = __webpack_require__("2b3e");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "1dde":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "1efc":
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "1fb5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "1fc8":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("4245");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "2286":
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__("85e3");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var setGlobal = __webpack_require__("ce4e");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "2474":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("2b3e");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "2478":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("4245");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "2524":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("6044");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "253c":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("3729"),
    isObjectLike = __webpack_require__("1310");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "25f0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__("6eeb");
var anObject = __webpack_require__("825a");
var fails = __webpack_require__("d039");
var flags = __webpack_require__("ad6d");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "2638":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}var normalMerge=["attrs","props","domProps"],toArrayMerge=["class","style","directives"],functionalMerge=["on","nativeOn"],mergeJsxProps=function(a){return a.reduce(function(c,a){for(var b in a)if(!c[b])c[b]=a[b];else if(-1!==normalMerge.indexOf(b))c[b]=_extends({},c[b],a[b]);else if(-1!==toArrayMerge.indexOf(b)){var d=c[b]instanceof Array?c[b]:[c[b]],e=a[b]instanceof Array?a[b]:[a[b]];c[b]=d.concat(e)}else if(-1!==functionalMerge.indexOf(b)){for(var f in a[b])if(c[b][f]){var g=c[b][f]instanceof Array?c[b][f]:[c[b][f]],h=a[b][f]instanceof Array?a[b][f]:[a[b][f]];c[b][f]=g.concat(h)}else c[b][f]=a[b][f];}else if("hook"==b)for(var i in a[b])c[b][i]=c[b][i]?mergeFn(c[b][i],a[b][i]):a[b][i];else c[b]=a[b];return c},{})},mergeFn=function(a,b){return function(){a&&a.apply(this,arguments),b&&b.apply(this,arguments)}};module.exports=mergeJsxProps;


/***/ }),

/***/ "266a":
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__("7948");

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

module.exports = baseValues;


/***/ }),

/***/ "28c9":
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "29f3":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "2a62":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");

module.exports = function (iterator) {
  var returnMethod = iterator['return'];
  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};


/***/ }),

/***/ "2b03":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ "2b10":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),

/***/ "2b3e":
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__("585a");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "2cf8":
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__("47f5");

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
 * that is not found in the character symbols.
 *
 * @private
 * @param {Array} strSymbols The string symbols to inspect.
 * @param {Array} chrSymbols The character symbols to find.
 * @returns {number} Returns the index of the last unmatched string symbol.
 */
function charsEndIndex(strSymbols, chrSymbols) {
  var index = strSymbols.length;

  while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
  return index;
}

module.exports = charsEndIndex;


/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("342f");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "2d7c":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "2dcb":
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__("91e9");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ "2eaa":
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__("d612"),
    arrayIncludes = __webpack_require__("8db3"),
    arrayIncludesWith = __webpack_require__("5edf"),
    arrayMap = __webpack_require__("7948"),
    baseUnary = __webpack_require__("b047"),
    cacheHas = __webpack_require__("c584");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee == null ? value : iteratee(value);

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

module.exports = baseDifference;


/***/ }),

/***/ "2ec1":
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__("100e"),
    isIterateeCall = __webpack_require__("9aff");

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),

/***/ "2fcc":
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "30c9":
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__("9520"),
    isLength = __webpack_require__("b218");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "32b3":
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__("872a"),
    eq = __webpack_require__("9638");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "32f4":
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__("2d7c"),
    stubArray = __webpack_require__("d327");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "342f":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "34ac":
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__("9520"),
    isMasked = __webpack_require__("1368"),
    isObject = __webpack_require__("1a8c"),
    toSource = __webpack_require__("dc57");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "35a1":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("f5df");
var Iterators = __webpack_require__("3f8c");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "3698":
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "3729":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("9e69"),
    getRawTag = __webpack_require__("00fd"),
    objectToString = __webpack_require__("29f3");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var anObject = __webpack_require__("825a");
var objectKeys = __webpack_require__("df75");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "3818":
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__("7e64"),
    arrayEach = __webpack_require__("8057"),
    assignValue = __webpack_require__("32b3"),
    baseAssign = __webpack_require__("5b01"),
    baseAssignIn = __webpack_require__("0f0f"),
    cloneBuffer = __webpack_require__("e5383"),
    copyArray = __webpack_require__("4359"),
    copySymbols = __webpack_require__("54eb"),
    copySymbolsIn = __webpack_require__("1041"),
    getAllKeys = __webpack_require__("a994"),
    getAllKeysIn = __webpack_require__("1bac"),
    getTag = __webpack_require__("42a2"),
    initCloneArray = __webpack_require__("c87c"),
    initCloneByTag = __webpack_require__("c2b6"),
    initCloneObject = __webpack_require__("fa21"),
    isArray = __webpack_require__("6747"),
    isBuffer = __webpack_require__("0d24"),
    isMap = __webpack_require__("cc45"),
    isObject = __webpack_require__("1a8c"),
    isSet = __webpack_require__("d7ee"),
    keys = __webpack_require__("ec69"),
    keysIn = __webpack_require__("9934");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),

/***/ "39ff":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("0b07"),
    root = __webpack_require__("2b3e");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "3b4a":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("0b07");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "3bbe":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "3ca3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "3f8c":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "3ff1":
/***/ (function(module, exports, __webpack_require__) {

var baseValues = __webpack_require__("266a"),
    keys = __webpack_require__("ec69");

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : baseValues(object, keys(object));
}

module.exports = values;


/***/ }),

/***/ "41c3":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("1a8c"),
    isPrototype = __webpack_require__("eac5"),
    nativeKeysIn = __webpack_require__("ec8c");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ "4245":
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__("1290");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "42454":
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__("f909"),
    createAssigner = __webpack_require__("2ec1");

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

module.exports = merge;


/***/ }),

/***/ "428f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global;


/***/ }),

/***/ "42a2":
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__("b5a7"),
    Map = __webpack_require__("79bc"),
    Promise = __webpack_require__("1cec"),
    Set = __webpack_require__("c869"),
    WeakMap = __webpack_require__("39ff"),
    baseGetTag = __webpack_require__("3729"),
    toSource = __webpack_require__("dc57");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "4359":
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "4362":
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__("df7c");
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "44d2":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var create = __webpack_require__("7c73");
var definePropertyModule = __webpack_require__("9bf2");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "466d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var anObject = __webpack_require__("825a");
var toLength = __webpack_require__("50c4");
var requireObjectCoercible = __webpack_require__("1d80");
var advanceStringIndex = __webpack_require__("8aa5");
var regExpExec = __webpack_require__("14c3");

// @@match logic
fixRegExpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative(nativeMatch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "47f5":
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__("2b03"),
    baseIsNaN = __webpack_require__("d9a8"),
    strictIndexOf = __webpack_require__("099a");

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__("2d00");
var fails = __webpack_require__("d039");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  return !String(Symbol()) ||
    // Chrome 38 Symbol has incorrect toString conversion
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "49f4":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("6044");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "4b17":
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__("6428");

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ "4cef":
/***/ (function(module, exports) {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toLength = __webpack_require__("50c4");
var toAbsoluteIndex = __webpack_require__("23cb");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "4de4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $filter = __webpack_require__("b727").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "4df4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__("0366");
var toObject = __webpack_require__("7b0b");
var callWithSafeIterationClosing = __webpack_require__("9bdd");
var isArrayIteratorMethod = __webpack_require__("e95a");
var toLength = __webpack_require__("50c4");
var createProperty = __webpack_require__("8418");
var getIteratorMethod = __webpack_require__("35a1");

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "4e82":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var aFunction = __webpack_require__("1c0b");
var toObject = __webpack_require__("7b0b");
var fails = __webpack_require__("d039");
var arrayMethodIsStrict = __webpack_require__("a640");

var test = [];
var nativeSort = test.sort;

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD;

// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? nativeSort.call(toObject(this))
      : nativeSort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "4f50":
/***/ (function(module, exports, __webpack_require__) {

var assignMergeValue = __webpack_require__("b760"),
    cloneBuffer = __webpack_require__("e5383"),
    cloneTypedArray = __webpack_require__("c8fe"),
    copyArray = __webpack_require__("4359"),
    initCloneObject = __webpack_require__("fa21"),
    isArguments = __webpack_require__("d370"),
    isArray = __webpack_require__("6747"),
    isArrayLikeObject = __webpack_require__("dcbe"),
    isBuffer = __webpack_require__("0d24"),
    isFunction = __webpack_require__("9520"),
    isObject = __webpack_require__("1a8c"),
    isPlainObject = __webpack_require__("60ed"),
    isTypedArray = __webpack_require__("73ac"),
    safeGet = __webpack_require__("8adb"),
    toPlainObject = __webpack_require__("8de2");

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "50d8":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "5135":
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__("7b0b");

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};


/***/ }),

/***/ "5319":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var anObject = __webpack_require__("825a");
var toLength = __webpack_require__("50c4");
var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");
var advanceStringIndex = __webpack_require__("8aa5");
var getSubstitution = __webpack_require__("0cb2");
var regExpExec = __webpack_require__("14c3");

var max = Math.max;
var min = Math.min;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];
});


/***/ }),

/***/ "54eb":
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__("8eeb"),
    getSymbols = __webpack_require__("32f4");

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),

/***/ "55a3":
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.12.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "57a5":
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__("91e9");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "585a":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "5b01":
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__("8eeb"),
    keys = __webpack_require__("ec69");

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),

/***/ "5c69":
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__("087d"),
    isFlattenable = __webpack_require__("0621");

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "5d89":
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__("f8af");

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),

/***/ "5e2e":
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__("28c9"),
    listCacheDelete = __webpack_require__("69d5"),
    listCacheGet = __webpack_require__("b4c0"),
    listCacheHas = __webpack_require__("fba5"),
    listCacheSet = __webpack_require__("67ca");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "5edf":
/***/ (function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),

/***/ "6044":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("0b07");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "60ed":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("3729"),
    getPrototype = __webpack_require__("2dcb"),
    isObjectLike = __webpack_require__("1310");

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ "62e4":
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "6428":
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__("b4b0");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ "6547":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "65f0":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "66c7":
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__("ce86"),
    baseTrim = __webpack_require__("8d74"),
    castSlice = __webpack_require__("c32f"),
    charsEndIndex = __webpack_require__("2cf8"),
    charsStartIndex = __webpack_require__("b789"),
    stringToArray = __webpack_require__("126d"),
    toString = __webpack_require__("76dd");

/**
 * Removes leading and trailing whitespace or specified characters from `string`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {string} Returns the trimmed string.
 * @example
 *
 * _.trim('  abc  ');
 * // => 'abc'
 *
 * _.trim('-_-abc-_-', '_-');
 * // => 'abc'
 *
 * _.map(['  foo  ', '  bar  '], _.trim);
 * // => ['foo', 'bar']
 */
function trim(string, chars, guard) {
  string = toString(string);
  if (string && (guard || chars === undefined)) {
    return baseTrim(string);
  }
  if (!string || !(chars = baseToString(chars))) {
    return string;
  }
  var strSymbols = stringToArray(string),
      chrSymbols = stringToArray(chars),
      start = charsStartIndex(strSymbols, chrSymbols),
      end = charsEndIndex(strSymbols, chrSymbols) + 1;

  return castSlice(strSymbols, start, end).join('');
}

module.exports = trim;


/***/ }),

/***/ "6747":
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "67ca":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("cb5a");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "69d5":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("cb5a");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var objectHas = __webpack_require__("5135");
var shared = __webpack_require__("c6cd");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6da8":
/***/ (function(module, exports) {

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

module.exports = asciiToArray;


/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var setGlobal = __webpack_require__("ce4e");
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "6f6c":
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),

/***/ "6fcd":
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__("50d8"),
    isArguments = __webpack_require__("d370"),
    isArray = __webpack_require__("6747"),
    isBuffer = __webpack_require__("0d24"),
    isIndex = __webpack_require__("c098"),
    isTypedArray = __webpack_require__("73ac");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "72af":
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__("99cd");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "72f0":
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ "73ac":
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__("743f"),
    baseUnary = __webpack_require__("b047"),
    nodeUtil = __webpack_require__("99d3");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "743f":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("3729"),
    isLength = __webpack_require__("b218"),
    isObjectLike = __webpack_require__("1310");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "746f":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var has = __webpack_require__("5135");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineProperty = __webpack_require__("9bf2").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "7530":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("1a8c");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ "76dd":
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__("ce86");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "7948":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "79bc":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("0b07"),
    root = __webpack_require__("2b3e");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "7a48":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("6044");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7b83":
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__("7c64"),
    mapCacheDelete = __webpack_require__("93ed"),
    mapCacheGet = __webpack_require__("2478"),
    mapCacheHas = __webpack_require__("a524"),
    mapCacheSet = __webpack_require__("1fc8");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "7c64":
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__("e24b"),
    ListCache = __webpack_require__("5e2e"),
    Map = __webpack_require__("79bc");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var defineProperties = __webpack_require__("37e8");
var enumBugKeys = __webpack_require__("7839");
var hiddenKeys = __webpack_require__("d012");
var html = __webpack_require__("1be4");
var documentCreateElement = __webpack_require__("cc12");
var sharedKey = __webpack_require__("f772");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject -- old IE */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "7d1f":
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__("087d"),
    isArray = __webpack_require__("6747");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "7db0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $find = __webpack_require__("b727").find;
var addToUnscopables = __webpack_require__("44d2");

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "7dd0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var createIteratorConstructor = __webpack_require__("9ed3");
var getPrototypeOf = __webpack_require__("e163");
var setPrototypeOf = __webpack_require__("d2bb");
var setToStringTag = __webpack_require__("d44e");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");
var Iterators = __webpack_require__("3f8c");
var IteratorsCore = __webpack_require__("ae93");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "7e64":
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__("5e2e"),
    stackClear = __webpack_require__("efb6"),
    stackDelete = __webpack_require__("2fcc"),
    stackGet = __webpack_require__("802a"),
    stackHas = __webpack_require__("55a3"),
    stackSet = __webpack_require__("d02c");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "7ed2":
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var inspectSource = __webpack_require__("8925");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "802a":
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "8057":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "8418":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("c04e");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "85e3":
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ "861d":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "872a":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("3b4a");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "88fd":
/***/ (function(module, exports, __webpack_require__) {

var isObjectLike = __webpack_require__("1310"),
    isPlainObject = __webpack_require__("60ed");

/**
 * Checks if `value` is likely a DOM element.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
 * @example
 *
 * _.isElement(document.body);
 * // => true
 *
 * _.isElement('<body>');
 * // => false
 */
function isElement(value) {
  return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
}

module.exports = isElement;


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("c6cd");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8a30":
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__("47f5"),
    isArrayLike = __webpack_require__("30c9"),
    isString = __webpack_require__("e2a0"),
    toInteger = __webpack_require__("4b17"),
    values = __webpack_require__("3ff1");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * is used for equality comparisons. If `fromIndex` is negative, it's used as
 * the offset from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * _.includes('abcd', 'bc');
 * // => true
 */
function includes(collection, value, fromIndex, guard) {
  collection = isArrayLike(collection) ? collection : values(collection);
  fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

  var length = collection.length;
  if (fromIndex < 0) {
    fromIndex = nativeMax(length + fromIndex, 0);
  }
  return isString(collection)
    ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
    : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
}

module.exports = includes;


/***/ }),

/***/ "8aa5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "8adb":
/***/ (function(module, exports) {

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

module.exports = safeGet;


/***/ }),

/***/ "8d74":
/***/ (function(module, exports, __webpack_require__) {

var trimmedEndIndex = __webpack_require__("4cef");

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ "8db3":
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__("47f5");

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),

/***/ "8de2":
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__("8eeb"),
    keysIn = __webpack_require__("9934");

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;


/***/ }),

/***/ "8eeb":
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__("32b3"),
    baseAssignValue = __webpack_require__("872a");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "90e3":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "9152":
/***/ (function(module, exports) {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "91e9":
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "9263":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable regexp/no-assertion-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var regexpFlags = __webpack_require__("ad6d");
var stickyHelpers = __webpack_require__("9f7f");
var shared = __webpack_require__("5692");

var nativeExec = RegExp.prototype.exec;
var nativeReplace = shared('native-string-replace', String.prototype.replace);

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "93ed":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("4245");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "9520":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("3729"),
    isObject = __webpack_require__("1a8c");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "9638":
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "9934":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__("6fcd"),
    baseKeysIn = __webpack_require__("41c3"),
    isArrayLike = __webpack_require__("30c9");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ "99af":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var createProperty = __webpack_require__("8418");
var arraySpeciesCreate = __webpack_require__("65f0");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "99cd":
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "99d3":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__("585a");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("62e4")(module)))

/***/ }),

/***/ "9aff":
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__("9638"),
    isArrayLike = __webpack_require__("30c9"),
    isIndex = __webpack_require__("c098"),
    isObject = __webpack_require__("1a8c");

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ "9bdd":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var iteratorClose = __webpack_require__("2a62");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    iteratorClose(iterator);
    throw error;
  }
};


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var anObject = __webpack_require__("825a");
var toPrimitive = __webpack_require__("c04e");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9e69":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("2b3e");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "9ed3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__("ae93").IteratorPrototype;
var create = __webpack_require__("7c73");
var createPropertyDescriptor = __webpack_require__("5c6c");
var setToStringTag = __webpack_require__("d44e");
var Iterators = __webpack_require__("3f8c");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "9f7f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__("d039");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "a029":
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__("087d"),
    getPrototype = __webpack_require__("2dcb"),
    getSymbols = __webpack_require__("32f4"),
    stubArray = __webpack_require__("d327");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ "a2db":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("9e69");

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),

/***/ "a454":
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__("72f0"),
    defineProperty = __webpack_require__("3b4a"),
    identity = __webpack_require__("cd9d");

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ "a4d3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var getBuiltIn = __webpack_require__("d066");
var IS_PURE = __webpack_require__("c430");
var DESCRIPTORS = __webpack_require__("83ab");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var anObject = __webpack_require__("825a");
var toObject = __webpack_require__("7b0b");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var createPropertyDescriptor = __webpack_require__("5c6c");
var nativeObjectCreate = __webpack_require__("7c73");
var objectKeys = __webpack_require__("df75");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertyNamesExternal = __webpack_require__("057f");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var shared = __webpack_require__("5692");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");
var uid = __webpack_require__("90e3");
var wellKnownSymbol = __webpack_require__("b622");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineWellKnownSymbol = __webpack_require__("746f");
var setToStringTag = __webpack_require__("d44e");
var InternalStateModule = __webpack_require__("69f3");
var $forEach = __webpack_require__("b727").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.es/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "a524":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("4245");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "a630":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var from = __webpack_require__("4df4");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  // eslint-disable-next-line es/no-array-from -- required for testing
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "a640":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "a691":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "a994":
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__("7d1f"),
    getSymbols = __webpack_require__("32f4"),
    keys = __webpack_require__("ec69");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "aaec":
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;


/***/ }),

/***/ "ac1f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var exec = __webpack_require__("9263");

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "ad6d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("825a");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "ae93":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");
var getPrototypeOf = __webpack_require__("e163");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "afb9":
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__("2d7c"),
    isFunction = __webpack_require__("9520");

/**
 * The base implementation of `_.functions` which creates an array of
 * `object` function property names filtered from `props`.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Array} props The property names to filter.
 * @returns {Array} Returns the function names.
 */
function baseFunctions(object, props) {
  return arrayFilter(props, function(key) {
    return isFunction(object[key]);
  });
}

module.exports = baseFunctions;


/***/ }),

/***/ "b041":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classof = __webpack_require__("f5df");

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "b047":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "b0c0":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var defineProperty = __webpack_require__("9bf2").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "b218":
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "b4b0":
/***/ (function(module, exports, __webpack_require__) {

var baseTrim = __webpack_require__("8d74"),
    isObject = __webpack_require__("1a8c"),
    isSymbol = __webpack_require__("ffd6");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "b4c0":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("cb5a");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "b5a7":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("0b07"),
    root = __webpack_require__("2b3e");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var has = __webpack_require__("5135");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "b639":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__("1fb5")
var ieee754 = __webpack_require__("9152")
var isArray = __webpack_require__("e3db")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "b64b":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var toObject = __webpack_require__("7b0b");
var nativeKeys = __webpack_require__("df75");
var fails = __webpack_require__("d039");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "b727":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("0366");
var IndexedObject = __webpack_require__("44ad");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var arraySpeciesCreate = __webpack_require__("65f0");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};


/***/ }),

/***/ "b760":
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__("872a"),
    eq = __webpack_require__("9638");

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;


/***/ }),

/***/ "b789":
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__("47f5");

/**
 * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
 * that is not found in the character symbols.
 *
 * @private
 * @param {Array} strSymbols The string symbols to inspect.
 * @param {Array} chrSymbols The character symbols to find.
 * @returns {number} Returns the index of the first unmatched string symbol.
 */
function charsStartIndex(strSymbols, chrSymbols) {
  var index = -1,
      length = strSymbols.length;

  while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
  return index;
}

module.exports = charsStartIndex;


/***/ }),

/***/ "bb2f":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),

/***/ "bbc0":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("6044");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "c098":
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "c1c9":
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__("a454"),
    shortOut = __webpack_require__("f3c1");

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ "c228":
/***/ (function(module, exports) {

/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * _.compact([0, 1, false, 2, '', 3]);
 * // => [1, 2, 3]
 */
function compact(array) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (value) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = compact;


/***/ }),

/***/ "c2b6":
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__("f8af"),
    cloneDataView = __webpack_require__("5d89"),
    cloneRegExp = __webpack_require__("6f6c"),
    cloneSymbol = __webpack_require__("a2db"),
    cloneTypedArray = __webpack_require__("c8fe");

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),

/***/ "c32f":
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__("2b10");

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

module.exports = castSlice;


/***/ }),

/***/ "c3fc":
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__("42a2"),
    isObjectLike = __webpack_require__("1310");

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c584":
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setGlobal = __webpack_require__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c869":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("0b07"),
    root = __webpack_require__("2b3e");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "c87c":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "c8fe":
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__("f8af");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "cb5a":
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__("9638");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "cc45":
/***/ (function(module, exports, __webpack_require__) {

var baseIsMap = __webpack_require__("1a2d"),
    baseUnary = __webpack_require__("b047"),
    nodeUtil = __webpack_require__("99d3");

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),

/***/ "cd9d":
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "ce86":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("9e69"),
    arrayMap = __webpack_require__("7948"),
    isArray = __webpack_require__("6747"),
    isSymbol = __webpack_require__("ffd6");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "ceac":
/***/ (function(module, exports, __webpack_require__) {

var baseDifference = __webpack_require__("2eaa"),
    baseFlatten = __webpack_require__("5c69"),
    baseRest = __webpack_require__("100e"),
    isArrayLikeObject = __webpack_require__("dcbe");

/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * **Note:** Unlike `_.pullAll`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.without, _.xor
 * @example
 *
 * _.difference([2, 1], [2, 3]);
 * // => [1]
 */
var difference = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
    : [];
});

module.exports = difference;


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d02c":
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__("5e2e"),
    Map = __webpack_require__("79bc"),
    MapCache = __webpack_require__("7b83");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var global = __webpack_require__("da84");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d094":
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

module.exports = unicodeToArray;


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "d28b":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("746f");

// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var anObject = __webpack_require__("825a");
var aPossiblePrototype = __webpack_require__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "d327":
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "d370":
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__("253c"),
    isObjectLike = __webpack_require__("1310");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "d3b7":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var redefine = __webpack_require__("6eeb");
var toString = __webpack_require__("b041");

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "d44e":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("9bf2").f;
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "d612":
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__("7b83"),
    setCacheAdd = __webpack_require__("7ed2"),
    setCacheHas = __webpack_require__("dc0f");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ "d784":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("ac1f");
var redefine = __webpack_require__("6eeb");
var regexpExec = __webpack_require__("9263");
var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var createNonEnumerableProperty = __webpack_require__("9112");

var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var $exec = regexp.exec;
      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExpPrototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "d7ee":
/***/ (function(module, exports, __webpack_require__) {

var baseIsSet = __webpack_require__("c3fc"),
    baseUnary = __webpack_require__("b047"),
    nodeUtil = __webpack_require__("99d3");

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),

/***/ "d81d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $map = __webpack_require__("b727").map;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "d9a8":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),

/***/ "da03":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("2b3e");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "dbb4":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var ownKeys = __webpack_require__("56ef");
var toIndexedObject = __webpack_require__("fc6a");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var createProperty = __webpack_require__("8418");

// `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),

/***/ "dc0f":
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ "dc57":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "dca8":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var FREEZING = __webpack_require__("bb2f");
var fails = __webpack_require__("d039");
var isObject = __webpack_require__("861d");
var onFreeze = __webpack_require__("f183").onFreeze;

// eslint-disable-next-line es/no-object-freeze -- safe
var $freeze = Object.freeze;
var FAILS_ON_PRIMITIVES = fails(function () { $freeze(1); });

// `Object.freeze` method
// https://tc39.es/ecma262/#sec-object.freeze
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !FREEZING }, {
  freeze: function freeze(it) {
    return $freeze && isObject(it) ? $freeze(onFreeze(it)) : it;
  }
});


/***/ }),

/***/ "dcbe":
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__("30c9"),
    isObjectLike = __webpack_require__("1310");

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),

/***/ "dce5":
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__("32b3"),
    copyObject = __webpack_require__("8eeb"),
    createAssigner = __webpack_require__("2ec1"),
    isArrayLike = __webpack_require__("30c9"),
    isPrototype = __webpack_require__("eac5"),
    keys = __webpack_require__("ec69");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */
var assign = createAssigner(function(object, source) {
  if (isPrototype(source) || isArrayLike(source)) {
    copyObject(source, keys(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty.call(source, key)) {
      assignValue(object, key, source[key]);
    }
  }
});

module.exports = assign;


/***/ }),

/***/ "ddb0":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var ArrayIteratorMethods = __webpack_require__("e260");
var createNonEnumerableProperty = __webpack_require__("9112");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "df7c":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "e01a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var has = __webpack_require__("5135");
var isObject = __webpack_require__("861d");
var defineProperty = __webpack_require__("9bf2").f;
var copyConstructorProperties = __webpack_require__("e893");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "e163":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toObject = __webpack_require__("7b0b");
var sharedKey = __webpack_require__("f772");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("e177");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "e177":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "e24b":
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__("49f4"),
    hashDelete = __webpack_require__("1efc"),
    hashGet = __webpack_require__("bbc0"),
    hashHas = __webpack_require__("7a48"),
    hashSet = __webpack_require__("2524");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "e260":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__("fc6a");
var addToUnscopables = __webpack_require__("44d2");
var Iterators = __webpack_require__("3f8c");
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "e2a0":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("3729"),
    isArray = __webpack_require__("6747"),
    isObjectLike = __webpack_require__("1310");

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),

/***/ "e3db":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "e439":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var toIndexedObject = __webpack_require__("fc6a");
var nativeGetOwnPropertyDescriptor = __webpack_require__("06cf").f;
var DESCRIPTORS = __webpack_require__("83ab");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ "e538":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "e5383":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__("2b3e");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("62e4")(module)))

/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "e95a":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var Iterators = __webpack_require__("3f8c");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "eac5":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "ec69":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__("6fcd"),
    baseKeys = __webpack_require__("03dd"),
    isArrayLike = __webpack_require__("30c9");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "ec8c":
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "efb6":
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__("5e2e");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "f183":
/***/ (function(module, exports, __webpack_require__) {

var hiddenKeys = __webpack_require__("d012");
var isObject = __webpack_require__("861d");
var has = __webpack_require__("5135");
var defineProperty = __webpack_require__("9bf2").f;
var uid = __webpack_require__("90e3");
var FREEZING = __webpack_require__("bb2f");

var METADATA = uid('meta');
var id = 0;

// eslint-disable-next-line es/no-object-isextensible -- safe
var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + ++id, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
  return it;
};

var meta = module.exports = {
  REQUIRED: false,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),

/***/ "f3c1":
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ "f5df":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classofRaw = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "f8af":
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__("2474");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ "f909":
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__("7e64"),
    assignMergeValue = __webpack_require__("b760"),
    baseFor = __webpack_require__("72af"),
    baseMergeDeep = __webpack_require__("4f50"),
    isObject = __webpack_require__("1a8c"),
    keysIn = __webpack_require__("9934"),
    safeGet = __webpack_require__("8adb");

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack);
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;


/***/ }),

/***/ "fa21":
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__("7530"),
    getPrototype = __webpack_require__("2dcb"),
    isPrototype = __webpack_require__("eac5");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


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
    var getCurrentScript = __webpack_require__("8875")
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

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("b64b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("a4d3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__("e439");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__("dbb4");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
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
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js









function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

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
  var components = Array.isArray(options.components) ? options.components.reduce(function (obj, component) {
    return _objectSpread2(_objectSpread2({}, obj), {}, _defineProperty({}, component.name, component));
  }, {}) : options.components;
  registerComponents(Vue, components, configuration);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.freeze.js
var es_object_freeze = __webpack_require__("dca8");

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
var RESPONSIVE_CSS_DEFAULT = Object.freeze({
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CldContext/CldContext.vue?vue&type=script&lang=js&
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
// EXTERNAL MODULE: ./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js
var helper = __webpack_require__("2638");
var helper_default = /*#__PURE__*/__webpack_require__.n(helper);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// EXTERNAL MODULE: ./node_modules/cloudinary-core/cloudinary-core.js
var cloudinary_core = __webpack_require__("194e");

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
    /**
     * Set up the Cloudinary instance, allowing it later to be used to create URLs
     * @param extraConfigs
     */
    setup: function setup(extraConfigs) {
      if (!this.cloudinary) {
        this.cloudinary = new cloudinary_core["Cloudinary"](this.toSnakeCase(this.defaultConfigurations));
      }

      this.cloudinary.config(this.toSnakeCase(this.contextOptions));

      if (extraConfigs) {
        this.cloudinary.config(this.toSnakeCase(extraConfigs));
      }
    },
    toSnakeCase: function toSnakeCase(options) {
      return cloudinary_core["Util"].withSnakeCaseKeys(options);
    }
  }
};
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("e01a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__("d28b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__("a630");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js








function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.test.js
var es_regexp_test = __webpack_require__("00b4");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js








function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.sort.js
var es_array_sort = __webpack_require__("4e82");

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
  var givenBreakpoints = stops && Array.isArray(stops) ? _toConsumableArray(stops) : [stops];
  var filteredBreakpoints = givenBreakpoints.sort(function (a, b) {
    return a - b;
  }).filter(function (stop) {
    return stop >= value;
  });
  return (filteredBreakpoints.length ? filteredBreakpoints : stops)[0];
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

  if (Array.isArray(extra)) {
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
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__("7db0");

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
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js








function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
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
      it = it.call(o);
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
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js







function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
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
  if (!window || (typeof window === "undefined" ? "undefined" : _typeof(window)) !== "object") return;
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
  if (!window || (typeof window === "undefined" ? "undefined" : _typeof(window)) !== "object") return;

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
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("25f0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__("466d");

// CONCATENATED MODULE: ./src/utils/getDevicePixelRatio.js




function getDevicePixelRatio(roundDpr) {
  roundDpr = roundDpr == null ? true : roundDpr;
  var dpr = (typeof window !== "undefined" && window !== null ? window.devicePixelRatio : void 0) || 1;

  if (roundDpr) {
    dpr = Math.ceil(dpr);
  }

  if (dpr <= 0 || dpr === 0 / 0) {
    dpr = 1;
  }

  var dprString = dpr.toString();

  if (dprString.match(/^\d+$/)) {
    dprString += '.0';
  }

  return dprString;
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CldImage/CldImage.vue?vue&type=script&lang=js&















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

      return h("img", helper_default()([{}, {
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
      var src = responsiveModeNoSize || lazyModeInvisible ? '' : this.cloudinary.url(this.publicId, this.toSnakeCase(options)); // Update dpr_auto to dpr_1.0, 2.0 etc but only for responsive mode
      // This matches the behaviour in other SDKs

      if (this.responsive) {
        src = src.replace(/\bdpr_(1\.0|auto)\b/g, 'dpr_' + getDevicePixelRatio(true));
      }

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
      }, [this.renderImageOnly(src, true), displayPlaceholder && h("img", helper_default()([{
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
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CldVideo/CldVideo.vue?vue&type=script&lang=js&














var defaultSourceTypes = cloudinary_core["Cloudinary"].DEFAULT_VIDEO_SOURCE_TYPES.reduce(function (types, type) {
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
      // Automatic poster, when no specific poster properties are passed.
      if (!this.poster) {
        // Take the video URL and render it as an image, applying all child transformations
        // In a case like this: <cld-video width="100"/> the width config is already populated in the Cloudinary object
        // All we need to do is apply the child/chained transformations
        return this.cloudinary.url(this.publicId, this.toSnakeCase({
          transformation: this.extraTransformations || [],
          format: 'jpg',
          // The video publicId is a video, we need to change it to jpg for the poster
          resourceType: 'video' // the default resourceType is image, we need to ensure video is used.

        }));
      } // If poster is directly a string, we just return it
      // <cld-video poster="my/path/to/poster.jpg"/>


      if (typeof this.poster === 'string') {
        return this.poster;
      } // If poster is used as a child component
      // <cld-video> <cld-poster publicId="sample" /></>cld-video>
      // This is treated like a regular transformation
      // All poster properties are used to calculate the transformation
      // We ignore child transformations, and only use what was explciitly provided.


      if (this.poster && this.poster.publicId) {
        // const cldURLOptions = hasInlinePosterOptions ? this.poster : this.extraTransformations
        return this.cloudinary.url(this.poster.publicId, this.toSnakeCase(this.poster));
      } // In all other cases, return an empty string


      return '';
    }
  },
  mounted: function mounted() {
    this.$videoElement = this.$refs.videoElement;
  },
  created: function created() {
    this.setup(this.$attrs);
  },
  render: function render(h) {
    if (!this.publicId) return null;
    var children = this.$slots.default || [];
    var cldPoster = getCldPoster(children);
    var sources = this.getSources();
    var poster = cldPoster ? this.posterUrl : this.getPosterUrl();
    return h("video", helper_default()([{
      "attrs": {
        "autoplay": this.$attrs.autoplay
      },
      "domProps": {
        "muted": this.$attrs.muted
      }
    }, {
      "attrs": this.$attrs
    }, {
      "attrs": {
        "poster": poster
      },
      "ref": "videoElement"
    }]), [sources.map(function (source, index) {
      return h("source", helper_default()([{
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CldVideo/CldPoster.vue?vue&type=script&lang=js&





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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CldTransformation/CldTransformation.vue?vue&type=script&lang=js&

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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CldPlaceholder/CldPlaceholder.vue?vue&type=script&lang=js&

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

/***/ "fb25":
/***/ (function(module, exports, __webpack_require__) {

var baseFunctions = __webpack_require__("afb9"),
    keys = __webpack_require__("ec69");

/**
 * Creates an array of function property names from own enumerable properties
 * of `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to inspect.
 * @returns {Array} Returns the function names.
 * @see _.functionsIn
 * @example
 *
 * function Foo() {
 *   this.a = _.constant('a');
 *   this.b = _.constant('b');
 * }
 *
 * Foo.prototype.c = _.constant('c');
 *
 * _.functions(new Foo);
 * // => ['a', 'b']
 */
function functions(object) {
  return object == null ? [] : baseFunctions(object, keys(object));
}

module.exports = functions;


/***/ }),

/***/ "fb6a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var toAbsoluteIndex = __webpack_require__("23cb");
var toLength = __webpack_require__("50c4");
var toIndexedObject = __webpack_require__("fc6a");
var createProperty = __webpack_require__("8418");
var wellKnownSymbol = __webpack_require__("b622");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "fba5":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("cb5a");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fdbc":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__("4930");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "ffd6":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("3729"),
    isObjectLike = __webpack_require__("1310");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ })

/******/ });
});
//# sourceMappingURL=Cloudinary.umd.js.map