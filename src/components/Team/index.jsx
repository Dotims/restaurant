import React from 'react';
import {
  TeamContainer,
  HeadingTeam,
  StyledH1,
  OurTeamWrapper,
  TeamWrapper,
  TeamSection,
} from './styles/index';
import TeamMemberCard from './TeamMemberCard ';

const Team = () => {
  return (
    <TeamSection>
      <TeamContainer>
        <TeamWrapper>
          <HeadingTeam>
            <StyledH1>Nasz zespół</StyledH1>
            <p>
              Tak prezentuje się nasz zespół, Ludzi którzy są gotowi zapewnić
              naszym gościom wyjątkowe doświadczenie kulinarne.
            </p>
          </HeadingTeam>
          <OurTeamWrapper>
            <TeamMemberCard />
          </OurTeamWrapper>
        </TeamWrapper>
      </TeamContainer>
    </TeamSection>
  );
};

export default Team;
