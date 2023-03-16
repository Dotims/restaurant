import { styled } from '@mui/material';

export const AboutHero = styled('section')({
  height: '45vh',
  backgroundImage: 'url(./images/bgAbout.jpg)',
  backgroundPosition: 'center center',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
});

export const ContainerHero = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '55%',
  height: '100%',
});

export const WrapperHero = styled('div')({
  color: 'white',
});

export const StyledH1 = styled('h1')({
  color: '#e96a43',
  textAlign: 'left',
  fontWeight: '900',
});

export const MainContent = styled('main')({
  width: '100%',
});

export const TeamWrapper = styled('div')({
  width: '100%',
});
