import React from "react";
import styled from "styled-components";

function ShopBoardImg(props) {
  return <StyledImg src={props.src} />;
}

const StyledImg = styled.img`
  width: 145pt;
  height: 145pt;
  background-color: blue;
  position: relative;
`;

export default ShopBoardImg;
