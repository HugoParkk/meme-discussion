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
  font-size: 22px;
  font-weight: bold;
  display: inline-block;
`;
const StarImg = styled.img`
  width: 1.666vw;
  display: inline-block;
  margin-left: 0.694vw;
  margin-top: 0.333vw;
`;

const Wrapper = styled.div`
  margin-left: 20px;
  width: 33.333vw;
  margin-top: 1vw;
  margin-bottom: 1.5vw;
  display: flex;
  position: relative;
  align-items: center;
  overflow: hidden;
  top: -0.347vw;
`;

export default ShopBoardTopText;
