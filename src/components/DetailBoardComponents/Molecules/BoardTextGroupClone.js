import React from "react";
import styled from "styled-components";
import BoardTextBtn from "../Atoms/BoardTextBtn";
import BoardTextClone from "../Atoms/BoardTextClone";

function BoardTextGroupClone() {
  return (
    <>
      <StyledDiv>
        <BoardTextClone />
        <BoardTextBtn />
      </StyledDiv>
    </>
  );
}
const StyledDiv = styled.div`
  width: 70%;
  margin: 0 auto;
`;
export default BoardTextGroupClone;
