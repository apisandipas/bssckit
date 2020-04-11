import styled, { css } from 'styled-components';
import { theme, ifProp } from 'styled-tools';
import { themeContexts } from '../../utils/consts';
import defaultTheme from '../../theme';
import { Li } from '../Utilities/base';

const getColor = (props, context) => {
  if (props.disabled) {
    return css`
      color: ${theme(`listGroupItem.colors.${context}.colorDisabled`)};
      ${props.action &&
        css`
          & > a,
          & > a:hover,
          & > a:focus {
            color: ${theme(`listGroupItem.colors.${context}.colorDisabled`)};
          }
        `}
    `;
  } else if (props.active) {
    return css`
      color: ${theme(`listGroupItem.colors.${context}.colorActive`)};
      ${props.action &&
        css`
          & > a,
          & > a:hover,
          & > a:focus {
            color: ${theme(`listGroupItem.colors.${context}.colorActive`)};
          }
        `}
    `;
  }

  return css`
    color: ${theme(`listGroupItem.colors.${context}.color`)};
    ${props.action &&
      css`
        & > a,
        & > a:hover,
        & > a:focus {
          color: ${theme(`listGroupItem.colors.${context}.color`)};
        }
      `}
  `;
};

const getBackgroundBorderColor = (props, context) => {
  if (props.disabled) {
    return css`
      background-color: ${theme(`listGroupItem.colors.${context}.backgroundColorDisabled`)};
    `;
  }

  return css`
    background-color: ${theme(`listGroupItem.colors.${context}.backgroundColor`)};
    border-color: ${theme(`listGroupItem.colors.${context}.borderColor`)};
    ${props.action &&
      css`
        &:hover,
        &:focus,
        & > a:hover,
        & > a:focus {
          background-color: ${theme(`listGroupItem.colors.${context}.backgroundColorHoverFocusAction`)};
        }
      `}
    ${props.active &&
      css`
        background-color: ${theme(`listGroupItem.colors.${context}.backgroundColorActive`)};
        border-color: ${theme(`listGroupItem.colors.${context}.borderColorActive`)};
        &:hover,
        &:focus,
        & > a:hover,
        & > a:focus {
          background-color: ${theme(`listGroupItem.colors.${context}.borderColorActive`)};
        }
      `}
  `;
};

const getBorderColor = (props, context) => {
  if (props.active) {
    return theme(`listGroupItem.colors.${context}.borderColorActive`);
  }
  return theme(`listGroupItem.colors.${context}.borderColor`);
};

const getZIndex = props =>
  props.active &&
  css`
    z-index: 2;
  `;

const getCursor = props =>
  !props.disabled && props.action
    ? css`
        &:hover,
        &:focus,
        & > a:hover,
        & > a:focus {
          cursor: pointer;
        }
      `
    : css`
        &:hover,
        &:focus,
        & > a:hover,
        & > a:focus {
          cursor: text;
        }
      `;

const ListGroupItem = styled(Li)`
  position: relative;
  display: block;
  padding: ${theme('listGroupItem.padding.default')};
  border: ${theme('listGroupItem.border.default')} ${props => getBorderColor(props, 'default')};
  border-bottom: none;
  margin-bottom: -1px;
  &:first-child {
    border-top-left-radius: ${theme('listGroupItem.borderRadius.default')};
    border-top-right-radius: ${theme('listGroupItem.borderRadius.default')};
  }
  &:last-child {
    border-bottom: ${theme('listGroupItem.border.default')} ${props => getBorderColor(props, 'default')};
    margin-bottom: 0;
    border-bottom-right-radius: ${theme('listGroupItem.borderRadius.default')};
    border-bottom-left-radius: ${theme('listGroupItem.borderRadius.default')};
  }
  & > a,
  & > a:hover,
  & > a:focus {
    z-index: 1;
    text-decoration: none;
  }
  ${props => getColor(props, 'default')};
  ${props => getBackgroundBorderColor(props, 'default')};
  ${props => getZIndex(props)};
  ${props => getCursor(props)};

  ${themeContexts.map(context => {
    return ifProp(
      context,
      css`
        ${props => getColor(props, context)};
        ${props => getBackgroundBorderColor(props, context)};
        border: ${theme('listGroupItem.border.default')} ${props => getBorderColor(props, context)};
        &:last-child {
          border-bottom: ${theme('listGroupItem.border.default')} ${props => getBorderColor(props, context)};
        }
      `
    );
  })}
`;

ListGroupItem.defaultProps = {
  theme: defaultTheme,
};

export default ListGroupItem;
