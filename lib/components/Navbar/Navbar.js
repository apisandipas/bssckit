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

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  padding: ", ";\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    @media (max-width: ", ") {\n      & > nav:not(:last-child) {\n        display: flex !important;\n        width: 100%;\n        justify-content: space-between;\n      }\n    }\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    border-color: ", ";\n  "]);

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

var color = function color(props) {
  return (0, _styledComponents.css)(_templateObject(), (0, _themeFunctions.getColor)(props, 'navbar', 'color'));
};

var borderColor = function borderColor(props) {
  return (0, _styledComponents.css)(_templateObject2(), (0, _themeFunctions.getColor)(props, 'navbar', 'borderColor'));
};

var backgroundColor = function backgroundColor(props) {
  return (0, _styledComponents.css)(_templateObject3(), (0, _themeFunctions.getColor)(props, 'navbar', 'backgroundColor'));
};

var navbarExpand = function navbarExpand(props) {
  return (props.expandSm || props.expandMd || props.expandLg || props.expandXl) && (0, _styledComponents.css)(_templateObject4(), (0, _themeFunctions.getBreakpointSize)(props));
};

var Navbar = (0, _styledComponents["default"])(_Nav.Nav)(_templateObject5(), function (props) {
  return (0, _themeFunctions.getPadding)(props, 'navbar', 'default');
}, function (props) {
  return color(props);
}, function (props) {
  return borderColor(props);
}, function (props) {
  return backgroundColor(props);
}, function (props) {
  return navbarExpand(props);
});
Navbar.defaultProps = {
  theme: _theme["default"]
};
var _default = Navbar;
exports["default"] = _default;