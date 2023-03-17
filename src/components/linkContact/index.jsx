import React from 'react';
import { ContactButton, LinkSection } from './styles/index';
import { Link } from 'react-router-dom';

const LinkCantact = () => {
  return (
    <LinkSection>
      <h2>Masz Pytanie?</h2>
      <p>
        napisz do nas wiadomość w kontakcie, chętnie udzielimy ci odpowiedzi
      </p>
      <Link to='/kontakt'>
        <ContactButton>Skontaktuj się</ContactButton>
      </Link>
    </LinkSection>
  );
};

export default LinkCantact;
