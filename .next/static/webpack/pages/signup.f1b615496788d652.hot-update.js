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

/***/ "./pages/signup.tsx":
/*!**************************!*\
  !*** ./pages/signup.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignUp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _lib_client_fetchApiUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/client/fetchApiUser */ \"./lib/client/fetchApiUser.tsx\");\n/* harmony import */ var _components_LoadingModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/LoadingModal */ \"./components/LoadingModal.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction SignUp() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var ref = _slicedToArray((0,_lib_client_fetchApiUser__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"api/register/registerapi\"), 2), registerFn = ref[0], ref1 = ref[1], loading = ref1.loading, error = ref1.error, registerData = ref1.data;\n    var ref2 = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)({\n        mode: \"onChange\"\n    }), register = ref2.register, handleSubmit = ref2.handleSubmit;\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), existUser = ref3[0], setExistUser = ref3[1];\n    var onValid = function(validForm) {\n        registerFn(validForm);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        console.log(registerData === null || registerData === void 0 ? void 0 : registerData.success);\n        if (registerData === null || registerData === void 0 ? void 0 : registerData.success) {\n            setExistUser(JSON.stringify(registerData).replace(/\"/g, \"\"));\n            router.push(\"/\");\n        } else if ((registerData === null || registerData === void 0 ? void 0 : registerData.success) === false) {\n            setExistUser(JSON.stringify(registerData).replace(/\"/g, \"\"));\n        }\n    }, [\n        registerData\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (error) console.log(error);\n    }, [\n        error\n    ]);\n    var resetErrorMsg = function() {\n        if ((registerData === null || registerData === void 0 ? void 0 : registerData.success) === false) {\n            setExistUser(\"\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"LoginMainContainer bg-purple-400 w-full h-screen p-2 flex flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Register Form\"\n                }, void 0, false, {\n                    fileName: \"/Users/ms/Desktop/commit-test-folder/nextjs-kweet/pages/signup.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"w-full\",\n                    onSubmit: handleSubmit(onValid),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: \"ID\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ms/Desktop/commit-test-folder/nextjs-kweet/pages/signup.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this),\n                        existUser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-xs text-red-500\",\n                            children: existUser\n                        }, void 0, false, {\n                            fileName: \"/Users/ms/Desktop/commit-test-folder/nextjs-kweet/pages/signup.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, this) : null,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({}, register(\"loginId\", {\n                            required: true\n                        }), {\n                            type: \"text\"\n                        }), void 0, false, {\n                            fileName: \"/Users/ms/Desktop/commit-test-folder/nextjs-kweet/pages/signup.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: \"USERNAME\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ms/Desktop/commit-test-folder/nextjs-kweet/pages/signup.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({}, register(\"username\", {\n                            required: true\n                        }), {\n                            type: \"text\"\n                        }), void 0, false, {\n                            fileName: \"/Users/ms/Desktop/commit-test-folder/nextjs-kweet/pages/signup.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: \"EMAIL\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ms/Desktop/commit-test-folder/nextjs-kweet/pages/signup.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({}, register(\"email\", {\n                            required: true\n                        }), {\n                            type: \"email\"\n                        }), void 0, false, {\n                            fileName: \"/Users/ms/Desktop/commit-test-folder/nextjs-kweet/pages/signup.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: \"PASSWORD\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ms/Desktop/commit-test-folder/nextjs-kweet/pages/signup.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({}, register(\"pass\", {\n                            required: true\n                        }), {\n                            type: \"password\"\n                        }), void 0, false, {\n                            fileName: \"/Users/ms/Desktop/commit-test-folder/nextjs-kweet/pages/signup.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: \"register\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ms/Desktop/commit-test-folder/nextjs-kweet/pages/signup.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ms/Desktop/commit-test-folder/nextjs-kweet/pages/signup.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this),\n                loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LoadingModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/ms/Desktop/commit-test-folder/nextjs-kweet/pages/signup.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 20\n                }, this) : null,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"login\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Are you Registered?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ms/Desktop/commit-test-folder/nextjs-kweet/pages/signup.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ms/Desktop/commit-test-folder/nextjs-kweet/pages/signup.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ms/Desktop/commit-test-folder/nextjs-kweet/pages/signup.tsx\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n};\n_s(SignUp, \"KcWihQHsOzg6Tgc/8JKxEaou7A8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm\n    ];\n});\n_c = SignUp;\nvar _c;\n$RefreshReg$(_c, \"SignUp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2JELGtEQUFTO1FBSVdMLG9EQUFPOzs7QUFMcEJNLEtBQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLnRzeD8wZWFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5pbXBvcnQgZmV0Y2hBcGlVc2VyIGZyb20gXCIuLi9saWIvY2xpZW50L2ZldGNoQXBpVXNlclwiO1xuaW1wb3J0IExvYWRpbmdNb2RhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2FkaW5nTW9kYWxcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5pbnRlcmZhY2UgU2lnblVwUHJvcHMge1xuICBsb2dpbklkOiBzdHJpbmc7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHBhc3M6IHN0cmluZztcbiAgZXhpc3RVc2VyOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25VcCgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtyZWdpc3RlckZuLCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhOiByZWdpc3RlckRhdGEgfV0gPSBmZXRjaEFwaVVzZXIoXG4gICAgXCJhcGkvcmVnaXN0ZXIvcmVnaXN0ZXJhcGlcIlxuICApO1xuICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQgfSA9IHVzZUZvcm08U2lnblVwUHJvcHM+KHsgbW9kZTogXCJvbkNoYW5nZVwiIH0pO1xuICBjb25zdCBbZXhpc3RVc2VyLCBzZXRFeGlzdFVzZXJdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3Qgb25WYWxpZCA9ICh2YWxpZEZvcm06IFNpZ25VcFByb3BzKSA9PiB7XG4gICAgcmVnaXN0ZXJGbih2YWxpZEZvcm0pO1xuICB9O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHJlZ2lzdGVyRGF0YT8uc3VjY2Vzcyk7XG4gICAgaWYgKHJlZ2lzdGVyRGF0YT8uc3VjY2Vzcykge1xuICAgICAgc2V0RXhpc3RVc2VyKEpTT04uc3RyaW5naWZ5KHJlZ2lzdGVyRGF0YSkucmVwbGFjZSgvXCIvZywgXCJcIikpO1xuICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICAgIH0gZWxzZSBpZiAocmVnaXN0ZXJEYXRhPy5zdWNjZXNzID09PSBmYWxzZSkge1xuICAgICAgc2V0RXhpc3RVc2VyKEpTT04uc3RyaW5naWZ5KHJlZ2lzdGVyRGF0YSkucmVwbGFjZSgvXCIvZywgXCJcIikpO1xuICAgIH1cbiAgfSwgW3JlZ2lzdGVyRGF0YV0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChlcnJvcikgY29uc29sZS5sb2coZXJyb3IpO1xuICB9LCBbZXJyb3JdKTtcbiAgY29uc3QgcmVzZXRFcnJvck1zZyA9ICgpID0+IHtcbiAgICBpZiAocmVnaXN0ZXJEYXRhPy5zdWNjZXNzID09PSBmYWxzZSkge1xuICAgICAgc2V0RXhpc3RVc2VyKFwiXCIpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJMb2dpbk1haW5Db250YWluZXIgYmctcHVycGxlLTQwMCB3LWZ1bGwgaC1zY3JlZW4gcC0yIGZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgPGgxPlJlZ2lzdGVyIEZvcm08L2gxPlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJ3LWZ1bGxcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uVmFsaWQpfT5cbiAgICAgICAgICA8ZGl2PklEPC9kaXY+XG4gICAgICAgICAge2V4aXN0VXNlciA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXJlZC01MDBcIj57ZXhpc3RVc2VyfTwvZGl2PlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwibG9naW5JZFwiLCB7XG4gICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAvLyBvbkNoYW5nZTogaGFuZGxlU3VibWl0KHJlc2V0RXJyb3JNc2cpLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2PlVTRVJOQU1FPC9kaXY+XG4gICAgICAgICAgPGlucHV0IHsuLi5yZWdpc3RlcihcInVzZXJuYW1lXCIsIHsgcmVxdWlyZWQ6IHRydWUgfSl9IHR5cGU9XCJ0ZXh0XCIgLz5cblxuICAgICAgICAgIDxkaXY+RU1BSUw8L2Rpdj5cbiAgICAgICAgICA8aW5wdXQgey4uLnJlZ2lzdGVyKFwiZW1haWxcIiwgeyByZXF1aXJlZDogdHJ1ZSB9KX0gdHlwZT1cImVtYWlsXCIgLz5cbiAgICAgICAgICA8ZGl2PlBBU1NXT1JEPC9kaXY+XG4gICAgICAgICAgPGlucHV0IHsuLi5yZWdpc3RlcihcInBhc3NcIiwgeyByZXF1aXJlZDogdHJ1ZSB9KX0gdHlwZT1cInBhc3N3b3JkXCIgLz5cbiAgICAgICAgICA8YnV0dG9uPnJlZ2lzdGVyPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAge2xvYWRpbmcgPyA8TG9hZGluZ01vZGFsIC8+IDogbnVsbH1cbiAgICAgICAgPExpbmsgaHJlZj1cImxvZ2luXCI+XG4gICAgICAgICAgPGJ1dHRvbj5BcmUgeW91IFJlZ2lzdGVyZWQ/PC9idXR0b24+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VGb3JtIiwiZmV0Y2hBcGlVc2VyIiwiTG9hZGluZ01vZGFsIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJTaWduVXAiLCJyb3V0ZXIiLCJyZWdpc3RlckZuIiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsInJlZ2lzdGVyRGF0YSIsIm1vZGUiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImV4aXN0VXNlciIsInNldEV4aXN0VXNlciIsIm9uVmFsaWQiLCJ2YWxpZEZvcm0iLCJjb25zb2xlIiwibG9nIiwic3VjY2VzcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXBsYWNlIiwicHVzaCIsInJlc2V0RXJyb3JNc2ciLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwicmVxdWlyZWQiLCJ0eXBlIiwiYnV0dG9uIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/signup.tsx\n");

/***/ })

});