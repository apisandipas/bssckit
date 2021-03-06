import styled from 'styled-components';
import defaultTheme from '../../theme';
import { getColor, getPadding, getMargin, getBorder } from '../../utils/themeFunctions';
import { Div } from '../Utilities/base';

const DropdownDivider = styled(Div)`
  height: 0;
  padding-top: ${props => getPadding(props, 'dropdownDivider', 'top')};
  margin-top: ${props => getMargin(props, 'dropdownDivider', 'top')};
  border-top: ${props => getBorder(props, 'dropdownDivider', 'default')}
    ${props => getColor(props, 'dropdownDivider', 'borderTop')};
`;

DropdownDivider.defaultProps = {
  theme: defaultTheme,
};

export default DropdownDivider;
