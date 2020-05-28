"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _palette = _interopRequireDefault(require("../theme/palette"));

var _globals = _interopRequireDefault(require("../theme/globals"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var listGroupItem = {
  colors: {
    primary: {
      colorDisabled: _palette["default"].lightDarker,
      backgroundColorDisabled: _palette["default"].white,
      colorActive: _palette["default"].white,
      color: _palette["default"].primaryDarkest,
      backgroundColor: _palette["default"].primaryLighter,
      backgroundColorHoverFocusAction: _palette["default"].primaryLighter,
      backgroundColorActive: _palette["default"].primaryDarkest,
      backgroundColorHoverFocusActive: _palette["default"].primaryDarkest,
      borderColorActive: _palette["default"].primaryDarkest,
      borderColor: _palette["default"].weakBorder
    },
    secondary: {
      colorDisabled: _palette["default"].lightDarker,
      backgroundColorDisabled: _palette["default"].white,
      colorActive: _palette["default"].white,
      color: _palette["default"].secondaryDarkest,
      backgroundColor: _palette["default"].secondaryLighter,
      backgroundColorHoverFocusAction: _palette["default"].secondaryLighter,
      backgroundColorActive: _palette["default"].secondaryDarkest,
      backgroundColorHoverFocusActive: _palette["default"].secondaryDarkest,
      borderColorActive: _palette["default"].secondaryDarkest,
      borderColor: _palette["default"].weakBorder
    },
    success: {
      colorDisabled: _palette["default"].lightDarker,
      backgroundColorDisabled: _palette["default"].white,
      colorActive: _palette["default"].white,
      color: _palette["default"].successDarkest,
      backgroundColor: _palette["default"].successLighter,
      backgroundColorHoverFocusAction: _palette["default"].successLighter,
      backgroundColorActive: _palette["default"].successDarkest,
      backgroundColorHoverFocusActive: _palette["default"].successDarkest,
      borderColorActive: _palette["default"].successDarkest,
      borderColor: _palette["default"].weakBorder
    },
    info: {
      colorDisabled: _palette["default"].lightDarker,
      backgroundColorDisabled: _palette["default"].white,
      colorActive: _palette["default"].white,
      color: _palette["default"].infoDarkest,
      backgroundColor: _palette["default"].infoLighter,
      backgroundColorHoverFocusAction: _palette["default"].infoLighter,
      backgroundColorActive: _palette["default"].infoDarkest,
      backgroundColorHoverFocusActive: _palette["default"].infoDarkest,
      borderColorActive: _palette["default"].infoDarkest,
      borderColor: _palette["default"].weakBorder
    },
    warning: {
      colorDisabled: _palette["default"].lightDarker,
      backgroundColorDisabled: _palette["default"].white,
      colorActive: _palette["default"].white,
      color: _palette["default"].warningDarkest,
      backgroundColor: _palette["default"].warningLighter,
      backgroundColorHoverFocusAction: _palette["default"].warningLighter,
      backgroundColorActive: _palette["default"].warningDarkest,
      backgroundColorHoverFocusActive: _palette["default"].warningDarkest,
      borderColorActive: _palette["default"].warningDarkest,
      borderColor: _palette["default"].weakBorder
    },
    danger: {
      colorDisabled: _palette["default"].lightDarker,
      backgroundColorDisabled: _palette["default"].white,
      colorActive: _palette["default"].white,
      color: _palette["default"].dangerDarkest,
      backgroundColor: _palette["default"].dangerLighter,
      backgroundColorHoverFocusAction: _palette["default"].dangerLighter,
      backgroundColorActive: _palette["default"].dangerDarkest,
      backgroundColorHoverFocusActive: _palette["default"].dangerDarkest,
      borderColorActive: _palette["default"].dangerDarkest,
      borderColor: _palette["default"].weakBorder
    },
    light: {
      colorDisabled: _palette["default"].lightDarker,
      backgroundColorDisabled: _palette["default"].white,
      colorActive: _palette["default"].white,
      color: _palette["default"].lightDarkest,
      backgroundColor: _palette["default"].lightDark,
      backgroundColorHoverFocusAction: _palette["default"].lightLighter,
      backgroundColorActive: _palette["default"].lightDarkest,
      backgroundColorHoverFocusActive: _palette["default"].lightDarkest,
      borderColorActive: _palette["default"].lightDarkest,
      borderColor: _palette["default"].weakBorder
    },
    dark: {
      colorDisabled: _palette["default"].lightDarker,
      backgroundColorDisabled: _palette["default"].white,
      colorActive: _palette["default"].white,
      color: _palette["default"].darkDarkest,
      backgroundColor: _palette["default"].darkLighter,
      backgroundColorHoverFocusAction: _palette["default"].darkLighter,
      backgroundColorActive: _palette["default"].darkDarkest,
      backgroundColorHoverFocusActive: _palette["default"].darkDarkest,
      borderColorActive: _palette["default"].darkDarkest,
      borderColor: _palette["default"].weakBorder
    },
    "default": {
      colorDisabled: _palette["default"].lightDark,
      backgroundColor: _palette["default"].white,
      backgroundColorDisabled: _palette["default"].white,
      backgroundColorAction: _palette["default"].light,
      backgroundColorHoverFocusAction: _palette["default"].light,
      color: _palette["default"].lightDarkest,
      colorActive: _palette["default"].white,
      colorAction: _palette["default"].lightDarkest,
      borderColor: _palette["default"].weakBorder,
      borderColorActive: _palette["default"].primary,
      backgroundColorActive: _palette["default"].primary
    }
  },
  padding: {
    "default": '0.75rem 1.25rem'
  },
  border: _globals["default"].border,
  borderRadius: _globals["default"].borderRadius
};
var _default = listGroupItem;
exports["default"] = _default;