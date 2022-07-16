import React from "react";
import styled from "styled-components";

function Line() {
  return <StyledDiv />;
}

const StyledDiv = styled.div`
  width: 99%;
  height: 1px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ff50e2;
  margin-top: 3%;
  margin-bottom: 2%;
  /* margin-top: 2.6042vw; */
  /* margin-bottom: 0.7813vw; */
`;

export default Line;
