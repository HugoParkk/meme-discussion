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
  font-size: 11pt;
  color: #000000;
  width: 75%;
  height: 15rem;
  margin: 0 auto;
  margin-top: 2rem;
  display: block;
  margin: auto;
  position: relative;
  left: -50pt;
`;
export default BoardBottomLastText;
