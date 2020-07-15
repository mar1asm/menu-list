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

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2017 Jed Watson.\n  Licensed under the MIT License (MIT), see\n  http://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\n\tfunction classNames () {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg) && arg.length) {\n\t\t\t\tvar inner = classNames.apply(null, arg);\n\t\t\t\tif (inner) {\n\t\t\t\t\tclasses.push(inner);\n\t\t\t\t}\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif (typeof module !== 'undefined' && module.exports) {\n\t\tclassNames.default = classNames;\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {\n\t\twindow.classNames = classNames;\n\t}\n}());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcz8xZDZlIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTcgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykgJiYgYXJnLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///61\n");

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__test_filter__ = __webpack_require__(63);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__test_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__test_filter__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__extend_my_block__ = __webpack_require__(65);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_scss__ = __webpack_require__(66);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_scss__);\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmlsdGVycy9pbmRleC5qcz8wZTMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vdGVzdC1maWx0ZXJcIjtcbmltcG9ydCBcIi4vZXh0ZW5kLW15LWJsb2NrXCI7XG5cbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ZpbHRlcnMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///62\n");

/***/ }),

/***/ 63:
/***/ (function(module, exports) {

eval("var __ = wp.i18n.__;\nvar addFilter = wp.hooks.addFilter;\n\n\naddFilter(\"blocks.registerBlockType\", \"first-blocks/first-filters\", extendWithFirstFilters);\n\nfunction extendWithFirstFilters(settings, name) {\n\n    if (\"first-blocks/menu\" === name) {\n        if (settings.keywords && settings.keywords.length < 3) {\n            settings.keywords.push(__(\"filter\"));\n        } else {\n            settings.keywords = [__(\"filter\")];\n        }\n        settings.align = false;\n    }\n    return settings;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmlsdGVycy90ZXN0LWZpbHRlci5qcz8zOTNhIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfXyA9IHdwLmkxOG4uX187XG52YXIgYWRkRmlsdGVyID0gd3AuaG9va3MuYWRkRmlsdGVyO1xuXG5cbmFkZEZpbHRlcihcImJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZVwiLCBcImZpcnN0LWJsb2Nrcy9maXJzdC1maWx0ZXJzXCIsIGV4dGVuZFdpdGhGaXJzdEZpbHRlcnMpO1xuXG5mdW5jdGlvbiBleHRlbmRXaXRoRmlyc3RGaWx0ZXJzKHNldHRpbmdzLCBuYW1lKSB7XG5cbiAgICBpZiAoXCJmaXJzdC1ibG9ja3MvbWVudVwiID09PSBuYW1lKSB7XG4gICAgICAgIGlmIChzZXR0aW5ncy5rZXl3b3JkcyAmJiBzZXR0aW5ncy5rZXl3b3Jkcy5sZW5ndGggPCAzKSB7XG4gICAgICAgICAgICBzZXR0aW5ncy5rZXl3b3Jkcy5wdXNoKF9fKFwiZmlsdGVyXCIpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldHRpbmdzLmtleXdvcmRzID0gW19fKFwiZmlsdGVyXCIpXTtcbiAgICAgICAgfVxuICAgICAgICBzZXR0aW5ncy5hbGlnbiA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gc2V0dGluZ3M7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZmlsdGVycy90ZXN0LWZpbHRlci5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///63\n");

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(61);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);\nvar addFilter = wp.hooks.addFilter;\nvar __ = wp.i18n.__;\nvar Fragment = wp.element.Fragment;\nvar InspectorControls = wp.editor.InspectorControls;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    ToggleControl = _wp$components.ToggleControl;\nvar createHigherOrderComponent = wp.compose.createHigherOrderComponent;\n\n\n\n\naddFilter(\"blocks.registerBlockType\", \"first-blocks/add-code-attributes\", addCodeAttributes);\n\naddFilter(\"editor.BlockEdit\", \"first-blocks/add-code-inspector-controls\", addCodeInspectorControls);\n\naddFilter(\"blocks.getSaveElement\", \"first-blocks/modify-save-settings\", modifyCodeSettings);\n\nfunction addCodeAttributes(settings, name) {\n\n    if (\"first-blocks/menu\" === name) {\n\n        settings.supports = lodash.merge({}, settings.supports, {\n            align: [\"full\", \"wide\", \"left\"]\n        });\n\n        settings.attributes.align = {\n            type: \"string\",\n            default: \"full\"\n        };\n\n        settings.attributes.highContrast = {\n            type: \"boolean\",\n            default: false\n        };\n    }\n    return settings;\n}\n\nfunction addCodeInspectorControls(BlockEdit) {\n    var withInspectorControls = createHigherOrderComponent(function (BlockEdit) {\n        return function (props) {\n            if (\"first-blocks/menu\" !== props.name) return;\n            wp.element.createElement(BlockEdit, props);\n\n            return wp.element.createElement(\n                Fragment,\n                null,\n                wp.element.createElement(\n                    \"div\",\n                    { className: __WEBPACK_IMPORTED_MODULE_0_classnames___default()({\n                            \"high-contrast\": props.attributes.highContrast\n                        }) },\n                    wp.element.createElement(BlockEdit, props)\n                ),\n                wp.element.createElement(\n                    InspectorControls,\n                    null,\n                    wp.element.createElement(\n                        PanelBody,\n                        { title: __(\"New Settings\", \"first-blocks\") },\n                        wp.element.createElement(ToggleControl, {\n                            label: __(\"High Contrast\"),\n                            checked: props.attributes.highContrast,\n                            onChange: function onChange(highContrast) {\n                                return props.setAttributes({ highContrast: highContrast });\n                            }\n                        })\n                    )\n                )\n            );\n        };\n    });\n\n    return withInspectorControls(BlockEdit);\n}\n\nfunction modifyCodeSettings(element, block, attributes) {\n    if (\"first-blocks/menu\" === block.name && attributes.highContrast) {\n        element.props.className = __WEBPACK_IMPORTED_MODULE_0_classnames___default()(element.props.className, {\n            \"high-contrast\": attributes.highContrast\n        });\n    }\n    return element;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmlsdGVycy9leHRlbmQtbXktYmxvY2suanM/OTUxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYWRkRmlsdGVyID0gd3AuaG9va3MuYWRkRmlsdGVyO1xudmFyIF9fID0gd3AuaTE4bi5fXztcbnZhciBGcmFnbWVudCA9IHdwLmVsZW1lbnQuRnJhZ21lbnQ7XG52YXIgSW5zcGVjdG9yQ29udHJvbHMgPSB3cC5lZGl0b3IuSW5zcGVjdG9yQ29udHJvbHM7XG52YXIgX3dwJGNvbXBvbmVudHMgPSB3cC5jb21wb25lbnRzLFxuICAgIFBhbmVsQm9keSA9IF93cCRjb21wb25lbnRzLlBhbmVsQm9keSxcbiAgICBUb2dnbGVDb250cm9sID0gX3dwJGNvbXBvbmVudHMuVG9nZ2xlQ29udHJvbDtcbnZhciBjcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudCA9IHdwLmNvbXBvc2UuY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQ7XG5cblxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuYWRkRmlsdGVyKFwiYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlXCIsIFwiZmlyc3QtYmxvY2tzL2FkZC1jb2RlLWF0dHJpYnV0ZXNcIiwgYWRkQ29kZUF0dHJpYnV0ZXMpO1xuXG5hZGRGaWx0ZXIoXCJlZGl0b3IuQmxvY2tFZGl0XCIsIFwiZmlyc3QtYmxvY2tzL2FkZC1jb2RlLWluc3BlY3Rvci1jb250cm9sc1wiLCBhZGRDb2RlSW5zcGVjdG9yQ29udHJvbHMpO1xuXG5hZGRGaWx0ZXIoXCJibG9ja3MuZ2V0U2F2ZUVsZW1lbnRcIiwgXCJmaXJzdC1ibG9ja3MvbW9kaWZ5LXNhdmUtc2V0dGluZ3NcIiwgbW9kaWZ5Q29kZVNldHRpbmdzKTtcblxuZnVuY3Rpb24gYWRkQ29kZUF0dHJpYnV0ZXMoc2V0dGluZ3MsIG5hbWUpIHtcblxuICAgIGlmIChcImZpcnN0LWJsb2Nrcy9tZW51XCIgPT09IG5hbWUpIHtcblxuICAgICAgICBzZXR0aW5ncy5zdXBwb3J0cyA9IGxvZGFzaC5tZXJnZSh7fSwgc2V0dGluZ3Muc3VwcG9ydHMsIHtcbiAgICAgICAgICAgIGFsaWduOiBbXCJmdWxsXCIsIFwid2lkZVwiLCBcImxlZnRcIl1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0dGluZ3MuYXR0cmlidXRlcy5hbGlnbiA9IHtcbiAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICBkZWZhdWx0OiBcImZ1bGxcIlxuICAgICAgICB9O1xuXG4gICAgICAgIHNldHRpbmdzLmF0dHJpYnV0ZXMuaGlnaENvbnRyYXN0ID0ge1xuICAgICAgICAgICAgdHlwZTogXCJib29sZWFuXCIsXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gc2V0dGluZ3M7XG59XG5cbmZ1bmN0aW9uIGFkZENvZGVJbnNwZWN0b3JDb250cm9scyhCbG9ja0VkaXQpIHtcbiAgICB2YXIgd2l0aEluc3BlY3RvckNvbnRyb2xzID0gY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQoZnVuY3Rpb24gKEJsb2NrRWRpdCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgICAgICBpZiAoXCJmaXJzdC1ibG9ja3MvbWVudVwiICE9PSBwcm9wcy5uYW1lKSByZXR1cm47XG4gICAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoQmxvY2tFZGl0LCBwcm9wcyk7XG5cbiAgICAgICAgICAgIHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgRnJhZ21lbnQsXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBjbGFzc25hbWVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhpZ2gtY29udHJhc3RcIjogcHJvcHMuYXR0cmlidXRlcy5oaWdoQ29udHJhc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pIH0sXG4gICAgICAgICAgICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChCbG9ja0VkaXQsIHByb3BzKVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBJbnNwZWN0b3JDb250cm9scyxcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgUGFuZWxCb2R5LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyB0aXRsZTogX18oXCJOZXcgU2V0dGluZ3NcIiwgXCJmaXJzdC1ibG9ja3NcIikgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChUb2dnbGVDb250cm9sLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IF9fKFwiSGlnaCBDb250cmFzdFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBwcm9wcy5hdHRyaWJ1dGVzLmhpZ2hDb250cmFzdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoaGlnaENvbnRyYXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9wcy5zZXRBdHRyaWJ1dGVzKHsgaGlnaENvbnRyYXN0OiBoaWdoQ29udHJhc3QgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH07XG4gICAgfSk7XG5cbiAgICByZXR1cm4gd2l0aEluc3BlY3RvckNvbnRyb2xzKEJsb2NrRWRpdCk7XG59XG5cbmZ1bmN0aW9uIG1vZGlmeUNvZGVTZXR0aW5ncyhlbGVtZW50LCBibG9jaywgYXR0cmlidXRlcykge1xuICAgIGlmIChcImZpcnN0LWJsb2Nrcy9tZW51XCIgPT09IGJsb2NrLm5hbWUgJiYgYXR0cmlidXRlcy5oaWdoQ29udHJhc3QpIHtcbiAgICAgICAgZWxlbWVudC5wcm9wcy5jbGFzc05hbWUgPSBjbGFzc25hbWVzKGVsZW1lbnQucHJvcHMuY2xhc3NOYW1lLCB7XG4gICAgICAgICAgICBcImhpZ2gtY29udHJhc3RcIjogYXR0cmlidXRlcy5oaWdoQ29udHJhc3RcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ZpbHRlcnMvZXh0ZW5kLW15LWJsb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///65\n");

/***/ }),

/***/ 66:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmlsdGVycy9zdHlsZS5zY3NzPzFmZTMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9maWx0ZXJzL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///66\n");

/***/ })

/******/ });