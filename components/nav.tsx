import React, { useContext } from 'react';
import Link from 'next/link';

import { NavSection, StyledHamburger } from './styles/nav.styles';
import { Container } from './container';
import SiteConfig from '../config/index.json';
import { MenuContext } from '.';

const Nav = () => {
  const menuContext = useContext(MenuContext);

  const { toggleMenuOpen, menuOpen } = menuContext;

  return (
    <NavSection>
      <Container>
        <nav className="navWrapper">
          <div className="navLeft">
            <Link href="/">
              <a className="no-underline logo">
                <span>{SiteConfig.author.name}</span>
              </a>
            </Link>
          </div>

          <div className="navRight">
            <StyledHamburger
              menuOpen={menuOpen}
              onClick={toggleMenuOpen}
            ></StyledHamburger>

            <ul className="navLinkList">
              <li className="navLinkItem">
                <Link href="/work">
                  <a>Projetos</a>
                </Link>
              </li>
              <li className="navLinkItem">
                <Link href="/about">
                  <a>Sobre</a>
                </Link>
              </li>
              <li className="navLinkItem">
                <Link href="/notes">
                  <a>Anotações</a>
                </Link>
              </li>
              <li className="navLinkItem">
                <Link href="/articles">
                  <a>Blog</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </Container>
    </NavSection>
  );
};

export default Nav;
