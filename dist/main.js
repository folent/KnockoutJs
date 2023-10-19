/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

eval("ko.applyBindings({\n  categories: ko.observableArray([{\n    name: \"Обязательные для всех\",\n    items: ko.observableArray([{\n      name: \"Паспорт\"\n    }, {\n      name: \"ИНН\"\n    }])\n  }, {\n    name: \"Обязательные для трудоустройства\",\n    items: ko.observableArray([{\n      name: \"Тест 1\"\n    }, {\n      name: \"Тест 2\"\n    }])\n  }, {\n    name: \"Специальные\",\n    items: ko.observableArray([{\n      name: \"Тест 3\"\n    }, {\n      name: \"Тест 4\"\n    }])\n  }]),\n  toggleDropDown: function toggleDropDown(data, event) {\n    var dropdown = event.target.closest('.dropdown');\n    if (dropdown) {\n      dropdown.classList.toggle('open');\n    }\n  },\n  onDrag: function onDrag(data, event) {\n    if (!event.target.closest('.drag-button')) {\n      event.stopImmediatePropagation();\n    }\n  }\n});\n\n//# sourceURL=webpack://knockoutjs/./index.js?");

/***/ }),

/***/ "./styles/main.css":
/*!*************************!*\
  !*** ./styles/main.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://knockoutjs/./styles/main.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./styles/main.css"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;