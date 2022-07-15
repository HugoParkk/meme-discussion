import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";

function GradeText(props) {
  return (
    <>
      <GlobalStyle />
      {props.type === "pink" ? (
        <PinkDiv>{props.text}</PinkDiv>
      ) : (
        <DefaultDiv>{props.text}</DefaultDiv>
      )}
    </>
  );
}

const PinkDiv = styled.div`
  color: white;
  background-color: #ff50e2;
  display: inline-block;
  clear: both;
  padding: 0.1389vw;
  padding-left: 0.4167vw;
  padding-right: 0.4167vw;
  border-radius: 0.4861vw;
  font-size: 0.9vw;
  width: 6.0417vw;
  text-align: center;
  margin-left: 0.4514vw;
  margin-right: 0.4514vw;
  cursor: pointer;
`;

const DefaultDiv = styled.div`
  color: black;
  display: inline-block;
  clear: both;
  padding: 2px;
  padding-left: 0.4514vw;
  padding-right: 0.4514vw;
  font-size: 0.9vw;
  width: 6.8417vw;
  text-align: center;
  cursor: pointer;
`;

export default GradeText;
