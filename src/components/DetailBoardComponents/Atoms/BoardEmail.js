import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";

function BoardEmail() {
  return (
    <>
      <GlobalStyle />
      <Email><span>거래자</span>che******@donga.com | NFT 인증 이용중 <b>코드보기 &#62;</b></Email>
    </>
  );
}
const Email = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  width: 350px;
`;

export default BoardEmail;
