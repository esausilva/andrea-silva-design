import React, { useState } from 'react';

import { MailChimpSignupForm } from '~components/SignupForm/MailChimpSignupForm';
import { Modal } from '~components/SignupForm/Modal';

const SignupFormPopup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <Modal modalState={isModalOpen} closeModal={toggleModal}>
        <MailChimpSignupForm />
      </Modal>
    </>
  );
};

export { SignupFormPopup };
