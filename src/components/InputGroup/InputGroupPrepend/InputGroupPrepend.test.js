import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';

import InputGroupPrepend from '.';

describe('InputGroupPrepend component', () => {
  it('matched InputGroupPrepend', () => {
    const { container } = render(<InputGroupPrepend />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('display', 'flex');
    expect(container.firstChild).toHaveStyleRule('margin-right', '-1px');
    expect(container.firstChild).toHaveStyleRule('position', 'relative', {
      modifier: '& > button',
    });
    expect(container.firstChild).toHaveStyleRule('z-index', '2', {
      modifier: '& > button',
    });
    expect(container.firstChild).toHaveStyleRule('border-top-right-radius', '0', {
      modifier: '& > span',
    });
    expect(container.firstChild).toHaveStyleRule('border-bottom-right-radius', '0', {
      modifier: '& > span',
    });
    expect(container.firstChild).toHaveStyleRule('border-top-right-radius', '0', {
      modifier: '& > button',
    });
    expect(container.firstChild).toHaveStyleRule('border-bottom-right-radius', '0', {
      modifier: '& > button',
    });
  });
});
