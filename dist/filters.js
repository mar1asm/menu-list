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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 62);
/******/ })
/************************************************************************/
/******/ ({

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__test_filter__ = __webpack_require__(63);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__test_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__test_filter__);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmlsdGVycy9pbmRleC5qcz8wZTMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vdGVzdC1maWx0ZXJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9maWx0ZXJzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///62\n");

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__) {

"use strict";
eval("var __ = wp.i18n.__;\nvar addFilter = wp.hooks.addFilter;\n\n\naddFilter(\"blocks.registerBlockType\", \"first-blocks/first-filters\", extendWithFirstFilters);\n\nfunction extendWithFirstFilters(settings, name) {\n    console.log(name); // my block isn't logged \n\n    //check for block type\n\n    if (\"first-blocks/menu\" === name) //this doesn't work\n        // if (\"core/quote\"===name)         this works\n        {\n            settings.description = __(\"Testing the filters...\");\n            settings.category = \"common\";\n            settings.icon = \"admin-tools\";\n\n            if (settings.keywords) {\n                settings.keywords.push(__(\"filter\"));\n            } else {\n                settings.keywords = [__(\"filter\")];\n            }\n        }\n    return settings;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmlsdGVycy90ZXN0LWZpbHRlci5qcz8zOTNhIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfXyA9IHdwLmkxOG4uX187XG52YXIgYWRkRmlsdGVyID0gd3AuaG9va3MuYWRkRmlsdGVyO1xuXG5cbmFkZEZpbHRlcihcImJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZVwiLCBcImZpcnN0LWJsb2Nrcy9maXJzdC1maWx0ZXJzXCIsIGV4dGVuZFdpdGhGaXJzdEZpbHRlcnMpO1xuXG5mdW5jdGlvbiBleHRlbmRXaXRoRmlyc3RGaWx0ZXJzKHNldHRpbmdzLCBuYW1lKSB7XG4gICAgY29uc29sZS5sb2cobmFtZSk7IC8vIG15IGJsb2NrIGlzbid0IGxvZ2dlZCBcblxuICAgIC8vY2hlY2sgZm9yIGJsb2NrIHR5cGVcblxuICAgIGlmIChcImZpcnN0LWJsb2Nrcy9tZW51XCIgPT09IG5hbWUpIC8vdGhpcyBkb2Vzbid0IHdvcmtcbiAgICAgICAgLy8gaWYgKFwiY29yZS9xdW90ZVwiPT09bmFtZSkgICAgICAgICB0aGlzIHdvcmtzXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNldHRpbmdzLmRlc2NyaXB0aW9uID0gX18oXCJUZXN0aW5nIHRoZSBmaWx0ZXJzLi4uXCIpO1xuICAgICAgICAgICAgc2V0dGluZ3MuY2F0ZWdvcnkgPSBcImNvbW1vblwiO1xuICAgICAgICAgICAgc2V0dGluZ3MuaWNvbiA9IFwiYWRtaW4tdG9vbHNcIjtcblxuICAgICAgICAgICAgaWYgKHNldHRpbmdzLmtleXdvcmRzKSB7XG4gICAgICAgICAgICAgICAgc2V0dGluZ3Mua2V5d29yZHMucHVzaChfXyhcImZpbHRlclwiKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldHRpbmdzLmtleXdvcmRzID0gW19fKFwiZmlsdGVyXCIpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIHJldHVybiBzZXR0aW5ncztcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9maWx0ZXJzL3Rlc3QtZmlsdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///63\n");

/***/ })

/******/ });