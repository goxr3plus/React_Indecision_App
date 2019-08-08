"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var template = _react["default"].createElement("p", null, " This is JSX FROM WEBPACK "); // React.createElement("p", {}, "testing");


_reactDom["default"].render(template, document.getElementById("app"));
