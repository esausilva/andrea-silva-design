import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { Image } from '~helpers/Image';
import { transformationsFormat } from '~utils/index';
import { LandingTitle } from '~styles/Title';

//#region Styles
const Banner = styled.section`
  height: ${({ theme }) => `calc(40vh - ${theme.nav.small})`};
  position: relative;
  overflow: hidden;
  margin-top: 2rem;
  margin-bottom: 5rem;
  box-shadow: 0 1rem 1rem hsla(0, 0%, 0%, 0.3),
    0 -1rem 1rem hsla(0, 0%, 0%, 0.3);
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
  a {
    position: absolute;
    width: 100%;
    height: 100%;
    &:hover {
      text-decoration: none;
    }
  }
  @media (min-width: ${({ theme }) => theme.media.small}) and (max-width: ${({
      theme,
    }) => theme.media.medium}) {
    height: ${({ theme }) => `calc(100vh - ${theme.nav.small})`};
  }
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    margin-bottom: 8rem;
  }
  @media (min-width: ${({ theme }) => theme.media.large}) {
    margin-bottom: 10rem;
  }
`;

const Title = styled(LandingTitle)`
  text-align: center;
`;
//#endregion

const CollectionBanner = () => (
  <Banner>
    <Link to={`/collections/wander-collection`} title="Wander Collection">
      <Image
        relativePath={
          'art-collections/wander-collection/wander-collection-header.jpg'
        }
        alt={'Wander Collection - October Collection'}
        title={'Wander Collection - October Collection Collection'}
        transformations={transformationsFormat('w_1000')}
      />
    </Link>
    <Title>Shop The Wander Collection</Title>
  </Banner>
);

export { CollectionBanner };
