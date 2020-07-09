"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var paginationLink = {
  colors: {
    "default": {
      color: function color(get) {
        return get('palette', 'primary');
      },
      borderColor: function borderColor(get) {
        return get('palette', 'gray300');
      },
      backgroundColor: function backgroundColor(get) {
        return get('palette', 'white');
      },
      hoverColor: function hoverColor(get) {
        return get('palette', 'primaryDark');
      },
      // TODO: refactor to use darken function within theme file
      hoverBackground: function hoverBackground(get) {
        return get('palette', 'gray200');
      },
      activeColor: function activeColor(get) {
        return get('palette', 'white');
      },
      activeBackgroundColor: function activeBackgroundColor(get) {
        return get('palette', 'primary');
      },
      activeBorderColor: function activeBorderColor(get) {
        return get('palette', 'primary');
      },
      disabledColor: function disabledColor(get) {
        return get('palette', 'gray600');
      },
      disabledBackground: function disabledBackground(get) {
        return get('palette', 'white');
      },
      disabledBorderColor: function disabledBorderColor(get) {
        return get('palette', 'gray300');
      }
    }
  },
  borderRadius: function borderRadius(get) {
    return get('globals', 'borderRadius');
  },
  border: function border(get) {
    return get('globals', 'border');
  },
  padding: {
    "default": '0.375rem 0.75rem',
    sm: '0.25rem 0.5rem',
    lg: '0.75rem 1.5rem'
  }
};
var _default = paginationLink;
exports["default"] = _default;