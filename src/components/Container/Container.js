import styled, { css } from 'styled-components';
import { theme, ifProp, ifNotProp, withProp } from 'styled-tools';
import { up } from 'styled-breakpoints';
import { Div } from '../Utilities/base';
import defaultTheme from '../../theme';

const Container = styled(Div)`
  width: ${theme('container.width.default')};
  margin-right: auto;
  margin-left: auto;
  padding-right: ${withProp('theme.grid.gutterWidth', gutterWidth => `${gutterWidth / 2}px`)};
  padding-left:  ${withProp('theme.grid.gutterWidth', gutterWidth => `${gutterWidth / 2}px`)};

  ${ifNotProp(
    'fluid',
    css`
      ${up('sm')} {
        max-width: ${theme('container.width.sizes.sm')};
      }
    `
  )}

  ${ifNotProp(
    'fluid',
    css`
      ${up('md')} {
        max-width: ${theme('container.width.sizes.md')};
      }
    `
  )}

  ${ifNotProp(
    'fluid',
    css`
      ${up('lg')} {
        max-width: ${theme('container.width.sizes.lg')};
      }
    `
  )}

${ifNotProp(
  'fluid',
  css`
    ${up('xl')} {
      max-width: ${theme('container.width.sizes.xl')};
    }
  `
)}


  ${ifProp(
    'fluid',
    css`
      max-width: 100%;
      width: 100%;
    `
  )}
`;

Container.defaultProps = {
  theme: defaultTheme,
};

export default Container;
