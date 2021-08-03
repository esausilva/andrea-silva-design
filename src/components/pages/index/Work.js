import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { Image } from '~helpers/Image';
import { transformationsFormat } from '~utils/index';
import { LandingTitle } from '~styles/Title';
import featuredImagesData from '~content/index/featuredImages.json';

//#region Styles
const Portfolio = styled.section`
  height: 100vh;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;

const WorkMedium = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  &:hover img {
    filter: blur(2px);
  }
  img {
    position: absolute;
    margin-bottom: 0;
    transition: filter 0.3s ease-in;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  a {
    z-index: 1;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      text-decoration: none;
    }
  }
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    a {
      justify-content: start;
      align-items: flex-end;
    }
    h1 {
      margin: 1.5rem;
    }
  }
`;
//#endregion

const Work = () => {
  return (
    <Portfolio id="nav-work">
      {featuredImagesData.map(({ image, alt, slug, title }) => (
        <WorkMedium key={image}>
          <Image
            relativePath={image}
            alt={alt}
            title={alt}
            transformations={transformationsFormat('w_1000')}
          />
          <Link to={`/portfolio/${slug}`}>
            <LandingTitle>{title}</LandingTitle>
          </Link>
        </WorkMedium>
      ))}
    </Portfolio>
  );
};

export { Work };
