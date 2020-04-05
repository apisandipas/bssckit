import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';

import InputGroupAppend from '.';

describe('InputGroupAppend component', () => {
  it('matches InputGroupAppend', () => {
    const { container } = render(<InputGroupAppend />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('display', 'flex');
    expect(container.firstChild).toHaveStyleRule('margin-left', '-1px');
    expect(container.firstChild).toHaveStyleRule('position', 'relative', {
      modifier: '& > button',
    });
    expect(container.firstChild).toHaveStyleRule('z-index', '2', {
      modifier: '& > button',
    });
    expect(container.firstChild).toHaveStyleRule('border-top-left-radius', '0', {
      modifier: '& > span',
    });
    expect(container.firstChild).toHaveStyleRule('border-bottom-left-radius', '0', {
      modifier: '& > span',
    });
    expect(container.firstChild).toHaveStyleRule('border-top-left-radius', '0', {
      modifier: '& > button',
    });
    expect(container.firstChild).toHaveStyleRule('border-bottom-left-radius', '0', {
      modifier: '& > button',
    });
  });
});
