import styled, { css } from 'styled-components';
import { theme, ifProp } from 'styled-tools';
import { Span } from '../base';
import defaultTheme from '../../utils/defaultTheme';
import { themeContexts } from '../../utils/consts';

const { badge } = defaultTheme;

const Badge = styled(Span)`
  display: inline-block;
  padding: ${theme('badge.padding.default', badge.padding.default)};
  font-size: 75%;
  font-weight: ${theme('badge.fontWeight.default', badge.fontWeight.default)};
  line-height: 1;

  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: ${theme('badge.borderRadius.default', badge.borderRadius.default)};

  ${themeContexts.map(context => {
    const {
      color,
      backgroundColor,
      backgroundColorHoverFocus,
      linkColor,
    } = defaultTheme.badge.colors[context];
    return ifProp(
      context,
      css`
        color: ${theme(`badge.${context}.fontColor`, color)};
        background-color: ${backgroundColor};

        ${ifProp(
          'action',
          css`
            & > a {
              color: ${theme(`badge.${context}.linkColor`, linkColor)};
              text-decoration: none;
              background-color: ${theme(`badge.${context}.backgroundColor`, backgroundColor)};
              &:hover,
              &:focus {
                text-decoration: none;
                background-color: ${theme(
                  `badge.${context}.backgroundColorHoverFocus`,
                  backgroundColorHoverFocus
                )};
              }
            }
            &:hover,
            &:focus {
              cursor: pointer;
              background-color: ${theme(
                `badge.${context}.backgroundColorHoverFocus`,
                backgroundColorHoverFocus
              )};
              & > a {
                background-color: ${theme(
                  `badge.${context}.backgroundColorHoverFocus`,
                  backgroundColorHoverFocus
                )};
              }
            }
          `,
          css`
            & > a {
              color: ${theme(`badge.${context}.linkColor`, linkColor)};
              text-decoration: none;
              background-color: ${theme(`badge.${context}.backgroundColor`, backgroundColor)};
            }
          `
        )}
      `
    );
  })}

  ${ifProp(
    'pill',
    css`
      border-radius: ${theme('badge.borderRadius.pill', badge.borderRadius.pill)};
    `
  )}

  /* Empty badges collapse automatically */
  &:empty {
    display: none;
  }
`;

export default Badge;
