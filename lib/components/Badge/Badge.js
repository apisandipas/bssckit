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

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  font-size: 75%;\n  font-weight: ", ";\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  position: relative;\n  top: -1px;\n  &:empty {\n    display: none;\n  };\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    & > a {\n      color: ", ";\n      text-decoration: none;\n      background-color: ", ";\n    }\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n      & > a {\n        color: ", ";\n        text-decoration: none;\n        background-color: ", ";\n        &:hover,\n        &:focus {\n          text-decoration: none;\n          background-color: ", ";\n        }\n      }\n      &:hover,\n      &:focus {\n        cursor: pointer;\n        background-color: ", ";\n        & > a {\n          background-color: ", ";\n        }\n      }\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    padding: ", ";\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      padding: ", ";\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    border-radius: ", ";\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      border-radius: ", ";\n    "]);

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
  if (props.pill) {
    return (0, _styledComponents.css)(_templateObject(), (0, _themeFunctions.getBorderRadius)(props, 'badge', 'pill'));
  } else if (props.noRadius) {
    return (0, _styledComponents.css)(_templateObject2(), (0, _themeFunctions.getBorderRadius)(props, 'badge', 'noRadius'));
  }

  return (0, _styledComponents.css)(_templateObject3(), (0, _themeFunctions.getBorderRadius)(props, 'badge', 'default'));
};

var padding = function padding(props) {
  if (props.pill) {
    return (0, _styledComponents.css)(_templateObject4(), (0, _themeFunctions.getPadding)(props, 'badge', 'pill'));
  }

  return (0, _styledComponents.css)(_templateObject5(), (0, _themeFunctions.getPadding)(props, 'badge', 'default'));
};

var backgroundColor = function backgroundColor(props) {
  return (0, _styledComponents.css)(_templateObject6(), (0, _themeFunctions.getColor)(props, 'badge', 'backgroundColor'));
};

var color = function color(props) {
  return (0, _styledComponents.css)(_templateObject7(), (0, _themeFunctions.getColor)(props, 'badge', 'color'));
};

var badgeLink = function badgeLink(props) {
  if (props.action) {
    return (0, _styledComponents.css)(_templateObject8(), (0, _themeFunctions.getColor)(props, 'badge', 'linkColor'), (0, _themeFunctions.getColor)(props, 'badge', 'backgroundColor'), (0, _themeFunctions.getColor)(props, 'badge', 'backgroundColorHoverFocus'), (0, _themeFunctions.getColor)(props, 'badge', 'backgroundColorHoverFocus'), (0, _themeFunctions.getColor)(props, 'badge', 'backgroundColorHoverFocus'));
  }

  return (0, _styledComponents.css)(_templateObject9(), (0, _themeFunctions.getColor)(props, 'badge', 'linkColor'), (0, _themeFunctions.getColor)(props, 'badge', 'backgroundColor'));
};

var Badge = (0, _styledComponents["default"])(_base.Span)(_templateObject10(), function (props) {
  return (0, _themeFunctions.getFontWeight)(props, 'badge', 'default');
}, function (props) {
  return borderRadius(props);
}, function (props) {
  return padding(props);
}, function (props) {
  return color(props);
}, function (props) {
  return backgroundColor(props);
}, function (props) {
  return badgeLink(props);
});
var _default = Badge;
exports["default"] = _default;