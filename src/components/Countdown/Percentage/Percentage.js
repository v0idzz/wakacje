import React from 'react';
import styled from 'styled-components';
import Serif from '../../Typography/Serif';
import Text from '../../Typography/Text';
import PropTypes from 'prop-types';

const Component = styled.p`
  margin-top: 0;
`;

const Percentage = ({ percentage, ...props }) => (
  <Component {...props}>
    <Serif $as="span" fontSize={4} letterSpacing={0.15}>{percentage.toFixed(2)}%</Serif>
    <br/>
    <Text $as="span" fontSize={0.75} letterSpacing={0.15} textTransform={'uppercase'}>za nami</Text>
  </Component>
);

Percentage.propTypes = {
  percentage: PropTypes.number.isRequired
};

export default Percentage;
