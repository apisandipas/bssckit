"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var listGroup = {
  padding: {
    left: '0'
  },
  margin: {
    bottom: '0'
  },
  border: {
    aLiFlushRight: '0',
    aLiFlushLeft: '0',
    aLiFlushFirstChildTop: '0',
    aLiFlushLastChildBottom: '0'
  },
  borderRadius: function borderRadius(get) {
    return get('globals', 'borderRadius');
  }
};
var _default = listGroup;
exports["default"] = _default;