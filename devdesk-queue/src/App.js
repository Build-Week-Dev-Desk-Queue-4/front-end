import React from 'react';
import './App.css';

import {  Route } from "react-router-dom";
//import  PrivateRoute from './components/PrivateRoute';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Route exact path='/' component={LandingPage} />
      <Route path='/login' component={Login} />
      <Route path="/signup" component={SignUp} /> */}
      {/* <PrivateRoute exact path='/home' component={test} />
      <PrivateRoute path="/" component={test} />
      <PrivateRoute path='/' component={test} />
      <PrivateRoute path='/' component={test} /> */}
    </div>
  );
}

export default App;
