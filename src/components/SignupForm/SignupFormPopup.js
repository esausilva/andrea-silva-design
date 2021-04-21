import React, { useState, useEffect, useContext } from 'react';

import { MailChimpSignupForm } from '~components/SignupForm/MailChimpSignupForm';
import { Modal } from '~components/SignupForm/Modal';
import { PopupCookieContext } from '~components/layouts/MainLayout';

const SignupFormPopup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { showPopup } = useContext(PopupCookieContext);

  useEffect(() => {
    if (showPopup) {
      setTimeout(() => {
        toggleModal();
      }, 10 * 1000);
    }
  }, [showPopup]);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <Modal modalState={{ value: isModalOpen, toggle: toggleModal }}>
      <MailChimpSignupForm />
    </Modal>
  );
};

export { SignupFormPopup };
