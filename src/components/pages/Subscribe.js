import React, { useEffect, useContext } from 'react';

import { PopupCookieContext } from '~components/layouts/MainLayout';
import { KitSignupForm } from '~components/SignupForm/KitSignupForm';

const Subscribe = () => {
  const { setOptionalPopup } = useContext(PopupCookieContext);

  useEffect(() => {
    setOptionalPopup(true);

    return () => {};
  }, [setOptionalPopup]);

  return <KitSignupForm />;
};

export { Subscribe };
