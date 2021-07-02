import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link
} from "react-router-dom";


import Navigation from './Navigation';
import SignUp from './SignUp';
import Login from './Login';
import Home from './Home';





function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Navigation />
        </nav>
        <main>
          <Switch>
            <Route path="/SignUp">
              <SignUp />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;