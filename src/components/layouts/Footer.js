import React from 'react';
import styled from 'styled-components';

import { Image } from '~helpers/Image';
import { transformationsFormat } from '~utils';

//#region Styles
const FooterTag = styled.footer`
  grid-row: 3 / -1;
  background: ${({ theme }) => theme.colors.gray};
  height: 13rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 1.6rem;
  img {
    margin: 0 0.2rem 0 0.2rem;
    width: 2.5rem;
  }
  p {
    margin: 0;
    padding: 0;
  }
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    height: 17rem;
    font-size: inherit;
    img {
      margin: 0 0.5rem 0 0.5rem;
      width: 3.5rem;
    }
  }
`;
//#endregion

const Footer = () => {
  return (
    <FooterTag>
      <div>
        <a
          href="https://www.facebook.com/andreasilva.design"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            relativePath="social-media-facebook-icon.png"
            alt="Andrea Silva Design Facebook"
            title="Andrea Silva Design Facebook"
            transformations={transformationsFormat('w_40,h_40')}
          />
        </a>
        <a
          href="https://www.instagram.com/andreasilva.design"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            relativePath="social-media-instagram-icon.png"
            alt="Andrea Silva Design Instagram"
            title="Andrea Silva Design Instagram"
            transformations={transformationsFormat('w_40,h_40')}
          />
        </a>
      </div>
      <p>andreasilva.design@outlook.com</p>
    </FooterTag>
  );
};

export { Footer };
