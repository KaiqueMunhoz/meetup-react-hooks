import React from 'react';

// Components
import Section from '../../shared/components/Section';
import Subtitle from '../../shared/components/Subtitle';
import Topics from '../../shared/components/Topics';

const courses = [];

const articles = ['React Hooks CheatSheet: https://react-hooks-cheatsheet.com'];

const References = () => (
  <Section id="references" title="Referências">
    <Topics title="Cursos" topics={courses} />
    <Topics title="Artigos" topics={articles} />
  </Section>
);

export default References;
