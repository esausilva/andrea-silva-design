import React, { useState, useReducer } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';
import toast, { Toaster } from 'react-hot-toast';

import { Image } from '~helpers/Image';
import { transformationsFormat } from '~utils/index';
import { ZoomIn } from '~svgs/ZoomIn';
import { Modal } from '~src/components/Gallery/Modal';
import { useMediaQuery } from '~src/hooks/useMediaQuery';
import { theme } from '~styles/theme';
import { ImageOverlayWithIcon } from '~styles/shared';

//#region Styles
import '~styles/react-masonry-css.css';

const GalleryImageContainer = styled.a`
  margin-bottom: -0.7rem;
  display: block;
  ${ImageOverlayWithIcon}
  img {
    padding: 0.7rem;
    width: 100%;
    height: 100%;
  }
`;
//#endregion

const initialModalBodyState = {
  heading: '',
  blurb: '',
  portfolioType: '',
  portfolio: [],
  currentIndex: 0,
};

const modalBodyReducer = (
  _,
  { heading, blurb, portfolioType, portfolio, currentIndex },
) => ({
  heading,
  blurb,
  portfolioType,
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
  const isMobile = useMediaQuery(`(max-width: ${theme.media.medium})`);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const setModalBodyState = (
    heading,
    blurb,
    portfolioType,
    portfolio,
    index,
  ) => {
    dispatchModalBodyState({
      heading,
      blurb,
      portfolioType,
      portfolio,
      currentIndex: index,
    });
    toggleModal();

    if (isMobile) notify();
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
      portfolioType: nextSlide.portfolioType,
      portfolio: nextSlide.portfolio,
      currentIndex: nextIndex,
    });
  };

  const notify = () =>
    toast(
      <span>
        <strong>←</strong> Swipe To See More <strong>→</strong>
      </span>,
      {
        style: {
          border: `1px solid ${theme.colors.pink}`,
          padding: '10px',
          color: theme.colors.pink,
        },
      },
    );

  return (
    <>
      <Masonry
        breakpointCols={{ default: 5, 1186: 4, 910: 3, 700: 2, 500: 1 }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data?.map(
          ({ thumb, title, blurb, portfolioType, portfolio }, index) => (
            <GalleryImageContainer
              key={thumb}
              href="#"
              onClick={e =>
                setModalBodyState(title, blurb, portfolioType, portfolio, index)
              }
            >
              <Image
                relativePath={thumb}
                alt={title}
                title={title}
                transformations={transformationsFormat('w_300')}
              />
              <ZoomIn />
            </GalleryImageContainer>
          ),
        )}
      </Masonry>
      {isModalOpen && (
        <Modal
          modalState={{ value: isModalOpen, toggle: toggleModal }}
          changeSlide={changeSlide}
        >
          {modalBodyState}
        </Modal>
      )}
      <Toaster
        position="top-left"
        toastOptions={{
          duration: 3000,
        }}
      />
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
