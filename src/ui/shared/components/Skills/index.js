import React from 'react';
import Topics from '../Topics';

const topics = [
  'Mobile-First, Responsive Design',
  'Cross Browser Testing Debugging',
  'Cross Functional Teams',
  'Agile Development Scrum',
];

const Skills = () => (
  <section
    className="resume-section p-3 p-lg-5 d-flex align-items-center"
    id="skills"
  >
    <div className="w-100">
      <h2 className="mb-5">Skills</h2>
      <Topics title="Workflow" topics={topics} />
    </div>
  </section>
);

export default Skills;
