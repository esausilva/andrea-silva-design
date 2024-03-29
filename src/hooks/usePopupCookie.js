import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

const cookieName = 'andrea-silva-design-signup-popup';

const usePopupCookie = () => {
  const [cookies, setCookie, removeCookie] = useCookies([cookieName]);
  const [showPopup, setShowPopup] = useState(false);
  const [optionalPopup, setOptionalPopup] = useState(false);

  useEffect(() => {
    const cookie = cookies[cookieName];

    if (!Boolean(cookie)) {
      setShowPopup(true);
    }

    return () => {};
  }, [cookies]);

  const createCookie = maxAge => {
    const cookie = cookies[cookieName];

    if (!Boolean(cookie)) {
      setCookie(cookieName, true, {
        sameSite: 'strict',
        secure: true,
        path: '/',
        maxAge,
      });
      setShowPopup(false);
    }
  };

  return { createCookie, showPopup, setOptionalPopup, optionalPopup };
};

export { usePopupCookie };
