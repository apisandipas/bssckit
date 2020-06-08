# bssckit - Bootstrap Styled-Component Kit

a styled-components based implementation of Bootstrap 4

This package was build with and designed around the use of [styled-components](https://www.npmjs.com/package/styled-components), [styled-tools](https://www.npmjs.com/package/styled-tools), and [styled-breakpoints](https://www.npmjs.com/package/styled-breakpoints).

It comes with (will come with) all the basic Bootstrap components make completely out of styled-components (Except Javacript drive-components, which are constructed with styled-component, but are build using React functional components and hooks to manage state). Each can be easily overridden by extending with `styled()` or by passing the `BSThemeProvider` component a theme object.

When extending components, make use of the styled-tools `theme` and `palette` functions and the `up`, `down`, `between`, `only` functions from `styled-breakpoints`

It also exports a `BaseCss` component that features Bootstraps CSS reset.

This project is still very much a work in progress, but is starting to take shape. If youre interesting contributing, please feel free to open a pull request.

### TODO:

- [x] Alerts
- [x] Badges
- [x] Breadcrumbs
- [x] Buttons
- [x] Button Group
- [x] Card
- [ ] Carousel
- [ ] Collapse
- [ ] Dropdowns
- [x] Forms
- [x] Grid
- [x] Input group
- [x] Jumbotron
- [x] List Groups
- [ ] Media Object
- [ ] Modal
- [ ] Navs
- [ ] Navbar
- [ ] Pagination
- [ ] Popovers
- [ ] Progress
- [ ] Scrollspy
- [ ] Spinners
- [ ] Toasts
- [ ] Tooltips
- [ ] Portal
- [x] Utilities
