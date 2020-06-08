const dropdownItem = {
  colors: {
    default: {
      color: get => get('palette', 'darker'),
      colorHoverFocus: get => get('palette', 'darkerDarker'),
      colorActive: get => get('palette', 'darkerDark'),
      colorDisabled: get => get('palette', 'lightDarker'),
      backgroundColorActive: get => get('palette', 'primary'),
      backgroundColorHoverFocus: get => get('palette', 'light'),
    },
  },
  fontWeight: {
    default: '400',
  },
  padding: {
    default: '0.25rem 1.5rem',
  },
};

export default dropdownItem;
