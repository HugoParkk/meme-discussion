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
  border-radius: 4.2px;
  font-size: 13px;
  width: 62px;
  height: 20px;
  text-align: center;
  padding-right: 1.5px;
  margin-left: 8px;
  margin-right: 10px;
  font-weight: 350;
  letter-spacing: -0.4px;
`;

const DefaultDiv = styled.div`
  color: black;
  display: inline-block;
  padding: 2px;
  padding-left: 9px;
  letter-spacing: -0.4px;
  font-size: 13px;
  width: 80px;
  font-weight: 500;
  letter-spacing: -0.6px;
`;

export default GradeText;
