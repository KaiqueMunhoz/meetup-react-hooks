import React from 'react';

// Components
import Section from '../../shared/components/Section';
import SubSection from '../../shared/components/SubSection';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';

const Redux = () => {
  return (
    <Section id="redux" title="Use Selector">
      <SubSection subtitle="Class Component">
        <ClassComponent />
      </SubSection>
      <SubSection subtitle="Functional Component">
        <FunctionalComponent />
      </SubSection>
    </Section>
  );
};

export default Redux;
