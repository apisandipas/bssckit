import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import defaultTheme from '../../../theme';
import { Div } from '../../Utilities/base';
import { getWidth } from '../../../utils/themeFunctions';

const Container = styled(Div)`
  width: ${props => getWidth(props, 'container', 'default')};
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;

  ${up('sm')} {
    max-width: ${props =>
      props.fluid ? getWidth(props, 'container', 'default') : getWidth(props, 'container', 'fluid', 'sm')};
  }

  ${up('md')} {
    max-width: ${props =>
      props.fluid ? getWidth(props, 'container', 'default') : getWidth(props, 'container', 'fluid', 'md')};
  }

  ${up('lg')} {
    max-width: ${props =>
      props.fluid ? getWidth(props, 'container', 'default') : getWidth(props, 'container', 'fluid', 'lg')};
  }

  ${up('xl')} {
    max-width: ${props =>
      props.fluid ? getWidth(props, 'container', 'default') : getWidth(props, 'container', 'fluid', 'xl')};
  }
`;

Container.defaultProps = {
  theme: defaultTheme,
};

export default Container;
