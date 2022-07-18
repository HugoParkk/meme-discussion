import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
import svg1 from "../../../images/Group 204.svg";
import svg2 from "../../../images/Vector-2.svg";

function PostBoardBellText() {
  return (
    <>
      <GlobalStyle />
      <Image2 src={svg2}></Image2>
      <Text>게시글 알림</Text>
      <Image1 src={svg1}></Image1>
    </>
  );
}
const Image2 = styled.img`
  display: inline-block;  
  width: 3rem;
  height: 1.5rem;
  
`;
const Text = styled.div`
  font-size: 13pt;
  align-items: center;
  justify-content: space-between;
`;

const Image1 = styled.img`
  width: 3rem;
  height: 1.5rem;
  display: inline-block;
`;
export default PostBoardBellText;
