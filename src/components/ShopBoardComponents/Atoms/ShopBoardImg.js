import React from "react";
import styled from "styled-components";

function ShopBoardImg(props) {
  return <StyledImg src={props.src} />;
}

const StyledImg = styled.img`
  width: 10.069vw;
  height: 10.069vw;
  background-color: blue;
  position: relative;
`;

export default ShopBoardImg;
