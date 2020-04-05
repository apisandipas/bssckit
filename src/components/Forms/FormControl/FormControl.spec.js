import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest-styled-components';
import FormControl from './FormControl';

afterEach(cleanup);

describe('FormControl component', () => {
  it('matches FormControl', async () => {
    const { container } = render(<FormControl />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches FormControl', async () => {
    const { container } = render(<FormControl disabled />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches FormControl formInline', async () => {
    let { container } = render(<FormControl formInline />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches FormControl valid', async () => {
    const { container } = render(<FormControl valid />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches FormControl invalid', async () => {
    const { container } = render(<FormControl invalid />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches FormControl large', async () => {
    const { container } = render(<FormControl lg />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('padding', '0.5rem 1rem');
    expect(container.firstChild).toHaveStyleRule('font-size', '1.25rem');
    expect(container.firstChild).toHaveStyleRule('line-height', '1.5');
    expect(container.firstChild).toHaveStyleRule('border-radius', '0.3rem');
  });

  it('matches FormControl large select', async () => {
    const { container } = render(<FormControl lg select />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('padding', '0.5rem 1rem');
    expect(container.firstChild).toHaveStyleRule('font-size', '1.25rem');
    expect(container.firstChild).toHaveStyleRule('line-height', '1.5');
    expect(container.firstChild).toHaveStyleRule('border-radius', '0.3rem');
    expect(container.firstChild).toHaveStyleRule('height', 'calc(2.875rem + 2px)');
  });

  it('matches FormControl small', async () => {
    const { container } = render(<FormControl sm />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('padding', '0.25rem 0.5rem');
    expect(container.firstChild).toHaveStyleRule('font-size', '0.875rem');
    expect(container.firstChild).toHaveStyleRule('line-height', '1.5');
    expect(container.firstChild).toHaveStyleRule('border-radius', '0.2rem');
  });

  it('matches FormControl small select', async () => {
    const { container } = render(<FormControl sm select />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('padding', '0.25rem 0.5rem');
    expect(container.firstChild).toHaveStyleRule('font-size', '0.875rem');
    expect(container.firstChild).toHaveStyleRule('line-height', '1.5');
    expect(container.firstChild).toHaveStyleRule('border-radius', '0.2rem');
    expect(container.firstChild).toHaveStyleRule('height', 'calc(1.8125rem + 2px)');
  });

  it('matches FormControl noRadius', async () => {
    const { container } = render(<FormControl noRadius />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('border-radius', '0');
  });

  it('matches FormControl pill', async () => {
    const { container } = render(<FormControl pill />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('border-radius', '10rem');
  });

  it('matches FormControl select', async () => {
    const { container } = render(<FormControl select />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('height', 'calc(2.25rem + 2px)');
  });

  it('matches FormControl textarea', async () => {
    const { container } = render(<FormControl textarea />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
