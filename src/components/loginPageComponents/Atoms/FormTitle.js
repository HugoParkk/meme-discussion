import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";

function FormTitle() {
  return (
    <>
      <GlobalStyle />
      <StyledDiv>환영합니다. 로그인 해주세요.</StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  font-weight: bold;
  font-size: 22pt;
  width: 90%;
  margin: 0 auto;
  margin-top: 7px;
  margin-bottom: 20px;
  text-shadow: #ff50e2 1px 0 5px; ;
`;

export default FormTitle;
