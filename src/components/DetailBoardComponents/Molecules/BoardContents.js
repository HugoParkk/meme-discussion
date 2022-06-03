import React from "react";
import styled from "styled-components";
import BoardCostText from "../Atoms/BoardCostText";
import BoardMainText from "../Atoms/BoardMainText";
import BoardTextGroup from "./BoardTextGroup";
import BoardTextGroupClone from "./BoardTextGroupClone";

function BoardContents(props) {
  return (
    <StyledDiv>
      <BoardMainText />
      <BoardCostText />
      <BoardTextGroup data={props.data} />
      <BoardTextGroupClone />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: inline-block;
  width: 50%;
  position: absolute;
  left: 50%;
`;

export default BoardContents;
