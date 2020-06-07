const cardHeader = {
  colors: {
    default: {
      background: get => get('palette', 'white'),
      borderBottom: get => get('palette', 'weakBorder'),
    },
  },
  padding: {
    default: '0.75rem 1.25rem',
  },
  borderRadius: {
    noRadius: get => get('globals', 'borderRadius', 'noRadius'),
    topLeftRight: 'calc(0.25rem - 1px)',
  },
  border: get => get('globals', 'border'),
};

export default cardHeader;
