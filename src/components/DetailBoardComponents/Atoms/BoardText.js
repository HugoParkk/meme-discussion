import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
function BoardText(props) {
  return (
    <Text>
      <GlobalStyle />
      <Text>{props.text}</Text>
    </Text>
  );
}
const Text = styled.div`
  font-size: 17pt;
  font-weight: bold;
  margin-bottom: 10px;
  margin-right: 13px;
  display: inline-block;
  width: 100px;
`;
export default BoardText;
