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
<<<<<<< Updated upstream
  width: 6.3333vw;
  height: 1.9389vw;
  line-height: 1.9389vw;
=======
  height: 30px;
  width: 76px;
  line-height: 29px;
>>>>>>> Stashed changes
  text-align: center;
  background-color: white;
  border: 1px solid #cfcfcf;
  margin-right: 9px;
  border-radius: 4px;
  font-size: 12px;
`;

const PinkDiv = styled.div`
  div {
    width: 88px;
    height: 30px;
    line-height: 29px;
    text-align: center;
    background-color: #ff50e2;
    display: inline-block;
    color: white;
    border-radius: 4px;
    font-size: 12px;
  }
  a {
    text-decoration: none;
    color: #000;
  }
`;

export default GradeButton;
