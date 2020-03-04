import React from 'react';
import './App.css';
import {  Route } from "react-router-dom";
import  PrivateRoute from './components/PrivateRoute';
import NavBar from './components/NavBar';
import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";
import TicketList from "./components/TicketList";

export default function App() {
  return (
    <div className="App">
       <div className="home-page">
      <Header />
      <NavBar />
    </div>
      <Route path='/Login' component={Login} />
      <Route path="/Register" component={Register} /> 
      <PrivateRoute exact path='/protected' component={TicketList} />
    </div>
  );
}

