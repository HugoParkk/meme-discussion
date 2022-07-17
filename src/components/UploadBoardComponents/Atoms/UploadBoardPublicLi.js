import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
import down from '../../../images/plu.png';

function UploadBoardPublicLi() {
  return (
    <Wrap>
      <GlobalStyle />
      <Text>공개설정</Text>
      <ul>
        <Lis>회원 공개</Lis>
        <Lis>검색ㆍ네버 서비스 공개</Lis>
      </ul>
    </Wrap>
  );
}

const Wrap = styled.div`
  margin-top: 60px;
  width: 196px;
  height: 104px;
  margin-left: -20px;
  background-color: #FFF0F9;
`;
const Text = styled.div`
  font-size: 13px;
  font-weight: bold;
`;
const Lis = styled.li`
  list-style-type: "ㄴ ";
  margin-top: 6px;
  font-size: 12px;
`;
export default UploadBoardPublicLi;
