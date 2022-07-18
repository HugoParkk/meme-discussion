import React, { useState } from "react";
import styled from "styled-components";
import Popup from "../../Popup";

function GradeButton(props) {
  const { } = props;

  const [popup, handlerPopup] = useState(false);
  return (
    <>
    {popup && <Popup onClose={handlerPopup} />}
      {props.type === "white" ? (
        <WhiteDiv>
          <a href="http://localhost:3000/productlist">
            {props.text}
          </a>
        </WhiteDiv>
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
  height: 30px;
  width: 76px;
  line-height: 29px;
  text-align: center;
  background-color: white;
  border: 1px solid #cfcfcf;
  margin-right: 9px;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  a{
    text-decoration: none;
    color: #000;
  }
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
