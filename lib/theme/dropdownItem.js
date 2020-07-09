"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var dropdownItem = {
  colors: {
    "default": {
      color: function color(get) {
        return get('palette', 'darker');
      },
      colorHoverFocus: function colorHoverFocus(get) {
        return get('palette', 'darkerDarker');
      },
      colorActive: function colorActive(get) {
        return get('palette', 'darkerDark');
      },
      colorDisabled: function colorDisabled(get) {
        return get('palette', 'lightDarker');
      },
      backgroundColorActive: function backgroundColorActive(get) {
        return get('palette', 'primary');
      },
      backgroundColorHoverFocus: function backgroundColorHoverFocus(get) {
        return get('palette', 'light');
      }
    }
  },
  fontWeight: {
    "default": '400'
  },
  padding: {
    "default": '0.25rem 1.5rem'
  }
};
var _default = dropdownItem;
exports["default"] = _default;