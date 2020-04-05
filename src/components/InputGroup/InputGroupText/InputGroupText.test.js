import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';

import InputGroupText from '.';

describe('InputGroupText', () => {
  it('matches InputGroupText', () => {
    const { container } = render(<InputGroupText />);
    expect(container.first).toMatchSnapshot();
  });
});
