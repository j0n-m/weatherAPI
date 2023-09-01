/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/default.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/default.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `input {
  font: inherit;
}

input[type="text"] {
  padding: 4px 8px;
  width: 300px;
  height: 40px;
  border-radius: 10px;
  outline: none;
  border: none;
  text-align: center;
}

/* .searchBox {
 
} */

.searchBox:focus {
  outline: 1.5px solid var(--textbox-outline-active-color);
}

.hide {
  opacity: 0;
}`, "",{"version":3,"sources":["webpack://./src/default.css"],"names":[],"mappings":"AAAA;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,kBAAkB;AACpB;;AAEA;;GAEG;;AAEH;EACE,wDAAwD;AAC1D;;AAEA;EACE,UAAU;AACZ","sourcesContent":["input {\n  font: inherit;\n}\n\ninput[type=\"text\"] {\n  padding: 4px 8px;\n  width: 300px;\n  height: 40px;\n  border-radius: 10px;\n  outline: none;\n  border: none;\n  text-align: center;\n}\n\n/* .searchBox {\n \n} */\n\n.searchBox:focus {\n  outline: 1.5px solid var(--textbox-outline-active-color);\n}\n\n.hide {\n  opacity: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_default_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./default.css */ "./node_modules/css-loader/dist/cjs.js!./src/default.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_default_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --header-main-color: lightblue;
  --textbox-outline-active-color: blue;
  --default-border-radius: 10px;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif, system-ui;
  font-size: 1.2rem;
  /* background: linear-gradient(#a8ffff, #ceffff); */
  background-color: #ebebeb;
  min-height: 100svh;
}

.container {
  height: 100%;
}

/* HEADER */

.header {
  /* position: relative; */
  display: flex;
  background-color: var(--header-main-color);
  justify-content: space-between;
  align-items: center;
  padding: .5rem 1rem;
  box-shadow: 1px 1px 2px black;
}

.leftHeader {
  color: white;
  border: 1.5px solid orange;
  border-radius: var(--default-border-radius);
  padding: .5rem;
  background: linear-gradient(rgb(255, 216, 143), rgb(255, 199, 96));
}

/* .middleHeader {
  display: flex;
} */

form {
  display: flex;
  gap: 0 1rem;
}

.rightHeader {
  position: relative;
}


/* BUTTONS */

.smallBtn {
  border: 1.5px solid white;
  border-radius: 10px;
  padding: .5rem;
  color: white;
  cursor: pointer;
  background-color: inherit;
}

.smallBtn:hover {
  background-color: rgb(195, 239, 253);
}

.headerSettings {
  position: absolute;
  border: 1.5px solid gray;
  border-top: none;
  background-color: lightgray;
  border-radius: 2px;
  right: 4px;
  padding: 1rem;
}


/* ADDED */
.content-container {
  width: 60%;
  margin: 0 auto;
}

.content {
  padding: 1rem;
  /* background-color: lightgray; */
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.card {
  border: 1px solid gray;
  display: flex;
  background-color: white;
  flex-direction: column;
  padding: 1rem;
  border-radius: 10px;
  min-width: 400px;
}

.cardHeader {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  padding-bottom: 8px;
}

.cardWeatherConditions {
  display: flex;
  padding: 8px 0;
  gap: 1rem;
}

.cardWeatherImportant {
  display: flex;
  align-items: center;
  gap: .5rem;

}

.cardWeatherConditionsLeft,
.cardWeatherConditionsRight {
  flex: 1;
}

.rc {
  width: 50%;
}

.current-real-feel-div,
.current-wind-div {
  display: flex;
  justify-content: space-between;
}

.current-weather-logo {
  width: 62px;
  height: 62px;
  /* background-color: blue; */
}

.cardWeatherDetails {
  display: flex;
  gap: 1rem;
}

.cardWeatherDetailsLeft,
.cardWeatherDetailsRight {
  flex: 1;
}

.cardWeatherDetailsLeft>div,
.cardWeatherDetailsRight>div {
  display: flex;
  border-bottom: 1px solid gray;
  padding: 8px 0;
}

.cardWeatherDetailsLeft>div>p,
.cardWeatherDetailsRight>div>p {
  flex: 1;
}

.cardWeatherDetailsLeft>div>p:nth-child(2),
.cardWeatherDetailsRight>div>p:nth-child(2) {
  text-align: right;
}

.current-temp-label {
  font-size: 1.75rem;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,8BAA8B;EAC9B,oCAAoC;EACpC,6BAA6B;AAC/B;;AAEA;;;EAGE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,kCAAkC;EAClC,iBAAiB;EACjB,mDAAmD;EACnD,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA,WAAW;;AAEX;EACE,wBAAwB;EACxB,aAAa;EACb,0CAA0C;EAC1C,8BAA8B;EAC9B,mBAAmB;EACnB,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,YAAY;EACZ,0BAA0B;EAC1B,2CAA2C;EAC3C,cAAc;EACd,kEAAkE;AACpE;;AAEA;;GAEG;;AAEH;EACE,aAAa;EACb,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;;;AAGA,YAAY;;AAEZ;EACE,yBAAyB;EACzB,mBAAmB;EACnB,cAAc;EACd,YAAY;EACZ,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;EAClB,wBAAwB;EACxB,gBAAgB;EAChB,2BAA2B;EAC3B,kBAAkB;EAClB,UAAU;EACV,aAAa;AACf;;;AAGA,UAAU;AACV;EACE,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,iCAAiC;EACjC,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,uBAAuB;EACvB,sBAAsB;EACtB,aAAa;EACb,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,UAAU;;AAEZ;;AAEA;;EAEE,OAAO;AACT;;AAEA;EACE,UAAU;AACZ;;AAEA;;EAEE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;;EAEE,OAAO;AACT;;AAEA;;EAEE,aAAa;EACb,6BAA6B;EAC7B,cAAc;AAChB;;AAEA;;EAEE,OAAO;AACT;;AAEA;;EAEE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB","sourcesContent":["@import url('default.css');\n\n:root {\n  --header-main-color: lightblue;\n  --textbox-outline-active-color: blue;\n  --default-border-radius: 10px;\n}\n\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: sans-serif, system-ui;\n  font-size: 1.2rem;\n  /* background: linear-gradient(#a8ffff, #ceffff); */\n  background-color: #ebebeb;\n  min-height: 100svh;\n}\n\n.container {\n  height: 100%;\n}\n\n/* HEADER */\n\n.header {\n  /* position: relative; */\n  display: flex;\n  background-color: var(--header-main-color);\n  justify-content: space-between;\n  align-items: center;\n  padding: .5rem 1rem;\n  box-shadow: 1px 1px 2px black;\n}\n\n.leftHeader {\n  color: white;\n  border: 1.5px solid orange;\n  border-radius: var(--default-border-radius);\n  padding: .5rem;\n  background: linear-gradient(rgb(255, 216, 143), rgb(255, 199, 96));\n}\n\n/* .middleHeader {\n  display: flex;\n} */\n\nform {\n  display: flex;\n  gap: 0 1rem;\n}\n\n.rightHeader {\n  position: relative;\n}\n\n\n/* BUTTONS */\n\n.smallBtn {\n  border: 1.5px solid white;\n  border-radius: 10px;\n  padding: .5rem;\n  color: white;\n  cursor: pointer;\n  background-color: inherit;\n}\n\n.smallBtn:hover {\n  background-color: rgb(195, 239, 253);\n}\n\n.headerSettings {\n  position: absolute;\n  border: 1.5px solid gray;\n  border-top: none;\n  background-color: lightgray;\n  border-radius: 2px;\n  right: 4px;\n  padding: 1rem;\n}\n\n\n/* ADDED */\n.content-container {\n  width: 60%;\n  margin: 0 auto;\n}\n\n.content {\n  padding: 1rem;\n  /* background-color: lightgray; */\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.card {\n  border: 1px solid gray;\n  display: flex;\n  background-color: white;\n  flex-direction: column;\n  padding: 1rem;\n  border-radius: 10px;\n  min-width: 400px;\n}\n\n.cardHeader {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid gray;\n  padding-bottom: 8px;\n}\n\n.cardWeatherConditions {\n  display: flex;\n  padding: 8px 0;\n  gap: 1rem;\n}\n\n.cardWeatherImportant {\n  display: flex;\n  align-items: center;\n  gap: .5rem;\n\n}\n\n.cardWeatherConditionsLeft,\n.cardWeatherConditionsRight {\n  flex: 1;\n}\n\n.rc {\n  width: 50%;\n}\n\n.current-real-feel-div,\n.current-wind-div {\n  display: flex;\n  justify-content: space-between;\n}\n\n.current-weather-logo {\n  width: 62px;\n  height: 62px;\n  /* background-color: blue; */\n}\n\n.cardWeatherDetails {\n  display: flex;\n  gap: 1rem;\n}\n\n.cardWeatherDetailsLeft,\n.cardWeatherDetailsRight {\n  flex: 1;\n}\n\n.cardWeatherDetailsLeft>div,\n.cardWeatherDetailsRight>div {\n  display: flex;\n  border-bottom: 1px solid gray;\n  padding: 8px 0;\n}\n\n.cardWeatherDetailsLeft>div>p,\n.cardWeatherDetailsRight>div>p {\n  flex: 1;\n}\n\n.cardWeatherDetailsLeft>div>p:nth-child(2),\n.cardWeatherDetailsRight>div>p:nth-child(2) {\n  text-align: right;\n}\n\n.current-temp-label {\n  font-size: 1.75rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/error.js":
/*!**********************!*\
  !*** ./src/error.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const showError = function showError(err) {
  // const contentDiv = document.querySelector('.content');
  const errorDiv = document.querySelector('.errorDiv');
  const errorMessage = document.createElement('p');
  errorMessage.textContent = err;
  errorMessage.style.textAlign = 'center';

  errorDiv.classList.remove('hide');
  errorDiv.appendChild(errorMessage);
  setTimeout(() => {
    errorDiv.classList.add('hide');
    errorDiv.replaceChildren();
  }, 4000);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showError);


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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error */ "./src/error.js");



const API_KEY = '89d2133b42d54c8fa95201905232808';

const getCurrentWeather = async function getCurrentWeather(location) {
  const url = 'http://api.weatherapi.com/v1';
  const currentEndPoint = '/current.json';

  try {
    const response = await fetch(`${url}${currentEndPoint}?key=${API_KEY}&q=${location}`);
    const currentWeatherData = await response.json();
    return currentWeatherData;
  } catch (err) {
    console.log(err);
  }
};

const handleCurrentWeatherRequest = async function handleCurrentWeatherRequest(location = 'kansas city') {
  const weatherData = await getForecastWeather(location);
  console.log(weatherData);
};
// handleCurrentWeatherRequest('64153');

// const getForecastWeather
// const handleForecastWeather

/*
-All user can do is enter location and get data from that location;
-I control the what data can be returned (forecast and current) as long as I have the location string
-A DOMController module
-A weatherController module
 -important to create separate functions that call the forecast and current weather data independantly
 -maybe one handler that calls both functions with a Promise.all
 -then to extract data from the promise.all array, use destructuring -> [a,b] = promise.all then return {a,b}
*/

const weatherController = function weatherController() {
  const getForecastWeather = async function getForecastWeather(location) {
    const url = 'http://api.weatherapi.com/v1';
    const forecastEndPoint = '/forecast.json';
    try {
      const response = await fetch(`${url}${forecastEndPoint}?key=${API_KEY}&q=${location}&days=3&aqi=yes&alerts=yes`);
      if (!response.ok) {
        throw new Error('Invalid Location');
      }
      const forecastWeatherData = await response.json();
      return forecastWeatherData;
    } catch (err) {
      console.log('1:', err);
      (0,_error__WEBPACK_IMPORTED_MODULE_1__["default"])(err);
    }
  };

  return { getForecastWeather };
};

const screenController = async function screenController() {
  console.log('running the screenController');
  const weatherControl = weatherController();

  // DOM ELEMENTS
  const locationSearchBtn = document.querySelector('.searchBtn');
  const searchForm = document.querySelector('#locationForm');
  const searchTextBox = document.querySelector('.searchBox');
  const tempUnitsBtn = document.querySelector('.tempUnits');
  let tempUnit = tempUnitsBtn.dataset.temp;
  const contentDiv = document.querySelector('.content');
  const cardTemplate = [...contentDiv.children];

  // FUNCTION EXPRESSIONS
  const displayWeatherData = function displayWeatherData(weather) {
    console.log('displaying weather', weather);
  };
  const extractTime = function extractTime(time) {
    const options = {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric',
    };
    return new Date(time).toLocaleDateString('en-US', options);
  };
  function getIconSource(imgLink) {
    const imgArr = imgLink.split('');
    return (`http://${imgArr.slice(2).join('')}`);
  }
  const updateCurrentWeatherCard = function updateCurrentWeatherCard(currentWeather) {
    const currentCard = document.querySelector('.currentCard');
    const currentTempLabel = document.querySelector('.current-temp-label');
    const currentCity = document.querySelector('.current-city-label');
    const currentConditions = document.querySelector('.current-conditions-label');
    const currentRealFeel = document.querySelector('.current-realfeel-label');
    const currentTimeLabel = document.querySelector('.current-time-label');
    const currentWeatherLogo = document.querySelector('#weatherLogo');
    const currentWind = document.querySelector('.current-wind-label');

    contentDiv.replaceChildren(); // Remove the current card's contents
    contentDiv.appendChild(cardTemplate[0]); // appends the default card template to page, read to be overwritten
    currentCard.classList.remove('hide');
    currentTempLabel.textContent = `${currentWeather.current[`temp_${tempUnit}`]}°${tempUnit.toUpperCase()}`;
    currentCity.textContent = `Current - ${currentWeather.location.name}, ${currentWeather.location.region}`;
    currentConditions.textContent = `${currentWeather.current.condition.text}`;
    currentRealFeel.textContent = `${currentWeather.current[`feelslike_${tempUnit}`]}°${tempUnit.toUpperCase()}`;
    currentTimeLabel.textContent = extractTime(currentWeather.current.last_updated);
    currentWind.textContent = `${currentWeather.current.wind_dir} ${currentWeather.current.wind_mph} mph`;
    currentWeatherLogo.src = getIconSource(currentWeather.current.condition.icon);
  };
  const toggleTempUnit = function toggleTempUnit() {
    switch (tempUnitsBtn.dataset.temp) {
      case 'f':
        tempUnitsBtn.dataset.temp = 'c';
        tempUnitsBtn.textContent = '°C';
        break;
      case 'c':
        tempUnitsBtn.dataset.temp = 'f';
        tempUnitsBtn.textContent = '°F';
        break;
    }
    tempUnit = tempUnitsBtn.dataset.temp;
  };
  const searchBtnHandler = function searchBtnHandler() {
    if (searchTextBox.validity.valueMissing) {
      console.log('invalid');
      searchTextBox.setCustomValidity('Enter a City or Zip Code');
    } else {
      searchTextBox.setCustomValidity('');
    }
  };
  const searchFormHandler = async function searchFormHandler(e) {
    e.preventDefault();
    const userLocation = searchTextBox.value;
    console.log('Getting weather information..');
    try {
      const forecastData = await weatherControl.getForecastWeather(userLocation);
      if (!forecastData) {
        return;
      }
      displayWeatherData(forecastData);
      updateCurrentWeatherCard(forecastData);
    } catch (err) {
      console.log('Error2', err);
    }
  };

  // DOM EVENT LISTENERS
  locationSearchBtn.addEventListener('click', searchBtnHandler);
  searchForm.addEventListener('submit', searchFormHandler);
  tempUnitsBtn.addEventListener('click', toggleTempUnit);
};

screenController();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map