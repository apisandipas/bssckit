import React from 'react';
import { Nav, NavLink } from './index';

export default {
  title: 'Nav',
};

export const simple = () => (
  <Nav>
    <NavLink href='#' active>
      Active
    </NavLink>
    <NavLink href='#'>Link</NavLink>
    <NavLink href='#'>Link</NavLink>
    <NavLink href='#' disabled>
      Disabled
    </NavLink>
  </Nav>
);

export const pulled = () => (
  <Nav>
    <NavLink href='#'>Link</NavLink>
    <NavLink href='#'>Link</NavLink>
    <NavLink href='#'>Link</NavLink>
    <NavLink href='#' mlAuto>
      Pulled Link
    </NavLink>
    <NavLink href='#'>Pulled link</NavLink>
  </Nav>
);

export const centered = () => (
  <Nav center>
    <NavLink href='#' active>
      Active
    </NavLink>
    <NavLink href='#'>Link</NavLink>
    <NavLink href='#'>Link</NavLink>
    <NavLink href='#' disabled>
      Disabled
    </NavLink>
  </Nav>
);

export const aligned = () => (
  <Nav end>
    <NavLink href='#' active>
      Active
    </NavLink>
    <NavLink href='#'>Link</NavLink>
    <NavLink href='#'>Link</NavLink>
    <NavLink href='#' disabled>
      Disabled
    </NavLink>
  </Nav>
);

export const tabs = () => (
  <Nav tabs>
    <NavLink tabs href='#' active>
      Active
    </NavLink>
    <NavLink tabs href='#'>
      Link
    </NavLink>
    <NavLink tabs href='#'>
      Link
    </NavLink>
    <NavLink tabs href='#' disabled>
      Disabled
    </NavLink>
  </Nav>
);

export const pills = () => (
  <Nav tabs>
    <NavLink pills href='#' active>
      Active
    </NavLink>
    <NavLink pills href='#'>
      Link
    </NavLink>
    <NavLink pills href='#'>
      Link
    </NavLink>
    <NavLink pills href='#' disabled>
      Disabled
    </NavLink>
  </Nav>
);

export const justified = () => (
  <Nav justified>
    <NavLink pills item href='#' active>
      Active
    </NavLink>
    <NavLink pills item href='#'>
      Link
    </NavLink>
    <NavLink pills item href='#'>
      Link
    </NavLink>
    <NavLink pills item href='#' disabled>
      Disabled
    </NavLink>
  </Nav>
);

export const fill = () => (
  <Nav fill>
    <NavLink pills item href='#' active>
      Active
    </NavLink>
    <NavLink pills item href='#'>
      Link
    </NavLink>
    <NavLink pills item href='#'>
      Link
    </NavLink>
    <NavLink pills item href='#' disabled>
      Disabled
    </NavLink>
  </Nav>
);

export const vertical = () => (
  <Nav vertical>
    <NavLink pills item href='#' active>
      Active
    </NavLink>
    <NavLink pills item href='#'>
      Link
    </NavLink>
    <NavLink pills item href='#'>
      Link
    </NavLink>
    <NavLink pills item href='#' disabled>
      Disabled
    </NavLink>
  </Nav>
);
