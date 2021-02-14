import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const NavigationLink = ({ linkTo, text, setIsMenuOpen }) => {
  const [isRoot, setIsRoot] = useState(true);

  useEffect(() => {
    window.location.pathname === '/' ? setIsRoot(true) : setIsRoot(false);

    return () => {};
  }, [window.location]);

  return (
    <>
      {isRoot ? (
        <Link
          to={linkTo}
          spy={true}
          smooth={true}
          duration={600}
          onClick={() => setIsMenuOpen(false)}
        >
          {text}
        </Link>
      ) : (
        <a href={`${window.location.origin}/#${linkTo}`}>{text}</a>
      )}
    </>
  );
};

export { NavigationLink };
