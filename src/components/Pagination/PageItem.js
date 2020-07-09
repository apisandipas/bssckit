import styled, { css } from 'styled-components';
import defaultTheme from '../../theme';
import { getColor, getBorder, getMargin } from '../../utils/themeFunctions';
import { Li } from '../Utilities/base';
import PageLink from './PageLink';

const PageItem = styled(Li)`
  &:not(:first-child) {
    margin-left: -${props => getMargin(props, 'paginationLink', 'default')};
  }

  ${props =>
    props.active &&
    css`
      & ${PageLink} {
        z-index: 3;
        color: ${getColor(props, 'paginationLink', 'activeColor')} !important;
        background: ${getColor(props, 'paginationLink', 'activeBackgroundColor')};
        border-color: ${getColor(props, 'paginationLink', 'activeBorderColor')};
      }
    `}

  ${props =>
    props.disabled &&
    css`
      & ${PageLink} {
        color: ${getColor(props, 'paginationLink', 'disabledColor')} !important;
        pointer-events: none;
        background-color: ${getColor(props, 'paginationLink', 'disabledBackground')};
        border-color: ${getColor(props, 'paginationLink', 'disabledBorderColor')};
      }
    `}
`;

PageItem.defaultProps = {
  theme: defaultTheme,
};

export default PageItem;
