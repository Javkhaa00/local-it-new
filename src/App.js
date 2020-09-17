import React from 'react';
import './App.scss';
import Home from './pages/Home';
import Header from './containers/header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route>
          <Home exact path="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
