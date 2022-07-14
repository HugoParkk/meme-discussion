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
  font-size: 10pt;
  color: #ff50e2;
  display: inline-block;
  position: relative;
  left: 330pt;
  top: -110pt;
`;
export default BoardNFT;
