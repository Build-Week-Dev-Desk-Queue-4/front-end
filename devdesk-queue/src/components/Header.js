import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: grey;
  padding: 2%;
  margin-bottom: 3%;
  border: 2px solid black;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <h1>DevDesk Q</h1>
    </HeaderContainer>
  );
}