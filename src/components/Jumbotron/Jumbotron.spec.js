import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';

import { Jumbotron } from '../Jumbotron';

describe('Jumbotron Component', () => {
  it('matches Jumbotron', () => {
    const { container } = render(<Jumbotron />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Jumbotron pill', () => {
    const { container } = render(<Jumbotron pill />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('border-radius', '10rem');
  });

  it('matches Jumbotron fluid', () => {
    const { container } = render(<Jumbotron fluid />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('padding-right', '0');
    expect(container.firstChild).toHaveStyleRule('padding-left', '0');
    expect(container.firstChild).toHaveStyleRule('border-radius', '0');
  });

  it('matches Jumbotron noRadius', () => {
    const { container } = render(<Jumbotron noRadius />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('border-radius', '0');
  });
});
