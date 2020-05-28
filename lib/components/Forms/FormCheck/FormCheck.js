"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styledTools = require("styled-tools");

var _theme = _interopRequireDefault(require("../../../theme"));

var _base = require("../../Utilities/base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  box-sizing: border-box;\n  & > label {\n    margin-bottom: ", ";\n  };\n  & > input {\n    position: static;\n    margin-top: ", ";\n    margin-right:", ";\n    margin-left: ", ";\n  };\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    margin-right: ", ";\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    padding-left: ", ";\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    align-items: center;\n  "]);

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
  var data = _taggedTemplateLiteral(["\n      display: inline-flex;\n    "]);

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

var getAlignItems = function getAlignItems(props) {
  return props.inline && (0, _styledComponents.css)(_templateObject3());
};

var getPaddingLeft = function getPaddingLeft(props) {
  return props.inline && (0, _styledComponents.css)(_templateObject4(), (0, _styledTools.theme)('formCheck.padding.inlineLeft'));
};

var getMarginRight = function getMarginRight(props) {
  return props.inline && (0, _styledComponents.css)(_templateObject5(), (0, _styledTools.theme)('formCheck.margin.inlineRight'));
};

var FormCheck = (0, _styledComponents["default"])(_base.Div)(_templateObject6(), (0, _styledTools.theme)('formCheck.margin.labelBottom'), (0, _styledTools.theme)('formCheck.margin.inputTop'), (0, _styledTools.theme)('formCheck.margin.inputRight'), (0, _styledTools.theme)('formCheck.margin.inputLeft'), function (props) {
  return getDisplay(props);
}, function (props) {
  return getAlignItems(props);
}, function (props) {
  return getPaddingLeft(props);
}, function (props) {
  return getMarginRight(props);
});
FormCheck.defaultProps = {
  props: _theme["default"]
};
var _default = FormCheck;
exports["default"] = _default;