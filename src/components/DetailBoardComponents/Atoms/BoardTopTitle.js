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
  font-size: 17pt;
  display: block;
  color: #ff50e2;
  width: 75%;
  margin: 0 auto;
  margin-bottom: 1rem;
  /* 방송캡쳐 */
`;

const TextBlack = styled.div`
  font-size: 17pt;
  font-weight: bold;
  display: block;
  color: black;
  width: 10%;
  margin: 0 auto;
  position: absolute;
  margin-left: 78%;
  margin-top: -10rem;
`;

export default BoardTopTitle;
