"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var badge = {
  colors: {
    primary: {
      backgroundColor: function backgroundColor(get) {
        return get('palette', 'primary');
      },
      backgroundColorHoverFocus: function backgroundColorHoverFocus(get) {
        return get('palette', 'primaryDarker');
      },
      color: function color(get) {
        return get('palette', 'white');
      },
      linkColor: function linkColor(get) {
        return get('palette', 'white');
      }
    },
    secondary: {
      backgroundColor: function backgroundColor(get) {
        return get('palette', 'secondary');
      },
      backgroundColorHoverFocus: function backgroundColorHoverFocus(get) {
        return get('palette', 'secondaryDarker');
      },
      color: function color(get) {
        return get('palette', 'white');
      },
      linkColor: function linkColor(get) {
        return get('palette', 'white');
      }
    },
    success: {
      backgroundColor: function backgroundColor(get) {
        return get('palette', 'success');
      },
      backgroundColorHoverFocus: function backgroundColorHoverFocus(get) {
        return get('palette', 'successDarker');
      },
      color: function color(get) {
        return get('palette', 'white');
      },
      linkColor: function linkColor(get) {
        return get('palette', 'white');
      }
    },
    danger: {
      backgroundColor: function backgroundColor(get) {
        return get('palette', 'danger');
      },
      backgroundColorHoverFocus: function backgroundColorHoverFocus(get) {
        return get('palette', 'dangerDarker');
      },
      color: function color(get) {
        return get('palette', 'white');
      },
      linkColor: function linkColor(get) {
        return get('palette', 'white');
      }
    },
    warning: {
      backgroundColor: function backgroundColor(get) {
        return get('palette', 'warning');
      },
      backgroundColorHoverFocus: function backgroundColorHoverFocus(get) {
        return get('palette', 'warningDarker');
      },
      color: function color(get) {
        return get('palette', 'darker');
      },
      linkColor: function linkColor(get) {
        return get('palette', 'darker');
      }
    },
    info: {
      backgroundColor: function backgroundColor(get) {
        return get('palette', 'info');
      },
      backgroundColorHoverFocus: function backgroundColorHoverFocus(get) {
        return get('palette', 'infoDarker');
      },
      color: function color(get) {
        return get('palette', 'white');
      },
      linkColor: function linkColor(get) {
        return get('palette', 'white');
      }
    },
    light: {
      backgroundColor: function backgroundColor(get) {
        return get('palette', 'light');
      },
      backgroundColorHoverFocus: function backgroundColorHoverFocus(get) {
        return get('palette', 'lightDarker');
      },
      color: function color(get) {
        return get('palette', 'darker');
      },
      linkColor: function linkColor(get) {
        return get('palette', 'darker');
      }
    },
    dark: {
      backgroundColor: function backgroundColor(get) {
        return get('palette', 'dark');
      },
      backgroundColorHoverFocus: function backgroundColorHoverFocus(get) {
        return get('palette', 'darkDarker');
      },
      color: function color(get) {
        return get('palette', 'white');
      },
      linkColor: function linkColor(get) {
        return get('palette', 'white');
      }
    },
    "default": function _default(get) {
      return get('badge', 'colors', 'secondary');
    }
  },
  padding: {
    pill: '0.25rem 0.6rem',
    "default": '0.25rem 0.4rem'
  },
  fontWeight: {
    "default": '700'
  },
  borderRadius: function borderRadius(get) {
    return get('globals', 'borderRadius');
  }
};
var _default2 = badge;
exports["default"] = _default2;