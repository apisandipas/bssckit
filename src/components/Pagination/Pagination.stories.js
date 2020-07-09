import React from 'react';
import { Pagination, PageItem, PageLink } from './index';

export default {
  title: 'Pagination',
};

export const simple = () => (
  <nav aria-label='Page navigation'>
    <Pagination>
      <PageItem>
        <PageLink to='#'>
          <span>&laquo;</span>
        </PageLink>
      </PageItem>

      <PageItem>
        <PageLink to='#'>1</PageLink>
      </PageItem>

      <PageItem>
        <PageLink to='#'>2</PageLink>
      </PageItem>

      <PageItem>
        <PageLink to='#'>3</PageLink>
      </PageItem>

      <PageItem>
        <PageLink to='#'>
          <span>&raquo;</span>
        </PageLink>
      </PageItem>
    </Pagination>
  </nav>
);

export const activeAndDisabledStates = () => (
  <nav aria-label='Page navigation'>
    <Pagination>
      <PageItem disabled>
        <PageLink to='#'>
          <span>&laquo;</span>
        </PageLink>
      </PageItem>

      <PageItem active>
        <PageLink to='#'>1</PageLink>
      </PageItem>

      <PageItem>
        <PageLink to='#'>2</PageLink>
      </PageItem>

      <PageItem>
        <PageLink to='#'>3</PageLink>
      </PageItem>

      <PageItem>
        <PageLink to='#'>
          <span>&raquo;</span>
        </PageLink>
      </PageItem>
    </Pagination>
  </nav>
);

export const sizes = () => (
  <>
    <nav aria-label='Page navigation'>
      <Pagination lg>
        <PageItem disabled>
          <PageLink to='#'>
            <span>&laquo;</span>
          </PageLink>
        </PageItem>

        <PageItem active>
          <PageLink to='#'>1</PageLink>
        </PageItem>

        <PageItem>
          <PageLink to='#'>2</PageLink>
        </PageItem>

        <PageItem>
          <PageLink to='#'>3</PageLink>
        </PageItem>

        <PageItem>
          <PageLink to='#'>
            <span>&raquo;</span>
          </PageLink>
        </PageItem>
      </Pagination>

      <nav aria-label='Page navigation'>
        <Pagination sm>
          <PageItem disabled>
            <PageLink to='#'>
              <span>&laquo;</span>
            </PageLink>
          </PageItem>

          <PageItem active>
            <PageLink to='#'>1</PageLink>
          </PageItem>

          <PageItem>
            <PageLink to='#'>2</PageLink>
          </PageItem>

          <PageItem>
            <PageLink to='#'>3</PageLink>
          </PageItem>

          <PageItem>
            <PageLink to='#'>
              <span>&raquo;</span>
            </PageLink>
          </PageItem>
        </Pagination>
      </nav>
    </nav>
  </>
);
