import React from 'react';
import { axe } from 'jest-axe';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import Alert from './Alert';

describe('Alert Component', () => {
  it('matches plain', async () => {
    const { container } = render(<Alert>Hello World</Alert>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
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

  it('matches primary', async () => {
    const { container } = render(<Alert primary />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches secondary', async () => {
    const { container } = render(<Alert secondary />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches success', async () => {
    const { container } = render(<Alert success />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches danger', async () => {
    const { container } = render(<Alert danger />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches warning', async () => {
    const { container } = render(<Alert warning />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches info', async () => {
    const { container } = render(<Alert info />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches light', async () => {
    const { container } = render(<Alert light />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches dark', async () => {
    const { container } = render(<Alert dark />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches noRadius', async () => {
    const { container } = render(<Alert noRadius />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('border-radius', '0');
  });

  it('matches pill', async () => {
    const { container } = render(<Alert pill />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('border-radius', '10rem');
  });
});
