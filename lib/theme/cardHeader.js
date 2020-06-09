"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var cardHeader = {
  colors: {
    "default": {
      background: function background(get) {
        return get('palette', 'white');
      },
      borderBottom: function borderBottom(get) {
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
    topLeftRight: 'calc(0.25rem - 1px)'
  },
  border: function border(get) {
    return get('globals', 'border');
  }
};
var _default = cardHeader;
exports["default"] = _default;