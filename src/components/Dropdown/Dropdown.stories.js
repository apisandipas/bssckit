import React, { useState } from 'react';
import { Story } from '../../utils/functions';
import { Button } from '../Button';
import { ButtonGroup } from '../ButtonGroup';
import { Dropdown, DropdownItem, DropdownMenu, DropdownDivider } from './';

export default {
  title: 'Dropdown',
};

export const simple = Story(() => {
  const [hidden, setHidden] = useState(false);
  return (
    <Dropdown>
      <Button dropdownToggle onClick={() => setHidden(!hidden)}>
        Dropdown Button
      </Button>
      <DropdownMenu hidden={hidden} toggle={() => setHidden(!hidden)}>
        <DropdownItem>Action</DropdownItem>
        <DropdownItem>Another action</DropdownItem>
        <DropdownDivider />
        <DropdownItem>Action after divider</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
});

export const contextual = Story(() => {
  const makeDropdown = mod => {
    const [hidden, setHidden] = useState(true);

    return (
      <Dropdown mr2>
        <Button dropdownToggle onClick={() => setHidden(!hidden)} {...{ [mod]: true }}>
          {mod.charAt(0).toUpperCase() + mod.slice(1)}
        </Button>
        <DropdownMenu hidden={hidden} toggle={() => setHidden(!hidden)}>
          <DropdownItem>Action</DropdownItem>
          <DropdownItem>Another action</DropdownItem>
          <DropdownItem>Something else here</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  };

  return (
    <React.Fragment>
      {makeDropdown('primary')}
      {makeDropdown('secondary')}
      {makeDropdown('success')}
      {makeDropdown('info')}
      {makeDropdown('warning')}
      {makeDropdown('danger')}
      {makeDropdown('light')}
      {makeDropdown('dark')}
    </React.Fragment>
  );
});

export const withSplit = Story(() => {
  const [hidden, setHidden] = useState(true);

  return (
    <Dropdown>
      <ButtonGroup>
        <Button>Button</Button>
        <Button split dropdownToggle onClick={() => setHidden(!hidden)} />
      </ButtonGroup>
      <DropdownMenu hidden={hidden} toggle={() => setHidden(!hidden)}>
        <DropdownItem>Action</DropdownItem>
        <DropdownItem>Another action</DropdownItem>
        <DropdownItem>Something else here</DropdownItem>
        <DropdownDivider />
        <DropdownItem>Seperated link</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
});

export const rightAlignment = Story(() => {
  const [hidden, setHidden] = useState(true);

  return (
    <Dropdown>
      <Button dropdownToggle onClick={() => setHidden(!hidden)}>
        Very very very very long dropdown button
      </Button>
      <DropdownMenu right hidden={hidden} toggle={() => setHidden(!hidden)}>
        <DropdownItem>Action</DropdownItem>
        <DropdownItem>Another action</DropdownItem>
        <DropdownItem>Something else here</DropdownItem>
        <DropdownDivider />
        <DropdownItem>Seperated link</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
});

export const fullWidth = Story(() => {
  const [hidden, setHidden] = useState(true);

  return (
    <Dropdown>
      <Button dropdownToggle onClick={() => setHidden(!hidden)}>
        Very very very very long dropdown button
      </Button>
      <DropdownMenu fullWidth hidden={hidden} toggle={() => setHidden(!hidden)}>
        <DropdownItem>Action</DropdownItem>
        <DropdownItem>Another action</DropdownItem>
        <DropdownItem>Something else here</DropdownItem>
        <DropdownDivider />
        <DropdownItem>Seperated link</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
});

export const animated = Story(() => {
  const [hidden, setHidden] = useState(true);

  return (
    <Dropdown>
      <Button dropdownToggle onClick={() => setHidden(!hidden)}>
        Dropdown button
      </Button>
      <Transition hidden={hidden}>
        <DropdownMenu alwaysVisible hidden={hidden} toggle={() => setHidden(!hidden)}>
          <DropdownItem>Action</DropdownItem>
          <DropdownItem>Another action</DropdownItem>
          <DropdownItem>Something else here</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Seperated link</DropdownItem>
        </DropdownMenu>
      </Transition>
    </Dropdown>
  );
});
