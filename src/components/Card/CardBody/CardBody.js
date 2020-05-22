import styled from 'styled-components';
import { theme } from 'styled-tools';
import defaultTheme from '../../../theme';
import { Div } from '../../Utilities/base';

const CardBody = styled(Div)`
  flex: 1 1 auto;
  padding: ${theme('cardBody.padding.default')};
  & > a {
    &:hover {
      text-decoration: none;
    }
    & + a {
      margin-left: ${theme('cardBody.margin.leftA')};
    }
  }
`;

CardBody.defaultProps = {
  theme: defaultTheme,
};

export default CardBody;
