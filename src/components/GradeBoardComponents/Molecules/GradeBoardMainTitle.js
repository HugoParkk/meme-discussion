import React from "react";

import GlobalStyle from "../GlobalStyle";
import GradeBoardImg from "../Atoms/GradeBoardImg";
import GradeBoardTitle from "../Atoms/GradeBoardTitle";
import styled from "styled-components";

function GradeBoardMainTitle(props) {
  return (
    <StyledDiv>
      <GlobalStyle />
      <GradeBoardImg src={props.src} />
      <GradeBoardTitle text="앗! 잠깐만요" />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  margin: 0 auto;
  width: 70%;
  margin-bottom: 1.5rem;
  margin-top: 1rem;
`;

export default GradeBoardMainTitle;
