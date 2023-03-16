import { styled, createMuiTheme, ThemeProvider } from '@mui/material';
import { Link } from 'react-router-dom';

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
  display: 'flex',
  width: '30%',
  listStyle: 'none',
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
  // marginLeft: '50px',
});

export const StyledLogoImg = styled('img')({
  width: '175px',
});
