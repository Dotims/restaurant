import { styled } from '@mui/material';

export const ContactHero = styled('section')({
  height: '45vh',
  backgroundImage: 'url(./images/bgAbout.jpg)',
  backgroundPosition: 'center center',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
});

export const InfoHero = styled('div')({
  width: '60%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const WrapperHero = styled('div')({
  color: 'white',
  textAlign: 'left',
});

export const ContentHero = styled('div')({
  color: 'white',
  display: 'block',
});

export const StyledH1 = styled('h1')({
  color: '#e96a43',
});

export const Contactsection = styled('section')({
  color: '#e96a43',
  minHeight: '60vh',
});
