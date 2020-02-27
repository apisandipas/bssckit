import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import { Badge } from './index';

describe('Badge Component', () => {
  it('matches plain', () => {
    const { container } = render(<Badge />);
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

  it('matches primary', () => {
    const { container } = render(<Badge primary />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('color', '#fff');
    expect(container.firstChild).toHaveStyleRule('background-color', '#007bff');
  });

  it('matches secondary', () => {
    const { container } = render(<Badge secondary />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('color', '#fff');
    expect(container.firstChild).toHaveStyleRule('background-color', '#6c757d');
  });

  it('matches success', () => {
    const { container } = render(<Badge success />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('color', '#fff');
    expect(container.firstChild).toHaveStyleRule('background-color', '#28a745');
  });

  it('matches danger', () => {
    const { container } = render(<Badge danger />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('color', '#fff');
    expect(container.firstChild).toHaveStyleRule('background-color', '#dc3545');
  });

  it('matches warning', () => {
    const { container } = render(<Badge warning />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('color', '#2d2f31');
    expect(container.firstChild).toHaveStyleRule('background-color', '#ffc107');
  });

  it('matches info', () => {
    const { container } = render(<Badge info />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('color', '#fff');
    expect(container.firstChild).toHaveStyleRule('background-color', '#17a2b8');
  });

  it('matches light', () => {
    const { container } = render(<Badge light />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('color', '#2d2f31');
    expect(container.firstChild).toHaveStyleRule('background-color', '#f0f0f0');
  });

  it('matches dark', () => {
    const { container } = render(<Badge dark />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('color', '#fff');
    expect(container.firstChild).toHaveStyleRule('background-color', '#343a40');
  });
});
