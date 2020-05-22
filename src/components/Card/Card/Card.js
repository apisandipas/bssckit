import styled, { css } from 'styled-components';
import { theme } from 'styled-tools';
import defaultTheme from '../../../theme';
import { Div } from '../../Utilities/base';

const getBorderRadius = props => {
  if (props.noRadius) {
    return css`
      border-radius: ${theme('card.borderRadius.noRadius')};
    `;
  }

  return css`
    border-radius: ${theme('card.borderRadius.default')};
  `;
};

const Card = styled(Div)`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: ${theme('card.colors.default.backgroundColor')};
  background-clip: border-box;
  border: ${theme('card.border.default')} ${theme('card.colors.default.borderColor')};
  ${props => getBorderRadius(props)}
`;

Card.defaultProps = {
  theme: defaultTheme,
};

export default Card;
