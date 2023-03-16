import { styled } from '@mui/material';
import { CiFacebook } from 'react-icons/ci';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';

export const TeamSection = styled('section')({
  marginBottom: '50em',
});

export const TeamContainer = styled('section')({
  minHeight: '45vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const TeamWrapper = styled('div')({
  display: 'block',
});

export const HeadingTeam = styled('div')({
  minHeight: '18vh',
});

export const StyledH1 = styled('h1')({
  fontSize: '4em',
  color: '#e96a43',
});

export const OurTeamWrapper = styled('div')({
  width: '100%',
  display: 'flex',
  gap: '2.5em',
});

export const TeamImg = styled('div')({
  ':bofore': {
    content: '""',
    width: '100%',
    height: '100%',
    border: '1px solid orange',
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 'inherit',
  },
});

export const TeamContent = styled('div')({
  borderRadius: '20px',
  backgroundColor: '#dfe6e9',
  textAlign: 'center',
  padding: '142px 30px 19px 30px',
  boxShadow: '0px 6px 15px rgba(1, 15, 28, 0.06)',
  position: 'relative',
  zIndex: '2',
  position: 'relative',

  '&:before, &:after': {
    content: '""',
    width: '100%',
    height: '5px',
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
    left: 0,
    transition: '0.4s ease-in-out',
    zIndex: '-1',
    borderRadius: 'inherit',
  },
  '&:before': {
    backgroundColor: '#f55f31',
  },
  '&:hover:before, &:hover:after': {
    height: '100%',
    backgroundColor: '#f55f31',
  },

  '&:after': {
    zIndex: '-2',
  },
  '&:before': {
    bottom: 'unset',
    height: '44px',
    top: '-1px',
    maxWidth: 'calc(100% - 48px)',
    left: '24px',
    backgroundColor: 'white',
    clipPath: 'polygon(50% 100%, 0 0, 100% 0)',
    borderRadius: '0',
  },
  ':hover': {
    color: 'white !important',
    transition: '.5s',
  },
});

export const SingleCardsTeam = styled('div')({
  width: '300px',
  height: '150px',
  position: 'relative',
  textAlign: 'center',
  ':before': {
    content: "''",
    width: '85%',
    height: '250px',
    border: '2px solid #e96a43',
    position: 'absolute',
    top: '0',
    left: '22px',
    borderRadius: '50%',
    zIndex: '3',
  },
});

export const ImagePerson = styled('img')({
  objectFit: 'cover',
  width: '250px',
  height: '250px',
  overflow: 'hidden',
  borderRadius: '50%',
  margin: '0 auto -114px auto',
  padding: '10px',
  position: 'relative',
  zIndex: '3',
});

export const StyledName = styled('h4')({
  textAlign: 'center',
});

export const UnderLineTeam = styled('div')({
  border: '1px dashed #b2bec3',
});

export const StyledSocials = styled('div')({
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '70%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  minHeight: '70px',
  ':hover': {
    color: 'white !important',
    transition: '.5s',
  },
});

const sharedStylesSocials = {
  fontSize: '1.5em',
};

export const StyledCiFacebook = styled(CiFacebook)(sharedStylesSocials);

export const StyledAiOutlineInstagram =
  styled(AiOutlineInstagram)(sharedStylesSocials);

export const StyledFiTwitter = styled(FiTwitter)(sharedStylesSocials);

export const StyledFaLinkedinIn = styled(FaLinkedinIn)(sharedStylesSocials);
