/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import { SEO } from '~helpers/SEO';
import { GlobalStyles } from '~styles/globalStyles';
import { theme } from '~styles/theme';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { BackToTop } from './BackToTop';

//#region Styles
const Main = styled.main`
  overflow: hidden;
  max-width: 100%;
`;
//#endregion

const MainLayout = ({ children, pageTitle, pathName }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        {/* <SEO title={pageTitle} pathName={pathName} /> */}
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
  pageTitle: PropTypes.string,
  pathName: PropTypes.string,
};

MainLayout.defaultProps = {
  pageTitle: '',
  pathName: '',
};

export { MainLayout };
