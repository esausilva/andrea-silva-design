import React, { useState } from 'react';
import styled from 'styled-components';

import { Image } from '~helpers/Image';
import { transformationsFormat } from '~utils/index';

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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    grid-template-columns: 350px 1fr;
    padding: 4rem 2rem;
    img {
      width: 30rem;
    }
    div {
      align-items: start;
    }
  }
  @media (min-width: ${({ theme }) => theme.media.large}) {
    grid-template-columns: 550px 1fr;
    img {
      width: 40rem;
    }
  }
`;

const ReadMoreBlock = styled.div`
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? '1500px' : '0')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: opacity 1500ms, max-height 1500ms;
`;

const ReadMoreLink = styled.button`
  background: none;
  border: none;
  font-weight: bolder;
  font-size: calc(${({ theme }) => theme.fonts.small} - 0.3rem);
  color: ${({ theme }) => theme.colors.pink};
  cursor: pointer;
  &:after {
    font-size: calc(${({ theme }) => theme.fonts.small} - 0.4rem);
    font-weight: bolder;
    display: inline-block;
    margin-left: 0.2rem;
    transition: ${({ theme }) => theme.animations.transform500ms};
    color: ${({ theme }) => theme.colors.pink};
  }
  ${({ isOpen }) =>
    isOpen
      ? '&:after{content: "▲";}'
      : '&:after{content: "▲";transform: rotate(180deg);}'};
  &:focus {
    outline: none;
  }
  &:hover {
    text-decoration: underline;
  }
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    font-size: calc(${({ theme }) => theme.fonts.medium} - 0.3rem);
    &:after {
      font-size: calc(${({ theme }) => theme.fonts.small} - 0.3rem);
    }
  }
  @media (min-width: ${({ theme }) => theme.media.large}) {
    font-size: calc(${({ theme }) => theme.fonts.large} - 0.3rem);
  }
`;
//#endregion ▼

const About = () => {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => setIsReadMore(!isReadMore);

  return (
    <AboutMe id="nav-about">
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
        <ReadMoreBlock isOpen={isReadMore}>
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
          <p>
            When I'm not behind my computer or at my easel creating you might
            find me outdoors exploring with my dear husband of 4 plus years and
            my toddler. Life with them is full and rewarding. As a foodie and
            health nut, in addition you might find me whipping up something
            tasty and healthy in the kitchen. I also will take any opportunity
            to travel and have enjoyed trips to Europe, the Bahamas, and across
            the U.S.
          </p>
          <p>
            Though I love being an artist and graphic designer, my true identity
            lies in my relationship with Jesus Christ and learning to follow
            Him. Any skills I possess, I realize come from Him alone.
          </p>
          <p>
            Thanks for taking the time to stop by my website! It would be an
            honor to work with you on your next project whether you need a
            design for print, motion graphics for a website or logo animation,
            or personalized artwork to give as a gift or keepsake. Let me know
            how I can serve you!
          </p>
        </ReadMoreBlock>
        <ReadMoreLink
          type="button"
          aria-hidden="true"
          onClick={toggleReadMore}
          isOpen={isReadMore}
        >
          Read {isReadMore ? 'Less' : 'More'}
        </ReadMoreLink>
      </div>
    </AboutMe>
  );
};

export { About };
