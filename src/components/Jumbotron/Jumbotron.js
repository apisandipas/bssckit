import styled, { css } from 'styled-components';
import { up, down } from 'styled-breakpoints';
import defaultTheme from '../../theme';
import { getColor, getPadding, getBorderRadius } from '../../utils/themeFunctions';
import { Div } from '../Utilities/base';

const padding = props => {
  if (props.fluid) {
    return css`
      padding-right: ${getPadding(props, 'jumbotron', 'fluidRight')};
      padding-left: ${getPadding(props, 'jumbotron', 'fluidLeft')};
    `;
  } else if (props.pill) {
    return css`
      padding: ${getPadding(props, 'jumbotron', 'pill')};
    `;
  }

  return css`
    padding: ${getPadding(props, 'jumbotron', 'default')};
  `;
};

const borderRadius = props => {
  if (props.fluid || props.noRadius) {
    return css`
      border-radius: ${getBorderRadius(props, 'jumbotron', 'noRadius')};
    `;
  } else if (props.pill) {
    return css`
      border-radius: ${getBorderRadius(props, 'jumbotron', 'pill')};
    `;
  }

  return css`
    border-radius: ${getBorderRadius(props, 'jumbotron', 'lg')};
  `;
};

const Jumbotron = styled(Div)`
  margin-bottom: 2rem;
  background-color: ${props => getColor(props, 'jumbotron', 'backgroundColor')};

  ${up('sm')} {
    padding: ${props => {
      if (props.pill) {
        return getPadding(props, 'jumbotron', 'lgPill');
      }
      return getPadding(props, 'jumbotron', 'sm');
    }};
  }

  ${down('md')} {
    padding: ${props => {
      if (props.pill) {
        return getPadding(props, 'jumbotron', 'smPill');
      }
      return getPadding(props, 'jumbotron', 'sm');
    }};
  }

  ${props => padding(props)};
  ${props => borderRadius(props)};
`;

Jumbotron.defaultProps = {
  theme: defaultTheme,
};

export default Jumbotron;
