import styled, { css } from 'styled-components';
import { theme } from 'styled-tools';
import { up } from 'styled-breakpoints';
import defaultTheme from '../../../theme';
import { Div } from '../../Utilities/base';

const getDisplay = props =>
  props.row &&
  css`
    display: flex;
  `;

const getFlexWrap = props =>
  props.row &&
  css`
    flex-wrap: wrap;
  `;

const getMargin = props => {
  if (props.nomb && !props.row) {
    return css`
      margin-bottom: ${theme('formGroup.margin.nombNoRow')};
    `;
  }
  if (props.nomb && props.row) {
    return css`
      margin-right: ${theme('formGroup.margin.nombRowRight')};
      margin-left: ${theme('formGroup.margin.nombRowLeft')};
      & > div > label {
        margin-bottom: ${theme('formGroup.margin.nombRowDivLabelBottom')};
      }
      margin-bottom: ${theme('formGroup.margin.nombRowBottom')};
    `;
  } else if (props.row) {
    return css`
      margin-right: ${theme('formGroup.margin.rowRight')};
      margin-left: ${theme('formGroup.margin.rowLeft')};
      & > div > label {
        margin-bottom: ${theme('formGroup.margin.rowDivLabel')};
      }
      margin-bottom: ${theme('formGroup.margin.bottom')};
    `;
  }

  return css`
    margin-bottom: ${theme('formGroup.margin.bottom')};
  `;
};

const getJustifyContent = props =>
  props.justify &&
  css`
    justify-content: center;
  `;

const getAlignItems = props =>
  props.justify &&
  css`
    align-items: center;
  `;

const getBorderRadius = props => {
  if (props.noRadius) {
    return css`
      & > input,
      & > div > input,
      & > :not(input[type='file']),
      & > div > :not(input[type='file']) {
        border-radius: ${theme('formGroup.borderRadius.noRadius')};
      }
    `;
  }
  if (props.lg) {
    return css`
      & > input,
      & > div > input,
      & > :not(input[type='file']),
      & > div > :not(input[type='file']) {
        border-radius: ${theme('formGroup.borderRadius.lg')};
      }
    `;
  } else if (props.sm) {
    return css`
      & > input,
      & > div > input,
      & > :not(input[type='file']),
      & > div > :not(input[type='file']) {
        border-radius: ${theme('formGroup.borderRadius.sm')};
      }
    `;
  }

  return css`
    & > input,
    & > div > input,
    & > :not(input[type='file']),
    & > div > :not(input[type='file']) {
      border-radius: ${theme('formGroup.borderRadius.default')};
    }
  `;
};

const getLineHeight = () =>
  css`
    & > input,
    & > div > input,
    & > label,
    & > div > label {
      line-height: 1.5;
    }
  `;

const getFontSize = props => {
  if (props.lg) {
    return css`
      & > input,
      & > div > input,
      & > label,
      & > div > label {
        font-size: ${theme('formGroup.fontSize.lg')};
      }
    `;
  } else if (props.sm) {
    return css`
      & > input,
      & > div > input,
      & > label,
      & > div > label {
        font-size: ${theme('formGroup.fontSize.sm')};
      }
    `;
  }

  return css`
    & > input,
    & > div > input,
    & > label,
    & > div > label {
      font-size: ${theme('formGroup.fontSize.default')};
    }
  `;
};

const getPadding = props => {
  if (props.lg) {
    return css`
      & > label,
      & > div > label {
        padding-top: ${theme('formGroup.padding.labelTopLg')};
        padding-bottom: ${theme('formGroup.padding.labelBottomLg')};
      }
      & > input,
      & > div > input {
        padding: ${theme('formGroup.padding.inputLg')};
      }
    `;
  } else if (props.sm) {
    return css`
      & > label,
      & > div > label {
        padding-top: ${theme('formGroup.padding.labelTopSm')};
        padding-bottom: ${theme('formGroup.padding.labelBottomSm')};
      }
      & > input,
      & > div > input {
        padding: ${theme('formGroup.padding.inputSm')};
      }
    `;
  }

  return '';
};

const formGroupFormInline = props =>
  props.formInline &&
  css`
    ${up('sm')} {
      display: flex;
      flex: 0 0 auto;
      flex-flow: row wrap;
      align-items: center;
      margin-bottom: ${theme('formGroup.margin.inlineBottom')};
    }
  `;

const FormGroup = styled(Div)`
  box-sizing: border-box;
  ${props => getDisplay(props)}
  ${props => getFlexWrap(props)}
  ${props => getMargin(props)}
  ${props => getJustifyContent(props)}
  ${props => getAlignItems(props)}
  ${props => getBorderRadius(props)}
  ${props => getLineHeight(props)}
  ${props => getFontSize(props)}
  ${props => getPadding(props)}
  ${props => formGroupFormInline(props)}

  > label {
    width: 100%;
  }

`;

FormGroup.defaultProps = {
  theme: defaultTheme,
};

export default FormGroup;
