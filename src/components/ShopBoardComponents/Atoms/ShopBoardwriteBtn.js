import React from "react";
import styled from "styled-components";
import svg from "../../../images/Group 343.svg";
function ShopBoardwriteBtn() {
  return (
    <>
      <Btn>
        <Image src={svg} />
      </Btn>
    </>
  );
}
const Btn = styled.button`
  position: absolute;
  cursor: pointer;
  display: inline-block;
  border: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0);
  position: relative;
  left: 550pt;
  top: 40pt;
`;
const Image = styled.img`
  width: 100px;
  height: 30px;
  position: relative;
`;
export default ShopBoardwriteBtn;
