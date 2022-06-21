import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
function BoardTextBtn() {
  return (
    <StyledDiv>
      <GlobalStyle />
      <PinkBox>안전결제 신청</PinkBox>
      <PinkBox>안전결제 신청</PinkBox>
      <PinkBox>안전결제 신청</PinkBox>
      <br />
      <PinkBox>안전결제 신청</PinkBox>
      <PinkBox>안전결제 신청</PinkBox>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 500px;
  display: inline-block;
`;

const PinkBox = styled.button`
  font-size: 15pt;
  display: inline-block;
  font-weight: bold;
  padding: 3px 6px;
  border: 0;
  background-color: #ff50e2;
  color: white;
  cursor: pointer;
  text-align: center;
  border-radius: 5px;
  margin-right: 5px;
  margin-top: 5px;
`;
export default BoardTextBtn;
