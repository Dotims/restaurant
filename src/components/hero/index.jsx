import { React } from 'react';
import HeroImg from '../../images/hero.jpg';
import './styles/style.css';
import {
  StyledImgHero,
  SectionHero,
  HeroWrapper,
  H1Hero,
  H3SubTitle,
  SpanHero,
} from './styles/index';

const Hero = () => {
  return (
    <SectionHero className='hero-container'>
      <div className='styledBg'></div>
      <HeroWrapper>
        <H1Hero>
          Witamy w <SpanHero>Smako</SpanHero>Sferze!
        </H1Hero>

        <H3SubTitle>Najczęściej wybierana restauracja 😋😀</H3SubTitle>
      </HeroWrapper>
    </SectionHero>
  );
};

export default Hero;
