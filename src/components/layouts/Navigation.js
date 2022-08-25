import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import navigationData from '~content/navigation.json';
import { Image } from '~helpers/Image';
import { NavigationLink } from '~helpers/NavigationLink';
import { transformationsFormat } from '~utils/index';

//#region Styles
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: ${({ theme }) => theme.nav.small};
  align-items: center;
  font-weight: 400;
  z-index: 2;
  position: relative;
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    height: ${({ theme }) => theme.nav.medium};
  }
  @media (min-width: ${({ theme }) => theme.media.large}) {
    height: ${({ theme }) => theme.nav.large};
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
  a {
    color: #000;
  }
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    img {
      height: 12rem;
      min-width: 84px;
      margin: 0 1em 0 2em;
    }
    span {
      display: inline-block;
      font-size: 4rem;
      line-height: 3.8rem;
    }
  }
  @media (min-width: ${({ theme }) => theme.media.large}) {
    img {
      height: 17rem;
      min-width: 116px;
      margin: 0 1em 0 3em;
    }
    span {
      font-size: 5rem;
    }
  }
`;

const MobileTitle = styled.span`
  font-size: 3.4rem;
  text-align: center;
  line-height: 3rem;
  color: #000;
  @media (min-width: ${({ theme }) => theme.media.medium}) {
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
  box-shadow: ${({ isMenuOpen }) =>
    isMenuOpen ? '0 0.1rem 3rem hsla(0, 0%, 0%, 0.7)' : 'none'};
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    position: initial;
    width: initial;
    box-shadow: none;
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
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    display: none;
  }
`;

const CloseMenu = styled.button`
  border: 0;
  background: none;
  color: ${({ theme }) => theme.colors.pink};
  font-size: 5rem;
  cursor: pointer;
  padding: 0;
  margin: -1rem 0 0 1rem;
  position: absolute;
  display: inline-block;
  @media (min-width: ${({ theme }) => theme.media.medium}) {
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
  li {
    list-style-type: none;
    font-size: 4.5rem;
    cursor: pointer;
    a {
      color: #000;
      font-weight: 200;
    }
    &:last-child {
      img {
        margin: 0 0.5rem 0 0.5rem;
      }
    }
  }
  @media (min-width: ${({ theme }) => theme.media.medium}) {
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
        color: ${({ theme }) => theme.colors.pink};
        text-decoration: none;
        text-shadow: 1px 1px 5px rgba(51, 51, 51, 0.2);
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
  @media (min-width: ${({ theme }) => theme.media.large}) {
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
        <Link aria-label="Navigate To Home" name="Navigate To Home" to="/">
          <Image
            relativePath="andrea-silva-design-logo-black.png"
            alt="Andrea Silva Design Logo"
            title="Andrea Silva Design Logo | Back to Home"
            transformations={transformationsFormat('h_180')}
          />
        </Link>
        <Link aria-label="Navigate To Home" name="Navigate To Home" to="/">
          <span>Andrea Silva Design</span>
        </Link>
      </NavBrand>
      <MobileTitle>Andrea Silva</MobileTitle>
      <Hamburger
        aria-label="Open Navigation"
        name="Open Navigation"
        onClick={toggleMenu}
      >
        &#9776;
      </Hamburger>
      <MenuWrapper isMenuOpen={isMenuOpen}>
        <CloseMenu
          aria-label="Close Navigation"
          name="Close Navigation"
          onClick={toggleMenu}
        >
          &times;
        </CloseMenu>
        <NavMenu>
          {navigationData.internal?.map(({ linkTo, text, isSamePage }) => (
            <li key={linkTo}>
              <NavigationLink
                linkTo={linkTo}
                text={text}
                isSamePage={isSamePage}
                setIsMenuOpen={setIsMenuOpen}
              />
            </li>
          ))}
          <li>
            {navigationData.social?.map(({ href, image, alt }) => (
              <a target="_blank" rel="noreferrer" href={href} key={image}>
                <Image
                  relativePath={image}
                  alt={alt}
                  title={alt}
                  transformations={transformationsFormat('w_40,h_40')}
                />
              </a>
            ))}
          </li>
        </NavMenu>
      </MenuWrapper>
    </Nav>
  );
};

export { Navigation };
