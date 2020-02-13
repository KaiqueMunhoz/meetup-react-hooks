import React from 'react';

// Components
import Section from '../../shared/components/Section';
import SubSection from '../../shared/components/SubSection';

const topics = [
  {
    title: 'Utilize a palavra "use"',
    subtitle: 'Cada custom hooks deve começar com a palavra "use"',
  },
  {
    title: "Pode servir para substituição de HOC's",
    subtitle:
      'Muito utilizado para centralizar lógicas similares entre componentes',
  },
];

const CustomHooks = () => (
  <Section id="customHooks" title="Custom Hooks">
    {topics &&
      topics.map(topic => {
        const { title, subtitle, description } = topic;
        return (
          <SubSection
            key={title + subtitle + description}
            title={title}
            subtitle={subtitle}
            description={description}
          ></SubSection>
        );
      })}
  </Section>
);

export default CustomHooks;
