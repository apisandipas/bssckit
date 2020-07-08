import styled, { css } from 'styled-components';
import { Div } from '../Utilities/base';

const ModalBackdrop = styled(Div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #111;
  opacity: 0.7;
  display: block;

  ${({ backdrop }) =>
    backdrop === 'static' &&
    css`
      pointer-events: none;
    `};
`;

ModalBackdrop.defaultProps = {
  backdrop: true,
};

export default ModalBackdrop;
