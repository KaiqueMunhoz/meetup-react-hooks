import React from 'react';
import Section from '../../shared/components/Section';
import SubSection from '../../shared/components/SubSection';

const topics = [
  {
    subtitle: 'O que é React Hooks?',
    description:
      'Uma forma de utilizar estado e métodos do ciclo de vida React...\n"dentro de componentes funcionais"\n\nVersão do React onde Hooks está disponível (16.8.0)',
  },
  {
    subtitle: 'Pré Requisitos',
    description: 'Conhecer biblioteca React\nEntender sobre o ciclo de vida',
  },
  {
    subtitle: 'Perguntas frequentes',
    description:
      'React deixará de utilizar classes?\nDevo adotar hooks agora no meu projeto?',
  },
];

const Introduction = () => (
  <Section id="introduction" title="Introdução">
    {topics &&
      topics.map(topic => {
        const { title, subtitle, description } = topic;
        return (
          <SubSection
            key={title + subtitle + description}
            title={title}
            subtitle={subtitle}
            description={description}
          />
        );
      })}
  </Section>
);

export default Introduction;
