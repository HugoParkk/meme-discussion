import React from "react";
import styled from "styled-components";

function BoardImg(props) {
  return <StyledImg src={props.src} />;
}

const StyledImg = styled.img`
  display: inline-block;
  position: relative;
  left: 12.5%;
  width: 32.5%;
`;

export default BoardImg;
