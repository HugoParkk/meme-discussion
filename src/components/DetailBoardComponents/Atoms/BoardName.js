import React from "react";
import styled from "styled-components";

function BoardName(props) {
  return <DivName>{props.text}</DivName>;
}

const DivName = styled.div`
  font-size: 17pt;
  display: inline-block;
  position: absolute;
  margin-left: 50%;
  margin-top: -10rem;
`;

export default BoardName;
