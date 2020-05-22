import React from 'react';
import { axe } from 'jest-axe';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import CardHeader from './CardHeader';

describe('CardHeader Component', () => {
  it('matches CardHeader', async () => {
    const { container } = render(<CardHeader />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches CardHeader noRadius', () => {
    const { container } = render(<CardHeader noRadius />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('border-radius', '0');
  });
});
