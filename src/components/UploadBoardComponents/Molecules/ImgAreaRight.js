import React from "react";
import styled from "styled-components";
import MainImg from "../Atoms/MainImg";

function ImgAreaRight(props) {
  return (
    <Wrap>
      <StyledDiv />
      <MainImg src={props.src} color={props.color} />
    </Wrap>
  );
}

const StyledDiv = styled.div`
  top: -306px;
  width: 348px;
  height: 348px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  background-color: black;
  z-index: -1;
`;

const Img = styled.img`
  height: 325px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 5px solid yellow;
  outline: 8px solid #ff50e2;
`;

const Wrap = styled.div`
  width: 75%;
  height: 100%;
  border-bottom: 1px solid gray;
  border-right: 1px solid gray;
  display: block;
  box-shadow: 7px 7px 7px -7px inset black;
`;

export default ImgAreaRight;
