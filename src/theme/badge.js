const badge = {
  colors: {
    primary: {
      backgroundColor: get => get('palette', 'primary'),
      backgroundColorHoverFocus: get => get('palette', 'primaryDarker'),
      color: get => get('palette', 'white'),
      linkColor: get => get('palette', 'white'),
    },
    secondary: {
      backgroundColor: get => get('palette', 'secondary'),
      backgroundColorHoverFocus: get => get('palette', 'secondaryDarker'),
      color: get => get('palette', 'white'),
      linkColor: get => get('palette', 'white'),
    },
    success: {
      backgroundColor: get => get('palette', 'success'),
      backgroundColorHoverFocus: get => get('palette', 'successDarker'),
      color: get => get('palette', 'white'),
      linkColor: get => get('palette', 'white'),
    },
    danger: {
      backgroundColor: get => get('palette', 'danger'),
      backgroundColorHoverFocus: get => get('palette', 'dangerDarker'),
      color: get => get('palette', 'white'),
      linkColor: get => get('palette', 'white'),
    },
    warning: {
      backgroundColor: get => get('palette', 'warning'),
      backgroundColorHoverFocus: get => get('palette', 'warningDarker'),
      color: get => get('palette', 'darker'),
      linkColor: get => get('palette', 'darker'),
    },
    info: {
      backgroundColor: get => get('palette', 'info'),
      backgroundColorHoverFocus: get => get('palette', 'infoDarker'),
      color: get => get('palette', 'white'),
      linkColor: get => get('palette', 'white'),
    },
    light: {
      backgroundColor: get => get('palette', 'light'),
      backgroundColorHoverFocus: get => get('palette', 'lightDarker'),
      color: get => get('palette', 'darker'),
      linkColor: get => get('palette', 'darker'),
    },
    dark: {
      backgroundColor: get => get('palette', 'dark'),
      backgroundColorHoverFocus: get => get('palette', 'darkDarker'),
      color: get => get('palette', 'white'),
      linkColor: get => get('palette', 'white'),
    },
    default: get => get('badge', 'colors', 'secondary'),
  },
  padding: {
    pill: '0.25rem 0.6rem',
    default: '0.25rem 0.4rem',
  },
  fontWeight: {
    default: '700',
  },
  borderRadius: get => get('globals', 'borderRadius'),
};

export default badge;
