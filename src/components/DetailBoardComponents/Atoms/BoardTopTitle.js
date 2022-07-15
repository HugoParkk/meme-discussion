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
  font-size: 10pt;
  display: block;
  color: #ff50e2;
  width: 90%;
  margin: 0 auto;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 7px;
  /* 방송캡쳐 */
`;

const TextBlack = styled.div`
  font-size: 10pt;
  font-weight: bold;
  display: block;
  color: black;
  width: 10%;
  margin: 0 auto;
  position: relative;
  left: 230pt;
  top: -105pt;
`;

export default BoardTopTitle;
