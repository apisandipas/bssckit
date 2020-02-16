import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Transition } from 'react-transition-group';
import { TransitionPropTypeKeys, TransitionTimeouts, tagPropType } from '../consts';
import { pick, omit } from '../functions';

const Fade = props => {
  const {
    tag: Tag,
    baseClass,
    baseClassActive,
    className,
    children,
    innerRef,
    ...otherProps
  } = props;

  const transitionProps = pick(otherProps, TransitionPropTypeKeys);
  const childProps = omit(otherProps, TransitionPropTypeKeys);

  return (
    <Transition {...transitionProps}>
      {status => {
        const isActive = status === 'entered';
        const classes = cx(className, baseClass, isActive && baseClassActive);

        return (
          <Tag className={classes} {...childProps} ref={innerRef}>
            {children}
          </Tag>
        );
      }}
    </Transition>
  );
};

Fade.propTypes = {
  ...Transition.propTypes,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  tag: tagPropType,
  baseClass: PropTypes.string,
  baseClassActive: PropTypes.string,
  className: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func]),
};

Fade.defaultProps = {
  ...Transition.defaultProps,
  tag: 'div',
  baseClass: 'fade',
  baseClassActive: 'show',
  timeout: TransitionTimeouts.Fade,
  appear: true,
  enter: true,
  exit: true,
  in: true,
};

export default Fade;
