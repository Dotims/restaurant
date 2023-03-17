import { React, useState, useEffect } from 'react';
import {
  StyledHeader,
  StyledNav,
  StyledNavLi,
  StyledNavA,
  StyledLogo,
  StyledLogoImg,
  StyledLink,
} from './styles';
import Logo from '../../images/logo.svg';
import './styles/style.css';
import Menu from '../../pages/menu/index';
// import { Link } from 'react-router-dom';

const Header = () => {
  const [fixed, setIsFixed] = useState(false);

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
      <StyledNav>
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
    </StyledHeader>
  );
};

export default Header;
