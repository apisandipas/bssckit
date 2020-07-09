"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var navbarLink = {
  colors: {
    dark: {
      colorDisabled: function colorDisabled(get) {
        return get('palette', 'white25Alpha');
      },
      colorDisabledHoverFocus: function colorDisabledHoverFocus(get) {
        return get('palette', 'white25Alpha');
      },
      colorActive: function colorActive(get) {
        return get('palette', 'white90Alpha');
      },
      colorActiveHoverFocus: function colorActiveHoverFocus(get) {
        return get('palette', 'white90Alpha');
      },
      color: function color(get) {
        return get('palette', 'white50Alpha');
      },
      colorHoverFocus: function colorHoverFocus(get) {
        return get('palette', 'white75Alpha');
      }
    },
    light: {
      colorDisabled: function colorDisabled(get) {
        return get('palette', 'dark25Alpha');
      },
      colorDisabledHoverFocus: function colorDisabledHoverFocus(get) {
        return get('palette', 'dark25Alpha');
      },
      colorActive: function colorActive(get) {
        return get('palette', 'dark90Alpha');
      },
      colorActiveHoverFocus: function colorActiveHoverFocus(get) {
        return get('palette', 'dark90Alpha');
      },
      color: function color(get) {
        return get('palette', 'dark50Alpha');
      },
      colorHoverFocus: function colorHoverFocus(get) {
        return get('palette', 'dark75Alpha');
      }
    },
    "default": function _default(get) {
      return get('navbarLink', 'colors', 'light');
    }
  },
  padding: {
    brandTop: '0.3125rem',
    brandBottom: '0.3125rem'
  },
  fontSize: function fontSize(get) {
    return get('globals', 'fontSize');
  }
};
var _default2 = navbarLink;
exports["default"] = _default2;