import styled, { css } from 'styled-components';
import { Div } from '../Utilities/base';
import defaultTheme from '../../theme';
import { getPadding, getColor, getBorderRadius } from '../../utils/themeFunctions';

const borderRadius = props => {
  if (props.noRadius) {
    return css`
      border-radius: ${getBorderRadius(props, 'tooltipInner', 'noRadius')};
    `;
  } else if (props.pill) {
    return css`
      border-radius: ${getBorderRadius(props, 'tooltipInner', 'pill')};
    `;
  }

  return css`
    border-radius: ${getBorderRadius(props, 'tooltipInner', 'default')};
  `;
};

const pill = props =>
  props.pill &&
  css`
    margin: -2px;
  `;

const TooltipInner = styled(Div)`
  max-width: 200px;
  padding: ${props => getPadding(props, 'tooltipInner', 'default')};
  color: ${props => getColor(props, 'tooltipInner', 'color')};
  text-align: center;
  background-color: ${props => getColor(props, 'tooltipInner', 'backgroundColor')};
  ${props => borderRadius(props)};
  ${props => pill(props)};
`;

TooltipInner.defaultProps = {
  theme: defaultTheme,
};

export default TooltipInner;
