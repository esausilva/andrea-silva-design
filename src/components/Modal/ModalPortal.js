import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const portalRoot =
  typeof document !== `undefined`
    ? document.querySelector('#modal-portal')
    : null;

const ModalPortal = ({ children }) => {
  const el =
    typeof document !== `undefined` ? document.createElement('div') : null;

  useEffect(() => {
    portalRoot.appendChild(el);

    return () => {
      portalRoot.removeChild(el);
    };
  }, [el]);

  if (el) {
    return createPortal(children, el);
  } else {
    return null;
  }
};

export { ModalPortal };
