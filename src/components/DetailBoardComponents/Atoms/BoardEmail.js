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
  display: inline-block;
  margin-left: 10px;
  color: #999999;
  font-size: 12pt;
  font-weight: bold;
`;

export default BoardEmail;
