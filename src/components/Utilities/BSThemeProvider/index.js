import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import merge from 'lodash.merge';
import defaultTheme from '../../../theme';

const propTypes = {
  theme: PropTypes.object.isRequired,
};

const defaultProps = {
  theme: defaultTheme,
};

const BSThemeProvider = ({ theme, children }) => {
  const finalTheme = merge({}, defaultTheme, theme);
  return <ThemeProvider theme={finalTheme}>{children}</ThemeProvider>;
};

BSThemeProvider.propTypes = propTypes;
BSThemeProvider.defaultProps = defaultProps;

export default BSThemeProvider;
