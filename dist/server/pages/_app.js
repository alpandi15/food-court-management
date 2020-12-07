module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ../node_modules/next/app.js
var app = __webpack_require__("o42t");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");
var external_next_redux_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_wrapper_);

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__("ufKq");

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__("ZSx1");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: ./components/CustomHelmet/index.js + 2 modules
var CustomHelmet = __webpack_require__("6AbQ");

// EXTERNAL MODULE: external "redux-form"
var external_redux_form_ = __webpack_require__("eLzx");

// CONCATENATED MODULE: ./actions/types.js
// AUTH
const FETCH_AUTH = 'FETCH_AUTH';
const RECEIVE_AUTH = 'RECEIVE_AUTH';
const FAILED_AUTH = 'FAILED_AUTH';
const FETCH_LOGOUT_USER = 'FETCH_LOGOUT_USER'; // ACCOUNT UPDATE

const FETCH_CHANGE_ACCOUNT = 'FETCH_CHANGE_ACCOUNT';
const RECEIVE_CHANGE_ACCOUNT = 'RECEIVE_CHANGE_ACCOUNT';
const FAILED_CHANGE_ACCOUNT = 'FAILED_CHANGE_ACCOUNT'; // FORGOT PASSWORD

const FETCH_FORGOT_PASSWORD = 'FETCH_FORGOT_PASSWORD';
const RECEIVE_ITEM_FORGOT_PASSWORD = 'RECEIVE_ITEM_FORGOT_PASSWORD';
const FAILED_FORGOT_PASSWORD = 'FAILED_FORGOT_PASSWORD'; // IMAGE

const FETCH_IMAGE = 'FETCH_IMAGE';
const SUCCESS_IMAGE = 'SUCCESS_IMAGE';
const FAILED_IMAGE = 'FAILED_IMAGE'; // CURRENT TIME

const FETCH_CURRENT_TIME = 'FETCH_CURRENT_TIME';
const FAILED_CURRENT_TIME = 'FAILED_CURRENT_TIME';
const RECEIVE_CURRENT_TIME = 'RECEIVE_CURRENT_TIME'; // FOOD COURT

const FETCH_FOODCOURT = 'FETCH_FOODCOURT';
const FAILED_FOODCOURT = 'FAILED_FOODCOURT';
const RECEIVE_FOODCOURT = 'RECEIVE_FOODCOURT';
const RECEIVE_ITEM_FOODCOURT = 'RECEIVE_ITEM_FOODCOURT'; // STAND

const FETCH_STAND = 'FETCH_STAND';
const FAILED_STAND = 'FAILED_STAND';
const RECEIVE_STAND = 'RECEIVE_STAND';
const RECEIVE_ITEM_STAND = 'RECEIVE_ITEM_STAND'; // CATEGORY_STAND

const FETCH_CATEGORY_STAND = 'FETCH_CATEGORY_STAND';
const FAILED_CATEGORY_STAND = 'FAILED_CATEGORY_STAND';
const RECEIVE_CATEGORY_STAND = 'RECEIVE_CATEGORY_STAND';
const RECEIVE_ITEM_CATEGORY_STAND = 'RECEIVE_ITEM_CATEGORY_STAND'; // HOME_STAND

const FETCH_HOME_STAND = 'FETCH_HOME_STAND';
const FAILED_HOME_STAND = 'FAILED_HOME_STAND';
const RECEIVE_HOME_STAND = 'RECEIVE_HOME_STAND';
const RECEIVE_ITEM_HOME_STAND = 'RECEIVE_ITEM_HOME_STAND'; // PRODUCT

const FETCH_PRODUCT = 'FETCH_PRODUCT';
const FAILED_PRODUCT = 'FAILED_PRODUCT';
const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
const RECEIVE_ITEM_PRODUCT = 'RECEIVE_ITEM_PRODUCT'; // USER

