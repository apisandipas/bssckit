import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components/macro';
import { theme, ifProp } from 'styled-tools';
import { Div } from '../base';
export { default as DismissableAlert } from './DismissableAlert';

const types = [
  {
    name: 'primary',
    defaultColors: {
      color: 'rgb(0, 64, 133)',
      backgroundColor: 'rgb(204, 229, 255)',
      borderColor: 'rgb(156, 201, 251)',
    },
  },
  {
    name: 'secondary',
    defaultColors: {
      color: 'rgb(56, 61, 65)',
      backgroundColor: 'rgb(226, 227, 229)',
      borderColor: ' rgb(180, 181, 183)',
    },
  },
  {
    name: 'success',
    defaultColors: {
      color: 'rgb(21, 87, 36)',
      backgroundColor: 'rgb(212, 237, 218)',
      borderColor: 'rgb(114, 216, 137)',
    },
  },
  {
    name: 'danger',
    defaultColors: {
      color: 'rgb(114, 28, 36)',
      backgroundColor: 'rgb(248, 215, 218)',
      borderColor: 'rgb(245, 180, 187)',
    },
  },
  {
    name: 'warning',
    defaultColors: {
      color: 'rgb(133, 100, 4)',
      backgroundColor: 'rgb(255, 243, 205)',
      borderColor: 'rgb(243, 218, 141)',
    },
  },
  {
    name: 'info',
    defaultColors: {
      color: 'rgb(16, 112, 127)',
      backgroundColor: 'rgb(209, 236, 241)',
      borderColor: 'rgb(163, 214, 222)',
    },
  },
  {
    name: 'light',
    defaultColors: {
      color: 'rgb(52, 58, 64);',
      backgroundColor: 'rgb(254, 254, 254)',
      borderColor: 'rgb(204, 206, 207)',
    },
  },
  {
    name: 'dark',
    defaultColors: {
      color: 'gb(23, 26, 29)',
      backgroundColor: 'rgb(214, 216, 217)',
      borderColor: 'rgb(171, 174, 177)',
    },
  },
];

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
  padding: ${theme('alert.paddingX', '.75rem')} ${theme('alert.paddingY', '1.25rem')};
  margin-bottom: ${theme('alert.marginBottom', '1rem')};
  border: ${theme('alert.borderWidth', theme('globals.borderWidth', '1px'))} solid transparent;
  color: ${theme('alert.text')};
  border-radius: ${theme('alert.borderRadius', theme('globals.borderRadius', '0.25rem'))};


  ${types.map(({ name, defaultColors: { color, backgroundColor, borderColor } }) => {
    return ifProp(
      name,
      css`
        color: ${theme(`colorScheme.${name}Darkest`, color)};
        background-color: ${theme(`colorScheme.${name}Light`, backgroundColor)};
        border-color: ${theme(`colorScheme.${name}Lighter`, borderColor)};

        & > a,
        & > a:hover {
          color: ${theme(`colorScheme.${name}Darkest`, color)};
          font-weight: ${theme('alerts.linkWeight', '700')};
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
      padding-right: ${theme('alert.paddingRight', '4rem')};
    `
  )};
`;

export default Alert;
