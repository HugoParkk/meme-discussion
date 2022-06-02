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
          <Contents key={i}>
            <StyledDiv>
              <BoardText text={arr.text} />
              <BoardTextPlus text2={arr.text2} />
              <BoardTextnote note={arr.note} />
              <br />
            </StyledDiv>
          </Contents>
        );
      })}
    </>
  );
}

const Contents = styled.div`
  width: 50%;
  position: relative;
  left: 50%;
  margin: 0;
`;

const StyledDiv = styled.div`
  width: 100%;
`;
export default BoardTextGroup;
