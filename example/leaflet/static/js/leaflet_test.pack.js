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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../webcode/node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!*******************************************************************************!*\
  !*** D:/coblan/webcode/node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\nmodule.exports[\"default\"] = module.exports, module.exports.__esModule = true;\n\n//# sourceURL=webpack:///D:/coblan/webcode/node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "../../../webcode/node_modules/@babel/runtime/helpers/createClass.js":
/*!****************************************************************************!*\
  !*** D:/coblan/webcode/node_modules/@babel/runtime/helpers/createClass.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nmodule.exports = _createClass;\nmodule.exports[\"default\"] = module.exports, module.exports.__esModule = true;\n\n//# sourceURL=webpack:///D:/coblan/webcode/node_modules/@babel/runtime/helpers/createClass.js?");

/***/ }),

/***/ "../../../webcode/node_modules/babel-loader/lib/index.js?!../../../webcode/node_modules/vue-loader/lib/index.js?!./leaflet_tools/floatPannel.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** D:/coblan/webcode/node_modules/babel-loader/lib??ref--2!D:/coblan/webcode/node_modules/vue-loader/lib??vue-loader-options!./leaflet_tools/floatPannel.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _polygenTool_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polygenTool.js */ \"./leaflet_tools/polygenTool.js\");\n/* harmony import */ var _pannels_blockList_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pannels/blockList.vue */ \"./leaflet_tools/pannels/blockList.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    blockList: _pannels_blockList_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  props: {\n    map: {}\n  },\n  data: function data() {\n    return {\n      view: 'blocklist'\n    };\n  },\n  mounted: function mounted() {\n    this.drawer = new Drawer(this.map);\n  },\n  methods: {\n    createPolygen: function createPolygen() {},\n    drawPolygen: function drawPolygen() {\n      // this.drawer.polygon()\n      // DrawTool.init(this.map)\n      this.po = new L.Polygon([[-50, 10], [50, 10], [50, 50], [-50, 50]], {\n        'label': 'Polygon 2',\n        'popup': 'Polygon 2'\n      }).addTo(this.map);\n      this.po.editing.enable();\n    },\n    savePolygon: function savePolygon() {\n      debugger;\n      var po = this.po;\n      console.log('mm');\n    }\n  }\n});\n\n//# sourceURL=webpack:///./leaflet_tools/floatPannel.vue?D:/coblan/webcode/node_modules/babel-loader/lib??ref--2!D:/coblan/webcode/node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "../../../webcode/node_modules/css-loader/dist/cjs.js!../../../webcode/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../webcode/node_modules/sass-loader/dist/cjs.js!../../../webcode/node_modules/vue-loader/lib/index.js?!./leaflet_tools/floatPannel.vue?vue&type=style&index=0&id=791a1cf3&scoped=true&lang=scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/coblan/webcode/node_modules/css-loader/dist/cjs.js!D:/coblan/webcode/node_modules/vue-loader/lib/loaders/stylePostLoader.js!D:/coblan/webcode/node_modules/sass-loader/dist/cjs.js!D:/coblan/webcode/node_modules/vue-loader/lib??vue-loader-options!./leaflet_tools/floatPannel.vue?vue&type=style&index=0&id=791a1cf3&scoped=true&lang=scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _webcode_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../webcode/node_modules/css-loader/dist/runtime/api.js */ \"../../../webcode/node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _webcode_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_webcode_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _webcode_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"\\n.float-pannel[data-v-791a1cf3]{position:fixed;top:30px;right:30px;z-index:9999;width:200px;height:400px;background-color:white\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./leaflet_tools/floatPannel.vue?D:/coblan/webcode/node_modules/css-loader/dist/cjs.js!D:/coblan/webcode/node_modules/vue-loader/lib/loaders/stylePostLoader.js!D:/coblan/webcode/node_modules/sass-loader/dist/cjs.js!D:/coblan/webcode/node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "../../../webcode/node_modules/css-loader/dist/runtime/api.js":
/*!*********************************************************************!*\
  !*** D:/coblan/webcode/node_modules/css-loader/dist/runtime/api.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///D:/coblan/webcode/node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../../../webcode/node_modules/style-loader/dist/cjs.js!../../../webcode/node_modules/css-loader/dist/cjs.js!../../../webcode/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../webcode/node_modules/sass-loader/dist/cjs.js!../../../webcode/node_modules/vue-loader/lib/index.js?!./leaflet_tools/floatPannel.vue?vue&type=style&index=0&id=791a1cf3&scoped=true&lang=scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/coblan/webcode/node_modules/style-loader/dist/cjs.js!D:/coblan/webcode/node_modules/css-loader/dist/cjs.js!D:/coblan/webcode/node_modules/vue-loader/lib/loaders/stylePostLoader.js!D:/coblan/webcode/node_modules/sass-loader/dist/cjs.js!D:/coblan/webcode/node_modules/vue-loader/lib??vue-loader-options!./leaflet_tools/floatPannel.vue?vue&type=style&index=0&id=791a1cf3&scoped=true&lang=scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _webcode_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../webcode/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../../../webcode/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _webcode_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_webcode_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _webcode_node_modules_css_loader_dist_cjs_js_webcode_node_modules_vue_loader_lib_loaders_stylePostLoader_js_webcode_node_modules_sass_loader_dist_cjs_js_webcode_node_modules_vue_loader_lib_index_js_vue_loader_options_floatPannel_vue_vue_type_style_index_0_id_791a1cf3_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../webcode/node_modules/css-loader/dist/cjs.js!../../../../webcode/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../webcode/node_modules/sass-loader/dist/cjs.js!../../../../webcode/node_modules/vue-loader/lib??vue-loader-options!./floatPannel.vue?vue&type=style&index=0&id=791a1cf3&scoped=true&lang=scss */ \"../../../webcode/node_modules/css-loader/dist/cjs.js!../../../webcode/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../webcode/node_modules/sass-loader/dist/cjs.js!../../../webcode/node_modules/vue-loader/lib/index.js?!./leaflet_tools/floatPannel.vue?vue&type=style&index=0&id=791a1cf3&scoped=true&lang=scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _webcode_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_webcode_node_modules_css_loader_dist_cjs_js_webcode_node_modules_vue_loader_lib_loaders_stylePostLoader_js_webcode_node_modules_sass_loader_dist_cjs_js_webcode_node_modules_vue_loader_lib_index_js_vue_loader_options_floatPannel_vue_vue_type_style_index_0_id_791a1cf3_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"], options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_webcode_node_modules_css_loader_dist_cjs_js_webcode_node_modules_vue_loader_lib_loaders_stylePostLoader_js_webcode_node_modules_sass_loader_dist_cjs_js_webcode_node_modules_vue_loader_lib_index_js_vue_loader_options_floatPannel_vue_vue_type_style_index_0_id_791a1cf3_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locals || {});\n\n//# sourceURL=webpack:///./leaflet_tools/floatPannel.vue?D:/coblan/webcode/node_modules/style-loader/dist/cjs.js!D:/coblan/webcode/node_modules/css-loader/dist/cjs.js!D:/coblan/webcode/node_modules/vue-loader/lib/loaders/stylePostLoader.js!D:/coblan/webcode/node_modules/sass-loader/dist/cjs.js!D:/coblan/webcode/node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "../../../webcode/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!********************************************************************************************!*\
  !*** D:/coblan/webcode/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///D:/coblan/webcode/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "../../../webcode/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../webcode/node_modules/vue-loader/lib/index.js?!./leaflet_tools/floatPannel.vue?vue&type=template&id=791a1cf3&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/coblan/webcode/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!D:/coblan/webcode/node_modules/vue-loader/lib??vue-loader-options!./leaflet_tools/floatPannel.vue?vue&type=template&id=791a1cf3&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"float-pannel\" }, [\n    _c(\"button\", { on: { click: _vm.createPolygen } }, [_vm._v(\"创建区域\")]),\n    _vm._v(\" \"),\n    _c(\"div\", [_vm.view == \"blocklist\" ? _c(\"blockList\") : _vm._e()], 1),\n    _vm._v(\" \"),\n    _c(\"button\", { on: { click: _vm.drawPolygen } }, [_vm._v(\"画多边形\")]),\n    _vm._v(\" \"),\n    _c(\n      \"button\",\n      {\n        on: {\n          click: function($event) {\n            return _vm.savePolygon()\n          }\n        }\n      },\n      [_vm._v(\"保存多边形\")]\n    )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./leaflet_tools/floatPannel.vue?D:/coblan/webcode/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!D:/coblan/webcode/node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "../../../webcode/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../webcode/node_modules/vue-loader/lib/index.js?!./leaflet_tools/pannels/blockList.vue?vue&type=template&id=3220bf29":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/coblan/webcode/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!D:/coblan/webcode/node_modules/vue-loader/lib??vue-loader-options!./leaflet_tools/pannels/blockList.vue?vue&type=template&id=3220bf29 ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [_vm._v(\"\\n    hello\\n\")])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./leaflet_tools/pannels/blockList.vue?D:/coblan/webcode/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!D:/coblan/webcode/node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "../../../webcode/node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!************************************************************************************!*\
  !*** D:/coblan/webcode/node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return normalizeComponent; });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functioal component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack:///D:/coblan/webcode/node_modules/vue-loader/lib/runtime/componentNormalizer.js?");

