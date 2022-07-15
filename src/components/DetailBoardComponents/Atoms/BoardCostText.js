import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";

function BoardCostText() {
  return (
    <StyledDiv>
      <GlobalStyle />
      <Cost>14,000짤</Cost>
      <QuestBtn>안전결제신청</QuestBtn>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: block;
  margin-bottom: 2rem;
  position: relative;
  top: 20pt;
`;

const Cost = styled.div`
  font-size: 18pt;
  font-weight: bold;
  display: inline-block;
  position: relative;
  left: 50pt;
  top: -25pt;
`;

const QuestBtn = styled.button`
  font-size: 12pt;
  display: inline-block;
  font-weight: bold;
  padding: 3px 12px;
  border: 0;
  cursor: pointer;
  text-align: center;
  background-color: #dbdbdb;
  border-radius: 8px;
  margin-left: 20px;
  position: relative;
  left: 50pt;
  top: -26pt;
`;
export default BoardCostText;
