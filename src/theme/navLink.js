const navLink = {
  colors: {
    light: {
      colorDisabled: get => get('palette', 'darkLighter'),
      colorDisabledHoverFocus: get => get('palette', 'darkLighter'),
      colorTabsActive: get => get('palette', 'dark'),
      colorTabsActiveHoverFocus: get => get('palette', 'darkDark'),
      colorPillsActive: get => get('palette', 'white'),
      colorPillsActiveHoverFocus: get => get('palette', 'white'),
      color: get => get('palette', 'primary'),
      colorHoverFocus: get => get('palette', 'primaryDarker'),
      backgroundColorPillsActive: get => get('palette', 'primary'),
      borderColorTabsActive: get =>
        `${get('palette', 'darkLight')} ${get('palette', 'darkLight')} ${get('palette', 'white')}`,
      borderColorTabsHoverFocus: get =>
        `${get('palette', 'darkLight')} ${get('palette', 'darkLight')} ${get('palette', 'darkLight')}`,
      borderColorTabsDisabled: get => get('palette', 'transparent'),
      borderColorPillsActive: get => get('palette', 'primary'),
      borderColor: get => get('palette', 'transparent'),
    },
    dark: get => get('navLink', 'colors', 'light'),
    default: get => get('navLink', 'colors', 'light'),
  },
  padding: {
    default: '0.5rem',
  },
  borderRadius: get => get('globals', 'borderRadius'),
  border: get => get('globals', 'border'),
};

export default navLink;