/***/ }),

/***/ "./leaflet_tools/floatPannel.vue":
/*!***************************************!*\
  !*** ./leaflet_tools/floatPannel.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _floatPannel_vue_vue_type_template_id_791a1cf3_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./floatPannel.vue?vue&type=template&id=791a1cf3&scoped=true */ \"./leaflet_tools/floatPannel.vue?vue&type=template&id=791a1cf3&scoped=true\");\n/* harmony import */ var _floatPannel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./floatPannel.vue?vue&type=script&lang=js */ \"./leaflet_tools/floatPannel.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _floatPannel_vue_vue_type_style_index_0_id_791a1cf3_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./floatPannel.vue?vue&type=style&index=0&id=791a1cf3&scoped=true&lang=scss */ \"./leaflet_tools/floatPannel.vue?vue&type=style&index=0&id=791a1cf3&scoped=true&lang=scss\");\n/* harmony import */ var _webcode_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../webcode/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"../../../webcode/node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_webcode_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _floatPannel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _floatPannel_vue_vue_type_template_id_791a1cf3_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _floatPannel_vue_vue_type_template_id_791a1cf3_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"791a1cf3\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"leaflet_tools\\\\floatPannel.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./leaflet_tools/floatPannel.vue?");

/***/ }),

/***/ "./leaflet_tools/floatPannel.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./leaflet_tools/floatPannel.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _webcode_node_modules_babel_loader_lib_index_js_ref_2_webcode_node_modules_vue_loader_lib_index_js_vue_loader_options_floatPannel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../webcode/node_modules/babel-loader/lib??ref--2!../../../../webcode/node_modules/vue-loader/lib??vue-loader-options!./floatPannel.vue?vue&type=script&lang=js */ \"../../../webcode/node_modules/babel-loader/lib/index.js?!../../../webcode/node_modules/vue-loader/lib/index.js?!./leaflet_tools/floatPannel.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_webcode_node_modules_babel_loader_lib_index_js_ref_2_webcode_node_modules_vue_loader_lib_index_js_vue_loader_options_floatPannel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./leaflet_tools/floatPannel.vue?");

