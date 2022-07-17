import React from "react";
import styled from "styled-components";

function GradeButton(props) {
  return (
    <>
      {props.type === "white" ? (
        <WhiteDiv>{props.text}</WhiteDiv>
      ) : (
        <PinkDiv>
          <a href="http://localhost:3000/upload">
            <div>{props.text}</div>
          </a>
        </PinkDiv>
      )}
    </>
  );
}

const WhiteDiv = styled.div`
  width: 6.3333vw;
  height: 1.9389vw;
  line-height: 1.9389vw;
  text-align: center;
  background-color: white;
  border: 1px solid #cfcfcf;
  display: inline-block;
  margin-right: 1.0417vw;
  border-radius: 0.3472vw;
  font-size: 1vw;
`;

const PinkDiv = styled.div`
  div {
    width: 6.3333vw;
    height: 1.9389vw;
    line-height: 1.9389vw;
    text-align: center;
    background-color: #ff50e2;
    display: inline-block;
    color: white;
    border-radius: 0.3472vw;
    font-size: 1vw;
  }
  a {
    text-decoration: none;
    color: #000;
  }
`;

export default GradeButton;
