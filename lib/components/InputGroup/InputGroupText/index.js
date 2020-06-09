"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = _interopRequireDefault(require("../../../theme"));

var _themeFunctions = require("../../../utils/themeFunctions");

var _base = require("../../Utilities/base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: ", ";\n  margin-bottom: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  color: ", ";\n  text-align: center;\n  white-space: nowrap;\n  background-color: ", ";\n  border: ", " ", ";\n  border-radius: ", ";\n  & input[type='radio'],\n  & input[type='checkbox'] {\n    margin-top: ", ";\n    margin-right: ", ";\n    margin-bottom: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var InputGroupText = (0, _styledComponents["default"])(_base.Span)(_templateObject(), function (props) {
  return (0, _themeFunctions.getPadding)(props, 'inputGroupText', 'default');
}, function (props) {
  return (0, _themeFunctions.getMargin)(props, 'inputGroupText', 'bottom');
}, function (props) {
  return (0, _themeFunctions.getFontSize)(props, 'inputGroupText', 'default');
}, function (props) {
  return (0, _themeFunctions.getFontWeight)(props, 'inputGroupText', 'default');
}, function (props) {
  return (0, _themeFunctions.getColor)(props, 'inputGroupText', 'color');
}, function (props) {
  return (0, _themeFunctions.getColor)(props, 'inputGroupText', 'backgroundColor');
}, function (props) {
  return (0, _themeFunctions.getBorder)(props, 'inputGroupText', 'default');
}, function (props) {
  return (0, _themeFunctions.getColor)(props, 'inputGroupText', 'borderColor');
}, function (props) {
  return (0, _themeFunctions.getBorderRadius)(props, 'inputGroupText', 'default');
}, function (props) {
  return (0, _themeFunctions.getMargin)(props, 'inputGroupText', 'radioCheckboxTop');
}, function (props) {
  return (0, _themeFunctions.getMargin)(props, 'inputGroupText', 'radioCheckboxRight');
}, function (props) {
  return (0, _themeFunctions.getMargin)(props, 'inputGroupText', 'radioCheckboxBottom');
});
InputGroupText.defaultProps = {
  theme: _theme["default"]
};
var _default = InputGroupText;
exports["default"] = _default;