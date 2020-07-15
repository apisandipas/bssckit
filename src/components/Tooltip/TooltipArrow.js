import styled, { css } from 'styled-components';
import { Div } from '../Utilities/base';
import defaultTheme from '../../theme';
import { getColor } from '../../utils/themeFunctions';

const tooltipArrowTop = props =>
  props.placement === 'top' &&
  css`
    bottom: 0;
    width: 100%;
    &::before {
      top: 0.4rem;
      left: calc(50% - 0.35rem);
      border-width: 0.4rem 0.4rem 0;
      border-top-color: ${getColor(props, 'tooltipArrow', 'borderColor')};
    }
  `;

const tooltipArrowBottom = props =>
  props.placement === 'bottom' &&
  css`
    top: 0;
    width: 100%;
    &::before {
      bottom: 0.4rem;
      left: calc(50% - 0.35rem);
      border-width: 0 0.4rem 0.4rem;
      border-bottom-color: ${getColor(props, 'tooltipArrow', 'borderColor')};
    }
  `;

const tooltipArrowRight = props =>
  props.placement === 'right' &&
  css`
    left: 0;
    height: 100%;
    &::before {
      right: 0;
      top: calc(50% - 0.35rem);
      border-width: 0.4rem 0.4rem 0.4rem 0;
      border-right-color: ${getColor(props, 'tooltipArrow', 'borderColor')};
    }
  `;

const tooltipArrowLeft = props =>
  props.placement === 'left' &&
  css`
    right: 0;
    height: 100%;
    &::before {
      left: 0;
      top: calc(50% - 0.35rem);
      border-width: 0.4rem 0 0.4rem 0.4rem;
      border-left-color: ${getColor(props, 'tooltipArrow', 'borderColor')};
    }
  `;

const TooltipArrow = styled(Div)`
  position: absolute;
  display: block;
  height: 0.4rem;
  &::before {
    position: absolute;
    content: '';
    border-color: transparent;
    border-style: solid;
  }
  ${tooltipArrowTop};
  ${tooltipArrowRight};
  ${tooltipArrowBottom};
  ${tooltipArrowLeft};
`;

TooltipArrow.defaultProps = {
  theme: defaultTheme,
};

export default TooltipArrow;
