import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
function BoardEmail() {
  return (
    <>
      <GlobalStyle />
      <Email>che******@donga.com | NFT 인증 이용중</Email>
    </>
  );
}
const Email = styled.div`
  position: absolute;
  display: inline-block;
  margin-left: 10px;
  font-size: 17pt;
  margin-left: 55%;
  margin-top: -10rem;
`;

export default BoardEmail;
