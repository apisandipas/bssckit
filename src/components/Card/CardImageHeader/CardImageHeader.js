import styled, { css } from 'styled-components';
import { theme } from 'styled-tools';
import defaultTheme from '../../../theme';
import { Img } from '../../Utilities/base';

const getBorderRadius = props => {
  if (props.noRadius) {
    return css`
      border-radius: ${theme('cardImageHeader.borderRadius.noRadius')};
    `;
  }

  return css`
    border-top-left-radius: ${theme('cardImageHeader.borderRadius.topLeftRight')};
    border-top-right-radius: ${theme('cardImageHeader.borderRadius.topLeftRight')};
  `;
};

const CardImageHeader = styled(Img)`
  width: 100%;
  ${props => getBorderRadius(props)}
`;

CardImageHeader.defaultProps = {
  theme: defaultTheme,
};

export default CardImageHeader;
