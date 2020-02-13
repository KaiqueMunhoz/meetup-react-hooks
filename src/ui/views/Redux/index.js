import React from 'react';

// Components
import Section from '../../shared/components/Section';
import SubSection from '../../shared/components/SubSection';
import Topics from '../../shared/components/Topics';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';

const topics = [
  'useSelector -> mapStateToProps',
  'useDispatch -> mapDispatchToProps',
];
const Redux = () => {
  return (
    <Section id="redux" title="Redux">
      <Topics title="use selector | use dispatch" topics={topics} />
      <hr />
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