const FETCH_USER = 'FETCH_USER';
const FAILED_USER = 'FAILED_USER';
const RECEIVE_USER = 'RECEIVE_USER';
const RECEIVE_ITEM_USER = 'RECEIVE_ITEM_USER'; // GENERATED TYPES
// CONCATENATED MODULE: ./store/reducer/accountStore.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  loading: false,
  currentItem: {},
  list: [],
  meta: {},
  error: false,
  message: ''
};
/* harmony default export */ var accountStore = ((state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_AUTH:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true,
        error: false
      });

    case RECEIVE_AUTH:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: false,
        message: '',
        currentItem: action.payload.currentItem
      });

    case FAILED_AUTH:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: true,
        message: action.payload.error
      });

    case FETCH_LOGOUT_USER:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: false,
        currentItem: {}
      });

    case FETCH_CHANGE_ACCOUNT:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true,
        error: false
      });

    case RECEIVE_CHANGE_ACCOUNT:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: false
      });

    case FAILED_CHANGE_ACCOUNT:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: true,
        errorMessage: action.payload.error
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./store/reducer/forgotPassword.js
function forgotPassword_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function forgotPassword_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { forgotPassword_ownKeys(Object(source), true).forEach(function (key) { forgotPassword_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { forgotPassword_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function forgotPassword_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const forgotPassword_initialState = {
  loading: false,
  currentItem: {},
  meta: {},
  error: false,
  message: ''
};
/* harmony default export */ var forgotPassword = ((state = forgotPassword_initialState, action = {}) => {
  switch (action.type) {
    case FETCH_FORGOT_PASSWORD:
      return forgotPassword_objectSpread(forgotPassword_objectSpread({}, state), {}, {
        loading: true,
        message: null
      });

    case RECEIVE_ITEM_FORGOT_PASSWORD:
      return forgotPassword_objectSpread(forgotPassword_objectSpread({}, state), {}, {
        loading: false,
        currentItem: action.payload.currentItem,
        meta: action.payload.meta,
        message: null
      });

    case FAILED_FORGOT_PASSWORD:
      return forgotPassword_objectSpread(forgotPassword_objectSpread({}, state), {}, {
        loading: false,
        message: action.payload.error
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./store/reducer/foodCourt.js
function foodCourt_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function foodCourt_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { foodCourt_ownKeys(Object(source), true).forEach(function (key) { foodCourt_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { foodCourt_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function foodCourt_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const foodCourt_initialState = {
  loading: false,
  currentItem: {},
  list: [],
  meta: {},
  error: false,
  message: ''
};
/* harmony default export */ var foodCourt = ((state = foodCourt_initialState, action = {}) => {
  switch (action.type) {
    case FETCH_FOODCOURT:
      return foodCourt_objectSpread(foodCourt_objectSpread({}, state), {}, {
        loading: true,
        error: false
      });

    case RECEIVE_ITEM_FOODCOURT:
      return foodCourt_objectSpread(foodCourt_objectSpread({}, state), {}, {
        loading: false,
        error: false,
        message: '',
        currentItem: action.payload.currentItem
      });

    case RECEIVE_FOODCOURT:
      return foodCourt_objectSpread(foodCourt_objectSpread({}, state), {}, {
        loading: false,
        error: false,
        message: '',
        list: action.payload.list,
        meta: action.payload.meta
      });

    case FAILED_FOODCOURT:
      return foodCourt_objectSpread(foodCourt_objectSpread({}, state), {}, {
        loading: false,
        error: true,
        message: action.payload.error
      });

    case FETCH_LOGOUT_USER:
      return foodCourt_objectSpread(foodCourt_objectSpread({}, state), {}, {
        loading: false,
        error: false,
        currentItem: {}
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./store/reducer/userStore.js
function userStore_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function userStore_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { userStore_ownKeys(Object(source), true).forEach(function (key) { userStore_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { userStore_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function userStore_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const userStore_initialState = {
  loading: false,
  currentItem: {},
  list: [],
  meta: {},
  error: false,
  message: ''
};
/* harmony default export */ var userStore = ((state = userStore_initialState, action = {}) => {
  switch (action.type) {
    case FETCH_USER:
      return userStore_objectSpread(userStore_objectSpread({}, state), {}, {
        loading: true,
        error: false
      });

    case RECEIVE_ITEM_USER:
      return userStore_objectSpread(userStore_objectSpread({}, state), {}, {
        loading: false,
        error: false,
        message: '',
        currentItem: action.payload.currentItem
      });

    case RECEIVE_USER:
      return userStore_objectSpread(userStore_objectSpread({}, state), {}, {
        loading: false,
        error: false,
        message: '',
        list: action.payload.list,
        meta: action.payload.meta
      });

    case FAILED_USER:
      return userStore_objectSpread(userStore_objectSpread({}, state), {}, {
        loading: false,
        error: true,
        message: action.payload.error
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./store/reducer/productStore.js
function productStore_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function productStore_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { productStore_ownKeys(Object(source), true).forEach(function (key) { productStore_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { productStore_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function productStore_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const productStore_initialState = {
  loading: false,
  currentItem: {},
  list: [],
  meta: {},
  error: false,
  message: ''
};
/* harmony default export */ var productStore = ((state = productStore_initialState, action = {}) => {
  switch (action.type) {
    case FETCH_PRODUCT:
      return productStore_objectSpread(productStore_objectSpread({}, state), {}, {
        loading: true,
        error: false
      });

    case RECEIVE_ITEM_PRODUCT:
      return productStore_objectSpread(productStore_objectSpread({}, state), {}, {
        loading: false,
        error: false,
        message: '',
        currentItem: action.payload.currentItem
      });

    case RECEIVE_PRODUCT:
      return productStore_objectSpread(productStore_objectSpread({}, state), {}, {
        loading: false,
        error: false,
        message: '',
        list: action.payload.list,
        meta: action.payload.meta
      });

    case FAILED_PRODUCT:
      return productStore_objectSpread(productStore_objectSpread({}, state), {}, {
        loading: false,
        error: true,
        message: action.payload.error
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./store/reducer/homeStandStore.js
function homeStandStore_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function homeStandStore_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { homeStandStore_ownKeys(Object(source), true).forEach(function (key) { homeStandStore_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { homeStandStore_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function homeStandStore_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const homeStandStore_initialState = {
  loading: false,
  currentItem: {},
  list: [],
  meta: {},
  error: false,
  message: ''
};
/* harmony default export */ var homeStandStore = ((state = homeStandStore_initialState, action = {}) => {
  switch (action.type) {
    case FETCH_HOME_STAND:
      return homeStandStore_objectSpread(homeStandStore_objectSpread({}, state), {}, {
        loading: true,
        error: false
      });

    case RECEIVE_ITEM_HOME_STAND:
      return homeStandStore_objectSpread(homeStandStore_objectSpread({}, state), {}, {
        loading: false,
        error: false,
        message: '',
        currentItem: action.payload.currentItem
      });

    case RECEIVE_HOME_STAND:
      return homeStandStore_objectSpread(homeStandStore_objectSpread({}, state), {}, {
        loading: false,
        error: false,
        message: '',
        list: action.payload.list,
        meta: action.payload.meta
      });

    case FAILED_HOME_STAND:
      return homeStandStore_objectSpread(homeStandStore_objectSpread({}, state), {}, {
        loading: false,
        error: true,
        message: action.payload.error
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./store/reducer/categoryStandStore.js
function categoryStandStore_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function categoryStandStore_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { categoryStandStore_ownKeys(Object(source), true).forEach(function (key) { categoryStandStore_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { categoryStandStore_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function categoryStandStore_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const categoryStandStore_initialState = {
  loading: false,
  currentItem: {},
  list: [],
  meta: {},
  error: false,
  message: ''
};
/* harmony default export */ var categoryStandStore = ((state = categoryStandStore_initialState, action = {}) => {
  switch (action.type) {
    case FETCH_CATEGORY_STAND:
      return categoryStandStore_objectSpread(categoryStandStore_objectSpread({}, state), {}, {
        loading: true,
        error: false
      });

    case RECEIVE_ITEM_CATEGORY_STAND:
      return categoryStandStore_objectSpread(categoryStandStore_objectSpread({}, state), {}, {
        loading: false,
        error: false,
        message: '',
        currentItem: action.payload.currentItem
      });

    case RECEIVE_CATEGORY_STAND:
      return categoryStandStore_objectSpread(categoryStandStore_objectSpread({}, state), {}, {
        loading: false,
        error: false,
        message: '',
        list: action.payload.list,
        meta: action.payload.meta
      });

    case FAILED_CATEGORY_STAND:
      return categoryStandStore_objectSpread(categoryStandStore_objectSpread({}, state), {}, {
        loading: false,
        error: true,
        message: action.payload.error
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./store/reducer/standStore.js
function standStore_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function standStore_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { standStore_ownKeys(Object(source), true).forEach(function (key) { standStore_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { standStore_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function standStore_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const standStore_initialState = {
  loading: false,
  currentItem: {},
  list: [],
  meta: {},
  error: false,
  message: ''
};
/* harmony default export */ var standStore = ((state = standStore_initialState, action = {}) => {
  switch (action.type) {
    case FETCH_STAND:
      return standStore_objectSpread(standStore_objectSpread({}, state), {}, {
        loading: true,
        error: false
      });

    case RECEIVE_ITEM_STAND:
      return standStore_objectSpread(standStore_objectSpread({}, state), {}, {
        loading: false,
        error: false,
        message: '',
        currentItem: action.payload.currentItem
      });

    case RECEIVE_STAND:
      return standStore_objectSpread(standStore_objectSpread({}, state), {}, {
        loading: false,
        error: false,
        message: '',
        list: action.payload.list,
        meta: action.payload.meta
      });

    case FAILED_STAND:
      return standStore_objectSpread(standStore_objectSpread({}, state), {}, {
        loading: false,
        error: true,
        message: action.payload.error
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./store/index.js
/* eslint-disable comma-dangle */




 // GENERATED REDUCER






const rooterReducers = Object(external_redux_["combineReducers"])({
  form: external_redux_form_["reducer"],
  accountStore: accountStore,
  forgotStore: forgotPassword,
  foodCourt: foodCourt,
  // GENERATED COMBINE
  userStore: userStore,
  productStore: productStore,
  homeStandStore: homeStandStore,
  categoryStandStore: categoryStandStore,
  standStore: standStore
});
/* harmony default export */ var store = (rooterReducers);
// CONCATENATED MODULE: ./pages/_app.js
var __jsx = external_react_default.a.createElement;









const theme = {
  colors: {
    primary: '#0070f3'
  }
};
const _app_store = Object(external_redux_["createStore"])(store, Object(external_redux_devtools_extension_["composeWithDevTools"])(Object(external_redux_["applyMiddleware"])(external_redux_thunk_default.a)));

class _app_MyApp extends app_default.a {
  constructor() {
    super();
  }

  static async getInitialProps({
    Component,
    ctx
  }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      pageProps
    };
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return __jsx(external_react_default.a.Fragment, null, __jsx(external_react_redux_["Provider"], {
      store: _app_store
    }, __jsx(CustomHelmet["a" /* default */], null), __jsx(Component, pageProps)));
  }

}

const makeStore = () => {
  return _app_store;
};

/* harmony default export */ var _app = __webpack_exports__["default"] = (external_next_redux_wrapper_default()(makeStore)(_app_MyApp));

/***/ }),

/***/ "63Ad":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "6AbQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__("zIXN");
var external_react_helmet_default = /*#__PURE__*/__webpack_require__.n(external_react_helmet_);

// CONCATENATED MODULE: ./theme/color.js
/* harmony default export */ var color = ({
  // Start - Material Pallete https://www.materialpalette.com/light-green/light-blue
  primaryColor: '#FB770D',
  secondaryColor: '#325D79',
  colorPrimarySmooth: '#FFEBDB',
  contentColor: '#cafaf7',
  darkPrimaryColor: '#5B8F32',
  lightPrimaryColor: '#DCEDC8',
  grayButton: '#EBEBEB',
  grayButtonText: '#909090',
  grayBgColor: '#707070',
  textIcons: '#ffffff',
  accentIcons: '#03A9F4',
  primaryText: '#EFEEEE',
  secondaryText: '#757575',
  dividerColor: '#BDBDBD',
  backgroundColor: '#FAFCFB',
  darkTextColor: '#000000',
  // End - Material Pallete https://www.materialpalette.com/light-green/light-blue
  normalColor: '#B1B0B0',
  // icon on #00DED6
  // iconOff: '#B9B9B9',
  iconOff: '#BCBCBC',
  logout: '#FF6767',
  login: '#51DD8C',
  // icon color #333333
  white: '#ffffff',
  errorColor: '#E4202D',
  starColor: '#FEBF35',
  transparent: 'transparent',
  link: '#03A9F4',
  gray: '#ACACAC',
  orange: '#FF4E00',
  facebook: '#4266b2',
  google: '#EC3F7A'
});
// CONCATENATED MODULE: ./constants/index.js
const APPNAME = 'Food Court Management';
const DESCRIPTION = 'Food Court Management';
const TYPE_CODE_FORGOT = 0;
const TYPE_CODE_VERIFICATION = 1;
const TYPE_ACCOUNT_PHONE = 0;
const TYPE_ACCOUNT_EMAIL = 1;
const GUARD_OWNER = 'owner';
const GUARD_USER = 'user';
const GUARD_STAND = 'stand';
const FOODCOURT_SELECTED = 'owner_foodcourt_selected';
// CONCATENATED MODULE: ./components/CustomHelmet/index.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const CustomHelmet = (_ref) => {
  let {
    title,
    meta = [],
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["title", "meta", "children"]);

  console.log('CUstomer Helment ', title);
  return __jsx(external_react_helmet_default.a, _extends({
    htmlAttributes: {
      lang: 'en'
    },
    title: `${title} | ${DESCRIPTION}`,
    meta: [{
      name: 'theme-color',
      content: color.darkPrimaryColor
    }, {
      name: 'description',
      content: DESCRIPTION
    }, {
      name: 'viewport',
      content: 'minimum-scale=1, initial-scale=1.0, maximum-scale=1.0, width=device-width'
    }, {
      property: 'og:title',
      content: `${title} | ${DESCRIPTION}`
    }].concat(meta)
  }, props), __jsx("link", {
    async: true,
    rel: "shortcut icon",
    type: "image/x-icon",
    href: "/static/favicon.ico"
  }), __jsx("link", {
    rel: "preload",
    async: true,
    type: "text/css",
    href: "/static/nprogress.css"
  }), children);
};

CustomHelmet.defaultProps = {
  meta: [],
  title: APPNAME
};
/* harmony default export */ var components_CustomHelmet = __webpack_exports__["a"] = (CustomHelmet);

/***/ }),

/***/ "6jsY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("63Ad");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "eLzx":
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "o42t":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("6jsY")


/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "zIXN":
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ })

/******/ });