import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';

import Modal from './Modal';

describe('Modal component', () => {
  it('matches visible Modal', () => {
    const { getByTestId } = render(<Modal hidden={false} />);
    const modalTransition = getByTestId('ModalTransition');
    expect(modalTransition).toMatchSnapshot();
    expect(modalTransition).toHaveStyleRule('visibility', 'visible');
    expect(modalTransition).toHaveStyleRule('opacity', '1');
    expect(document.body.style.overflow).toBe('hidden');
  });

  it('matches Modal lg', () => {
    const { container } = render(<Modal lg />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matched Modal sm', () => {
    const { container } = render(<Modal sm />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
