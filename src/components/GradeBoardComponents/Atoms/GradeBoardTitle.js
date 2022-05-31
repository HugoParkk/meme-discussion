import React from "react";

import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";

function GradeBoardTitle() {
  return (
    <>
      <GlobalStyle />
      <StyledText>앗! 잠깐만요</StyledText>
    </>
  );
}
const StyledText = styled.div`
  font-weight: bold;
  display: inline-block;
  font-size: 22pt;
`;

export default GradeBoardTitle;
