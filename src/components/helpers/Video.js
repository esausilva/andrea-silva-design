import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Video = ({
  relativePath,
  showNoSupport = true,
  attributes = {
    controls: true,
    disablePictureInPicture: true,
    controlsList: 'nodownload',
  },
  transformations = '',
}) => {
  const [sources, setSources] = useState({ thumb: '', video: '' });

  useEffect(() => {
    const sources = relativePath.split('|');

    setSources({
      thumb: sources[0],
      video: sources[1],
    });
  }, [relativePath]);

  if (sources.video === '') return null;

  return (
    <video
      {...attributes}
      poster={`https://res.cloudinary.com/${process.env.GATSBY_CLOUDINARY_USER}/image/upload/f_auto,q_60,w_500/andrea-silva-design/${sources.thumb}`}
    >
      <source
        type="video/mp4"
        src={`https://res.cloudinary.com/${process.env.GATSBY_CLOUDINARY_USER}/video/upload/f_auto${transformations}/andrea-silva-design/${sources.video}`}
      />
      {showNoSupport ? (
        <p>
          Sorry, your browser doesn't support embedded videos.
          <br />
          Here is a{' '}
          <a
            href={`https://res.cloudinary.com/${process.env.GATSBY_CLOUDINARY_USER}/video/upload/andrea-silva-design/${sources.video}`}
          >
            link to the video
          </a>{' '}
          instead.
        </p>
      ) : null}
    </video>
  );
};

Video.propTypes = {
  relativePath: PropTypes.string.isRequired,
  showNoSupport: PropTypes.bool,
  attributes: PropTypes.object,
  transformations: PropTypes.string,
};

export { Video };
