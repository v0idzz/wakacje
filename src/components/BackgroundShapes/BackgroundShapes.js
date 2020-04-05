import React from 'react';
import styled from 'styled-components';
import { device } from '../../utils/Theme';

const Component = styled.div`
  bottom: 0;
  display: none;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 0;

  @media ${device.laptop} {
    display: block;
  }
`;

const BottomShape = styled.svg`
  bottom: 0;
  position: absolute;
  width: ${4 / 6 * 100}%
`;

const LeftShape = styled.svg`
  height: 100%;
  position: absolute;
  width: ${5 / 6 * 100}%;
`;

const BackgroundShapes = () => (
  <Component>
    <BottomShape preserveAspectRatio="none" width="1075" height="299" viewBox="0 0 1075 299" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M858.5 0L0 299H1075L858.5 0Z" fill="#FFCF99"/>
    </BottomShape>
    <LeftShape preserveAspectRatio="none" width="1141" height="900" viewBox="0 0 1141 900" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 -1V900H719.5L1140.5 -1H0Z" fill="#B0D6AE"/>
    </LeftShape>
  </Component>
);

export default BackgroundShapes;
