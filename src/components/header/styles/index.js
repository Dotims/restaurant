import { styled } from '@mui/material';
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react';

export const StyledHeader = styled('header')({
  position: 'fixed',
  right: '0',
  top: '0',
  display: 'flex',
  width: '100%',
  height: '100px',
  transition: '0.3s ease-in-out',
  justifyContent: 'space-around',
  zIndex: '9999',
});

export const StyledNav = styled('nav')({
  // display: 'none',
  display: 'flex',
  width: '30%',
  listStyle: 'none',
  height: '100%',
  '@media (min-width: 720px)': {
    display: 'flex',
  },
});

export const StyledNavMobile = styled('nav')({
  display: 'none',
  width: '30%',
  listStyle: 'none',
  height: '100%',
  '@media (min-width: 720px)': {},
});

export const StyledNavLi = styled('li')({
  display: 'flex',
  width: '100%',
  textDecoration: 'none',
  alignItems: 'center',
});

export const StyledLink = styled(Link)({
  display: 'flex',
  fontWeight: '700',
  textDecoration: 'none',
  color: 'white',
  justifyContent: 'center',
  ':hover': {
    color: '#e96a43',
    transition: '0.4s',
    fontWeight: '700',
  },
});

export const StyledLogo = styled('div')({
  display: 'flex',
  width: '30%',
});

export const StyledLogoImg = styled('img')({
  width: '175px',
});

export const StyledHamburger = styled(Hamburger)({
  color: 'white',
  '@media (min-width: 320px)': {
    display: 'block',
  },
  '@media (min-width: 720px)': {
    display: 'none',
  },
});

export const StyledSubNav = styled('div')({
  display: 'flex',
  width: '100%',
  height: '50px',
  backgroundColor: '#333',
  justifyContent: 'center',
  position: 'fixed',
  top: '100px',
  left: '0',
  zIndex: '9999',
  '@media (min-width: 640px)': {
    display: 'none',
  },
});

export const StyledSubNavUl = styled('ul')({
  display: 'flex',
  width: '100%',
  height: '100%',
  listStyle: 'none',
  justifyContent: 'space-around',
  alignItems: 'center',
});

export const StyledSubNavLi = styled('li')({
  display: 'flex',
  width: '100%',
  height: '100%',
});

export const StyledSubNavA = styled(Link)({
  display: 'flex',
  width: '100%',
  height: '100%',
  color: 'white',
  fontWeight: '700',
  textDecoration: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  ':hover': {
    color: '#e96a43',
    transition: '0.4s',
    fontWeight: '700',
  },
});

export const StyledSidebar = styled('nav')({
  position: 'fixed',
  top: '100px',
  left: '-100%',
  width: '50%',
  height: 'calc(100vh - 100px)',
  backgroundColor: '#333',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  transition: '0.3s ease-in-out',
});
