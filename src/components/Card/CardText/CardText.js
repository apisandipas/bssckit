import styled from 'styled-components';
import defaultTheme from '../../../theme';
import { P } from '../../Utilities/base';
import { getMargin } from '../../../utils/themeFunctions';

const CardText = styled(P)`
  margin-top: ${props => getMargin(props, 'cardText', 'top')};
  margin-bottom: ${props => getMargin(props, 'cardText', 'bottom')};
  &:last-child {
    margin-bottom: ${props => getMargin(props, 'cardText', 'lastChildBottom')};
  }
`;

CardText.defaultProps = {
  theme: defaultTheme,
};

export default CardText;
