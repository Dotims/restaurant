import React from 'react';
import {
  AboutSection,
  RestaurantWrapper,
  AboutInfo,
  H1About,
  StyledImgAbout,
  StyledImageBox,
  Description,
  LineDescription,
  ReviewWrapper,
  ImgRestaurant,
  ButtonAbout,
} from './styles/index';
// import about from '../../images/about.jpg';
// import aboutS from '../../images/about2.jpg';
import restaurant from '../../images/restaurant.jpg';
import Reviews from './reviews';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <AboutSection>
      <RestaurantWrapper>
        <AboutInfo>
          <H1About>O restauracji</H1About>
          <Description>
            Jesteśmy restauracją działającą od pięciu lat, która od samego
            początku stawia na jakość i zadowolenie klientów. Nasza kuchnia
            opiera się na świeżych składnikach i autorskich przepisach, co
            gwarantuje wyjątkowy smak każdej potrawy. Doświadczenie zdobyte
            przez lata pracy pozwala nam na stałe podnoszenie jakości naszych
            usług oraz wprowadzanie nowych, ciekawych smaków. Zapraszamy do
            odwiedzenia naszej restauracji i delektowania się naszymi daniami,
            które na pewno zostaną na długo w Państwa pamięci.
          </Description>
          <Link to='/onas'>
            <ButtonAbout>Zobacz Więcej!</ButtonAbout>
          </Link>
          <LineDescription>
            <ImgRestaurant src={restaurant} />
          </LineDescription>
        </AboutInfo>
        <ReviewWrapper>
          <Reviews />
        </ReviewWrapper>
      </RestaurantWrapper>
      {/* <StyledImageBox>
          <StyledImgAbout src={about} />
          <StyledImgAbout src={aboutS} />
        </StyledImageBox> */}
    </AboutSection>
  );
};

export default AboutUs;
