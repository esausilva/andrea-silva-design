import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tinykeys from 'tinykeys';

//#region Styled
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
  width: 100%;
  background: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 1rem 3rem hsla(0, 0%, 0%, 0.3);
  padding: 1rem;
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    width: 70%;
  }
  @media (min-width: ${({ theme }) => theme.media.large}) {
    width: 50%;
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
//#endregion

const Modal = ({ children, modalState, closeModal }) => {
  useEffect(() => {
    let unsubscribe = tinykeys(window, {
      Escape: () => closeModal(),
    });

    return () => {
      unsubscribe();
    };
  });

  return (
    <ModalContainer isOpen={modalState}>
      <ModalBody>
        <CloseModal onClick={closeModal}>&times;</CloseModal>
        {children}
      </ModalBody>
    </ModalContainer>
  );
};

Modal.propTypes = {
  children: PropTypes.object.isRequired,
  modalState: PropTypes.bool,
  closeModal: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  modalState: false,
};

export { Modal };
