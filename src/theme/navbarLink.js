const navbarLink = {
  colors: {
    dark: {
      colorDisabled: get => get('palette', 'white25Alpha'),
      colorDisabledHoverFocus: get => get('palette', 'white25Alpha'),
      colorActive: get => get('palette', 'white90Alpha'),
      colorActiveHoverFocus: get => get('palette', 'white90Alpha'),
      color: get => get('palette', 'white50Alpha'),
      colorHoverFocus: get => get('palette', 'white75Alpha'),
    },
    light: {
      colorDisabled: get => get('palette', 'dark25Alpha'),
      colorDisabledHoverFocus: get => get('palette', 'dark25Alpha'),
      colorActive: get => get('palette', 'dark90Alpha'),
      colorActiveHoverFocus: get => get('palette', 'dark90Alpha'),
      color: get => get('palette', 'dark50Alpha'),
      colorHoverFocus: get => get('palette', 'dark75Alpha'),
    },
    default: get => get('navbarLink', 'colors', 'light'),
  },
  padding: {
    brandTop: '0.3125rem',
    brandBottom: '0.3125rem',
  },
  fontSize: get => get('globals', 'fontSize'),
};

export default navbarLink;
