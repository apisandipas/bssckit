import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';

import Navbar from './Navbar';

describe('Navbar Component', () => {
  it('matches Navbar', () => {
    const { container } = render(<Navbar />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('position', 'relative');
    expect(container.firstChild).toHaveStyleRule('display', 'flex');
    expect(container.firstChild).toHaveStyleRule('flex-wrap', 'wrap');
    expect(container.firstChild).toHaveStyleRule('align-items', 'center');
    expect(container.firstChild).toHaveStyleRule('justify-content', 'space-between');
    expect(container.firstChild).toHaveStyleRule('padding', '0.5rem 1rem');
  });

  it('matches Navbar dark', () => {
    const { container } = render(<Navbar dark />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('color', 'rgba(255,255,255,0.5)');
    expect(container.firstChild).toHaveStyleRule('border-color', 'rgba(255,255,255,0.1)');
    expect(container.firstChild).toHaveStyleRule('background-color', '#343a40');
  });

  it('matches Navbar light', () => {
    const { container } = render(<Navbar light />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