/***/ }),

/***/ "./leaflet_tools/floatPannel.vue?vue&type=style&index=0&id=791a1cf3&scoped=true&lang=scss":
/*!************************************************************************************************!*\
  !*** ./leaflet_tools/floatPannel.vue?vue&type=style&index=0&id=791a1cf3&scoped=true&lang=scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _webcode_node_modules_style_loader_dist_cjs_js_webcode_node_modules_css_loader_dist_cjs_js_webcode_node_modules_vue_loader_lib_loaders_stylePostLoader_js_webcode_node_modules_sass_loader_dist_cjs_js_webcode_node_modules_vue_loader_lib_index_js_vue_loader_options_floatPannel_vue_vue_type_style_index_0_id_791a1cf3_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../webcode/node_modules/style-loader/dist/cjs.js!../../../../webcode/node_modules/css-loader/dist/cjs.js!../../../../webcode/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../webcode/node_modules/sass-loader/dist/cjs.js!../../../../webcode/node_modules/vue-loader/lib??vue-loader-options!./floatPannel.vue?vue&type=style&index=0&id=791a1cf3&scoped=true&lang=scss */ \"../../../webcode/node_modules/style-loader/dist/cjs.js!../../../webcode/node_modules/css-loader/dist/cjs.js!../../../webcode/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../webcode/node_modules/sass-loader/dist/cjs.js!../../../webcode/node_modules/vue-loader/lib/index.js?!./leaflet_tools/floatPannel.vue?vue&type=style&index=0&id=791a1cf3&scoped=true&lang=scss\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_webcode_node_modules_style_loader_dist_cjs_js_webcode_node_modules_css_loader_dist_cjs_js_webcode_node_modules_vue_loader_lib_loaders_stylePostLoader_js_webcode_node_modules_sass_loader_dist_cjs_js_webcode_node_modules_vue_loader_lib_index_js_vue_loader_options_floatPannel_vue_vue_type_style_index_0_id_791a1cf3_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./leaflet_tools/floatPannel.vue?");

