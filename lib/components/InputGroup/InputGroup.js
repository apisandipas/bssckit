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

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  width: 100%;\n  line-height: 1.5;\n  & > input,\n  & > textarea,\n  & > select {\n    position: relative;\n    flex: 1 1 auto;\n    width: 1%;\n    margin-bottom: ", ";\n    &:not(:last-child) {\n      border-top-right-radius: ", ";\n      border-bottom-right-radius: ", ";\n    }\n    &:not(:first-child) {\n      border-top-left-radius: ", ";\n      border-bottom-left-radius: ", ";\n    }\n  }\n  ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n      & > div > span,\n      & > input {\n        padding: ", ";\n      }\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n      & > div > span,\n      & > input {\n        padding: ", ";\n      }\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    & > div > span,\n    & > input {\n      line-height: 1.5;\n      font-size: ", ";\n    }\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      & > div > span,\n      & > input {\n        line-height: 1.5;\n        font-size: ", ";\n      }\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      & > div > span,\n      & > input {\n        line-height: 1.5;\n        font-size: ", ";\n      }\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    & > input {\n      border-radius: ", ";\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      & > input {\n        border-radius: ", ";\n      }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      & > input {\n        border-radius: ", ";\n      }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var borderRadius = function borderRadius(props) {
  if (props.lg) {
    return (0, _styledComponents.css)(_templateObject(), (0, _themeFunctions.getBorderRadius)(props, 'inputGroup', 'lg'));
  } else if (props.sm) {
    return (0, _styledComponents.css)(_templateObject2(), (0, _themeFunctions.getBorderRadius)(props, 'inputGroup', 'sm'));
  }

  return (0, _styledComponents.css)(_templateObject3(), (0, _themeFunctions.getBorderRadius)(props, 'inputGroup', 'default'));
};

var fontSize = function fontSize(props) {
  if (props.lg) {
    return (0, _styledComponents.css)(_templateObject4(), (0, _themeFunctions.getFontSize)(props, 'inputGroup', 'lg'));
  } else if (props.sm) {
    return (0, _styledComponents.css)(_templateObject5(), (0, _themeFunctions.getFontSize)(props, 'inputGroup', 'sm'));
  }

  return (0, _styledComponents.css)(_templateObject6(), (0, _themeFunctions.getFontSize)(props, 'inputGroup', 'default'));
};

var padding = function padding(props) {
  if (props.lg) {
    return (0, _styledComponents.css)(_templateObject7(), (0, _themeFunctions.getPadding)(props, 'inputGroup', 'lg'));
  } else if (props.sm) {
    return (0, _styledComponents.css)(_templateObject8(), (0, _themeFunctions.getPadding)(props, 'inputGroup', 'sm'));
  }

  return '';
};

var InputGroup = (0, _styledComponents["default"])(_base.Div)(_templateObject9(), function (props) {
  return (0, _themeFunctions.getMargin)(props, 'inputGroup', 'bottom');
}, function (props) {
  return (0, _themeFunctions.getBorderRadius)(props, 'inputGroup', 'noRadius');
}, function (props) {
  return (0, _themeFunctions.getBorderRadius)(props, 'inputGroup', 'noRadius');
}, function (props) {
  return (0, _themeFunctions.getBorderRadius)(props, 'inputGroup', 'noRadius');
}, function (props) {
  return (0, _themeFunctions.getBorderRadius)(props, 'inputGroup', 'noRadius');
}, function (props) {
  return borderRadius(props);
}, function (props) {
  return fontSize(props);
}, function (props) {
  return padding(props);
});
var _default = InputGroup;
exports["default"] = _default;