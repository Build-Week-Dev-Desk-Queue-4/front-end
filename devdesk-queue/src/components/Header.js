import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: blue;
  color: white;
  font-size: 1rem;
  padding: 1%;
  margin-bottom: 0.5%; 
  border: 2px solid blue;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <h1>DevDesk Q</h1>
    </HeaderContainer>
  );
}