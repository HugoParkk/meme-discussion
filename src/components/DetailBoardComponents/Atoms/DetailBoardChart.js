import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../ShopBoardComponents/GlobalStyle";

function DetailBoardChart() {
  return (
    <>
      <GlobalStyle />
      <Btn>목록</Btn>
    </>
  );
}
const Btn = styled.button`
  border: 2px solid black;
  background-color: #ff50e2;
  color: white;
  display: inline-block;
  margin-left: 10px;
  border-radius: 5px;
  padding: 3px 10px;
`;
export default DetailBoardChart;
