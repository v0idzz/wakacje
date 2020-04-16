import React from 'react';
import BackgroundShapes from '../BackgroundShapes';
import styled from 'styled-components';
import Heading from '../Heading';
import Countdown from '../Countdown';
import palm from '../../img/palm.svg';
import Handwriting from '../Typography/Handwriting/Handwriting';
import { currentTheme, device } from '../../utils/Theme';
import background from '../../img/background.png';
import Link from '../Link';
import { authorWebsite } from '../../utils/Config';

const StyledApp = styled.div`
  background-color: ${currentTheme.backgroundColor};
  color: ${currentTheme.textColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;

  @media ${device.laptop} {
    background: url(${background});
  }
`;

const Container = styled.div`
  text-align: center;
  width: 100%;
  z-index: 1;
  
  @media ${device.laptop} {
    width: ${4 / 6 * 100}%;
  }
`;

const Palm = styled.img`
  margin-top: 1rem;
`;

const Footer = styled.footer`
  bottom: 16px;
  font-size: calc(.5em + 8px);
  left: 18px;
  position: absolute;
  z-index: 1;
`;

function App () {
  return (
    <StyledApp>
      <Container>
        <header>
          <Heading />
        </header>
        <Palm src={palm} width={30} height={30} alt=""/>
        <main>
          <Countdown/>
        </main>
      </Container>
      <Footer>
        <Link to={authorWebsite}>
          <Handwriting fontSize={0.8} letterSpacing={0.15}>
          &lt;/&gt; with &lt;3 by romanowski.me
          </Handwriting>
        </Link>
      </Footer>
      <BackgroundShapes />
    </StyledApp>
  );
}

export default App;
