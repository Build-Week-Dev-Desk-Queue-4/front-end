import React from 'react';
import './App.css';
import {  Route } from "react-router-dom";
import  PrivateRoute from './components/PrivateRoute';
import NavBar from './components/NavBar';
import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";
import TicketList from "./components/TicketList";
// import Tickets from "./components/Tickets";

function App() {
  return (
    <div className="App">
       <div className="home-page">
      <Header />
      <NavBar />
      {/* <Tickets /> */}
    </div>
      <Route path='/Login' component={Login} />
      <Route path="/Register" component={Register} /> 
      <PrivateRoute exact path='/home' component={TicketList} />
      {/* <PrivateRoute path="/" component={test} /> */}
    </div>
  );
}

export default App;
