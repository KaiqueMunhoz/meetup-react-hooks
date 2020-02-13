import React, { useState, Component } from 'react';

// Components
import Section from '../../shared/components/Section';
import SubSection from '../../shared/components/SubSection';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <p>Voce clicou {this.state.count} vezes</p>
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

const UseFunctionalComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Voce clicou {count} vezes</p>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Clique
      </button>
    </div>
  );
};

const UseState = () => (
  <Section id="useState" title="Use State">
    <SubSection subtitle="Class Component">
      <ClassComponent />
    </SubSection>
    <SubSection subtitle="Functional Component">
      <UseFunctionalComponent />
    </SubSection>
  </Section>
);

export default UseState;
