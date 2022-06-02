import React from "react";
import styled from "styled-components";

function BoardLine() {
  return <StyledDiv />;
}

const StyledDiv = styled.div`
  height: 2px;
  width: 37.5%;
  position: relative;
  left: 50%;
  background-color: #ff50e2;
`;

export default BoardLine;
