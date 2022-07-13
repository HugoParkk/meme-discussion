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
  font-size: 23pt;
  font-weight: bold;
  display: inline-block;
`;
const StarImg = styled.img`
  width: 2rem;
  height: 3rem;
  display: inline-block;
  margin-left: 10pt;
  margin-top: 0.4rem;
`;

const Wrapper = styled.div`
  margin-left: 22pt;
  margin-right: 0;
  width: 40rem;
  margin-top: 1%;
  margin-bottom: 2%;
  display: flex;
  position: relative;
  align-items: center;
  overflow: hidden;
`;

export default ShopBoardTopText;
