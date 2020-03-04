import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';

import { Container } from '../Container';

describe('Container Component', () => {
  it('matches normal container', () => {
    const { container } = render(<Container />);

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('width', '100%');
    expect(container.firstChild).toHaveStyleRule('margin-right', 'auto');
    expect(container.firstChild).toHaveStyleRule('margin-left', 'auto');
    expect(container.firstChild).toHaveStyleRule('padding-left', '15px');
    expect(container.firstChild).toHaveStyleRule('padding-right', '15px');

    // TODO Troubleshoot testing a media query
    // expect(container.firstChild).toHaveStyleRule('max-width', '540px', {
    //   media: '(min-width: 36em)',
    // });

    // expect(container.firstChild).toHaveStyleRule('max-width', '720px', {
    //   media: '(min-width: 48em)',
    // });

    // expect(container.firstChild).toHaveStyleRule('max-width', '960px', {
    //   media: '(min-width: 62em)',
    // });2

    // expect(container.firstChild).toHaveStyleRule('max-width', '1140px', {
    //   media: '(min-width: 75rem)',
    // });
  });

  it('matches fluid container', () => {
    const { container } = render(<Container fluid />);

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('width', '100%');
    expect(container.firstChild).toHaveStyleRule('margin-right', 'auto');
    expect(container.firstChild).toHaveStyleRule('margin-left', 'auto');
    expect(container.firstChild).toHaveStyleRule('padding-left', '15px');
    expect(container.firstChild).toHaveStyleRule('padding-right', '15px');
  });
});
