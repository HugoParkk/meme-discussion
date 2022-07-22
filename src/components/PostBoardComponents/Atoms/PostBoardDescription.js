import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";

function PostBoardDescription(props) {
  return (
    <>
      <GlobalStyle />
      <Text>{props.text}</Text>
    </>
  );
}
const Text = styled.div`
  font-size: 13pt;
  color: #ff50e2;
  font-weight: bold;
`;
export default PostBoardDescription;
