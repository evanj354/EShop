webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/reducers/cart.js":
/*!********************************!*\
  !*** ./pages/reducers/cart.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist */ \"./node_modules/redux-persist/es/index.js\");\n\n\n\nvar initialState = {\n  cart: []\n};\n\nvar itemReducer = function itemReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case 'ADD_ITEM':\n      {\n        return {\n          cart: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.cart), [action.item])\n        };\n      }\n\n    case 'CLEAR_ITEM':\n      {\n        console.log('CLEARING A ITEM');\n        state.cart.splice(action.index, 1);\n        a = state.cart;\n        console.log('NEW STATE a, ', a);\n        return a;\n      }\n\n    case 'CLEAR_ITEMS':\n      {\n        console.log(\"CLEARING ITEMS\");\n        return {\n          cart: []\n        };\n      }\n\n    default:\n      {\n        return state;\n      }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (itemReducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yZWR1Y2Vycy9jYXJ0LmpzPzVlYTIiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiY2FydCIsIml0ZW1SZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJzcGxpY2UiLCJpbmRleCIsImEiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUc7QUFDakJDLE1BQUksRUFBRTtBQURXLENBQXJCOztBQUlBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQWdDO0FBQUEsTUFBL0JDLEtBQStCLHVFQUF6QkgsWUFBeUI7QUFBQSxNQUFYSSxNQUFXOztBQUNoRCxVQUFPQSxNQUFNLENBQUNDLElBQWQ7QUFDSSxTQUFLLFVBQUw7QUFBaUI7QUFDYixlQUFPO0FBQUVKLGNBQUkseUdBQU1FLEtBQUssQ0FBQ0YsSUFBWixJQUFrQkcsTUFBTSxDQUFDRSxJQUF6QjtBQUFOLFNBQVA7QUFDSDs7QUFDRCxTQUFLLFlBQUw7QUFBb0I7QUFDaEJDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBQ0FMLGFBQUssQ0FBQ0YsSUFBTixDQUFXUSxNQUFYLENBQWtCTCxNQUFNLENBQUNNLEtBQXpCLEVBQStCLENBQS9CO0FBQ0FDLFNBQUMsR0FBR1IsS0FBSyxDQUFDRixJQUFWO0FBQ0FNLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkJHLENBQTdCO0FBQ0EsZUFBT0EsQ0FBUDtBQUNIOztBQUNELFNBQUssYUFBTDtBQUFvQjtBQUNoQkosZUFBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVo7QUFDQSxlQUFPO0FBQUVQLGNBQUksRUFBRTtBQUFSLFNBQVA7QUFDSDs7QUFDRDtBQUFTO0FBQ0wsZUFBT0UsS0FBUDtBQUNIO0FBakJMO0FBbUJILENBcEJEOztBQXNCZUQsMEVBQWYiLCJmaWxlIjoiLi9wYWdlcy9yZWR1Y2Vycy9jYXJ0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtSRUhZRFJBVEUsIFBFUlNJU1R9IGZyb20gJ3JlZHV4LXBlcnNpc3QnXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBjYXJ0OiBbXVxufTtcblxuY29uc3QgaXRlbVJlZHVjZXIgPSAoc3RhdGU9aW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnQUREX0lURU0nOiB7XG4gICAgICAgICAgICByZXR1cm4geyBjYXJ0OiBbLi4uc3RhdGUuY2FydCwgYWN0aW9uLml0ZW1dfSA7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnQ0xFQVJfSVRFTSc6ICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ0xFQVJJTkcgQSBJVEVNJyk7XG4gICAgICAgICAgICBzdGF0ZS5jYXJ0LnNwbGljZShhY3Rpb24uaW5kZXgsMSk7XG4gICAgICAgICAgICBhID0gc3RhdGUuY2FydFxuICAgICAgICAgICAgY29uc29sZS5sb2coJ05FVyBTVEFURSBhLCAnLCBhKTtcbiAgICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ0NMRUFSX0lURU1TJzoge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDTEVBUklORyBJVEVNU1wiKTtcbiAgICAgICAgICAgIHJldHVybiB7IGNhcnQ6IFtdIH07XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaXRlbVJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/reducers/cart.js\n");

/***/ })

})