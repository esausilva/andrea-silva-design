import React, { useState } from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

import { Image } from './helpers/Image';
import { transformationsFormat } from '../utils';

//#region Styles
const AboutMe = styled.section`
  display: grid;
  justify-items: center;
  padding: 2rem;
  img {
    width: 15rem;
    border-radius: 50%;
  }
  div {
    text-align: center;
    p {
      text-align: left;
    }
  }
  @media (min-width: ${({ theme }) => theme.breakMedium}) {
    grid-template-columns: 350px 1fr;
    padding: 4rem 2rem;
    img {
      width: 30rem;
    }
    div {
      text-align: left;
    }
  }
  @media (min-width: ${({ theme }) => theme.breakLarge}) {
    grid-template-columns: 550px 1fr;
    img {
      width: 40rem;
    }
  }
`;

const ReadMore = styled.div`
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? '1000px' : '0')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: all 1500ms;
  @media (min-width: ${({ theme }) => theme.breakMedium}) {
    max-height: 1000px;
    opacity: 1;
  }
`;

const ReadMoreLarge = styled.div`
  @media (min-width: ${({ theme }) => theme.breakMedium}) {
    max-height: ${({ isOpen }) => (isOpen ? '1000px' : '0')};
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    transition: all 1500ms;
  }
`;

const ReadMoreButton = styled.button`
  background: #fff;
  border: 0;
  border-radius: 0.5rem;
  box-shadow: 0 0.1rem 0.3rem hsla(0, 0%, 0%, 0.3);
  cursor: pointer;
  background: ${({ theme }) => lighten(0.1, theme.pink)};
  color: #fff;
  padding: 0.5rem 1rem;
  margin-top: ${({ isOpen }) => (isOpen ? '15px' : '0')};
  transition: all 500ms;
  &:hover {
    transform: scale(1.02);
  }
  @media (min-width: ${({ theme }) => theme.breakMedium}) {
    margin: 0;
  }
`;
//#endregion

const About = () => {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => setIsReadMore(!isReadMore);

  return (
    <AboutMe>
      <Image
        relativePath="andrea-silva-portrait.jpg"
        alt="Andrea Silva Portrait"
        title="Andrea Silva Portrait"
        transformations={transformationsFormat('w_500,h_500,c_thumb,g_face')}
      />
      <div>
        <p>
          Hi! My name is Andrea Silva. I am an artist and graphic designer
          pursuing a love for art that I've had since childhood. As a native
          Kansan, I now currently reside in Nashville, Tennessee. I graduated in
          2010 with a BA in Graphic Design and minors in Painting and Music from
          Tabor College in Hillsboro, KS.
        </p>
        <ReadMore isOpen={isReadMore}>
          <p>
            While in college I worked part-time at Great Plains Christian Radio,
            KJIL, a Christian radio station covering most of Kansas and parts of
            Oklahoma, Texas and Colorado. I soon discovered a love for radio,
            which led to my accepting a full-time position there after
            graduating. I was able to work as their graphic designer in house
            for 8 years and I continue on in that role remotely. In 2016, my
            travels took me to McAllen, Texas where I spent three and a half
            years as a graphic designer and radio host at 96.9 KVMV, a Christian
            radio station covering the Rio Grande Valley and parts of Mexico.
            Though radio continues to be a big part of who I am, in 2019 I left
            my full-time position in the radio world to focus on my career as a
            graphic artist. Much of what I learned in sound design over the past
            decade has also carried over to the graphic design world,
            particularly as I continue growing my skills in motion design.
          </p>
          <ReadMoreLarge isOpen={isReadMore}>
            <p>
              When I'm not behind my computer or at my easel creating you might
              find me outdoors exploring with my dear husband of 4 plus years
              and my toddler. Life with them is full and rewarding. As a foodie
              and health nut, in addition you might find me whipping up
              something tasty and healthy in the kitchen. I also will take any
              opportunity to travel and have enjoyed trips to Europe, the
              Bahamas, and across the U.S.
            </p>
            <p>
              Though I love being an artist and graphic designer, my true
              identity lies in my relationship with Jesus Christ and learning to
              follow Him. Any skills I possess, I realize come from Him alone.
            </p>
            <p>
              Thanks for taking the time to stop by my website! It would be an
              honor to work with you on your next project whether you need a
              design for print, motion graphics for a website or logo animation,
              or personalized artwork to give as a gift or keepsake. Let me know
              how I can serve you!
            </p>
          </ReadMoreLarge>
        </ReadMore>
        <ReadMoreButton
          type="button"
          aria-hidden="true"
          onClick={toggleReadMore}
          isOpen={isReadMore}
        >
          Read {isReadMore ? 'Less' : 'More'}
        </ReadMoreButton>
      </div>
    </AboutMe>
  );
};

export { About };
