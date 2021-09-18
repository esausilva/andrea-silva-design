import React, { useEffect, useContext } from 'react';

import { PopupCookieContext } from '~components/layouts/MainLayout';
import { MailChimpSignupForm } from '~components/SignupForm/MailChimpSignupForm';

const Subscribe = () => {
  const { setOptionalPopup } = useContext(PopupCookieContext);

  useEffect(() => {
    setOptionalPopup(true);

    return () => {};
  }, [setOptionalPopup]);

  return <MailChimpSignupForm />;
};

export { Subscribe };
