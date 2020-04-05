import globals from './globals';
import palette from './palette';

const formControl = {
  borderRadius: globals.borderRadius,
  fontSize: globals.fontSize,
  border: globals.border,
  colors: {
    default: {
      color: palette.dark,
      background: palette.white,
      border: palette.darkLighter,
      borderFocus: palette.darkLight,
      boxShadowFocus: palette.darkerBoxShadow,
      placeholder: palette.secondary,
      backgroundColorDisabledReadonly: palette.whiteDark,
      borderValid: palette.success,
      formControlBoxShadowValid: palette.successBoxShadow,
      borderInvalid: palette.danger,
      formControlBoxShadowInvalid: palette.dangerBoxShadow,
    },
  },
  boxShadow: {
    default: '0 0 0 0.2rem',
  },
  padding: {
    smRight: '0',
    smLeft: '0',
    lgRight: '0',
    lgLeft: '0',
    smPadding: '0.25rem 0.5rem',
    lgPadding: '0.5rem 1rem',
    defaultPadding: '0.375rem 0.75rem',
  },
  height: {
    select: 'calc(2.25rem + 2px)',
    selectLg: 'calc(2.875rem + 2px)',
    selectSm: 'calc(1.8125rem + 2px)',
  },
  plainText: {
    colors: {
      default: {
        backgroundColor: palette.transparent,
        borderColor: palette.transparent,
      },
    },
    padding: {
      top: '0.375rem',
      bottom: '0.375rem',
      smRight: '0',
      smLeft: '0',
    },
    margin: {
      bottom: '0',
    },
  },
};

export default formControl;
