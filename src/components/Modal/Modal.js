import React, { useState, useRef, useEffect } from 'react';
import { Portal } from 'react-portal';
import { Transition } from '../Utilities/Transition';
import defaultTheme from '../../theme';
import ModalContent from './ModalContent';
import ModalDialog from './ModalDialog';
import ModalBackdrop from './ModalBackdrop';
import ModalWrapper from './ModalWrapper';

const Modal = props => {
  const [isHidden, setIsHidden] = useState(props.hidden || false);

  const elementMouseDown = useRef(null);
  const elementTriggerOpen = useRef(null);
  const refModal = useRef();
  const refTransition = useRef();

  if (!props.hidden) {
    elementTriggerOpen.current = document.activeElement;
  }

  useEffect(() => {
    if (!isHidden) {
      open();
    }

    return function() {
      !isHidden && close();
    };
  }, []);

  useEffect(() => {
    if (props.hidden !== isHidden) {
      if (!props.hidden) {
        elementTriggerOpen.current = document.activeElement;
      }
      setIsHidden(props.hidden);
      return;
    }

    if (isHidden) {
      close();
    } else if (!isHidden) {
      open();
    }
  }, [props.hidden]);

  function open() {
    refModal.current.scrollTop = 0;
    document.body.style.overflow = 'hidden';
  }

  function close() {
    setTimeout(() => {
      document.body.style.overflow = '';
      if (props.returnFocusAfterClose && elementTriggerOpen.current !== null) {
        elementTriggerOpen.current.focus();
        elementTriggerOpen.current = null;
      }
    }, 500);
  }

  function canToggle() {
    if (props.backdrop === 'static' || props.backdrop === false) {
      return false;
    }
    const { opacity } = window.getComputedStyle(refTransition.current);

    return opacity <= 0.1 || opacity >= 0.9;
  }

  function handleBackdropClick(event) {
    if (event.target !== elementMouseDown.current) {
      return;
    }
    event.stopPropagation();

    if (canToggle() && event.target === refModal.current) {
      props.toggle();
    }
  }

  function handleBackdropMouseDown(event) {
    elementMouseDown.current = event.target;
  }

  const {
    TransitionComponent,
    ModalWrapperComponent,
    ModalDialogComponent,
    ModalBackdropComponent,
    ModalContentComponent,
    transitionProps,
    wrapperProps,
    dialogProps,
    contentProps,
    backdropProps,
    centered,
    noRadius,
    children,
    backdrop,
    sm,
    lg,
    hidden,
    ...rest
  } = props;

  return (
    <Portal>
      <TransitionComponent
        data-testid='ModalTransition'
        hidden={isHidden}
        ref={refTransition}
        {...rest}
        {...transitionProps}
      >
        <ModalWrapperComponent
          theme={props.theme}
          onMouseDown={handleBackdropMouseDown}
          onClick={handleBackdropClick}
          ref={refModal}
          {...wrapperProps}
        >
          <ModalDialogComponent
            theme={props.theme}
            tabIndex='-1'
            role='dialog'
            lg={lg}
            sm={sm}
            centered={centered}
            noRadius={noRadius}
            {...dialogProps}
          >
            <ModalContentComponent theme={props.theme} {...contentProps}>
              {children}
            </ModalContentComponent>
          </ModalDialogComponent>
        </ModalWrapperComponent>

        {!!backdrop && <ModalBackdropComponent theme={props.theme} backdrop={backdrop} {...backdropProps} />}
      </TransitionComponent>
    </Portal>
  );
};

Modal.defaultProps = {
  theme: defaultTheme,
  TransitionComponent: Transition,
  ModalWrapperComponent: ModalWrapper,
  ModalDialogComponent: ModalDialog,
  ModalBackdropComponent: ModalBackdrop,
  ModalContentComponent: ModalContent,
  backdrop: true,
  returnFocusAfterClose: true,
  toggle: () => {},
};

export default Modal;
