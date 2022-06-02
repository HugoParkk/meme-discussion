import React from "react";
import GlobalStyle from "../GlobalStyle";
import styled from "styled-components";

function BoardTopMaintext() {
  return (
    <>
      <GlobalStyle />
      <Text>짤 판매 제목</Text>
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
