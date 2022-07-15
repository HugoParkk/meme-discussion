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
  position: absolute;
  left: 38.767vw;
  top: 0.694vw;
`;

const PlusImg = styled.img`
  width: 4.167vw;
  height: 2.5vw;
  display: inline-block;
  margin-left: 0.521vw;
`;

export default ShopBoardTopPlusBtn;
