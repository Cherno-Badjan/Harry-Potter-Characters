import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HarryPotterContainer from '../../containers/HarryPotterContainer';
import HomePage from '../HomePage';
import Header from '../Header';
import './App.css';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/characters" exact component={HarryPotterContainer} />
        </Switch>
      </Router>
    </>
  );
}
