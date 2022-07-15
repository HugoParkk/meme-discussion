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
  padding: 0.3472vw;
  padding-left: 0.6944vw;
  padding-right: 0.6944vw;
  font-size: 1.0889vw;
`;

export default GradeSubText;
