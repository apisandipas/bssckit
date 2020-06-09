import styled, { css } from 'styled-components';
import defaultTheme from '../../theme';
import { getPadding, getMargin, getBorder, getBorderRadius } from '../../utils/themeFunctions';
import { Ul } from '../Utilities/base';

const border = props =>
  props.flush &&
  css`
    & > a,
    & > li {
      border-right: ${getBorder(props, 'listGroup', 'aLiFlushRight')};
      border-left: ${getBorder(props, 'listGroup', 'aLiFlushLeft')};
      border-radius: ${getBorderRadius(props, 'listGroup', 'noRadius')};
      &:first-child {
        border-top: ${getBorder(props, 'listGroup', 'aLiFlushFirstChildTop')};
      }
      &:last-child {
        border-bottom: ${getBorder(props, 'listGroup', 'aLiFlushLastChildBottom')};
      }
    }
  `;

const ListGroup = styled(Ul)`
  display: flex;
  flex-direction: column;
  padding-left: ${props => getPadding(props, 'listGroup', 'left')};
  margin-bottom: ${props => getMargin(props, 'listGroup', 'bottom')};
  ${props => border(props)};
`;

ListGroup.defaultProps = {
  theme: defaultTheme,
};

export default ListGroup;
