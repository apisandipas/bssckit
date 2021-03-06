import styled, { css } from 'styled-components';
import defaultTheme from '../../theme';
import { getColor, getPadding, getFontWeight } from '../../utils/themeFunctions';
import { Div } from '../Utilities/base';

const dropdownItemActive = props =>
  props.active &&
  css`
    text-decoration: none;
    color: ${getColor(props, 'dropdownItem', 'colorActive')};
    background-color: ${getColor(props, 'dropdownItem', 'backgroundColorActive')};
  `;

const dropdownItemDisabled = props =>
  props.disabled &&
  css`
    color: ${getColor(props, 'dropdownItem', 'colorDisabled')};
    background-color: transparent;
  `;

const DropdownItem = styled(Div)`
  padding: ${props => getPadding(props, 'dropdownItem', 'default')};
  clear: both;
  font-weight: ${props => getFontWeight(props, 'dropdownItem', 'default')};
  color: ${props => getColor(props, 'dropdownItem', 'color')};
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
  &:hover,
  &:focus {
    color: ${props => getColor(props, 'dropdownItem', 'colorHoverFocus')};
    text-decoration: none;
    background-color: ${props => getColor(props, 'dropdownItem', 'backgroundColorHoverFocus')};
  }
  ${props => dropdownItemActive(props)};
  ${props => dropdownItemDisabled(props)};
`;

DropdownItem.defaultProps = {
  theme: defaultTheme,
};

export default DropdownItem;
