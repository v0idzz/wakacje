import React from 'react';
import BackgroundShapes from '../BackgroundShapes';
import styled from 'styled-components';
import Heading from '../Heading';
import Countdown from '../Countdown';
import palm from '../../img/palm.svg';
import Handwriting from '../Typography/Handwriting/Handwriting';

const StyledApp = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  width: ${4 / 6 * 100}%;
`;

const Container = styled.div`
  text-align: center;
`;

const Palm = styled.img`
  margin-top: 2rem;
`;

const Footer = styled.footer`
  bottom: 16px;
  left: 18px;
  position: absolute;
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
        <Handwriting letterSpacing={0.15}>
          by romanowski.me
        </Handwriting>
      </Footer>
      <BackgroundShapes />
    </StyledApp>
  );
}

export default App;
