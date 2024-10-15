import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { tinykeys } from 'tinykeys';

import {
  Container as ModalContainer,
  BodyResponsive,
  Close as CloseModal,
} from '~styles/Modal';

const Modal = ({
  children,
  modalState = { value: false, toggle: () => {} },
}) => {
  useEffect(() => {
    let unsubscribe = tinykeys(window, {
      Escape: () => toggleModal(),
    });

    return () => {
      unsubscribe();
    };
  });

  const toggleModal = () => {
    modalState.toggle();
  };

  return (
    <ModalContainer $isOpen={modalState.value}>
      <BodyResponsive>
        <CloseModal onClick={toggleModal}>&times;</CloseModal>
        {children}
      </BodyResponsive>
    </ModalContainer>
  );
};

Modal.propTypes = {
  children: PropTypes.object.isRequired,
  modalState: PropTypes.shape({
    value: PropTypes.bool,
    toggle: PropTypes.func.isRequired,
  }).isRequired,
};

export { Modal };
