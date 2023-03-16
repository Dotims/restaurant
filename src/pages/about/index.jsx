import React from 'react';
import {
  AboutHero,
  WrapperHero,
  ContainerHero,
  StyledH1,
  MainContent,
  TeamWrapper,
} from './styles/index';
import Team from '../../components/Team/index';

function About() {
  return (
    <section>
      <AboutHero className='hero'>
        <ContainerHero>
          <WrapperHero>
            <StyledH1>Nasz Zespół</StyledH1>
            <p>Nasza utalentowana ekipa z pasją do gotowania i obsługi gości</p>
          </WrapperHero>
        </ContainerHero>
      </AboutHero>
      <MainContent>
        <Team />
      </MainContent>
    </section>
  );
}

export default About;
