import React from 'react';
import { axe } from 'jest-axe';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import Card from './Card';

describe('Card Component', () => {
  it('matches Card', async () => {
    const { container } = render(<Card />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Card noRadius', () => {
    const { container } = render(<Card noRadius />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('border-radius', '0');
  });
});
