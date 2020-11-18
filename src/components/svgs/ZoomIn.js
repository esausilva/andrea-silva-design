import React from 'react';
import styled from 'styled-components';

//#region Styles
const Zoom = styled.svg`
  width: 6rem;
  height: 6rem;
  circle {
    fill: transparent;
  }
  path {
    fill: #fff;
  }
`;
//#endregion

const ZoomIn = () => (
  <Zoom xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <circle cx="10" cy="10" r="7" />
    <path d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm1-7h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2H7a1 1 0 0 1 0-2h2V7a1 1 0 1 1 2 0v2z" />
  </Zoom>
);

export { ZoomIn };
