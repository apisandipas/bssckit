import palette from './palette';
import globals from './globals';

const cardHeader = {
  colors: {
    default: {
      background: palette.white,
      borderBottom: palette.weakBorder,
    },
  },
  padding: {
    default: '0.75rem 1.25rem',
  },
  borderRadius: {
    noRadius: globals.borderRadius.noRadius,
    topLeftRight: 'calc(0.25rem - 1px)',
  },
  border: globals.border,
};

export default cardHeader;
