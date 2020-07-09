"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var modalContent = {
  colors: {
    "default": {
      backgroundColor: function backgroundColor(get) {
        return get('palette', 'white');
      },
      borderColor: function borderColor(get) {
        return get('palette', 'weakBorder');
      }
    }
  },
  borderRadius: function borderRadius(get) {
    return get('globals', 'borderRadius');
  },
  border: function border(get) {
    return get('globals', 'border');
  }
};
var _default = modalContent;
exports["default"] = _default;