import React from 'react';
import { axe } from 'jest-axe';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { Dropdown, DropdownDivider, DropdownItem, DropdownMenu } from './';

describe('Dropdown Component', () => {
  it('matches Dropdown', () => {
    const { container } = render(<Dropdown />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('position', 'relative');
  });
});

describe('DropdownDivider Component', () => {
  it('matches DropdownDivider', () => {
    const { container } = render(<DropdownDivider />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('DropdownItem Component', () => {
  it('matches DropdownItem', () => {
    const { container } = render(<DropdownItem />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches DropdownItem active', () => {
    const { container } = render(<DropdownItem active />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches DropdownItem disabled', () => {
    const { container } = render(<DropdownItem disabled />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('DropdownMenu Component', () => {
  it('matches DropdownMenu', () => {
    const { container } = render(<DropdownMenu />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches DropdownMenu fullWidth', () => {
    const { container } = render(<DropdownMenu fullWidth />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('min-width', '100%');
  });

  it('matches DropdownMenu noRadius', () => {
    const { container } = render(<DropdownMenu noRadius />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('border-radius', '0');
  });

  it('matches DropdownMenu right', () => {
    const { container } = render(<DropdownMenu right />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('right', '0');
  });
});
