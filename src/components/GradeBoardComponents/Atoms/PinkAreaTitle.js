import React from "react";
import styled from "styled-components";

function PinkAreaTitle(props) {
  return <StyledDiv>{props.text}</StyledDiv>;
}

const StyledDiv = styled.div`
  color: black;
  display: inline-block;
  padding-left: 1px;
  padding-right: 1px;
  font-size: 13px;
  width: 75px;
  text-align: left;
  font-weight: 600;
`;

export default PinkAreaTitle;
