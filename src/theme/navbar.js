const navbar = {
  colors: {
    dark: {
      color: get => get('palette', 'white50Alpha'),
      borderColor: get => get('palette', 'white10Alpha'),
      backgroundColor: get => get('palette', 'dark'),
    },
    light: {
      color: get => get('palette', 'dark50Alpha'),
      borderColor: get => get('palette', 'dark10Alpha'),
      backgroundColor: get => get('palette', 'light'),
    },
    default: get => get('navbar', 'colors', 'light'),
  },
  padding: {
    default: '0.5rem 1rem',
  },
};

export default navbar;
