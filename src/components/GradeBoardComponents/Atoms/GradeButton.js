import React from "react";
import styled from "styled-components";

function GradeButton(props) {
  return (
    <>
      {props.type === "white" ? (
        <WhiteDiv>{props.text}</WhiteDiv>
      ) : (
        <PinkDiv><a href="http://localhost:3000/upload"><div>{props.text}</div></a></PinkDiv>
      )}
    </>
  );
}

const WhiteDiv = styled.div`
  width: 120px;
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
  div{
    width: 120px;
    height: 38px;
    line-height: 38px;
   text-align: center;
    background-color: #ff50e2;
    display: inline-block;
    color: white;
    border-radius: 5px;
  }
  a{
    text-decoration: none;
    color: #000;
  }
`;

export default GradeButton;
