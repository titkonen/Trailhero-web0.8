import React from 'react';
import './App.css';
import Trailherologo from './assets/Trailhero-logo-horizontal.png';
// For Auth imports
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./auth/Home";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import { AuthProvider } from './auth/Auth';
import PrivateRoute from "./auth/PrivateRoute";
// Views 
//import WelcomeView from './Views/WelcomeView';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <nav className="blue">          
            <img src={Trailherologo} className="logo-trailhero" alt="Hero" />
          </nav>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            {/* <Route path="/welcome">
              <Welcome />
            </Route>
            <Route path="/contacts">
              <Contacts />
            </Route> */}
          </Switch>
          <div>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/signup" component={SignUp} />
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;