import React, { useState } from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styled from 'styled-components';

import { Image } from './helpers/Image';
import { transformationsFormat } from '../utils';

//#region Styles
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: ${({ theme }) => theme.navHeight};
  align-items: center;
  font-weight: 400;
  z-index: 2;
  @media (min-width: ${({ theme }) => theme.breakMedium}) {
    height: ${({ theme }) => theme.navHeightMedium};
  }
  @media (min-width: ${({ theme }) => theme.breakLarge}) {
    height: ${({ theme }) => theme.navHeightLarge};
  }
`;

const NavBrand = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 7rem;
    margin: 0 0.5em 0 0.8em;
  }
  span {
    display: none;
  }
  @media (min-width: ${({ theme }) => theme.breakMedium}) {
    img {
      height: 12rem;
      margin: 0 1em 0 2em;
    }
    span {
      display: inline-block;
      font-size: 4rem;
      line-height: 3.8rem;
    }
  }
  @media (min-width: ${({ theme }) => theme.breakLarge}) {
    img {
      height: 17rem;
      margin: 0 1em 0 3em;
    }
    span {
      font-size: 5rem;
    }
  }
`;

const MobileTitle = styled.span`
  font-size: 2.6rem;
  text-align: center;
  line-height: 2.8rem;
  @media (min-width: ${({ theme }) => theme.breakMedium}) {
    display: none;
  }
`;

const MenuWrapper = styled.div`
  position: fixed;
  background: #fff;
  width: 85%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 100%;
  transform: ${({ isMenuOpen }) =>
    isMenuOpen ? 'translateX(-100%)' : 'translateX(0)'};
  transition: transform 250ms;
  @media (min-width: ${({ theme }) => theme.breakMedium}) {
    position: initial;
    width: initial;
  }
`;

const Hamburger = styled.button`
  border: 0;
  background: 0;
  color: #000;
  cursor: pointer;
  padding: 0.5em;
  font-size: 2em;
  display: inline-block;
  @media (min-width: ${({ theme }) => theme.breakMedium}) {
    display: none;
  }
`;

const CloseMenu = styled.button`
  border: 0;
  background: 0;
  color: ${({ theme }) => theme.pink};
  font-size: 5rem;
  cursor: pointer;
  padding: 0;
  margin: -1rem 0 0 1rem;
  position: absolute;
  display: inline-block;
  @media (min-width: ${({ theme }) => theme.breakMedium}) {
    display: none;
  }
`;

const NavMenu = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  font-weight: 300;
  li {
    list-style-type: none;
    font-size: 4.5rem;
    cursor: pointer;
    a {
      color: #000;
    }
    &:last-child {
      img {
        margin: 0 0.5rem 0 0.5rem;
      }
    }
  }
  @media (min-width: ${({ theme }) => theme.breakMedium}) {
    flex-direction: row;
    margin: 0;
    li {
      font-size: 2.8rem;
      margin: 0 0.8rem 0 0.8rem;
      line-height: 3rem;
      a {
        padding: 0.4rem 0 0.6rem 0;
      }
      a:hover {
        color: ${({ theme }) => theme.pink};
      }
      &:after {
        display: block;
        content: '';
        border-bottom: solid 1px ${({ theme }) => theme.pink};
        transform: scaleX(0);
        transition: transform 300ms ease-in-out;
      }
      &:hover:after {
        transform: scaleX(1);
      }
      &:last-child {
        margin-right: 1rem;
        img {
          width: 2.8rem;
          &:hover {
            width: 2.9rem;
            margin: 0 0.43rem 0 0.43rem;
          }
        }
      }
      &:last-child:after {
        border-bottom: none;
      }
    }
  }
  @media (min-width: ${({ theme }) => theme.breakLarge}) {
    li {
      font-size: 3.5rem;
      margin: 0 1.5rem 0 1.5rem;
      &:last-child {
        img {
          width: 3.3rem;
          &:hover {
            width: 3.4rem;
            margin: 0 0.45rem 0 0.45rem;
          }
        }
      }
    }
  }
`;
//#endregion

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Nav>
      <NavBrand>
        <AniLink fade to="/">
          <Image
            relativePath="andrea-silva-design-logo-black.png"
            alt="Andrea Silva Design Logo"
            title="Andrea Silva Design Logo | Back to Home"
            transformations={transformationsFormat('h_180')}
          />
        </AniLink>
        <span>Andrea Silva Design</span>
      </NavBrand>
      <MobileTitle>Andrea Silva</MobileTitle>
      <Hamburger onClick={toggleMenu}>&#9776;</Hamburger>
      <MenuWrapper isMenuOpen={isMenuOpen}>
        <CloseMenu onClick={toggleMenu}>&times;</CloseMenu>
        <NavMenu>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Let's Chat</a>
          </li>
          <li>
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
          </li>
        </NavMenu>
      </MenuWrapper>
    </Nav>
  );
};

export { Navigation };
