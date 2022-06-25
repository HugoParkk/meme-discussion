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
  margin-top: 5pt;
  margin-bottom: 5pt;
  font-size: 12pt;
  color: black;
  display: inline-block;
  font-weight: bold;
`;

const PinkDiv = styled.div`
  font-size: 12pt;
  color: hotpink;
  display: inline-block;
  font-weight: bold;
`;

export default ShopBoardTitle;
