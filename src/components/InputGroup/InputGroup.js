import styled, { css } from 'styled-components';
import { getBorderRadius, getPadding, getFontSize, getMargin } from '../../utils/themeFunctions';
import { Div } from '../Utilities/base';

const borderRadius = props => {
  if (props.lg) {
    return css`
      & > input {
        border-radius: ${getBorderRadius(props, 'inputGroup', 'lg')};
      }
    `;
  } else if (props.sm) {
    return css`
      & > input {
        border-radius: ${getBorderRadius(props, 'inputGroup', 'sm')};
      }
    `;
  }

  return css`
    & > input {
      border-radius: ${getBorderRadius(props, 'inputGroup', 'default')};
    }
  `;
};

const fontSize = props => {
  if (props.lg) {
    return css`
      & > div > span,
      & > input {
        line-height: 1.5;
        font-size: ${getFontSize(props, 'inputGroup', 'lg')};
      }
    `;
  } else if (props.sm) {
    return css`
      & > div > span,
      & > input {
        line-height: 1.5;
        font-size: ${getFontSize(props, 'inputGroup', 'sm')};
      }
    `;
  }

  return css`
    & > div > span,
    & > input {
      line-height: 1.5;
      font-size: ${getFontSize(props, 'inputGroup', 'default')};
    }
  `;
};

const padding = props => {
  if (props.lg) {
    return css`
      & > div > span,
      & > input {
        padding: ${getPadding(props, 'inputGroup', 'lg')};
      }
    `;
  } else if (props.sm) {
    return css`
      & > div > span,
      & > input {
        padding: ${getPadding(props, 'inputGroup', 'sm')};
      }
    `;
  }

  return '';
};

const InputGroup = styled(Div)`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
  line-height: 1.5;
  & > input,
  & > textarea,
  & > select {
    position: relative;
    flex: 1 1 auto;
    width: 1%;
    margin-bottom: ${props => getMargin(props, 'inputGroup', 'bottom')};
    &:not(:last-child) {
      border-top-right-radius: ${props => getBorderRadius(props, 'inputGroup', 'noRadius')};
      border-bottom-right-radius: ${props => getBorderRadius(props, 'inputGroup', 'noRadius')};
    }
    &:not(:first-child) {
      border-top-left-radius: ${props => getBorderRadius(props, 'inputGroup', 'noRadius')};
      border-bottom-left-radius: ${props => getBorderRadius(props, 'inputGroup', 'noRadius')};
    }
  }
  ${props => borderRadius(props)};
  ${props => fontSize(props)};
  ${props => padding(props)};
`;

export default InputGroup;
