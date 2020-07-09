"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var modalHeader = {
  colors: {
    "default": {
      borderColor: function borderColor(get) {
        return get('palette', 'weakBorder');
      }
    }
  },
  padding: {
    "default": '1rem'
  },
  border: function border(get) {
    return get('globals', 'border');
  },
  borderRadius: function borderRadius(get) {
    return get('globals', 'borderRadius');
  }
};
var _default = modalHeader;
exports["default"] = _default;