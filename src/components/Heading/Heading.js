import React from 'react';
import Text from '../Typography/Text';
import Handwriting from '../Typography/Handwriting/Handwriting';
import styled from 'styled-components';

const Header = styled.h1`
  margin-top: 0;
`;

const Heading = () => {
  return (
    <Header>
      <Text as="span" fontSize={0.5} letterSpacing={0.15} textTransform='upperCase'>
        Odliczanie do
      </Text><br/>
      <Handwriting as="span" letterSpacing={0.05} fontSize={2.5} className="countdown__headingSummer">
        wakacji 2020
      </Handwriting>
    </Header>
  );
};

export default Heading;
