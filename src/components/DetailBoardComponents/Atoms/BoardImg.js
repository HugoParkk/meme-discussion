import React from "react";
import styled from "styled-components";

function BoardImg(props) {
  return (
    <>
      <StyledDiv><img src={props.src} /></StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  
`;

export default BoardImg;
