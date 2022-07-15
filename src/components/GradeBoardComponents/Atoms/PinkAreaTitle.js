import React from "react";
import styled from "styled-components";

function PinkAreaTitle(props) {
  return <StyledDiv>{props.text}</StyledDiv>;
}

const StyledDiv = styled.div`
  color: black;
  display: inline-block;
  clear: both;
  padding: 0.1389vw;
  padding-left: 0.4167vw;
  padding-right: 0.2167vw;
  border-radius: 0.4861vw;
  font-size: 0.8417vw;
  width: 6.9444vw;
  text-align: left;
  font-weight: bold;
`;

export default PinkAreaTitle;