/***/ }),

/***/ "./leaflet_tools/floatPannel.vue?vue&type=template&id=791a1cf3&scoped=true":
/*!*********************************************************************************!*\
  !*** ./leaflet_tools/floatPannel.vue?vue&type=template&id=791a1cf3&scoped=true ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _webcode_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_webcode_node_modules_vue_loader_lib_index_js_vue_loader_options_floatPannel_vue_vue_type_template_id_791a1cf3_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../webcode/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../webcode/node_modules/vue-loader/lib??vue-loader-options!./floatPannel.vue?vue&type=template&id=791a1cf3&scoped=true */ \"../../../webcode/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../webcode/node_modules/vue-loader/lib/index.js?!./leaflet_tools/floatPannel.vue?vue&type=template&id=791a1cf3&scoped=true\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _webcode_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_webcode_node_modules_vue_loader_lib_index_js_vue_loader_options_floatPannel_vue_vue_type_template_id_791a1cf3_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _webcode_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_webcode_node_modules_vue_loader_lib_index_js_vue_loader_options_floatPannel_vue_vue_type_template_id_791a1cf3_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./leaflet_tools/floatPannel.vue?");

/***/ }),

/***/ "./leaflet_tools/pannels/blockList.vue":
/*!*********************************************!*\
  !*** ./leaflet_tools/pannels/blockList.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blockList_vue_vue_type_template_id_3220bf29__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blockList.vue?vue&type=template&id=3220bf29 */ \"./leaflet_tools/pannels/blockList.vue?vue&type=template&id=3220bf29\");\n/* harmony import */ var _webcode_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../webcode/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"../../../webcode/node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_webcode_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _blockList_vue_vue_type_template_id_3220bf29__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _blockList_vue_vue_type_template_id_3220bf29__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"leaflet_tools\\\\pannels\\\\blockList.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./leaflet_tools/pannels/blockList.vue?");

/***/ }),

/***/ "./leaflet_tools/pannels/blockList.vue?vue&type=template&id=3220bf29":
/*!***************************************************************************!*\
  !*** ./leaflet_tools/pannels/blockList.vue?vue&type=template&id=3220bf29 ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _webcode_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_webcode_node_modules_vue_loader_lib_index_js_vue_loader_options_blockList_vue_vue_type_template_id_3220bf29__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../webcode/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../webcode/node_modules/vue-loader/lib??vue-loader-options!./blockList.vue?vue&type=template&id=3220bf29 */ \"../../../webcode/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../webcode/node_modules/vue-loader/lib/index.js?!./leaflet_tools/pannels/blockList.vue?vue&type=template&id=3220bf29\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _webcode_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_webcode_node_modules_vue_loader_lib_index_js_vue_loader_options_blockList_vue_vue_type_template_id_3220bf29__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _webcode_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_webcode_node_modules_vue_loader_lib_index_js_vue_loader_options_blockList_vue_vue_type_template_id_3220bf29__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./leaflet_tools/pannels/blockList.vue?");

/***/ }),

/***/ "./leaflet_tools/polygenTool.js":
/*!**************************************!*\
  !*** ./leaflet_tools/polygenTool.js ***!
  \**************************************/
