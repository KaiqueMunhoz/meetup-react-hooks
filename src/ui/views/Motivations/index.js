import React from 'react';

// Components
import Section from '../../shared/components/Section';
import SubSection from '../../shared/components/SubSection';

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
          <SubSection
            title={title}
            subtitle={subtitle}
            description={description}
          />
        );
      })}
  </Section>
);

export default Motivations;
