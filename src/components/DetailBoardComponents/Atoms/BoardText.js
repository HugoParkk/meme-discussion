import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
function BoardText(props) {
  return (
    <>
      <GlobalStyle />
      <Text>{props.text}</Text>
    </>
  );
}
const Text = styled.div`
  font-size: 12pt;
  font-weight: bold;
  margin-bottom: 10px;
  margin-right: 13px;
  display: inline-block;
`;
export default BoardText;