/*! exports provided: DrawTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DrawTool\", function() { return DrawTool; });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar DrawTool = {};\nDrawTool.points = []; // 绘制图形的点纬度和经度集合 【【】，【】】 \n\nDrawTool.markers = []; // 标记图标\n\nDrawTool.lines = new L.polyline(DrawTool.points);\nDrawTool.tempLines = new L.polyline([], {\n  dashArray: 12\n});\nDrawTool.polygons = new L.polygon(DrawTool.points);\nDrawTool.tempPolygons = new L.polygon([], {\n  color: 'none',\n  fillColor: 'red'\n}); // 双击执行的函数\n\nDrawTool.onDoubleClick = function (e) {\n  alert(\"选定完成: \\n \" + JSON.stringify(DrawTool.points));\n  return false;\n};\n\nDrawTool.init = function (map, iconUrl) {\n  // var circldRadius = 50;\n  map.off('click');\n  map.on('click', onClick); //点击地图\n\n  map.off('contextmenu');\n  map.on('contextmenu', contextmeanClick); // 右键地图\n\n  function onClick(e) {\n    var marker;\n\n    if (iconUrl) {\n      marker = L.marker(e.latlng, {\n        icon: L.icon({\n          iconUrl: 'img/move.png',\n          iconSize: [25, 25]\n        })\n      });\n    } else {\n      marker = L.marker(e.latlng);\n    }\n\n    if (DrawTool.points.length <= 0) {\n      marker.on('click', clickMarker);\n    }\n\n    marker.addTo(map);\n    DrawTool.points.push([e.latlng.lat, e.latlng.lng]);\n    DrawTool.lines.addLatLng(e.latlng);\n    map.addLayer(DrawTool.lines); // map.addLayer(marker);\n\n    DrawTool.markers.push(marker);\n    map.on('mousemove', onMove); //鼠标移动\n  }\n\n  function onMove(e) {\n    if (DrawTool.points.length > 0) {\n      ls = [DrawTool.points[DrawTool.points.length - 1], [e.latlng.lat, e.latlng.lng]];\n      DrawTool.tempLines.setLatLngs(ls);\n      map.addLayer(DrawTool.tempLines);\n      DrawTool.tempPolygons.setLatLngs(DrawTool.points);\n      DrawTool.tempPolygons.addTo(map);\n    }\n  } // 右键回退一步\n\n\n  function contextmeanClick(e) {\n    DrawTool.points.splice(DrawTool.points.length - 1, 1);\n\n    if (DrawTool.points.length > 0) {\n      ls = [DrawTool.points[DrawTool.points.length - 1], [e.latlng.lat, e.latlng.lng]];\n      DrawTool.tempLines.setLatLngs(ls);\n      map.addLayer(DrawTool.tempLines);\n      DrawTool.tempPolygons.setLatLngs(DrawTool.points);\n      DrawTool.tempPolygons.addTo(map);\n      DrawTool.lines.remove();\n      DrawTool.lines = new L.polyline(DrawTool.points);\n      DrawTool.lines.addTo(map);\n      DrawTool.markers[DrawTool.markers.length - 1].remove();\n      DrawTool.markers.splice(DrawTool.markers.length - 1, 1);\n    } else {\n      DrawTool.tempLines.remove();\n      DrawTool.lines.remove();\n\n      if (DrawTool.markers.length > 0) {\n        DrawTool.markers[DrawTool.markers.length - 1].remove();\n        DrawTool.markers.splice(DrawTool.markers.length - 1, 1);\n      }\n\n      DrawTool.points = [];\n      DrawTool.markers = [];\n      DrawTool.lines = new L.polyline(DrawTool.points);\n    }\n  } // 点击第一个节点停止绘画\n\n\n  function clickMarker(e) {\n    // 关闭画图事件\n    map.off('dblclick');\n    map.off('mousemove');\n    map.off('click'); // 停止右键事件并且绑定新的\n\n    map.off('contextmenu'); // 右键地图\n\n    map.on('contextmenu', cancle); // 右键地图\n    // 移除临时线和面\n\n    DrawTool.tempLines.remove();\n    DrawTool.tempPolygons.remove();\n    DrawTool.polygons = L.polygon(DrawTool.points);\n    DrawTool.polygons.addTo(map);\n    DrawTool.polygons.on('dblclick', DrawTool.onDoubleClick); // 移动标记（微调）\n\n    var _iterator = _createForOfIteratorHelper(DrawTool.markers),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var marker = _step.value;\n        marker.dragging.enable();\n        marker.on('dragend', function (event) {\n          resetRegion();\n        });\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  } // 调整了坐标点\n\n\n  function resetRegion() {\n    DrawTool.points = [];\n\n    var _iterator2 = _createForOfIteratorHelper(DrawTool.markers),\n        _step2;\n\n    try {\n      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n        var marker = _step2.value;\n        DrawTool.points.push([marker.getLatLng().lat, marker.getLatLng().lng]);\n      }\n    } catch (err) {\n      _iterator2.e(err);\n    } finally {\n      _iterator2.f();\n    }\n\n    ;\n    DrawTool.polygons.remove();\n    DrawTool.lines.remove();\n    DrawTool.polygons = L.polygon(DrawTool.points);\n    DrawTool.polygons.on('dblclick', DrawTool.onDoubleClick);\n    DrawTool.polygons.addTo(map);\n  } // 右键取消\n\n\n  function cancle(e) {\n    map.on('click', onClick);\n    map.off('contextmenu');\n    map.on('contextmenu', contextmeanClick); // 右键地图\n\n    var _iterator3 = _createForOfIteratorHelper(DrawTool.markers),\n        _step3;\n\n    try {\n      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n        var marker = _step3.value;\n        marker.remove();\n      }\n    } catch (err) {\n      _iterator3.e(err);\n    } finally {\n      _iterator3.f();\n    }\n\n    DrawTool.points = [];\n    DrawTool.markers = [];\n    DrawTool.lines.remove();\n    DrawTool.tempLines.remove();\n    DrawTool.tempPolygons.remove();\n    DrawTool.polygons.remove();\n    DrawTool.polygons = new L.polygon(DrawTool.points);\n    DrawTool.lines = new L.polyline(DrawTool.points);\n    DrawTool.tempLines = new L.polyline([], {\n      dashArray: 12\n    });\n    DrawTool.tempPolygons = new L.polygon([], {\n      color: 'none',\n      fillColor: 'red'\n    });\n  }\n};\n\n//# sourceURL=webpack:///./leaflet_tools/polygenTool.js?");

/***/ }),

