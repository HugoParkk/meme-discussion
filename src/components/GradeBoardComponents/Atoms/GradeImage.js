import React from "react";
import styled from "styled-components";

function GradeImage(props) {
  return <StyledImg src={props.src} />;
}
const StyledImg = styled.img`
  display: inline-block;
  margin-left: -10px;
  height: 14px;
  width: 14px;
`;

export default GradeImage;
