const modalContent = {
  colors: {
    default: {
      backgroundColor: get => get('palette', 'white'),
      borderColor: get => get('palette', 'weakBorder'),
    },
  },
  borderRadius: get => get('globals', 'borderRadius'),
  border: get => get('globals', 'border'),
};

export default modalContent;
