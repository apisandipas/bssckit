import styled from 'styled-components';
import defaultTheme from '../../../theme';
import { Form } from '../../Utilities/base';

const FormInline = styled(Form)`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  box-sizing: border-box;
`;

FormInline.defaultProps = {
  theme: defaultTheme,
};

export default FormInline;
