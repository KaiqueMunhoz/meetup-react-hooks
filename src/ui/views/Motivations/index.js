import React from 'react';

// Components
import Section from '../../shared/components/Section';
import Motivation from './Motivation';

const motivations = [
  {
    title: 'Complexidade',
    subtitle: 'Dificuldade em entender o código',
    description: '',
  },
  {
    title: 'Reuso',
    subtitle: 'Menos HOC\'s e WrapperHell',
    description: '',
  },
  {
    title: 'Performace',
    subtitle: 'useMemo | useCallback | funcional components',
    description: '',
  },
];

const Motivations = () => (
  <Section id="motivations" title="Motivação">
    {motivations &&
      motivations.map(motivation => {
        const { title, subtitle, description } = motivation;
        return (
          <Motivation
            title={title}
            subtitle={subtitle}
            description={description}
          />
        );
      })}
  </Section>
);

export default Motivations;
