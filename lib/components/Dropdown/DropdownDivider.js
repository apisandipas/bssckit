"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = _interopRequireDefault(require("../../theme"));

var _themeFunctions = require("../../utils/themeFunctions");

var _base = require("../Utilities/base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 0;\n  padding-top: ", ";\n  margin-top: ", ";\n  border-top: ", "\n    ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DropdownDivider = (0, _styledComponents["default"])(_base.Div)(_templateObject(), function (props) {
  return (0, _themeFunctions.getPadding)(props, 'dropdownDivider', 'top');
}, function (props) {
  return (0, _themeFunctions.getMargin)(props, 'dropdownDivider', 'top');
}, function (props) {
  return (0, _themeFunctions.getBorder)(props, 'dropdownDivider', 'default');
}, function (props) {
  return (0, _themeFunctions.getColor)(props, 'dropdownDivider', 'borderTop');
});
DropdownDivider.defaultProps = {
  theme: _theme["default"]
};
var _default = DropdownDivider;
exports["default"] = _default;