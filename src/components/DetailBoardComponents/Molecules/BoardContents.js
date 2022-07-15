import React from "react";
import styled from "styled-components";
import BoardCostText from "../Atoms/BoardCostText";
import BoardMainText from "../Atoms/BoardMainText";
import BoardTextGroup from "./BoardTextGroup";
import BoardTextGroupClone from "./BoardTextGroupClone";
import GlobalStyle from "../GlobalStyle";

function BoardContents(props) {
  return (
    <>
      <StyledDiv>
        <BoardMainText />
        <BoardCostText />
        <BoardTextGroup data={props.data} />
        <BoardTextGroupClone />
      </StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  width: 380px;
`;

export default BoardContents;
