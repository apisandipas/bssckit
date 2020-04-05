import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from 'styled-tools';
import defaultTheme from '../../../theme';
import { Input } from '../../Utilities/base';

const getDisplay = props => {
  if (props.inline) {
    return css`
      display: inline-block;
    `;
  }

  return css`
    display: block;
  `;
};

const getPadding = props =>
  (props.sm || props.lg) &&
  css`
    padding-right: ${theme('formControl.plainText.smRight')};
    padding-left: ${theme('formControl.plainText.smLeft')};
  `;

const FormControlPlainText = styled(Input).attrs({
  readOnly: true,
})`
  width: 100%;
  padding-top: ${theme('formControl.plainText.top')};
  padding-bottom: ${theme('formControl.plainText.bottom')};
  margin-bottom: ${theme('formControl.plainText.bottom')};
  line-height: 1.5;
  background-color: ${theme('formControl.plainText.colors.default.backgroundColor')};
  border: solid ${theme('formControl.plainText.colors.default.borderColor')};
  border-width: 1px 0;
  box-sizing: border-box;
  ${props => getDisplay(props)};
  ${props => getPadding(props)};
`;

FormControlPlainText.defaultProps = {
  theme: defaultTheme,
};

export default FormControlPlainText;
