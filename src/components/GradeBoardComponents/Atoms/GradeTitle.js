import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
function GradeTitle() {
  return (
    <>
      <GlobalStyle />
      <PinkSpan>카페의 회원 등급</PinkSpan>
    </>
  );
}
const PinkSpan = styled.span`
  font-size: 13pt;
  font-weight: bold;
  display: inline-block;
  color: #ff50e2;
`;
export default GradeTitle;
