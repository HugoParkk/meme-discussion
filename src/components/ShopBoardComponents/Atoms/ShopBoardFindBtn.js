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
  font-size: 13pt;
  display: inline-block;
  width: 100px;
  height: 50px;
`;

export default ShopBoardFindBtn;
