import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";

function BoardTopTitle(props) {
  return (
    <>
      <GlobalStyle />
      {props.type === "pink" ? (
        <Text>{props.text}</Text>
      ) : (
        <TextBlack>{props.text}</TextBlack>
      )}
    </>
  );
}

const Text = styled.div`
  font-size: 13pt;
  font-weight: bold;
  display: block;
  color: #ff50e2;
  width: 75%;
  margin: 0 auto;
`;

const TextBlack = styled.div`
  font-size: 13pt;
  font-weight: bold;
  display: block;
  color: black;
  width: 75%;
  margin: 0 auto;
`;

export default BoardTopTitle;
