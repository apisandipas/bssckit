"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styledTools = require("styled-tools");

var _consts = require("../../utils/consts");

var _theme = _interopRequireDefault(require("../../theme"));

var _base = require("../Utilities/base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n        ", ";\n        ", ";\n        border: ", " ", ";\n        &:last-child {\n          border-bottom: ", " ", ";\n        }\n      "]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: block;\n  padding: ", ";\n  border: ", " ", ";\n  border-bottom: none;\n  margin-bottom: -1px;\n  &:first-child {\n    border-top-left-radius: ", ";\n    border-top-right-radius: ", ";\n  }\n  &:last-child {\n    border-bottom: ", " ", ";\n    margin-bottom: 0;\n    border-bottom-right-radius: ", ";\n    border-bottom-left-radius: ", ";\n  }\n  & > a,\n  & > a:hover,\n  & > a:focus {\n    z-index: 1;\n    text-decoration: none;\n  }\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n\n  ", "\n"]);

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

var getColor = function getColor(props, context) {
  if (props.disabled) {
    return (0, _styledComponents.css)(_templateObject(), (0, _styledTools.theme)("listGroupItem.colors.".concat(context, ".colorDisabled")), props.action && (0, _styledComponents.css)(_templateObject2(), (0, _styledTools.theme)("listGroupItem.colors.".concat(context, ".colorDisabled"))));
  } else if (props.active) {
    return (0, _styledComponents.css)(_templateObject3(), (0, _styledTools.theme)("listGroupItem.colors.".concat(context, ".colorActive")), props.action && (0, _styledComponents.css)(_templateObject4(), (0, _styledTools.theme)("listGroupItem.colors.".concat(context, ".colorActive"))));
  }

  return (0, _styledComponents.css)(_templateObject5(), (0, _styledTools.theme)("listGroupItem.colors.".concat(context, ".color")), props.action && (0, _styledComponents.css)(_templateObject6(), (0, _styledTools.theme)("listGroupItem.colors.".concat(context, ".color"))));
};

var getBackgroundBorderColor = function getBackgroundBorderColor(props, context) {
  if (props.disabled) {
    return (0, _styledComponents.css)(_templateObject7(), (0, _styledTools.theme)("listGroupItem.colors.".concat(context, ".backgroundColorDisabled")));
  }

  return (0, _styledComponents.css)(_templateObject8(), (0, _styledTools.theme)("listGroupItem.colors.".concat(context, ".backgroundColor")), (0, _styledTools.theme)("listGroupItem.colors.".concat(context, ".borderColor")), props.action && (0, _styledComponents.css)(_templateObject9(), (0, _styledTools.theme)("listGroupItem.colors.".concat(context, ".backgroundColorHoverFocusAction"))), props.active && (0, _styledComponents.css)(_templateObject10(), (0, _styledTools.theme)("listGroupItem.colors.".concat(context, ".backgroundColorActive")), (0, _styledTools.theme)("listGroupItem.colors.".concat(context, ".borderColorActive")), (0, _styledTools.theme)("listGroupItem.colors.".concat(context, ".borderColorActive"))));
};

var getBorderColor = function getBorderColor(props, context) {
  if (props.active) {
    return (0, _styledTools.theme)("listGroupItem.colors.".concat(context, ".borderColorActive"));
  }

  return (0, _styledTools.theme)("listGroupItem.colors.".concat(context, ".borderColor"));
};

var getZIndex = function getZIndex(props) {
  return props.active && (0, _styledComponents.css)(_templateObject11());
};

var getCursor = function getCursor(props) {
  return !props.disabled && props.action ? (0, _styledComponents.css)(_templateObject12()) : (0, _styledComponents.css)(_templateObject13());
};

var ListGroupItem = (0, _styledComponents["default"])(_base.Li)(_templateObject14(), (0, _styledTools.theme)('listGroupItem.padding.default'), (0, _styledTools.theme)('listGroupItem.border.default'), function (props) {
  return getBorderColor(props, 'default');
}, (0, _styledTools.theme)('listGroupItem.borderRadius.default'), (0, _styledTools.theme)('listGroupItem.borderRadius.default'), (0, _styledTools.theme)('listGroupItem.border.default'), function (props) {
  return getBorderColor(props, 'default');
}, (0, _styledTools.theme)('listGroupItem.borderRadius.default'), (0, _styledTools.theme)('listGroupItem.borderRadius.default'), function (props) {
  return getColor(props, 'default');
}, function (props) {
  return getBackgroundBorderColor(props, 'default');
}, function (props) {
  return getZIndex(props);
}, function (props) {
  return getCursor(props);
}, _consts.themeContexts.map(function (context) {
  return (0, _styledTools.ifProp)(context, (0, _styledComponents.css)(_templateObject15(), function (props) {
    return getColor(props, context);
  }, function (props) {
    return getBackgroundBorderColor(props, context);
  }, (0, _styledTools.theme)('listGroupItem.border.default'), function (props) {
    return getBorderColor(props, context);
  }, (0, _styledTools.theme)('listGroupItem.border.default'), function (props) {
    return getBorderColor(props, context);
  }));
}));
ListGroupItem.defaultProps = {
  theme: _theme["default"]
};
var _default = ListGroupItem;
exports["default"] = _default;