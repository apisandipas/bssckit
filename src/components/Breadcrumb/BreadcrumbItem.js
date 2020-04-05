import styled, { css } from 'styled-components';
import { theme } from 'styled-tools';
import defaultTheme from '../../theme';
import { Li } from '../Utilities/base';

const getActive = props =>
  props.active &&
  css`
    color: ${theme('breadcrumbItem.colors.default.color')};
  `;

const BreadcrumbItem = styled(Li)`
  &:not(:first-child)::before {
    display: inline-block;
    padding-right: ${theme('breadcrumbItem.padding.right')};
    padding-left: ${theme('breadcrumbItem.padding.left')};
    color: ${theme('breadcrumbItem.colors.default.color')};
    content: '/';
  }
  & + &:hover::before {
    text-decoration: none;
  }
  ${getActive};
`;

BreadcrumbItem.defaultProps = {
  theme: defaultTheme,
};

export default BreadcrumbItem;
