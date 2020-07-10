import styled, { css } from 'styled-components';
import { Tr as BaseTr } from '../../components/Utilities/base';
import defaultTheme from '../../theme';
import { getColor } from '../../utils/themeFunctions';

const color = props => {
  if (props.active) {
    return css`
      & > th,
      & > td,
      & tbody tr:hover,
      & tbody tr:hover > th,
      & tbody tr:hover > td {
        background-color: ${getColor(props, 'tr', 'activeBackgroundColor')};
      }
    `;
  }

  // Hover is used as workaround for making Tr hoverable if Table if hoverable

  return css`
    & > th,
    & > td {
      background-color: ${getColor(props, 'tr', 'backgroundColor')};
    }
    .hover &:hover > th,
    .hover &:hover > td,
    .hover & tbody tr:hover,
    .hover & tbody tr:hover > th,
    .hover & tbody tr:hover > td {
      background-color: ${getColor(props, 'tr', 'backgroundColorHoverFocus')};
    }
  `;
};

const Tr = styled(BaseTr)`
  ${props => color(props)};
`;

Tr.defaultProps = {
  theme: defaultTheme,
};

export default Tr;
