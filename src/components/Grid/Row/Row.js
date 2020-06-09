import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import defaultTheme from '../../../theme';
import { Div } from '../../Utilities/base';
import { Col } from '../Col';

const Row = styled(Div)`
  display: flex;
  flex-wrap: wrap;
  margin-right: -${props => props.theme.grid.gutterWidth / 2}px;
  margin-left: -${props => props.theme.grid.gutterWidth / 2}px;

  ${ifProp(
    'noGutters',
    css`
      margin-right: 0;
      margin-left: 0;

      > ${Col} {
        margin-right: 0;
        margin-left: 0;
      }
    `
  )}
`;

Row.defaultProps = {
  theme: defaultTheme,
};

export default Row;
