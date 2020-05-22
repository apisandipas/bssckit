import React from 'react';
import { axe } from 'jest-axe';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import CardTitle from './CardTitle';

describe('CardTitle Component', () => {
  it('matches CardTitle h1', () => {
    const { container } = render(<CardTitle h1 />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches CardTitle h1', () => {
    const { container } = render(<CardTitle h1 />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches CardTitle h2', () => {
    const { container } = render(<CardTitle h2 />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches CardTitle h3', () => {
    const { container } = render(<CardTitle h3 />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches CardTitle h4', () => {
    const { container } = render(<CardTitle h4 />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches CardTitle h5', () => {
    const { container } = render(<CardTitle h5 />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches CardTitle h6', () => {
    const { container } = render(<CardTitle h6 />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches CardTitle muted', () => {
    const { container } = render(<CardTitle h6 muted />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches CardTitle subtitle', () => {
    const { container } = render(<CardTitle subtitle />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
