import React from 'react';

//Views
import About from './ui/views/About';
import Motivations from './ui/views/Motivations';
import Rules from './ui/views/Rules';
import UseState from './ui/views/UseState';
import UseEffect from './ui/views/UseEffect';
import UseMemo from './ui/views/UseMemo';
import UseCallback from './ui/views/UseCallback';
import UseReducer from './ui/views/UseReducer';
import UseSelector from './ui/views/UseSelector';
import UseDispatch from './ui/views/UseDispatch';
import CustomHooks from './ui/views/CustomHooks';
import References from './ui/views/References';

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
      <UseReducer />
      <Line />
      <UseSelector />
      <Line />
      <UseDispatch />
      <Line />
      <CustomHooks />
      <Line />
      <References />
      <Line />
    </div>
  </>
);

export default App;
