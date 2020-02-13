import React from 'react';

// Redux
import store from './store';
import { Provider } from 'react-redux';

//Views
import AboutMe from './ui/views/AboutMe';
import Introduction from './ui/views/Introduction';
import Motivations from './ui/views/Motivations';
import Rules from './ui/views/Rules';
import UseState from './ui/views/UseState';
import UseEffect from './ui/views/UseEffect';
import UseMemo from './ui/views/UseMemo';
import UseCallback from './ui/views/UseCallback';
import UseSelector from './ui/views/UseSelector';
import UseDispatch from './ui/views/UseDispatch';
import CustomHooks from './ui/views/CustomHooks';
import References from './ui/views/References';

//Components
import NavBar from './ui/shared/components/NavBar';
import Line from './ui/shared/components/Line';

const App = () => (
  <Provider store={store}>
    <NavBar />
    <div className="container-fluid p-0">
      <AboutMe />
      <Line />
      <Introduction />
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
      <UseSelector />
      <Line />
      <UseDispatch />
      <Line />
      <CustomHooks />
      <Line />
      <References />
      <Line />
    </div>
  </Provider>
);

export default App;
