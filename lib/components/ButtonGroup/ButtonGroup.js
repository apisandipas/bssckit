"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _theme = _interopRequireDefault(require("../../theme"));

var _base = require("../Utilities/base");

var _themeFunctions = require("../../utils/themeFunctions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle;\n  & > button {\n    line-height: 1.5;\n    position: relative;\n    flex: 0 1 auto;\n    &:hover {\n      z-index: 1;\n    }\n    ", ";\n  }\n  ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    & > button {\n      &:not(:last-child) {\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0;\n      }\n      &:not(:first-child) {\n        border-top-left-radius: 0;\n        border-bottom-left-radius: 0;\n      }\n    }\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      flex-direction: column;\n      align-items: flex-start;\n      justify-content: center;\n      & > button {\n        width: 100%;\n        &:not(:last-child) {\n          border-bottom-right-radius: 0;\n          border-bottom-left-radius: 0;\n        }\n        &:not(:first-child) {\n          border-top-left-radius: 0;\n          border-top-right-radius: 0;\n        }\n      }\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    padding: ", ";\n    font-size: ", ";\n    line-height: 1.5;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      padding: ", ";\n      font-size: ", ";\n      line-height: 1.5;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      padding: ", ";\n      font-size: ", ";\n      line-height: 1.5;\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var size = function size(props) {
  if (props.lg) {
    return (0, _styledComponents.css)(_templateObject(), (0, _themeFunctions.getPadding)(props, 'buttonGroup', 'lg'), (0, _themeFunctions.getFontSize)(props, 'buttonGroup', 'lg'));
  } else if (props.sm) {
    return (0, _styledComponents.css)(_templateObject2(), (0, _themeFunctions.getPadding)(props, 'buttonGroup', 'sm'), (0, _themeFunctions.getFontSize)(props, 'buttonGroup', 'sm'));
  }

  return (0, _styledComponents.css)(_templateObject3(), (0, _themeFunctions.getPadding)(props, 'buttonGroup', 'default'), (0, _themeFunctions.getFontSize)(props, 'buttonGroup', 'default'));
};

var vertical = function vertical(props) {
  if (props.vertical) {
    return (0, _styledComponents.css)(_templateObject4());
  }

  return (0, _styledComponents.css)(_templateObject5());
};

var ButtonGroup = (0, _styledComponents["default"])(_base.Div)(_templateObject6(), function (props) {
  return size(props);
}, function (props) {
  return vertical(props);
});
ButtonGroup.defaultProps = {
  theme: _theme["default"]
};
var _default = ButtonGroup;
exports["default"] = _default;