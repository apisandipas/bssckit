import React from 'react';
import styled, { css } from 'styled-components';
import defaultTheme from '../../theme';
import { getColor, getBorder } from '../../utils/themeFunctions';
import { A } from '../Utilities/base';

const PageLink = styled(({ as: Component, ...props }) => <Component {...props} />)`
  position: relative;
  display: block;
  color: ${props => getColor(props, 'paginationLink', 'color')} !important;
  cursor: pointer;
  text-decoration: none;
  background-color: ${props => getColor(props, 'paginationLink', 'backgroundColor')};
  border: ${props => getBorder(props, 'paginationLink', 'default')}
    ${props => getColor(props, 'paginationLink', 'borderColor')};

  &:hover {
    z-index: 2;
    color: ${props => getColor(props, 'paginationLink', 'hoverColor')};
    text-decoration: underline;
    background-color: ${props => getColor(props, 'paginationLink', 'hoverBackground')};
  }

  &:focus {
    z-index: 3;
    outline: 0;
  }
`;

PageLink.defaultProps = {
  theme: defaultTheme,
  as: A,
};

export default PageLink;
