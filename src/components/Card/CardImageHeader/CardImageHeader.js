import styled, { css } from 'styled-components';
import defaultTheme from '../../../theme';
import { Img } from '../../Utilities/base';
import { getBorderRadius } from '../../../utils/themeFunctions';

const borderRadius = props => {
  if (props.noRadius) {
    return css`
      border-radius: ${getBorderRadius(props, 'cardImageHeader', 'noRadius')};
    `;
  }

  return css`
    border-top-left-radius: ${getBorderRadius(props, 'cardImageHeader', 'topLeftRight')};
    border-top-right-radius: ${getBorderRadius(props, 'cardImageHeader', 'topLeftRight')};
  `;
};

const CardImageHeader = styled(Img)`
  width: 100%;
  ${props => borderRadius(props)}
`;

CardImageHeader.defaultProps = {
  theme: defaultTheme,
};

export default CardImageHeader;
