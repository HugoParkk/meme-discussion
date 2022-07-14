import React from "react";
import styled from "styled-components";

function BoardImg(props) {
  return (
    <>
      <StyledImg src={props.src} />
      <StyledDiv />
    </>
  );
}

const StyledDiv = styled.div`
  width: 310px;
  height: 310px;
  background-color: #dbdbdb;
  position: absolute;
  z-index: 9;
  margin-top: -309.5px;
  margin-left: 43px;
  border: 2px solid black;
`;

const StyledImg = styled.img`
  display: inline-block;
  position: relative;
  left: 5.6%;
  width: 300px;
  height: 300px;
  border: 4px solid #999999;
  z-index: 10;
  outline: 1px solid black;
`;

export default BoardImg;
