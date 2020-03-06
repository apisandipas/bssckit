import React from 'react';
import { axe } from 'jest-axe';
import { render, cleanup } from '@testing-library/react';
import 'jest-styled-components';
import Col from './Col';

afterEach(cleanup);

describe('Col component', () => {
  it('matches Col styles', async () => {
    const { container } = render(<Col />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('padding-right', 'calc(30px / 2)');
    expect(container.firstChild).toHaveStyleRule('padding-left', 'calc(30px / 2)');
    expect(container.firstChild).toHaveStyleRule('width', '100%');
  });

  it('matches Col with specified xs size', async () => {
    const { container } = render(<Col xs={6} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Col with specified sm size', async () => {
    const { container } = render(<Col sm={6} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Col with specified md size', async () => {
    const { container } = render(<Col md={6} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Col with specified lg size', async () => {
    const { container } = render(<Col lg={6} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Col with specified xl size', async () => {
    const { container } = render(<Col xl={6} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Col with specified xs offset', () => {
    const { container } = render(<Col xsOffset={6} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Col with specified sm offset', () => {
    const { container } = render(<Col smOffset={6} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Col with specified md offset', () => {
    const { container } = render(<Col mdOffset={6} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Col with specified lg offset', () => {
    const { container } = render(<Col lgOffset={6} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches Col with specified xl offset', () => {
    const { container } = render(<Col xlOffset={6} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
