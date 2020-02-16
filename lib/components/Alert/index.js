"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DismissableAlert", {
  enumerable: true,
  get: function get() {
    return _DismissableAlert["default"];
  }
});
exports["default"] = exports.AlertDismissIcon = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _macro = _interopRequireWildcard(require("styled-components/macro"));

var _styledTools = require("styled-tools");

var _base = require("../base");

var _DismissableAlert = _interopRequireDefault(require("./DismissableAlert"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n      padding-right: ", ";\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      border-radius: 10rem;\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      border-radius: 0;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        color: ", ";\n        background-color: ", ";\n        border-color: ", ";\n\n        & > a,\n        & > a:hover {\n          color: ", ";\n          font-weight: ", ";\n        }\n\n        & > h1,\n        & > h2,\n        & > h3,\n        & > h4,\n        & > h5,\n        & > h6 {\n          color: ", ";\n        }\n\n        & > hr {\n          border-top-color: ", ";\n        }\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  padding: ", " ", ";\n  margin-bottom: ", ";\n  border: ", " solid transparent;\n  color: ", ";\n  border-radius: ", ";\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 2rem;\n  cursor: pointer;\n  line-height: 1rem;\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  color: inherit;\n  opacity: 0.5;\n\n  &:hover,\n  &:focus {\n    opacity: 0.75;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var types = [{
  name: 'primary',
  defaultColors: {
    color: 'rgb(0, 64, 133)',
    backgroundColor: 'rgb(204, 229, 255)',
    borderColor: 'rgb(156, 201, 251)'
  }
}, {
  name: 'secondary',
  defaultColors: {
    color: 'rgb(56, 61, 65)',
    backgroundColor: 'rgb(226, 227, 229)',
    borderColor: ' rgb(180, 181, 183)'
  }
}, {
  name: 'success',
  defaultColors: {
    color: 'rgb(21, 87, 36)',
    backgroundColor: 'rgb(212, 237, 218)',
    borderColor: 'rgb(114, 216, 137)'
  }
}, {
  name: 'danger',
  defaultColors: {
    color: 'rgb(114, 28, 36)',
    backgroundColor: 'rgb(248, 215, 218)',
    borderColor: 'rgb(245, 180, 187)'
  }
}, {
  name: 'warning',
  defaultColors: {
    color: 'rgb(133, 100, 4)',
    backgroundColor: 'rgb(255, 243, 205)',
    borderColor: 'rgb(243, 218, 141)'
  }
}, {
  name: 'info',
  defaultColors: {
    color: 'rgb(16, 112, 127)',
    backgroundColor: 'rgb(209, 236, 241)',
    borderColor: 'rgb(163, 214, 222)'
  }
}, {
  name: 'light',
  defaultColors: {
    color: 'rgb(52, 58, 64);',
    backgroundColor: 'rgb(254, 254, 254)',
    borderColor: 'rgb(204, 206, 207)'
  }
}, {
  name: 'dark',
  defaultColors: {
    color: 'gb(23, 26, 29)',
    backgroundColor: 'rgb(214, 216, 217)',
    borderColor: 'rgb(171, 174, 177)'
  }
}];

var AlertDismissIcon = _macro["default"].span.attrs({
  ariaHidden: 'true'
})(_templateObject());

exports.AlertDismissIcon = AlertDismissIcon;
var Alert = (0, _macro["default"])(_base.Div).attrs({
  role: 'alert'
})(_templateObject2(), (0, _styledTools.theme)('alert.paddingX', '.75rem'), (0, _styledTools.theme)('alert.paddingY', '1.25rem'), (0, _styledTools.theme)('alert.marginBottom', '1rem'), (0, _styledTools.theme)('alert.borderWidth', (0, _styledTools.theme)('globals.borderWidth', '1px')), (0, _styledTools.theme)('alert.text'), (0, _styledTools.theme)('alert.borderRadius', (0, _styledTools.theme)('globals.borderRadius', '0.25rem')), types.map(function (_ref) {
  var name = _ref.name,
      _ref$defaultColors = _ref.defaultColors,
      color = _ref$defaultColors.color,
      backgroundColor = _ref$defaultColors.backgroundColor,
      borderColor = _ref$defaultColors.borderColor;
  return (0, _styledTools.ifProp)(name, (0, _macro.css)(_templateObject3(), (0, _styledTools.theme)("colorScheme.".concat(name, "Darkest"), color), (0, _styledTools.theme)("colorScheme.".concat(name, "Light"), backgroundColor), (0, _styledTools.theme)("colorScheme.".concat(name, "Lighter"), borderColor), (0, _styledTools.theme)("colorScheme.".concat(name, "Darkest"), color), (0, _styledTools.theme)('alerts.linkWeight', '700'), (0, _styledTools.theme)("colorScheme.".concat(name, "Darkest"), color), (0, _styledTools.theme)("colorScheme.".concat(name, "Darkest"), color)));
}), (0, _styledTools.ifProp)('noRadius', (0, _macro.css)(_templateObject4())), (0, _styledTools.ifProp)('pill', (0, _macro.css)(_templateObject5())), (0, _styledTools.ifProp)('dismissible', (0, _macro.css)(_templateObject6(), (0, _styledTools.theme)('alert.paddingRight', '4rem'))));
var _default = Alert;
exports["default"] = _default;