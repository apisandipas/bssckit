import React from 'react';
import { Container } from '../Grid';
import { Button } from '../Button';
import Jumbotron from './Jumbotron';

export default {
  title: 'Jumbotron',
};

export const simple = () => (
  <Container>
    <Jumbotron>
      <h1>Hello, world!</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured
        content or information.
      </p>
      <hr />
      <p>
        It uses utility classes for typography and spacing to space content out within the larger container.
      </p>
      <Button primary lg>
        Learn more
      </Button>
    </Jumbotron>
  </Container>
);

export const fluid = () => (
  <Jumbotron fluid>
    <h1>Fluid jumbotron</h1>
    <p>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
  </Jumbotron>
);
