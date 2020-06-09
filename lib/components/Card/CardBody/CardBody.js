"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _base = require("../../Utilities/base");

var _themeFunctions = require("../../../utils/themeFunctions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  flex: 1 1 auto;\n  padding: ", ";\n  & > a {\n    &:hover {\n      text-decoration: none;\n    }\n    & + a {\n      margin-left: ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CardBody = (0, _styledComponents["default"])(_base.Div)(_templateObject(), function (props) {
  return (0, _themeFunctions.getPadding)(props, 'cardBody', 'default');
}, function (props) {
  return (0, _themeFunctions.getMargin)(props, 'cardBody', 'leftA');
});
var _default = CardBody;
exports["default"] = _default;