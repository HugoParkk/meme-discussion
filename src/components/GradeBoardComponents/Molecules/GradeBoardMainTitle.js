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
  width: 600px;
  margin-bottom: 25px;
  margin-top: 20px;
`;

export default GradeBoardMainTitle;
