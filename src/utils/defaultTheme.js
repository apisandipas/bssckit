const globals = {
  borderRadius: {
    noRadius: '0',
    pill: '10rem',
    sm: '0.2rem',
    lg: '0.3rem',
    default: '0.25rem',
  },
  fontSize: {
    sm: '0.875rem',
    lg: '1.25rem',
    default: '1rem',
    toggle: '1.25rem',
  },
  padding: {
    button: {
      sm: '0.25rem 0.5rem',
      lg: '0.5rem 1rem',
      default: '0.375rem 0.75rem',
    },
  },
  border: {
    default: '1px solid',
    bottomTop: '2px solid',
  },
};

const themeColors = {
  // Grey scale
  gray100: '#f8f9fa',
  gray200: '#e9ecef',
  gray300: '#dee2e6',
  gray400: '#ced4da',
  gray500: '#adb5bd',
  gray600: '#6c757d',
  gray700: '#495057',
  gray800: '#343a40',
  gray900: '#212529',

  //  Named color pallete
  white: '#fff',
  black: '#000',
  blue: '#0d6efd',
  indigo: '#6610f2',
  purple: '#6f42c1',
  pink: '#d63384',
  red: '#dc3545',
  orange: '#fd7e14',
  yellow: '#ffc107',
  green: '#28a745',
  teal: '#20c997',
  cyan: '#17a2b8',

  // Theme colors
  primaryLight: '#cce5ff',
  primaryLighter: '#9cc9fb',
  primary: '#007bff',
  primaryDarker: '#0069d9',
  primaryDark: '#005cbf',
  primaryDarkest: '#004085',
  primaryBoxShadow: 'rgba(0, 123, 255, 0.5)',

  secondaryLight: '#e2e3e5',
  secondaryLighter: '#b4b5b7',
  secondary: '#6c757d',
  secondaryDarker: '#5a6268',
  secondaryDark: '#4e555b',
  secondaryDarkest: '#383d41',
  secondaryBoxShadow: 'rgba(108, 117, 125, 0.5)',

  successLight: '#d4edda',
  successLighter: '#72d889',
  success: '#28a745',
  successDarker: '#218838',
  successDark: '#1c7430',
  successDarkest: '#155724',
  successBoxShadow: 'rgba(40, 167, 69, 0.5)',

  dangerLight: '#f8d7da',
  dangerLighter: '#f5b4bb',
  danger: '#dc3545',
  dangerDarker: '#c82333',
  dangerDark: '#b21f2d',
  dangerDarkest: '#721c24',
  dangerBoxShadow: 'rgba(220, 53, 69, 0.5)',

  warningLight: '#fff3cd',
  warningLighter: '#f3da8d',
  warning: '#ffc107',
  warningDarker: '#e0a800',
  warningDark: '#c69500',
  warningDarkest: '#856404',
  warningBoxShadow: 'rgba(255, 193, 7, 0.5)',

  infoLight: '#d1ecf1',
  infoLighter: '#a3d6de',
  info: '#17a2b8',
  infoDarker: '#138496',
  infoDark: '#12707f',
  infoDarkest: '#10707f',
  infoBoxShadow: 'rgba(23, 162, 184, 0.5)',

  lightLight: '#fefefe',
  lightLighter: '#fdfdfe',
  light: '#f0f0f0',
  lightDarker: '#e2e6ea',
  lightDark: '#cccecf',
  lightDarkest: '#343a40',
  lightBoxShadow: 'rgba(248, 249, 250, 0.5)',

  darkLight: '#d6d8d9',
  darkLighter: '#abaeb1',
  dark: '#343a40',
  darkDarker: '#23272b',
  darkDark: '#201a1d',
  darkDarkest: '#171a1d',
  darkBoxShadow: 'rgba(52, 58, 64, 0.5)',

  darkerLight: '#4d4f50',
  darkerLighter: '#3c3e40',
  darker: '#2d2f31',
  darkerDarker: '#212529',
  darkerDark: '#16181b',
  darkerBoxShadow: 'rgba(0, 0, 0, 0.15)',

  white: '#fff',
  whiteDarker: '#f4f4f4',
  whiteDark: '#ececec',

  transparent: 'transparent',

  white90Alpha: 'rgba(255, 255, 255, 0.9)',
  white75Alpha: 'rgba(255, 255, 255, 0.75)',
  white50Alpha: 'rgba(255, 255, 255, 0.5)',
  white25Alpha: 'rgba(255, 255, 255, 0.25)',
  white10Alpha: 'rgba(255, 255, 255, 0.1)',

  dark90Alpha: 'rgba(0, 0, 0, 0.9)',
  dark75Alpha: 'rgba(0, 0, 0, 0.75)',
  dark50Alpha: 'rgba(0, 0, 0, 0.5)',
  dark25Alpha: 'rgba(0, 0, 0, 0.25)',
  dark10Alpha: 'rgba(0, 0, 0, 0.1)',

  white90Transparent: 'rgba(255, 255, 255, 0.9)',
  whiteHalfTransparent: 'rgba(255, 255, 255, 0.5)',
  whiteQuarterTransparent: 'rgba(255, 255, 255, 0.25)',
  whiteTenthTransparent: 'rgba(255, 255, 255, 0.1)',

  dark90Transparent: 'rgba(0, 0, 0, 0.9)',
  darkHalfTransparent: 'rgba(0, 0, 0, 0.5)',
  darkQuarterTransparent: 'rgba(0, 0, 0, 0.25)',
  darkTenthTransparent: 'rgba(0, 0, 0, 0.1)',

  weakBorder: 'rgba(0, 0, 0, 0.2)',
  weakBackground: 'rgba(0, 0, 0, 0.05)',
};

