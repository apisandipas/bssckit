const formControlPlainText = {
  colors: {
    default: {
      backgroundColor: get => get('palette', 'transparent'),
      borderColor: get => get('palette', 'transparent'),
    },
  },
  padding: {
    top: '0.375rem',
    bottom: '0.375rem',
    smRight: '0',
    smLeft: '0',
  },
  margin: {
    bottom: '0',
  },
};

export default formControlPlainText;
