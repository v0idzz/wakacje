import React from 'react';
import styled from 'styled-components';
import { currentTheme } from '../../utils/Theme';
import PropTypes from 'prop-types';
import ModalHeader from './ModalHeader';
import ModalContent from './ModalContent';

const Container = styled.div`
  background-color: ${currentTheme.secondaryColor};
  height: 100%;
  left: 0;
  position: fixed;
  top: ${props => props.show ? '0' : '100%'};
  transition: top .2s ease-out;
  width: 100%;
`;

const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  width: 100%;
`;

const Modal = ({ onClose, children, ...props }) => (
  <Container {...props}>
    <ContentWrapper>
      {children}
    </ContentWrapper>
  </Container>
);

Modal.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node
};

Modal.Title = ModalHeader;
Modal.Content = ModalContent;

export default Modal;
