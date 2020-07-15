webpackHotUpdate("static/development/pages/cart.js",{

/***/ "./pages/components/cartItem.tsx":
/*!***************************************!*\
  !*** ./pages/components/cartItem.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nvar cartItem = function cartItem(_ref) {\n  var name = _ref.name,\n      url = _ref.url,\n      price = _ref.price,\n      imgurl = _ref.imgurl,\n      index = _ref.index,\n      reduxRemove = _ref.reduxRemove;\n  return __jsx(\"div\", null, __jsx(\"div\", {\n    className: \"d-flex flex-column m-5 card card-body\"\n  }, __jsx(\"button\", {\n    onClick: function onClick() {\n      return reduxRemove(index);\n    },\n    type: \"button\",\n    className: \"close align-self-end\",\n    \"aria-label\": \"Close\"\n  }, __jsx(\"span\", {\n    \"aria-hidden\": \"true\"\n  }, \"\\xD7\")), __jsx(\"a\", {\n    className: \"mb-3\",\n    href: url\n  }, __jsx(\"img\", {\n    src: imgurl,\n    alt: \"Amazon.com\"\n  })), __jsx(\"h3\", null, price)));\n}; // const mapDispatchToProps = (dispatch) => {\n//     return {\n//         reduxClearItem: (index) => { dispatch(clearItem(index)); }\n//     }\n// }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (cartItem);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL2NhcnRJdGVtLnRzeD80N2JjIl0sIm5hbWVzIjpbImNhcnRJdGVtIiwibmFtZSIsInVybCIsInByaWNlIiwiaW1ndXJsIiwiaW5kZXgiLCJyZWR1eFJlbW92ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBcUQ7QUFBQSxNQUFsREMsSUFBa0QsUUFBbERBLElBQWtEO0FBQUEsTUFBNUNDLEdBQTRDLFFBQTVDQSxHQUE0QztBQUFBLE1BQXZDQyxLQUF1QyxRQUF2Q0EsS0FBdUM7QUFBQSxNQUFoQ0MsTUFBZ0MsUUFBaENBLE1BQWdDO0FBQUEsTUFBeEJDLEtBQXdCLFFBQXhCQSxLQUF3QjtBQUFBLE1BQWpCQyxXQUFpQixRQUFqQkEsV0FBaUI7QUFDbEUsU0FDSSxtQkFDSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0k7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNQSxXQUFXLENBQUNELEtBQUQsQ0FBakI7QUFBQSxLQUFqQjtBQUEyQyxRQUFJLEVBQUMsUUFBaEQ7QUFBeUQsYUFBUyxFQUFDLHNCQUFuRTtBQUEwRixrQkFBVztBQUFyRyxLQUNJO0FBQU0sbUJBQVk7QUFBbEIsWUFESixDQURKLEVBSUk7QUFBRyxhQUFTLEVBQUMsTUFBYjtBQUFvQixRQUFJLEVBQUVIO0FBQTFCLEtBQ0k7QUFBSyxPQUFHLEVBQUVFLE1BQVY7QUFBa0IsT0FBRyxFQUFDO0FBQXRCLElBREosQ0FKSixFQU9JLGtCQUFLRCxLQUFMLENBUEosQ0FESixDQURKO0FBYUgsQ0FkRCxDLENBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVlSCx1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvY2FydEl0ZW0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuaW1wb3J0IHsgY2xlYXJJdGVtIH0gZnJvbSBcIi4uL2FjdGlvbnMvY2FydFwiO1xuXG5jb25zdCBjYXJ0SXRlbSA9ICh7IG5hbWUsIHVybCwgcHJpY2UsIGltZ3VybCwgaW5kZXgsIHJlZHV4UmVtb3ZlfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBtLTUgY2FyZCBjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHJlZHV4UmVtb3ZlKGluZGV4KX0gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlIGFsaWduLXNlbGYtZW5kXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibWItM1wiIGhyZWY9e3VybH0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWd1cmx9IGFsdD1cIkFtYXpvbi5jb21cIj48L2ltZz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGgzPntwcmljZX08L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuLy8gY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgcmVkdXhDbGVhckl0ZW06IChpbmRleCkgPT4geyBkaXNwYXRjaChjbGVhckl0ZW0oaW5kZXgpKTsgfVxuLy8gICAgIH1cbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgY2FydEl0ZW07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/cartItem.tsx\n");

/***/ })

})