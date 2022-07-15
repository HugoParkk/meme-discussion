import React from "react";
import styled from "styled-components";

function GradeButton(props) {
  return (
    <>
      {props.type === "white" ? (
        <WhiteDiv>{props.text}</WhiteDiv>
      ) : (
        <PinkDiv>{props.text}</PinkDiv>
      )}
    </>
  );
}

const WhiteDiv = styled.div`
  padding: 0 1.2rem;
  height: 38px;
  line-height: 38px;
  text-align: center;
  background-color: white;
  border: 1px solid #cfcfcf;
  display: inline-block;
  margin-right: 15px;
  border-radius: 5px;
`;

const PinkDiv = styled.div`
  padding: 0 1.2rem;
  height: 38px;
  line-height: 38px;
  text-align: center;
  background-color: #ff50e2;
  display: inline-block;
  color: white;
  border-radius: 5px;
`;

export default GradeButton;
