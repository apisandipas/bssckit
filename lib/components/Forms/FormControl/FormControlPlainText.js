"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _themeFunctions = require("../../../utils/themeFunctions");

var _base = require("../../Utilities/base");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var display = function display(props) {
  if (props.inline) {
    return (0, _styledComponents.css)(_templateObject());
  }

  return (0, _styledComponents.css)(_templateObject2());
};

var padding = function padding(props) {
  return (props.sm || props.lg) && (0, _styledComponents.css)(_templateObject3(), (0, _themeFunctions.getPadding)(props, 'formControlPlainText', 'smRight'), (0, _themeFunctions.getPadding)(props, 'formControlPlainText', 'smLeft'));
};

var FormControlPlainText = (0, _styledComponents["default"])(_base.Input)(_templateObject4(), function (props) {
  return (0, _themeFunctions.getPadding)(props, 'formControlPlainText', 'top');
}, function (props) {
  return (0, _themeFunctions.getPadding)(props, 'formControlPlainText', 'bottom');
}, function (props) {
  return (0, _themeFunctions.getMargin)(props, 'formControlPlainText', 'bottom');
}, function (props) {
  return (0, _themeFunctions.getColor)(props, 'formControlPlainText', 'backgroundColor');
}, function (props) {
  return (0, _themeFunctions.getColor)(props, 'formControlPlainText', 'borderColor');
}, function (props) {
  return display(props);
}, function (props) {
  return padding(props);
});
var _default = FormControlPlainText;
exports["default"] = _default;