"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _globals = _interopRequireDefault(require("./globals"));

var _palette = _interopRequireDefault(require("./palette"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var formControl = {
  borderRadius: _globals["default"].borderRadius,
  fontSize: _globals["default"].fontSize,
  border: _globals["default"].border,
  colors: {
    "default": {
      color: _palette["default"].dark,
      background: _palette["default"].white,
      border: _palette["default"].darkLighter,
      borderFocus: _palette["default"].darkLight,
      boxShadowFocus: _palette["default"].darkerBoxShadow,
      placeholder: _palette["default"].secondary,
      backgroundColorDisabledReadonly: _palette["default"].whiteDark,
      borderValid: _palette["default"].success,
      formControlBoxShadowValid: _palette["default"].successBoxShadow,
      borderInvalid: _palette["default"].danger,
      formControlBoxShadowInvalid: _palette["default"].dangerBoxShadow
    }
  },
  boxShadow: {
    "default": '0 0 0 0.2rem'
  },
  padding: {
    smRight: '0',
    smLeft: '0',
    lgRight: '0',
    lgLeft: '0',
    smPadding: '0.25rem 0.5rem',
    lgPadding: '0.5rem 1rem',
    defaultPadding: '0.375rem 0.75rem'
  },
  height: {
    select: 'calc(2.25rem + 2px)',
    selectLg: 'calc(2.875rem + 2px)',
    selectSm: 'calc(1.8125rem + 2px)'
  },
  plainText: {
    colors: {
      "default": {
        backgroundColor: _palette["default"].transparent,
        borderColor: _palette["default"].transparent
      }
    },
    padding: {
      top: '0.375rem',
      bottom: '0.375rem',
      smRight: '0',
      smLeft: '0'
    },
    margin: {
      bottom: '0'
    }
  }
};
var _default = formControl;
exports["default"] = _default;