import React, { useState } from 'react';
import styled from 'styled-components';
import { authorWebsite } from '../../utils/Config';
import Handwriting from '../Typography/Handwriting/Handwriting';
import Link from '../Link';
import Modal from '../Modal/Modal';
import Text from '../Typography/Text';

const FooterComponent = styled.footer`
  bottom: 16px;
  font-size: calc(.5em + 8px);
  left: 18px;
  position: absolute;
  z-index: 1;
`;

const CreditsButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font: inherit;
  outline: none;
  padding: 0;
  text-decoration: underline;
`;

const List = styled(Text)`
  list-style: none;
`;

const ListItem = styled.li`
  line-height: 1.5;
`;

const Footer = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleCreditsClick = () => setShowModal(!showModal);
  const handleModalClose = () => setShowModal(false);

  return (
    <FooterComponent {...props}>
      <Handwriting fontSize={0.8} letterSpacing={0.15}>
        <Link to="https://github.com/v0idzz/wakacje">&lt;/&gt;</Link>&nbsp;
        with &lt;3 by&nbsp;
        <Link to={authorWebsite}>romanowski.me</Link> &sdot;&nbsp;
        <CreditsButton onClick={handleCreditsClick}>credits</CreditsButton>
      </Handwriting>

      <Modal show={showModal} onClick={handleModalClose}>
        <Modal.Title>
          credits
        </Modal.Title>
        <Modal.Content>
          <List $as="ul" letterSpacing={0.15}>
            <ListItem>icons by <Link to="https://www.flaticon.com/authors/freepik">freepik</Link></ListItem>
            <ListItem>images by <Link to="https://pixabay.com/">pixabay.com</Link></ListItem>
          </List>
        </Modal.Content>
      </Modal>
    </FooterComponent>);
};

export default Footer;
