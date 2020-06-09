import styled, { css } from 'styled-components';
import defaultTheme from '../../../theme';
import { Div } from '../../Utilities/base';
import { getBorderRadius, getColor, getBorder } from '../../../utils/themeFunctions';

const borderRadius = props => {
  if (props.noRadius) {
    return css`
      border-radius: ${getBorderRadius(props, 'card', 'noRadius')};
    `;
  }

  return css`
    border-radius: ${getBorderRadius(props, 'card', 'default')};
  `;
};

const Card = styled(Div)`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: ${props => getColor(props, 'card', 'backgroundColor')};
  background-clip: border-box;
  border: ${props => getBorder(props, 'card', 'default')} ${props => getColor(props, 'card', 'borderColor')};
  ${props => borderRadius(props)}
`;

Card.defaultProps = {
  theme: defaultTheme,
};

export default Card;
