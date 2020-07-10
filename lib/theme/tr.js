"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var tr = {
  colors: {
    primary: {
      backgroundColor: function backgroundColor(get) {
        return get('palette', 'primaryLighter');
      },
      backgroundColorHoverFocus: function backgroundColorHoverFocus(get) {
        return get('palette', 'primary');
      },
      activeBackgroundColor: function activeBackgroundColor(get) {
        return get('palette', 'dark10Alpha');
      },
      activeBackgroundColorHoverFocus: function activeBackgroundColorHoverFocus(get) {
        return get('palette', 'dark10Alpha');
      }
    },
    secondary: {
      backgroundColor: function backgroundColor(get) {
        return get('palette', 'secondaryLighter');
      },
      backgroundColorHoverFocus: function backgroundColorHoverFocus(get) {
        return get('palette', 'secondary');
      },
      activeBackgroundColor: function activeBackgroundColor(get) {
        return get('palette', 'dark10Alpha');
      },
      activeBackgroundColorHoverFocus: function activeBackgroundColorHoverFocus(get) {
        return get('palette', 'dark10Alpha');
      }
    },
    success: {
      backgroundColor: function backgroundColor(get) {
        return get('palette', 'successLighter');
      },
      backgroundColorHoverFocus: function backgroundColorHoverFocus(get) {
        return get('palette', 'success');
      },
      activeBackgroundColor: function activeBackgroundColor(get) {
        return get('palette', 'dark10Alpha');
      },
      activeBackgroundColorHoverFocus: function activeBackgroundColorHoverFocus(get) {
        return get('palette', 'dark10Alpha');
      }
    },
    info: {
      backgroundColor: function backgroundColor(get) {
        return get('palette', 'infoLighter');
      },
      backgroundColorHoverFocus: function backgroundColorHoverFocus(get) {
        return get('palette', 'info');
      },
      activeBackgroundColor: function activeBackgroundColor(get) {
        return get('palette', 'dark10Alpha');
      },
      activeBackgroundColorHoverFocus: function activeBackgroundColorHoverFocus(get) {
        return get('palette', 'dark10Alpha');
      }
    },
    warning: {
      backgroundColor: function backgroundColor(get) {
        return get('palette', 'warningLighter');
      },
      backgroundColorHoverFocus: function backgroundColorHoverFocus(get) {
        return get('palette', 'warning');
      },
      activeBackgroundColor: function activeBackgroundColor(get) {
        return get('palette', 'dark10Alpha');
      },
      activeBackgroundColorHoverFocus: function activeBackgroundColorHoverFocus(get) {
        return get('palette', 'dark10Alpha');
      }
    },
    danger: {
      backgroundColor: function backgroundColor(get) {
        return get('palette', 'dangerLighter');
      },
      backgroundColorHoverFocus: function backgroundColorHoverFocus(get) {
        return get('palette', 'danger');
      },
      activeBackgroundColor: function activeBackgroundColor(get) {
        return get('palette', 'dark10Alpha');
      },
      activeBackgroundColorHoverFocus: function activeBackgroundColorHoverFocus(get) {
        return get('palette', 'dark10Alpha');
      }
    },
    light: {
      backgroundColor: function backgroundColor(get) {
        return get('palette', 'lightLighter');
      },
      backgroundColorHoverFocus: function backgroundColorHoverFocus(get) {
        return get('palette', 'lightDark');
      },
      activeBackgroundColor: function activeBackgroundColor(get) {
        return get('palette', 'dark10Alpha');
      },
      activeBackgroundColorHoverFocus: function activeBackgroundColorHoverFocus(get) {
        return get('palette', 'dark10Alpha');
      }
    },
    dark: {
      backgroundColor: function backgroundColor(get) {
        return get('palette', 'darkLighter');
      },
      backgroundColorHoverFocus: function backgroundColorHoverFocus(get) {
        return get('palette', 'dark');
      },
      activeBackgroundColor: function activeBackgroundColor(get) {
        return get('palette', 'dark10Alpha');
      },
      activeBackgroundColorHoverFocus: function activeBackgroundColorHoverFocus(get) {
        return get('palette', 'dark10Alpha');
      }
    },
    "default": function _default(get) {
      return get('tr', 'colors', 'secondary');
    }
  }
};
var _default2 = tr;
exports["default"] = _default2;