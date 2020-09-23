import React from 'react';
import PropTypes from 'prop-types';
import 'lazysizes';

const Image = ({ alt, title, relativePath, transformations }) => {
  return (
    <img
      src={`https://res.cloudinary.com/esausilva/image/upload/e_blur:1500,f_auto,q_40${transformations}/andrea-silva-design/${relativePath}`}
      alt={alt}
      title={title}
      data-sizes="auto"
      data-src={`https://res.cloudinary.com/esausilva/image/upload/f_auto,q_auto${transformations}/andrea-silva-design/${relativePath}`}
      className="lazyload"
    />
  );
};

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  title: PropTypes.string,
  relativePath: PropTypes.string.isRequired,
  // transformationsLqip: PropTypes.string,
  transformations: PropTypes.string,
};

Image.defaultProps = {
  title: '',
  // transformationsLqip: '',
  transformations: '',
};

export { Image };
//e_pixelate:30
