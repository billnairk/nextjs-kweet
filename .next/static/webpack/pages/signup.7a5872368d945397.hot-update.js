"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signup",{

/***/ "./lib/client/fetchApiUser.tsx":
/*!*************************************!*\
  !*** ./lib/client/fetchApiUser.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ fetchApiUser; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\nvar _s = $RefreshSig$();\nfunction fetchApiUser(url) {\n    var fetchApi = function fetchApi(validForm) {\n        setState(function(prev) {\n            return _objectSpread({}, prev, {\n                loading: true\n            });\n        });\n        fetch(url, {\n            method: \"POST\",\n            body: JSON.stringify(validForm),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        }).then(function(response) {\n            return response.json().catch(function() {});\n        }).then(function(data) {\n            setState(function(prev) {\n                return _objectSpread({}, prev, {\n                    data: data\n                });\n            });\n            console.log(data);\n        }).catch(function(error) {\n            return setState(function(prev) {\n                return _objectSpread({}, prev, {\n                    error: error\n                });\n            });\n        }).finally(function() {\n            return setState(function(prev) {\n                return _objectSpread({}, prev, {\n                    loading: false\n                });\n            });\n        });\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n        loading: false,\n        error: undefined,\n        data: undefined\n    }), state = ref[0], setState = ref[1];\n    console.log(state.data);\n    return [\n        fetchApi,\n        _objectSpread({}, state)\n    ];\n};\n_s(fetchApiUser, \"MCpRA3A137hG9J2N6T3kXt7bRLE=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY2xpZW50L2ZldGNoQXBpVXNlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7O0FBYWxCLFNBQVNDLFlBQVksQ0FBQ0MsR0FBVyxFQUEwQjtRQU0vREMsUUFBUSxHQUFqQixTQUFTQSxRQUFRLENBQUNDLFNBQWMsRUFBRTtRQUNoQ0MsUUFBUSxDQUFDLFNBQUNDLElBQUk7bUJBQU0sa0JBQUtBLElBQUk7Z0JBQUVDLE9BQU8sRUFBRSxJQUFJO2NBQUU7U0FBQyxDQUFDLENBQUM7UUFDakRDLEtBQUssQ0FBQ04sR0FBRyxFQUFFO1lBQ1RPLE1BQU0sRUFBRSxNQUFNO1lBQ2RDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNSLFNBQVMsQ0FBQztZQUMvQlMsT0FBTyxFQUFFO2dCQUNQLGNBQWMsRUFBRSxrQkFBa0I7YUFDbkM7U0FDRixDQUFDLENBQ0NDLElBQUksQ0FBQyxTQUFDQyxRQUFRO21CQUFLQSxRQUFRLENBQUNDLElBQUksRUFBRSxDQUFDQyxLQUFLLENBQUMsV0FBTSxFQUFFLENBQUM7U0FBQSxDQUFDLENBQ25ESCxJQUFJLENBQUMsU0FBQ0ksSUFBSSxFQUFLO1lBQ2RiLFFBQVEsQ0FBQyxTQUFDQyxJQUFJO3VCQUFNLGtCQUFLQSxJQUFJO29CQUFFWSxJQUFJLEVBQUpBLElBQUk7a0JBQUU7YUFBQyxDQUFDLENBQUM7WUFDeENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUMsQ0FBQztTQUNuQixDQUFDLENBQ0RELEtBQUssQ0FBQyxTQUFDSSxLQUFLO21CQUFLaEIsUUFBUSxDQUFDLFNBQUNDLElBQUk7dUJBQU0sa0JBQUtBLElBQUk7b0JBQUVlLEtBQUssRUFBTEEsS0FBSztrQkFBRTthQUFDLENBQUM7U0FBQSxDQUFDLENBQzFEQyxPQUFPLENBQUM7bUJBQU1qQixRQUFRLENBQUMsU0FBQ0MsSUFBSTt1QkFBTSxrQkFBS0EsSUFBSTtvQkFBRUMsT0FBTyxFQUFFLEtBQUs7a0JBQUU7YUFBQyxDQUFDO1NBQUEsQ0FBQyxDQUFDO0tBQ3JFOztJQXJCRCxJQUEwQlAsR0FJeEIsR0FKd0JBLCtDQUFRLENBQW1CO1FBQ25ETyxPQUFPLEVBQUUsS0FBSztRQUNkYyxLQUFLLEVBQUVFLFNBQVM7UUFDaEJMLElBQUksRUFBRUssU0FBUztLQUNoQixDQUFDLEVBbEJKLEtBY2MsR0FBY3ZCLEdBSXhCLEdBSlUsRUFkZCxRQWN3QixHQUFJQSxHQUl4QixHQUpvQjtJQXNCdEJtQixPQUFPLENBQUNDLEdBQUcsQ0FBQ0ksS0FBSyxDQUFDTixJQUFJLENBQUMsQ0FBQztJQUN4QixPQUFPO1FBQUNmLFFBQVE7UUFBRSxrQkFBS3FCLEtBQUssQ0FBRTtLQUFDLENBQUM7Q0FDakM7R0F6QnVCdkIsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvY2xpZW50L2ZldGNoQXBpVXNlci50c3g/ZmFiOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgZmV0Y2hBcGlVc2VyVHlwZSB7XG4gIGxvYWRpbmc6IGJvb2xlYW47XG4gIGVycm9yPzogb2JqZWN0O1xuICBkYXRhPzoge1xuICAgIGV4aXN0VXNlcjogc3RyaW5nO1xuICAgIHN1Y2Nlc3M6IGJvb2xlYW47XG4gIH07XG59XG5cbnR5cGUgZmV0Y2hBcGlVc2VyUmVzdWx0VHlwZSA9IFsodmFsaWRGb3JtOiBhbnkpID0+IHZvaWQsIGZldGNoQXBpVXNlclR5cGVdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmZXRjaEFwaVVzZXIodXJsOiBzdHJpbmcpOiBmZXRjaEFwaVVzZXJSZXN1bHRUeXBlIHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZTxmZXRjaEFwaVVzZXJUeXBlPih7XG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgZXJyb3I6IHVuZGVmaW5lZCxcbiAgICBkYXRhOiB1bmRlZmluZWQsXG4gIH0pO1xuICBmdW5jdGlvbiBmZXRjaEFwaSh2YWxpZEZvcm06IGFueSkge1xuICAgIHNldFN0YXRlKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBsb2FkaW5nOiB0cnVlIH0pKTtcbiAgICBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh2YWxpZEZvcm0pLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpLmNhdGNoKCgpID0+IHt9KSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHNldFN0YXRlKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBkYXRhIH0pKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gc2V0U3RhdGUoKHByZXYpID0+ICh7IC4uLnByZXYsIGVycm9yIH0pKSlcbiAgICAgIC5maW5hbGx5KCgpID0+IHNldFN0YXRlKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBsb2FkaW5nOiBmYWxzZSB9KSkpO1xuICB9XG4gIGNvbnNvbGUubG9nKHN0YXRlLmRhdGEpO1xuICByZXR1cm4gW2ZldGNoQXBpLCB7IC4uLnN0YXRlIH1dO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiZmV0Y2hBcGlVc2VyIiwidXJsIiwiZmV0Y2hBcGkiLCJ2YWxpZEZvcm0iLCJzZXRTdGF0ZSIsInByZXYiLCJsb2FkaW5nIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiY2F0Y2giLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiZmluYWxseSIsInVuZGVmaW5lZCIsInN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/client/fetchApiUser.tsx\n");

/***/ })

});