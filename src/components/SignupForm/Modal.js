import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tinykeys from 'tinykeys';

import {
  Container as ModalContainer,
  Body,
  Close as CloseModal,
} from '~styles/Modal';

//#region Styles
const ModalBody = styled(Body)`
  width: 100%;
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    width: 70%;
  }
  @media (min-width: ${({ theme }) => theme.media.large}) {
    width: 50%;
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
