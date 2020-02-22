import styled, { css } from 'styled-components';
import { theme, ifProp } from 'styled-tools';
import { Span } from '../base';
import defaultTheme from '../../utils/defaultTheme';
import { themeContexts } from '../../utils/consts';

const Badge = styled(Span)`
  display: inline-block;
  padding: ${theme('badge.padding.default')};
  font-size: 75%;
  font-weight: ${theme('badge.fontWeight.default')};
  line-height: 1;

  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: ${theme('badge.borderRadius.default')};

  ${themeContexts.map(context => {
    return ifProp(
      context,
      css`
        color: ${theme(`badge.colors.${context}.color`)};
        background-color: ${theme(`badge.colors.${context}.backgroundColor`)};

        ${ifProp(
          'action',
          css`
            & > a {
              color: ${theme(`badge.colors.${context}.linkColor`)};
              text-decoration: none;
              background-color: ${theme(`badge.colors.${context}.backgroundColor`)};
              &:hover,
              &:focus {
                text-decoration: none;
                background-color: ${theme(`badge.colors.${context}.backgroundColorHoverFocus`)};
              }
            }
            &:hover,
            &:focus {
              cursor: pointer;
              background-color: ${theme(`badge.colors.${context}.backgroundColorHoverFocus`)};
              & > a {
                background-color: ${theme(`badge.colors.${context}.backgroundColorHoverFocus`)};
              }
            }
          `,
          css`
            & > a {
              color: ${theme(`badge.colors.${context}.linkColor`)};
              text-decoration: none;
              background-color: ${theme(`badge.colors.${context}.backgroundColor`)};
            }
          `
        )}
      `
    );
  })}

  ${ifProp(
    'pill',
    css`
      border-radius: ${theme('badge.borderRadius.pill')};
    `
  )}

  /* Empty badges collapse automatically */
  &:empty {
    display: none;
  }
`;

Badge.defaultProps = {
  theme: defaultTheme,
};

export default Badge;
