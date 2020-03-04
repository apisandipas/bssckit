import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { ifProp, theme } from 'styled-tools';
import { up } from 'styled-breakpoints';
import { Div } from '../Utilities/base';
import defaultTheme from '../../theme';
import { withinRange } from '../../utils/functions';

const getSizeStyles = size => css`
  flex: 0 0 ${size / (theme('grid.columns') * 100)}%;
  max-width: ${size / (theme('grid.columns') * 100)}%;
`;

const getOffsetStyles = size => css`
  margin-left: ${size / (theme('grid.columns') * 100)}%;
`;

const hasSize = props => props.xs || props.sm || props.md || props.lg || props.xl;

const Col = styled(Div)`
  position: relative;
  width: 100%;
  padding-right: ${theme('grid.gutterWidth') / 2}px;
  padding-left: ${theme('grid.gutterWidth') / 2}px;
  max-width: ${props => 1 / props.span}%;
  flex: 0 0 ${props => 1 / props.span}%;

  ${ifProp(
    'offset',
    css`
      margin-left: ${props => (1 / props.offset) * 100}%;
    `
  )}

  ${props => props.xs && getSizeStyles(props.xs)}
  ${props => props.xsOffset && getOffsetStyles(props.xsOffset)}


  ${up('sm')} {

    ${props =>
      !hasSize(props) &&
      css`
        flex-basis: 0;
        flex-grow: 1;
      `}

    ${props => props.sm && getSizeStyles(props.sm)}
    ${props => props.smOffset && getOffsetStyles(props.smOffset)}
  }

  ${up('md')} {
    ${props => props.md && getSizeStyles(props.md)}
    ${props => props.mdOffset && getOffsetStyles(props.mdOffset)}
  }

  ${up('lg')} {
    ${props => props.lg && getSizeStyles(props.lg)}
    ${props => props.lgOffset && getOffsetStyles(props.lgOffset)}
  }

  ${up('xl')} {
    ${props => props.xl && getSizeStyles(props.xl)}
    ${props => props.xlOffset && getOffsetStyles(props.xlOffset)}
  }

`;

Col.propTypes = {
  span: withinRange(1, 12),
  offset: withinRange(1, 11),
  theme: PropTypes.object,
};

Col.defaultProps = {
  span: defaultTheme.grid.columns,
  theme: defaultTheme,
};

export default Col;
