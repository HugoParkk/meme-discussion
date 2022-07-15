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
  width: 325px;
  height: 325px;
  background-color: #838383;
  position: relative;
  border: 10px solid #838383;
  outline: 2px solid #000;
  img{
    position: absolute;
    width: 300px;
    height: 300px;
    border: 5px solid #838383;
    outline: 5px solid #D9D9D9;
    top: 2.5px;
    left: 2.5px;
  }
`;

export default BoardImg;
