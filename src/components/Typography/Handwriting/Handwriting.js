import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';

const Handwriting = props => {
  return (
    <Text fontFamily={'\'Liu Jian Mao Cao\', cursive;'} {...props}>
      {props.children}
    </Text>);
};

Handwriting.propTypes = {
  children: PropTypes.element.isRequired
};

export default Handwriting;
