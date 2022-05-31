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
  display: block;
  font-size: 22pt;
  text-align: left;
  width: 70%;
  margin: 0 auto;
`;

export default GradeBoardTitle;
