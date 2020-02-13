import React from 'react';

// Components
import Section from '../../shared/components/Section';
import SubSection from '../../shared/components/SubSection';
import InsideAReactFunction from './components/InsideAReactFunction';
import InTheBeginning from './components/InTheBeginning';

const rules = [
  {
    title: 'Use Hooks Apenas no começo ou na parte superior das funções',
    subtitle:
      'Não use Hooks dentro de loops, regras condicionais ou funções aninhadas',
    description:
      'Isso garante que os Hooks serão chamados na mesma ordem a cada vez que o componente renderizar.',
  },
  {
    title: 'Use Hooks Apenas Dentro de Funções do React',
    subtitle: 'Não use Hooks dentro de funções JavaScript comuns.',
    description:
      '- Chamar Hooks em componentes funcionais React; \n- Chamar Hooks dentro de Hooks Customizados',
  },
];

const Rules = () => (
  <Section id="rules" title="Regras">
    {rules &&
      rules.map(rule => {
        const { title, subtitle, description } = rule;
        return (
          <SubSection
            key={title + subtitle + description}
            title={title}
            subtitle={subtitle}
            description={description}
          >
            <InsideAReactFunction />
            <InTheBeginning />
          </SubSection>
        );
      })}
  </Section>
);

export default Rules;
