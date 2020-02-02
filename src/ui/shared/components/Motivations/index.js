import React from 'react';

// Components
import Motivation from './Motivation';

const motivations = [
  {
    title: 'Complexidade',
    subtitle: 'Dificuldade em entender o código',
    description: '',
  },
  {
    title: 'Reuso',
    subtitle: '',
    description: '',
  },
  {
    title: 'Performace',
    subtitle: '',
    description: '',
  },
];

const Motivations = () => (
  <section
    className="resume-section p-3 p-lg-5 d-flex justify-content-center"
    id="experience"
  >
    <div className="w-100">
      <h2 className="mb-5">Motivação</h2>
      {motivations &&
        motivations.map(motivation => {
          const { title, subtitle, description } = motivation;
          return (
            <Motivation
              title={title}
              subtitle={subtitle}
              description={description}
            />
          );
        })}
      <Motivation />
    </div>
  </section>
);

export default Motivations;
