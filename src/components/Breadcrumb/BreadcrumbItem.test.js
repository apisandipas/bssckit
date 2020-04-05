import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import BreadcrumbItem from './BreadcrumbItem';

describe('Breadcrumb component', () => {
  it('matches BreadcrumbItem', () => {
    const { container } = render(<BreadcrumbItem />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('display', 'inline-block', {
      modifier: '&:not(:first-child)::before',
    });
    expect(container.firstChild).toHaveStyleRule('padding-right', '0.5rem', {
      modifier: '&:not(:first-child)::before',
    });
    expect(container.firstChild).toHaveStyleRule('padding-left', '0.5rem', {
      modifier: '&:not(:first-child)::before',
    });
    expect(container.firstChild).toHaveStyleRule('color', '#6c757d', {
      modifier: '&:not(:first-child)::before',
    });
    expect(container.firstChild).toHaveStyleRule('content', "'/'", {
      modifier: '&:not(:first-child)::before',
    });
  });

  it('matches BreadcrumbItem active', () => {
    const { container } = render(<BreadcrumbItem active />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('color', '#6c757d');
  });
});
