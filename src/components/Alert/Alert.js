import styled, { css } from 'styled-components';
import { Div } from '../Utilities/base';
import { getColor, getPadding, getBorder, getFontWeight, getBorderRadius } from '../../utils/themeFunctions';

const alertDismissible = props =>
  props.dismissible &&
  css`
    padding-right: ${getPadding(props, 'alert', 'dismissibleRight')};
  `;

const color = props =>
  css`
    color: ${getColor(props, 'alert', 'text')};
  `;

const backgroundColor = props =>
  css`
    background-color: ${getColor(props, 'alert', 'background')};
  `;

const borderColor = props =>
  css`
    border-color: ${getColor(props, 'alert', 'border')};
  `;

const borderTopColor = props =>
  css`
    & > hr {
      border-top-color: ${getColor(props, 'alert', 'borderTop')};
    }
  `;

const linkHoverColor = props =>
  css`
    & > a,
    & > a:hover {
      color: ${getColor(props, 'alert', 'hover')};
    }
  `;

const borderRadius = props => {
  if (props.noRadius) {
    return css`
      border-radius: ${getBorderRadius(props, 'alert', 'noRadius')};
    `;
  } else if (props.pill) {
    return css`
      border-radius: ${getBorderRadius(props, 'alert', 'pill')};
    `;
  }

  return css`
    border-radius: ${getBorderRadius(props, 'alert', 'default')};
  `;
};

export const AlertDismissIcon = styled.span.attrs({
  ariaHidden: 'true',
})`
  font-size: 2rem;
  cursor: pointer;
  line-height: 1rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: inherit;
  opacity: 0.5;

  &:hover,
  &:focus {
    opacity: 0.75;
  }
`;

const Alert = styled(Div).attrs({
  role: 'alert',
})`
  position: relative;
  padding: ${props => getPadding(props, 'alert', 'default')};
  border: ${props => getBorder(props, 'alert', 'default')};
  & > a {
    font-weight: ${props => getFontWeight(props, 'alert', 'default')};
  };
  & > h1,
  & > h2,
  & > h3,
  & > h4,
  & > h5,
  & > h6 {
    color: inherit;
  };
  ${props => borderRadius(props)}
  ${props => alertDismissible(props)}
  ${props => color(props)}
  ${props => backgroundColor(props)}
  ${props => borderColor(props)}
  ${props => borderTopColor(props)}
  ${props => linkHoverColor(props)}

`;

export default Alert;
