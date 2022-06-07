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
  padding-right: 10px;
  padding-left: 10px;
  font-size: 13pt;
  padding-top: 1.5rem;
`;

const StyledDiv = styled.div`
  color: #cfcfcf;
  display: inline-block;
  clear: both;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 13pt;
`;

export default PinkAreaSubTitle;
