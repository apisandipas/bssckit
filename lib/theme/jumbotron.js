"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var jumbotron = {
  colors: {
    "default": {
      backgroundColor: function backgroundColor(get) {
        return get('palette', 'light');
      }
    }
  },
  padding: {
    sm: '4rem 2rem',
    fluidRight: '0',
    fluidLeft: '0',
    pill: '2rem 8rem',
    lgPill: '4rem 8rem',
    smPill: '4rem 4rem',
    "default": '2rem 1rem'
  },
  borderRadius: function borderRadius(get) {
    return get('globals', 'borderRadius');
  }
};
var _default = jumbotron;
exports["default"] = _default;