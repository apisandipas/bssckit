"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var navbar = {
  colors: {
    dark: {
      color: function color(get) {
        return get('palette', 'white50Alpha');
      },
      borderColor: function borderColor(get) {
        return get('palette', 'white10Alpha');
      },
      backgroundColor: function backgroundColor(get) {
        return get('palette', 'dark');
      }
    },
    light: {
      color: function color(get) {
        return get('palette', 'dark50Alpha');
      },
      borderColor: function borderColor(get) {
        return get('palette', 'dark10Alpha');
      },
      backgroundColor: function backgroundColor(get) {
        return get('palette', 'light');
      }
    },
    "default": function _default(get) {
      return get('navbar', 'colors', 'light');
    }
  },
  padding: {
    "default": '0.5rem 1rem'
  }
};
var _default2 = navbar;
exports["default"] = _default2;