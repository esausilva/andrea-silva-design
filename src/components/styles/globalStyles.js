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
    height: 100%;
    color: ${theme.fontMain};
    background: #fff;
    letter-spacing: 0.07rem;
    font-size: ${theme.fontSize};
  }
  h1,
  h2,
  h3 {
    margin: 0;
    padding: 0;
    color: ${theme.fontHeading};
    text-transform: uppercase;
    letter-spacing: -0.1rem;
  }
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 4rem;
  }
  h3 {
    font-size: 3.8rem;
  }
  a {
    text-decoration: none;
  }
  ${'' /* Gatsby injects two div wrapping elements */}
  #___gatsby {
    height: 100%;
  }
  #gatsby-focus-wrapper {
    min-height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
  @media (min-width: ${theme.breakMedium}) { 
    body {
      font-size: ${theme.fontSizeMedium};
    }
    h1 {
      font-size: 5.2rem;
    }
    h2 {
      font-size: 6rem;
    }
    h3 {
      font-size: 5.8rem;
    }
  }
  @media (min-width: ${theme.breakLarge}) { 
    body {
      font-size: ${theme.fontSizeLarge};
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
  }
`;
