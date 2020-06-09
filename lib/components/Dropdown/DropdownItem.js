"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _themeFunctions = require("../../utils/themeFunctions");

var _base = require("../Utilities/base");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  padding: ", ";\n  clear: both;\n  font-weight: ", ";\n  color: ", ";\n  text-align: inherit;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0;\n  &:hover,\n  &:focus {\n    color: ", ";\n    text-decoration: none;\n    background-color: ", ";\n  }\n  ", ";\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n    background-color: transparent;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    text-decoration: none;\n    color: ", ";\n    background-color: ", ";\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var dropdownItemActive = function dropdownItemActive(props) {
  return props.active && (0, _styledComponents.css)(_templateObject(), (0, _themeFunctions.getColor)(props, 'dropdownItem', 'colorActive'), (0, _themeFunctions.getColor)(props, 'dropdownItem', 'backgroundColorActive'));
};

var dropdownItemDisabled = function dropdownItemDisabled(props) {
  return props.disabled && (0, _styledComponents.css)(_templateObject2(), (0, _themeFunctions.getColor)(props, 'dropdownItem', 'colorDisabled'));
};

var DropdownItem = (0, _styledComponents["default"])(_base.Div)(_templateObject3(), function (props) {
  return (0, _themeFunctions.getPadding)(props, 'dropdownItem', 'default');
}, function (props) {
  return (0, _themeFunctions.getFontWeight)(props, 'dropdownItem', 'default');
}, function (props) {
  return (0, _themeFunctions.getColor)(props, 'dropdownItem', 'color');
}, function (props) {
  return (0, _themeFunctions.getColor)(props, 'dropdownItem', 'colorHoverFocus');
}, function (props) {
  return (0, _themeFunctions.getColor)(props, 'dropdownItem', 'backgroundColorHoverFocus');
}, function (props) {
  return dropdownItemActive(props);
}, function (props) {
  return dropdownItemDisabled(props);
});
var _default = DropdownItem;
exports["default"] = _default;