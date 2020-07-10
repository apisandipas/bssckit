import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import Tr from './Tr';

describe('Tr component', () => {
  it('matches Tr active hover', () => {
    const { container } = render(<Tr active hover />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Tr danger hover', () => {
    const { container } = render(<Tr danger hover />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Tr dark hover', () => {
    const { container } = render(<Tr dark hover />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Tr info hover', () => {
    const { container } = render(<Tr info hover />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Tr light hover', () => {
    const { container } = render(<Tr light hover />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Tr primary hover', () => {
    const { container } = render(<Tr primary hover />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Tr secondary hover', () => {
    const { container } = render(<Tr secondary hover />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Tr success hover', () => {
    const { container } = render(<Tr success hover />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Tr warning hover', () => {
    const { container } = render(<Tr warning hover />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
