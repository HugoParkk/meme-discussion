import React from "react";
import styled from "styled-components";

function GradeImage(props) {
  return <StyledImg src={props.src} />;
}
const StyledImg = styled.img`
  width: 1.7361vw;
  height: 1.7361vw;
  display: inline-block;
`;

export default GradeImage;
