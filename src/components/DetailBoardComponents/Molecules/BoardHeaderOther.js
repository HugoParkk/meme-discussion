import React from "react";
import styled from "styled-components";
import BoardComment from "../Atoms/BoardComment";
import BoardUrl from "../Atoms/BoardUrl";

function BoardHeaderOther(props) {
  return (
    <OtherDiv>
      <BoardComment cnt={props.cnt} />
      <BoardUrl />
    </OtherDiv>
  );
}

const OtherDiv = styled.div`
  height: 25px;
  position: relative;
  top: 30px;
  float: right;
  border: 1px solid black;
`;

export default BoardHeaderOther;
