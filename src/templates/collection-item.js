import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormspreeProvider } from '@formspree/react';

import { MainLayout } from '~components/layouts/MainLayout';
import { SecondaryLayout } from '~components/layouts/SecondaryLayout';
import { Modal } from '~components/PurchaseOrderForm/Modal';
import { PurchaseOrderForm } from '~components/PurchaseOrderForm/PurchaseOrderForm';
import { Button } from '~styles/Button';
import { Image } from '~helpers/Image';
import { transformationsFormat } from '~utils/index';

//#region Styles
const Wrapper = styled(SecondaryLayout)`
  display: grid;
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: 'images body';
    gap: 0 4rem;
  }
`;

const CollectionBody = styled.article`
  span {
    display: block;
    margin-bottom: 2rem;
  }
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    grid-area: body;
  }
`;

const CollectionImages = styled.aside`
  margin-top: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    grid-area: images;
    margin-top: 0;
  }
`;

const Price = styled.p`
  font-size: calc(${({ theme }) => theme.fonts.small} + 0.4rem);
  font-weight: 400;
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    font-size: calc(${({ theme }) => theme.fonts.medium} + 0.6rem);
  }
  @media (min-width: ${({ theme }) => theme.media.large}) {
    font-size: calc(${({ theme }) => theme.fonts.medium} + 0.8rem);
  }
`;

const Purchase = styled(Button)`
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    margin-top: 2rem;
  }
`;
//#endregion

const CollectionItem = ({ pageContext: { collection } }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <MainLayout pageTitle={`${collection.title}, ${collection.size}`}>
      <Wrapper>
        <CollectionBody>
          <h1>
            <em>
              {collection.title}, {collection.size}
            </em>
          </h1>
          <span>{collection.medium}</span>
          <Price>{collection.price}</Price>
          <p>{collection.description}</p>
          <Purchase
            type="button"
            $bgColor="#f0d3c7"
            $textColor="initial"
            onClick={toggleModal}
          >
            Purchase
          </Purchase>
        </CollectionBody>
        <CollectionImages>
          {collection.images.map((image, index) => (
            <Image
              key={image}
              relativePath={image}
              alt={`${collection.title} - ${index + 1}`}
              title={`${collection.title} - ${index + 1}`}
              transformations={transformationsFormat('w_500')}
            />
          ))}
        </CollectionImages>
      </Wrapper>
      <Modal modalState={{ value: isModalOpen, toggle: toggleModal }}>
        <FormspreeProvider project={process.env.GATSBY_FORMSPREE_PROJECT_ID}>
          <PurchaseOrderForm
            artWork={`${collection.title}, ${collection.size}`}
            price={collection.price}
          />
        </FormspreeProvider>
      </Modal>
    </MainLayout>
  );
};

CollectionItem.propTypes = {
  pageContext: PropTypes.shape({
    collection: PropTypes.shape({
      title: PropTypes.string.isRequired,
      size: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      medium: PropTypes.string.isRequired,
      description: PropTypes.string,
      images: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  }).isRequired,
};

export default CollectionItem;
