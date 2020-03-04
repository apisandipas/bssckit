import React from 'react';
import { axe } from 'jest-axe';
import { render, cleanup } from '@testing-library/react';
import 'jest-styled-components';
import { Badge } from './index';

afterEach(cleanup);

describe('Badge Component', () => {
  it('matches plain', async () => {
    const { container } = render(<Badge />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('display', 'inline-block');
    expect(container.firstChild).toHaveStyleRule('padding', '0.25rem 0.4rem');
    expect(container.firstChild).toHaveStyleRule('font-size', '75%');
    expect(container.firstChild).toHaveStyleRule('font-weight', '700');
    expect(container.firstChild).toHaveStyleRule('line-height', '1');
    expect(container.firstChild).toHaveStyleRule('text-align', 'center');
    expect(container.firstChild).toHaveStyleRule('white-space', 'nowrap');
    expect(container.firstChild).toHaveStyleRule('vertical-align', 'baseline');
    expect(container.firstChild).toHaveStyleRule('border-radius', '0.25rem');
    expect(container.firstChild).toHaveStyleRule('display', 'none', {
      modifier: '&:empty',
    });
  });

  it('matches primary', async () => {
    const { container } = render(<Badge primary />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('color', '#fff');
    expect(container.firstChild).toHaveStyleRule('background-color', '#007bff');
  });

  it('matches secondary', async () => {
    const { container } = render(<Badge secondary />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('color', '#fff');
    expect(container.firstChild).toHaveStyleRule('background-color', '#6c757d');
  });

  it('matches success', async () => {
    const { container } = render(<Badge success />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('color', '#fff');
    expect(container.firstChild).toHaveStyleRule('background-color', '#28a745');
  });

  it('matches danger', async () => {
    const { container } = render(<Badge danger />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('color', '#fff');
    expect(container.firstChild).toHaveStyleRule('background-color', '#dc3545');
  });

  it('matches warning', async () => {
    const { container } = render(<Badge warning />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('color', '#2d2f31');
    expect(container.firstChild).toHaveStyleRule('background-color', '#ffc107');
  });

  it('matches info', async () => {
    const { container } = render(<Badge info />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('color', '#fff');
    expect(container.firstChild).toHaveStyleRule('background-color', '#17a2b8');
  });

  it('matches light', async () => {
    const { container } = render(<Badge light />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('color', '#2d2f31');
    expect(container.firstChild).toHaveStyleRule('background-color', '#f0f0f0');
  });

  it('matches dark', async () => {
    const { container } = render(<Badge dark />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('color', '#fff');
    expect(container.firstChild).toHaveStyleRule('background-color', '#343a40');
  });
});
