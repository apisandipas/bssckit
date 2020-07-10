const table = {
  colors: {
    light: {
      borderedBorderColor: get => get('palette', 'lightDarker'),
      stripedBackgroundColor: get => get('palette', 'dark10Alpha'),
      backgroundColorHoverFocus: get => get('palette', 'dark25Alpha'),
      darkColor: get => get('palette', 'white'),
      darkBackgroundColor: get => get('palette', 'darker'),
      darkBorderColor: get => get('palette', 'darkerDarker'),
      theadDarkColor: get => get('palette', 'white'),
      theadDarkBackgroundColor: get => get('palette', 'darker'),
      theadDarkBorderColor: get => get('palette', 'darkerDarker'),
      stripedDarkBackgroundColor: get => get('palette', 'white10Alpha'),
      darkBackgroundColorHoverFocus: get => get('palette', 'white10Alpha'),
      theadLightColor: get => get('palette', 'dark'),
      theadLightBackgroundColor: get => get('palette', 'darkLight'),
      theadLightBorderColor: get => get('palette', 'darkLight'),
      borderColor: get => get('palette', 'darkLight'),
      backgroundColor: get => get('palette', 'white'),
    },
    dark: get => get('table', 'colors', 'light'),
    default: get => get('table', 'colors', 'light'),
    padding: {
      sm: '0.3rem',
    },
  },
  border: get => get('globals', 'border'),
};

export default table;
