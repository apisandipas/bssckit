import palette from '../theme/palette';
import globals from '../theme/globals';

const listGroupItem = {
  colors: {
    primary: {
      colorDisabled: palette.lightDarker,
      backgroundColorDisabled: palette.white,
      colorActive: palette.white,
      color: palette.primaryDarkest,
      backgroundColor: palette.primaryLighter,
      backgroundColorHoverFocusAction: palette.primaryLighter,
      backgroundColorActive: palette.primaryDarkest,
      backgroundColorHoverFocusActive: palette.primaryDarkest,
      borderColorActive: palette.primaryDarkest,
      borderColor: palette.weakBorder,
    },
    secondary: {
      colorDisabled: palette.lightDarker,
      backgroundColorDisabled: palette.white,
      colorActive: palette.white,
      color: palette.secondaryDarkest,
      backgroundColor: palette.secondaryLighter,
      backgroundColorHoverFocusAction: palette.secondaryLighter,
      backgroundColorActive: palette.secondaryDarkest,
      backgroundColorHoverFocusActive: palette.secondaryDarkest,
      borderColorActive: palette.secondaryDarkest,
      borderColor: palette.weakBorder,
    },
    success: {
      colorDisabled: palette.lightDarker,
      backgroundColorDisabled: palette.white,
      colorActive: palette.white,
      color: palette.successDarkest,
      backgroundColor: palette.successLighter,
      backgroundColorHoverFocusAction: palette.successLighter,
      backgroundColorActive: palette.successDarkest,
      backgroundColorHoverFocusActive: palette.successDarkest,
      borderColorActive: palette.successDarkest,
      borderColor: palette.weakBorder,
    },
    info: {
      colorDisabled: palette.lightDarker,
      backgroundColorDisabled: palette.white,
      colorActive: palette.white,
      color: palette.infoDarkest,
      backgroundColor: palette.infoLighter,
      backgroundColorHoverFocusAction: palette.infoLighter,
      backgroundColorActive: palette.infoDarkest,
      backgroundColorHoverFocusActive: palette.infoDarkest,
      borderColorActive: palette.infoDarkest,
      borderColor: palette.weakBorder,
    },
    warning: {
      colorDisabled: palette.lightDarker,
      backgroundColorDisabled: palette.white,
      colorActive: palette.white,
      color: palette.warningDarkest,
      backgroundColor: palette.warningLighter,
      backgroundColorHoverFocusAction: palette.warningLighter,
      backgroundColorActive: palette.warningDarkest,
      backgroundColorHoverFocusActive: palette.warningDarkest,
      borderColorActive: palette.warningDarkest,
      borderColor: palette.weakBorder,
    },
    danger: {
      colorDisabled: palette.lightDarker,
      backgroundColorDisabled: palette.white,
      colorActive: palette.white,
      color: palette.dangerDarkest,
      backgroundColor: palette.dangerLighter,
      backgroundColorHoverFocusAction: palette.dangerLighter,
      backgroundColorActive: palette.dangerDarkest,
      backgroundColorHoverFocusActive: palette.dangerDarkest,
      borderColorActive: palette.dangerDarkest,
      borderColor: palette.weakBorder,
    },
    light: {
      colorDisabled: palette.lightDarker,
      backgroundColorDisabled: palette.white,
      colorActive: palette.white,
      color: palette.lightDarkest,
      backgroundColor: palette.lightDark,
      backgroundColorHoverFocusAction: palette.lightLighter,
      backgroundColorActive: palette.lightDarkest,
      backgroundColorHoverFocusActive: palette.lightDarkest,
      borderColorActive: palette.lightDarkest,
      borderColor: palette.weakBorder,
    },
    dark: {
      colorDisabled: palette.lightDarker,
      backgroundColorDisabled: palette.white,
      colorActive: palette.white,
      color: palette.darkDarkest,
      backgroundColor: palette.darkLighter,
      backgroundColorHoverFocusAction: palette.darkLighter,
      backgroundColorActive: palette.darkDarkest,
      backgroundColorHoverFocusActive: palette.darkDarkest,
      borderColorActive: palette.darkDarkest,
      borderColor: palette.weakBorder,
    },
    default: {
      colorDisabled: palette.lightDark,
      backgroundColor: palette.white,
      backgroundColorDisabled: palette.white,
      backgroundColorAction: palette.light,
      backgroundColorHoverFocusAction: palette.light,
      color: palette.lightDarkest,
      colorActive: palette.white,
      colorAction: palette.lightDarkest,
      borderColor: palette.weakBorder,
      borderColorActive: palette.primary,
      backgroundColorActive: palette.primary,
    },
  },
  padding: {
    default: '0.75rem 1.25rem',
  },
  border: globals.border,
  borderRadius: globals.borderRadius,
};

export default listGroupItem;