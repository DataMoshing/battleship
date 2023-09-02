/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
}

body {
    font-family: 'Chakra Petch', sans-serif;
}

img {
    width: 45px;
    height: 45px;
}

.game-title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    text-decoration: underline;
    margin-bottom: 1rem;
}

.main-container {
    display: grid;
    justify-content: center;
}

td {
    border: black solid 1px;
    width: 25px;
    height: 25px;
}

tr {
    border: black solid 1px;
}

.carrier,
.battleship,
.destroyer,
.submarine,
.patrol-boat {
    border: black 1px solid;
    background-color: rgba(145, 145, 145, 0.685);
    width: 20px;
    height: 20px;
}

.player-miss,
.comp-miss {
    background-color: rgb(133, 255, 179);
}

.player-hit,
.comp-hit {
    background-color: rgb(255, 133, 133)
}

.player,
.computer {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    visibility: hidden;
    transform: scale(1.1);
    transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
}

.modal-content,
.computer-modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 1rem 1.5rem;
    width: 24rem;
    border-radius: 0.5rem;
}

.close-button,
.comp-close-button {
    float: right;
    width: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
    cursor: pointer;
    border-radius: 0.25rem;
    background-color: lightgray;
}

.close-button:hover {
    background-color: darkgray;
}

.show-player,
.show-computer {
    opacity: 1;
    visibility: visible;
    transform: scale(1.0);
    transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;
}

#startBtn {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
}

/* CSS */
#startBtn {
    background-color: #7df565;
    border: 0 solid #e2e8f0;
    box-sizing: border-box;
    color: #0d172a;
    cursor: pointer;
    /* display: inline-block; */
    font-family: 'Chakra Petch', sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
    line-height: 1;
    padding: 1rem 5.7rem;
    text-align: center;
    text-decoration: none #0d172a solid;
    text-decoration-thickness: auto;
    transition: all .1s cubic-bezier(.4, 0, .2, 1);
    box-shadow: 0px 1px 2px rgba(166, 175, 195, 0.25);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
}

