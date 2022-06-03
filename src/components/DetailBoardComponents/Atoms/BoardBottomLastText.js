import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";

function BoardBottomLastText(props) {
  return (
    <>
      <GlobalStyle />
      <Text>{props.text}</Text>
    </>
  );
}
const Text = styled.div`
  font-size: 13pt;
  color: #000000;
  font-weight: bold;
`;
export default BoardBottomLastText;
