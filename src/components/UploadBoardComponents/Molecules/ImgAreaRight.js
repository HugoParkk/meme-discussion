import React from "react";
import styled from "styled-components";
import MainImg from "../Atoms/MainImg";

function ImgAreaRight(props) {
  return (
    <Wrap>
      <MainImg src={props.src} color={props.color} />
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 75%;
  height: 100%;
  border-bottom: 1px solid gray;
  border-right: 1px solid gray;
  display: block;
  box-shadow: 7px 7px 7px -7px inset black;
`;

export default ImgAreaRight;
