import React from 'react';

// Components
import Section from '../../shared/components/Section';
import Topics from '../../shared/components/Topics';

const courses = [
  'Pluralsight Using React Hooks: https://app.pluralsight.com/library/courses/using-react-hooks/table-of-contents',
  "Pluralsight THAT Conference '19: A Hike through Hooks and Suspense in React: https://app.pluralsight.com/library/courses/that-conference-2019-session-68/table-of-contents",
  'Rocketseat: https://rocketseat.com.br/',
];

const articles = [
  'Documentation: https://reactjs.org/docs/hooks-intro.html',
  'React Hooks CheatSheet: https://react-hooks-cheatsheet.com',
  'React Hooks: Why We should Embrace it: https://medium.com/@jackyef/react-hooks-why-we-should-embrace-it-86e408663ad6',
];

const References = () => (
  <Section id="references" title="Referências">
    <Topics title="Cursos" topics={courses} />
    <Topics title="Artigos" topics={articles} />
  </Section>
);

export default References;
