"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.AlertDismissIcon = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styledTools = require("styled-tools");

var _base = require("../Utilities/base");

var _theme = _interopRequireDefault(require("../../theme"));

var _consts = require("../../utils/consts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n      padding-right: ", ";\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      border-radius: ", ";\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      border-radius: 0;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        color: ", ";\n        background-color: ", ";\n        border-color: ", ";\n\n        & > a,\n        & > a:hover {\n          color: ", ";\n        }\n\n        & > h1,\n        & > h2,\n        & > h3,\n        & > h4,\n        & > h5,\n        & > h6 {\n          color: ", ";\n        }\n\n        & > hr {\n          border-top-color: ", ";\n        }\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  padding: ", ";\n  margin-bottom: ", ";\n  border: ", ";\n  border-radius: ", ";\n  color: ", ";\n  background-color: ", ";\n  border-color: ", ";\n\n  & > a,\n  & > a:hover {\n    font-weight: ", ";\n  }\n\n  & > h1,\n  & > h2,\n  & > h3,\n  & > h4,\n  & > h5,\n  & > h6 {\n    color: inherit;\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 2rem;\n  cursor: pointer;\n  line-height: 1rem;\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  color: inherit;\n  opacity: 0.5;\n\n  &:hover,\n  &:focus {\n    opacity: 0.75;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AlertDismissIcon = _styledComponents["default"].span.attrs({
  ariaHidden: 'true'
})(_templateObject());

exports.AlertDismissIcon = AlertDismissIcon;
var Alert = (0, _styledComponents["default"])(_base.Div).attrs({
  role: 'alert'
})(_templateObject2(), (0, _styledTools.theme)('alert.padding.default'), (0, _styledTools.theme)('alert.margin.bottom'), (0, _styledTools.theme)('alert.border.default'), (0, _styledTools.theme)('alert.borderRadius.default'), (0, _styledTools.theme)("alert.colors.default.color"), (0, _styledTools.theme)("alert.colors.default.background"), (0, _styledTools.theme)("alert.colors.default.border"), (0, _styledTools.theme)('alert.fontWeight.default'), _consts.themeContexts.map(function (context) {
  return (0, _styledTools.ifProp)(context, (0, _styledComponents.css)(_templateObject3(), (0, _styledTools.theme)("alert.colors.text"), (0, _styledTools.theme)("alert.colors.".concat(context, ".background")), (0, _styledTools.theme)("alert.colors.".concat(context, ".border")), (0, _styledTools.theme)("alert.colors.".concat(context, ".text")), (0, _styledTools.theme)("alert.colors.".concat(context, ".text")), (0, _styledTools.theme)("alert.colors.".concat(context, ".text"))));
}), (0, _styledTools.ifProp)('noRadius', (0, _styledComponents.css)(_templateObject4())), (0, _styledTools.ifProp)('pill', (0, _styledComponents.css)(_templateObject5(), (0, _styledTools.theme)('alert.borderRadius.pill'))), (0, _styledTools.ifProp)('dismissible', (0, _styledComponents.css)(_templateObject6(), (0, _styledTools.theme)('alert.padding.dismissibleRight'))));
Alert.defaultProps = {
  theme: _theme["default"]
};
var _default = Alert;
exports["default"] = _default;