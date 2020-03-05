import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navigate>
        <NavLink className="nav-link" to="/Register">Register</NavLink>
        <NavLink className="nav-link" to="/protected">Tickets</NavLink>
        <NavLink className="nav-link" to="/Login">Log In</NavLink>
      </Navigate>
    </>
  );
};

export default NavBar;

//styles
const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
`;

const Navigate = styled.div`
  font-family: verdana;
  background-color: blue;
  padding: .25%;
  margin-bottom: 2.5%;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;