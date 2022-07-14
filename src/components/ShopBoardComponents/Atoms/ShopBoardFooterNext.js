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
  right: 0;
`;
const NextDiv = styled.div`
  position: relative;
  left: 450pt;
  right: 0;
  top: 60pt;
  margin: 0;
  padding: 0;
  width: 100pt;
`;
export default ShopBoardFooterNext;