export default {
  globals,
  themeColors,
  alert: {
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
  },
  badge: {
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
  },
  button: {
    borderRadius: globals.borderRadius,
    fontSize: globals.fontSize,
    border: globals.border,
    margin: {
      blockTop: '0.5rem',
      dropDownToggleLeft: '0255rem',
    },
    padding: {
      sm: '0.25rem 0.5rem',
      lg: '0.5rem 1rem',
      default: '0.375rem 0.75rem',
      splitSmRight: '0.375rem',
      splitSmLeft: '0.375rem',
      splitLgRight: '0.75rem',
      splitLgLeft: '0.75rem',
      splitDefaultRight: '0.5625rem',
      splitDefaultLeft: '0.5625rem',
    },
    colors: {
      primary: {
        color: themeColors.white,
        colorOutline: themeColors.primary,
        colorOutlineHover: themeColors.white,
        backgroundColor: themeColors.primary,
        backgroundColorDisabled: themeColors.primary,
        backgroundColorHoverFocus: themeColors.primaryDarker,
        backgroundColorActive: themeColors.primaryDark,
        borderColor: themeColors.primary,
        borderColorDisabled: themeColors.primary,
        borderColorHoverFocus: themeColors.primaryDark,
        borderColorActive: themeColors.primaryDark,
        boxShadow: themeColors.primaryBoxShadow,
      },
      secondary: {
        color: themeColors.white,
        colorOutline: themeColors.secondary,
        colorOutlineHover: themeColors.white,
        backgroundColor: themeColors.secondary,
        backgroundColorDisabled: themeColors.secondary,
        backgroundColorHoverFocus: themeColors.secondaryDarker,
        backgroundColorActive: themeColors.secondary,
        borderColor: themeColors.secondary,
        borderColorDisabled: themeColors.secondary,
        borderColorHoverFocus: themeColors.secondaryDark,
        borderColorActive: themeColors.secondaryDark,
        boxShadow: themeColors.secondaryBoxShadow,
      },
      success: {
        color: themeColors.white,
        colorOutline: themeColors.success,
        colorOutlineHover: themeColors.white,
        backgroundColor: themeColors.success,
        backgroundColorDisabled: themeColors.success,
        backgroundColorHoverFocus: themeColors.successDarker,
        backgroundColorActive: themeColors.successDark,
        borderColor: themeColors.success,
        borderColorDisabled: themeColors.success,
        borderColorHoverFocus: themeColors.successDark,
        borderColorActive: themeColors.successDark,
        boxShadow: themeColors.successBoxShadow,
      },
      danger: {
        color: themeColors.white,
        colorOutline: themeColors.danger,
        colorOutlineHover: themeColors.white,
        backgroundColor: themeColors.danger,
        backgroundColorDisabled: themeColors.danger,
        backgroundColorHoverFocus: themeColors.dangerDarker,
        backgroundColorActive: themeColors.dangerDark,
        borderColor: themeColors.danger,
        borderColorDisabled: themeColors.danger,
        borderColorHoverFocus: themeColors.dangerDark,
        borderColorActive: themeColors.dangerDark,
        boxShadow: themeColors.dangerBoxShadow,
      },
      warning: {
        color: themeColors.darkerDarker,
        colorOutline: themeColors.warning,
        colorOutlineHover: themeColors.darkerDarker,
        backgroundColor: themeColors.warning,
        backgroundColorDisabled: themeColors.warning,
        backgroundColorHoverFocus: themeColors.warningDarker,
        backgroundColorActive: themeColors.warningDark,
        borderColor: themeColors.warning,
        borderColorDisabled: themeColors.warning,
        borderColorHoverFocus: themeColors.warningDark,
        borderColorActive: themeColors.warningDark,
        boxShadow: themeColors.warningBoxShadow,
      },
      info: {
        color: themeColors.white,
        colorOutline: themeColors.info,
        colorOutlineHover: themeColors.white,
        backgroundColor: themeColors.info,
        backgroundColorDisabled: themeColors.info,
        backgroundColorHoverFocus: themeColors.infoDarker,
        backgroundColorActive: themeColors.infoDark,
        borderColor: themeColors.info,
        borderColorDisabled: themeColors.info,
        borderColorHoverFocus: themeColors.infoDark,
        borderColorActive: themeColors.infoDark,
        boxShadow: themeColors.infoBoxShadow,
      },
      light: {
        color: themeColors.darkerDarker,
        colorOutline: themeColors.light,
        colorOutlineHover: themeColors.darkerDarker,
        backgroundColor: themeColors.light,
        backgroundColorDisabled: themeColors.light,
        backgroundColorHoverFocus: themeColors.lightDarker,
        backgroundColorActive: themeColors.lightDark,
        borderColor: themeColors.light,
        borderColorDisabled: themeColors.light,
        borderColorHoverFocus: themeColors.lightDark,
        borderColorActive: themeColors.lightDark,
        boxShadow: themeColors.lightBoxShadow,
        toggle: {
          color: themeColors.dark50Alpha,
          borderColor: themeColors.dark10Alpha,
          colorHoverFocus: themeColors.dark50Alpha,
          borderColorHoverFocus: themeColors.dark10Alpha,
        },
      },
      dark: {
        color: themeColors.white,
        colorOutline: themeColors.dark,
        colorOutlineHover: themeColors.white,
        backgroundColor: themeColors.dark,
        backgroundColorDisabled: themeColors.dark,
        backgroundColorHoverFocus: themeColors.darkDarker,
        backgroundColorActive: themeColors.darkDark,
        borderColor: themeColors.dark,
        borderColorDisabled: themeColors.dark,
        borderColorHoverFocus: themeColors.darkDark,
        borderColorActive: themeColors.darkDark,
        boxShadow: themeColors.darkBoxShadow,
        toggle: {
          color: themeColors.white50Alpha,
          borderColor: themeColors.white10Alpha,
          colorHoverFocus: themeColors.white50Alpha,
          borderColorHoverFocus: themeColors.white10Alpha,
        },
      },
      default: {
        color: themeColors.white,
        colorOutline: themeColors.secondary,
        colorOutlineHover: themeColors.white,
        backgroundColor: themeColors.secondary,
        backgroundColorDisabled: themeColors.secondary,
        backgroundColorHoverFocus: themeColors.secondaryDarker,
        backgroundColorActive: themeColors.secondary,
        borderColor: themeColors.secondary,
        borderColorDisabled: themeColors.secondary,
        borderColorHoverFocus: themeColors.secondaryDark,
        borderColorActive: themeColors.secondaryDark,
        boxShadow: themeColors.secondaryBoxShadow,
      },
    },
  },
};