/***/ "./leaflet_tools/test_tools.js":
/*!*************************************!*\
  !*** ./leaflet_tools/test_tools.js ***!
  \*************************************/
/*! exports provided: MyTestTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MyTestTool\", function() { return MyTestTool; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"../../../webcode/node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"../../../webcode/node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar MyTestTool = /*#__PURE__*/function () {\n  function MyTestTool(map) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, MyTestTool);\n\n    this.map = map;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(MyTestTool, [{\n    key: \"addDebugGrid\",\n    value: function addDebugGrid() {\n      L.control.zoom({\n        position: 'bottomright'\n      }).addTo(this.map);\n      L.GridLayer.DebugCoords = L.GridLayer.extend({\n        createTile: function createTile(coords) {\n          var tile = document.createElement('div');\n          var y = gety(coords.y, coords.z);\n          tile.innerHTML = [coords.x, coords.y, coords.z].join(', ');\n          tile.style.outline = '1px solid red';\n          return tile;\n        }\n      });\n\n      L.gridLayer.debugCoords = function (opts) {\n        return new L.GridLayer.DebugCoords(opts);\n      };\n\n      this.map.addLayer(L.gridLayer.debugCoords());\n    }\n  }, {\n    key: \"addPopPosion\",\n    value: function addPopPosion() {\n      var popup = L.popup();\n\n      function onMapClick(e) {\n        popup.setLatLng(e.latlng).setContent(\"You clicked the map at \" + e.latlng.toString()).openOn(map);\n      }\n\n      this.map.on('click', onMapClick); // map.on('mousemove', onMapClick);\n    }\n  }, {\n    key: \"addPloygen\",\n    value: function addPloygen() {\n      var style = {\n        'default': {\n          'color': 'transparent' //   'opacity':0,\n\n        },\n        'highlight': {\n          'color': 'red'\n        }\n      };\n      var group = new L.LayerGroup([new L.Polygon([[-50, -50], [50, -50], [50, -10], [-50, -10]], {\n        'label': 'Polygon 1',\n        'popup': 'Polygon 1'\n      }), new L.Polygon([[-50, 10], [50, 10], [50, 50], [-50, 50]], {\n        'label': 'Polygon 2',\n        'popup': 'Polygon 2'\n      })]).addTo(this.map); // Variable for storing highlighted layer\n\n      var highlight;\n\n      function setHighlight(layer) {\n        // Check if something's highlighted, if so unset highlight\n        if (highlight) {\n          unsetHighlight(highlight);\n        } // Set highlight style on layer and store to variable\n\n\n        layer.setStyle(style.highlight);\n        highlight = layer;\n      }\n\n      function unsetHighlight(layer) {\n        // Set default style and clear variable\n        layer.setStyle(style[\"default\"]);\n        highlight = null;\n      } // Iterate\n\n\n      group.eachLayer(function (layer) {\n        debugger; // Set default style\n\n        layer.setStyle(style[\"default\"]); // Bind label with polygon option variable\n        // layer.bindLabel(layer.options.label);\n\n        layer.bindTooltip(layer.options.label); // Bind popup with polygon option variable\n\n        layer.bindPopup(layer.options.popup); // Mouseover handler\n\n        layer.on('mouseover', function (e) {\n          // Set highlight\n          setHighlight(layer);\n        }); // Mouseout handler\n\n        layer.on('mouseout', function (e) {\n          // Unset highlight\n          unsetHighlight(layer);\n        }); // Fetch list from DOM\n\n        var list = L.DomUtil.get('list'),\n            // Add list item\n        item = L.DomUtil.create('li', 'item', list),\n            // Add link\n        link = L.DomUtil.create('a', 'link', item); // Set link text\n\n        link.textContent = layer.options.label; // Set link href\n\n        link.href = '#'; // Add clickhandler to link\n\n        L.DomEvent.addListener(link, 'click', function (e) {\n          // Set highlight\n          setHighlight(layer);\n        });\n      });\n    }\n  }]);\n\n  return MyTestTool;\n}();\n\n//# sourceURL=webpack:///./leaflet_tools/test_tools.js?");

/***/ }),

