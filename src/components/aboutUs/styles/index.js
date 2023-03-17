import { styled } from '@mui/material';

export const AboutSection = styled('section')({
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
});

export const RestaurantWrapper = styled('div')({
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '90%',

  textAlign: 'left',
  display: 'flex',
});

export const H1About = styled('h1')({
  fontWeight: '900',
  fontSize: '32px',
  letterSpacing: '3px',
  color: '#e96a43',
});

export const Description = styled('p')({
  marginTop: '50px',
  fontSize: '20px',
});

export const LineDescription = styled('div')({
  borderBottom: '6px solid #e96a43',
  marginTop: '30px',
  width: '40%',
});

export const AboutInfo = styled('div')({
  width: '45%',
});

export const ReviewWrapper = styled('div')({
  width: '60%',
});

export const StyledImgAbout = styled('img')({
  width: '70%',
  position: 'relative',
  left: '16em',
  borderRadius: '85px',
  ':nth-of-type(1)': {
    width: '42%',
    left: '28em',
    zIndex: '2',
    border: '5px solid white',
    boxShadow: '2px -2px 10px black',
  },
  ':nth-of-type(2)': {
    width: '70%',
    left: '10em',
    top: '-10em',
    boxShadow: '2px 2px 12px black',
  },
});

export const ImgRestaurant = styled('img')({
  position: 'absolute',
  width: '35%',
  marginTop: '17px',
  height: '225px',
  objectFit: 'cover',
  filter: 'brightness(75%)',
  borderRadius: '25px',
});

export const ButtonAbout = styled('button')({
  padding: '12px',
  fontWeight: '800',
  border: 'none',
  borderRadius: '10px',
  background: '#ed4f24',
  position: 'relative',
  top: '10px',
  color: 'white',
  '&:hover': {
    background: '#e96a43',
    transition: '.4s',
    cursor: 'pointer',
  },
});
