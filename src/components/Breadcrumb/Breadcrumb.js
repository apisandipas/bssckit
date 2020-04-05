import styled, { css } from 'styled-components';
import { theme } from 'styled-tools';
import defaultTheme from '../../theme';
import { Ol } from '../Utilities/base';

const getBorderRadius = props => {
  if (props.noRadius) {
    return css`
      border-radius: ${theme('breadcrumb.borderRadius.noRadius')};
    `;
  } else if (props.pill) {
    return css`
      border-radius: ${theme('breadcrumb.borderRadius.pill')};
    `;
  }

  return css`
    border-radius: ${theme('breadcrumb.borderRadius.default')};
  `;
};

const Breadcrumb = styled(Ol)`
  display: flex;
  flex-wrap: wrap;
  padding: ${theme('breadcrumb.padding.default')};
  margin-bottom: ${theme('breadcrumb.margin.bottom')};
  list-style: none;
  background-color: ${theme('breadcrumb.colors.default.backgroundColor')};
  ${props => getBorderRadius(props)}
`;

Breadcrumb.defaultProps = {
  theme: defaultTheme,
};

export default Breadcrumb;
