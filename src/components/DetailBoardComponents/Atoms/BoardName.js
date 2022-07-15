import React from "react";
import styled from "styled-components";

function BoardName(props) {
  return <DivName>{props.text}</DivName>;
}

const DivName = styled.div`
  font-size: 10pt;
  display: inline-block;
  position: relative;
  top: -90pt;
  left: 290pt;
  z-index: 100000;
`;

export default BoardName;
