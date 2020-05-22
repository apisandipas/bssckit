import styled, { css } from 'styled-components';
import { theme } from 'styled-tools';
import defaultTheme from '../../../theme';
import { Div } from '../../Utilities/base';

const getBorderRadius = props => {
  if (props.noRadius) {
    return css`
      border-radius: ${theme('cardFooter.borderRadius.noRadius')};
    `;
  }

  return css`
    border-radius: ${theme('cardFooter.borderRadius.default')};
  `;
};

const CardFooter = styled(Div)`
  padding: ${theme('cardFooter.padding.default')};
  background-color: ${theme('cardFooter.colors.default.background')};
  border-top: ${theme('cardFooter.border.default')} ${theme('cardFooter.colors.default.borderTop')};
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: -3px;
  &:last-child {
    ${props => getBorderRadius(props)}
  }
`;

CardFooter.defaultProps = {
  theme: defaultTheme,
};

export default CardFooter;
