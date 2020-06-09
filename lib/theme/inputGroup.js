"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var inputGroup = {
  borderRadius: function borderRadius(get) {
    return get('globals', 'borderRadius');
  },
  fontSize: function fontSize(get) {
    return get('globals', 'fontSize');
  },
  padding: {
    leftLg: '0',
    rightLg: '0',
    lg: '0.5rem 1rem',
    sm: '0.25rem 0.5rem'
  },
  margin: {
    bottom: '0'
  }
};
var _default = inputGroup;
exports["default"] = _default;