import React from "react";
import styled from "styled-components";

function GradeBoardImg(props) {
  return <StyledImg src={props.src} />;
}

const StyledImg = styled.img`
  display: inline-block;
  width: 4%;
  height: 2%;
  position: relative;
  left: -18%;
  top: 0.1rem;
  transform: translate(50%);
`;

export default GradeBoardImg;
