import React from "react";
import styled from "styled-components";

function BoardRating(props) {
  return <DivRating>{props.text}</DivRating>;
}

const DivRating = styled.div`
  font-size: 10pt;
  font-weight: bold;
  display: inline-block;
  color: #999999;
  margin-left: 7px;
  margin-right: 10px;
`;

export default BoardRating;
