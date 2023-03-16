import {
  StyledCiFacebook,
  StyledAiOutlineInstagram,
  StyledFiTwitter,
  StyledFaLinkedinIn,
} from './styles/index';

const TeamData = [
  {
    id: 1,
    image: './images/personTeam1.jpg',
    name: 'Stefan Avocado',
    profession: 'Kucharz',
    socials: [
      <StyledCiFacebook key={1} />,
      <StyledAiOutlineInstagram key={2} />,
      <StyledFiTwitter key={3} />,
      <StyledFaLinkedinIn key={4} />,
    ],
  },
  {
    id: 2,
    image: './images/personTeam2.jpg',
    name: 'John Center',
    profession: 'Kelner',
    socials: [
      <StyledCiFacebook key={1} />,
      <StyledAiOutlineInstagram key={2} />,
      <StyledFiTwitter key={3} />,
      <StyledFaLinkedinIn key={4} />,
    ],
  },
  {
    id: 3,
    image: './images/personTeam3.jpg',
    name: 'John Center',
    profession: 'Kucharz',
    socials: [
      <StyledCiFacebook key={1} />,
      <StyledAiOutlineInstagram key={2} />,
      <StyledFiTwitter key={3} />,
      <StyledFaLinkedinIn key={4} />,
    ],
  },
  {
    id: 4,
    image: './images/personTeam4.jpg',
    name: 'John Center',
    profession: 'Kelner',
    socials: [
      <StyledCiFacebook key={1} />,
      <StyledAiOutlineInstagram key={2} />,
      <StyledFiTwitter key={3} />,
      <StyledFaLinkedinIn key={4} />,
    ],
  },
  // {
  //   id: 5,
  //   image: './images/personTeam5.jpg',
  //   name: 'John Center',
  //   profession: 'Kelner',
  // },
  // {
  //   id: 6,
  //   image: './images/personTeam6.jpg',
  //   name: 'John Center',
  //   profession: 'Kelner',
  // },
];

export default TeamData;
