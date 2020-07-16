"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var cardFooter = {
  colors: {
    "default": {
      background: function background(get) {
        return get('palette', 'weakBackground');
      },
      borderTop: function borderTop(get) {
        return get('palette', 'weakBorder');
      }
    }
  },
  padding: {
    "default": '0.75rem 1.25rem'
  },
  borderRadius: {
    noRadius: function noRadius(get) {
      return get('globals', 'borderRadius', 'noRadius');
    },
    "default": '0 0 calc(0.25rem - 1px) calc(0.25rem - 1px)'
  },
  border: function border(get) {
    return get('globals', 'border');
  }
};
var _default = cardFooter;
exports["default"] = _default;