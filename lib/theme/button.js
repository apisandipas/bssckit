"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var button = {
  colors: {
    primary: {
      color: function color(get) {
        return get('palette', 'white');
      },
      colorOutline: function colorOutline(get) {
        return get('palette', 'primary');
      },
      colorOutlineHover: function colorOutlineHover(get) {
        return get('palette', 'white');
      },
      backgroundColor: function backgroundColor(get) {
        return get('palette', 'primary');
      },
      backgroundColorDisabled: function backgroundColorDisabled(get) {
        return get('palette', 'primary');
      },
      backgroundColorHoverFocus: function backgroundColorHoverFocus(get) {
        return get('palette', 'primaryDarker');
      },
      backgroundColorActive: function backgroundColorActive(get) {
        return get('palette', 'primaryDark');
      },
      borderColor: function borderColor(get) {
        return get('palette', 'primary');
      },
      borderColorDisabled: function borderColorDisabled(get) {
        return get('palette', 'primary');
      },
      borderColorHoverFocus: function borderColorHoverFocus(get) {
        return get('palette', 'primaryDark');
      },
      borderColorActive: function borderColorActive(get) {
        return get('palette', 'primaryDark');
      },
      boxShadow: function boxShadow(get) {
        return get('palette', 'primaryBoxShadow');
      }
    },
    secondary: {
      color: function color(get) {
        return get('palette', 'white');
      },
      colorOutline: function colorOutline(get) {
        return get('palette', 'secondary');
      },
      colorOutlineHover: function colorOutlineHover(get) {
        return get('palette', 'white');
      },
      backgroundColor: function backgroundColor(get) {
        return get('palette', 'secondary');
      },
      backgroundColorDisabled: function backgroundColorDisabled(get) {
        return get('palette', 'secondary');
      },
      backgroundColorHoverFocus: function backgroundColorHoverFocus(get) {
        return get('palette', 'secondaryDarker');
      },
      backgroundColorActive: function backgroundColorActive(get) {
        return get('palette', 'secondary');
      },
      borderColor: function borderColor(get) {
        return get('palette', 'secondary');
      },
      borderColorDisabled: function borderColorDisabled(get) {
        return get('palette', 'secondary');
      },
      borderColorHoverFocus: function borderColorHoverFocus(get) {
        return get('palette', 'secondaryDark');
      },
      borderColorActive: function borderColorActive(get) {
        return get('palette', 'secondaryDark');
      },
      boxShadow: function boxShadow(get) {
        return get('palette', 'secondaryBoxShadow');
      }
    },
    success: {
      color: function color(get) {
        return get('palette', 'white');
      },
      colorOutline: function colorOutline(get) {
        return get('palette', 'success');
      },
      colorOutlineHover: function colorOutlineHover(get) {
        return get('palette', 'white');
      },
      backgroundColor: function backgroundColor(get) {
        return get('palette', 'success');
      },
      backgroundColorDisabled: function backgroundColorDisabled(get) {
        return get('palette', 'success');
      },
      backgroundColorHoverFocus: function backgroundColorHoverFocus(get) {
        return get('palette', 'successDarker');
      },
      backgroundColorActive: function backgroundColorActive(get) {
        return get('palette', 'successDark');
      },
      borderColor: function borderColor(get) {
        return get('palette', 'success');
      },
      borderColorDisabled: function borderColorDisabled(get) {
        return get('palette', 'success');
      },
      borderColorHoverFocus: function borderColorHoverFocus(get) {
        return get('palette', 'successDark');
      },
      borderColorActive: function borderColorActive(get) {
        return get('palette', 'successDark');
      },
      boxShadow: function boxShadow(get) {
        return get('palette', 'successBoxShadow');
      }
    },
    danger: {
      color: function color(get) {
        return get('palette', 'white');
      },
      colorOutline: function colorOutline(get) {
        return get('palette', 'danger');
      },
      colorOutlineHover: function colorOutlineHover(get) {
        return get('palette', 'white');
      },
      backgroundColor: function backgroundColor(get) {
        return get('palette', 'danger');
      },
      backgroundColorDisabled: function backgroundColorDisabled(get) {
        return get('palette', 'danger');
      },
      backgroundColorHoverFocus: function backgroundColorHoverFocus(get) {
        return get('palette', 'dangerDarker');
      },
      backgroundColorActive: function backgroundColorActive(get) {
        return get('palette', 'dangerDark');
      },
      borderColor: function borderColor(get) {
        return get('palette', 'danger');
      },
      borderColorDisabled: function borderColorDisabled(get) {
        return get('palette', 'danger');
      },
      borderColorHoverFocus: function borderColorHoverFocus(get) {
        return get('palette', 'dangerDark');
      },
      borderColorActive: function borderColorActive(get) {
        return get('palette', 'dangerDark');
      },
      boxShadow: function boxShadow(get) {
        return get('palette', 'dangerBoxShadow');
      }
    },
    warning: {
      color: function color(get) {
        return get('palette', 'darkerDarker');
      },
      colorOutline: function colorOutline(get) {
        return get('palette', 'warning');
      },
      colorOutlineHover: function colorOutlineHover(get) {
        return get('palette', 'darkerDarker');
      },
      backgroundColor: function backgroundColor(get) {
        return get('palette', 'warning');
      },
      backgroundColorDisabled: function backgroundColorDisabled(get) {
        return get('palette', 'warning');
      },
      backgroundColorHoverFocus: function backgroundColorHoverFocus(get) {
        return get('palette', 'warningDarker');
      },
      backgroundColorActive: function backgroundColorActive(get) {
        return get('palette', 'warningDark');
      },
      borderColor: function borderColor(get) {
        return get('palette', 'warning');
      },
      borderColorDisabled: function borderColorDisabled(get) {
        return get('palette', 'warning');
      },
      borderColorHoverFocus: function borderColorHoverFocus(get) {
        return get('palette', 'warningDark');
      },
      borderColorActive: function borderColorActive(get) {
        return get('palette', 'warningDark');
      },
      boxShadow: function boxShadow(get) {
        return get('palette', 'warningBoxShadow');
      }
    },
    info: {
      color: function color(get) {
        return get('palette', 'white');
      },
      colorOutline: function colorOutline(get) {
        return get('palette', 'info');
      },
      colorOutlineHover: function colorOutlineHover(get) {
        return get('palette', 'white');
      },
      backgroundColor: function backgroundColor(get) {
        return get('palette', 'info');
      },
      backgroundColorDisabled: function backgroundColorDisabled(get) {
        return get('palette', 'info');
      },
      backgroundColorHoverFocus: function backgroundColorHoverFocus(get) {
        return get('palette', 'infoDarker');
      },
      backgroundColorActive: function backgroundColorActive(get) {
        return get('palette', 'infoDark');
      },
      borderColor: function borderColor(get) {
        return get('palette', 'info');
      },
      borderColorDisabled: function borderColorDisabled(get) {
        return get('palette', 'info');
      },
      borderColorHoverFocus: function borderColorHoverFocus(get) {
        return get('palette', 'infoDark');
      },
      borderColorActive: function borderColorActive(get) {
        return get('palette', 'infoDark');
      },
      boxShadow: function boxShadow(get) {
        return get('palette', 'infoBoxShadow');
      }
    },
    light: {
      color: function color(get) {
        return get('palette', 'darkerDarker');
      },
      colorOutline: function colorOutline(get) {
        return get('palette', 'light');
      },
      colorOutlineHover: function colorOutlineHover(get) {
        return get('palette', 'darkerDarker');
      },
      backgroundColor: function backgroundColor(get) {
        return get('palette', 'light');
      },
      backgroundColorDisabled: function backgroundColorDisabled(get) {
        return get('palette', 'light');
      },
      backgroundColorHoverFocus: function backgroundColorHoverFocus(get) {
        return get('palette', 'lightDarker');
      },
      backgroundColorActive: function backgroundColorActive(get) {
        return get('palette', 'lightDark');
      },
      borderColor: function borderColor(get) {
        return get('palette', 'light');
      },
      borderColorDisabled: function borderColorDisabled(get) {
        return get('palette', 'light');
      },
      borderColorHoverFocus: function borderColorHoverFocus(get) {
        return get('palette', 'lightDark');
      },
      borderColorActive: function borderColorActive(get) {
        return get('palette', 'lightDark');
      },
      boxShadow: function boxShadow(get) {
        return get('palette', 'lightBoxShadow');
      },
      toggle: {
        color: function color(get) {
          return get('palette', 'dark50Alpha');
        },
        borderColor: function borderColor(get) {
          return get('palette', 'dark10Alpha');
        },
        colorHoverFous: function colorHoverFous(get) {
          return get('palette', 'dark50Alpha');
        },
        borderColorHoverFous: function borderColorHoverFous(get) {
          return get('palette', 'dark10Alpha');
        }
      }
    },
    dark: {
      color: function color(get) {
        return get('palette', 'white');
      },
      colorOutline: function colorOutline(get) {
        return get('palette', 'dark');
      },
      colorOutlineHover: function colorOutlineHover(get) {
        return get('palette', 'white');
      },
      backgroundColor: function backgroundColor(get) {
        return get('palette', 'dark');
      },
      backgroundColorDisabled: function backgroundColorDisabled(get) {
        return get('palette', 'dark');
      },
      backgroundColorHoverFocus: function backgroundColorHoverFocus(get) {
        return get('palette', 'darkDarker');
      },
      backgroundColorActive: function backgroundColorActive(get) {
        return get('palette', 'darkDark');
      },
      borderColor: function borderColor(get) {
        return get('palette', 'dark');
      },
      borderColorDisabled: function borderColorDisabled(get) {
        return get('palette', 'dark');
      },
      borderColorHoverFocus: function borderColorHoverFocus(get) {
        return get('palette', 'darkDark');
      },
      borderColorActive: function borderColorActive(get) {
        return get('palette', 'darkDark');
      },
      boxShadow: function boxShadow(get) {
        return get('palette', 'darkBoxShadow');
      },
      toggle: {
        color: function color(get) {
          return get('palette', 'white50Alpha');
        },
        borderColor: function borderColor(get) {
          return get('palette', 'white10Alpha');
        },
        colorHoverFous: function colorHoverFous(get) {
          return get('palette', 'white50Alpha');
        },
        borderColorHoverFous: function borderColorHoverFous(get) {
          return get('palette', 'white10Alpha');
        }
      }
    },
    "default": function _default(get) {
      return get('button', 'colors', 'secondary');
    }
  },
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
  fontSize: function fontSize(get) {
    return get('globals', 'fontSize');
  },
  border: function border(get) {
    return get('globals', 'border');
  },
  borderRadius: function borderRadius(get) {
    return get('globals', 'borderRadius');
  }
};
var _default2 = button;
exports["default"] = _default2;