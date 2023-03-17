import { styled } from '@mui/material';

export const LinkSection = styled('section')({
  minHeight: '30vh',
});
export const ContactButton = styled('button')({
  padding: '25px 100px',
  border: 'none',
  fontSize: '19px',
  boxShadow: '2px 2px 10px #95a5a6',
  borderRadius: '10px',
  transition: '.6s',
  '&:hover': {
    cursor: 'pointer',
    background: '#bdc3c7',
  },
});
