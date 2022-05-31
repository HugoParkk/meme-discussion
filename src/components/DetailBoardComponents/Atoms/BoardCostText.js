import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
function BoardCostText() {
  return (
    <>
      <GlobalStyle />
      <br />
      <Cost>14,000짤</Cost>
      <QuestBtn>안전결제신청</QuestBtn>
    </>
  );
}

const Cost = styled.div`
  font-size: 22pt;
  font-weight: bold;
  margin-top: 10px;
  display: inline-block;
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
  margin-top: 10px;
  margin-left: 20px;
`;
export default BoardCostText;
