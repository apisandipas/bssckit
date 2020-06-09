"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var listGroupItem = {
  colors: {
    primary: {
      colorDisabled: function colorDisabled(get) {
        return get('palette', 'lightDarker');
      },
      backgroundColorDisabled: function backgroundColorDisabled(get) {
        return get('palette', 'white');
      },
      colorActive: function colorActive(get) {
        return get('palette', 'white');
      },
      color: function color(get) {
        return get('palette', 'primaryDarkest');
      },
      backgroundColor: function backgroundColor(get) {
        return get('palette', 'primaryLighter');
      },
      backgroundColorHoverFocusAction: function backgroundColorHoverFocusAction(get) {
        return get('palette', 'primaryLighter');
      },
      backgroundColorActive: function backgroundColorActive(get) {
        return get('palette', 'primaryDarkest');
      },
      backgroundColorHoverFocusActive: function backgroundColorHoverFocusActive(get) {
        return get('palette', 'primaryDarkest');
      },
      borderColorActive: function borderColorActive(get) {
        return get('palette', 'primaryDarkest');
      },
      borderColor: function borderColor(get) {
        return get('palette', 'weakBorder');
      }
    },
    secondary: {
      colorDisabled: function colorDisabled(get) {
        return get('palette', 'lightDarker');
      },
      backgroundColorDisabled: function backgroundColorDisabled(get) {
        return get('palette', 'white');
      },
      colorActive: function colorActive(get) {
        return get('palette', 'white');
      },
      color: function color(get) {
        return get('palette', 'secondaryDarkest');
      },
      backgroundColor: function backgroundColor(get) {
        return get('palette', 'secondaryLighter');
      },
      backgroundColorHoverFocusAction: function backgroundColorHoverFocusAction(get) {
        return get('palette', 'secondaryLighter');
      },
      backgroundColorActive: function backgroundColorActive(get) {
        return get('palette', 'secondaryDarkest');
      },
      backgroundColorHoverFocusActive: function backgroundColorHoverFocusActive(get) {
        return get('palette', 'secondaryDarkest');
      },
      borderColorActive: function borderColorActive(get) {
        return get('palette', 'secondaryDarkest');
      },
      borderColor: function borderColor(get) {
        return get('palette', 'weakBorder');
      }
    },
    success: {
      colorDisabled: function colorDisabled(get) {
        return get('palette', 'lightDarker');
      },
      backgroundColorDisabled: function backgroundColorDisabled(get) {
        return get('palette', 'white');
      },
      colorActive: function colorActive(get) {
        return get('palette', 'white');
      },
      color: function color(get) {
        return get('palette', 'successDarkest');
      },
      backgroundColor: function backgroundColor(get) {
        return get('palette', 'successLighter');
      },
      backgroundColorHoverFocusAction: function backgroundColorHoverFocusAction(get) {
        return get('palette', 'successLighter');
      },
      backgroundColorActive: function backgroundColorActive(get) {
        return get('palette', 'successDarkest');
      },
      backgroundColorHoverFocusActive: function backgroundColorHoverFocusActive(get) {
        return get('palette', 'successDarkest');
      },
      borderColorActive: function borderColorActive(get) {
        return get('palette', 'successDarkest');
      },
      borderColor: function borderColor(get) {
        return get('palette', 'weakBorder');
      }
    },
    info: {
      colorDisabled: function colorDisabled(get) {
        return get('palette', 'lightDarker');
      },
      backgroundColorDisabled: function backgroundColorDisabled(get) {
        return get('palette', 'white');
      },
      colorActive: function colorActive(get) {
        return get('palette', 'white');
      },
      color: function color(get) {
        return get('palette', 'infoDarkest');
      },
      backgroundColor: function backgroundColor(get) {
        return get('palette', 'infoLighter');
      },
      backgroundColorHoverFocusAction: function backgroundColorHoverFocusAction(get) {
        return get('palette', 'infoLighter');
      },
      backgroundColorActive: function backgroundColorActive(get) {
        return get('palette', 'infoDarkest');
      },
      backgroundColorHoverFocusActive: function backgroundColorHoverFocusActive(get) {
        return get('palette', 'infoDarkest');
      },
      borderColorActive: function borderColorActive(get) {
        return get('palette', 'infoDarkest');
      },
      borderColor: function borderColor(get) {
        return get('palette', 'weakBorder');
      }
    },
    warning: {
      colorDisabled: function colorDisabled(get) {
        return get('palette', 'lightDarker');
      },
      backgroundColorDisabled: function backgroundColorDisabled(get) {
        return get('palette', 'white');
      },
      colorActive: function colorActive(get) {
        return get('palette', 'white');
      },
      color: function color(get) {
        return get('palette', 'warningDarkest');
      },
      backgroundColor: function backgroundColor(get) {
        return get('palette', 'warningLighter');
      },
      backgroundColorHoverFocusAction: function backgroundColorHoverFocusAction(get) {
        return get('palette', 'warningLighter');
      },
      backgroundColorActive: function backgroundColorActive(get) {
        return get('palette', 'warningDarkest');
      },
      backgroundColorHoverFocusActive: function backgroundColorHoverFocusActive(get) {
        return get('palette', 'warningDarkest');
      },
      borderColorActive: function borderColorActive(get) {
        return get('palette', 'warningDarkest');
      },
      borderColor: function borderColor(get) {
        return get('palette', 'weakBorder');
      }
    },
    danger: {
      colorDisabled: function colorDisabled(get) {
        return get('palette', 'lightDarker');
      },
      backgroundColorDisabled: function backgroundColorDisabled(get) {
        return get('palette', 'white');
      },
      colorActive: function colorActive(get) {
        return get('palette', 'white');
      },
      color: function color(get) {
        return get('palette', 'dangerDarkest');
      },
      backgroundColor: function backgroundColor(get) {
        return get('palette', 'dangerLighter');
      },
      backgroundColorHoverFocusAction: function backgroundColorHoverFocusAction(get) {
        return get('palette', 'dangerLighter');
      },
      backgroundColorActive: function backgroundColorActive(get) {
        return get('palette', 'dangerDarkest');
      },
      backgroundColorHoverFocusActive: function backgroundColorHoverFocusActive(get) {
        return get('palette', 'dangerDarkest');
      },
      borderColorActive: function borderColorActive(get) {
        return get('palette', 'dangerDarkest');
      },
      borderColor: function borderColor(get) {
        return get('palette', 'weakBorder');
      }
    },
    light: {
      colorDisabled: function colorDisabled(get) {
        return get('palette', 'lightDarker');
      },
      backgroundColorDisabled: function backgroundColorDisabled(get) {
        return get('palette', 'white');
      },
      colorActive: function colorActive(get) {
        return get('palette', 'white');
      },
      color: function color(get) {
        return get('palette', 'lightDarkest');
      },
      backgroundColor: function backgroundColor(get) {
        return get('palette', 'lightDark');
      },
      backgroundColorHoverFocusAction: function backgroundColorHoverFocusAction(get) {
        return get('palette', 'lightLighter');
      },
      backgroundColorActive: function backgroundColorActive(get) {
        return get('palette', 'lightDarkest');
      },
      backgroundColorHoverFocusActive: function backgroundColorHoverFocusActive(get) {
        return get('palette', 'lightDarkest');
      },
      borderColorActive: function borderColorActive(get) {
        return get('palette', 'lightDarkest');
      },
      borderColor: function borderColor(get) {
        return get('palette', 'weakBorder');
      }
    },
    dark: {
      colorDisabled: function colorDisabled(get) {
        return get('palette', 'lightDarker');
      },
      backgroundColorDisabled: function backgroundColorDisabled(get) {
        return get('palette', 'white');
      },
      colorActive: function colorActive(get) {
        return get('palette', 'white');
      },
      color: function color(get) {
        return get('palette', 'darkDarkest');
      },
      backgroundColor: function backgroundColor(get) {
        return get('palette', 'darkLighter');
      },
      backgroundColorHoverFocusAction: function backgroundColorHoverFocusAction(get) {
        return get('palette', 'darkLighter');
      },
      backgroundColorActive: function backgroundColorActive(get) {
        return get('palette', 'darkDarkest');
      },
      backgroundColorHoverFocusActive: function backgroundColorHoverFocusActive(get) {
        return get('palette', 'darkDarkest');
      },
      borderColorActive: function borderColorActive(get) {
        return get('palette', 'darkDarkest');
      },
      borderColor: function borderColor(get) {
        return get('palette', 'weakBorder');
      }
    },
    "default": {
      colorDisabled: function colorDisabled(get) {
        return get('palette', 'lightDark');
      },
      backgroundColor: function backgroundColor(get) {
        return get('palette', 'white');
      },
      backgroundColorDisabled: function backgroundColorDisabled(get) {
        return get('palette', 'white');
      },
      backgroundColorAction: function backgroundColorAction(get) {
        return get('palette', 'light');
      },
      backgroundColorHoverFocusAction: function backgroundColorHoverFocusAction(get) {
        return get('palette', 'light');
      },
      color: function color(get) {
        return get('palette', 'lightDarkest');
      },
      colorActive: function colorActive(get) {
        return get('palette', 'white');
      },
      colorAction: function colorAction(get) {
        return get('palette', 'lightDarkest');
      },
      borderColor: function borderColor(get) {
        return get('palette', 'weakBorder');
      },
      borderColorActive: function borderColorActive(get) {
        return get('palette', 'primary');
      },
      backgroundColorActive: function backgroundColorActive(get) {
        return get('palette', 'primary');
      }
    }
  },
  padding: {
    "default": '0.75rem 1.25rem'
  },
  border: function border(get) {
    return get('globals', 'border');
  },
  borderRadius: function borderRadius(get) {
    return get('globals', 'borderRadius');
  }
};
var _default = listGroupItem;
exports["default"] = _default;