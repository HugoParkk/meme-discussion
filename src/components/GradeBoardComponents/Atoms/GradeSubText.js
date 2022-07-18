import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";

function GradeSubText(props) {
  return (
    <>
      <GlobalStyle />
      <StyledDiv>{props.text}</StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  color: #999999;
  display: inline-block;
  padding-left: 6px;
  font-size: 13px;
  letter-spacing: -0.7px;
`;

export default GradeSubText;
