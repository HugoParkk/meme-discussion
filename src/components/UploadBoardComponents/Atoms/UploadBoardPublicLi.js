import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
function UploadBoardPublicLi() {
  return (
    <Wrap>
      <GlobalStyle />
      <Text>공개설정 ∨</Text>
      <U>
        <Lis>회원 공개</Lis>
        <Lis>검색ㆍ네버 서비스 공개</Lis>
      </U>
    </Wrap>
  );
}
const U = styled.ul`
  padding-inline-start: 2.0833vw;
`;
const Wrap = styled.div`
  margin-top: 3.125vw;
  width: 9.8333vw;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  background-color: pink;
`;
const Text = styled.div`
  font-size: 0.75vw;
  width: 80%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  font-weight: bold;
  top: 10px;
`;
const Lis = styled.li`
  list-style-type: "ㄴ ";
  margin-top: 0.3125vw;
  font-size: 0.6667vw;
`;
export default UploadBoardPublicLi;
