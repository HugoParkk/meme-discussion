import React from "react";
import GlobalStyle from "../GlobalStyle";
import styled from "styled-components";

function BoardMainText() {
  return (
    <StyledDiv>
      <GlobalStyle />
      <Sell>판매</Sell>
      <SellText>트와이스 나연 i Love Paris짤 팝니다</SellText>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 50%;
  position: relative;
  left: 50%;
`;

const Sell = styled.div`
  font-size: 18pt;
  color: #ff50e2;
  margin-right: 10px;
  display: inline-block;
`;

const SellText = styled.div`
  font-size: 18pt;
  display: inline-block;
  font-weight: bold;
`;
export default BoardMainText;
