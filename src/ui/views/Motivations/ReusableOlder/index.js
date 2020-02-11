import React from 'react';
import { render } from 'react-dom';
import { compose, withState, withEffect } from '@reactorlib/core';const array = [];
for (let i = 0; i < 10000; i++) array[i] = true;const _Component = ({ a, b, c }) => {
  return <div>{a + b + c}</div>;
};const Component = compose(
  withState({
    a: '',
    b: '',
    c: ''
  }),
  withEffect(({ setA, setB, setC }) => {
    setA('A');
    setB('B');
    setC('C');
  }, true)
)(_Component);const _Benchmark = () => {
  return array.map((item, index) => <Component key={index} />);
};const Benchmark = compose(
  withEffect(({ start }) => {
    console.log(Date.now() - start);
  })
)(_Benchmark);render(<Benchmark start={Date.now()} />, document.getElementById('root'));
