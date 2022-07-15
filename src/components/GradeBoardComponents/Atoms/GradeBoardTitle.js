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
  font-size: 1.7361vw;
  text-align: left;
  width: 50%;
  margin: 0 auto;
  position: absolute;
  left: 8%;
`;

export default GradeBoardTitle;
