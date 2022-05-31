import React from "react";
import styled from "styled-components";

function GradeImage(props) {
  return <StyledImg src={props.src} />;
}
const StyledImg = styled.img`
  width: 13pt;
  height: 13pt;
  display: inline-block;
  margin-right: 10px;
`;

export default GradeImage;
