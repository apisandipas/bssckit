import React from 'react';
import { axe } from 'jest-axe';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import Breadcrumb from './Breadcrumb';

describe('Breadcrumb componen', () => {
  it('matches Breadcrumb', () => {
    const { container } = render(<Breadcrumb />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Breadcrumb noRadius', () => {
    const { container } = render(<Breadcrumb noRadius />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('border-radius', '0');
  });

  it('matches Breadcrumb pill', () => {
    const { container } = render(<Breadcrumb pill />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('border-radius', '10rem');
  });
});
