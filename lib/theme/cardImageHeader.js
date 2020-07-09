"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var cardImageHeader = {
  borderRadius: {
    noRadius: function noRadius(get) {
      return get('globals', 'borderRadius', 'noRadius');
    },
    topLeftRight: 'calc(0.25rem - 1px)'
  }
};
var _default = cardImageHeader;
exports["default"] = _default;