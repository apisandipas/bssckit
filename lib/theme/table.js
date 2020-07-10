"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var table = {
  colors: {
    light: {
      borderedBorderColor: function borderedBorderColor(get) {
        return get('palette', 'lightDarker');
      },
      stripedBackgroundColor: function stripedBackgroundColor(get) {
        return get('palette', 'dark10Alpha');
      },
      backgroundColorHoverFocus: function backgroundColorHoverFocus(get) {
        return get('palette', 'dark25Alpha');
      },
      darkColor: function darkColor(get) {
        return get('palette', 'white');
      },
      darkBackgroundColor: function darkBackgroundColor(get) {
        return get('palette', 'darker');
      },
      darkBorderColor: function darkBorderColor(get) {
        return get('palette', 'darkerDarker');
      },
      theadDarkColor: function theadDarkColor(get) {
        return get('palette', 'white');
      },
      theadDarkBackgroundColor: function theadDarkBackgroundColor(get) {
        return get('palette', 'darker');
      },
      theadDarkBorderColor: function theadDarkBorderColor(get) {
        return get('palette', 'darkerDarker');
      },
      stripedDarkBackgroundColor: function stripedDarkBackgroundColor(get) {
        return get('palette', 'white10Alpha');
      },
      darkBackgroundColorHoverFocus: function darkBackgroundColorHoverFocus(get) {
        return get('palette', 'white10Alpha');
      },
      theadLightColor: function theadLightColor(get) {
        return get('palette', 'dark');
      },
      theadLightBackgroundColor: function theadLightBackgroundColor(get) {
        return get('palette', 'darkLight');
      },
      theadLightBorderColor: function theadLightBorderColor(get) {
        return get('palette', 'darkLight');
      },
      borderColor: function borderColor(get) {
        return get('palette', 'darkLight');
      },
      backgroundColor: function backgroundColor(get) {
        return get('palette', 'white');
      }
    },
    dark: function dark(get) {
      return get('table', 'colors', 'light');
    },
    "default": function _default(get) {
      return get('table', 'colors', 'light');
    },
    padding: {
      sm: '0.3rem'
    }
  },
  border: function border(get) {
    return get('globals', 'border');
  }
};
var _default2 = table;
exports["default"] = _default2;