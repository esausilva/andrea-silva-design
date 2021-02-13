import React, { useState, useReducer } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';

import { Image } from '~helpers/Image';
import { transformationsFormat } from '~utils/index';
import { ZoomIn } from '~svgs/ZoomIn';
import { Modal } from '~src/components/helpers/Modal';

//#region Styles
import '~styles/react-masonry-css.css';

const transition = 'all 0.2s ease-in';

const GalleryImageContainer = styled.figure`
  margin-bottom: -0.7rem;
  position: relative;
  cursor: pointer;
  &:hover svg {
    opacity: 1;
  }
  &:hover img {
    filter: brightness(50%);
  }
  img {
    margin-bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: ${transition};
  }
  svg {
    cursor: pointer;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    transition: ${transition};
  }
`;
//#endregion

const initialModalBodyState = {
  heading: '',
  blurb: '',
  portfolio: [],
  currentIndex: 0,
};

const modalBodyReducer = (_, { heading, blurb, portfolio, currentIndex }) => ({
  heading,
  blurb,
  portfolio,
  currentIndex,
});

export const FORWARD = 'forward';
export const BACKWARD = 'backward';

const Gallery = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalBodyState, dispatchModalBodyState] = useReducer(
    modalBodyReducer,
    initialModalBodyState,
  );

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const setModalBodyState = (heading, blurb, portfolio, index) => {
    dispatchModalBodyState({
      heading,
      blurb,
      portfolio,
      currentIndex: index,
    });
    toggleModal();
  };

  const changeSlide = direction => {
    const currentIndex = modalBodyState.currentIndex;
    const { nextSlide, nextIndex } = calculateNextSlide(
      direction,
      currentIndex,
      data,
    );

    dispatchModalBodyState({
      heading: nextSlide.title,
      blurb: nextSlide.blurb,
      portfolio: nextSlide.portfolio,
      currentIndex: nextIndex,
    });
  };

  return (
    <>
      <Masonry
        breakpointCols={{ default: 6, 1186: 5, 910: 4, 700: 2, 500: 1 }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data.map(({ thumb, title, blurb, portfolio }, index) => (
          <GalleryImageContainer
            key={thumb}
            onClick={e => setModalBodyState(title, blurb, portfolio, index)}
          >
            <Image
              relativePath={thumb}
              alt={title}
              title={title}
              transformations={transformationsFormat('w_300')}
            />
            <ZoomIn />
          </GalleryImageContainer>
        ))}
      </Masonry>
      {isModalOpen && (
        <Modal
          modalState={isModalOpen}
          closeModal={toggleModal}
          changeSlide={changeSlide}
        >
          {modalBodyState}
        </Modal>
      )}
    </>
  );
};

Gallery.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      thumb: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      blurb: PropTypes.string,
      portfolio: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  ).isRequired,
};

const calculateNextSlide = (direction, currentIndex, data) => {
  let nextIndex;

  switch (direction) {
    case FORWARD:
      nextIndex = currentIndex + 1;

      if (nextIndex > data.length - 1) nextIndex = 0;

      break;
    case BACKWARD:
      nextIndex = currentIndex - 1;

      if (nextIndex === -1) nextIndex = data.length - 1;

      break;
    default:
      nextIndex = 0;
      break;
  }

  return {
    nextIndex,
    nextSlide: data[nextIndex],
  };
};

export { Gallery };
