import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';

import ListGroup from './ListGroup';

describe('ListGroup Component', () => {
  it('matches normal ListGroup', () => {
    const { container } = render(<ListGroup />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('display', 'flex');
    expect(container.firstChild).toHaveStyleRule('flex-direction', 'column');
    expect(container.firstChild).toHaveStyleRule('padding-left', '0');
    expect(container.firstChild).toHaveStyleRule('margin-bottom', '0');
  });

  it('matches ListGroup flush', () => {
    const { container } = render(<ListGroup flush />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('border-right', '0', {
      modifier: '& > a',
    });
    expect(container.firstChild).toHaveStyleRule('border-left', '0', {
      modifier: '& > a',
    });
    expect(container.firstChild).toHaveStyleRule('border-radius', '0', {
      modifier: '& > a',
    });
    expect(container.firstChild).toHaveStyleRule('border-right', '0', {
      modifier: '& > li',
    });
    expect(container.firstChild).toHaveStyleRule('border-left', '0', {
      modifier: '& > li',
    });
    expect(container.firstChild).toHaveStyleRule('border-radius', '0', {
      modifier: '& > li',
    });
  });
});
