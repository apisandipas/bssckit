import styled from 'styled-components';
import { Div } from '../Utilities/base';
import defaultTheme from '../../theme/';
import { getColor, getBorder, getPadding, getBorderRadius } from '../../utils/themeFunctions';

const ModalHeader = styled(Div).attrs({ className: 'ModalHeader' })`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: ${props => getPadding(props, 'modalHeader', 'default')};
  border-bottom: ${props => getBorder(props, 'modalHeader', 'default')}
    ${props => getColor(props, 'modalHeader', 'default')};
  border-top-left-radius: ${props => getBorderRadius(props, 'modalHeader', 'lg')};
  border-top-right-radius: ${props => getBorderRadius(props, 'modalHeader', 'lg')};
`;

ModalHeader.defaultProps = {
  theme: defaultTheme,
};

export default ModalHeader;
