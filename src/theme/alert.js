import globals from './globals';
import palette from './palette';

const alert = {
  colors: {
    primary: {
      text: palette.primaryDarkest,
      background: palette.primaryLight,
      border: palette.primaryLighter,
      borderTop: palette.primaryLighter,
      hover: palette.primaryDarkest,
    },
    secondary: {
      text: palette.secondaryDarkest,
      background: palette.secondaryLight,
      border: palette.secondaryLighter,
      borderTop: palette.secondaryLighter,
      hover: palette.secondaryDarkest,
    },
    success: {
      text: palette.successDarkest,
      background: palette.successLight,
      border: palette.successLighter,
      borderTop: palette.successLighter,
      hover: palette.successDarkest,
    },
    danger: {
      text: palette.dangerDarkest,
      background: palette.dangerLight,
      border: palette.dangerLighter,
      borderTop: palette.dangerLighter,
      hover: palette.dangerDarkest,
    },
    warning: {
      text: palette.warningDarkest,
      background: palette.warningLight,
      border: palette.warningLighter,
      borderTop: palette.warningLighter,
      hover: palette.warningDarkest,
    },
    info: {
      text: palette.infoDarkest,
      background: palette.infoLight,
      border: palette.infoLighter,
      borderTop: palette.infoLighter,
      hover: palette.infoDarkest,
    },
    light: {
      text: palette.lightDarkest,
      background: palette.lightLight,
      border: palette.lightDark,
      borderTop: palette.lightLighter,
      hover: palette.darkDarkest,
    },
    dark: {
      text: palette.darkDarkest,
      background: palette.darkLight,
      border: palette.darkLighter,
      borderTop: palette.darkLighter,
      hover: palette.darkDarkest,
    },
    default: {
      text: palette.secondaryDarkest,
      background: palette.secondaryLight,
      border: palette.secondaryLighter,
      borderTop: palette.secondaryLighter,
      hover: palette.secondaryDarkest,
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
