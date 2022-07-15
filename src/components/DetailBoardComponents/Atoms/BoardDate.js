import React from "react";
import styled from "styled-components";

function BoardDate(props) {
  return <BoardText>{props.text}</BoardText>;
}

const BoardText = styled.div`
  font-size: 10pt;
  display: block;
  color: #999999;
`;

export default BoardDate;
