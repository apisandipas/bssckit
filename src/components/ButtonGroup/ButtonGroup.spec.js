import React from 'react';
import { axe } from 'jest-axe';
import { render, cleanup } from '@testing-library/react';
import 'jest-styled-components';
import ButtonGroup from './ButtonGroup';

describe('ButtonGroup Component', () => {
  it('matches ButtonGroup', async () => {
    const { container } = render(<ButtonGroup />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('position', 'relative');
    expect(container.firstChild).toHaveStyleRule('display', 'inline-flex');
    expect(container.firstChild).toHaveStyleRule('vertical-align', 'middle');
    expect(container.firstChild).toHaveStyleRule('line-height', '1.5', {
      modifier: '& > button',
    });
    expect(container.firstChild).toHaveStyleRule('position', 'relative', {
      modifier: '& > button',
    });
    expect(container.firstChild).toHaveStyleRule('flex', '0 1 auto', {
      modifier: '& > button',
    });
  });

  it('matches ButtonGroup lg', async () => {
    const { container } = render(<ButtonGroup lg />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('padding', '0.5rem 1rem', {
      modifier: '& > button',
    });
    expect(container.firstChild).toHaveStyleRule('font-size', '1.25rem', {
      modifier: '& > button',
    });
    expect(container.firstChild).toHaveStyleRule('line-height', '1.5', {
      modifier: '& > button',
    });
  });

  it('matches ButtonGroup sm', async () => {
    const { container } = render(<ButtonGroup sm />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('padding', '0.25rem 0.5rem', {
      modifier: '& > button',
    });
    expect(container.firstChild).toHaveStyleRule('font-size', '0.875rem', {
      modifier: '& > button',
    });
    expect(container.firstChild).toHaveStyleRule('line-height', '1.5', {
      modifier: '& > button',
    });
  });

  it('matches ButtonGroup vertical', async () => {
    const { container } = render(<ButtonGroup vertical />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('flex-direction', 'column');
    expect(container.firstChild).toHaveStyleRule('align-items', 'flex-start');
    expect(container.firstChild).toHaveStyleRule('justify-content', 'center');
    expect(container.firstChild).toHaveStyleRule('width', '100%', {
      modifier: '& > button',
    });
  });
});
