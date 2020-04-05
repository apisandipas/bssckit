import styled, { css } from 'styled-components';
import { theme } from 'styled-tools';
import defaultTheme from '../../theme';
import { Ul } from '../Utilities/base';

const getBorder = props =>
  props.flush &&
  css`
    & > a,
    & > li {
      border-right: ${theme('listGroup.border.aLiFlushRight')};
      border-left: ${theme('listGroup.border.aLiFlushLeft')};
      border-radius: ${theme('listGroup.borderRadius.noRadius')};
      &:first-child {
        border-top: ${theme('listGroup.border.aLiFlushFirstChildTop')};
      }
      &:last-child {
        border-bottom: ${theme('listGroup.border.aLiFlushLastChildBottom')};
      }
    }
  `;

const ListGroup = styled(Ul)`
  display: flex;
  flex-direction: column;
  padding-left: ${theme('listGroup.padding.left')};
  margin-bottom: ${theme('listGroup.margin.bottom')};
  ${props => getBorder(props)};
`;

ListGroup.defaultProps = {
  theme: defaultTheme,
};

export default ListGroup;
