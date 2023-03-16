import React from 'react';
import {
  DescTeamSection,
  DescTeamwrapper,
  StyledH2,
  ImageDesc,
} from './styles/index';

const TeamDesc = () => {
  return (
    <DescTeamSection>
      <DescTeamwrapper>
        <div>
          <StyledH2>Nasi specjaliści</StyledH2>
        </div>
        <p>
          Nasz zespół to grupa pasjonatów gastronomii, którzy od lat pracują w
          branży kulinarnej i hotelarskiej. Każdy z nas ma wiedzę i
          doświadczenie, które umożliwia nam tworzenie wyjątkowych doznań
          smakowych dla naszych gości. Stawiamy na jakość i świeżość składników,
          dzięki czemu nasze dania zawsze są aromatyczne i pełne smaku. Nasza
          praca opiera się na pasji i zadowoleniu naszych klientów, dlatego
          zawsze staramy się sprostać ich oczekiwaniom. Nasz zespół tworzy
          przyjazną atmosferę w naszej restauracji, dzięki której nasi goście
          czują się wyjątkowo mile widziani i docenieni.
        </p>
      </DescTeamwrapper>
      <ImageDesc />
    </DescTeamSection>
  );
};

export default TeamDesc;
