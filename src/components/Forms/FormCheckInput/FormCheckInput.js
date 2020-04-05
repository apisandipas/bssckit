import styled, { css } from 'styled-components';
import { theme } from 'styled-tools';
import defaultTheme from '../../../theme';
import { Input } from '../../Utilities/base';

const getColor = props =>
  props.disabled &&
  css`
    color: ${theme('formCheckInput.colors.default.colorDisabled')};
    & + label {
      color: ${theme('formCheckInput.colors.default.colorDisabledLabel')};
    }
  `;

const FormCheckInput = styled(Input)`
  margin-top: ${props => theme('formCheckInput.margin.top')};
  margin-left: ${props => theme('formCheckInput.margin.left')};
  ${props => getColor(props)};
`;

FormCheckInput.defaultProps = {
  theme: defaultTheme,
};

export default FormCheckInput;
