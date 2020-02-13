import React from 'react';
import Section from '../../shared/components/Section';
import SubSection from '../../shared/components/SubSection';

const whatIsIt = [
  {
    subtitle: "Uma forma de utilizar estado e métodos do ciclo de vida React...\n\"dentro de componentes funcionais\"",
  },
];

const AboutHooks = () => (
  <Section id="aboutHooks" title="O que é React Hooks?">
    {whatIsIt &&
      whatIsIt.map(item => {
        const { title, subtitle, description } = item;
        return (
          <SubSection
            title={title}
            subtitle={subtitle}
            description={description}
          />
        );
      })}
  </Section>
);

export default AboutHooks;
