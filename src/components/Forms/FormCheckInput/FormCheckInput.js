import styled, { css } from 'styled-components';
import defaultTheme from '../../../theme';
import { Input } from '../../Utilities/base';
import { getColor, getMargin } from '../../../utils/themeFunctions';

const color = props =>
  props.disabled &&
  css`
    color: ${getColor(props, 'formCheckInput', 'colorDisabled')};
    & + label {
      color: ${getColor(props, 'formCheckInput', 'colorDisabledLabel')};
    }
  `;

const FormCheckInput = styled(Input)`
  margin-top: ${props => getMargin(props, 'formCheckInput', 'top')};
  margin-left: ${props => getMargin(props, 'formCheckInput', 'left')};
  ${props => color(props)};
`;

FormCheckInput.defaultProps = {
  theme: defaultTheme,
};

export default FormCheckInput;
