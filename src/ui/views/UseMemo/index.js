import React, { Component, useState, useMemo } from 'react';

// Components
import Section from '../../shared/components/Section';
import SubSection from '../../shared/components/SubSection';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      technologies: ['React Hooks'],
      newTechnology: '',
    };
  }

  handleAdd = () => {
    const { technologies, newTechnology } = this.state;
    this.setState({ technologies: [...technologies, newTechnology] });
  };

  render() {
    const { technologies, newTechnology } = this.state;
    return (
      <>
        <ul>
          {technologies &&
            technologies.map((tech, index) => (
              <li key={tech + index}>{tech}</li>
            ))}
        </ul>
        <input
          type="text"
          placeholder="Digite uma tecnologia"
          className="form-control"
          value={newTechnology}
          onChange={e => this.setState({ newTechnology: e.target.value })}
        />
        <br />
        <br />
        <button className="btn btn-primary" onClick={this.handleAdd}>
          Adicionar
        </button>
        <br />
        <br />
        <strong>{`Voce tem ${technologies.length} ${
          technologies.length === 1 ? 'tecnologia' : 'tecnologias'
        }`}</strong>
      </>
    );
  }
}

const UseFunctionalComponent = () => {
  const [technologies, setTechnologies] = useState(['React Hooks']);
  const [newTechnology, setNewTechnology] = useState('');
  const technologiesSize = useMemo(() => technologies.length, [technologies]);

  const handleAdd = () => {
    setTechnologies([...technologies, newTechnology]);
  };

  return (
    <>
      <ul>
        {technologies &&
          technologies.map((tech, index) => <li key={tech + index}>{tech}</li>)}
      </ul>
      <input
        type="text"
        placeholder="Digite uma tecnologia"
        className="form-control"
        value={newTechnology}
        onChange={e => setNewTechnology(e.target.value)}
      />
      <br />
      <br />
      <button className="btn btn-primary" onClick={handleAdd}>
        Adicionar
      </button>
      <br />
      <br />
      <strong>{`Voce tem ${technologiesSize} ${
        technologiesSize === 1 ? 'tecnologia' : 'tecnologias'
      }`}</strong>
    </>
  );
};

const UseMemo = () => (
  <Section id="useMemo" title="Use Memo">
    <SubSection subtitle="Class Component">
      <ClassComponent />
    </SubSection>
    <hr />

    <SubSection subtitle="Functional Component">
      <UseFunctionalComponent />
    </SubSection>
  </Section>
);

export default UseMemo;
