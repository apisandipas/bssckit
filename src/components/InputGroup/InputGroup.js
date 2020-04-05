import styled, { css } from 'styled-components';
import { theme } from 'styled-tools';
import defaultTheme from '../../theme';
import { Div } from '../Utilities/base';

const getBorderRadius = props => {
  if (props.lg) {
    return css`
      & > input {
        border-radius: ${theme('inputGroup.borderRadius.lg')};
      }
    `;
  } else if (props.sm) {
    return css`
      & > input {
        border-radius: ${theme('inputGroup.borderRadius.sm')};
      }
    `;
  }

  return css`
    & > input {
      border-radius: ${theme('inputGroup.borderRadius.default')};
    }
  `;
};

const getFontSize = props => {
  if (props.lg) {
    return css`
      & > div > span,
      & > input {
        line-height: 1.5;
        font-size: ${theme('inputGroup.fontSize.lg')};
      }
    `;
  } else if (props.sm) {
    return css`
      & > div > span,
      & > input {
        line-height: 1.5;
        font-size: ${theme('inputGroup.fontSize.sm')};
      }
    `;
  }

  return css`
    & > div > span,
    & > input {
      line-height: 1.5;
      font-size: ${theme('inputGroup.fontSize.default')};
    }
  `;
};

const getPadding = props => {
  if (props.lg) {
    return css`
      & > div > span,
      & > input {
        padding: ${theme('inputGroup.padding.lg')};
      }
    `;
  } else if (props.sm) {
    return css`
      & > div > span,
      & > input {
        padding: ${theme('inputGroup.padding.sm')};
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
    margin-bottom: ${theme('inputGroup.margin.bottom')};
    &:not(:last-child) {
      border-top-right-radius: ${theme('inputGroup.borderRadius.noRadius')};
      border-bottom-right-radius: ${theme('inputGroup.borderRadius.noRadius')};
    }
    &:not(:first-child) {
      border-top-left-radius: ${theme('inputGroup.borderRadius.noRadius')};
      border-bottom-left-radius: ${theme('inputGroup.borderRadius.noRadius')};
    }
  }
  ${props => getBorderRadius(props)};
  ${props => getFontSize(props)};
  ${props => getPadding(props)};
`;

InputGroup.defaultProps = {
  theme: defaultTheme,
};

export default InputGroup;
