import React from "react";
import GlobalStyle from "../GlobalStyle";
import styled from "styled-components";

function BoardMainText() {
  return (
    <>
      <Sell><span>판매</span>트와이스 나연 i Love Paris짤 팝니다</Sell>
    </>
  );
}

const Sell = styled.div`
  font-size: 20px;
  color:#000;
  span{
    color: #ff50e2;
  }
`;

export default BoardMainText;
