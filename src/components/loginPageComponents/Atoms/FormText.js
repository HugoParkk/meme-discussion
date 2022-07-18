import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
import check from "../img/check.png";

function FormText() {
  return (
    <>
      <GlobalStyle />
      <StyledDiv><img src={check} alt="check_icon"></img><p>로그인 상태 유지</p></StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  img {
    position: absolute;
    margin-right: 5px;
    padding-top: 1.5px;
  }
  p {
    margin-left: 23px;
  }
  cursor: pointer;
  font-size: 14px;
  margin: 0 auto;
  width: 90%;
  text-align: left;
  color: #777777;
`;

export default FormText;
