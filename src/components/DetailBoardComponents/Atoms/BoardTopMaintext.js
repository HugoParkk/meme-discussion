import React from "react";
import GlobalStyle from "../GlobalStyle";
import styled from "styled-components";

function BoardTopMaintext(props) {
  return (
    <>
      <GlobalStyle />
      <Text>{props.text}</Text>
    </>
  );
}

const Text = styled.div`
  font-size: 14pt;
  font-weight: bold;
  display: block;
  width: 90%;
  margin: 10px auto;
`;

export default BoardTopMaintext;
