"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _base = require("../Utilities/base");

var _theme = _interopRequireDefault(require("../../theme/"));

var _themeFunctions = require("../../utils/themeFunctions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: ", ";\n  border-bottom: ", " rgba(0, 0, 0, 0.2);\n  border-top-left-radius: ", ";\n  border-top-right-radius: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ModalHeader = (0, _styledComponents["default"])(_base.Div).attrs({
  className: 'ModalHeader'
})(_templateObject(), function (props) {
  return (0, _themeFunctions.getPadding)(props, 'modalHeader', 'default');
}, function (props) {
  return (0, _themeFunctions.getBorder)(props, 'modalHeader', 'default');
}, function (props) {
  return (0, _themeFunctions.getBorderRadius)(props, 'modalHeader', 'lg');
}, function (props) {
  return (0, _themeFunctions.getBorderRadius)(props, 'modalHeader', 'lg');
});
ModalHeader.defaultProps = {
  theme: _theme["default"]
};
var _default = ModalHeader;
exports["default"] = _default;