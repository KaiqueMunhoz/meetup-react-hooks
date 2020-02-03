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
    subtitle: '',
    description: '',
  },
  {
    title: 'Performace',
    subtitle: '',
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
    <Motivation />
  </Section>
);

export default Motivations;
