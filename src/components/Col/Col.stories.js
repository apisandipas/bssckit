import React from 'react';
import Col from './Col';

export default {
  title: 'Grid / Column',
};

export const simple = () => (
  <Col bgSecondary textLight p2>
    Simple Container
  </Col>
);

export const fluid = () => (
  <Col bgPrimary fluid textLight p2>
    Fluid Container
  </Col>
);
