"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var inputGroupText = {
  colors: {
    "default": {
      color: function color(get) {
        return get('palette', 'dark');
      },
      backgroundColor: function backgroundColor(get) {
        return get('palette', 'lightDarker');
      },
      borderColor: function borderColor(get) {
        return get('palette', 'lightDark');
      }
    }
  },
  margin: {
    bottom: '0',
    radioCheckboxTop: '0',
    radioCheckboxRight: '0',
    radioCheckboxBottom: '0'
  },
  padding: {
    "default": '0.375rem 0.75rem'
  },
  fontWeight: {
    "default": '400'
  },
  fontSize: function fontSize(get) {
    return get('globals', 'fontSize');
  },
  borderRadius: function borderRadius(get) {
    return get('globals', 'borderRadius');
  },
  border: function border(get) {
    return get('globals', 'border');
  }
};
var _default = inputGroupText;
exports["default"] = _default;