#startBtn:hover {
    background-color: #70e259;
    color: black;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,0BAA0B;IAC1B,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;IACvB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;;;;;IAKI,uBAAuB;IACvB,4CAA4C;IAC5C,WAAW;IACX,YAAY;AAChB;;AAEA;;IAEI,oCAAoC;AACxC;;AAEA;;IAEI;AACJ;;AAEA;;IAEI,eAAe;IACf,OAAO;IACP,MAAM;IACN,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,UAAU;IACV,kBAAkB;IAClB,qBAAqB;IACrB,yEAAyE;AAC7E;;AAEA;;IAEI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,uBAAuB;IACvB,oBAAoB;IACpB,YAAY;IACZ,qBAAqB;AACzB;;AAEA;;IAEI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;IACf,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;;IAEI,UAAU;IACV,mBAAmB;IACnB,qBAAqB;IACrB,sEAAsE;AAC1E;;AAEA;IACI,kBAAkB;IAClB,gCAAgC;IAChC,QAAQ;IACR,SAAS;AACb;;AAEA,QAAQ;AACR;IACI,yBAAyB;IACzB,uBAAuB;IACvB,sBAAsB;IACtB,cAAc;IACd,eAAe;IACf,2BAA2B;IAC3B,uCAAuC;IACvC,iBAAiB;IACjB,gBAAgB;IAChB,cAAc;IACd,oBAAoB;IACpB,kBAAkB;IAClB,mCAAmC;IACnC,+BAA+B;IAC/B,8CAA8C;IAC9C,iDAAiD;IACjD,iBAAiB;IACjB,yBAAyB;IACzB,0BAA0B;AAC9B;;AAEA;IACI,yBAAyB;IACzB,YAAY;AAChB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap');\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    text-decoration: none;\n    list-style: none;\n}\n\nbody {\n    font-family: 'Chakra Petch', sans-serif;\n}\n\nimg {\n    width: 45px;\n    height: 45px;\n}\n\n.game-title {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 50px;\n    text-decoration: underline;\n    margin-bottom: 1rem;\n}\n\n.main-container {\n    display: grid;\n    justify-content: center;\n}\n\ntd {\n    border: black solid 1px;\n    width: 25px;\n    height: 25px;\n}\n\ntr {\n    border: black solid 1px;\n}\n\n.carrier,\n.battleship,\n.destroyer,\n.submarine,\n.patrol-boat {\n    border: black 1px solid;\n    background-color: rgba(145, 145, 145, 0.685);\n    width: 20px;\n    height: 20px;\n}\n\n.player-miss,\n.comp-miss {\n    background-color: rgb(133, 255, 179);\n}\n\n.player-hit,\n.comp-hit {\n    background-color: rgb(255, 133, 133)\n}\n\n.player,\n.computer {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    opacity: 0;\n    visibility: hidden;\n    transform: scale(1.1);\n    transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;\n}\n\n.modal-content,\n.computer-modal-content {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    padding: 1rem 1.5rem;\n    width: 24rem;\n    border-radius: 0.5rem;\n}\n\n.close-button,\n.comp-close-button {\n    float: right;\n    width: 1.5rem;\n    line-height: 1.5rem;\n    text-align: center;\n    cursor: pointer;\n    border-radius: 0.25rem;\n    background-color: lightgray;\n}\n\n.close-button:hover {\n    background-color: darkgray;\n}\n\n.show-player,\n.show-computer {\n    opacity: 1;\n    visibility: visible;\n    transform: scale(1.0);\n    transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;\n}\n\n#startBtn {\n    position: absolute;\n    transform: translate(-50%, -50%);\n    top: 50%;\n    left: 50%;\n}\n\n/* CSS */\n#startBtn {\n    background-color: #7df565;\n    border: 0 solid #e2e8f0;\n    box-sizing: border-box;\n    color: #0d172a;\n    cursor: pointer;\n    /* display: inline-block; */\n    font-family: 'Chakra Petch', sans-serif;\n    font-size: 1.1rem;\n    font-weight: 600;\n    line-height: 1;\n    padding: 1rem 5.7rem;\n    text-align: center;\n    text-decoration: none #0d172a solid;\n    text-decoration-thickness: auto;\n    transition: all .1s cubic-bezier(.4, 0, .2, 1);\n    box-shadow: 0px 1px 2px rgba(166, 175, 195, 0.25);\n    user-select: none;\n    -webkit-user-select: none;\n    touch-action: manipulation;\n}\n\n#startBtn:hover {\n    background-color: #70e259;\n    color: black;\n}"],"sourceRoot":""}]);
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

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ "./src/game.js");




