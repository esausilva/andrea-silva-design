import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { MainLayout } from '~components/layouts/MainLayout';
import { SecondaryLayout } from '~components/layouts/SecondaryLayout';
import { Image } from '~helpers/Image';
import { transformationsFormat } from '~utils/index';
import { ShoppingBag } from '~svgs/ShoppingBag';

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

const transition = '0.2s ease-in';

const CollectionItemLink = styled(Link)`
  position: relative;
  &:hover svg {
    opacity: 1;
  }
  &:hover img {
    filter: brightness(50%);
  }
  img {
    transition: filter ${transition};
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
    transition: opacity ${transition};
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

const Body = styled(SecondaryLayout)`
  padding-bottom: 0;
  p {
    margin-bottom: 0;
  }
`;
//#endregion

const CollectionLayout = ({ children: data, hero, pageTitle, description }) => (
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
    <Body>
      <p>{description}</p>
    </Body>
    <Collection>
      {data.map(({ title, image, size, price, slug }) => (
        <CollectionItem key={title}>
          <CollectionItemLink to={slug}>
            <Image
              relativePath={image}
              alt={`Shop ${title}, ${size} - ${price}`}
              title={`Shop ${title}, ${size} - ${price}`}
              transformations={transformationsFormat('w_500')}
            />
            <ShoppingBag />
          </CollectionItemLink>
          <CollectionItemTitle>
            {title}, {size}
          </CollectionItemTitle>
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
  ).isRequired,
  hero: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageTitle: PropTypes.string.isRequired,
  }).isRequired,
  pageTitle: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export { CollectionLayout };
