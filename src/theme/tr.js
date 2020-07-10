const tr = {
  colors: {
    primary: {
      backgroundColor: get => get('palette', 'primaryLighter'),
      backgroundColorHoverFocus: get => get('palette', 'primary'),
      activeBackgroundColor: get => get('palette', 'dark10Alpha'),
      activeBackgroundColorHoverFocus: get => get('palette', 'dark10Alpha'),
    },
    secondary: {
      backgroundColor: get => get('palette', 'secondaryLighter'),
      backgroundColorHoverFocus: get => get('palette', 'secondary'),
      activeBackgroundColor: get => get('palette', 'dark10Alpha'),
      activeBackgroundColorHoverFocus: get => get('palette', 'dark10Alpha'),
    },
    success: {
      backgroundColor: get => get('palette', 'successLighter'),
      backgroundColorHoverFocus: get => get('palette', 'success'),
      activeBackgroundColor: get => get('palette', 'dark10Alpha'),
      activeBackgroundColorHoverFocus: get => get('palette', 'dark10Alpha'),
    },
    info: {
      backgroundColor: get => get('palette', 'infoLighter'),
      backgroundColorHoverFocus: get => get('palette', 'info'),
      activeBackgroundColor: get => get('palette', 'dark10Alpha'),
      activeBackgroundColorHoverFocus: get => get('palette', 'dark10Alpha'),
    },
    warning: {
      backgroundColor: get => get('palette', 'warningLighter'),
      backgroundColorHoverFocus: get => get('palette', 'warning'),
      activeBackgroundColor: get => get('palette', 'dark10Alpha'),
      activeBackgroundColorHoverFocus: get => get('palette', 'dark10Alpha'),
    },
    danger: {
      backgroundColor: get => get('palette', 'dangerLighter'),
      backgroundColorHoverFocus: get => get('palette', 'danger'),
      activeBackgroundColor: get => get('palette', 'dark10Alpha'),
      activeBackgroundColorHoverFocus: get => get('palette', 'dark10Alpha'),
    },
    light: {
      backgroundColor: get => get('palette', 'lightLighter'),
      backgroundColorHoverFocus: get => get('palette', 'lightDark'),
      activeBackgroundColor: get => get('palette', 'dark10Alpha'),
      activeBackgroundColorHoverFocus: get => get('palette', 'dark10Alpha'),
    },
    dark: {
      backgroundColor: get => get('palette', 'darkLighter'),
      backgroundColorHoverFocus: get => get('palette', 'dark'),
      activeBackgroundColor: get => get('palette', 'dark10Alpha'),
      activeBackgroundColorHoverFocus: get => get('palette', 'dark10Alpha'),
    },
    default: get => get('tr', 'colors', 'secondary'),
  },
};

export default tr;
