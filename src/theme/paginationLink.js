const paginationLink = {
  colors: {
    default: {
      color: get => get('palette', 'primary'),
      borderColor: get => get('palette', 'gray300'),
      backgroundColor: get => get('palette', 'white'),
      hoverColor: get => get('palette', 'primaryDark'), // TODO: refactor to use darken function within theme file
      hoverBackground: get => get('palette', 'gray200'),
      activeColor: get => get('palette', 'white'),
      activeBackgroundColor: get => get('palette', 'primary'),
      activeBorderColor: get => get('palette', 'primary'),
      disabledColor: get => get('palette', 'gray600'),
      disabledBackground: get => get('palette', 'white'),
      disabledBorderColor: get => get('palette', 'gray300'),
    },
  },
  borderRadius: get => get('globals', 'borderRadius'),
  border: get => get('globals', 'border'),
  padding: {
    default: '0.375rem 0.75rem',
    sm: '0.25rem 0.5rem',
    lg: '0.75rem 1.5rem',
  },
};

export default paginationLink;
