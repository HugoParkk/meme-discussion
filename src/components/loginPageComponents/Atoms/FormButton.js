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
  cursor: pointer;
  font-weight: bold;
  font-size: 18pt;
  background-color: #ff50e2;
  border-radius: 3px;
  width: 90%;
  height: 40px;
  margin: 0 auto;
  line-height: 40px;
  margin-bottom: 15px;
  text-align: center;
  border: 1.5px solid #ff1493;
`;

export default FormButton;
