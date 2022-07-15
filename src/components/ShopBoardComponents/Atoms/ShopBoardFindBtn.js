import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";

function ShopBoardFindBtn() {
  return (
    <>
      <GlobalStyle />
      <Btn>검색</Btn>
    </>
  );
}

const Btn = styled.button`
  background: magenta;
  border: none;
  color: white;
  font-size: 0.903vw;
  display: inline-block;
  width: 5.208vw;
  height: 2.604vw;
`;

export default ShopBoardFindBtn;
