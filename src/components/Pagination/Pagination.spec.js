import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';

import Pagination from './Pagination';
import PageItem from './PageItem';
import PageLink from './PageLink';

describe('Pagination component', () => {
  it('Matches Pagination styles', () => {
    const { container } = render(<Pagination />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('display', 'flex');
    expect(container.firstChild).toHaveStyleRule('margin-left', '0');
    expect(container.firstChild).toHaveStyleRule('list-style', 'none');
  });
});

describe('PageItem component', () => {
  it('matches PageItem styles', () => {
    const { container } = render(<PageItem />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('PageLink component', () => {
  it('matches PageLink styles', () => {
    const { container } = render(<PageLink />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
