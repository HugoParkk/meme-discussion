import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";

function ShopBoardFindPost() {
  return (
    <>
      <GlobalStyle />
      <Text type={"text"} placeholder={"검색어를 입력해주세요"}></Text>
    </>
  );
}
const Text = styled.input`
  font-size: 13pt;
  color: "#DBDBDB";
  width: 300px;
  height: 50px;
  margin-left: 10px;
  display: inline-block;
  border: 2px solid #dbdbdb;
`;

export default ShopBoardFindPost;
