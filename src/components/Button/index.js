import styled, { css } from 'styled-components';
import { theme, ifProp, ifNotProp } from 'styled-tools';
import { Button as BaseButton, A } from '../base';
import defaultTheme from '../../utils/defaultTheme';
import { themeContexts } from '../../utils/consts';

const { button } = defaultTheme;

const getFontSize = props => {
  if (props.lg) {
    return css`
      font-size: ${theme('button.fontSize.lg', button.fontSize.lg)};
    `;
  } else if (props.sm) {
    return css`
      font-size: ${theme('button.fontSize.sm', button.fontSize.sm)};
    `;
  }

  return css`
    font-size: ${theme('button.fontSize.default', button.fontSize.default)};
  `;
};

const getPadding = () => props => {
  if (props.split) {
    if (props.sm) {
      return css`
        padding: 0;
        padding-right: ${theme('button.padding.splitSmRight', button.padding.splitSmRight)};
        padding-left: ${theme('button.padding.splitSmLeft', button.padding.splitSmLeft)};
        &::after {
          margin-left: 0;
        }
      `;
    } else if (props.lg) {
      return css`
        padding: 0;
        padding-right: ${theme('button.padding.splitLgRight', button.padding.splitLgRight)};
        padding-left: ${theme('button.padding.splitLgLeft', button.padding.splitLgLeft)};
        &::after {
          margin-left: 0;
        }
      `;
    }

    return css`
      padding: 0;
      padding-right: ${theme('button.padding.splitDefaultRight', button.padding.splitDefaultRight)};
      padding-left: ${theme('button.padding.splitDefaultLeft', button.padding.splitDefaultLeft)};
      &::after {
        margin-left: 0;
      }
    `;
  } else if (props.lg) {
    return css`
      padding: ${theme('button.padding.lg', button.padding.lg)};
    `;
  } else if (props.sm) {
    return css`
      padding: ${theme('button.padding.sm', button.padding.sm)};
    `;
  }

  return css`
    padding: ${theme('button.padding.default', button.padding.default)};
  `;
};

const getBorderRadius = props => {
  if (props.pill) {
    return css`
      border-radius: ${theme('button.borderRadius.pill', button.borderRadius.pill)};
    `;
  } else if (props.noRadius) {
    return css`
      border-radius: ${theme('button.borderRadius.noRadius', button.borderRadius.noRadius)};
    `;
  } else if (props.sm) {
    return css`
      border-radius: ${theme('button.borderRadius.sm', button.borderRadius.sm)};
    `;
  } else if (props.lg) {
    return css`
      border-radius: ${theme('button.borderRadius.lg', button.borderRadius.lg)};
    `;
  }

  return css`
    border-radius: ${theme('button.borderRadius.default', button.borderRadius.default)};
  `;
};

const getColor = (props, context) => {
  if (props.outline) {
    if (props.disabled) {
      return css`
        color: ${theme(
          `button.colors.${context}.colorOutline`,
          button.colors[context].colorOutline
        )};
      `;
    }

    return css`
      color: ${theme(`button.colors.${context}.colorOutline`, button.colors[context].colorOutline)};
      &:hover {
        color: ${theme(
          `button.colors.${context}.colorOutlineHover`,
          button.colors[context].colorOutlineHover
        )};
      }
    `;
  }

  return css`
    color: ${theme(`button.colors.${context}.color`, button.colors[context].color)};
  `;
};

const getBorder = (props, context) => {
  if (props.active) {
    return css`
      border: ${theme('button.border.default', button.border.default)}
        ${theme(
          `button.colors.${context}.borderColorActive`,
          button.colors[context].borderColorActive
        )};
    `;
  } else if (props.disabled) {
    return css`
      border: ${theme('button.border.default', button.border.default)}
        ${theme(
          `button.colors.${context}.borderColorDisabled`,
          button.colors[context].borderColorDisabled
        )};
    `;
  }

  return css`
    border: 1px solid
      ${theme(`button.colors.${context}.borderColor`, button.colors[context].borderColor)};

    ${!props.outline &&
      css`
        &:focus,
        &:hover {
          border: 1px solid
            ${theme(
              `button.colors.${context}.borderColorHoverFocus`,
              button.colors[context].borderColorHoverFocus
            )};
        }
      `}
  `;
};

const getBackgroundColor = (props, context) => {
  if (props.active) {
    return css`
      background-image: none;
      background-color: ${theme(
        `button.colors.${context}.backgroundColorActive`,
        button.colors[context].backgroundColorActive
      )};
    `;
  } else if (props.outline) {
    return css`
      background-image: none;
      background-color: transparent;
      &:hover {
        background-color: ${props.disabled
          ? 'transparent'
          : theme(
              `button.colors.${context}.backgroundColor`,
              button.colors[context].backgroundColor
            )};
      }
    `;
  } else if (props.disabled) {
    return css`
      background-image: none;
      background-color: ${theme(
        `button.colors.${context}.backgroundColorDisabled`,
        button.colors[context].backgroundColorDisabled
      )};
    `;
  }

  return css`
    background-color: ${theme(
      `button.colors.${context}.backgroundColor`,
      button.colors[context].backgroundColor
    )};
    &:focus,
    &:hover {
      background-color: ${theme(
        `button.colors.${context}.backgroundColorHoverFocus`,
        button.colors[context].backgroundColorHoverFocus
      )};
    }
  `;
};

const buttonStyles = props => css`
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  border: 1px solid ${theme(
    'button.colors.default.borderColor',
    button.colors.default.borderColor
  )};

  &:hover {
    text-decoration: none;
  }

  &:focus {
    text-decoration: none;
    outline: 0;
    box-shadow: 0 0 0 0.2rem  ${theme(
      'button.colors.default.boxShadow',
      button.colors.default.boxShadow
    )};
  }


  ${ifProp(
    'active',
    css`
      background-image: none;
    `
  )}


  ${ifProp(
    'disabled',
    css`
      opacity: 0.65;
      background-image: none;
      cursor: not-allowed;
    `,
    css`
      cursor: pointer;
    `
  )}


  ${ifProp(
    'block',
    css`
      display: block;
      width: 100%;
      & + & {
        margin-top: ${theme('button.margin.blockTop', button.margin.blockTop)};
      }
    `,
    css`
      display: inline-block;
    `
  )}

  ${getFontSize(props)}
  ${getPadding(props)}
  ${getBorderRadius(props)};


  ${themeContexts.map(context => {
    return ifProp(
      context,
      css`
        &:focus {
          outline: 0;
          box-shadow: 0 0 0 0.2rem ${theme(
            `button.colors.${context}.boxShadow`,
            button.colors[context].boxShadow
          )};
        }

        &:hover,
        &:focus {
          text-decoration: none;
          ${getColor(props, context)};
          ${getBorder(props, context)};
          ${getBackgroundColor(props, context)};
        }

        ${ifProp(
          'disabled',
          css`
            ${getBorder(props, context)};
          `
        )}

        ${getColor(props, context)}
        ${getBorder(props, context)}
        ${getBackgroundColor(props, context)}
      `
    );
  })}
`;

const Button = styled(BaseButton)`
  ${props => buttonStyles(props)}
`;

Button.defaultProps = {
  // secondary: true,
};

const LinkButton = styled(A)`
  text-decoration: none;
  ${props => buttonStyles(props)}
`;

export { Button, LinkButton };