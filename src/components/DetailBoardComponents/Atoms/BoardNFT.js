import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
function BoardNFT() {
  return (
    <>
      <GlobalStyle />
      <PinkText>NFT 원본 인증 완료</PinkText>
    </>
  );
}

const PinkText = styled.div`
  font-size: 17pt;
  color: #ff50e2;
  display: inline-block;
  position: absolute;
  margin-left: 55%;
  margin-top: -7rem;
`;
export default BoardNFT;
