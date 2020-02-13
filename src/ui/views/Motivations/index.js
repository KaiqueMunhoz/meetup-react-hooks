import React from 'react';

// Components
import Section from '../../shared/components/Section';
import SubSection from '../../shared/components/SubSection';

// Styles
import wrapperHellImage from '../../shared/images/wrapperHell.png';

const motivations = [
  {
    title: 'Complexidade',
    subtitle: 'Dificuldade em entender o código',
    description: 'Classes e métodos do cíclo de vida React',
  },
  {
    title: 'Reuso',
    subtitle: "Menos HOC's e WrapperHell",
    description:
      'Reutilização de lógica, sem precisar criar um High Order Component',
    content: true,
  },
  {
    title: 'Performace',
    subtitle: 'useMemo | useCallback | functional components',
    description:
      'Alguns métodos do React Hooks auxiliam na performace da aplicação',
  },
];

const Motivations = () => (
  <Section id="motivations" title="Motivações">
    {motivations &&
      motivations.map(motivation => {
        const { title, subtitle, description, content = null } = motivation;
        return (
          <SubSection
            key={title + subtitle + description}
            title={title}
            subtitle={subtitle}
            description={description}
          >
            {content && (
              <img
                className="img-fluid img-profile rounded-circle mx-auto mb-2"
                src={wrapperHellImage}
                alt="profile"
              />
            )}
          </SubSection>
        );
      })}
  </Section>
);

export default Motivations;
