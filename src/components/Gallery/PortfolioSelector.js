import React from 'react';
import PropTypes from 'prop-types';

import { Image } from '~helpers/Image';
import { Video } from '~helpers/Video';
import { transformationsFormat } from '~utils/index';

const PortfolioSelector = ({ type, portfolio, heading }) => {
  return (
    <>
      {portfolio?.map((relativePath, index) => {
        switch (type) {
          case 'image':
            return (
              <Image
                key={relativePath}
                relativePath={relativePath}
                alt={`${heading} ${index + 1}`}
                title={`${heading} ${index + 1}`}
                transformations={transformationsFormat('w_1000')}
              />
            );
          case 'video':
            return <Video key={relativePath} relativePath={relativePath} />;
          default:
            return (
              <div
                key={relativePath}
                style={{ background: '#EA868F', fontWeight: 'bold' }}
              >
                <p>Check the content source to have a valid portfolio type.</p>
                <p>Valid portfolio types:</p>
                <ul>
                  <li>image</li>
                  <li>video</li>
                </ul>
              </div>
            );
        }
      })}
    </>
  );
};

PortfolioSelector.propTypes = {
  type: PropTypes.string.isRequired,
  portfolio: PropTypes.arrayOf(PropTypes.string).isRequired,
  heading: PropTypes.string.isRequired,
};

export { PortfolioSelector };
