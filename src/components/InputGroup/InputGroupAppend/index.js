import styled from 'styled-components';
import defaultTheme from '../../../theme';
import { Div } from '../../Utilities/base';

const InputGroupAppend = styled(Div)`
  display: flex;
  margin-left: -1px;
  & > button {
    position: relative;
    z-index: 2;
  }
  & > span,
  & > button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    &:not(:last-child) {
      margin-right: -1px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
`;

InputGroupAppend.defaultProps = {
  theme: defaultTheme,
};

export default InputGroupAppend;
