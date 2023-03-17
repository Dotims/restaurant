import { React, useState, useEffect } from 'react';
import {
  StyledHeader,
  StyledNav,
  StyledNavLi,
  StyledNavA,
  StyledLogo,
  StyledLogoImg,
  StyledLink,
  StyledHamburger,
  StyledNavMobile,
} from './styles';
import Logo from '../../images/logo.svg';
import './styles/style.css';
import Hamburger from 'hamburger-react';

const Header = () => {
  const [fixed, setIsFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StyledHeader className={fixed ? 'Fixed' : ''}>
      <StyledLogo>
        <StyledLink to='/'>
          <StyledLogoImg src={Logo} />
        </StyledLink>
      </StyledLogo>
      {/* <StyledHamburger toggled={isOpen} toggle={setIsOpen} /> */}
      <StyledNav isOpen={isOpen}>
        <StyledNavLi>
          <StyledLink to='/'>Główna</StyledLink>
        </StyledNavLi>
        <StyledNavLi>
          <StyledLink to='Onas'>o nas</StyledLink>
        </StyledNavLi>
        <StyledNavLi>
          <StyledLink to='/Menu'>Menu</StyledLink>
        </StyledNavLi>
        <StyledNavLi>
          <StyledLink to='/kontakt'>Kontakt</StyledLink>
        </StyledNavLi>
      </StyledNav>

      <StyledNavMobile sOpen={isOpen}>
        <StyledNavLi>
          <StyledLink to='/'>Główna</StyledLink>
        </StyledNavLi>
        <StyledNavLi>
          <StyledLink to='Onas'>o nas</StyledLink>
        </StyledNavLi>
        <StyledNavLi>
          <StyledLink to='/Menu'>Menu</StyledLink>
        </StyledNavLi>
        <StyledNavLi>
          <StyledLink to='/kontakt'>Kontakt</StyledLink>
        </StyledNavLi>
      </StyledNavMobile>
    </StyledHeader>
  );
};

export default Header;
