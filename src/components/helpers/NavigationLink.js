import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link as LinkScroll } from 'react-scroll';
import { Link } from 'gatsby';

const NavigationLink = ({ linkTo, text, setIsMenuOpen, isSamePage }) => {
  const [isRoot, setIsRoot] = useState(true);

  useEffect(() => {
    window.location.pathname === '/' ? setIsRoot(true) : setIsRoot(false);

    return () => {};
  }, []);

  const MenuSelector = () => {
    if (!isSamePage) return <Link to={`/${linkTo}`}>{text}</Link>;

    if (isRoot)
      return (
        <LinkScroll
          to={linkTo}
          spy={true}
          smooth={true}
          duration={600}
          onClick={() => setIsMenuOpen(false)}
        >
          {text}
        </LinkScroll>
      );

    return <Link to={`/#${linkTo}`}>{text}</Link>;
  };

  return <>{MenuSelector()}</>;
};

NavigationLink.propTypes = {
  linkTo: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  setIsMenuOpen: PropTypes.func.isRequired,
  isSamePage: PropTypes.bool.isRequired,
};

export { NavigationLink };
