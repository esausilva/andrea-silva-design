import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '~styles/globalStyles';
import { theme } from '~styles/theme';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { BackToTop } from './BackToTop';
import { SignupFormPopup } from '~components/SignupForm/SignupFormPopup';
import { usePopupCookie } from '~src/hooks/usePopupCookie';

//#region Styles
const Main = styled.main`
  overflow: hidden;
  max-width: 100%;
`;
//#endregion

const PopupCookieContext = createContext();

const MainLayout = ({ children }) => {
  const { createCookie, showPopup, setOptionalPopup, optionalPopup } =
    usePopupCookie();

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <BackToTop />
        <Navigation />
        <PopupCookieContext.Provider
          value={{ createCookie, showPopup, setOptionalPopup, optionalPopup }}
        >
          <Main>{children}</Main>
          <Footer />
          <SignupFormPopup />
        </PopupCookieContext.Provider>
      </>
    </ThemeProvider>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MainLayout, PopupCookieContext };
