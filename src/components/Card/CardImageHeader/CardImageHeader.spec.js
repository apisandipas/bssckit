import React from 'react';
import { axe } from 'jest-axe';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import CardImageHeader from './CardImageHeader';

describe('CardImageHeader Component', () => {
  it('matches CardImageHeader', async () => {
    const { container } = render(<CardImageHeader alt='' />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('width', '100%');
    expect(container.firstChild).toHaveStyleRule('border-top-left-radius', 'calc(0.25rem - 1px)');
    expect(container.firstChild).toHaveStyleRule('border-top-right-radius', 'calc(0.25rem - 1px)');
  });

  it('matches CardImageHeader noRadius', () => {
    const { container } = render(<CardImageHeader noRadius />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('border-radius', '0');
  });
});
