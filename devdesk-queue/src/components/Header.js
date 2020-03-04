import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  color: blue;
  font-size: 1rem;
  padding: 1%;
  margin-bottom: 3%;
  border: 2px solid blue;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <h1>DevDesk Q</h1>
    </HeaderContainer>
  );
}