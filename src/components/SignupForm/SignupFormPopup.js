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
        setIsModalOpen(true);
      }, 10 * 1000);
    }
  }, [showPopup]);

  const closeModal = () => setIsModalOpen(false);

  return (
    <Modal modalState={{ value: isModalOpen, close: closeModal }}>
      <MailChimpSignupForm />
    </Modal>
  );
};

export { SignupFormPopup };
