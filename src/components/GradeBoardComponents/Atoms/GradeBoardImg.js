import React from "react";
import styled from "styled-components";

function GradeBoardImg(props) {
  return <StyledImg src={props.src} />;
}

const StyledImg = styled.img`
  display: inline-block;
  width: 18px;
  padding-top: 6px;
  margin: 7px 0 0 -103px;
  // margin: 38.91px 0 0 30px;
`;

export default GradeBoardImg;
