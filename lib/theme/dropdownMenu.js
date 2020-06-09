"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var dropdownMenu = {
  colors: {
    "default": {
      color: function color(get) {
        return get('palette', 'darker');
      },
      backgroundColor: function backgroundColor(get) {
        return get('palette', 'white');
      },
      borderColor: function borderColor(get) {
        return get('palette', 'darkerBoxShadow');
      }
    }
  },
  fontSize: {
    "default": '1rem'
  },
  padding: {
    "default": '0.5rem 0'
  },
  margin: {
    "default": '0.125rem 0 0'
  },
  borderRadius: function borderRadius(get) {
    return get('globals', 'borderRadius');
  },
  border: function border(get) {
    return get('globals', 'border');
  }
};
var _default = dropdownMenu;
exports["default"] = _default;