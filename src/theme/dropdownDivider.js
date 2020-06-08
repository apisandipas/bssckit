const dropdownDivider = {
  colors: {
    default: {
      borderTop: get => get('palette', 'lightDarker'),
    },
  },
  padding: {
    top: '0.5rem',
  },
  margin: {
    top: '0.6rem',
  },
  border: get => get('globals', 'border'),
};

export default dropdownDivider;
