import React, { useState } from 'react';
import { Story } from '../../utils/functions';
import { Navbar, NavbarLink } from '../Navbar';
import { Nav } from '../Nav';
import { Button } from '../Button';

export default {
  title: 'Navbar',
};

export const dark = Story(() => {
  const [hidden, setHidden] = useState(true);

  return (
    <Navbar expandSm dark>
      <Nav start>
        <NavbarLink dark brand href='#'>
          BRAND
        </NavbarLink>
        <Nav end>
          <Button dark outline toggleCollapse expandSm onClick={() => setHidden(!hidden)}>
            <span>&#9776;</span>
          </Button>
        </Nav>
      </Nav>
      <Nav start collapse expandSm hidden={hidden}>
        <NavbarLink dark active>
          Active
        </NavbarLink>
        <NavbarLink dark href='#'>
          Link
        </NavbarLink>
        <NavbarLink dark href='#'>
          Link
        </NavbarLink>
        <NavbarLink dark disabled href='#'>
          Disabled
        </NavbarLink>
      </Nav>
    </Navbar>
  );
});

export const light = Story(() => {
  const [hidden, setHidden] = useState(true);

  return (
    <Navbar expandSm light>
      <Nav start>
        <NavbarLink light brand href='#'>
          BRAND
        </NavbarLink>
        <Nav end>
          <Button light outline toggleCollapse expandSm onClick={() => setHidden(!hidden)}>
            <span>&#9776;</span>
          </Button>
        </Nav>
      </Nav>
      <Nav start collapse expandSm hidden={hidden}>
        <NavbarLink light active>
          Active
        </NavbarLink>
        <NavbarLink light href='#'>
          Link
        </NavbarLink>
        <NavbarLink light href='#'>
          Link
        </NavbarLink>
        <NavbarLink light disabled href='#'>
          Disabled
        </NavbarLink>
      </Nav>
    </Navbar>
  );
});
