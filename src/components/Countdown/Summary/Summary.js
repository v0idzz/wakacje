import Serif from '../../Typography/Serif';
import Text from '../../Typography/Text';
import React from 'react';
import PropTypes from 'prop-types';

const Summary = ({ days, hours, minutes, seconds, ...props }) => {
  return (
    <p {...props}>
      <Serif $as="div" fontSize={1} fontWeight={800}>
        {days} dni {hours} godzin {minutes} minut {seconds} sekund
      </Serif>
      <Text $as="div" fontSize={0.75} letterSpacing={0.15} textTransform={'uppercase'}>pozostało</Text>
    </p>
  );
};

Summary.propTypes = {
  days: PropTypes.number.isRequired,
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired
};

export default Summary;
