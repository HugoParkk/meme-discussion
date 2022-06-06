import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";

function ShopBoardFooterNext() {
  return (
    <>
      <GlobalStyle />
      <Line>{" | "}</Line>
      <Text>{"다음 >"}</Text>
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
`;
export default ShopBoardFooterNext;
