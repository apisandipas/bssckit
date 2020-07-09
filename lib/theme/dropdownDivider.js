"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var dropdownDivider = {
  colors: {
    "default": {
      borderTop: function borderTop(get) {
        return get('palette', 'lightDarker');
      }
    }
  },
  padding: {
    top: '0.5rem'
  },
  margin: {
    top: '0.6rem'
  },
  border: function border(get) {
    return get('globals', 'border');
  }
};
var _default = dropdownDivider;
exports["default"] = _default;