/***/ "./leaflet_tools/tools.js":
/*!********************************!*\
  !*** ./leaflet_tools/tools.js ***!
  \********************************/
/*! exports provided: Drawer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Drawer\", function() { return Drawer; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"../../../webcode/node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"../../../webcode/node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar Drawer = /*#__PURE__*/function () {\n  function Drawer(map) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Drawer);\n\n    this.map = map;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Drawer, [{\n    key: \"polygon\",\n    value: function polygon() {\n      var _this = this;\n\n      var points = [];\n      var polygon = new L.Polygon(points);\n      this.map.addLayer(polygon);\n      this.map.on('mousedown', function (e) {\n        points.push([e.latlng.lat, e.latlng.lng]);\n\n        _this.map.on('mousemove', function (event) {\n          polygon.setLatLngs([].concat(points, [[event.latlng.lat, event.latlng.lng]]));\n        });\n      });\n      this.map.on('dblclick', function () {\n        if (points.length) {\n          _this.map.off('mousemove');\n\n          _this.map.off('mousedown');\n\n          _this.map.off('dblclick'); //    points = [];\n\n        }\n      });\n      return points;\n    }\n  }]);\n\n  return Drawer;\n}();\n\n//# sourceURL=webpack:///./leaflet_tools/tools.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _leaflet_tools_test_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leaflet_tools/test_tools */ \"./leaflet_tools/test_tools.js\");\n/* harmony import */ var _leaflet_tools_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leaflet_tools/tools */ \"./leaflet_tools/tools.js\");\n/* harmony import */ var _leaflet_tools_floatPannel_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leaflet_tools/floatPannel.vue */ \"./leaflet_tools/floatPannel.vue\");\n\n\nwindow.MyTestTool = _leaflet_tools_test_tools__WEBPACK_IMPORTED_MODULE_0__[\"MyTestTool\"];\nwindow.Drawer = _leaflet_tools_tools__WEBPACK_IMPORTED_MODULE_1__[\"Drawer\"];\n\nVue.component('floatPannel', _leaflet_tools_floatPannel_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });