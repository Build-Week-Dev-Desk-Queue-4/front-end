import React from 'react';
import './App.css';
import {  Route } from "react-router-dom";
import  PrivateRoute from './components/PrivateRoute';
import Sidebar from './components/Sidebar';
import NavBar from './components/NavBar';
import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from './components/Dashboard';
import TicketList from "./components/TicketList";
import CreateTicket from "./components/CreateTicket"

export default function App() {
  return (
    <div className="App">
       <div className="home-page">
      <Header />
      <NavBar />
    </div>
      <Route path='/Login' component={Login} />
      <Route path="/Register" component={Register} /> 
      {/* If you're logged in automatically takes you to app home */}
      <PrivateRoute exact path='/(home|protected|\/|)/' component={Dashboard} />
    </div>
  );
}

