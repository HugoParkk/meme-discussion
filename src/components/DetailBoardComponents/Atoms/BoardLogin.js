import React from "react";
import GlobalStyle from "../GlobalStyle";
import styled from "styled-components";
import svg from "../../../images/Ellipse 3.png";
function BoardLogin() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <DogImg src={svg}></DogImg>
        <div>
          <MyName>판매자</MyName>
          <YouRating>열심회원</YouRating>
          <BuyQuestion>구매문의</BuyQuestion>
          <UpLoaddate>2022.05.04 00:27 조회 5</UpLoaddate>
        </div>
      </Wrapper>
      <URLCopy>URL 복사</URLCopy>
      <Comment>
        댓글 <CommentCnt>0 </CommentCnt>
      </Comment>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const DogImg = styled.img`
  width: 3rem;
  height: 3rem;
  margin-right: 10px;
  border-radius: 50%;
`;
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
const BuyQuestion = styled.button`
  font-size: 13pt;
  display: inline-block;
  font-weight: bold;
  padding: 5px 12px;
  border: 0;
  cursor: pointer;
  text-align: center;
  background-color: #dbdbdb;
  border-radius: 10px;
  margin-left: 7px;
`;

const Comment = styled.div`
  font-size: 13pt;
  display: block;
  float: right;
  margin-right: 10px;
`;
const CommentCnt = styled.div`
  font-size: 13pt;
  display: inline-block;
  font-weight: bold;
`;
const URLCopy = styled.div`
  display: block;
  font-size: 13pt;
  float: right;
`;
export default BoardLogin;
