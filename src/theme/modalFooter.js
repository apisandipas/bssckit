const modalFooter = {
  colors: {
    default: {
      borderColor: get => get('palette', 'weakBorder'),
    },
  },
  padding: {
    default: '1rem',
  },
  border: get => get('globals', 'border'),
};

export default modalFooter;
