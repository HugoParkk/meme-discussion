import React from "react";

import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";

function GradeBoardTitle(props) {
  return (
    <>
      <GlobalStyle />
      <StyledText>{props.text}</StyledText>
    </>
  );
}
const StyledText = styled.div`
  font-weight: bold;
  display: inline-block;
  font-size: 22px;
  margin-left: 8px;

`;

export default GradeBoardTitle;
