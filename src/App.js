import React from 'react';
import NavBar from './ui/shared/components/NavBar';
import About from './ui/views/About';
import Line from './ui/shared/components/Line';
import Motivations from './ui/shared/components/Motivations';
import Skills from './ui/shared/components/Skills';
import Interests from './ui/shared/components/Interests';

const App = () => (
  <>
    <NavBar />
    <div className="container-fluid p-0">
      <About />
      <Line />
      <Motivations />
      <Line />
      <Skills />
      <Line />
      <Interests />
    </div>
  </>
);

export default App;
