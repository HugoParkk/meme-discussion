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
  color: #cfcfcf;
  display: inline-block;
  clear: both;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 13pt;
`;

export default GradeSubText;
