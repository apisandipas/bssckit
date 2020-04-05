import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';

import InputGroup from './InputGroup';

describe('InputGroup Component', () => {
  it('matches normal InputGroup', () => {
    const { container } = render(
      <InputGroup>
        <input />
      </InputGroup>
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('position', 'relative');
    expect(container.firstChild).toHaveStyleRule('display', 'flex');
    expect(container.firstChild).toHaveStyleRule('flex-wrap', 'wrap');
    expect(container.firstChild).toHaveStyleRule('align-items', 'stretch');
    expect(container.firstChild).toHaveStyleRule('width', '100%');
    expect(container.firstChild).toHaveStyleRule('position', 'relative', {
      modifier: '& > input',
    });
    expect(container.firstChild).toHaveStyleRule('flex', '1 1 auto', {
      modifier: '& > input',
    });
    expect(container.firstChild).toHaveStyleRule('width', '1%', {
      modifier: '& > input',
    });
    expect(container.firstChild).toHaveStyleRule('position', 'relative', {
      modifier: '& > textarea',
    });
    expect(container.firstChild).toHaveStyleRule('flex', '1 1 auto', {
      modifier: '& > textarea',
    });
    expect(container.firstChild).toHaveStyleRule('width', '1%', {
      modifier: '& > textarea',
    });
    expect(container.firstChild).toHaveStyleRule('position', 'relative', {
      modifier: '& > select',
    });
    expect(container.firstChild).toHaveStyleRule('flex', '1 1 auto', {
      modifier: '& > select',
    });
    expect(container.firstChild).toHaveStyleRule('width', '1%', {
      modifier: '& > select',
    });
  });

  it(' matches InputGroup lg', () => {
    const { container } = render(<InputGroup lg />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it(' matches InputGroup lg', () => {
    const { container } = render(<InputGroup sm />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
