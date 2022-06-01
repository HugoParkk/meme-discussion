import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
function BoardTextBtn() {
  return (
    <>
      <GlobalStyle />
      <PinkBox>안전결제 신청</PinkBox>
      <PinkBox>안전결제 신청</PinkBox>
      <PinkBox>안전결제 신청</PinkBox>
      <br />
      <PinkBox>안전결제 신청</PinkBox>
      <PinkBox>안전결제 신청</PinkBox>
    </>
  );
}
const PinkBox = styled.button`
  font-size: 13pt;
  display: inline-block;
  font-weight: bold;
  padding: 5px 12px;
  border: 0;
  background-color: #ff50e2;
  color: white;
  cursor: pointer;
  text-align: center;
  border-radius: 10px;
  margin-right: 5px;
  margin-top: 5px;
`;
export default BoardTextBtn;
