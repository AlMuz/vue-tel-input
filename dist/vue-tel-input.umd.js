(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-tel-input"] = factory();
	else
		root["vue-tel-input"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 5003:
/***/ (function(module, exports) {

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

/***/ 9306:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__(4901);
var tryToString = __webpack_require__(6823);

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ 5548:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isConstructor = __webpack_require__(3517);
var tryToString = __webpack_require__(6823);

var $TypeError = TypeError;

// `Assert: IsConstructor(argument) is true`
module.exports = function (argument) {
  if (isConstructor(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a constructor');
};


/***/ }),

/***/ 3506:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isPossiblePrototype = __webpack_require__(3925);

var $String = String;
var $TypeError = TypeError;

module.exports = function (argument) {
  if (isPossiblePrototype(argument)) return argument;
  throw new $TypeError("Can't set " + $String(argument) + ' as a prototype');
};


/***/ }),

/***/ 6469:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__(8227);
var create = __webpack_require__(2360);
var defineProperty = (__webpack_require__(4913).f);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] === undefined) {
  defineProperty(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ 7829:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var charAt = (__webpack_require__(8183).charAt);

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ 679:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isPrototypeOf = __webpack_require__(1625);

var $TypeError = TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw new $TypeError('Incorrect invocation');
};


/***/ }),

/***/ 8551:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__(34);

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ 235:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $forEach = (__webpack_require__(9213).forEach);
var arrayMethodIsStrict = __webpack_require__(4598);

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ 7916:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(6080);
var call = __webpack_require__(9565);
var toObject = __webpack_require__(8981);
var callWithSafeIterationClosing = __webpack_require__(6319);
var isArrayIteratorMethod = __webpack_require__(4209);
var isConstructor = __webpack_require__(3517);
var lengthOfArrayLike = __webpack_require__(6198);
var createProperty = __webpack_require__(4659);
var getIterator = __webpack_require__(81);
var getIteratorMethod = __webpack_require__(851);

var $Array = Array;

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var IS_CONSTRUCTOR = isConstructor(this);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {
    result = IS_CONSTRUCTOR ? new this() : [];
    iterator = getIterator(O, iteratorMethod);
    next = iterator.next;
    for (;!(step = call(next, iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = lengthOfArrayLike(O);
    result = IS_CONSTRUCTOR ? new this(length) : $Array(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ 9617:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(5397);
var toAbsoluteIndex = __webpack_require__(5610);
var lengthOfArrayLike = __webpack_require__(6198);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    if (length === 0) return !IS_INCLUDES && -1;
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value !== value) return true;
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

/***/ 9213:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(6080);
var uncurryThis = __webpack_require__(9504);
var IndexedObject = __webpack_require__(7055);
var toObject = __webpack_require__(8981);
var lengthOfArrayLike = __webpack_require__(6198);
var arraySpeciesCreate = __webpack_require__(1469);

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE === 1;
  var IS_FILTER = TYPE === 2;
  var IS_SOME = TYPE === 3;
  var IS_EVERY = TYPE === 4;
  var IS_FIND_INDEX = TYPE === 6;
  var IS_FILTER_REJECT = TYPE === 7;
  var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(self);
    var boundFunction = bind(callbackfn, that);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
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
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
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
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ 597:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(9039);
var wellKnownSymbol = __webpack_require__(8227);
var V8_VERSION = __webpack_require__(9519);

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

/***/ 4598:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(9039);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),

/***/ 4527:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(3724);
var isArray = __webpack_require__(4376);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function () {
  // makes no sense without proper strict mode support
  if (this !== undefined) return true;
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
}();

module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
  if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
    throw new $TypeError('Cannot set read only .length');
  } return O.length = length;
} : function (O, length) {
  return O.length = length;
};


/***/ }),

/***/ 7680:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);

module.exports = uncurryThis([].slice);


/***/ }),

/***/ 7433:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isArray = __webpack_require__(4376);
var isConstructor = __webpack_require__(3517);
var isObject = __webpack_require__(34);
var wellKnownSymbol = __webpack_require__(8227);

var SPECIES = wellKnownSymbol('species');
var $Array = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? $Array : C;
};


/***/ }),

/***/ 1469:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var arraySpeciesConstructor = __webpack_require__(7433);

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ 6319:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(8551);
var iteratorClose = __webpack_require__(9539);

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, 'throw', error);
  }
};


/***/ }),

/***/ 4428:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__(8227);

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
  try {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  } catch (error) { return false; } // workaround of old WebKit + `eval` bug
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

/***/ 2195:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ 6955:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(2140);
var isCallable = __webpack_require__(4901);
var classofRaw = __webpack_require__(2195);
var wellKnownSymbol = __webpack_require__(8227);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) === 'Arguments';

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
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ 7740:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var hasOwn = __webpack_require__(9297);
var ownKeys = __webpack_require__(5031);
var getOwnPropertyDescriptorModule = __webpack_require__(7347);
var definePropertyModule = __webpack_require__(4913);

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ 1436:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__(8227);

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),

/***/ 2211:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(9039);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ 2529:
/***/ (function(module) {

"use strict";

// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
module.exports = function (value, done) {
  return { value: value, done: done };
};


/***/ }),

/***/ 6699:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(3724);
var definePropertyModule = __webpack_require__(4913);
var createPropertyDescriptor = __webpack_require__(6980);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 6980:
/***/ (function(module) {

"use strict";

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 4659:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(3724);
var definePropertyModule = __webpack_require__(4913);
var createPropertyDescriptor = __webpack_require__(6980);

module.exports = function (object, key, value) {
  if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
  else object[key] = value;
};


/***/ }),

/***/ 3640:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(8551);
var ordinaryToPrimitive = __webpack_require__(4270);

var $TypeError = TypeError;

// `Date.prototype[@@toPrimitive](hint)` method implementation
// https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive
module.exports = function (hint) {
  anObject(this);
  if (hint === 'string' || hint === 'default') hint = 'string';
  else if (hint !== 'number') throw new $TypeError('Incorrect hint');
  return ordinaryToPrimitive(this, hint);
};


/***/ }),

/***/ 2106:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var makeBuiltIn = __webpack_require__(283);
var defineProperty = __webpack_require__(4913);

module.exports = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty.f(target, name, descriptor);
};


/***/ }),

/***/ 6840:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__(4901);
var definePropertyModule = __webpack_require__(4913);
var makeBuiltIn = __webpack_require__(283);
var defineGlobalProperty = __webpack_require__(9433);

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ 9433:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(4576);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(globalThis, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    globalThis[key] = value;
  } return value;
};


/***/ }),

/***/ 3724:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(9039);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});


/***/ }),

/***/ 4055:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(4576);
var isObject = __webpack_require__(34);

var document = globalThis.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ 6837:
/***/ (function(module) {

"use strict";

var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ 7400:
/***/ (function(module) {

"use strict";

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

/***/ 9296:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = __webpack_require__(4055);

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;


/***/ }),

/***/ 8727:
/***/ (function(module) {

"use strict";

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

/***/ 4265:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var userAgent = __webpack_require__(2839);

module.exports = /ipad|iphone|ipod/i.test(userAgent) && typeof Pebble != 'undefined';


/***/ }),

/***/ 9544:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var userAgent = __webpack_require__(2839);

// eslint-disable-next-line redos/no-vulnerable -- safe
module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);


/***/ }),

/***/ 8574:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var ENVIRONMENT = __webpack_require__(4215);

module.exports = ENVIRONMENT === 'NODE';


/***/ }),

/***/ 7860:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var userAgent = __webpack_require__(2839);

module.exports = /web0s(?!.*chrome)/i.test(userAgent);


/***/ }),

/***/ 2839:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(4576);

var navigator = globalThis.navigator;
var userAgent = navigator && navigator.userAgent;

module.exports = userAgent ? String(userAgent) : '';


/***/ }),

/***/ 9519:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(4576);
var userAgent = __webpack_require__(2839);

var process = globalThis.process;
var Deno = globalThis.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ 4215:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* global Bun, Deno -- detection */
var globalThis = __webpack_require__(4576);
var userAgent = __webpack_require__(2839);
var classof = __webpack_require__(2195);

var userAgentStartsWith = function (string) {
  return userAgent.slice(0, string.length) === string;
};

module.exports = (function () {
  if (userAgentStartsWith('Bun/')) return 'BUN';
  if (userAgentStartsWith('Cloudflare-Workers')) return 'CLOUDFLARE';
  if (userAgentStartsWith('Deno/')) return 'DENO';
  if (userAgentStartsWith('Node.js/')) return 'NODE';
  if (globalThis.Bun && typeof Bun.version == 'string') return 'BUN';
  if (globalThis.Deno && typeof Deno.version == 'object') return 'DENO';
  if (classof(globalThis.process) === 'process') return 'NODE';
  if (globalThis.window && globalThis.document) return 'BROWSER';
  return 'REST';
})();


/***/ }),

/***/ 6193:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);

var $Error = Error;
var replace = uncurryThis(''.replace);

var TEST = (function (arg) { return String(new $Error(arg).stack); })('zxcasd');
// eslint-disable-next-line redos/no-vulnerable -- safe
var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);

module.exports = function (stack, dropEntries) {
  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error.prepareStackTrace) {
    while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
  } return stack;
};


/***/ }),

/***/ 747:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var createNonEnumerableProperty = __webpack_require__(6699);
var clearErrorStack = __webpack_require__(6193);
var ERROR_STACK_INSTALLABLE = __webpack_require__(6249);

// non-standard V8
var captureStackTrace = Error.captureStackTrace;

module.exports = function (error, C, stack, dropEntries) {
  if (ERROR_STACK_INSTALLABLE) {
    if (captureStackTrace) captureStackTrace(error, C);
    else createNonEnumerableProperty(error, 'stack', clearErrorStack(stack, dropEntries));
  }
};


/***/ }),

/***/ 6249:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(9039);
var createPropertyDescriptor = __webpack_require__(6980);

module.exports = !fails(function () {
  var error = new Error('a');
  if (!('stack' in error)) return true;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  Object.defineProperty(error, 'stack', createPropertyDescriptor(1, 7));
  return error.stack !== 7;
});


/***/ }),

/***/ 6518:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(4576);
var getOwnPropertyDescriptor = (__webpack_require__(7347).f);
var createNonEnumerableProperty = __webpack_require__(6699);
var defineBuiltIn = __webpack_require__(6840);
var defineGlobalProperty = __webpack_require__(9433);
var copyConstructorProperties = __webpack_require__(7740);
var isForced = __webpack_require__(2796);

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = globalThis;
  } else if (STATIC) {
    target = globalThis[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = globalThis[TARGET] && globalThis[TARGET].prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ 9039:
/***/ (function(module) {

"use strict";

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 9228:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(7495);
var call = __webpack_require__(9565);
var defineBuiltIn = __webpack_require__(6840);
var regexpExec = __webpack_require__(7323);
var fails = __webpack_require__(9039);
var wellKnownSymbol = __webpack_require__(8227);
var createNonEnumerableProperty = __webpack_require__(6699);

var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;

module.exports = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegExp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) !== 7;
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

    re.exec = function () {
      execCalled = true;
      return null;
    };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var $exec = regexp.exec;
      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: call(nativeRegExpMethod, regexp, str, arg2) };
        }
        return { done: true, value: call(nativeMethod, str, regexp, arg2) };
      }
      return { done: false };
    });

    defineBuiltIn(String.prototype, KEY, methods[0]);
    defineBuiltIn(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ 8745:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var NATIVE_BIND = __webpack_require__(616);

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),

/***/ 6080:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(7476);
var aCallable = __webpack_require__(9306);
var NATIVE_BIND = __webpack_require__(616);

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 616:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(9039);

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ 9565:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var NATIVE_BIND = __webpack_require__(616);

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ 350:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(3724);
var hasOwn = __webpack_require__(9297);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ 6706:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);
var aCallable = __webpack_require__(9306);

module.exports = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};


/***/ }),

/***/ 7476:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var classofRaw = __webpack_require__(2195);
var uncurryThis = __webpack_require__(9504);

module.exports = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};


/***/ }),

/***/ 9504:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var NATIVE_BIND = __webpack_require__(616);

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ 7751:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(4576);
var isCallable = __webpack_require__(4901);

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method];
};


/***/ }),

/***/ 851:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__(6955);
var getMethod = __webpack_require__(5966);
var isNullOrUndefined = __webpack_require__(4117);
var Iterators = __webpack_require__(6269);
var wellKnownSymbol = __webpack_require__(8227);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};


/***/ }),

/***/ 81:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(9565);
var aCallable = __webpack_require__(9306);
var anObject = __webpack_require__(8551);
var tryToString = __webpack_require__(6823);
var getIteratorMethod = __webpack_require__(851);

var $TypeError = TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw new $TypeError(tryToString(argument) + ' is not iterable');
};


/***/ }),

/***/ 6933:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);
var isArray = __webpack_require__(4376);
var isCallable = __webpack_require__(4901);
var classof = __webpack_require__(2195);
var toString = __webpack_require__(655);

var push = uncurryThis([].push);

module.exports = function (replacer) {
  if (isCallable(replacer)) return replacer;
  if (!isArray(replacer)) return;
  var rawLength = replacer.length;
  var keys = [];
  for (var i = 0; i < rawLength; i++) {
    var element = replacer[i];
    if (typeof element == 'string') push(keys, element);
    else if (typeof element == 'number' || classof(element) === 'Number' || classof(element) === 'String') push(keys, toString(element));
  }
  var keysLength = keys.length;
  var root = true;
  return function (key, value) {
    if (root) {
      root = false;
      return value;
    }
    if (isArray(this)) return value;
    for (var j = 0; j < keysLength; j++) if (keys[j] === key) return value;
  };
};


/***/ }),

/***/ 5966:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var aCallable = __webpack_require__(9306);
var isNullOrUndefined = __webpack_require__(4117);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ 2478:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);
var toObject = __webpack_require__(8981);

var floor = Math.floor;
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);
// eslint-disable-next-line redos/no-vulnerable -- safe
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice(str, 0, position);
      case "'": return stringSlice(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice(ch, 1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),

/***/ 4576:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  check(typeof this == 'object' && this) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ 9297:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);
var toObject = __webpack_require__(8981);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ 421:
/***/ (function(module) {

"use strict";

module.exports = {};


/***/ }),

/***/ 3138:
/***/ (function(module) {

"use strict";

module.exports = function (a, b) {
  try {
    // eslint-disable-next-line no-console -- safe
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  } catch (error) { /* empty */ }
};


/***/ }),

/***/ 397:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(7751);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ 5917:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(3724);
var fails = __webpack_require__(9039);
var createElement = __webpack_require__(4055);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});


/***/ }),

/***/ 7055:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);
var fails = __webpack_require__(9039);
var classof = __webpack_require__(2195);

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) === 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ 3167:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__(4901);
var isObject = __webpack_require__(34);
var setPrototypeOf = __webpack_require__(2967);

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ 3706:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);
var isCallable = __webpack_require__(4901);
var store = __webpack_require__(7629);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ 7584:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__(34);
var createNonEnumerableProperty = __webpack_require__(6699);

// `InstallErrorCause` abstract operation
// https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause
module.exports = function (O, options) {
  if (isObject(options) && 'cause' in options) {
    createNonEnumerableProperty(O, 'cause', options.cause);
  }
};


/***/ }),

/***/ 1181:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var NATIVE_WEAK_MAP = __webpack_require__(8622);
var globalThis = __webpack_require__(4576);
var isObject = __webpack_require__(34);
var createNonEnumerableProperty = __webpack_require__(6699);
var hasOwn = __webpack_require__(9297);
var shared = __webpack_require__(7629);
var sharedKey = __webpack_require__(6119);
var hiddenKeys = __webpack_require__(421);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = globalThis.TypeError;
var WeakMap = globalThis.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
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

/***/ 4209:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__(8227);
var Iterators = __webpack_require__(6269);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ 4376:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__(2195);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) === 'Array';
};


/***/ }),

/***/ 4901:
/***/ (function(module) {

"use strict";

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == 'object' && document.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
module.exports = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ 3517:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);
var fails = __webpack_require__(9039);
var isCallable = __webpack_require__(4901);
var classof = __webpack_require__(6955);
var getBuiltIn = __webpack_require__(7751);
var inspectSource = __webpack_require__(3706);

var noop = function () { /* empty */ };
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.test(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, [], argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),

/***/ 2796:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(9039);
var isCallable = __webpack_require__(4901);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable(detection) ? fails(detection)
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

/***/ 4117:
/***/ (function(module) {

"use strict";

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ 34:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__(4901);

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ 3925:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__(34);

module.exports = function (argument) {
  return isObject(argument) || argument === null;
};


/***/ }),

/***/ 6395:
/***/ (function(module) {

"use strict";

module.exports = false;


/***/ }),

/***/ 788:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__(34);
var classof = __webpack_require__(2195);
var wellKnownSymbol = __webpack_require__(8227);

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) === 'RegExp');
};


/***/ }),

/***/ 757:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(7751);
var isCallable = __webpack_require__(4901);
var isPrototypeOf = __webpack_require__(1625);
var USE_SYMBOL_AS_UID = __webpack_require__(7040);

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ 2652:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(6080);
var call = __webpack_require__(9565);
var anObject = __webpack_require__(8551);
var tryToString = __webpack_require__(6823);
var isArrayIteratorMethod = __webpack_require__(4209);
var lengthOfArrayLike = __webpack_require__(6198);
var isPrototypeOf = __webpack_require__(1625);
var getIterator = __webpack_require__(81);
var getIteratorMethod = __webpack_require__(851);
var iteratorClose = __webpack_require__(9539);

var $TypeError = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw new $TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};


/***/ }),

/***/ 9539:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(9565);
var anObject = __webpack_require__(8551);
var getMethod = __webpack_require__(5966);

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),

/***/ 3994:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var IteratorPrototype = (__webpack_require__(7657).IteratorPrototype);
var create = __webpack_require__(2360);
var createPropertyDescriptor = __webpack_require__(6980);
var setToStringTag = __webpack_require__(687);
var Iterators = __webpack_require__(6269);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ 1088:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6518);
var call = __webpack_require__(9565);
var IS_PURE = __webpack_require__(6395);
var FunctionName = __webpack_require__(350);
var isCallable = __webpack_require__(4901);
var createIteratorConstructor = __webpack_require__(3994);
var getPrototypeOf = __webpack_require__(2787);
var setPrototypeOf = __webpack_require__(2967);
var setToStringTag = __webpack_require__(687);
var createNonEnumerableProperty = __webpack_require__(6699);
var defineBuiltIn = __webpack_require__(6840);
var wellKnownSymbol = __webpack_require__(8227);
var Iterators = __webpack_require__(6269);
var IteratorsCore = __webpack_require__(7657);

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
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
    if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];

    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    }

    return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME === 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
          defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
  }
  Iterators[NAME] = defaultIterator;

  return methods;
};


/***/ }),

/***/ 7657:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(9039);
var isCallable = __webpack_require__(4901);
var isObject = __webpack_require__(34);
var create = __webpack_require__(2360);
var getPrototypeOf = __webpack_require__(2787);
var defineBuiltIn = __webpack_require__(6840);
var wellKnownSymbol = __webpack_require__(8227);
var IS_PURE = __webpack_require__(6395);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

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

var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  defineBuiltIn(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ 6269:
/***/ (function(module) {

"use strict";

module.exports = {};


/***/ }),

/***/ 6198:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toLength = __webpack_require__(8014);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ 283:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);
var fails = __webpack_require__(9039);
var isCallable = __webpack_require__(4901);
var hasOwn = __webpack_require__(9297);
var DESCRIPTORS = __webpack_require__(3724);
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(350).CONFIGURABLE);
var inspectSource = __webpack_require__(3706);
var InternalStateModule = __webpack_require__(1181);

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ 741:
/***/ (function(module) {

"use strict";

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ 1955:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(4576);
var safeGetBuiltIn = __webpack_require__(3389);
var bind = __webpack_require__(6080);
var macrotask = (__webpack_require__(9225).set);
var Queue = __webpack_require__(8265);
var IS_IOS = __webpack_require__(9544);
var IS_IOS_PEBBLE = __webpack_require__(4265);
var IS_WEBOS_WEBKIT = __webpack_require__(7860);
var IS_NODE = __webpack_require__(8574);

var MutationObserver = globalThis.MutationObserver || globalThis.WebKitMutationObserver;
var document = globalThis.document;
var process = globalThis.process;
var Promise = globalThis.Promise;
var microtask = safeGetBuiltIn('queueMicrotask');
var notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!microtask) {
  var queue = new Queue();

  var flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (fn = queue.get()) try {
      fn();
    } catch (error) {
      if (queue.head) notify();
      throw error;
    }
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (!IS_IOS_PEBBLE && Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise.constructor = Promise;
    then = bind(promise.then, promise);
    notify = function () {
      then(flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessage
  // - onreadystatechange
  // - setTimeout
  } else {
    // `webpack` dev server bug on IE global methods - use bind(fn, global)
    macrotask = bind(macrotask, globalThis);
    notify = function () {
      macrotask(flush);
    };
  }

  microtask = function (fn) {
    if (!queue.head) notify();
    queue.add(fn);
  };
}

module.exports = microtask;


/***/ }),

/***/ 6043:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var aCallable = __webpack_require__(9306);

var $TypeError = TypeError;

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw new $TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable(resolve);
  this.reject = aCallable(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ 2603:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toString = __webpack_require__(655);

module.exports = function (argument, $default) {
  return argument === undefined ? arguments.length < 2 ? '' : $default : toString(argument);
};


/***/ }),

/***/ 5749:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isRegExp = __webpack_require__(788);

var $TypeError = TypeError;

module.exports = function (it) {
  if (isRegExp(it)) {
    throw new $TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ 4213:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(3724);
var uncurryThis = __webpack_require__(9504);
var call = __webpack_require__(9565);
var fails = __webpack_require__(9039);
var objectKeys = __webpack_require__(1072);
var getOwnPropertySymbolsModule = __webpack_require__(3717);
var propertyIsEnumerableModule = __webpack_require__(8773);
var toObject = __webpack_require__(8981);
var IndexedObject = __webpack_require__(7055);

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;
var concat = uncurryThis([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol('assign detection');
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] !== 7 || objectKeys($assign({}, B)).join('') !== alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ 2360:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(8551);
var definePropertiesModule = __webpack_require__(6801);
var enumBugKeys = __webpack_require__(8727);
var hiddenKeys = __webpack_require__(421);
var html = __webpack_require__(397);
var documentCreateElement = __webpack_require__(4055);
var sharedKey = __webpack_require__(6119);

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
  // eslint-disable-next-line no-useless-assignment -- avoid memory leak
  activeXDocument = null;
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
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),

/***/ 6801:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(3724);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(8686);
var definePropertyModule = __webpack_require__(4913);
var anObject = __webpack_require__(8551);
var toIndexedObject = __webpack_require__(5397);
var objectKeys = __webpack_require__(1072);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ 4913:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(3724);
var IE8_DOM_DEFINE = __webpack_require__(5917);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(8686);
var anObject = __webpack_require__(8551);
var toPropertyKey = __webpack_require__(6969);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 7347:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(3724);
var call = __webpack_require__(9565);
var propertyIsEnumerableModule = __webpack_require__(8773);
var createPropertyDescriptor = __webpack_require__(6980);
var toIndexedObject = __webpack_require__(5397);
var toPropertyKey = __webpack_require__(6969);
var hasOwn = __webpack_require__(9297);
var IE8_DOM_DEFINE = __webpack_require__(5917);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ 298:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-object-getownpropertynames -- safe */
var classof = __webpack_require__(2195);
var toIndexedObject = __webpack_require__(5397);
var $getOwnPropertyNames = (__webpack_require__(8480).f);
var arraySlice = __webpack_require__(7680);

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return arraySlice(windowNames);
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && classof(it) === 'Window'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ 8480:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var internalObjectKeys = __webpack_require__(1828);
var enumBugKeys = __webpack_require__(8727);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ 3717:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 2787:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var hasOwn = __webpack_require__(9297);
var isCallable = __webpack_require__(4901);
var toObject = __webpack_require__(8981);
var sharedKey = __webpack_require__(6119);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(2211);

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};


/***/ }),

/***/ 1625:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ 1828:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);
var hasOwn = __webpack_require__(9297);
var toIndexedObject = __webpack_require__(5397);
var indexOf = (__webpack_require__(9617).indexOf);
var hiddenKeys = __webpack_require__(421);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ 1072:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var internalObjectKeys = __webpack_require__(1828);
var enumBugKeys = __webpack_require__(8727);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ 8773:
/***/ (function(__unused_webpack_module, exports) {

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

/***/ 2967:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* eslint-disable no-proto -- safe */
var uncurryThisAccessor = __webpack_require__(6706);
var isObject = __webpack_require__(34);
var requireObjectCoercible = __webpack_require__(7750);
var aPossiblePrototype = __webpack_require__(3506);

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    requireObjectCoercible(O);
    aPossiblePrototype(proto);
    if (!isObject(O)) return O;
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ 3179:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(2140);
var classof = __webpack_require__(6955);

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ 4270:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(9565);
var isCallable = __webpack_require__(4901);
var isObject = __webpack_require__(34);

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw new $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 5031:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(7751);
var uncurryThis = __webpack_require__(9504);
var getOwnPropertyNamesModule = __webpack_require__(8480);
var getOwnPropertySymbolsModule = __webpack_require__(3717);
var anObject = __webpack_require__(8551);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ 9167:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(4576);

module.exports = globalThis;


/***/ }),

/***/ 1103:
/***/ (function(module) {

"use strict";

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ 916:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(4576);
var NativePromiseConstructor = __webpack_require__(550);
var isCallable = __webpack_require__(4901);
var isForced = __webpack_require__(2796);
var inspectSource = __webpack_require__(3706);
var wellKnownSymbol = __webpack_require__(8227);
var ENVIRONMENT = __webpack_require__(4215);
var IS_PURE = __webpack_require__(6395);
var V8_VERSION = __webpack_require__(9519);

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var SPECIES = wellKnownSymbol('species');
var SUBCLASSING = false;
var NATIVE_PROMISE_REJECTION_EVENT = isCallable(globalThis.PromiseRejectionEvent);

var FORCED_PROMISE_CONSTRUCTOR = isForced('Promise', function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
  // We need Promise#{ catch, finally } in the pure version for preventing prototype pollution
  if (IS_PURE && !(NativePromisePrototype['catch'] && NativePromisePrototype['finally'])) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
    // Detect correctness of subclassing with @@species support
    var promise = new NativePromiseConstructor(function (resolve) { resolve(1); });
    var FakePromise = function (exec) {
      exec(function () { /* empty */ }, function () { /* empty */ });
    };
    var constructor = promise.constructor = {};
    constructor[SPECIES] = FakePromise;
    SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
    if (!SUBCLASSING) return true;
  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  } return !GLOBAL_CORE_JS_PROMISE && (ENVIRONMENT === 'BROWSER' || ENVIRONMENT === 'DENO') && !NATIVE_PROMISE_REJECTION_EVENT;
});

module.exports = {
  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR,
  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT,
  SUBCLASSING: SUBCLASSING
};


/***/ }),

/***/ 550:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(4576);

module.exports = globalThis.Promise;


/***/ }),

/***/ 3438:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(8551);
var isObject = __webpack_require__(34);
var newPromiseCapability = __webpack_require__(6043);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ 537:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var NativePromiseConstructor = __webpack_require__(550);
var checkCorrectnessOfIteration = __webpack_require__(4428);
var FORCED_PROMISE_CONSTRUCTOR = (__webpack_require__(916).CONSTRUCTOR);

module.exports = FORCED_PROMISE_CONSTRUCTOR || !checkCorrectnessOfIteration(function (iterable) {
  NativePromiseConstructor.all(iterable).then(undefined, function () { /* empty */ });
});


/***/ }),

/***/ 1056:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var defineProperty = (__webpack_require__(4913).f);

module.exports = function (Target, Source, key) {
  key in Target || defineProperty(Target, key, {
    configurable: true,
    get: function () { return Source[key]; },
    set: function (it) { Source[key] = it; }
  });
};


/***/ }),

/***/ 8265:
/***/ (function(module) {

"use strict";

var Queue = function () {
  this.head = null;
  this.tail = null;
};

Queue.prototype = {
  add: function (item) {
    var entry = { item: item, next: null };
    var tail = this.tail;
    if (tail) tail.next = entry;
    else this.head = entry;
    this.tail = entry;
  },
  get: function () {
    var entry = this.head;
    if (entry) {
      var next = this.head = entry.next;
      if (next === null) this.tail = null;
      return entry.item;
    }
  }
};

module.exports = Queue;


/***/ }),

/***/ 6682:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(9565);
var anObject = __webpack_require__(8551);
var isCallable = __webpack_require__(4901);
var classof = __webpack_require__(2195);
var regexpExec = __webpack_require__(7323);

var $TypeError = TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (isCallable(exec)) {
    var result = call(exec, R, S);
    if (result !== null) anObject(result);
    return result;
  }
  if (classof(R) === 'RegExp') return call(regexpExec, R, S);
  throw new $TypeError('RegExp#exec called on incompatible receiver');
};


/***/ }),

/***/ 7323:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call = __webpack_require__(9565);
var uncurryThis = __webpack_require__(9504);
var toString = __webpack_require__(655);
var regexpFlags = __webpack_require__(7979);
var stickyHelpers = __webpack_require__(8429);
var shared = __webpack_require__(5745);
var create = __webpack_require__(2360);
var getInternalState = (__webpack_require__(1181).get);
var UNSUPPORTED_DOT_ALL = __webpack_require__(3635);
var UNSUPPORTED_NCG = __webpack_require__(8814);

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt = uncurryThis(''.charAt);
var indexOf = uncurryThis(''.indexOf);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call(nativeExec, re1, 'a');
  call(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = call(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt(str, re.lastIndex - 1) !== '\n')) {
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

    match = call(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice(match.input, charsAdded);
        match[0] = stringSlice(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
      call(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ 7979:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(8551);

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.hasIndices) result += 'd';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.unicodeSets) result += 'v';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ 1034:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(9565);
var hasOwn = __webpack_require__(9297);
var isPrototypeOf = __webpack_require__(1625);
var regExpFlags = __webpack_require__(7979);

var RegExpPrototype = RegExp.prototype;

module.exports = function (R) {
  var flags = R.flags;
  return flags === undefined && !('flags' in RegExpPrototype) && !hasOwn(R, 'flags') && isPrototypeOf(RegExpPrototype, R)
    ? call(regExpFlags, R) : flags;
};


/***/ }),

/***/ 8429:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(9039);
var globalThis = __webpack_require__(4576);

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp = globalThis.RegExp;

var UNSUPPORTED_Y = fails(function () {
  var re = $RegExp('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') !== null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY = UNSUPPORTED_Y || fails(function () {
  return !$RegExp('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y || fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') !== null;
});

module.exports = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y
};


/***/ }),

/***/ 3635:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(9039);
var globalThis = __webpack_require__(4576);

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp = globalThis.RegExp;

module.exports = fails(function () {
  var re = $RegExp('.', 's');
  return !(re.dotAll && re.test('\n') && re.flags === 's');
});


/***/ }),

/***/ 8814:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(9039);
var globalThis = __webpack_require__(4576);

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = globalThis.RegExp;

module.exports = fails(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});


/***/ }),

/***/ 7750:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isNullOrUndefined = __webpack_require__(4117);

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ 3389:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(4576);
var DESCRIPTORS = __webpack_require__(3724);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Avoid NodeJS experimental warning
module.exports = function (name) {
  if (!DESCRIPTORS) return globalThis[name];
  var descriptor = getOwnPropertyDescriptor(globalThis, name);
  return descriptor && descriptor.value;
};


/***/ }),

/***/ 7633:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(7751);
var defineBuiltInAccessor = __webpack_require__(2106);
var wellKnownSymbol = __webpack_require__(8227);
var DESCRIPTORS = __webpack_require__(3724);

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineBuiltInAccessor(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ 687:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var defineProperty = (__webpack_require__(4913).f);
var hasOwn = __webpack_require__(9297);
var wellKnownSymbol = __webpack_require__(8227);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn(target, TO_STRING_TAG)) {
    defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ 6119:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var shared = __webpack_require__(5745);
var uid = __webpack_require__(3392);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ 7629:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var IS_PURE = __webpack_require__(6395);
var globalThis = __webpack_require__(4576);
var defineGlobalProperty = __webpack_require__(9433);

var SHARED = '__core-js_shared__';
var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});

(store.versions || (store.versions = [])).push({
  version: '3.38.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ 5745:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var store = __webpack_require__(7629);

module.exports = function (key, value) {
  return store[key] || (store[key] = value || {});
};


/***/ }),

/***/ 2293:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(8551);
var aConstructor = __webpack_require__(5548);
var isNullOrUndefined = __webpack_require__(4117);
var wellKnownSymbol = __webpack_require__(8227);

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || isNullOrUndefined(S = anObject(C)[SPECIES]) ? defaultConstructor : aConstructor(S);
};


/***/ }),

/***/ 8183:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);
var toIntegerOrInfinity = __webpack_require__(1291);
var toString = __webpack_require__(655);
var requireObjectCoercible = __webpack_require__(7750);

var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var stringSlice = uncurryThis(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
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

/***/ 706:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var PROPER_FUNCTION_NAME = (__webpack_require__(350).PROPER);
var fails = __webpack_require__(9039);
var whitespaces = __webpack_require__(7452);

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]()
      || non[METHOD_NAME]() !== non
      || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);
  });
};


/***/ }),

/***/ 3802:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);
var requireObjectCoercible = __webpack_require__(7750);
var toString = __webpack_require__(655);
var whitespaces = __webpack_require__(7452);

var replace = uncurryThis(''.replace);
var ltrim = RegExp('^[' + whitespaces + ']+');
var rtrim = RegExp('(^|[^' + whitespaces + '])[' + whitespaces + ']+$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '$1');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ 4495:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(9519);
var fails = __webpack_require__(9039);
var globalThis = __webpack_require__(4576);

var $String = globalThis.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ 8242:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(9565);
var getBuiltIn = __webpack_require__(7751);
var wellKnownSymbol = __webpack_require__(8227);
var defineBuiltIn = __webpack_require__(6840);

module.exports = function () {
  var Symbol = getBuiltIn('Symbol');
  var SymbolPrototype = Symbol && Symbol.prototype;
  var valueOf = SymbolPrototype && SymbolPrototype.valueOf;
  var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

  if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {
    // `Symbol.prototype[@@toPrimitive]` method
    // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
    // eslint-disable-next-line no-unused-vars -- required for .length
    defineBuiltIn(SymbolPrototype, TO_PRIMITIVE, function (hint) {
      return call(valueOf, this);
    }, { arity: 1 });
  }
};


/***/ }),

/***/ 1296:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var NATIVE_SYMBOL = __webpack_require__(4495);

/* eslint-disable es/no-symbol -- safe */
module.exports = NATIVE_SYMBOL && !!Symbol['for'] && !!Symbol.keyFor;


/***/ }),

/***/ 9225:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(4576);
var apply = __webpack_require__(8745);
var bind = __webpack_require__(6080);
var isCallable = __webpack_require__(4901);
var hasOwn = __webpack_require__(9297);
var fails = __webpack_require__(9039);
var html = __webpack_require__(397);
var arraySlice = __webpack_require__(7680);
var createElement = __webpack_require__(4055);
var validateArgumentsLength = __webpack_require__(2812);
var IS_IOS = __webpack_require__(9544);
var IS_NODE = __webpack_require__(8574);

var set = globalThis.setImmediate;
var clear = globalThis.clearImmediate;
var process = globalThis.process;
var Dispatch = globalThis.Dispatch;
var Function = globalThis.Function;
var MessageChannel = globalThis.MessageChannel;
var String = globalThis.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var $location, defer, channel, port;

fails(function () {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  $location = globalThis.location;
});

var run = function (id) {
  if (hasOwn(queue, id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var eventListener = function (event) {
  run(event.data);
};

var globalPostMessageDefer = function (id) {
  // old engines have not location.origin
  globalThis.postMessage(String(id), $location.protocol + '//' + $location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(handler) {
    validateArgumentsLength(arguments.length, 1);
    var fn = isCallable(handler) ? handler : Function(handler);
    var args = arraySlice(arguments, 1);
    queue[++counter] = function () {
      apply(fn, undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = eventListener;
    defer = bind(port.postMessage, port);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    globalThis.addEventListener &&
    isCallable(globalThis.postMessage) &&
    !globalThis.importScripts &&
    $location && $location.protocol !== 'file:' &&
    !fails(globalPostMessageDefer)
  ) {
    defer = globalPostMessageDefer;
    globalThis.addEventListener('message', eventListener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ 1240:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);

// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
module.exports = uncurryThis(1.0.valueOf);


/***/ }),

/***/ 5610:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__(1291);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ 5397:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(7055);
var requireObjectCoercible = __webpack_require__(7750);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ 1291:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var trunc = __webpack_require__(741);

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ 8014:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__(1291);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  var len = toIntegerOrInfinity(argument);
  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ 8981:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var requireObjectCoercible = __webpack_require__(7750);

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ 2777:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(9565);
var isObject = __webpack_require__(34);
var isSymbol = __webpack_require__(757);
var getMethod = __webpack_require__(5966);
var ordinaryToPrimitive = __webpack_require__(4270);
var wellKnownSymbol = __webpack_require__(8227);

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw new $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ 6969:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(2777);
var isSymbol = __webpack_require__(757);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ 2140:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__(8227);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ 655:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__(6955);

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


/***/ }),

/***/ 6823:
/***/ (function(module) {

"use strict";

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ 3392:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ 7040:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(4495);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ 8686:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(3724);
var fails = __webpack_require__(9039);

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});


/***/ }),

/***/ 2812:
/***/ (function(module) {

"use strict";

var $TypeError = TypeError;

module.exports = function (passed, required) {
  if (passed < required) throw new $TypeError('Not enough arguments');
  return passed;
};


/***/ }),

/***/ 8622:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(4576);
var isCallable = __webpack_require__(4901);

var WeakMap = globalThis.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ 511:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var path = __webpack_require__(9167);
var hasOwn = __webpack_require__(9297);
var wrappedWellKnownSymbolModule = __webpack_require__(1951);
var defineProperty = (__webpack_require__(4913).f);

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!hasOwn(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ 1951:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__(8227);

exports.f = wellKnownSymbol;


/***/ }),

/***/ 8227:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(4576);
var shared = __webpack_require__(5745);
var hasOwn = __webpack_require__(9297);
var uid = __webpack_require__(3392);
var NATIVE_SYMBOL = __webpack_require__(4495);
var USE_SYMBOL_AS_UID = __webpack_require__(7040);

var Symbol = globalThis.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
      ? Symbol[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ 7452:
/***/ (function(module) {

"use strict";

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ 4601:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(7751);
var hasOwn = __webpack_require__(9297);
var createNonEnumerableProperty = __webpack_require__(6699);
var isPrototypeOf = __webpack_require__(1625);
var setPrototypeOf = __webpack_require__(2967);
var copyConstructorProperties = __webpack_require__(7740);
var proxyAccessor = __webpack_require__(1056);
var inheritIfRequired = __webpack_require__(3167);
var normalizeStringArgument = __webpack_require__(2603);
var installErrorCause = __webpack_require__(7584);
var installErrorStack = __webpack_require__(747);
var DESCRIPTORS = __webpack_require__(3724);
var IS_PURE = __webpack_require__(6395);

module.exports = function (FULL_NAME, wrapper, FORCED, IS_AGGREGATE_ERROR) {
  var STACK_TRACE_LIMIT = 'stackTraceLimit';
  var OPTIONS_POSITION = IS_AGGREGATE_ERROR ? 2 : 1;
  var path = FULL_NAME.split('.');
  var ERROR_NAME = path[path.length - 1];
  var OriginalError = getBuiltIn.apply(null, path);

  if (!OriginalError) return;

  var OriginalErrorPrototype = OriginalError.prototype;

  // V8 9.3- bug https://bugs.chromium.org/p/v8/issues/detail?id=12006
  if (!IS_PURE && hasOwn(OriginalErrorPrototype, 'cause')) delete OriginalErrorPrototype.cause;

  if (!FORCED) return OriginalError;

  var BaseError = getBuiltIn('Error');

  var WrappedError = wrapper(function (a, b) {
    var message = normalizeStringArgument(IS_AGGREGATE_ERROR ? b : a, undefined);
    var result = IS_AGGREGATE_ERROR ? new OriginalError(a) : new OriginalError();
    if (message !== undefined) createNonEnumerableProperty(result, 'message', message);
    installErrorStack(result, WrappedError, result.stack, 2);
    if (this && isPrototypeOf(OriginalErrorPrototype, this)) inheritIfRequired(result, this, WrappedError);
    if (arguments.length > OPTIONS_POSITION) installErrorCause(result, arguments[OPTIONS_POSITION]);
    return result;
  });

  WrappedError.prototype = OriginalErrorPrototype;

  if (ERROR_NAME !== 'Error') {
    if (setPrototypeOf) setPrototypeOf(WrappedError, BaseError);
    else copyConstructorProperties(WrappedError, BaseError, { name: true });
  } else if (DESCRIPTORS && STACK_TRACE_LIMIT in OriginalError) {
    proxyAccessor(WrappedError, OriginalError, STACK_TRACE_LIMIT);
    proxyAccessor(WrappedError, OriginalError, 'prepareStackTrace');
  }

  copyConstructorProperties(WrappedError, OriginalError);

  if (!IS_PURE) try {
    // Safari 13- bug: WebAssembly errors does not have a proper `.name`
    if (OriginalErrorPrototype.name !== ERROR_NAME) {
      createNonEnumerableProperty(OriginalErrorPrototype, 'name', ERROR_NAME);
    }
    OriginalErrorPrototype.constructor = WrappedError;
  } catch (error) { /* empty */ }

  return WrappedError;
};


/***/ }),

/***/ 8706:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6518);
var fails = __webpack_require__(9039);
var isArray = __webpack_require__(4376);
var isObject = __webpack_require__(34);
var toObject = __webpack_require__(8981);
var lengthOfArrayLike = __webpack_require__(6198);
var doesNotExceedSafeInteger = __webpack_require__(6837);
var createProperty = __webpack_require__(4659);
var arraySpeciesCreate = __webpack_require__(1469);
var arrayMethodHasSpeciesSupport = __webpack_require__(597);
var wellKnownSymbol = __webpack_require__(8227);
var V8_VERSION = __webpack_require__(9519);

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport('concat');

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        doesNotExceedSafeInteger(n + len);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        doesNotExceedSafeInteger(n + 1);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ 2008:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6518);
var $filter = (__webpack_require__(9213).filter);
var arrayMethodHasSpeciesSupport = __webpack_require__(597);

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

/***/ 8980:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6518);
var $findIndex = (__webpack_require__(9213).findIndex);
var addToUnscopables = __webpack_require__(6469);

var FIND_INDEX = 'findIndex';
var SKIPS_HOLES = true;

// Shouldn't skip holes
// eslint-disable-next-line es/no-array-prototype-findindex -- testing
if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

// `Array.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findindex
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND_INDEX);


/***/ }),

/***/ 113:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6518);
var $find = (__webpack_require__(9213).find);
var addToUnscopables = __webpack_require__(6469);

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
// eslint-disable-next-line es/no-array-prototype-find -- testing
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

/***/ 3418:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6518);
var from = __webpack_require__(7916);
var checkCorrectnessOfIteration = __webpack_require__(4428);

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

/***/ 4423:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6518);
var $includes = (__webpack_require__(9617).includes);
var fails = __webpack_require__(9039);
var addToUnscopables = __webpack_require__(6469);

// FF99+ bug
var BROKEN_ON_SPARSE = fails(function () {
  // eslint-disable-next-line es/no-array-prototype-includes -- detection
  return !Array(1).includes();
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ 3792:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(5397);
var addToUnscopables = __webpack_require__(6469);
var Iterators = __webpack_require__(6269);
var InternalStateModule = __webpack_require__(1181);
var defineProperty = (__webpack_require__(4913).f);
var defineIterator = __webpack_require__(1088);
var createIterResultObject = __webpack_require__(2529);
var IS_PURE = __webpack_require__(6395);
var DESCRIPTORS = __webpack_require__(3724);

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
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = null;
    return createIterResultObject(undefined, true);
  }
  switch (state.kind) {
    case 'keys': return createIterResultObject(index, false);
    case 'values': return createIterResultObject(target[index], false);
  } return createIterResultObject([index, target[index]], false);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

// V8 ~ Chrome 45- bug
if (!IS_PURE && DESCRIPTORS && values.name !== 'values') try {
  defineProperty(values, 'name', { value: 'values' });
} catch (error) { /* empty */ }


/***/ }),

/***/ 2062:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6518);
var $map = (__webpack_require__(9213).map);
var arrayMethodHasSpeciesSupport = __webpack_require__(597);

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

/***/ 4114:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6518);
var toObject = __webpack_require__(8981);
var lengthOfArrayLike = __webpack_require__(6198);
var setArrayLength = __webpack_require__(4527);
var doesNotExceedSafeInteger = __webpack_require__(6837);
var fails = __webpack_require__(9039);

var INCORRECT_TO_LENGTH = fails(function () {
  return [].push.call({ length: 0x100000000 }, 1) !== 4294967297;
});

// V8 <= 121 and Safari <= 15.4; FF < 23 throws InternalError
// https://bugs.chromium.org/p/v8/issues/detail?id=12681
var properErrorOnNonWritableLength = function () {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).push();
  } catch (error) {
    return error instanceof TypeError;
  }
};

var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();

// `Array.prototype.push` method
// https://tc39.es/ecma262/#sec-array.prototype.push
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function push(item) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var argCount = arguments.length;
    doesNotExceedSafeInteger(len + argCount);
    for (var i = 0; i < argCount; i++) {
      O[len] = arguments[i];
      len++;
    }
    setArrayLength(O, len);
    return len;
  }
});


/***/ }),

/***/ 4782:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6518);
var isArray = __webpack_require__(4376);
var isConstructor = __webpack_require__(3517);
var isObject = __webpack_require__(34);
var toAbsoluteIndex = __webpack_require__(5610);
var lengthOfArrayLike = __webpack_require__(6198);
var toIndexedObject = __webpack_require__(5397);
var createProperty = __webpack_require__(4659);
var wellKnownSymbol = __webpack_require__(8227);
var arrayMethodHasSpeciesSupport = __webpack_require__(597);
var nativeSlice = __webpack_require__(7680);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

var SPECIES = wellKnownSymbol('species');
var $Array = Array;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = lengthOfArrayLike(O);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (isConstructor(Constructor) && (Constructor === $Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === $Array || Constructor === undefined) {
        return nativeSlice(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? $Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ 9572:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var hasOwn = __webpack_require__(9297);
var defineBuiltIn = __webpack_require__(6840);
var dateToPrimitive = __webpack_require__(3640);
var wellKnownSymbol = __webpack_require__(8227);

var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var DatePrototype = Date.prototype;

// `Date.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive
if (!hasOwn(DatePrototype, TO_PRIMITIVE)) {
  defineBuiltIn(DatePrototype, TO_PRIMITIVE, dateToPrimitive);
}


/***/ }),

/***/ 6280:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* eslint-disable no-unused-vars -- required for functions `.length` */
var $ = __webpack_require__(6518);
var globalThis = __webpack_require__(4576);
var apply = __webpack_require__(8745);
var wrapErrorConstructorWithCause = __webpack_require__(4601);

var WEB_ASSEMBLY = 'WebAssembly';
var WebAssembly = globalThis[WEB_ASSEMBLY];

// eslint-disable-next-line es/no-error-cause -- feature detection
var FORCED = new Error('e', { cause: 7 }).cause !== 7;

var exportGlobalErrorCauseWrapper = function (ERROR_NAME, wrapper) {
  var O = {};
  O[ERROR_NAME] = wrapErrorConstructorWithCause(ERROR_NAME, wrapper, FORCED);
  $({ global: true, constructor: true, arity: 1, forced: FORCED }, O);
};

var exportWebAssemblyErrorCauseWrapper = function (ERROR_NAME, wrapper) {
  if (WebAssembly && WebAssembly[ERROR_NAME]) {
    var O = {};
    O[ERROR_NAME] = wrapErrorConstructorWithCause(WEB_ASSEMBLY + '.' + ERROR_NAME, wrapper, FORCED);
    $({ target: WEB_ASSEMBLY, stat: true, constructor: true, arity: 1, forced: FORCED }, O);
  }
};

// https://tc39.es/ecma262/#sec-nativeerror
exportGlobalErrorCauseWrapper('Error', function (init) {
  return function Error(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('EvalError', function (init) {
  return function EvalError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('RangeError', function (init) {
  return function RangeError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('ReferenceError', function (init) {
  return function ReferenceError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('SyntaxError', function (init) {
  return function SyntaxError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('TypeError', function (init) {
  return function TypeError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('URIError', function (init) {
  return function URIError(message) { return apply(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('CompileError', function (init) {
  return function CompileError(message) { return apply(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('LinkError', function (init) {
  return function LinkError(message) { return apply(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('RuntimeError', function (init) {
  return function RuntimeError(message) { return apply(init, this, arguments); };
});


/***/ }),

/***/ 2010:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(3724);
var FUNCTION_NAME_EXISTS = (__webpack_require__(350).EXISTS);
var uncurryThis = __webpack_require__(9504);
var defineBuiltInAccessor = __webpack_require__(2106);

var FunctionPrototype = Function.prototype;
var functionToString = uncurryThis(FunctionPrototype.toString);
var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
var regExpExec = uncurryThis(nameRE.exec);
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
  defineBuiltInAccessor(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return regExpExec(nameRE, functionToString(this))[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ 3110:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6518);
var getBuiltIn = __webpack_require__(7751);
var apply = __webpack_require__(8745);
var call = __webpack_require__(9565);
var uncurryThis = __webpack_require__(9504);
var fails = __webpack_require__(9039);
var isCallable = __webpack_require__(4901);
var isSymbol = __webpack_require__(757);
var arraySlice = __webpack_require__(7680);
var getReplacerFunction = __webpack_require__(6933);
var NATIVE_SYMBOL = __webpack_require__(4495);

var $String = String;
var $stringify = getBuiltIn('JSON', 'stringify');
var exec = uncurryThis(/./.exec);
var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var replace = uncurryThis(''.replace);
var numberToString = uncurryThis(1.0.toString);

var tester = /[\uD800-\uDFFF]/g;
var low = /^[\uD800-\uDBFF]$/;
var hi = /^[\uDC00-\uDFFF]$/;

var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL || fails(function () {
  var symbol = getBuiltIn('Symbol')('stringify detection');
  // MS Edge converts symbol values to JSON as {}
  return $stringify([symbol]) !== '[null]'
    // WebKit converts symbol values to JSON as null
    || $stringify({ a: symbol }) !== '{}'
    // V8 throws on boxed symbols
    || $stringify(Object(symbol)) !== '{}';
});

// https://github.com/tc39/proposal-well-formed-stringify
var ILL_FORMED_UNICODE = fails(function () {
  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
    || $stringify('\uDEAD') !== '"\\udead"';
});

var stringifyWithSymbolsFix = function (it, replacer) {
  var args = arraySlice(arguments);
  var $replacer = getReplacerFunction(replacer);
  if (!isCallable($replacer) && (it === undefined || isSymbol(it))) return; // IE8 returns string on undefined
  args[1] = function (key, value) {
    // some old implementations (like WebKit) could pass numbers as keys
    if (isCallable($replacer)) value = call($replacer, this, $String(key), value);
    if (!isSymbol(value)) return value;
  };
  return apply($stringify, null, args);
};

var fixIllFormed = function (match, offset, string) {
  var prev = charAt(string, offset - 1);
  var next = charAt(string, offset + 1);
  if ((exec(low, match) && !exec(hi, next)) || (exec(hi, match) && !exec(low, prev))) {
    return '\\u' + numberToString(charCodeAt(match, 0), 16);
  } return match;
};

if ($stringify) {
  // `JSON.stringify` method
  // https://tc39.es/ecma262/#sec-json.stringify
  $({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = arraySlice(arguments);
      var result = apply(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
      return ILL_FORMED_UNICODE && typeof result == 'string' ? replace(result, tester, fixIllFormed) : result;
    }
  });
}


/***/ }),

/***/ 2892:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6518);
var IS_PURE = __webpack_require__(6395);
var DESCRIPTORS = __webpack_require__(3724);
var globalThis = __webpack_require__(4576);
var path = __webpack_require__(9167);
var uncurryThis = __webpack_require__(9504);
var isForced = __webpack_require__(2796);
var hasOwn = __webpack_require__(9297);
var inheritIfRequired = __webpack_require__(3167);
var isPrototypeOf = __webpack_require__(1625);
var isSymbol = __webpack_require__(757);
var toPrimitive = __webpack_require__(2777);
var fails = __webpack_require__(9039);
var getOwnPropertyNames = (__webpack_require__(8480).f);
var getOwnPropertyDescriptor = (__webpack_require__(7347).f);
var defineProperty = (__webpack_require__(4913).f);
var thisNumberValue = __webpack_require__(1240);
var trim = (__webpack_require__(3802).trim);

var NUMBER = 'Number';
var NativeNumber = globalThis[NUMBER];
var PureNumberNamespace = path[NUMBER];
var NumberPrototype = NativeNumber.prototype;
var TypeError = globalThis.TypeError;
var stringSlice = uncurryThis(''.slice);
var charCodeAt = uncurryThis(''.charCodeAt);

// `ToNumeric` abstract operation
// https://tc39.es/ecma262/#sec-tonumeric
var toNumeric = function (value) {
  var primValue = toPrimitive(value, 'number');
  return typeof primValue == 'bigint' ? primValue : toNumber(primValue);
};

// `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, 'number');
  var first, third, radix, maxCode, digits, length, index, code;
  if (isSymbol(it)) throw new TypeError('Cannot convert a Symbol value to a number');
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = charCodeAt(it, 0);
    if (first === 43 || first === 45) {
      third = charCodeAt(it, 2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (charCodeAt(it, 1)) {
        // fast equal of /^0b[01]+$/i
        case 66:
        case 98:
          radix = 2;
          maxCode = 49;
          break;
        // fast equal of /^0o[0-7]+$/i
        case 79:
        case 111:
          radix = 8;
          maxCode = 55;
          break;
        default:
          return +it;
      }
      digits = stringSlice(it, 2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = charCodeAt(digits, index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

var FORCED = isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'));

var calledWithNew = function (dummy) {
  // includes check on 1..constructor(foo) case
  return isPrototypeOf(NumberPrototype, dummy) && fails(function () { thisNumberValue(dummy); });
};

// `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor
var NumberWrapper = function Number(value) {
  var n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value));
  return calledWithNew(this) ? inheritIfRequired(Object(n), this, NumberWrapper) : n;
};

NumberWrapper.prototype = NumberPrototype;
if (FORCED && !IS_PURE) NumberPrototype.constructor = NumberWrapper;

$({ global: true, constructor: true, wrap: true, forced: FORCED }, {
  Number: NumberWrapper
});

// Use `internal/copy-constructor-properties` helper in `core-js@4`
var copyConstructorProperties = function (target, source) {
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(source) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,' +
    // ESNext
    'fromString,range'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (hasOwn(source, key = keys[j]) && !hasOwn(target, key)) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

if (IS_PURE && PureNumberNamespace) copyConstructorProperties(path[NUMBER], PureNumberNamespace);
if (FORCED || IS_PURE) copyConstructorProperties(path[NUMBER], NativeNumber);


/***/ }),

/***/ 9085:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6518);
var assign = __webpack_require__(4213);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ 3851:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6518);
var fails = __webpack_require__(9039);
var toIndexedObject = __webpack_require__(5397);
var nativeGetOwnPropertyDescriptor = (__webpack_require__(7347).f);
var DESCRIPTORS = __webpack_require__(3724);

var FORCED = !DESCRIPTORS || fails(function () { nativeGetOwnPropertyDescriptor(1); });

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ 1278:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6518);
var DESCRIPTORS = __webpack_require__(3724);
var ownKeys = __webpack_require__(5031);
var toIndexedObject = __webpack_require__(5397);
var getOwnPropertyDescriptorModule = __webpack_require__(7347);
var createProperty = __webpack_require__(4659);

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

/***/ 9773:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6518);
var NATIVE_SYMBOL = __webpack_require__(4495);
var fails = __webpack_require__(9039);
var getOwnPropertySymbolsModule = __webpack_require__(3717);
var toObject = __webpack_require__(8981);

// V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FORCED = !NATIVE_SYMBOL || fails(function () { getOwnPropertySymbolsModule.f(1); });

// `Object.getOwnPropertySymbols` method
// https://tc39.es/ecma262/#sec-object.getownpropertysymbols
$({ target: 'Object', stat: true, forced: FORCED }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    var $getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject(it)) : [];
  }
});


/***/ }),

/***/ 9432:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6518);
var toObject = __webpack_require__(8981);
var nativeKeys = __webpack_require__(1072);
var fails = __webpack_require__(9039);

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ 6099:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(2140);
var defineBuiltIn = __webpack_require__(6840);
var toString = __webpack_require__(3179);

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  defineBuiltIn(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ 6499:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6518);
var call = __webpack_require__(9565);
var aCallable = __webpack_require__(9306);
var newPromiseCapabilityModule = __webpack_require__(6043);
var perform = __webpack_require__(1103);
var iterate = __webpack_require__(2652);
var PROMISE_STATICS_INCORRECT_ITERATION = __webpack_require__(537);

// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call($promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ 2003:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6518);
var IS_PURE = __webpack_require__(6395);
var FORCED_PROMISE_CONSTRUCTOR = (__webpack_require__(916).CONSTRUCTOR);
var NativePromiseConstructor = __webpack_require__(550);
var getBuiltIn = __webpack_require__(7751);
var isCallable = __webpack_require__(4901);
var defineBuiltIn = __webpack_require__(6840);

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
$({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR, real: true }, {
  'catch': function (onRejected) {
    return this.then(undefined, onRejected);
  }
});

// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
if (!IS_PURE && isCallable(NativePromiseConstructor)) {
  var method = getBuiltIn('Promise').prototype['catch'];
  if (NativePromisePrototype['catch'] !== method) {
    defineBuiltIn(NativePromisePrototype, 'catch', method, { unsafe: true });
  }
}


/***/ }),

/***/ 436:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6518);
var IS_PURE = __webpack_require__(6395);
var IS_NODE = __webpack_require__(8574);
var globalThis = __webpack_require__(4576);
var call = __webpack_require__(9565);
var defineBuiltIn = __webpack_require__(6840);
var setPrototypeOf = __webpack_require__(2967);
var setToStringTag = __webpack_require__(687);
var setSpecies = __webpack_require__(7633);
var aCallable = __webpack_require__(9306);
var isCallable = __webpack_require__(4901);
var isObject = __webpack_require__(34);
var anInstance = __webpack_require__(679);
var speciesConstructor = __webpack_require__(2293);
var task = (__webpack_require__(9225).set);
var microtask = __webpack_require__(1955);
var hostReportErrors = __webpack_require__(3138);
var perform = __webpack_require__(1103);
var Queue = __webpack_require__(8265);
var InternalStateModule = __webpack_require__(1181);
var NativePromiseConstructor = __webpack_require__(550);
var PromiseConstructorDetection = __webpack_require__(916);
var newPromiseCapabilityModule = __webpack_require__(6043);

var PROMISE = 'Promise';
var FORCED_PROMISE_CONSTRUCTOR = PromiseConstructorDetection.CONSTRUCTOR;
var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var setInternalState = InternalStateModule.set;
var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var PromiseConstructor = NativePromiseConstructor;
var PromisePrototype = NativePromisePrototype;
var TypeError = globalThis.TypeError;
var document = globalThis.document;
var process = globalThis.process;
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;

var DISPATCH_EVENT = !!(document && document.createEvent && globalThis.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;

var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && isCallable(then = it.then) ? then : false;
};

var callReaction = function (reaction, state) {
  var value = state.value;
  var ok = state.state === FULFILLED;
  var handler = ok ? reaction.ok : reaction.fail;
  var resolve = reaction.resolve;
  var reject = reaction.reject;
  var domain = reaction.domain;
  var result, then, exited;
  try {
    if (handler) {
      if (!ok) {
        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
        state.rejection = HANDLED;
      }
      if (handler === true) result = value;
      else {
        if (domain) domain.enter();
        result = handler(value); // can throw
        if (domain) {
          domain.exit();
          exited = true;
        }
      }
      if (result === reaction.promise) {
        reject(new TypeError('Promise-chain cycle'));
      } else if (then = isThenable(result)) {
        call(then, result, resolve, reject);
      } else resolve(result);
    } else reject(value);
  } catch (error) {
    if (domain && !exited) domain.exit();
    reject(error);
  }
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  microtask(function () {
    var reactions = state.reactions;
    var reaction;
    while (reaction = reactions.get()) {
      callReaction(reaction, state);
    }
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    globalThis.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = globalThis['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  call(task, globalThis, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  call(task, globalThis, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw new TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          call(then, value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED_PROMISE_CONSTRUCTOR) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromisePrototype);
    aCallable(executor);
    call(Internal, this);
    var state = getInternalPromiseState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };

  PromisePrototype = PromiseConstructor.prototype;

  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: new Queue(),
      rejection: false,
      state: PENDING,
      value: null
    });
  };

  // `Promise.prototype.then` method
  // https://tc39.es/ecma262/#sec-promise.prototype.then
  Internal.prototype = defineBuiltIn(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
    var state = getInternalPromiseState(this);
    var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
    state.parent = true;
    reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
    reaction.fail = isCallable(onRejected) && onRejected;
    reaction.domain = IS_NODE ? process.domain : undefined;
    if (state.state === PENDING) state.reactions.add(reaction);
    else microtask(function () {
      callReaction(reaction, state);
    });
    return reaction.promise;
  });

  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalPromiseState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };

  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && isCallable(NativePromiseConstructor) && NativePromisePrototype !== Object.prototype) {
    nativeThen = NativePromisePrototype.then;

    if (!NATIVE_PROMISE_SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      defineBuiltIn(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          call(nativeThen, that, resolve, reject);
        }).then(onFulfilled, onRejected);
      // https://github.com/zloirock/core-js/issues/640
      }, { unsafe: true });
    }

    // make `.constructor === Promise` work for native promise-based APIs
    try {
      delete NativePromisePrototype.constructor;
    } catch (error) { /* empty */ }

    // make `instanceof Promise` work for native promise-based APIs
    if (setPrototypeOf) {
      setPrototypeOf(NativePromisePrototype, PromisePrototype);
    }
  }
}

$({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);


/***/ }),

/***/ 3362:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove this module from `core-js@4` since it's split to modules listed below
__webpack_require__(436);
__webpack_require__(6499);
__webpack_require__(2003);
__webpack_require__(7743);
__webpack_require__(1481);
__webpack_require__(280);


/***/ }),

/***/ 7743:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6518);
var call = __webpack_require__(9565);
var aCallable = __webpack_require__(9306);
var newPromiseCapabilityModule = __webpack_require__(6043);
var perform = __webpack_require__(1103);
var iterate = __webpack_require__(2652);
var PROMISE_STATICS_INCORRECT_ITERATION = __webpack_require__(537);

// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      iterate(iterable, function (promise) {
        call($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ 1481:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6518);
var newPromiseCapabilityModule = __webpack_require__(6043);
var FORCED_PROMISE_CONSTRUCTOR = (__webpack_require__(916).CONSTRUCTOR);

// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
$({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  reject: function reject(r) {
    var capability = newPromiseCapabilityModule.f(this);
    var capabilityReject = capability.reject;
    capabilityReject(r);
    return capability.promise;
  }
});


/***/ }),

/***/ 280:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6518);
var getBuiltIn = __webpack_require__(7751);
var IS_PURE = __webpack_require__(6395);
var NativePromiseConstructor = __webpack_require__(550);
var FORCED_PROMISE_CONSTRUCTOR = (__webpack_require__(916).CONSTRUCTOR);
var promiseResolve = __webpack_require__(3438);

var PromiseConstructorWrapper = getBuiltIn('Promise');
var CHECK_WRAPPER = IS_PURE && !FORCED_PROMISE_CONSTRUCTOR;

// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
$({ target: 'Promise', stat: true, forced: IS_PURE || FORCED_PROMISE_CONSTRUCTOR }, {
  resolve: function resolve(x) {
    return promiseResolve(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor : this, x);
  }
});


/***/ }),

/***/ 4864:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(3724);
var globalThis = __webpack_require__(4576);
var uncurryThis = __webpack_require__(9504);
var isForced = __webpack_require__(2796);
var inheritIfRequired = __webpack_require__(3167);
var createNonEnumerableProperty = __webpack_require__(6699);
var create = __webpack_require__(2360);
var getOwnPropertyNames = (__webpack_require__(8480).f);
var isPrototypeOf = __webpack_require__(1625);
var isRegExp = __webpack_require__(788);
var toString = __webpack_require__(655);
var getRegExpFlags = __webpack_require__(1034);
var stickyHelpers = __webpack_require__(8429);
var proxyAccessor = __webpack_require__(1056);
var defineBuiltIn = __webpack_require__(6840);
var fails = __webpack_require__(9039);
var hasOwn = __webpack_require__(9297);
var enforceInternalState = (__webpack_require__(1181).enforce);
var setSpecies = __webpack_require__(7633);
var wellKnownSymbol = __webpack_require__(8227);
var UNSUPPORTED_DOT_ALL = __webpack_require__(3635);
var UNSUPPORTED_NCG = __webpack_require__(8814);

var MATCH = wellKnownSymbol('match');
var NativeRegExp = globalThis.RegExp;
var RegExpPrototype = NativeRegExp.prototype;
var SyntaxError = globalThis.SyntaxError;
var exec = uncurryThis(RegExpPrototype.exec);
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);
// TODO: Use only proper RegExpIdentifierName
var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var MISSED_STICKY = stickyHelpers.MISSED_STICKY;
var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

var BASE_FORCED = DESCRIPTORS &&
  (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails(function () {
    re2[MATCH] = false;
    // RegExp constructor can alter flags and IsRegExp works correct with @@match
    // eslint-disable-next-line sonar/inconsistent-function-call -- required for testing
    return NativeRegExp(re1) !== re1 || NativeRegExp(re2) === re2 || String(NativeRegExp(re1, 'i')) !== '/a/i';
  }));

var handleDotAll = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var brackets = false;
  var chr;
  for (; index <= length; index++) {
    chr = charAt(string, index);
    if (chr === '\\') {
      result += chr + charAt(string, ++index);
      continue;
    }
    if (!brackets && chr === '.') {
      result += '[\\s\\S]';
    } else {
      if (chr === '[') {
        brackets = true;
      } else if (chr === ']') {
        brackets = false;
      } result += chr;
    }
  } return result;
};

var handleNCG = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var named = [];
  var names = create(null);
  var brackets = false;
  var ncg = false;
  var groupid = 0;
  var groupname = '';
  var chr;
  for (; index <= length; index++) {
    chr = charAt(string, index);
    if (chr === '\\') {
      chr += charAt(string, ++index);
    } else if (chr === ']') {
      brackets = false;
    } else if (!brackets) switch (true) {
      case chr === '[':
        brackets = true;
        break;
      case chr === '(':
        result += chr;
        // ignore non-capturing groups
        if (stringSlice(string, index + 1, index + 3) === '?:') {
          continue;
        }
        if (exec(IS_NCG, stringSlice(string, index + 1))) {
          index += 2;
          ncg = true;
        }
        groupid++;
        continue;
      case chr === '>' && ncg:
        if (groupname === '' || hasOwn(names, groupname)) {
          throw new SyntaxError('Invalid capture group name');
        }
        names[groupname] = true;
        named[named.length] = [groupname, groupid];
        ncg = false;
        groupname = '';
        continue;
    }
    if (ncg) groupname += chr;
    else result += chr;
  } return [result, named];
};

// `RegExp` constructor
// https://tc39.es/ecma262/#sec-regexp-constructor
if (isForced('RegExp', BASE_FORCED)) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = isPrototypeOf(RegExpPrototype, this);
    var patternIsRegExp = isRegExp(pattern);
    var flagsAreUndefined = flags === undefined;
    var groups = [];
    var rawPattern = pattern;
    var rawFlags, dotAll, sticky, handled, result, state;

    if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
      return pattern;
    }

    if (patternIsRegExp || isPrototypeOf(RegExpPrototype, pattern)) {
      pattern = pattern.source;
      if (flagsAreUndefined) flags = getRegExpFlags(rawPattern);
    }

    pattern = pattern === undefined ? '' : toString(pattern);
    flags = flags === undefined ? '' : toString(flags);
    rawPattern = pattern;

    if (UNSUPPORTED_DOT_ALL && 'dotAll' in re1) {
      dotAll = !!flags && stringIndexOf(flags, 's') > -1;
      if (dotAll) flags = replace(flags, /s/g, '');
    }

    rawFlags = flags;

    if (MISSED_STICKY && 'sticky' in re1) {
      sticky = !!flags && stringIndexOf(flags, 'y') > -1;
      if (sticky && UNSUPPORTED_Y) flags = replace(flags, /y/g, '');
    }

    if (UNSUPPORTED_NCG) {
      handled = handleNCG(pattern);
      pattern = handled[0];
      groups = handled[1];
    }

    result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype, RegExpWrapper);

    if (dotAll || sticky || groups.length) {
      state = enforceInternalState(result);
      if (dotAll) {
        state.dotAll = true;
        state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
      }
      if (sticky) state.sticky = true;
      if (groups.length) state.groups = groups;
    }

    if (pattern !== rawPattern) try {
      // fails in old engines, but we have no alternatives for unsupported regex syntax
      createNonEnumerableProperty(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
    } catch (error) { /* empty */ }

    return result;
  };

  for (var keys = getOwnPropertyNames(NativeRegExp), index = 0; keys.length > index;) {
    proxyAccessor(RegExpWrapper, NativeRegExp, keys[index++]);
  }

  RegExpPrototype.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype;
  defineBuiltIn(globalThis, 'RegExp', RegExpWrapper, { constructor: true });
}

// https://tc39.es/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');


/***/ }),

/***/ 7465:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(3724);
var UNSUPPORTED_DOT_ALL = __webpack_require__(3635);
var classof = __webpack_require__(2195);
var defineBuiltInAccessor = __webpack_require__(2106);
var getInternalState = (__webpack_require__(1181).get);

var RegExpPrototype = RegExp.prototype;
var $TypeError = TypeError;

// `RegExp.prototype.dotAll` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.dotall
if (DESCRIPTORS && UNSUPPORTED_DOT_ALL) {
  defineBuiltInAccessor(RegExpPrototype, 'dotAll', {
    configurable: true,
    get: function dotAll() {
      if (this === RegExpPrototype) return;
      // We can't use InternalStateModule.getterFor because
      // we don't add metadata for regexps created by a literal.
      if (classof(this) === 'RegExp') {
        return !!getInternalState(this).dotAll;
      }
      throw new $TypeError('Incompatible receiver, RegExp required');
    }
  });
}


/***/ }),

/***/ 7495:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6518);
var exec = __webpack_require__(7323);

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ 7745:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(3724);
var MISSED_STICKY = (__webpack_require__(8429).MISSED_STICKY);
var classof = __webpack_require__(2195);
var defineBuiltInAccessor = __webpack_require__(2106);
var getInternalState = (__webpack_require__(1181).get);

var RegExpPrototype = RegExp.prototype;
var $TypeError = TypeError;

// `RegExp.prototype.sticky` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.sticky
if (DESCRIPTORS && MISSED_STICKY) {
  defineBuiltInAccessor(RegExpPrototype, 'sticky', {
    configurable: true,
    get: function sticky() {
      if (this === RegExpPrototype) return;
      // We can't use InternalStateModule.getterFor because
      // we don't add metadata for regexps created by a literal.
      if (classof(this) === 'RegExp') {
        return !!getInternalState(this).sticky;
      }
      throw new $TypeError('Incompatible receiver, RegExp required');
    }
  });
}


/***/ }),

/***/ 906:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(7495);
var $ = __webpack_require__(6518);
var call = __webpack_require__(9565);
var isCallable = __webpack_require__(4901);
var anObject = __webpack_require__(8551);
var toString = __webpack_require__(655);

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
  test: function (S) {
    var R = anObject(this);
    var string = toString(S);
    var exec = R.exec;
    if (!isCallable(exec)) return call(nativeTest, R, string);
    var result = call(exec, R, string);
    if (result === null) return false;
    anObject(result);
    return true;
  }
});


/***/ }),

/***/ 8781:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var PROPER_FUNCTION_NAME = (__webpack_require__(350).PROPER);
var defineBuiltIn = __webpack_require__(6840);
var anObject = __webpack_require__(8551);
var $toString = __webpack_require__(655);
var fails = __webpack_require__(9039);
var getRegExpFlags = __webpack_require__(1034);

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) !== '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name !== TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  defineBuiltIn(RegExpPrototype, TO_STRING, function toString() {
    var R = anObject(this);
    var pattern = $toString(R.source);
    var flags = $toString(getRegExpFlags(R));
    return '/' + pattern + '/' + flags;
  }, { unsafe: true });
}


/***/ }),

/***/ 1699:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6518);
var uncurryThis = __webpack_require__(9504);
var notARegExp = __webpack_require__(5749);
var requireObjectCoercible = __webpack_require__(7750);
var toString = __webpack_require__(655);
var correctIsRegExpLogic = __webpack_require__(1436);

var stringIndexOf = uncurryThis(''.indexOf);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~stringIndexOf(
      toString(requireObjectCoercible(this)),
      toString(notARegExp(searchString)),
      arguments.length > 1 ? arguments[1] : undefined
    );
  }
});


/***/ }),

/***/ 7764:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var charAt = (__webpack_require__(8183).charAt);
var toString = __webpack_require__(655);
var InternalStateModule = __webpack_require__(1181);
var defineIterator = __webpack_require__(1088);
var createIterResultObject = __webpack_require__(2529);

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: toString(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return createIterResultObject(undefined, true);
  point = charAt(string, index);
  state.index += point.length;
  return createIterResultObject(point, false);
});


/***/ }),

/***/ 9978:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6518);
var call = __webpack_require__(9565);
var uncurryThis = __webpack_require__(9504);
var requireObjectCoercible = __webpack_require__(7750);
var isCallable = __webpack_require__(4901);
var isNullOrUndefined = __webpack_require__(4117);
var isRegExp = __webpack_require__(788);
var toString = __webpack_require__(655);
var getMethod = __webpack_require__(5966);
var getRegExpFlags = __webpack_require__(1034);
var getSubstitution = __webpack_require__(2478);
var wellKnownSymbol = __webpack_require__(8227);
var IS_PURE = __webpack_require__(6395);

var REPLACE = wellKnownSymbol('replace');
var $TypeError = TypeError;
var indexOf = uncurryThis(''.indexOf);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);
var max = Math.max;

// `String.prototype.replaceAll` method
// https://tc39.es/ecma262/#sec-string.prototype.replaceall
$({ target: 'String', proto: true }, {
  replaceAll: function replaceAll(searchValue, replaceValue) {
    var O = requireObjectCoercible(this);
    var IS_REG_EXP, flags, replacer, string, searchString, functionalReplace, searchLength, advanceBy, position, replacement;
    var endOfLastMatch = 0;
    var result = '';
    if (!isNullOrUndefined(searchValue)) {
      IS_REG_EXP = isRegExp(searchValue);
      if (IS_REG_EXP) {
        flags = toString(requireObjectCoercible(getRegExpFlags(searchValue)));
        if (!~indexOf(flags, 'g')) throw new $TypeError('`.replaceAll` does not allow non-global regexes');
      }
      replacer = getMethod(searchValue, REPLACE);
      if (replacer) return call(replacer, searchValue, O, replaceValue);
      if (IS_PURE && IS_REG_EXP) return replace(toString(O), searchValue, replaceValue);
    }
    string = toString(O);
    searchString = toString(searchValue);
    functionalReplace = isCallable(replaceValue);
    if (!functionalReplace) replaceValue = toString(replaceValue);
    searchLength = searchString.length;
    advanceBy = max(1, searchLength);
    position = indexOf(string, searchString);
    while (position !== -1) {
      replacement = functionalReplace
        ? toString(replaceValue(searchString, position, string))
        : getSubstitution(searchString, string, position, [], undefined, replaceValue);
      result += stringSlice(string, endOfLastMatch, position) + replacement;
      endOfLastMatch = position + searchLength;
      position = position + advanceBy > string.length ? -1 : indexOf(string, searchString, position + advanceBy);
    }
    if (endOfLastMatch < string.length) {
      result += stringSlice(string, endOfLastMatch);
    }
    return result;
  }
});


/***/ }),

/***/ 5440:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var apply = __webpack_require__(8745);
var call = __webpack_require__(9565);
var uncurryThis = __webpack_require__(9504);
var fixRegExpWellKnownSymbolLogic = __webpack_require__(9228);
var fails = __webpack_require__(9039);
var anObject = __webpack_require__(8551);
var isCallable = __webpack_require__(4901);
var isNullOrUndefined = __webpack_require__(4117);
var toIntegerOrInfinity = __webpack_require__(1291);
var toLength = __webpack_require__(8014);
var toString = __webpack_require__(655);
var requireObjectCoercible = __webpack_require__(7750);
var advanceStringIndex = __webpack_require__(7829);
var getMethod = __webpack_require__(5966);
var getSubstitution = __webpack_require__(2478);
var regExpExec = __webpack_require__(6682);
var wellKnownSymbol = __webpack_require__(8227);

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;
var concat = uncurryThis([].concat);
var push = uncurryThis([].push);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = isNullOrUndefined(searchValue) ? undefined : getMethod(searchValue, REPLACE);
      return replacer
        ? call(replacer, searchValue, O, replaceValue)
        : call(nativeReplace, toString(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject(this);
      var S = toString(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString(replaceValue);

      var global = rx.global;
      var fullUnicode;
      if (global) {
        fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }

      var results = [];
      var result;
      while (true) {
        result = regExpExec(rx, S);
        if (result === null) break;

        push(results, result);
        if (!global) break;

        var matchStr = toString(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString(result[0]);
        var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = [];
        var replacement;
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
          replacement = toString(apply(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }

      return accumulatedResult + stringSlice(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);


/***/ }),

/***/ 1392:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6518);
var uncurryThis = __webpack_require__(7476);
var getOwnPropertyDescriptor = (__webpack_require__(7347).f);
var toLength = __webpack_require__(8014);
var toString = __webpack_require__(655);
var notARegExp = __webpack_require__(5749);
var requireObjectCoercible = __webpack_require__(7750);
var correctIsRegExpLogic = __webpack_require__(1436);
var IS_PURE = __webpack_require__(6395);

var stringSlice = uncurryThis(''.slice);
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.startsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.startswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = toString(requireObjectCoercible(this));
    notARegExp(searchString);
    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = toString(searchString);
    return stringSlice(that, index, index + search.length) === search;
  }
});


/***/ }),

/***/ 2762:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6518);
var $trim = (__webpack_require__(3802).trim);
var forcedStringTrimMethod = __webpack_require__(706);

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),

/***/ 6761:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6518);
var globalThis = __webpack_require__(4576);
var call = __webpack_require__(9565);
var uncurryThis = __webpack_require__(9504);
var IS_PURE = __webpack_require__(6395);
var DESCRIPTORS = __webpack_require__(3724);
var NATIVE_SYMBOL = __webpack_require__(4495);
var fails = __webpack_require__(9039);
var hasOwn = __webpack_require__(9297);
var isPrototypeOf = __webpack_require__(1625);
var anObject = __webpack_require__(8551);
var toIndexedObject = __webpack_require__(5397);
var toPropertyKey = __webpack_require__(6969);
var $toString = __webpack_require__(655);
var createPropertyDescriptor = __webpack_require__(6980);
var nativeObjectCreate = __webpack_require__(2360);
var objectKeys = __webpack_require__(1072);
var getOwnPropertyNamesModule = __webpack_require__(8480);
var getOwnPropertyNamesExternal = __webpack_require__(298);
var getOwnPropertySymbolsModule = __webpack_require__(3717);
var getOwnPropertyDescriptorModule = __webpack_require__(7347);
var definePropertyModule = __webpack_require__(4913);
var definePropertiesModule = __webpack_require__(6801);
var propertyIsEnumerableModule = __webpack_require__(8773);
var defineBuiltIn = __webpack_require__(6840);
var defineBuiltInAccessor = __webpack_require__(2106);
var shared = __webpack_require__(5745);
var sharedKey = __webpack_require__(6119);
var hiddenKeys = __webpack_require__(421);
var uid = __webpack_require__(3392);
var wellKnownSymbol = __webpack_require__(8227);
var wrappedWellKnownSymbolModule = __webpack_require__(1951);
var defineWellKnownSymbol = __webpack_require__(511);
var defineSymbolToPrimitive = __webpack_require__(8242);
var setToStringTag = __webpack_require__(687);
var InternalStateModule = __webpack_require__(1181);
var $forEach = (__webpack_require__(9213).forEach);

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';

var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);

var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = globalThis.Symbol;
var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
var RangeError = globalThis.RangeError;
var TypeError = globalThis.TypeError;
var QObject = globalThis.QObject;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var push = uncurryThis([].push);

var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var WellKnownSymbolsStore = shared('wks');

// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var fallbackDefineProperty = function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
};

var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a !== 7;
}) ? fallbackDefineProperty : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPropertyKey(P);
  anObject(Attributes);
  if (hasOwn(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!hasOwn(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, nativeObjectCreate(null)));
      O[HIDDEN][key] = true;
    } else {
      if (hasOwn(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || call($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPropertyKey(V);
  var enumerable = call(nativePropertyIsEnumerable, this, P);
  if (this === ObjectPrototype && hasOwn(AllSymbols, P) && !hasOwn(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !hasOwn(this, P) || !hasOwn(AllSymbols, P) || hasOwn(this, HIDDEN) && this[HIDDEN][P]
    ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPropertyKey(P);
  if (it === ObjectPrototype && hasOwn(AllSymbols, key) && !hasOwn(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && hasOwn(AllSymbols, key) && !(hasOwn(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!hasOwn(AllSymbols, key) && !hasOwn(hiddenKeys, key)) push(result, key);
  });
  return result;
};

var $getOwnPropertySymbols = function (O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (hasOwn(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn(ObjectPrototype, key))) {
      push(result, AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (isPrototypeOf(SymbolPrototype, this)) throw new TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      var $this = this === undefined ? globalThis : this;
      if ($this === ObjectPrototype) call(setter, ObjectPrototypeSymbols, value);
      if (hasOwn($this, HIDDEN) && hasOwn($this[HIDDEN], tag)) $this[HIDDEN][tag] = false;
      var descriptor = createPropertyDescriptor(1, value);
      try {
        setSymbolDescriptor($this, tag, descriptor);
      } catch (error) {
        if (!(error instanceof RangeError)) throw error;
        fallbackDefineProperty($this, tag, descriptor);
      }
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  SymbolPrototype = $Symbol[PROTOTYPE];

  defineBuiltIn(SymbolPrototype, 'toString', function toString() {
    return getInternalState(this).tag;
  });

  defineBuiltIn($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  definePropertiesModule.f = $defineProperties;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    defineBuiltInAccessor(SymbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      defineBuiltIn(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, constructor: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
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
  getOwnPropertyNames: $getOwnPropertyNames
});

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
defineSymbolToPrimitive();

// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ 9463:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__(6518);
var DESCRIPTORS = __webpack_require__(3724);
var globalThis = __webpack_require__(4576);
var uncurryThis = __webpack_require__(9504);
var hasOwn = __webpack_require__(9297);
var isCallable = __webpack_require__(4901);
var isPrototypeOf = __webpack_require__(1625);
var toString = __webpack_require__(655);
var defineBuiltInAccessor = __webpack_require__(2106);
var copyConstructorProperties = __webpack_require__(7740);

var NativeSymbol = globalThis.Symbol;
var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;

if (DESCRIPTORS && isCallable(NativeSymbol) && (!('description' in SymbolPrototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString(arguments[0]);
    var result = isPrototypeOf(SymbolPrototype, this)
      // eslint-disable-next-line sonar/inconsistent-function-call -- ok
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };

  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  SymbolWrapper.prototype = SymbolPrototype;
  SymbolPrototype.constructor = SymbolWrapper;

  var NATIVE_SYMBOL = String(NativeSymbol('description detection')) === 'Symbol(description detection)';
  var thisSymbolValue = uncurryThis(SymbolPrototype.valueOf);
  var symbolDescriptiveString = uncurryThis(SymbolPrototype.toString);
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  var replace = uncurryThis(''.replace);
  var stringSlice = uncurryThis(''.slice);

  defineBuiltInAccessor(SymbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = thisSymbolValue(this);
      if (hasOwn(EmptyStringDescriptionStore, symbol)) return '';
      var string = symbolDescriptiveString(symbol);
      var desc = NATIVE_SYMBOL ? stringSlice(string, 7, -1) : replace(string, regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, constructor: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ 1510:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6518);
var getBuiltIn = __webpack_require__(7751);
var hasOwn = __webpack_require__(9297);
var toString = __webpack_require__(655);
var shared = __webpack_require__(5745);
var NATIVE_SYMBOL_REGISTRY = __webpack_require__(1296);

var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');

// `Symbol.for` method
// https://tc39.es/ecma262/#sec-symbol.for
$({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
  'for': function (key) {
    var string = toString(key);
    if (hasOwn(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = getBuiltIn('Symbol')(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  }
});


/***/ }),

/***/ 2259:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var defineWellKnownSymbol = __webpack_require__(511);

// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ 2675:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove this module from `core-js@4` since it's split to modules listed below
__webpack_require__(6761);
__webpack_require__(1510);
__webpack_require__(7812);
__webpack_require__(3110);
__webpack_require__(9773);


/***/ }),

/***/ 7812:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6518);
var hasOwn = __webpack_require__(9297);
var isSymbol = __webpack_require__(757);
var tryToString = __webpack_require__(6823);
var shared = __webpack_require__(5745);
var NATIVE_SYMBOL_REGISTRY = __webpack_require__(1296);

var SymbolToStringRegistry = shared('symbol-to-string-registry');

// `Symbol.keyFor` method
// https://tc39.es/ecma262/#sec-symbol.keyfor
$({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw new TypeError(tryToString(sym) + ' is not a symbol');
    if (hasOwn(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  }
});


/***/ }),

/***/ 5700:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var defineWellKnownSymbol = __webpack_require__(511);
var defineSymbolToPrimitive = __webpack_require__(8242);

// `Symbol.toPrimitive` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.toprimitive
defineWellKnownSymbol('toPrimitive');

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
defineSymbolToPrimitive();


/***/ }),

/***/ 3500:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(4576);
var DOMIterables = __webpack_require__(7400);
var DOMTokenListPrototype = __webpack_require__(9296);
var forEach = __webpack_require__(235);
var createNonEnumerableProperty = __webpack_require__(6699);

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(globalThis[COLLECTION_NAME] && globalThis[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);


/***/ }),

/***/ 2953:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(4576);
var DOMIterables = __webpack_require__(7400);
var DOMTokenListPrototype = __webpack_require__(9296);
var ArrayIteratorMethods = __webpack_require__(3792);
var createNonEnumerableProperty = __webpack_require__(6699);
var setToStringTag = __webpack_require__(687);
var wellKnownSymbol = __webpack_require__(8227);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    setToStringTag(CollectionPrototype, COLLECTION_NAME, true);
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(globalThis[COLLECTION_NAME] && globalThis[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  VueTelInput: function() { return /* reexport */ vue_tel_input; },
  "default": function() { return /* binding */ entry_lib; },
  install: function() { return /* reexport */ install; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__(5003)
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(2675);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(2008);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(4114);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(3851);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(1278);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(9432);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(6099);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(3500);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(9463);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(2259);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(3792);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(7764);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(2953);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js







function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.to-primitive.js
var es_symbol_to_primitive = __webpack_require__(5700);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.error.cause.js
var es_error_cause = __webpack_require__(6280);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.date.to-primitive.js
var es_date_to_primitive = __webpack_require__(9572);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(2892);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js





function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js

function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js









function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js








function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(3418);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(4782);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(2010);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(7495);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.test.js
var es_regexp_test = __webpack_require__(906);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(8781);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js









function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(2062);
;// CONCATENATED MODULE: ./src/assets/all-countries.js


// Array of country objects for the flag dropdown.

// Here is the criteria for the plugin to support a given country/territory
// - It has an iso2 code: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
// - It has it's own country calling code (it is not a sub-region of another country): https://en.wikipedia.org/wiki/List_of_country_calling_codes
// - It has a flag in the region-flags project: https://github.com/behdad/region-flags/tree/gh-pages/png
// - It is supported by libphonenumber (it must be listed on this page): https://github.com/googlei18n/libphonenumber/blob/master/resources/ShortNumberMetadata.xml

// Each country array has the following information:
// [
//    Country name,
//    iso2 code,
//    International dial code,
//    Order (if >1 country with same dial code),
//    Area codes
// ]
var allCountries = [['Afghanistan (‫افغانستان‬‎)', 'af', '93'], ['Albania (Shqipëri)', 'al', '355'], ['Algeria (‫الجزائر‬‎)', 'dz', '213'], ['American Samoa', 'as', '1', 5, ['684']], ['Andorra', 'ad', '376'], ['Angola', 'ao', '244'], ['Anguilla', 'ai', '1', 6, ['264']], ['Antigua and Barbuda', 'ag', '1', 7, ['268']], ['Argentina', 'ar', '54'], ['Armenia (Հայաստան)', 'am', '374'], ['Aruba', 'aw', '297'], ['Ascension Island', 'ac', '247'], ['Australia', 'au', '61', 0], ['Austria (Österreich)', 'at', '43'], ['Azerbaijan (Azərbaycan)', 'az', '994'], ['Bahamas', 'bs', '1', 8, ['242']], ['Bahrain (‫البحرين‬‎)', 'bh', '973'], ['Bangladesh (বাংলাদেশ)', 'bd', '880'], ['Barbados', 'bb', '1', 9, ['246']], ['Belarus (Беларусь)', 'by', '375'], ['Belgium (België)', 'be', '32'], ['Belize', 'bz', '501'], ['Benin (Bénin)', 'bj', '229'], ['Bermuda', 'bm', '1', 10, ['441']], ['Bhutan (འབྲུག)', 'bt', '975'], ['Bolivia', 'bo', '591'], ['Bosnia and Herzegovina (Босна и Херцеговина)', 'ba', '387'], ['Botswana', 'bw', '267'], ['Brazil (Brasil)', 'br', '55'], ['British Indian Ocean Territory', 'io', '246'], ['British Virgin Islands', 'vg', '1', 11, ['284']], ['Brunei', 'bn', '673'], ['Bulgaria (България)', 'bg', '359'], ['Burkina Faso', 'bf', '226'], ['Burundi (Uburundi)', 'bi', '257'], ['Cambodia (កម្ពុជា)', 'kh', '855'], ['Cameroon (Cameroun)', 'cm', '237'], ['Canada', 'ca', '1', 1, ['204', '226', '236', '249', '250', '263', '289', '306', '343', '354', '365', '367', '368', '382', '387', '403', '416', '418', '428', '431', '437', '438', '450', '584', '468', '474', '506', '514', '519', '548', '579', '581', '584', '587', '604', '613', '639', '647', '672', '683', '705', '709', '742', '753', '778', '780', '782', '807', '819', '825', '867', '873', '902', '905']], ['Cape Verde (Kabu Verdi)', 'cv', '238'], ['Caribbean Netherlands', 'bq', '599', 1, ['3', '4', '7']], ['Cayman Islands', 'ky', '1', 12, ['345']], ['Central African Republic (République centrafricaine)', 'cf', '236'], ['Chad (Tchad)', 'td', '235'], ['Chile', 'cl', '56'], ['China (中国)', 'cn', '86'], ['Christmas Island', 'cx', '61', 2, ['89164']], ['Cocos (Keeling) Islands', 'cc', '61', 1, ['89162']], ['Colombia', 'co', '57'], ['Comoros (‫جزر القمر‬‎)', 'km', '269'], ['Congo (DRC) (République démocratique du Congo)', 'cd', '243'], ['Congo (Republic) (Congo-Brazzaville)', 'cg', '242'], ['Cook Islands', 'ck', '682'], ['Costa Rica', 'cr', '506'], ['Côte d’Ivoire', 'ci', '225'], ['Croatia (Hrvatska)', 'hr', '385'], ['Cuba', 'cu', '53'], ['Curaçao', 'cw', '599', 0], ['Cyprus (Κύπρος)', 'cy', '357'], ['Czech Republic (Česká republika)', 'cz', '420'], ['Denmark (Danmark)', 'dk', '45'], ['Djibouti', 'dj', '253'], ['Dominica', 'dm', '1', 13, ['767']], ['Dominican Republic (República Dominicana)', 'do', '1', 2, ['809', '829', '849']], ['Ecuador', 'ec', '593'], ['Egypt (‫مصر‬‎)', 'eg', '20'], ['El Salvador', 'sv', '503'], ['Equatorial Guinea (Guinea Ecuatorial)', 'gq', '240'], ['Eritrea', 'er', '291'], ['Estonia (Eesti)', 'ee', '372'], ['Eswatini', 'sz', '268'], ['Ethiopia', 'et', '251'], ['Falkland Islands (Islas Malvinas)', 'fk', '500'], ['Faroe Islands (Føroyar)', 'fo', '298'], ['Fiji', 'fj', '679'], ['Finland (Suomi)', 'fi', '358', 0], ['France', 'fr', '33'], ['French Guiana (Guyane française)', 'gf', '594'], ['French Polynesia (Polynésie française)', 'pf', '689'], ['Gabon', 'ga', '241'], ['Gambia', 'gm', '220'], ['Georgia (საქართველო)', 'ge', '995'], ['Germany (Deutschland)', 'de', '49'], ['Ghana (Gaana)', 'gh', '233'], ['Gibraltar', 'gi', '350'], ['Greece (Ελλάδα)', 'gr', '30'], ['Greenland (Kalaallit Nunaat)', 'gl', '299'], ['Grenada', 'gd', '1', 14, ['473']], ['Guadeloupe', 'gp', '590', 0], ['Guam', 'gu', '1', 15, ['671']], ['Guatemala', 'gt', '502'], ['Guernsey', 'gg', '44', 1, ['1481', '7781', '7839', '7911']], ['Guinea (Guinée)', 'gn', '224'], ['Guinea-Bissau (Guiné Bissau)', 'gw', '245'], ['Guyana', 'gy', '592'], ['Haiti', 'ht', '509'], ['Honduras', 'hn', '504'], ['Hong Kong (香港)', 'hk', '852'], ['Hungary (Magyarország)', 'hu', '36'], ['Iceland (Ísland)', 'is', '354'], ['India (भारत)', 'in', '91'], ['Indonesia', 'id', '62'], ['Iran (‫ایران‬‎)', 'ir', '98'], ['Iraq (‫العراق‬‎)', 'iq', '964'], ['Ireland', 'ie', '353'], ['Isle of Man', 'im', '44', 2, ['1624', '74576', '7524', '7924', '7624']], ['Israel (‫ישראל‬‎)', 'il', '972'], ['Italy (Italia)', 'it', '39', 0], ['Jamaica', 'jm', '1', 4, ['876', '658']], ['Japan (日本)', 'jp', '81'], ['Jersey', 'je', '44', 3, ['1534', '7509', '7700', '7797', '7829', '7937']], ['Jordan (‫الأردن‬‎)', 'jo', '962'], ['Kazakhstan (Казахстан)', 'kz', '7', 1, ['33', '7']], ['Kenya', 'ke', '254'], ['Kiribati', 'ki', '686'], ['Kosovo', 'xk', '383'], ['Kuwait (‫الكويت‬‎)', 'kw', '965'], ['Kyrgyzstan (Кыргызстан)', 'kg', '996'], ['Laos (ລາວ)', 'la', '856'], ['Latvia (Latvija)', 'lv', '371'], ['Lebanon (‫لبنان‬‎)', 'lb', '961'], ['Lesotho', 'ls', '266'], ['Liberia', 'lr', '231'], ['Libya (‫ليبيا‬‎)', 'ly', '218'], ['Liechtenstein', 'li', '423'], ['Lithuania (Lietuva)', 'lt', '370'], ['Luxembourg', 'lu', '352'], ['Macau (澳門)', 'mo', '853'], ['Madagascar (Madagasikara)', 'mg', '261'], ['Malawi', 'mw', '265'], ['Malaysia', 'my', '60'], ['Maldives', 'mv', '960'], ['Mali', 'ml', '223'], ['Malta', 'mt', '356'], ['Marshall Islands', 'mh', '692'], ['Martinique', 'mq', '596'], ['Mauritania (‫موريتانيا‬‎)', 'mr', '222'], ['Mauritius (Moris)', 'mu', '230'], ['Mayotte', 'yt', '262', 1, ['269', '639']], ['Mexico (México)', 'mx', '52'], ['Micronesia', 'fm', '691'], ['Moldova (Republica Moldova)', 'md', '373'], ['Monaco', 'mc', '377'], ['Mongolia (Монгол)', 'mn', '976'], ['Montenegro (Crna Gora)', 'me', '382'], ['Montserrat', 'ms', '1', 16, ['664']], ['Morocco (‫المغرب‬‎)', 'ma', '212', 0], ['Mozambique (Moçambique)', 'mz', '258'], ['Myanmar (Burma) (မြန်မာ)', 'mm', '95'], ['Namibia (Namibië)', 'na', '264'], ['Nauru', 'nr', '674'], ['Nepal (नेपाल)', 'np', '977'], ['Netherlands (Nederland)', 'nl', '31'], ['New Caledonia (Nouvelle-Calédonie)', 'nc', '687'], ['New Zealand', 'nz', '64'], ['Nicaragua', 'ni', '505'], ['Niger (Nijar)', 'ne', '227'], ['Nigeria', 'ng', '234'], ['Niue', 'nu', '683'], ['Norfolk Island', 'nf', '672'], ['North Korea (조선 민주주의 인민 공화국)', 'kp', '850'], ['North Macedonia (Северна Македонија)', 'mk', '389'], ['Northern Mariana Islands', 'mp', '1', 17, ['670']], ['Norway (Norge)', 'no', '47', 0], ['Oman (‫عُمان‬‎)', 'om', '968'], ['Pakistan (‫پاکستان‬‎)', 'pk', '92'], ['Palau', 'pw', '680'], ['Palestine (‫فلسطين‬‎)', 'ps', '970'], ['Panama (Panamá)', 'pa', '507'], ['Papua New Guinea', 'pg', '675'], ['Paraguay', 'py', '595'], ['Peru (Perú)', 'pe', '51'], ['Philippines', 'ph', '63'], ['Poland (Polska)', 'pl', '48'], ['Portugal', 'pt', '351'], ['Puerto Rico', 'pr', '1', 3, ['787', '939']], ['Qatar (‫قطر‬‎)', 'qa', '974'], ['Réunion (La Réunion)', 're', '262', 0], ['Romania (România)', 'ro', '40'], ['Russia (Россия)', 'ru', '7', 0], ['Rwanda', 'rw', '250'], ['Saint Barthélemy', 'bl', '590', 1], ['Saint Helena', 'sh', '290'], ['Saint Kitts and Nevis', 'kn', '1', 18, ['869']], ['Saint Lucia', 'lc', '1', 19, ['758']], ['Saint Martin (Saint-Martin (partie française))', 'mf', '590', 2], ['Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)', 'pm', '508'], ['Saint Vincent and the Grenadines', 'vc', '1', 20, ['784']], ['Samoa', 'ws', '685'], ['San Marino', 'sm', '378'], ['São Tomé and Príncipe (São Tomé e Príncipe)', 'st', '239'], ['Saudi Arabia (‫المملكة العربية السعودية‬‎)', 'sa', '966'], ['Senegal (Sénégal)', 'sn', '221'], ['Serbia (Србија)', 'rs', '381'], ['Seychelles', 'sc', '248'], ['Sierra Leone', 'sl', '232'], ['Singapore', 'sg', '65'], ['Sint Maarten', 'sx', '1', 21, ['721']], ['Slovakia (Slovensko)', 'sk', '421'], ['Slovenia (Slovenija)', 'si', '386'], ['Solomon Islands', 'sb', '677'], ['Somalia (Soomaaliya)', 'so', '252'], ['South Africa', 'za', '27'], ['South Korea (대한민국)', 'kr', '82'], ['South Sudan (‫جنوب السودان‬‎)', 'ss', '211'], ['Spain (España)', 'es', '34'], ['Sri Lanka (ශ්‍රී ලංකාව)', 'lk', '94'], ['Sudan (‫السودان‬‎)', 'sd', '249'], ['Suriname', 'sr', '597'], ['Svalbard and Jan Mayen', 'sj', '47', 1, ['79']], ['Sweden (Sverige)', 'se', '46'], ['Switzerland (Schweiz)', 'ch', '41'], ['Syria (‫سوريا‬‎)', 'sy', '963'], ['Taiwan (台灣)', 'tw', '886'], ['Tajikistan', 'tj', '992'], ['Tanzania', 'tz', '255'], ['Thailand (ไทย)', 'th', '66'], ['Timor-Leste', 'tl', '670'], ['Togo', 'tg', '228'], ['Tokelau', 'tk', '690'], ['Tonga', 'to', '676'], ['Trinidad and Tobago', 'tt', '1', 22, ['868']], ['Tunisia (‫تونس‬‎)', 'tn', '216'], ['Turkey (Türkiye)', 'tr', '90'], ['Turkmenistan', 'tm', '993'], ['Turks and Caicos Islands', 'tc', '1', 23, ['649']], ['Tuvalu', 'tv', '688'], ['U.S. Virgin Islands', 'vi', '1', 24, ['340']], ['Uganda', 'ug', '256'], ['Ukraine (Україна)', 'ua', '380'], ['United Arab Emirates (‫الإمارات العربية المتحدة‬‎)', 'ae', '971'], ['United Kingdom', 'gb', '44', 0], ['United States', 'us', '1', 0], ['Uruguay', 'uy', '598'], ['Uzbekistan (Oʻzbekiston)', 'uz', '998'], ['Vanuatu', 'vu', '678'], ['Vatican City (Città del Vaticano)', 'va', '39', 1, ['06698']], ['Venezuela', 've', '58'], ['Vietnam (Việt Nam)', 'vn', '84'], ['Wallis and Futuna (Wallis-et-Futuna)', 'wf', '681'], ['Western Sahara (‫الصحراء الغربية‬‎)', 'eh', '212', 1, ['5288', '5289']], ['Yemen (‫اليمن‬‎)', 'ye', '967'], ['Zambia', 'zm', '260'], ['Zimbabwe', 'zw', '263'], ['Åland Islands', 'ax', '358', 1, ['18']]];
/* harmony default export */ var all_countries = (allCountries.map(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 5),
    name = _ref2[0],
    iso2 = _ref2[1],
    dialCode = _ref2[2],
    _ref2$ = _ref2[3],
    priority = _ref2$ === void 0 ? 0 : _ref2$,
    _ref2$2 = _ref2[4],
    areaCodes = _ref2$2 === void 0 ? null : _ref2$2;
  return {
    name: name,
    iso2: iso2.toUpperCase(),
    dialCode: dialCode,
    priority: priority,
    areaCodes: areaCodes
  };
}));
;// CONCATENATED MODULE: ./src/utils.js



// Credits: http://blog.vishalon.net/index.php/javascript-getting-and-setting-caret-position-in-textarea/
function setCaretPosition(ctrl, pos) {
  // Modern browsers
  if (ctrl.setSelectionRange) {
    ctrl.focus();
    ctrl.setSelectionRange(pos, pos);

    // IE8 and below
  } else if (ctrl.createTextRange) {
    var range = ctrl.createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
}
var defaultOptions = {
  allCountries: all_countries,
  autocomplete: 'on',
  autofocus: false,
  customValidate: false,
  defaultCountry: '',
  disabled: false,
  dropdownOptions: {},
  enabledCountryCode: false,
  enabledFlags: true,
  ignoredCountries: [],
  inputClasses: '',
  inputId: '',
  inputOptions: {},
  invalidMsg: '',
  maxLen: 25,
  mode: '',
  name: 'telephone',
  onlyCountries: [],
  placeholder: 'Enter a phone number',
  preferredCountries: [],
  readonly: false,
  required: false,
  validCharactersOnly: false,
  wrapperClasses: ''
};
/* harmony default export */ var utils = ({
  options: _objectSpread2({}, defaultOptions)
});
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/vue-tel-input.vue?vue&type=template&id=5f57327a

var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    class: ['vue-tel-input', _vm.wrapperClasses, {
      disabled: _vm.disabled
    }]
  }, [_c('div', {
    directives: [{
      name: "click-outside",
      rawName: "v-click-outside",
      value: _vm.clickedOutside,
      expression: "clickedOutside"
    }],
    class: ['vti__dropdown', {
      open: _vm.open
    }],
    attrs: {
      "tabindex": _vm.dropdownOptions && _vm.dropdownOptions.tabindex ? _vm.dropdownOptions.tabindex : 0
    },
    on: {
      "keydown": [_vm.keyboardNav, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) return null;
        return _vm.reset.apply(null, arguments);
      }],
      "click": _vm.toggleDropdown
    }
  }, [_c('span', {
    staticClass: "vti__selection"
  }, [_vm.enabledFlags ? _c('div', {
    class: ['vti__flag', _vm.activeCountry.iso2.toLowerCase()]
  }) : _vm._e(), _vm.enabledCountryCode ? _c('span', {
    staticClass: "vti__country-code"
  }, [_vm._v(" +" + _vm._s(_vm.activeCountry.dialCode) + " ")]) : _vm._e(), _vm._t("arrow-icon", function () {
    return [_c('span', {
      staticClass: "vti__dropdown-arrow"
    }, [_vm._v(_vm._s(_vm.open ? '▲' : '▼'))])];
  }, {
    "open": _vm.open
  })], 2), _c('ul', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.open,
      expression: "open"
    }],
    ref: "list",
    staticClass: "vti__dropdown-list",
    class: _vm.dropdownOpenDirection
  }, _vm._l(_vm.sortedCountries, function (pb, index) {
    return _c('li', {
      key: pb.iso2 + (pb.preferred ? '-preferred' : ''),
      class: ['vti__dropdown-item', _vm.getItemClass(index, pb.iso2)],
      on: {
        "click": function click($event) {
          return _vm.choose(pb, true);
        },
        "mousemove": function mousemove($event) {
          _vm.selectedIndex = index;
        }
      }
    }, [_vm.enabledFlags ? _c('div', {
      class: ['vti__flag', pb.iso2.toLowerCase()]
    }) : _vm._e(), _c('strong', [_vm._v(_vm._s(pb.name))]), _vm.dropdownOptions && !_vm.dropdownOptions.disabledDialCode ? _c('span', [_vm._v(" +" + _vm._s(pb.dialCode) + " ")]) : _vm._e()]);
  }), 0)]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.phone,
      expression: "phone"
    }],
    ref: "input",
    class: ['vti__input', _vm.inputClasses],
    attrs: {
      "type": "tel",
      "autocomplete": _vm.autocomplete,
      "autofocus": _vm.autofocus,
      "disabled": _vm.disabled,
      "id": _vm.inputId,
      "maxlength": _vm.maxLen,
      "name": _vm.name,
      "placeholder": _vm.parsedPlaceholder,
      "readonly": _vm.readonly,
      "required": _vm.required,
      "tabindex": _vm.inputOptions && _vm.inputOptions.tabindex ? _vm.inputOptions.tabindex : 0
    },
    domProps: {
      "value": _vm.phone
    },
    on: {
      "blur": _vm.onBlur,
      "focus": _vm.onFocus,
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.phone = $event.target.value;
      }, _vm.onInput],
      "keyup": [function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.onEnter.apply(null, arguments);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "space", 32, $event.key, [" ", "Spacebar"])) return null;
        return _vm.onSpace.apply(null, arguments);
      }]
    }
  })]);
};
var staticRenderFns = [];

;// CONCATENATED MODULE: ./src/components/vue-tel-input.vue?vue&type=template&id=5f57327a

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js








function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(8706);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(113);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find-index.js
var es_array_find_index = __webpack_require__(8980);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(4423);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(9085);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(3362);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.constructor.js
var es_regexp_constructor = __webpack_require__(4864);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.dot-all.js
var es_regexp_dot_all = __webpack_require__(7465);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.sticky.js
var es_regexp_sticky = __webpack_require__(7745);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(1699);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(5440);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace-all.js
var es_string_replace_all = __webpack_require__(9978);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.starts-with.js
var es_string_starts_with = __webpack_require__(1392);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__(2762);
;// CONCATENATED MODULE: ./node_modules/awesome-phonenumber/index-esm.mjs
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var awesomePhonenumber = {exports: {}};

var lib = {exports: {}};

(function (module) {
	(function(){/*

	 Copyright The Closure Library Authors.
	 SPDX-License-Identifier: Apache-2.0
	*/
	var aa=this||self;function ba(a){a.ra=void 0;a.pa=function(){return a.ra?a.ra:a.ra=new a};}function h(a,b){function c(){}c.prototype=b.prototype;a.Da=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ja=function(d,e,f){for(var g=Array(arguments.length-2),l=2;l<arguments.length;l++)g[l-2]=arguments[l];return b.prototype[e].apply(d,g)};}var da=class{constructor(a){if(ca!==ca)throw Error("SafeUrl is not meant to be built directly");this.g=a;}toString(){return this.g.toString()}},ca={};new da("about:invalid#zClosurez");new da("about:blank");var ea={};class fa{constructor(){if(ea!==ea)throw Error("SafeStyle is not meant to be built directly");}toString(){return "".toString()}}new fa;function ha(a){var b=[];let c=0;for(var d in a)b[c++]=a[d];return b}var ia={};class ja{constructor(){if(ia!==ia)throw Error("SafeStyleSheet is not meant to be built directly");}toString(){return "".toString()}}new ja;var ka={};class la{constructor(){var a=aa.trustedTypes&&aa.trustedTypes.emptyHTML||"";if(ka!==ka)throw Error("SafeHtml is not meant to be built directly");this.g=a;}toString(){return this.g.toString()}}new la;function ma(a,b){this.h=a;this.g={};for(a=0;a<b.length;a++){var c=b[a];this.g[c.g]=c;}}function na(a){a=ha(a.g);a.sort(function(b,c){return b.g-c.g});return a}function oa(a,b){this.g=a;this.m=!!b.ga;this.h=b.i;this.u=b.type;this.s=!1;switch(this.h){case pa:case qa:case ra:case sa:case ta:case va:case wa:this.s=!0;}this.j=b.defaultValue;}var wa=1,va=2,pa=3,qa=4,ra=6,sa=16,ta=18;function k(){this.h={};this.j=this.o().g;this.g=this.m=null;}k.prototype.has=function(a){return m(this,a.g)};k.prototype.get=function(a,b){return p(this,a.g,b)};k.prototype.set=function(a,b){q(this,a.g,b);};k.prototype.add=function(a,b){xa(this,a.g,b);};
	function ya(a,b){for(var c=na(a.o()),d=0;d<c.length;d++){var e=c[d],f=e.g;if(m(b,f)){a.g&&delete a.g[e.g];var g=11==e.h||10==e.h;if(e.m){e=r(b,f);for(var l=0;l<e.length;l++)xa(a,f,g?e[l].clone():e[l]);}else e=t(b,f),g?(g=t(a,f))?ya(g,e):q(a,f,e.clone()):q(a,f,e);}}}k.prototype.clone=function(){var a=new this.constructor;a!=this&&(a.h={},a.g&&(a.g={}),ya(a,this));return a};function m(a,b){return null!=a.h[b]}
	function t(a,b){var c=a.h[b];if(null==c)return null;if(a.m){if(!(b in a.g)){var d=a.m,e=a.j[b];if(null!=c)if(e.m){for(var f=[],g=0;g<c.length;g++)f[g]=d.h(e,c[g]);c=f;}else c=d.h(e,c);return a.g[b]=c}return a.g[b]}return c}function p(a,b,c){var d=t(a,b);return a.j[b].m?d[c||0]:d}function u(a,b){if(m(a,b))a=p(a,b);else a:{a=a.j[b];if(void 0===a.j)if(b=a.u,b===Boolean)a.j=!1;else if(b===Number)a.j=0;else if(b===String)a.j=a.s?"0":"";else {a=new b;break a}a=a.j;}return a}
	function r(a,b){return t(a,b)||[]}function v(a,b){return a.j[b].m?m(a,b)?a.h[b].length:0:m(a,b)?1:0}function q(a,b,c){a.h[b]=c;a.g&&(a.g[b]=c);}function xa(a,b,c){a.h[b]||(a.h[b]=[]);a.h[b].push(c);a.g&&delete a.g[b];}function w(a,b){var c=[],d;for(d in b)0!=d&&c.push(new oa(d,b[d]));return new ma(a,c)}function x(){}x.prototype.g=function(a){new a.h;throw Error("Unimplemented");};x.prototype.h=function(a,b){if(11==a.h||10==a.h)return b instanceof k?b:this.g(a.u.prototype.o(),b);if(14==a.h)return "string"===typeof b&&za.test(b)&&(a=Number(b),0<a)?a:b;if(!a.s)return b;a=a.u;if(a===String){if("number"===typeof b)return String(b)}else if(a===Number&&"string"===typeof b&&("Infinity"===b||"-Infinity"===b||"NaN"===b||za.test(b)))return Number(b);return b};var za=/^-?[0-9]+$/;function Aa(){}h(Aa,x);Aa.prototype.g=function(a,b){a=new a.h;a.m=this;a.h=b;a.g={};return a};function y(){}h(y,Aa);y.prototype.h=function(a,b){return 8==a.h?!!b:x.prototype.h.apply(this,arguments)};y.prototype.g=function(a,b){return y.Da.g.call(this,a,b)};function z(a,b){null!=a&&this.g.apply(this,arguments);}z.prototype.h="";z.prototype.set=function(a){this.h=""+a;};z.prototype.g=function(a,b,c){this.h+=String(a);if(null!=b)for(let d=1;d<arguments.length;d++)this.h+=arguments[d];return this};function A(a){a.h="";}z.prototype.toString=function(){return this.h};/*

	 Protocol Buffer 2 Copyright 2008 Google Inc.
	 All other code copyright its respective owners.
	 Copyright (C) 2010 The Libphonenumber Authors

	 Licensed under the Apache License, Version 2.0 (the "License");
	 you may not use this file except in compliance with the License.
	 You may obtain a copy of the License at

	 http://www.apache.org/licenses/LICENSE-2.0

	 Unless required by applicable law or agreed to in writing, software
	 distributed under the License is distributed on an "AS IS" BASIS,
	 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 See the License for the specific language governing permissions and
	 limitations under the License.
	*/
	function B(){k.call(this);}h(B,k);var Ba=null;function C(){k.call(this);}h(C,k);var Ca=null;function D(){k.call(this);}h(D,k);var Da=null;D.prototype.ia=function(){return p(this,10)};
	B.prototype.o=function(){var a=Ba;a||(Ba=a=w(B,{0:{name:"NumberFormat",na:"i18n.phonenumbers.NumberFormat"},1:{name:"pattern",required:!0,i:9,type:String},2:{name:"format",required:!0,i:9,type:String},3:{name:"leading_digits_pattern",ga:!0,i:9,type:String},4:{name:"national_prefix_formatting_rule",i:9,type:String},6:{name:"national_prefix_optional_when_formatting",i:8,defaultValue:!1,type:Boolean},5:{name:"domestic_carrier_code_formatting_rule",i:9,type:String}}));return a};B.o=B.prototype.o;
	C.prototype.o=function(){var a=Ca;a||(Ca=a=w(C,{0:{name:"PhoneNumberDesc",na:"i18n.phonenumbers.PhoneNumberDesc"},2:{name:"national_number_pattern",i:9,type:String},9:{name:"possible_length",ga:!0,i:5,type:Number},10:{name:"possible_length_local_only",ga:!0,i:5,type:Number},6:{name:"example_number",i:9,type:String}}));return a};C.o=C.prototype.o;
	D.prototype.o=function(){var a=Da;a||(Da=a=w(D,{0:{name:"PhoneMetadata",na:"i18n.phonenumbers.PhoneMetadata"},1:{name:"general_desc",i:11,type:C},2:{name:"fixed_line",i:11,type:C},3:{name:"mobile",i:11,type:C},4:{name:"toll_free",i:11,type:C},5:{name:"premium_rate",i:11,type:C},6:{name:"shared_cost",i:11,type:C},7:{name:"personal_number",i:11,type:C},8:{name:"voip",i:11,type:C},21:{name:"pager",i:11,type:C},25:{name:"uan",i:11,type:C},27:{name:"emergency",i:11,type:C},28:{name:"voicemail",i:11,type:C},
	29:{name:"short_code",i:11,type:C},30:{name:"standard_rate",i:11,type:C},31:{name:"carrier_specific",i:11,type:C},33:{name:"sms_services",i:11,type:C},24:{name:"no_international_dialling",i:11,type:C},9:{name:"id",required:!0,i:9,type:String},10:{name:"country_code",i:5,type:Number},11:{name:"international_prefix",i:9,type:String},17:{name:"preferred_international_prefix",i:9,type:String},12:{name:"national_prefix",i:9,type:String},13:{name:"preferred_extn_prefix",i:9,type:String},15:{name:"national_prefix_for_parsing",
	i:9,type:String},16:{name:"national_prefix_transform_rule",i:9,type:String},18:{name:"same_mobile_and_fixed_line_pattern",i:8,defaultValue:!1,type:Boolean},19:{name:"number_format",ga:!0,i:11,type:B},20:{name:"intl_number_format",ga:!0,i:11,type:B},22:{name:"main_country_for_code",i:8,defaultValue:!1,type:Boolean},23:{name:"leading_digits",i:9,type:String}}));return a};D.o=D.prototype.o;function E(){k.call(this);}h(E,k);var Ea=null;E.prototype.ia=function(){return p(this,1)};var Fa={Ia:0,Ha:1,Ga:5,Fa:10,Ea:20};
	E.prototype.o=function(){var a=Ea;a||(Ea=a=w(E,{0:{name:"PhoneNumber",na:"i18n.phonenumbers.PhoneNumber"},1:{name:"country_code",required:!0,i:5,type:Number},2:{name:"national_number",required:!0,i:4,type:Number},3:{name:"extension",i:9,type:String},4:{name:"italian_leading_zero",i:8,type:Boolean},8:{name:"number_of_leading_zeros",i:5,defaultValue:1,type:Number},5:{name:"raw_input",i:9,type:String},6:{name:"country_code_source",i:14,defaultValue:0,type:Fa},7:{name:"preferred_domestic_carrier_code",
	i:9,type:String}}));return a};E.ctor=E;E.ctor.o=E.prototype.o;/*

	 Copyright (C) 2010 The Libphonenumber Authors

	 Licensed under the Apache License, Version 2.0 (the "License");
	 you may not use this file except in compliance with the License.
	 You may obtain a copy of the License at

	 http://www.apache.org/licenses/LICENSE-2.0

	 Unless required by applicable law or agreed to in writing, software
	 distributed under the License is distributed on an "AS IS" BASIS,
	 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 See the License for the specific language governing permissions and
	 limitations under the License.
	*/
	var F={1:"US AG AI AS BB BM BS CA DM DO GD GU JM KN KY LC MP MS PR SX TC TT VC VG VI".split(" "),7:["RU","KZ"],20:["EG"],27:["ZA"],30:["GR"],31:["NL"],32:["BE"],33:["FR"],34:["ES"],36:["HU"],39:["IT","VA"],40:["RO"],41:["CH"],43:["AT"],44:["GB","GG","IM","JE"],45:["DK"],46:["SE"],47:["NO","SJ"],48:["PL"],49:["DE"],51:["PE"],52:["MX"],53:["CU"],54:["AR"],55:["BR"],56:["CL"],57:["CO"],58:["VE"],60:["MY"],61:["AU","CC","CX"],62:["ID"],63:["PH"],64:["NZ"],65:["SG"],66:["TH"],81:["JP"],82:["KR"],84:["VN"],
	86:["CN"],90:["TR"],91:["IN"],92:["PK"],93:["AF"],94:["LK"],95:["MM"],98:["IR"],211:["SS"],212:["MA","EH"],213:["DZ"],216:["TN"],218:["LY"],220:["GM"],221:["SN"],222:["MR"],223:["ML"],224:["GN"],225:["CI"],226:["BF"],227:["NE"],228:["TG"],229:["BJ"],230:["MU"],231:["LR"],232:["SL"],233:["GH"],234:["NG"],235:["TD"],236:["CF"],237:["CM"],238:["CV"],239:["ST"],240:["GQ"],241:["GA"],242:["CG"],243:["CD"],244:["AO"],245:["GW"],246:["IO"],247:["AC"],248:["SC"],249:["SD"],250:["RW"],251:["ET"],252:["SO"],
	253:["DJ"],254:["KE"],255:["TZ"],256:["UG"],257:["BI"],258:["MZ"],260:["ZM"],261:["MG"],262:["RE","YT"],263:["ZW"],264:["NA"],265:["MW"],266:["LS"],267:["BW"],268:["SZ"],269:["KM"],290:["SH","TA"],291:["ER"],297:["AW"],298:["FO"],299:["GL"],350:["GI"],351:["PT"],352:["LU"],353:["IE"],354:["IS"],355:["AL"],356:["MT"],357:["CY"],358:["FI","AX"],359:["BG"],370:["LT"],371:["LV"],372:["EE"],373:["MD"],374:["AM"],375:["BY"],376:["AD"],377:["MC"],378:["SM"],380:["UA"],381:["RS"],382:["ME"],383:["XK"],385:["HR"],
	386:["SI"],387:["BA"],389:["MK"],420:["CZ"],421:["SK"],423:["LI"],500:["FK"],501:["BZ"],502:["GT"],503:["SV"],504:["HN"],505:["NI"],506:["CR"],507:["PA"],508:["PM"],509:["HT"],590:["GP","BL","MF"],591:["BO"],592:["GY"],593:["EC"],594:["GF"],595:["PY"],596:["MQ"],597:["SR"],598:["UY"],599:["CW","BQ"],670:["TL"],672:["NF"],673:["BN"],674:["NR"],675:["PG"],676:["TO"],677:["SB"],678:["VU"],679:["FJ"],680:["PW"],681:["WF"],682:["CK"],683:["NU"],685:["WS"],686:["KI"],687:["NC"],688:["TV"],689:["PF"],690:["TK"],
	691:["FM"],692:["MH"],800:["001"],808:["001"],850:["KP"],852:["HK"],853:["MO"],855:["KH"],856:["LA"],870:["001"],878:["001"],880:["BD"],881:["001"],882:["001"],883:["001"],886:["TW"],888:["001"],960:["MV"],961:["LB"],962:["JO"],963:["SY"],964:["IQ"],965:["KW"],966:["SA"],967:["YE"],968:["OM"],970:["PS"],971:["AE"],972:["IL"],973:["BH"],974:["QA"],975:["BT"],976:["MN"],977:["NP"],979:["001"],992:["TJ"],993:["TM"],994:["AZ"],995:["GE"],996:["KG"],998:["UZ"]},H={AC:[,[,,"(?:[01589]\\d|[46])\\d{4}",,
	,,,,,[5,6]],[,,"6[2-467]\\d{3}",,,,"62889",,,[5]],[,,"4\\d{4}",,,,"40123",,,[5]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"AC",247,"00",,,,,,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"(?:0[1-9]|[1589]\\d)\\d{4}",,,,"542011",,,[6]],,,[,,,,,,,,,[-1]]],AD:[,[,,"(?:1|6\\d)\\d{7}|[135-9]\\d{5}",,,,,,,[6,8,9]],[,,"[78]\\d{5}",,,,"712345",,,[6]],[,,"690\\d{6}|[356]\\d{5}",,,,"312345",,,[6,9]],[,,"180[02]\\d{4}",,,,"18001234",,,[8]],[,,"[19]\\d{5}",,,,"912345",,,[6]],
	[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"AD",376,"00",,,,,,,,[[,"(\\d{3})(\\d{3})","$1 $2",["[135-9]"]],[,"(\\d{4})(\\d{4})","$1 $2",["1"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"]]],,[,,,,,,,,,[-1]],,,[,,"1800\\d{4}",,,,,,,[8]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AE:[,[,,"(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}",,,,,,,[5,6,7,8,9,10,11,12]],[,,"[2-4679][2-8]\\d{6}",,,,"22345678",,,[8],[7]],[,,"5[024-68]\\d{7}",,,,"501234567",,,[9]],[,,"400\\d{6}|800\\d{2,9}",,,,"800123456"],
	[,,"900[02]\\d{5}",,,,"900234567",,,[9]],[,,"700[05]\\d{5}",,,,"700012345",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"AE",971,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{2,9})","$1 $2",["60|8"]],[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[236]|[479][2-8]"],"0$1"],[,"(\\d{3})(\\d)(\\d{5})","$1 $2 $3",["[479]"]],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["5"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"600[25]\\d{5}",,,,"600212345",,,[9]],,,[,,,,,,,,,[-1]]],AF:[,[,,"[2-7]\\d{8}",,,,,,,[9],[7]],[,,"(?:[25][0-8]|[34][0-4]|6[0-5])[2-9]\\d{6}",
	,,,"234567890",,,,[7]],[,,"7\\d{8}",,,,"701234567",,,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"AF",93,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[1-9]"]],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[2-7]"],"0$1"]],[[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[2-7]"],"0$1"]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AG:[,[,,"(?:268|[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"268(?:4(?:6[0-38]|84)|56[0-2])\\d{4}",,,,"2684601234",
	,,,[7]],[,,"268(?:464|7(?:1[3-9]|[28]\\d|3[0246]|64|7[0-689]))\\d{4}",,,,"2684641234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,"26848[01]\\d{4}",,,,"2684801234",,,,[7]],
	"AG",1,"011","1",,,"([457]\\d{6})$|1","268$1",,,,,[,,"26840[69]\\d{4}",,,,"2684061234",,,,[7]],,"268",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AI:[,[,,"(?:264|[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"264(?:292|4(?:6[12]|9[78]))\\d{4}",,,,"2644612345",,,,[7]],[,,"264(?:235|4(?:69|76)|5(?:3[6-9]|8[1-4])|7(?:29|72))\\d{4}",,,,"2642351234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}",
	,,,"5002345678"],[,,,,,,,,,[-1]],"AI",1,"011","1",,,"([2457]\\d{6})$|1","264$1",,,,,[,,"264724\\d{4}",,,,"2647241234",,,,[7]],,"264",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AL:[,[,,"(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}",,,,,,,[6,7,8,9],[5]],[,,"4505[0-2]\\d{3}|(?:[2358][16-9]\\d[2-9]|4410)\\d{4}|(?:[2358][2-5][2-9]|4(?:[2-57-9][2-9]|6\\d))\\d{5}",,,,"22345678",,,[8],[5,6,7]],[,,"6(?:[78][2-9]|9\\d)\\d{6}",,,,"672123456",,,[9]],[,,"800\\d{4}",,,,"8001234",,,[7]],[,,"900[1-9]\\d\\d",
	,,,"900123",,,[6]],[,,"808[1-9]\\d\\d",,,,"808123",,,[6]],[,,"700[2-9]\\d{4}",,,,"70021234",,,[8]],[,,,,,,,,,[-1]],"AL",355,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3,4})","$1 $2",["80|9"],"0$1"],[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["4[2-6]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2358][2-5]|4"],"0$1"],[,"(\\d{3})(\\d{5})","$1 $2",["[23578]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["6"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AM:[,[,,"(?:[1-489]\\d|55|60|77)\\d{6}",
	,,,,,,[8],[5,6]],[,,"(?:(?:1[0-25]|47)\\d|2(?:2[2-46]|3[1-8]|4[2-69]|5[2-7]|6[1-9]|8[1-7])|3[12]2)\\d{5}",,,,"10123456",,,,[5,6]],[,,"(?:33|4[1349]|55|77|88|9[13-9])\\d{6}",,,,"77123456"],[,,"800\\d{5}",,,,"80012345"],[,,"90[016]\\d{5}",,,,"90012345"],[,,"80[1-4]\\d{5}",,,,"80112345"],[,,,,,,,,,[-1]],[,,"60(?:2[78]|3[5-9]|4[02-9]|5[0-46-9]|[6-8]\\d|9[0-2])\\d{4}",,,,"60271234"],"AM",374,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[89]0"],"0 $1"],[,"(\\d{3})(\\d{5})","$1 $2",["2|3[12]"],
	"(0$1)"],[,"(\\d{2})(\\d{6})","$1 $2",["1|47"],"(0$1)"],[,"(\\d{2})(\\d{6})","$1 $2",["[3-9]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AO:[,[,,"[29]\\d{8}",,,,,,,[9]],[,,"2\\d(?:[0134][25-9]|[25-9]\\d)\\d{5}",,,,"222123456"],[,,"9[1-79]\\d{7}",,,,"923123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"AO",244,"00",,,,,,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[29]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],
	,,[,,,,,,,,,[-1]]],AR:[,[,,"(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}",,,,,,,[10,11],[6,7,8]],[,,"3(?:7(?:1[15]|81)|8(?:21|4[16]|69|9[12]))[46]\\d{5}|(?:2(?:657|9(?:54|66))|3(?:7(?:55|77)|865))[2-8]\\d{5}|(?:2(?:2(?:2[59]|44|52)|3(?:26|44)|473|9(?:[07]2|2[26]|34|46))|3327)[45]\\d{5}|(?:2(?:284|3(?:02|23)|920)|3(?:4(?:46|8[27]|92)|541|878))[2-7]\\d{5}|(?:2(?:(?:26|62)2|320|477|9(?:42|83))|3(?:329|4(?:62|76|89)|564))[2-6]\\d{5}|(?:(?:11[1-8]|670)\\d|2(?:2(?:0[45]|1[2-6]|3[3-6])|3(?:[06]4|7[45])|494|6(?:04|1[2-8]|[36][45]|4[3-6])|80[45]|9(?:[17][4-6]|[48][45]|9[3-6]))|3(?:364|4(?:1[2-8]|[235][4-6]|84)|5(?:1[2-9]|[38][4-6])|6(?:2[45]|44)|7[069][45]|8(?:0[45]|[17][2-6]|3[4-6]|5[3-6]|8[3-68])))\\d{6}|2(?:2(?:21|4[23]|6[145]|7[1-4]|8[356]|9[267])|3(?:16|3[13-8]|43|5[346-8]|9[3-5])|475|6(?:2[46]|4[78]|5[1568])|9(?:03|2[1457-9]|3[1356]|4[08]|[56][23]|82))4\\d{5}|(?:2(?:2(?:57|81)|3(?:24|46|92)|9(?:01|23|64))|3(?:4(?:42|71)|5(?:25|37|4[347]|71)|7(?:18|5[17])))[3-6]\\d{5}|(?:2(?:2(?:02|2[3467]|4[156]|5[45]|6[6-8]|91)|3(?:1[47]|25|[45][25]|96)|47[48]|625|932)|3(?:38[2578]|4(?:0[0-24-9]|3[78]|4[457]|58|6[03-9]|72|83|9[136-8])|5(?:2[124]|[368][23]|4[2689]|7[2-6])|7(?:16|2[15]|3[145]|4[13]|5[468]|7[2-5]|8[26])|8(?:2[5-7]|3[278]|4[3-5]|5[78]|6[1-378]|[78]7|94)))[4-6]\\d{5}",
	,,,"1123456789",,,[10],[6,7,8]],[,,"93(?:7(?:1[15]|81)|8(?:21|4[16]|69|9[12]))[46]\\d{5}|9(?:2(?:657|9(?:54|66))|3(?:7(?:55|77)|865))[2-8]\\d{5}|9(?:2(?:2(?:2[59]|44|52)|3(?:26|44)|473|9(?:[07]2|2[26]|34|46))|3327)[45]\\d{5}|9(?:2(?:284|3(?:02|23)|920)|3(?:4(?:46|8[27]|92)|541|878))[2-7]\\d{5}|9(?:2(?:(?:26|62)2|320|477|9(?:42|83))|3(?:329|4(?:62|76|89)|564))[2-6]\\d{5}|(?:675\\d|9(?:11[1-8]\\d|2(?:2(?:0[45]|1[2-6]|3[3-6])|3(?:[06]4|7[45])|494|6(?:04|1[2-8]|[36][45]|4[3-6])|80[45]|9(?:[17][4-6]|[48][45]|9[3-6]))|3(?:364|4(?:1[2-8]|[235][4-6]|84)|5(?:1[2-9]|[38][4-6])|6(?:2[45]|44)|7[069][45]|8(?:0[45]|[17][2-6]|3[4-6]|5[3-6]|8[3-68]))))\\d{6}|92(?:2(?:21|4[23]|6[145]|7[1-4]|8[356]|9[267])|3(?:16|3[13-8]|43|5[346-8]|9[3-5])|475|6(?:2[46]|4[78]|5[1568])|9(?:03|2[1457-9]|3[1356]|4[08]|[56][23]|82))4\\d{5}|9(?:2(?:2(?:57|81)|3(?:24|46|92)|9(?:01|23|64))|3(?:4(?:42|71)|5(?:25|37|4[347]|71)|7(?:18|5[17])))[3-6]\\d{5}|9(?:2(?:2(?:02|2[3467]|4[156]|5[45]|6[6-8]|91)|3(?:1[47]|25|[45][25]|96)|47[48]|625|932)|3(?:38[2578]|4(?:0[0-24-9]|3[78]|4[457]|58|6[03-9]|72|83|9[136-8])|5(?:2[124]|[368][23]|4[2689]|7[2-6])|7(?:16|2[15]|3[145]|4[13]|5[468]|7[2-5]|8[26])|8(?:2[5-7]|3[278]|4[3-5]|5[78]|6[1-378]|[78]7|94)))[4-6]\\d{5}",
	,,,"91123456789",,,,[6,7,8]],[,,"800\\d{7,8}",,,,"8001234567"],[,,"60[04579]\\d{7}",,,,"6001234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"AR",54,"00","0",,,"0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?",
	"9$1",,,[[,"(\\d{3})","$1",["0|1(?:0[0-35-7]|1[02-5]|2[015]|3[47]|4[478])|911"]],[,"(\\d{2})(\\d{4})","$1-$2",["[1-9]"]],[,"(\\d{3})(\\d{4})","$1-$2",["[2-9]"]],[,"(\\d{4})(\\d{4})","$1-$2",["[1-8]"]],[,"(\\d{4})(\\d{2})(\\d{4})","$1 $2-$3",["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])","2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)",
	"2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]","2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"],
	"0$1",,1],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["1"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[68]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2-$3",["[23]"],"0$1",,1],[,"(\\d)(\\d{4})(\\d{2})(\\d{4})","$2 15-$3-$4",["9(?:2[2-469]|3[3-578])","9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))","9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)",
	"9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]","9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"],
	"0$1"],[,"(\\d)(\\d{2})(\\d{4})(\\d{4})","$2 15-$3-$4",["91"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{5})","$1-$2-$3",["8"],"0$1"],[,"(\\d)(\\d{3})(\\d{3})(\\d{4})","$2 15-$3-$4",["9"],"0$1"]],[[,"(\\d{4})(\\d{2})(\\d{4})","$1 $2-$3",["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])","2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)",
	"2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]","2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"],
	"0$1",,1],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["1"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[68]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2-$3",["[23]"],"0$1",,1],[,"(\\d)(\\d{4})(\\d{2})(\\d{4})","$1 $2 $3-$4",["9(?:2[2-469]|3[3-578])","9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))","9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)",
	"9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]","9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"]],
	[,"(\\d)(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3-$4",["91"]],[,"(\\d{3})(\\d{3})(\\d{5})","$1-$2-$3",["8"],"0$1"],[,"(\\d)(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3-$4",["9"]]],[,,,,,,,,,[-1]],,,[,,"810\\d{7}",,,,,,,[10]],[,,"810\\d{7}",,,,"8101234567",,,[10]],,,[,,,,,,,,,[-1]]],AS:[,[,,"(?:[58]\\d\\d|684|900)\\d{7}",,,,,,,[10],[7]],[,,"6846(?:22|33|44|55|77|88|9[19])\\d{4}",,,,"6846221234",,,,[7]],[,,"684(?:2(?:48|5[2468]|7[26])|7(?:3[13]|70|82))\\d{4}",,,,"6847331234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",
	,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"AS",1,"011","1",,,"([267]\\d{6})$|1","684$1",,,,,[,,,,,,,,,[-1]],,"684",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AT:[,[,,"1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}",
	,,,,,,[4,5,6,7,8,9,10,11,12,13],[3]],[,,"1(?:11\\d|[2-9]\\d{3,11})|(?:316|463|(?:51|66|73)2)\\d{3,10}|(?:2(?:1[467]|2[13-8]|5[2357]|6[1-46-8]|7[1-8]|8[124-7]|9[1458])|3(?:1[1-578]|3[23568]|4[5-7]|5[1378]|6[1-38]|8[3-68])|4(?:2[1-8]|35|7[1368]|8[2457])|5(?:2[1-8]|3[357]|4[147]|5[12578]|6[37])|6(?:13|2[1-47]|4[135-8]|5[468])|7(?:2[1-8]|35|4[13478]|5[68]|6[16-8]|7[1-6]|9[45]))\\d{4,10}",,,,"1234567890",,,,[3]],[,,"6(?:5[0-3579]|6[013-9]|[7-9]\\d)\\d{4,10}",,,,"664123456",,,[7,8,9,10,11,12,13]],[,,"800\\d{6,10}",
	,,,"800123456",,,[9,10,11,12,13]],[,,"(?:8[69][2-68]|9(?:0[01]|3[019]))\\d{6,10}",,,,"900123456",,,[9,10,11,12,13]],[,,"8(?:10|2[018])\\d{6,10}|828\\d{5}",,,,"810123456",,,[8,9,10,11,12,13]],[,,,,,,,,,[-1]],[,,"5(?:0[1-9]|17|[79]\\d)\\d{2,10}|7[28]0\\d{6,10}",,,,"780123456",,,[5,6,7,8,9,10,11,12,13]],"AT",43,"00","0",,,"0",,,,[[,"(\\d{4})","$1",["14"]],[,"(\\d)(\\d{3,12})","$1 $2",["1(?:11|[2-9])"],"0$1"],[,"(\\d{3})(\\d{2})","$1 $2",["517"],"0$1"],[,"(\\d{2})(\\d{3,5})","$1 $2",["5[079]"],"0$1"],
	[,"(\\d{6})","$1",["[18]"]],[,"(\\d{3})(\\d{3,10})","$1 $2",["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"],"0$1"],[,"(\\d{4})(\\d{3,9})","$1 $2",["[2-467]|5[2-6]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["5"],"0$1"],[,"(\\d{2})(\\d{4})(\\d{4,7})","$1 $2 $3",["5"],"0$1"]],[[,"(\\d)(\\d{3,12})","$1 $2",["1(?:11|[2-9])"],"0$1"],[,"(\\d{3})(\\d{2})","$1 $2",["517"],"0$1"],[,"(\\d{2})(\\d{3,5})","$1 $2",["5[079]"],"0$1"],[,"(\\d{3})(\\d{3,10})","$1 $2",["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"],
	"0$1"],[,"(\\d{4})(\\d{3,9})","$1 $2",["[2-467]|5[2-6]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["5"],"0$1"],[,"(\\d{2})(\\d{4})(\\d{4,7})","$1 $2 $3",["5"],"0$1"]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AU:[,[,,"1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}",,,,,,,[5,6,7,8,9,10,12]],[,,"(?:(?:(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|7(?:[013-57-9]\\d|2[0-8]))\\d|3(?:(?:[0-3589]\\d|6[1-9]|7[0-35-9])\\d|4(?:[0-578]\\d|90)))\\d\\d|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4])|3\\d\\d)|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}",
	,,,"212345678",,,[9],[8]],[,,"4(?:79[01]|83[0-389]|94[0-4])\\d{5}|4(?:[0-36]\\d|4[047-9]|5[0-25-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}",,,,"412345678",,,[9]],[,,"180(?:0\\d{3}|2)\\d{3}",,,,"1800123456",,,[7,10]],[,,"190[0-26]\\d{6}",,,,"1900123456",,,[10]],[,,"13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}",,,,"1300123456",,,[6,8,10,12]],[,,,,,,,,,[-1]],[,,"14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",,,,"147101234",,,[9]],"AU",61,"001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","0",,,"(183[12])|0",
	,"0011",,[[,"(\\d{2})(\\d{3,4})","$1 $2",["16"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["13"]],[,"(\\d{3})(\\d{3})","$1 $2",["19"]],[,"(\\d{3})(\\d{4})","$1 $2",["180","1802"]],[,"(\\d{4})(\\d{3,4})","$1 $2",["19"]],[,"(\\d{2})(\\d{3})(\\d{2,4})","$1 $2 $3",["16"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["14|4"],"0$1"],[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["[2378]"],"(0$1)","$CC ($1)"],[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:30|[89])"]],[,"(\\d{4})(\\d{4})(\\d{4})","$1 $2 $3",
	["130"]]],[[,"(\\d{2})(\\d{3,4})","$1 $2",["16"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2,4})","$1 $2 $3",["16"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["14|4"],"0$1"],[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["[2378]"],"(0$1)","$CC ($1)"],[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:30|[89])"]]],[,,"163\\d{2,6}",,,,"1631234",,,[5,6,7,8,9]],1,,[,,"1(?:3(?:00\\d{5}|45[0-4])|802)\\d{3}|1[38]00\\d{6}|13\\d{4}",,,,,,,[6,7,8,10,12]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AW:[,[,,"(?:[25-79]\\d\\d|800)\\d{4}",
	,,,,,,[7]],[,,"5(?:2\\d|8[1-9])\\d{4}",,,,"5212345"],[,,"(?:290|5[69]\\d|6(?:[03]0|22|4[0-2]|[69]\\d)|7(?:[34]\\d|7[07])|9(?:6[45]|9[4-8]))\\d{4}",,,,"5601234"],[,,"800\\d{4}",,,,"8001234"],[,,"900\\d{4}",,,,"9001234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"(?:28\\d|501)\\d{4}",,,,"5011234"],"AW",297,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[25-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AX:[,[,,"2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}",
	,,,,,,[5,6,7,8,9,10,11,12]],[,,"18[1-8]\\d{3,6}",,,,"181234567",,,[6,7,8,9]],[,,"4946\\d{2,6}|(?:4[0-8]|50)\\d{4,8}",,,,"412345678",,,[6,7,8,9,10]],[,,"800\\d{4,6}",,,,"800123456",,,[7,8,9]],[,,"[67]00\\d{5,6}",,,,"600123456",,,[8,9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"AX",358,"00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))","0",,,"0",,"00",,,,[,,,,,,,,,[-1]],,"18",[,,,,,,,,,[-1]],[,,"20\\d{4,8}|60[12]\\d{5,6}|7(?:099\\d{4,5}|5[03-9]\\d{3,7})|20[2-59]\\d\\d|(?:606|7(?:0[78]|1|3\\d))\\d{7}|(?:10|29|3[09]|70[1-5]\\d)\\d{4,8}",
	,,,"10112345"],,,[,,,,,,,,,[-1]]],AZ:[,[,,"365\\d{6}|(?:[124579]\\d|60|88)\\d{7}",,,,,,,[9],[7]],[,,"(?:2[12]428|3655[02])\\d{4}|(?:2(?:22[0-79]|63[0-28])|3654)\\d{5}|(?:(?:1[28]|46)\\d|2(?:[014-6]2|[23]3))\\d{6}",,,,"123123456",,,,[7]],[,,"36554\\d{4}|(?:[16]0|4[04]|5[015]|7[07]|99)\\d{7}",,,,"401234567"],[,,"88\\d{7}",,,,"881234567"],[,,"900200\\d{3}",,,,"900200123"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"AZ",994,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[1-9]"]],[,
	"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["90"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[28]|2|365|46","1[28]|2|365[45]|46","1[28]|2|365(?:4|5[02])|46"],"(0$1)"],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[13-9]"],"0$1"]],[[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["90"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[28]|2|365|46","1[28]|2|365[45]|46","1[28]|2|365(?:4|5[02])|46"],"(0$1)"],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",
	["[13-9]"],"0$1"]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BA:[,[,,"6\\d{8}|(?:[35689]\\d|49|70)\\d{6}",,,,,,,[8,9],[6]],[,,"(?:3(?:[05-79][2-9]|1[4579]|[23][24-9]|4[2-4689]|8[2457-9])|49[2-579]|5(?:0[2-49]|[13][2-9]|[268][2-4679]|4[4689]|5[2-79]|7[2-69]|9[2-4689]))\\d{5}",,,,"30212345",,,[8],[6]],[,,"6040\\d{5}|6(?:03|[1-356]|44|7\\d)\\d{6}",,,,"61123456"],[,,"8[08]\\d{6}",,,,"80123456",,,[8]],[,,"9[0246]\\d{6}",,,,"90123456",,,[8]],[,,"8[12]\\d{6}",,,,"82123456",,,[8]],
	[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BA",387,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3})","$1-$2",["[2-9]"]],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["6[1-3]|[7-9]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2-$3",["[3-5]|6[56]"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["6"],"0$1"]],[[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["6[1-3]|[7-9]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2-$3",["[3-5]|6[56]"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["6"],"0$1"]],[,,,,,,,,,[-1]],
	,,[,,,,,,,,,[-1]],[,,"703[235]0\\d{3}|70(?:2[0-5]|3[0146]|[56]0)\\d{4}",,,,"70341234",,,[8]],,,[,,,,,,,,,[-1]]],BB:[,[,,"(?:246|[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"246521[0369]\\d{3}|246(?:2(?:2[78]|7[0-4])|4(?:1[024-6]|2\\d|3[2-9])|5(?:20|[34]\\d|54|7[1-3])|6(?:2\\d|38)|7[35]7|9(?:1[89]|63))\\d{4}",,,,"2464123456",,,,[7]],[,,"246(?:(?:2(?:[3568]\\d|4[0-57-9])|3(?:5[2-9]|6[0-6])|4(?:46|5\\d)|69[5-7]|8(?:[2-5]\\d|83))\\d|52(?:1[147]|20))\\d{3}",,,,"2462501234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",
	,,,"8002123456"],[,,"(?:246976|900[2-9]\\d\\d)\\d{4}",,,,"9002123456",,,,[7]],[,,,,,,,,,[-1]],[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,"24631\\d{5}",,,,"2463101234",,,,[7]],"BB",1,"011","1",,,"([2-9]\\d{6})$|1","246$1",,,,,[,,,,,,,,,[-1]],,"246",[,,,,,,,,,[-1]],[,,"246(?:292|367|4(?:1[7-9]|3[01]|4[47-9]|67)|7(?:1[2-9]|2\\d|3[016]|53))\\d{4}",
	,,,"2464301234",,,,[7]],,,[,,,,,,,,,[-1]]],BD:[,[,,"[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}",,,,,,,[6,7,8,9,10]],[,,"(?:4(?:31\\d\\d|423)|5222)\\d{3}(?:\\d{2})?|8332[6-9]\\d\\d|(?:3(?:03[56]|224)|4(?:22[25]|653))\\d{3,4}|(?:3(?:42[47]|529|823)|4(?:027|525|65(?:28|8))|562|6257|7(?:1(?:5[3-5]|6[12]|7[156]|89)|22[589]56|32|42675|52(?:[25689](?:56|8)|[347]8)|71(?:6[1267]|75|89)|92374)|82(?:2[59]|32)56|9(?:03[23]56|23(?:256|373)|31|5(?:1|2[4589]56)))\\d{3}|(?:3(?:02[348]|22[35]|324|422)|4(?:22[67]|32[236-9]|6(?:2[46]|5[57])|953)|5526|6(?:024|6655)|81)\\d{4,5}|(?:2(?:7(?:1[0-267]|2[0-289]|3[0-29]|4[01]|5[1-3]|6[013]|7[0178]|91)|8(?:0[125]|1[1-6]|2[0157-9]|3[1-69]|41|6[1-35]|7[1-5]|8[1-8]|9[0-6])|9(?:0[0-2]|1[0-4]|2[568]|3[3-6]|5[5-7]|6[0136-9]|7[0-7]|8[014-9]))|3(?:0(?:2[025-79]|3[2-4])|181|22[12]|32[2356]|824)|4(?:02[09]|22[348]|32[045]|523|6(?:27|54))|666(?:22|53)|7(?:22[57-9]|42[56]|82[35])8|8(?:0[124-9]|2(?:181|2[02-4679]8)|4[12]|[5-7]2)|9(?:[04]2|2(?:2|328)|81))\\d{4}|(?:2(?:[23]\\d|[45])\\d\\d|3(?:1(?:2[5-7]|[5-7])|425|822)|4(?:033|1\\d|[257]1|332|4(?:2[246]|5[25])|6(?:2[35]|56|62)|8(?:23|54)|92[2-5])|5(?:02[03489]|22[457]|32[35-79]|42[46]|6(?:[18]|53)|724|826)|6(?:023|2(?:2[2-5]|5[3-5]|8)|32[3478]|42[34]|52[47]|6(?:[18]|6(?:2[34]|5[24]))|[78]2[2-5]|92[2-6])|7(?:02|21\\d|[3-589]1|6[12]|72[24])|8(?:217|3[12]|[5-7]1)|9[24]1)\\d{5}|(?:(?:3[2-8]|5[2-57-9]|6[03-589])1|4[4689][18])\\d{5}|[59]1\\d{5}",
	,,,"27111234"],[,,"(?:1[13-9]\\d|644)\\d{7}|(?:3[78]|44|66)[02-9]\\d{7}",,,,"1812345678",,,[10]],[,,"80[03]\\d{7}",,,,"8001234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"96(?:0[469]|1[0-47]|3[389]|43|6[69]|7[78])\\d{6}",,,,"9604123456",,,[10]],"BD",880,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{4,6})","$1-$2",["31[5-8]|[459]1"],"0$1"],[,"(\\d{3})(\\d{3,7})","$1-$2",["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"],
	"0$1"],[,"(\\d{4})(\\d{3,6})","$1-$2",["[13-9]|2[23]"],"0$1"],[,"(\\d)(\\d{7,8})","$1-$2",["2"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BE:[,[,,"4\\d{8}|[1-9]\\d{7}",,,,,,,[8,9]],[,,"80[2-8]\\d{5}|(?:1[0-69]|[23][2-8]|4[23]|5\\d|6[013-57-9]|71|8[1-79]|9[2-4])\\d{6}",,,,"12345678",,,[8]],[,,"4[5-9]\\d{7}",,,,"470123456",,,[9]],[,,"800[1-9]\\d{4}",,,,"80012345",,,[8]],[,,"(?:70(?:2[0-57]|3[04-7]|44|6[4-69]|7[0579])|90\\d\\d)\\d{4}",,,,"90012345",,,[8]],[,,"7879\\d{4}",
	,,,"78791234",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BE",32,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["(?:80|9)0"],"0$1"],[,"(\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[239]|4[23]"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[15-8]"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["4"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"78(?:0[57]|1[014-8]|2[25]|3[15-8]|48|[56]0|7[06-8]|9\\d)\\d{4}",,,,"78102345",,,[8]],,,[,,,,,,,,,[-1]]],BF:[,[,,"[025-7]\\d{7}",
	,,,,,,[8]],[,,"2(?:0(?:49|5[23]|6[5-7]|9[016-9])|4(?:4[569]|5[4-6]|6[5-7]|7[0179])|5(?:[34]\\d|50|6[5-7]))\\d{4}",,,,"20491234"],[,,"(?:0[1-35-7]|5[0-8]|[67]\\d)\\d{6}",,,,"70123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BF",226,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[025-7]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BG:[,[,,"00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}",,,,,,,[6,7,8,9,12],[4,5]],
	[,,"2\\d{5,7}|(?:43[1-6]|70[1-9])\\d{4,5}|(?:[36]\\d|4[124-7]|[57][1-9]|8[1-6]|9[1-7])\\d{5,6}",,,,"2123456",,,[6,7,8],[4,5]],[,,"(?:43[07-9]|99[69]\\d)\\d{5}|(?:8[7-9]|98)\\d{7}",,,,"43012345",,,[8,9]],[,,"(?:00800\\d\\d|800)\\d{5}",,,,"80012345",,,[8,12]],[,,"90\\d{6}",,,,"90123456",,,[8]],[,,"700\\d{5}",,,,"70012345",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BG",359,"00","0",,,"0",,,,[[,"(\\d{6})","$1",["1"]],[,"(\\d)(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["2"],"0$1"],[,"(\\d{3})(\\d{4})","$1 $2",
	["43[1-6]|70[1-9]"],"0$1"],[,"(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["2"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["(?:70|8)0"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3",["43[1-7]|7"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[48]|9[08]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1"]],[[,"(\\d)(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["2"],"0$1"],[,"(\\d{3})(\\d{4})","$1 $2",["43[1-6]|70[1-9]"],
	"0$1"],[,"(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["2"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["(?:70|8)0"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3",["43[1-7]|7"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[48]|9[08]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1"]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BH:[,[,,"[136-9]\\d{7}",,,,,,,[8]],[,,"(?:1(?:3[1356]|6[0156]|7\\d)\\d|6(?:1[16]\\d|500|6(?:0\\d|3[12]|44|55|7[7-9]|88)|9[69][69])|7(?:[07]\\d\\d|1(?:11|78)))\\d{4}",
	,,,"17001234"],[,,"(?:3(?:[0-79]\\d|8[0-57-9])\\d|6(?:3(?:00|33|6[16])|441|6(?:3[03-9]|[69]\\d|7[0-689])))\\d{4}",,,,"36001234"],[,,"8[02369]\\d{6}",,,,"80123456"],[,,"(?:87|9[0-8])\\d{6}",,,,"90123456"],[,,"84\\d{6}",,,,"84123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BH",973,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2",["[13679]|8[02-4679]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BI:[,[,,"(?:[267]\\d|31)\\d{6}",,,,,,,[8]],[,,"(?:22|31)\\d{6}",,,,"22201234"],[,,"(?:29|[67][125-9])\\d{6}",
	,,,"79561234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BI",257,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2367]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BJ:[,[,,"[24-689]\\d{7}",,,,,,,[8]],[,,"2090\\d{4}|2(?:02|1[037]|2[45]|3[68]|4\\d)\\d{5}",,,,"20211234"],[,,"(?:4[0-8]|[56]\\d|9[013-9])\\d{6}",,,,"90011234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"857[58]\\d{4}",,,,"85751234"],
	"BJ",229,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24-689]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"81\\d{6}",,,,"81123456"],,,[,,,,,,,,,[-1]]],BL:[,[,,"590\\d{6}|(?:69|80|9\\d)\\d{7}",,,,,,,[9]],[,,"590(?:2[7-9]|3[3-7]|5[12]|87)\\d{4}",,,,"590271234"],[,,"69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))\\d{4}",,,,"690001234"],[,,"80[0-5]\\d{6}",,,,"800012345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"9(?:(?:39[5-7]|76[018])\\d|475[0-5])\\d{4}",
	,,,"976012345"],"BL",590,"00","0",,,"0",,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BM:[,[,,"(?:441|[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"441(?:[46]\\d\\d|5(?:4\\d|60|89))\\d{4}",,,,"4414123456",,,,[7]],[,,"441(?:[2378]\\d|5[0-39]|9[02])\\d{5}",,,,"4413701234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}",
	,,,"5002345678"],[,,,,,,,,,[-1]],"BM",1,"011","1",,,"([2-9]\\d{6})$|1","441$1",,,,,[,,,,,,,,,[-1]],,"441",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BN:[,[,,"[2-578]\\d{6}",,,,,,,[7]],[,,"22[0-7]\\d{4}|(?:2[013-9]|[34]\\d|5[0-25-9])\\d{5}",,,,"2345678"],[,,"(?:22[89]|[78]\\d\\d)\\d{4}",,,,"7123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"5[34]\\d{5}",,,,"5345678"],"BN",673,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[2-578]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],
	[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BO:[,[,,"8001\\d{5}|(?:[2-467]\\d|50)\\d{6}",,,,,,,[8,9],[7]],[,,"(?:2(?:2\\d\\d|5(?:11|[258]\\d|9[67])|6(?:12|2\\d|9[34])|8(?:2[34]|39|62))|3(?:3\\d\\d|4(?:6\\d|8[24])|8(?:25|42|5[257]|86|9[25])|9(?:[27]\\d|3[2-4]|4[248]|5[24]|6[2-6]))|4(?:4\\d\\d|6(?:11|[24689]\\d|72)))\\d{4}",,,,"22123456",,,[8],[7]],[,,"[67]\\d{7}",,,,"71234567",,,[8]],[,,"8001[07]\\d{4}",,,,"800171234",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"50\\d{6}",,,,"50123456",,,[8],
	[7]],"BO",591,"00(?:1\\d)?","0",,,"0(1\\d)?",,,,[[,"(\\d)(\\d{7})","$1 $2",["[235]|4[46]"],,"0$CC $1"],[,"(\\d{8})","$1",["[67]"],,"0$CC $1"],[,"(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["8"],,"0$CC $1"]],,[,,,,,,,,,[-1]],,,[,,"8001[07]\\d{4}",,,,,,,[9]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BQ:[,[,,"(?:[34]1|7\\d)\\d{5}",,,,,,,[7]],[,,"(?:318[023]|41(?:6[023]|70)|7(?:1[578]|2[05]|50)\\d)\\d{3}",,,,"7151234"],[,,"(?:31(?:8[14-8]|9[14578])|416[14-9]|7(?:0[01]|7[07]|8\\d|9[056])\\d)\\d{3}",,,,"3181234"],[,
	,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BQ",599,"00",,,,,,,,,,[,,,,,,,,,[-1]],,"[347]",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BR:[,[,,"(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-46-9]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}",,,,,,,[8,9,10,11]],[,,"(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-5]\\d{7}",,,,"1123456789",,,[10],[8]],[,,"(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])(?:7|9\\d)\\d{7}",,,,"11961234567",,,[10,11],[8,9]],[,
	,"800\\d{6,7}",,,,"800123456",,,[9,10]],[,,"300\\d{6}|[59]00\\d{6,7}",,,,"300123456",,,[9,10]],[,,"(?:30[03]\\d{3}|4(?:0(?:0\\d|20)|370))\\d{4}|300\\d{5}",,,,"40041234",,,[8,10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BR",55,"00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)","0",,,"(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?","$2",,,[[,"(\\d{3,6})","$1",["1(?:1[25-8]|2[357-9]|3[02-68]|4[12568]|5|6[0-8]|8[015]|9[0-47-9])|321|610"]],[,"(\\d{4})(\\d{4})","$1-$2",["300|4(?:0[02]|37)","4(?:02|37)0|[34]00"]],
	[,"(\\d{4})(\\d{4})","$1-$2",["[2-57]","[2357]|4(?:[0-24-9]|3(?:[0-689]|7[1-9]))"]],[,"(\\d{3})(\\d{2,3})(\\d{4})","$1 $2 $3",["(?:[358]|90)0"],"0$1"],[,"(\\d{5})(\\d{4})","$1-$2",["9"]],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"],"($1)","0 $CC ($1)"],[,"(\\d{2})(\\d{5})(\\d{4})","$1 $2-$3",["[16][1-9]|[2-57-9]"],"($1)","0 $CC ($1)"]],[[,"(\\d{4})(\\d{4})","$1-$2",["300|4(?:0[02]|37)","4(?:02|37)0|[34]00"]],[,"(\\d{3})(\\d{2,3})(\\d{4})",
	"$1 $2 $3",["(?:[358]|90)0"],"0$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"],"($1)","0 $CC ($1)"],[,"(\\d{2})(\\d{5})(\\d{4})","$1 $2-$3",["[16][1-9]|[2-57-9]"],"($1)","0 $CC ($1)"]],[,,,,,,,,,[-1]],,,[,,"30(?:0\\d{5,7}|3\\d{7})|40(?:0\\d|20)\\d{4}|800\\d{6,7}",,,,,,,[8,9,10]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BS:[,[,,"(?:242|[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"242(?:3(?:02|[236][1-9]|4[0-24-9]|5[0-68]|7[347]|8[0-4]|9[2-467])|461|502|6(?:0[1-5]|12|2[013]|[45]0|7[67]|8[78]|9[89])|7(?:02|88))\\d{4}",
	,,,"2423456789",,,,[7]],[,,"242(?:3(?:5[79]|7[56]|95)|4(?:[23][1-9]|4[1-35-9]|5[1-8]|6[2-8]|7\\d|81)|5(?:2[45]|3[35]|44|5[1-46-9]|65|77)|6[34]6|7(?:27|38)|8(?:0[1-9]|1[02-9]|2\\d|3[0-4]|[89]9))\\d{4}",,,,"2423591234",,,,[7]],[,,"242300\\d{4}|8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456",,,,[7]],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}",
	,,,"5002345678"],[,,,,,,,,,[-1]],"BS",1,"011","1",,,"([3-8]\\d{6})$|1","242$1",,,,,[,,,,,,,,,[-1]],,"242",[,,,,,,,,,[-1]],[,,"242225\\d{4}",,,,"2422250123"],,,[,,,,,,,,,[-1]]],BT:[,[,,"[17]\\d{7}|[2-8]\\d{6}",,,,,,,[7,8],[6]],[,,"(?:2[3-6]|[34][5-7]|5[236]|6[2-46]|7[246]|8[2-4])\\d{5}",,,,"2345678",,,[7],[6]],[,,"(?:1[67]|77)\\d{6}",,,,"17123456",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BT",975,"00",,,,,,,,[[,"(\\d{3})(\\d{3})","$1 $2",["[2-7]"]],[,"(\\d)(\\d{3})(\\d{3})",
	"$1 $2 $3",["[2-68]|7[246]"]],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[67]|7"]]],[[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[2-68]|7[246]"]],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[67]|7"]]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BW:[,[,,"(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}",,,,,,,[7,8,10]],[,,"(?:2(?:4[0-48]|6[0-24]|9[0578])|3(?:1[0-35-9]|55|[69]\\d|7[013]|81)|4(?:6[03]|7[1267]|9[0-5])|5(?:3[03489]|4[0489]|7[1-47]|88|9[0-49])|6(?:2[1-35]|5[149]|8[013467]))\\d{4}",
	,,,"2401234",,,[7]],[,,"(?:321|7[1-8]\\d)\\d{5}",,,,"71123456",,,[8]],[,,"(?:0800|800\\d)\\d{6}",,,,"0800012345",,,[10]],[,,"90\\d{5}",,,,"9012345",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"79(?:1(?:[0-2]\\d|3[0-3])|2[0-7]\\d)\\d{3}",,,,"79101234",,,[8]],"BW",267,"00",,,,,,,,[[,"(\\d{2})(\\d{5})","$1 $2",["90"]],[,"(\\d{3})(\\d{4})","$1 $2",["[24-6]|3[15-9]"]],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[37]"]],[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["0"]],[,"(\\d{3})(\\d{4})(\\d{3})","$1 $2 $3",
	["8"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BY:[,[,,"(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}",,,,,,,[6,7,8,9,10,11],[5]],[,,"(?:1(?:5(?:1[1-5]|[24]\\d|6[2-4]|9[1-7])|6(?:[235]\\d|4[1-7])|7\\d\\d)|2(?:1(?:[246]\\d|3[0-35-9]|5[1-9])|2(?:[235]\\d|4[0-8])|3(?:[26]\\d|3[02-79]|4[024-7]|5[03-7])))\\d{5}",,,,"152450911",,,[9],[5,6,7]],[,,"(?:2(?:5[5-79]|9[1-9])|(?:33|44)\\d)\\d{6}",
	,,,"294911911",,,[9]],[,,"800\\d{3,7}|8(?:0[13]|20\\d)\\d{7}",,,,"8011234567"],[,,"(?:810|902)\\d{7}",,,,"9021234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"249\\d{6}",,,,"249123456",,,[9]],"BY",375,"810","8",,,"0|80?",,"8~10",,[[,"(\\d{3})(\\d{3})","$1 $2",["800"],"8 $1"],[,"(\\d{3})(\\d{2})(\\d{2,4})","$1 $2 $3",["800"],"8 $1"],[,"(\\d{4})(\\d{2})(\\d{3})","$1 $2-$3",["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])","1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"],
	"8 0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2-$3-$4",["1(?:[56]|7[467])|2[1-3]"],"8 0$1"],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[1-4]"],"8 0$1"],[,"(\\d{3})(\\d{3,4})(\\d{4})","$1 $2 $3",["[89]"],"8 $1"]],,[,,,,,,,,,[-1]],,,[,,"800\\d{3,7}|(?:8(?:0[13]|10|20\\d)|902)\\d{7}"],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BZ:[,[,,"(?:0800\\d|[2-8])\\d{6}",,,,,,,[7,11]],[,,"(?:2(?:[02]\\d|36|[68]0)|[3-58](?:[02]\\d|[68]0)|7(?:[02]\\d|32|[68]0))\\d{4}",,,,"2221234",,,[7]],[,,"6[0-35-7]\\d{5}",
	,,,"6221234",,,[7]],[,,"0800\\d{7}",,,,"08001234123",,,[11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BZ",501,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1-$2",["[2-8]"]],[,"(\\d)(\\d{3})(\\d{4})(\\d{3})","$1-$2-$3-$4",["0"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CA:[,[,,"(?:[2-8]\\d|90)\\d{8}|3\\d{6}",,,,,,,[7,10]],[,,"(?:2(?:04|[23]6|[48]9|50|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|7[39])|90[25])[2-9]\\d{6}",
	,,,"5062345678",,,[10],[7]],[,,"(?:2(?:04|[23]6|[48]9|50|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|7[39])|90[25])[2-9]\\d{6}",,,,"5062345678",,,[10],[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456",,,[10]],[,,"900[2-9]\\d{6}",,,,"9002123456",,,[10]],[,,,,,,,,,[-1]],[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:00|2[125-9]|33|44|66|77|88)|622)[2-9]\\d{6}",
	,,,"5002345678",,,[10]],[,,"600[2-9]\\d{6}",,,,"6002012345",,,[10]],"CA",1,"011","1",,,"1",,,1,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"310\\d{4}",,,,"3101234",,,[7]],,,[,,,,,,,,,[-1]]],CC:[,[,,"1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}",,,,,,,[6,7,8,9,10,12]],[,,"8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}",,,,"891621234",,,[9],[8]],[,,"4(?:79[01]|83[0-389]|94[0-4])\\d{5}|4(?:[0-36]\\d|4[047-9]|5[0-25-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}",
	,,,"412345678",,,[9]],[,,"180(?:0\\d{3}|2)\\d{3}",,,,"1800123456",,,[7,10]],[,,"190[0-26]\\d{6}",,,,"1900123456",,,[10]],[,,"13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}",,,,"1300123456",,,[6,8,10,12]],[,,,,,,,,,[-1]],[,,"14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",,,,"147101234",,,[9]],"CC",61,"001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","0",,,"([59]\\d{7})$|0","8$1","0011",,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CD:[,[,,"[189]\\d{8}|[1-68]\\d{6}",,,,,,
	,[7,9]],[,,"12\\d{7}|[1-6]\\d{6}",,,,"1234567"],[,,"88\\d{5}|(?:8[0-69]|9[017-9])\\d{7}",,,,"991234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CD",243,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["88"],"0$1"],[,"(\\d{2})(\\d{5})","$1 $2",["[1-6]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[89]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CF:[,[,,
	"(?:[27]\\d{3}|8776)\\d{4}",,,,,,,[8]],[,,"2[12]\\d{6}",,,,"21612345"],[,,"7[024-7]\\d{6}",,,,"70012345"],[,,,,,,,,,[-1]],[,,"8776\\d{4}",,,,"87761234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CF",236,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[278]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CG:[,[,,"222\\d{6}|(?:0\\d|80)\\d{7}",,,,,,,[9]],[,,"222[1-589]\\d{5}",,,,"222123456"],[,,"026(?:1[0-5]|6[6-9])\\d{4}|0(?:[14-6]\\d\\d|2(?:40|5[5-8]|6[07-9]))\\d{5}",
	,,,"061234567"],[,,,,,,,,,[-1]],[,,"80[0-2]\\d{6}",,,,"800123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CG",242,"00",,,,,,,,[[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["8"]],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[02]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CH:[,[,,"8\\d{11}|[2-9]\\d{8}",,,,,,,[9,12]],[,,"(?:2[12467]|3[1-4]|4[134]|5[256]|6[12]|[7-9]1)\\d{7}",,,,"212345678",,,[9]],[,,"(?:6[89]|7[235-9])\\d{7}",,,,"781234567",,,[9]],[,,"800\\d{6}",,,,"800123456",
	,,[9]],[,,"90[016]\\d{6}",,,,"900123456",,,[9]],[,,"84[0248]\\d{6}",,,,"840123456",,,[9]],[,,"878\\d{6}",,,,"878123456",,,[9]],[,,,,,,,,,[-1]],"CH",41,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8[047]|90"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-79]|81"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["8"],"0$1"]],,[,,"74[0248]\\d{6}",,,,"740123456",,,[9]],,,[,,,,,,,,,[-1]],[,,"5[18]\\d{7}",,,,"581234567",,,[9]],,,[,,"860\\d{9}",,,,"860123456789",
	,,[12]]],CI:[,[,,"[02]\\d{9}",,,,,,,[10]],[,,"2(?:[15]\\d{3}|7(?:2(?:0[23]|1[2357]|2[245]|3[45]|4[3-5])|3(?:06|1[69]|[2-6]7)))\\d{5}",,,,"2123456789"],[,,"0[157]\\d{8}",,,,"0123456789"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CI",225,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d)(\\d{5})","$1 $2 $3 $4",["2"]],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3 $4",["0"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CK:[,[,,"[2-578]\\d{4}",,,,,,
	,[5]],[,,"(?:2\\d|3[13-7]|4[1-5])\\d{3}",,,,"21234"],[,,"[578]\\d{4}",,,,"71234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CK",682,"00",,,,,,,,[[,"(\\d{2})(\\d{3})","$1 $2",["[2-578]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CL:[,[,,"12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}",,,,,,,[9,10,11]],[,,"2(?:1982[0-6]|3314[05-9])\\d{3}|(?:2(?:1(?:160|962)|3(?:2\\d\\d|3(?:[03467]\\d|1[0-35-9]|2[1-9]|5[0-24-9]|8[0-3])|600)|646[59])|80[1-9]\\d\\d|9(?:3(?:[0-57-9]\\d\\d|6(?:0[02-9]|[1-9]\\d))|6(?:[0-8]\\d\\d|9(?:[02-79]\\d|1[05-9]))|7[1-9]\\d\\d|9(?:[03-9]\\d\\d|1(?:[0235-9]\\d|4[0-24-9])|2(?:[0-79]\\d|8[0-46-9]))))\\d{4}|(?:22|3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|8[1-9]|9[2458])\\d{7}",
	,,,"221234567",,,[9]],[,,"2(?:1982[0-6]|3314[05-9])\\d{3}|(?:2(?:1(?:160|962)|3(?:2\\d\\d|3(?:[03467]\\d|1[0-35-9]|2[1-9]|5[0-24-9]|8[0-3])|600)|646[59])|80[1-9]\\d\\d|9(?:3(?:[0-57-9]\\d\\d|6(?:0[02-9]|[1-9]\\d))|6(?:[0-8]\\d\\d|9(?:[02-79]\\d|1[05-9]))|7[1-9]\\d\\d|9(?:[03-9]\\d\\d|1(?:[0235-9]\\d|4[0-24-9])|2(?:[0-79]\\d|8[0-46-9]))))\\d{4}|(?:22|3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|8[1-9]|9[2458])\\d{7}",,,,"221234567",,,[9]],[,,"(?:123|8)00\\d{6}",,,,"800123456",,,[9,11]],[,,,,,,,,,[-1]],[,,
	"600\\d{7,8}",,,,"6001234567",,,[10,11]],[,,,,,,,,,[-1]],[,,"44\\d{7}",,,,"441234567",,,[9]],"CL",56,"(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0",,,,,,,1,[[,"(\\d{4})","$1",["1(?:[03-589]|21)|[29]0|78"]],[,"(\\d{5})(\\d{4})","$1 $2",["219","2196"],"($1)"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["44"]],[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2[1-36]"],"($1)"],[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["9[2-9]"]],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"],
	"($1)"],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["60|8"]],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]],[,"(\\d{3})(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3 $4",["60"]]],[[,"(\\d{5})(\\d{4})","$1 $2",["219","2196"],"($1)"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["44"]],[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2[1-36]"],"($1)"],[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["9[2-9]"]],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"],"($1)"],[,"(\\d{3})(\\d{3})(\\d{3,4})",
	"$1 $2 $3",["60|8"]],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]],[,"(\\d{3})(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3 $4",["60"]]],[,,,,,,,,,[-1]],,,[,,"600\\d{7,8}",,,,,,,[10,11]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CM:[,[,,"[26]\\d{8}|88\\d{6,7}",,,,,,,[8,9]],[,,"2(?:22|33)\\d{6}",,,,"222123456",,,[9]],[,,"(?:24[23]|6(?:[25-9]\\d|40))\\d{6}",,,,"671234567",,,[9]],[,,"88\\d{6,7}",,,,"88012345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CM",237,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
	"$1 $2 $3 $4",["88"]],[,"(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[26]|88"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CN:[,[,,"(?:(?:1[03-689]|2\\d)\\d\\d|6)\\d{8}|1\\d{10}|[126]\\d{6}(?:\\d(?:\\d{2})?)?|86\\d{5,6}|(?:[3-579]\\d|8[0-57-9])\\d{5,9}",,,,,,,[7,8,9,10,11,12],[5,6]],[,,"(?:10(?:[02-79]\\d\\d|[18](?:0[1-9]|[1-9]\\d))|2(?:[02-57-9]\\d{3}|1(?:[18](?:0[1-9]|[1-9]\\d)|[2-79]\\d\\d))|(?:41[03]|8078|9(?:78|94))\\d\\d)\\d{5}|(?:10|2[0-57-9])(?:1(?:00|23)\\d\\d|95\\d{3,4})|(?:41[03]|9(?:78|94))(?:100\\d\\d|95\\d{3,4})|8078123|(?:43[35]|754|851)\\d{7,8}|(?:43[35]|754|851)(?:1(?:00\\d|23)\\d|95\\d{3,4})|(?:3(?:11|7[179])|4(?:[15]1|3[12])|5(?:1\\d|2[37]|3[12]|51|7[13-79]|9[15])|7(?:[39]1|5[57]|6[09])|8(?:71|98))(?:[02-8]\\d{7}|1(?:0(?:0\\d\\d(?:\\d{3})?|[1-9]\\d{5})|[13-9]\\d{6}|2(?:[0-24-9]\\d{5}|3\\d(?:\\d{4})?))|9(?:[0-46-9]\\d{6}|5\\d{3}(?:\\d(?:\\d{2})?)?))|(?:3(?:1[02-9]|35|49|5\\d|7[02-68]|9[1-68])|4(?:1[24-9]|2[179]|3[46-9]|5[2-9]|6[47-9]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[17]\\d|2[248]|3[04-9]|4[3-6]|5[0-3689]|6[2368]|9[02-9])|8(?:1[236-8]|2[5-7]|3\\d|5[2-9]|7[02-9]|8[36-8]|9[1-7])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))(?:[02-8]\\d{6}|1(?:0(?:0\\d\\d(?:\\d{2})?|[1-9]\\d{4})|[13-9]\\d{5}|2(?:[0-24-9]\\d{4}|3\\d(?:\\d{3})?))|9(?:[0-46-9]\\d{5}|5\\d{3,5}))",
	,,,"1012345678",,,[7,8,9,10,11],[5,6]],[,,"1740[0-5]\\d{6}|1(?:[38]\\d|4[57]|[59][0-35-9]|6[25-7]|7[0-35-8])\\d{8}",,,,"13123456789",,,[11]],[,,"(?:(?:10|21)8|8)00\\d{7}",,,,"8001234567",,,[10,12]],[,,"16[08]\\d{5}",,,,"16812345",,,[8]],[,,"10(?:10\\d{4}|96\\d{3,4})|400\\d{7}|950\\d{7,8}|(?:2[0-57-9]|3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))96\\d{3,4}",
	,,,"4001234567",,,[7,8,9,10,11],[5,6]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CN",86,"00|1(?:[12]\\d|79)\\d\\d00","0",,,"(1(?:[12]\\d|79)\\d\\d)|0",,"00",,[[,"(\\d{5,6})","$1",["1(?:00|2[13])|9[56]","1(?:00|2(?:1|39))|9[56]","1(?:00|2(?:1|395))|9[56]"]],[,"(\\d{5,6})","$1",["1(?:0|23)|781|[1-9]12","1(?:0|23)|7812|[1-9]123","1(?:0|23(?:[0-8]|9[0-46-9]))|78123|[1-9]123"]],[,"(\\d{2})(\\d{5,6})","$1 $2",["(?:10|2[0-57-9])[19]|3(?:[157]|35|49|9[1-68])|4(?:1[124-9]|2[179]|6[47-9]|7|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:07|1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3|4[13]|5[1-5]|7[0-79]|9[0-35-9])|(?:4[35]|59|85)[1-9]",
	"(?:10|2[0-57-9])(?:1[02]|9[56])|8078|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))1","10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|80781|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))12",
	"10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|807812|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123","10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:078|1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123"],
	"0$1","$CC $1"],[,"(\\d{3})(\\d{4})","$1 $2",["[1-9]","1[1-9]|26|[3-9]|(?:10|2[0-57-9])(?:[0-8]|9[0-47-9])","1(?:0(?:[02-8]|1(?:[013-9]|2[0-24-9])|9[0-47-9])|[1-9])|2(?:[0-57-9](?:[02-8]|1(?:0[1-9]|[13-9]|2[0-24-9])|9[0-47-9])|6)|[3-9]","1(?:0(?:[02-8]|1(?:[013-9]|2[0-24-9])|9[0-47-9])|[1-9])|2(?:[0-57-9](?:[02-8]|1(?:0[1-9]|[13-9]|2[0-24-9])|9[0-47-9])|6)|3(?:[0268]|3[0-46-9]|4[0-8]|9[079])|4(?:[049]|1[03]|2[02-68]|[35]0|6[0-356]|8[014-9])|5(?:0|2[0-24-689]|4[0-2457-9]|6[057-9]|8[1-9]|90)|6(?:[0-24578]|3[06-9]|6[14-79]|9[03-9])|7(?:0[02-9]|2[0135-79]|3[23]|4[0-27-9]|6[1457]|8)|8(?:[046]|1[01459]|2[0-489]|50|8[0-2459]|9[09])|9(?:0[0457]|1[08]|[268]|4[024-9]|5[06-9]|78|94)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))(?:[02-9]|1(?:[013-9]|2[0-24-9]))",
	"1(?:0(?:[02-8]|1(?:[013-9]|2[0-24-9])|9[0-47-9])|[1-9])|2(?:[0-57-9](?:[02-8]|1(?:0[1-9]|[13-9]|2[0-24-9])|9[0-47-9])|6)|3(?:[0268]|3[0-46-9]|4[0-8]|9[079])|4(?:[049]|1[03]|2[02-68]|[35]0|6[0-356]|8[014-9])|5(?:0|2[0-24-689]|4[0-2457-9]|6[057-9]|8[1-9]|90)|6(?:[0-24578]|3[06-9]|6[14-79]|9[03-9])|7(?:0[02-9]|2[0135-79]|3[23]|4[0-27-9]|6[1457]|8)|8(?:0(?:[0-689]|7[0-79])|1[01459]|2[0-489]|[46]|50|8[0-2459]|9[09])|9(?:0[0457]|1[08]|[268]|4[024-9]|5[06-9]|78|94)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:078|1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))(?:[02-9]|1(?:[013-9]|2[0-24-9]))"]],
	[,"(\\d{4})(\\d{4})","$1 $2",["16[08]"]],[,"(\\d{3})(\\d{5,6})","$1 $2",["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]","(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]",
	"85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])","85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"],
	"0$1","$CC $1"],[,"(\\d{4})(\\d{4})","$1 $2",["[1-9]","1(?:0(?:[02-8]|1[1-9]|9[0-47-9])|[1-9])|2(?:[0-57-9](?:[0-8]|9[0-47-9])|6)|[3-9]","1(?:0(?:[02-8]|1[1-9]|9[0-47-9])|[1-9])|26|3(?:[0268]|4[0-8]|9[079])|4(?:[049]|2[02-68]|[35]0|6[0-356]|8[014-9])|5(?:0|2[0-24-689]|4[0-2457-9]|6[057-9]|8[1-9]|90)|6(?:[0-24578]|3[06-9]|6[14-79]|9[03-9])|7(?:0[02-9]|2[0135-79]|3[23]|4[0-27-9]|6[1457]|8)|8(?:[046]|1[01459]|2[0-489]|5(?:0|[23][0-8])|8[0-2459]|9[09])|9(?:0[0457]|1[08]|[268]|4[024-9]|5[06-9])|(?:33|85[23]9)[0-46-9]|(?:2[0-57-9]|3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:[0-8]|9[0-47-9])",
	"1(?:0[02-8]|[1-9])|2(?:[0-57-9][0-8]|6)|3(?:[0268]|3[0-46-9]|4[0-8]|9[079])|4(?:[049]|2[02-68]|[35]0|6[0-356]|8[014-9])|5(?:0|2[0-24-689]|4[0-2457-9]|6[057-9]|90)|6(?:[0-24578]|3[06-9]|6[14-79]|9[03-9])|7(?:0[02-9]|2[0135-79]|3[23]|4[0-27-9]|6[1457]|8)|8(?:[046]|1[01459]|2[0-489]|5(?:0|[23](?:[02-8]|1[1-9]|9[0-46-9]))|8[0-2459]|9[09])|9(?:0[0457]|1[08]|[268]|4[024-9]|5[06-9])|(?:10|2[0-57-9])9[0-47-9]|(?:101|58|85[23]10)[1-9]|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:[02-8]|1(?:0[1-9]|[1-9])|9[0-47-9])"]],
	[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["(?:4|80)0"]],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["10|2(?:[02-57-9]|1[1-9])","10|2(?:[02-57-9]|1[1-9])","10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"],"0$1","$CC $1",1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"],"0$1","$CC $1",1],[,"(\\d{3})(\\d{7,8})",
	"$1 $2",["9"]],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["80"],"0$1","$CC $1",1],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["[3-578]"],"0$1","$CC $1",1],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["1[3-9]"],,"$CC $1"],[,"(\\d{2})(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3 $4",["[12]"],"0$1",,1]],[[,"(\\d{2})(\\d{5,6})","$1 $2",["(?:10|2[0-57-9])[19]|3(?:[157]|35|49|9[1-68])|4(?:1[124-9]|2[179]|6[47-9]|7|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:07|1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3|4[13]|5[1-5]|7[0-79]|9[0-35-9])|(?:4[35]|59|85)[1-9]",
	"(?:10|2[0-57-9])(?:1[02]|9[56])|8078|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))1","10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|80781|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))12",
	"10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|807812|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123","10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:078|1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123"],
	"0$1","$CC $1"],[,"(\\d{3})(\\d{5,6})","$1 $2",["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]","(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]",
	"85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])","85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"],
	"0$1","$CC $1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["(?:4|80)0"]],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["10|2(?:[02-57-9]|1[1-9])","10|2(?:[02-57-9]|1[1-9])","10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"],"0$1","$CC $1",1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"],"0$1","$CC $1",1],[,"(\\d{3})(\\d{7,8})",
	"$1 $2",["9"]],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["80"],"0$1","$CC $1",1],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["[3-578]"],"0$1","$CC $1",1],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["1[3-9]"],,"$CC $1"],[,"(\\d{2})(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3 $4",["[12]"],"0$1",,1]],[,,,,,,,,,[-1]],,,[,,"(?:(?:10|21)8|[48])00\\d{7}|950\\d{7,8}",,,,,,,[10,11,12]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CO:[,[,,"(?:60\\d\\d|9101)\\d{6}|(?:1\\d|3)\\d{9}",,,,,,,[10,11],[7]],[,,"601055(?:[0-4]\\d|50)\\d\\d|6010(?:[0-4]\\d|5[0-4])\\d{4}|60(?:[124-7][2-9]|8[1-9])\\d{6}",
	,,,"6012345678",,,[10],[7]],[,,"333301[0-5]\\d{3}|3333(?:00|2[5-9]|[3-9]\\d)\\d{4}|(?:3(?:24[1-9]|3(?:00|3[0-24-9]))|9101)\\d{6}|3(?:0[0-5]|1\\d|2[0-3]|5[01]|70)\\d{7}",,,,"3211234567",,,[10]],[,,"1800\\d{7}",,,,"18001234567",,,[11]],[,,"19(?:0[01]|4[78])\\d{7}",,,,"19001234567",,,[11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CO",57,"00(?:4(?:[14]4|56)|[579])","0",,,"0([3579]|4(?:[14]4|56))?",,,,[[,"(\\d{3})(\\d{7})","$1 $2",["6"],"($1)","0$CC $1"],[,"(\\d{3})(\\d{7})","$1 $2",["3[0-357]|91"],
	,"0$CC $1"],[,"(\\d)(\\d{3})(\\d{7})","$1-$2-$3",["1"],"0$1"]],[[,"(\\d{3})(\\d{7})","$1 $2",["6"],"($1)","0$CC $1"],[,"(\\d{3})(\\d{7})","$1 $2",["3[0-357]|91"],,"0$CC $1"],[,"(\\d)(\\d{3})(\\d{7})","$1 $2 $3",["1"]]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CR:[,[,,"(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}",,,,,,,[8,10]],[,,"210[7-9]\\d{4}|2(?:[024-7]\\d|1[1-9])\\d{5}",,,,"22123456",,,[8]],[,,"(?:3005\\d|6500[01])\\d{3}|(?:5[07]|6[0-4]|7[0-3]|8[3-9])\\d{6}",,,,"83123456",
	,,[8]],[,,"800\\d{7}",,,,"8001234567",,,[10]],[,,"90[059]\\d{7}",,,,"9001234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"(?:210[0-6]|4\\d{3}|5100)\\d{4}",,,,"40001234",,,[8]],"CR",506,"00",,,,"(19(?:0[0-2468]|1[09]|20|66|77|99))",,,,[[,"(\\d{4})(\\d{4})","$1 $2",["[2-7]|8[3-9]"],,"$CC $1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[89]"],,"$CC $1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CU:[,[,,"(?:[2-7]|8\\d\\d)\\d{7}|[2-47]\\d{6}|[34]\\d{5}",,,,,,,[6,7,8,10],
	[4,5]],[,,"(?:3[23]|4[89])\\d{4,6}|(?:31|4[36]|8(?:0[25]|78)\\d)\\d{6}|(?:2[1-4]|4[1257]|7\\d)\\d{5,6}",,,,"71234567",,,,[4,5]],[,,"(?:5\\d|6[2-4])\\d{6}",,,,"51234567",,,[8]],[,,"800\\d{7}",,,,"8001234567",,,[10]],[,,,,,,,,,[-1]],[,,"807\\d{7}",,,,"8071234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CU",53,"119","0",,,"0",,,,[[,"(\\d{2})(\\d{4,6})","$1 $2",["2[1-4]|[34]"],"(0$1)"],[,"(\\d)(\\d{6,7})","$1 $2",["7"],"(0$1)"],[,"(\\d)(\\d{7})","$1 $2",["[56]"],"0$1"],[,"(\\d{3})(\\d{7})","$1 $2",["8"],
	"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CV:[,[,,"(?:[2-59]\\d\\d|800)\\d{4}",,,,,,,[7]],[,,"2(?:2[1-7]|3[0-8]|4[12]|5[1256]|6\\d|7[1-3]|8[1-5])\\d{4}",,,,"2211234"],[,,"(?:36|5[1-389]|9\\d)\\d{5}",,,,"9911234"],[,,"800\\d{4}",,,,"8001234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"(?:3[3-5]|4[356])\\d{5}",,,,"3401234"],"CV",238,"0",,,,,,,,[[,"(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[2-589]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,
	,,,,,,[-1]]],CW:[,[,,"(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}",,,,,,,[7,8]],[,,"9(?:4(?:3[0-5]|4[14]|6\\d)|50\\d|7(?:2[014]|3[02-9]|4[4-9]|6[357]|77|8[7-9])|8(?:3[39]|[46]\\d|7[01]|8[57-9]))\\d{4}",,,,"94351234"],[,,"953[01]\\d{4}|9(?:5[12467]|6[5-9])\\d{5}",,,,"95181234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"60[0-2]\\d{4}",,,,"6001234",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CW",599,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[3467]"]],[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["9[4-8]"]]],,[,,"955\\d{5}",,,
	,"95581234",,,[8]],1,"[69]",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CX:[,[,,"1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}",,,,,,,[6,7,8,9,10,12]],[,,"8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}",,,,"891641234",,,[9],[8]],[,,"4(?:79[01]|83[0-389]|94[0-4])\\d{5}|4(?:[0-36]\\d|4[047-9]|5[0-25-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}",,,,"412345678",,,[9]],[,,"180(?:0\\d{3}|2)\\d{3}",
	,,,"1800123456",,,[7,10]],[,,"190[0-26]\\d{6}",,,,"1900123456",,,[10]],[,,"13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}",,,,"1300123456",,,[6,8,10,12]],[,,,,,,,,,[-1]],[,,"14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",,,,"147101234",,,[9]],"CX",61,"001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","0",,,"([59]\\d{7})$|0","8$1","0011",,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CY:[,[,,"(?:[279]\\d|[58]0)\\d{6}",,,,,,,[8]],[,,"2[2-6]\\d{6}",,,,"22345678"],[,,"9(?:10|[4-79]\\d)\\d{5}",
	,,,"96123456"],[,,"800\\d{5}",,,,"80001234"],[,,"90[09]\\d{5}",,,,"90012345"],[,,"80[1-9]\\d{5}",,,,"80112345"],[,,"700\\d{5}",,,,"70012345"],[,,,,,,,,,[-1]],"CY",357,"00",,,,,,,,[[,"(\\d{2})(\\d{6})","$1 $2",["[257-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"(?:50|77)\\d{6}",,,,"77123456"],,,[,,,,,,,,,[-1]]],CZ:[,[,,"(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}",,,,,,,[9,10,11,12]],[,,"(?:2\\d|3[1257-9]|4[16-9]|5[13-9])\\d{7}",,,,"212345678",,,[9]],[,,"(?:60[1-8]\\d|7(?:0(?:[2-5]\\d|60)|190|[2379]\\d\\d))\\d{5}",
	,,,"601123456",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"9(?:0[05689]|76)\\d{6}",,,,"900123456",,,[9]],[,,"8[134]\\d{7}",,,,"811234567",,,[9]],[,,"70[01]\\d{6}",,,,"700123456",,,[9]],[,,"9[17]0\\d{6}",,,,"910123456",,,[9]],"CZ",420,"00",,,,,,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[2-8]|9[015-7]"]],[,"(\\d{2})(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3 $4",["96"]],[,"(\\d{2})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]],[,"(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]]],,[,,,,,,,,,[-1]],
	,,[,,,,,,,,,[-1]],[,,"9(?:5\\d|7[2-4])\\d{6}",,,,"972123456",,,[9]],,,[,,"9(?:3\\d{9}|6\\d{7,10})",,,,"93123456789"]],DE:[,[,,"[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}",,,,,,,[4,5,6,7,8,9,10,11,12,13,14,15],[2,3]],[,,"32\\d{9,11}|49[1-6]\\d{10}|322\\d{6}|49[0-7]\\d{3,9}|(?:[34]0|[68]9)\\d{3,13}|(?:2(?:0[1-689]|[1-3569]\\d|4[0-8]|7[1-7]|8[0-7])|3(?:[3569]\\d|4[0-79]|7[1-7]|8[1-8])|4(?:1[02-9]|[2-48]\\d|5[0-6]|6[0-8]|7[0-79])|5(?:0[2-8]|[124-6]\\d|[38][0-8]|[79][0-7])|6(?:0[02-9]|[1-358]\\d|[47][0-8]|6[1-9])|7(?:0[2-8]|1[1-9]|[27][0-7]|3\\d|[4-6][0-8]|8[0-5]|9[013-7])|8(?:0[2-9]|1[0-79]|2\\d|3[0-46-9]|4[0-6]|5[013-9]|6[1-8]|7[0-8]|8[0-24-6])|9(?:0[6-9]|[1-4]\\d|[589][0-7]|6[0-8]|7[0-467]))\\d{3,12}",
	,,,"30123456",,,[5,6,7,8,9,10,11,12,13,14,15],[2,3,4]],[,,"15310\\d{6}|1(?:6[023]|7[0-57-9])\\d{7,8}|1(?:5[0-25-9]|76)\\d{8}",,,,"15123456789",,,[10,11]],[,,"800\\d{7,12}",,,,"8001234567890",,,[10,11,12,13,14,15]],[,,"(?:137[7-9]|900(?:[135]|9\\d))\\d{6}",,,,"9001234567",,,[10,11]],[,,"180\\d{5,11}|13(?:7[1-6]\\d\\d|8)\\d{4}",,,,"18012345",,,[7,8,9,10,11,12,13,14]],[,,"700\\d{8}",,,,"70012345678",,,[11]],[,,,,,,,,,[-1]],"DE",49,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3,13})","$1 $2",["3[02]|40|[68]9"],
	"0$1"],[,"(\\d{3})(\\d{3,12})","$1 $2",["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1","2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"],"0$1"],[,"(\\d{4})(\\d{2,11})","$1 $2",["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]","[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"],
	"0$1"],[,"(\\d{3})(\\d{4})","$1 $2",["138"],"0$1"],[,"(\\d{5})(\\d{2,10})","$1 $2",["3"],"0$1"],[,"(\\d{3})(\\d{5,11})","$1 $2",["181"],"0$1"],[,"(\\d{3})(\\d)(\\d{4,10})","$1 $2 $3",["1(?:3|80)|9"],"0$1"],[,"(\\d{3})(\\d{7,8})","$1 $2",["1[67]"],"0$1"],[,"(\\d{3})(\\d{7,12})","$1 $2",["8"],"0$1"],[,"(\\d{5})(\\d{6})","$1 $2",["185","1850","18500"],"0$1"],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["7"],"0$1"],[,"(\\d{4})(\\d{7})","$1 $2",["18[68]"],"0$1"],[,"(\\d{4})(\\d{7})","$1 $2",["15[1279]"],"0$1"],
	[,"(\\d{5})(\\d{6})","$1 $2",["15[03568]","15(?:[0568]|31)"],"0$1"],[,"(\\d{3})(\\d{8})","$1 $2",["18"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{7,8})","$1 $2 $3",["1(?:6[023]|7)"],"0$1"],[,"(\\d{4})(\\d{2})(\\d{7})","$1 $2 $3",["15[279]"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{8})","$1 $2 $3",["15"],"0$1"]],,[,,"16(?:4\\d{1,10}|[89]\\d{1,11})",,,,"16412345",,,[4,5,6,7,8,9,10,11,12,13,14]],,,[,,,,,,,,,[-1]],[,,"18(?:1\\d{5,11}|[2-9]\\d{8})",,,,"18500123456",,,[8,9,10,11,12,13,14]],,,[,,"1(?:6(?:013|255|399)|7(?:(?:[015]1|[69]3)3|[2-4]55|[78]99))\\d{7,8}|15(?:(?:[03-68]00|113)\\d|2\\d55|7\\d99|9\\d33)\\d{7}",
	,,,"177991234567",,,[12,13]]],DJ:[,[,,"(?:2\\d|77)\\d{6}",,,,,,,[8]],[,,"2(?:1[2-5]|7[45])\\d{5}",,,,"21360003"],[,,"77\\d{6}",,,,"77831001"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"DJ",253,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[27]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],DK:[,[,,"[2-9]\\d{7}",,,,,,,[8]],[,,"(?:(?:2\\d|9[1-46-9])\\d|3(?:[0-37]\\d|4[013]|5[0-58]|6[01347-9]|8[0-8]|9[0-79])|4(?:[0-25]\\d|[34][02-9]|6[013-579]|7[013579]|8[0-47]|9[0-27])|5(?:[0-36]\\d|4[0146-9]|5[03-57-9]|7[0568]|8[0-358]|9[0-69])|6(?:[013578]\\d|2[0-68]|4[02-8]|6[01689]|9[015689])|7(?:[0-69]\\d|7[03-9]|8[0147])|8(?:[16-9]\\d|2[0-58]))\\d{5}",
	,,,"32123456"],[,,"(?:[2-7]\\d|8[126-9]|9[1-46-9])\\d{6}",,,,"34412345"],[,,"80\\d{6}",,,,"80123456"],[,,"90\\d{6}",,,,"90123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"DK",45,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],DM:[,[,,"(?:[58]\\d\\d|767|900)\\d{7}",,,,,,,[10],[7]],[,,"767(?:2(?:55|66)|4(?:2[01]|4[0-25-9])|50[0-4])\\d{4}",,,,"7674201234",,,,[7]],[,,"767(?:2(?:[2-4689]5|7[5-7])|31[5-7]|61[1-8]|70[1-6])\\d{4}",
	,,,"7672251234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"DM",1,"011","1",,,"([2-7]\\d{6})$|1","767$1",,,,,[,,,,,,,,,[-1]],,"767",[,,,,,,,,,[-1]],[,,,,,
	,,,,[-1]],,,[,,,,,,,,,[-1]]],DO:[,[,,"(?:[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"8(?:[04]9[2-9]\\d\\d|29(?:2(?:[0-59]\\d|6[04-9]|7[0-27]|8[0237-9])|3(?:[0-35-9]\\d|4[7-9])|[45]\\d\\d|6(?:[0-27-9]\\d|[3-5][1-9]|6[0135-8])|7(?:0[013-9]|[1-37]\\d|4[1-35689]|5[1-4689]|6[1-57-9]|8[1-79]|9[1-8])|8(?:0[146-9]|1[0-48]|[248]\\d|3[1-79]|5[01589]|6[013-68]|7[124-8]|9[0-8])|9(?:[0-24]\\d|3[02-46-9]|5[0-79]|60|7[0169]|8[57-9]|9[02-9])))\\d{4}",,,,"8092345678",,,,[7]],[,,"8[024]9[2-9]\\d{6}",,,,"8092345678",
	,,,[7]],[,,"8(?:00(?:14|[2-9]\\d)|(?:33|44|55|66|77|88)[2-9]\\d)\\d{5}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"DO",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"8001|8[024]9",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],
	,,[,,,,,,,,,[-1]]],DZ:[,[,,"(?:[1-4]|[5-79]\\d|80)\\d{7}",,,,,,,[8,9]],[,,"9619\\d{5}|(?:1\\d|2[013-79]|3[0-8]|4[013-689])\\d{6}",,,,"12345678"],[,,"(?:5(?:4[0-29]|5\\d|6[0-3])|6(?:[569]\\d|7[0-6])|7[7-9]\\d)\\d{6}",,,,"551234567",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"80[3-689]1\\d{5}",,,,"808123456",,,[9]],[,,"80[12]1\\d{5}",,,,"801123456",,,[9]],[,,,,,,,,,[-1]],[,,"98[23]\\d{6}",,,,"983123456",,,[9]],"DZ",213,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[1-4]"],
	"0$1"],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["9"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-8]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],EC:[,[,,"1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}",,,,,,,[8,9,10,11],[7]],[,,"[2-7][2-7]\\d{6}",,,,"22123456",,,[8],[7]],[,,"964[0-2]\\d{5}|9(?:39|[57][89]|6[0-36-9]|[89]\\d)\\d{6}",,,,"991234567",,,[9]],[,,"1800\\d{7}|1[78]00\\d{6}",,,,"18001234567",,,[10,11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,
	,,,,[-1]],[,,"[2-7]890\\d{4}",,,,"28901234",,,[8]],"EC",593,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{4})","$1-$2",["[2-7]"]],[,"(\\d)(\\d{3})(\\d{4})","$1 $2-$3",["[2-7]"],"(0$1)"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["9"],"0$1"],[,"(\\d{4})(\\d{3})(\\d{3,4})","$1 $2 $3",["1"]]],[[,"(\\d)(\\d{3})(\\d{4})","$1-$2-$3",["[2-7]"]],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["9"],"0$1"],[,"(\\d{4})(\\d{3})(\\d{3,4})","$1 $2 $3",["1"]]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],EE:[,
	[,,"8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}",,,,,,,[7,8,10]],[,,"(?:3[23589]|4[3-8]|6\\d|7[1-9]|88)\\d{5}",,,,"3212345",,,[7]],[,,"(?:5\\d{5}|8(?:1(?:0(?:0(?:00|[178]\\d)|[3-9]\\d\\d)|(?:1(?:0[236]|1\\d)|(?:2[0-59]|[3-79]\\d)\\d)\\d)|2(?:0(?:0(?:00|4\\d)|(?:19|[2-7]\\d)\\d)|(?:(?:[124-6]\\d|3[5-9])\\d|7(?:[0-79]\\d|8[13-9])|8(?:[2-6]\\d|7[01]))\\d)|[349]\\d{4}))\\d\\d|5(?:(?:[02]\\d|5[0-478])\\d|1(?:[0-8]\\d|95)|6(?:4[0-4]|5[1-589]))\\d{3}",,,,"51234567",,,[7,8]],[,,"800(?:(?:0\\d\\d|1)\\d|[2-9])\\d{3}",
	,,,"80012345"],[,,"(?:40\\d\\d|900)\\d{4}",,,,"9001234",,,[7,8]],[,,,,,,,,,[-1]],[,,"70[0-2]\\d{5}",,,,"70012345",,,[8]],[,,,,,,,,,[-1]],"EE",372,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88","[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]],[,"(\\d{4})(\\d{3,4})","$1 $2",["[45]|8(?:00|[1-49])","[45]|8(?:00[1-9]|[1-49])"]],[,"(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["7"]],[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["8"]]],,[,
	,,,,,,,,[-1]],,,[,,"800[2-9]\\d{3}",,,,,,,[7]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],EG:[,[,,"[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}",,,,,,,[8,9,10],[6,7]],[,,"13[23]\\d{6}|(?:15|57)\\d{6,7}|(?:2\\d|3|4[05-8]|5[05]|6[24-689]|8[2468]|9[235-7])\\d{7}",,,,"234567890",,,[8,9],[6,7]],[,,"1[0-25]\\d{8}",,,,"1001234567",,,[10]],[,,"800\\d{7}",,,,"8001234567",,,[10]],[,,"900\\d{7}",,,,"9001234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"EG",20,"00","0",,,"0",,,,[[,"(\\d)(\\d{7,8})","$1 $2",
	["[23]"],"0$1"],[,"(\\d{2})(\\d{6,7})","$1 $2",["1[35]|[4-6]|8[2468]|9[235-7]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]"],"0$1"],[,"(\\d{2})(\\d{8})","$1 $2",["1"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],EH:[,[,,"[5-8]\\d{8}",,,,,,,[9]],[,,"528[89]\\d{5}",,,,"528812345"],[,,"(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[0167]\\d|2[0-4]|5[01]|8[0-3]))\\d{6}",,,,"650123456"],[,,"80[0-7]\\d{6}",,,,"801234567"],[,,"89\\d{7}",,,,"891234567"],[,,,,,,,,,[-1]],[,,,
	,,,,,,[-1]],[,,"(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}",,,,"592401234"],"EH",212,"00","0",,,"0",,,,,,[,,,,,,,,,[-1]],,"528[89]",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],ER:[,[,,"[178]\\d{6}",,,,,,,[7],[6]],[,,"(?:1(?:1[12568]|[24]0|55|6[146])|8\\d\\d)\\d{4}",,,,"8370362",,,,[6]],[,,"(?:17[1-3]|7\\d\\d)\\d{4}",,,,"7123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"ER",291,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[178]"],"0$1"]],,[,
	,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],ES:[,[,,"[5-9]\\d{8}",,,,,,,[9]],[,,"96906(?:0[0-8]|1[1-9]|[2-9]\\d)\\d\\d|9(?:69(?:0[0-57-9]|[1-9]\\d)|73(?:[0-8]\\d|9[1-9]))\\d{4}|(?:8(?:[1356]\\d|[28][0-8]|[47][1-9])|9(?:[135]\\d|[268][0-8]|4[1-9]|7[124-9]))\\d{6}",,,,"810123456"],[,,"(?:590[16]00\\d|9(?:6906(?:09|10)|7390\\d\\d))\\d\\d|(?:6\\d|7[1-48])\\d{7}",,,,"612345678"],[,,"[89]00\\d{6}",,,,"800123456"],[,,"80[367]\\d{6}",,,,"803123456"],[,,"90[12]\\d{6}",,,,"901123456"],
	[,,"70\\d{7}",,,,"701234567"],[,,,,,,,,,[-1]],"ES",34,"00",,,,,,,,[[,"(\\d{4})","$1",["905"]],[,"(\\d{6})","$1",["[79]9"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[89]00"]],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-9]"]]],[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[89]00"]],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-9]"]]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"51\\d{7}",,,,"511234567"],,,[,,,,,,,,,[-1]]],ET:[,[,,"(?:11|[2-579]\\d)\\d{7}",,,,,,,[9],[7]],[,,"11667[01]\\d{3}|(?:11(?:1(?:1[124]|2[2-7]|3[1-5]|5[5-8]|8[6-8])|2(?:13|3[6-8]|5[89]|7[05-9]|8[2-6])|3(?:2[01]|3[0-289]|4[1289]|7[1-4]|87)|4(?:1[69]|3[2-49]|4[0-3]|6[5-8])|5(?:1[578]|44|5[0-4])|6(?:1[578]|2[69]|39|4[5-7]|5[0-5]|6[0-59]|8[015-8]))|2(?:2(?:11[1-9]|22[0-7]|33\\d|44[1467]|66[1-68])|5(?:11[124-6]|33[2-8]|44[1467]|55[14]|66[1-3679]|77[124-79]|880))|3(?:3(?:11[0-46-8]|(?:22|55)[0-6]|33[0134689]|44[04]|66[01467])|4(?:44[0-8]|55[0-69]|66[0-3]|77[1-5]))|4(?:6(?:119|22[0-24-7]|33[1-5]|44[13-69]|55[14-689]|660|88[1-4])|7(?:(?:11|22)[1-9]|33[13-7]|44[13-6]|55[1-689]))|5(?:7(?:227|55[05]|(?:66|77)[14-8])|8(?:11[149]|22[013-79]|33[0-68]|44[013-8]|550|66[1-5]|77\\d)))\\d{4}",
	,,,"111112345",,,,[7]],[,,"700[1-9]\\d{5}|(?:7(?:0[1-9]|1[0-8]|22|77|86|99)|9\\d\\d)\\d{6}",,,,"911234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"ET",251,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-579]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],FI:[,[,,"[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}",,,,,,,[5,6,7,8,9,10,11,12]],[,,"1[35-7][1-8]\\d{3,6}|(?:1[49][1-8]|[23568][1-8]\\d|9(?:00|[1-8]\\d))\\d{2,6}",
	,,,"131234567",,,[5,6,7,8,9]],[,,"4946\\d{2,6}|(?:4[0-8]|50)\\d{4,8}",,,,"412345678",,,[6,7,8,9,10]],[,,"800\\d{4,6}",,,,"800123456",,,[7,8,9]],[,,"[67]00\\d{5,6}",,,,"600123456",,,[8,9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"FI",358,"00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))","0",,,"0",,"00",,[[,"(\\d{5})","$1",["75[12]"],"0$1"],[,"(\\d{5})","$1",["20[2-59]"],"0$1"],[,"(\\d{6})","$1",["11"]],[,"(\\d{3})(\\d{3,7})","$1 $2",["(?:[1-3]0|[68])0|70[07-9]"],"0$1"],[,"(\\d{2})(\\d{4,8})",
	"$1 $2",["[14]|2[09]|50|7[135]"],"0$1"],[,"(\\d{2})(\\d{6,10})","$1 $2",["7"],"0$1"],[,"(\\d)(\\d{4,9})","$1 $2",["(?:1[49]|[2568])[1-8]|3(?:0[1-9]|[1-9])|9"],"0$1"]],[[,"(\\d{5})","$1",["20[2-59]"],"0$1"],[,"(\\d{3})(\\d{3,7})","$1 $2",["(?:[1-3]0|[68])0|70[07-9]"],"0$1"],[,"(\\d{2})(\\d{4,8})","$1 $2",["[14]|2[09]|50|7[135]"],"0$1"],[,"(\\d{2})(\\d{6,10})","$1 $2",["7"],"0$1"],[,"(\\d)(\\d{4,9})","$1 $2",["(?:1[49]|[2568])[1-8]|3(?:0[1-9]|[1-9])|9"],"0$1"]],[,,,,,,,,,[-1]],1,"1[03-79]|[2-9]",[,
	,"20(?:2[023]|9[89])\\d{1,6}|(?:60[12]\\d|7099)\\d{4,5}|(?:606|7(?:0[78]|1|3\\d))\\d{7}|(?:[1-3]00|7(?:0[1-5]\\d\\d|5[03-9]))\\d{3,7}"],[,,"20\\d{4,8}|60[12]\\d{5,6}|7(?:099\\d{4,5}|5[03-9]\\d{3,7})|20[2-59]\\d\\d|(?:606|7(?:0[78]|1|3\\d))\\d{7}|(?:10|29|3[09]|70[1-5]\\d)\\d{4,8}",,,,"10112345"],,,[,,,,,,,,,[-1]]],FJ:[,[,,"45\\d{5}|(?:0800\\d|[235-9])\\d{6}",,,,,,,[7,11]],[,,"603\\d{4}|(?:3[0-5]|6[25-7]|8[58])\\d{5}",,,,"3212345",,,[7]],[,,"(?:[279]\\d|45|5[01568]|8[034679])\\d{5}",,,,"7012345",,
	,[7]],[,,"0800\\d{7}",,,,"08001234567",,,[11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"FJ",679,"0(?:0|52)",,,,,,"00",,[[,"(\\d{3})(\\d{4})","$1 $2",["[235-9]|45"]],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["0"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],FK:[,[,,"[2-7]\\d{4}",,,,,,,[5]],[,,"[2-47]\\d{4}",,,,"31234"],[,,"[56]\\d{4}",,,,"51234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"FK",500,"00",,,,,,,,,,
	[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],FM:[,[,,"(?:[39]\\d\\d|820)\\d{4}",,,,,,,[7]],[,,"31(?:00[67]|208|309)\\d\\d|(?:3(?:[2357]0[1-9]|602|804|905)|(?:820|9[2-6]\\d)\\d)\\d{3}",,,,"3201234"],[,,"31(?:00[67]|208|309)\\d\\d|(?:3(?:[2357]0[1-9]|602|804|905)|(?:820|9[2-7]\\d)\\d)\\d{3}",,,,"3501234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"FM",691,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[389]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,
	[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],FO:[,[,,"[2-9]\\d{5}",,,,,,,[6]],[,,"(?:20|[34]\\d|8[19])\\d{4}",,,,"201234"],[,,"(?:[27][1-9]|5\\d|9[16])\\d{4}",,,,"211234"],[,,"80[257-9]\\d{3}",,,,"802123"],[,,"90(?:[13-5][15-7]|2[125-7]|9\\d)\\d\\d",,,,"901123"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"(?:6[0-36]|88)\\d{4}",,,,"601234"],"FO",298,"00",,,,"(10(?:01|[12]0|88))",,,,[[,"(\\d{6})","$1",["[2-9]"],,"$CC $1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],FR:[,[,,"[1-9]\\d{8}",
	,,,,,,[9]],[,,"(?:26[013-9]|59[1-35-9])\\d{6}|(?:[13]\\d|2[0-57-9]|4[1-9]|5[0-8])\\d{7}",,,,"123456789"],[,,"(?:6(?:[0-24-8]\\d|3[0-8]|9[589])|7[3-9]\\d)\\d{6}",,,,"612345678"],[,,"80[0-5]\\d{6}",,,,"801234567"],[,,"836(?:0[0-36-9]|[1-9]\\d)\\d{4}|8(?:1[2-9]|2[2-47-9]|3[0-57-9]|[569]\\d|8[0-35-9])\\d{6}",,,,"891123456"],[,,"8(?:1[01]|2[0156]|4[024]|84)\\d{6}",,,,"884012345"],[,,,,,,,,,[-1]],[,,"9\\d{8}",,,,"912345678"],"FR",33,"00","0",,,"0",,,,[[,"(\\d{4})","$1",["10"]],[,"(\\d{3})(\\d{3})","$1 $2",
	["1"]],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0 $1"],[,"(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[1-79]"],"0$1"]],[[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0 $1"],[,"(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[1-79]"],"0$1"]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"80[6-9]\\d{6}",,,,"806123456"],,,[,,,,,,,,,[-1]]],GA:[,[,,"(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}",,,,,,,[7,8]],[,,"[01]1\\d{6}",,,,"01441234",,,[8]],[,,"(?:(?:0[2-7]|7[467])\\d|6(?:0[0-4]|10|[256]\\d))\\d{5}|[2-7]\\d{6}",
	,,,"06031234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"GA",241,"00",,,,"0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})","$1",,,[[,"(\\d)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-7]"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["0"]],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["11|[67]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GB:[,[,,"[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}",,,,,,,[7,9,10],
	[4,5,6,8]],[,,"(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0-35])|4(?:(?:[0-5]\\d|70)\\d|69[7-9])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|50))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-3]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}",
	,,,"1212345678",,,[9,10],[4,5,6,7,8]],[,,"7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}",,,,"7400123456",,,[10]],[,,"80[08]\\d{7}|800\\d{6}|8001111",,,,"8001234567"],[,,"(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d",,,,"9012345678",,,[7,10]],[,,,,,,,,,[-1]],[,,"70\\d{8}",,,,"7012345678",,,[10]],[,,"56\\d{8}",,,,"5612345678",
	,,[10]],"GB",44,"00","0"," x",,"0",,,,[[,"(\\d{3})(\\d{4})","$1 $2",["800","8001","80011","800111","8001111"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["845","8454","84546","845464"],"0$1"],[,"(\\d{3})(\\d{6})","$1 $2",["800"],"0$1"],[,"(\\d{5})(\\d{4,5})","$1 $2",["1(?:38|5[23]|69|76|94)","1(?:(?:38|69)7|5(?:24|39)|768|946)","1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"],"0$1"],[,"(\\d{4})(\\d{5,6})","$1 $2",["1(?:[2-69][02-9]|[78])"],"0$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["[25]|7(?:0|6[02-9])",
	"[25]|7(?:0|6(?:[03-9]|2[356]))"],"0$1"],[,"(\\d{4})(\\d{6})","$1 $2",["7"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[1389]"],"0$1"]],,[,,"76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}",,,,"7640123456",,,[10]],1,,[,,,,,,,,,[-1]],[,,"(?:3[0347]|55)\\d{8}",,,,"5512345678",,,[10]],,,[,,,,,,,,,[-1]]],GD:[,[,,"(?:473|[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"473(?:2(?:3[0-2]|69)|3(?:2[89]|86)|4(?:[06]8|3[5-9]|4[0-4]|5[579]|73|90)|63[68]|7(?:58|84)|800|938)\\d{4}",
	,,,"4732691234",,,,[7]],[,,"473(?:4(?:0[2-79]|1[04-9]|2[0-5]|49|5[68])|5(?:2[01]|3[3-8])|901)\\d{4}",,,,"4734031234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,
	[-1]],"GD",1,"011","1",,,"([2-9]\\d{6})$|1","473$1",,,,,[,,,,,,,,,[-1]],,"473",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GE:[,[,,"(?:[3-57]\\d\\d|800)\\d{6}",,,,,,,[9],[6,7]],[,,"(?:3(?:[256]\\d|4[124-9]|7[0-4])|4(?:1\\d|2[2-7]|3[1-79]|4[2-8]|7[239]|9[1-7]))\\d{6}",,,,"322123456",,,,[6,7]],[,,"5(?:(?:(?:0555|1(?:[17]77|555))[5-9]|757(?:7[7-9]|8[01]))\\d|22252[0-4])\\d\\d|(?:5(?:0(?:0(?:0\\d|11|22|3[0-6]|44|5[05]|77|88|9[09])|111|22[02]|77\\d)|1(?:1(?:[03][01]|[124]\\d)|4\\d\\d)|[23]555|4(?:4\\d\\d|555)|5(?:[0157-9]\\d\\d|200)|6[89]\\d\\d|7(?:[0147-9]\\d\\d|5(?:00|[57]5))|8(?:0(?:[018]\\d|2[0-4])|5(?:55|8[89])|8(?:55|88))|9(?:090|[1-35-9]\\d\\d))|790\\d\\d)\\d{4}|5(?:0(?:0[17]0|505)|1(?:0[01]0|1(?:07|33|51))|2(?:0[02]0|2[25]2)|3(?:0[03]0|3[35]3)|(?:40[04]|900)0|5222)[0-4]\\d{3}",
	,,,"555123456"],[,,"800\\d{6}",,,,"800123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"70[67]\\d{6}",,,,"706123456"],"GE",995,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["70"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["32"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[57]"]],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[348]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,"70[67]\\d{6}"],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GF:[,[,,"[56]94\\d{6}|(?:80|9\\d)\\d{7}",
	,,,,,,[9]],[,,"594(?:[02-49]\\d|1[0-5]|5[6-9]|6[0-3]|80)\\d{4}",,,,"594101234"],[,,"694(?:[0-249]\\d|3[0-8])\\d{4}",,,,"694201234"],[,,"80[0-5]\\d{6}",,,,"800012345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"9(?:(?:396|76\\d)\\d|476[0-5])\\d{4}",,,,"976012345"],"GF",594,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[56]|9[47]"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[89]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,
	,,,,[-1]]],GG:[,[,,"(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?",,,,,,,[7,9,10],[6]],[,,"1481[25-9]\\d{5}",,,,"1481256789",,,[10],[6]],[,,"7(?:(?:781|839)\\d|911[17])\\d{5}",,,,"7781123456",,,[10]],[,,"80[08]\\d{7}|800\\d{6}|8001111",,,,"8001234567"],[,,"(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d",,,,"9012345678",,,[7,10]],[,,,,,,,,,[-1]],[,,"70\\d{8}",,,,"7012345678",,,[10]],[,,"56\\d{8}",,,,"5612345678",,,[10]],"GG",44,"00","0",,,"([25-9]\\d{5})$|0","1481$1",,,,,[,,"76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}",
	,,,"7640123456",,,[10]],,,[,,,,,,,,,[-1]],[,,"(?:3[0347]|55)\\d{8}",,,,"5512345678",,,[10]],,,[,,,,,,,,,[-1]]],GH:[,[,,"(?:[235]\\d{3}|800)\\d{5}",,,,,,,[8,9],[7]],[,,"3082[0-5]\\d{4}|3(?:0(?:[237]\\d|8[01])|[167](?:2[0-6]|7\\d|80)|2(?:2[0-5]|7\\d|80)|3(?:2[0-3]|7\\d|80)|4(?:2[013-9]|3[01]|7\\d|80)|5(?:2[0-7]|7\\d|80)|8(?:2[0-2]|7\\d|80)|9(?:[28]0|7\\d))\\d{5}",,,,"302345678",,,[9],[7]],[,,"(?:2(?:[0346-9]\\d|5[67])|5(?:[03-7]\\d|9[1-9]))\\d{6}",,,,"231234567",,,[9]],[,,"800\\d{5}",,,,"80012345",
	,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"GH",233,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[237]|8[0-2]"]],[,"(\\d{3})(\\d{5})","$1 $2",["8"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[235]"],"0$1"]],[[,"(\\d{3})(\\d{5})","$1 $2",["8"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[235]"],"0$1"]],[,,,,,,,,,[-1]],,,[,,"800\\d{5}",,,,,,,[8]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GI:[,[,,"(?:[25]\\d|60)\\d{6}",,,,,,,[8]],[,,"2190[0-2]\\d{3}|2(?:0(?:[02]\\d|3[01])|16[24-9]|2[2-5]\\d)\\d{4}",
	,,,"20012345"],[,,"5251[0-4]\\d{3}|(?:5(?:[146-8]\\d\\d|250)|60(?:1[01]|6\\d))\\d{4}",,,,"57123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"GI",350,"00",,,,,,,,[[,"(\\d{3})(\\d{5})","$1 $2",["2"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GL:[,[,,"(?:19|[2-689]\\d|70)\\d{4}",,,,,,,[6]],[,,"(?:19|3[1-7]|[68][1-9]|70|9\\d)\\d{4}",,,,"321000"],[,,"[245]\\d{5}",,,,"221234"],[,,"80\\d{4}",,,,"801234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],
	[,,,,,,,,,[-1]],[,,"3[89]\\d{4}",,,,"381234"],"GL",299,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["19|[2-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GM:[,[,,"[2-9]\\d{6}",,,,,,,[7]],[,,"(?:4(?:[23]\\d\\d|4(?:1[024679]|[6-9]\\d))|5(?:5(?:3\\d|4[0-7])|6[67]\\d|7(?:1[04]|2[035]|3[58]|48))|8\\d{3})\\d{3}",,,,"5661234"],[,,"(?:[23679]\\d|5[0-489])\\d{5}",,,,"3012345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"GM",220,"00",
	,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[2-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GN:[,[,,"722\\d{6}|(?:3|6\\d)\\d{7}",,,,,,,[8,9]],[,,"3(?:0(?:24|3[12]|4[1-35-7]|5[13]|6[189]|[78]1|9[1478])|1\\d\\d)\\d{4}",,,,"30241234",,,[8]],[,,"6[0-356]\\d{7}",,,,"601123456",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"722\\d{6}",,,,"722123456",,,[9]],"GN",224,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["3"]],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
	"$1 $2 $3 $4",["[67]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GP:[,[,,"590\\d{6}|(?:69|80|9\\d)\\d{7}",,,,,,,[9]],[,,"590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)\\d{4}",,,,"590201234"],[,,"69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))\\d{4}",,,,"690001234"],[,,"80[0-5]\\d{6}",,,,"800012345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"9(?:(?:39[5-7]|76[018])\\d|475[0-5])\\d{4}",,,,"976012345"],
	"GP",590,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[569]"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0$1"]],,[,,,,,,,,,[-1]],1,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GQ:[,[,,"222\\d{6}|(?:3\\d|55|[89]0)\\d{7}",,,,,,,[9]],[,,"33[0-24-9]\\d[46]\\d{4}|3(?:33|5\\d)\\d[7-9]\\d{4}",,,,"333091234"],[,,"(?:222|55\\d)\\d{6}",,,,"222123456"],[,,"80\\d[1-9]\\d{5}",,,,"800123456"],[,,"90\\d[1-9]\\d{5}",,,,"900123456"],[,,,,,,,,,[-1]],[,,,,,,,,
	,[-1]],[,,,,,,,,,[-1]],"GQ",240,"00",,,,,,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[235]"]],[,"(\\d{3})(\\d{6})","$1 $2",["[89]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GR:[,[,,"5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}",,,,,,,[10,11,12]],[,,"2(?:1\\d\\d|2(?:2[1-46-9]|[36][1-8]|4[1-7]|5[1-4]|7[1-5]|[89][1-9])|3(?:1\\d|2[1-57]|[35][1-3]|4[13]|7[1-7]|8[124-6]|9[1-79])|4(?:1\\d|2[1-8]|3[1-4]|4[13-5]|6[1-578]|9[1-5])|5(?:1\\d|[29][1-4]|3[1-5]|4[124]|5[1-6])|6(?:1\\d|[269][1-6]|3[1245]|4[1-7]|5[13-9]|7[14]|8[1-5])|7(?:1\\d|2[1-5]|3[1-6]|4[1-7]|5[1-57]|6[135]|9[125-7])|8(?:1\\d|2[1-5]|[34][1-4]|9[1-57]))\\d{6}",
	,,,"2123456789",,,[10]],[,,"68[57-9]\\d{7}|(?:69|94)\\d{8}",,,,"6912345678",,,[10]],[,,"800\\d{7,9}",,,,"8001234567"],[,,"90[19]\\d{7}",,,,"9091234567",,,[10]],[,,"8(?:0[16]|12|[27]5|50)\\d{7}",,,,"8011234567",,,[10]],[,,"70\\d{8}",,,,"7012345678",,,[10]],[,,,,,,,,,[-1]],"GR",30,"00",,,,,,,,[[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["21|7"]],[,"(\\d{4})(\\d{6})","$1 $2",["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2689]"]],[,"(\\d{3})(\\d{3,4})(\\d{5})",
	"$1 $2 $3",["8"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"5005000\\d{3}",,,,"5005000123",,,[10]],,,[,,,,,,,,,[-1]]],GT:[,[,,"80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}",,,,,,,[8,11]],[,,"[267][2-9]\\d{6}",,,,"22456789",,,[8]],[,,"(?:[3-5]\\d\\d|80[0-4])\\d{5}",,,,"51234567",,,[8]],[,,"18[01]\\d{8}",,,,"18001112222",,,[11]],[,,"19\\d{9}",,,,"19001112222",,,[11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"GT",502,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2",["[2-8]"]],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",
	["1"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GU:[,[,,"(?:[58]\\d\\d|671|900)\\d{7}",,,,,,,[10],[7]],[,,"671(?:2\\d\\d|3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[02-46-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[0479]7|2[0167]|3[45]|8[7-9])|8(?:[2-57-9]8|6[48])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\\d{4}",,,,"6713001234",,,,[7]],[,,"671(?:2\\d\\d|3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[02-46-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[0479]7|2[0167]|3[45]|8[7-9])|8(?:[2-57-9]8|6[48])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\\d{4}",
	,,,"6713001234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"GU",1,"011","1",,,"([2-9]\\d{6})$|1","671$1",,1,,,[,,,,,,,,,[-1]],,"671",[,,,,,,,,,[-1]],[,,,,
	,,,,,[-1]],,,[,,,,,,,,,[-1]]],GW:[,[,,"[49]\\d{8}|4\\d{6}",,,,,,,[7,9]],[,,"443\\d{6}",,,,"443201234",,,[9]],[,,"9(?:5\\d|6[569]|77)\\d{6}",,,,"955012345",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"40\\d{5}",,,,"4012345",,,[7]],"GW",245,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["40"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[49]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GY:[,[,,"(?:[2-8]\\d{3}|9008)\\d{3}",,,,,,,[7]],[,,"(?:2(?:1[6-9]|2[0-35-9]|3[1-4]|5[3-9]|6\\d|7[0-79])|3(?:2[25-9]|3\\d)|4(?:4[0-24]|5[56])|50[0-6]|77[1-57])\\d{4}",
	,,,"2201234"],[,,"510\\d{4}|(?:6\\d|7[0-5])\\d{5}",,,,"6091234"],[,,"(?:289|8(?:00|6[28]|88|99))\\d{4}",,,,"2891234"],[,,"9008\\d{3}",,,,"9008123"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"515\\d{4}",,,,"5151234"],"GY",592,"001",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[2-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],HK:[,[,,"8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}",,,,,,,[5,6,7,8,9,11]],[,,"(?:2(?:[13-9]\\d|2[013-9])\\d|3(?:(?:[1569][0-24-9]|4[0-246-9]|7[0-24-69])\\d|8(?:4[0-8]|[579]\\d|6[0-2]))|58(?:0[1-9]|1[2-9]))\\d{4}",
	,,,"21234567",,,[8]],[,,"(?:4(?:44[0-25-9]|6(?:1[0-7]|4[0-57-9]|6[0-4]))|5(?:73[0-6]|95[0-8])|6(?:26[013-8]|66[0-3])|70(?:7[1-8]|8[0-4])|848[0-35-9]|9(?:29[013-9]|39[01]|59[0-4]|899))\\d{4}|(?:4(?:4[0-35-9]|6[02357-9]|70)|5(?:[1-59][0-46-9]|6[0-4689]|7[0-246-9])|6(?:0[1-9]|[13-59]\\d|[268][0-57-9]|7[0-79])|70[1-39]|84[0-39]|9(?:0[1-9]|1[02-9]|[2358][0-8]|[467]\\d))\\d{5}",,,,"51234567",,,[8]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"900(?:[0-24-9]\\d{7}|3\\d{1,4})",,,,"90012345678",,,[5,6,7,8,11]],
	[,,,,,,,,,[-1]],[,,"8(?:1[0-4679]\\d|2(?:[0-36]\\d|7[0-4])|3(?:[034]\\d|2[09]|70))\\d{4}",,,,"81123456",,,[8]],[,,,,,,,,,[-1]],"HK",852,"00(?:30|5[09]|[126-9]?)",,,,,,"00",,[[,"(\\d{3})(\\d{2,5})","$1 $2",["900","9003"]],[,"(\\d{4})(\\d{4})","$1 $2",["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"]],[,"(\\d{3})(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]]],,[,,"7(?:1(?:0[0-38]|1[0-3679]|3[013]|69|9[0136])|2(?:[02389]\\d|1[18]|7[27-9])|3(?:[0-38]\\d|7[0-369]|9[2357-9])|47\\d|5(?:[178]\\d|5[0-5])|6(?:0[0-7]|2[236-9]|[35]\\d)|7(?:[27]\\d|8[7-9])|8(?:[23689]\\d|7[1-9])|9(?:[025]\\d|6[0-246-8]|7[0-36-9]|8[238]))\\d{4}",
	,,,"71123456",,,[8]],,,[,,,,,,,,,[-1]],[,,"30(?:0[1-9]|[15-7]\\d|2[047]|89)\\d{4}",,,,"30161234",,,[8]],,,[,,,,,,,,,[-1]]],HN:[,[,,"8\\d{10}|[237-9]\\d{7}",,,,,,,[8,11]],[,,"2(?:2(?:0[0-59]|1[1-9]|[23]\\d|4[02-6]|5[57]|6[245]|7[0135689]|8[01346-9]|9[0-2])|4(?:0[578]|2[3-59]|3[13-9]|4[0-68]|5[1-3589])|5(?:0[2357-9]|1[1-356]|4[03-5]|5\\d|6[014-69]|7[04]|80)|6(?:[056]\\d|17|2[067]|3[047]|4[0-378]|[78][0-8]|9[01])|7(?:0[5-79]|6[46-9]|7[02-9]|8[034]|91)|8(?:79|8[0-357-9]|9[1-57-9]))\\d{4}",,,,"22123456",
	,,[8]],[,,"[37-9]\\d{7}",,,,"91234567",,,[8]],[,,"8002\\d{7}",,,,"80021234567",,,[11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"HN",504,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1-$2",["[237-9]"]],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["8"]]],[[,"(\\d{4})(\\d{4})","$1-$2",["[237-9]"]]],[,,,,,,,,,[-1]],,,[,,"8002\\d{7}",,,,,,,[11]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],HR:[,[,,"(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}",,,,,,,[6,7,8,9]],[,,"1\\d{7}|(?:2[0-3]|3[1-5]|4[02-47-9]|5[1-3])\\d{6,7}",
	,,,"12345678",,,[8,9],[6,7]],[,,"9(?:(?:0[1-9]|[12589]\\d)\\d\\d|7(?:[0679]\\d\\d|5(?:[01]\\d|44|55|77|9[5-7])))\\d{4}|98\\d{6}",,,,"921234567",,,[8,9]],[,,"80\\d{5,7}",,,,"800123456",,,[7,8,9]],[,,"6[01459]\\d{6}|6[01]\\d{4,5}",,,,"611234",,,[6,7,8]],[,,,,,,,,,[-1]],[,,"7[45]\\d{6}",,,,"74123456",,,[8]],[,,,,,,,,,[-1]],"HR",385,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{2})(\\d{2,3})","$1 $2 $3",["6[01]"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["8"],"0$1"],[,"(\\d)(\\d{4})(\\d{3})","$1 $2 $3",
	["1"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["6|7[245]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["9"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-57]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"62\\d{6,7}|72\\d{6}",,,,"62123456",,,[8,9]],,,[,,,,,,,,,[-1]]],HT:[,[,,"(?:[2-489]\\d|55)\\d{6}",,,,,,,[8]],[,,"2(?:2\\d|5[1-5]|81|9[149])\\d{5}",,,,"22453300"],[,,"(?:[34]\\d|55)\\d{6}",,,,"34101234"],[,,"8\\d{7}",,,,
	"80012345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"9(?:[67][0-4]|8[0-3589]|9\\d)\\d{5}",,,,"98901234"],"HT",509,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["[2-589]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],HU:[,[,,"[235-7]\\d{8}|[1-9]\\d{7}",,,,,,,[8,9],[6,7]],[,,"(?:1\\d|[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6[23689]|8[2-57-9]|9[2-69])\\d{6}",,,,"12345678",,,[8],[6,7]],[,,"(?:[257]0|3[01])\\d{7}",,,,"201234567",,,[9]],[,,"(?:[48]0\\d|680[29])\\d{5}",
	,,,"80123456"],[,,"9[01]\\d{6}",,,,"90123456",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"21\\d{7}",,,,"211234567",,,[9]],"HU",36,"00","06",,,"06",,,,[[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"(06 $1)"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"],"(06 $1)"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-9]"],"06 $1"]],,[,,,,,,,,,[-1]],,,[,,"(?:[48]0\\d|680[29])\\d{5}"],[,,"38\\d{7}",,,,"381234567",,,[9]],,,[,,,,,,,,,[-1]]],ID:[,[,,"(?:(?:00[1-9]|8\\d)\\d{4}|[1-36])\\d{6}|00\\d{10}|[1-9]\\d{8,10}|[2-9]\\d{7}",
	,,,,,,[7,8,9,10,11,12,13],[5,6]],[,,"2[124]\\d{7,8}|619\\d{8}|2(?:1(?:14|500)|2\\d{3})\\d{3}|61\\d{5,8}|(?:2(?:[35][1-4]|6[0-8]|7[1-6]|8\\d|9[1-8])|3(?:1|[25][1-8]|3[1-68]|4[1-3]|6[1-3568]|7[0-469]|8\\d)|4(?:0[1-589]|1[01347-9]|2[0-36-8]|3[0-24-68]|43|5[1-378]|6[1-5]|7[134]|8[1245])|5(?:1[1-35-9]|2[25-8]|3[124-9]|4[1-3589]|5[1-46]|6[1-8])|6(?:[25]\\d|3[1-69]|4[1-6])|7(?:02|[125][1-9]|[36]\\d|4[1-8]|7[0-36-9])|9(?:0[12]|1[013-8]|2[0-479]|5[125-8]|6[23679]|7[159]|8[01346]))\\d{5,8}",,,,"218350123",
	,,[7,8,9,10,11],[5,6]],[,,"8[1-35-9]\\d{7,10}",,,,"812345678",,,[9,10,11,12]],[,,"00[17]803\\d{7}|(?:177\\d|800)\\d{5,7}|001803\\d{6}",,,,"8001234567",,,[8,9,10,11,12,13]],[,,"809\\d{7}",,,,"8091234567",,,[10]],[,,"804\\d{7}",,,,"8041234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"ID",62,"00[89]","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["15"]],[,"(\\d{2})(\\d{5,9})","$1 $2",["2[124]|[36]1"],"(0$1)"],[,"(\\d{3})(\\d{5,7})","$1 $2",["800"],"0$1"],[,"(\\d{3})(\\d{5,8})","$1 $2",["[2-79]"],
	"(0$1)"],[,"(\\d{3})(\\d{3,4})(\\d{3})","$1-$2-$3",["8[1-35-9]"],"0$1"],[,"(\\d{3})(\\d{6,8})","$1 $2",["1"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["804"],"0$1"],[,"(\\d{3})(\\d)(\\d{3})(\\d{3})","$1 $2 $3 $4",["80"],"0$1"],[,"(\\d{3})(\\d{4})(\\d{4,5})","$1-$2-$3",["8"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["001"]],[,"(\\d{2})(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3 $4",["0"]]],[[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["15"]],[,"(\\d{2})(\\d{5,9})","$1 $2",["2[124]|[36]1"],
	"(0$1)"],[,"(\\d{3})(\\d{5,7})","$1 $2",["800"],"0$1"],[,"(\\d{3})(\\d{5,8})","$1 $2",["[2-79]"],"(0$1)"],[,"(\\d{3})(\\d{3,4})(\\d{3})","$1-$2-$3",["8[1-35-9]"],"0$1"],[,"(\\d{3})(\\d{6,8})","$1 $2",["1"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["804"],"0$1"],[,"(\\d{3})(\\d)(\\d{3})(\\d{3})","$1 $2 $3 $4",["80"],"0$1"],[,"(\\d{3})(\\d{4})(\\d{4,5})","$1-$2-$3",["8"],"0$1"]],[,,,,,,,,,[-1]],,,[,,"001803\\d{6,7}|(?:007803\\d|8071)\\d{6}",,,,,,,[10,12,13]],[,,"(?:1500|8071\\d{3})\\d{3}",,,,
	"8071123456",,,[7,10]],,,[,,,,,,,,,[-1]]],IE:[,[,,"(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}",,,,,,,[7,8,9,10],[5,6]],[,,"(?:1\\d|21)\\d{6,7}|(?:2[24-9]|4(?:0[24]|5\\d|7)|5(?:0[45]|1\\d|8)|6(?:1\\d|[237-9])|9(?:1\\d|[35-9]))\\d{5}|(?:23|4(?:[1-469]|8\\d)|5[23679]|6[4-6]|7[14]|9[04])\\d{7}",,,,"2212345",,,,[5,6]],[,,"8(?:22|[35-9]\\d)\\d{6}",,,,"850123456",,,[9]],[,,"1800\\d{6}",,,,"1800123456",,,[10]],[,,"15(?:1[2-8]|[2-8]0|9[089])\\d{6}",,,,"1520123456",,,[10]],[,,"18[59]0\\d{6}",,,,"1850123456",
	,,[10]],[,,"700\\d{6}",,,,"700123456",,,[9]],[,,"76\\d{7}",,,,"761234567",,,[9]],"IE",353,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{5})","$1 $2",["2[24-9]|47|58|6[237-9]|9[35-9]"],"(0$1)"],[,"(\\d{3})(\\d{5})","$1 $2",["[45]0"],"(0$1)"],[,"(\\d)(\\d{3,4})(\\d{4})","$1 $2 $3",["1"],"(0$1)"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2569]|4[1-69]|7[14]"],"(0$1)"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["70"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["81"],"(0$1)"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",
	["[78]"],"0$1"],[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["4"],"(0$1)"],[,"(\\d{2})(\\d)(\\d{3})(\\d{4})","$1 $2 $3 $4",["8"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,"18[59]0\\d{6}",,,,,,,[10]],[,,"818\\d{6}",,,,"818123456",,,[9]],,,[,,"88210[1-9]\\d{4}|8(?:[35-79]5\\d\\d|8(?:[013-9]\\d\\d|2(?:[01][1-9]|[2-9]\\d)))\\d{5}",,,,"8551234567",,,[10]]],IL:[,[,,"1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}",,,,,,,[7,8,9,10,11,12]],[,,"153\\d{8,9}|29[1-9]\\d{5}|(?:2[0-8]|[3489]\\d)\\d{6}",
	,,,"21234567",,,[8,11,12],[7]],[,,"55(?:410|57[0-289])\\d{4}|5(?:(?:[02][02-9]|[149][2-9]|[36]\\d|8[3-7])\\d|5(?:01|2\\d|3[0-3]|4[34]|5[0-25689]|6[6-8]|7[0-267]|8[7-9]|9[1-9]))\\d{5}",,,,"502345678",,,[9]],[,,"1(?:255|80[019]\\d{3})\\d{3}",,,,"1800123456",,,[7,10]],[,,"1212\\d{4}|1(?:200|9(?:0[0-2]|19))\\d{6}",,,,"1919123456",,,[8,10]],[,,"1700\\d{6}",,,,"1700123456",,,[10]],[,,,,,,,,,[-1]],[,,"7(?:38(?:0\\d|5[0-2569]|88)|8(?:33|55|77|81)\\d)\\d{4}|7(?:18|2[23]|3[237]|47|6[258]|7\\d|82|9[2-9])\\d{6}",
	,,,"771234567",,,[9]],"IL",972,"0(?:0|1[2-9])","0",,,"0",,,,[[,"(\\d{4})(\\d{3})","$1-$2",["125"]],[,"(\\d{4})(\\d{2})(\\d{2})","$1-$2-$3",["121"]],[,"(\\d)(\\d{3})(\\d{4})","$1-$2-$3",["[2-489]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["[57]"],"0$1"],[,"(\\d{4})(\\d{3})(\\d{3})","$1-$2-$3",["12"]],[,"(\\d{4})(\\d{6})","$1-$2",["159"]],[,"(\\d)(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3-$4",["1[7-9]"]],[,"(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})","$1-$2 $3-$4",["15"]]],,[,,,,,,,,,[-1]],,,[,,"1700\\d{6}",
	,,,,,,[10]],[,,"1599\\d{6}",,,,"1599123456",,,[10]],,,[,,"151\\d{8,9}",,,,"15112340000",,,[11,12]]],IM:[,[,,"1624\\d{6}|(?:[3578]\\d|90)\\d{8}",,,,,,,[10],[6]],[,,"1624(?:230|[5-8]\\d\\d)\\d{3}",,,,"1624756789",,,,[6]],[,,"76245[06]\\d{4}|7(?:4576|[59]24\\d|624[0-4689])\\d{5}",,,,"7924123456"],[,,"808162\\d{4}",,,,"8081624567"],[,,"8(?:440[49]06|72299\\d)\\d{3}|(?:8(?:45|70)|90[0167])624\\d{4}",,,,"9016247890"],[,,,,,,,,,[-1]],[,,"70\\d{8}",,,,"7012345678"],[,,"56\\d{8}",,,,"5612345678"],"IM",44,
	"00","0",,,"([25-8]\\d{5})$|0","1624$1",,,,,[,,,,,,,,,[-1]],,"74576|(?:16|7[56])24",[,,,,,,,,,[-1]],[,,"3440[49]06\\d{3}|(?:3(?:08162|3\\d{4}|45624|7(?:0624|2299))|55\\d{4})\\d{4}",,,,"5512345678"],,,[,,,,,,,,,[-1]]],IN:[,[,,"(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}",,,,,,,[8,9,10,11,12,13],[6,7]],[,,"2717(?:[2-7]\\d|95)\\d{4}|(?:271[0-689]|782[0-6])[2-7]\\d{5}|(?:170[24]|2(?:(?:[02][2-79]|90)\\d|80[13468])|(?:3(?:23|80)|683|79[1-7])\\d|4(?:20[24]|72[2-8])|552[1-7])\\d{6}|(?:11|33|4[04]|80)[2-7]\\d{7}|(?:342|674|788)(?:[0189][2-7]|[2-7]\\d)\\d{5}|(?:1(?:2[0-249]|3[0-25]|4[145]|[59][14]|6[014]|7[1257]|8[01346])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[13]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[014-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|[67]1)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91))[2-7]\\d{6}|(?:1(?:2[35-8]|3[346-9]|4[236-9]|[59][0235-9]|6[235-9]|7[34689]|8[257-9])|2(?:1[134689]|3[24-8]|4[2-8]|5[25689]|6[2-4679]|7[3-79]|8[2-479]|9[235-9])|3(?:01|1[79]|2[1245]|4[5-8]|5[125689]|6[235-7]|7[157-9]|8[2-46-8])|4(?:1[14578]|2[5689]|3[2-467]|5[4-7]|6[35]|73|8[2689]|9[2389])|5(?:[16][146-9]|2[14-8]|3[1346]|4[14-69]|5[46]|7[2-4]|8[2-8]|9[246])|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])|7(?:1[013-9]|2[0235-9]|3[2679]|4[1-35689]|5[2-46-9]|[67][02-9]|8[013-7]|9[089])|8(?:1[1357-9]|2[235-8]|3[03-57-9]|4[0-24-9]|5\\d|6[2457-9]|7[1-6]|8[1256]|9[2-4]))\\d[2-7]\\d{5}",
	,,,"7410410123",,,[10],[6,7,8]],[,,"(?:61279|7(?:887[02-9]|9(?:313|79[07-9]))|8(?:079[04-9]|(?:84|91)7[02-8]))\\d{5}|(?:6(?:12|[2-47]1|5[17]|6[13]|80)[0189]|7(?:1(?:2[0189]|9[0-5])|2(?:[14][017-9]|8[0-59])|3(?:2[5-8]|[34][017-9]|9[016-9])|4(?:1[015-9]|[29][89]|39|8[389])|5(?:[15][017-9]|2[04-9]|9[7-9])|6(?:0[0-47]|1[0-257-9]|2[0-4]|3[19]|5[4589])|70[0289]|88[089]|97[02-8])|8(?:0(?:6[67]|7[02-8])|70[017-9]|84[01489]|91[0-289]))\\d{6}|(?:7(?:31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[0189]\\d|7[02-8])\\d{5}|(?:6(?:[09]\\d|1[04679]|2[03689]|3[05-9]|4[0489]|50|6[069]|7[07]|8[7-9])|7(?:0\\d|2[0235-79]|3[05-8]|40|5[0346-8]|6[6-9]|7[1-9]|8[0-79]|9[089])|8(?:0[01589]|1[0-57-9]|2[235-9]|3[03-57-9]|[45]\\d|6[02457-9]|7[1-69]|8[0-25-9]|9[02-9])|9\\d\\d)\\d{7}|(?:6(?:(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|8[124-6])\\d|7(?:[235689]\\d|4[0189]))|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-5])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]|881))[0189]\\d{5}",
	,,,"8123456789",,,[10]],[,,"000800\\d{7}|1(?:600\\d{6}|80(?:0\\d{4,9}|3\\d{9}))",,,,"1800123456"],[,,"186[12]\\d{9}",,,,"1861123456789",,,[13]],[,,"1860\\d{7}",,,,"18603451234",,,[11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"IN",91,"00","0",,,"0",,,,[[,"(\\d{7})","$1",["575"]],[,"(\\d{8})","$1",["5(?:0|2[23]|3[03]|[67]1|88)","5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)","5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"],,,1],[,"(\\d{4})(\\d{4,5})","$1 $2",["180","1800"],,,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",
	["140"],,,1],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["11|2[02]|33|4[04]|79[1-7]|80[2-46]","11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])","11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]",
	"1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]","1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"],
	"0$1",,1],[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807","1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]",
	"1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"],"0$1",,1],[,"(\\d{5})(\\d{5})","$1 $2",["[6-9]"],"0$1",,1],[,"(\\d{4})(\\d{2,4})(\\d{4})","$1 $2 $3",["1(?:6|8[06])","1(?:6|8[06]0)"],,,1],[,"(\\d{3})(\\d{3})(\\d{3})(\\d{4})",
	"$1 $2 $3 $4",["0"]],[,"(\\d{4})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["18"],,,1]],[[,"(\\d{8})","$1",["5(?:0|2[23]|3[03]|[67]1|88)","5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)","5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"],,,1],[,"(\\d{4})(\\d{4,5})","$1 $2",["180","1800"],,,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["140"],,,1],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["11|2[02]|33|4[04]|79[1-7]|80[2-46]","11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])","11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"],
	"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]","1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]",
	"1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"],
	"0$1",,1],[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807","1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]",
	"1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"],"0$1",,1],[,"(\\d{5})(\\d{5})","$1 $2",["[6-9]"],"0$1",,1],[,"(\\d{4})(\\d{2,4})(\\d{4})","$1 $2 $3",["1(?:6|8[06])","1(?:6|8[06]0)"],,,1],[,"(\\d{4})(\\d{3})(\\d{3})(\\d{3})",
	"$1 $2 $3 $4",["18"],,,1]],[,,,,,,,,,[-1]],,,[,,"1(?:600\\d{6}|800\\d{4,9})|(?:000800|18(?:03\\d\\d|6(?:0|[12]\\d\\d)))\\d{7}"],[,,"140\\d{7}",,,,"1409305260",,,[10]],,,[,,,,,,,,,[-1]]],IO:[,[,,"3\\d{6}",,,,,,,[7]],[,,"37\\d{5}",,,,"3709100"],[,,"38\\d{5}",,,,"3801234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"IO",246,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["3"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],IQ:[,[,,"(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}",
	,,,,,,[8,9,10],[6,7]],[,,"1\\d{7}|(?:2[13-5]|3[02367]|4[023]|5[03]|6[026])\\d{6,7}",,,,"12345678",,,[8,9],[6,7]],[,,"7[3-9]\\d{8}",,,,"7912345678",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"IQ",964,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-6]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],IR:[,
	[,,"[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}",,,,,,,[4,5,6,7,10],[8]],[,,"(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])(?:[03-57]\\d{7}|[16]\\d{3}(?:\\d{4})?|[289]\\d{3}(?:\\d(?:\\d{3})?)?)|94(?:000[09]|(?:12\\d|30[0-2])\\d|2(?:121|[2689]0\\d)|4(?:111|40\\d))\\d{4}",,,,"2123456789",,,[6,7,10],[4,5,8]],[,,"9(?:(?:0(?:[0-35]\\d|4[4-6])|(?:[13]\\d|2[0-3])\\d)\\d|9(?:[0-46]\\d\\d|5[15]0|8(?:[12]\\d|88)|9(?:0[0-3]|[19]\\d|21|69|77|8[7-9])))\\d{5}",,,,"9123456789",,,[10]],[,,,,,,,,,[-1]],
	[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"IR",98,"00","0",,,"0",,,,[[,"(\\d{4,5})","$1",["96"],"0$1"],[,"(\\d{2})(\\d{4,5})","$1 $2",["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["9"],"0$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["[1-8]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,"9(?:4440\\d{5}|6(?:0[12]|2[16-8]|3(?:08|[14]5|[23]|66)|4(?:0|80)|5[01]|6[89]|86|9[19]))",,,,,,,[4,5,10]],[,,"96(?:0[12]|2[16-8]|3(?:08|[14]5|[23]|66)|4(?:0|80)|5[01]|6[89]|86|9[19])",
	,,,"9601",,,[4,5]],,,[,,,,,,,,,[-1]]],IS:[,[,,"(?:38\\d|[4-9])\\d{6}",,,,,,,[7,9]],[,,"(?:4(?:1[0-24-69]|2[0-7]|[37][0-8]|4[0-24589]|5[0-68]|6\\d|8[0-36-8])|5(?:05|[156]\\d|2[02578]|3[0-579]|4[03-7]|7[0-2578]|8[0-35-9]|9[013-689])|872)\\d{4}",,,,"4101234",,,[7]],[,,"(?:38[589]\\d\\d|6(?:1[1-8]|2[0-6]|3[026-9]|4[014679]|5[0159]|6[0-69]|70|8[06-8]|9\\d)|7(?:5[057]|[6-9]\\d)|8(?:2[0-59]|[3-69]\\d|8[238]))\\d{4}",,,,"6111234"],[,,"80[0-8]\\d{4}",,,,"8001234",,,[7]],[,,"90(?:0\\d|1[5-79]|2[015-79]|3[135-79]|4[125-7]|5[25-79]|7[1-37]|8[0-35-7])\\d{3}",
	,,,"9001234",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"49[0-24-79]\\d{4}",,,,"4921234",,,[7]],"IS",354,"00|1(?:0(?:01|[12]0)|100)",,,,,,"00",,[[,"(\\d{3})(\\d{4})","$1 $2",["[4-9]"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["3"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"809\\d{4}",,,,"8091234",,,[7]],,,[,,"(?:689|8(?:7[18]|80)|95[48])\\d{4}",,,,"6891234",,,[7]]],IT:[,[,,"0\\d{5,10}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:43|55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?",,,,,,,[6,7,8,9,10,11,12]],[,,"0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}",
	,,,"0212345678",,,[6,7,8,9,10,11]],[,,"3[2-9]\\d{7,8}|(?:31|43)\\d{8}",,,,"3123456789",,,[9,10]],[,,"80(?:0\\d{3}|3)\\d{3}",,,,"800123456",,,[6,9]],[,,"(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}",,,,"899123456",,,[6,8,9,10]],[,,"84(?:[08]\\d{3}|[17])\\d{3}",,,,"848123456",,,[6,9]],[,,"1(?:78\\d|99)\\d{6}",,,,"1781234567",,,[9,10]],[,,"55\\d{8}",,,,"5512345678",,,[10]],"IT",39,"00",,,,,,,,[[,"(\\d{4,5})","$1",["1(?:0|9[246])","1(?:0|9(?:2[2-9]|[46]))"]],
	[,"(\\d{6})","$1",["1(?:1|92)"]],[,"(\\d{2})(\\d{4,6})","$1 $2",["0[26]"]],[,"(\\d{3})(\\d{3,6})","$1 $2",["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])","0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]],[,"(\\d{4})(\\d{2,6})","$1 $2",["0(?:[13-579][2-46-8]|8[236-8])"]],[,"(\\d{4})(\\d{4})","$1 $2",["894"]],[,"(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[26]|5"]],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["1(?:44|[679])|[378]|43"]],[,"(\\d{3})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[13-57-9][0159]|14"]],
	[,"(\\d{2})(\\d{4})(\\d{5})","$1 $2 $3",["0[26]"]],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["0"]],[,"(\\d{3})(\\d{4})(\\d{4,5})","$1 $2 $3",["3"]]],[[,"(\\d{2})(\\d{4,6})","$1 $2",["0[26]"]],[,"(\\d{3})(\\d{3,6})","$1 $2",["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])","0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]],[,"(\\d{4})(\\d{2,6})","$1 $2",["0(?:[13-579][2-46-8]|8[236-8])"]],[,"(\\d{4})(\\d{4})","$1 $2",["894"]],[,"(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[26]|5"]],[,"(\\d{3})(\\d{3})(\\d{3,4})",
	"$1 $2 $3",["1(?:44|[679])|[378]|43"]],[,"(\\d{3})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[13-57-9][0159]|14"]],[,"(\\d{2})(\\d{4})(\\d{5})","$1 $2 $3",["0[26]"]],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["0"]],[,"(\\d{3})(\\d{4})(\\d{4,5})","$1 $2 $3",["3"]]],[,,,,,,,,,[-1]],1,,[,,"848\\d{6}",,,,,,,[9]],[,,,,,,,,,[-1]],,,[,,"3[2-8]\\d{9,10}",,,,"33101234501",,,[11,12]]],JE:[,[,,"1534\\d{6}|(?:[3578]\\d|90)\\d{8}",,,,,,,[10],[6]],[,,"1534[0-24-8]\\d{5}",,,,"1534456789",,,,[6]],[,,"7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97\\d))\\d{5}",
	,,,"7797712345"],[,,"80(?:07(?:35|81)|8901)\\d{4}",,,,"8007354567"],[,,"(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}",,,,"9018105678"],[,,,,,,,,,[-1]],[,,"701511\\d{4}",,,,"7015115678"],[,,"56\\d{8}",,,,"5612345678"],"JE",44,"00","0",,,"([0-24-8]\\d{5})$|0","1534$1",,,,,[,,"76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}",,,,"7640123456"],,,[,,,,,,,,,[-1]],[,,"(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}",
	,,,"5512345678"],,,[,,,,,,,,,[-1]]],JM:[,[,,"(?:[58]\\d\\d|658|900)\\d{7}",,,,,,,[10],[7]],[,,"8766060\\d{3}|(?:658(?:2(?:[0-8]\\d|9[0-46-9])|[3-9]\\d\\d)|876(?:52[35]|6(?:0[1-3579]|1[0235-9]|[23]\\d|40|5[06]|6[2-589]|7[0-25-9]|8[04]|9[4-9])|7(?:0[2-689]|[1-6]\\d|8[056]|9[45])|9(?:0[1-8]|1[02378]|[2-8]\\d|9[2-468])))\\d{4}",,,,"8765230123",,,,[7]],[,,"(?:658295|876(?:2(?:0[1-9]|[13-9]\\d|2[013-9])|[348]\\d\\d|5(?:0[1-9]|[1-9]\\d)|6(?:4[89]|6[67])|7(?:0[07]|7\\d|8[1-47-9]|9[0-36-9])|9(?:[01]9|9[0579])))\\d{4}",
	,,,"8762101234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"JM",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"658|876",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,
	,,,,[-1]]],JO:[,[,,"(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}",,,,,,,[8,9]],[,,"87(?:000|90[01])\\d{3}|(?:2(?:6(?:2[0-35-9]|3[0-578]|4[24-7]|5[0-24-8]|[6-8][023]|9[0-3])|7(?:0[1-79]|10|2[014-7]|3[0-689]|4[019]|5[0-3578]))|32(?:0[1-69]|1[1-35-7]|2[024-7]|3\\d|4[0-3]|[5-7][023])|53(?:0[0-3]|[13][023]|2[0-59]|49|5[0-35-9]|6[15]|7[45]|8[1-6]|9[0-36-9])|6(?:2(?:[05]0|22)|3(?:00|33)|4(?:0[0-25]|1[2-7]|2[0569]|[38][07-9]|4[025689]|6[0-589]|7\\d|9[0-2])|5(?:[01][056]|2[034]|3[0-57-9]|4[178]|5[0-69]|6[0-35-9]|7[1-379]|8[0-68]|9[0239]))|87(?:20|7[078]|99))\\d{4}",
	,,,"62001234",,,[8]],[,,"7(?:[78][0-25-9]|9\\d)\\d{6}",,,,"790123456",,,[9]],[,,"80\\d{6}",,,,"80012345",,,[8]],[,,"9\\d{7}",,,,"90012345",,,[8]],[,,"85\\d{6}",,,,"85012345",,,[8]],[,,"70\\d{7}",,,,"700123456",,,[9]],[,,,,,,,,,[-1]],"JO",962,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2356]|87"],"(0$1)"],[,"(\\d{3})(\\d{5,6})","$1 $2",["[89]"],"0$1"],[,"(\\d{2})(\\d{7})","$1 $2",["70"],"0$1"],[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["7"],"0$1"]],,[,,"74(?:66|77)\\d{5}",,,,"746612345",
	,,[9]],,,[,,,,,,,,,[-1]],[,,"8(?:10|8\\d)\\d{5}",,,,"88101234",,,[8]],,,[,,,,,,,,,[-1]]],JP:[,[,,"00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}",,,,,,,[8,9,10,11,12,13,14,15,16,17]],[,,"(?:1(?:1[235-8]|2[3-6]|3[3-9]|4[2-6]|[58][2-8]|6[2-7]|7[2-9]|9[1-9])|(?:2[2-9]|[36][1-9])\\d|4(?:[2-578]\\d|6[02-8]|9[2-59])|5(?:[2-589]\\d|6[1-9]|7[2-8])|7(?:[25-9]\\d|3[4-9]|4[02-9])|8(?:[2679]\\d|3[2-9]|4[5-9]|5[1-9]|8[03-9])|9(?:[2-58]\\d|[679][1-9]))\\d{6}",,,,"312345678",,,[9]],[,,"[7-9]0[1-9]\\d{7}",
	,,,"9012345678",,,[10]],[,,"00777(?:[01]|5\\d)\\d\\d|(?:00(?:7778|882[1245])|(?:120|800\\d)\\d\\d)\\d{4}|00(?:37|66|78)\\d{6,13}",,,,"120123456"],[,,"990\\d{6}",,,,"990123456",,,[9]],[,,,,,,,,,[-1]],[,,"60\\d{7}",,,,"601234567",,,[9]],[,,"50[1-9]\\d{7}",,,,"5012345678",,,[10]],"JP",81,"010","0",,,"(000[259]\\d{6})$|(?:(?:003768)0?)|0","$1",,,[[,"(\\d{4})(\\d{4})","$1-$2",["007","0077","00777","00777[01]"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3",["(?:12|57|99)0"],"0$1"],[,"(\\d{4})(\\d)(\\d{4})",
	"$1-$2-$3",["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])","1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]","1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["60"],
	"0$1"],[,"(\\d)(\\d{4})(\\d{4})","$1-$2-$3",["[36]|4(?:2[09]|7[01])","[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])",
	"1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]",
	"1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"],
	"0$1"],[,"(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["[14]|[289][2-9]|5[3-9]|7[2-4679]"],"0$1"],[,"(\\d{4})(\\d{2})(\\d{3,4})","$1-$2-$3",["007","0077"]],[,"(\\d{4})(\\d{2})(\\d{4})","$1-$2-$3",["008"]],[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["800"],"0$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[257-9]"],"0$1"],[,"(\\d{4})(\\d{3})(\\d{3,4})","$1-$2-$3",["0"]],[,"(\\d{4})(\\d{4})(\\d{4,5})","$1-$2-$3",["0"]],[,"(\\d{4})(\\d{5})(\\d{5,6})","$1-$2-$3",["0"]],[,"(\\d{4})(\\d{6})(\\d{6,7})","$1-$2-$3",
	["0"]]],[[,"(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3",["(?:12|57|99)0"],"0$1"],[,"(\\d{4})(\\d)(\\d{4})","$1-$2-$3",["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])","1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]","1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"],
	"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["60"],"0$1"],[,"(\\d)(\\d{4})(\\d{4})","$1-$2-$3",["[36]|4(?:2[09]|7[01])","[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])",
	"1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]",
	"1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"],
	"0$1"],[,"(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["[14]|[289][2-9]|5[3-9]|7[2-4679]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["800"],"0$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[257-9]"],"0$1"]],[,,"20\\d{8}",,,,"2012345678",,,[10]],,,[,,"00(?:777(?:[01]|(?:5|8\\d)\\d)|882[1245]\\d\\d)\\d\\d|00(?:37|66|78)\\d{6,13}"],[,,"570\\d{6}",,,,"570123456",,,[9]],,,[,,,,,,,,,[-1]]],KE:[,[,,"(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}",,,,,,,[7,8,9,10]],[,,"(?:4[245]|5[1-79]|6[01457-9])\\d{5,7}|(?:4[136]|5[08]|62)\\d{7}|(?:[24]0|66)\\d{6,7}",
	,,,"202012345",,,[7,8,9]],[,,"(?:1(?:0[0-8]|1[0-7]|2[014]|30)|7\\d\\d)\\d{6}",,,,"712123456",,,[9]],[,,"800[02-8]\\d{5,6}",,,,"800223456",,,[9,10]],[,,"900[02-9]\\d{5}",,,,"900223456",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"KE",254,"000","0",,,"0",,,,[[,"(\\d{2})(\\d{5,7})","$1 $2",["[24-6]"],"0$1"],[,"(\\d{3})(\\d{6})","$1 $2",["[17]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[89]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KG:[,[,,"8\\d{9}|[235-9]\\d{8}",
	,,,,,,[9,10],[5,6]],[,,"312(?:5[0-79]\\d|9(?:[0-689]\\d|7[0-24-9]))\\d{3}|(?:3(?:1(?:2[0-46-8]|3[1-9]|47|[56]\\d)|2(?:22|3[0-479]|6[0-7])|4(?:22|5[6-9]|6\\d)|5(?:22|3[4-7]|59|6\\d)|6(?:22|5[35-7]|6\\d)|7(?:22|3[468]|4[1-9]|59|[67]\\d)|9(?:22|4[1-8]|6\\d))|6(?:09|12|2[2-4])\\d)\\d{5}",,,,"312123456",,,[9],[5,6]],[,,"312(?:58\\d|973)\\d{3}|(?:2(?:0[0-35]|2\\d)|5[0-24-7]\\d|600|7(?:[07]\\d|55)|88[08]|9(?:12|9[05-9]))\\d{6}",,,,"700123456",,,[9]],[,,"800\\d{6,7}",,,,"800123456"],[,,,,,,,,,[-1]],[,,,,
	,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"KG",996,"00","0",,,"0",,,,[[,"(\\d{4})(\\d{5})","$1 $2",["3(?:1[346]|[24-79])"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[235-79]|88"],"0$1"],[,"(\\d{3})(\\d{3})(\\d)(\\d{2,3})","$1 $2 $3 $4",["8"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KH:[,[,,"1\\d{9}|[1-9]\\d{7,8}",,,,,,,[8,9,10],[6,7]],[,,"23(?:4(?:[2-4]|[56]\\d)|[568]\\d\\d)\\d{4}|23[236-9]\\d{5}|(?:2[4-6]|3[2-6]|4[2-4]|[5-7][2-5])(?:(?:[237-9]|4[56]|5\\d)\\d{5}|6\\d{5,6})",
	,,,"23756789",,,[8,9],[6,7]],[,,"(?:(?:1[28]|3[18]|9[67])\\d|6[016-9]|7(?:[07-9]|[16]\\d)|8(?:[013-79]|8\\d))\\d{6}|(?:1\\d|9[0-57-9])\\d{6}|(?:2[3-6]|3[2-6]|4[2-4]|[5-7][2-5])48\\d{5}",,,,"91234567",,,[8,9]],[,,"1800(?:1\\d|2[019])\\d{4}",,,,"1800123456",,,[10]],[,,"1900(?:1\\d|2[09])\\d{4}",,,,"1900123456",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"KH",855,"00[14-9]","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-9]"],"0$1"],[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],
	,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KI:[,[,,"(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}",,,,,,,[5,8]],[,,"(?:[24]\\d|3[1-9]|50|65(?:02[12]|12[56]|22[89]|[3-5]00)|7(?:27\\d\\d|3100|5(?:02[12]|12[56]|22[89]|[34](?:00|81)|500))|8[0-5])\\d{3}",,,,"31234"],[,,"(?:6200[01]|7(?:310[1-9]|5(?:02[03-9]|12[0-47-9]|22[0-7]|[34](?:0[1-9]|8[02-9])|50[1-9])))\\d{3}|(?:63\\d\\d|7(?:(?:[0146-9]\\d|2[0-689])\\d|3(?:[02-9]\\d|1[1-9])|5(?:[0-2][013-9]|[34][1-79]|5[1-9]|[6-9]\\d)))\\d{4}",
	,,,"72001234",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"30(?:0[01]\\d\\d|12(?:11|20))\\d\\d",,,,"30010000",,,[8]],"KI",686,"00","0",,,"0",,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KM:[,[,,"[3478]\\d{6}",,,,,,,[7],[4]],[,,"7[4-7]\\d{5}",,,,"7712345",,,,[4]],[,,"[34]\\d{6}",,,,"3212345"],[,,,,,,,,,[-1]],[,,"8\\d{6}",,,,"8001234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"KM",269,"00",,,,,,,,[[,"(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",
	["[3478]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KN:[,[,,"(?:[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"869(?:2(?:29|36)|302|4(?:6[015-9]|70)|56[5-7])\\d{4}",,,,"8692361234",,,,[7]],[,,"869(?:48[89]|55[6-8]|66\\d|76[02-7])\\d{4}",,,,"8697652917",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}",
	,,,"5002345678"],[,,,,,,,,,[-1]],"KN",1,"011","1",,,"([2-7]\\d{6})$|1","869$1",,,,,[,,,,,,,,,[-1]],,"869",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KP:[,[,,"85\\d{6}|(?:19\\d|[2-7])\\d{7}",,,,,,,[8,10],[6,7]],[,,"(?:(?:195|2)\\d|3[19]|4[159]|5[37]|6[17]|7[39]|85)\\d{6}",,,,"21234567",,,,[6,7]],[,,"19[1-3]\\d{7}",,,,"1921234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"KP",850,"00|99","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["8"],
	"0$1"],[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2-7]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,"238[02-9]\\d{4}|2(?:[0-24-9]\\d|3[0-79])\\d{5}",,,,,,,[8]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KR:[,[,,"00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}",,,,,,,[5,6,8,9,10,11,12,13,14],[3,4,7]],[,,"(?:2|3[1-3]|[46][1-4]|5[1-5])[1-9]\\d{6,7}|(?:3[1-3]|[46][1-4]|5[1-5])1\\d{2,3}",,,,"22123456",,,[5,6,8,9,10],
	[3,4,7]],[,,"1(?:05(?:[0-8]\\d|9[0-6])|22[13]\\d)\\d{4,5}|1(?:0[0-46-9]|[16-9]\\d|2[013-9])\\d{6,7}",,,,"1020000000",,,[9,10]],[,,"00(?:308\\d{6,7}|798\\d{7,9})|(?:00368|[38]0)\\d{7}",,,,"801234567",,,[9,11,12,13,14]],[,,"60[2-9]\\d{6}",,,,"602345678",,,[9]],[,,,,,,,,,[-1]],[,,"50\\d{8,9}",,,,"5012345678",,,[10,11]],[,,"70\\d{8}",,,,"7012345678",,,[10]],"KR",82,"00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))","0",,,"0(8(?:[1-46-8]|5\\d\\d))?",,,,[[,"(\\d{5})","$1",["1[016-9]1","1[016-9]11","1[016-9]114"],
	"0$1"],[,"(\\d{2})(\\d{3,4})","$1-$2",["(?:3[1-3]|[46][1-4]|5[1-5])1"],"0$1","0$CC-$1"],[,"(\\d{4})(\\d{4})","$1-$2",["1"]],[,"(\\d)(\\d{3,4})(\\d{4})","$1-$2-$3",["2"],"0$1","0$CC-$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["[36]0|8"],"0$1","0$CC-$1"],[,"(\\d{2})(\\d{3,4})(\\d{4})","$1-$2-$3",["[1346]|5[1-5]"],"0$1","0$CC-$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[57]"],"0$1","0$CC-$1"],[,"(\\d{5})(\\d{3})(\\d{3})","$1 $2 $3",["003","0030"]],[,"(\\d{2})(\\d{5})(\\d{4})","$1-$2-$3",["5"],"0$1",
	"0$CC-$1"],[,"(\\d{5})(\\d{3,4})(\\d{4})","$1 $2 $3",["0"]],[,"(\\d{5})(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3 $4",["0"]]],[[,"(\\d{2})(\\d{3,4})","$1-$2",["(?:3[1-3]|[46][1-4]|5[1-5])1"],"0$1","0$CC-$1"],[,"(\\d{4})(\\d{4})","$1-$2",["1"]],[,"(\\d)(\\d{3,4})(\\d{4})","$1-$2-$3",["2"],"0$1","0$CC-$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["[36]0|8"],"0$1","0$CC-$1"],[,"(\\d{2})(\\d{3,4})(\\d{4})","$1-$2-$3",["[1346]|5[1-5]"],"0$1","0$CC-$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[57]"],"0$1","0$CC-$1"],
	[,"(\\d{2})(\\d{5})(\\d{4})","$1-$2-$3",["5"],"0$1","0$CC-$1"]],[,,"15\\d{7,8}",,,,"1523456789",,,[9,10]],,,[,,"00(?:3(?:08\\d{6,7}|68\\d{7})|798\\d{7,9})",,,,,,,[11,12,13,14]],[,,"1(?:5(?:22|33|44|66|77|88|99)|6(?:[07]0|44|6[0168]|88)|8(?:00|33|55|77|99))\\d{4}",,,,"15441234",,,[8]],,,[,,,,,,,,,[-1]]],KW:[,[,,"18\\d{5}|(?:[2569]\\d|41)\\d{6}",,,,,,,[7,8]],[,,"2(?:[23]\\d\\d|4(?:[1-35-9]\\d|44)|5(?:0[034]|[2-46]\\d|5[1-3]|7[1-7]))\\d{4}",,,,"22345678",,,[8]],[,,"(?:41\\d\\d|5(?:(?:[05]\\d|1[0-7]|6[56])\\d|2(?:22|5[25])|7(?:55|77)|88[58])|6(?:(?:0[034679]|5[015-9]|6\\d)\\d|1(?:00|11|6[16])|2[26]2|3[36]3|4[46]4|7(?:0[013-9]|[67]\\d)|8[68]8|9(?:[069]\\d|3[039]))|9(?:(?:[04679]\\d|8[057-9])\\d|1(?:1[01]|99)|2(?:00|2\\d)|3(?:00|3[03])|5(?:00|5\\d)))\\d{4}",
	,,,"50012345",,,[8]],[,,"18\\d{5}",,,,"1801234",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"KW",965,"00",,,,,,,,[[,"(\\d{4})(\\d{3,4})","$1 $2",["[169]|2(?:[235]|4[1-35-9])|52"]],[,"(\\d{3})(\\d{5})","$1 $2",["[245]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KY:[,[,,"(?:345|[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"345(?:2(?:22|3[23]|44|66)|333|444|6(?:23|38|40)|7(?:30|4[35-79]|6[6-9]|77)|8(?:00|1[45]|[48]8)|9(?:14|4[035-9]))\\d{4}",,,,"3452221234",
	,,,[7]],[,,"345(?:32[1-9]|42[0-4]|5(?:1[67]|2[5-79]|4[6-9]|50|76)|649|82[56]|9(?:1[679]|2[2-9]|3[06-9]|90))\\d{4}",,,,"3453231234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"(?:345976|900[2-9]\\d\\d)\\d{4}",,,,"9002345678"],[,,,,,,,,,[-1]],[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}",
	,,,"5002345678"],[,,,,,,,,,[-1]],"KY",1,"011","1",,,"([2-9]\\d{6})$|1","345$1",,,,,[,,"345849\\d{4}",,,,"3458491234"],,"345",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KZ:[,[,,"(?:33622|8\\d{8})\\d{5}|[78]\\d{9}",,,,,,,[10,14],[5,6,7]],[,,"(?:33622|7(?:1(?:0(?:[23]\\d|4[0-3]|59|63)|1(?:[23]\\d|4[0-79]|59)|2(?:[23]\\d|59)|3(?:2\\d|3[0-79]|4[0-35-9]|59)|4(?:[24]\\d|3[013-9]|5[1-9]|97)|5(?:2\\d|3[1-9]|4[0-7]|59)|6(?:[2-4]\\d|5[19]|61)|72\\d|8(?:[27]\\d|3[1-46-9]|4[0-5]|59))|2(?:1(?:[23]\\d|4[46-9]|5[3469])|2(?:2\\d|3[0679]|46|5[12679])|3(?:[2-4]\\d|5[139])|4(?:2\\d|3[1-35-9]|59)|5(?:[23]\\d|4[0-8]|59|61)|6(?:2\\d|3[1-9]|4[0-4]|59)|7(?:[2379]\\d|40|5[279])|8(?:[23]\\d|4[0-3]|59)|9(?:2\\d|3[124578]|59))))\\d{5}",
	,,,"7123456789",,,[10],[5,6,7]],[,,"7(?:0[0-25-8]|47|6[0-4]|7[15-8]|85)\\d{7}",,,,"7710009998",,,[10]],[,,"8(?:00|108\\d{3})\\d{7}",,,,"8001234567"],[,,"809\\d{7}",,,,"8091234567",,,[10]],[,,,,,,,,,[-1]],[,,"808\\d{7}",,,,"8081234567",,,[10]],[,,"751\\d{7}",,,,"7511234567",,,[10]],"KZ",7,"810","8",,,"8",,"8~10",,,,[,,,,,,,,,[-1]],,"33|7",[,,"751\\d{7}",,,,,,,[10]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],LA:[,[,,"[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}",,,,,,,[8,9,10],[6]],[,,"(?:2[13]|[35-7][14]|41|8[1468])\\d{6}",
	,,,"21212862",,,[8],[6]],[,,"208[78]\\d{6}|(?:20[23579]|30[24])\\d{7}",,,,"2023123456",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"LA",856,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2[13]|3[14]|[4-8]"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["30[0135-9]"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["[23]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"30[0135-9]\\d{6}",,,,"301234567",,,[9]],,,[,,,,,,
	,,,[-1]]],LB:[,[,,"[27-9]\\d{7}|[13-9]\\d{6}",,,,,,,[7,8]],[,,"7(?:62|8[0-7]|9[04-9])\\d{4}|(?:[14-69]\\d|2(?:[14-69]\\d|[78][1-9])|7[2-57]|8[02-9])\\d{5}",,,,"1123456"],[,,"793(?:[01]\\d|2[0-4])\\d{3}|(?:(?:3|81)\\d|7(?:[01]\\d|6[013-9]|8[89]|9[12]))\\d{5}",,,,"71123456"],[,,,,,,,,,[-1]],[,,"9[01]\\d{6}",,,,"90123456",,,[8]],[,,"80\\d{6}",,,,"80123456",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"LB",961,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"],
	"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[27-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],LC:[,[,,"(?:[58]\\d\\d|758|900)\\d{7}",,,,,,,[10],[7]],[,,"758(?:234|4(?:30|5\\d|6[2-9]|8[0-2])|57[0-2]|(?:63|75)8)\\d{4}",,,,"7584305678",,,,[7]],[,,"758(?:28[4-7]|384|4(?:6[01]|8[4-9])|5(?:1[89]|20|84)|7(?:1[2-9]|2\\d|3[0-3])|812)\\d{4}",,,,"7582845678",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],
	[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"LC",1,"011","1",,,"([2-8]\\d{6})$|1","758$1",,,,,[,,,,,,,,,[-1]],,"758",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],LI:[,[,,"[68]\\d{8}|(?:[2378]\\d|90)\\d{5}",,,,,,,[7,9]],[,,"(?:2(?:01|1[27]|2[02]|3\\d|6[02-578]|96)|3(?:[24]0|33|7[0135-7]|8[048]|9[0269]))\\d{4}",
	,,,"2345678",,,[7]],[,,"(?:6(?:(?:4[5-9]|5[0-469])\\d|6(?:[024-6]\\d|[17]0|3[7-9]))\\d|7(?:[37-9]\\d|42|56))\\d{4}",,,,"660234567"],[,,"8002[28]\\d\\d|80(?:05\\d|9)\\d{4}",,,,"8002222"],[,,"90(?:02[258]|1(?:23|3[14])|66[136])\\d\\d",,,,"9002222",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"LI",423,"00","0",,,"(1001)|0",,,,[[,"(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[2379]|8(?:0[09]|7)","[2379]|8(?:0(?:02|9)|7)"],,"$CC $1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"]],[,"(\\d{2})(\\d{3})(\\d{4})",
	"$1 $2 $3",["69"],,"$CC $1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"],,"$CC $1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"870(?:28|87)\\d\\d",,,,"8702812",,,[7]],,,[,,"697(?:42|56|[78]\\d)\\d{4}",,,,"697861234",,,[9]]],LK:[,[,,"[1-9]\\d{8}",,,,,,,[9],[7]],[,,"(?:12[2-9]|602|8[12]\\d|9(?:1\\d|22|9[245]))\\d{6}|(?:11|2[13-7]|3[1-8]|4[157]|5[12457]|6[35-7])[2-57]\\d{6}",,,,"112345678",,,,[7]],[,,"7(?:[0-25-8]\\d|4[0-4])\\d{6}",,,,"712345678"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,
	,,,,,[-1]],[,,,,,,,,,[-1]],"LK",94,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[1-689]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"1973\\d{5}",,,,"197312345"],,,[,,,,,,,,,[-1]]],LR:[,[,,"(?:[245]\\d|33|77|88)\\d{7}|(?:2\\d|[4-6])\\d{6}",,,,,,,[7,8,9]],[,,"2\\d{7}",,,,"21234567",,,[8]],[,,"(?:(?:(?:22|33)0|555|(?:77|88)\\d)\\d|4(?:240|[67]))\\d{5}|[56]\\d{6}",,,,"770123456",,,[7,9]],[,,,,,,,,,[-1]],[,,"332(?:02|[34]\\d)\\d{4}",
	,,,"332021234",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"LR",231,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["4[67]|[56]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[2-578]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],LS:[,[,,"(?:[256]\\d\\d|800)\\d{5}",,,,,,,[8]],[,,"2\\d{7}",,,,"22123456"],[,,"[56]\\d{7}",,,,"50123456"],[,,"800[1256]\\d{4}",,,,"80021234"],[,,,,,,,,,[-1]],[,,
	,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"LS",266,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2",["[2568]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],LT:[,[,,"(?:[3469]\\d|52|[78]0)\\d{6}",,,,,,,[8]],[,,"(?:3[1478]|4[124-6]|52)\\d{6}",,,,"31234567"],[,,"6\\d{7}",,,,"61234567"],[,,"80[02]\\d{5}",,,,"80012345"],[,,"9(?:0[0239]|10)\\d{5}",,,,"90012345"],[,,"808\\d{5}",,,,"80812345"],[,,"70[05]\\d{5}",,,,"70012345"],[,,"[89]01\\d{5}",,,,"80123456"],"LT",370,"00","0",,,"[08]",
	,,,[[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["52[0-7]"],"(0-$1)",,1],[,"(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[7-9]"],"0 $1",,1],[,"(\\d{2})(\\d{6})","$1 $2",["37|4(?:[15]|6[1-8])"],"(0-$1)",,1],[,"(\\d{3})(\\d{5})","$1 $2",["[3-6]"],"(0-$1)",,1]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"70[67]\\d{5}",,,,"70712345"],,,[,,,,,,,,,[-1]]],LU:[,[,,"35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}",,,,,,,[4,5,6,7,8,9,10,11]],[,,"(?:35[013-9]|80[2-9]|90[89])\\d{1,8}|(?:2[2-9]|3[0-46-9]|[457]\\d|8[13-9]|9[2-579])\\d{2,9}",
	,,,"27123456"],[,,"6(?:[269][18]|5[1568]|7[189]|81)\\d{6}",,,,"628123456",,,[9]],[,,"800\\d{5}",,,,"80012345",,,[8]],[,,"90[015]\\d{5}",,,,"90012345",,,[8]],[,,"801\\d{5}",,,,"80112345",,,[8]],[,,,,,,,,,[-1]],[,,"20(?:1\\d{5}|[2-689]\\d{1,7})",,,,"20201234",,,[4,5,6,7,8,9,10]],"LU",352,"00",,,,"(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)",,,,[[,"(\\d{2})(\\d{3})","$1 $2",["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"],,"$CC $1"],[,"(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"],
	,"$CC $1"],[,"(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["20[2-689]"],,"$CC $1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})","$1 $2 $3 $4",["2(?:[0367]|4[3-8])"],,"$CC $1"],[,"(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["80[01]|90[015]"],,"$CC $1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["20"],,"$CC $1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"],,"$CC $1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})","$1 $2 $3 $4 $5",["2(?:[0367]|4[3-8])"],,"$CC $1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})","$1 $2 $3 $4",
	["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"],,"$CC $1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],LV:[,[,,"(?:[268]\\d|90)\\d{6}",,,,,,,[8]],[,,"6\\d{7}",,,,"63123456"],[,,"23(?:23[0-57-9]|33[0238])\\d{3}|2(?:[0-24-9]\\d\\d|3(?:0[07]|[14-9]\\d|2[024-9]|3[0-24-9]))\\d{4}",,,,"21234567"],[,,"80\\d{6}",,,,"80123456"],[,,"90\\d{6}",,,,"90123456"],[,,"81\\d{6}",,,,"81123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"LV",371,"00",,,,,,,,[[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",
	["[269]|8[01]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],LY:[,[,,"[2-9]\\d{8}",,,,,,,[9],[7]],[,,"(?:2(?:0[56]|[1-6]\\d|7[124579]|8[124])|3(?:1\\d|2[2356])|4(?:[17]\\d|2[1-357]|5[2-4]|8[124])|5(?:[1347]\\d|2[1-469]|5[13-5]|8[1-4])|6(?:[1-479]\\d|5[2-57]|8[1-5])|7(?:[13]\\d|2[13-79])|8(?:[124]\\d|5[124]|84))\\d{6}",,,,"212345678",,,,[7]],[,,"9[1-6]\\d{7}",,,,"912345678"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"LY",218,"00","0",
	,,"0",,,,[[,"(\\d{2})(\\d{7})","$1-$2",["[2-9]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MA:[,[,,"[5-8]\\d{8}",,,,,,,[9]],[,,"5(?:2(?:[0-25-79]\\d|3[1-578]|4[02-46-8]|8[0235-7])|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[014-9]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}",,,,"520123456"],[,,"(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[0167]\\d|2[0-4]|5[01]|8[0-3]))\\d{6}",,,,"650123456"],[,,"80[0-7]\\d{6}",,,,"801234567"],[,,"89\\d{7}",,,,"891234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}",
	,,,"592401234"],"MA",212,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["5[45]"],"0$1"],[,"(\\d{4})(\\d{5})","$1-$2",["5(?:2[2-46-9]|3[3-9]|9)|8(?:0[89]|92)"],"0$1"],[,"(\\d{2})(\\d{7})","$1-$2",["8"],"0$1"],[,"(\\d{3})(\\d{6})","$1-$2",["[5-7]"],"0$1"]],,[,,,,,,,,,[-1]],1,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MC:[,[,,"(?:[3489]|6\\d)\\d{7}",,,,,,,[8,9]],[,,"(?:870|9[2-47-9]\\d)\\d{5}",,,,"99123456",,,[8]],[,,"4(?:[469]\\d|5[1-9])\\d{5}|(?:3|6\\d)\\d{7}",,,,"612345678"],
	[,,"(?:800|90\\d)\\d{5}",,,,"90123456",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"MC",377,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3",["87"]],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["4"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[389]"]],[,"(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["6"],"0$1"]],[[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["4"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[389]"]],[,"(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
	"$1 $2 $3 $4 $5",["6"],"0$1"]],[,,,,,,,,,[-1]],,,[,,"8[07]0\\d{5}",,,,,,,[8]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MD:[,[,,"(?:[235-7]\\d|[89]0)\\d{6}",,,,,,,[8]],[,,"(?:(?:2[1-9]|3[1-79])\\d|5(?:33|5[257]))\\d{5}",,,,"22212345"],[,,"562\\d{5}|(?:6\\d|7[16-9])\\d{6}",,,,"62112345"],[,,"800\\d{5}",,,,"80012345"],[,,"90[056]\\d{5}",,,,"90012345"],[,,"808\\d{5}",,,,"80812345"],[,,,,,,,,,[-1]],[,,"3[08]\\d{6}",,,,"30123456"],"MD",373,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{5})","$1 $2",["[89]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})",
	"$1 $2 $3",["22|3"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[25-7]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"803\\d{5}",,,,"80312345"],,,[,,,,,,,,,[-1]]],ME:[,[,,"(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}",,,,,,,[8,9],[6]],[,,"(?:20[2-8]|3(?:[0-2][2-7]|3[24-7])|4(?:0[2-467]|1[2467])|5(?:0[2467]|1[24-7]|2[2-467]))\\d{5}",,,,"30234567",,,[8],[6]],[,,"6(?:[07-9]\\d|3[024]|6[0-25])\\d{5}",,,,"67622901",,,[8]],[,,"80(?:[0-2578]|9\\d)\\d{5}",,,,"80080002"],[,,"9(?:4[1568]|5[178])\\d{5}",,,,"94515151",
	,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"78[1-49]\\d{5}",,,,"78108780",,,[8]],"ME",382,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-9]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"77[1-9]\\d{5}",,,,"77273012",,,[8]],,,[,,,,,,,,,[-1]]],MF:[,[,,"590\\d{6}|(?:69|80|9\\d)\\d{7}",,,,,,,[9]],[,,"590(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)\\d{4}",,,,"590271234"],[,,"69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))\\d{4}",,,,"690001234"],
	[,,"80[0-5]\\d{6}",,,,"800012345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"9(?:(?:39[5-7]|76[018])\\d|475[0-5])\\d{4}",,,,"976012345"],"MF",590,"00","0",,,"0",,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MG:[,[,,"[23]\\d{8}",,,,,,,[9],[7]],[,,"2072[29]\\d{4}|20(?:2\\d|4[47]|5[3467]|6[279]|7[35]|8[268]|9[245])\\d{5}",,,,"202123456",,,,[7]],[,,"3[2-47-9]\\d{7}",,,,"321234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"22\\d{7}",,,,"221234567"],
	"MG",261,"00","0",,,"([24-9]\\d{6})$|0","20$1",,,[[,"(\\d{2})(\\d{2})(\\d{3})(\\d{2})","$1 $2 $3 $4",["[23]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MH:[,[,,"329\\d{4}|(?:[256]\\d|45)\\d{5}",,,,,,,[7]],[,,"(?:247|528|625)\\d{4}",,,,"2471234"],[,,"(?:(?:23|54)5|329|45[35-8])\\d{4}",,,,"2351234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"635\\d{4}",,,,"6351234"],"MH",692,"011","1",,,"1",,,,[[,"(\\d{3})(\\d{4})","$1-$2",["[2-6]"]]],,[,
	,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MK:[,[,,"[2-578]\\d{7}",,,,,,,[8],[6,7]],[,,"(?:(?:2(?:62|77)0|3444)\\d|4[56]440)\\d{3}|(?:34|4[357])700\\d{3}|(?:2(?:[0-3]\\d|5[0-578]|6[01]|82)|3(?:1[3-68]|[23][2-68]|4[23568])|4(?:[23][2-68]|4[3-68]|5[2568]|6[25-8]|7[24-68]|8[4-68]))\\d{5}",,,,"22012345",,,,[6,7]],[,,"7(?:3555|(?:474|9[019]7)7)\\d{3}|7(?:[0-25-8]\\d\\d|3(?:[1-48]\\d|6[01]|7[01578])|4(?:2\\d|60|7[01578])|9(?:[2-4]\\d|5[01]|7[015]))\\d{4}",,,,"72345678"],[,,"800\\d{5}",
	,,,"80012345"],[,,"5\\d{7}",,,,"50012345"],[,,"8(?:0[1-9]|[1-9]\\d)\\d{5}",,,,"80123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"MK",389,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2|34[47]|4(?:[37]7|5[47]|64)"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[347]"],"0$1"],[,"(\\d{3})(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["[58]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],ML:[,[,,"[24-9]\\d{7}",,,,,,,[8]],[,,"2(?:07[0-8]|12[67])\\d{4}|(?:2(?:02|1[4-689])|4(?:0[0-4]|4[1-39]))\\d{5}",
	,,,"20212345"],[,,"2(?:0(?:01|79)|17\\d)\\d{4}|(?:5[01]|[679]\\d|8[2-49])\\d{6}",,,,"65012345"],[,,"80\\d{6}",,,,"80012345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"ML",223,"00",,,,,,,,[[,"(\\d{4})","$1",["67[057-9]|74[045]","67(?:0[09]|[59]9|77|8[89])|74(?:0[02]|44|55)"]],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24-9]"]]],[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24-9]"]]],[,,,,,,,,,[-1]],,,[,,"80\\d{6}"],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MM:[,
	[,,"1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}",,,,,,,[6,7,8,9,10],[5]],[,,"(?:1(?:(?:2\\d|3[56]|[89][0-6])\\d|4(?:2[29]|62|7[0-2]|83)|6)|2(?:2(?:00|8[34])|4(?:0\\d|[26]2|7[0-2]|83)|51\\d\\d)|4(?:2(?:2\\d\\d|48[013])|3(?:20\\d|4(?:70|83)|56)|420\\d|5470)|6(?:0(?:[23]|88\\d)|(?:124|[56]2\\d)\\d|2472|3(?:20\\d|470)|4(?:2[04]\\d|472)|7(?:(?:3\\d|8[01459])\\d|4[67]0)))\\d{4}|5(?:2(?:2\\d{5,6}|47[02]\\d{4})|(?:3472|4(?:2(?:1|86)|470)|522\\d|6(?:20\\d|483)|7(?:20\\d|48[01])|8(?:20\\d|47[02])|9(?:20\\d|470))\\d{4})|7(?:(?:0470|4(?:25\\d|470)|5(?:202|470|96\\d))\\d{4}|1(?:20\\d{4,5}|4(?:70|83)\\d{4}))|8(?:1(?:2\\d{5,6}|4(?:10|7[01]\\d)\\d{3})|2(?:2\\d{5,6}|(?:320|490\\d)\\d{3})|(?:3(?:2\\d\\d|470)|4[24-7]|5(?:(?:2\\d|51)\\d|4(?:[1-35-9]\\d|4[0-57-9]))|6[23])\\d{4})|(?:1[2-6]\\d|4(?:2[24-8]|3[2-7]|[46][2-6]|5[3-5])|5(?:[27][2-8]|3[2-68]|4[24-8]|5[23]|6[2-4]|8[24-7]|9[2-7])|6(?:[19]20|42[03-6]|(?:52|7[45])\\d)|7(?:[04][24-8]|[15][2-7]|22|3[2-4])|8(?:1[2-689]|2[2-8]|[35]2\\d))\\d{4}|25\\d{5,6}|(?:2[2-9]|6(?:1[2356]|[24][2-6]|3[24-6]|5[2-4]|6[2-8]|7[235-7]|8[245]|9[24])|8(?:3[24]|5[245]))\\d{4}",
	,,,"1234567",,,[6,7,8,9],[5]],[,,"(?:17[01]|9(?:2(?:[0-4]|[56]\\d\\d)|(?:3(?:[0-36]|4\\d)|(?:6\\d|8[89]|9[4-8])\\d|7(?:3|40|[5-9]\\d))\\d|4(?:(?:[0245]\\d|[1379])\\d|88)|5[0-6])\\d)\\d{4}|9[69]1\\d{6}|9(?:[68]\\d|9[089])\\d{5}",,,,"92123456",,,[7,8,9,10]],[,,"80080(?:0[1-9]|2\\d)\\d{3}",,,,"8008001234",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"1333\\d{4}|[12]468\\d{4}",,,,"13331234",,,[8]],"MM",95,"00","0",,,"0",,,,[[,"(\\d)(\\d{2})(\\d{3})","$1 $2 $3",["16|2"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{3})",
	"$1 $2 $3",["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"],"0$1"],[,"(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[12]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[4-7]|8[1-35]"],"0$1"],[,"(\\d)(\\d{3})(\\d{4,6})","$1 $2 $3",["9(?:2[0-4]|[35-9]|4[137-9])"],"0$1"],[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"],"0$1"],[,"(\\d)(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["92"],"0$1"],[,"(\\d)(\\d{5})(\\d{4})","$1 $2 $3",["9"],"0$1"]],,[,,,
	,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MN:[,[,,"[12]\\d{7,9}|[5-9]\\d{7}",,,,,,,[8,9,10],[4,5,6]],[,,"[12]2[1-3]\\d{5,6}|(?:(?:[12](?:1|27)|5[368])\\d\\d|7(?:0(?:[0-5]\\d|7[078]|80)|128))\\d{4}|[12](?:3[2-8]|4[2-68]|5[1-4689])\\d{6,7}",,,,"53123456",,,,[4,5,6]],[,,"(?:83[01]|92[039])\\d{5}|(?:5[05]|6[069]|8[015689]|9[013-9])\\d{6}",,,,"88123456",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"712[0-79]\\d{4}|7(?:1[013-9]|[25-9]\\d)\\d{5}",,,,"75123456",
	,,[8]],"MN",976,"001","0",,,"0",,,,[[,"(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["[12]1"],"0$1"],[,"(\\d{4})(\\d{4})","$1 $2",["[5-9]"]],[,"(\\d{3})(\\d{5,6})","$1 $2",["[12]2[1-3]"],"0$1"],[,"(\\d{4})(\\d{5,6})","$1 $2",["[12](?:27|3[2-8]|4[2-68]|5[1-4689])","[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"],"0$1"],[,"(\\d{5})(\\d{4,5})","$1 $2",["[12]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MO:[,[,,"0800\\d{3}|(?:28|[68]\\d)\\d{6}",,,,,,,[7,8]],[,,"(?:28[2-9]|8(?:11|[2-57-9]\\d))\\d{5}",
	,,,"28212345",,,[8]],[,,"6800[0-79]\\d{3}|6(?:[235]\\d\\d|6(?:0[0-5]|[1-9]\\d)|8(?:0[1-9]|[14-8]\\d|2[5-9]|[39][0-4]))\\d{4}",,,,"66123456",,,[8]],[,,"0800\\d{3}",,,,"0800501",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"MO",853,"00",,,,,,,,[[,"(\\d{4})(\\d{3})","$1 $2",["0"]],[,"(\\d{4})(\\d{4})","$1 $2",["[268]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MP:[,[,,"[58]\\d{9}|(?:67|90)0\\d{7}",,,,,,,[10],[7]],[,,"670(?:2(?:3[3-7]|56|8[4-8])|32[1-38]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}",
	,,,"6702345678",,,,[7]],[,,"670(?:2(?:3[3-7]|56|8[4-8])|32[1-38]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}",,,,"6702345678",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}",
	,,,"5002345678"],[,,,,,,,,,[-1]],"MP",1,"011","1",,,"([2-9]\\d{6})$|1","670$1",,1,,,[,,,,,,,,,[-1]],,"670",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MQ:[,[,,"596\\d{6}|(?:69|80|9\\d)\\d{7}",,,,,,,[9]],[,,"596(?:[03-7]\\d|1[05]|2[7-9]|8[0-39]|9[04-9])\\d{4}",,,,"596301234"],[,,"69(?:6(?:[0-46-9]\\d|5[0-6])|727)\\d{4}",,,,"696201234"],[,,"80[0-5]\\d{6}",,,,"800012345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"9(?:397[0-3]|477[0-5]|76(?:6\\d|7[0-367]))\\d{4}",,,,"976612345"],"MQ",
	596,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[569]"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MR:[,[,,"(?:[2-4]\\d\\d|800)\\d{5}",,,,,,,[8]],[,,"(?:25[08]|35\\d|45[1-7])\\d{5}",,,,"35123456"],[,,"[2-4][0-46-9]\\d{6}",,,,"22123456"],[,,"800\\d{5}",,,,"80012345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"MR",222,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
	"$1 $2 $3 $4",["[2-48]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MS:[,[,,"(?:[58]\\d\\d|664|900)\\d{7}",,,,,,,[10],[7]],[,,"6644(?:1[0-3]|91)\\d{4}",,,,"6644912345",,,,[7]],[,,"664(?:3(?:49|9[1-6])|49[2-6])\\d{4}",,,,"6644923456",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}",
	,,,"5002345678"],[,,,,,,,,,[-1]],"MS",1,"011","1",,,"([34]\\d{6})$|1","664$1",,,,,[,,,,,,,,,[-1]],,"664",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MT:[,[,,"3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}",,,,,,,[8]],[,,"20(?:3[1-4]|6[059])\\d{4}|2(?:0[19]|[1-357]\\d|60)\\d{5}",,,,"21001234"],[,,"(?:7(?:210|[79]\\d\\d)|9(?:[29]\\d\\d|69[67]|8(?:1[1-3]|89|97)))\\d{4}",,,,"96961234"],[,,"800(?:02|[3467]\\d)\\d{3}",,,,"80071234"],[,,"5(?:0(?:0(?:37|43)|(?:6\\d|70|9[0168])\\d)|[12]\\d0[1-5])\\d{3}",,,,
	"50037123"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"3550\\d{4}",,,,"35501234"],"MT",356,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2",["[2357-9]"]]],,[,,"7117\\d{4}",,,,"71171234"],,,[,,,,,,,,,[-1]],[,,"501\\d{5}",,,,"50112345"],,,[,,,,,,,,,[-1]]],MU:[,[,,"(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}",,,,,,,[7,8,10]],[,,"(?:2(?:[0346-8]\\d|1[0-7])|4(?:[013568]\\d|2[4-8]|71)|54(?:[3-5]\\d|71)|6\\d\\d|8(?:14|3[129]))\\d{4}",,,,"54480123",,,[7,8]],[,,"5(?:4(?:2[1-389]|7[1-9])|87[15-8])\\d{4}|(?:5(?:2[5-9]|4[3-689]|[57]\\d|8[0-689]|9[0-8])|7(?:0[0-4]|3[013]))\\d{5}",
	,,,"52512345",,,[8]],[,,"802\\d{7}|80[0-2]\\d{4}",,,,"8001234",,,[7,10]],[,,"30\\d{5}",,,,"3012345",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"3(?:20|9\\d)\\d{4}",,,,"3201234",,,[7]],"MU",230,"0(?:0|[24-7]0|3[03])",,,,,,"020",,[[,"(\\d{3})(\\d{4})","$1 $2",["[2-46]|8[013]"]],[,"(\\d{4})(\\d{4})","$1 $2",["[57]"]],[,"(\\d{5})(\\d{5})","$1 $2",["8"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MV:[,[,,"(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}",,,,,,,[7,10]],[,,"(?:3(?:0[0-3]|3[0-59])|6(?:[58][024689]|6[024-68]|7[02468]))\\d{4}",
	,,,"6701234",,,[7]],[,,"(?:46[46]|[79]\\d\\d)\\d{4}",,,,"7712345",,,[7]],[,,"800\\d{7}",,,,"8001234567",,,[10]],[,,"900\\d{7}",,,,"9001234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"MV",960,"0(?:0|19)",,,,,,"00",,[[,"(\\d{3})(\\d{4})","$1-$2",["[34679]"]],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"4(?:0[01]|50)\\d{4}",,,,"4001234",,,[7]],,,[,,,,,,,,,[-1]]],MW:[,[,,"(?:[1289]\\d|31|77)\\d{7}|1\\d{6}",,,,,,,[7,9]],[,,"(?:1[2-9]|2[12]\\d\\d)\\d{5}",
	,,,"1234567"],[,,"111\\d{6}|(?:31|77|[89][89])\\d{7}",,,,"991234567",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"MW",265,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["1[2-9]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["2"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[137-9]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MX:[,[,,"[2-9]\\d{9}",,,,,,,[10],[7,8]],[,,"657[12]\\d{6}|(?:2(?:0[01]|2\\d|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[25-7][1-9]|3[1-8]|4\\d|8[1-35-9]|9[2-689])|5(?:[56]\\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[0-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[1346][1-9]|[27]\\d|5[13-9]|8[1-69]|9[17])|8(?:1\\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[0-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69]\\d|7[12]|8[1-8]))\\d{7}",
	,,,"2001234567",,,,[7,8]],[,,"657[12]\\d{6}|(?:2(?:2\\d|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[25-7][1-9]|3[1-8]|4\\d|8[1-35-9]|9[2-689])|5(?:[56]\\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[0-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[1346][1-9]|[27]\\d|5[13-9]|8[1-69]|9[17])|8(?:1\\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[0-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69]\\d|7[12]|8[1-8]))\\d{7}",,,,"2221234567",,,,[7,8]],[,,"8(?:00|88)\\d{7}",
	,,,"8001234567"],[,,"900\\d{7}",,,,"9001234567"],[,,"300\\d{7}",,,,"3001234567"],[,,"500\\d{7}",,,,"5001234567"],[,,,,,,,,,[-1]],"MX",52,"0[09]",,,,,,"00",,[[,"(\\d{5})","$1",["53"]],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["33|5[56]|81"]],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2-9]"]]],[[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["33|5[56]|81"]],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2-9]"]]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MY:[,[,,"1\\d{8,9}|(?:3\\d|[4-9])\\d{7}",
	,,,,,,[8,9,10],[6,7]],[,,"4270\\d{4}|(?:3(?:2[0-36-9]|3[0-368]|4[0-278]|5[0-24-8]|6[0-467]|7[1246-9]|8\\d|9[0-57])\\d|4(?:2[0-689]|[3-79]\\d|8[1-35689])|5(?:2[0-589]|[3468]\\d|5[0-489]|7[1-9]|9[23])|6(?:2[2-9]|3[1357-9]|[46]\\d|5[0-6]|7[0-35-9]|85|9[015-8])|7(?:[2579]\\d|3[03-68]|4[0-8]|6[5-9]|8[0-35-9])|8(?:[24][2-8]|3[2-5]|5[2-7]|6[2-589]|7[2-578]|[89][2-9])|9(?:0[57]|13|[25-7]\\d|[3489][0-8]))\\d{5}",,,,"323856789",,,[8,9],[6,7]],[,,"1(?:1888[689]|4400|8(?:47|8[27])[0-4])\\d{4}|1(?:0(?:[23568]\\d|4[0-6]|7[016-9]|9[0-8])|1(?:[1-5]\\d\\d|6(?:0[5-9]|[1-9]\\d)|7(?:[0-4]\\d|5[0-7]))|(?:[269]\\d|[37][1-9]|4[235-9])\\d|5(?:31|9\\d\\d)|8(?:1[23]|[236]\\d|4[06]|5(?:46|[7-9])|7[016-9]|8[01]|9[0-8]))\\d{5}",
	,,,"123456789",,,[9,10]],[,,"1[378]00\\d{6}",,,,"1300123456",,,[10]],[,,"1600\\d{6}",,,,"1600123456",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"15(?:4(?:6[0-4]\\d|8(?:0[125]|[17]\\d|21|3[01]|4[01589]|5[014]|6[02]))|6(?:32[0-6]|78\\d))\\d{4}",,,,"1546012345",,,[10]],"MY",60,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{4})","$1-$2 $3",["[4-79]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1-$2 $3",["1(?:[02469]|[378][1-9]|53)|8","1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"],"0$1"],[,"(\\d)(\\d{4})(\\d{4})",
	"$1-$2 $3",["3"],"0$1"],[,"(\\d)(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3-$4",["1(?:[367]|80)"]],[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2 $3",["15"],"0$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1-$2 $3",["1"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MZ:[,[,,"(?:2|8\\d)\\d{7}",,,,,,,[8,9]],[,,"2(?:[1346]\\d|5[0-2]|[78][12]|93)\\d{5}",,,,"21123456",,,[8]],[,,"8[2-79]\\d{7}",,,,"821234567",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],
	[,,,,,,,,,[-1]],"MZ",258,"00",,,,,,,,[[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["2|8[2-79]"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],NA:[,[,,"[68]\\d{7,8}",,,,,,,[8,9]],[,,"64426\\d{3}|6(?:1(?:2[2-7]|3[01378]|4[0-4])|254|32[0237]|4(?:27|41|5[25])|52[236-8]|626|7(?:2[2-4]|30))\\d{4,5}|6(?:1(?:(?:0\\d|2[0189]|3[24-69]|4[5-9])\\d|17|69|7[014])|2(?:17|5[0-36-8]|69|70)|3(?:17|2[14-689]|34|6[289]|7[01]|81)|4(?:17|2[0-2]|4[06]|5[0137]|69|7[01])|5(?:17|2[0459]|69|7[01])|6(?:17|25|38|42|69|7[01])|7(?:17|2[569]|3[13]|6[89]|7[01]))\\d{4}",
	,,,"61221234"],[,,"(?:60|8[1245])\\d{7}",,,,"811234567",,,[9]],[,,"80\\d{7}",,,,"800123456",,,[9]],[,,"8701\\d{5}",,,,"870123456",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"8(?:3\\d\\d|86)\\d{5}",,,,"88612345"],"NA",264,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["88"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["6"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["87"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["8"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,
	[-1]],,,[,,,,,,,,,[-1]]],NC:[,[,,"(?:050|[2-57-9]\\d\\d)\\d{3}",,,,,,,[6]],[,,"(?:2[03-9]|3[0-5]|4[1-7]|88)\\d{4}",,,,"201234"],[,,"(?:5[0-4]|[79]\\d|8[0-79])\\d{4}",,,,"751234"],[,,"050\\d{3}",,,,"050012"],[,,"36\\d{4}",,,,"366711"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"NC",687,"00",,,,,,,,[[,"(\\d{3})","$1",["5[6-8]"]],[,"(\\d{2})(\\d{2})(\\d{2})","$1.$2.$3",["[02-57-9]"]]],[[,"(\\d{2})(\\d{2})(\\d{2})","$1.$2.$3",["[02-57-9]"]]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,
	,,,,,,,,[-1]]],NE:[,[,,"[027-9]\\d{7}",,,,,,,[8]],[,,"2(?:0(?:20|3[1-8]|4[13-5]|5[14]|6[14578]|7[1-578])|1(?:4[145]|5[14]|6[14-68]|7[169]|88))\\d{4}",,,,"20201234"],[,,"(?:23|7[0467]|[89]\\d)\\d{6}",,,,"93123456"],[,,"08\\d{6}",,,,"08123456"],[,,"09\\d{6}",,,,"09123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"NE",227,"00",,,,,,,,[[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["08"]],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[089]|2[013]|7[0467]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],
	[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],NF:[,[,,"[13]\\d{5}",,,,,,,[6],[5]],[,,"(?:1(?:06|17|28|39)|3[0-2]\\d)\\d{3}",,,,"106609",,,,[5]],[,,"(?:14|3[58])\\d{4}",,,,"381234",,,,[5]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"NF",672,"00",,,,"([0-258]\\d{4})$","3$1",,,[[,"(\\d{2})(\\d{4})","$1 $2",["1[0-3]"]],[,"(\\d)(\\d{5})","$1 $2",["[13]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],NG:[,[,,"2[0-24-9]\\d{8}|[78]\\d{10,13}|[7-9]\\d{9}|[1-9]\\d{7}|[124-7]\\d{6}",
	,,,,,,[7,8,10,11,12,13,14],[5,6]],[,,"20(?:[1259]\\d|3[013-9]|4[1-8]|6[024-689]|7[1-79]|8[2-9])\\d{6}|(?:(?:[1-356]\\d|4[02-8]|8[2-9])\\d|9(?:0[3-9]|[1-9]\\d))\\d{5}|7(?:0(?:[013-689]\\d|2[0-24-9])\\d{3,4}|[1-79]\\d{6})|(?:[12]\\d|4[147]|5[14579]|6[1578]|7[1-3578])\\d{5}",,,,"18040123",,,[7,8,10],[5,6]],[,,"(?:702[0-24-9]|819[01])\\d{6}|(?:7(?:0[13-9]|[12]\\d)|8(?:0[1-9]|1[0-8])|9(?:0[1-9]|1[1-6]))\\d{7}",,,,"8021234567",,,[10]],[,,"800\\d{7,11}",,,,"80017591759",,,[10,11,12,13,14]],[,,,,,,,,,[-1]],
	[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"NG",234,"009","0",,,"0",,,,[[,"(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["78"],"0$1"],[,"(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[12]|9(?:0[3-9]|[1-9])"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["[3-6]|7(?:0[0-689]|[1-79])|8[2-9]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[7-9]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["20[129]"],"0$1"],[,"(\\d{4})(\\d{2})(\\d{4})","$1 $2 $3",["2"],"0$1"],[,"(\\d{3})(\\d{4})(\\d{4,5})","$1 $2 $3",
	["[78]"],"0$1"],[,"(\\d{3})(\\d{5})(\\d{5,6})","$1 $2 $3",["[78]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"700\\d{7,11}",,,,"7001234567",,,[10,11,12,13,14]],,,[,,,,,,,,,[-1]]],NI:[,[,,"(?:1800|[25-8]\\d{3})\\d{4}",,,,,,,[8]],[,,"2\\d{7}",,,,"21234567"],[,,"(?:5(?:5[0-7]|[78]\\d)|6(?:20|3[035]|4[045]|5[05]|77|8[1-9]|9[059])|(?:7[5-8]|8\\d)\\d)\\d{5}",,,,"81234567"],[,,"1800\\d{4}",,,,"18001234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"NI",505,"00",,,,,,,,[[,"(\\d{4})(\\d{4})",
	"$1 $2",["[125-8]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],NL:[,[,,"(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}",,,,,,,[5,6,7,8,9,10,11]],[,,"(?:1(?:[035]\\d|1[13-578]|6[124-8]|7[24]|8[0-467])|2(?:[0346]\\d|2[2-46-9]|5[125]|9[479])|3(?:[03568]\\d|1[3-8]|2[01]|4[1-8])|4(?:[0356]\\d|1[1-368]|7[58]|8[15-8]|9[23579])|5(?:[0358]\\d|[19][1-9]|2[1-57-9]|4[13-8]|6[126]|7[0-3578])|7\\d\\d)\\d{6}",,,,"101234567",,,[9]],[,,"(?:6[1-58]|970\\d)\\d{7}",
	,,,"612345678",,,[9,11]],[,,"800\\d{4,7}",,,,"8001234",,,[7,8,9,10]],[,,"90[069]\\d{4,7}",,,,"9061234",,,[7,8,9,10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"(?:85|91)\\d{7}",,,,"851234567",,,[9]],"NL",31,"00","0",,,"0",,,,[[,"(\\d{4})","$1",["1[238]|[34]"]],[,"(\\d{2})(\\d{3,4})","$1 $2",["14"]],[,"(\\d{6})","$1",["1"]],[,"(\\d{3})(\\d{4,7})","$1 $2",["[89]0"],"0$1"],[,"(\\d{2})(\\d{7})","$1 $2",["66"],"0$1"],[,"(\\d)(\\d{8})","$1 $2",["6"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"],
	"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-578]|91"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{5})","$1 $2 $3",["9"],"0$1"]],[[,"(\\d{3})(\\d{4,7})","$1 $2",["[89]0"],"0$1"],[,"(\\d{2})(\\d{7})","$1 $2",["66"],"0$1"],[,"(\\d)(\\d{8})","$1 $2",["6"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-578]|91"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{5})","$1 $2 $3",["9"],"0$1"]],[,,"66\\d{7}",,,,"662345678",,,[9]],,,[,
	,"140(?:1[035]|2[0346]|3[03568]|4[0356]|5[0358]|8[458])|140(?:1[16-8]|2[259]|3[124]|4[17-9]|5[124679]|7)\\d",,,,,,,[5,6]],[,,"140(?:1[035]|2[0346]|3[03568]|4[0356]|5[0358]|8[458])|(?:140(?:1[16-8]|2[259]|3[124]|4[17-9]|5[124679]|7)|8[478]\\d{6})\\d",,,,"14020",,,[5,6,9]],,,[,,,,,,,,,[-1]]],NO:[,[,,"(?:0|[2-9]\\d{3})\\d{4}",,,,,,,[5,8]],[,,"(?:2[1-4]|3[1-3578]|5[1-35-7]|6[1-4679]|7[0-8])\\d{6}",,,,"21234567",,,[8]],[,,"(?:4[015-8]|9\\d)\\d{6}",,,,"40612345",,,[8]],[,,"80[01]\\d{5}",,,,"80012345",,
	,[8]],[,,"82[09]\\d{5}",,,,"82012345",,,[8]],[,,"810(?:0[0-6]|[2-8]\\d)\\d{3}",,,,"81021234",,,[8]],[,,"880\\d{5}",,,,"88012345",,,[8]],[,,"85[0-5]\\d{5}",,,,"85012345",,,[8]],"NO",47,"00",,,,,,,,[[,"(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["8"]],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-79]"]]],,[,,,,,,,,,[-1]],1,"[02-689]|7[0-8]",[,,,,,,,,,[-1]],[,,"(?:0[2-9]|81(?:0(?:0[7-9]|1\\d)|5\\d\\d))\\d{3}",,,,"02000"],,,[,,"81[23]\\d{5}",,,,"81212345",,,[8]]],NP:[,[,,"(?:1\\d|9)\\d{9}|[1-9]\\d{7}",
	,,,,,,[8,10,11],[6,7]],[,,"(?:1[0-6]\\d|99[02-6])\\d{5}|(?:2[13-79]|3[135-8]|4[146-9]|5[135-7]|6[13-9]|7[15-9]|8[1-46-9]|9[1-7])[2-6]\\d{5}",,,,"14567890",,,[8],[6,7]],[,,"9(?:00|6[0-3]|7[024-6]|8[0-24-68])\\d{7}",,,,"9841234567",,,[10]],[,,"1(?:66001|800\\d\\d)\\d{5}",,,,"16600101234",,,[11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"NP",977,"00","0",,,"0",,,,[[,"(\\d)(\\d{7})","$1-$2",["1[2-6]"],"0$1"],[,"(\\d{2})(\\d{6})","$1-$2",["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"],"0$1"],
	[,"(\\d{3})(\\d{7})","$1-$2",["9"]],[,"(\\d{4})(\\d{2})(\\d{5})","$1-$2-$3",["1"]]],[[,"(\\d)(\\d{7})","$1-$2",["1[2-6]"],"0$1"],[,"(\\d{2})(\\d{6})","$1-$2",["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"],"0$1"],[,"(\\d{3})(\\d{7})","$1-$2",["9"]]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],NR:[,[,,"(?:444|(?:55|8\\d)\\d|666)\\d{4}",,,,,,,[7]],[,,"444\\d{4}",,,,"4441234"],[,,"(?:55[3-9]|666|8\\d\\d)\\d{4}",,,,"5551234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],
	[,,,,,,,,,[-1]],"NR",674,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[4-68]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],NU:[,[,,"(?:[4-7]|888\\d)\\d{3}",,,,,,,[4,7]],[,,"[47]\\d{3}",,,,"7012",,,[4]],[,,"(?:[56]|888[1-9])\\d{3}",,,,"8884012"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"NU",683,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["8"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],NZ:[,[,,"[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}",
	,,,,,,[5,6,7,8,9,10]],[,,"24099\\d{3}|(?:3[2-79]|[49][2-9]|6[235-9]|7[2-57-9])\\d{6}",,,,"32345678",,,[8],[7]],[,,"2(?:[0-27-9]\\d|6)\\d{6,7}|2(?:1\\d|75)\\d{5}",,,,"211234567",,,[8,9,10]],[,,"508\\d{6,7}|80\\d{6,8}",,,,"800123456",,,[8,9,10]],[,,"(?:1[13-57-9]\\d{5}|50(?:0[08]|30|66|77|88))\\d{3}|90\\d{6,8}",,,,"900123456",,,[7,8,9,10]],[,,,,,,,,,[-1]],[,,"70\\d{7}",,,,"701234567",,,[9]],[,,,,,,,,,[-1]],"NZ",64,"0(?:0|161)","0",,,"0",,"00",,[[,"(\\d{2})(\\d{3,8})","$1 $2",["8[1-79]"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2,3})",
	"$1 $2 $3",["50[036-8]|8|90","50(?:[0367]|88)|8|90"],"0$1"],[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["24|[346]|7[2-57-9]|9[2-9]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["2(?:10|74)|[589]"],"0$1"],[,"(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["1|2[028]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,5})","$1 $2 $3",["2(?:[169]|7[0-35-9])|7"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"8(?:1[16-9]|22|3\\d|4[045]|5[459]|6[235-9]|7[0-3579]|90)\\d{2,7}",,,,"83012378"],,,[,,,,,,,,,[-1]]],OM:[,[,,"(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}",
	,,,,,,[7,8,9]],[,,"2[1-6]\\d{6}",,,,"23123456",,,[8]],[,,"(?:1505|90[1-9]\\d)\\d{4}|(?:7[126-9]|9[1-9])\\d{6}",,,,"92123456",,,[8]],[,,"8007\\d{4,5}|(?:500|800[05])\\d{4}",,,,"80071234"],[,,"900\\d{5}",,,,"90012345",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"OM",968,"00",,,,,,,,[[,"(\\d{3})(\\d{4,6})","$1 $2",["[58]"]],[,"(\\d{2})(\\d{6})","$1 $2",["2"]],[,"(\\d{4})(\\d{4})","$1 $2",["[179]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PA:[,[,,"(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}",
	,,,,,,[7,8,10,11]],[,,"(?:1(?:0\\d|1[479]|2[37]|3[0137]|4[17]|5[05]|6[058]|7[0167]|8[2358]|9[1389])|2(?:[0235-79]\\d|1[0-7]|4[013-9]|8[02-9])|3(?:[089]\\d|1[0-7]|2[0-5]|33|4[0-79]|5[0-35]|6[068]|7[0-8])|4(?:00|3[0-579]|4\\d|7[0-57-9])|5(?:[01]\\d|2[0-7]|[56]0|79)|7(?:0[09]|2[0-26-8]|3[03]|4[04]|5[05-9]|6[0156]|7[0-24-9]|8[5-9]|90)|8(?:09|2[89]|3\\d|4[0-24-689]|5[014]|8[02])|9(?:0[5-9]|1[0135-8]|2[036-9]|3[35-79]|40|5[0457-9]|6[05-9]|7[04-9]|8[35-8]|9\\d))\\d{4}",,,,"2001234",,,[7]],[,,"(?:1[16]1|21[89]|6\\d{3}|8(?:1[01]|7[23]))\\d{4}",
	,,,"61234567",,,[7,8]],[,,"800\\d{4,5}|(?:00800|800\\d)\\d{6}",,,,"8001234"],[,,"(?:8(?:22|55|60|7[78]|86)|9(?:00|81))\\d{4}",,,,"8601234",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"PA",507,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1-$2",["[1-57-9]"]],[,"(\\d{4})(\\d{4})","$1-$2",["[68]"]],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PE:[,[,,"(?:[14-8]|9\\d)\\d{7}",,,,,,,[8,9],[6,7]],[,,"(?:(?:4[34]|5[14])[0-8]\\d|7(?:173|3[0-8]\\d)|8(?:10[05689]|6(?:0[06-9]|1[6-9]|29)|7(?:0[569]|[56]0)))\\d{4}|(?:1[0-8]|4[12]|5[236]|6[1-7]|7[246]|8[2-4])\\d{6}",
	,,,"11234567",,,[8],[6,7]],[,,"9\\d{8}",,,,"912345678",,,[9]],[,,"800\\d{5}",,,,"80012345",,,[8]],[,,"805\\d{5}",,,,"80512345",,,[8]],[,,"801\\d{5}",,,,"80112345",,,[8]],[,,"80[24]\\d{5}",,,,"80212345",,,[8]],[,,,,,,,,,[-1]],"PE",51,"00|19(?:1[124]|77|90)00","0"," Anexo ",,"0",,"00",,[[,"(\\d{3})(\\d{5})","$1 $2",["80"],"(0$1)"],[,"(\\d)(\\d{7})","$1 $2",["1"],"(0$1)"],[,"(\\d{2})(\\d{6})","$1 $2",["[4-8]"],"(0$1)"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],
	[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PF:[,[,,"4\\d{5}(?:\\d{2})?|8\\d{7,8}",,,,,,,[6,8,9]],[,,"4(?:0[4-689]|9[4-68])\\d{5}",,,,"40412345",,,[8]],[,,"8[7-9]\\d{6}",,,,"87123456",,,[8]],[,,"80[0-5]\\d{6}",,,,"800012345",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"499\\d{5}",,,,"49901234",,,[8]],"PF",689,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["44"]],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["4|8[7-9]"]],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]]],
	,[,,,,,,,,,[-1]],,,[,,"44\\d{4}",,,,,,,[6]],[,,"44\\d{4}",,,,"440123",,,[6]],,,[,,,,,,,,,[-1]]],PG:[,[,,"(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}",,,,,,,[7,8]],[,,"(?:(?:3[0-2]|4[257]|5[34]|9[78])\\d|64[1-9]|85[02-46-9])\\d{4}",,,,"3123456",,,[7]],[,,"(?:7\\d|8[1-38])\\d{6}",,,,"70123456",,,[8]],[,,"180\\d{4}",,,,"1801234",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"2(?:0[0-57]|7[568])\\d{4}",,,,"2751234",,,[7]],"PG",675,"00|140[1-3]",,,,,,"00",,[[,"(\\d{3})(\\d{4})","$1 $2",
	["18|[2-69]|85"]],[,"(\\d{4})(\\d{4})","$1 $2",["[78]"]]],,[,,"27[01]\\d{4}",,,,"2700123",,,[7]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PH:[,[,,"(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}",,,,,,,[6,8,9,10,11,12,13],[4,5,7]],[,,"(?:(?:2[3-8]|3[2-68]|4[2-9]|5[2-6]|6[2-58]|7[24578])\\d{3}|88(?:22\\d\\d|42))\\d{4}|(?:2|8[2-8]\\d\\d)\\d{5}",,,,"232345678",,,[6,8,9,10],[4,5,7]],[,,"(?:8(?:1[37]|9[5-8])|9(?:0[5-9]|1[0-24-9]|[235-7]\\d|4[2-9]|8[135-9]|9[1-9]))\\d{7}",,,,"9051234567",,,
	[10]],[,,"1800\\d{7,9}",,,,"180012345678",,,[11,12,13]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"PH",63,"00","0",,,"0",,,,[[,"(\\d)(\\d{5})","$1 $2",["2"],"(0$1)"],[,"(\\d{4})(\\d{4,6})","$1 $2",["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2","3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"],"(0$1)"],[,"(\\d{5})(\\d{4})","$1 $2",["346|4(?:27|9[35])|883","3469|4(?:279|9(?:30|56))|8834"],
	"(0$1)"],[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2"],"(0$1)"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[3-7]|8[2-8]"],"(0$1)"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]"],"0$1"],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]],[,"(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})","$1 $2 $3 $4",["1"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PK:[,[,,"122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}",
	,,,,,,[8,9,10,11,12],[5,6,7]],[,,"(?:(?:21|42)[2-9]|58[126])\\d{7}|(?:2[25]|4[0146-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]\\d{6,7}|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8]))[2-9]\\d{5,6}",,,,"2123456789",,,[9,10],[5,6,7,8]],[,,"3(?:[0-247]\\d|3[0-79]|55|64)\\d{7}",,,,"3012345678",,,[10]],[,,"800\\d{5}(?:\\d{3})?",,,,"80012345",,,[8,11]],[,,"900\\d{5}",,,,"90012345",,,[8]],[,,,,,,,,,[-1]],[,,"122\\d{6}",
	,,,"122044444",,,[9]],[,,,,,,,,,[-1]],"PK",92,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3})(\\d{2,7})","$1 $2 $3",["[89]0"],"0$1"],[,"(\\d{4})(\\d{5})","$1 $2",["1"]],[,"(\\d{3})(\\d{6,7})","$1 $2",["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])","9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"],
	"(0$1)"],[,"(\\d{2})(\\d{7,8})","$1 $2",["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"],"(0$1)"],[,"(\\d{5})(\\d{5})","$1 $2",["58"],"(0$1)"],[,"(\\d{3})(\\d{7})","$1 $2",["3"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"],"(0$1)"],[,"(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["[24-9]"],"(0$1)"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"(?:2(?:[125]|3[2358]|4[2-4]|9[2-8])|4(?:[0-246-9]|5[3479])|5(?:[1-35-7]|4[2-467])|6(?:0[468]|[1-8])|7(?:[14]|2[236])|8(?:[16]|2[2-689]|3[23578]|4[3478]|5[2356])|9(?:1|22|3[27-9]|4[2-6]|6[3569]|9[2-7]))111\\d{6}",
	,,,"21111825888",,,[11,12]],,,[,,,,,,,,,[-1]]],PL:[,[,,"(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}",,,,,,,[6,7,8,9,10]],[,,"47\\d{7}|(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])(?:[02-9]\\d{6}|1(?:[0-8]\\d{5}|9\\d{3}(?:\\d{2})?))",,,,"123456789",,,[7,9]],[,,"21(?:1[013-5]|2\\d)\\d{5}|(?:45|5[0137]|6[069]|7[2389]|88)\\d{7}",,,,"512345678",,,[9]],[,,"800\\d{6,7}",,,,"800123456",,,[9,10]],[,,"70[01346-8]\\d{6}",,,,"701234567",,,[9]],[,,"801\\d{6}",,,,"801234567",
	,,[9]],[,,,,,,,,,[-1]],[,,"39\\d{7}",,,,"391234567",,,[9]],"PL",48,"00",,,,,,,,[[,"(\\d{5})","$1",["19"]],[,"(\\d{3})(\\d{3})","$1 $2",["11|20|64"]],[,"(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1","(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]],[,"(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["64"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
	"$1 $2 $3 $4",["1[2-8]|[2-7]|8[1-79]|9[145]"]],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["8"]]],,[,,"64\\d{4,7}",,,,"641234567",,,[6,7,8,9]],,,[,,,,,,,,,[-1]],[,,"804\\d{6}",,,,"804123456",,,[9]],,,[,,,,,,,,,[-1]]],PM:[,[,,"[45]\\d{5}|(?:708|80\\d)\\d{6}",,,,,,,[6,9]],[,,"(?:4[1-35-7]|5[01])\\d{4}",,,,"430123",,,[6]],[,,"(?:4[02-4]|5[056]|708[45][0-5])\\d{4}",,,,"551234"],[,,"80[0-5]\\d{6}",,,,"800012345",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"PM",508,"00","0",,,
	"0",,,,[[,"(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["[45]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["7"]],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PR:[,[,,"(?:[589]\\d\\d|787)\\d{7}",,,,,,,[10],[7]],[,,"(?:787|939)[2-9]\\d{6}",,,,"7872345678",,,,[7]],[,,"(?:787|939)[2-9]\\d{6}",,,,"7872345678",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"900[2-9]\\d{6}",,,,"9002345678"],[,,
	,,,,,,,[-1]],[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"PR",1,"011","1",,,"1",,,1,,,[,,,,,,,,,[-1]],,"787|939",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PS:[,[,,"[2489]2\\d{6}|(?:1\\d|5)\\d{8}",,,,,,,[8,9,10],[7]],[,,"(?:22[2-47-9]|42[45]|82[014-68]|92[3569])\\d{5}",
	,,,"22234567",,,[8],[7]],[,,"5[69]\\d{7}",,,,"599123456",,,[9]],[,,"1800\\d{6}",,,,"1800123456",,,[10]],[,,,,,,,,,[-1]],[,,"1700\\d{6}",,,,"1700123456",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"PS",970,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2489]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["5"],"0$1"],[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PT:[,[,,"1693\\d{5}|(?:[26-9]\\d|30)\\d{7}",,,,,,,[9]],
	[,,"2(?:[12]\\d|3[1-689]|4[1-59]|[57][1-9]|6[1-35689]|8[1-69]|9[1256])\\d{6}",,,,"212345678"],[,,"6(?:[06]92(?:30|9\\d)|[35]92(?:[049]\\d|3[034]))\\d{3}|(?:(?:16|6[0356])93|9(?:[1-36]\\d\\d|480))\\d{5}",,,,"912345678"],[,,"80[02]\\d{6}",,,,"800123456"],[,,"(?:6(?:0[178]|4[68])\\d|76(?:0[1-57]|1[2-47]|2[237]))\\d{5}",,,,"760123456"],[,,"80(?:8\\d|9[1579])\\d{5}",,,,"808123456"],[,,"884[0-4689]\\d{5}",,,,"884123456"],[,,"30\\d{7}",,,,"301234567"],"PT",351,"00",,,,,,,,[[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",
	["2[12]"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["16|[236-9]"]]],,[,,"6(?:222\\d|8988)\\d{4}",,,,"622212345"],,,[,,,,,,,,,[-1]],[,,"70(?:38[01]|596|(?:7\\d|8[17])\\d)\\d{4}",,,,"707123456"],,,[,,"600\\d{6}|6[06]92(?:0\\d|3[349]|49)\\d{3}",,,,"600110000"]],PW:[,[,,"(?:[24-8]\\d\\d|345|900)\\d{4}",,,,,,,[7]],[,,"(?:2(?:55|77)|345|488|5(?:35|44|87)|6(?:22|54|79)|7(?:33|47)|8(?:24|55|76)|900)\\d{4}",,,,"2771234"],[,,"(?:(?:46|83)[0-5]|6[2-4689]0)\\d{4}|(?:45|77|88)\\d{5}",,,,"6201234"],[,,,,,,,,,[-1]],
	[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"PW",680,"01[12]",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[2-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PY:[,[,,"59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}",,,,,,,[6,7,8,9,10,11],[5]],[,,"(?:[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36])\\d{5,7}|(?:2(?:2[4-68]|[4-68]\\d|7[15]|9[1-5])|3(?:18|3[167]|4[2357]|51|[67]\\d)|4(?:3[12]|5[13]|9[1-47])|5(?:[1-4]\\d|5[02-4])|6(?:3[1-3]|44|7[1-8])|7(?:4[0-4]|5\\d|6[1-578]|75|8[0-8])|858)\\d{5,6}",
	,,,"212345678",,,[7,8,9],[5,6]],[,,"9(?:51|6[129]|7[1-6]|8[1-7]|9[1-5])\\d{6}",,,,"961456789",,,[9]],[,,"9800\\d{5,7}",,,,"98000123456",,,[9,10,11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"8700[0-4]\\d{4}",,,,"870012345",,,[9]],"PY",595,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3,6})","$1 $2",["[2-9]0"],"0$1"],[,"(\\d{2})(\\d{5})","$1 $2",["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"],"(0$1)"],[,"(\\d{3})(\\d{4,5})","$1 $2",["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"],"(0$1)"],[,"(\\d{2})(\\d{3})(\\d{3,4})",
	"$1 $2 $3",["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"],"(0$1)"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["87"]],[,"(\\d{3})(\\d{6})","$1 $2",["9(?:[5-79]|8[1-7])"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[2-8]"],"0$1"],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["9"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"[2-9]0\\d{4,7}",,,,"201234567",,,[6,7,8,9]],,,[,,,,,,,,,[-1]]],QA:[,[,,"800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}",,,,,,,[7,8,9,11]],[,,"4(?:1111|2022)\\d{3}|4(?:[04]\\d\\d|14[0-6]|999)\\d{4}",
	,,,"44123456",,,[8]],[,,"[35-7]\\d{7}",,,,"33123456",,,[8]],[,,"800\\d{4}|(?:0080[01]|800)\\d{6}",,,,"8001234",,,[7,9,11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"QA",974,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["2[16]|8"]],[,"(\\d{4})(\\d{4})","$1 $2",["[3-7]"]]],,[,,"2[16]\\d{5}",,,,"2123456",,,[7]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],RE:[,[,,"(?:26|[689]\\d)\\d{7}",,,,,,,[9]],[,,"26(?:2\\d\\d|3(?:0\\d|1[0-6]))\\d{4}",,,,"262161234"],[,,"69(?:2\\d\\d|3(?:[06][0-6]|1[013]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))\\d{4}",
	,,,"692123456"],[,,"80\\d{7}",,,,"801234567"],[,,"89[1-37-9]\\d{6}",,,,"891123456"],[,,"8(?:1[019]|2[0156]|84|90)\\d{6}",,,,"810123456"],[,,,,,,,,,[-1]],[,,"9(?:399[0-3]|479[0-5]|76(?:2[278]|3[0-37]))\\d{4}",,,,"939901234"],"RE",262,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2689]"],"0$1"]],,[,,,,,,,,,[-1]],1,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],RO:[,[,,"(?:[236-8]\\d|90)\\d{7}|[23]\\d{5}",,,,,,,[6,9]],[,,"[23][13-6]\\d{7}|(?:2(?:19\\d|[3-6]\\d9)|31\\d\\d)\\d\\d",
	,,,"211234567"],[,,"(?:630|702)0\\d{5}|(?:6(?:[04]0|2\\d)|7(?:0[013-9]|1[0-3]|[2-7]\\d|8[03-8]|9[0-39]))\\d{6}",,,,"712034567",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"90[0136]\\d{6}",,,,"900123456",,,[9]],[,,"801\\d{6}",,,,"801123456",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"RO",40,"00","0"," int ",,"0",,,,[[,"(\\d{3})(\\d{3})","$1 $2",["2[3-6]","2[3-6]\\d9"],"0$1"],[,"(\\d{2})(\\d{4})","$1 $2",["219|31"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[23]1"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})",
	"$1 $2 $3",["[236-9]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"(?:37\\d|80[578])\\d{6}",,,,"372123456",,,[9]],,,[,,,,,,,,,[-1]]],RS:[,[,,"38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}",,,,,,,[6,7,8,9,10,11,12],[4,5]],[,,"(?:11[1-9]\\d|(?:2[389]|39)(?:0[2-9]|[2-9]\\d))\\d{3,8}|(?:1[02-9]|2[0-24-7]|3[0-8])[2-9]\\d{4,9}",,,,"10234567",,,[7,8,9,10,11,12],[4,5,6]],[,,"6(?:[0-689]|7\\d)\\d{6,7}",,,,"601234567",,,[8,9,10]],[,,"800\\d{3,9}",,
	,,"80012345"],[,,"(?:78\\d|90[0169])\\d{3,7}",,,,"90012345",,,[6,7,8,9,10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"RS",381,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3,9})","$1 $2",["(?:2[389]|39)0|[7-9]"],"0$1"],[,"(\\d{2})(\\d{5,10})","$1 $2",["[1-36]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"7[06]\\d{4,10}",,,,"700123456"],,,[,,,,,,,,,[-1]]],RU:[,[,,"8\\d{13}|[347-9]\\d{9}",,,,,,,[10,14],[7]],[,,"(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15]|6[1-35-79]|7[1-37-9]))\\d{7}",
	,,,"3011234567",,,[10],[7]],[,,"9\\d{9}",,,,"9123456789",,,[10]],[,,"8(?:0[04]|108\\d{3})\\d{7}",,,,"8001234567"],[,,"80[39]\\d{7}",,,,"8091234567",,,[10]],[,,,,,,,,,[-1]],[,,"808\\d{7}",,,,"8081234567",,,[10]],[,,,,,,,,,[-1]],"RU",7,"810","8",,,"8",,"8~10",,[[,"(\\d{3})(\\d{2})(\\d{2})","$1-$2-$3",["[0-79]"]],[,"(\\d{4})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["7(?:1[0-8]|2[1-9])","7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))","7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"],
	"8 ($1)",,1],[,"(\\d{5})(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["7(?:1[0-68]|2[1-9])","7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))","7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"],"8 ($1)",,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"8 ($1)",,1],[,"(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[349]|8(?:[02-7]|1[1-8])"],
	"8 ($1)",,1],[,"(\\d{4})(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3 $4",["8"],"8 ($1)"]],[[,"(\\d{4})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["7(?:1[0-8]|2[1-9])","7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))","7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"],"8 ($1)",,1],[,"(\\d{5})(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["7(?:1[0-68]|2[1-9])","7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))","7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"],
	"8 ($1)",,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"8 ($1)",,1],[,"(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[349]|8(?:[02-7]|1[1-8])"],"8 ($1)",,1],[,"(\\d{4})(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3 $4",["8"],"8 ($1)"]],[,,,,,,,,,[-1]],1,"3[04-689]|[489]",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],RW:[,[,,"(?:06|[27]\\d\\d|[89]00)\\d{6}",,,,,,,[8,9]],[,,"(?:06|2[23568]\\d)\\d{6}",,,,"250123456"],[,,"7[237-9]\\d{7}",,,,"720123456",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,
	,"900\\d{6}",,,,"900123456",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"RW",250,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["0"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["2"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[7-9]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SA:[,[,,"92\\d{7}|(?:[15]|8\\d)\\d{8}",,,,,,,[9,10],[7]],[,,"1(?:1\\d|2[24-8]|3[35-8]|4[3-68]|6[2-5]|7[235-7])\\d{6}",,,,"112345678",,,[9],[7]],[,,"579[01]\\d{5}|5(?:[013-689]\\d|7[0-8])\\d{6}",
	,,,"512345678",,,[9]],[,,"800\\d{7}",,,,"8001234567",,,[10]],[,,"925\\d{6}",,,,"925012345",,,[9]],[,,"920\\d{6}",,,,"920012345",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"SA",966,"00","0",,,"0",,,,[[,"(\\d{4})(\\d{5})","$1 $2",["9"]],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["5"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["81"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"811\\d{7}",,,,"8110123456",
	,,[10]],,,[,,,,,,,,,[-1]]],SB:[,[,,"[6-9]\\d{6}|[1-6]\\d{4}",,,,,,,[5,7]],[,,"(?:1[4-79]|[23]\\d|4[0-2]|5[03]|6[0-37])\\d{3}",,,,"40123",,,[5]],[,,"48\\d{3}|(?:(?:6[89]|7[1-9]|8[4-9])\\d|9(?:1[2-9]|2[013-9]|3[0-2]|[46]\\d|5[0-46-9]|7[0-689]|8[0-79]|9[0-8]))\\d{4}",,,,"7421234"],[,,"1[38]\\d{3}",,,,"18123",,,[5]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"5[12]\\d{3}",,,,"51123",,,[5]],"SB",677,"0[01]",,,,,,,,[[,"(\\d{2})(\\d{5})","$1 $2",["6[89]|7|8[4-9]|9(?:[1-8]|9[0-8])"]]],,[,,,,,,,,,
	[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SC:[,[,,"(?:[2489]\\d|64)\\d{5}",,,,,,,[7]],[,,"4[2-46]\\d{5}",,,,"4217123"],[,,"2[125-8]\\d{5}",,,,"2510123"],[,,"800[08]\\d{3}",,,,"8000000"],[,,"85\\d{5}",,,,"8512345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"971\\d{4}|(?:64|95)\\d{5}",,,,"6412345"],"SC",248,"010|0[0-2]",,,,,,"00",,[[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[246]|9[57]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SD:[,[,,"[19]\\d{8}",,,,,,,[9]],[,
	,"1(?:5\\d|8[35-7])\\d{6}",,,,"153123456"],[,,"(?:1[0-2]|9[0-3569])\\d{7}",,,,"911231234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"SD",249,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[19]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SE:[,[,,"(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}",,,,,,,[6,7,8,9,10,12]],[,,"(?:(?:[12][136]|3[356]|4[0246]|6[03]|8\\d)\\d|90[1-9])\\d{4,6}|(?:1(?:2[0-35]|4[0-4]|5[0-25-9]|7[13-6]|[89]\\d)|2(?:2[0-7]|4[0136-8]|5[0138]|7[018]|8[01]|9[0-57])|3(?:0[0-4]|1\\d|2[0-25]|4[056]|7[0-2]|8[0-3]|9[023])|4(?:1[013-8]|3[0135]|5[14-79]|7[0-246-9]|8[0156]|9[0-689])|5(?:0[0-6]|[15][0-5]|2[0-68]|3[0-4]|4\\d|6[03-5]|7[013]|8[0-79]|9[01])|6(?:1[1-3]|2[0-4]|4[02-57]|5[0-37]|6[0-3]|7[0-2]|8[0247]|9[0-356])|9(?:1[0-68]|2\\d|3[02-5]|4[0-3]|5[0-4]|[68][01]|7[0135-8]))\\d{5,6}",
	,,,"8123456",,,[7,8,9]],[,,"7[02369]\\d{7}",,,,"701234567",,,[9]],[,,"20\\d{4,7}",,,,"20123456",,,[6,7,8,9]],[,,"649\\d{6}|99[1-59]\\d{4}(?:\\d{3})?|9(?:00|39|44)[1-8]\\d{3,6}",,,,"9001234567",,,[7,8,9,10]],[,,"77[0-7]\\d{6}",,,,"771234567",,,[9]],[,,"75[1-8]\\d{6}",,,,"751234567",,,[9]],[,,,,,,,,,[-1]],"SE",46,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{2,3})(\\d{2})","$1-$2 $3",["20"],"0$1"],[,"(\\d{3})(\\d{4})","$1-$2",["9(?:00|39|44|9)"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2})","$1-$2 $3",["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"],
	"0$1"],[,"(\\d)(\\d{2,3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["8"],"0$1"],[,"(\\d{3})(\\d{2,3})(\\d{2})","$1-$2 $3",["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"],"0$1"],[,"(\\d{3})(\\d{2,3})(\\d{3})","$1-$2 $3",["9(?:00|39|44)"],"0$1"],[,"(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["10|7"],"0$1"],[,"(\\d)(\\d{3})(\\d{3})(\\d{2})",
	"$1-$2 $3 $4",["8"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1-$2 $3 $4",["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{3})","$1-$2 $3 $4",["9"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1-$2 $3 $4 $5",["[26]"],"0$1"]],[[,"(\\d{2})(\\d{2,3})(\\d{2})","$1 $2 $3",["20"]],[,"(\\d{3})(\\d{4})","$1 $2",["9(?:00|39|44|9)"]],[,"(\\d{2})(\\d{3})(\\d{2})","$1 $2 $3",["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"]],[,"(\\d)(\\d{2,3})(\\d{2})(\\d{2})",
	"$1 $2 $3 $4",["8"]],[,"(\\d{3})(\\d{2,3})(\\d{2})","$1 $2 $3",["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"]],[,"(\\d{3})(\\d{2,3})(\\d{3})","$1 $2 $3",["9(?:00|39|44)"]],[,"(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"]],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["10|7"]],[,"(\\d)(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3 $4",["8"]],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
	"$1 $2 $3 $4",["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"]],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["9"]],[,"(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[26]"]]],[,,"74[02-9]\\d{6}",,,,"740123456",,,[9]],,,[,,,,,,,,,[-1]],[,,"10[1-8]\\d{6}",,,,"102345678",,,[9]],,,[,,"(?:25[245]|67[3-68])\\d{9}",,,,"254123456789",,,[12]]],SG:[,[,,"(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}",,,,,,,[8,10,11]],[,,"662[0-24-9]\\d{4}|6(?:[0-578]\\d|6[013-57-9]|9[0-35-9])\\d{5}",
	,,,"61234567",,,[8]],[,,"8(?:09[0-68]|95[0-2])\\d{4}|(?:8(?:0[1-8]|[1-8]\\d|9[0-4])|9[0-8]\\d)\\d{5}",,,,"81234567",,,[8]],[,,"(?:18|8)00\\d{7}",,,,"18001234567",,,[10,11]],[,,"1900\\d{7}",,,,"19001234567",,,[11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"(?:3[12]\\d|666)\\d{5}",,,,"31234567",,,[8]],"SG",65,"0[0-3]\\d",,,,,,,,[[,"(\\d{4,5})","$1",["1[013-9]|77","1(?:[013-8]|9(?:0[1-9]|[1-9]))|77"]],[,"(\\d{4})(\\d{4})","$1 $2",["[369]|8(?:0[1-9]|[1-9])"]],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]],
	[,"(\\d{4})(\\d{4})(\\d{3})","$1 $2 $3",["7"]],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]]],[[,"(\\d{4})(\\d{4})","$1 $2",["[369]|8(?:0[1-9]|[1-9])"]],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]],[,"(\\d{4})(\\d{4})(\\d{3})","$1 $2 $3",["7"]],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"7000\\d{7}",,,,"70001234567",,,[11]],,,[,,,,,,,,,[-1]]],SH:[,[,,"(?:[256]\\d|8)\\d{3}",,,,,,,[4,5]],[,,"2(?:[0-57-9]\\d|6[4-9])\\d\\d",,,,"22158"],[,,"[56]\\d{4}",,,,"51234",
	,,[5]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"262\\d\\d",,,,"26212",,,[5]],"SH",290,"00",,,,,,,,,,[,,,,,,,,,[-1]],1,"[256]",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SI:[,[,,"[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}",,,,,,,[5,6,7,8]],[,,"(?:[1-357][2-8]|4[24-8])\\d{6}",,,,"12345678",,,[8],[7]],[,,"65(?:[178]\\d|5[56]|6[01])\\d{4}|(?:[37][01]|4[0139]|51|6[489])\\d{6}",,,,"31234567",,,[8]],[,,"80\\d{4,6}",,,,"80123456",,,[6,7,8]],[,,"89[1-3]\\d{2,5}|90\\d{4,6}",,,,"90123456"],
	[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"(?:59\\d\\d|8(?:1(?:[67]\\d|8[0-589])|2(?:0\\d|2[0-37-9]|8[0-2489])|3[389]\\d))\\d{4}",,,,"59012345",,,[8]],"SI",386,"00|10(?:22|66|88|99)","0",,,"0",,"00",,[[,"(\\d{2})(\\d{3,6})","$1 $2",["8[09]|9"],"0$1"],[,"(\\d{3})(\\d{5})","$1 $2",["59|8"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[37][01]|4[0139]|51|6"],"0$1"],[,"(\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[1-57]"],"(0$1)"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],
	SJ:[,[,,"0\\d{4}|(?:[489]\\d|79)\\d{6}",,,,,,,[5,8]],[,,"79\\d{6}",,,,"79123456",,,[8]],[,,"(?:4[015-8]|9\\d)\\d{6}",,,,"41234567",,,[8]],[,,"80[01]\\d{5}",,,,"80012345",,,[8]],[,,"82[09]\\d{5}",,,,"82012345",,,[8]],[,,"810(?:0[0-6]|[2-8]\\d)\\d{3}",,,,"81021234",,,[8]],[,,"880\\d{5}",,,,"88012345",,,[8]],[,,"85[0-5]\\d{5}",,,,"85012345",,,[8]],"SJ",47,"00",,,,,,,,,,[,,,,,,,,,[-1]],,"79",[,,,,,,,,,[-1]],[,,"(?:0[2-9]|81(?:0(?:0[7-9]|1\\d)|5\\d\\d))\\d{3}",,,,"02000"],,,[,,"81[23]\\d{5}",,,,"81212345",
	,,[8]]],SK:[,[,,"[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}",,,,,,,[6,7,9]],[,,"(?:2(?:16|[2-9]\\d{3})|(?:(?:[3-5][1-8]\\d|819)\\d|601[1-5])\\d)\\d{4}|(?:2|[3-5][1-8])1[67]\\d{3}|[3-5][1-8]16\\d\\d",,,,"221234567"],[,,"909[1-9]\\d{5}|9(?:0[1-8]|1[0-24-9]|4[03-57-9]|5\\d)\\d{6}",,,,"912123456",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"9(?:00|[78]\\d)\\d{6}",,,,"900123456",,,[9]],[,,"8[5-9]\\d{7}",,,,"850123456",,,[9]],[,,,,,,,,,[-1]],[,,"6(?:02|5[0-4]|9[0-6])\\d{6}",,,,"690123456",,,[9]],"SK",421,
	"00","0",,,"0",,,,[[,"(\\d)(\\d{2})(\\d{3,4})","$1 $2 $3",["21"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{2,3})","$1 $2 $3",["[3-5][1-8]1","[3-5][1-8]1[67]"],"0$1"],[,"(\\d{4})(\\d{3})","$1 $2",["909","9090"],"0$1"],[,"(\\d)(\\d{3})(\\d{3})(\\d{2})","$1/$2 $3 $4",["2"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[689]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1/$2 $3 $4",["[3-5]"],"0$1"]],[[,"(\\d)(\\d{2})(\\d{3,4})","$1 $2 $3",["21"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{2,3})","$1 $2 $3",["[3-5][1-8]1",
	"[3-5][1-8]1[67]"],"0$1"],[,"(\\d)(\\d{3})(\\d{3})(\\d{2})","$1/$2 $3 $4",["2"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[689]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1/$2 $3 $4",["[3-5]"],"0$1"]],[,,"9090\\d{3}",,,,"9090123",,,[7]],,,[,,"9090\\d{3}|(?:602|8(?:00|[5-9]\\d)|9(?:00|[78]\\d))\\d{6}",,,,,,,[7,9]],[,,"96\\d{7}",,,,"961234567",,,[9]],,,[,,,,,,,,,[-1]]],SL:[,[,,"(?:[237-9]\\d|66)\\d{6}",,,,,,,[8],[6]],[,,"22[2-4][2-9]\\d{4}",,,,"22221234",,,,[6]],[,,"(?:25|3[0-5]|66|7[2-9]|8[08]|9[09])\\d{6}",
	,,,"25123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"SL",232,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{6})","$1 $2",["[236-9]"],"(0$1)"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SM:[,[,,"(?:0549|[5-7]\\d)\\d{6}",,,,,,,[8,10],[6]],[,,"0549(?:8[0157-9]|9\\d)\\d{4}",,,,"0549886377",,,[10],[6]],[,,"6[16]\\d{6}",,,,"66661212",,,[8]],[,,,,,,,,,[-1]],[,,"7[178]\\d{6}",,,,"71123456",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"5[158]\\d{6}",
	,,,"58001110",,,[8]],"SM",378,"00",,,,"([89]\\d{5})$","0549$1",,,[[,"(\\d{6})","$1",["[89]"]],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-7]"]],[,"(\\d{4})(\\d{6})","$1 $2",["0"]]],[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-7]"]],[,"(\\d{4})(\\d{6})","$1 $2",["0"]]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SN:[,[,,"(?:[378]\\d|93)\\d{7}",,,,,,,[9]],[,,"3(?:0(?:1[0-2]|80)|282|3(?:8[1-9]|9[3-9])|611)\\d{5}",,,,"301012345"],[,,"7(?:(?:[06-8]\\d|21|90)\\d|5(?:01|[19]0|25|[38]3|[4-7]\\d))\\d{5}",
	,,,"701234567"],[,,"800\\d{6}",,,,"800123456"],[,,"88[4689]\\d{6}",,,,"884123456"],[,,"81[02468]\\d{6}",,,,"810123456"],[,,,,,,,,,[-1]],[,,"(?:3(?:392|9[01]\\d)\\d|93(?:3[13]0|929))\\d{4}",,,,"933301234"],"SN",221,"00",,,,,,,,[[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[379]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SO:[,[,,"[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}",,,,,,,[6,7,8,9]],[,,
	"(?:1\\d|2[0-79]|3[0-46-8]|4[0-7]|5[57-9])\\d{5}|(?:[134]\\d|8[125])\\d{4}",,,,"4012345",,,[6,7]],[,,"(?:(?:15|(?:3[59]|4[89]|6\\d|7[79]|8[08])\\d|9(?:0\\d|[2-9]))\\d|2(?:4\\d|8))\\d{5}|(?:[67]\\d\\d|904)\\d{5}",,,,"71123456",,,[7,8,9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"SO",252,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{4})","$1 $2",["8[125]"]],[,"(\\d{6})","$1",["[134]"]],[,"(\\d)(\\d{6})","$1 $2",["[15]|2[0-79]|3[0-46-8]|4[0-7]"]],[,"(\\d)(\\d{7})","$1 $2",
	["(?:2|90)4|[67]"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[348]|64|79|90"]],[,"(\\d{2})(\\d{5,7})","$1 $2",["1|28|6[0-35-9]|77|9[2-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SR:[,[,,"(?:[2-5]|68|[78]\\d)\\d{5}",,,,,,,[6,7]],[,,"(?:2[1-3]|3[0-7]|(?:4|68)\\d|5[2-58])\\d{4}",,,,"211234"],[,,"(?:7[124-7]|8[124-9])\\d{5}",,,,"7412345",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"56\\d{4}",,,,"561234",,,[6]],"SR",597,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})",
	"$1-$2-$3",["56"]],[,"(\\d{3})(\\d{3})","$1-$2",["[2-5]"]],[,"(\\d{3})(\\d{4})","$1-$2",["[6-8]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SS:[,[,,"[19]\\d{8}",,,,,,,[9]],[,,"1[89]\\d{7}",,,,"181234567"],[,,"(?:12|9[1257-9])\\d{7}",,,,"977123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"SS",211,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[19]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,
	,,,,,,[-1]]],ST:[,[,,"(?:22|9\\d)\\d{5}",,,,,,,[7]],[,,"22\\d{5}",,,,"2221234"],[,,"900[5-9]\\d{3}|9(?:0[1-9]|[89]\\d)\\d{4}",,,,"9812345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"ST",239,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[29]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SV:[,[,,"[267]\\d{7}|(?:80\\d|900)\\d{4}(?:\\d{4})?",,,,,,,[7,8,11]],[,,"2(?:79(?:0[0347-9]|[1-9]\\d)|89(?:0[024589]|[1-9]\\d))\\d{3}|2(?:[1-69]\\d|[78][0-8])\\d{5}",
	,,,"21234567",,,[8]],[,,"[67]\\d{7}",,,,"70123456",,,[8]],[,,"800\\d{8}|80[01]\\d{4}",,,,"8001234",,,[7,11]],[,,"900\\d{4}(?:\\d{4})?",,,,"9001234",,,[7,11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"SV",503,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[89]"]],[,"(\\d{4})(\\d{4})","$1 $2",["[267]"]],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["[89]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SX:[,[,,"7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"7215(?:4[2-8]|8[239]|9[056])\\d{4}",
	,,,"7215425678",,,,[7]],[,,"7215(?:1[02]|2\\d|5[034679]|8[014-8])\\d{4}",,,,"7215205678",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"SX",1,"011","1",,,"(5\\d{6})$|1",
	"721$1",,,,,[,,,,,,,,,[-1]],,"721",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SY:[,[,,"[1-39]\\d{8}|[1-5]\\d{7}",,,,,,,[8,9],[6,7]],[,,"21\\d{6,7}|(?:1(?:[14]\\d|[2356])|2[235]|3(?:[13]\\d|4)|4[134]|5[1-3])\\d{6}",,,,"112345678",,,,[6,7]],[,,"9[1-689]\\d{7}",,,,"944567890",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"SY",963,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-5]"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"],
	"0$1",,1]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SZ:[,[,,"0800\\d{4}|(?:[237]\\d|900)\\d{6}",,,,,,,[8,9]],[,,"[23][2-5]\\d{6}",,,,"22171234",,,[8]],[,,"7[6-9]\\d{6}",,,,"76123456",,,[8]],[,,"0800\\d{4}",,,,"08001234",,,[8]],[,,"900\\d{6}",,,,"900012345",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"70\\d{6}",,,,"70012345",,,[8]],"SZ",268,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2",["[0237]"]],[,"(\\d{5})(\\d{4})","$1 $2",["9"]]],,[,,,,,,,,,[-1]],,,[,,"0800\\d{4}",,,,,,,
	[8]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TA:[,[,,"8\\d{3}",,,,,,,[4]],[,,"8\\d{3}",,,,"8999"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TA",290,"00",,,,,,,,,,[,,,,,,,,,[-1]],,"8",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TC:[,[,,"(?:[58]\\d\\d|649|900)\\d{7}",,,,,,,[10],[7]],[,,"649(?:266|712|9(?:4\\d|50))\\d{4}",,,,"6497121234",,,,[7]],[,,"649(?:2(?:3[129]|4[1-79])|3\\d\\d|4[34][1-3])\\d{4}",,,,"6492311234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",
	,,,"8002345678"],[,,"900[2-9]\\d{6}",,,,"9002345678"],[,,,,,,,,,[-1]],[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,"649(?:71[01]|966)\\d{4}",,,,"6497101234",,,,[7]],"TC",1,"011","1",,,"([2-479]\\d{6})$|1","649$1",,,,,[,,,,,,,,,[-1]],,"649",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],
	TD:[,[,,"(?:22|[689]\\d|77)\\d{6}",,,,,,,[8]],[,,"22(?:[37-9]0|5[0-5]|6[89])\\d{4}",,,,"22501234"],[,,"(?:[69]\\d|77|8[56])\\d{6}",,,,"63012345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TD",235,"00|16",,,,,,"00",,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[26-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TG:[,[,,"[279]\\d{7}",,,,,,,[8]],[,,"2(?:2[2-7]|3[23]|4[45]|55|6[67]|77)\\d{5}",,,,"22212345"],[,,"(?:7[019]|9[0-36-9])\\d{6}",
	,,,"90112345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TG",228,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[279]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TH:[,[,,"(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}",,,,,,,[8,9,10,13]],[,,"(?:1[0689]|2\\d|3[2-9]|4[2-5]|5[2-6]|7[3-7])\\d{6}",,,,"21234567",,,[8]],[,,"67(?:1[0-8]|2[4-7])\\d{5}|(?:14|6[1-6]|[89]\\d)\\d{7}",,,,"812345678",,,[9]],[,,"(?:001800\\d|1800)\\d{6}",
	,,,"1800123456",,,[10,13]],[,,"1900\\d{6}",,,,"1900123456",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"6[08]\\d{7}",,,,"601234567",,,[9]],"TH",66,"00[1-9]","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[13-9]"],"0$1"],[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TJ:[,[,,"[0-57-9]\\d{8}",,,,,,,[9],[3,5,6,7]],[,,"(?:3(?:1[3-5]|2[245]|3[12]|4[24-7]|5[25]|72)|4(?:46|74|87))\\d{6}",
	,,,"372123456",,,,[3,5,6,7]],[,,"(?:33[03-9]|4(?:1[18]|4[02-479])|81[1-9])\\d{6}|(?:0[0-57-9]|1[017]|2[02]|[34]0|5[05]|7[01578]|8[078]|9\\d)\\d{7}",,,,"917123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TJ",992,"810",,,,,,"8~10",,[[,"(\\d{6})(\\d)(\\d{2})","$1 $2 $3",["331","3317"]],[,"(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["44[02-479]|[34]7"]],[,"(\\d{4})(\\d)(\\d{4})","$1 $2 $3",["3(?:[1245]|3[12])"]],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[0-57-9]"]]],
	,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TK:[,[,,"[2-47]\\d{3,6}",,,,,,,[4,5,6,7]],[,,"(?:2[2-4]|[34]\\d)\\d{2,5}",,,,"3101"],[,,"7[2-4]\\d{2,5}",,,,"7290"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TK",690,"00",,,,,,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TL:[,[,,"7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}",,,,,,,[7,8]],[,,"(?:2[1-5]|3[1-9]|4[1-4])\\d{5}",,,,"2112345",,,[7]],[,,"7[2-8]\\d{6}",,,,"77212345",
	,,[8]],[,,"80\\d{5}",,,,"8012345",,,[7]],[,,"90\\d{5}",,,,"9012345",,,[7]],[,,,,,,,,,[-1]],[,,"70\\d{5}",,,,"7012345",,,[7]],[,,,,,,,,,[-1]],"TL",670,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[2-489]|70"]],[,"(\\d{4})(\\d{4})","$1 $2",["7"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TM:[,[,,"(?:[1-6]\\d|71)\\d{6}",,,,,,,[8]],[,,"(?:1(?:2\\d|3[1-9])|2(?:22|4[0-35-8])|3(?:22|4[03-9])|4(?:22|3[128]|4\\d|6[15])|5(?:22|5[7-9]|6[014-689]))\\d{5}",,,,"12345678"],[,,"(?:6\\d|71)\\d{6}",
	,,,"66123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TM",993,"810","8",,,"8",,"8~10",,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2-$3-$4",["12"],"(8 $1)"],[,"(\\d{3})(\\d)(\\d{2})(\\d{2})","$1 $2-$3-$4",["[1-5]"],"(8 $1)"],[,"(\\d{2})(\\d{6})","$1 $2",["[67]"],"8 $1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TN:[,[,,"[2-57-9]\\d{7}",,,,,,,[8]],[,,"81200\\d{3}|(?:3[0-2]|7\\d)\\d{6}",,,,"30010123"],[,,"3(?:001|[12]40)\\d{4}|(?:(?:[259]\\d|4[0-8])\\d|3(?:1[1-35]|6[0-4]|91))\\d{5}",
	,,,"20123456"],[,,"8010\\d{4}",,,,"80101234"],[,,"88\\d{6}",,,,"88123456"],[,,"8[12]10\\d{4}",,,,"81101234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TN",216,"00",,,,,,,,[[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2-57-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TO:[,[,,"(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}",,,,,,,[5,7]],[,,"(?:2\\d|3[0-8]|4[0-4]|50|6[09]|7[0-24-69]|8[05])\\d{3}",,,,"20123",,,[5]],[,,"(?:5(?:4[0-5]|5[4-6])|6(?:[09]\\d|3[02]|8[15-9])|(?:7\\d|8[46-9])\\d|999)\\d{4}",
	,,,"7715123",,,[7]],[,,"0800\\d{3}",,,,"0800222",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"55[0-37-9]\\d{4}",,,,"5510123",,,[7]],"TO",676,"00",,,,,,,,[[,"(\\d{2})(\\d{3})","$1-$2",["[2-4]|50|6[09]|7[0-24-69]|8[05]"]],[,"(\\d{4})(\\d{3})","$1 $2",["0"]],[,"(\\d{3})(\\d{4})","$1 $2",["[5-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TR:[,[,,"4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}",,,,,,,[7,10,12,13]],[,,"(?:2(?:[13][26]|[28][2468]|[45][268]|[67][246])|3(?:[13][28]|[24-6][2468]|[78][02468]|92)|4(?:[16][246]|[23578][2468]|4[26]))\\d{7}",
	,,,"2123456789",,,[10]],[,,"561(?:011|61\\d)\\d{4}|5(?:0[15-7]|1[06]|24|[34]\\d|5[1-59]|9[46])\\d{7}",,,,"5012345678",,,[10]],[,,"8(?:00\\d{7}(?:\\d{2,3})?|11\\d{7})",,,,"8001234567",,,[10,12,13]],[,,"(?:8[89]8|900)\\d{7}",,,,"9001234567",,,[10]],[,,,,,,,,,[-1]],[,,"592(?:21[12]|461)\\d{4}",,,,"5922121234",,,[10]],[,,"850\\d{7}",,,,"8500123456",,,[10]],"TR",90,"00","0",,,"0",,,,[[,"(\\d{3})(\\d)(\\d{3})","$1 $2 $3",["444"],,,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["512|8[01589]|90"],"0$1",,1],
	[,"(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["5(?:[0-59]|61)","5(?:[0-59]|61[06])","5(?:[0-59]|61[06]1)"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24][1-8]|3[1-9]"],"(0$1)",,1],[,"(\\d{3})(\\d{3})(\\d{6,7})","$1 $2 $3",["80"],"0$1",,1]],[[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["512|8[01589]|90"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["5(?:[0-59]|61)","5(?:[0-59]|61[06])","5(?:[0-59]|61[06]1)"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",
	["[24][1-8]|3[1-9]"],"(0$1)",,1],[,"(\\d{3})(\\d{3})(\\d{6,7})","$1 $2 $3",["80"],"0$1",,1]],[,,"512\\d{7}",,,,"5123456789",,,[10]],,,[,,"(?:444|811\\d{3})\\d{4}",,,,,,,[7,10]],[,,"444\\d{4}",,,,"4441444",,,[7]],,,[,,,,,,,,,[-1]]],TT:[,[,,"(?:[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"868(?:2(?:01|1[5-9]|[23]\\d|4[0-2])|6(?:0[7-9]|1[02-8]|2[1-9]|[3-69]\\d|7[0-79])|82[124])\\d{4}",,,,"8682211234",,,,[7]],[,,"868(?:(?:2[5-9]|3\\d)\\d|4(?:3[0-6]|[6-9]\\d)|6(?:20|78|8\\d)|7(?:0[1-9]|1[02-9]|[2-9]\\d))\\d{4}",
	,,,"8682911234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"900[2-9]\\d{6}",,,,"9002345678"],[,,,,,,,,,[-1]],[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"TT",1,"011","1",,,"([2-46-8]\\d{6})$|1","868$1",,,,,[,,,,,,,,,[-1]],,"868",[,,,,,,,,,[-1]],[,,
	,,,,,,,[-1]],,,[,,"868619\\d{4}",,,,"8686191234",,,,[7]]],TV:[,[,,"(?:2|7\\d\\d|90)\\d{4}",,,,,,,[5,6,7]],[,,"2[02-9]\\d{3}",,,,"20123",,,[5]],[,,"(?:7[01]\\d|90)\\d{4}",,,,"901234",,,[6,7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TV",688,"00",,,,,,,,[[,"(\\d{2})(\\d{3})","$1 $2",["2"]],[,"(\\d{2})(\\d{4})","$1 $2",["90"]],[,"(\\d{2})(\\d{5})","$1 $2",["7"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TW:[,[,,"[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}",
	,,,,,,[7,8,9,10,11]],[,,"(?:2[2-8]\\d|370|55[01]|7[1-9])\\d{6}|4(?:(?:0(?:0[1-9]|[2-48]\\d)|1[023]\\d)\\d{4,5}|(?:[239]\\d\\d|4(?:0[56]|12|49))\\d{5})|6(?:[01]\\d{7}|4(?:0[56]|12|24|4[09])\\d{4,5})|8(?:(?:2(?:3\\d|4[0-269]|[578]0|66)|36[24-9]|90\\d\\d)\\d{4}|4(?:0[56]|12|24|4[09])\\d{4,5})|(?:2(?:2(?:0\\d\\d|4(?:0[68]|[249]0|3[0-467]|5[0-25-9]|6[0235689]))|(?:3(?:[09]\\d|1[0-4])|(?:4\\d|5[0-49]|6[0-29]|7[0-5])\\d)\\d)|(?:(?:3[2-9]|5[2-8]|6[0-35-79]|8[7-9])\\d\\d|4(?:2(?:[089]\\d|7[1-9])|(?:3[0-4]|[78]\\d|9[01])\\d))\\d)\\d{3}",
	,,,"221234567",,,[8,9]],[,,"(?:40001[0-2]|9[0-8]\\d{4})\\d{3}",,,,"912345678",,,[9]],[,,"80[0-79]\\d{6}|800\\d{5}",,,,"800123456",,,[8,9]],[,,"20(?:[013-9]\\d\\d|2)\\d{4}",,,,"203123456",,,[7,9]],[,,,,,,,,,[-1]],[,,"99\\d{7}",,,,"990123456",,,[9]],[,,"7010(?:[0-2679]\\d|3[0-7]|8[0-5])\\d{5}|70\\d{8}",,,,"7012345678",,,[10,11]],"TW",886,"0(?:0[25-79]|19)","0","#",,"0",,,,[[,"(\\d{2})(\\d)(\\d{4})","$1 $2 $3",["202"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[258]0"],"0$1"],[,"(\\d)(\\d{3,4})(\\d{4})",
	"$1 $2 $3",["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]","[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[49]"],"0$1"],[,"(\\d{2})(\\d{4})(\\d{4,5})","$1 $2 $3",["7"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"50[0-46-9]\\d{6}",,,,"500123456",,,[9]],,,[,,,,,,,,,[-1]]],TZ:[,[,,"(?:[25-8]\\d|41|90)\\d{7}",,,,,,,[9]],[,,"2[2-8]\\d{7}",,,,"222345678"],[,,"(?:6[125-9]|7[13-9])\\d{7}",,,,"621234567"],[,,"80[08]\\d{6}",,,,"800123456"],[,,"90\\d{7}",,,,"900123456"],
	[,,"8(?:40|6[01])\\d{6}",,,,"840123456"],[,,,,,,,,,[-1]],[,,"41\\d{7}",,,,"412345678"],"TZ",255,"00[056]","0",,,"0",,,,[[,"(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["[89]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[24]"],"0$1"],[,"(\\d{2})(\\d{7})","$1 $2",["5"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[67]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,"(?:8(?:[04]0|6[01])|90\\d)\\d{6}"],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],UA:[,[,,"[89]\\d{9}|[3-9]\\d{8}",,,,,,,[9,10],[5,6,7]],[,,"(?:3[1-8]|4[13-8]|5[1-7]|6[12459])\\d{7}",
	,,,"311234567",,,[9],[5,6,7]],[,,"(?:39|50|6[36-8]|7[1-357]|9[1-9])\\d{7}",,,,"501234567",,,[9]],[,,"800[1-8]\\d{5,6}",,,,"800123456"],[,,"900[239]\\d{5,6}",,,,"900212345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"89[1-579]\\d{6}",,,,"891234567",,,[9]],"UA",380,"00","0",,,"0",,"0~0",,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]","6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"],"0$1"],[,"(\\d{4})(\\d{5})","$1 $2",
	["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])","3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[3-7]|89|9[1-9]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[89]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],UG:[,[,,"800\\d{6}|(?:[29]0|[347]\\d)\\d{7}",,,,,,,[9],[5,6,7]],[,,"20(?:(?:240|30[67])\\d|6(?:00[0-2]|30[0-4]))\\d{3}|(?:20(?:[017]\\d|2[5-9]|3[1-4]|5[0-4]|6[15-9])|[34]\\d{3})\\d{5}",
	,,,"312345678",,,,[5,6,7]],[,,"72(?:[48]0|6[01])\\d{5}|7(?:[015-8]\\d|20|36|4[0-5]|9[89])\\d{6}",,,,"712345678"],[,,"800[1-3]\\d{5}",,,,"800123456"],[,,"90[1-3]\\d{6}",,,,"901123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"UG",256,"00[057]","0",,,"0",,,,[[,"(\\d{4})(\\d{5})","$1 $2",["202","2024"],"0$1"],[,"(\\d{3})(\\d{6})","$1 $2",["[27-9]|4(?:6[45]|[7-9])"],"0$1"],[,"(\\d{2})(\\d{7})","$1 $2",["[34]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],US:[,
	[,,"[2-9]\\d{9}|3\\d{6}",,,,,,,[10],[7]],[,,"(?:3052(?:0[0-8]|[1-9]\\d)|5056(?:[0-35-9]\\d|4[468])|7302[0-4]\\d)\\d{4}|(?:305[3-9]|472[24]|505[2-57-9]|7306|983[2-47-9])\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[1459]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-47-9]|1[02-9]|2[013569]|3[0-24679]|4[167]|5[0-2]|6[01349]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[0156]|5[01679]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-8]|3[1247]|4[037]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[068]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}",
	,,,"2015550123",,,,[7]],[,,"(?:3052(?:0[0-8]|[1-9]\\d)|5056(?:[0-35-9]\\d|4[468])|7302[0-4]\\d)\\d{4}|(?:305[3-9]|472[24]|505[2-57-9]|7306|983[2-47-9])\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[1459]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-47-9]|1[02-9]|2[013569]|3[0-24679]|4[167]|5[0-2]|6[01349]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[0156]|5[01679]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-8]|3[1247]|4[037]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[068]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}",
	,,,"2015550123",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"900[2-9]\\d{6}",,,,"9002345678"],[,,,,,,,,,[-1]],[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,"305209\\d{4}",,,,"3052090123",,,,[7]],"US",1,"011","1",,,"1",,,1,[[,"(\\d{3})(\\d{4})","$1-$2",["310"],,,1],
	[,"(\\d{3})(\\d{4})","$1-$2",["[24-9]|3(?:[02-9]|1[1-9])"]],[,"(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",["[2-9]"],,,1]],[[,"(\\d{3})(\\d{4})","$1-$2",["310"],,,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[2-9]"]]],[,,,,,,,,,[-1]],1,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],UY:[,[,,"0004\\d{2,9}|[1249]\\d{7}|(?:[49]\\d|80)\\d{5}",,,,,,,[6,7,8,9,10,11,12,13]],[,,"(?:1(?:770|9(?:20|87))|(?:2\\d|4[2-7])\\d\\d)\\d{4}",,,,"21231234",,,[8],[7]],[,,"9[1-9]\\d{6}",,,,"94231234",,,[8]],[,,"0004\\d{2,9}|(?:405|80[05])\\d{4}",
	,,,"8001234"],[,,"90[0-8]\\d{4}",,,,"9001234",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"UY",598,"0(?:0|1[3-9]\\d)","0"," int. ",,"0",,"00",,[[,"(\\d{3})(\\d{3,4})","$1 $2",["0"]],[,"(\\d{3})(\\d{4})","$1 $2",["[49]0|8"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1"],[,"(\\d{4})(\\d{4})","$1 $2",["[124]"]],[,"(\\d{3})(\\d{3})(\\d{2,4})","$1 $2 $3",["0"]],[,"(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})","$1 $2 $3 $4",["0"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,
	,,,,,,[-1]]],UZ:[,[,,"(?:20|33|[5-79]\\d|88)\\d{7}",,,,,,,[9]],[,,"(?:55\\d\\d|6(?:1(?:22|3[124]|4[1-4]|5[1-3578]|64)|2(?:22|3[0-57-9]|41)|5(?:22|3[3-7]|5[024-8])|6\\d\\d|7(?:[23]\\d|7[69])|9(?:22|4[1-8]|6[135]))|7(?:0(?:5[4-9]|6[0146]|7[124-6]|9[135-8])|(?:1[12]|[68]\\d)\\d|2(?:22|3[13-57-9]|4[1-3579]|5[14])|3(?:2\\d|3[1578]|4[1-35-7]|5[1-57]|61)|4(?:2\\d|3[1-579]|7[1-79])|5(?:22|5[1-9]|6[1457])|9(?:22|5[1-9])))\\d{5}",,,,"669050123"],[,,"(?:(?:[25]0|33|88|9[0-57-9])\\d{3}|6(?:1(?:2(?:2[01]|98)|35[0-4]|50\\d|61[23]|7(?:[01][017]|4\\d|55|9[5-9]))|2(?:(?:11|7\\d)\\d|2(?:[12]1|9[01379])|5(?:[126]\\d|3[0-4]))|5(?:19[01]|2(?:27|9[26])|(?:30|59|7\\d)\\d)|6(?:2(?:1[5-9]|2[0367]|38|41|52|60)|(?:3[79]|9[0-3])\\d|4(?:56|83)|7(?:[07]\\d|1[017]|3[07]|4[047]|5[057]|67|8[0178]|9[79]))|7(?:2(?:24|3[237]|4[5-9]|7[15-8])|5(?:7[12]|8[0589])|7(?:0\\d|[39][07])|9(?:0\\d|7[079]))|9(?:2(?:1[1267]|3[01]|5\\d|7[0-4])|(?:5[67]|7\\d)\\d|6(?:2[0-26]|8\\d)))|7(?:[07]\\d{3}|1(?:13[01]|6(?:0[47]|1[67]|66)|71[3-69]|98\\d)|2(?:2(?:2[79]|95)|3(?:2[5-9]|6[0-6])|57\\d|7(?:0\\d|1[17]|2[27]|3[37]|44|5[057]|66|88))|3(?:2(?:1[0-6]|21|3[469]|7[159])|(?:33|9[4-6])\\d|5(?:0[0-4]|5[579]|9\\d)|7(?:[0-3579]\\d|4[0467]|6[67]|8[078]))|4(?:2(?:29|5[0257]|6[0-7]|7[1-57])|5(?:1[0-4]|8\\d|9[5-9])|7(?:0\\d|1[024589]|2[0-27]|3[0137]|[46][07]|5[01]|7[5-9]|9[079])|9(?:7[015-9]|[89]\\d))|5(?:112|2(?:0\\d|2[29]|[49]4)|3[1568]\\d|52[6-9]|7(?:0[01578]|1[017]|[23]7|4[047]|[5-7]\\d|8[78]|9[079]))|9(?:22[128]|3(?:2[0-4]|7\\d)|57[02569]|7(?:2[05-9]|3[37]|4\\d|60|7[2579]|87|9[07]))))\\d{4}",
	,,,"912345678"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"UZ",998,"00",,,,,,,,[[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[235-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],VA:[,[,,"0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}",,,,,,,[6,7,8,9,10,11,12]],[,,"06698\\d{1,6}",,,,"0669812345",,,[6,7,8,9,10,11]],[,,"3[1-9]\\d{8}|3[2-9]\\d{7}",,,,"3123456789",,,[9,10]],[,,"80(?:0\\d{3}|3)\\d{3}",
	,,,"800123456",,,[6,9]],[,,"(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}",,,,"899123456",,,[6,8,9,10]],[,,"84(?:[08]\\d{3}|[17])\\d{3}",,,,"848123456",,,[6,9]],[,,"1(?:78\\d|99)\\d{6}",,,,"1781234567",,,[9,10]],[,,"55\\d{8}",,,,"5512345678",,,[10]],"VA",39,"00",,,,,,,,,,[,,,,,,,,,[-1]],,"06698",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,"3[2-8]\\d{9,10}",,,,"33101234501",,,[11,12]]],VC:[,[,,"(?:[58]\\d\\d|784|900)\\d{7}",,,,,,,[10],[7]],
	[,,"784(?:266|3(?:6[6-9]|7\\d|8[0-6])|4(?:38|5[0-36-8]|8[0-8])|5(?:55|7[0-2]|93)|638|784)\\d{4}",,,,"7842661234",,,,[7]],[,,"784(?:4(?:3[0-5]|5[45]|89|9[0-8])|5(?:2[6-9]|3[0-4])|720)\\d{4}",,,,"7844301234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"900[2-9]\\d{6}",,,,"9002345678"],[,,,,,,,,,[-1]],[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}",
	,,,"5002345678"],[,,"78451[0-2]\\d{4}",,,,"7845101234",,,,[7]],"VC",1,"011","1",,,"([2-7]\\d{6})$|1","784$1",,,,,[,,,,,,,,,[-1]],,"784",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],VE:[,[,,"[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}",,,,,,,[10],[7]],[,,"(?:2(?:12|3[457-9]|[467]\\d|[58][1-9]|9[1-6])|[4-6]00)\\d{7}",,,,"2121234567",,,,[7]],[,,"4(?:1[24-8]|2[46])\\d{7}",,,,"4121234567"],[,,"800\\d{7}",,,,"8001234567"],[,,"90[01]\\d{7}",,,,"9001234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],
	"VE",58,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{7})","$1-$2",["[24-689]"],"0$1","$CC $1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"501\\d{7}",,,,"5010123456",,,,[7]],,,[,,,,,,,,,[-1]]],VG:[,[,,"(?:284|[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"284(?:229|4(?:22|9[45])|774|8(?:52|6[459]))\\d{4}",,,,"2842291234",,,,[7]],[,,"284(?:245|3(?:0[0-3]|4[0-7]|68|9[34])|4(?:4[0-6]|68|9[69])|5(?:4[0-7]|68|9[69]))\\d{4}",,,,"2843001234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"900[2-9]\\d{6}",
	,,,"9002345678"],[,,,,,,,,,[-1]],[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"VG",1,"011","1",,,"([2-578]\\d{6})$|1","284$1",,,,,[,,,,,,,,,[-1]],,"284",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],VI:[,[,,"[58]\\d{9}|(?:34|90)0\\d{7}",,,,,,,[10],[7]],[,,"340(?:2(?:0\\d|10|2[06-8]|4[49]|77)|3(?:32|44)|4(?:2[23]|44|7[34]|89)|5(?:1[34]|55)|6(?:2[56]|4[23]|77|9[023])|7(?:1[2-57-9]|2[57]|7\\d)|884|998)\\d{4}",
	,,,"3406421234",,,,[7]],[,,"340(?:2(?:0\\d|10|2[06-8]|4[49]|77)|3(?:32|44)|4(?:2[23]|44|7[34]|89)|5(?:1[34]|55)|6(?:2[56]|4[23]|77|9[023])|7(?:1[2-57-9]|2[57]|7\\d)|884|998)\\d{4}",,,,"3406421234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"900[2-9]\\d{6}",,,,"9002345678"],[,,,,,,,,,[-1]],[,,"52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}",
	,,,"5002345678"],[,,,,,,,,,[-1]],"VI",1,"011","1",,,"([2-9]\\d{6})$|1","340$1",,1,,,[,,,,,,,,,[-1]],,"340",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],VN:[,[,,"[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}",,,,,,,[7,8,9,10]],[,,"2(?:0[3-9]|1[0-689]|2[0-25-9]|[38][2-9]|4[2-8]|5[124-9]|6[0-39]|7[0-7]|9[0-4679])\\d{7}",,,,"2101234567",,,[10]],[,,"(?:5(?:2[238]|59)|89[6-9]|99[013-9])\\d{6}|(?:3\\d|5[1689]|7[06-9]|8[1-8]|9[0-8])\\d{7}",,,,"912345678",,,[9]],[,,"1800\\d{4,6}|12(?:0[13]|28)\\d{4}",
	,,,"1800123456",,,[8,9,10]],[,,"1900\\d{4,6}",,,,"1900123456",,,[8,9,10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"672\\d{6}",,,,"672012345",,,[9]],"VN",84,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[17]99"],"0$1",,1],[,"(\\d{2})(\\d{5})","$1 $2",["80"],"0$1",,1],[,"(\\d{3})(\\d{4,5})","$1 $2",["69"],"0$1",,1],[,"(\\d{4})(\\d{4,6})","$1 $2",["1"],,,1],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["6"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[357-9]"],"0$1",,1],[,"(\\d{2})(\\d{4})(\\d{4})",
	"$1 $2 $3",["2[48]"],"0$1",,1],[,"(\\d{3})(\\d{4})(\\d{3})","$1 $2 $3",["2"],"0$1",,1]],[[,"(\\d{2})(\\d{5})","$1 $2",["80"],"0$1",,1],[,"(\\d{4})(\\d{4,6})","$1 $2",["1"],,,1],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["6"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[357-9]"],"0$1",,1],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["2[48]"],"0$1",,1],[,"(\\d{3})(\\d{4})(\\d{3})","$1 $2 $3",["2"],"0$1",,1]],[,,,,,,,,,[-1]],,,[,,"[17]99\\d{4}|69\\d{5,6}",,,,,,,[7,8]],[,,"(?:[17]99|80\\d)\\d{4}|69\\d{5,6}",
	,,,"1992000",,,[7,8]],,,[,,,,,,,,,[-1]]],VU:[,[,,"[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}",,,,,,,[5,7]],[,,"(?:38[0-8]|48[4-9])\\d\\d|(?:2[02-9]|3[4-7]|88)\\d{3}",,,,"22123",,,[5]],[,,"(?:[58]\\d|7[013-7])\\d{5}",,,,"5912345",,,[7]],[,,"81[18]\\d\\d",,,,"81123",,,[5]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"9(?:0[1-9]|1[01])\\d{4}",,,,"9010123",,,[7]],"VU",678,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[57-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"(?:3[03]|900\\d)\\d{3}",,,,"30123"],,
	,[,,,,,,,,,[-1]]],WF:[,[,,"(?:40|72)\\d{4}|8\\d{5}(?:\\d{3})?",,,,,,,[6,9]],[,,"72\\d{4}",,,,"721234",,,[6]],[,,"(?:72|8[23])\\d{4}",,,,"821234",,,[6]],[,,"80[0-5]\\d{6}",,,,"800012345",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"WF",681,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["[478]"]],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,"[48]0\\d{4}",,,,"401234",,,[6]]],WS:[,[,,"(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}",
	,,,,,,[5,6,7,10]],[,,"6[1-9]\\d{3}|(?:[2-5]|60)\\d{4}",,,,"22123",,,[5,6]],[,,"(?:7[1-35-7]|8(?:[3-7]|9\\d{3}))\\d{5}",,,,"7212345",,,[7,10]],[,,"800\\d{3}",,,,"800123",,,[6]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"WS",685,"0",,,,,,,,[[,"(\\d{5})","$1",["[2-5]|6[1-9]"]],[,"(\\d{3})(\\d{3,7})","$1 $2",["[68]"]],[,"(\\d{2})(\\d{5})","$1 $2",["7"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],XK:[,[,,"2\\d{7,8}|3\\d{7,11}|(?:4\\d\\d|[89]00)\\d{5}",
	,,,,,,[8,9,10,11,12]],[,,"38\\d{6,10}|(?:2[89]|39)(?:0\\d{5,6}|[1-9]\\d{5})",,,,"28012345"],[,,"4[3-9]\\d{6}",,,,"43201234",,,[8]],[,,"800\\d{5}",,,,"80001234",,,[8]],[,,"900\\d{5}",,,,"90001234",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"XK",383,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{5})","$1 $2",["[89]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2-4]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["2|39"],"0$1"],[,"(\\d{2})(\\d{7,10})","$1 $2",["3"],"0$1"]],,[,,,,,,,,,[-1]],,
	,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],YE:[,[,,"(?:1|7\\d)\\d{7}|[1-7]\\d{6}",,,,,,,[7,8,9],[6]],[,,"78[0-7]\\d{4}|17\\d{6}|(?:[12][2-68]|3[2358]|4[2-58]|5[2-6]|6[3-58]|7[24-6])\\d{5}",,,,"1234567",,,[7,8],[6]],[,,"7[01378]\\d{7}",,,,"712345678",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"YE",967,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-6]|7(?:[24-6]|8[0-7])"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["7"],"0$1"]],
	,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],YT:[,[,,"(?:80|9\\d)\\d{7}|(?:26|63)9\\d{6}",,,,,,,[9]],[,,"269(?:0[0-467]|15|5[0-4]|6\\d|[78]0)\\d{4}",,,,"269601234"],[,,"639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])\\d{4}",,,,"639012345"],[,,"80\\d{7}",,,,"801234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"9(?:(?:39|47)8[01]|769\\d)\\d{4}",,,,"939801234"],"YT",262,"00","0",,,"0",,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],
	ZA:[,[,,"[1-79]\\d{8}|8\\d{4,9}",,,,,,,[5,6,7,8,9,10]],[,,"(?:2(?:0330|4302)|52087)0\\d{3}|(?:1[0-8]|2[1-378]|3[1-69]|4\\d|5[1346-8])\\d{7}",,,,"101234567",,,[9]],[,,"(?:1(?:3492[0-25]|4495[0235]|549(?:20|5[01]))|4[34]492[01])\\d{3}|8[1-4]\\d{3,7}|(?:2[27]|47|54)4950\\d{3}|(?:1(?:049[2-4]|9[12]\\d\\d)|(?:6\\d\\d|7(?:[0-46-9]\\d|5[0-4]))\\d\\d|8(?:5\\d{3}|7(?:08[67]|158|28[5-9]|310)))\\d{4}|(?:1[6-8]|28|3[2-69]|4[025689]|5[36-8])4920\\d{3}|(?:12|[2-5]1)492\\d{4}",,,,"711234567",,,[5,6,7,8,9]],[,,"80\\d{7}",
	,,,"801234567",,,[9]],[,,"(?:86[2-9]|9[0-2]\\d)\\d{6}",,,,"862345678",,,[9]],[,,"860\\d{6}",,,,"860123456",,,[9]],[,,,,,,,,,[-1]],[,,"87(?:08[0-589]|15[0-79]|28[0-4]|31[1-9])\\d{4}|87(?:[02][0-79]|1[0-46-9]|3[02-9]|[4-9]\\d)\\d{5}",,,,"871234567",,,[9]],"ZA",27,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3,4})","$1 $2",["8[1-4]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["8[1-4]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["860"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-9]"],"0$1"],
	[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"861\\d{6,7}",,,,"861123456",,,[9,10]],,,[,,,,,,,,,[-1]]],ZM:[,[,,"800\\d{6}|(?:21|63|[79]\\d)\\d{7}",,,,,,,[9],[6]],[,,"21[1-8]\\d{6}",,,,"211234567",,,,[6]],[,,"(?:7[5-79]|9[5-8])\\d{7}",,,,"955123456"],[,,"800\\d{6}",,,,"800123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"63\\d{7}",,,,"630123456"],"ZM",260,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3})","$1 $2",["[1-9]"]],[,"(\\d{3})(\\d{3})(\\d{3})",
	"$1 $2 $3",["[28]"],"0$1"],[,"(\\d{2})(\\d{7})","$1 $2",["[79]"],"0$1"]],[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[28]"],"0$1"],[,"(\\d{2})(\\d{7})","$1 $2",["[79]"],"0$1"]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],ZW:[,[,,"2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}",,,,,,,[5,6,7,8,9,10],[3,4]],[,,"(?:1(?:(?:3\\d|9)\\d|[4-8])|2(?:(?:(?:0(?:2[014]|5)|(?:2[0157]|31|84|9)\\d\\d|[56](?:[14]\\d\\d|20)|7(?:[089]|2[03]|[35]\\d\\d))\\d|4(?:2\\d\\d|8))\\d|1(?:2|[39]\\d{4}))|3(?:(?:123|(?:29\\d|92)\\d)\\d\\d|7(?:[19]|[56]\\d))|5(?:0|1[2-478]|26|[37]2|4(?:2\\d{3}|83)|5(?:25\\d\\d|[78])|[689]\\d)|6(?:(?:[16-8]21|28|52[013])\\d\\d|[39])|8(?:[1349]28|523)\\d\\d)\\d{3}|(?:4\\d\\d|9[2-9])\\d{4,5}|(?:(?:2(?:(?:(?:0|8[146])\\d|7[1-7])\\d|2(?:[278]\\d|92)|58(?:2\\d|3))|3(?:[26]|9\\d{3})|5(?:4\\d|5)\\d\\d)\\d|6(?:(?:(?:[0-246]|[78]\\d)\\d|37)\\d|5[2-8]))\\d\\d|(?:2(?:[569]\\d|8[2-57-9])|3(?:[013-59]\\d|8[37])|6[89]8)\\d{3}",
	,,,"1312345",,,,[3,4]],[,,"7(?:[1278]\\d|3[1-9])\\d{6}",,,,"712345678",,,[9]],[,,"80(?:[01]\\d|20|8[0-8])\\d{3}",,,,"8001234",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"86(?:1[12]|22|30|44|55|77|8[368])\\d{6}",,,,"8686123456",,,[10]],"ZW",263,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3,5})","$1 $2",["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"],"0$1"],[,"(\\d)(\\d{3})(\\d{2,4})","$1 $2 $3",["[49]"],"0$1"],[,"(\\d{3})(\\d{4})","$1 $2",["80"],"0$1"],
	[,"(\\d{2})(\\d{7})","$1 $2",["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2","2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"],"(0$1)"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)","2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"],"0$1"],[,"(\\d{4})(\\d{6})","$1 $2",["8"],"0$1"],[,"(\\d{2})(\\d{3,5})","$1 $2",["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"],
	"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["29[013-9]|39|54"],"0$1"],[,"(\\d{4})(\\d{3,5})","$1 $2",["(?:25|54)8","258|5483"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],800:[,[,,"(?:00|[1-9]\\d)\\d{6}",,,,,,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"(?:00|[1-9]\\d)\\d{6}",,,,"12345678"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"001",800,,,,,,,,1,[[,"(\\d{4})(\\d{4})","$1 $2",["\\d"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],
	,,[,,,,,,,,,[-1]]],808:[,[,,"[1-9]\\d{7}",,,,,,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"[1-9]\\d{7}",,,,"12345678"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"001",808,,,,,,,,1,[[,"(\\d{4})(\\d{4})","$1 $2",["[1-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],870:[,[,,"7\\d{11}|[35-7]\\d{8}",,,,,,,[9,12]],[,,,,,,,,,[-1]],[,,"(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}",,,,"301234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,
	,,,,,,[-1]],"001",870,,,,,,,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[35-7]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],878:[,[,,"10\\d{10}",,,,,,,[12]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"10\\d{10}",,,,"101234567890"],"001",878,,,,,,,,1,[[,"(\\d{2})(\\d{5})(\\d{5})","$1 $2 $3",["1"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],881:[,[,,"6\\d{9}|[0-36-9]\\d{8}",,,,,,,[9,10]],
	[,,,,,,,,,[-1]],[,,"6\\d{9}|[0-36-9]\\d{8}",,,,"612345678"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"001",881,,,,,,,,,[[,"(\\d)(\\d{3})(\\d{5})","$1 $2 $3",["[0-37-9]"]],[,"(\\d)(\\d{3})(\\d{5,6})","$1 $2 $3",["6"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],882:[,[,,"[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?",,,,,,,[7,8,9,10,11,12]],[,,,,,,,,,[-1]],[,,"342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|50\\d{3})\\d{7}",
	,,,"3421234",,,[7,8,9,10,12]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}",,,,"390123456789"],"001",882,,,,,,,,,[[,"(\\d{2})(\\d{5})","$1 $2",["16|342"]],[,"(\\d{2})(\\d{6})","$1 $2",["49"]],[,"(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["1[36]|9"]],[,"(\\d{2})(\\d{4})(\\d{3})","$1 $2 $3",["3[23]"]],[,"(\\d{2})(\\d{3,4})(\\d{4})",
	"$1 $2 $3",["16"]],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["10|23|3(?:[15]|4[57])|4|51"]],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["34"]],[,"(\\d{2})(\\d{4,5})(\\d{5})","$1 $2 $3",["[1-35]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,"348[57]\\d{7}",,,,"34851234567",,,[11]]],883:[,[,,"(?:[1-4]\\d|51)\\d{6,10}",,,,,,,[8,9,10,11,12]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[0-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}",
	,,,"510012345"],"001",883,,,,,,,,1,[[,"(\\d{3})(\\d{3})(\\d{2,8})","$1 $2 $3",["[14]|2[24-689]|3[02-689]|51[24-9]"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["510"]],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["21"]],[,"(\\d{4})(\\d{4})(\\d{4})","$1 $2 $3",["51[13]"]],[,"(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["[235]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],888:[,[,,"\\d{11}",,,,,,,[11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,
	,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"001",888,,,,,,,,1,[[,"(\\d{3})(\\d{3})(\\d{5})","$1 $2 $3"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"\\d{11}",,,,"12345678901"],,,[,,,,,,,,,[-1]]],979:[,[,,"[1359]\\d{8}",,,,,,,[9],[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"[1359]\\d{8}",,,,"123456789",,,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"001",979,,,,,,,,1,[[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["[1359]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]]};/*

	 Copyright (C) 2010 The Libphonenumber Authors.

	 Licensed under the Apache License, Version 2.0 (the "License");
	 you may not use this file except in compliance with the License.
	 You may obtain a copy of the License at

	 http://www.apache.org/licenses/LICENSE-2.0

	 Unless required by applicable law or agreed to in writing, software
	 distributed under the License is distributed on an "AS IS" BASIS,
	 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 See the License for the specific language governing permissions and
	 limitations under the License.
	*/
	function I(){this.g={};}ba(I);
	var Ga={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u06f0":"0","\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9"},Ha={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",
	7:"7",8:"8",9:"9","+":"+","*":"*","#":"#"},Ia={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u06f0":"0","\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9",A:"2",
	B:"2",C:"2",D:"3",E:"3",F:"3",G:"4",H:"4",I:"4",J:"5",K:"5",L:"5",M:"6",N:"6",O:"6",P:"7",Q:"7",R:"7",S:"7",T:"8",U:"8",V:"8",W:"9",X:"9",Y:"9",Z:"9"},Ja=/[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?/,Ka=RegExp("[+\uff0b]+"),J=RegExp("^[+\uff0b]+"),La=RegExp("([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9])"),Ma=RegExp("[+\uff0b0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]"),Na=/[\\\/] *x/,Oa=RegExp("[^0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9A-Za-z#]+$"),Pa=/(?:.*?[A-Za-z]){3}.*/,Qa=RegExp("^\\+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]|[\\-\\.\\(\\)]?)*[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]|[\\-\\.\\(\\)]?)*$"),
	Ra=RegExp("^([A-Za-z0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]+((\\-)*[A-Za-z0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9])*\\.)*[A-Za-z]+((\\-)*[A-Za-z0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9])*\\.?$");function K(a){return "([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,"+a+"})"}
	function Sa(){return ";ext="+K("20")+"|[ \u00a0\\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|\u0434\u043e\u0431|anexo)[:\\.\uff0e]?[ \u00a0\\t,-]*"+(K("20")+"#?|[ \u00a0\\t,]*(?:[x\uff58#\uff03~\uff5e]|int|\uff49\uff4e\uff54)[:\\.\uff0e]?[ \u00a0\\t,-]*")+(K("9")+"#?|[- ]+")+(K("6")+"#|[ \u00a0\\t]*(?:,{2}|;)[:\\.\uff0e]?[ \u00a0\\t,-]*")+(K("15")+"#?|[ \u00a0\\t]*(?:,)+[:\\.\uff0e]?[ \u00a0\\t,-]*")+(K("9")+"#?")}
	var Ta=new RegExp("(?:"+Sa()+")$","i"),Ua=new RegExp("^[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{2}$|^[+\uff0b]*(?:[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e*]*[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]){3,}[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e*A-Za-z0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]*(?:"+Sa()+")?$","i"),Va=/(\$\d)/,
	Wa=/^\(?\$1\)?$/;function Xa(a){return 2>a.length?!1:L(Ua,a)}function Ya(a){return L(Pa,a)?M(a,Ia):M(a,Ga)}function Za(a){var b=Ya(a.toString());A(a);a.g(b);}function $a(){return Object.keys(H).filter(function(a){return isNaN(a)})}function ab(){return Object.keys(H).filter(function(a){return !isNaN(a)}).map(function(a){return parseInt(a,10)})}function bb(){var a=Object.keys(F);return [...ab(),...a.map(function(b){return parseInt(b,10)})]}	function M(a,b){for(var c=new z,d,e=a.length,f=0;f<e;++f)d=a.charAt(f),d=b[d.toUpperCase()],null!=d&&c.g(d);return c.toString()}function db(a){return 0==a.length||Wa.test(a)}function N(a){return null!=a&&isNaN(a)&&a.toUpperCase()in H}I.prototype.format=function(a,b){if(0==p(a,2)&&m(a,5)){var c=u(a,5);if(0<c.length)return c}c=u(a,1);var d=O(a);if(0==b)return eb(c,0,d,"");if(!(c in F))return d;var e=P(this,c,Q(c));a=fb(a,e,b);d=gb(d,e,b);return eb(c,b,d,a)};
	function P(a,b,c){return "001"==c?R(a,""+b):R(a,c)}function hb(a,b){var c=S;if(!N(b))return c.format(a,1);var d=u(a,1),e=O(a);if(!(d in F))return e;if(1==d){if(null!=b&&F[1].includes(b.toUpperCase()))return d+" "+c.format(a,2)}else if(d==T(c,b))return c.format(a,2);var f=R(c,b),g=u(f,11);b="";m(f,17)?b=u(f,17):L(Ja,g)&&(b=g);c=P(c,d,Q(d));e=gb(e,c,1);a=fb(a,c,1);return 0<b.length?b+" "+d+" "+e+a:eb(d,1,e,a)}
	function O(a){if(!m(a,2))return "";var b=""+p(a,2);return m(a,4)&&p(a,4)&&0<u(a,8)?Array(u(a,8)+1).join("0")+b:b}function eb(a,b,c,d){switch(b){case 0:return "+"+a+c+d;case 1:return "+"+a+" "+c+d;case 3:return "tel:+"+a+"-"+c+d;default:return c+d}}
	function gb(a,b,c){b=0==r(b,20).length||2==c?r(b,19):r(b,20);a:{for(var d,e=b.length,f=0;f<e;++f){d=b[f];var g=v(d,3);if(0==g||0==a.search(p(d,3,g-1)))if(g=new RegExp(p(d,1)),L(g,a)){b=d;break a}}b=null;}null==b?c=a:(e=b,b=u(e,2),d=new RegExp(p(e,1)),u(e,5),e=u(e,4),a=2==c&&null!=e&&0<e.length?a.replace(d,b.replace(Va,e)):a.replace(d,b),3==c&&(a=a.replace(RegExp("^[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]+"),""),a=
	a.replace(RegExp("[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]+","g"),"-")),c=a);return c}function ib(a,b){var c=S;if(!N(a))return null;b=jb(R(c,a),b);try{if(m(b,6)){var d=p(b,6);return kb(c,d,a)}}catch(e){}return null}function fb(a,b,c){return m(a,3)&&0!=p(a,3).length?3==c?";ext="+p(a,3):m(b,13)?p(b,13)+u(a,3):" ext. "+u(a,3):""}
	function jb(a,b){switch(b){case 4:return p(a,5);case 3:return p(a,4);case 1:return p(a,3);case 0:case 2:return p(a,2);case 5:return p(a,6);case 6:return p(a,8);case 7:return p(a,7);case 8:return p(a,21);case 9:return p(a,25);case 10:return p(a,28);default:return p(a,1)}}function lb(a,b){return U(a,p(b,1))?U(a,p(b,5))?4:U(a,p(b,4))?3:U(a,p(b,6))?5:U(a,p(b,8))?6:U(a,p(b,7))?7:U(a,p(b,21))?8:U(a,p(b,25))?9:U(a,p(b,28))?10:U(a,p(b,2))?p(b,18)||U(a,p(b,3))?2:0:!p(b,18)&&U(a,p(b,3))?1:-1:-1}
	function R(a,b){if(null==b)return null;b=b.toUpperCase();var c=a.g[b];if(null==c){c=H[b];if(null==c)return null;c=(new y).g(D.o(),c);a.g[b]=c;}return c}function U(a,b){var c=a.length;return 0<v(b,9)&&-1==r(b,9).indexOf(c)?!1:L(u(b,2),a)}function mb(a){var b=S,c=nb(b,a);var d=u(a,1);var e=P(b,d,c);null==e||"001"!=c&&d!=T(b,c)?e=!1:(a=O(a),e=-1!=lb(a,e));return e}
	function nb(a,b){if(null==b)return null;var c=u(b,1);c=F[c];if(null==c)a=null;else if(1==c.length)a=c[0];else a:{b=O(b);for(var d,e=c.length,f=0;f<e;f++){d=c[f];var g=R(a,d);if(m(g,23)){if(0==b.search(p(g,23))){a=d;break a}}else if(-1!=lb(b,g)){a=d;break a}}a=null;}return a}function Q(a){a=F[a];return null==a?"ZZ":a[0]}function T(a,b){a=R(a,b);if(null==a)throw Error("Invalid region code: "+b);return u(a,10)}function ob(a){a=pb(a);return 0==a||4==a}
	function qb(a,b,c,d){var e=jb(c,d),f=0==v(e,9)?r(p(c,1),9):r(e,9);e=r(e,10);if(-1==f[0])return 5;b=b.length;if(-1<e.indexOf(b))return 4;c=f[0];return c==b?0:c>b?2:f[f.length-1]<b?3:-1<f.indexOf(b,1)?0:5}function pb(a){var b=S,c=O(a);a=u(a,1);if(!(a in F))return 1;a=P(b,a,Q(a));return qb(b,c,a,-1)}
	function rb(a,b){a=a.toString();if(0==a.length||"0"==a.charAt(0))return 0;for(var c,d=a.length,e=1;3>=e&&e<=d;++e)if(c=parseInt(a.substring(0,e),10),c in F)return b.g(a.substring(e)),c;return 0}
	function sb(a,b,c,d,e){if(0==b.length)return 0;b=new z(b);var f;null!=c&&(f=p(c,11));null==f&&(f="NonMatch");var g=b.toString();if(0==g.length)f=20;else if(J.test(g))g=g.replace(J,""),A(b),b.g(Ya(g)),f=1;else {g=new RegExp(f);Za(b);f=b.toString();if(0==f.search(g)){g=f.match(g)[0].length;var l=f.substring(g).match(La);l&&null!=l[1]&&0<l[1].length&&"0"==M(l[1],Ga)?f=!1:(A(b),b.g(f.substring(g)),f=!0);}else f=!1;f=f?5:20;}if(20!=f){if(2>=b.h.length)throw Error("Phone number too short after IDD");a=rb(b,
	d);if(0!=a)return q(e,1,a),a;throw Error("Invalid country calling code");}if(null!=c&&(f=u(c,10),g=""+f,l=b.toString(),0==l.lastIndexOf(g,0)&&(g=new z(l.substring(g.length)),l=p(c,1),l=new RegExp(u(l,2)),tb(g,c,null),g=g.toString(),!L(l,b.toString())&&L(l,g)||3==qb(a,b.toString(),c,-1))))return d.g(g),q(e,1,f),f;q(e,1,0);return 0}
	function tb(a,b,c){var d=a.toString(),e=d.length,f=p(b,15);if(0!=e&&null!=f&&0!=f.length){var g=new RegExp("^(?:"+f+")");if(e=g.exec(d)){f=new RegExp(u(p(b,1),2));var l=L(f,d),n=e.length-1;b=p(b,16);if(null==b||0==b.length||null==e[n]||0==e[n].length){if(!l||L(f,d.substring(e[0].length)))null!=c&&0<n&&null!=e[n]&&c.g(e[1]),a.set(d.substring(e[0].length));}else if(d=d.replace(g,b),!l||L(f,d))null!=c&&0<n&&c.g(e[1]),a.set(d);}}}
	function kb(a,b,c){if(null==b)throw Error("The string supplied did not seem to be a phone number");if(250<b.length)throw Error("The string supplied is too long to be a phone number");var d=new z;var e=b.indexOf(";phone-context=");if(-1===e)e=null;else if(e+=15,e>=b.length)e="";else {var f=b.indexOf(";",e);e=-1!==f?b.substring(e,f):b.substring(e);}var g=e;null==g?f=!0:0===g.length?f=!1:(f=Qa.exec(g),g=Ra.exec(g),f=null!==f||null!==g);if(!f)throw Error("The string supplied did not seem to be a phone number");
	null!=e?("+"===e.charAt(0)&&d.g(e),e=b.indexOf("tel:"),d.g(b.substring(0<=e?e+4:0,b.indexOf(";phone-context=")))):(e=d.g,b=null!=b?b:"",f=b.search(Ma),0<=f?(b=b.substring(f),b=b.replace(Oa,""),f=b.search(Na),0<=f&&(b=b.substring(0,f))):b="",e.call(d,b));b=d.toString();e=b.indexOf(";isub=");0<e&&(A(d),d.g(b.substring(0,e)));if(!Xa(d.toString()))throw Error("The string supplied did not seem to be a phone number");b=d.toString();if(!(N(c)||null!=b&&0<b.length&&J.test(b)))throw Error("Invalid country calling code");
	b=new E;a:{e=d.toString();f=e.search(Ta);if(0<=f&&Xa(e.substring(0,f))){g=e.match(Ta);for(var l=g.length,n=1;n<l;++n)if(null!=g[n]&&0<g[n].length){A(d);d.g(e.substring(0,f));e=g[n];break a}}e="";}0<e.length&&q(b,3,e);f=R(a,c);e=new z;g=0;l=d.toString();try{g=sb(a,l,f,e,b);}catch(G){if("Invalid country calling code"==G.message&&J.test(l)){if(l=l.replace(J,""),g=sb(a,l,f,e,b),0==g)throw G;}else throw G;}0!=g?(d=Q(g),d!=c&&(f=P(a,g,d))):(Za(d),e.g(d.toString()),null!=c&&(g=u(f,10),q(b,1,g)));if(2>e.h.length)throw Error("The string supplied is too short to be a phone number");
	null!=f&&(c=new z(e.toString()),tb(c,f,new z),a=qb(a,c.toString(),f,-1),2!=a&&4!=a&&5!=a&&(e=c));a=e.toString();c=a.length;if(2>c)throw Error("The string supplied is too short to be a phone number");if(17<c)throw Error("The string supplied is too long to be a phone number");if(1<a.length&&"0"==a.charAt(0)){q(b,4,!0);for(c=1;c<a.length-1&&"0"==a.charAt(c);)c++;1!=c&&q(b,8,c);}q(b,2,parseInt(a,10));return b}
	I.prototype.ja=function(a){var b=R(this,nb(this,a));if(null==b)return !0;a=O(a);return !U(a,p(b,24))};function L(a,b){return (a="string"==typeof a?b.match("^(?:"+a+")$"):b.match(a))&&a[0].length==b.length?!0:!1}function ub(a){this.ka=RegExp("\u2008");this.la="";this.$=new z;this.da="";this.u=new z;this.ba=new z;this.v=!0;this.ea=this.ca=this.oa=!1;this.qa=I.pa();this.aa=0;this.h=new z;this.ha=!1;this.s="";this.g=new z;this.j=[];this.ma=a;this.Aa=this.m=vb(this,this.ma);}var wb=new D;q(wb,11,"NA");
	var xb=RegExp("^[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]*\\$1[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]*(\\$\\d[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]*)*$"),yb=/[- ]/;function vb(a,b){b=N(b)?T(a.qa,b):0;a=R(a.qa,Q(b));return null!=a?a:wb}
	function zb(a){for(var b=a.j.length,c=0;c<b;++c){var d=a.j[c],e=u(d,1);if(a.da==e)return !1;var f=a;var g=d,l=u(g,1);A(f.$);var n=f;g=u(g,2);var G="999999999999999".match(l)[0];G.length<n.g.h.length?n="":(n=G.replace(new RegExp(l,"g"),g),n=n.replace(RegExp("9","g"),"\u2008"));0<n.length?(f.$.g(n),f=!0):f=!1;if(f)return a.da=e,a.ha=yb.test(p(d,4)),a.aa=0,!0}return a.v=!1}
	function Ab(a,b){for(var c=[],d=b.length-3,e=a.j.length,f=0;f<e;++f){var g=a.j[f];0==v(g,3)?c.push(a.j[f]):(g=p(g,3,Math.min(d,v(g,3)-1)),0==b.search(g)&&c.push(a.j[f]));}a.j=c;}
	function Bb(a,b){a.u.g(b);var c=b;La.test(c)||1==a.u.h.length&&Ka.test(c)?("+"==b?(c=b,a.ba.g(b)):(c=Ga[b],a.ba.g(c),a.g.g(c)),b=c):(a.v=!1,a.oa=!0);if(!a.v){if(!a.oa)if(Cb(a)){if(Db(a))return Eb(a)}else if(0<a.s.length&&(b=a.g.toString(),A(a.g),a.g.g(a.s),a.g.g(b),b=a.h.toString(),c=b.lastIndexOf(a.s),A(a.h),a.h.g(b.substring(0,c))),a.s!=Fb(a))return a.h.g(" "),Eb(a);return a.u.toString()}switch(a.ba.h.length){case 0:case 1:case 2:return a.u.toString();case 3:if(Cb(a))a.ea=!0;else return a.s=Fb(a),
	Gb(a);default:if(a.ea)return Db(a)&&(a.ea=!1),a.h.toString()+a.g.toString();if(0<a.j.length){b=Hb(a,b);c=Ib(a);if(0<c.length)return c;Ab(a,a.g.toString());return zb(a)?Jb(a):a.v?Kb(a,b):a.u.toString()}return Gb(a)}}function Eb(a){a.v=!0;a.ea=!1;a.j=[];a.aa=0;A(a.$);a.da="";return Gb(a)}
	function Ib(a){for(var b=a.g.toString(),c=a.j.length,d=0;d<c;++d){var e=a.j[d],f=u(e,1);if((new RegExp("^(?:"+f+")$")).test(b)&&(a.ha=yb.test(p(e,4)),e=b.replace(new RegExp(f,"g"),p(e,2)),e=Kb(a,e),M(e,Ha)==a.ba))return e}return ""}function Kb(a,b){var c=a.h.h.length;return a.ha&&0<c&&" "!=a.h.toString().charAt(c-1)?a.h+" "+b:a.h+b}
	function Gb(a){var b=a.g.toString();if(3<=b.length){for(var c=a.ca&&0==a.s.length&&0<v(a.m,20)?r(a.m,20):r(a.m,19),d=c.length,e=0;e<d;++e){var f=c[e];0<a.s.length&&db(u(f,4))&&!p(f,6)&&!m(f,5)||(0!=a.s.length||a.ca||db(u(f,4))||p(f,6))&&xb.test(u(f,2))&&a.j.push(f);}Ab(a,b);b=Ib(a);return 0<b.length?b:zb(a)?Jb(a):a.u.toString()}return Kb(a,b)}function Jb(a){var b=a.g.toString(),c=b.length;if(0<c){for(var d="",e=0;e<c;e++)d=Hb(a,b.charAt(e));return a.v?Kb(a,d):a.u.toString()}return a.h.toString()}
	function Fb(a){var b=a.g.toString(),c=0;if(1!=a.m.ia())var d=!1;else d=a.g.toString(),d="1"==d.charAt(0)&&"0"!=d.charAt(1)&&"1"!=d.charAt(1);d?(c=1,a.h.g("1").g(" "),a.ca=!0):m(a.m,15)&&(d=new RegExp("^(?:"+p(a.m,15)+")"),d=b.match(d),null!=d&&null!=d[0]&&0<d[0].length&&(a.ca=!0,c=d[0].length,a.h.g(b.substring(0,c))));A(a.g);a.g.g(b.substring(c));return b.substring(0,c)}
	function Cb(a){var b=a.ba.toString(),c=new RegExp("^(?:\\+|"+p(a.m,11)+")");c=b.match(c);return null!=c&&null!=c[0]&&0<c[0].length?(a.ca=!0,c=c[0].length,A(a.g),a.g.g(b.substring(c)),A(a.h),a.h.g(b.substring(0,c)),"+"!=b.charAt(0)&&a.h.g(" "),!0):!1}function Db(a){if(0==a.g.h.length)return !1;var b=new z,c=rb(a.g,b);if(0==c)return !1;A(a.g);a.g.g(b.toString());b=Q(c);"001"==b?a.m=R(a.qa,""+c):b!=a.ma&&(a.m=vb(a,b));a.h.g(""+c).g(" ");a.s="";return !0}
	function Hb(a,b){var c=a.$.toString();if(0<=c.substring(a.aa).search(a.ka)){var d=c.search(a.ka);b=c.replace(a.ka,b);A(a.$);a.$.g(b);a.aa=d;return b.substring(0,a.aa+1)}1==a.j.length&&(a.v=!1);a.da="";return a.u.toString()}var Lb={AC:[,[,,"9\\d\\d",,,,,,,[3]],,,[,,"9(?:11|99)",,,,"911"],[,,,,,,,,,[-1]],,,,"AC",,,,,,,,,,,,,,,,,,[,,"9(?:11|99)",,,,"911"],,[,,"9(?:11|99)",,,,"911"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],AD:[,[,,"1\\d\\d",,,,,,,[3]],,,[,,"11[0268]",,,,"110"],[,,,,,,,,,[-1]],,,,"AD",,,,,,,,,,,,,,,,,,[,,"11[0268]",,,,"110"],,[,,"11[0268]",,,,"110"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],AE:[,[,,"[149]\\d{2,3}",,,,,,,[3,4]],,,[,,"112|99[7-9]",,,,"112",,,[3]],[,,,,,,,,,[-1]],,,,"AE",,
	,,,,,,,,,,,,,,,,[,,"112|99[7-9]",,,,"112",,,[3]],,[,,"112|445[16]|99[7-9]",,,,"112"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,"445\\d",,,,"4450",,,[4]]],AF:[,[,,"[14]\\d\\d(?:\\d{2})?",,,,,,,[3,5]],,,[,,"1(?:0[02]|19)",,,,"100",,,[3]],[,,,,,,,,,[-1]],,,,"AF",,,,,,,,,,,,,,,,,,[,,"1(?:0[02]|19)",,,,"100",,,[3]],,[,,"1(?:0[02]|19)|40404",,,,"100"],[,,,,,,,,,[-1]],[,,"404\\d\\d",,,,"40400",,,[5]],,[,,"404\\d\\d",,,,"40400",,,[5]]],AG:[,[,,"[19]\\d\\d",,,,,,,[3]],,,[,,"9(?:11|88|99)",,,,"911"],[,,,,,,,,,[-1]],
	,,,"AG",,,,,,,,,,,,,,,,,,[,,"9(?:11|99)",,,,"911"],,[,,"176|9(?:11|88|99)",,,,"176"],[,,,,,,,,,[-1]],[,,"176",,,,"176"],,[,,"176",,,,"176"]],AI:[,[,,"[19]\\d\\d",,,,,,,[3]],,,[,,"9(?:11|88)",,,,"911"],[,,,,,,,,,[-1]],,,,"AI",,,,,,,,,,,,,,,,,,[,,"911",,,,"911"],,[,,"176|9(?:11|88)",,,,"176"],[,,,,,,,,,[-1]],[,,"176",,,,"176"],,[,,"176",,,,"176"]],AL:[,[,,"[15]\\d{2,5}",,,,,,,[3,4,5,6]],,,[,,"1(?:1(?:2|6[01]\\d\\d)|2[7-9]|3[15]|41)",,,,"112",,,[3,6]],[,,"5\\d{4}",,,,"50000",,,[5]],,,,"AL",,,,,,,,,,
	,,,,,,,,[,,"1(?:12|2[7-9])",,,,"112",,,[3]],,[,,"1(?:1(?:6(?:000|1(?:06|11|23))|8\\d\\d)|65\\d|89[12])|5\\d{4}|1(?:[1349]\\d|2[2-9])",,,,"110"],[,,,,,,,,,[-1]],[,,"123",,,,"123",,,[3]],,[,,"131|5\\d{4}",,,,"131",,,[3,5]]],AM:[,[,,"[148]\\d{2,4}",,,,,,,[3,4,5]],,,[,,"10[1-3]",,,,"101",,,[3]],[,,,,,,,,,[-1]],,,,"AM",,,,,,,,,,,,,,,,,,[,,"10[1-3]",,,,"101",,,[3]],,[,,"(?:1|8[1-7])\\d\\d|40404",,,,"100"],[,,,,,,,,,[-1]],[,,"404\\d\\d",,,,"40400",,,[5]],,[,,"404\\d\\d",,,,"40400",,,[5]]],AO:[,[,,"1\\d\\d",
	,,,,,,[3]],,,[,,"11[235]",,,,"112"],[,,,,,,,,,[-1]],,,,"AO",,,,,,,,,,,,,,,,,,[,,"11[235]",,,,"112"],,[,,"11[235]",,,,"112"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],AR:[,[,,"[01389]\\d{1,4}",,,,,,,[2,3,4,5]],,,[,,"000|1(?:0[0-35-7]|1[0245]|2[015]|3[47]|4[478]|9)|911",,,,"19",,,[2,3]],[,,,,,,,,,[-1]],,,,"AR",,,,,,,,,,,,,,,,,,[,,"10[017]|911",,,,"100",,,[3]],,[,,"000|1(?:0[0-35-7]|1[02-5]|2[015]|3[47]|4[478]|9)|3372|89338|911",,,,"19"],[,,,,,,,,,[-1]],[,,"893\\d\\d",,,,"89300",,,[5]],,[,,"(?:337|893\\d)\\d",
	,,,"3370",,,[4,5]]],AS:[,[,,"[49]\\d\\d(?:\\d{2})?",,,,,,,[3,5]],,,[,,"9(?:11|88)",,,,"911",,,[3]],[,,,,,,,,,[-1]],,,,"AS",,,,,,,,,,,,,,,,,,[,,"911",,,,"911",,,[3]],,[,,"40404|9(?:11|88)",,,,"911"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,"404\\d\\d",,,,"40400",,,[5]]],AT:[,[,,"[1268]\\d\\d(?:\\d(?:\\d{2})?)?",,,,,,,[3,4,6]],,,[,,"1(?:12|2[0238]|3[03]|4[0-247])|1(?:16\\d\\d|4[58])\\d",,,,"112"],[,,,,,,,,,[-1]],,,,"AT",,,,,,,,,,,,,,,,,,[,,"1(?:[12]2|33|44)",,,,"112",,,[3]],,[,,"1(?:1(?:2|6(?:00[06]|1(?:17|23)))|2[0238]|3[03]|4(?:[0-247]|5[05]|84))|(?:220|61|8108[1-3])0",
	,,,"112"],[,,,,,,,,,[-1]],[,,"(?:220|810\\d\\d)\\d|610",,,,"610"],,[,,,,,,,,,[-1]]],AU:[,[,,"[0-27]\\d{2,7}",,,,,,,[3,4,5,6,7,8]],,,[,,"000|1(?:06|12|258885|55\\d)|733",,,,"000",,,[3,4,7]],[,,"1(?:2(?:34|456)|9\\d{4,6})",,,,"1234",,,[4,5,6,7,8]],,,,"AU",,,,,,,,,,,,,,,,,,[,,"000|1(?:06|12)",,,,"000",,,[3]],,[,,"000|1(?:06|1(?:00|2|9[46])|2(?:014[1-3]|[23]\\d|(?:4|5\\d)\\d{2,3}|68[689]|72(?:20|3\\d\\d)|8(?:[013-9]\\d|2))|555|9\\d{4,6})|225|7(?:33|67)",,,,"000"],[,,"1(?:1[09]\\d|24733)|225|767",,,,"225",
	,,[3,4,6]],[,,"1(?:258885|55\\d)",,,,"1550",,,[4,7]],,[,,"19\\d{4,6}",,,,"190000",,,[6,7,8]]],AW:[,[,,"[19]\\d\\d",,,,,,,[3]],,,[,,"100|911",,,,"100"],[,,,,,,,,,[-1]],,,,"AW",,,,,,,,,,,,,,,,,,[,,"100|911",,,,"100"],,[,,"1(?:00|18|76)|91[13]",,,,"100"],[,,,,,,,,,[-1]],[,,"176",,,,"176"],,[,,"176",,,,"176"]],AX:[,[,,"[17]\\d\\d(?:\\d{2})?",,,,,,,[3,5]],,,[,,"112",,,,"112",,,[3]],[,,,,,,,,,[-1]],,,,"AX",,,,,,,,,,,,,,,,,,[,,"112",,,,"112",,,[3]],,[,,"112|75[12]\\d\\d",,,,"112"],[,,,,,,,,,[-1]],[,,,,,
	,,,,[-1]],,[,,,,,,,,,[-1]]],AZ:[,[,,"[148]\\d{2,3}",,,,,,,[3,4]],,,[,,"1(?:0[1-3]|12)",,,,"101",,,[3]],[,,,,,,,,,[-1]],,,,"AZ",,,,,,,,,,,,,,,,,,[,,"1(?:0[1-3]|12)",,,,"101",,,[3]],,[,,"1(?:0[1-3]|12)|(?:404|880)0",,,,"101"],[,,,,,,,,,[-1]],[,,"(?:404|880)\\d",,,,"4040",,,[4]],,[,,"(?:404|880)\\d",,,,"4040",,,[4]]],BA:[,[,,"1\\d{2,5}",,,,,,,[3,4,5,6]],,,[,,"1(?:16\\d{3}|2[2-4])",,,,"122",,,[3,6]],[,,,,,,,,,[-1]],,,,"BA",,,,,,,,,,,,,,,,,,[,,"12[2-4]",,,,"122",,,[3]],,[,,"1(?:16(?:00[06]|1(?:1[17]|23))|2(?:0[0-7]|[2-5]|6[0-26])|(?:[3-5]|7\\d)\\d\\d)|1(?:18|2[78])\\d\\d?",
	,,,"122"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],BB:[,[,,"[2-689]\\d\\d",,,,,,,[3]],,,[,,"988|[2359]11",,,,"211"],[,,,,,,,,,[-1]],,,,"BB",,,,,,,,,,,,,,,,,,[,,"[2359]11",,,,"211"],,[,,"988|[2-689]11",,,,"211"],[,,,,,,,,,[-1]],[,,"[468]11",,,,"411"],,[,,,,,,,,,[-1]]],BD:[,[,,"[1579]\\d{2,4}",,,,,,,[3,4,5]],,,[,,"10[0-26]|[19]99",,,,"100",,,[3]],[,,,,,,,,,[-1]],,,,"BD",,,,,,,,,,,,,,,,,,[,,"10[0-2]|[19]99",,,,"100",,,[3]],,[,,"1(?:0(?:[0-369]|5[1-4]|7[0-4]|8[0-29])|1[16-9]|2(?:[134]|2[0-5])|3(?:1\\d?|6[3-6])|5[2-9])|5012|786|9594|[19]99|1(?:0(?:50|6\\d)|33|4(?:0|1\\d))\\d",
	,,,"100"],[,,,,,,,,,[-1]],[,,"1(?:11|2[13])|(?:501|959)\\d|786",,,,"111",,,[3,4]],,[,,"959\\d",,,,"9590",,,[4]]],BE:[,[,,"[1-9]\\d\\d(?:\\d(?:\\d{2})?)?",,,,,,,[3,4,6]],,,[,,"1(?:0[0-35-8]|1[0269]|7(?:12|77)|813)|(?:116|8)\\d{3}",,,,"100"],[,,"1(?:2[03]|40)4|(?:1(?:[24]1|3[01])|[2-79]\\d\\d)\\d",,,,"1204",,,[4]],,,,"BE",,,,,,,,,,,,,,,,,,[,,"1(?:0[01]|12)",,,,"100",,,[3]],,[,,"1(?:0[0-8]|16117|2(?:12|3[0-24])|313|414|5(?:1[05]|5[15]|66|95)|6(?:1[167]|36|6[16])|7(?:[07][017]|1[27-9]|22|33|65)|81[39])|[2-9]\\d{3}|11[02679]|1(?:1600|45)0|1(?:[2-4]9|78)9|1[2-4]0[47]",
	,,,"100"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,"[2-9]\\d{3}",,,,"2000",,,[4]]],BF:[,[,,"1\\d",,,,,,,[2]],,,[,,"1[78]",,,,"17"],[,,,,,,,,,[-1]],,,,"BF",,,,,,,,,,,,,,,,,,[,,"1[78]",,,,"17"],,[,,"1[78]",,,,"17"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],BG:[,[,,"1\\d\\d(?:\\d{3})?",,,,,,,[3,6]],,,[,,"1(?:1(?:2|6\\d{3})|50|6[06])",,,,"112"],[,,,,,,,,,[-1]],,,,"BG",,,,,,,,,,,,,,,,,,[,,"1(?:12|50|6[06])",,,,"112",,,[3]],,[,,"1(?:1(?:2|6(?:000|111))|50|6[06])",,,,"112"],[,,,,,,,,,[-1]],[,,,,,,,,,
	[-1]],,[,,,,,,,,,[-1]]],BH:[,[,,"[0189]\\d\\d(?:\\d{2})?",,,,,,,[3,5]],,,[,,"(?:0[167]|81)\\d{3}|[19]99",,,,"199"],[,,"9[148]\\d{3}",,,,"91000",,,[5]],,,,"BH",,,,,,,,,,,,,,,,,,[,,"[19]99",,,,"199",,,[3]],,[,,"1(?:[02]\\d|12|4[01]|51|8[18]|9[169])|99[02489]|(?:0[167]|8[158]|9[148])\\d{3}",,,,"100"],[,,,,,,,,,[-1]],[,,"0[67]\\d{3}|88000|98555",,,,"06000",,,[5]],,[,,"88000|98555",,,,"88000",,,[5]]],BI:[,[,,"[16-9]\\d{2,3}",,,,,,,[3,4]],,,[,,"11[237]|611",,,,"112",,,[3]],[,,,,,,,,,[-1]],,,,"BI",,,,,,
	,,,,,,,,,,,,[,,"11[237]",,,,"112",,,[3]],,[,,"1(?:1\\d|5[2-9]|6[0-256])|611|7(?:10|77|979)|8[28]8|900",,,,"110"],[,,,,,,,,,[-1]],[,,"611|7(?:10|77)|888|900",,,,"611",,,[3]],,[,,"(?:71|90)0",,,,"710",,,[3]]],BJ:[,[,,"[17]\\d{2,3}",,,,,,,[3,4]],,,[,,"11[78]|7[3-5]\\d\\d",,,,"117"],[,,,,,,,,,[-1]],,,,"BJ",,,,,,,,,,,,,,,,,,[,,"11[78]",,,,"117",,,[3]],,[,,"1(?:1[78]|2[02-5]|60)|7[0-5]\\d\\d",,,,"117"],[,,,,,,,,,[-1]],[,,"12[02-5]",,,,"120",,,[3]],,[,,,,,,,,,[-1]]],BL:[,[,,"1\\d",,,,,,,[2]],,,[,,"18",,
	,,"18"],[,,,,,,,,,[-1]],,,,"BL",,,,,,,,,,,,,,,,,,[,,"18",,,,"18"],,[,,"18",,,,"18"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],BM:[,[,,"[19]\\d\\d",,,,,,,[3]],,,[,,"9(?:11|88)",,,,"911"],[,,,,,,,,,[-1]],,,,"BM",,,,,,,,,,,,,,,,,,[,,"911",,,,"911"],,[,,"176|9(?:11|88)",,,,"176"],[,,,,,,,,,[-1]],[,,"176",,,,"176"],,[,,"176",,,,"176"]],BN:[,[,,"9\\d\\d",,,,,,,[3]],,,[,,"99[135]",,,,"991"],[,,,,,,,,,[-1]],,,,"BN",,,,,,,,,,,,,,,,,,[,,"99[135]",,,,"991"],,[,,"99[135]",,,,"991"],[,,,,,,,,,[-1]],[,
	,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],BO:[,[,,"[14]\\d\\d(?:\\d{2})?",,,,,,,[3,5]],,,[,,"11[089]",,,,"110",,,[3]],[,,,,,,,,,[-1]],,,,"BO",,,,,,,,,,,,,,,,,,[,,"11[089]",,,,"110",,,[3]],,[,,"11[089]|40404",,,,"110"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,"404\\d\\d",,,,"40400",,,[5]]],BQ:[,[,,"[19]\\d\\d",,,,,,,[3]],,,[,,"112|911",,,,"112"],[,,,,,,,,,[-1]],,,,"BQ",,,,,,,,,,,,,,,,,,[,,"112|911",,,,"112"],,[,,"1(?:12|76)|911",,,,"112"],[,,,,,,,,,[-1]],[,,"176",,,,"176"],,[,,"176",,,,"176"]],BR:[,[,,"[1-69]\\d{2,5}",
	,,,,,,[3,4,5,6]],,,[,,"1(?:00|12|28|8[015]|9[0-47-9])|4(?:57|82\\d)|911",,,,"100",,,[3,4]],[,,,,,,,,,[-1]],,,,"BR",,,,,,,,,,,,,,,,,,[,,"1(?:12|28|9[023])|911",,,,"112",,,[3]],,[,,"1(?:0(?:[02]|3(?:1[2-579]|2[13-9]|3[124-9]|4[1-3578]|5[1-468]|6[139]|8[149]|9[168])|5[0-35-9]|6(?:0|1[0-35-8]?|2[0145]|3[0137]?|4[37-9]?|5[0-35]|6[016]?|7[137]?|8[5-8]|9[1359]))|1[25-8]|2[357-9]|3[024-68]|4[12568]|5\\d|6[0-8]|8[015]|9[0-47-9])|2(?:7(?:330|878)|85959?)|(?:32|91)1|4(?:0404?|57|828)|55555|6(?:0\\d{4}|10000)|(?:133|411)[12]",
	,,,"100"],[,,"102|273\\d\\d|321",,,,"102",,,[3,5]],[,,"151|(?:278|555)\\d\\d|4(?:04\\d\\d?|11\\d|57)",,,,"151",,,[3,4,5]],,[,,"285\\d{2,3}|321|40404|(?:27[38]\\d|482)\\d|6(?:0\\d|10)\\d{3}",,,,"321"]],BS:[,[,,"9\\d\\d",,,,,,,[3]],,,[,,"9(?:1[19]|88)",,,,"911"],[,,,,,,,,,[-1]],,,,"BS",,,,,,,,,,,,,,,,,,[,,"91[19]",,,,"911"],,[,,"9(?:1[19]|88)",,,,"911"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],BT:[,[,,"[14]\\d\\d(?:\\d{2})?",,,,,,,[3,5]],,,[,,"11[023]",,,,"110",,,[3]],[,,,,,,,,,[-1]],,,,"BT",
	,,,,,,,,,,,,,,,,,[,,"11[023]",,,,"110",,,[3]],,[,,"11[0-6]|40404",,,,"110"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,"404\\d\\d",,,,"40400",,,[5]]],BW:[,[,,"[19]\\d\\d(?:\\d{2})?",,,,,,,[3,5]],,,[,,"9(?:11|9[7-9])",,,,"911",,,[3]],[,,,,,,,,,[-1]],,,,"BW",,,,,,,,,,,,,,,,,,[,,"9(?:11|9[7-9])",,,,"911",,,[3]],,[,,"1(?:1[26]|3123)|9(?:1[14]|9[1-57-9])",,,,"112"],[,,,,,,,,,[-1]],[,,"131\\d\\d",,,,"13100",,,[5]],,[,,"131\\d\\d",,,,"13100",,,[5]]],BY:[,[,,"1\\d\\d",,,,,,,[3]],,,[,,"1(?:0[1-3]|12)",,,,"101"],
	[,,,,,,,,,[-1]],,,,"BY",,,,,,,,,,,,,,,,,,[,,"1(?:0[1-3]|12)",,,,"101"],,[,,"1(?:0[1-79]|1[246]|35|5[1-35]|6[89]|7[5-7]|8[58]|9[1-7])",,,,"101"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],BZ:[,[,,"9\\d\\d?",,,,,,,[2,3]],,,[,,"9(?:0|11|22|66|77|9[09])",,,,"90"],[,,,,,,,,,[-1]],,,,"BZ",,,,,,,,,,,,,,,,,,[,,"9(?:0|11|90)",,,,"90"],,[,,"9(?:0|11|22|66|77|9[09])",,,,"90"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],CA:[,[,,"[1-9]\\d\\d(?:\\d\\d(?:\\d(?:\\d{2})?)?)?",,,,,,,[3,5,6,8]],,,[,,"112|988|[29]11",
	,,,"112",,,[3]],[,,,,,,,,,[-1]],,,,"CA",,,,,,,,,,,,,,,,,,[,,"112|911",,,,"112",,,[3]],,[,,"112|30000\\d{3}|[1-35-9]\\d{4,5}|[2-8]11|9(?:11|88)",,,,"112"],[,,,,,,,,,[-1]],[,,"[235-7]11",,,,"211",,,[3]],,[,,"300\\d{5}|[1-35-9]\\d{4,5}",,,,"10000",,,[5,6,8]]],CC:[,[,,"[01]\\d\\d",,,,,,,[3]],,,[,,"000|112",,,,"000"],[,,,,,,,,,[-1]],,,,"CC",,,,,,,,,,,,,,,,,,[,,"000|112",,,,"000"],,[,,"000|112",,,,"000"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],CD:[,[,,"[14]\\d\\d(?:\\d{2})?",,,,,,,[3,5]],,,[,
	,"1(?:1[348]|77|88)",,,,"113",,,[3]],[,,,,,,,,,[-1]],,,,"CD",,,,,,,,,,,,,,,,,,[,,"1(?:1[348]|77|88)",,,,"113",,,[3]],,[,,"1(?:1[348]|23|77|88)|40404",,,,"113"],[,,,,,,,,,[-1]],[,,"404\\d\\d",,,,"40400",,,[5]],,[,,"404\\d\\d",,,,"40400",,,[5]]],CF:[,[,,"1\\d{2,3}",,,,,,,[3,4]],,,[,,"1(?:1[78]|22\\d)",,,,"117"],[,,,,,,,,,[-1]],,,,"CF",,,,,,,,,,,,,,,,,,[,,"1(?:1[78]|220)",,,,"117"],,[,,"1(?:1[478]|220)",,,,"114"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],CG:[,[,,"1\\d\\d",,,,,,,[3]],,,[,,"11[178]",
	,,,"111"],[,,,,,,,,,[-1]],,,,"CG",,,,,,,,,,,,,,,,,,[,,"11[78]",,,,"117"],,[,,"11[126-8]",,,,"111"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],CH:[,[,,"[1-9]\\d{2,5}",,,,,,,[3,4,5,6]],,,[,,"1(?:1(?:[278]|6\\d{3})|4[47])|5200",,,,"112",,,[3,4,6]],[,,"1(?:14|8[0-2589])\\d|543|83111",,,,"543",,,[3,4,5]],,,,"CH",,,,,,,,,,,,,,,,,,[,,"1(?:1[278]|44)",,,,"112",,,[3]],,[,,"1(?:0[78]\\d\\d|1(?:[278]|45|6(?:000|111))|4(?:[03-57]|1[0145])|6(?:00|[1-46])|8(?:02|1[189]|[25]0|7|8[08]|99))|[2-9]\\d{2,4}",
	,,,"112"],[,,"1(?:4[035]|6[1-46])|1(?:41|60)\\d",,,,"140",,,[3,4]],[,,"5(?:200|35)",,,,"535",,,[3,4]],,[,,"[2-9]\\d{2,4}",,,,"200",,,[3,4,5]]],CI:[,[,,"[14]\\d{2,3}",,,,,,,[3,4]],,,[,,"1(?:1[01]|[78]0)",,,,"110",,,[3]],[,,,,,,,,,[-1]],,,,"CI",,,,,,,,,,,,,,,,,,[,,"1(?:1[01]|[78]0)",,,,"110",,,[3]],,[,,"1(?:1[01]|[78]0)|4443",,,,"110"],[,,,,,,,,,[-1]],[,,"444\\d",,,,"4440",,,[4]],,[,,"444\\d",,,,"4440",,,[4]]],CK:[,[,,"9\\d\\d",,,,,,,[3]],,,[,,"99[689]",,,,"996"],[,,,,,,,,,[-1]],,,,"CK",,,,,,,,,,,,
	,,,,,,[,,"99[689]",,,,"996"],,[,,"99[689]",,,,"996"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],CL:[,[,,"[1-9]\\d{2,4}",,,,,,,[3,4,5]],,,[,,"1(?:213|3[1-3])|434\\d|911",,,,"131",,,[3,4]],[,,"1(?:211|3(?:13|[348]0|5[01]))|(?:1(?:[05]6|[48]1|9[18])|2(?:01\\d|[23]2|77|88)|3(?:0[59]|13|3[279]|66)|4(?:[12]4|36\\d|4[017]|55)|5(?:00|41\\d|5[67]|99)|6(?:07\\d|13|22|3[06]|50|69)|787|8(?:[01]1|[48]8)|9(?:01|[12]0|33))\\d",,,,"1060",,,[4,5]],,,,"CL",,,,,,,,,,,,,,,,,,[,,"13[1-3]|911",,,,"131",,,[3]],,
	[,,"1(?:00|21[13]|3(?:13|[348]0|5[01])|4(?:0[02-6]|17|[379])|818|919)|2(?:0(?:01|122)|22[47]|323|777|882)|3(?:0(?:51|99)|132|3(?:29|[37]7)|665)|43656|5(?:(?:00|415)4|5(?:66|77)|995)|6(?:131|222|366|699)|7878|8(?:011|11[28]|482|889)|9(?:01|1)1|13\\d|4(?:[13]42|243|4(?:02|15|77)|554)|(?:1(?:[05]6|98)|339|6(?:07|[35])0|9(?:[12]0|33))0",,,,"100"],[,,"(?:200|333)\\d",,,,"2000",,,[4]],[,,,,,,,,,[-1]],,[,,"13(?:13|[348]0|5[01])|(?:1(?:[05]6|[28]1|4[01]|9[18])|2(?:0(?:0|1\\d)|[23]2|77|88)|3(?:0[59]|13|3[2379]|66)|436\\d|5(?:00|41\\d|5[67]|99)|6(?:07\\d|13|22|3[06]|50|69)|787|8(?:[01]1|[48]8)|9(?:01|[12]0|33))\\d|4(?:[1-3]4|4[017]|55)\\d",
	,,,"1060",,,[4,5]]],CM:[,[,,"[18]\\d{1,3}",,,,,,,[2,3,4]],,,[,,"1(?:1[37]|[37])",,,,"13",,,[2,3]],[,,,,,,,,,[-1]],,,,"CM",,,,,,,,,,,,,,,,,,[,,"1(?:1[37]|[37])",,,,"13",,,[2,3]],,[,,"1(?:1[37]|[37])|8711",,,,"13"],[,,,,,,,,,[-1]],[,,"871\\d",,,,"8710",,,[4]],,[,,"871\\d",,,,"8710",,,[4]]],CN:[,[,,"[19]\\d{2,5}",,,,,,,[3,4,5,6]],,,[,,"1(?:1[09]|2(?:[02]|1\\d\\d|395))",,,,"110",,,[3,5]],[,,,,,,,,,[-1]],,,,"CN",,,,,,,,,,,,,,,,,,[,,"1(?:1[09]|20)",,,,"110",,,[3]],,[,,"1(?:00|1[0249]|2395|6[08])|9[56]\\d{3,4}|12[023]|1(?:0(?:[0-26]\\d|8)|21\\d)\\d",
	,,,"100"],[,,"1(?:0(?:[0-26]\\d|8)\\d|1[24]|23|6[08])|9[56]\\d{3,4}|100",,,,"100"],[,,,,,,,,,[-1]],,[,,"12110",,,,"12110",,,[5]]],CO:[,[,,"[1-589]\\d\\d(?:\\d{2,3})?",,,,,,,[3,5,6]],,,[,,"1(?:1[29]|23|32|56)",,,,"112",,,[3]],[,,,,,,,,,[-1]],,,,"CO",,,,,,,,,,,,,,,,,,[,,"1(?:1[29]|23|32|56)",,,,"112",,,[3]],,[,,"1(?:06|1[2-9]|2[35-7]|3[27]|4[467]|5[36]|6[4-7]|95)|(?:29002|39003)9|40404|5930\\d\\d|85432|(?:[2359][57]|8(?:7|9\\d))\\d{3}",,,,"106"],[,,,,,,,,,[-1]],[,,"(?:40|85)4\\d\\d",,,,"40400",,,[5]],
	,[,,"(?:40|85)4\\d\\d",,,,"40400",,,[5]]],CR:[,[,,"[1359]\\d{2,3}",,,,,,,[3,4]],,,[,,"112|911",,,,"112",,,[3]],[,,,,,,,,,[-1]],,,,"CR",,,,,,,,,,,,,,,,,,[,,"112|911",,,,"112",,,[3]],,[,,"1(?:0(?:00|15|2[2-4679])|1(?:1[0-35-9]|2|37|[46]6|7[57]|8[79]|9[0-379])|2(?:00|[12]2|34|55)|3(?:21|33)|4(?:0[06]|1[4-6])|5(?:15|5[15])|693|7(?:00|1[7-9]|2[02]|[67]7)|975)|3855|5(?:0(?:30|49)|510)|911",,,,"112"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,"(?:385|5(?:0[34]|51))\\d",,,,"3850",,,[4]]],CU:[,[,,"[12]\\d\\d(?:\\d{3,4})?",
	,,,,,,[3,6,7]],,,[,,"10[4-7]|(?:116|204\\d)\\d{3}",,,,"104"],[,,,,,,,,,[-1]],,,,"CU",,,,,,,,,,,,,,,,,,[,,"10[4-6]",,,,"104",,,[3]],,[,,"1(?:0[4-7]|1(?:6111|8)|40)|2045252",,,,"104"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],CV:[,[,,"1\\d\\d",,,,,,,[3]],,,[,,"13[0-2]",,,,"130"],[,,,,,,,,,[-1]],,,,"CV",,,,,,,,,,,,,,,,,,[,,"13[0-2]",,,,"130"],,[,,"13[0-2]",,,,"130"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],CW:[,[,,"[19]\\d\\d",,,,,,,[3]],,,[,,"112|911",,,,"112"],[,,,,,,,,,[-1]],,,,"CW",
	,,,,,,,,,,,,,,,,,[,,"112|911",,,,"112"],,[,,"1(?:12|76)|911",,,,"112"],[,,,,,,,,,[-1]],[,,"176",,,,"176"],,[,,"176",,,,"176"]],CX:[,[,,"[01]\\d\\d",,,,,,,[3]],,,[,,"000|112",,,,"000"],[,,,,,,,,,[-1]],,,,"CX",,,,,,,,,,,,,,,,,,[,,"000|112",,,,"000"],,[,,"000|112",,,,"000"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],CY:[,[,,"1\\d\\d(?:\\d{3})?",,,,,,,[3,6]],,,[,,"1(?:1(?:2|6\\d{3})|99)",,,,"112"],[,,,,,,,,,[-1]],,,,"CY",,,,,,,,,,,,,,,,,,[,,"1(?:12|99)",,,,"112",,,[3]],,[,,"1(?:1(?:2|6(?:000|111))|99)",
	,,,"112"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],CZ:[,[,,"1\\d{2,5}",,,,,,,[3,4,5,6]],,,[,,"1(?:1(?:2|6(?:00[06]|1(?:11|23)))|5\\d)",,,,"112",,,[3,6]],[,,,,,,,,,[-1]],,,,"CZ",,,,,,,,,,,,,,,,,,[,,"1(?:12|5\\d)",,,,"112",,,[3]],,[,,"1(?:1(?:2|8\\d)|(?:2|3\\d)\\d{2,3}|5\\d|99)|1(?:16|4)\\d{3}",,,,"112"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],DE:[,[,,"[13]\\d{2,5}",,,,,,,[3,4,5,6]],,,[,,"11(?:[02]|6\\d{3})",,,,"110",,,[3,6]],[,,,,,,,,,[-1]],,,,"DE",,,,,,,,,,,,,,,,,,[,,"11[02]",,
	,,"110",,,[3]],,[,,"11(?:[025]|6(?:00[06]|1(?:1[167]|23))|800\\d)|3311|118\\d\\d",,,,"110"],[,,,,,,,,,[-1]],[,,"331\\d",,,,"3310",,,[4]],,[,,,,,,,,,[-1]]],DJ:[,[,,"1\\d",,,,,,,[2]],,,[,,"1[78]",,,,"17"],[,,,,,,,,,[-1]],,,,"DJ",,,,,,,,,,,,,,,,,,[,,"1[78]",,,,"17"],,[,,"1[78]",,,,"17"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],DK:[,[,,"1\\d{2,5}",,,,,,,[3,4,5,6]],,,[,,"11(?:[24]|6\\d{3})",,,,"112",,,[3,6]],[,,,,,,,,,[-1]],,,,"DK",,,,,,,,,,,,,,,,,,[,,"11[24]",,,,"112",,,[3]],,[,,"1(?:1(?:[2-48]|6(?:00[06]|111))|619[0-2]|8(?:01|1[0238]|28|30|5[13]|8[18]))",
	,,,"112"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],DM:[,[,,"[39]\\d\\d",,,,,,,[3]],,,[,,"333|9(?:11|88|99)",,,,"333"],[,,,,,,,,,[-1]],,,,"DM",,,,,,,,,,,,,,,,,,[,,"333|9(?:11|99)",,,,"333"],,[,,"333|9(?:11|88|99)",,,,"333"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],DO:[,[,,"[19]\\d\\d",,,,,,,[3]],,,[,,"112|9(?:11|88)",,,,"112"],[,,,,,,,,,[-1]],,,,"DO",,,,,,,,,,,,,,,,,,[,,"112|911",,,,"112"],,[,,"112|9(?:11|88)",,,,"112"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],DZ:[,[,,"[17]\\d{1,3}",
	,,,,,,[2,3,4]],,,[,,"1(?:12|[47]|54\\d)",,,,"14"],[,,,,,,,,,[-1]],,,,"DZ",,,,,,,,,,,,,,,,,,[,,"1(?:12|[47])",,,,"14",,,[2,3]],,[,,"1(?:055|12|[47]|548)|730",,,,"14"],[,,,,,,,,,[-1]],[,,"730",,,,"730",,,[3]],,[,,"730",,,,"730",,,[3]]],EC:[,[,,"[19]\\d\\d",,,,,,,[3]],,,[,,"1(?:0[12]|12)|911",,,,"101"],[,,,,,,,,,[-1]],,,,"EC",,,,,,,,,,,,,,,,,,[,,"1(?:0[12]|12)|911",,,,"101"],,[,,"1(?:0[12]|12)|911",,,,"101"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],EE:[,[,,"1\\d{2,5}",,,,,,,[3,4,5,6]],,,[,,
	"1(?:1(?:[02]|6\\d{3})|2(?:05|28)|3(?:014|3(?:21|5\\d?)|660)|492|5(?:1[03]|410|501)|6(?:112|333|644)|7(?:012|127|89)|8(?:10|8[57])|9(?:0[134]|14))",,,,"110"],[,,"1(?:18(?:00|[12458]\\d?)|2(?:0(?:[02-46-8]\\d?|1[0-36])|1(?:[0-4]\\d?|6[06])|2(?:[0-4]\\d?|5[25])|[367]|4(?:0[04]|[12]\\d?|4[24]|54)|55[12457])|3(?:0(?:[02]\\d?|1[13578]|3[356])|1[1347]|2[02-5]|3(?:[01347]\\d?|2[023]|88)|4(?:[35]\\d?|4[34])|5(?:3[134]|5[035])|666)|4(?:2(?:00|4\\d?)|4(?:0[01358]|1[024]|50|7\\d?)|900)|5(?:0[0-35]|1(?:[1267]\\d?|5[0-7]|82)|2(?:[014-6]\\d?|22)|330|4(?:[35]\\d?|44)|5(?:00|[1-69]\\d?)|9(?:[159]\\d?|[38]0|77))|6(?:1(?:00|1[19]|[35-9]\\d?)|2(?:2[26]|[68]\\d?)|3(?:22|36|6[36])|5|6(?:[0-359]\\d?|6[0-26])|7(?:00|55|7\\d?|8[89])|9(?:00|1\\d?|69))|7(?:0(?:[023]\\d?|1[0578])|1(?:00|2[034]|[4-9]\\d?)|2(?:[07]\\d?|20|44)|7(?:[0-57]\\d?|9[79])|8(?:0[08]|2\\d?|8[0178])|9(?:00|97))|8(?:1[127]|8[1268]|9[269])|9(?:0(?:[02]\\d?|69|9[0269])|1[1-3689]|21))",
	,,,"123",,,[3,4,5]],,,,"EE",,,,,,,,,,,,,,,,,,[,,"11[02]",,,,"110",,,[3]],,[,,"1(?:1(?:[02-579]|6(?:000|111)|8(?:[09]\\d|[1-8]))|2[36-9]|3[7-9]|4[05-7]|5[6-8]|6[05]|7[3-6]|8[02-7]|9[3-9])|1(?:2[0-245]|3[0-6]|4[1-489]|5[0-59]|6[1-46-9]|7[0-27-9]|8[189]|9[0-2])\\d\\d?",,,,"110"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,"1(?:18[1258]|2(?:0(?:1[036]|[46]\\d?)|166|21|4(?:0[04]|1\\d?|5[47])|[67])|3(?:0(?:1[13-578]|2\\d?|3[56])|1[15]|2[045]|3(?:[13]\\d?|2[13])|43|5(?:00|3[34]|53))|44(?:0[0135]|14|50|7\\d?)|5(?:05|1(?:[12]\\d?|5[1246]|8[12])|2(?:[01]\\d?|22)|3(?:00|3[03])|4(?:15|5\\d?)|500|9(?:5\\d?|77|80))|6(?:1[35-8]|226|3(?:22|3[36]|66)|644|7(?:00|7\\d?|89)|9(?:00|69))|7(?:01[258]|1(?:00|[15]\\d?)|2(?:44|7\\d?)|8(?:00|87|9\\d?))|8(?:1[128]|8[56]|9(?:[26]\\d?|77))|90(?:2\\d?|69|92))",
	,,,"126",,,[3,4,5]]],EG:[,[,,"[13]\\d\\d(?:\\d{2})?",,,,,,,[3,5]],,,[,,"1(?:2[23]|80)",,,,"122",,,[3]],[,,,,,,,,,[-1]],,,,"EG",,,,,,,,,,,,,,,,,,[,,"1(?:2[23]|80)",,,,"122",,,[3]],,[,,"1(?:2[23]|[679]\\d{3}|80)|34400",,,,"122"],[,,,,,,,,,[-1]],[,,"344\\d\\d",,,,"34400",,,[5]],,[,,"344\\d\\d",,,,"34400",,,[5]]],EH:[,[,,"1\\d\\d?",,,,,,,[2,3]],,,[,,"1(?:[59]|77)",,,,"15"],[,,,,,,,,,[-1]],,,,"EH",,,,,,,,,,,,,,,,,,[,,"1(?:[59]|77)",,,,"15"],,[,,"1(?:[59]|77)",,,,"15"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,
	[,,,,,,,,,[-1]]],ER:[,[,,"[12]\\d\\d(?:\\d{3})?",,,,,,,[3,6]],,,[,,"11[2-46]|(?:12[47]|20[12])\\d{3}",,,,"112"],[,,,,,,,,,[-1]],,,,"ER",,,,,,,,,,,,,,,,,,[,,"1(?:1[2-46]|24422)|20(?:1(?:606|917)|2914)|(?:1277|2020)99",,,,"112"],,[,,"1(?:1[2-6]|24422)|20(?:1(?:606|917)|2914)|(?:1277|2020)99",,,,"112"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],ES:[,[,,"[0-379]\\d{2,5}",,,,,,,[3,4,5,6]],,,[,,"0(?:16|6[57]|8[58])|1(?:006|12|[3-7]\\d\\d)|(?:116|20\\d)\\d{3}",,,,"016",,,[3,4,6]],[,,"[12]2\\d{1,4}|90(?:5\\d|7)|(?:118|2(?:[357]\\d|80)|3[357]\\d)\\d\\d|[79]9[57]\\d{3}",
	,,,"120"],,,,"ES",,,,,,,,,,,,,,,,,,[,,"08[58]|112",,,,"085",,,[3]],,[,,"0(?:1[0-26]|6[0-257]|8[058]|9[12])|1(?:0[03-57]\\d{1,3}|1(?:2|6(?:000|111)|8\\d\\d)|2\\d{1,4}|[3-9]\\d\\d)|2(?:2\\d{1,4}|80\\d\\d)|90(?:5[124578]|7)|1(?:3[34]|77)|(?:2[01]\\d|[79]9[57])\\d{3}|[23][357]\\d{3}",,,,"010"],[,,"0(?:[16][0-2]|80|9[12])|21\\d{4}",,,,"010",,,[3,6]],[,,"1(?:3[34]|77)|[12]2\\d{1,4}",,,,"120"],,[,,"(?:2[0-2]\\d|3[357]|[79]9[57])\\d{3}|2(?:[2357]\\d|80)\\d\\d",,,,"22000",,,[5,6]]],ET:[,[,,"9\\d\\d?",,,,,
	,,[2,3]],,,[,,"9(?:07|11?|2|39?|9[17])",,,,"91"],[,,,,,,,,,[-1]],,,,"ET",,,,,,,,,,,,,,,,,,[,,"9(?:11?|2|39?|9[17])",,,,"91"],,[,,"9(?:07|11?|2|39?|45|9[17])",,,,"91"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],FI:[,[,,"[17]\\d\\d(?:\\d{2,3})?",,,,,,,[3,5,6]],,,[,,"11(?:2|6\\d{3})",,,,"112",,,[3,6]],[,,,,,,,,,[-1]],,,,"FI",,,,,,,,,,,,,,,,,,[,,"112",,,,"112",,,[3]],,[,,"11(?:2|6(?:00[06]|1(?:1[17]|23)))|(?:1[235-8]\\d|75[12])\\d\\d",,,,"112"],[,,"1[235-8]\\d{3}",,,,"12000",,,[5]],[,,,,,,,,,[-1]],
	,[,,,,,,,,,[-1]]],FJ:[,[,,"[0-579]\\d(?:\\d(?:\\d{2})?)?",,,,,,,[2,3,5]],,,[,,"91[17]",,,,"911",,,[3]],[,,,,,,,,,[-1]],,,,"FJ",,,,,,,,,,,,,,,,,,[,,"91[17]",,,,"911",,,[3]],,[,,"0(?:1[34]|8[1-4])|1(?:0[1-3]|[25]9)|2[289]|30|40404|91[137]|[45]4|75",,,,"22"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,"404\\d\\d",,,,"40400",,,[5]]],FK:[,[,,"[19]\\d\\d",,,,,,,[3]],,,[,,"999",,,,"999"],[,,,,,,,,,[-1]],,,,"FK",,,,,,,,,,,,,,,,,,[,,"999",,,,"999"],,[,,"1\\d\\d|999",,,,"100"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,
	,,,,,,[-1]]],FM:[,[,,"[39]\\d\\d(?:\\d{3})?",,,,,,,[3,6]],,,[,,"320\\d{3}|911",,,,"911"],[,,,,,,,,,[-1]],,,,"FM",,,,,,,,,,,,,,,,,,[,,"(?:32022|91)1",,,,"911"],,[,,"(?:32022|91)1",,,,"911"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],FO:[,[,,"1\\d{2,3}",,,,,,,[3,4]],,,[,,"1(?:1[24]|81\\d)",,,,"112"],[,,,,,,,,,[-1]],,,,"FO",,,,,,,,,,,,,,,,,,[,,"11[24]",,,,"112",,,[3]],,[,,"1(?:1[248]|819)|1(?:4[124]|71|8[7-9])\\d",,,,"112"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],FR:[,[,,"[1-8]\\d{1,5}",
	,,,,,,[2,3,4,5,6]],,,[,,"1(?:1[02459]|[578]|9[167])|224|(?:3370|74)0|(?:116\\d|3[01])\\d\\d",,,,"15"],[,,"(?:1(?:0|18\\d)|366|[4-8]\\d\\d)\\d\\d|3[2-9]\\d\\d",,,,"1000",,,[4,5,6]],,,,"FR",,,,,,,,,,,,,,,,,,[,,"1(?:12|[578])",,,,"15",,,[2,3]],,[,,"1(?:0\\d\\d|1(?:[02459]|6(?:000|111)|8\\d{3})|[578]|9[167])|2(?:0(?:00|2)0|24)|[3-8]\\d{4}|3\\d{3}|6(?:1[14]|34)|7(?:0[06]|22|40)",,,,"15"],[,,"202\\d|6(?:1[14]|34)|70[06]",,,,"611",,,[3,4]],[,,"118777|224|6(?:1[14]|34)|7(?:0[06]|22|40)|20(?:0\\d|2)\\d",,
	,,"224",,,[3,4,5,6]],,[,,"114|[3-8]\\d{4}",,,,"114",,,[3,5]]],GA:[,[,,"1\\d(?:\\d{2})?",,,,,,,[2,4]],,,[,,"18|1(?:3\\d|73)\\d",,,,"18"],[,,,,,,,,,[-1]],,,,"GA",,,,,,,,,,,,,,,,,,[,,"1(?:3\\d\\d|730|8)",,,,"18"],,[,,"1(?:3\\d\\d|730|8)",,,,"18"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],GB:[,[,,"[1-46-9]\\d{2,5}",,,,,,,[3,4,5,6]],,,[,,"1(?:05|1(?:[29]|6\\d{3})|7[56]\\d|8000)|2(?:20\\d|48)|4444|999",,,,"105"],[,,,,,,,,,[-1]],,,,"GB",,,,,,,,,,,,,,,,,,[,,"112|999",,,,"112",,,[3]],,[,,"1(?:0[015]|1(?:[129]|6(?:000|1(?:11|23))|8\\d{3})|2(?:[1-3]|50)|33|4(?:1|7\\d)|571|7(?:0\\d|[56]0)|800\\d|9[15])|2(?:0202|1300|2(?:02|11)|3(?:02|336|45)|4(?:25|8))|3[13]3|4(?:0[02]|35[01]|44[45]|5\\d)|(?:[68]\\d|7[089])\\d{3}|15\\d|2[02]2|650|789|9(?:01|99)",
	,,,"100"],[,,,,,,,,,[-1]],[,,"1(?:(?:25|7[56])\\d|571)|2(?:02(?:\\d{2})?|[13]3\\d\\d|48)|4444|901",,,,"202",,,[3,4,5]],,[,,"(?:125|2(?:020|13\\d)|(?:7[089]|8[01])\\d\\d)\\d",,,,"1250",,,[4,5]]],GD:[,[,,"[19]\\d\\d",,,,,,,[3]],,,[,,"9(?:11|88)",,,,"911"],[,,,,,,,,,[-1]],,,,"GD",,,,,,,,,,,,,,,,,,[,,"911",,,,"911"],,[,,"176|9(?:11|88)",,,,"176"],[,,,,,,,,,[-1]],[,,"176",,,,"176"],,[,,"176",,,,"176"]],GE:[,[,,"[014]\\d\\d(?:\\d{2})?",,,,,,,[3,5]],,,[,,"0(?:11|33)|11[1-3]|[01]22",,,,"011",,,[3]],[,,,,
	,,,,,[-1]],,,,"GE",,,,,,,,,,,,,,,,,,[,,"0(?:11|33)|11[1-3]|[01]22",,,,"011",,,[3]],,[,,"0(?:11|33)|11[1-3]|40404|[01]22",,,,"011"],[,,,,,,,,,[-1]],[,,"404\\d\\d",,,,"40400",,,[5]],,[,,"404\\d\\d",,,,"40400",,,[5]]],GF:[,[,,"1\\d",,,,,,,[2]],,,[,,"1[578]",,,,"15"],[,,,,,,,,,[-1]],,,,"GF",,,,,,,,,,,,,,,,,,[,,"1[578]",,,,"15"],,[,,"1[578]",,,,"15"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],GG:[,[,,"[19]\\d{2,5}",,,,,,,[3,4,5,6]],,,[,,"112|999",,,,"112",,,[3]],[,,,,,,,,,[-1]],,,,"GG",,,,,,,,,
	,,,,,,,,,[,,"112|999",,,,"112",,,[3]],,[,,"1(?:0[01]|1[12]|23|41|55|9[05])|999|1(?:1[68]\\d\\d|47|800)\\d",,,,"100"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],GH:[,[,,"[14589]\\d{2,4}",,,,,,,[3,4,5]],,,[,,"19[1-3]|999",,,,"191",,,[3]],[,,,,,,,,,[-1]],,,,"GH",,,,,,,,,,,,,,,,,,[,,"19[1-3]|999",,,,"191",,,[3]],,[,,"19[1-3]|40404|(?:54|83)00|999",,,,"191"],[,,,,,,,,,[-1]],[,,"404\\d\\d|(?:54|83)0\\d",,,,"5400",,,[4,5]],,[,,"404\\d\\d|(?:54|83)0\\d",,,,"5400",,,[4,5]]],GI:[,[,,"[158]\\d{2,5}",
	,,,,,,[3,4,5,6]],,,[,,"1(?:00|1[25]|23|4(?:1|7\\d)|5[15]|9[02-49])|555|(?:116\\d|80)\\d\\d",,,,"100",,,[3,4,6]],[,,"8[1-69]\\d\\d",,,,"8100",,,[4]],,,,"GI",,,,,,,,,,,,,,,,,,[,,"1(?:12|9[09])",,,,"112",,,[3]],,[,,"1(?:00|1(?:[25]|6(?:00[06]|1(?:1[17]|23))|8\\d\\d)|23|4(?:1|7[014])|5[015]|9[02-49])|555|8[0-79]\\d\\d|8(?:00|4[0-2]|8[0-589])",,,,"100"],[,,"150|87\\d\\d",,,,"150",,,[3,4]],[,,"1(?:00|1(?:5|8\\d\\d)|23|51|9[2-4])|555|8(?:00|4[0-2]|8[0-589])",,,,"100",,,[3,5]],,[,,,,,,,,,[-1]]],GL:[,[,,"1\\d\\d",
	,,,,,,[3]],,,[,,"112",,,,"112"],[,,,,,,,,,[-1]],,,,"GL",,,,,,,,,,,,,,,,,,[,,"112",,,,"112"],,[,,"1[1-8]\\d",,,,"110"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],GM:[,[,,"1\\d\\d?",,,,,,,[2,3]],,,[,,"1(?:1[6-8]|[6-8])",,,,"16"],[,,,,,,,,,[-1]],,,,"GM",,,,,,,,,,,,,,,,,,[,,"1(?:1[6-8]|[6-8])",,,,"16"],,[,,"1(?:1[6-8]|[6-8])",,,,"16"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],GN:[,[,,"[14]\\d\\d(?:\\d{2})?",,,,,,,[3,5]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,,"GN",,,,,,,,,,,,,,,,,,[,,,,,,
	,,,[-1]],,[,,"12\\d|40404",,,,"120"],[,,,,,,,,,[-1]],[,,"404\\d\\d",,,,"40400",,,[5]],,[,,"404\\d\\d",,,,"40400",,,[5]]],GP:[,[,,"1\\d",,,,,,,[2]],,,[,,"1[578]",,,,"15"],[,,,,,,,,,[-1]],,,,"GP",,,,,,,,,,,,,,,,,,[,,"1[578]",,,,"15"],,[,,"1[578]",,,,"15"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],GR:[,[,,"1\\d\\d(?:\\d{2,3})?",,,,,,,[3,5,6]],,,[,,"1(?:0[089]|1(?:2|6\\d{3})|66|99)",,,,"100",,,[3,6]],[,,,,,,,,,[-1]],,,,"GR",,,,,,,,,,,,,,,,,,[,,"1(?:00|12|66|99)",,,,"100",,,[3]],,[,,"1(?:0[089]|1(?:2|320|6(?:000|1(?:1[17]|23)))|(?:389|9)9|66)",
	,,,"100"],[,,"113\\d\\d",,,,"11300",,,[5]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],GT:[,[,,"[14]\\d{2,4}",,,,,,,[3,4,5]],,,[,,"1(?:10|2[03])",,,,"110",,,[3]],[,,,,,,,,,[-1]],,,,"GT",,,,,,,,,,,,,,,,,,[,,"1(?:10|2[03])",,,,"110",,,[3]],,[,,"110|40404|1(?:2|[57]\\d)\\d",,,,"110"],[,,,,,,,,,[-1]],[,,"404\\d\\d",,,,"40400",,,[5]],,[,,"404\\d\\d",,,,"40400",,,[5]]],GU:[,[,,"9\\d\\d",,,,,,,[3]],,,[,,"9(?:11|88)",,,,"911"],[,,,,,,,,,[-1]],,,,"GU",,,,,,,,,,,,,,,,,,[,,"911",,,,"911"],,[,,"9(?:11|88)",,,,"911"],[,
	,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],GW:[,[,,"1\\d\\d",,,,,,,[3]],,,[,,"11[378]",,,,"113"],[,,,,,,,,,[-1]],,,,"GW",,,,,,,,,,,,,,,,,,[,,"11[378]",,,,"113"],,[,,"11[378]",,,,"113"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],GY:[,[,,"[019]\\d{2,3}",,,,,,,[3,4]],,,[,,"91[1-3]",,,,"911",,,[3]],[,,,,,,,,,[-1]],,,,"GY",,,,,,,,,,,,,,,,,,[,,"91[1-3]",,,,"911",,,[3]],,[,,"0(?:02|(?:17|80)1|444|7(?:[67]7|9)|9(?:0[78]|[2-47]))|1(?:443|5[568])|91[1-3]",,,,"002"],[,,,,,,,,,[-1]],[,,"144\\d",,
	,,"1440",,,[4]],,[,,"144\\d",,,,"1440",,,[4]]],HK:[,[,,"[19]\\d{2,6}",,,,,,,[3,4,5,6,7]],,,[,,"112|99[29]",,,,"112",,,[3]],[,,,,,,,,,[-1]],,,,"HK",,,,,,,,,,,,,,,,,,[,,"112|99[29]",,,,"112",,,[3]],,[,,"1(?:0(?:(?:[0136]\\d|2[14])\\d{0,3}|8[138])|12|2(?:[0-3]\\d{0,4}|(?:58|8[13])\\d{0,3})|7(?:[135-9]\\d{0,4}|219\\d{0,2})|8(?:0(?:(?:[13]|60\\d)\\d|8)|1(?:0\\d|[2-8])|2(?:0[5-9]|(?:18|2)2|3|8[128])|(?:(?:3[0-689]\\d|7(?:2[1-389]|8[0235-9]|93))\\d|8)\\d|50[138]|6(?:1(?:11|86)|8)))|99[29]|10[0139]",,,,"100"],
	[,,,,,,,,,[-1]],[,,"109|1(?:08|85\\d)\\d",,,,"109",,,[3,4,5]],,[,,"992",,,,"992",,,[3]]],HN:[,[,,"[14]\\d\\d(?:\\d{2})?",,,,,,,[3,5]],,,[,,"199",,,,"199",,,[3]],[,,,,,,,,,[-1]],,,,"HN",,,,,,,,,,,,,,,,,,[,,"199",,,,"199",,,[3]],,[,,"199|40404",,,,"199"],[,,,,,,,,,[-1]],[,,"404\\d\\d",,,,"40400",,,[5]],,[,,"404\\d\\d",,,,"40400",,,[5]]],HR:[,[,,"[19]\\d{1,5}",,,,,,,[2,3,4,5,6]],,,[,,"1(?:12|9[2-4])|9[34]|1(?:16\\d|39)\\d\\d",,,,"93",,,[2,3,5,6]],[,,"118\\d\\d",,,,"11800",,,[5]],,,,"HR",,,,,,,,,,,,,
	,,,,,[,,"1(?:12|9[2-4])|9[34]",,,,"93",,,[2,3]],,[,,"1(?:1(?:2|6(?:00[06]|1(?:1[17]|23))|8\\d\\d)|3977|9(?:[2-5]|87))|9[34]",,,,"93"],[,,,,,,,,,[-1]],[,,"139\\d\\d",,,,"13900",,,[5]],,[,,"139\\d\\d",,,,"13900",,,[5]]],HT:[,[,,"[14]\\d\\d(?:\\d{2})?",,,,,,,[3,5]],,,[,,"11[48]",,,,"114",,,[3]],[,,,,,,,,,[-1]],,,,"HT",,,,,,,,,,,,,,,,,,[,,"11[48]",,,,"114",,,[3]],,[,,"11[48]|40404",,,,"114"],[,,,,,,,,,[-1]],[,,"404\\d\\d",,,,"40400",,,[5]],,[,,"404\\d\\d",,,,"40400",,,[5]]],HU:[,[,,"1\\d{2,5}",,,,,,,
	[3,4,5,6]],,,[,,"1(?:0[457]|12|4[0-4]\\d)|1(?:16\\d|37|45)\\d\\d",,,,"104"],[,,,,,,,,,[-1]],,,,"HU",,,,,,,,,,,,,,,,,,[,,"1(?:0[457]|12)",,,,"104",,,[3]],,[,,"1(?:0[457]|1(?:2|6(?:000|1(?:11|23))|800)|2(?:0[0-4]|1[013489]|2[0-5]|3[0-46]|4[0-24-68]|5[0-2568]|6[06]|7[0-25-7]|8[028]|9[08])|37(?:00|37|7[07])|4(?:0[0-5]|1[013-8]|2[034]|3[23]|4[02-9]|5(?:00|41|67))|777|8(?:1[27-9]|2[04]|40|[589]))",,,,"104"],[,,,,,,,,,[-1]],[,,"1(?:4[0-4]|77)\\d|1(?:18|2|45)\\d\\d",,,,"1200",,,[4,5]],,[,,"184\\d",,,,"1840",
	,,[4]]],ID:[,[,,"[178]\\d\\d(?:\\d{2,3})?",,,,,,,[3,5,6]],,,[,,"11[02389]",,,,"110",,,[3]],[,,,,,,,,,[-1]],,,,"ID",,,,,,,,,,,,,,,,,,[,,"11[02389]",,,,"110",,,[3]],,[,,"1(?:1[02389]|40\\d\\d|50264)|71400|89887",,,,"110"],[,,,,,,,,,[-1]],[,,"(?:714|898)\\d\\d",,,,"71400",,,[5]],,[,,"714\\d\\d",,,,"71400",,,[5]]],IE:[,[,,"[159]\\d{2,5}",,,,,,,[3,4,5,6]],,,[,,"11(?:2|6\\d{3})|999",,,,"112",,,[3,6]],[,,"5[37]\\d{3}",,,,"53000",,,[5]],,,,"IE",,,,,,,,,,,,,,,,,,[,,"112|999",,,,"112",,,[3]],,[,,"11(?:2|6(?:00[06]|1(?:1[17]|23)))|999|(?:1(?:18|9)|5[0137]\\d)\\d\\d",
	,,,"112"],[,,"51\\d{3}",,,,"51000",,,[5]],[,,"51210",,,,"51210",,,[5]],,[,,"51210|(?:118|5[037]\\d)\\d\\d",,,,"11800",,,[5]]],IL:[,[,,"[12]\\d{2,4}",,,,,,,[3,4,5]],,,[,,"1(?:0[0-2]|12)",,,,"100",,,[3]],[,,,,,,,,,[-1]],,,,"IL",,,,,,,,,,,,,,,,,,[,,"1(?:0[0-2]|12)",,,,"100",,,[3]],,[,,"1(?:0[0-2]|1(?:[013-9]\\d|2)|[2-9]\\d\\d)|2407|(?:104|27)00",,,,"100"],[,,,,,,,,,[-1]],[,,"104\\d\\d",,,,"10400",,,[5]],,[,,"104\\d\\d",,,,"10400",,,[5]]],IM:[,[,,"[189]\\d\\d(?:\\d{2,3})?",,,,,,,[3,5,6]],,,[,,"999",,
	,,"999",,,[3]],[,,,,,,,,,[-1]],,,,"IM",,,,,,,,,,,,,,,,,,[,,"999",,,,"999",,,[3]],,[,,"1\\d\\d(?:\\d{3})?|8(?:6444|9887)|999",,,,"100"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,"8(?:64|98)\\d\\d",,,,"86400",,,[5]]],IN:[,[,,"[12578]\\d{2,8}",,,,,,,[3,4,5,6,7,8,9]],,,[,,"1(?:0[0-248]|1[289]|21|[39][89]|4[01]|6(?:1|6\\d?)|8[12])|777|800|1[05]5\\d|1(?:07|51|94)\\d\\d?|(?:1(?:[05]5\\d|70)\\d|261)\\d|1(?:0[369]|10|29|3[126]|9[0-256])\\d",,,,"100",,,[3,4,5,6]],[,,"11[67]\\d{4}|56161561",,,,"1160000",,,[7,8]],
	,,,"IN",,,,,,,,,,,,,,,,,,[,,"1(?:0[0-28]|12|298)|2611",,,,"100",,,[3,4]],,[,,"1(?:0(?:[0-248]|3[39]|5(?:010|6)|6[3468]|7(?:[01357]|[28]0?|4[01])|9[0135-9])|1(?:00|[289])|2(?:1|98)|3(?:11|2[0-2]|63|[89])|4[01]|5(?:1(?:0[0-36]|[127])|54)|6(?:1|6[01]?)|7000|8[12]|9(?:0[013-59]|12|25|4[4-9]\\d?|50|6[1347]|[89]))|2611|5(?:0(?:0(?:0\\d|1|20?)|325|5[2-79]\\d{3,5})|1(?:234|555|717|818|96[49])|2(?:0(?:0[01]|[14]0)|151|555|666|888|9(?:06|99\\d?))|3(?:0[01]0|131|553|(?:66|77)6)|(?:464|55[05])\\d{1,3}|6(?:070|3[68]|43)|717\\d)|777|800|5(?:05(?:0|1\\d)|221|3(?:03|3[23]))\\d{1,4}|5(?:(?:04|88)0|2(?:2[0267]|3[16])|4(?:1[04]|20|3[02])|5(?:3[16]|67)|6(?:06|[67]\\d)|787|9(?:64|90))\\d\\d?|(?:1(?:05[79]|(?:1[67][0-2]|802)\\d|55[23])\\d|5(?:(?:00(?:0\\d|1)|(?:304|616)\\d\\d)\\d|1(?:0[12]|4[2-4])|2(?:2[3589]|3(?:1\\d{3}|2)|4[04]|7[78])|4(?:[02]4|32\\d{4}|4[04]|99)|5(?:1[25]|[36]5|4[45]|93)|7(?:(?:17\\d|57)\\d\\d|[27]7|88)|8(?:3[4-69]|4[01]|5[58]|88(?:8\\d\\d|9)|99)|9(?:0(?:0|2\\d{3})|55|6[67]|77|88)))\\d",
	,,,"100"],[,,"5(?:14(?:2[5-9]|[34]\\d)|757555)",,,,"51425",,,[5,7]],[,,"1(?:(?:1[67]\\d\\d|70)\\d\\d|55330|909)|5(?:300\\d|6161(?:17[89]|561))|1(?:[19][89]|21|4[01])",,,,"118",,,[3,4,5,6,7,8]],,[,,"1(?:39|90[019])|5(?:14(?:2[5-9]|[34]\\d)|6161(?:17[89]|561)|757555)",,,,"139",,,[3,4,5,7,8]]],IQ:[,[,,"[1479]\\d{2,4}",,,,,,,[3,4,5]],,,[,,"1(?:0[04]|15|22)",,,,"100",,,[3]],[,,,,,,,,,[-1]],,,,"IQ",,,,,,,,,,,,,,,,,,[,,"1(?:0[04]|15|22)",,,,"100",,,[3]],,[,,"1(?:0[04]|15|22)|4432|71117|9988",,,,"100"],[,
	,,,,,,,,[-1]],[,,"(?:443|711\\d|998)\\d",,,,"4430",,,[4,5]],,[,,"(?:443|711\\d|998)\\d",,,,"4430",,,[4,5]]],IR:[,[,,"[129]\\d{2,5}",,,,,,,[3,4,5,6]],,,[,,"1(?:1[0-68]|2[0-59]|9[0-579])|911",,,,"110",,,[3]],[,,,,,,,,,[-1]],,,,"IR",,,,,,,,,,,,,,,,,,[,,"1(?:1[025]|25)|911",,,,"110",,,[3]],,[,,"1(?:1[0-68]|2[0-59]|3[346-8]|4(?:[0147]|[289]0)|5(?:0[14]|1[02479]|2[0-3]|39|[49]0|65)|6(?:[16]6|[27]|90)|8(?:03|1[18]|22|3[37]|4[28]|88|99)|9[0-579])|20(?:[09]0|1(?:[038]|1[079]|26|9[69])|2[01])|9(?:11|9(?:0009|90))",
	,,,"110"],[,,"1(?:5[0-469]|8[0-489])\\d",,,,"1500",,,[4]],[,,"(?:1(?:5[0-469]|8[0-489])|99(?:0\\d\\d|9))\\d",,,,"1500",,,[4,6]],,[,,"990\\d{3}",,,,"990000",,,[6]]],IS:[,[,,"1\\d\\d(?:\\d(?:\\d{2})?)?",,,,,,,[3,4,6]],,,[,,"1(?:12|71\\d)",,,,"112",,,[3,4]],[,,,,,,,,,[-1]],,,,"IS",,,,,,,,,,,,,,,,,,[,,"112",,,,"112",,,[3]],,[,,"1(?:1(?:[28]|61(?:16|23))|4(?:00|1[145]|4[0146])|55|7(?:00|17|7[07-9])|8(?:[02]0|1[16-9]|88)|900)",,,,"112"],[,,,,,,,,,[-1]],[,,"14(?:0\\d|41)",,,,"1400",,,[4]],,[,,"1(?:415|90\\d)",
	,,,"1415",,,[4]]],IT:[,[,,"[14]\\d{2,6}",,,,,,,[3,4,5,6,7]],,,[,,"1(?:1(?:[2358]|6\\d{3})|87)",,,,"112",,,[3,6]],[,,"(?:12|4(?:[478](?:[0-4]|[5-9]\\d\\d)|55))\\d\\d",,,,"1200",,,[4,5,7]],,,,"IT",,,,,,,,,,,,,,,,,,[,,"11[2358]",,,,"112",,,[3]],,[,,"1(?:0\\d{2,3}|1(?:[2-57-9]|6(?:000|111))|3[39]|4(?:82|9\\d{1,3})|5(?:00|1[58]|2[25]|3[03]|44|[59])|60|8[67]|9(?:[01]|2[2-9]|4\\d|696))|4(?:2323|5045)|(?:1(?:2|92[01])|4(?:3(?:[01]|[45]\\d\\d)|[478](?:[0-4]|[5-9]\\d\\d)|55))\\d\\d",,,,"112"],[,,,,,,,,,[-1]],
	[,,,,,,,,,[-1]],,[,,"4(?:3(?:[01]|[45]\\d\\d)|[478](?:[0-4]|[5-9]\\d\\d)|5[05])\\d\\d",,,,"43000",,,[5,7]]],JE:[,[,,"[129]\\d\\d(?:\\d(?:\\d{2})?)?",,,,,,,[3,4,6]],,,[,,"112|999",,,,"112",,,[3]],[,,,,,,,,,[-1]],,,,"JE",,,,,,,,,,,,,,,,,,[,,"112|999",,,,"112",,,[3]],,[,,"1(?:00|1(?:2|8\\d{3})|23|4(?:[14]|28|7\\d)|5\\d|7(?:0[12]|[128]|35?)|808|9[0135])|23[2-4]|999",,,,"100"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],JM:[,[,,"[19]\\d\\d",,,,,,,[3]],,,[,,"11[029]|9(?:11|88)",,,,"110"],[,,,,,,,
	,,[-1]],,,,"JM",,,,,,,,,,,,,,,,,,[,,"11[029]|911",,,,"110"],,[,,"1(?:1[029]|76)|9(?:11|88)",,,,"110"],[,,,,,,,,,[-1]],[,,"176",,,,"176"],,[,,"176",,,,"176"]],JO:[,[,,"[19]\\d\\d(?:\\d{2})?",,,,,,,[3,5]],,,[,,"1(?:0[235]|1[2-6]|9[127])|911",,,,"102",,,[3]],[,,"9[0-4689]\\d{3}",,,,"90000",,,[5]],,,,"JO",,,,,,,,,,,,,,,,,,[,,"1(?:12|9[127])|911",,,,"112",,,[3]],,[,,"1(?:0[2359]|1[0-68]|9[0-24-79])|9[0-4689]\\d{3}|911",,,,"102"],[,,,,,,,,,[-1]],[,,"9[0-4689]\\d{3}",,,,"90000",,,[5]],,[,,"9[0-4689]\\d{3}",
	,,,"90000",,,[5]]],JP:[,[,,"[01]\\d\\d(?:\\d{7})?",,,,,,,[3,10]],,,[,,"11[089]",,,,"110",,,[3]],[,,,,,,,,,[-1]],,,,"JP",,,,,,,,,,,,,,,,,,[,,"11[09]",,,,"110",,,[3]],,[,,"000[259]\\d{6}|1(?:0[24]|1[089]|44|89)",,,,"102"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,"000[259]\\d{6}",,,,"0002000000",,,[10]]],KE:[,[,,"[1-9]\\d{2,4}",,,,,,,[3,4,5]],,,[,,"1(?:1(?:[246]|9\\d)|5(?:01|2[127]|6[26]\\d))|999",,,,"112"],[,,"909\\d\\d",,,,"90900",,,[5]],,,,"KE",,,,,,,,,,,,,,,,,,[,,"11[24]|999",,,,"112",,,[3]],,[,,"1(?:0(?:[07-9]|1[0-25]|400)|1(?:[024-6]|9[0-579])|2[1-3]|3[01]|4[14]|5(?:[01][01]|2[0-24-79]|33|4[05]|5[59]|6(?:00|29|6[67]))|(?:6[035]\\d|[78])\\d|9(?:[02-9]\\d\\d|19))|(?:(?:2[0-79]|[37][0-29]|4[0-4]|6[2357]|8\\d)\\d|5(?:[0-7]\\d|99))\\d\\d|9(?:09\\d\\d|99)|8988",
	,,,"100"],[,,,,,,,,,[-1]],[,,"1(?:(?:04|6[35])\\d\\d|3[01]|4[14]|5(?:1\\d|2[25]))|(?:(?:2[0-79]|[37][0-29]|4[0-4]|6[2357]|8\\d)\\d|5(?:[0-7]\\d|99)|909)\\d\\d|898\\d",,,,"130"],,[,,"1(?:(?:04|6[035])\\d\\d|4[14]|5(?:01|55|6[26]\\d))|40404|8988|909\\d\\d",,,,"141"]],KG:[,[,,"[14]\\d{2,3}",,,,,,,[3,4]],,,[,,"10[1-3]",,,,"101",,,[3]],[,,,,,,,,,[-1]],,,,"KG",,,,,,,,,,,,,,,,,,[,,"10[1-3]",,,,"101",,,[3]],,[,,"10[1-3]|4040",,,,"101"],[,,,,,,,,,[-1]],[,,"404\\d",,,,"4040",,,[4]],,[,,"404\\d",,,,"4040",,
	,[4]]],KH:[,[,,"[146]\\d\\d(?:\\d{2})?",,,,,,,[3,5]],,,[,,"11[7-9]|666",,,,"117",,,[3]],[,,,,,,,,,[-1]],,,,"KH",,,,,,,,,,,,,,,,,,[,,"11[7-9]|666",,,,"117",,,[3]],,[,,"11[7-9]|40404|666",,,,"117"],[,,,,,,,,,[-1]],[,,"404\\d\\d",,,,"40400",,,[5]],,[,,"404\\d\\d",,,,"40400",,,[5]]],KI:[,[,,"[179]\\d{2,3}",,,,,,,[3,4]],,,[,,"19[2-5]|99[2-4]",,,,"192",,,[3]],[,,,,,,,,,[-1]],,,,"KI",,,,,,,,,,,,,,,,,,[,,"19[2-5]|99[2-4]",,,,"192",,,[3]],,[,,"1(?:05[0-259]|88|9[2-5])|777|99[2-4]|10[0-8]",,,,"100"],[,,"103",
	,,,"103",,,[3]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],KM:[,[,,"1\\d",,,,,,,[2]],,,[,,"1[78]",,,,"17"],[,,,,,,,,,[-1]],,,,"KM",,,,,,,,,,,,,,,,,,[,,"1[78]",,,,"17"],,[,,"1[78]",,,,"17"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],KN:[,[,,"[39]\\d\\d",,,,,,,[3]],,,[,,"333|9(?:11|88|99)",,,,"333"],[,,,,,,,,,[-1]],,,,"KN",,,,,,,,,,,,,,,,,,[,,"333|9(?:11|99)",,,,"333"],,[,,"333|9(?:11|88|99)",,,,"333"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],KP:[,[,,"[18]\\d\\d",,,,,,,[3]],,,[,,"11[29]|819",
	,,,"112"],[,,,,,,,,,[-1]],,,,"KP",,,,,,,,,,,,,,,,,,[,,"11[29]|819",,,,"112"],,[,,"11[29]|819",,,,"112"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],KR:[,[,,"1\\d{2,4}",,,,,,,[3,4,5]],,,[,,"1(?:1[27-9]|28|330|82)",,,,"112",,,[3,4]],[,,,,,,,,,[-1]],,,,"KR",,,,,,,,,,,,,,,,,,[,,"11[29]",,,,"112",,,[3]],,[,,"1(?:[016-9]114|3(?:0[01]|2|3[0-35-9]|45?|5[057]|6[569]|7[79]|8[2589]|9[0189]))|1(?:0[015]|1\\d|2[01357-9]|41|8[28])",,,,"100"],[,,,,,,,,,[-1]],[,,"1(?:0[01]|1[4-6]|41)|1(?:[06-9]1\\d|111)\\d",
	,,,"100",,,[3,5]],,[,,,,,,,,,[-1]]],KW:[,[,,"[18]\\d\\d(?:\\d{2})?",,,,,,,[3,5]],,,[,,"112",,,,"112",,,[3]],[,,,,,,,,,[-1]],,,,"KW",,,,,,,,,,,,,,,,,,[,,"112",,,,"112",,,[3]],,[,,"1[0-7]\\d|89887",,,,"100"],[,,,,,,,,,[-1]],[,,"898\\d\\d",,,,"89800",,,[5]],,[,,,,,,,,,[-1]]],KY:[,[,,"9\\d\\d",,,,,,,[3]],,,[,,"9(?:11|88)",,,,"911"],[,,,,,,,,,[-1]],,,,"KY",,,,,,,,,,,,,,,,,,[,,"911",,,,"911"],,[,,"9(?:11|88)",,,,"911"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],KZ:[,[,,"[1-4]\\d{2,4}",,,,,,,[3,4,
	5]],,,[,,"1(?:0[1-3]|12)|212\\d",,,,"101",,,[3,4]],[,,,,,,,,,[-1]],,,,"KZ",,,,,,,,,,,,,,,,,,[,,"1(?:0[1-3]|12)",,,,"101",,,[3]],,[,,"1(?:0[1-4]|12)|2121|(?:3040|404)0",,,,"101"],[,,,,,,,,,[-1]],[,,"(?:304\\d|404)\\d",,,,"4040",,,[4,5]],,[,,"(?:304\\d|404)\\d",,,,"4040",,,[4,5]]],LA:[,[,,"1\\d\\d",,,,,,,[3]],,,[,,"19[015]",,,,"190"],[,,,,,,,,,[-1]],,,,"LA",,,,,,,,,,,,,,,,,,[,,"19[015]",,,,"190"],,[,,"19[015]",,,,"190"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],LB:[,[,,"[19]\\d\\d",,,,,,,[3]],
	,,[,,"1(?:12|40|75)|999",,,,"112"],[,,,,,,,,,[-1]],,,,"LB",,,,,,,,,,,,,,,,,,[,,"1(?:12|40|75)|999",,,,"112"],,[,,"1(?:12|40|75)|999",,,,"112"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],LC:[,[,,"9\\d\\d",,,,,,,[3]],,,[,,"9(?:11|88|99)",,,,"911"],[,,,,,,,,,[-1]],,,,"LC",,,,,,,,,,,,,,,,,,[,,"9(?:11|99)",,,,"911"],,[,,"9(?:11|88|99)",,,,"911"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],LI:[,[,,"1\\d{2,3}",,,,,,,[3,4]],,,[,,"1(?:1[278]|44)",,,,"112",,,[3]],[,,,,,,,,,[-1]],,,,"LI",,,,,,,
	,,,,,,,,,,,[,,"1(?:1[278]|44)",,,,"112",,,[3]],,[,,"1(?:1(?:[278]|45)|4[3-57]|50|75|81[18])",,,,"112"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],LK:[,[,,"1\\d{2,3}",,,,,,,[3,4]],,,[,,"11[02689]",,,,"110",,,[3]],[,,,,,,,,,[-1]],,,,"LK",,,,,,,,,,,,,,,,,,[,,"11[02689]",,,,"110",,,[3]],,[,,"1(?:1[024-9]|3(?:00|1[2-49]|2[23]|3[1-3]|44|5[07]|[67]9|88|9[039])|9(?:0[0-2589]|1[0-357-9]|2[0-25689]|3[0389]|4[0489]|5[014-69]|6[0-2689]|7[03579]|8[02457-9]|9[0-2569]))",,,,"110"],[,,,,,,,,,[-1]],[,,,,,,
	,,,[-1]],,[,,,,,,,,,[-1]]],LR:[,[,,"[3489]\\d{2,3}",,,,,,,[3,4]],,,[,,"355|911",,,,"355",,,[3]],[,,,,,,,,,[-1]],,,,"LR",,,,,,,,,,,,,,,,,,[,,"355|911",,,,"355",,,[3]],,[,,"355|4040|8(?:400|933)|911",,,,"355"],[,,,,,,,,,[-1]],[,,"(?:404|8(?:40|93))\\d",,,,"4040",,,[4]],,[,,"(?:404|8(?:40|93))\\d",,,,"4040",,,[4]]],LS:[,[,,"1\\d\\d",,,,,,,[3]],,,[,,"11[257]",,,,"112"],[,,,,,,,,,[-1]],,,,"LS",,,,,,,,,,,,,,,,,,[,,"11[257]",,,,"112"],,[,,"11[257]",,,,"112"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],
	LT:[,[,,"[01]\\d(?:\\d(?:\\d{3})?)?",,,,,,,[2,3,6]],,,[,,"0(?:11?|22?|33?)|1(?:0[1-3]|1(?:2|6111))|116(?:0\\d|12)\\d",,,,"01"],[,,,,,,,,,[-1]],,,,"LT",,,,,,,,,,,,,,,,,,[,,"0(?:11?|22?|33?)|1(?:0[1-3]|12)",,,,"01",,,[2,3]],,[,,"0(?:11?|22?|33?)|1(?:0[1-3]|1(?:[27-9]|6(?:000|1(?:1[17]|23))))",,,,"01"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],LU:[,[,,"1\\d{2,5}",,,,,,,[3,4,5,6]],,,[,,"11(?:[23]|6\\d{3})",,,,"112",,,[3,6]],[,,,,,,,,,[-1]],,,,"LU",,,,,,,,,,,,,,,,,,[,,"11[23]",,,,"112",,,[3]],
	,[,,"11(?:[23]|6(?:000|111))|1(?:18|[25]\\d|3)\\d\\d",,,,"112"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],LV:[,[,,"[018]\\d{1,5}",,,,,,,[2,3,4,5,6]],,,[,,"0[1-3]|11(?:[023]|6\\d{3})",,,,"01",,,[2,3,6]],[,,"1180|821\\d\\d",,,,"1180",,,[4,5]],,,,"LV",,,,,,,,,,,,,,,,,,[,,"0[1-3]|11[023]",,,,"01",,,[2,3]],,[,,"0[1-4]|1(?:1(?:[02-4]|6(?:000|111)|8[0189])|(?:5|65)5|77)|821[57]4",,,,"01"],[,,"1181",,,,"1181",,,[4]],[,,"165\\d",,,,"1650",,,[4]],,[,,,,,,,,,[-1]]],LY:[,[,,"1\\d\\d",,,,,,,[3]],,,[,,
	"19[013]",,,,"190"],[,,,,,,,,,[-1]],,,,"LY",,,,,,,,,,,,,,,,,,[,,"19[013]",,,,"190"],,[,,"19[013]",,,,"190"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],MA:[,[,,"1\\d\\d?",,,,,,,[2,3]],,,[,,"1(?:[59]|77)",,,,"15"],[,,,,,,,,,[-1]],,,,"MA",,,,,,,,,,,,,,,,,,[,,"1(?:[59]|77)",,,,"15"],,[,,"1(?:[59]|77)",,,,"15"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],MC:[,[,,"1\\d\\d?",,,,,,,[2,3]],,,[,,"1(?:12|[578])",,,,"15"],[,,,,,,,,,[-1]],,,,"MC",,,,,,,,,,,,,,,,,,[,,"1(?:12|[578])",,,,"15"],,[,,"1(?:12|41|[578])",
	,,,"15"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],MD:[,[,,"[19]\\d{2,5}",,,,,,,[3,4,5,6]],,,[,,"11(?:2|6(?:000|1(?:11|2\\d)))|90[1-3]",,,,"112",,,[3,6]],[,,,,,,,,,[-1]],,,,"MD",,,,,,,,,,,,,,,,,,[,,"112|90[1-3]",,,,"112",,,[3]],,[,,"1(?:1(?:2|6(?:00[06]|1(?:1[17]|23))|8\\d\\d?|99)|90[04-9])|90[1-3]|1(?:4\\d\\d|6[0-389]|9[1-4])\\d",,,,"112"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],ME:[,[,,"1\\d{2,5}",,,,,,,[3,4,5,6]],,,[,,"1(?:12|2[2-4])",,,,"112",,,[3]],[,,,,,,,,,[-1]],,,,"ME",,
	,,,,,,,,,,,,,,,,[,,"1(?:12|2[2-4])",,,,"112",,,[3]],,[,,"1(?:1(?:(?:[013-57-9]|6\\d\\d)\\d|2)|[249]\\d{3}|5999|8(?:0[089]|1[0-8]|888))|1(?:[02-5]\\d\\d|60[06]|700)|12\\d",,,,"112"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],MF:[,[,,"1\\d",,,,,,,[2]],,,[,,"1[578]",,,,"15"],[,,,,,,,,,[-1]],,,,"MF",,,,,,,,,,,,,,,,,,[,,"1[578]",,,,"15"],,[,,"1[578]",,,,"15"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],MG:[,[,,"1\\d\\d?",,,,,,,[2,3]],,,[,,"1(?:1[78]|[78])",,,,"17"],[,,,,,,,,,[-1]],,,,"MG",
	,,,,,,,,,,,,,,,,,[,,"1(?:1[78]|[78])",,,,"17"],,[,,"1(?:1[78]|[78])",,,,"17"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],MH:[,[,,"9\\d\\d",,,,,,,[3]],,,[,,"911",,,,"911"],[,,,,,,,,,[-1]],,,,"MH",,,,,,,,,,,,,,,,,,[,,"911",,,,"911"],,[,,"911",,,,"911"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],MK:[,[,,"1\\d\\d(?:\\d(?:\\d{2})?)?",,,,,,,[3,4,6]],,,[,,"1(?:1(?:2|6\\d{3})|9[2-4])",,,,"112",,,[3,6]],[,,,,,,,,,[-1]],,,,"MK",,,,,,,,,,,,,,,,,,[,,"1(?:12|9[2-4])",,,,"112",,,[3]],,[,,"1(?:1(?:2|8\\d)|3\\d|9[2-4])|1(?:16|2\\d)\\d{3}",
	,,,"112"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],ML:[,[,,"[136-8]\\d{1,4}",,,,,,,[2,3,4,5]],,,[,,"1[578]|(?:352|67)00|7402|(?:677|744|8000)\\d",,,,"15",,,[2,4,5]],[,,"(?:12|800)2\\d|3(?:52(?:11|2[02]|3[04-6]|99)|7574)",,,,"1220",,,[4,5]],,,,"ML",,,,,,,,,,,,,,,,,,[,,"1[578]",,,,"15",,,[2]],,[,,"1(?:1(?:[013-9]\\d|2)|2(?:1[02-469]|2[13])|[578])|350(?:35|57)|67(?:0[09]|[59]9|77|8[89])|74(?:0[02]|44|55)|800[0-2][12]|3(?:52|[67]\\d)\\d\\d",,,,"15"],[,,"37(?:433|575)|7400|8001\\d",,,,"7400",
	,,[4,5]],[,,"3503\\d|(?:3[67]\\d|800)\\d\\d",,,,"35030",,,[5]],,[,,"374(?:0[24-9]|[1-9]\\d)|7400|3(?:6\\d|75)\\d\\d",,,,"7400",,,[4,5]]],MM:[,[,,"1\\d\\d",,,,,,,[3]],,,[,,"199",,,,"199"],[,,,,,,,,,[-1]],,,,"MM",,,,,,,,,,,,,,,,,,[,,"199",,,,"199"],,[,,"199",,,,"199"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],MN:[,[,,"1\\d\\d",,,,,,,[3]],,,[,,"10[0-35]",,,,"100"],[,,,,,,,,,[-1]],,,,"MN",,,,,,,,,,,,,,,,,,[,,"10[0-35]",,,,"100"],,[,,"10[0-35]",,,,"100"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,
	,,,,[-1]]],MO:[,[,,"9\\d\\d",,,,,,,[3]],,,[,,"999",,,,"999"],[,,,,,,,,,[-1]],,,,"MO",,,,,,,,,,,,,,,,,,[,,"999",,,,"999"],,[,,"999",,,,"999"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],MP:[,[,,"9\\d\\d",,,,,,,[3]],,,[,,"9(?:11|88)",,,,"911"],[,,,,,,,,,[-1]],,,,"MP",,,,,,,,,,,,,,,,,,[,,"911",,,,"911"],,[,,"9(?:11|88)",,,,"911"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],MQ:[,[,,"1\\d\\d?",,,,,,,[2,3]],,,[,,"1(?:12|[578])",,,,"15"],[,,,,,,,,,[-1]],,,,"MQ",,,,,,,,,,,,,,,,,,[,,"1(?:12|[578])",
	,,,"15"],,[,,"1(?:12|[578])",,,,"15"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],MR:[,[,,"1\\d",,,,,,,[2]],,,[,,"1[78]",,,,"17"],[,,,,,,,,,[-1]],,,,"MR",,,,,,,,,,,,,,,,,,[,,"1[78]",,,,"17"],,[,,"1[78]",,,,"17"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],MS:[,[,,"[29]\\d\\d",,,,,,,[3]],,,[,,"9(?:11|88|99)",,,,"911"],[,,,,,,,,,[-1]],,,,"MS",,,,,,,,,,,,,,,,,,[,,"9(?:11|99)",,,,"911"],,[,,"211|9(?:11|88|99)",,,,"211"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],MT:[,[,,"1\\d\\d(?:\\d{3})?",
	,,,,,,[3,6]],,,[,,"11(?:2|6\\d{3})",,,,"112"],[,,,,,,,,,[-1]],,,,"MT",,,,,,,,,,,,,,,,,,[,,"112",,,,"112",,,[3]],,[,,"11(?:2|6(?:000|1(?:11|23)))",,,,"112"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],MU:[,[,,"[189]\\d{2,4}",,,,,,,[3,4,5]],,,[,,"11[45]|99[59]",,,,"114",,,[3]],[,,,,,,,,,[-1]],,,,"MU",,,,,,,,,,,,,,,,,,[,,"11[45]|99[59]",,,,"114",,,[3]],,[,,"1\\d{2,4}|(?:8\\d\\d|99)\\d",,,,"100"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],MV:[,[,,"[14]\\d{2,3}",,,,,,,[3,4]],,,[,,"1(?:02|1[89])",
	,,,"102",,,[3]],[,,,,,,,,,[-1]],,,,"MV",,,,,,,,,,,,,,,,,,[,,"1(?:02|1[89])",,,,"102",,,[3]],,[,,"1(?:[0-37-9]|[4-6]\\d)\\d|4040|1[45]1",,,,"100"],[,,,,,,,,,[-1]],[,,"1[45]1",,,,"141",,,[3]],,[,,,,,,,,,[-1]]],MW:[,[,,"[189]\\d\\d(?:\\d{2})?",,,,,,,[3,5]],,,[,,"199|99[7-9]",,,,"199",,,[3]],[,,,,,,,,,[-1]],,,,"MW",,,,,,,,,,,,,,,,,,[,,"199|99[7-9]",,,,"199",,,[3]],,[,,"199|80400|99[7-9]",,,,"199"],[,,,,,,,,,[-1]],[,,"804\\d\\d",,,,"80400",,,[5]],,[,,"804\\d\\d",,,,"80400",,,[5]]],MX:[,[,,"[0579]\\d{2,4}",
	,,,,,,[3,4,5]],,,[,,"0(?:6[0568]|80)|911",,,,"060",,,[3]],[,,"(?:530\\d|776)\\d",,,,"7760",,,[4,5]],,,,"MX",,,,,,,,,,,,,,,,,,[,,"0(?:6[0568]|80)|911",,,,"060",,,[3]],,[,,"0[1-9]\\d|53053|7766|911",,,,"010"],[,,,,,,,,,[-1]],[,,"0(?:[249]0|[35][01])",,,,"020",,,[3]],,[,,,,,,,,,[-1]]],MY:[,[,,"[1369]\\d{2,4}",,,,,,,[3,4,5]],,,[,,"112|999",,,,"112",,,[3]],[,,,,,,,,,[-1]],,,,"MY",,,,,,,,,,,,,,,,,,[,,"112|999",,,,"112",,,[3]],,[,,"1(?:0[01348]|1(?:[02]|1[128]|311)|2(?:0[125]|[13-6]|2\\d{0,2})|(?:3[1-35-79]|7[45])\\d\\d?|5(?:454|5\\d\\d?|77|888|999?)|8(?:18?|2|8[18])|9(?:[124]\\d?|68|71|9[0679]))|66628|99[1-469]|13[5-7]|(?:1(?:0[569]|309|5[12]|7[136-9]|9[03])|3[23679]\\d\\d)\\d",
	,,,"100"],[,,"666\\d\\d",,,,"66600",,,[5]],[,,,,,,,,,[-1]],,[,,"(?:3[23679]\\d|666)\\d\\d",,,,"32000",,,[5]]],MZ:[,[,,"1\\d{2,3}",,,,,,,[3,4]],,,[,,"1(?:1[79]|9[78])",,,,"117",,,[3]],[,,,,,,,,,[-1]],,,,"MZ",,,,,,,,,,,,,,,,,,[,,"1(?:1[79]|9[78])",,,,"117",,,[3]],,[,,"1(?:[02-5]\\d\\d|1[79]|9[78])",,,,"117"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],NA:[,[,,"[19]\\d{2,4}",,,,,,,[3,4,5]],,,[,,"10111",,,,"10111",,,[5]],[,,,,,,,,,[-1]],,,,"NA",,,,,,,,,,,,,,,,,,[,,"10111",,,,"10111",,,[5]],,[,,
	"(?:10|93)111|(?:1\\d|9)\\d\\d",,,,"900"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],NC:[,[,,"[135]\\d{1,3}",,,,,,,[2,3,4]],,,[,,"1(?:0(?:00|1[23]|3[0-2]|8\\d)|[5-8])|363\\d|577",,,,"15"],[,,,,,,,,,[-1]],,,,"NC",,,,,,,,,,,,,,,,,,[,,"1[5-8]",,,,"15",,,[2]],,[,,"1(?:0(?:0[06]|1[02-46]|20|3[0-25]|42|5[058]|77|88)|[5-8])|3631|5[6-8]\\d",,,,"15"],[,,"5(?:67|88)",,,,"567",,,[3]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],NE:[,[,,"[1-3578]\\d(?:\\d(?:\\d{3})?)?",,,,,,,[2,3,6]],,,[,,"1(?:18|[578])|723\\d{3}",
	,,,"15"],[,,,,,,,,,[-1]],,,,"NE",,,,,,,,,,,,,,,,,,[,,"1(?:18|[578])|723141",,,,"15"],,[,,"1(?:0[01]|1[128]|2[034]|3[013]|[46]0|55?|[78])|222|333|555|723141|888",,,,"15"],[,,,,,,,,,[-1]],[,,"1(?:0[01]|1[12]|2[034]|3[013]|[46]0|55)|222|333|555|888",,,,"100",,,[3]],,[,,,,,,,,,[-1]]],NF:[,[,,"9\\d\\d",,,,,,,[3]],,,[,,"9(?:11|55|77)",,,,"911"],[,,,,,,,,,[-1]],,,,"NF",,,,,,,,,,,,,,,,,,[,,"9(?:11|55|77)",,,,"911"],,[,,"9(?:11|55|77)",,,,"911"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],NG:[,[,,"[14]\\d\\d(?:\\d{2})?",
	,,,,,,[3,5]],,,[,,"199",,,,"199",,,[3]],[,,,,,,,,,[-1]],,,,"NG",,,,,,,,,,,,,,,,,,[,,"199",,,,"199",,,[3]],,[,,"199|40700",,,,"199"],[,,,,,,,,,[-1]],[,,"407\\d\\d",,,,"40700",,,[5]],,[,,"407\\d\\d",,,,"40700",,,[5]]],NI:[,[,,"[12467]\\d{2,3}",,,,,,,[3,4]],,,[,,"1(?:1[58]|2[08])|737\\d",,,,"115"],[,,,,,,,,,[-1]],,,,"NI",,,,,,,,,,,,,,,,,,[,,"1(?:1[58]|2[08])",,,,"115",,,[3]],,[,,"1(?:1[58]|200)|4878|7(?:010|373)|12[0158]|(?:19|[267]1)00",,,,"115"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],NL:[,
	[,,"[1349]\\d\\d(?:\\d(?:\\d{2})?)?",,,,,,,[3,4,6]],,,[,,"11(?:2|6\\d{3})|911",,,,"112",,,[3,6]],[,,,,,,,,,[-1]],,,,"NL",,,,,,,,,,,,,,,,,,[,,"112|911",,,,"112",,,[3]],,[,,"1(?:1(?:2|6(?:00[06]|1(?:11|23)))|2(?:0[0-4]|3[34]|44)|3[03-9]\\d|400|8(?:[02-9]\\d|1[0-79]))|[34]000|911",,,,"112"],[,,,,,,,,,[-1]],[,,"120\\d",,,,"1200",,,[4]],,[,,"[34]00\\d",,,,"3000",,,[4]]],NO:[,[,,"1\\d\\d(?:\\d(?:\\d{2})?)?",,,,,,,[3,4,6]],,,[,,"11(?:[023]|6\\d{3})",,,,"110",,,[3,6]],[,,,,,,,,,[-1]],,,,"NO",,,,,,,,,,,,,
	,,,,,[,,"11[023]",,,,"110",,,[3]],,[,,"1(?:1(?:[0239]|61(?:1[17]|23))|2[048]|4(?:12|[59])|7[57]|8[5-9]\\d|90)",,,,"110"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],NP:[,[,,"1\\d{2,3}",,,,,,,[3,4]],,,[,,"1(?:0[0-36]|12)|1(?:09|11)\\d",,,,"100"],[,,,,,,,,,[-1]],,,,"NP",,,,,,,,,,,,,,,,,,[,,"1(?:0[0-3]|12)",,,,"100",,,[3]],,[,,"1(?:0(?:[0-36]|98)|1(?:1[1-4]|2))",,,,"100"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],NR:[,[,,"1\\d\\d",,,,,,,[3]],,,[,,"11[0-2]",,,,"110"],[,,,,,,,,,[-1]],,,,
	"NR",,,,,,,,,,,,,,,,,,[,,"11[0-2]",,,,"110"],,[,,"1(?:1[0-2]|23|92)",,,,"110"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],NU:[,[,,"[019]\\d\\d",,,,,,,[3]],,,[,,"999",,,,"999"],[,,,,,,,,,[-1]],,,,"NU",,,,,,,,,,,,,,,,,,[,,"999",,,,"999"],,[,,"01[05]|101|999",,,,"010"],[,,,,,,,,,[-1]],[,,"010",,,,"010"],,[,,,,,,,,,[-1]]],NZ:[,[,,"\\d{3,4}",,,,,,,[3,4]],,,[,,"111",,,,"111",,,[3]],[,,"018",,,,"018",,,[3]],,,,"NZ",,,,,,,,,,,,,,,,,,[,,"111",,,,"111",,,[3]],,[,,"018|1(?:(?:1|37)1|(?:23|94)4|7[03]7)|[2-57-9]\\d{2,3}|6(?:161|26[0-3]|742)",
	,,,"018"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,"018|(?:1(?:23|37|7[03]|94)|6(?:[12]6|74))\\d|[2-57-9]\\d{2,3}",,,,"018"]],OM:[,[,,"[19]\\d{3}",,,,,,,[4]],,,[,,"1444|999\\d",,,,"1444"],[,,,,,,,,,[-1]],,,,"OM",,,,,,,,,,,,,,,,,,[,,"1444|9999",,,,"1444"],,[,,"1(?:111|222|4(?:4[0-5]|50|66|7[7-9])|51[0-8])|9999|1(?:2[3-5]|3[0-2]|50)\\d",,,,"1111"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],PA:[,[,,"[19]\\d\\d",,,,,,,[3]],,,[,,"911",,,,"911"],[,,,,,,,,,[-1]],,,,"PA",,,,,,,,,,,,,,,,,,[,,"911",,,,"911"],
	,[,,"10[2-4]|911",,,,"102"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],PE:[,[,,"1\\d\\d",,,,,,,[3]],,,[,,"1(?:05|1[67])",,,,"105"],[,,,,,,,,,[-1]],,,,"PE",,,,,,,,,,,,,,,,,,[,,"1(?:05|1[67])",,,,"105"],,[,,"1(?:05|1[67])",,,,"105"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],PF:[,[,,"1\\d",,,,,,,[2]],,,[,,"1[578]",,,,"15"],[,,,,,,,,,[-1]],,,,"PF",,,,,,,,,,,,,,,,,,[,,"1[578]",,,,"15"],,[,,"1[578]",,,,"15"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],PG:[,[,,"[01]\\d{2,6}",,,,,,,[3,
	4,5,6,7]],,,[,,"000|11[01]",,,,"000",,,[3]],[,,,,,,,,,[-1]],,,,"PG",,,,,,,,,,,,,,,,,,[,,"000|11[01]",,,,"000",,,[3]],,[,,"000|1(?:1[01]|5\\d\\d|6\\d{2,5})",,,,"000"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,"16\\d{2,5}",,,,"1600",,,[4,5,6,7]]],PH:[,[,,"[19]\\d\\d",,,,,,,[3]],,,[,,"11[27]|911",,,,"112"],[,,,,,,,,,[-1]],,,,"PH",,,,,,,,,,,,,,,,,,[,,"11[27]|911",,,,"112"],,[,,"11[27]|911",,,,"112"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],PK:[,[,,"1\\d{1,3}",,,,,,,[2,3,4]],,,[,,"1(?:1(?:2\\d?|5)|[56])",
	,,,"15"],[,,,,,,,,,[-1]],,,,"PK",,,,,,,,,,,,,,,,,,[,,"1(?:1(?:22?|5)|[56])",,,,"15"],,[,,"1(?:122|3[014]|[56])|11[2457-9]",,,,"15"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],PL:[,[,,"[19]\\d\\d(?:\\d{2,3})?",,,,,,,[3,5,6]],,,[,,"11(?:2|6\\d{3})|99[7-9]",,,,"112",,,[3,6]],[,,,,,,,,,[-1]],,,,"PL",,,,,,,,,,,,,,,,,,[,,"112|99[7-9]",,,,"112",,,[3]],,[,,"1(?:1(?:2|61(?:11|23)|891[23])|9\\d{3})|9(?:8[4-7]|9[1-9])|11[68]000",,,,"112"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],PM:[,[,,"[13]\\d(?:\\d{2})?",
	,,,,,,[2,4]],,,[,,"1[578]",,,,"15",,,[2]],[,,,,,,,,,[-1]],,,,"PM",,,,,,,,,,,,,,,,,,[,,"1[578]",,,,"15",,,[2]],,[,,"1[578]|3103",,,,"15"],[,,,,,,,,,[-1]],[,,"310\\d",,,,"3100",,,[4]],,[,,,,,,,,,[-1]]],PR:[,[,,"9\\d\\d",,,,,,,[3]],,,[,,"9(?:11|88)",,,,"911"],[,,,,,,,,,[-1]],,,,"PR",,,,,,,,,,,,,,,,,,[,,"911",,,,"911"],,[,,"9(?:11|88)",,,,"911"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],PS:[,[,,"1\\d{2,3}",,,,,,,[3,4]],,,[,,"1(?:0[0-2]|66)",,,,"100",,,[3]],[,,,,,,,,,[-1]],,,,"PS",,,,,,,,,,,,,
	,,,,,[,,"10[0-2]",,,,"100",,,[3]],,[,,"1(?:0[0-2]|122|44|66|99)",,,,"100"],[,,,,,,,,,[-1]],[,,"112\\d",,,,"1120",,,[4]],,[,,,,,,,,,[-1]]],PT:[,[,,"1\\d\\d(?:\\d(?:\\d{2})?)?",,,,,,,[3,4,6]],,,[,,"11[257]|1(?:16\\d\\d|5[1589]|8[279])\\d",,,,"112"],[,,,,,,,,,[-1]],,,,"PT",,,,,,,,,,,,,,,,,,[,,"11[25]",,,,"112",,,[3]],,[,,"1(?:0(?:45|5[01])|1(?:[2578]|600[06])|4(?:1[45]|4)|583|6(?:1[0236]|3[02]|9[169]))|1(?:1611|59)1|1[068]78|1[08]9[16]|1(?:0[1-38]|40|5[15]|6[258]|82)0",,,,"112"],[,,,,,,,,,[-1]],[,,,
	,,,,,,[-1]],,[,,,,,,,,,[-1]]],PW:[,[,,"9\\d\\d",,,,,,,[3]],,,[,,"911",,,,"911"],[,,,,,,,,,[-1]],,,,"PW",,,,,,,,,,,,,,,,,,[,,"911",,,,"911"],,[,,"911",,,,"911"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],PY:[,[,,"[19]\\d\\d",,,,,,,[3]],,,[,,"128|911",,,,"128"],[,,,,,,,,,[-1]],,,,"PY",,,,,,,,,,,,,,,,,,[,,"128|911",,,,"128"],,[,,"1[1-9]\\d|911",,,,"110"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],QA:[,[,,"[129]\\d{2,4}",,,,,,,[3,4,5]],,,[,,"99\\d",,,,"990",,,[3]],[,,"900",,,,"900",,,[3]],
	,,,"QA",,,,,,,,,,,,,,,,,,[,,"999",,,,"999",,,[3]],,[,,"9(?:00|[19]\\d)|(?:1|20|9[27]\\d)\\d\\d",,,,"100"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],RE:[,[,,"1\\d\\d?",,,,,,,[2,3]],,,[,,"1(?:12|[578])",,,,"15"],[,,,,,,,,,[-1]],,,,"RE",,,,,,,,,,,,,,,,,,[,,"1(?:12|[578])",,,,"15"],,[,,"1(?:12|[578])",,,,"15"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],RO:[,[,,"[18]\\d{2,5}",,,,,,,[3,4,5,6]],,,[,,"11(?:2|6\\d{3})",,,,"112",,,[3,6]],[,,"(?:1(?:18[39]|[24])|8[48])\\d\\d",,,,"1200",,,[4,6]],
	,,,"RO",,,,,,,,,,,,,,,,,,[,,"112",,,,"112",,,[3]],,[,,"1(?:1(?:2|6(?:000|1(?:11|23))|8(?:(?:01|8[18])1|119|[23]00|932))|[24]\\d\\d|9(?:0(?:00|19)|1[19]|21|3[02]|5[178]))|8[48]\\d\\d",,,,"112"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,"(?:1[24]|8[48])\\d\\d",,,,"1200",,,[4]]],RS:[,[,,"[19]\\d{1,5}",,,,,,,[2,3,4,5,6]],,,[,,"112|9[2-4]",,,,"92",,,[2,3]],[,,,,,,,,,[-1]],,,,"RS",,,,,,,,,,,,,,,,,,[,,"112|9[2-4]",,,,"92",,,[2,3]],,[,,"1[189]\\d{1,4}|9[2-4]",,,,"92"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,
	,[-1]]],RU:[,[,,"[01]\\d\\d?",,,,,,,[2,3]],,,[,,"112|(?:0|10)[1-3]",,,,"01"],[,,,,,,,,,[-1]],,,,"RU",,,,,,,,,,,,,,,,,,[,,"112|(?:0|10)[1-3]",,,,"01"],,[,,"112|(?:0|10)[1-4]",,,,"01"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],RW:[,[,,"[14]\\d\\d",,,,,,,[3]],,,[,,"11[1245]",,,,"111"],[,,,,,,,,,[-1]],,,,"RW",,,,,,,,,,,,,,,,,,[,,"11[12]",,,,"111"],,[,,"1(?:0[0-2]|1[0-24-6]|2[13]|70|99)|456",,,,"100"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],SA:[,[,,"[19]\\d{2,5}",,,,,,,[3,4,5,6]],,,[,
	,"11(?:2|6\\d{3})|9(?:11|37|9[7-9])",,,,"112",,,[3,6]],[,,,,,,,,,[-1]],,,,"SA",,,,,,,,,,,,,,,,,,[,,"112|9(?:11|9[79])",,,,"112",,,[3]],,[,,"1(?:1(?:00|2|6111)|410|9(?:00|1[89]|9(?:099|22|9[0-3])))|9(?:0[24-79]|11|3[379]|40|66|8[5-9]|9[02-9])",,,,"112"],[,,"141\\d",,,,"1410",,,[4]],[,,"1(?:10|41)\\d|90[24679]",,,,"902",,,[3,4]],,[,,,,,,,,,[-1]]],SB:[,[,,"[127-9]\\d\\d",,,,,,,[3]],,,[,,"999",,,,"999"],[,,,,,,,,,[-1]],,,,"SB",,,,,,,,,,,,,,,,,,[,,"999",,,,"999"],,[,,"1(?:[02]\\d|1[12]|[35][01]|[49][1-9]|6[2-9]|7[7-9]|8[0-8])|269|777|835|9(?:[01]1|22|33|55|77|88|99)",
	,,,"100"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],SC:[,[,,"[19]\\d{2,3}",,,,,,,[3,4]],,,[,,"1(?:1[1468]|60)|999",,,,"111",,,[3]],[,,,,,,,,,[-1]],,,,"SC",,,,,,,,,,,,,,,,,,[,,"999",,,,"999",,,[3]],,[,,"1(?:[06]\\d|1[0-246-8]|2[0-8]|3[13]|4[0-2]|5[15]|7[124-6]|8[158]|9[015])|9(?:6\\d\\d|99)",,,,"100"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],SD:[,[,,"9\\d\\d",,,,,,,[3]],,,[,,"999",,,,"999"],[,,,,,,,,,[-1]],,,,"SD",,,,,,,,,,,,,,,,,,[,,"999",,,,"999"],,[,,"999",,,,"999"],[,,,,,,,,,[-1]],
	[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],SE:[,[,,"[1-37-9]\\d{2,5}",,,,,,,[3,4,5,6]],,,[,,"11(?:2|(?:3|6\\d)\\d\\d|414|77)|900\\d\\d",,,,"112"],[,,"11811[89]|72\\d{3}",,,,"72000",,,[5,6]],,,,"SE",,,,,,,,,,,,,,,,,,[,,"112|90000",,,,"112",,,[3,5]],,[,,"11(?:[25]|313|6(?:00[06]|1(?:1[17]|23))|7[0-8])|2(?:2[02358]|33|4[01]|50|6[1-4])|32[13]|8(?:22|88)|9(?:0(?:00|51)0|12)|(?:11(?:4|8[02-46-9])|7\\d\\d|90[2-4])\\d\\d|(?:118|90)1(?:[02-9]\\d|1[013-9])",,,,"112"],[,,,,,,,,,[-1]],[,,"2(?:2[02358]|33|4[01]|50|6[1-4])|32[13]|8(?:22|88)|912",
	,,,"220",,,[3]],,[,,"7\\d{4}",,,,"70000",,,[5]]],SG:[,[,,"[179]\\d{2,4}",,,,,,,[3,4,5]],,,[,,"99[359]",,,,"993",,,[3]],[,,,,,,,,,[-1]],,,,"SG",,,,,,,,,,,,,,,,,,[,,"99[359]",,,,"993",,,[3]],,[,,"1(?:(?:[01368]\\d|44)\\d|[57]\\d{2,3}|9(?:0[1-9]|[1-9]\\d))|77222|99[02-9]|100",,,,"100"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,"772\\d\\d",,,,"77200",,,[5]]],SH:[,[,,"[129]\\d{2,4}",,,,,,,[3,4,5]],,,[,,"9(?:11|99)",,,,"911",,,[3]],[,,,,,,,,,[-1]],,,,"SH",,,,,,,,,,,,,,,,,,[,,"9(?:11|99)",,,,"911",,,[3]],,[,,
	"1\\d{2,3}|26[01]\\d\\d|9(?:11|99)",,,,"100"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],SI:[,[,,"1\\d{2,5}",,,,,,,[3,4,5,6]],,,[,,"11(?:(?:0|6\\d)\\d\\d|[23]|8\\d\\d?)",,,,"112"],[,,,,,,,,,[-1]],,,,"SI",,,,,,,,,,,,,,,,,,[,,"11[23]",,,,"112",,,[3]],,[,,"1(?:1(?:00[146]|[23]|6(?:000|1(?:11|23))|8(?:[08]|99))|9(?:059|1(?:0[12]|16)|5|70|87|9(?:00|[149])))|19(?:08|81)[09]",,,,"112"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],SJ:[,[,,"1\\d\\d",,,,,,,[3]],,,[,,"11[023]",,,,"110"],[,,,,,,,
	,,[-1]],,,,"SJ",,,,,,,,,,,,,,,,,,[,,"11[023]",,,,"110"],,[,,"11[023]",,,,"110"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],SK:[,[,,"1\\d{2,5}",,,,,,,[3,4,5,6]],,,[,,"1(?:1(?:2|6\\d{3})|5[058])",,,,"112",,,[3,6]],[,,,,,,,,,[-1]],,,,"SK",,,,,,,,,,,,,,,,,,[,,"1(?:12|5[058])",,,,"112",,,[3]],,[,,"1(?:1(?:2|6(?:000|111)|8[0-8])|[248]\\d{3}|5[0589])",,,,"112"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],SL:[,[,,"[069]\\d\\d(?:\\d{2})?",,,,,,,[3,5]],,,[,,"(?:01|99)9",,,,"019",,,[3]],[,,,,,,
	,,,[-1]],,,,"SL",,,,,,,,,,,,,,,,,,[,,"(?:01|99)9",,,,"019",,,[3]],,[,,"(?:01|99)9|60400",,,,"019"],[,,,,,,,,,[-1]],[,,"604\\d\\d",,,,"60400",,,[5]],,[,,"604\\d\\d",,,,"60400",,,[5]]],SM:[,[,,"1\\d\\d",,,,,,,[3]],,,[,,"11[358]",,,,"113"],[,,,,,,,,,[-1]],,,,"SM",,,,,,,,,,,,,,,,,,[,,"11[358]",,,,"113"],,[,,"11[358]",,,,"113"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],SN:[,[,,"[12]\\d{1,5}",,,,,,,[2,3,4,5,6]],,,[,,"1(?:515|[78])|2(?:00|1)\\d{3}",,,,"17",,,[2,4,5,6]],[,,"2(?:0[246]|[468])\\d{3}",
	,,,"24000",,,[5,6]],,,,"SN",,,,,,,,,,,,,,,,,,[,,"1[78]",,,,"17",,,[2]],,[,,"1(?:1[69]|(?:[246]\\d|51)\\d)|2(?:0[0-246]|[12468])\\d{3}|1[278]",,,,"12"],[,,"2(?:01|2)\\d{3}",,,,"22000",,,[5,6]],[,,"1[46]\\d\\d",,,,"1400",,,[4]],,[,,"2[468]\\d{3}",,,,"24000",,,[5]]],SO:[,[,,"[57-9]\\d\\d",,,,,,,[3]],,,[,,"555|888|999",,,,"555"],[,,,,,,,,,[-1]],,,,"SO",,,,,,,,,,,,,,,,,,[,,"555|888|999",,,,"555"],,[,,"555|777|888|999",,,,"555"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],SR:[,[,,"1\\d{2,3}",,,,,
	,,[3,4]],,,[,,"115",,,,"115",,,[3]],[,,,,,,,,,[-1]],,,,"SR",,,,,,,,,,,,,,,,,,[,,"115",,,,"115",,,[3]],,[,,"1\\d{2,3}",,,,"100"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],SS:[,[,,"9\\d\\d",,,,,,,[3]],,,[,,"999",,,,"999"],[,,,,,,,,,[-1]],,,,"SS",,,,,,,,,,,,,,,,,,[,,"999",,,,"999"],,[,,"999",,,,"999"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],ST:[,[,,"1\\d\\d",,,,,,,[3]],,,[,,"112",,,,"112"],[,,,,,,,,,[-1]],,,,"ST",,,,,,,,,,,,,,,,,,[,,"112",,,,"112"],,[,,"112",,,,"112"],[,,,,,,,,,[-1]],
	[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],SV:[,[,,"[149]\\d\\d(?:\\d{2,3})?",,,,,,,[3,5,6]],,,[,,"116\\d{3}|911",,,,"911",,,[3,6]],[,,,,,,,,,[-1]],,,,"SV",,,,,,,,,,,,,,,,,,[,,"91[13]",,,,"911",,,[3]],,[,,"1(?:1(?:2|6111)|2[136-8]|3[0-6]|9[05])|40404|9(?:1\\d|29)",,,,"112"],[,,,,,,,,,[-1]],[,,"404\\d\\d",,,,"40400",,,[5]],,[,,"404\\d\\d",,,,"40400",,,[5]]],SX:[,[,,"9\\d\\d",,,,,,,[3]],,,[,,"9(?:19|88)",,,,"919"],[,,,,,,,,,[-1]],,,,"SX",,,,,,,,,,,,,,,,,,[,,"919",,,,"919"],,[,,"9(?:19|88)",,,,"919"],[,,,,,,
	,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],SY:[,[,,"1\\d\\d",,,,,,,[3]],,,[,,"11[023]",,,,"110"],[,,,,,,,,,[-1]],,,,"SY",,,,,,,,,,,,,,,,,,[,,"11[023]",,,,"110"],,[,,"11[023]",,,,"110"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],SZ:[,[,,"9\\d\\d",,,,,,,[3]],,,[,,"999",,,,"999"],[,,,,,,,,,[-1]],,,,"SZ",,,,,,,,,,,,,,,,,,[,,"999",,,,"999"],,[,,"999",,,,"999"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],TC:[,[,,"9\\d\\d",,,,,,,[3]],,,[,,"9(?:11|88|99)",,,,"911"],[,,,,,,,,,[-1]],,,,"TC",,,
	,,,,,,,,,,,,,,,[,,"9(?:11|99)",,,,"911"],,[,,"9(?:11|88|99)",,,,"911"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],TD:[,[,,"1\\d",,,,,,,[2]],,,[,,"1[78]",,,,"17"],[,,,,,,,,,[-1]],,,,"TD",,,,,,,,,,,,,,,,,,[,,"1[78]",,,,"17"],,[,,"1[78]",,,,"17"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],TG:[,[,,"1\\d{2,3}",,,,,,,[3,4]],,,[,,"1(?:1[78]|7[127])",,,,"117",,,[3]],[,,,,,,,,,[-1]],,,,"TG",,,,,,,,,,,,,,,,,,[,,"1(?:1[78]|7[127])",,,,"117",,,[3]],,[,,"1(?:011|1[078]|7[127])",,,,"110"],[,,,,,,
	,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],TH:[,[,,"1\\d{2,3}",,,,,,,[3,4]],,,[,,"1(?:1(?:00|2[03]|3[3479]|7[67]|9[0246])|578|6(?:44|6[79]|88|9[16])|88\\d|9[19])|1[15]55",,,,"191"],[,,"1(?:113|2[23]\\d|5(?:09|56))",,,,"1113",,,[4]],,,,"TH",,,,,,,,,,,,,,,,,,[,,"1(?:669|9[19])",,,,"191"],,[,,"1(?:0[0-2]|1(?:0[03]|1[1-35]|2[0358]|3[03-79]|4[02-489]|5[04-9]|6[04-79]|7[03-9]|8[027-9]|9[02-9])|2(?:22|3[89]|66)|3(?:18|2[23]|3[013]|5[56]|6[45]|73)|477|5(?:0\\d|4[0-37-9]|5[1-8]|6[01679]|7[12568]|8[0-24589]|9[013589])|6(?:0[0-29]|2[03]|4[3-6]|6[1-9]|7[0257-9]|8[0158]|9[014-9])|7(?:[14]9|7[27]|90)|888|9[19])",
	,,,"100"],[,,"1(?:1(?:03|1[15]|2[58]|3[056]|4[02-49]|5[046-9]|7[03-589]|9[57-9])|5(?:0[0-8]|4[0-378]|5[1-478]|7[156])|6(?:20|4[356]|6[1-68]|7[057-9]|8[015]|9[0457-9]))|1(?:1[68]|26|3[1-35]|5[689]|60|7[17])\\d",,,,"1103",,,[4]],[,,"114[89]",,,,"1148",,,[4]],,[,,,,,,,,,[-1]]],TJ:[,[,,"1\\d\\d",,,,,,,[3]],,,[,,"1(?:0[1-3]|12)",,,,"101"],[,,,,,,,,,[-1]],,,,"TJ",,,,,,,,,,,,,,,,,,[,,"1(?:0[1-3]|12)",,,,"101"],,[,,"1(?:0[1-3]|12)",,,,"101"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],TL:[,[,,"1\\d\\d",
	,,,,,,[3]],,,[,,"11[25]",,,,"112"],[,,,,,,,,,[-1]],,,,"TL",,,,,,,,,,,,,,,,,,[,,"11[25]",,,,"112"],,[,,"1(?:0[02]|1[25]|2[0138]|72|9[07])",,,,"100"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],TM:[,[,,"0\\d",,,,,,,[2]],,,[,,"0[1-49]",,,,"01"],[,,,,,,,,,[-1]],,,,"TM",,,,,,,,,,,,,,,,,,[,,"0[1-3]",,,,"01"],,[,,"0[1-49]",,,,"01"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],TN:[,[,,"1\\d\\d",,,,,,,[3]],,,[,,"19[078]",,,,"190"],[,,,,,,,,,[-1]],,,,"TN",,,,,,,,,,,,,,,,,,[,,"19[078]",,,,"190"],
	,[,,"19[078]",,,,"190"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],TO:[,[,,"9\\d\\d",,,,,,,[3]],,,[,,"9(?:11|22|33|99)",,,,"911"],[,,,,,,,,,[-1]],,,,"TO",,,,,,,,,,,,,,,,,,[,,"9(?:11|22|33|99)",,,,"911"],,[,,"9(?:11|22|33|99)",,,,"911"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],TR:[,[,,"[1-9]\\d{2,4}",,,,,,,[3,4,5]],,,[,,"1(?:1[02]|22|3[126]|4[04]|5[15-9]|6[18]|77|83)",,,,"110",,,[3]],[,,,,,,,,,[-1]],,,,"TR",,,,,,,,,,,,,,,,,,[,,"1(?:1[02]|55)",,,,"110",,,[3]],,[,,"1(?:1(?:[02-79]|8(?:1[018]|2[0245]|3[2-4]|42|5[058]|6[06]|7[07]|8[01389]|9[089]))|3(?:37|[58]6|65)|471|5(?:07|78)|6(?:[02]6|99)|8(?:63|95))|2(?:077|268|4(?:17|23)|5(?:7[26]|82)|6[14]4|8\\d\\d|9(?:30|89))|3(?:0(?:05|72)|353|4(?:06|30|64)|502|674|747|851|9(?:1[29]|60))|4(?:0(?:25|3[12]|[47]2)|3(?:3[13]|[89]1)|439|5(?:43|55)|717|832)|5(?:145|290|[4-6]\\d\\d|772|833|9(?:[06]1|92))|6(?:236|6(?:12|39|8[59])|769)|7890|8(?:688|7(?:28|65)|85[06])|9(?:159|290)|1[2-9]\\d",
	,,,"110"],[,,"(?:285|542)0",,,,"2850",,,[4]],[,,,,,,,,,[-1]],,[,,"1(?:3(?:37|[58]6|65)|4(?:4|71)|5(?:07|78)|6(?:[02]6|99)|8(?:3|63|95))|(?:2(?:07|26|4[12]|5[78]|6[14]|8\\d|9[38])|3(?:0[07]|[38]5|4[036]|50|67|74|9[16])|4(?:0[2-47]|3[389]|[48]3|5[45]|71)|5(?:14|29|[4-6]\\d|77|83|9[069])|6(?:23|6[138]|76)|789|8(?:68|7[26]|85)|9(?:15|29))\\d",,,,"144",,,[3,4]]],TT:[,[,,"9\\d\\d",,,,,,,[3]],,,[,,"9(?:88|9[09])",,,,"988"],[,,,,,,,,,[-1]],,,,"TT",,,,,,,,,,,,,,,,,,[,,"99[09]",,,,"990"],,[,,"9(?:88|9[09])",
	,,,"988"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],TV:[,[,,"[19]\\d\\d",,,,,,,[3]],,,[,,"911",,,,"911"],[,,,,,,,,,[-1]],,,,"TV",,,,,,,,,,,,,,,,,,[,,"911",,,,"911"],,[,,"1\\d\\d|911",,,,"100"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],TW:[,[,,"1\\d{2,3}",,,,,,,[3,4]],,,[,,"11[0289]|1(?:81|92)\\d",,,,"110"],[,,"10[56]",,,,"105",,,[3]],,,,"TW",,,,,,,,,,,,,,,,,,[,,"11[029]",,,,"110",,,[3]],,[,,"1(?:0[04-6]|1[0237-9]|3[389]|6[05-8]|7[07]|8(?:0|11)|9(?:19|22|5[057]|68|8[05]|9[15689]))",
	,,,"100"],[,,"1(?:65|9(?:1\\d|50|85|98))",,,,"165"],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],TZ:[,[,,"[149]\\d\\d(?:\\d{2})?",,,,,,,[3,5]],,,[,,"1(?:1[0-79]|9[09])|999",,,,"110",,,[3]],[,,,,,,,,,[-1]],,,,"TZ",,,,,,,,,,,,,,,,,,[,,"11[0-245]|999",,,,"110",,,[3]],,[,,"1(?:1\\d|9[09])|46400|999",,,,"110"],[,,,,,,,,,[-1]],[,,"464\\d\\d",,,,"46400",,,[5]],,[,,"464\\d\\d",,,,"46400",,,[5]]],UA:[,[,,"[189]\\d{2,5}",,,,,,,[3,4,5,6]],,,[,,"1(?:0[1-3]|1(?:2|6\\d{3}))",,,,"101",,,[3,6]],[,,,,,,,,,[-1]],,,,"UA",,,,,
	,,,,,,,,,,,,,[,,"1(?:0[1-3]|12)",,,,"101",,,[3]],,[,,"1(?:0[1-49]|1(?:2|6(?:000|1(?:11|23))|8\\d\\d?)|(?:[278]|5\\d)\\d)|[89]00\\d\\d?|151|1(?:06|4\\d|6)\\d\\d",,,,"101"],[,,,,,,,,,[-1]],[,,"(?:118|[89]00)\\d\\d?",,,,"1180",,,[4,5]],,[,,,,,,,,,[-1]]],UG:[,[,,"9\\d\\d",,,,,,,[3]],,,[,,"999",,,,"999"],[,,,,,,,,,[-1]],,,,"UG",,,,,,,,,,,,,,,,,,[,,"999",,,,"999"],,[,,"999",,,,"999"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],US:[,[,,"[1-9]\\d{2,5}",,,,,,,[3,4,5,6]],,,[,,"112|611|9(?:11|33|88)",
	,,,"112",,,[3]],[,,"24280|(?:381|968)35|4(?:3355|7553|8221)|5(?:(?:489|934)2|5928)|72078|(?:323|960)40|(?:276|414)63|(?:2(?:520|744)|7390|9968)9|(?:693|732|976)88|(?:3(?:556|825)|5294|8623|9729)4|(?:3378|4136|7642|8961|9979)6|(?:4(?:6(?:15|32)|827)|(?:591|720)8|9529)7",,,,"24280",,,[5]],,,,"US",,,,,,,,,,,,,,,,,,[,,"112|911",,,,"112",,,[3]],,[,,"11(?:2|5[1-47]|[68]\\d|7[0-57]|98)|[2-9]\\d{3,5}|[2-8]11|9(?:11|33|88)",,,,"112"],[,,"2(?:3333|(?:4224|7562|900)2|56447|6688)|3(?:1010|2665|7404)|40404|560560|6(?:0060|22639|5246|7622)|7(?:0701|3822|4666)|8(?:(?:3825|7226)5|4816)|99099",
	,,,"23333",,,[5,6]],[,,"336\\d\\d|[2-9]\\d{3}|[2356]11",,,,"211",,,[3,4,5]],,[,,"[2-9]\\d{4,5}",,,,"20000",,,[5,6]]],UY:[,[,,"[19]\\d{2,3}",,,,,,,[3,4]],,,[,,"128|911",,,,"128",,,[3]],[,,,,,,,,,[-1]],,,,"UY",,,,,,,,,,,,,,,,,,[,,"128|911",,,,"128",,,[3]],,[,,"1(?:0[4-9]|1[2368]|2[0-3568]|787)|911",,,,"104"],[,,"178\\d",,,,"1780",,,[4]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],UZ:[,[,,"[04]\\d(?:\\d(?:\\d{2})?)?",,,,,,,[2,3,5]],,,[,,"0(?:0[1-3]|[1-3]|50)",,,,"01",,,[2,3]],[,,,,,,,,,[-1]],,,,"UZ",,,,,,,,,,
	,,,,,,,,[,,"0(?:0[1-3]|[1-3]|50)",,,,"01",,,[2,3]],,[,,"0(?:0[1-3]|[1-3]|50)|45400",,,,"01"],[,,,,,,,,,[-1]],[,,"454\\d\\d",,,,"45400",,,[5]],,[,,"454\\d\\d",,,,"45400",,,[5]]],VA:[,[,,"1\\d\\d",,,,,,,[3]],,,[,,"11[2358]",,,,"112"],[,,,,,,,,,[-1]],,,,"VA",,,,,,,,,,,,,,,,,,[,,"11[2358]",,,,"112"],,[,,"11[2358]",,,,"112"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],VC:[,[,,"9\\d\\d",,,,,,,[3]],,,[,,"9(?:11|88|99)",,,,"911"],[,,,,,,,,,[-1]],,,,"VC",,,,,,,,,,,,,,,,,,[,,"9(?:11|99)",,,,"911"],,[,
	,"9(?:11|88|99)",,,,"911"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],VE:[,[,,"[19]\\d\\d",,,,,,,[3]],,,[,,"1(?:12|71)|911",,,,"112"],[,,,,,,,,,[-1]],,,,"VE",,,,,,,,,,,,,,,,,,[,,"1(?:12|71)|911",,,,"112"],,[,,"1(?:12|71)|911",,,,"112"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],VG:[,[,,"9\\d\\d",,,,,,,[3]],,,[,,"9(?:11|88|99)",,,,"911"],[,,,,,,,,,[-1]],,,,"VG",,,,,,,,,,,,,,,,,,[,,"9(?:11|99)",,,,"911"],,[,,"9(?:11|88|99)",,,,"911"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],VI:[,
	[,,"9\\d\\d",,,,,,,[3]],,,[,,"9(?:11|88)",,,,"911"],[,,,,,,,,,[-1]],,,,"VI",,,,,,,,,,,,,,,,,,[,,"911",,,,"911"],,[,,"9(?:11|88)",,,,"911"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],VN:[,[,,"1\\d\\d",,,,,,,[3]],,,[,,"11[3-5]",,,,"113"],[,,,,,,,,,[-1]],,,,"VN",,,,,,,,,,,,,,,,,,[,,"11[3-5]",,,,"113"],,[,,"11[3-5]",,,,"113"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],VU:[,[,,"1\\d\\d",,,,,,,[3]],,,[,,"112",,,,"112"],[,,,,,,,,,[-1]],,,,"VU",,,,,,,,,,,,,,,,,,[,,"112",,,,"112"],,[,,"112",
	,,,"112"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],WF:[,[,,"1\\d",,,,,,,[2]],,,[,,"1[578]",,,,"15"],[,,,,,,,,,[-1]],,,,"WF",,,,,,,,,,,,,,,,,,[,,"1[578]",,,,"15"],,[,,"1[578]",,,,"15"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],WS:[,[,,"[19]\\d\\d",,,,,,,[3]],,,[,,"9(?:11|9[4-69])",,,,"911"],[,,,,,,,,,[-1]],,,,"WS",,,,,,,,,,,,,,,,,,[,,"9(?:11|9[4-69])",,,,"911"],,[,,"1(?:1[12]|2[0-6]|[39]0)|9(?:11|9[4-79])",,,,"111"],[,,,,,,,,,[-1]],[,,"12[0-6]",,,,"120"],,[,,,,,,,,,[-1]]],XK:[,[,,
	"1\\d\\d",,,,,,,[3]],,,[,,"1(?:12|9[2-4])",,,,"112"],[,,,,,,,,,[-1]],,,,"XK",,,,,,,,,,,,,,,,,,[,,"1(?:12|9[2-4])",,,,"112"],,[,,"1(?:12|9[2-4])",,,,"112"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],YE:[,[,,"1\\d\\d",,,,,,,[3]],,,[,,"19[1459]",,,,"191"],[,,,,,,,,,[-1]],,,,"YE",,,,,,,,,,,,,,,,,,[,,"19[1459]",,,,"191"],,[,,"19[1459]",,,,"191"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],YT:[,[,,"1\\d\\d?",,,,,,,[2,3]],,,[,,"1(?:12|5)",,,,"15"],[,,,,,,,,,[-1]],,,,"YT",,,,,,,,,,,,,,,,,,[,
	,"1(?:12|5)",,,,"15"],,[,,"1(?:12|5)",,,,"15"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],ZA:[,[,,"[134]\\d{2,4}",,,,,,,[3,4,5]],,,[,,"1(?:01\\d\\d|12)",,,,"112",,,[3,5]],[,,"41(?:348|851)",,,,"41348",,,[5]],,,,"ZA",,,,,,,,,,,,,,,,,,[,,"1(?:01(?:11|77)|12)",,,,"112",,,[3,5]],,[,,"1(?:0(?:1(?:11|77)|20|7)|1[12]|77(?:3[237]|[45]7|6[279]|9[26]))|[34]\\d{4}",,,,"107"],[,,"3(?:078[23]|7(?:064|567)|8126)|4(?:394[16]|7751|8837)|4[23]699",,,,"30782",,,[5]],[,,"111",,,,"111",,,[3]],,[,,"[34]\\d{4}",
	,,,"30000",,,[5]]],ZM:[,[,,"[19]\\d\\d",,,,,,,[3]],,,[,,"112|99[139]",,,,"112"],[,,,,,,,,,[-1]],,,,"ZM",,,,,,,,,,,,,,,,,,[,,"112|99[139]",,,,"112"],,[,,"112|99[139]",,,,"112"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,[,,,,,,,,,[-1]]],ZW:[,[,,"[139]\\d\\d(?:\\d{2})?",,,,,,,[3,5]],,,[,,"112|9(?:5[023]|61|9[3-59])",,,,"112",,,[3]],[,,"3[013-57-9]\\d{3}",,,,"30000",,,[5]],,,,"ZW",,,,,,,,,,,,,,,,,,[,,"112|99[3-59]",,,,"112",,,[3]],,[,,"11[2469]|3[013-57-9]\\d{3}|9(?:5[023]|6[0-25]|9[3-59])",,,,"112"],[,,,,,,,
	,,[-1]],[,,"114|9(?:5[023]|6[0-25])",,,,"114",,,[3]],,[,,,,,,,,,[-1]]]};/*

	 Copyright (C) 2018 The Libphonenumber Authors.

	 Licensed under the Apache License, Version 2.0 (the "License");
	 you may not use this file except in compliance with the License.
	 You may obtain a copy of the License at

	 http://www.apache.org/licenses/LICENSE-2.0

	 Unless required by applicable law or agreed to in writing, software
	 distributed under the License is distributed on an "AS IS" BASIS,
	 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 See the License for the specific language governing permissions and
	 limitations under the License.
	*/
	function Mb(){this.g={};}ba(Mb);function Nb(a){return (a=F[a])?a:[]}function Ob(a){var b=Pb;if(!a)return null;a=a.toUpperCase();var c=b.g[a];if(null==c){c=Lb[a];if(null==c)return null;c=(new y).g(D.o(),c);b.g[a]=c;}return c}function Qb(a){if(!m(a,2))return "";var b=""+p(a,2);return m(a,4)&&p(a,4)&&0<u(a,8)?Array(u(a,8)+1).join("0")+b:b}function Rb(a,b){return 0<r(b,9).length&&!r(b,9).includes(a.length)?!1:L(u(b,2),a.toString())}var S=I.pa(),Pb=Mb.pa();function Sb(a){var b=S,c=nb(b,a);b=P(b,u(a,1),c);null==b?a=-1:(a=O(a),a=lb(a,b));switch(a){case 0:return "fixed-line";case 2:return "fixed-line-or-mobile";case 1:return "mobile";case 8:return "pager";case 7:return "personal-number";case 4:return "premium-rate";case 5:return "shared-cost";case 3:return "toll-free";case 9:return "uan";case 6:return "voip";default:case -1:return "unknown"}}
	function Tb(a){switch(a){case "fixed-line":return 0;case "fixed-line-or-mobile":return 2;case "mobile":return 1;case "pager":return 8;case "personal-number":return 7;case "premium-rate":return 4;case "shared-cost":return 5;case "toll-free":return 3;case "uan":return 9;case "voip":return 6;default:case "unknown":return -1}}
	function Ub(a){try{switch(pb(a)){case 0:return "is-possible";case 1:return "invalid-country-code";case 3:return "too-long";case 2:return "too-short"}if(ob(a))return "is-possible"}catch(b){}return "unknown"}
	function Vb(a,b){if("+"!==a.charAt(0)&&"00"!==a.slice(0,2))return {parsed:c,fa:d};try{var c=kb(S,a,b);}catch(e){}if(c){var d=nb(S,c);if(null!=d&&"ZZ"!==d)return {parsed:c,fa:d}}for(b=1;4>b;++b){d=void 0;if(a.length<b+1)return {parsed:c,fa:d};d=Q(a.substring(1,b+1));if("ZZ"!==d)return {fa:d}}return {parsed:c,fa:void 0}}var Wb;a:{try{Wb=new WeakMap;break a}catch(a){}Wb=void 0;}var Xb=Wb;
	function V(a,b){if(!(this instanceof V))return new V(a,b);var c=null==b?void 0:b.regionCode;if("string"===typeof a)var d=!1;else try{mb(a),d=!0;}catch(n){d=!1;}if(!d&&"string"!==typeof a)throw Error("Invalid phone number, expected a string");if(!d&&"object"!==typeof b&&"undefined"!==typeof b)throw Error(`Invalid options, expected object, got ${typeof b}. `+"This may be because of not yet upgraded code.");if(!d&&null!=c&&"string"!==typeof c)throw Error("Invalid region code, expected a string, got "+
	`${typeof c} ${c}`);d||(a=a.trim(),c&&"+"===a.charAt(0)&&(c=null),c&&"+"!==a.charAt(0)&&"00"!==a.slice(0,2)||({fa:c=null,parsed:e}=Vb(a,c)));this.g={number:{},regionCode:c,valid:!1,possible:!1,shortPossible:!1,shortValid:!1};Xb&&Xb.set(this.g,this);if(d)this.l=a;else {this.l=null;this.g.number.input=a;if(!c){this.g.possibility="invalid-country-code";return}if(0===Yb(c)){this.g.possibility="invalid-country-code";return}try{this.l=e?e:kb(S,a,c);}catch(n){this.g.possibility=Ub(a);return}}this.g.number.international=
	S.format(this.l,1);this.g.number.national=S.format(this.l,2);this.g.number.e164=S.format(this.l,0);this.g.number.rfc3966=S.format(this.l,3);this.g.number.significant=O(this.l);this.g.canBeInternationallyDialled=S.ja(this.l);this.g.valid=mb(this.l);this.g.possible=ob(this.l);this.g.possibility=Ub(this.l);a=this.g;b=this.l;var e=Nb(u(b,1));a:if(0===e.length)d=null;else if(1===e.length)d=e[0];else {d=Qb(b);for(var f=0;f<e.length;f++){var g=e[f],l=Ob(g);if(l&&Rb(d,p(l,29))){d=g;break a}}d=null;}1<e.length&&
	null!=d?b=!0:(e=d,d=Nb(u(b,1)),null!=e&&d.includes(e)?(e=Ob(e))?(b=Qb(b),d=p(e,1),Rb(b,d)?(e=p(e,29),b=Rb(b,e)):b=!1):b=!1:b=!1);a.shortValid=b;a=this.g;a:{e=this.l;b=Nb(u(e,1));e=Qb(e).length;for(d=0;d<b.length;d++)if((f=Ob(b[d]))&&r(p(f,1),9).includes(e)){b=!0;break a}b=!1;}a.shortPossible=b;this.g.type=Sb(this.l);this.g.typeIsMobile=this.ua();this.g.typeIsFixedLine=this.ta();this.g.countryCode=N(c)?T(S,c):0;}var W=["PhoneNumber$$module$src$index"],X=aa;
	W[0]in X||"undefined"==typeof X.execScript||X.execScript("var "+W[0]);for(var Y;W.length&&(Y=W.shift());)W.length||void 0===V?X[Y]&&X[Y]!==Object.prototype[Y]?X=X[Y]:X=X[Y]={}:X[Y]=V;function Yb(a){return N(a)?T(S,a):0}V.getCountryCodeForRegionCode=Yb;V.getRegionCodeForCountryCode=function(a){return Q(a)};
	V.findNumbers=function(a,b){var c=null==b?void 0:b.defaultRegionCode;var d;var e=null!=(d=null==b?void 0:b.leniency)?d:"valid";var f;b=null!=(f=null==b?void 0:b.maxTries)?f:Number.MAX_SAFE_INTEGER;f=/([0-9]+(?: [0-9]+)*)/g;d=[];for(let l=0;l<b;++l){var g=f.exec(a);if(!g)break;let n=g.index;g=g.index+g[1].length;0<n&&"+"===a.charAt(n-1)&&--n;var G=a.slice(n,g),ua=new V(G,{regionCode:c});(ua.wa()||"possible"===e&&ua.va())&&d.push({text:G,phoneNumber:ua.toJSON(),start:n,end:g});}return d};
	function Zb(a){var b={};return a.filter(c=>{if(b.hasOwnProperty(c))return !1;b[c]=1;return !0})}V.getSupportedRegionCodes=function(){return Zb($a())};V.getSupportedCallingCodes=function(){return Zb(bb())};V.getExample=function(a,b){var c;b?c=ib(a,Tb(b)):c=ib(a,0);return (new V(c,a)).toJSON()};V.getAsYouType=function(a){return new Z(a)};
	V.getNumberFrom=function(a,b){try{a:{if(Xb){var e=Xb.get(a);if(e){var c=e;break a}}let d;c=new V(null==a?void 0:null==(d=a.number)?void 0:d.e164,{});}return {valid:!0,number:hb(c.l,b)}}catch(d){return {valid:!1,error:d}}};V.prototype.toJSON=function(){return this.g};V.prototype.toJSON=V.prototype.toJSON;V.prototype.ja=function(){return this.g.canBeInternationallyDialled};V.prototype.canBeInternationallyDialled=V.prototype.ja;V.prototype.wa=function(){return this.g.valid};V.prototype.isValid=V.prototype.wa;
	V.prototype.va=function(){return this.g.possible};V.prototype.isPossible=V.prototype.va;V.prototype.getType=function(){return this.g.type};V.prototype.getType=V.prototype.getType;V.prototype.ua=function(){return "mobile"===this.g.type||"fixed-line-or-mobile"===this.g.type};V.prototype.isMobile=V.prototype.ua;V.prototype.ta=function(){return "fixed-line"===this.g.type||"fixed-line-or-mobile"===this.g.type};V.prototype.isFixedLine=V.prototype.ta;
	V.prototype.xa=function(a){return this.g.number[null==a?"e164":a]};V.prototype.getNumber=V.prototype.xa;V.prototype.za=function(){return this.g.regionCode};V.prototype.getRegionCode=V.prototype.za;V.prototype.ia=function(){return Yb(this.g.regionCode)};V.prototype.getCountryCode=V.prototype.ia;function Z(a){this.j=a;this.h=new ub(a);this.l=this.g="";}Z.prototype.sa=function(a){this.g+=a;var b=this.h;b.la=Bb(b,a);return this.l=b.la};Z.prototype.addChar=Z.prototype.sa;Z.prototype.Ba=function(){return this.l};
	Z.prototype.number=Z.prototype.Ba;Z.prototype.Ca=function(){return ""===this.g?this.l:this.reset(this.g.slice(0,this.g.length-1))};Z.prototype.removeChar=Z.prototype.Ca;Z.prototype.reset=function(a){var b=this.h;b.la="";A(b.u);A(b.ba);A(b.$);b.aa=0;b.da="";A(b.h);b.s="";A(b.g);b.v=!0;b.oa=!1;b.ca=!1;b.ea=!1;b.j=[];b.ha=!1;b.m!=b.Aa&&(b.m=vb(b,b.ma));this.l=this.g="";if(a){b=0;for(var c=a.length;b<c;++b)this.sa(a.charAt(b));}return this.l};Z.prototype.reset=Z.prototype.reset;
	Z.prototype.ya=function(){return (new V(this.l,{regionCode:this.j})).toJSON()};Z.prototype.getPhoneNumber=Z.prototype.ya;}).call(
		(module.exports)
		|| typeof globalThis !== 'undefined' && globalThis
		|| typeof commonjsGlobal !== 'undefined' && commonjsGlobal
		|| typeof window !== 'undefined' && window
		|| typeof self !== 'undefined' && self
		|| commonjsGlobal
	); 
} (lib));

var libExports = lib.exports;

awesomePhonenumber.exports;

(function (module) {
	const exportedName = 'PhoneNumber$$module$src$index';

	module.exports =
		libExports[ exportedName ] ||
		(
			typeof globalThis !== 'undefined' && globalThis
			|| typeof commonjsGlobal !== 'undefined' && commonjsGlobal
			|| typeof window !== 'undefined' && window
			|| typeof self !== 'undefined' && self
			|| commonjsGlobal
		)[ exportedName ];

	Object.defineProperty(
		module.exports,
		"__esModule",
		{
			value: true
		}
	);

	module.exports.parsePhoneNumber = ( ...args ) =>
	{
		try
		{
			const ret = module.exports( ...args ).toJSON( );
			if ( !ret.valid && !ret.possible )
			{
				ret.possible = false;
				if ( !ret.possibility )
					ret.possibility = 'invalid';
			}
			return ret;
		}
		catch ( error )
		{
			return {
				valid: false,
				possible: false,
				possibility: 'invalid',
				error,
			};
		}
	};

	module.exports.getCountryCodeForRegionCode = module.exports.getCountryCodeForRegionCode;
	module.exports.getRegionCodeForCountryCode = module.exports.getRegionCodeForCountryCode;
	module.exports.getSupportedCallingCodes = module.exports.getSupportedCallingCodes;
	module.exports.getSupportedRegionCodes = module.exports.getSupportedRegionCodes;
	module.exports.getExample = module.exports.getExample;
	module.exports.getAsYouType = module.exports.getAsYouType;
	module.exports.getNumberFrom = module.exports.getNumberFrom;
	module.exports.findNumbers = module.exports.findNumbers; 
} (awesomePhonenumber));

var awesomePhonenumberExports = awesomePhonenumber.exports;
var index = /*@__PURE__*/getDefaultExportFromCjs(awesomePhonenumberExports);



const {
	PhoneNumber,
	AsYouType,
	getCountryCodeForRegionCode,
	getRegionCodeForCountryCode,
	getSupportedCallingCodes,
	getSupportedRegionCodes,
	findNumbers,
	getExample,
	getAsYouType,
	getNumberFrom,
} = index;

const parsePhoneNumber = ( ...args ) =>
{
	try
	{
		const ret = index( ...args ).toJSON( );
		if ( !ret.valid && !ret.possible )
		{
			ret.possible = false;
			if ( !ret.possibility )
				ret.possibility = 'invalid';
		}
		return ret;
	}
	catch ( error )
	{
		return {
			valid: false,
			possible: false,
			possibility: 'invalid',
			error,
		};
	}
};



;// CONCATENATED MODULE: ./src/directives/click-outside.js


// Polyfill for Event.path in IE 11: https://stackoverflow.com/a/46093727
function getParents(node, memo) {
  var parsedMemo = memo || [];
  var parentNode = node.parentNode;
  if (!parentNode) {
    return parsedMemo;
  }
  return getParents(parentNode, parsedMemo.concat(parentNode));
}

// Click-outside by BosNaufal: https://github.com/BosNaufal/vue-click-outside
/* harmony default export */ var click_outside = ({
  bind: function bind(el, binding, vNode) {
    // Provided expression must evaluate to a function.
    if (typeof binding.value !== 'function') {
      var compName = vNode.context.name;
      var warn = "[Vue-click-outside:] provided expression ".concat(binding.expression, " is not a function, but has to be");
      if (compName) {
        warn += "Found in component ".concat(compName);
      }
      console.warn(warn);
    }
    // Define Handler and cache it on the element
    var bubble = binding.modifiers.bubble;
    var handler = function handler(e) {
      // Fall back to composedPath if e.path is undefined
      var path = e.path || (e.composedPath ? e.composedPath() : false) || getParents(e.target);
      if (bubble || path.length && !el.contains(path[0]) && el !== path[0]) {
        binding.value(e);
      }
    };
    el.__vueClickOutside__ = handler;
    // add Event Listeners
    document.addEventListener('click', handler);
  },
  unbind: function unbind(el) {
    // Remove Event Listeners
    document.removeEventListener('click', el.__vueClickOutside__);
    el.__vueClickOutside__ = null;
  }
});
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/vue-tel-input.vue?vue&type=script&lang=js




























function getDefault(key) {
  var value = utils.options[key];
  if (typeof value === 'undefined') {
    return utils.options[key];
  }
  return value;
}
var events = ['keyup', 'keydown'];
/* harmony default export */ var vue_tel_inputvue_type_script_lang_js = ({
  name: 'VueTelInput',
  directives: {
    clickOutside: click_outside
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    allCountries: {
      type: Array,
      default: function _default() {
        return getDefault('allCountries');
      }
    },
    autocomplete: {
      type: String,
      default: function _default() {
        return getDefault('autocomplete');
      }
    },
    autofocus: {
      type: Boolean,
      default: function _default() {
        return getDefault('autofocus');
      }
    },
    customValidate: {
      type: [Boolean, RegExp],
      default: function _default() {
        return getDefault('customValidate');
      }
    },
    defaultCountry: {
      // Default country code, ie: 'AU'
      // Will override the current country of user
      type: String,
      default: function _default() {
        return getDefault('defaultCountry');
      }
    },
    disabled: {
      type: Boolean,
      default: function _default() {
        return getDefault('disabled');
      }
    },
    dropdownOptions: {
      type: Object,
      default: function _default() {
        return getDefault('dropdownOptions');
      }
    },
    enabledCountryCode: {
      type: Boolean,
      default: function _default() {
        return getDefault('enabledCountryCode');
      }
    },
    enabledFlags: {
      type: Boolean,
      default: function _default() {
        return getDefault('enabledFlags');
      }
    },
    ignoredCountries: {
      type: Array,
      default: function _default() {
        return getDefault('ignoredCountries');
      }
    },
    inputClasses: {
      type: [String, Array, Object],
      default: function _default() {
        return getDefault('inputClasses');
      }
    },
    inputId: {
      type: String,
      default: function _default() {
        return getDefault('inputId');
      }
    },
    inputOptions: {
      type: Object,
      default: function _default() {
        return getDefault('inputOptions');
      }
    },
    invalidMsg: {
      type: String,
      default: function _default() {
        return getDefault('invalidMsg');
      }
    },
    maxLen: {
      type: Number,
      default: function _default() {
        return getDefault('maxLen');
      }
    },
    name: {
      type: String,
      default: function _default() {
        return getDefault('name');
      }
    },
    mode: {
      type: String,
      default: function _default() {
        return getDefault('mode');
      }
    },
    onlyCountries: {
      type: Array,
      default: function _default() {
        return getDefault('onlyCountries');
      }
    },
    placeholder: {
      type: String,
      default: function _default() {
        return getDefault('placeholder');
      }
    },
    preferredCountries: {
      type: Array,
      default: function _default() {
        return getDefault('preferredCountries');
      }
    },
    readonly: {
      type: Boolean,
      default: function _default() {
        return getDefault('readonly');
      }
    },
    required: {
      type: Boolean,
      default: function _default() {
        return getDefault('required');
      }
    },
    validCharactersOnly: {
      type: Boolean,
      default: function _default() {
        return getDefault('validCharactersOnly');
      }
    },
    wrapperClasses: {
      type: [String, Array, Object],
      default: function _default() {
        return getDefault('wrapperClasses');
      }
    }
  },
  data: function data() {
    return {
      phone: '',
      activeCountry: {
        iso2: ''
      },
      open: false,
      finishMounted: false,
      selectedIndex: null,
      typeToFindInput: '',
      typeToFindTimer: null,
      cursorPosition: 0,
      dropdownOpenDirection: 'below'
    };
  },
  computed: {
    parsedPlaceholder: function parsedPlaceholder() {
      if (!this.finishMounted) {
        return '';
      }
      return this.placeholder;
    },
    parsedMode: function parsedMode() {
      if (this.customValidate) {
        return 'input';
      }
      if (this.mode) {
        if (!['international', 'national'].includes(this.mode)) {
          console.error('Invalid value of prop "mode"');
        } else {
          return this.mode;
        }
      }
      if (!this.phone || this.phone[0] !== '+') {
        return 'national';
      }
      return 'international';
    },
    filteredCountries: function filteredCountries() {
      var _this = this;
      // List countries after filtered
      if (this.onlyCountries.length) {
        return this.allCountries.filter(function (_ref) {
          var iso2 = _ref.iso2;
          return _this.onlyCountries.some(function (c) {
            return c.toUpperCase() === iso2;
          });
        });
      }
      if (this.ignoredCountries.length) {
        return this.allCountries.filter(function (_ref2) {
          var iso2 = _ref2.iso2;
          return !_this.ignoredCountries.includes(iso2.toUpperCase()) && !_this.ignoredCountries.includes(iso2.toLowerCase());
        });
      }
      return this.allCountries;
    },
    sortedCountries: function sortedCountries() {
      // Sort the list countries: from preferred countries to all countries
      var preferredCountries = this.getCountries(this.preferredCountries).map(function (country) {
        return _objectSpread2(_objectSpread2({}, country), {}, {
          preferred: true
        });
      });
      return [].concat(_toConsumableArray(preferredCountries), _toConsumableArray(this.filteredCountries));
    },
    phoneObject: function phoneObject() {
      var result = parsePhoneNumber(this.phone.replaceAll(' ', ''), {
        regionCode: this.activeCountry.iso2
      });
      Object.assign(result, {
        isValid: result.valid,
        country: this.activeCountry
      });
      return result;
    },
    phoneText: function phoneText() {
      var key = 'input';
      if (this.phoneObject.valid) {
        key = this.parsedMode;
      }
      return this.phoneObject.number[key] || '';
    }
  },
  watch: {
    // eslint-disable-next-line func-names
    'phoneObject.valid': function phoneObjectValid(value) {
      if (value) {
        this.phone = this.phoneText;
      }
      this.$emit('validate', this.phoneObject);
      this.$emit('onValidate', this.phoneObject); // Deprecated
    },
    value: function value() {
      this.phone = this.value;
    },
    open: function open(isDropdownOpened) {
      // Emit open and close events
      if (isDropdownOpened) {
        this.setDropdownPosition();
        this.$emit('open');
      } else {
        this.$emit('close');
      }
    },
    phone: function phone(newValue, oldValue) {
      var _this2 = this;
      var isValidCharactersOnly = this.validCharactersOnly && !this.testCharacters();
      var isCustomValidate = this.customValidate && !this.testCustomValidate();
      if (isValidCharactersOnly || isCustomValidate) {
        this.$nextTick(function () {
          _this2.phone = oldValue;
        });
      } else if (newValue) {
        if (newValue[0] === '+') {
          var _parsePhoneNumber;
          var code = ((_parsePhoneNumber = parsePhoneNumber(newValue.replaceAll(' ', ''))) === null || _parsePhoneNumber === void 0 ? void 0 : _parsePhoneNumber.regionCode) || '';
          if (code) {
            this.activeCountry = this.findCountry(code) || this.activeCountry;
          }
        }
      }
      // Reset the cursor to current position if it's not the last character.
      if (this.cursorPosition < oldValue.length) {
        this.$nextTick(function () {
          setCaretPosition(_this2.$refs.input, _this2.cursorPosition);
        });
      }
    },
    activeCountry: function activeCountry(value) {
      if (value && value.iso2) {
        this.$emit('country-changed', value);
      }
    }
  },
  mounted: function mounted() {
    var _this3 = this;
    this.initializeCountry().then(function () {
      if (!_this3.phone && _this3.inputOptions && _this3.inputOptions.showDialCode && _this3.activeCountry.dialCode) {
        _this3.phone = "+".concat(_this3.activeCountry.dialCode);
      }
      _this3.$emit('validate', _this3.phoneObject);
      _this3.$emit('onValidate', _this3.phoneObject); // Deprecated
    }).catch(console.error).then(function () {
      _this3.finishMounted = true;
    });
    this.$nextTick(function () {
      // on mounted - change width of dropdown
      _this3.resizePhoneDropdown();
      // also adding event listener - on window change - change dropdown
      window.addEventListener('resize', _this3.resizePhoneDropdown);
      var dropdown = _this3.$el.getElementsByClassName('vti__dropdown')[0];

      // on tabbing dropdown (enter or leave) - simulate open
      events.forEach(function (evt) {
        return dropdown.addEventListener(evt, function (event) {
          if (event.keyCode === 9) {
            dropdown.click();
          }
        });
      });
    });
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.resizePhoneDropdown);
    var dropdown = this.$el.getElementsByClassName('vti__dropdown')[0];
    events.forEach(function (evt) {
      return dropdown.removeEventListener(evt, function (event) {
        if (event.keyCode === 9) {
          dropdown.click();
        }
      });
    });
  },
  created: function created() {
    if (this.value) {
      this.phone = this.value.trim();
    }
  },
  methods: {
    resizePhoneDropdown: function resizePhoneDropdown() {
      // getting select input width
      var phoneElementWidth = this.$el.clientWidth || 440;

      // getting dropdown element directly in component
      var dropdownList = this.$el.getElementsByClassName('vti__dropdown-list')[0];

      // changing width
      dropdownList.style.width = "".concat(phoneElementWidth, "px");
    },
    initializeCountry: function initializeCountry() {
      var _this4 = this;
      return new Promise(function (resolve) {
        /**
         * 1. Use default country if passed from parent
         */
        if (_this4.defaultCountry) {
          var defaultCountry = _this4.findCountry(_this4.defaultCountry);
          if (defaultCountry) {
            _this4.choose(defaultCountry);
            resolve();
            return;
          }
        }
        var fallbackCountry = _this4.findCountry(_this4.preferredCountries[0]) || _this4.filteredCountries[0];
        _this4.choose(fallbackCountry);
        resolve();
      });
    },
    /**
     * Get the list of countries from the list of iso2 code
     */
    getCountries: function getCountries() {
      var _this5 = this;
      var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return list.map(function (countryCode) {
        return _this5.findCountry(countryCode);
      }).filter(Boolean);
    },
    findCountry: function findCountry() {
      var iso = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return this.filteredCountries.find(function (country) {
        return country.iso2 === iso.toUpperCase();
      });
    },
    getItemClass: function getItemClass(index, iso2) {
      var highlighted = this.selectedIndex === index;
      var lastPreferred = index === this.preferredCountries.length - 1;
      var preferred = this.preferredCountries.some(function (c) {
        return c.toUpperCase() === iso2;
      });
      return {
        highlighted: highlighted,
        'last-preferred': lastPreferred,
        preferred: preferred
      };
    },
    choose: function choose(country) {
      var toEmitInputEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var parsedCountry = country;
      if (typeof parsedCountry === 'string') {
        parsedCountry = this.findCountry(parsedCountry);
      }
      if (!parsedCountry) {
        return;
      }
      this.activeCountry = parsedCountry || this.activeCountry || {};
      if (this.phone && this.phone[0] === '+' && this.activeCountry.iso2 && this.phoneObject.number.national) {
        // Attach the current phone number with the newly selected country
        this.phone = parsePhoneNumber(this.phoneObject.number.national, this.activeCountry.iso2).number.international;
      } else if (this.inputOptions && this.inputOptions.showDialCode && parsedCountry) {
        // Reset phone if the showDialCode is set
        this.phone = "+".concat(parsedCountry.dialCode);
      }
      if (toEmitInputEvent) {
        this.$emit('input', this.phoneText, this.phoneObject);
        this.$emit('onInput', this.phoneObject); // Deprecated
      }
    },
    testCharacters: function testCharacters() {
      var re = /^[()\-+0-9\s]*$/;
      return re.test(this.phone);
    },
    testCustomValidate: function testCustomValidate() {
      return this.customValidate instanceof RegExp ? this.customValidate.test(this.phone) : false;
    },
    onInput: function onInput(e) {
      if (this.validCharactersOnly && !this.testCharacters()) {
        return;
      }
      if (this.customValidate && !this.testCustomValidate()) {
        return;
      }
      this.$refs.input.setCustomValidity(this.phoneObject.valid ? '' : this.invalidMsg);
      // Returns response.number to assign it to v-model (if being used)
      // Returns full response for cases @input is used
      // and parent wants to return the whole response.
      this.$emit('input', this.phoneText, this.phoneObject);
      this.$emit('onInput', this.phoneObject); // Deprecated

      // Keep the current cursor position just in case the input reformatted
      // and it gets moved to the last character.
      if (e && e.target) {
        this.cursorPosition = e.target.selectionStart;
      }
    },
    onBlur: function onBlur() {
      this.$emit('blur');
      this.$emit('onBlur'); // Deprecated
    },
    onFocus: function onFocus() {
      var _this6 = this;
      this.$nextTick(function () {
        setCaretPosition(_this6.$refs.input, _this6.phone.length);
      });
      this.$emit('focus');
    },
    onEnter: function onEnter() {
      this.$emit('enter');
      this.$emit('onEnter'); // Deprecated
    },
    onSpace: function onSpace() {
      this.$emit('space');
      this.$emit('onSpace'); // Deprecated
    },
    focus: function focus() {
      this.$refs.input.focus();
    },
    toggleDropdown: function toggleDropdown() {
      if (this.disabled) {
        return;
      }
      this.open = !this.open;
    },
    clickedOutside: function clickedOutside() {
      this.open = false;
    },
    keyboardNav: function keyboardNav(e) {
      var _this7 = this;
      if (e.keyCode === 40) {
        // down arrow
        e.preventDefault();
        this.open = true;
        if (this.selectedIndex === null) {
          this.selectedIndex = 0;
        } else {
          this.selectedIndex = Math.min(this.sortedCountries.length - 1, this.selectedIndex + 1);
        }
        var selEle = this.$refs.list.children[this.selectedIndex];
        if (selEle.offsetTop + selEle.clientHeight > this.$refs.list.scrollTop + this.$refs.list.clientHeight) {
          this.$refs.list.scrollTop = selEle.offsetTop - this.$refs.list.clientHeight + selEle.clientHeight;
        }
      } else if (e.keyCode === 38) {
        // up arrow
        e.preventDefault();
        this.open = true;
        if (this.selectedIndex === null) {
          this.selectedIndex = this.sortedCountries.length - 1;
        } else {
          this.selectedIndex = Math.max(0, this.selectedIndex - 1);
        }
        var _selEle = this.$refs.list.children[this.selectedIndex];
        if (_selEle.offsetTop < this.$refs.list.scrollTop) {
          this.$refs.list.scrollTop = _selEle.offsetTop;
        }
      } else if (e.keyCode === 13) {
        // enter key
        if (this.selectedIndex !== null) {
          this.choose(this.sortedCountries[this.selectedIndex], true);
        }
        this.open = !this.open;
      } else {
        // typing a country's name
        this.typeToFindInput += e.key;
        clearTimeout(this.typeToFindTimer);
        this.typeToFindTimer = setTimeout(function () {
          _this7.typeToFindInput = '';
        }, 700);
        // don't include preferred countries so we jump to the right place in the alphabet
        var typedCountryI = this.sortedCountries.slice(this.preferredCountries.length).findIndex(function (c) {
          return c.name.toLowerCase().startsWith(_this7.typeToFindInput);
        });
        if (typedCountryI >= 0) {
          this.selectedIndex = this.preferredCountries.length + typedCountryI;
          var _selEle2 = this.$refs.list.children[this.selectedIndex];
          var needToScrollTop = _selEle2.offsetTop < this.$refs.list.scrollTop;
          var needToScrollBottom = _selEle2.offsetTop + _selEle2.clientHeight > this.$refs.list.scrollTop + this.$refs.list.clientHeight;
          if (needToScrollTop || needToScrollBottom) {
            this.$refs.list.scrollTop = _selEle2.offsetTop - this.$refs.list.clientHeight / 2;
          }
        }
      }
    },
    reset: function reset() {
      this.selectedIndex = this.sortedCountries.map(function (c) {
        return c.iso2;
      }).indexOf(this.activeCountry.iso2);
      this.open = false;
    },
    setDropdownPosition: function setDropdownPosition() {
      var spaceBelow = window.innerHeight - this.$el.getBoundingClientRect().bottom;
      var hasEnoughSpaceBelow = spaceBelow > 200;
      if (hasEnoughSpaceBelow) {
        this.dropdownOpenDirection = 'below';
      } else {
        this.dropdownOpenDirection = 'above';
      }
    }
  }
});
;// CONCATENATED MODULE: ./src/components/vue-tel-input.vue?vue&type=script&lang=js
 /* harmony default export */ var components_vue_tel_inputvue_type_script_lang_js = (vue_tel_inputvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/vue-tel-input.vue?vue&type=style&index=1&id=5f57327a&prod&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/vue-tel-input.vue?vue&type=style&index=1&id=5f57327a&prod&lang=css

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

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
  if (moduleIdentifier) {
    // server build
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
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./src/components/vue-tel-input.vue



;



/* normalize component */

var component = normalizeComponent(
  components_vue_tel_inputvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vue_tel_input = (component.exports);
;// CONCATENATED MODULE: ./src/index.js



function install(Vue) {
  var customOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (install.installed) return;
  install.installed = true;
  utils.options = _objectSpread2(_objectSpread2({}, defaultOptions), customOptions);
  Vue.component('vue-tel-input', vue_tel_input);
}

var src_plugin = {
  install: install
};

// Auto-install
var GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof __webpack_require__.g !== 'undefined') {
  GlobalVue = __webpack_require__.g.Vue;
}
if (GlobalVue) {
  GlobalVue.use(src_plugin);
}
/* harmony default export */ var src_0 = (src_plugin);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (src_0);


}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});