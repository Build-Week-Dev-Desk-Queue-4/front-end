import React from "react";
import styled from "styled-components";

const Footer1 = styled.footer`
  background-color: black;
  color: white;
  padding: 2%;
  margin-top: 3%;
`;

export default function Footer() {
  return (
    <Footer1>
      <p>Copyright © 2020 DevDesk Q. All Rights Reserved</p>
    </Footer1>
  );
}