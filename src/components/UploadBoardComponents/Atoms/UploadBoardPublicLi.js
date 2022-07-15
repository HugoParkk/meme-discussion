import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
function UploadBoardPublicLi() {
  return (
    <Wrap>
      <GlobalStyle />
      <Text>공개설정 ∨</Text>
      <ul>
        <Lis>회원 공개</Lis>
        <Lis>검색ㆍ네버 서비스 공개</Lis>
      </ul>
    </Wrap>
  );
}

const Wrap = styled.div`
  margin-top: 60px;
  width: 11.8rem;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  background-color: pink;
`;
const Text = styled.div`
  font-size: 10pt;
  width: 80%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  font-weight: bold;
  top: 10px;
`;
const Lis = styled.li`
  list-style-type: "ㄴ ";
  margin-top: 6px;
  font-size: 10pt;
`;
export default UploadBoardPublicLi;
