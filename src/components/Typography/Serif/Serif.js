import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';

const Serif = ({ children, ...props }) => {
  return (
    <Text fontFamily={'\'Playfair Display\', serif;'} {...props}>
      {children}
    </Text>
  );
};

Serif.propTypes = {
  children: PropTypes.node.isRequired
};

export default Serif;
