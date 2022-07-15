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
  font-size: 0.903vw;
  color: "#C0C0C0";
  width: 15.625vw;
  height: 2.604vw;
  margin-left: 0.521vw;
  display: inline-block;
  border: 0.104vw solid #dbdbdb;
  position: relative;
`;

export default ShopBoardFindPost;
