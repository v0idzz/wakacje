import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Component = styled.div`
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize}em;
  font-weight: ${props => props.fontWeight};
  letter-spacing: ${props => props.letterSpacing}em;
  text-transform: ${props => props.textTransform};
`;

const Text = ({
  $as = 'div',
  children,
  ...props
}) => {
  return (
    <Component as={$as} {...props}>
      {children}
    </Component>
  );
};

Text.defaultProps = {
  fontFamily: '\'Oxygen\', sans-serif',
  fontSize: 1,
  fontWeight: 100,
  letterSpacing: 0,
  textTransform: 'none'
};

Text.propTypes = {
  $as: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.number,
  letterSpacing: PropTypes.number,
  textTransform: PropTypes.oneOf(['none', 'capitalize', 'uppercase', 'lowercase', 'initial', 'inherit']),
  children: PropTypes.element.isRequired
};

export default Text;
