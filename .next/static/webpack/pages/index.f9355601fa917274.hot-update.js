"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_ms_Desktop_commit_test_folder_nextjs_kweet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_ms_Desktop_commit_test_folder_nextjs_kweet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_ms_Desktop_commit_test_folder_nextjs_kweet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var ref;\n    _s();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), profile = ref1[0], setProfile = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var getProfile = function() {\n            var _ref = _asyncToGenerator(_Users_ms_Desktop_commit_test_folder_nextjs_kweet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var userProfile;\n                return _Users_ms_Desktop_commit_test_folder_nextjs_kweet_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return fetch(\"/api/user/profile\").then(function(response) {\n                                return response.json();\n                            });\n                        case 2:\n                            userProfile = _ctx.sent;\n                            setProfile(function() {\n                                return userProfile;\n                            });\n                        case 4:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function getProfile() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        getProfile();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"MainContainer bg-purple-400 w-full h-screen p-2 flex flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"TopBar w-full flex justify-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"login\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                children: \"HOME\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ms/Desktop/commit-test-folder/nextjs-kweet/pages/index.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ms/Desktop/commit-test-folder/nextjs-kweet/pages/index.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                            children: [\n                                profile === null || profile === void 0 ? void 0 : (ref = profile.user) === null || ref === void 0 ? void 0 : ref.loginId,\n                                \"\\uB2D8 \\uC548\\uB155\\uD558\\uC138\\uC694\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ms/Desktop/commit-test-folder/nextjs-kweet/pages/index.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"signup\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                children: \"Profile\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ms/Desktop/commit-test-folder/nextjs-kweet/pages/index.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ms/Desktop/commit-test-folder/nextjs-kweet/pages/index.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ms/Desktop/commit-test-folder/nextjs-kweet/pages/index.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"MsgContainer\"\n                }, void 0, false, {\n                    fileName: \"/Users/ms/Desktop/commit-test-folder/nextjs-kweet/pages/index.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"fixed bottom-0 p-4 flex w-full justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"upload\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            children: \"ADD MESSAGE\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ms/Desktop/commit-test-folder/nextjs-kweet/pages/index.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ms/Desktop/commit-test-folder/nextjs-kweet/pages/index.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ms/Desktop/commit-test-folder/nextjs-kweet/pages/index.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ms/Desktop/commit-test-folder/nextjs-kweet/pages/index.tsx\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n};\n_s(Home, \"ARrBhKCnyC2+WZwbxvtaOTW2oQA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDZTs7QUFNN0IsU0FBU0csSUFBSSxHQUFHO1FBa0JkQyxHQUFhOztJQWpCNUIsSUFBOEJGLElBQXVCLEdBQXZCQSwrQ0FBUSxFQUFlLEVBUnZELE9BUWdCLEdBQWdCQSxJQUF1QixHQUF2QyxFQVJoQixVQVE0QixHQUFJQSxJQUF1QixHQUEzQjtJQUMxQkQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBTUssVUFBVTt1QkFBRyxrTUFBWTtvQkFDdkJDLFdBQVc7Ozs7O21DQUFTQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFNBQUNDLFFBQVE7dUNBQ2pFQSxRQUFRLENBQUNDLElBQUksRUFBRTs2QkFBQSxDQUNoQjs7NEJBRktKLFdBQVcsWUFFaEI7NEJBQ0RGLFVBQVUsQ0FBQzt1Q0FBTUUsV0FBVzs2QkFBQSxDQUFDLENBQUM7Ozs7OzthQUMvQjs0QkFMS0QsVUFBVTs7O1dBS2Y7UUFDREEsVUFBVSxFQUFFLENBQUM7S0FDZCxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1AscUJBQ0U7a0JBQ0UsNEVBQUNNLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLCtEQUErRDs7OEJBQzVFLDhEQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsb0NBQW9DOztzQ0FDakQsOERBQUNiLGtEQUFJOzRCQUFDYyxJQUFJLEVBQUMsT0FBTztzQ0FDaEIsNEVBQUNDLFFBQU07MENBQUMsTUFBSTs7Ozs7b0NBQVM7Ozs7O2dDQUNoQjtzQ0FDUCw4REFBQ0MsTUFBSTs7Z0NBQUVaLE9BQU8sYUFBUEEsT0FBTyxXQUFNLEdBQWJBLEtBQUFBLENBQWEsR0FBYkEsQ0FBQUEsR0FBYSxHQUFiQSxPQUFPLENBQUVhLElBQUksY0FBYmIsR0FBYSxjQUFiQSxLQUFBQSxDQUFhLEdBQWJBLEdBQWEsQ0FBRWMsT0FBTztnQ0FBQyx1Q0FBTzs7Ozs7O2dDQUFPO3NDQUM1Qyw4REFBQ2xCLGtEQUFJOzRCQUFDYyxJQUFJLEVBQUMsUUFBUTtzQ0FDakIsNEVBQUNDLFFBQU07MENBQUMsU0FBTzs7Ozs7b0NBQVM7Ozs7O2dDQUNuQjs7Ozs7O3dCQUNIOzhCQUNOLDhEQUFDSCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsY0FBYzs7Ozs7d0JBQU87OEJBQ3BDLDhEQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsK0NBQStDOzhCQUM1RCw0RUFBQ2Isa0RBQUk7d0JBQUNjLElBQUksRUFBQyxRQUFRO2tDQUNqQiw0RUFBQ0MsUUFBTTtzQ0FBQyxhQUFXOzs7OztnQ0FBUzs7Ozs7NEJBQ3ZCOzs7Ozt3QkFDSDs7Ozs7O2dCQUNGO3FCQUNMLENBQ0g7Q0FDSDtHQWhDdUJaLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBwcm9maWxlVHlwZSB7XG4gIFthbnk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3Byb2ZpbGUsIHNldFByb2ZpbGVdID0gdXNlU3RhdGU8cHJvZmlsZVR5cGU+KCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZ2V0UHJvZmlsZSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHVzZXJQcm9maWxlID0gYXdhaXQgZmV0Y2goXCIvYXBpL3VzZXIvcHJvZmlsZVwiKS50aGVuKChyZXNwb25zZSkgPT5cbiAgICAgICAgcmVzcG9uc2UuanNvbigpXG4gICAgICApO1xuICAgICAgc2V0UHJvZmlsZSgoKSA9PiB1c2VyUHJvZmlsZSk7XG4gICAgfTtcbiAgICBnZXRQcm9maWxlKCk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJNYWluQ29udGFpbmVyIGJnLXB1cnBsZS00MDAgdy1mdWxsIGgtc2NyZWVuIHAtMiBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVG9wQmFyIHctZnVsbCBmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJsb2dpblwiPlxuICAgICAgICAgICAgPGJ1dHRvbj5IT01FPC9idXR0b24+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxzcGFuPntwcm9maWxlPy51c2VyPy5sb2dpbklkfeuLmCDslYjrhZXtlZjshLjsmpQ8L3NwYW4+XG4gICAgICAgICAgPExpbmsgaHJlZj1cInNpZ251cFwiPlxuICAgICAgICAgICAgPGJ1dHRvbj5Qcm9maWxlPC9idXR0b24+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJNc2dDb250YWluZXJcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBib3R0b20tMCBwLTQgZmxleCB3LWZ1bGwganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8TGluayBocmVmPVwidXBsb2FkXCI+XG4gICAgICAgICAgICA8YnV0dG9uPkFERCBNRVNTQUdFPC9idXR0b24+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJwcm9maWxlIiwic2V0UHJvZmlsZSIsImdldFByb2ZpbGUiLCJ1c2VyUHJvZmlsZSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJidXR0b24iLCJzcGFuIiwidXNlciIsImxvZ2luSWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});