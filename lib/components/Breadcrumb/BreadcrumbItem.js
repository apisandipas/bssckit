"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _base = require("../Utilities/base");

var _themeFunctions = require("../../utils/themeFunctions");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  &:not(:first-child)::before {\n    display: inline-block;\n    padding-right: ", ";\n    padding-left: ", ";\n    color: ", ";\n    content: '/';\n  }\n  & + &:hover::before {\n    text-decoration: none;\n  }\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var active = function active(props) {
  return props.active && (0, _styledComponents.css)(_templateObject(), (0, _themeFunctions.getColor)(props, 'breadcrumbItem', 'color'));
};

var BreadcrumbItem = (0, _styledComponents["default"])(_base.Li)(_templateObject2(), function (props) {
  return (0, _themeFunctions.getPadding)(props, 'breadcrumbItem', 'right');
}, function (props) {
  return (0, _themeFunctions.getPadding)(props, 'breadcrumbItem', 'left');
}, function (props) {
  return (0, _themeFunctions.getColor)(props, 'breadcrumbItem', 'color');
}, active);
var _default = BreadcrumbItem;
exports["default"] = _default;