import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
function UploadBoardPublicLi() {
  return (
    <>
      <GlobalStyle />
      <ul>
        <Lis>광고</Lis>
        <Lis>ㅇㅇㅇ</Lis>
      </ul>
    </>
  );
}
const Lis = styled.li`
  list-style-type: "ㄴ ";
  margin-top: 10px;
  font-size: 13pt;
`;
export default UploadBoardPublicLi;
