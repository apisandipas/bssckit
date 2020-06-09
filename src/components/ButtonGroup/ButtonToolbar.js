import styled from 'styled-components';
import defaultTheme from '../../theme';
import { Div } from '../Utilities/base';

const ButtonToolbar = styled(Div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: auto;
`;

ButtonToolbar.defaultProps = {
  theme: defaultTheme,
};

export default ButtonToolbar;
