import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
function BoardTopTitle() {
  return (
    <>
      <GlobalStyle />
      <TextPink>{"방송캡쳐 >"}</TextPink>
    </>
  );
}

const TextPink = styled.div`
  font-size: 13pt;
  font-weight: bold;
  display: inline-block;
  color: #ff50e2;
`;
export default BoardTopTitle;
