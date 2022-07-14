import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";

function FormButton() {
  return (
    <>
      <GlobalStyle />
      <a href="http://localhost:3000/main"><StyledDiv>로그인</StyledDiv></a>
    </>
  );
}

const StyledDiv = styled.div`
  cursor: pointer;
  font-size: 20px;
  background-color: #ff50e2;
  border-radius: 3px;
  width: 90%;
  height: 40px;
  margin: 0 auto;
  line-height: 38px;
  margin-bottom: 15px;
  text-align: center;
  border: 1.5px solid #ff1493;
  color: #000;
`;

export default FormButton;
