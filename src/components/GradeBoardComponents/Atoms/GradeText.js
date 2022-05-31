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
  padding: 2px;
  padding-left: 6px;
  padding-right: 6px;
  border-radius: 7px;
  font-size: 13pt;
  width: 100px;
  text-align: center;
`;

const DefaultDiv = styled.div`
  color: black;
  display: inline-block;
  clear: both;
  padding: 2px;
  padding-left: 6px;
  padding-right: 6px;
  font-size: 13pt;
  width: 100px;
  text-align: center;
`;

export default GradeText;
