import styled from 'styled-components';
import { Div } from '../Utilities/base';
import defaultTheme from '../../theme';
import { getPadding } from '../../utils/themeFunctions';

const ModalBody = styled(Div)`
  position: relative;
  flex: 1 1 auto;
  padding: ${props => getPadding(props, 'modalBody', 'default')};
`;

ModalBody.defaultProps = {
  theme: defaultTheme,
};

export default ModalBody;
