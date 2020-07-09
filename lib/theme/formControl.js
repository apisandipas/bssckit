"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var formControl = {
  colors: {
    "default": {
      color: function color(get) {
        return get('palette', 'dark');
      },
      background: function background(get) {
        return get('palette', 'white');
      },
      border: function border(get) {
        return get('palette', 'darkLighter');
      },
      borderFocus: function borderFocus(get) {
        return get('palette', 'darkLight');
      },
      boxShadowFocus: function boxShadowFocus(get) {
        return get('palette', 'darkerBoxShadow');
      },
      placeholder: function placeholder(get) {
        return get('palette', 'secondary');
      },
      backgroundColorDisabledReadonly: function backgroundColorDisabledReadonly(get) {
        return get('palette', 'whiteDark');
      },
      borderValid: function borderValid(get) {
        return get('palette', 'success');
      },
      formControlBoxShadowValid: function formControlBoxShadowValid(get) {
        return get('palette', 'successBoxShadow');
      },
      borderInvalid: function borderInvalid(get) {
        return get('palette', 'danger');
      },
      formControlBoxShadowInvalid: function formControlBoxShadowInvalid(get) {
        return get('palette', 'dangerBoxShadow');
      }
    }
  },
  borderRadius: function borderRadius(get) {
    return get('globals', 'borderRadius');
  },
  border: function border(get) {
    return get('globals', 'border');
  },
  boxShadow: {
    "default": '0 0 0 0.2rem'
  },
  padding: {
    smRight: '0',
    smLeft: '0',
    lgRight: '0',
    lgLeft: '0',
    smPadding: '0.25rem 0.5rem',
    lgPadding: '0.5rem 1rem',
    defaultPadding: '0.375rem 0.75rem'
  },
  fontSize: {
    sm: '0.875rem',
    lg: '1.25rem',
    "default": '1rem'
  },
  height: {
    select: 'calc(2.25rem + 2px)',
    selectLg: 'calc(2.875rem + 2px)',
    selectSm: 'calc(1.8125rem + 2px)'
  }
};
var _default = formControl;
exports["default"] = _default;