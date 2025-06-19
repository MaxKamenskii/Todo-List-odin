/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createToDo.js":
/*!***************************!*\
  !*** ./src/createToDo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ToDo: () => (/* binding */ ToDo),\n/* harmony export */   allToDos: () => (/* binding */ allToDos)\n/* harmony export */ });\nconsole.log(\"Module loaded\");\nconst allToDos = [];\n\nclass ToDo {\n    constructor(title, description, dueDate, priority, list, done) {\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.list = list;\n        this.done = done;\n        this.id = crypto.randomUUID()\n    }\n    addToAllToDos() {\n        this.done = false;\n        allToDos.push(this)\n    }\n    deleteToDo(){\n        const indexOfToDo = allToDos.findIndex(todo => todo.title === this.title)\n        if (indexOfToDo !== -1) {\n        allToDos.splice(indexOfToDo, 1)\n        }\n    }\n    addToTheList(listName) {\n        if(allToDos.includes(this)) {\n        this.list = listName.name;\n        let id = this.id\n        listName.ToDos.push(id)\n        } else {\n            console.log(\"The ToDo has been deleted\")\n        }\n    }\n    setPriority(newPriority){\n        this.priority = newPriority\n    }\n    toggleDoneStatus() {\n        if(this.done === false){\n            this.done = true\n        } else {\n            this.done = false\n        }\n    }\n}\n\n//# sourceURL=webpack:///./src/createToDo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createToDo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createToDo.js */ \"./src/createToDo.js\");\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ \"./src/projects.js\");\n\n\n\n\nconsole.log(JSON.parse(JSON.stringify(_createToDo_js__WEBPACK_IMPORTED_MODULE_0__.allToDos)));\nconsole.log([..._createToDo_js__WEBPACK_IMPORTED_MODULE_0__.allToDos])\n\nconst homeList = new _projects_js__WEBPACK_IMPORTED_MODULE_1__.List(\"Home\")\nconst studyList = new _projects_js__WEBPACK_IMPORTED_MODULE_1__.List(\"study\")\nconst firstToDo = new _createToDo_js__WEBPACK_IMPORTED_MODULE_0__.ToDo(\"testToDo\", \"todo for testing\", \"June 18\", \"high\")\nconst secondToDo = new _createToDo_js__WEBPACK_IMPORTED_MODULE_0__.ToDo(\"secondToDo\", \"todo for testing 2\", \"June 18\", \"low\")\nconst thirdToDo = new _createToDo_js__WEBPACK_IMPORTED_MODULE_0__.ToDo(\"thirdToDo\", \"todo for testing 3\", \"June 18\", \"medium\")\nfirstToDo.addToAllToDos()\nsecondToDo.addToAllToDos()\nthirdToDo.addToAllToDos()\nfirstToDo.addToTheList(homeList)\nsecondToDo.addToTheList(homeList)\n\nconsole.log(_createToDo_js__WEBPACK_IMPORTED_MODULE_0__.allToDos)\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   List: () => (/* binding */ List)\n/* harmony export */ });\nclass List{\n    constructor(name) {\n        this.name = name;\n        this.ToDos = []\n    }\n}\n\n//# sourceURL=webpack:///./src/projects.js?");

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
/************************************************************************/
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;