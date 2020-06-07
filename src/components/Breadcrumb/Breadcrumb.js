import styled, { css } from 'styled-components';
import { Ol } from '../Utilities/base';
import { getBorderRadius, getPadding, getColor, getMargin } from '../../utils/themeFunctions';

const borderRadius = props => {
  if (props.noRadius) {
    return css`
      border-radius: ${getBorderRadius(props, 'breadcrumb', 'noRadius')};
    `;
  } else if (props.pill) {
    return css`
      border-radius: ${getBorderRadius(props, 'breadcrumb', 'pill')};
    `;
  }

  return css`
    border-radius: ${getBorderRadius(props, 'breadcrumb', 'default')};
  `;
};

const Breadcrumb = styled(Ol)`
  display: flex;
  flex-wrap: wrap;
  padding: ${props => getPadding(props, 'breadcrumb', 'default')};
  margin-bottom: ${props => getMargin(props, 'breadcrumb', 'bottom')};
  list-style: none;
  background-color: ${props => getColor(props, 'breadcrumb', 'backgroundColor')};
  ${props => borderRadius(props)}
`;

export default Breadcrumb;
