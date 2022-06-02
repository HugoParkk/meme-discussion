import React from "react";
import styled from "styled-components";

function BoardComment(props) {
  return <Comment>{props.cnt}</Comment>;
}

const Comment = styled.div`
  font-size: 13pt;
  display: inline-block;
`;

export default BoardComment;
