import globals from './globals';
import palette from './palette';

const badge = {
  colors: {
    primary: {
      backgroundColor: palette.primary,
      backgroundColorHoverFocus: palette.primaryDarker,
      color: palette.white,
      linkColor: palette.white,
    },
    secondary: {
      backgroundColor: palette.secondary,
      backgroundColorHoverFocus: palette.secondaryDarker,
      color: palette.white,
      linkColor: palette.white,
    },
    success: {
      backgroundColor: palette.success,
      backgroundColorHoverFocus: palette.successDarker,
      color: palette.white,
      linkColor: palette.white,
    },
    danger: {
      backgroundColor: palette.danger,
      backgroundColorHoverFocus: palette.dangerDarker,
      color: palette.white,
      linkColor: palette.white,
    },
    warning: {
      backgroundColor: palette.warning,
      backgroundColorHoverFocus: palette.warningDarker,
      color: palette.darker,
      linkColor: palette.darker,
    },
    info: {
      backgroundColor: palette.info,
      backgroundColorHoverFocus: palette.infoDarker,
      color: palette.white,
      linkColor: palette.white,
    },
    light: {
      backgroundColor: palette.light,
      backgroundColorHoverFocus: palette.lightDarker,
      color: palette.darker,
      linkColor: palette.darker,
    },
    dark: {
      backgroundColor: palette.dark,
      backgroundColorHoverFocus: palette.darkDarker,
      color: palette.white,
      linkColor: palette.white,
    },
    default: {
      backgroundColor: palette.secondary,
      backgroundColorHoverFocus: palette.secondaryDarker,
      color: palette.white,
      linkColor: palette.white,
    },
  },
  padding: {
    pill: '0.25rem 0.6rem',
    default: '0.25rem 0.4rem',
  },
  fontWeight: {
    default: '700',
  },
  borderRadius: globals.borderRadius,
};

export default badge;
