import styled from 'styled-components';
import Handwriting from '../../Typography/Handwriting/Handwriting';
import React from 'react';
import PropTypes from 'prop-types';
import { currentTheme } from '../../../utils/Theme';
import Text from '../../Typography/Text';

const Container = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  padding: 1em;
`;

const Title = styled(Handwriting)`
  margin: 0;
  text-align: center;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: ${currentTheme.textColor};
  cursor: pointer;
  padding: 1em;
  transform: scale(.8);
  transition: transform .2s linear;
  margin: -1em -1em -1em auto;

  &:focus {
    outline: none;
  }

  &:hover {
    transform: scale(1);
  }
`;

const ModalHeader = ({ children, ...props }) => (
  <Container>
    <Title $as="h3" fontSize={3} letterSpacing={0.05} {...props}>
      {children}
    </Title>
    <CloseButton>
      <Text fontSize={3} aria-hidden="true">x</Text>
      <span className="sr-only">Close</span>
    </CloseButton>
  </Container>
);

ModalHeader.propTypes = {
  children: PropTypes.node
};

export default ModalHeader;
