import styled, { css } from 'styled-components';
import { theme, ifProp } from 'styled-tools';
import { Div } from '../base';
import defaultTheme from '../../utils/defaultTheme';
import { themeContexts } from '../../utils/consts';

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
  padding: ${theme('alert.padding.default')};
  margin-bottom: ${theme('alert.margin.bottom')};
  border: ${theme('alert.border.default')};
  border-radius: ${theme('alert.borderRadius.default')};
  color: ${theme(`alert.colors.default.color`)};
  background-color: ${theme(`alert.colors.default.background`)};
  border-color: ${theme(`alert.colors.default.border`)};

  & > a,
  & > a:hover {
    font-weight: ${theme('alert.fontWeight.default')};
  }

  & > h1,
  & > h2,
  & > h3,
  & > h4,
  & > h5,
  & > h6 {
    color: inherit;
  }

  ${themeContexts.map(context => {
    return ifProp(
      context,
      css`
        color: ${theme(`alert.colors.text`)};
        background-color: ${theme(`alert.colors.${context}.background`)};
        border-color: ${theme(`alert.colors.${context}.border`)};

        & > a,
        & > a:hover {
          color: ${theme(`alert.colors.${context}.text`)};
        }

        & > h1,
        & > h2,
        & > h3,
        & > h4,
        & > h5,
        & > h6 {
          color: ${theme(`alert.colors.${context}.text`)};
        }

        & > hr {
          border-top-color: ${theme(`alert.colors.${context}.text`)};
        }
      `
    );
  })}

  ${ifProp(
    'noRadius',
    css`
      border-radius: 0;
    `
  )}

  ${ifProp(
    'pill',
    css`
      border-radius: ${theme('alert.borderRadius.pill')};
    `
  )}

  ${ifProp(
    'dismissible',
    css`
      padding-right: ${theme('alert.padding.dismissibleRight')};
    `
  )};
`;

Alert.defaultProps = {
  theme: defaultTheme,
};

export default Alert;
