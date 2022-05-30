import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";

function FormText() {
  return (
    <>
      <GlobalStyle />
      <StyledDiv>로그인 상태 유지</StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  font-weight: bold;
  font-size: 12pt;
  color: #cfcfcf;
`;

export default FormText;
