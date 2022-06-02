import React from "react";
import styled from "styled-components";

function BoardDate(props) {
  return <BoardText>{props.text}</BoardText>;
}

const BoardText = styled.div`
  font-size: 13pt;
  display: block;
  color: #999999;
  padding-left: 10px;
`;

export default BoardDate;
