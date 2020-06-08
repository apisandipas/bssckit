const formControl = {
  colors: {
    default: {
      color: get => get('palette', 'dark'),
      background: get => get('palette', 'white'),
      border: get => get('palette', 'darkLighter'),
      borderFocus: get => get('palette', 'darkLight'),
      boxShadowFocus: get => get('palette', 'darkerBoxShadow'),
      placeholder: get => get('palette', 'secondary'),
      backgroundColorDisabledReadonly: get => get('palette', 'whiteDark'),
      borderValid: get => get('palette', 'success'),
      formControlBoxShadowValid: get => get('palette', 'successBoxShadow'),
      borderInvalid: get => get('palette', 'danger'),
      formControlBoxShadowInvalid: get => get('palette', 'dangerBoxShadow'),
    },
  },
  borderRadius: get => get('globals', 'borderRadius'),
  border: get => get('globals', 'border'),
  boxShadow: {
    default: '0 0 0 0.2rem',
  },
  padding: {
    smRight: '0',
    smLeft: '0',
    lgRight: '0',
    lgLeft: '0',
    smPadding: '0.25rem 0.5rem',
    lgPadding: '0.5rem 1rem',
    defaultPadding: '0.375rem 0.75rem',
  },
  fontSize: {
    sm: '0.875rem',
    lg: '1.25rem',
    default: '1rem',
  },
  height: {
    select: 'calc(2.25rem + 2px)',
    selectLg: 'calc(2.875rem + 2px)',
    selectSm: 'calc(1.8125rem + 2px)',
  },
};

export default formControl;
