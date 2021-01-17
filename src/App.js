/*
  Evan MacHale - 19191391
  07.10.19
  App.js
*/

import React from 'react';
// Router
import { HashRouter, Route } from 'react-router-dom';
// Carbon
import { Content } from 'carbon-components-react/lib/components/UIShell';
// My Components
import Nav from './components/nav/Nav';
import Intro from './pages/Intro';
import ManMachine from './pages/trimester1/ManMachine';
import PeoplePlace from './pages/trimester1/PeoplePlace';
import './App.scss';

const App = () => (
  <HashRouter>
    <Nav />
    <Content>
      <Route exact path="/" component={Intro} />
      <Route path="/man+machine" component={ManMachine} />
      <Route path="/people+place" component={PeoplePlace} />
    </Content>
  </HashRouter>
);

export default App;
