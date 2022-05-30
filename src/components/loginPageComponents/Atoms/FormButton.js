import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";

function FormButton() {
  return (
    <>
      <GlobalStyle />
      <StyledDiv>로그인</StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  font-weight: bold;
  font-size: 22pt;
  background-color: #ff50e2;
  border-radius: 10px;
  width: 80%;
  height: 100px;
  margin: 0 auto;
  line-height: 100px;
`;

export default FormButton