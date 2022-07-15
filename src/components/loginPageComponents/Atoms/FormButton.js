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
  background-color: #FF50E2;
  border-radius: 3px;
  width: 402px;;
  height: 52px;
  margin: 0 auto;
  line-height: 47px;
  margin-bottom: 15px;
  text-align: center;
  border: 1.5px solid #C900A8;
  color: #000;
`;

export default FormButton;
