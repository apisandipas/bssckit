import styled from 'styled-components';
import defaultTheme from '../../theme';
import { Div } from '../Utilities/base';

const Dropdown = styled(Div)`
  position: relative;
  display: inline-block;
`;

Dropdown.defaultProps = {
  theme: defaultTheme,
};

export default Dropdown;
