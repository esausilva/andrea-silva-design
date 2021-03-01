import React from 'react';
import styled from 'styled-components';

//#region Styles
const Arrow = styled.svg`
  width: 6rem;
  height: 6rem;
  transition: ${({ theme }) => theme.animations.transform500ms};
  circle {
    fill: rgba(255, 255, 255, 0.8);
  }
  path {
    fill: rgba(51, 51, 51, 0.7);
  }
  &:hover {
    circle {
      fill: rgba(255, 255, 255);
    }
    path {
      fill: rgba(51, 51, 51);
    }
    transform: scale(1.2);
  }
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    width: 8rem;
    height: 8rem;
  }
  @media (min-width: ${({ theme }) => theme.media.large}) {
    width: 10rem;
    height: 10rem;
  }
`;
//#endregion

const ArrowTickUpCircle = () => (
  <Arrow xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <path d="M14 12v5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-5H8a1 1 0 0 1-.7-1.7l4-4a1 1 0 0 1 1.4 0l4 4A1 1 0 0 1 16 12h-2z" />
  </Arrow>
);

export { ArrowTickUpCircle };
