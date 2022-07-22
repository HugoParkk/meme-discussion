import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
import welcome from "../img/welcome.png";


function FormTitle() {
  return (
    <>
      <GlobalStyle />
      <StyledDiv><img src={welcome} alt="환영합니다. 로그인 해주세요."></img></StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  width: 90%;
  margin: 9px auto;
  text-align: center;
  padding-bottom: 3px;
`;

export default FormTitle;
