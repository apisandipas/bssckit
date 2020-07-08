import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';

import Nav from './Nav';

describe('Nav component', () => {
  it('matches Nav', () => {
    const { container } = render(<Nav />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('display', 'flex');
    expect(container.firstChild).toHaveStyleRule('flex-wrap', 'wrap');
    expect(container.firstChild).toHaveStyleRule('padding-left', '0');
    expect(container.firstChild).toHaveStyleRule('margin-bottom', '0');
    expect(container.firstChild).toHaveStyleRule('list-style', 'none');
    expect(container.firstChild).toHaveStyleRule('text-decoration', 'none', {
      modifier: '& > a',
    });
    expect(container.firstChild).toHaveStyleRule('flex', '1', {
      modifier: '&:last-child',
    });
  });

  it('matches Nav center', () => {
    const { container } = render(<Nav center />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('justify-content', 'center !important');
  });

  it('matches Nav end', () => {
    const { container } = render(<Nav end />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('justify-content', 'flex-end !important');
  });

  it('matches Nav start', () => {
    const { container } = render(<Nav start />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('justify-content', 'flex-start !important');
  });

  it('matches Nav fill', () => {
    const { container } = render(<Nav fill />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('flex', '1 1 auto', {
      modifier: '& > a',
    });
    expect(container.firstChild).toHaveStyleRule('text-align', 'center', {
      modifier: '& > a',
    });
  });

  it('matches Nav justified', () => {
    const { container } = render(<Nav justified />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('flex-basis', '0', {
      modifier: '& > a',
    });
    expect(container.firstChild).toHaveStyleRule('flex-grow', '1', {
      modifier: '& > a',
    });
    expect(container.firstChild).toHaveStyleRule('text-align', 'center', {
      modifier: '& > a',
    });
  });

  it('matches Nav tabs', () => {
    const { container } = render(<Nav tabs />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('border-bottom', '1px solid #cccecf');
    expect(container.firstChild).toHaveStyleRule('margin-bottom', '-1px', {
      modifier: '& > a',
    });
  });

  it('matches Nav vertical', () => {
    const { container } = render(<Nav vertical />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('flex-direction', 'column !important');
  });
});
