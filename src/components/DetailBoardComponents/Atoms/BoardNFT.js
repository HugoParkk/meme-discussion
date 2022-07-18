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
  font-size: 12px;
  font-weight: 600;
  color: #ff50e2;
  padding: 20px 0 20px 53px;
`;
export default BoardNFT;
