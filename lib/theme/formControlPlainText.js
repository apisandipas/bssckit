"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var formControlPlainText = {
  colors: {
    "default": {
      backgroundColor: function backgroundColor(get) {
        return get('palette', 'transparent');
      },
      borderColor: function borderColor(get) {
        return get('palette', 'transparent');
      }
    }
  },
  padding: {
    top: '0.375rem',
    bottom: '0.375rem',
    smRight: '0',
    smLeft: '0'
  },
  margin: {
    bottom: '0'
  }
};
var _default = formControlPlainText;
exports["default"] = _default;