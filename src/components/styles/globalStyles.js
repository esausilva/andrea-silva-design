import { createGlobalStyle } from 'styled-components';

import { theme, gray } from './theme';

export const GlobalStyles = createGlobalStyle`
  :root {
    --pink: #954c4c;
    --gray: ${gray};
    --nav-height: 10rem;
    --nav-height-medium: 15rem;
    --nav-height-large: 20rem;
    --font-color-main: #181818;
    --font-color-heading: #141414;
    --font-size: 1.6rem;
    --font-size-medium: 1.7rem;
    --font-size-large: 1.9rem;
    --text-shadow: 3px 3px 6px #21130d;
    --transform-500-ms: transform 500ms;
  }
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
    color: ${theme.fonts.colorMain};
    background: #fff;
    letter-spacing: 0.07rem;
    font-size: ${theme.fonts.small};
  }
  h1,
  h2,
  h3 {
    margin: 0;
    padding: 0;
    color: ${theme.fonts.colorHeading};
    text-transform: uppercase;
    letter-spacing: -0.1rem;
    font-weight: 500;
  }
  h1 {
    font-size: 2.7rem;
  }
  h2 {
    font-size: 2.2rem;
  }
  h3 {
    font-size: 2rem;
  }
  a {
    text-decoration: none;
    color: ${theme.colors.pink};
    &:hover {
      text-decoration: underline;
    }
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
  @media (min-width: ${theme.media.medium}) { 
    body {
      font-size: ${theme.fonts.medium};
    }
    h1 {
      font-size: 3.5rem;
    }
    h2 {
      font-size: 3.7rem;
    }
    h3 {
      font-size: 3.2rem;
    }
  }
  @media (min-width: ${theme.media.large}) { 
    body {
      font-size: ${theme.fonts.large};
    }
    h1 {
      font-size: 4rem;
    }
    h2 {
      font-size: 4.2rem;
    }
    h3 {
      font-size: 3.7rem;
    }
  }
`;
