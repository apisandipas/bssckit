import React from 'react';
import { Button } from '../Button';
import ButtonGroup from './ButtonGroup';
import ButtonToolbar from './ButtonToolbar';

export default {
  title: 'Button Group',
};

export const simple = () => (
  <>
    <ButtonGroup>
      <Button>Left</Button>
      <Button secondary>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>
  </>
);

export const sized = () => (
  <>
    <div>
      <ButtonGroup lg mb2>
        <Button secondary>Left</Button>
        <Button secondary>Middle</Button>
        <Button secondary>Right</Button>
      </ButtonGroup>
    </div>
    <div>
      <ButtonGroup mb2>
        <Button secondary>Left</Button>
        <Button secondary>Middle</Button>
        <Button secondary>Right</Button>
      </ButtonGroup>
    </div>
    <div>
      <ButtonGroup sm dBlock mb2>
        <Button secondary>Left</Button>
        <Button secondary>Middle</Button>
        <Button secondary>Right</Button>
      </ButtonGroup>
    </div>
  </>
);

export const vertical = () => (
  <ButtonGroup vertical>
    <Button secondary>Button</Button>
    <Button secondary>Button</Button>
    <Button secondary>Button</Button>
    <Button secondary>Button</Button>
    <Button secondary>Button</Button>
    <Button secondary>Button</Button>
  </ButtonGroup>
);

export const toolbar = () => (
  <ButtonToolbar>
    <ButtonGroup mr2>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button>4</Button>
    </ButtonGroup>
    <ButtonGroup mr2>
      <Button>5</Button>
      <Button>6</Button>
      <Button>7</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button>8</Button>
    </ButtonGroup>
  </ButtonToolbar>
);
