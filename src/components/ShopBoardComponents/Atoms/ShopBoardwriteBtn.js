import React from "react";
import styled from "styled-components";
import svg from "../../../images/Group 343.svg";
function ShopBoardwriteBtn() {
  return (
    <>
      <Btn>
        <img src={svg} />
      </Btn>
    </>
  );
}
const Btn = styled.div`
  cursor: pointer;
  left: 600px;
`;

export default ShopBoardwriteBtn;
