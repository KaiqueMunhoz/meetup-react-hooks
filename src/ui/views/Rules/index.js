import React from 'react';

// Components
import Section from '../../shared/components/Section';
import SubSection from '../../shared/components/SubSection';

const rules = [
  {
    title: 'Only Call Hooks at the Top Level',
    subtitle: 'Don’t call Hooks inside loops, conditions, or nested functions.',
    description: 'Instead, always use Hooks at the top level of your React function. By following this rule, you ensure that Hooks are called in the same order each time a component renders. That’s what allows React to correctly preserve the state of Hooks between multiple useState and useEffect calls. (If you’re curious, we’ll explain this in depth below.)',
  },
  {
    title: 'Only Call Hooks from React Functions',
    subtitle: 'Don’t call Hooks from regular JavaScript functions. ',
    description: 'Instead, you can: \n- Call Hooks from React function components \n- Call Hooks from custom Hooks (we’ll learn about them on the next page).',
  }
];

const Rules = () => (
  <Section id="rules" title="Regras">
    {rules && rules.map(rule => {
      const { title, subtitle, description } = rule;
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

export default Rules;
