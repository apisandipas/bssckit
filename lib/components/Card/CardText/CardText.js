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
  var data = _taggedTemplateLiteral(["\n  margin-top: ", ";\n  margin-bottom: ", ";\n  &:last-child {\n    margin-bottom: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CardText = (0, _styledComponents["default"])(_base.P)(_templateObject(), (0, _styledTools.theme)('cardText.margin.top'), (0, _styledTools.theme)('cardText.margin.bottom'), (0, _styledTools.theme)('cardText.margin.lastChildBottom'));
CardText.defaultProps = {
  theme: _theme["default"]
};
var _default = CardText;
exports["default"] = _default;