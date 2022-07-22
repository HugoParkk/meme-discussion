import React from "react";
import styled from "styled-components";

function BoardComment(props) {
  return <Comment>댓글 {props.cnt}</Comment>;
}

const Comment = styled.div`
  font-size: 10pt;
  display: inline-block;
`;

export default BoardComment;
