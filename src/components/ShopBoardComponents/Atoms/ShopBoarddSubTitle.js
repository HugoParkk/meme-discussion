import React from "react";
import styled from "styled-components";

function ShopBoarddSubTitle(props) {
  return <StyledDiv>{props.text}</StyledDiv>;
}

const StyledDiv = styled.div`
  font-size: 0.694vw;
  color: gray;
`;

export default ShopBoarddSubTitle;
