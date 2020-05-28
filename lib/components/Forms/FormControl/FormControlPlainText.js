"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styledTools = require("styled-tools");

var _theme = _interopRequireDefault(require("../../../theme"));

var _base = require("../../Utilities/base");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  padding-top: ", ";\n  padding-bottom: ", ";\n  margin-bottom: ", ";\n  line-height: 1.5;\n  background-color: ", ";\n  border: solid ", ";\n  border-width: 1px 0;\n  box-sizing: border-box;\n  ", ";\n  ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    padding-right: ", ";\n    padding-left: ", ";\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: block;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      display: inline-block;\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getDisplay = function getDisplay(props) {
  if (props.inline) {
    return (0, _styledComponents.css)(_templateObject());
  }

  return (0, _styledComponents.css)(_templateObject2());
};

var getPadding = function getPadding(props) {
  return (props.sm || props.lg) && (0, _styledComponents.css)(_templateObject3(), (0, _styledTools.theme)('formControl.plainText.smRight'), (0, _styledTools.theme)('formControl.plainText.smLeft'));
};

var FormControlPlainText = (0, _styledComponents["default"])(_base.Input).attrs({
  readOnly: true
})(_templateObject4(), (0, _styledTools.theme)('formControl.plainText.top'), (0, _styledTools.theme)('formControl.plainText.bottom'), (0, _styledTools.theme)('formControl.plainText.bottom'), (0, _styledTools.theme)('formControl.plainText.colors.default.backgroundColor'), (0, _styledTools.theme)('formControl.plainText.colors.default.borderColor'), function (props) {
  return getDisplay(props);
}, function (props) {
  return getPadding(props);
});
FormControlPlainText.defaultProps = {
  theme: _theme["default"]
};
var _default = FormControlPlainText;
exports["default"] = _default;