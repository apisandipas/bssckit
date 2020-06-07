import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Alert, { AlertDismissIcon } from './Alert';
import { tagPropType } from '../../utils/consts';
import Fade from '../../utils/Fade';

const DismissButton = styled.button`
  padding: 0;
  background-color: transparent;
  border: 0;
  appearance: none;
`;

const DismissableAlert = props => {
  const {
    className,
    closeClassName,
    closeAriaLabel,
    tag: Tag,
    isOpen,
    toggle,
    children,
    transition,
    fade,
    innerRef,
    ...attributes
  } = props;

  const alertTransition = {
    ...Fade.defaultProps,
    ...transition,
    baseClass: fade ? transition.baseClass : '',
    timeout: fade ? transition.timeout : 0,
  };

  return (
    <Fade {...attributes} {...alertTransition} tag={Alert} in={isOpen} role='alert' innerRef={innerRef}>
      {children}
      {toggle ? (
        <DismissButton type='button' aria-label={closeAriaLabel} onClick={toggle}>
          <AlertDismissIcon aria-hidden='true' aria-label={closeAriaLabel} onClick={toggle}>
            &times;
          </AlertDismissIcon>
        </DismissButton>
      ) : null}
    </Fade>
  );
};

DismissableAlert.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  closeClassName: PropTypes.string,
  closeAriaLabel: PropTypes.string,
  color: PropTypes.string,
  fade: PropTypes.bool,
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  tag: tagPropType,
  transition: PropTypes.shape(Fade.propTypes),
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func]),
};

DismissableAlert.defaultProps = {
  dismissible: true,
  isOpen: true,
  tag: Alert,
  closeAriaLabel: 'Close',
  fade: true,
  transition: {
    ...Fade.defaultProps,
    unmountOnExit: true,
  },
};

export default DismissableAlert;
