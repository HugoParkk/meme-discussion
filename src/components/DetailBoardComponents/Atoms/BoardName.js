import React from "react";
import styled from "styled-components";

function BoardName(props) {
  return <DivName>{props.text}</DivName>;
}

const DivName = styled.div`
  font-size: 14pt;
  font-weight: bold;
  display: inline-block;
  margin-left: 10px;
`;

export default BoardName;
