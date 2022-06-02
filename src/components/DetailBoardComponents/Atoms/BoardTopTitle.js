import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
function BoardTopTitle(props) {
  return (
    <>
      <GlobalStyle />
      <TextPink>{props.text}</TextPink>
    </>
  );
}

const TextPink = styled.div`
  font-size: 13pt;
  font-weight: bold;
  display: block;
  color: #ff50e2;
  width: 75%;
  margin: 0 auto;
`;
export default BoardTopTitle;
