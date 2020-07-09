"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var nav = {
  colors: {
    "default": {
      borderColorTabs: function borderColorTabs(get) {
        return get('palette', 'lightDark');
      }
    }
  },
  padding: {
    collapseNotHiddenARight: '0.5rem',
    collapseNotHiddenALeft: '0.5rem',
    left: '0'
  },
  margin: {
    bottom: '0'
  },
  border: function border(get) {
    return get('globals', 'border');
  }
};
var _default = nav;
exports["default"] = _default;