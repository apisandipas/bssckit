import globals from './globals';
import themeColors from './themeColors';

const badge = {
  colors: {
    primary: {
      backgroundColor: themeColors.primary,
      backgroundColorHoverFocus: themeColors.primaryDarker,
      color: themeColors.white,
      linkColor: themeColors.white,
    },
    secondary: {
      backgroundColor: themeColors.secondary,
      backgroundColorHoverFocus: themeColors.secondaryDarker,
      color: themeColors.white,
      linkColor: themeColors.white,
    },
    success: {
      backgroundColor: themeColors.success,
      backgroundColorHoverFocus: themeColors.successDarker,
      color: themeColors.white,
      linkColor: themeColors.white,
    },
    danger: {
      backgroundColor: themeColors.danger,
      backgroundColorHoverFocus: themeColors.dangerDarker,
      color: themeColors.white,
      linkColor: themeColors.white,
    },
    warning: {
      backgroundColor: themeColors.warning,
      backgroundColorHoverFocus: themeColors.warningDarker,
      color: themeColors.darker,
      linkColor: themeColors.darker,
    },
    info: {
      backgroundColor: themeColors.info,
      backgroundColorHoverFocus: themeColors.infoDarker,
      color: themeColors.white,
      linkColor: themeColors.white,
    },
    light: {
      backgroundColor: themeColors.light,
      backgroundColorHoverFocus: themeColors.lightDarker,
      color: themeColors.darker,
      linkColor: themeColors.darker,
    },
    dark: {
      backgroundColor: themeColors.dark,
      backgroundColorHoverFocus: themeColors.darkDarker,
      color: themeColors.white,
      linkColor: themeColors.white,
    },
    default: {
      backgroundColor: themeColors.secondary,
      backgroundColorHoverFocus: themeColors.secondaryDarker,
      color: themeColors.white,
      linkColor: themeColors.white,
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
