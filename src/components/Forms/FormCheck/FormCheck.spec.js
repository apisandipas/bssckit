import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';

import FormCheck from './FormCheck';

describe('FormInline Component', () => {
  it('matches normal FormCheck', () => {
    const { container } = render(<FormCheck />);

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('position', 'relative');
    expect(container.firstChild).toHaveStyleRule('display', 'block');
    expect(container.firstChild).toHaveStyleRule('box-sizing', 'border-box');
    expect(container.firstChild).toHaveStyleRule('margin-bottom', '0', {
      modifier: '& > label',
    });
    expect(container.firstChild).toHaveStyleRule('position', 'static', {
      modifier: '& > input',
    });
    expect(container.firstChild).toHaveStyleRule('margin-top', '0', {
      modifier: '& > input',
    });
    expect(container.firstChild).toHaveStyleRule('margin-right', '0.3125rem', {
      modifier: '& > input',
    });
    expect(container.firstChild).toHaveStyleRule('margin-left', '0', {
      modifier: '& > input',
    });
  });

  it('matches FormCheck inline', () => {
    const { container } = render(<FormCheck inline />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('display', 'inline-flex');
    expect(container.firstChild).toHaveStyleRule('align-items', 'center');
    expect(container.firstChild).toHaveStyleRule('padding-left', '0');
    expect(container.firstChild).toHaveStyleRule('margin-right', '0.75rem');
  });
});
