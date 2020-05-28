"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _globals = _interopRequireDefault(require("./globals"));

var _palette = _interopRequireDefault(require("./palette"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var alert = {
  colors: {
    primary: {
      text: _palette["default"].primaryDarkest,
      background: _palette["default"].primaryLight,
      border: _palette["default"].primaryLighter,
      borderTop: _palette["default"].primaryLighter,
      hover: _palette["default"].primaryDarkest
    },
    secondary: {
      text: _palette["default"].secondaryDarkest,
      background: _palette["default"].secondaryLight,
      border: _palette["default"].secondaryLighter,
      borderTop: _palette["default"].secondaryLighter,
      hover: _palette["default"].secondaryDarkest
    },
    success: {
      text: _palette["default"].successDarkest,
      background: _palette["default"].successLight,
      border: _palette["default"].successLighter,
      borderTop: _palette["default"].successLighter,
      hover: _palette["default"].successDarkest
    },
    danger: {
      text: _palette["default"].dangerDarkest,
      background: _palette["default"].dangerLight,
      border: _palette["default"].dangerLighter,
      borderTop: _palette["default"].dangerLighter,
      hover: _palette["default"].dangerDarkest
    },
    warning: {
      text: _palette["default"].warningDarkest,
      background: _palette["default"].warningLight,
      border: _palette["default"].warningLighter,
      borderTop: _palette["default"].warningLighter,
      hover: _palette["default"].warningDarkest
    },
    info: {
      text: _palette["default"].infoDarkest,
      background: _palette["default"].infoLight,
      border: _palette["default"].infoLighter,
      borderTop: _palette["default"].infoLighter,
      hover: _palette["default"].infoDarkest
    },
    light: {
      text: _palette["default"].lightDarkest,
      background: _palette["default"].lightLight,
      border: _palette["default"].lightDark,
      borderTop: _palette["default"].lightLighter,
      hover: _palette["default"].darkDarkest
    },
    dark: {
      text: _palette["default"].darkDarkest,
      background: _palette["default"].darkLight,
      border: _palette["default"].darkLighter,
      borderTop: _palette["default"].darkLighter,
      hover: _palette["default"].darkDarkest
    },
    "default": {
      text: _palette["default"].secondaryDarkest,
      background: _palette["default"].secondaryLight,
      border: _palette["default"].secondaryLighter,
      borderTop: _palette["default"].secondaryLighter,
      hover: _palette["default"].secondaryDarkest
    }
  },
  margin: {
    bottom: '1rem'
  },
  padding: {
    "default": '0.75rem 1.25rem',
    dismissibleRight: '4rem'
  },
  border: {
    "default": '1px solid transparent'
  },
  borderRadius: _globals["default"].borderRadius,
  fontWeight: {
    "default": '700'
  }
};
var _default = alert;
exports["default"] = _default;