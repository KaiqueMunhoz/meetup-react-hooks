import React from 'react';

//Views
import About from './ui/views/About';
import Motivations from './ui/views/Motivations';
import Rules from './ui/views/Rules';
import UseState from './ui/views/UseState';
import UseEffect from './ui/views/UseEffect';
import UseMemo from './ui/views/UseMemo';
import UseCallback from './ui/views/UseCallback';

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
      <UseState />
      <Line />
      <UseEffect />
      <Line />
      <UseMemo />
      <Line />
      <UseCallback />
      <Line />
    </div>
  </>
);

export default App;
