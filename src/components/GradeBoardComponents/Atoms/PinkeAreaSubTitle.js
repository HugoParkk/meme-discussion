import React from "react";
import styled from "styled-components";

function PinkAreaSubTitle(props) {
  return (
    <>
      {props.type === "black" ? (
        <StyledBlack>{props.text}</StyledBlack>
      ) : (
        <StyledDiv>{props.text}</StyledDiv>
      )}
    </>
  );
}

const StyledBlack = styled.div`
  color: black;
  display: inline-block;
  clear: both;
  padding-right: 3px;
  padding-left: 3px;
  font-size: 13px;
  padding-top: 15px;
`;

const StyledDiv = styled.div`
  color: #999999;
  letter-spacing: -0.7px;
  display: inline-block;
  padding: 4px;
  font-size: 13px;
`;

export default PinkAreaSubTitle;
