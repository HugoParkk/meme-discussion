import React from "react";
import styled from "styled-components";

function ImgAreaRight(props) {
  return (
    <Wrap route={props.url}>
      <Img src={props.src} />
      <D color={props.color} />
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 75%;
  height: 100%;
  position: relative;
  border-bottom: 1px solid gray;
  border-right: 1px solid gray;
  display: block;
  background: url(${(props) => props.route});
  background-size: cover;
  box-shadow: 7px 7px 7px -7px inset black;
`;

const D = styled.div`
  width: 17.1875vw;
  height: 17.1875vw;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: ${(props) => props.color};
  display: inline-block;
  border: 3px solid black;
  z-index: 3;
`;
const Img = styled.img`
  width: 15.625vw;
  height: 15.625vw;
  border: 1px solid black;
  outline: 4px solid yellow;
  transform: translate(-50%, -50%);
  position: relative;
  top: 50%;
  left: 50%;
  z-index: 5;
  display: inline-block;
`;
export default ImgAreaRight;
