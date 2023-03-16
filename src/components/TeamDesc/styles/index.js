import { styled } from '@mui/material';

export const DescTeamSection = styled('section')({
  width: '80%',
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
  minHeight: '40vh',
});

export const DescTeamwrapper = styled('div')({
  width: '50%',
  textAlign: 'left',
});

export const StyledH2 = styled('h2')({
  color: 'var(--mainColor)',
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'flex-start',
  marginBottom: '.6em',
});

export const ImageDesc = styled('div')({
  backgroundImage: 'url(./images/OurTeam.jpg)',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  position: 'relative',
  top: '-4em',
  width: '50%',
});
