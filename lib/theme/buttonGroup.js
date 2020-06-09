"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var buttonGroup = {
  padding: function padding(get) {
    return get('button', 'padding');
  },
  fontSize: function fontSize(get) {
    return get('globals', 'fontSize');
  }
};
var _default = buttonGroup;
exports["default"] = _default;