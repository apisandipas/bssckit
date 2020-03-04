import React from 'react';
import Container from './Container';

export default {
  title: 'Grid / Container',
};

export const simple = () => (
  <Container bgSecondary textLight p2>
    Simple Container
  </Container>
);

export const fluid = () => (
  <Container bgPrimary fluid textLight p2>
    Fluid Container
  </Container>
);
