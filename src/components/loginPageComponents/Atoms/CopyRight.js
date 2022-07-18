import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
import mini_title from "../img/mini_title.png";

function CopyRight() {
  return (
    <>
      <GlobalStyle />
      <StyledDiv>
      <img src={mini_title} alt="밈품명품" id="mini_title"></img>
        <StyledText>CopyRight for Channel A.All Right
Reserved</StyledText>
        
      </StyledDiv>
    </>
  );
}

const StyledText = styled.div`
  display: inline-block;
  padding-left: 8px;
`;

const StyledDiv = styled.div`
  position: relative;
  #mini_title {
    position: relative;
    top: 3px;
  }
  font-size: 12px;
  text-align: center;
  color: white;
`;

export default CopyRight;
