"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("styled-components");

var _deepmerge = _interopRequireDefault(require("deepmerge"));

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node]),
  theme: _propTypes["default"].object.isRequired
};
var defaultProps = {
  theme: _theme["default"]
};

var BSThemeProvider = function BSThemeProvider(_ref) {
  var theme = _ref.theme,
      children = _ref.children;
  var finalTheme = (0, _deepmerge["default"])(_theme["default"], theme);
  return _react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: finalTheme
  }, children);
};

BSThemeProvider.propTypes = propTypes;
BSThemeProvider.defaultProps = defaultProps;
var _default = BSThemeProvider;
exports["default"] = _default;