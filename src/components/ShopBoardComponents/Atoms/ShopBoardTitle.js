import React from "react";
import styled from "styled-components";

function ShopBoardTitle(props) {
  return (
    <>
      {props.type === "black" ? (
        <BlackDiv>{props.text}</BlackDiv>
      ) : (
        <PinkDiv>{props.text}</PinkDiv>
      )}
    </>
  );
}

const BlackDiv = styled.div`
  margin: 0.347vw;
  margin-left: 0;
  font-size: 13px;
  color: black;
  display: inline-block;
  font-weight: bold;
`;

const PinkDiv = styled.div`
  font-size: 13px;
  color: #FF50E2;
  display: inline-block;
  font-weight: bold;
`;

export default ShopBoardTitle;
