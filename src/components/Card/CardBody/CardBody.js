import styled from 'styled-components';
import defaultTheme from '../../../theme';
import { Div } from '../../Utilities/base';
import { getPadding, getMargin } from '../../../utils/themeFunctions';

const CardBody = styled(Div)`
  flex: 1 1 auto;
  padding: ${props => getPadding(props, 'cardBody', 'default')};
  & > a {
    &:hover {
      text-decoration: none;
    }
    & + a {
      margin-left: ${props => getMargin(props, 'cardBody', 'leftA')};
    }
  }
`;

CardBody.defaultProps = {
  theme: defaultTheme,
};

export default CardBody;
