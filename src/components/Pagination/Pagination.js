import styled, { css } from 'styled-components';
import defaultTheme from '../../theme';
import { getPadding, getBorderRadius } from '../../utils/themeFunctions';
import { Ul } from '../Utilities/base';
import PageItem from './PageItem';
import PageLink from './PageLink';

const padding = props => {
  if (props.lg) {
    return css`
      ${PageItem} {
      }

      ${PageLink} {
        padding: ${getPadding(props, 'paginationLink', 'lg')};
      }
    `;
  } else if (props.sm) {
    return css`
      ${PageItem} {
      }

      ${PageLink} {
        padding: ${getPadding(props, 'paginationLink', 'sm')};
      }
    `;
  } else {
    return css`
      ${PageItem} {
      }

      ${PageLink} {
        padding: ${getPadding(props, 'paginationLink', 'default')};
      }
    `;
  }
};

const borderRadius = props => {
  if (props.lg) {
    return css`
      ${PageItem}:first-child {
        a {
          border-top-left-radius-left: ${getBorderRadius(props, 'paginationLink', 'lg')};
          border-bottom-left-radius: ${getBorderRadius(props, 'paginationLink', 'lg')};
        }
      }

      ${PageItem}:last-child {
        a {
          border-top-right-radius: ${getBorderRadius(props, 'paginationLink', 'lg')};
          border-bottom-right-radius: ${getBorderRadius(props, 'paginationLink', 'lg')};
        }
      }
    `;
  } else if (props.sm) {
    return css`
      ${PageItem}:first-child {
        a {
          border-top-left-radius: ${getBorderRadius(props, 'paginationLink', 'sm')};
          border-bottom-left-radius: ${getBorderRadius(props, 'paginationLink', 'sm')};
        }
      }

      ${PageItem}:last-child {
        a {
          border-top-right-radius: ${getBorderRadius(props, 'paginationLink', 'sm')};
          border-bottom-right-radius: ${getBorderRadius(props, 'paginationLink', 'sm')};
        }
      }
    `;
  } else {
    return css`
      ${PageItem}:first-child {
        a {
          border-top-left-radius: ${getBorderRadius(props, 'paginationLink', 'default')};
          border-bottom-left-radius: ${getBorderRadius(props, 'paginationLink', 'default')};
        }
      }

      ${PageItem}:last-child {
        a {
          border-top-right-radius: ${getBorderRadius(props, 'paginationLink', 'default')};
          border-bottom-right-radius: ${getBorderRadius(props, 'paginationLink', 'default')};
        }
      }
    `;
  }
};

const Pagination = styled(Ul)`
  display: flex;
  margin-left: 0;
  list-style: none;

  ${props => padding(props)}
  ${props => borderRadius(props)}
  }
`;

Pagination.defaultProps = {
  theme: defaultTheme,
};

export default Pagination;
