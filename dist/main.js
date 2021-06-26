(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["main"] = factory();
	else
		root["main"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/style/style.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/style/style.scss ***!
  \***************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=DotGothic16&family=Lato&family=Oswald:wght@500&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  height: 100%;\n}\n\nbody {\n  display: flex;\n  min-width: 690px;\n  flex-direction: column;\n  justify-content: space-evenly;\n  flex: 1;\n  width: 100wv;\n  height: 100%;\n  color: #eee;\n  background: #121212;\n}\n\nbody a {\n  color: #809fff;\n}\n\nheader {\n  width: 100wv;\n  display: flex;\n  flex: 1;\n  background-color: #242728;\n}\n\nimg {\n  width: 3.5em;\n  height: 3.5em;\n  margin-left: 1.25vw;\n}\n\ndiv {\n  display: flex;\n  flex-direction: column;\n}\n\n#title {\n  padding-left: 5vw;\n  padding-top: 0.3vw;\n  padding-bottom: 1vw;\n  flex: 3;\n}\n\n#tech {\n  flex: 1;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\nh1 {\n  font-family: \"Oswald\", sans-serif;\n}\n\nh2 {\n  font-family: \"Lato\", sans-serif;\n  padding-left: 2vw;\n}\n\nfooter {\n  display: flex;\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Lato\", sans-serif;\n}\n\n#root {\n  flex-direction: row;\n  flex: 7;\n}\n\n.jc {\n  justify-content: center;\n  align-items: center;\n  justify-items: center;\n}\n\n#gray_circle {\n  /* margin-left: 4vw; */\n  background-color: #242728;\n  width: 70vh;\n  height: 70vh;\n  border-radius: 35vh;\n  margin-left: 2vw;\n}\n\n#circuit_circle {\n  background-color: #1d7d36;\n  overflow: hidden;\n  width: 62vh;\n  height: 62vh;\n  border-radius: 31vh;\n  position: relative;\n}\n\n#proc {\n  background-color: #1a1919;\n  width: 15vh;\n  height: 55vh;\n  border-radius: 7px;\n  position: relative;\n}\n\n#indent {\n  background-color: #fff;\n  opacity: 0.05;\n  position: absolute;\n  top: 0;\n  width: 5.5vh;\n  height: 3.4vh;\n  border-bottom-left-radius: 1vw;\n  border-bottom-right-radius: 1vw;\n}\n\n.pin_container {\n  flex: 1;\n  width: 1vw;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  height: 55vh;\n}\n\n#left_pins {\n  left: -1.23vh;\n}\n\n#left_pins > div {\n  border-top-left-radius: 0.2vw;\n  border-bottom-left-radius: 0.2vw;\n}\n\n#right_pins {\n  right: -1.23vh;\n}\n\n#right_pins > div {\n  justify-content: right;\n  justify-items: right;\n  align-self: flex-end;\n  border-top-right-radius: 0.2vw;\n  border-bottom-right-radius: 0.2vw;\n}\n\n.pin {\n  display: flex;\n  width: 1.43vh;\n  height: 1.6vh;\n  background-color: silver;\n  z-index: 1;\n}\n\n#p_text {\n  transform: rotate(-90deg);\n  color: #464646;\n  font-weight: 600;\n  font-family: \"DotGothic16\", sans-serif;\n  letter-spacing: 2px;\n}\n\n.circuit {\n  background-color: #b3a529;\n  height: 1.6vh;\n  width: 40vh;\n  position: absolute;\n  z-index: 0;\n}\n\n#left_pins > .pin > .circuit {\n  left: -40vh;\n}\n\n#right_pins > .pin > .circuit {\n  right: -40vh;\n}\n\n.window_container {\n  flex: 1;\n  margin: 1em 2em;\n  border: 2px solid #464646;\n  position: relative;\n  background-color: black;\n  font-family: \"Lato\", sans-serif;\n}\n\n.window_header {\n  background-color: #242728;\n  flex-direction: row;\n}\n\n.window_header > p {\n  padding: 0.4em;\n  padding-left: 0.8em;\n}\n\n#input_container {\n  flex: 0;\n}\n\ninput {\n  background-color: black;\n  border: none;\n  color: white;\n  flex: 1;\n  font-size: inherit;\n  text-transform: uppercase;\n}\n\ninput:focus {\n  outline: none;\n}\n\n#input_div {\n  background-color: black;\n  padding: 1em;\n  font-size: large;\n}\n\n#gt {\n  margin-right: 1em;\n  font-weight: 900;\n  font-size: 1.25em;\n}\n\n.row {\n  flex: 0;\n  flex-direction: row;\n}\n\n.row > div {\n  flex: 1;\n}\n\n#mreg {\n  flex: 1;\n  margin: 1em;\n  /* width: 8em; */\n  font-size: 1.25em;\n}\n\n.sa {\n  justify-content: space-around;\n}\n\n#mreg > div > div {\n  justify-content: center;\n  align-items: center;\n  justify-items: center;\n}\n\n#mreg > div > div:first-child {\n  margin-right: 1em;\n}\n\n#registers_container {\n  flex-grow: 1;\n}\n\n.f1 {\n  display: flex;\n  flex: 1;\n}\n\n#main_input {\n  text-transform: uppercase;\n}\n\n#mem {\n  margin: 1em;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  justify-items: center;\n}\n\n#staque {\n  height: 100%;\n}\n\n.m {\n  font-size: 1.25em;\n  margin: 0.25em;\n}\n\np {\n  text-transform: uppercase;\n}\n\n.x {\n  flex: 1;\n  text-transform: uppercase;\n}", "",{"version":3,"sources":["webpack://./src/style/style.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=DotGothic16&family=Lato&family=Oswald:wght@500&display=swap');\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nhtml {\r\n    height: 100%;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    min-width: 690px;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n    flex: 1;\r\n    width: 100wv;\r\n    height: 100%;\r\n    color: #eee;\r\n    background: #121212;\r\n}\r\n\r\nbody a {\r\n    color: #809fff;\r\n}\r\n\r\nheader {\r\n    width: 100wv;\r\n    display: flex;\r\n    flex: 1;\r\n    background-color: rgb(36, 39, 40);\r\n}\r\n\r\nimg {\r\n    width: 3.5em;\r\n    height: 3.5em;\r\n    margin-left: 1.25vw;\r\n}\r\n\r\ndiv {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n#title {\r\n    padding-left: 5vw;\r\n    padding-top: 0.3vw;\r\n    padding-bottom: 1vw;\r\n    flex: 3\r\n}\r\n\r\n#tech {\r\n    flex: 1;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\nh1 {\r\n    font-family: 'Oswald', sans-serif;\r\n}\r\n\r\nh2 {\r\n    font-family: 'Lato', sans-serif;\r\n    padding-left: 2vw;\r\n}\r\n\r\nfooter {\r\n    display: flex;\r\n    flex: 1;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-family: 'Lato', sans-serif;\r\n\r\n}\r\n\r\n#root {\r\n    flex-direction: row;\r\n    flex: 7;\r\n}\r\n\r\n.jc {\r\n    justify-content: center;\r\n    align-items: center;\r\n    justify-items: center;\r\n}\r\n\r\n#gray_circle {\r\n    /* margin-left: 4vw; */\r\n    background-color: rgb(36, 39, 40);\r\n    width: 70vh;\r\n    height: 70vh;\r\n    border-radius: 35vh;\r\n    margin-left: 2vw;\r\n\r\n}\r\n\r\n#circuit_circle {\r\n    background-color: #1d7d36;\r\n    overflow: hidden;\r\n    width: 62vh;\r\n    height: 62vh;\r\n    border-radius: 31vh;\r\n    position: relative;\r\n}\r\n\r\n#proc {\r\n    background-color: #1a1919;\r\n    width: 15vh;\r\n    height: 55vh;\r\n    border-radius: 7px;\r\n    position: relative;\r\n}\r\n\r\n#indent {\r\n    background-color: #fff;\r\n    opacity: 0.05;\r\n    position: absolute;\r\n    top: 0;\r\n    width: 5.5vh;\r\n    height: 3.4vh;\r\n    border-bottom-left-radius: 1vw;\r\n    border-bottom-right-radius: 1vw;\r\n}\r\n\r\n.pin_container {\r\n    flex: 1;\r\n    width: 1vw;\r\n    position: absolute;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    height: 55vh;\r\n}\r\n\r\n#left_pins {\r\n    left: -1.23vh;\r\n}\r\n\r\n#left_pins>div {\r\n    border-top-left-radius: 0.2vw;\r\n    border-bottom-left-radius: 0.2vw;\r\n}\r\n\r\n#right_pins {\r\n    right: -1.23vh;\r\n}\r\n\r\n#right_pins>div {\r\n    justify-content: right;\r\n    justify-items: right;\r\n    align-self: flex-end;\r\n    border-top-right-radius: 0.2vw;\r\n    border-bottom-right-radius: 0.2vw;\r\n}\r\n\r\n.pin {\r\n    display: flex;\r\n    width: 1.43vh;\r\n\r\n    height: 1.6vh;\r\n    background-color: silver;\r\n    z-index: 1;\r\n}\r\n\r\n#p_text {\r\n    transform: rotate(-90deg);\r\n    color: rgb(70, 70, 70);\r\n    font-weight: 600;\r\n    font-family: 'DotGothic16', sans-serif;\r\n    letter-spacing: 2px;\r\n}\r\n\r\n.circuit {\r\n    background-color: #b3a529;\r\n    height: 1.6vh;\r\n    width: 40vh;\r\n    position: absolute;\r\n    z-index: 0;\r\n\r\n}\r\n\r\n#left_pins>.pin>.circuit {\r\n    left: -40vh;\r\n}\r\n\r\n#right_pins>.pin>.circuit {\r\n    right: -40vh;\r\n}\r\n\r\n.window_container {\r\n    flex: 1;\r\n    margin: 1em 2em;\r\n    border: 2px solid rgb(70, 70, 70);\r\n    position: relative;\r\n    background-color: black;\r\n\r\n    font-family: 'Lato', sans-serif;\r\n}\r\n\r\n\r\n.window_header {\r\n    background-color: rgb(36, 39, 40);\r\n    flex-direction: row;\r\n}\r\n\r\n.window_header>p {\r\n    padding: 0.4em;\r\n    padding-left: 0.8em;\r\n}\r\n\r\n#input_container {\r\n    flex: 0;\r\n}\r\n\r\ninput {\r\n    background-color: black;\r\n    border: none;\r\n    color: white;\r\n    flex: 1;\r\n    font-size: inherit;\r\n    text-transform: uppercase;\r\n}\r\n\r\ninput:focus {\r\n    outline: none;\r\n}\r\n\r\n#input_div {\r\n    background-color: black;\r\n    padding: 1em;\r\n    font-size: large;\r\n}\r\n\r\n#gt {\r\n    margin-right: 1em;\r\n    font-weight: 900;\r\n    font-size: 1.25em;\r\n}\r\n\r\n.row {\r\n    flex: 0;\r\n    flex-direction: row;\r\n}\r\n\r\n.row>div {\r\n    flex: 1;\r\n}\r\n\r\n#mreg {\r\n    flex: 1;\r\n    margin: 1em;\r\n    /* width: 8em; */\r\n    font-size: 1.25em;\r\n}\r\n\r\n.sa {\r\n    justify-content: space-around;\r\n}\r\n\r\n#mreg>div>div {\r\n    justify-content: center;\r\n    align-items: center;\r\n    justify-items: center;\r\n}\r\n\r\n#mreg>div>div:first-child {\r\n    margin-right: 1em;\r\n}\r\n#registers_container {\r\n    flex-grow: 1;\r\n}\r\n.f1 {\r\n    display: flex;\r\n    flex: 1;\r\n}\r\n#main_input{\r\n    text-transform: uppercase;\r\n}\r\n#mem{\r\n    margin: 1em;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n    justify-items: center;\r\n}\r\n#staque{\r\n    height: 100%;\r\n}\r\n.m{\r\n    font-size: 1.25em;\r\n    margin: 0.25em;\r\n}\r\np{\r\n    text-transform: uppercase;\r\n}\r\n.x{\r\n    flex:1;\r\n    text-transform: uppercase;\r\n\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/style.scss":
/*!******************************!*\
  !*** ./src/style/style.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/style/style.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_style_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
//!Importing style
__webpack_require__(/*! ./style/style.scss */ "./src/style/style.scss");
//!Import 8086WASM
var _8086_wasm_1 = __importDefault(__webpack_require__(/*! ./wasm/8086.wasm */ "./src/wasm/8086.wasm"));
//Main script file
var registers = [
    "AX",
    "--",
    "BX",
    "--",
    "CX",
    "--",
    "DX",
    "--",
    "SI",
    "--",
    "DI",
    "--",
    "BP",
    "--",
    "SP",
    "--",
    "IP",
    "--",
    "CS",
    "--",
    "ES",
    "--",
    "SS",
    "--",
    "DS"
];
var high_low_registers = {
    "AL": 0,
    "AH": 0,
    "BL": 2,
    "BH": 2,
    "CL": 4,
    "CH": 4,
    "DL": 6,
    "DH": 6,
};
var input = document.getElementById("main_input");
input.placeholder = "Only MOV, XCHG, POP, PUSH instructions are available";
var mem_input = document.getElementById("memory_input");
mem_input.placeholder = "Start memory address";
var printInputError = function () {
    input.value = "Input command not recognized!";
    input.style.color = "red";
    setTimeout(function () {
        input.value = "";
        input.style.color = "inherit";
    }, 1000);
};
//Wasm 8086 init
var Intel = _8086_wasm_1.default({
    env: {
        memory: new WebAssembly.Memory({ initial: 17, maximum: 17 }),
    }
}).then(function (wasm) {
    var Intel = wasm.instance.exports;
    var memory = Intel.memory;
    var byteBuffer = new Uint8Array(memory.buffer);
    var wordBuffer = new Uint16Array(memory.buffer);
    populateMemoryContainer(0, byteBuffer);
    populateStackContainer(byteBuffer);
    mem_input.addEventListener("keypress", function (e) {
        mem_input.value = mem_input.value.toUpperCase();
        if (e.code === "Enter") {
            var val = mem_input.value;
            if (val[0] !== "[") {
                val = "[" + val;
            }
            if (val[val.length - 1] !== "]") {
                val += "]";
            }
            var pontituro = calculatePointer(val, byteBuffer, wordBuffer);
            populateMemoryContainer(pontituro.pointer, byteBuffer);
        }
    });
    input.addEventListener("keypress", function (e) {
        input.value = input.value.toUpperCase();
        if (e.code === "Enter") {
            var val = input.value;
            var instruction = val[2];
            if (instruction === "V" || instruction === "H") {
                var command = val.split(",", 2);
                if (command.length === 2) {
                    handleInput(command, instruction, byteBuffer, wordBuffer, Intel);
                    populateStackContainer(byteBuffer);
                }
                else {
                    printInputError();
                }
            }
            else {
                if (instruction === "S" || instruction === "P") {
                    var command = val.split(" ", 2);
                    handleInput(command, instruction, byteBuffer, wordBuffer, Intel);
                    populateStackContainer(byteBuffer);
                }
                else {
                    printInputError();
                }
            }
        }
    });
}).catch(function (e) {
    console.log(e);
});
/**
 * @description Function that populates memory div
 * @returns void
 */
var mem_cnt = document.getElementById("mem");
var populateMemoryContainer = function (start_address, byteBuffer) {
    mem_cnt.innerHTML = "";
    if (start_address < 40)
        start_address = 40;
    for (var index = 0; index < 60; index++) {
        var elementorum = document.createElement("div");
        elementorum.className = "m";
        elementorum.innerHTML = byteBuffer[start_address + index].toString(16).length == 1 ? "0" + byteBuffer[start_address + index].toString(16) : byteBuffer[start_address + index].toString(16) + " ";
        mem_cnt.appendChild(elementorum);
    }
};
var staq_cnt = document.getElementById("staque");
var populateStackContainer = function (byteBuffer) {
    var sp = getValue({ pointer: 14, type: "X" }, byteBuffer);
    if (sp < 40)
        sp = 40;
    staq_cnt.innerHTML = "";
    for (var index = 0; index < 26; index = index + 2) {
        var element = document.createElement('div');
        element.className = "m x";
        var val = getValue({ pointer: sp + index, type: "MEM" }, byteBuffer).toString(16);
        var add = "";
        switch (val.length) {
            case 0:
                add = "0000";
                break;
            case 1:
                add = "000";
                break;
            case 2:
                add = "00";
                break;
            case 3:
                add = "0";
                break;
        }
        element.innerHTML = sp + index + ": " + (add + val);
        staq_cnt.appendChild(element);
    }
};
//All register elements
var ah = document.getElementById("AH");
var al = document.getElementById("AL");
var bh = document.getElementById("BH");
var bl = document.getElementById("BL");
var ch = document.getElementById("CH");
var cl = document.getElementById("CL");
var dh = document.getElementById("DH");
var dl = document.getElementById("DL");
var main_registers = [al, ah, bl, bh, cl, ch, dl, dh];
var si = document.getElementById("SI");
var di = document.getElementById("DI");
var bp = document.getElementById("BP");
var sp = document.getElementById("SP");
var ip = document.getElementById("IP");
var cs = document.getElementById("CS");
var ds = document.getElementById("DS");
var es = document.getElementById("ES");
var ss = document.getElementById("SS");
var other_registers = [si, di, bp, sp, ip, cs, ds, es, ss];
var populateAllRegisters = function (byteBuffer, wordBuffer) {
    populateMainRegisters(byteBuffer);
    populateOtherRegisters(wordBuffer);
};
var populateMainRegisters = function (byteBuffer) {
    for (var index = 0; index < main_registers.length; index++) {
        var element = main_registers[index];
        element.innerHTML = byteBuffer[index].toString(16).length === 1 ? "0" + byteBuffer[index].toString(16) : byteBuffer[index].toString(16);
    }
};
var populateOtherRegisters = function (wordBuffer) {
    for (var index = 0; index < other_registers.length; index++) {
        var element = other_registers[index];
        switch (wordBuffer[index + 4].toString(16).length) {
            case 0:
                element.innerHTML = "0000";
                break;
            case 1:
                element.innerHTML = "000" + wordBuffer[index + 4].toString(16);
                break;
            case 2:
                element.innerHTML = "00" + wordBuffer[index + 4].toString(16);
                break;
            case 3:
                element.innerHTML = "0" + wordBuffer[index + 4].toString(16);
                break;
            default:
                element.innerHTML = wordBuffer[index + 4].toString(16);
                break;
        }
    }
};
var handleInput = function (i, ins, byteBuffer, wordBuffer, Intel) {
    //MOV, XCHNG, PUSH, POP | REG & MEMORY
    var instruction, target, source;
    if (ins === "S" || ins === "P") {
        instruction = i[0];
        // In 8086, PUSH & POP instructions can only work with 16-bit elements.
        var aval = i[1].trim();
        target = calculatePointer("SP", byteBuffer, wordBuffer);
        source = calculatePointer(aval, byteBuffer, wordBuffer);
        var flague = false;
        if (source.pointer === -1) {
            if (!isNaN(parseInt(aval))) {
                flague = true;
            }
            else {
                printInputError();
                return;
            }
        }
        var spval = getValue(target, byteBuffer);
        if (instruction === "POP") {
            //SP + 2
            Intel.write_full(source.pointer, getValue({ pointer: spval, type: "MEM" }, byteBuffer));
            Intel.write_full(target.pointer, spval + 2);
        }
        else {
            //SP - 2
            Intel.write_full(target.pointer, spval - 2);
            Intel.write_full(spval - 2, flague ? parseInt(aval) : getValue(source, byteBuffer));
        }
        input.value = "";
        populateAllRegisters(byteBuffer, wordBuffer);
    }
    else {
        var first = i[0].split(" ", 2);
        instruction = first[0];
        target = calculatePointer(first[1], byteBuffer, wordBuffer);
        var flague = !isNaN(parseInt(i[1].trim()[0]));
        source = calculatePointer(i[1].trim(), byteBuffer, wordBuffer);
        if (target.pointer < 0) {
            printInputError();
            return;
        }
        if (source.pointer < 0 && !flague) {
            printInputError();
            return;
        }
        if (instruction === "MOV") {
            var buffr = flague ? parseInt(i[1].trim()) : getValue(source, byteBuffer);
            if (target.type === "H") {
                Intel.set8_h(target.pointer, buffr);
                populateMainRegisters(byteBuffer);
            }
            else if (target.type === "L") {
                Intel.set8_l(target.pointer, buffr);
                populateMainRegisters(byteBuffer);
            }
            else {
                Intel.write_full(target.pointer, buffr);
                populateAllRegisters(byteBuffer, wordBuffer);
            }
            mem_input.value = target.pointer.toString();
            populateMemoryContainer(target.pointer, byteBuffer);
            input.value = "";
            return;
        }
        if (instruction === "XCHG") {
            var buffr = getValue(target, byteBuffer);
            if (target.type === "H") {
                Intel.set8_h(target.pointer, getValue(source, byteBuffer));
                Intel.write_full(source.pointer, buffr);
                populateMainRegisters(byteBuffer);
            }
            else if (target.type === "L") {
                Intel.set8_l(target.pointer, getValue(source, byteBuffer));
                Intel.write_full(source.pointer, buffr);
                populateMainRegisters(byteBuffer);
            }
            else {
                Intel.write_full(target.pointer, getValue(source, byteBuffer));
                Intel.write_full(source.pointer, buffr);
                populateAllRegisters(byteBuffer, wordBuffer);
            }
            mem_input.value = target.pointer.toString();
            populateMemoryContainer(target.pointer, byteBuffer);
            input.value = "";
            return;
        }
    }
};
var calculatePointer = function (input, byteBuffer, wordBuffer) {
    var indexourum = {
        type: "X",
        pointer: -1
    };
    if (input[0] === "[") {
        indexourum.type = "MEM";
        input = input.substring(1, input.length - 1);
        var splitorum = input.split("+");
        var summarum = 0;
        for (var index = 0; index < splitorum.length; index++) { //nosonar
            var element = splitorum[index];
            if (!isNaN(parseInt(element))) {
                summarum += parseInt(element);
            }
            else {
                var valiante = calculatePointer(element, byteBuffer, wordBuffer);
                if (valiante.pointer !== -1)
                    summarum += getValue(valiante, byteBuffer);
            }
        }
        indexourum.pointer = summarum;
    }
    else {
        if (registers.includes(input)) {
            indexourum.pointer = registers.indexOf(input);
        }
        if (Object.keys(high_low_registers).includes(input)) {
            var xd = input;
            indexourum.pointer = high_low_registers[xd];
            indexourum.type = input[1];
        }
    }
    return indexourum;
};
var getValue = function (x, byteBuffer) {
    var val;
    if (x.type === "H") {
        val = parseInt((byteBuffer[x.pointer + 1]).toString(16), 16);
    }
    else if (x.type === "L") {
        val = parseInt((byteBuffer[x.pointer]).toString(16), 16);
    }
    else {
        val = parseInt(byteBuffer[x.pointer + 1].toString(16) + byteBuffer[x.pointer].toString(16), 16);
    }
    return val;
};
//Welcome
//Print console greet when ready
console.log("%cScript ready!", "font-size:3em;color:violet;");
console.log("%cIntel 8086 simulator written using Typescript and Webassembly", "font-size:2em;");
console.log("%cBundled with Webpack", "font-size:1em");


/***/ }),

