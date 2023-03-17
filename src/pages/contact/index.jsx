import React from 'react';
import QuickContact from '../../components/quickContact';
import {
  ContactHero,
  InfoHero,
  WrapperHero,
  ContentHero,
  StyledH1,
  Contactsection,
} from './styles/index';
import ContactForm from '../../components/ContactForm/index';

function Contact() {
  return (
    <main>
      <ContactHero>
        <InfoHero>
          <ContentHero>
            <StyledH1>Skontaktuj się</StyledH1>
            <p>
              napisz do nas wiadomość w kontakcie, chętnie udzielimy ci
              odpowiedzi
            </p>
          </ContentHero>
        </InfoHero>
      </ContactHero>
      <QuickContact />
      <Contactsection>
        <ContactForm />
      </Contactsection>
    </main>
  );
}

export default Contact;
