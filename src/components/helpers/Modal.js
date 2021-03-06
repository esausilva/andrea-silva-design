import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tinykeys from 'tinykeys';
import Swipe from 'react-easy-swipe';

import { PortfolioSelector } from '~helpers/PortfolioSelector';
import { ArrowLeft, ArrowRight } from '~svgs/ChevronCircle';
import { ButtonSvgWrapper } from '~styles/ButtonSvgWrapper';
import { FORWARD, BACKWARD } from '~components/Gallery/Gallery';

//#region Styles
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  z-index: 999;
`;

const ModalBody = styled.section`
  position: fixed;
  background: #fff;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
  overflow: auto;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1rem 3rem hsla(0, 0%, 0%, 0.3);
  z-index: 1000;
  h1 {
    font-size: 3rem;
    margin-top: 4rem;
    margin-bottom: 1rem;
    text-align: center;
  }
  img {
    align-self: center;
  }
  video {
    width: 100%;
  }
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    width: 70%;
    padding: 2rem;
    h1 {
      font-size: 4rem;
    }
  }
  @media (min-width: ${({ theme }) => theme.media.large}) {
    h1 {
      font-size: 4.5rem;
    }
  }
`;

const CloseModal = styled.button`
  border: 0;
  padding: 0;
  margin: 0;
  background: none;
  color: ${({ theme }) => theme.colors.pink};
  font-size: 5rem;
  cursor: pointer;
  position: absolute;
  right: 1rem;
  top: -1.5rem;
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    font-size: 6rem;
    top: -2.5rem;
  }
  @media (min-width: ${({ theme }) => theme.media.large}) {
    font-size: 7rem;
    top: -3rem;
  }
`;

const ArrowButtonBase = styled(ButtonSvgWrapper)`
  position: absolute;
  top: 45%;
`;

const ArrowButtonLeft = styled(ArrowButtonBase)`
  margin-left: 2rem;
`;

const ArrowButtonRight = styled(ArrowButtonBase)`
  right: 0;
  margin-right: 2rem;
`;
//#endregion

const Modal = ({ children, modalState, closeModal, changeSlide }) => {
  const { heading, blurb, portfolioType, portfolio } = children;
  const chevronColor = '#474747';

  useEffect(() => {
    let body = document.querySelector('body');

    if (modalState) {
      body.style.overflowY = 'hidden';
    }

    return () => {
      body.removeAttribute('style');
    };
  }, [modalState]);

  useEffect(() => {
    let unsubscribe = tinykeys(window, {
      Escape: () => closeModal(),
      ArrowLeft: () => backward(),
      ArrowRight: () => forward(),
    });

    return () => {
      unsubscribe();
    };
  });

  const forward = () => changeSlide(FORWARD);
  const backward = () => changeSlide(BACKWARD);

  return (
    <ModalContainer isOpen={modalState}>
      <ArrowButtonLeft onClick={e => backward()}>
        <ArrowLeft pathFill={chevronColor} />
      </ArrowButtonLeft>
      <Swipe onSwipeLeft={forward} onSwipeRight={backward} tolerance={100}>
        <ModalBody>
          <CloseModal onClick={closeModal}>&times;</CloseModal>
          <h1>{heading}</h1>
          <p>{blurb}</p>
          <PortfolioSelector
            type={portfolioType}
            portfolio={portfolio}
            heading={heading}
          />
        </ModalBody>
      </Swipe>
      <ArrowButtonRight onClick={e => forward()}>
        <ArrowRight pathFill={chevronColor} />
      </ArrowButtonRight>
    </ModalContainer>
  );
};

Modal.defaultProps = {
  children: {
    heading: '',
    blurb: '',
    portfolioType: '',
    portfolio: [],
    currentIndex: 0,
  },
  modalState: false,
};

Modal.propTypes = {
  children: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    blurb: PropTypes.string,
    portfolioType: PropTypes.string.isRequired,
    portfolio: PropTypes.arrayOf(PropTypes.string).isRequired,
    currentIndex: PropTypes.number,
  }).isRequired,
  modalState: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  changeSlide: PropTypes.func.isRequired,
};

export { Modal };
