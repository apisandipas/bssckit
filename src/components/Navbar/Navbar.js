import styled, { css } from 'styled-components';
import { Nav } from '../Nav';
import defaultTheme from '../../theme';
import { getColor, getPadding, getBreakpointSize } from '../../utils/themeFunctions';

const color = props =>
  css`
    color: ${getColor(props, 'navbar', 'color')};
  `;

const borderColor = props =>
  css`
    border-color: ${getColor(props, 'navbar', 'borderColor')};
  `;

const backgroundColor = props =>
  css`
    background-color: ${getColor(props, 'navbar', 'backgroundColor')};
  `;

const navbarExpand = props =>
  (props.expandSm || props.expandMd || props.expandLg || props.expandXl) &&
  css`
    @media (max-width: ${getBreakpointSize(props)}) {
      & > nav:not(:last-child) {
        display: flex !important;
        width: 100%;
        justify-content: space-between;
      }
    }
  `;

const Navbar = styled(Nav)`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: ${props => getPadding(props, 'navbar', 'default')};
  ${props => color(props)}
  ${props => borderColor(props)}
  ${props => backgroundColor(props)}
  ${props => navbarExpand(props)}
`;

Navbar.defaultProps = {
  theme: defaultTheme,
};

export default Navbar;
