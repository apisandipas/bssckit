import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';

import NavLink from './NavLink';

describe('NavLink compomponent', () => {
  it('matches Navlink', () => {
    const { container } = render(<NavLink />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches NavLink tabs active', () => {
    const { container } = render(<NavLink tabs active />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches NavLink tabs disabled', () => {
    const { container } = render(<NavLink tabs disabled />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches NavLink tabs', () => {
    const { container } = render(<NavLink tabs />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches NavLink disabled', () => {
    const { container } = render(<NavLink disabled />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches NavLink noRadius', () => {
    const { container } = render(<NavLink to='#' noRadius />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('border-radius', '0');
  });

  it('matches NavLink pills active', () => {
    const { container } = render(<NavLink to='#' pills active />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('border-radius', '0.25rem');
    expect(container.firstChild).toHaveStyleRule('color', '#fff');
    expect(container.firstChild).toHaveStyleRule('background-color', '#007bff');
    expect(container.firstChild).toHaveStyleRule('color', '#fff', {
      modfier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('color', '#fff', {
      modfier: '&:focus',
    });
  });
});
