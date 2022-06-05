import React from "react";
import styled from "styled-components";
import BoardFooter from "./BoardFooter";

function BoardFooterList(props) {
  return (
    <StyledDiv>
      {props.data.map((arr, i) => {
        return <BoardFooter data={arr} />;
      })}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  border: 5px solid hotpink;
  width: 60%;
  margin: 0 auto;
`;

export default BoardFooterList;
