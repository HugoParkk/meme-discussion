import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";

function PostBoardBellText() {
  return (
    <>
      <GlobalStyle />
      <Text>게시글 알림</Text>
    </>
  );
}
const Text = styled.div`
  font-size: 13pt;
  font-weight: bold;
  display: inline-block;
`;
export default PostBoardBellText;