/***/ "./src/wasm/8086.wasm":
/*!****************************!*\
  !*** ./src/wasm/8086.wasm ***!
  \****************************/
/***/ ((module) => {

var buffer = new ArrayBuffer(174);var uint8 = new Uint8Array(buffer);uint8.set([0,97,115,109,1,0,0,0,1,14,3,96,2,127,127,0,96,0,0,96,1,127,1,127,2,15,1,3,101,110,118,6,109,101,109,111,114,121,2,0,0,3,6,5,0,0,0,2,1,7,53,5,10,119,114,105,116,101,95,102,117,108,108,0,0,6,115,101,116,56,95,108,0,1,6,115,101,116,56,95,104,0,2,9,114,101,97,100,95,102,117,108,108,0,3,6,109,101,109,111,114,121,2,0,8,1,4,10,65,5,9,0,32,0,32,1,59,1,0,11,15,0,32,0,65,16,116,65,16,117,32,1,58,0,0,11,18,0,32,0,65,1,106,65,16,116,65,16,117,32,1,58,0,0,11,7,0,32,0,46,1,0,11,10,0,65,14,65,208,0,59,1,0,11,]);// This file will not run on it's own

const {
  Module,
  instantiate,
  Memory,
  Table
} = WebAssembly;

const WebAssemblyModule = function(deps = {
  'global': {},
  'env': {
    'memory': new Memory({initial: 10, limit: 100}),
    'table': new Table({initial: 0, element: 'anyfunc'})
  }
}) {
  return instantiate(buffer, deps);
}

module.exports = WebAssemblyModule;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=main.js.map