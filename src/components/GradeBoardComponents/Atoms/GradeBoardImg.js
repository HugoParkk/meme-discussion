import React from "react";
import styled from "styled-components";

function GradeBoardImg(props) {
  return <StyledImg src={props.src} />;
}

const StyledImg = styled.img`
  display: inline-block;
  width: 1.6753vw;
  height: 2.7583vw;
  position: relative;
  left: -20%;
  top: 0.1rem;
  transform: translate(50%);
`;

export default GradeBoardImg;
