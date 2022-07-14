import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";

function GradeDescribe() {
  return (
    <>
      <GlobalStyle />
      <StyledText>
        <PinkSpan>갓기 회원</PinkSpan> 등급이 되시면 읽기가 가능한 게시판
        입니다.
        <br />
        현재 닉네임 님은 방문자회원 등급이시며, 등업에 관련된 궁금하신 사항은
        카페 매니저나 회원관리 스탭에게 문의해 주세요
      </StyledText>
    </>
  );
}
const PinkSpan = styled.span`
  font-size: 10pt;
  display: inline-block;
  color: #ff50e2;
`;
const StyledText = styled.div`
  font-size: 10pt;
  font-weight: bold;
  display: block;
  text-align: start;
  width: 100%;
  line-height: 35px;
  margin: 0 auto;
  position: relative;
  left: 8%;
  top: -20pt;
`;

export default GradeDescribe;
