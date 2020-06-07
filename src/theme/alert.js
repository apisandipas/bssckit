import globals from './globals';
import palette from './palette';

const alert = {
  colors: {
    primary: {
      text: get => get('palette', 'primaryDarkest'),
      background: get => get('palette', 'primaryLight'),
      border: get => get('palette', 'primaryLighter'),
      borderTop: get => get('palette', 'primaryLighter'),
      hover: get => get('palette', 'primaryDarkest'),
    },
    secondary: {
      text: get => get('palette', 'secondaryDarkest'),
      background: get => get('palette', 'secondaryLight'),
      border: get => get('palette', 'secondaryLighter'),
      borderTop: get => get('palette', 'secondaryLighter'),
      hover: get => get('palette', 'secondaryDarkest'),
    },
    success: {
      text: get => get('palette', 'successDarkest'),
      background: get => get('palette', 'successLight'),
      border: get => get('palette', 'successLighter'),
      borderTop: get => get('palette', 'successLighter'),
      hover: get => get('palette', 'successDarkest'),
    },
    danger: {
      text: get => get('palette', 'dangerDarkest'),
      background: get => get('palette', 'dangerLight'),
      border: get => get('palette', 'dangerLighter'),
      borderTop: get => get('palette', 'dangerLighter'),
      hover: get => get('palette', 'dangerDarkest'),
    },
    warning: {
      text: get => get('palette', 'warningDarkest'),
      background: get => get('palette', 'warningLight'),
      border: get => get('palette', 'warningLighter'),
      borderTop: get => get('palette', 'warningLighter'),
      hover: get => get('palette', 'warningDarkest'),
    },
    info: {
      text: get => get('palette', 'infoDarkest'),
      background: get => get('palette', 'infoLight'),
      border: get => get('palette', 'infoLighter'),
      borderTop: get => get('palette', 'infoLighter'),
      hover: get => get('palette', 'infoDarkest'),
    },
    light: {
      text: get => get('palette', 'lightarkest'),
      background: get => get('palette', 'lightLight'),
      border: get => get('palette', 'lightDark'),
      borderTop: get => get('palette', 'lightLighter'),
      hover: get => get('palette', 'darkDarkest'),
    },
    dark: {
      text: get => get('palette', 'darkDarkest'),
      background: get => get('palette', 'darkLight'),
      border: get => get('palette', 'darkLighter'),
      borderTop: get => get('palette', 'darkLighter'),
      hover: get => get('palette', 'darkDarkest'),
    },
    default: {
      text: get => get('palette', 'secondaryDarkest'),
      background: get => get('palette', 'secondaryLight'),
      border: get => get('palette', 'secondaryLighter'),
      borderTop: get => get('palette', 'secondaryLighter'),
      hover: get => get('palette', 'secondaryDarkest'),
    },
  },
  margin: {
    bottom: '1rem',
  },
  padding: {
    default: '0.75rem 1.25rem',
    dismissibleRight: '4rem',
  },
  border: {
    default: '1px solid transparent',
  },
  borderRadius: get => get('globals', 'borderRadius'),
  fontWeight: {
    default: '700',
  },
};

export default alert;
