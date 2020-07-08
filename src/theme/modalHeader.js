const modalHeader = {
  colors: {
    default: {
      borderColor: get => get('palette', 'weakBorder'),
    },
  },
  padding: {
    default: '1rem',
  },
  border: get => get('globals', 'border'),
  borderRadius: get => get('globals', 'borderRadius'),
};

export default modalHeader;
