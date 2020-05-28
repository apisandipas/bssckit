"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _globals = _interopRequireDefault(require("./globals"));

var _palette = _interopRequireDefault(require("./palette"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var button = {
  borderRadius: _globals["default"].borderRadius,
  fontSize: _globals["default"].fontSize,
  border: _globals["default"].border,
  margin: {
    blockTop: '0.5rem',
    dropDownToggleLeft: '0255rem'
  },
  padding: {
    sm: '0.25rem 0.5rem',
    lg: '0.5rem 1rem',
    "default": '0.375rem 0.75rem',
    splitSmRight: '0.375rem',
    splitSmLeft: '0.375rem',
    splitLgRight: '0.75rem',
    splitLgLeft: '0.75rem',
    splitDefaultRight: '0.5625rem',
    splitDefaultLeft: '0.5625rem'
  },
  colors: {
    primary: {
      color: _palette["default"].white,
      colorOutline: _palette["default"].primary,
      colorOutlineHover: _palette["default"].white,
      backgroundColor: _palette["default"].primary,
      backgroundColorDisabled: _palette["default"].primary,
      backgroundColorHoverFocus: _palette["default"].primaryDarker,
      backgroundColorActive: _palette["default"].primaryDark,
      borderColor: _palette["default"].primary,
      borderColorDisabled: _palette["default"].primary,
      borderColorHoverFocus: _palette["default"].primaryDark,
      borderColorActive: _palette["default"].primaryDark,
      boxShadow: _palette["default"].primaryBoxShadow
    },
    secondary: {
      color: _palette["default"].white,
      colorOutline: _palette["default"].secondary,
      colorOutlineHover: _palette["default"].white,
      backgroundColor: _palette["default"].secondary,
      backgroundColorDisabled: _palette["default"].secondary,
      backgroundColorHoverFocus: _palette["default"].secondaryDarker,
      backgroundColorActive: _palette["default"].secondary,
      borderColor: _palette["default"].secondary,
      borderColorDisabled: _palette["default"].secondary,
      borderColorHoverFocus: _palette["default"].secondaryDark,
      borderColorActive: _palette["default"].secondaryDark,
      boxShadow: _palette["default"].secondaryBoxShadow
    },
    success: {
      color: _palette["default"].white,
      colorOutline: _palette["default"].success,
      colorOutlineHover: _palette["default"].white,
      backgroundColor: _palette["default"].success,
      backgroundColorDisabled: _palette["default"].success,
      backgroundColorHoverFocus: _palette["default"].successDarker,
      backgroundColorActive: _palette["default"].successDark,
      borderColor: _palette["default"].success,
      borderColorDisabled: _palette["default"].success,
      borderColorHoverFocus: _palette["default"].successDark,
      borderColorActive: _palette["default"].successDark,
      boxShadow: _palette["default"].successBoxShadow
    },
    danger: {
      color: _palette["default"].white,
      colorOutline: _palette["default"].danger,
      colorOutlineHover: _palette["default"].white,
      backgroundColor: _palette["default"].danger,
      backgroundColorDisabled: _palette["default"].danger,
      backgroundColorHoverFocus: _palette["default"].dangerDarker,
      backgroundColorActive: _palette["default"].dangerDark,
      borderColor: _palette["default"].danger,
      borderColorDisabled: _palette["default"].danger,
      borderColorHoverFocus: _palette["default"].dangerDark,
      borderColorActive: _palette["default"].dangerDark,
      boxShadow: _palette["default"].dangerBoxShadow
    },
    warning: {
      color: _palette["default"].darkerDarker,
      colorOutline: _palette["default"].warning,
      colorOutlineHover: _palette["default"].darkerDarker,
      backgroundColor: _palette["default"].warning,
      backgroundColorDisabled: _palette["default"].warning,
      backgroundColorHoverFocus: _palette["default"].warningDarker,
      backgroundColorActive: _palette["default"].warningDark,
      borderColor: _palette["default"].warning,
      borderColorDisabled: _palette["default"].warning,
      borderColorHoverFocus: _palette["default"].warningDark,
      borderColorActive: _palette["default"].warningDark,
      boxShadow: _palette["default"].warningBoxShadow
    },
    info: {
      color: _palette["default"].white,
      colorOutline: _palette["default"].info,
      colorOutlineHover: _palette["default"].white,
      backgroundColor: _palette["default"].info,
      backgroundColorDisabled: _palette["default"].info,
      backgroundColorHoverFocus: _palette["default"].infoDarker,
      backgroundColorActive: _palette["default"].infoDark,
      borderColor: _palette["default"].info,
      borderColorDisabled: _palette["default"].info,
      borderColorHoverFocus: _palette["default"].infoDark,
      borderColorActive: _palette["default"].infoDark,
      boxShadow: _palette["default"].infoBoxShadow
    },
    light: {
      color: _palette["default"].darkerDarker,
      colorOutline: _palette["default"].light,
      colorOutlineHover: _palette["default"].darkerDarker,
      backgroundColor: _palette["default"].light,
      backgroundColorDisabled: _palette["default"].light,
      backgroundColorHoverFocus: _palette["default"].lightDarker,
      backgroundColorActive: _palette["default"].lightDark,
      borderColor: _palette["default"].light,
      borderColorDisabled: _palette["default"].light,
      borderColorHoverFocus: _palette["default"].lightDark,
      borderColorActive: _palette["default"].lightDark,
      boxShadow: _palette["default"].lightBoxShadow,
      toggle: {
        color: _palette["default"].dark50Alpha,
        borderColor: _palette["default"].dark10Alpha,
        colorHoverFocus: _palette["default"].dark50Alpha,
        borderColorHoverFocus: _palette["default"].dark10Alpha
      }
    },
    dark: {
      color: _palette["default"].white,
      colorOutline: _palette["default"].dark,
      colorOutlineHover: _palette["default"].white,
      backgroundColor: _palette["default"].dark,
      backgroundColorDisabled: _palette["default"].dark,
      backgroundColorHoverFocus: _palette["default"].darkDarker,
      backgroundColorActive: _palette["default"].darkDark,
      borderColor: _palette["default"].dark,
      borderColorDisabled: _palette["default"].dark,
      borderColorHoverFocus: _palette["default"].darkDark,
      borderColorActive: _palette["default"].darkDark,
      boxShadow: _palette["default"].darkBoxShadow,
      toggle: {
        color: _palette["default"].white50Alpha,
        borderColor: _palette["default"].white10Alpha,
        colorHoverFocus: _palette["default"].white50Alpha,
        borderColorHoverFocus: _palette["default"].white10Alpha
      }
    },
    "default": {
      color: _palette["default"].white,
      colorOutline: _palette["default"].secondary,
      colorOutlineHover: _palette["default"].white,
      backgroundColor: _palette["default"].secondary,
      backgroundColorDisabled: _palette["default"].secondary,
      backgroundColorHoverFocus: _palette["default"].secondaryDarker,
      backgroundColorActive: _palette["default"].secondary,
      borderColor: _palette["default"].secondary,
      borderColorDisabled: _palette["default"].secondary,
      borderColorHoverFocus: _palette["default"].secondaryDark,
      borderColorActive: _palette["default"].secondaryDark,
      boxShadow: _palette["default"].secondaryBoxShadow
    }
  }
};
var _default = button;
exports["default"] = _default;