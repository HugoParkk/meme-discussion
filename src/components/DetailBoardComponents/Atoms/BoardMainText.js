import React from "react";
import GlobalStyle from "../GlobalStyle";
import styled from "styled-components";

function BoardMainText() {
  return (
    <>
      <GlobalStyle />
      <Sell>판매</Sell>
      <SellText>트와이스 나연 i Love Paris짤 팝니다</SellText>
    </>
  );
}

const Sell = styled.div`
  font-size: 15pt;
  color: #ff50e2;
  margin-right: 10px;
  display: inline-block;
  position: relative;
  left: 50pt;
  margin: 0;
  padding: 0;
  top: -8pt;
`;

const SellText = styled.div`
  font-size: 15pt;
  display: inline-block;
  width: 300pt;
  position: relative;
  left: 60pt;
  top: -8pt;
`;
export default BoardMainText;
