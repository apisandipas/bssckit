import styled, { css } from 'styled-components';
import { Div } from '../Utilities/base';
import defaultTheme from '../../theme';
import { getPadding, getMargin, getFontWeight, getFontSize, getFontFamily } from '../../utils/themeFunctions';

const padding = props =>
  props.placement === 'left' || props.placement === 'right'
    ? css`
        padding: ${getPadding(props, 'tooltip', 'leftRight')};
      `
    : css`
        padding: ${getPadding(props, 'tooltip', 'topBottom')};
      `;

const Tooltip = styled(Div)`
  position: absolute;
  z-index: 1070;
  margin: ${props => getMargin(props, 'tooltip', 'default')};
  font-family: ${props => getFontFamily(props, 'tooltip', 'default')};
  font-style: normal;
  font-weight: ${props => getFontWeight(props, 'tooltip', 'default')};
  line-height: 1.5;
  text-align: left;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: ${props => getFontSize(props, 'tooltip', 'default')};
  word-wrap: break-word;
  opacity: 0.9;
`;

Tooltip.defaultProps = {
  theme: defaultTheme,
};

export default Tooltip;
