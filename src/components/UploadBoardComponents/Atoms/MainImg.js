import React from "react";
import styled from "styled-components";

function MainImg(props) {
  const style = {
    width: `330px`,
    height: `330px`,
    transform: `translate(-50%, -50%)`,
    position: `absolute`,
    top: `28.4%`,
    left: `31%`,
    backgroundColor: `${props.color}`,
    display: `inline-block`,
    border: `3px solid black`,
    zIndex: `3`,
  };

  return (
    <>
      <Img src={props.src} />
      <div style={style} />
    </>
  );
}

const Img = styled.img`
  width: 300px;
  height: 300px;
  border: 1px solid black;
  outline: 4px solid yellow;
  transform: translate(-50%, -50%);
  position: relative;
  top: 50%;
  left: 50%;
  z-index: 5;
  display: inline-block;
`;

export default MainImg;
