import React from 'react';

//Views
import About from './ui/views/About';
import Motivations from './ui/views/Motivations';
import Rules from './ui/views/Rules';

//Components
import NavBar from './ui/shared/components/NavBar';
import Line from './ui/shared/components/Line';

const App = () => (
  <>
    <NavBar />
    <div className="container-fluid p-0">
      <About />
      <Line />
      <Motivations />
      <Line />
      <Rules />
      <Line />
    </div>
  </>
);

export default App;
