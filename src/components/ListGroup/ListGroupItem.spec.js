import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';

import ListGroupItem from './ListGroupItem';

describe('ListGroupItem component', () => {
  it('matches ListGroupItem', () => {
    const { container } = render(<ListGroupItem />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches ListGroupItem action active', () => {
    const { container } = render(<ListGroupItem action active />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('color', '#fff', {
      modifier: '& > a',
    });
    expect(container.firstChild).toHaveStyleRule('color', '#fff', {
      modifier: '& > a:hover',
    });
    expect(container.firstChild).toHaveStyleRule('color', '#fff', {
      modifier: '& > a:focus',
    });
    expect(container.firstChild).toHaveStyleRule('background-color', '#007bff', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('cursor', 'pointer', {
      modifier: '&:hover',
    });
    expect(container.firstChild).toHaveStyleRule('background-color', '#007bff', {
      modifier: '&:focus',
    });
    expect(container.firstChild).toHaveStyleRule('cursor', 'pointer', {
      modifier: '&:focus',
    });
  });

  it('matches ListGroupItem action', () => {
    const { container } = render(<ListGroupItem action />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches ListGroupItem danger action', () => {
    const { container } = render(<ListGroupItem danger action />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches ListGroupItem danger', () => {
    const { container } = render(<ListGroupItem danger />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches ListGroupItem danger active', () => {
    const { container } = render(<ListGroupItem danger active />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches ListGroupItem dark action', () => {
    const { container } = render(<ListGroupItem dark action />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches ListGroupItem dark', () => {
    const { container } = render(<ListGroupItem dark />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches ListGroupItem dark active', () => {
    const { container } = render(<ListGroupItem dark active />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches ListGroupItem disabled action', () => {
    const { container } = render(<ListGroupItem disabled action />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches ListGroupItem disabled', () => {
    const { container } = render(<ListGroupItem disabled />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches ListGroupItem info action', () => {
    const { container } = render(<ListGroupItem info action />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches ListGroupItem info', () => {
    const { container } = render(<ListGroupItem info />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches ListGroupItem info active', () => {
    const { container } = render(<ListGroupItem info active />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches ListGroupItem light action', () => {
    const { container } = render(<ListGroupItem light action />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches ListGroupItem light', () => {
    const { container } = render(<ListGroupItem light />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches ListGroupItem light active', () => {
    const { container } = render(<ListGroupItem light active />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches ListGroupItem primary action', () => {
    const { container } = render(<ListGroupItem primary action />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches ListGroupItem primary', () => {
    const { container } = render(<ListGroupItem primary />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches ListGroupItem primary active', () => {
    const { container } = render(<ListGroupItem primary active />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches ListGroupItem secondary action', () => {
    const { container } = render(<ListGroupItem secondary action />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches ListGroupItem secondary', () => {
    const { container } = render(<ListGroupItem secondary />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches ListGroupItem secondary active', () => {
    const { container } = render(<ListGroupItem secondary active />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches ListGroupItem success action', () => {
    const { container } = render(<ListGroupItem success action />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches ListGroupItem success', () => {
    const { container } = render(<ListGroupItem success />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches ListGroupItem success active', () => {
    const { container } = render(<ListGroupItem success active />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches ListGroupItem warning action', () => {
    const { container } = render(<ListGroupItem warning action />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches ListGroupItem warning', () => {
    const { container } = render(<ListGroupItem warning />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches ListGroupItem warning active', () => {
    const { container } = render(<ListGroupItem warning active />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
