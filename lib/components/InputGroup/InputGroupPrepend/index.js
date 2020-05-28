"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _base = require("../../Utilities/base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  margin-right: -1px;\n  & > button {\n    position: relative;\n    z-index: 2;\n  }\n  & > span,\n  & > button {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n    &:not(:first-child) {\n      margin-left: -1px;\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var InputGroupPrepend = (0, _styledComponents["default"])(_base.Div)(_templateObject());
var _default = InputGroupPrepend;
exports["default"] = _default;