import React from 'react';
import styled from 'styled-components';
import { authorWebsite } from '../../utils/Config';
import Handwriting from '../Typography/Handwriting/Handwriting';
import Link from '../Link';

const FooterComponent = styled.footer`
  bottom: 16px;
  font-size: calc(.5em + 8px);
  left: 18px;
  position: absolute;
  z-index: 1;
`;

const Footer = (props) => {
  return (
    <FooterComponent {...props}>
      <Handwriting fontSize={0.8} letterSpacing={0.15}>
          &lt;/&gt; with &lt;3 by <Link to={authorWebsite}>romanowski.me</Link>
      </Handwriting>
    </FooterComponent>);
};

export default Footer;
