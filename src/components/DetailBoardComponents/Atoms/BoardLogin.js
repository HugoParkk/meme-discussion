import React from "react";
import GlobalStyle from "../GlobalStyle";
import styled from "styled-components";
function BoardLogin() {
  return (
    <>
      <GlobalStyle />
      <MyName>판매자</MyName>
      <YouRating>열심회원</YouRating>
      <BuyQuestion>구매문의</BuyQuestion>
      <UpLoaddate>2022.05.04 00:27 조회 5</UpLoaddate>
    </>
  );
}
const MyName = styled.div`
  font-size: 14pt;
  font-weight: bold;
  display: inline-block;
  margin-right: 10px;
`;
const YouRating = styled.div`
  font-size: 13pt;
  font-weight: bold;
  display: inline-block;
  color: #999999;
  margin-left: 7px;
  margin-right: 10px;
`;
const UpLoaddate = styled.div`
  font-size: 13pt;
  display: block;
  color: #999999;
  padding-left: 10px;
`;
const BuyQuestion = styled.div`
  font-size: 13pt;
  display: inline-block;
  font-weight: bold;
  padding: 5px 15px;
  text-align: center;
  background-color: #dbdbdb;
  border-radius: 10px;
  margin-left: 7px;
`;
export default BoardLogin;
