import styled, { css } from 'styled-components';
import { getColor, getPadding, getMargin } from '../../../utils/themeFunctions';
import { Input } from '../../Utilities/base';

const display = props => {
  if (props.inline) {
    return css`
      display: inline-block;
    `;
  }

  return css`
    display: block;
  `;
};

const padding = props =>
  (props.sm || props.lg) &&
  css`
    padding-right: ${getPadding(props, 'formControlPlainText', 'smRight')};
    padding-left: ${getPadding(props, 'formControlPlainText', 'smLeft')};
  `;

const FormControlPlainText = styled(Input)`
  width: 100%;
  padding-top: ${props => getPadding(props, 'formControlPlainText', 'top')};
  padding-bottom: ${props => getPadding(props, 'formControlPlainText', 'bottom')};
  margin-bottom: ${props => getMargin(props, 'formControlPlainText', 'bottom')};
  line-height: 1.5;
  background-color: ${props => getColor(props, 'formControlPlainText', 'backgroundColor')};
  border: 1px solid ${props => getColor(props, 'formControlPlainText', 'borderColor')};
  box-sizing: border-box;
  ${props => display(props)};
  ${props => padding(props)};

  &:focus {
    color: ${props => getColor(props, 'formControl', 'color')};
    outline: 0;
    box-shadow: 0 0 0 0.2rem ${props => getColor(props, 'formControl', 'boxShadowFocus')};
  }
`;

export default FormControlPlainText;
