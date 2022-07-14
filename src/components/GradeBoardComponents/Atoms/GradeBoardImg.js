import React from "react";
import styled from "styled-components";

function GradeBoardImg(props) {
  return <StyledImg src={props.src} />;
}

const StyledImg = styled.img`
  display: inline-block;
  width: 5%;
  height: 2%;
  position: relative;
  left: -20%;
  top: 6px;
  transform: translate(50%);
`;

export default GradeBoardImg;
