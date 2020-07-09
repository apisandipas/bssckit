"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var modalFooter = {
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
  }
};
var _default = modalFooter;
exports["default"] = _default;