import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';

import { FormInline } from './FormInline';

describe('FormInline Component', () => {
  it('matches normal FormInline', () => {
    const { container } = render(<FormInline />);

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('display', 'flex');
    expect(container.firstChild).toHaveStyleRule('flex-flow', 'row wrap');
    expect(container.firstChild).toHaveStyleRule('align-items', 'center');
    expect(container.firstChild).toHaveStyleRule('box-sizing', 'border-box');
  });
});
