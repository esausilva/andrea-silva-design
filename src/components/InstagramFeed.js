import React, { useRef } from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { lighten } from 'polished';

import { Image } from '~helpers/Image';
import { transformationsFormat } from '~utils/index';
import { ArrowBase } from '~styles/ArrowBase';

//#region Styles
const imageDimensions = '20rem !important';
const imageDimensionsMedium = '30rem !important';
const imageDimensionsLarge = '35rem !important';

const Instagram = styled.section`
  margin-top: 2rem;
  position: relative;
  h3 {
    text-align: center;
  }
  @media (min-width: ${({ theme }) => theme.breakMedium}) {
    h3 {
      text-align: left;
      margin-left: 2rem;
    }
  }
`;

const SwipeInfo = styled.span`
  position: absolute;
  right: 0.8rem;
  z-index: 1;
  color: #fff;
  text-shadow: ${({ theme }) => theme.textShadow};
  font-weight: bolder;
  @media (min-width: ${({ theme }) => theme.breakMedium}) {
    display: none;
  }
`;

const Slider = styled.div`
  height: ${imageDimensions};
  overflow: hidden;
  position: relative;
  div {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    padding-bottom: 20px;
    a {
      position: relative;
    }
  }
  @media (min-width: ${({ theme }) => theme.breakMedium}) {
    height: ${imageDimensionsMedium};
  }
  @media (min-width: ${({ theme }) => theme.breakLarge}) {
    height: ${imageDimensionsLarge};
  }
`;

const LastSlide = styled.a`
  min-width: ${imageDimensions};
  min-height: ${imageDimensions};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${lighten(0.2, '#000')};
  color: #fff;
  @media (min-width: ${({ theme }) => theme.breakMedium}) {
    min-width: ${imageDimensionsMedium};
    min-height: ${imageDimensionsMedium};
  }
  @media (min-width: ${({ theme }) => theme.breakLarge}) {
    min-width: ${imageDimensionsLarge};
    min-height: ${imageDimensionsLarge};
  }
`;

const Arrow = styled(ArrowBase)`
  @media (min-width: ${({ theme }) => theme.breakMedium}) {
    filter: drop-shadow(0px 6px 6px #000);
    position: absolute;
    top: 30%;
    width: 13rem;
    height: 13rem;
    fill: rgba(255, 255, 255, 0.7);
  }
  @media (min-width: ${({ theme }) => theme.breakLarge}) {
    width: 15rem;
    height: 15rem;
  }
`;

const ArrowRightSvg = styled(Arrow)`
  right: 0;
`;

const GatsbyImage = styled(Img)`
  width: ${imageDimensions};
  height: ${imageDimensions};
  img {
    margin-bottom: 0;
    width: 100%;
    height: 100%;
  }
  @media (min-width: ${({ theme }) => theme.breakMedium}) {
    width: ${imageDimensionsMedium};
    height: ${imageDimensionsMedium};
  }
  @media (min-width: ${({ theme }) => theme.breakLarge}) {
    width: ${imageDimensionsLarge};
    height: ${imageDimensionsLarge};
  }
`;

const Overlay = styled.span`
  opacity: 0;
  transition: all 600ms;
  position: absolute;
  top: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  justify-content: center;
  font-size: 1.3rem;
  span {
    color: ${({ theme }) => theme.pink};
    font-weight: bolder;
  }
  &:hover {
    opacity: 1;
  }
  @media (min-width: ${({ theme }) => theme.breakMedium}) {
    font-size: 1.5rem;
  }
  @media (min-width: ${({ theme }) => theme.breakLarge}) {
    font-size: 1.7rem;
  }
`;
//#endregion

const InstagramFeed = () => {
  //#region Queries
  const data = useStaticQuery(graphql`
    query {
      grams: allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 15) {
        edges {
          node {
            id
            caption
            timestamp
            localFile {
              childImageSharp {
                fixed(width: 350, height: 350) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  `);
  //#endregion

  const sliderRef = useRef(null);

  const moveSlider = direction => {
    switch (direction) {
      case 'left':
        sliderRef.current.scrollLeft -= 600;
        break;
      case 'right':
        sliderRef.current.scrollLeft += 600;
        break;
      default:
        break;
    }
  };

  return (
    <Instagram>
      <h3>Follow Me On Instagram</h3>
      <SwipeInfo aria-hidden="true">← Swipe →</SwipeInfo>
      <Slider>
        <div ref={sliderRef}>
          {data.grams.edges.map(
            ({ node: { id, localFile, timestamp, caption } }) => (
              <a
                href={`https://www.instagram.com/p/${id}/`}
                target="_blank"
                rel="noreferrer"
                key={timestamp}
              >
                <GatsbyImage
                  Tag="span"
                  fixed={localFile.childImageSharp.fixed}
                  loading="lazy"
                  alt={`Instagram photo by Andrea Silva Design on ${LongDateFromUnix(
                    timestamp,
                  )}`}
                />
                <Overlay>
                  {caption.substring(0, 150)}... <span>View in Instagram</span>
                </Overlay>
              </a>
            ),
          )}
          <LastSlide
            href="https://www.instagram.com/andreasilva.design"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              relativePath="social-media-instagram-icon-white.png"
              alt="Andrea Silva Design Instagram"
              transformations={transformationsFormat('w_40,h_40')}
            />
            See More
          </LastSlide>
        </div>
        <ArrowLeft onClick={moveSlider} />
        <ArrowRight onClick={moveSlider} />
      </Slider>
    </Instagram>
  );
};

const ArrowLeft = ({ onClick }) => (
  <Arrow
    onClick={() => onClick('left')}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path d="M13.7 15.3a1 1 0 0 1-1.4 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.4 1.4L10.42 12l3.3 3.3z" />
  </Arrow>
);

const ArrowRight = ({ onClick }) => (
  <ArrowRightSvg
    onClick={() => onClick('right')}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path d="M10.3 8.7a1 1 0 0 1 1.4-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4l3.29-3.3-3.3-3.3z" />
  </ArrowRightSvg>
);

const LongDateFromUnix = timestamp => {
  let date = new Date(timestamp * 1000);

  date = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return date;
};

export { InstagramFeed };
