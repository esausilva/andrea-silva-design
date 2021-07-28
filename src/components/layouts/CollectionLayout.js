import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { MainLayout } from '~components/layouts/MainLayout';
import { Image } from '~helpers/Image';
import { transformationsFormat } from '~utils/index';

//#region Styles
const Hero = styled.div`
  height: ${({ theme }) => `calc(50vh - ${theme.nav.small})`};
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    position: absolute;
    margin-bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
  h1 {
    color: #fff;
    text-shadow: ${({ theme }) => theme.fonts.textShadow};
    font-weight: 600;
  }
  @media (min-width: ${({ theme }) => theme.media.small}) and (max-width: ${({
      theme,
    }) => theme.media.medium}) {
    height: ${({ theme }) => `calc(100vh - ${theme.nav.small})`};
  }
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    height: ${({ theme }) => `calc(50vh - ${theme.nav.medium})`};
  }
  @media (min-width: ${({ theme }) => theme.media.large}) {
    height: ${({ theme }) => `calc(50vh - ${theme.nav.large})`};
  }
`;

const Collection = styled.section`
  padding: 5rem 7rem;
  display: grid;
  grid-template-columns: 1fr;
  font-weight: 400;
  img {
    margin-bottom: 0;
  }
  @media (min-width: ${({ theme }) => theme.media.small}) and (max-width: ${({
      theme,
    }) => theme.media.medium}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: ${({ theme }) => theme.media.large}) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const CollectionItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  /* align-items: center; */
  text-align: center;
  @media (min-width: ${({ theme }) => theme.media.small}) and (max-width: ${({
      theme,
    }) => theme.media.medium}) {
    margin: 2rem;
  }
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    margin: 1rem 2rem;
  }
`;

const CollectionItemTitle = styled.span`
  font-size: calc(${({ theme }) => theme.fonts.small} + 0.8rem);
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    font-size: calc(${({ theme }) => theme.fonts.medium} + 0.7rem);
  }
  @media (min-width: ${({ theme }) => theme.media.large}) {
    font-size: calc(${({ theme }) => theme.fonts.large} + 0.7rem);
  }
`;

const CollectionItemPrice = styled.span`
  font-size: calc(${({ theme }) => theme.fonts.small} + 0.5rem);
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    font-size: calc(${({ theme }) => theme.fonts.medium} + 0.4rem);
  }
  @media (min-width: ${({ theme }) => theme.media.large}) {
    font-size: calc(${({ theme }) => theme.fonts.large} + 0.4rem);
  }
`;
//#endregion

const CollectionLayout = ({ children: data, hero, pageTitle }) => (
  <MainLayout pageTitle={pageTitle}>
    <Hero>
      <Image
        relativePath={hero.image}
        alt={hero.imageTitle}
        title={hero.imageTitle}
        transformations={transformationsFormat('w_1000')}
      />
      <h1>{hero.title}</h1>
    </Hero>
    <Collection>
      {data.map(({ title, image, size, price, slug }) => (
        <CollectionItem key={title}>
          <Link to={slug}>
            <Image
              relativePath={image}
              alt={`${title}, ${size} - ${price}`}
              title={`${title}, ${size} - ${price}`}
              transformations={transformationsFormat('w_500')}
            />
          </Link>
          <CollectionItemTitle>
            {title}, {size}
          </CollectionItemTitle>
          <CollectionItemPrice>{price}</CollectionItemPrice>
        </CollectionItem>
      ))}
    </Collection>
  </MainLayout>
);

CollectionLayout.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      size: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    }),
  ),
  hero: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageTitle: PropTypes.string.isRequired,
  }),
  pageTitle: PropTypes.string,
};

export { CollectionLayout };
