import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";

export default function Title() {
  return (
    <>
      <GlobalStyle />
      <StyledDiv>밈품명품</StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  font-weight: bold;
  font-size: 22pt;
`;
