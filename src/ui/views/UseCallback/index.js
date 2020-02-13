import React, { Component, useState, useCallback } from 'react';

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
    this.setState({ newTechnology: '' });
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
      </>
    );
  }
}

const UseFunctionalComponent = () => {
  const [technologies, setTechnologies] = useState(['React Hooks']);
  const [newTechnology, setNewTechnology] = useState('');

  const handleAdd = useCallback(() => {
    setTechnologies([...technologies, newTechnology]);
    setNewTechnology('');
  }, [technologies, newTechnology]);

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
    </>
  );
};

const UseCallback = () => {
  return (
    <Section id="useCallback" title="Use Callback">
      <SubSection subtitle="Class Component">
        <ClassComponent />
      </SubSection>
      <hr />
      <SubSection subtitle="Functional Component">
        <UseFunctionalComponent />
      </SubSection>
    </Section>
  );
};

export default UseCallback;
