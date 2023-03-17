import { styled } from '@mui/material';
import { FaFacebook, FaTelegram } from 'react-icons/fa';
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
} from 'react-icons/ai';

export const Styledfooter = styled('footer')({
  width: '100%',
  minHeight: '35vh',
  background: '#2c2c2c',
});

export const LogoImg = styled('img')({
  width: '18em',
  margin: '2em',
});

export const FooterSocials = styled('div')({
  width: '100%',
  fontSize: '2.5em',
  minHeight: '18vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '.7em',
});

const StylesSocials = {
  color: 'white',
  '&:hover': {
    color: 'var(--mainColor)',
    cursor: 'pointer',
    transition: '.3s',
  },
};

export const StyledFacebook = styled(FaFacebook)(StylesSocials);
export const StyledTwitter = styled(AiFillTwitterCircle)(StylesSocials);
export const StyledInstagram = styled(AiFillInstagram)(StylesSocials);
export const StyledYoutube = styled(AiFillYoutube)(StylesSocials);
export const StyledTelegram = styled(FaTelegram)(StylesSocials);

export const StyledRight = styled('div')({
  width: '100%',
  display: 'block',
});

export const StyledP = styled('p')({
  width: '100%',
  fontSize: '18px',
  color: 'white',
  marginBottom: '0px',
});

export const StyledSpan = styled('span')({
  paddingLeft: '25px',
  paddingRight: '25px',
  ':nth-of-type(2)': {
    borderRight: '2px solid var(--mainColor)',
    borderLeft: '2px solid var(--mainColor)',
  },
});

export const Styledinfo = styled('div')({
  marginLeft: 'auto',
  marginRight: 'auto',
  height: '50px',
  width: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  fontSize: '18px',
  color: 'white',
  marginBottom: '0px',
});

export const ColorLogo = styled('span')({
  color: 'var(--mainColor)',
});
