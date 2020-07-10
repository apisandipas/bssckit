import React from 'react';
import { Table, Tr } from './index';

export default {
  title: 'Table',
};

const Thead = () => (
  <thead>
    <tr>
      <th scope='col'>#</th>
      <th scope='col'>First</th>
      <th scope='col'>Last</th>
      <th scope='col'>Handle</th>
    </tr>
  </thead>
);

const Tbody = () => (
  <tbody>
    <tr>
      <th scope='row'>1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope='row'>2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope='row'>3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
);

export const simple = () => (
  <Table>
    <Thead />
    <Tbody />
  </Table>
);

export const dark = () => (
  <Table tableDark>
    <Thead />
    <Tbody />
  </Table>
);

export const darkThead = () => (
  <Table theadDark>
    <Thead />
    <Tbody />
  </Table>
);

export const lightThead = () => (
  <Table theadLight>
    <Thead />
    <Tbody />
  </Table>
);

export const stripped = () => (
  <Table striped>
    <Thead />
    <Tbody />
  </Table>
);

export const strippedDark = () => (
  <Table striped tableDark>
    <Thead />
    <Tbody />
  </Table>
);

export const bordered = () => (
  <Table bordered>
    <Thead />
    <Tbody />
  </Table>
);

export const hoverable = () => (
  <Table hover>
    <Thead />
    <Tbody />
  </Table>
);

export const hoverableDark = () => (
  <Table hover tableDark>
    <Thead />
    <Tbody />
  </Table>
);

export const small = () => (
  <Table sm>
    <Thead />
    <Tbody />
  </Table>
);

export const smallDark = () => (
  <Table sm tableDark>
    <Thead />
    <Tbody />
  </Table>
);

export const contextual = () => (
  <Table>
    <thead>
      <tr>
        <th scope='col'>Color</th>
        <th scope='col'>Content</th>
      </tr>
    </thead>
    <tbody>
      <Tr active>
        <td>Active</td>
        <td>Content</td>
      </Tr>
      <Tr primary>
        <td>Primary</td>
        <td>Content</td>
      </Tr>
      <Tr secondary>
        <td>Secondary</td>
        <td>Content</td>
      </Tr>
      <Tr success>
        <td>Success</td>
        <td>Content</td>
      </Tr>
      <Tr danger>
        <td>Danger</td>
        <td>Content</td>
      </Tr>
      <Tr warning>
        <td>Warning</td>
        <td>Content</td>
      </Tr>
      <Tr info>
        <td>Info</td>
        <td>Content</td>
      </Tr>
      <Tr light>
        <td>Light</td>
        <td>Content</td>
      </Tr>
      <Tr dark>
        <td>Dark</td>
        <td>Content</td>
      </Tr>
    </tbody>
  </Table>
);

export const caption = () => (
  <Table>
    <caption>List of users</caption>
    <Thead />
    <Tbody />
  </Table>
);

export const responsive = () => (
  <Table responsive>
    <Thead />
    <Tbody />
  </Table>
);

export const responseAtBreakpoints = () => (
  <Table responsiveMd>
    <Thead />
    <Tbody />
  </Table>
);
