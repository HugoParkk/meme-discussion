import React from "react";
import GlobalStyle from "../GlobalStyle";
import styled from "styled-components";
function PostBoardTitle(props) {
  return (
    <>
      <GlobalStyle />
      <StyledText>{props.text}</StyledText>
    </>
  );
}
const StyledText = styled.div`
  font-weight: bold;
  display: inline-block;
  font-size: 22pt;
  text-align: left;
  width: 100%;
  margin: 0 auto;
  position: absolute;
  left: 15%;
`;
export default PostBoardTitle;
