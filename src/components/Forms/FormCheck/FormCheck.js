import styled, { css } from 'styled-components';
import { theme } from 'styled-tools';
import defaultTheme from '../../../theme';
import { Div } from '../../Utilities/base';

const getDisplay = props => {
  if (props.inline) {
    return css`
      display: inline-flex;
    `;
  }

  return css`
    display: block;
  `;
};

const getAlignItems = props =>
  props.inline &&
  css`
    align-items: center;
  `;

const getPaddingLeft = props =>
  props.inline &&
  css`
    padding-left: ${theme('formCheck.padding.inlineLeft')};
  `;

const getMarginRight = props =>
  props.inline &&
  css`
    margin-right: ${theme('formCheck.margin.inlineRight')};
  `;

const FormCheck = styled(Div)`
  position: relative;
  box-sizing: border-box;
  & > label {
    margin-bottom: ${theme('formCheck.margin.labelBottom')};
  };
  & > input {
    position: static;
    margin-top: ${theme('formCheck.margin.inputTop')};
    margin-right:${theme('formCheck.margin.inputRight')};
    margin-left: ${theme('formCheck.margin.inputLeft')};
  };
  ${props => getDisplay(props)}
  ${props => getAlignItems(props)}
  ${props => getPaddingLeft(props)}
  ${props => getMarginRight(props)}
`;

FormCheck.defaultProps = {
  props: defaultTheme,
};

export default FormCheck;
