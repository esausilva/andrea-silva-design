import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ArrowBase } from '~styles/ArrowBase';

//#region Styles
const Arrow = styled(ArrowBase)`
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    width: 8rem;
    height: 8rem;
    circle {
      fill: rgba(255, 255, 255, 0.6);
    }
    path {
      fill: ${({ theme, pathFill }) =>
        pathFill === '' ? theme.colors.gray : pathFill};
    }
  }
  @media (min-width: ${({ theme }) => theme.media.large}) {
    width: 10rem;
    height: 10rem;
  }
`;
//#endregion

export const ArrowLeft = ({ pathFill }) => (
  <Arrow
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    pathFill={pathFill}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M13.7 15.3a1 1 0 0 1-1.4 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.4 1.4L10.42 12l3.3 3.3z" />
  </Arrow>
);

ArrowLeft.defaultProps = {
  pathFill: '',
};

ArrowLeft.propTypes = {
  pathFill: PropTypes.string,
};

export const ArrowRight = ({ pathFill }) => (
  <Arrow
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    pathFill={pathFill}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M10.3 8.7a1 1 0 0 1 1.4-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4l3.29-3.3-3.3-3.3z" />
  </Arrow>
);

ArrowRight.defaultProps = {
  pathFill: '',
};

ArrowRight.propTypes = {
  pathFill: PropTypes.string,
};
