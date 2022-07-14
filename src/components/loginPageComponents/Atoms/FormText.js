import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
import check from "../img/check.png";
function FormText() {
  return (
    <>
      <GlobalStyle />
      <image src={check}></image>
      <StyledDiv>로그인 상태 유지</StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  cursor: pointer;
  font-size: 14px;
  margin: 0 auto;
  width: 90%;
  text-align: left;
  margin-top: 12px;
  margin-bottom: 12px;
  input {
    color: #777777;
  }
`;

export default FormText;
