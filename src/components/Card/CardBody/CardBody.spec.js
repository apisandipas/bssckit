import React from 'react';
import { axe } from 'jest-axe';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import CardBody from './CardBody';

describe('CardBody Component', () => {
  it('matches CardBody', async () => {
    const { container } = render(<CardBody />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
  });
});
