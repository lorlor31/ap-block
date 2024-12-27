/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/examples/editable/src/blocks/enhanced-editable-block-1b8c51/index.js":
/*!**********************************************************************************!*\
  !*** ./src/examples/editable/src/blocks/enhanced-editable-block-1b8c51/index.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/examples/editable/src/blocks/enhanced-editable-block-1b8c51/block.json");
/* harmony import */ var _js_edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/edit */ "./src/examples/editable/src/blocks/enhanced-editable-block-1b8c51/js/edit.js");
/* harmony import */ var _js_save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/save */ "./src/examples/editable/src/blocks/enhanced-editable-block-1b8c51/js/save.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/style.css */ "./src/examples/editable/src/blocks/enhanced-editable-block-1b8c51/css/style.css");
/* harmony import */ var _css_editor_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/editor.css */ "./src/examples/editable/src/blocks/enhanced-editable-block-1b8c51/css/editor.css");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */






// Destructure the json file to get the name and settings for the block
// For more information on how this works, see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
const {
  name
} = _block_json__WEBPACK_IMPORTED_MODULE_1__;

// Register the block
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(name, {
  edit: _js_edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  // Object shorthand property - same as writing: edit: edit,
  save: _js_save__WEBPACK_IMPORTED_MODULE_3__["default"] // Object shorthand property - same as writing: save: save,
});

/***/ }),

/***/ "./src/examples/editable/src/blocks/enhanced-editable-block-1b8c51/js/edit.js":
/*!************************************************************************************!*\
  !*** ./src/examples/editable/src/blocks/enhanced-editable-block-1b8c51/js/edit.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _withCharLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withCharLimit */ "./src/examples/editable/src/blocks/enhanced-editable-block-1b8c51/js/withCharLimit.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const RichTextWithCharLimit = (0,_withCharLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(100)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText);
const Edit = props => {
  const {
    attributes: {
      content
    },
    setAttributes
  } = props;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)();
  const onChangeContent = newContent => {
    setAttributes({
      content: newContent
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    ...blockProps,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(RichTextWithCharLimit, {
      tagName: "p",
      onChange: onChangeContent,
      value: content
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/examples/editable/src/blocks/enhanced-editable-block-1b8c51/js/save.js":
/*!************************************************************************************!*\
  !*** ./src/examples/editable/src/blocks/enhanced-editable-block-1b8c51/js/save.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const Save = props => {
  const {
    attributes: {
      content
    }
  } = props;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
    ...blockProps,
    tagName: "p",
    value: content
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/examples/editable/src/blocks/enhanced-editable-block-1b8c51/js/useCharLimit.js":
/*!********************************************************************************************!*\
  !*** ./src/examples/editable/src/blocks/enhanced-editable-block-1b8c51/js/useCharLimit.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);


function useCharLimit(content = '', onChange, limit) {
  var _content$length;
  const [charCount, setCharCount] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)((_content$length = content?.length) !== null && _content$length !== void 0 ? _content$length : 0);
  const [errorMessage, setErrorMessage] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const handleContentChange = value => {
    setCharCount(value.length);
    if (value.length > limit) {
      setErrorMessage((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(/* translators: %d: maximum number of character allowed */
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(`Character limit exceeded. Please enter no more than %d characters.`, 'block-development-examples'), limit));
    } else {
      setErrorMessage('');
      onChange(value);
    }
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (content) {
      handleContentChange(content);
    }
  }, []);
  return {
    charCount,
    errorMessage,
    handleContentChange
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCharLimit);

/***/ }),

/***/ "./src/examples/editable/src/blocks/enhanced-editable-block-1b8c51/js/withCharLimit.js":
/*!*********************************************************************************************!*\
  !*** ./src/examples/editable/src/blocks/enhanced-editable-block-1b8c51/js/withCharLimit.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _useCharLimit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useCharLimit */ "./src/examples/editable/src/blocks/enhanced-editable-block-1b8c51/js/useCharLimit.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const withCharLimit = limit => Component => {
  return props => {
    const {
      value: content,
      onChange
    } = props;
    const {
      charCount,
      errorMessage,
      handleContentChange
    } = (0,_useCharLimit__WEBPACK_IMPORTED_MODULE_0__["default"])(content, onChange, limit);
    const colorState = charCount > limit ? 'red' : 'green';
    const progressBarStyle = {
      width: `${charCount / limit * limit}%`,
      height: '5px',
      backgroundColor: colorState,
      marginTop: '5px'
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component, {
        ...props,
        onChange: handleContentChange,
        value: content
      }), errorMessage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "error-message",
        style: {
          color: 'red'
        },
        children: errorMessage
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "progress-bar",
        style: progressBarStyle
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "char-count",
        style: {
          color: colorState
        },
        children: [charCount, " / ", limit]
      })]
    });
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withCharLimit);

/***/ }),

/***/ "./src/examples/editable/src/blocks/enhanced-editable-block-1b8c51/css/editor.css":
/*!****************************************************************************************!*\
  !*** ./src/examples/editable/src/blocks/enhanced-editable-block-1b8c51/css/editor.css ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/examples/editable/src/blocks/enhanced-editable-block-1b8c51/css/style.css":
/*!***************************************************************************************!*\
  !*** ./src/examples/editable/src/blocks/enhanced-editable-block-1b8c51/css/style.css ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/examples/editable/src/blocks/enhanced-editable-block-1b8c51/block.json":
/*!************************************************************************************!*\
  !*** ./src/examples/editable/src/blocks/enhanced-editable-block-1b8c51/block.json ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://json.schemastore.org/block.json","apiVersion":2,"name":"block-development-examples/enhanced-editable-block-1b8c51","title":"Enhanced Editable Block","textdomain":"block-development-examples","icon":"universal-access-alt","category":"widgets","keywords":["1b8c51"],"attributes":{"content":{"type":"string","source":"html","selector":"p"}},"example":{"attributes":{"content":"Hello world"}},"editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"examples/editable/src/blocks/enhanced-editable-block-1b8c51/index": 0,
/******/ 			"examples/editable/src/blocks/enhanced-editable-block-1b8c51/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkarmoireplus_blocks"] = globalThis["webpackChunkarmoireplus_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["examples/editable/src/blocks/enhanced-editable-block-1b8c51/style-index"], () => (__webpack_require__("./src/examples/editable/src/blocks/enhanced-editable-block-1b8c51/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map