import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import Alert from './Alert';

describe('Alert Component', () => {
  it('matches plain', () => {
    const { container } = render(<Alert>Hello World</Alert>);

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('position', 'relative');
    expect(container.firstChild).toHaveStyleRule('padding', '0.75rem 1.25rem');
    expect(container.firstChild).toHaveStyleRule('border', '1px solid transparent');
    expect(container.firstChild).toHaveStyleRule('border-radius', '0.25rem');
    expect(container.firstChild).toHaveStyleRule('font-weight', '700', {
      modifier: '& > a',
    });
    expect(container.firstChild).toHaveStyleRule('color', 'inherit', {
      modifier: '& > h1',
    });
    expect(container.firstChild).toHaveStyleRule('color', 'inherit', {
      modifier: '& > h2',
    });
    expect(container.firstChild).toHaveStyleRule('color', 'inherit', {
      modifier: '& > h3',
    });
    expect(container.firstChild).toHaveStyleRule('color', 'inherit', {
      modifier: '& > h4',
    });
    expect(container.firstChild).toHaveStyleRule('color', 'inherit', {
      modifier: '& > h5',
    });
    expect(container.firstChild).toHaveStyleRule('color', 'inherit', {
      modifier: '& > h6',
    });
  });

  it('matches primary', () => {
    const { container } = render(<Alert primary />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches secondary', () => {
    const { container } = render(<Alert secondary />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches success', () => {
    const { container } = render(<Alert success />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches danger', () => {
    const { container } = render(<Alert danger />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches warning', () => {
    const { container } = render(<Alert warning />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches info', () => {
    const { container } = render(<Alert info />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches light', () => {
    const { container } = render(<Alert light />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches dark', () => {
    const { container } = render(<Alert dark />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches noRadius', () => {
    const { container } = render(<Alert noRadius />);

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('border-radius', '0');
  });

  it('matches pill', () => {
    const { container } = render(<Alert pill />);

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('border-radius', '10rem');
  });
});
