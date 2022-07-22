import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
import title from "../img/Title.png";

function Title() {
  return (
    <>
      <GlobalStyle />
      <StyledDiv><img src={title} alt="밈품명품"></img></StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  text-align: center;
`;

export default Title;
