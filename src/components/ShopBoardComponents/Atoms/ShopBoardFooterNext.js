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
  margin-left: 20px;
  display: inline-block;
`;
const Line = styled.div`
  font-size: 12pt;
  font-weight: bold;
  margin-left: 20px;
  display: inline-block;
  color: gray;
`;
const NextDiv = styled.div`
  position: absolute;
  left: 67rem;
`;
export default ShopBoardFooterNext;
