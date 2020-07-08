import styled from 'styled-components';
import { Div } from '../Utilities/base';
import defaultTheme from '../../theme';
import { getColor, getPadding, getBorder } from '../../utils/themeFunctions';

const ModalFooter = styled(Div)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: ${props => getPadding(props, 'modalFooter', 'default')};
  border-top: ${props => getBorder(props, 'modalFooter', 'default')}
    ${props => getColor(props, 'modalFooter', 'borderColor')};
`;

ModalFooter.defaultProps = {
  theme: defaultTheme,
};

export default ModalFooter;
