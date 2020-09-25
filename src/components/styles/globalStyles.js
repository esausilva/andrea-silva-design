import { createGlobalStyle } from 'styled-components';

import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
    overflow-x: hidden;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0;
    min-height: 100%;
    color: ${theme.fontMain};
    background: #fff;
    letter-spacing: 0.07rem;
    font-size: 2rem;
  }
  h1,
  h2,
  h3 {
    ${'' /* margin-top: 0; */}
    color: ${theme.fontHeading};
    text-transform: uppercase;
    letter-spacing: -0.1rem;
  }
  h1 {
    font-size: 5.2rem;
  }
  h2 {
    font-size: 8rem;
  }
  h3 {
    font-size: 5.8rem;
  }
  ${'' /* Gatsby injects two div wrapping elements */}
  #___gatsby,
  #gatsby-focus-wrapper {
    min-height: 100vh;
    ${'' /* border: 1px solid red; */}
  }
  #gatsby-focus-wrapper {
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
`;
