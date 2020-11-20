import React from 'react';
import styled from 'styled-components';

import { ArrowBase } from '~styles/ArrowBase';

//#region Styles
const Arrow = styled(ArrowBase)`
  @media (min-width: ${({ theme }) => theme.breakMedium}) {
    filter: drop-shadow(0px 6px 6px #000);
    position: absolute;
    top: 30%;
    width: 13rem;
    height: 13rem;
    fill: rgba(255, 255, 255, 0.7);
  }
  @media (min-width: ${({ theme }) => theme.breakLarge}) {
    width: 15rem;
    height: 15rem;
  }
`;

const ArrowRightSvg = styled(Arrow)`
  right: 0;
`;
//#endregion

export const ArrowLeft = () => (
  <Arrow xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M13.7 15.3a1 1 0 0 1-1.4 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.4 1.4L10.42 12l3.3 3.3z" />
  </Arrow>
);

export const ArrowRight = () => (
  <ArrowRightSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M10.3 8.7a1 1 0 0 1 1.4-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4l3.29-3.3-3.3-3.3z" />
  </ArrowRightSvg>
);
