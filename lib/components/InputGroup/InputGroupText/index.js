"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledTools = require("styled-tools");

var _theme = _interopRequireDefault(require("../../../theme"));

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

var InputGroupText = (0, _styledComponents["default"])(_base.Span)(_templateObject(), (0, _styledTools.theme)('inputGroupText.padding.default'), (0, _styledTools.theme)('inputGroupText.margin.bottom'), (0, _styledTools.theme)('inputGroupText.fontSize.default'), (0, _styledTools.theme)('inputGroupText.fonmtWeight.default'), (0, _styledTools.theme)('inputGroupText.colors.default.color'), (0, _styledTools.theme)('inputGroupText.colors.default.backgroundColor'), (0, _styledTools.theme)('inputGroupText.border.default'), (0, _styledTools.theme)('inputGroupText.colors.default.borderColor'), (0, _styledTools.theme)('inputGroupText.borderRadius.default'), (0, _styledTools.theme)('inputGroupText.margin.radioCheckboxTop'), (0, _styledTools.theme)('inputGroupText.margin.radioCheckboxRight'), (0, _styledTools.theme)('inputGroupText.margin.radioCheckboxBottom'));
InputGroupText.defaultProps = {
  theme: _theme["default"]
};
var _default = InputGroupText;
exports["default"] = _default;