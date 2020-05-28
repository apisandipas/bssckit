"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _globals = _interopRequireDefault(require("./globals"));

var _palette = _interopRequireDefault(require("./palette"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var badge = {
  colors: {
    primary: {
      backgroundColor: _palette["default"].primary,
      backgroundColorHoverFocus: _palette["default"].primaryDarker,
      color: _palette["default"].white,
      linkColor: _palette["default"].white
    },
    secondary: {
      backgroundColor: _palette["default"].secondary,
      backgroundColorHoverFocus: _palette["default"].secondaryDarker,
      color: _palette["default"].white,
      linkColor: _palette["default"].white
    },
    success: {
      backgroundColor: _palette["default"].success,
      backgroundColorHoverFocus: _palette["default"].successDarker,
      color: _palette["default"].white,
      linkColor: _palette["default"].white
    },
    danger: {
      backgroundColor: _palette["default"].danger,
      backgroundColorHoverFocus: _palette["default"].dangerDarker,
      color: _palette["default"].white,
      linkColor: _palette["default"].white
    },
    warning: {
      backgroundColor: _palette["default"].warning,
      backgroundColorHoverFocus: _palette["default"].warningDarker,
      color: _palette["default"].darker,
      linkColor: _palette["default"].darker
    },
    info: {
      backgroundColor: _palette["default"].info,
      backgroundColorHoverFocus: _palette["default"].infoDarker,
      color: _palette["default"].white,
      linkColor: _palette["default"].white
    },
    light: {
      backgroundColor: _palette["default"].light,
      backgroundColorHoverFocus: _palette["default"].lightDarker,
      color: _palette["default"].darker,
      linkColor: _palette["default"].darker
    },
    dark: {
      backgroundColor: _palette["default"].dark,
      backgroundColorHoverFocus: _palette["default"].darkDarker,
      color: _palette["default"].white,
      linkColor: _palette["default"].white
    },
    "default": {
      backgroundColor: _palette["default"].secondary,
      backgroundColorHoverFocus: _palette["default"].secondaryDarker,
      color: _palette["default"].white,
      linkColor: _palette["default"].white
    }
  },
  padding: {
    pill: '0.25rem 0.6rem',
    "default": '0.25rem 0.4rem'
  },
  fontWeight: {
    "default": '700'
  },
  borderRadius: _globals["default"].borderRadius
};
var _default = badge;
exports["default"] = _default;