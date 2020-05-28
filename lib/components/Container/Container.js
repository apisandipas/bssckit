"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styledTools = require("styled-tools");

var _styledBreakpoints = require("styled-breakpoints");

var _base = require("../Utilities/base");

var _theme = _interopRequireDefault(require("../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      max-width: 100%;\n      width: 100%;\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      ", " {\n        max-width: ", ";\n      }\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      ", " {\n        max-width: ", ";\n      }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      ", " {\n        max-width: ", ";\n      }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: ", ";\n  margin-right: auto;\n  margin-left: auto;\n  padding-right: ", ";\n  padding-left:  ", ";\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = (0, _styledComponents["default"])(_base.Div)(_templateObject(), (0, _styledTools.theme)('container.width.default'), (0, _styledTools.withProp)('theme.grid.gutterWidth', function (gutterWidth) {
  return "".concat(gutterWidth / 2, "px");
}), (0, _styledTools.withProp)('theme.grid.gutterWidth', function (gutterWidth) {
  return "".concat(gutterWidth / 2, "px");
}), (0, _styledTools.ifNotProp)('fluid', (0, _styledComponents.css)(_templateObject2(), (0, _styledBreakpoints.up)('sm'), (0, _styledTools.theme)('container.width.sizes.sm'))), (0, _styledTools.ifNotProp)('fluid', (0, _styledComponents.css)(_templateObject3(), (0, _styledBreakpoints.up)('md'), (0, _styledTools.theme)('container.width.sizes.md'))), (0, _styledTools.ifNotProp)('fluid', (0, _styledComponents.css)(_templateObject4(), (0, _styledBreakpoints.up)('lg'), (0, _styledTools.theme)('container.width.sizes.lg'))), (0, _styledTools.ifProp)('fluid', (0, _styledComponents.css)(_templateObject5())));
Container.defaultProps = {
  theme: _theme["default"]
};
var _default = Container;
exports["default"] = _default;