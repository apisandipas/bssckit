import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import Table from './Table';

describe('Table component', () => {
  it('matches Table', () => {
    const { container } = render(<Table />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Table bordered', () => {
    const { container } = render(<Table bordered />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Table hover', () => {
    const { container } = render(<Table hover />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Table responsive bordered', () => {
    const { container } = render(<Table responsive bordered />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('display', 'block');
    expect(container.firstChild).toHaveStyleRule('width', '100%');
    expect(container.firstChild).toHaveStyleRule('overflow-x', 'auto');
  });

  it('matches Table responsiveLg bordered', () => {
    const { container } = render(<Table responsiveLg bordered />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('display', 'block', {
      media: '(max-width:991.98px)',
    });
    expect(container.firstChild).toHaveStyleRule('width', '100%', {
      media: '(max-width:991.98px)',
    });
    expect(container.firstChild).toHaveStyleRule('overflow-x', 'auto', {
      media: '(max-width:991.98px)',
    });
    expect(container.firstChild).toHaveStyleRule('border', '0', {
      media: '(max-width:991.98px)',
    });
  });

  it('matches Table responsiveMd bordered', () => {
    const { container } = render(<Table responsiveMd bordered />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('display', 'block', {
      media: '(max-width:767.98px)',
    });
    expect(container.firstChild).toHaveStyleRule('width', '100%', {
      media: '(max-width:767.98px)',
    });
    expect(container.firstChild).toHaveStyleRule('overflow-x', 'auto', {
      media: '(max-width:767.98px)',
    });
    expect(container.firstChild).toHaveStyleRule('border', '0', {
      media: '(max-width:767.98px)',
    });
  });

  it('matches Table responseSm bordered', () => {
    const { container } = render(<Table responsiveSm bordered />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('display', 'block', {
      media: '(max-width:575.98px)',
    });
    expect(container.firstChild).toHaveStyleRule('width', '100%', {
      media: '(max-width:575.98px)',
    });
    expect(container.firstChild).toHaveStyleRule('overflow-x', 'auto', {
      media: '(max-width:575.98px)',
    });
    expect(container.firstChild).toHaveStyleRule('border', '0', {
      media: '(max-width:575.98px)',
    });
  });

  it('matched Table responsiveXl bordered', () => {
    const { container } = render(<Table responsiveXl bordered />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('display', 'block', {
      media: '(max-width:1199.98px)',
    });
    expect(container.firstChild).toHaveStyleRule('width', '100%', {
      media: '(max-width:1199.98px)',
    });
    expect(container.firstChild).toHaveStyleRule('overflow-x', 'auto', {
      media: '(max-width:1199.98px)',
    });
    expect(container.firstChild).toHaveStyleRule('border', '0', {
      media: '(max-width:1199.98px)',
    });
  });

  it('matches Table small', () => {
    const { container } = render(<Table sm />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('padding', '0.3rem', {
      modifier: '& th',
    });
    expect(container.firstChild).toHaveStyleRule('padding', '0.3rem', {
      modifier: '& td',
    });
  });

  it('matches Tabled striped', () => {
    const { container } = render(<Table stiped />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Table tableDark bordered striped hover', () => {
    const { container } = render(<Table tableDark bordered striped hover />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Table theadDark', () => {
    const { container } = render(<Table theadDark />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Table theadLight', () => {
    const { container } = render(<Table theadLight />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
