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
  font-size: 22pt;
  font-weight: bold;
  display: block;
  width: 75%;
  margin: 0 auto;
`;

export default BoardTopMaintext;
