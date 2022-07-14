import React from "react";
import styled from "styled-components";

function BoardLine() {
  return <StyledDiv />;
}

const StyledDiv = styled.div`
  height: 2px;
  width: 50%;
  position: relative;
  left: 45%;
  background-color: #ff50e2;
  margin-top: -7rem;
  margin-bottom: 100pt;
`;

export default BoardLine;
