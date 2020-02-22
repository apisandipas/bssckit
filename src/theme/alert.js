import globals from './globals';
import themeColors from './themeColors';

const alert = {
  colors: {
    primary: {
      text: themeColors.primaryDarkest,
      background: themeColors.primaryLight,
      border: themeColors.primaryLighter,
      borderTop: themeColors.primaryLighter,
      hover: themeColors.primaryDarkest,
    },
    secondary: {
      text: themeColors.secondaryDarkest,
      background: themeColors.secondaryLight,
      border: themeColors.secondaryLighter,
      borderTop: themeColors.secondaryLighter,
      hover: themeColors.secondaryDarkest,
    },
    success: {
      text: themeColors.successDarkest,
      background: themeColors.successLight,
      border: themeColors.successLighter,
      borderTop: themeColors.successLighter,
      hover: themeColors.successDarkest,
    },
    danger: {
      text: themeColors.dangerDarkest,
      background: themeColors.dangerLight,
      border: themeColors.dangerLighter,
      borderTop: themeColors.dangerLighter,
      hover: themeColors.dangerDarkest,
    },
    warning: {
      text: themeColors.warningDarkest,
      background: themeColors.warningLight,
      border: themeColors.warningLighter,
      borderTop: themeColors.warningLighter,
      hover: themeColors.warningDarkest,
    },
    info: {
      text: themeColors.infoDarkest,
      background: themeColors.infoLight,
      border: themeColors.infoLighter,
      borderTop: themeColors.infoLighter,
      hover: themeColors.infoDarkest,
    },
    light: {
      text: themeColors.lightDarkest,
      background: themeColors.lightLight,
      border: themeColors.lightDark,
      borderTop: themeColors.lightLighter,
      hover: themeColors.darkDarkest,
    },
    dark: {
      text: themeColors.darkDarkest,
      background: themeColors.darkLight,
      border: themeColors.darkLighter,
      borderTop: themeColors.darkLighter,
      hover: themeColors.darkDarkest,
    },
    default: {
      text: themeColors.secondaryDarkest,
      background: themeColors.secondaryLight,
      border: themeColors.secondaryLighter,
      borderTop: themeColors.secondaryLighter,
      hover: themeColors.secondaryDarkest,
    },
  },
  margin: {
    bottom: '1rem',
  },
  padding: {
    default: '0.75rem 1.25rem',
    dismissibleRight: '4rem',
  },
  border: {
    default: '1px solid transparent',
  },
  borderRadius: globals.borderRadius,
  fontWeight: {
    default: '700',
  },
};

export default alert;
