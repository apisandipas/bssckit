"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Nav = require("../Nav");

var _theme = _interopRequireDefault(require("../../theme"));

var _themeFunctions = require("../../utils/themeFunctions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    white-space: nowrap;\n  "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    line-height: inherit;\n  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    font-size: ", ";\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    padding-top: ", ";\n    padding-bottom: ", ";\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n    &:hover,\n    &:focus {\n      color: ", ";\n    }\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      color: ", ";\n      &:hover,\n      &:focus {\n        color: ", ";\n      }\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      color: ", ";\n      &:hover,\n      &:focus {\n        color: ", ";\n      }\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      color: ", ";\n      &:hover,\n      &:focus {\n        color: ", ";\n      }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      color: ", ";\n      &:hover,\n      &:focus {\n        color: ", ";\n      }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      color: ", ";\n      &:hover,\n      &:focus {\n        color: ", ";\n      }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var color = function color(props) {
  if (props.dark && props.disabled) {
    return (0, _styledComponents.css)(_templateObject(), (0, _themeFunctions.getColor)(props, 'navbarLink', 'colorDisabled'), (0, _themeFunctions.getColor)(props, 'navbarLink', 'colorDisabledHoverFocus'));
  } else if (props.dark && props.active) {
    return (0, _styledComponents.css)(_templateObject2(), (0, _themeFunctions.getColor)(props, 'navbarLink', 'colorActive'), (0, _themeFunctions.getColor)(props, 'navbarLink', 'colorActiveHoverFocus'));
  } else if (props.dark) {
    return (0, _styledComponents.css)(_templateObject3(), (0, _themeFunctions.getColor)(props, 'navbarLink', 'color'), (0, _themeFunctions.getColor)(props, 'navbarLink', 'colorHoverFocus'));
  } else if (props.disabled) {
    return (0, _styledComponents.css)(_templateObject4(), (0, _themeFunctions.getColor)(props, 'navbarLink', 'colorDisabled'), (0, _themeFunctions.getColor)(props, 'navbarLink', 'colorDisabledHoverFocus'));
  } else if (props.active) {
    return (0, _styledComponents.css)(_templateObject5(), (0, _themeFunctions.getColor)(props, 'navbarLink', 'colorActive'), (0, _themeFunctions.getColor)(props, 'navbarLink', 'colorActiveHoverFocus'));
  }

  return (0, _styledComponents.css)(_templateObject6(), (0, _themeFunctions.getColor)(props, 'navbarLink', 'color'), (0, _themeFunctions.getColor)(props, 'navbarLink', 'colorHoverFocus'));
};

var display = function display(props) {
  return props.brand && (0, _styledComponents.css)(_templateObject7());
};

var padding = function padding(props) {
  return props.brand && (0, _styledComponents.css)(_templateObject8(), (0, _themeFunctions.getPadding)(props, 'navbarLink', 'brandTop'), (0, _themeFunctions.getPadding)(props, 'navbarLink', 'brandBottom'));
};

var fontSize = function fontSize(props) {
  return props.brand && (0, _styledComponents.css)(_templateObject9(), (0, _themeFunctions.getFontSize)(props, 'navbarLink', 'lg'));
};

var lineHeight = function lineHeight(props) {
  return props.brand && (0, _styledComponents.css)(_templateObject10());
};

var whiteSpace = function whiteSpace(props) {
  return props.brand && (0, _styledComponents.css)(_templateObject11());
};

var NavbarLink = (0, _styledComponents["default"])(_Nav.NavLink)(_templateObject12(), function (props) {
  return color(props);
}, function (props) {
  return display(props);
}, function (props) {
  return padding(props);
}, function (props) {
  return fontSize(props);
}, function (props) {
  return lineHeight(props);
}, function (props) {
  return whiteSpace(props);
});
NavbarLink.defaultProps = {
  theme: _theme["default"]
};
var _default = NavbarLink;
exports["default"] = _default;