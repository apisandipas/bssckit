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

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: block;\n  padding: ", ";\n  border: ", " ", ";\n  border-bottom: none;\n  margin-bottom: -1px;\n  &:first-child {\n    border-top-left-radius: ", ";\n    border-top-right-radius: ", ";\n  };\n  &:last-child {\n    border-bottom: ", "\n    ", ";\n    margin-bottom: 0;\n    border-bottom-right-radius: ", ";\n    border-bottom-left-radius: ", ";\n  };\n  & > a,\n  & > a:hover,\n  & > a:focus {\n    z-index: 1;\n    text-decoration: none;\n  };\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n        &:hover,\n        &:focus,\n        & > a:hover,\n        & > a:focus {\n          cursor: text;\n        }\n      "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n        &:hover,\n        &:focus,\n        & > a:hover,\n        & > a:focus {\n          cursor: pointer;\n        }\n      "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    z-index: 2;\n  "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n        background-color: ", ";\n        border-color: ", ";\n        &:hover,\n        &:focus,\n        & > a:hover,\n        & > a:focus {\n          background-color: ", ";\n        }\n      "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n        &:hover,\n        &:focus,\n        & > a:hover,\n        & > a:focus {\n          background-color: ", ";\n        }\n      "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    border-color: ", ";\n    ", "\n    ", "\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n      background-color: ", ";\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n        & > a,\n        & > a:hover,\n        & > a:focus {\n          color: ", ";\n        }\n      "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n    ", "\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n          & > a,\n          & > a:hover,\n          & > a:focus {\n            color: ", ";\n          }\n        "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      color: ", ";\n      ", "\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n          & > a,\n          & > a:hover,\n          & > a:focus {\n            color: ", ";\n          }\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      color: ", ";\n      ", "\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var color = function color(props) {
  if (props.disabled) {
    return (0, _styledComponents.css)(_templateObject(), (0, _themeFunctions.getColor)(props, 'listGroupItem', 'colorDisabled'), props.action && (0, _styledComponents.css)(_templateObject2(), (0, _themeFunctions.getColor)(props, 'listGroupItem', 'colorDisabled')));
  } else if (props.active) {
    return (0, _styledComponents.css)(_templateObject3(), (0, _themeFunctions.getColor)(props, 'listGroupItem', 'colorActive'), props.action && (0, _styledComponents.css)(_templateObject4(), (0, _themeFunctions.getColor)(props, 'listGroupItem', 'colorActive')));
  }

  return (0, _styledComponents.css)(_templateObject5(), (0, _themeFunctions.getColor)(props, 'listGroupItem', 'color'), props.action && (0, _styledComponents.css)(_templateObject6(), (0, _themeFunctions.getColor)(props, 'listGroupItem', 'color')));
};

var backgroundBorderColor = function backgroundBorderColor(props) {
  if (props.disabled) {
    return (0, _styledComponents.css)(_templateObject7(), (0, _themeFunctions.getColor)(props, 'listGroupItem', 'backgroundColorDisabled'));
  }

  return (0, _styledComponents.css)(_templateObject8(), (0, _themeFunctions.getColor)(props, 'listGroupItem', 'backgroundColor'), (0, _themeFunctions.getColor)(props, 'listGroupItem', 'borderColor'), props.action && (0, _styledComponents.css)(_templateObject9(), (0, _themeFunctions.getColor)(props, 'listGroupItem', 'backgroundColorHoverFocusAction')), props.active && (0, _styledComponents.css)(_templateObject10(), (0, _themeFunctions.getColor)(props, 'listGroupItem', 'backgroundColorActive'), (0, _themeFunctions.getColor)(props, 'listGroupItem', 'borderColorActive'), (0, _themeFunctions.getColor)(props, 'listGroupItem', 'borderColorActive')));
};

var zIndex = function zIndex(props) {
  return props.active && (0, _styledComponents.css)(_templateObject11());
};

var cursor = function cursor(props) {
  return !props.disabled && props.action ? (0, _styledComponents.css)(_templateObject12()) : (0, _styledComponents.css)(_templateObject13());
};

var ListGroupItem = (0, _styledComponents["default"])(_base.Li)(_templateObject14(), function (props) {
  return (0, _themeFunctions.getPadding)(props, 'listGroupItem', 'default');
}, function (props) {
  return (0, _themeFunctions.getBorder)(props, 'listGroupItem', 'default');
}, function (props) {
  return (0, _themeFunctions.getColor)(props, 'listGroupItem', 'borderColor');
}, function (props) {
  return (0, _themeFunctions.getBorderRadius)(props, 'listGroupItem', 'default');
}, function (props) {
  return (0, _themeFunctions.getBorderRadius)(props, 'listGroupItem', 'default');
}, function (props) {
  return (0, _themeFunctions.getBorder)(props, 'listGroupItem', 'default');
}, function (props) {
  if (props.active) {
    return (0, _themeFunctions.getColor)(props, 'listGroupItem', 'borderColorActive');
  }

  return (0, _themeFunctions.getColor)(props, 'listGroupItem', 'borderColor');
}, function (props) {
  return (0, _themeFunctions.getBorderRadius)(props, 'listGroupItem', 'default');
}, function (props) {
  return (0, _themeFunctions.getBorderRadius)(props, 'listGroupItem', 'default');
}, function (props) {
  return color(props);
}, function (props) {
  return backgroundBorderColor(props);
}, function (props) {
  return zIndex(props);
}, function (props) {
  return cursor(props);
});
var _default = ListGroupItem;
exports["default"] = _default;