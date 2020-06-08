const inputGroupText = {
  colors: {
    default: {
      color: get => get('palette', 'dark'),
      backgroundColor: get => get('palette', 'lightDarker'),
      borderColor: get => get('palette', 'lightDark'),
    },
  },
  margin: {
    bottom: '0',
    radioCheckboxTop: '0',
    radioCheckboxRight: '0',
    radioCheckboxBottom: '0',
  },
  padding: {
    default: '0.375rem 0.75rem',
  },
  fontWeight: {
    default: '400',
  },
  fontSize: get => get('globals', 'fontSize'),
  borderRadius: get => get('globals', 'borderRadius'),
  border: get => get('globals', 'border'),
};

export default inputGroupText;
