import styled from 'styled-components';
import { theme } from 'styled-tools';
import defaultTheme from '../../../theme';
import { Span } from '../../Utilities/base';

const InputGroupText = styled(Span)`
  display: flex;
  align-items: center;
  padding: ${theme('inputGroupText.padding.default')};
  margin-bottom: ${theme('inputGroupText.margin.bottom')};
  font-size: ${theme('inputGroupText.fontSize.default')};
  font-weight: ${theme('inputGroupText.fonmtWeight.default')};
  line-height: 1.5;
  color: ${theme('inputGroupText.colors.default.color')};
  text-align: center;
  white-space: nowrap;
  background-color: ${theme('inputGroupText.colors.default.backgroundColor')};
  border: ${theme('inputGroupText.border.default')} ${theme('inputGroupText.colors.default.borderColor')};
  border-radius: ${theme('inputGroupText.borderRadius.default')};
  & input[type='radio'],
  & input[type='checkbox'] {
    margin-top: ${theme('inputGroupText.margin.radioCheckboxTop')};
    margin-right: ${theme('inputGroupText.margin.radioCheckboxRight')};
    margin-bottom: ${theme('inputGroupText.margin.radioCheckboxBottom')};
  }
`;

InputGroupText.defaultProps = {
  theme: defaultTheme,
};

export default InputGroupText;
