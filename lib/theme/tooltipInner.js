"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var tooltipInner = {
  colors: {
    "default": {
      color: function color(get) {
        return get('palette', 'white');
      },
      backgroundColor: function backgroundColor(get) {
        return get('palette', 'darker');
      }
    }
  },
  padding: {
    "default": '0.25rem 0.5rem'
  },
  borderRadius: function borderRadius(get) {
    return get('globals', 'borderRadius');
  }
};
var _default = tooltipInner;
exports["default"] = _default;