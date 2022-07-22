import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";

function GradeDescribe() {
  return (
    <>
      <GlobalStyle />
      <StyledText>
        <PinkSpan><b>갓기 회원</b></PinkSpan> 등급이 되시면 읽기가 가능한 게시판
        입니다.
        <br />
        <p>현재 닉네임 님은 방문자회원 등급이시며, 등업에 관련된 궁금하신 사항은
        카페 매니저나 회원관리 스탭에게 문의해 주세요.</p>
      </StyledText>
    </>
  );
}
const PinkSpan = styled.span`
  font-size: 13px;
  display: inline-block;
  color: #ff50e2;
`;
const StyledText = styled.div`
  letter-spacing: -0.85px;
  font-size: 13px;
  font-weight: 500;
  display: block;
  width: 100%;
  line-height: 35px;
  margin: 0 auto;
  position: relative;
  margin: -18px 0 -15px 53px;
  p {
    margin: -10px 0;
  }
`;

export default GradeDescribe;
