import React from 'react';
import {
  Styledfooter,
  LogoImg,
  FooterSocials,
  StyledFacebook,
  StyledTwitter,
  StyledInstagram,
  StyledYoutube,
  StyledTelegram,
  StyledP,
  StyledRight,
  Styledinfo,
  StyledSpan,
  ColorLogo,
} from './styles/index';
import Logo from '../../images/logo.svg';

const Footer = () => {
  return (
    <Styledfooter>
      <FooterSocials>
        <StyledFacebook />
        <StyledTwitter />
        <StyledInstagram />
        <StyledYoutube />
        <StyledTelegram />
      </FooterSocials>
      <LogoImg src={Logo} alt='' />
      <StyledRight>
        <Styledinfo>
          <StyledSpan>Restauracja SmakoSfera</StyledSpan>
          <StyledSpan>Rzeszów Jana III Sobieskiego</StyledSpan>
          <StyledSpan>+48 304 302</StyledSpan>
        </Styledinfo>
        <StyledP>
          Wszystkie prawa zastrzeżone 2023 © - Smako
          <ColorLogo>Sfera</ColorLogo>
        </StyledP>
      </StyledRight>
    </Styledfooter>
  );
};

export default Footer;
