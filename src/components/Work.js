import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { Image } from './helpers/Image';
import { transformationsFormat } from '../utils';
import JSONData from '../content/featuredImages.json';

//#region Styles
const Portfolio = styled.section`
  height: ${({ theme }) => `calc(100vh - ${theme.navHeight})`};
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  @media (min-width: ${({ theme }) => theme.breakMedium}) {
    height: ${({ theme }) => `calc(100vh - ${theme.navHeightMedium})`};
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  @media (min-width: ${({ theme }) => theme.breakLarge}) {
    height: ${({ theme }) => `calc(100vh - ${theme.navHeightLarge})`};
  }
`;

const WorkMedium = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  &:hover img {
    transform: scale(1.005);
    filter: blur(2px);
  }
  img {
    position: absolute;
    margin-bottom: 0;
    transition: all 0.4s ease-in;
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
  }
  h1 {
    color: #fff;
    text-shadow: 3px 3px 6px #333;
  }
  @media (min-width: ${({ theme }) => theme.breakMedium}) {
    a {
      justify-content: start;
      align-items: flex-end;
    }
    h1 {
      margin: 1.5rem;
      font-size: 4.5rem;
    }
  }
  @media (min-width: ${({ theme }) => theme.breakLarge}) {
    h1 {
      font-size: 5.2rem;
    }
  }
`;
//#endregion

const Work = () => {
  return (
    <Portfolio>
      {JSONData.map(content => (
        <WorkMedium key={content.image}>
          <Image
            relativePath={content.image}
            alt={content.alt}
            title={content.alt}
            transformations={transformationsFormat('w_1000')}
          />
          <Link to={`/portfolio/${content.slug}`}>
            <h1>{content.title}</h1>
          </Link>
        </WorkMedium>
      ))}
    </Portfolio>
  );
};

export { Work };
