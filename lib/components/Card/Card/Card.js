"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _theme = _interopRequireDefault(require("../../../theme"));

var _base = require("../../Utilities/base");

var _themeFunctions = require("../../../utils/themeFunctions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  height: 100%;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: ", ";\n  background-clip: border-box;\n  border: ", " ", ";\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    border-radius: ", ";\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      border-radius: ", ";\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var borderRadius = function borderRadius(props) {
  if (props.noRadius) {
    return (0, _styledComponents.css)(_templateObject(), (0, _themeFunctions.getBorderRadius)(props, 'card', 'noRadius'));
  }

  return (0, _styledComponents.css)(_templateObject2(), (0, _themeFunctions.getBorderRadius)(props, 'card', 'default'));
};

var Card = (0, _styledComponents["default"])(_base.Div)(_templateObject3(), function (props) {
  return (0, _themeFunctions.getColor)(props, 'card', 'backgroundColor');
}, function (props) {
  return (0, _themeFunctions.getBorder)(props, 'card', 'default');
}, function (props) {
  return (0, _themeFunctions.getColor)(props, 'card', 'borderColor');
}, function (props) {
  return borderRadius(props);
});
Card.defaultProps = {
  theme: _theme["default"]
};
var _default = Card;
exports["default"] = _default;