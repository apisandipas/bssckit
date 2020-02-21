import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { theme, ifProp } from 'styled-tools';
import { Div } from '../base';
export { default as DismissableAlert } from './DismissableAlert';
import defaultTheme from '../../utils/defaultTheme';
import { themeContexts } from '../../utils/consts';

const { alert } = defaultTheme;

export const AlertDismissIcon = styled.span.attrs({
  ariaHidden: 'true',
})`
  font-size: 2rem;
  cursor: pointer;
  line-height: 1rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: inherit;
  opacity: 0.5;

  &:hover,
  &:focus {
    opacity: 0.75;
  }
`;

const Alert = styled(Div).attrs({
  role: 'alert',
})`
  position: relative;
  padding: ${theme('alert.padding.default', alert.padding.default)};
  margin-bottom: ${theme('alert.margin.bottom', alert.margin.bottom)};
  border: ${theme('alert.border', alert.border.default)};
  border-radius: ${theme('alert.borderRadius.default', alert.borderRadius.default)};

  & > a,
  & > a:hover {
    font-weight: ${theme('alert.fontWeight.default', alert.fontWeight.default)};
  }

  & > h1,
  & > h2,
  & > h3,
  & > h4,
  & > h5,
  & > h6 {
    color: inherit;
  }

  ${themeContexts.map(context => {
    const { text, background, border } = defaultTheme.alert.colors[context];

    return ifProp(
      context,
      css`
        color: ${theme(`colorScheme.${context}Darkest`, text)};
        background-color: ${theme(`colorScheme.${context}Light`, background)};
        border-color: ${theme(`colorScheme.${context}Lighter`, border)};

        & > a,
        & > a:hover {
          color: ${theme(`colorScheme.${context}Darkest`, text)};
        }

        & > h1,
        & > h2,
        & > h3,
        & > h4,
        & > h5,
        & > h6 {
          color: ${theme(`colorScheme.${context}Darkest`, text)};
        }

        & > hr {
          border-top-color: ${theme(`colorScheme.${context}Darkest`, text)};
        }
      `
    );
  })}

  ${ifProp(
    'noRadius',
    css`
      border-radius: 0;
    `
  )}

  ${ifProp(
    'pill',
    css`
      border-radius: 10rem;
    `
  )}

  ${ifProp(
    'dismissible',
    css`
      padding-right: ${theme('alert.padding.dismissibleRight', alert.padding.dismissibleRight)};
    `
  )};
`;

export default Alert;
