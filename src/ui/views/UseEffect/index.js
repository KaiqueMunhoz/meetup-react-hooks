import React, { useState, useEffect, Component } from 'react';

// Components
import Section from '../../shared/components/Section';
import SubSection from '../../shared/components/SubSection';

// First
class ClassComponentDidMount extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    // Melhorar
    document.title = `ClassComponent`;
  }

  render() {
    return (
      <div>
        <button
          className="btn btn-primary"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          Clique
        </button>
      </div>
    );
  }
}

function UseFunctionalComponentDidMount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `FunctionalComponent`;
  }, []);

  return (
    <div>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Clique
      </button>
    </div>
  );
}

// Second
class ClassComponentDidUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  componentDidMount() {
    document.title = `ClassComponent`;
  }

  componentDidUpdate(prevProps, prevState) {
    // if (prevState.count !== this.state.count) {
    document.title = `ClassComponent`;
    // }
  }

  render() {
    return (
      <div>
        <button
          className="btn btn-primary"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          Clique
        </button>
      </div>
    );
  }
}

function UseFunctionalComponentDidUpdate() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `FunctionalComponent`;
  }, [count]);

  return (
    <div>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Clique
      </button>
    </div>
  );
}

// Third
class ClassComponentWillUnmount extends Component {
  constructor(props) {
    super(props);
    this.state = { word: [] };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    this.setState(prevState => ({ word: prevState.word.concat(e.key) }));
  };

  render() {
    return this.state.word;
  }
}

function UseFunctionalComponentWillUnmount() {
  const [word, setWord] = useState([]);
  const handleKeyPress = e => {
    setWord(prevState => prevState.concat(e.key));
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return word;
}

// Render
const UseEffect = () => (
  <Section id="useEffect" title="Use Effect">
    <SubSection subtitle="Class Component - Component   Did   Mount">
      <ClassComponentDidMount />
    </SubSection>
    <SubSection subtitle="Functional Component">
      <UseFunctionalComponentDidMount />
    </SubSection>
    <hr />
    <SubSection subtitle="Class Component - Component   Did   Update">
      <ClassComponentDidUpdate />
    </SubSection>
    <SubSection subtitle="Functional Component">
      <UseFunctionalComponentDidUpdate />
    </SubSection>
    <hr />
    <hr />
    <SubSection subtitle="Class Component - Component   Will  Unmount">
      <ClassComponentWillUnmount />
    </SubSection>
    <SubSection subtitle="Functional Component">
      <UseFunctionalComponentWillUnmount />
    </SubSection>
  </Section>
);

export default UseEffect;
