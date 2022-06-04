import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
import svg from "../../../images/Group 316.svg";
function ShopBoardTopText() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Text>짤랑이 거래 ~~ 여기는 짤장터</Text>
        <StarImg src={svg} alt="StarImg" />
      </Wrapper>
    </>
  );
}
const Text = styled.div`
  color: #ff50e2;
  font-size: 18pt;
  font-weight: bold;
  display: inline-block;
`;
const StarImg = styled.img`
  width: 1rem;
  height: 2rem;
  display: inline-block;
  margin-left: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export default ShopBoardTopText;