const displayGame = () => {
    const computer = (0,_player__WEBPACK_IMPORTED_MODULE_0__.createComputer)()
    const player = (0,_player__WEBPACK_IMPORTED_MODULE_0__.createPlayer)()
    let isPlayersTurn = true

    const playerContainer = document.querySelector(".player-container")
    const computerContainer = document.querySelector(".computer-container")
    const compCells = document.getElementsByClassName("c-board-cell")
    const playerModal = document.querySelector(".player")
    const closePlayerBtn = document.querySelector(".close-button")
    const compModal = document.querySelector(".computer")
    const closeCompButton = document.querySelector(".comp-close-button")
    const startBtn = document.getElementById("startBtn")

    const createPlayerDisplay = () => {
        const playerBoard = player.playerGameboard.getBoard()

        const carrier = (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(5, "Carrier")
        const battleship = (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(4, "Battleship")
        const destroyer = (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(3, "Destroyer")
        const submarine = (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(3, "Submarine")
        const patrolBoat = (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(2, "Patrol Boat")

        player.placeShipHorizontal(0, 2, carrier)
        player.placeShipVertical(2, 5, battleship)
        player.placeShipHorizontal(7, 0, destroyer)
        player.placeShipVertical(3, 1, submarine)
        player.placeShipVertical(8, 7, patrolBoat)

        for (let i = 0; i < playerBoard.length; i += 1) {
            playerBoard[i] = []
            for (let j = 0; j < playerBoard.length; j += 1) {
                const cell = document.createElement("td")
                cell.classList.add("p-board-cell")
                cell.dataset.x = i
                cell.dataset.y = j
                playerBoard[i][j] = cell
            }
        }

        playerBoard[0][2].classList.add("carrier")
        playerBoard[0][3].classList.add("carrier")
        playerBoard[0][4].classList.add("carrier")
        playerBoard[0][5].classList.add("carrier")
        playerBoard[0][6].classList.add("carrier")

        playerBoard[2][5].classList.add("battleship")
        playerBoard[3][5].classList.add("battleship")
        playerBoard[4][5].classList.add("battleship")
        playerBoard[5][5].classList.add("battleship")

        playerBoard[7][0].classList.add("destroyer")
        playerBoard[7][1].classList.add("destroyer")
        playerBoard[7][2].classList.add("destroyer")

        playerBoard[3][1].classList.add("submarine")
        playerBoard[4][1].classList.add("submarine")
        playerBoard[5][1].classList.add("submarine")

        playerBoard[8][7].classList.add("patrol-boat")
        playerBoard[9][7].classList.add("patrol-boat")

        for (let i = 0; i < 10; i += 1) {
            const row = document.createElement("tr")
            for (let j = 0; j < 10; j += 1) {
                row.append(playerBoard[i][j])
            }
            row.classList.add("p-board-row")
            playerContainer.append(row)
        }
        player.grid = playerBoard
    }

    createPlayerDisplay()

    const createCompDisplay = () => {
        const compBoard = computer.computerGameboard.getBoard()

        const carrier = (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(5, "Carrier")
        const battleship = (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(4, "Battleship")
        const destroyer = (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(3, "Destroyer")
        const submarine = (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(3, "Submarine")
        const patrolBoat = (0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(2, "Patrol Boat")

        computer.placeShipHorizontal(carrier)
        computer.placeShipVertical(battleship)
        computer.placeShipHorizontal(destroyer)
        computer.placeShipVertical(submarine)
        computer.placeShipHorizontal(patrolBoat)

        for (let i = 0; i < compBoard.length; i += 1) {
            compBoard[i] = []
            for (let j = 0; j < compBoard.length; j += 1) {
                const cell = document.createElement("td")
                cell.classList.add("c-board-cell")
                cell.dataset.x = i
                cell.dataset.y = j
                compBoard[i][j] = cell
            }
        }

        for (let i = 0; i < 10; i += 1) {
            const row = document.createElement("tr")
            for (let j = 0; j < 10; j += 1) {
                row.append(compBoard[i][j])
            }
            row.classList.add("c-board-row")
            computerContainer.append(row)
        }
        computer.grid = compBoard
    }

    createCompDisplay()

    const togglePlayerModal = () => {
        playerModal.classList.toggle("show-player")
    }

    const toggleCompModal = () => {
        compModal.classList.toggle("show-computer")
    }

    const toggleStartGame = () => {
        startBtn.style.visibility = "hidden"
        ;(0,_game__WEBPACK_IMPORTED_MODULE_2__.startGameLoop)()


    }

    const playerWins = () => {
        if (computer.computerGameboard.allSunk()) {
            return true
        }
        return false
    }

    const computerWins = () => {
        if (player.playerGameboard.allSunk()) {
            return true
        }
        return false
    }

    closePlayerBtn.addEventListener("click", togglePlayerModal)
    closeCompButton.addEventListener("click", toggleCompModal)
    startBtn.addEventListener("click", toggleStartGame)

    const displayCompAttk = () => {
        playerWins()
        computerWins()

        const result = computer.sendAttack(player)

        if (isPlayersTurn === true) {
            return false
        }
        if (result) {
            const randomX = result[0]
            const randomY = result[1]
            const compResult = result[2]
            if (compResult === false) {
                player.grid[randomX][randomY].classList.add("comp-miss")
            } else {
                player.grid[randomX][randomY].classList.add("comp-hit")
            }
            isPlayersTurn = true
            return true
        }
        return false
    }
    const displayPlayerAttk = () => {
        playerWins()
        computerWins()

        for (let i = 0; i < compCells.length; i += 1) {
            // eslint-disable-next-line no-loop-func
            compCells[i].addEventListener("click", (e) => {
                if (compCells[i].classList.value.includes("c-board-cell player-miss" || 0)) {
                    return false
                }
                if (isPlayersTurn === false) {
                    return false
                }
                const xPos = e.currentTarget.getAttribute("data-x")
                const yPos = e.currentTarget.getAttribute("data-y")

                if (player.sendAttack
                    (Number(xPos), Number(yPos), computer) === true) {
                    compCells[i].classList.add("player-hit")
                }
                if (player.sendAttack
                    (Number(xPos), Number(yPos), computer) === false) {
                    compCells[i].classList.add("player-miss")
                }
                isPlayersTurn = false
                return true
            })
        }
        return false
    }

    return {
        createPlayerDisplay, createCompDisplay, displayCompAttk, displayPlayerAttk, player, computer, playerContainer, toggleCompModal, togglePlayerModal, playerWins,
        computerWins
    }
}

const DOM = displayGame()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOM);

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   game: () => (/* binding */ game),
/* harmony export */   startGameLoop: () => (/* binding */ startGameLoop)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ "./src/display.js");


// import createShip from "./ship"

const createGame = () => {
    const player = (0,_player__WEBPACK_IMPORTED_MODULE_0__.createPlayer)("Player")
    const computer = (0,_player__WEBPACK_IMPORTED_MODULE_0__.createComputer)()

    let isPlayersTurn = true

    const playerTurn = () => {
        if (isPlayersTurn) {
            _display__WEBPACK_IMPORTED_MODULE_1__["default"].displayPlayerAttk()
        } else {
            _display__WEBPACK_IMPORTED_MODULE_1__["default"].displayCompAttk()
        }
        // Toggle true or false each turn
        isPlayersTurn = !isPlayersTurn
    }
    return { player, computer, playerTurn }
}
const game = createGame()

// Function to start the game loop
const startGameLoop = () => {
    const interval = setInterval(() => {
        if (_display__WEBPACK_IMPORTED_MODULE_1__["default"].playerWins()) {
            _display__WEBPACK_IMPORTED_MODULE_1__["default"].togglePlayerModal()
            clearInterval(interval)
        }
        if (_display__WEBPACK_IMPORTED_MODULE_1__["default"].computerWins()) {
            _display__WEBPACK_IMPORTED_MODULE_1__["default"].toggleCompModal()
            clearInterval(interval)
        }
        game.playerTurn()
    }, 1000)
    return interval
};
// startGameLoop()



/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Gameboard = () => {
    const rows = 10
    const columns = 10
    const board = []
    const missedCoord = []
    const shipArr = []
    const attackCoord = new Set()
    const getBoard = () => [...board]

    const Water = () => {
        let isHit = false
        const hit = () => { isHit = true };
        return {
            type: "water",
            hit,
            get isHit() {
                if (isHit) {
                    return "BLOOP! Miss."
                }
                return "Ship hit!"
            }
        }
    }

    for (let i = 0; i < rows; i += 1) {
        board[i] = []
        for (let j = 0; j < columns; j += 1) {
            board[i][j] = Water()
        }
    }

    // Need to reduce array amount to a single value
    const cellCount = getBoard().reduce((row, col) => row + col.length, 0)

    const validCoords = (x, y) => {
        if (x < 0) {
            return false
        }
        if (x > 9) {
            return false
        }
        if (y < 0) {
            return false
        }
        if (y > 9) {
            return false
        }
        return true
    }
    const shipIsInbounds = (x, y, ship) => {
        const shipsLength = ship.getLength()

        if (x + shipsLength > columns) {
            return false;
        }
        if (y + shipsLength > rows) {
            return false;
        }
        return true
    }

    const doShipsCollide = (x, y, ship) => {
        const shipsLength = ship.getLength()
        const currentBoard = getBoard()

        for (let i = 0; i < shipsLength; i += 1) {
            if (currentBoard[x][y + i].type !== "water") {
                return false
            }
        }
        for (let i = 0; i < shipsLength; i += 1) {
            if (currentBoard[x + i][y].type !== "water") {
                return false
            }
        }
        return true
    }

    const placeHorizontal = (x, y, ship) => {
        const shipsLength = ship.getLength()
        const currentBoard = getBoard()
        if (validCoords(x, y) && shipIsInbounds(x, y, ship) && doShipsCollide(x, y, ship)) {
            for (let i = 0; i < shipsLength; i += 1) {
                currentBoard[x][y + i] = ship
                shipArr.push(ship)
            }
            return true
        }
        return false
    }

    const placeVertical = (x, y, ship) => {
        const shipsLength = ship.getLength()
        const currentBoard = getBoard()

        if (validCoords(x, y) && shipIsInbounds(x, y, ship) && doShipsCollide(x, y, ship)) {
            for (let i = 0; i < shipsLength; i += 1) {
                currentBoard[x + i][y] = ship
                shipArr.push(ship)
            }
            return true
        }
        return false
    }

    function canShipBeHitAgain(x, y) {
        const coordStr = JSON.stringify([x, y]);

        if (attackCoord.has(coordStr)) {
            return false;
        }
        attackCoord.add(coordStr);
        return true;
    }

    function allSunk() {
        if (shipArr.length === 0) {
            return false
        }
        return shipArr.every((ship) => ship.isSunk())
    }

    function receiveAttack(x, y) {
        const water = Water()
        const currentBoard = getBoard()

        if (canShipBeHitAgain(x, y) && validCoords(x, y) && currentBoard[x][y].hit()) {
            attackCoord.add([x, y])
            return true
        }
        water.hit()
        missedCoord.push([x, y])
        return false
    }
    return { placeVertical, placeHorizontal, getBoard, cellCount, receiveAttack, allSunk, canShipBeHitAgain, validCoords, shipIsInbounds, doShipsCollide }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);

/* Placing ships vertically 
In each iteration  board[x + i][y] is assigned the name of the ship (ship.name) The y coordinate stays the same, while the x coordinate is incremented by i each iteration

By increasing the x coordinate by i in each iteration, the ship is placed vertically on the board.

gameboard.placeShip(2, 4, testShip, "horizontal")

shipsLength is 3
x is 2 and y is 4

Iteration 1: i = 0. board[2 + 0][4] assigns the ship name to board[2][4].
Iteration 2: i = 1. board[2 + 1][4] assigns the ship name to board[3][4].
Iteration 3: i = 2. board[2 + 2][4] assigns the ship name to board[4][4].

After these iterations, the ship occupies the cells (2, 4), (3, 4), and (4, 4)
*/

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createComputer: () => (/* binding */ createComputer),
/* harmony export */   createPlayer: () => (/* binding */ createPlayer)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");


const createComputer = () => {
    const computerGameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])()
    const arrayOfCoords = []
    const compAttkCoords = []
    let counter = 0

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i -= 1) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]
        }
    }

    for (let i = 0; i < 10; i += 1) {
        for (let j = 0; j < 10; j += 1) {
            arrayOfCoords.push([i, j]);
        }
    }

    shuffleArray(arrayOfCoords)

    const placeShipHorizontal = (ship) => {
        let x
        let y
        do {
            x = Math.floor((Math.random() * 9))
            y = Math.floor((Math.random() * 9))
        }
        while
            (computerGameboard.placeHorizontal(x, y, ship) === false)
        return true
    }

    const placeShipVertical = (ship) => {
        let x
        let y
        do {
            x = Math.floor((Math.random() * 9))
            y = Math.floor((Math.random() * 9))
        }
        while
            (computerGameboard.placeVertical(x, y, ship) === false)
        return true
    }

    const setEnemyBoard = (player) => player.getPlayerBoard

    const sendAttack = (player) => {
        const randomXCoords = arrayOfCoords[counter][0]
        const randomYCoords = arrayOfCoords[counter][1]

        compAttkCoords.push([randomXCoords, randomYCoords])

        const response = player.playerGameboard.receiveAttack(randomXCoords, randomYCoords)

        counter += 1;

        return [randomXCoords, randomYCoords, response]
    }

    return { computerGameboard, setEnemyBoard, placeShipHorizontal, placeShipVertical, sendAttack }
}

const createPlayer = (name) => {
    const getName = () => name
    const playerGameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])()
    const placeShipHorizontal = (x, y, ship) => playerGameboard.placeHorizontal(x, y, ship)

    const placeShipVertical = (x, y, ship) => playerGameboard.placeVertical(x, y, ship)

    const setEnemyBoard = (comp) => comp.getCompBoard

    const sendAttack = (x, y, comp) => comp.computerGameboard.receiveAttack(x, y)

    return { getName, placeShipHorizontal, placeShipVertical, setEnemyBoard, sendAttack, playerGameboard }
}




/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createShip = (shipLength, name) => {
    const hits = 0
    let sunk = false

    function getLength() {
        return this.shipLength
    }

    function hit() {
        this.hits += 1
        return this.hits
    }

    function isSunk() {
        if (this.hits === this.shipLength) {
            sunk = true
            return sunk
        }
        sunk = false
        return sunk
    }
    return { getLength, hit, isSunk, shipLength, name, hits }
}

const testShip = createShip(2, "13213")
testShip.hit()
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createShip);



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
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game */ "./src/game.js");







})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map