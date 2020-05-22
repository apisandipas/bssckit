import React from 'react';
import { axe } from 'jest-axe';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import CardFooter from './CardFooter';

describe('CardFooter Component', () => {
  it('matches CardFooter', async () => {
    const { container } = render(<CardFooter />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches CardFooter noRadius', () => {
    const { container } = render(<CardFooter noRadius />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('border-radius', '0', {
      modifier: '&:last-child',
    });
  });
});
