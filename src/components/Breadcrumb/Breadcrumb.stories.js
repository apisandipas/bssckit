import React from 'react';
import { Breadcrumb, BreadcrumbItem } from './index';

export default {
  title: 'Breadcrumbs',
};

export const simple = () => (
  <div>
    <Breadcrumb>
      <BreadcrumbItem>
        <a href=''>Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem active>Library</BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb>
      <BreadcrumbItem>
        <a href=''>Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a href=''>Library</a>
      </BreadcrumbItem>
      <BreadcrumbItem active>Data</BreadcrumbItem>
    </Breadcrumb>
  </div>
);

export const pill = () => (
  <Breadcrumb pill>
    <BreadcrumbItem>
      <a href=''>Home</a>
    </BreadcrumbItem>
    <BreadcrumbItem active>Library</BreadcrumbItem>
  </Breadcrumb>
);
