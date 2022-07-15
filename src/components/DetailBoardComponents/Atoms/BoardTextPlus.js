import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
function BoardTextPlus(props) {
  return (
    <Text>
      <GlobalStyle />
      <Text>{props.text2}</Text>
    </Text>
  );
}
const Text = styled.div`
  font-size: 10pt;
  margin-bottom: 10px;
  margin-right: 10px;
  display: inline-block;
  width: 100px;
  position: relative;
  left: 15pt;
`;
export default BoardTextPlus;
