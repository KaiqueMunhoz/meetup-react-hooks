import React, { useState, Component } from 'react';

// Components
import Section from '../../shared/components/Section';
import SubSection from '../../shared/components/SubSection';

class StateFullComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button
          className="btn btn-primary"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          Click me
        </button>
      </div>
    );
  }
}

const UseStateLessComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};

const UseState = () => (
  <Section id="useState" title="Use State">
    <SubSection subtitle="Class Component">
      <StateFullComponent />
    </SubSection>
    <SubSection subtitle="Functional Component">
      <UseStateLessComponent />
    </SubSection>
  </Section>
);

export default UseState;
