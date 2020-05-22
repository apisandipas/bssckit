import styled, { css } from 'styled-components';
import { theme } from 'styled-tools';
import defaultTheme from '../../../theme';
import { Div } from '../../Utilities/base';

const getBorderRadius = props => {
  if (props.noRadius) {
    return css`
      border-radius: ${theme('cardHeader.borderRadius.noRadius')};
    `;
  }

  return css`
    border-top-left-radius: ${theme('cardHeader.borderRadius.topLeftRight')};
    border-top-right-radius: ${theme('cardHeader.borderRadius.topLeftRight')};
  `;
};

const CardHeader = styled(Div)`
  padding: ${theme('cardHeader.padding.default')};
  background-color: ${theme('cardHeader.colors.default.background')};
  border-bottom: 1px solid ${theme('cardHeader.colors.default.borderBottom')};
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  ${props => getBorderRadius(props)}
`;

CardHeader.defaultProps = {
  theme: defaultTheme,
};

export default CardHeader;
