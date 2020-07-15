const tooltipInner = {
  colors: {
    default: {
      color: get => get('palette', 'white'),
      backgroundColor: get => get('palette', 'darker'),
    },
  },
  padding: {
    default: '0.25rem 0.5rem',
  },
  borderRadius: get => get('globals', 'borderRadius'),
};

export default tooltipInner;
