import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link
} from "react-router-dom";

import  Signup from './SignUp';
import  Navigation from './Navigation';




export default function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Navigation />
        </nav>
        <main>
          <Switch>
            <Route path="/signup">
              <Signup />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function Login() {
//   return <h2>Login</h2>;
// }

// function SingUp() {
//   return <h2>SingUp</h2>;
// }