import React from 'react';
import styled from 'styled-components';

import { useVideoAutoPlayback } from '~src/hooks/useVideoAutoPlayback';
import { Video } from '~helpers/Video';
import { transformationsFormat } from '~utils/index';

//#region Styles
const Content = styled.section`
  position: relative;
  video {
    width: 100%;
    margin-bottom: -0.6rem;
  }
`;

const Statement = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 400;
  font-style: italic;
  span {
    font-size: calc(${({ theme }) => theme.fonts.small} + 1rem);
    display: block;
    text-align: center;
    text-shadow: ${({ theme }) => theme.fonts.textShadow};
    margin: 0 1rem;
  }
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    span {
      font-size: calc(${({ theme }) => theme.fonts.medium} + 2.5rem);
      margin: 0 7rem;
    }
  }
  @media (min-width: ${({ theme }) => theme.media.large}) {
    span {
      font-size: calc(${({ theme }) => theme.fonts.large} + 2.8rem);
      margin: 0 10rem;
    }
  }
`;
//#endregion

const ArtistStatement = () => {
  const [containerRef, videoRef] = useVideoAutoPlayback({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });

  return (
    <Content ref={containerRef}>
      <Video
        relativePath="andrea-silva-design-intro-video-cover.jpg|andrea-silva-design-intro-video.mp4"
        showNoSupport={false}
        transformations={transformationsFormat('q_auto:good')}
        attributes={{
          playsInline: true,
          muted: true,
          loop: true,
          ref: videoRef,
        }}
      />
      <Statement>
        <span>
          "As a graphic designer, illustrator and artist I believe in the power
          of beautiful images to tell a story."
        </span>
      </Statement>
    </Content>
  );
};

export { ArtistStatement };
