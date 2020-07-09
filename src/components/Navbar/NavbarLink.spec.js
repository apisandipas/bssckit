import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';

import NavbarLink from './NavbarLink';

describe('NavbarLink component', () => {
  it('matches NavbarLink brand', () => {
    const { container } = render(<NavbarLink brand />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches NavbarLink light active', () => {
    const { container } = render(<NavbarLink light active />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches NavbarLink light disabled', () => {
    const { container } = render(<NavbarLink light disabled />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches NavbarLink light', () => {
    const { container } = render(<NavbarLink light />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches NavbarLink dark active', () => {
    const { container } = render(<NavbarLink dark active />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches NavbarLink dark disabled', () => {
    const { container } = render(<NavbarLink dark disabled />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches NavbarLink dark', () => {
    const { container } = render(<NavbarLink dark />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
