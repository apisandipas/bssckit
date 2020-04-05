import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';

import FormCheckInput from './FormCheckInput';

describe('FormInline Component', () => {
  it('matches normal FormCheckInput', () => {
    const { container } = render(<FormCheckInput />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches FormCheckInput disabled', () => {
    const { container } = render(<FormCheckInput disabled />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
