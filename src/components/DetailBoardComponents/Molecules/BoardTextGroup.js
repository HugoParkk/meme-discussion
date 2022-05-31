import React from "react";
import styled from "styled-components";
import BoardText from "../Atoms/BoardText";
import BoardTextnote from "../Atoms/BoardTextnote";
import BoardTextPlus from "../Atoms/BoardTextPlus";
function BoardTextGroup(props) {
  return (
    <>
      {props.data.map((arr, i) => {
        return (
          <StyledDiv key={i}>
            <BoardText text={arr.text} />
            <BoardTextPlus text2={arr.text2} />
            <BoardTextnote note={arr.note} />
            <br />
          </StyledDiv>
        );
      })}
    </>
  );
}
const StyledDiv = styled.div`
  width: 70%;
  margin: 0 auto;
`;
export default BoardTextGroup;
