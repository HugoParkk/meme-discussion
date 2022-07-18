import React from "react";
import styled from "styled-components";

function ShopBoardImg(props) {
  return <StyledImg src={props.src} />;
}

const StyledImg = styled.img`
  width: 198px;
  height: 198px;
`;

export default ShopBoardImg;
