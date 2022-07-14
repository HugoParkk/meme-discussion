import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";

function ShopBoardFooterNext() {
  return (
    <>
      <GlobalStyle />
      <NextDiv>
        <Line>{" | "}</Line>
        <Text>{"다음 >"}</Text>
      </NextDiv>
    </>
  );
}
const Text = styled.div`
  font-size: 12pt;
  font-weight: bold;
  margin-left: 20pt;
  display: inline-block;
  cursor: pointer;
`;
const Line = styled.div`
  font-size: 12pt;
  font-weight: bold;
  margin-left: 20pt;
  display: inline-block;
  color: gray;
`;
const NextDiv = styled.div`
  position: absolute;
  left: 500pt;
  bottom: 65pt;
`;
export default ShopBoardFooterNext;
