import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';

import { ArrowTickUpCircle } from '~svgs/ArrowTickUpCircle';
import { ButtonSvgWrapper } from '~styles/Button';

//#region Styles
const Button = styled(ButtonSvgWrapper)`
  position: fixed;
  z-index: 1;
  right: 2rem;
  bottom: 1.5rem;
  z-index: 2;
  transition:
    opacity 500ms,
    ${({ theme }) => theme.animations.transform500ms};
  opacity: ${({ $show }) => ($show ? '1' : '0')};
  transform: ${({ $show }) => ($show ? 'rotate(360deg)' : 'rotate(180deg)')};
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    right: 3rem;
    bottom: 2rem;
  }
`;
//#endregion

const BackToTop = () => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', checkWindowPageYOffset);
    return () => window.removeEventListener(`scroll`, checkWindowPageYOffset);
  });

  const checkWindowPageYOffset = () => {
    if (!display && window.pageYOffset > 400) {
      setDisplay(true);
    } else if (display && window.pageYOffset <= 400) {
      setDisplay(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Button
      aria-label="Back To Top"
      name="Back To Top"
      onClick={scrollToTop}
      $show={display}
    >
      <ArrowTickUpCircle />
    </Button>
  );
};

export { BackToTop };
