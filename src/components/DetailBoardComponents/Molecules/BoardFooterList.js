import React from "react";
import styled from "styled-components";
import BoardFooter from "./BoardFooter";

function BoardFooterList(props) {
  return (
    <StyledDiv>
      {props.data.map((arr, i) => {
        return <BoardFooter data={arr} key={i} />;
      })}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  border: 5px solid magenta;
  width: 650pt;
  margin: 0 auto;
  position: relative;
  top: 60pt;
  left: 80pt;
`;

export default BoardFooterList;
