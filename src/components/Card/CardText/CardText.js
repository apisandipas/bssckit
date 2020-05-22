import styled from 'styled-components';
import { theme } from 'styled-tools';
import defaultTheme from '../../../theme';
import { P } from '../../Utilities/base';

const CardText = styled(P)`
  margin-top: ${theme('cardText.margin.top')};
  margin-bottom: ${theme('cardText.margin.bottom')};
  &:last-child {
    margin-bottom: ${theme('cardText.margin.lastChildBottom')};
  }
`;

CardText.defaultProps = {
  theme: defaultTheme,
};

export default CardText;
