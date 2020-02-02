import React from 'react';
import NavBar from './ui/shared/components/NavBar'
import About from './ui/shared/components/About'
import Line from './ui/shared/components/Line'
import Experience from './ui/shared/components/Experience'
import Skills from './ui/shared/components/Skills'
import Interests from './ui/shared/components/Interests'

function App() {
  return (
  <>
    <NavBar />
    <div className="container-fluid p-0">
      <About />
      <Line />
      <Experience />
      <Line />
      <Skills />
      <Line />
      <Interests />
    </div>
  </>
  );
}

export default App;
