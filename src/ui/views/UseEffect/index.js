import React, { useState, useEffect, Component } from 'react';

// Components
import Section from '../../shared/components/Section';
import SubSection from '../../shared/components/SubSection';

class StateFullComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.nv = null
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  handleKeyPress(e) {
    console.log('StateFullComponent: Apertou a tecla', e.key);
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

function UseStateLessComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  },[count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

const UseEffect = () => (
  <Section id="useEffect" title="Use Effect">
    <SubSection subtitle="Statefull Component">
      <StateFullComponent />
    </SubSection>
    <SubSection subtitle="StateLess Component">
      <UseStateLessComponent />
    </SubSection>
  </Section>
);

export default UseEffect;
