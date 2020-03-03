import styled from 'styled-components';
import { theme } from 'styled-tools';

import { Div } from '../Utilities/base';

const Container = styled(Div)`
  width: ${theme('container.width.default')};
  margin-right: auto;
  margin-left: auto;
  line-height: 1.5;
  box-sizing: border-box;
`;

export default Container;
