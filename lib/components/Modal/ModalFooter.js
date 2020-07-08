"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _base = require("../Utilities/base");

var _theme = _interopRequireDefault(require("../../theme"));

var _themeFunctions = require("../../utils/themeFunctions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: ", ";\n  border-top: ", "\n    ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ModalFooter = (0, _styledComponents["default"])(_base.Div)(_templateObject(), function (props) {
  return (0, _themeFunctions.getPadding)(props, 'modalFooter', 'default');
}, function (props) {
  return (0, _themeFunctions.getBorder)(props, 'modalFooter', 'default');
}, function (props) {
  return (0, _themeFunctions.getColor)(props, 'modalFooter', 'borderColor');
});
ModalFooter.defaultProps = {
  theme: _theme["default"]
};
var _default = ModalFooter;
exports["default"] = _default;