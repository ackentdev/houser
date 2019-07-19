import React from 'react';
import {HashRouter as Router} from 'react-router-dom';
import routes from './routes';
import './App.css';

import Header from "./Components/Header/Header";
import House from "./Components/House/House";

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <House />
      {routes}
    </div>
    </Router>
  );
}

export default App;
