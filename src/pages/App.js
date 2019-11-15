import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Login from './Login/Login'
import Register from './Register/Register'

function App() {
  return (
    <div className="App">
      <Router className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router >
    </div>
  );
}

export default App;
