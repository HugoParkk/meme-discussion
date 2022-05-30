import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";

export default function CopyRight() {
  return (
    <>
      <GlobalStyle />
      <StyledDiv>
        <StyledText>밈품명품</StyledText> CopyRight for Channel A.All Right
        Reserved
      </StyledDiv>
    </>
  );
}

const StyledText = styled.div`
  font-weight: bold;
  display: inline-block;
  font-size: 14pt;
`;

const StyledDiv = styled.div`
  font-size: 12pt;
`;
