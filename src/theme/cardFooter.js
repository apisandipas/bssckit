import palette from './palette';
import globals from './globals';

const cardFooter = {
  colors: {
    default: {
      background: palette.weakBackground,
      borderTop: palette.weakBorder,
    },
  },
  padding: {
    default: '0.75rem 1.25rem',
  },
  borderRadius: {
    noRadius: globals.borderRadius.noRadius,
    default: '0 0 calc(0.25rem - 1px) calc(0.25rem - 1px)',
  },
  border: globals.border,
};

export default cardFooter;
