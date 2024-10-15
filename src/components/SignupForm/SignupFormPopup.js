import React, { useState, useEffect, useContext } from 'react';

import { KitSignupForm } from '~components/SignupForm/KitSignupForm';
import { Modal } from '~components/SignupForm/Modal';
import { PopupCookieContext } from '~components/layouts/MainLayout';

const SignupFormPopup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { showPopup, optionalPopup } = useContext(PopupCookieContext);

  useEffect(() => {
    if (showPopup && optionalPopup === false) {
      setTimeout(() => {
        setIsModalOpen(true);
      }, 10 * 1000);
    }
  }, [showPopup, optionalPopup]);

  const closeModal = () => setIsModalOpen(false);

  return (
    <Modal modalState={{ value: isModalOpen, close: closeModal }}>
      <KitSignupForm />
    </Modal>
  );
};

export { SignupFormPopup };
