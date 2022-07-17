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
  font-size: 0.833vw;
  font-weight: bold;
  margin-left: 1.389vw;
  display: inline-block;
  cursor: pointer;
`;
const Line = styled.div`
  font-size: 0.833vw;
  font-weight: bold;
  margin-left: 1.389vw;
  display: inline-block;
  color: gray;
  right: 0;
`;
const NextDiv = styled.div`
  position: relative;
  left: 32.45vw;
  right: 0;
  top: 4.167vw;
  margin: 0;
  padding: 0;
  width: 6.944vw;
`;


export default ShopBoardFooterNext;
