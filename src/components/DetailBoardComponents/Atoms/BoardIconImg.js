import React from "react";
import styled from "styled-components";

function BoardImg(props) {
  return <StyledImg src={props.src} />;
}

const StyledImg = styled.img`
  width: 3rem;
  height: 3rem;
  margin-right: 10px;
  border-radius: 50%;
`;

export default BoardImg;
