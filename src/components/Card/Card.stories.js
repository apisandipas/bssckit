import React from 'react';
import { Button } from '../Button';
import { Card, CardBody, CardImageHeader, CardTitle, CardText } from './';

export default {
  title: 'Card',
};

export const simple = () => (
  <Card style={{ width: '18rem' }}>
    <CardImageHeader src='http://via.placeholder.com/350x150' />
    <CardBody>
      <CardTitle h3>Card title</CardTitle>
      <CardText>
        Some quick example text to build on the card title and make up the bulk of the card&#39;s content.
      </CardText>
      <Button primary>Go somewhere</Button>
    </CardBody>
  </Card>
);

export const withPlainBody = () => (
  <Card>
    <CardBody>This is some text within a card body.</CardBody>
  </Card>
);

export const withMultipleTitles = () => (
  <Card style={{ width: '18rem' }}>
    <CardBody>
      <CardTitle h3>Card title</CardTitle>
      <CardTitle h4 muted subtitle>
        Card subtitle
      </CardTitle>
      <CardText>
        Some quick example text to build on the card title and make up the bulk of the card&#39;s content.
      </CardText>
    </CardBody>
  </Card>
);

export const withLinks = () => (
  <Card style={{ width: '18rem' }}>
    <CardBody>
      <CardTitle h3>Card title</CardTitle>
      <CardText>
        Some quick example text to build on the card title and make up the bulk of the card&#39;s content.
      </CardText>
      <a href=''>Card Link</a>
      <a href=''>Another link</a>
    </CardBody>
  </Card>
);
