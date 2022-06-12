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
  cursor: pointer;
  font-weight: bold;
  font-size: 12pt;
  color: #cfcfcf;
  margin: 0 auto;
  width: 90%;
  text-align: left;
  margin-top: 12px;
  margin-bottom: 12px;
`;

export default FormText;
