import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";

function Title() {
  return (
    <>
      <GlobalStyle />
      <StyledDiv>밈품명품</StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  font-size: 22pt;
  letter-spacing: -2;
  word-spacing: 28;
`;

export default Title;
