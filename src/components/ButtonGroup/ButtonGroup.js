import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { theme } from 'styled-tools';
import defaultTheme from '../../theme';
import { Div } from '../base';

const getSize = props => {
  if (props.lg) {
    return css`
      padding: ${theme('buttonGroup.padding.lg')};
      font-size: ${theme('buttonGroup.fontSize.lg')};
      line-height: 1.5;
    `;
  } else if (props.sm) {
    return css`
      padding: ${theme('buttonGroup.padding.sm')};
      font-size: ${theme('buttonGroup.fontSize.sm')};
      line-height: 1.5;
    `;
  }

  return css`
    padding: ${theme('buttonGroup.padding.default')};
    font-size: ${theme('buttonGroup.fontSize.default')};
    line-height: 1.5;
  `;
};

const getVertical = props => {
  if (props.vertical) {
    return css`
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      & > button {
        width: 100%;
        &:not(:last-child) {
          border-bottom-right-radius: 0;
          border-bottom-left-radius: 0;
        }
        &:not(:first-child) {
          border-top-left-radius: 0;
          border-top-right-radius: 0;
        }
      }
    `;
  }

  return css`
    & > button {
      &:not(:last-child) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      &:not(:first-child) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  `;
};

const ButtonGroup = styled(Div)`
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  & > button {
    line-height: 1.5;
    position: relative;
    flex: 0 1 auto;
    &:hover {
      z-index: 1;
    }
    ${props => getSize(props)};
  }
  ${props => getVertical(props)};
`;

ButtonGroup.propTypes = {
  theme: PropTypes.object.isRequired,
};

ButtonGroup.defaultProps = {
  theme: defaultTheme,
};

export default ButtonGroup;
