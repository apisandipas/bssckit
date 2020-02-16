import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { theme, ifProp } from 'styled-tools';
import { Span } from '../base';

const colors = [
  { name: 'primary', backgroundColor: '#007bff' },
  { name: 'secondary', backgroundColor: '#6c757d' },
  { name: 'success', backgroundColor: '#28a745' },
  { name: 'danger', backgroundColor: '#dc3545' },
  { name: 'warning', backgroundColor: '#ffc107' },
  { name: 'info', backgroundColor: '#17a2b8' },
  { name: 'light', backgroundColor: '#f8f9fa', color: 'rgb(45, 47, 49)' },
  { name: 'dark', backgroundColor: '#343a40' },
];

const Badge = styled(Span)`
  display: inline-block;
  padding: ${theme('badge.paddingX', '0.25rem')} ${theme('badge.paddingY', '0.4rem')};
  font-size: 75%;
  font-weight: ${theme('badge.fontWeight', '700')};
  line-height: 1;
  color: ${theme('badge.fontColor', '#fff')};
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: ${theme('badge.borderRadius', theme('globals.borderRadius', '0.25rem'))};

  ${colors.map(({ name, color, backgroundColor }) => {
    return ifProp(
      name,
      css`
        ${name === 'light' &&
          css`
            color: ${color};
          `}
        background-color: ${backgroundColor};
      `
    );
  })}

  ${ifProp(
    'pill',
    css`
      border-radius: ${theme('badge.pillBorderRadius', theme('global.borderRadius', '10rem'))};
    `
  )}

  & > a {
    color: ${theme('badge.linkColor', 'white')};
    text-decoration: none;
    background-color: ${theme('badge.linkBackgroundColor', 'transparent')};
  }

  /* Empty badges collapse automatically */
  &:empty {
    display: none;
  }
`;

export default Badge;
