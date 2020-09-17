import React from 'react';
import './App.scss';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route>
          <Home exact path="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
