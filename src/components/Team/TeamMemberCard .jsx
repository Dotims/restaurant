import React from 'react';
import {
  TeamImg,
  TeamContent,
  SingleCardsTeam,
  ImagePerson,
  UnderLineTeam,
  StyledSocials,
  StyledName,
} from './styles/index';
import TeamData from './TeamData';

const TeamMemberCard = () => {
  return TeamData.map((singlePerson) => {
    const { id, image, name, profession, socials } = singlePerson;
    return (
      <SingleCardsTeam key={id}>
        <TeamImg>
          <ImagePerson src={image} alt={name} />
        </TeamImg>
        <TeamContent>
          <StyledName>{name}</StyledName>
          <p>{profession}</p>
          <UnderLineTeam></UnderLineTeam>
          <StyledSocials>{socials}</StyledSocials>
        </TeamContent>
      </SingleCardsTeam>
    );
  });
};

export default TeamMemberCard;
