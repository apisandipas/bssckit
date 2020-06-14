"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styledTools = require("styled-tools");

var _styledBreakpoints = require("styled-breakpoints");

var _base = require("../../Utilities/base");

var _theme = _interopRequireDefault(require("../../../theme"));

var _functions = require("../../../utils/functions");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n        flex-basis: 0;\n        flex-grow: 1;\n        max-width: none;\n      "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      margin-left: ", "%;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  padding-right: calc(", "px / 2);\n  padding-left: calc(", "px / 2);\n  flex: 0 0 ", "%;\n  max-width: ", "%;\n\n  ", "\n\n  ", "\n  ", "\n\n  ", " {\n\n    ", "\n\n    ", "\n    ", "\n  }\n\n  ", " {\n    ", "\n    ", "\n  }\n\n  ", " {\n    ", "\n    ", "\n  }\n\n  ", " {\n    ", "\n    ", "\n  }\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin-left: ", "%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  flex: 0 0 ", "%;\n  max-width: ", "%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getSizeStyles = function getSizeStyles(size) {
  return (0, _styledComponents.css)(_templateObject(), function (props) {
    return size / props.theme.grid.columns * 100;
  }, function (props) {
    return size / props.theme.grid.columns * 100;
  });
};

var getOffsetStyles = function getOffsetStyles(size) {
  return (0, _styledComponents.css)(_templateObject2(), function (props) {
    return size / props.theme.grid.columns * 100;
  });
};

var hasSize = function hasSize(props) {
  return props.xs || props.sm || props.md || props.lg || props.xl;
};

var Col = (0, _styledComponents["default"])(function (_ref) {
  var span = _ref.span,
      props = _objectWithoutProperties(_ref, ["span"]);

  return _react["default"].createElement(_base.Div, props);
})(_templateObject3(), (0, _styledTools.theme)('grid.gutterWidth'), (0, _styledTools.theme)('grid.gutterWidth'), function (props) {
  return 1 / props.span * 100;
}, function (props) {
  return 1 / props.span * 100;
}, (0, _styledTools.ifProp)('offset', (0, _styledComponents.css)(_templateObject4(), function (props) {
  return 1 / props.offset * 100;
})), function (props) {
  return props.xs && getSizeStyles(props.xs);
}, function (props) {
  return props.xsOffset && getOffsetStyles(props.xsOffset);
}, (0, _styledBreakpoints.up)('sm'), function (props) {
  return !hasSize(props) && (0, _styledComponents.css)(_templateObject5());
}, function (props) {
  return props.sm && getSizeStyles(props.sm);
}, function (props) {
  return props.smOffset && getOffsetStyles(props.smOffset);
}, (0, _styledBreakpoints.up)('md'), function (props) {
  return props.md && getSizeStyles(props.md);
}, function (props) {
  return props.mdOffset && getOffsetStyles(props.mdOffset);
}, (0, _styledBreakpoints.up)('lg'), function (props) {
  return props.lg && getSizeStyles(props.lg);
}, function (props) {
  return props.lgOffset && getOffsetStyles(props.lgOffset);
}, (0, _styledBreakpoints.up)('xl'), function (props) {
  return props.xl && getSizeStyles(props.xl);
}, function (props) {
  return props.xlOffset && getOffsetStyles(props.xlOffset);
});
Col.propTypes = {
  span: (0, _functions.withinRange)(1, 12),
  offset: (0, _functions.withinRange)(1, 11),
  theme: _propTypes["default"].object
};
Col.defaultProps = {
  span: _theme["default"].grid.columns,
  theme: _theme["default"]
};
var _default = Col;
exports["default"] = _default;