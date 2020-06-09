import React from 'react';
import { Col } from '../Grid';
import { Button } from '../Button';
import { FormControl } from './FormControl';
import { FormGroup } from './FormGroup';
import { FormInline } from './FormInline';
import { FormCheck } from './FormCheck';
import { FormCheckInput } from './FormCheckInput';

export default {
  title: 'Forms',
};

export const textInput = () => (
  <FormGroup>
    <FormControl placeholder='Normal input...' mb2 />
    <FormControl placeholder='Valid input...' valid mb2 />
    <FormControl placeholder='Invalid input...' invalid mb2 />
    <FormControl placeholder='Small input...' mb2 sm />
    <FormControl placeholder='Large input...' mb2 lg />
  </FormGroup>
);

export const inputTypes = () => (
  <form>
    <FormGroup>
      <label>
        Email address <FormControl type='email' placeholder='name@example.com' />
      </label>
    </FormGroup>
    <FormGroup>
      <label>
        Example select
        <FormControl select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </FormControl>
      </label>
    </FormGroup>
    <FormGroup>
      <label>
        Example multiple select
        <FormControl select multiple>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </FormControl>
      </label>
    </FormGroup>
    <FormGroup>
      <label>
        Example textarea
        <FormControl textarea rows='3' />
      </label>
    </FormGroup>
    <FormGroup>
      <label>
        Example file input
        <FormControl plainText placeholder='Plaintext' />
      </label>
    </FormGroup>
    <FormGroup>
      <label>
        Example file input
        <FormControl file />
      </label>
    </FormGroup>
  </form>
);

export const sizes = () => (
  <form>
    <FormControl mb2 lg type='text' placeholder='Large' />
    <FormControl mb2 type='text' placeholder='Normal' />
    <FormControl mb2 sm type='text' placeholder='Small' />
  </form>
);

export const sizesOnGroups = () => (
  <form>
    <FormGroup row justify lg mb2>
      <FormControl type='text' placeholder='Large' />
    </FormGroup>
    <FormGroup row justify mb2>
      <FormControl type='text' placeholder='Normal' />
    </FormGroup>
    <FormGroup row justify sm mb2>
      <FormControl type='text' placeholder='Small' />
    </FormGroup>
  </form>
);

export const readonly = () => (
  <FormControl readonly disabled type='text' placeholder='Readonly input here...' />
);

export const readonlyPlainText = () => (
  <form>
    <FormControl plainText readonly disabled value='Readonly input here...' />
  </form>
);

export const inlineForm = () => (
  <FormInline>
    <FormGroup>
      <FormControl plainText readonly disabled value='email@example.com' />
    </FormGroup>
    <FormGroup mr4>
      <FormControl type='password' placeholder='Password' />
    </FormGroup>
    <FormGroup>
      <Button primary>Confirm identity</Button>
    </FormGroup>
  </FormInline>
);

export const checkboxesAndRadio = () => (
  <form>
    <FormCheck>
      <label>
        <FormCheckInput type='checkbox' /> Default checkbox
      </label>
    </FormCheck>
    <FormCheck>
      <label>
        <FormCheckInput disabled type='checkbox' /> Disabled checkbox
      </label>
    </FormCheck>
    <FormCheck>
      <label>
        <FormCheckInput type='radio' name='exampleRadios' /> Default radio
      </label>
    </FormCheck>
    <FormCheck>
      <label>
        <FormCheckInput type='radio' name='exampleRadios' /> Default radio
      </label>
    </FormCheck>
    <FormCheck>
      <label>
        <FormCheckInput disabled type='radio' name='exampleRadios' /> Disabled radio
      </label>
    </FormCheck>
  </form>
);

export const inlineCheckboxesAndRadios = () => (
  <form>
    <FormCheck inline>
      <label>
        <FormCheckInput type='checkbox' /> Default checkbox
      </label>
    </FormCheck>
    <FormCheck inline>
      <label>
        <FormCheckInput disabled type='checkbox' /> Disabled checkbox
      </label>
    </FormCheck>
    <FormCheck inline>
      <label>
        <FormCheckInput type='radio' name='exampleRadios' /> Default radio
      </label>
    </FormCheck>
    <FormCheck inline>
      <label>
        <FormCheckInput type='radio' name='exampleRadios' /> Default radio
      </label>
    </FormCheck>
    <FormCheck inline>
      <label>
        <FormCheckInput disabled type='radio' name='exampleRadios' /> Disabled radio
      </label>
    </FormCheck>
  </form>
);

export const formGrid = () => (
  <form>
    <FormGroup row>
      <Col sm={6}>
        <FormControl type='text' placeholder='First name' />
      </Col>
      <Col sm={6}>
        <FormControl type='text' placeholder='Last name' />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Col sm={8}>
        <FormControl type='text' placeholder='City' />
      </Col>
      <Col sm={4}>
        <FormGroup>
          <FormControl select>
            <option>Choose state...</option>
            <option>...</option>
          </FormControl>
        </FormGroup>
      </Col>
    </FormGroup>
  </form>
);

export const horizontalGrid = () => (
  <form>
    <FormGroup row justify>
      <Col sm={2}>
        <label>First name</label>
      </Col>
      <Col sm={10}>
        <FormControl type='text' placeholder='First name' />
      </Col>
    </FormGroup>
    <FormGroup row justify>
      <Col sm={2}>
        <label>Last name</label>
      </Col>
      <Col sm={10}>
        <FormControl type='text' placeholder='Last name' />
      </Col>
    </FormGroup>
  </form>
);
