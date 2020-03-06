import React from 'react';
import { axe } from 'jest-axe';
import { render, cleanup } from '@testing-library/react';
import 'jest-styled-components';
import Row from './Row';

afterEach(cleanup);

describe('Row component', () => {
  it('matched Row styled', async () => {
    const { container } = render(<Row />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('display', 'flex');
    expect(container.firstChild).toHaveStyleRule('margin-left', '-15px');
    expect(container.firstChild).toHaveStyleRule('margin-right', '-15px');
    expect(container.firstChild).toHaveStyleRule('flex-wrap', 'wrap');
  });
});
