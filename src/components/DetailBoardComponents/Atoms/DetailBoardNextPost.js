import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../ShopBoardComponents/GlobalStyle";

function DetailBoardNextPost() {
  return (
    <>
      <GlobalStyle />
      <Btn>ⅴ 다음글</Btn>
    </>
  );
}
const Btn = styled.button`
  border: 2px solid black;
  background-color: #ff50e2;
  color: white;
  display: inline-block;
  margin-left: 10px;
  padding: 3px 10px;
  border-radius: 5px;
`;
export default DetailBoardNextPost;
