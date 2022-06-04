import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
import svg from "../../../images/Group 38.svg";
function ShopBoardTopPlusBtn() {
  return (
    <>
      <GlobalStyle />
      <Btn>
        <PlusImg src={svg} alt="플러스 이미지"></PlusImg>
      </Btn>
    </>
  );
}
const Btn = styled.button`
  cursor: pointer;
  border: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0);
  position: relative;
  left: 78.5%;
  width: 37.5%;
`;

const PlusImg = styled.img`
  width: 3rem;
  height: 3rem;
  display: inline-block;
  margin-left: 10px;
`;
export default ShopBoardTopPlusBtn;
