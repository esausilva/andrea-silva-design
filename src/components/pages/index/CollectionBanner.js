import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { Image } from '~helpers/Image';
import { transformationsFormat } from '~utils/index';

//#region Styles
const Banner = styled.section`
  width: 100%;
  height: ${({ theme }) => `calc(40vh - ${theme.nav.small})`};
  background: #f7d1b7;
  position: relative;
  overflow: hidden;
  margin-top: 2rem;
  margin-bottom: 5rem;
  box-shadow: 0 1rem 1rem hsla(0, 0%, 0%, 0.3),
    0 -1rem 1rem hsla(0, 0%, 0%, 0.3);
  img {
    position: absolute;
    margin-bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
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
//#endregion

const CollectionBanner = () => (
  <Banner>
    <Link to={`/collections/garden-collection`} title="Garden Collection">
      <Image
        relativePath={
          'art-collections/andrea-silva-design-2021-june-art-collection-cover.jpg'
        }
        alt={'June Collection - The Garden Collection'}
        title={'June Collection - The Garden Collection'}
        transformations={transformationsFormat('w_1000')}
      />
    </Link>
  </Banner>
);

export { CollectionBanner };
