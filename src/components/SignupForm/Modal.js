import React, { useEffect, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tinykeys from 'tinykeys';

import { PopupCookieContext } from '~components/layouts/MainLayout';
import { getMaxCookieAgeInSeconds } from '~utils/index';
import {
  Container as ModalContainer,
  Body,
  Close as CloseModal,
} from '~styles/Modal';

//#region Styles
const ModalBody = styled(Body)`
  width: 100%;
  padding-top: 3.4rem;
  height: 100%;
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    width: 70%;
    height: auto;
  }
  @media (min-width: ${({ theme }) => theme.media.large}) {
    width: 50%;
  }
`;

const Checkbox = styled.label`
  font-size: calc(${({ theme }) => theme.fonts.small} - 0.35rem);
  display: flex;
  align-items: center;
  input {
    transform: scale(0.7);
    margin-right: 0.3rem;
  }
  button {
    margin-left: 0.3rem;
    border-radius: 0.5rem;
    border: none;
  }
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    font-size: calc(${({ theme }) => theme.fonts.medium} - 0.35rem);
    input {
      transform: scale(0.8);
    }
  }
  @media (min-width: ${({ theme }) => theme.media.large}) {
    font-size: calc(${({ theme }) => theme.fonts.large} - 0.35rem);
    input {
      transform: scale(0.9);
    }
  }
`;
//#endregion

const Modal = ({ children, modalState }) => {
  const [doNotShowValue, setDoNotShowValue] = useState(false);
  const { createCookie, showPopup } = useContext(PopupCookieContext);

  useEffect(() => {
    let unsubscribe = tinykeys(window, {
      Escape: () => handleClose(),
    });

    return () => {
      unsubscribe();
    };
  });

  const handleClose = () => {
    if (showPopup) createCookie(getMaxCookieAgeInSeconds({ days: 2 }));

    modalState.close();
  };

  const toggleDoNotShow = () => setDoNotShowValue(!doNotShowValue);
  const handleDoNotShowClose = () => {
    createCookie(getMaxCookieAgeInSeconds({ isNeverExpires: true }));
    modalState.close();
  };

  return (
    <ModalContainer isOpen={modalState.value}>
      <ModalBody>
        <CloseModal onClick={handleClose}>&times;</CloseModal>
        {children}
        <Checkbox htmlFor="do-not-show-popup">
          <input
            type="checkbox"
            id="do-not-show-popup"
            onChange={toggleDoNotShow}
            checked={doNotShowValue}
          />
          Do not show again on this device
          {doNotShowValue === true ? (
            <button onClick={handleDoNotShowClose}>Save and close</button>
          ) : null}
        </Checkbox>
      </ModalBody>
    </ModalContainer>
  );
};

Modal.propTypes = {
  children: PropTypes.object.isRequired,
  modalState: PropTypes.shape({
    value: PropTypes.bool,
    close: PropTypes.func.isRequired,
  }).isRequired,
};

Modal.defaultProps = {
  modalState: {
    value: false,
  },
};

export { Modal };
