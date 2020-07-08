import styled, { css } from 'styled-components';
import { Div } from '../Utilities/base';
import defaultTheme from '../../theme';
import { getColor, getBorder, getBorderRadius } from '../../utils/themeFunctions';

const borderRadius = props => {
  if (props.noRadius) {
    return css`
      border-radius: ${getBorderRadius(props, 'modalContent', 'noRadius')};
    `;
  }

  return css`
    border-radius: ${getBorderRadius(props, 'modalContent', 'lg')};
  `;
};

const ModalContent = styled(Div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: ${props => getColor(props, 'modalContent', 'backgroundColor')};
  background-clip: padding-box;
  border: ${props => getBorder(props, 'modalCOntent', 'default')}
    ${props => getColor(props, 'modalContent', 'borderColor')};
  outline: 0;
  ${props => borderRadius(props)}
`;

ModalContent.defaultProps = {
  theme: defaultTheme,
};

export default ModalContent;
