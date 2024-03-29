import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormspreeProvider } from '@formspree/react';
import { Link } from 'gatsby';

import { MainLayout } from '~components/layouts/MainLayout';
import { SecondaryLayout } from '~components/layouts/SecondaryLayout';
import { Modal } from '~components/PurchaseOrderForm/Modal';
import { PurchaseOrderForm } from '~components/PurchaseOrderForm/PurchaseOrderForm';
import { Seo } from '~components/helpers/SEO';
import { Button } from '~styles/Button';
import { Image } from '~helpers/Image';
import { transformationsFormat } from '~utils/index';
import { useCollectionSlug } from '~hooks/useCollectionSlug';

//#region Styles
const Wrapper = styled(SecondaryLayout)`
  display: grid;
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
    grid-template-areas: 'goBack goBack' 'images body';
    gap: 0 4rem;
  }
`;

const BackTo = styled.span`
  justify-self: right;
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    justify-self: left;
    grid-area: goBack;
    margin-bottom: 0.8rem;
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
  span {
    color: ${({ theme }) => theme.colors.gray};
    font-style: italic;
    display: inline-block;
    font-size: calc(${({ theme }) => theme.fonts.small} - 0.3rem);
    margin-left: 0.5rem;
  }
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    font-size: calc(${({ theme }) => theme.fonts.medium} + 0.6rem);
    span {
      font-size: calc(${({ theme }) => theme.fonts.medium} - 0.3rem);
    }
  }
  @media (min-width: ${({ theme }) => theme.media.large}) {
    font-size: calc(${({ theme }) => theme.fonts.medium} + 0.8rem);
    span {
      font-size: calc(${({ theme }) => theme.fonts.large} - 0.3rem);
    }
  }
`;

const Purchase = styled(Button)`
  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray};
    cursor: not-allowed;
  }
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    margin-top: 2rem;
  }
`;
//#endregion

const CollectionItem = ({ pageContext }) => {
  const { title, size, price, isSold, medium, description, images } =
    pageContext;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { collectionSlug } = useCollectionSlug(2);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <MainLayout>
      <Wrapper>
        <BackTo>
          <Link to={`/collections/${collectionSlug}`}>Back to collection</Link>
        </BackTo>
        <CollectionBody>
          <h1>
            <em>{title}</em>
          </h1>
          <span>
            {size} {medium}
          </span>
          <Price>
            {isSold ? 'SOLD' : price}
            <span>{isSold ? '' : '(frame not included)'}</span>
          </Price>
          <p>{description}</p>
          <Purchase
            name="Purchase Artwork"
            type="button"
            $bgColor="#f0d3c7"
            $textColor="initial"
            disabled={isSold}
            onClick={toggleModal}
          >
            Purchase
          </Purchase>
        </CollectionBody>
        <CollectionImages>
          {images?.map((image, index) => (
            <Image
              key={image}
              relativePath={image}
              alt={`${title} - ${index + 1}`}
              title={`${title} - ${index + 1}`}
              transformations={transformationsFormat('w_500')}
            />
          ))}
        </CollectionImages>
      </Wrapper>
      <Modal modalState={{ value: isModalOpen, toggle: toggleModal }}>
        <FormspreeProvider project={process.env.GATSBY_FORMSPREE_PROJECT_ID}>
          <PurchaseOrderForm artWork={`${title}, ${size}`} price={price} />
        </FormspreeProvider>
      </Modal>
    </MainLayout>
  );
};

CollectionItem.propTypes = {
  pageContext: PropTypes.shape({
    title: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    medium: PropTypes.string.isRequired,
    description: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    slug: PropTypes.string.isRequired,
    isSold: PropTypes.bool.isRequired,
  }),
};

export default CollectionItem;

export const Head = ({ location, pageContext }) => {
  const { title, size } = pageContext;

  return <Seo pageTitle={`${title}, ${size}`} pathName={location.pathname} />;
};
