"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _base = require("../Utilities/base");

var _theme = _interopRequireDefault(require("../../theme"));

var _themeFunctions = require("../../utils/themeFunctions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  display: block;\n  height: 0.4rem;\n  &::before {\n    position: absolute;\n    content: '';\n    border-color: transparent;\n    border-style: solid;\n  }\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    right: 0;\n    height: 100%;\n    &::before {\n      left: 0;\n      top: calc(50% - 0.35rem);\n      border-width: 0.4rem 0 0.4rem 0.4rem;\n      border-left-color: ", ";\n    }\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    left: 0;\n    height: 100%;\n    &::before {\n      right: 0;\n      top: calc(50% - 0.35rem);\n      border-width: 0.4rem 0.4rem 0.4rem 0;\n      border-right-color: ", ";\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    top: 0;\n    width: 100%;\n    &::before {\n      bottom: 0.4rem;\n      left: calc(50% - 0.35rem);\n      border-width: 0 0.4rem 0.4rem;\n      border-bottom-color: ", ";\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    bottom: 0;\n    width: 100%;\n    &::before {\n      top: 0.4rem;\n      left: calc(50% - 0.35rem);\n      border-width: 0.4rem 0.4rem 0;\n      border-top-color: ", ";\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var tooltipArrowTop = function tooltipArrowTop(props) {
  return props.placement === 'top' && (0, _styledComponents.css)(_templateObject(), (0, _themeFunctions.getColor)(props, 'tooltipArrow', 'borderColor'));
};

var tooltipArrowBottom = function tooltipArrowBottom(props) {
  return props.placement === 'bottom' && (0, _styledComponents.css)(_templateObject2(), (0, _themeFunctions.getColor)(props, 'tooltipArrow', 'borderColor'));
};

var tooltipArrowRight = function tooltipArrowRight(props) {
  return props.placement === 'right' && (0, _styledComponents.css)(_templateObject3(), (0, _themeFunctions.getColor)(props, 'tooltipArrow', 'borderColor'));
};

var tooltipArrowLeft = function tooltipArrowLeft(props) {
  return props.placement === 'left' && (0, _styledComponents.css)(_templateObject4(), (0, _themeFunctions.getColor)(props, 'tooltipArrow', 'borderColor'));
};

var TooltipArrow = (0, _styledComponents["default"])(_base.Div)(_templateObject5(), tooltipArrowTop, tooltipArrowRight, tooltipArrowBottom, tooltipArrowLeft);
TooltipArrow.defaultProps = {
  theme: _theme["default"]
};
var _default = TooltipArrow;
exports["default"] = _default;