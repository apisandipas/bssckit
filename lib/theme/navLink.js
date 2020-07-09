"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var navLink = {
  colors: {
    light: {
      colorDisabled: function colorDisabled(get) {
        return get('palette', 'darkLighter');
      },
      colorDisabledHoverFocus: function colorDisabledHoverFocus(get) {
        return get('palette', 'darkLighter');
      },
      colorTabsActive: function colorTabsActive(get) {
        return get('palette', 'dark');
      },
      colorTabsActiveHoverFocus: function colorTabsActiveHoverFocus(get) {
        return get('palette', 'darkDark');
      },
      colorPillsActive: function colorPillsActive(get) {
        return get('palette', 'white');
      },
      colorPillsActiveHoverFocus: function colorPillsActiveHoverFocus(get) {
        return get('palette', 'white');
      },
      color: function color(get) {
        return get('palette', 'primary');
      },
      colorHoverFocus: function colorHoverFocus(get) {
        return get('palette', 'primaryDarker');
      },
      backgroundColorPillsActive: function backgroundColorPillsActive(get) {
        return get('palette', 'primary');
      },
      borderColorTabsActive: function borderColorTabsActive(get) {
        return "".concat(get('palette', 'darkLight'), " ").concat(get('palette', 'darkLight'), " ").concat(get('palette', 'white'));
      },
      borderColorTabsHoverFocus: function borderColorTabsHoverFocus(get) {
        return "".concat(get('palette', 'darkLight'), " ").concat(get('palette', 'darkLight'), " ").concat(get('palette', 'darkLight'));
      },
      borderColorTabsDisabled: function borderColorTabsDisabled(get) {
        return get('palette', 'transparent');
      },
      borderColorPillsActive: function borderColorPillsActive(get) {
        return get('palette', 'primary');
      },
      borderColor: function borderColor(get) {
        return get('palette', 'transparent');
      }
    },
    dark: function dark(get) {
      return get('navLink', 'colors', 'light');
    },
    "default": function _default(get) {
      return get('navLink', 'colors', 'light');
    }
  },
  padding: {
    "default": '0.5rem'
  },
  borderRadius: function borderRadius(get) {
    return get('globals', 'borderRadius');
  },
  border: function border(get) {
    return get('globals', 'border');
  }
};
var _default2 = navLink;
exports["default"] = _default2;