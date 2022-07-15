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
  padding-right: 0.6944vw;
  padding-left: 0.6944vw;
  font-size: 0.8417vw;
  padding-top: 0.5944vw;
`;

const StyledDiv = styled.div`
  color: #cfcfcf;
  display: inline-block;
  clear: both;
  padding: 5px;
  padding-left: 0.6944vw;
  padding-right: 0.6944vw;
  font-size: 0.8417vw;
`;

export default PinkAreaSubTitle;
