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
  position: relative;
  display: inline-block;
  margin-left: 10px;
  font-size: 10pt;
  margin-left: 300pt;
  margin-top: -10rem;
  top: -90pt;
  width: 200pt;
`;

export default BoardEmail;
