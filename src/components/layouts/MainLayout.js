/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '~styles/globalStyles';
import { theme } from '~styles/theme';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { BackToTop } from './BackToTop';

//#region Styles
const Main = styled.main`
  overflow-x: hidden;
  max-width: 100%;
  @media (min-width: ${theme.breakMedium}) {
    overflow-x: initial;
    max-width: initial;
  }
`;
//#endregion

const MainLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <BackToTop />
        <Navigation />
        <Main>{children}</Main>
        <Footer />
      </>
    </ThemeProvider>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MainLayout };
