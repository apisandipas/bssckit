import globals from './globals';
import palette from './palette';

const inputGroupText = {
  colors: {
    default: {
      color: palette.dark,
      backgroundColor: palette.lightDarker,
      borderColor: palette.lightDark,
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
  fontSize: globals.fontSize,
  borderRadius: globals.borderRadius,
  border: globals.border,
};

export default inputGroupText;
