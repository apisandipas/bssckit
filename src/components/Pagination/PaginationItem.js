import styled, { css } from 'styled-components';
import defaultTheme from '../../theme';
import { getColor, getBorder } from '../../utils/themeFunctions';
import { Li } from '../Utilities/base';
import PaginationLink from './PaginationLink';

const PaginationItem = styled(Li)`
  &:not(:first-child) {
    margin-left: -${props => getBorder(props, 'paginationLink', 'default')};
  }

  ${props =>
    props.active &&
    css`
      & ${PaginationLink} {
        z-index: 3;
        color: ${getColor(props, 'paginationLink', 'color')};
      }
    `}

  ${props =>
    props.disabled &&
    css`
      & ${PaginationLink} {
        color: ${getColor(props, 'paginationLink', 'disabledColor')};
        pointer-events: none;
        background-color: ${getColor(props, 'paginationLink', 'disabledBackground')};
        border-color: ${getColor(props, 'paginationLink', 'disabledBorderColor')};
      }
    `}
`;

PaginationItem.defaultProps = {
  theme: defaultTheme,
};

export default PaginationItem;
