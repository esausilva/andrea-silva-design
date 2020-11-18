import React, { useState, useReducer } from 'react';
import Masonry from 'react-masonry-css';
import styled from 'styled-components';

import { MainLayout } from '~components/layouts/MainLayout';
import { Image } from '~helpers/Image';
import { transformationsFormat } from '~utils/index';
import { ZoomIn } from '~svgs/ZoomIn';
import { ModalPortal, Modal } from '~components/Modal/index';
import graphicDesignData from '~content/graphicDesign.json';

//#region Styles
import '~styles/react-masonry-css.css';

const transition = 'all 0.2s ease-in';

const Title = styled.h1`
  text-align: center;
  margin-bottom: 0.5rem;
`;

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

const initialModalState = {
  heading: '',
  blurb: '',
  portfolio: [],
};

const modalReducer = (_, { heading, blurb, portfolio }) => {
  return {
    heading,
    blurb,
    portfolio,
  };
};

const GraphicDesign = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalBodyState, dispatchModalBodyState] = useReducer(
    modalReducer,
    initialModalState,
  );

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const setModalState = (heading, blurb, portfolio) => {
    dispatchModalBodyState({
      heading,
      blurb,
      portfolio,
    });
    toggleModal();
  };

  return (
    <MainLayout>
      <Title>Graphic Design</Title>
      <Masonry
        breakpointCols={{ default: 6, 1186: 5, 910: 4, 700: 2, 500: 1 }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {graphicDesignData.map(({ thumb, title, blurb, portfolio }) => (
          <GalleryImageContainer
            key={thumb}
            onClick={e => setModalState(title, blurb, portfolio)}
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
        <ModalPortal>
          <Modal modalState={isModalOpen} closeModal={toggleModal}>
            {modalBodyState}
          </Modal>
        </ModalPortal>
      )}
    </MainLayout>
  );
};

export default GraphicDesign;
