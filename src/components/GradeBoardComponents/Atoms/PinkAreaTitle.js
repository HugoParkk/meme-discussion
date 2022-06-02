import React from "react";
import styled from "styled-components";

function PinkAreaTitle(props) {
  return <StyledDiv>{props.text}</StyledDiv>;
}

const StyledDiv = styled.div`
  color: black;
  display: inline-block;
  clear: both;
  padding: 2px;
  padding-left: 6px;
  padding-right: 6px;
  border-radius: 7px;
  font-size: 13pt;
  width: 100px;
  text-align: left;
`;

export default PinkAreaTitle;
